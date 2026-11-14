import { registerPlugin } from '@wordpress/plugins';
import { Modal } from '@wordpress/components';
import {
	useState,
	useMemo,
	useEffect,
	useCallback,
	useRef,
} from '@wordpress/element';
import { useDispatch, select } from '@wordpress/data';
import { isUnmodifiedDefaultBlock } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as noticesStore } from '@wordpress/notices';
import { buildBlocks } from './dsl';

// Library data (all patterns + templates) is code-split and fetched only when
// the library is opened (or the toolbar button is hovered).
let kitPromise = null;
const loadKit = () => {
	if ( ! kitPromise ) {
		kitPromise = import(
			/* webpackChunkName: "zentro-kit/library" */ './kit-data'
		).catch( ( error ) => {
			kitPromise = null;
			throw error;
		} );
	}
	return kitPromise;
};

// Cards rendered per "page" (more load on scroll or via the button).
const PAGE_SIZE = { patterns: 6, templates: 4 };
const EMPTY = [];

const Spinner = ( { label } ) => (
	<div className="gk-kit-loading" role="status">
		<span className="gk-kit-spinner" aria-hidden="true" />
		<span>{ label }</span>
	</div>
);
import './editor.scss';

// PluginMoreMenuItem moved from edit-post to editor in WP 6.6.
const PluginMoreMenuItem =
	( window.wp && window.wp.editor && window.wp.editor.PluginMoreMenuItem ) ||
	( window.wp &&
		window.wp.editPost &&
		window.wp.editPost.PluginMoreMenuItem );

const kitData = window.zentroKitData || {};
const previewUrl = ( id ) =>
	kitData.previewBase
		? `${ kitData.previewBase }${ id }.jpg?v=${ kitData.version || '' }`
		: '';

const TOOLBAR_SELECTORS = [
	'.editor-header__toolbar',
	'.edit-post-header-toolbar',
	'.edit-post-header__toolbar',
];

/**
 * Insert generated blocks.
 *
 * - Empty post (or only an empty paragraph selected): replace.
 * - A block is selected: insert after its top-level ancestor (sections are
 *   full-width, so they never get nested inside another block).
 * - Otherwise: append to the end of the post.
 *
 * @param {Array} blocks   Freshly created blocks.
 * @param         dispatch
 */
const insertIntoEditor = ( blocks, dispatch ) => {
	const be = select( blockEditorStore );
	const rootBlocks = be.getBlocks();
	const selectedId = be.getSelectedBlockClientId();

	if ( ! rootBlocks.length ) {
		dispatch.insertBlocks( blocks, 0 );
		return;
	}

	if ( selectedId ) {
		const selected = be.getBlock( selectedId );
		if (
			selected &&
			isUnmodifiedDefaultBlock( selected ) &&
			! be.getBlockRootClientId( selectedId )
		) {
			dispatch.replaceBlocks( selectedId, blocks );
			return;
		}
		const rootId = be.getBlockHierarchyRootClientId( selectedId );
		const index = be.getBlockIndex( rootId );
		dispatch.insertBlocks( blocks, index + 1 );
		return;
	}

	if (
		rootBlocks.length === 1 &&
		isUnmodifiedDefaultBlock( rootBlocks[ 0 ] )
	) {
		dispatch.replaceBlocks( rootBlocks[ 0 ].clientId, blocks );
		return;
	}

	dispatch.insertBlocks( blocks );
};

const SearchIcon = () => (
	<svg
		className="gk-kit-search-icon"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</svg>
);

const InsertIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<line x1="12" y1="5" x2="12" y2="19" />
		<line x1="5" y1="12" x2="19" y2="12" />
	</svg>
);

const PreviewImage = ( { item } ) => {
	const [ failed, setFailed ] = useState( false );
	const src = previewUrl( item.id );
	if ( ! src || failed ) {
		return <div className="gk-kit-shot-fallback">{ item.title }</div>;
	}
	return (
		<img
			className="gk-kit-shot"
			src={ src }
			alt={ sprintf(
				/* translators: %s: pattern name */ __(
					'Preview of %s',
					'zentro-blocks'
				),
				item.title
			) }
			loading="lazy"
			decoding="async"
			onError={ () => setFailed( true ) }
		/>
	);
};

