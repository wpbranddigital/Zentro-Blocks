import { registerBlockType, createBlock, rawHandler } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const PANEL = 'zentro-blocks/tab-panel';

/**
 * Build a tab-panel block from a label and an HTML string (legacy content).
 *
 * @param {string} label Tab label.
 * @param {string} html  Legacy HTML/text content.
 * @return {Object} Block.
 */
const makePanel = ( label, html = '' ) => {
	let inner = html ? rawHandler( { HTML: html } ) : [];
	if ( ! inner.length ) {
		inner = [ createBlock( 'core/paragraph', { content: html || '' } ) ];
	}
	return createBlock( PANEL, { label }, inner );
};

function Edit( { attributes, setAttributes, clientId } ) {
	const { tabs, activeColor, borderRadius, alignment } = attributes;
	const [ activeTab, setActiveTab ] = useState( 0 );

	const { panels, selectedPanelIndex, selectedId } = useSelect(
		( select ) => {
			const be = select( blockEditorStore );
			const children = be.getBlocks( clientId );
			const selId = be.getSelectedBlockClientId();
			let idx = -1;
			if ( selId ) {
				const parents = [ selId, ...be.getBlockParents( selId, true ) ];
				idx = children.findIndex( ( c ) =>
					parents.includes( c.clientId )
				);
			}
			return {
				panels: children,
				selectedPanelIndex: idx,
				selectedId: selId,
			};
		},
		[ clientId ]
	);

	const {
		replaceInnerBlocks,
		insertBlock,
		removeBlock,
		moveBlocksUp,
		moveBlocksDown,
		updateBlockAttributes,
		selectBlock,
	} = useDispatch( blockEditorStore );

	// One-time migration: old tabs stored plain text in the `tabs` attribute.
	useEffect( () => {
		if ( panels.length === 0 && Array.isArray( tabs ) && tabs.length ) {
			replaceInnerBlocks(
				clientId,
				tabs.map( ( t, i ) =>
					makePanel( t.label || `Tab ${ i + 1 }`, t.content || '' )
				),
				false
			);
			setAttributes( { tabs: [] } );
		} else if ( panels.length === 0 ) {
			replaceInnerBlocks(
				clientId,
				[
					makePanel( __( 'Tab One', 'zentro-blocks' ) ),
					makePanel( __( 'Tab Two', 'zentro-blocks' ) ),
				],
				false
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	// Selecting a block inside a hidden tab (e.g. via List View) opens that tab.
	useEffect( () => {
		if ( selectedPanelIndex > -1 && selectedPanelIndex !== activeTab ) {
			setActiveTab( selectedPanelIndex );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ selectedId, selectedPanelIndex ] );

	// Keep the active index valid after tabs are removed.
	useEffect( () => {
		if ( activeTab > panels.length - 1 && panels.length ) {
			setActiveTab( panels.length - 1 );
		}
	}, [ panels.length, activeTab ] );

	const blockProps = useBlockProps( { className: 'gk-tabs' } );
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'gk-tabs__panels' },
		{
			allowedBlocks: [ PANEL ],
			orientation: 'horizontal',
			renderAppender: false,
			templateLock: false,
		}
	);

	const addTab = () => {
		const label = sprintf(
			/* translators: %d: tab number */ __( 'Tab %d', 'zentro-blocks' ),
			panels.length + 1
		);
		insertBlock( makePanel( label ), panels.length, clientId, false );
		setActiveTab( panels.length );
	};

	const removeTab = ( index ) => {
		if ( panels[ index ] ) {
			removeBlock( panels[ index ].clientId, false );
			setActiveTab( Math.max( 0, index - 1 ) );
		}
	};

	const moveTab = ( index, dir ) => {
		const id = panels[ index ]?.clientId;
		if ( ! id ) {
			return;
		}
		if ( dir < 0 ) {
			moveBlocksUp( [ id ], clientId );
		} else {
			moveBlocksDown( [ id ], clientId );
		}
		setActiveTab( index + dir );
	};

	const setLabel = ( index, label ) => {
		if ( panels[ index ] ) {
			updateBlockAttributes( panels[ index ].clientId, { label } );
		}
	};

	// Hide every panel except the active one (editor only).
	const hideCss = panels
		.map( ( p, i ) =>
			i === activeTab
				? ''
				: `#block-${ p.clientId }{display:none !important;}`
		)
		.join( '' );

	const justify =
		{ left: 'flex-start', center: 'center', right: 'flex-end' }[
			alignment
		] || 'flex-start';

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Tab Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Tab Alignment', 'zentro-blocks' ) }
						value={ alignment }
						options={ [
							{
								label: __( 'Left', 'zentro-blocks' ),
								value: 'left',
							},
							{
								label: __( 'Center', 'zentro-blocks' ),
								value: 'center',
							},
							{
								label: __( 'Right', 'zentro-blocks' ),
								value: 'right',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { alignment: val } )
						}
					/>
					<RangeControl
						label={ __( 'Border Radius (px)', 'zentro-blocks' ) }
						value={ borderRadius }
						onChange={ ( val ) =>
							setAttributes( { borderRadius: val } )
						}
						min={ 0 }
						max={ 20 }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Tabs', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					{ panels.map( ( panel, index ) => (
						<div
							key={ panel.clientId }
							className="gk-tabs-sidebar-row"
						>
							<TextControl
								label={ sprintf(
									/* translators: %d: tab number */ __(
										'Tab %d label',
										'zentro-blocks'
									),
									index + 1
								) }
								value={ panel.attributes.label }
								onChange={ ( val ) => setLabel( index, val ) }
							/>
							<div className="gk-tabs-sidebar-actions">
								<Button
									size="small"
									variant="tertiary"
									icon="arrow-up-alt2"
									label={ __( 'Move up', 'zentro-blocks' ) }
									disabled={ index === 0 }
									onClick={ () => moveTab( index, -1 ) }
								/>
								<Button
									size="small"
									variant="tertiary"
									icon="arrow-down-alt2"
									label={ __( 'Move down', 'zentro-blocks' ) }
									disabled={ index === panels.length - 1 }
									onClick={ () => moveTab( index, 1 ) }
								/>
								{ panels.length > 1 && (
									<Button
										size="small"
										isDestructive
										variant="tertiary"
										icon="trash"
										label={ __(
											'Remove tab',
											'zentro-blocks'
										) }
										onClick={ () => removeTab( index ) }
									/>
								) }
							</div>
						</div>
					) ) }
					<Button variant="primary" onClick={ addTab }>
						{ __( '+ Add Tab', 'zentro-blocks' ) }
					</Button>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: activeColor,
							onChange: ( val ) =>
								setAttributes( { activeColor: val } ),
							label: __( 'Active Tab Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ hideCss && <style>{ hideCss }</style> }
				<div
					className="gk-tabs__nav"
					role="tablist"
					style={ { justifyContent: justify } }
				>
					{ panels.map( ( panel, index ) => {
						const isActive = index === activeTab;
						return (
							<div
								key={ panel.clientId }
								role="tab"
								tabIndex={ 0 }
								aria-selected={ isActive }
								className={ `gk-tabs__nav-btn${
									isActive ? ' is-active' : ''
								}` }
								style={ {
									borderRadius: `${ borderRadius }px ${ borderRadius }px 0 0`,
									...( isActive
										? {
												borderBottomColor: activeColor,
												color: activeColor,
										  }
										: {} ),
								} }
								onClick={ () => setActiveTab( index ) }
								onKeyDown={ ( e ) => {
									if ( e.key === 'Enter' && ! isActive ) {
										setActiveTab( index );
									}
								} }
							>
								{ isActive ? (
									<RichText
										tagName="span"
										value={ panel.attributes.label }
										onChange={ ( val ) =>
											setLabel( index, val )
										}
										allowedFormats={ [] }
										withoutInteractiveFormatting
										placeholder={ __(
											'Tab label',
											'zentro-blocks'
										) }
										aria-label={ __(
											'Tab label',
											'zentro-blocks'
										) }
									/>
								) : (
									<span>{ panel.attributes.label }</span>
								) }
							</div>
						);
					} ) }
					<Button
						className="gk-tabs__add"
						icon="plus"
						label={ __( 'Add tab', 'zentro-blocks' ) }
						onClick={ addTab }
					/>
				</div>
				<div { ...innerBlocksProps } />
				{ panels[ activeTab ] && (
					<Button
						className="gk-tabs__select-panel"
						variant="link"
						onClick={ () =>
							selectBlock( panels[ activeTab ].clientId )
						}
					>
						{ __( 'Select this tab', 'zentro-blocks' ) }
					</Button>
				) }
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