const KitCard = ( { item, isTemplate, onInsert } ) => (
	<div
		className={ `gk-kit-card ${
			isTemplate ? 'gk-kit-card--template' : ''
		}` }
		data-kit-id={ item.id }
	>
		<div className="gk-kit-card-preview">
			<PreviewImage item={ item } />
			<div className="gk-kit-card-overlay">
				<button
					type="button"
					className="gk-kit-card-btn-insert"
					onClick={ () => onInsert( item ) }
				>
					<InsertIcon />
					{ isTemplate
						? __( 'Insert Template', 'zentro-blocks' )
						: __( 'Insert Pattern', 'zentro-blocks' ) }
				</button>
			</div>
		</div>
		<div className="gk-kit-card-info">
			<span className="gk-kit-card-tag">{ item.categoryLabel }</span>
			<h3>{ item.title }</h3>
			<p>{ item.desc }</p>
		</div>
	</div>
);

const ZentroKitLibraryModal = () => {
	const [ isOpen, setIsOpen ] = useState( false );
	const [ searchQuery, setSearchQuery ] = useState( '' );
	const [ activeCategory, setActiveCategory ] = useState( 'all' );
	const [ activeTab, setActiveTab ] = useState( 'patterns' );
	const [ kit, setKit ] = useState( null );
	const [ loadError, setLoadError ] = useState( false );
	const [ limit, setLimit ] = useState( PAGE_SIZE.patterns );
	const [ loadingMore, setLoadingMore ] = useState( false );
	const sentinelRef = useRef( null );
	const bodyRef = useRef( null );

	const { insertBlocks, replaceBlocks, selectBlock } =
		useDispatch( blockEditorStore );
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );

	const openModal = useCallback( () => setIsOpen( true ), [] );

	// Fetch the library chunk the first time the modal opens.
	useEffect( () => {
		if ( ! isOpen || kit ) {
			return;
		}
		let alive = true;
		setLoadError( false );
		loadKit()
			.then( ( mod ) => alive && setKit( mod ) )
			.catch( () => alive && setLoadError( true ) );
		return () => {
			alive = false;
		};
	}, [ isOpen, kit ] );
	const closeModal = () => setIsOpen( false );

	// Toolbar shortcut button (Gutenberg has no slot for the header-left area).
	useEffect( () => {
		const addButton = () => {
			const toolbar = document.querySelector(
				TOOLBAR_SELECTORS.join( ',' )
			);
			if (
				! toolbar ||
				toolbar.querySelector( '.gk-zentro-kit-trigger-btn' )
			) {
				return;
			}
			const btn = document.createElement( 'button' );
			btn.className = 'components-button gk-zentro-kit-trigger-btn';
			btn.type = 'button';
			btn.textContent = __( 'Zentro Patterns', 'zentro-blocks' );
			btn.addEventListener( 'click', ( e ) => {
				e.preventDefault();
				openModal();
			} );
			// Warm up the library chunk on intent.
			btn.addEventListener(
				'mouseenter',
				() => loadKit().catch( () => {} ),
				{ once: true }
			);
			toolbar.appendChild( btn );
		};
		addButton();
		const interval = setInterval( addButton, 1000 );
		return () => {
			clearInterval( interval );
			document
				.querySelectorAll( '.gk-zentro-kit-trigger-btn' )
				.forEach( ( b ) => b.remove() );
		};
	}, [ openModal ] );

	const switchTab = ( tab ) => {
		if ( tab === activeTab ) {
			return;
		}
		setActiveTab( tab );
		setActiveCategory( 'all' );
	};

	const handleInsert = ( item ) => {
		try {
			const blocks = buildBlocks( item.blocks() );
			insertIntoEditor( blocks, { insertBlocks, replaceBlocks } );
			if ( blocks[ 0 ] ) {
				selectBlock( blocks[ 0 ].clientId );
			}
			createSuccessNotice(
				sprintf(
					/* translators: %s: pattern name */ __(
						'“%s” inserted. Replace the demo text and images with your own.',
						'zentro-blocks'
					),
					item.title
				),
				{ type: 'snackbar' }
			);
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( 'Zentro Kit: failed to insert', error );
			createErrorNotice(
				__(
					'Could not insert this design. Please make sure all Zentro blocks are enabled.',
					'zentro-blocks'
				),
				{ type: 'snackbar' }
			);
		}
		closeModal();
	};

	const isTemplates = activeTab === 'templates';
	const pageSize = isTemplates ? PAGE_SIZE.templates : PAGE_SIZE.patterns;
	let source = EMPTY;
	let cats = EMPTY;
	if ( kit ) {
		source = isTemplates ? kit.templates : kit.patterns;
		cats = isTemplates ? kit.templateCategories : kit.categories;
	}

	const labelled = useMemo(
		() =>
			source.map( ( item ) => ( {
				...item,
				categoryLabel:
					( cats.find( ( c ) => c.id === item.category ) || {} )
						.label || item.category,
			} ) ),
		[ source, cats ]
	);

	const filtered = useMemo( () => {
		const q = searchQuery.trim().toLowerCase();
		return labelled.filter( ( item ) => {
			const inCat =
				activeCategory === 'all' || item.category === activeCategory;
			const hay = `${ item.title } ${ item.desc } ${
				item.keywords || ''
			} ${ item.categoryLabel }`.toLowerCase();
			return inCat && ( ! q || hay.includes( q ) );
		} );
	}, [ labelled, searchQuery, activeCategory ] );

	const counts = useMemo( () => {
		const c = { all: source.length };
		source.forEach( ( p ) => {
			c[ p.category ] = ( c[ p.category ] || 0 ) + 1;
		} );
		return c;
	}, [ source ] );

	// Start again from the first page whenever the list changes.
	useEffect( () => {
		setLimit( pageSize );
		setLoadingMore( false );
		if ( bodyRef.current ) {
			bodyRef.current.scrollTop = 0;
		}
	}, [ activeTab, activeCategory, searchQuery, pageSize ] );

	const visible = filtered.slice( 0, limit );
	const hasMore = filtered.length > limit;

	const loadMore = useCallback( () => {
		setLoadingMore( true );
		// Short pause so the loader is visible and images start in batches.
		window.setTimeout( () => {
			setLimit( ( l ) => l + pageSize );
			setLoadingMore( false );
		}, 250 );
	}, [ pageSize ] );

	// Infinite scroll: load the next page when the sentinel scrolls into view.
	useEffect( () => {
		const el = sentinelRef.current;
		if (
			! el ||
			! hasMore ||
			loadingMore ||
			typeof window.IntersectionObserver !== 'function'
		) {
			return;
		}
		const io = new window.IntersectionObserver(
			( entries ) => {
				if ( entries.some( ( e ) => e.isIntersecting ) ) {
					loadMore();
				}
			},
			{ root: bodyRef.current, rootMargin: '200px' }
		);
		io.observe( el );
		return () => io.disconnect();
	}, [ hasMore, loadingMore, loadMore, visible.length ] );

	const menuItem = PluginMoreMenuItem ? (
		<PluginMoreMenuItem icon="grid-view" onClick={ openModal }>
			{ __( 'Zentro Patterns', 'zentro-blocks' ) }
		</PluginMoreMenuItem>
	) : null;

	return (
		<>
			{ menuItem }

			{ isOpen && (
				<Modal
					title={ __(
						'Zentro Patterns & Templates',
						'zentro-blocks'
					) }
					onRequestClose={ closeModal }
					className="gk-zentro-kit-modal"
				>
					<div className="gk-kit-modal-header">
						<div className="gk-kit-logo-area">
							<span className="gk-kit-logo-text">Zentro</span>
						</div>
						<div className="gk-kit-header-tabs" role="tablist">
							<button
								type="button"
								role="tab"
								aria-selected={ isTemplates }
								className={ `gk-kit-header-tab-btn ${
									isTemplates ? 'is-active' : ''
								}` }
								onClick={ () => switchTab( 'templates' ) }
							>
								{ __( 'Page Templates', 'zentro-blocks' ) }
							</button>
							<button
								type="button"
								role="tab"
								aria-selected={ ! isTemplates }
								className={ `gk-kit-header-tab-btn ${
									! isTemplates ? 'is-active' : ''
								}` }
								onClick={ () => switchTab( 'patterns' ) }
							>
								{ __( 'Patterns', 'zentro-blocks' ) }
							</button>
						</div>
						<button
							type="button"
							className="gk-kit-close-btn"
							onClick={ closeModal }
							aria-label={ __( 'Close', 'zentro-blocks' ) }
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								aria-hidden="true"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>
					</div>

					<div className="gk-kit-layout">
						<aside className="gk-kit-sidebar">
							<div className="gk-kit-search-wrap">
								<input
									type="search"
									className="gk-kit-search-input"
									placeholder={ __(
										'Search…',
										'zentro-blocks'
									) }
									aria-label={ __(
										'Search designs',
										'zentro-blocks'
									) }
									value={ searchQuery }
									onChange={ ( e ) =>
										setSearchQuery( e.target.value )
									}
								/>
								<SearchIcon />
							</div>

							<nav
								className="gk-kit-categories"
								aria-label={ __(
									'Categories',
									'zentro-blocks'
								) }
							>
								{ [
									{
										id: 'all',
										label: __( 'All', 'zentro-blocks' ),
									},
									...cats,
								]
									.filter(
										( c ) =>
											c.id === 'all' || counts[ c.id ]
									)
									.map( ( c ) => (
										<button
											key={ c.id }
											type="button"
											aria-pressed={
												activeCategory === c.id
											}
											className={ `gk-kit-category-btn ${
												activeCategory === c.id
													? 'is-active'
													: ''
											}` }
											onClick={ () =>
												setActiveCategory( c.id )
											}
										>
											<span className="gk-kit-cat-name">
												{ c.label }
											</span>
											<span className="gk-kit-cat-count">
												{ counts[ c.id ] || 0 }
											</span>
										</button>
									) ) }
							</nav>
						</aside>

						<main className="gk-kit-body" ref={ bodyRef }>
							{ ! kit && ! loadError && (
								<Spinner
									label={ __(
										'Loading designs…',
										'zentro-blocks'
									) }
								/>
							) }
							{ loadError && (
								<div className="gk-kit-no-results">
									{ __(
										'The design library could not be loaded. Please check your connection and try again.',
										'zentro-blocks'
									) }
									<p>
										<button
											type="button"
											className="gk-kit-load-more"
											onClick={ () => {
												setLoadError( false );
												loadKit()
													.then( setKit )
													.catch( () =>
														setLoadError( true )
													);
											} }
										>
											{ __( 'Retry', 'zentro-blocks' ) }
										</button>
									</p>
								</div>
							) }
							{ kit && (
								<>
									<div
										className={ `gk-kit-grid ${
											isTemplates
												? 'gk-kit-grid--templates'
												: ''
										}` }
									>
										{ visible.length > 0 ? (
											visible.map( ( item ) => (
												<KitCard
													key={ item.id }
													item={ item }
													isTemplate={ isTemplates }
													onInsert={ handleInsert }
												/>
											) )
										) : (
											<div className="gk-kit-no-results">
												{ __(
													'No designs found matching your search.',
													'zentro-blocks'
												) }
											</div>
										) }
									</div>
									{ filtered.length > 0 && (
										<div className="gk-kit-more">
											<span className="gk-kit-more-count">
												{ sprintf(
													/* translators: 1: shown designs, 2: total designs */ __(
														'Showing %1$d of %2$d',
														'zentro-blocks'
													),
													visible.length,
													filtered.length
												) }
											</span>
											{ hasMore &&
												( loadingMore ? (
													<Spinner
														label={ __(
															'Loading more…',
															'zentro-blocks'
														) }
													/>
												) : (
													<button
														type="button"
														className="gk-kit-load-more"
														onClick={ loadMore }
													>
														{ __(
															'Load more',
															'zentro-blocks'
														) }
													</button>
												) ) }
											<div
												ref={ sentinelRef }
												className="gk-kit-sentinel"
												aria-hidden="true"
											/>
										</div>
									) }
								</>
							) }
						</main>
					</div>
				</Modal>
			) }
		</>
	);
};

registerPlugin( 'zentro-kit-library', {
	render: ZentroKitLibraryModal,
} );
