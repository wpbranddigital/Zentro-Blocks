import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	InnerBlocks,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	TextareaControl,
	ButtonGroup,
	Button,
	Dropdown,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes, clientId } ) {
	const {
		hasLayoutSelected,
		selectedStructure,
		gridTemplateColumns,
		gridTemplateColumnsTablet,
		gridTemplateColumnsMobile,
		layoutType,
		contentWidth,
		heightType,
		overflow,
		flexWrap,
		gridAutoFit,
		gridAutoFill,
		gridTemplateAreas,
		backgroundColor,
		bgType,
		bgGradient,
		backgroundImage,
		bgVideo,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundAttachment,
		overlayColor,
		overlayGradient,
		overlayType,
		overlayOpacity,
		borderRadiusTopLeft,
		borderRadiusTopRight,
		borderRadiusBottomLeft,
		borderRadiusBottomRight,
		borderWidth,
		borderStyle,
		borderColor,
		boxShadow,
		shadowColor,
		shadowX,
		shadowY,
		shadowBlur,
		shadowSpread,
		shapeTopType,
		shapeTopColor,
		shapeTopHeight,
		shapeTopWidth,
		shapeTopFlip,
		shapeBottomType,
		shapeBottomColor,
		shapeBottomHeight,
		shapeBottomWidth,
		shapeBottomFlip,
		entranceAnimation,
		scrollAnimation,
		hoverAnimation,
		visibilityDesktop,
		visibilityTablet,
		visibilityMobile,
		visibilityRole,
		containerLink,
		isSticky,
		zIndex,
		customCss,
		htmlId,
		customClasses,
	} = attributes;

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const innerBlocks = useSelect(
		( select ) => select( 'core/block-editor' ).getBlocks( clientId ),
		[ clientId ]
	);
	const [ activeDevice, setActiveDevice ] = useState( 'desktop' ); // desktop | tablet | mobile

	const selectStructure = ( structure ) => {
		let lType = 'grid';
		let targetCount = 0;
		let attrsToSet = {
			selectedStructure: structure,
			hasLayoutSelected: true,
		};

		const childSettings = {
			hasLayoutSelected: true,
			layoutType: 'block',
			paddingTop: 20,
			paddingBottom: 20,
			paddingLeft: 20,
			paddingRight: 20,
		};

		if ( structure === '1-col' ) {
			lType = 'block';
			targetCount = 1;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 1,
				gridColumnsTablet: 1,
				gridColumnsMobile: 1,
				gridTemplateColumns: '1fr',
				gridTemplateColumnsTablet: '1fr',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === '2-col' ) {
			targetCount = 2;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 2,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: 'repeat(2, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === '3-col' ) {
			targetCount = 3;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 3,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === '4-col' ) {
			targetCount = 4;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 4,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === '2-row' ) {
			targetCount = 2;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 1,
				gridRows: 2,
				gridColumnsTablet: 1,
				gridRowsTablet: 2,
				gridColumnsMobile: 1,
				gridRowsMobile: 2,
				gridTemplateColumns: '1fr',
				gridTemplateColumnsTablet: '1fr',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === 'grid-2x2' ) {
			targetCount = 4;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 2,
				gridRows: 2,
				gridColumnsTablet: 2,
				gridRowsTablet: 2,
				gridColumnsMobile: 1,
				gridRowsMobile: 4,
				gridTemplateColumns: 'repeat(2, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === 'grid-3x2' ) {
			targetCount = 6;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 3,
				gridRows: 2,
				gridColumnsTablet: 2,
				gridRowsTablet: 3,
				gridColumnsMobile: 1,
				gridRowsMobile: 6,
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === 'sidebar-left' ) {
			targetCount = 2;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 2,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: '3fr 7fr',
				gridTemplateColumnsTablet: '3fr 7fr',
				gridTemplateColumnsMobile: '1fr',
				gridTemplateAreas: '',
			};
		} else if ( structure === 'sidebar-right' ) {
			targetCount = 2;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 2,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: '7fr 3fr',
				gridTemplateColumnsTablet: '7fr 3fr',
				gridTemplateColumnsMobile: '1fr',
				gridTemplateAreas: '',
			};
		} else if ( structure === 'custom-grid' ) {
			targetCount = 3;
			attrsToSet = {
				...attrsToSet,
				gridColumns: 3,
				gridColumnsTablet: 2,
				gridColumnsMobile: 1,
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridTemplateColumnsTablet: 'repeat(2, 1fr)',
				gridTemplateColumnsMobile: '1fr',
			};
		} else if ( structure === 'flex' ) {
			lType = 'flex';
			targetCount = 0;
			attrsToSet = {
				...attrsToSet,
				gridTemplateColumns: '',
				gridTemplateColumnsTablet: '',
				gridTemplateColumnsMobile: '',
			};
		} else if ( structure === 'grid' ) {
			lType = 'grid';
			targetCount = 0;
			attrsToSet = {
				...attrsToSet,
				gridTemplateColumns: '',
				gridTemplateColumnsTablet: '',
				gridTemplateColumnsMobile: '',
			};
		} else if ( structure === 'blank' ) {
			lType = 'block';
			targetCount = 0;
			attrsToSet = {
				...attrsToSet,
				gridTemplateColumns: '',
				gridTemplateColumnsTablet: '',
				gridTemplateColumnsMobile: '',
			};
		}

		attrsToSet.layoutType = lType;
		setAttributes( attrsToSet );

		if ( targetCount > 0 ) {
			const currentCount = innerBlocks.length;
			if ( currentCount < targetCount ) {
				const missingCount = targetCount - currentCount;
				const newBlocks = [];
				for ( let i = 0; i < missingCount; i++ ) {
					newBlocks.push( createBlock( 'zentro-blocks/container-block', childSettings ) );
				}
				replaceInnerBlocks( clientId, [ ...innerBlocks, ...newBlocks ] );
			} else if ( currentCount > targetCount ) {
				replaceInnerBlocks( clientId, innerBlocks.slice( 0, targetCount ) );
			}
		}
	};

	// Determine values based on active responsive device
	const getResponsiveVal = ( desktopKey, tabletKey, mobileKey ) => {
		if ( activeDevice === 'mobile' ) {
			return attributes[ mobileKey ];
		}
		if ( activeDevice === 'tablet' ) {
			return attributes[ tabletKey ];
		}
		return attributes[ desktopKey ];
	};

	const setResponsiveVal = ( desktopKey, tabletKey, mobileKey, val ) => {
		if ( activeDevice === 'mobile' ) {
			setAttributes( { [ mobileKey ]: val } );
		} else if ( activeDevice === 'tablet' ) {
			setAttributes( { [ tabletKey ]: val } );
		} else {
			setAttributes( { [ desktopKey ]: val } );
		}
	};

	// Responsive attribute names mapping
	const responsiveFields = {
		maxWidth: [ 'maxWidth', 'maxWidthTablet', 'maxWidthMobile' ],
		height: [ 'height', 'heightTablet', 'heightMobile' ],
		paddingTop: [ 'paddingTop', 'paddingTopTablet', 'paddingTopMobile' ],
		paddingBottom: [
			'paddingBottom',
			'paddingBottomTablet',
			'paddingBottomMobile',
		],
		paddingLeft: [
			'paddingLeft',
			'paddingLeftTablet',
			'paddingLeftMobile',
		],
		paddingRight: [
			'paddingRight',
			'paddingRightTablet',
			'paddingRightMobile',
		],
		marginTop: [ 'marginTop', 'marginTopTablet', 'marginTopMobile' ],
		marginBottom: [
			'marginBottom',
			'marginBottomTablet',
			'marginBottomMobile',
		],
		gap: [ 'gap', 'gapTablet', 'gapMobile' ],
		rowGap: [ 'rowGap', 'rowGapTablet', 'rowGapMobile' ],
		columnGap: [ 'columnGap', 'columnGapTablet', 'columnGapMobile' ],
		gridColumns: [
			'gridColumns',
			'gridColumnsTablet',
			'gridColumnsMobile',
		],
		gridRows: [ 'gridRows', 'gridRowsTablet', 'gridRowsMobile' ],
		flexDirection: [
			'flexDirection',
			'flexDirectionTablet',
			'flexDirectionMobile',
		],
		justifyContent: [
			'justifyContent',
			'justifyContentTablet',
			'justifyContentMobile',
		],
		alignItems: [ 'alignItems', 'alignItemsTablet', 'alignItemsMobile' ],
	};

	const renderResponsiveRange = ( label, key, min = 0, max = 200 ) => {
		const fields = responsiveFields[ key ];
		const val = getResponsiveVal( fields[ 0 ], fields[ 1 ], fields[ 2 ] );
		return (
			<RangeControl
				label={ `${ label } (${ activeDevice.toUpperCase() })` }
				value={ typeof val === 'string' ? parseInt( val ) || 0 : val }
				onChange={ ( newVal ) =>
					setResponsiveVal(
						fields[ 0 ],
						fields[ 1 ],
						fields[ 2 ],
						newVal
					)
				}
				min={ min }
				max={ max }
				allowReset
			/>
		);
	};

	const renderResponsiveSelect = ( label, key, options ) => {
		const fields = responsiveFields[ key ];
		const val = getResponsiveVal( fields[ 0 ], fields[ 1 ], fields[ 2 ] );
		return (
			<SelectControl
				label={ `${ label } (${ activeDevice.toUpperCase() })` }
				value={ val }
				options={ options }
				onChange={ ( newVal ) =>
					setResponsiveVal(
						fields[ 0 ],
						fields[ 1 ],
						fields[ 2 ],
						newVal
					)
				}
			/>
		);
	};

	const renderResponsiveText = ( label, key, help = '' ) => {
		const fields = responsiveFields[ key ];
		const val = getResponsiveVal( fields[ 0 ], fields[ 1 ], fields[ 2 ] );
		return (
			<TextControl
				label={ `${ label } (${ activeDevice.toUpperCase() })` }
				help={ help }
				value={ val }
				onChange={ ( newVal ) =>
					setResponsiveVal(
						fields[ 0 ],
						fields[ 1 ],
						fields[ 2 ],
						newVal
					)
				}
			/>
		);
	};

	// Assemble Container Style for editor view (Simulate active device styling)
	const getEditorContainerStyles = () => {
		const currentMaxWidth = getResponsiveVal(
			'maxWidth',
			'maxWidthTablet',
			'maxWidthMobile'
		);
		let maxWidthVal = '100%';
		if ( contentWidth === 'custom' ) {
			maxWidthVal = currentMaxWidth;
		} else if ( contentWidth === 'boxed' ) {
			maxWidthVal = '1200px';
		}

		const currentHeight = getResponsiveVal(
			'height',
			'heightTablet',
			'heightMobile'
		);
		let heightVal = 'auto';
		if ( heightType === 'custom' ) {
			heightVal = currentHeight;
		} else if ( heightType === 'fit' ) {
			heightVal = '100vh';
		}

		const styles = {
			paddingTop: `${ getResponsiveVal(
				'paddingTop',
				'paddingTopTablet',
				'paddingTopMobile'
			) }px`,
			paddingBottom: `${ getResponsiveVal(
				'paddingBottom',
				'paddingBottomTablet',
				'paddingBottomMobile'
			) }px`,
			paddingLeft: `${ getResponsiveVal(
				'paddingLeft',
				'paddingLeftTablet',
				'paddingLeftMobile'
			) }px`,
			paddingRight: `${ getResponsiveVal(
				'paddingRight',
				'paddingRightTablet',
				'paddingRightMobile'
			) }px`,
			marginTop: `${ getResponsiveVal(
				'marginTop',
				'marginTopTablet',
				'marginTopMobile'
			) }px`,
			marginBottom: `${ getResponsiveVal(
				'marginBottom',
				'marginBottomTablet',
				'marginBottomMobile'
			) }px`,
			maxWidth: maxWidthVal,
			height: heightVal,
			minHeight: heightType === 'min' ? currentHeight : undefined,
			overflow,
			borderRadius: `${ borderRadiusTopLeft }px ${ borderRadiusTopRight }px ${ borderRadiusBottomRight }px ${ borderRadiusBottomLeft }px`,
			zIndex,
		};

		if ( borderWidth > 0 ) {
			styles.borderWidth = `${ borderWidth }px`;
			styles.borderStyle = borderStyle;
			styles.borderColor = borderColor || undefined;
		}

		if ( bgType === 'color' && backgroundColor ) {
			styles.backgroundColor = backgroundColor;
		} else if ( bgType === 'gradient' && bgGradient ) {
			styles.background = bgGradient;
		} else if ( bgType === 'image' && backgroundImage ) {
			styles.backgroundImage = `url(${ backgroundImage })`;
			styles.backgroundPosition = backgroundPosition;
			styles.backgroundSize = backgroundSize;
			styles.backgroundRepeat = backgroundRepeat;
			styles.backgroundAttachment = backgroundAttachment;
		}

		if ( boxShadow ) {
			styles.boxShadow = `${ shadowX }px ${ shadowY }px ${ shadowBlur }px ${ shadowSpread }px ${ shadowColor }`;
		}

		return styles;
	};

	const getEditorContentStyles = () => {
		const styles = {
			width: '100%',
			position: 'relative',
			zIndex: 2,
		};

		return styles;
	};

	const blockProps = useBlockProps( {
		className: `gk-container ${
			! hasLayoutSelected
				? 'gk-container-setup'
				: `gk-container--layout-${ layoutType } ${
						isSticky ? 'gk-container--sticky' : ''
				  } ${ ! visibilityDesktop ? 'gk-hidden-desktop' : '' } ${
						! visibilityTablet ? 'gk-hidden-tablet' : ''
				  } ${ ! visibilityMobile ? 'gk-hidden-mobile' : '' }`
		} ${ customClasses || '' } gk-container-editor-${ clientId }`,
		style: hasLayoutSelected ? getEditorContainerStyles() : {},
	} );

	const renderStructurePicker = ( onSelect = null ) => {
		const structures = [
			{
				name: '1-col',
				title: __( '1 Column', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-col',
				children: <div className="gk-structure-icon__col"></div>
			},
			{
				name: '2-col',
				title: __( '2 Columns (50/50)', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-1',
				children: (
					<>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
					</>
				)
			},
			{
				name: '3-col',
				title: __( '3 Columns', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-1-1',
				children: (
					<>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
					</>
				)
			},
			{
				name: '4-col',
				title: __( '4 Columns', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-1-1-1',
				children: (
					<>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
						<div className="gk-structure-icon__col"></div>
					</>
				)
			},
			{
				name: '2-row',
				title: __( '2 Rows', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-row-2',
				children: (
					<>
						<div className="gk-structure-icon__row"></div>
						<div className="gk-structure-icon__row"></div>
					</>
				)
			},
			{
				name: 'grid-2x2',
				title: __( '2×2 Grid', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-grid-2x2',
				children: (
					<>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
					</>
				)
			},
			{
				name: 'grid-3x2',
				title: __( '3×2 Grid', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-grid-3x2',
				children: (
					<>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
						<div className="gk-structure-icon__cell"></div>
					</>
				)
			},
			{
				name: 'sidebar-left',
				title: __( 'Sidebar Left (30/70)', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-2',
				children: (
					<>
						<div className="gk-structure-icon__col" style={ { flex: 3 } }></div>
						<div className="gk-structure-icon__col" style={ { flex: 7 } }></div>
					</>
				)
			},
			{
				name: 'sidebar-right',
				title: __( 'Sidebar Right (70/30)', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-2',
				children: (
					<>
						<div className="gk-structure-icon__col" style={ { flex: 7 } }></div>
						<div className="gk-structure-icon__col" style={ { flex: 3 } }></div>
					</>
				)
			},
			{
				name: 'custom-grid',
				title: __( 'Custom Grid', 'zentro-blocks' ),
				iconClass: 'gk-structure-icon structure-1-1-1',
				children: (
					<>
						<div className="gk-structure-icon__col" style={ { background: '#ebebeb', borderStyle: 'dashed' } }></div>
						<div className="gk-structure-icon__col" style={ { background: '#ebebeb', borderStyle: 'dashed' } }></div>
						<div className="gk-structure-icon__col" style={ { background: '#ebebeb', borderStyle: 'dashed' } }></div>
					</>
				)
			}
		];

		return (
			<>
				{ structures.map( ( struct ) => {
					const isActive = selectedStructure === struct.name;
					return (
						<button
							key={ struct.name }
							className={ `gk-container-setup__option ${ isActive ? 'is-active' : '' }` }
							onClick={ () => {
								selectStructure( struct.name );
								if ( onSelect ) {
									onSelect();
								}
							} }
							title={ struct.title }
						>
							<div className={ struct.iconClass }>
								{ struct.children }
							</div>
						</button>
					);
				} ) }
			</>
		);
	};

	if ( ! hasLayoutSelected ) {
		return (
			<div { ...blockProps }>
				<div className="gk-container-setup__inner">
					<h3 className="gk-container-setup__title">
						{ __( 'Select your structure', 'zentro-blocks' ) }
					</h3>
					<div className="gk-container-setup__grid">
						{ renderStructurePicker() }
					</div>
					<div className="gk-container-setup__extra">
						<Button
							variant="secondary"
							onClick={ () => selectStructure( 'blank' ) }
						>
							{ __( 'Blank Container', 'zentro-blocks' ) }
						</Button>
						<Button
							variant="secondary"
							onClick={ () => selectStructure( 'flex' ) }
						>
							{ __( 'Flex Container', 'zentro-blocks' ) }
						</Button>
						<Button
							variant="secondary"
							onClick={ () => selectStructure( 'grid' ) }
						>
							{ __( 'Grid Container', 'zentro-blocks' ) }
						</Button>
					</div>
					<div className="gk-container-setup__footer">
						<button
							className="gk-container-setup__skip"
							onClick={ () => {
								setAttributes( {
									hasLayoutSelected: true,
									layoutType: 'block',
								} );
							} }
						>
							{ __( 'Skip', 'zentro-blocks' ) }
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<Dropdown
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								icon="layout"
								label={ __( 'Structure', 'zentro-blocks' ) }
								onClick={ onToggle }
								aria-expanded={ isOpen }
								isPressed={ isOpen }
							/>
						) }
						renderContent={ ( { onClose } ) => (
							<div className="gk-toolbar-layout-picker" style={ { padding: '16px', width: '280px' } }>
								<h4 style={ { margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#1e293b' } }>
									{ __( 'Select Structure', 'zentro-blocks' ) }
								</h4>
								<div className="gk-container-setup__grid">
									{ renderStructurePicker( onClose ) }
								</div>
							</div>
						) }
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={ __( 'Layout Presets', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<div className="gk-sidebar-layout-picker">
						<div className="gk-container-setup__grid">
							{ renderStructurePicker() }
						</div>
					</div>
				</PanelBody>
				{ /* Device Selector Button Group */ }
				<PanelBody
					title={ __( 'Responsive Views', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '10px',
						} }
					>
						<ButtonGroup>
							<Button
								isPrimary={ activeDevice === 'desktop' }
								onClick={ () => setActiveDevice( 'desktop' ) }
							>
								{ __( 'Desktop', 'zentro-blocks' ) }
							</Button>
							<Button
								isPrimary={ activeDevice === 'tablet' }
								onClick={ () => setActiveDevice( 'tablet' ) }
							>
								{ __( 'Tablet', 'zentro-blocks' ) }
							</Button>
							<Button
								isPrimary={ activeDevice === 'mobile' }
								onClick={ () => setActiveDevice( 'mobile' ) }
							>
								{ __( 'Mobile', 'zentro-blocks' ) }
							</Button>
						</ButtonGroup>
					</div>
				</PanelBody>

				{ /* 2. Layout Panel */ }
				<PanelBody
					title={ __( 'Layout Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Layout Type', 'zentro-blocks' ) }
						value={ layoutType }
						options={ [
							{ label: 'Block (Standard)', value: 'block' },
							{ label: 'Flexbox', value: 'flex' },
							{ label: 'CSS Grid', value: 'grid' },
						] }
						onChange={ ( val ) =>
							setAttributes( { layoutType: val } )
						}
					/>

					<SelectControl
						label={ __( 'Content Width', 'zentro-blocks' ) }
						value={ contentWidth }
						options={ [
							{ label: 'Boxed (1200px)', value: 'boxed' },
							{ label: 'Full Width (100%)', value: 'full' },
							{ label: 'Wide Width', value: 'wide' },
							{ label: 'Custom Width', value: 'custom' },
						] }
						onChange={ ( val ) =>
							setAttributes( { contentWidth: val } )
						}
					/>

					{ contentWidth === 'custom' &&
						renderResponsiveText(
							__( 'Container Max Width', 'zentro-blocks' ),
							'maxWidth',
							__( 'E.g., 100%, 800px, 60rem', 'zentro-blocks' )
						) }

					<SelectControl
						label={ __( 'Height Type', 'zentro-blocks' ) }
						value={ heightType }
						options={ [
							{ label: 'Auto', value: 'auto' },
							{ label: 'Min Height', value: 'min' },
							{ label: 'Fit Screen (100vh)', value: 'fit' },
							{ label: 'Custom Height', value: 'custom' },
						] }
						onChange={ ( val ) =>
							setAttributes( { heightType: val } )
						}
					/>

					{ ( heightType === 'custom' || heightType === 'min' ) &&
						renderResponsiveText(
							__( 'Height Value', 'zentro-blocks' ),
							'height',
							__( 'E.g., 400px, 50vh, 30rem', 'zentro-blocks' )
						) }

					<SelectControl
						label={ __( 'Overflow', 'zentro-blocks' ) }
						value={ overflow }
						options={ [
							{ label: 'Visible', value: 'visible' },
							{ label: 'Hidden', value: 'hidden' },
							{ label: 'Auto', value: 'auto' },
						] }
						onChange={ ( val ) =>
							setAttributes( { overflow: val } )
						}
					/>
				</PanelBody>

				{ /* 3. Flexbox Controls */ }
				{ layoutType === 'flex' && (
					<PanelBody
						title={ __( 'Flexbox Controls', 'zentro-blocks' ) }
						initialOpen={ false }
					>
						{ renderResponsiveSelect(
							__( 'Direction', 'zentro-blocks' ),
							'flexDirection',
							[
								{ label: 'Row (Horizontal)', value: 'row' },
								{ label: 'Column (Vertical)', value: 'column' },
								{ label: 'Row Reverse', value: 'row-reverse' },
								{
									label: 'Column Reverse',
									value: 'column-reverse',
								},
							]
						) }

						{ renderResponsiveSelect(
							__( 'Justify Content', 'zentro-blocks' ),
							'justifyContent',
							[
								{ label: 'Start', value: 'flex-start' },
								{ label: 'Center', value: 'center' },
								{ label: 'End', value: 'flex-end' },
								{
									label: 'Space Between',
									value: 'space-between',
								},
								{
									label: 'Space Around',
									value: 'space-around',
								},
								{
									label: 'Space Evenly',
									value: 'space-evenly',
								},
							]
						) }

						{ renderResponsiveSelect(
							__( 'Align Items', 'zentro-blocks' ),
							'alignItems',
							[
								{ label: 'Start', value: 'flex-start' },
								{ label: 'Center', value: 'center' },
								{ label: 'End', value: 'flex-end' },
								{ label: 'Stretch', value: 'stretch' },
							]
						) }

						<SelectControl
							label={ __( 'Wrap', 'zentro-blocks' ) }
							value={ flexWrap }
							options={ [
								{ label: 'Wrap', value: 'wrap' },
								{ label: 'No Wrap', value: 'nowrap' },
							] }
							onChange={ ( val ) =>
								setAttributes( { flexWrap: val } )
							}
						/>

						{ renderResponsiveRange(
							__( 'Gap (px)', 'zentro-blocks' ),
							'gap',
							0,
							100
						) }
					</PanelBody>
				) }

				{ /* 4. Grid Controls */ }
				{ layoutType === 'grid' && (
					<PanelBody
						title={ __( 'Grid Controls', 'zentro-blocks' ) }
						initialOpen={ false }
					>
						{ renderResponsiveRange(
							__( 'Grid Columns (1-12)', 'zentro-blocks' ),
							'gridColumns',
							1,
							12
						) }
						{ renderResponsiveRange(
							__( 'Grid Rows (1-12)', 'zentro-blocks' ),
							'gridRows',
							1,
							12
						) }

						{ renderResponsiveRange(
							__( 'Row Gap (px)', 'zentro-blocks' ),
							'rowGap',
							0,
							100
						) }
						{ renderResponsiveRange(
							__( 'Column Gap (px)', 'zentro-blocks' ),
							'columnGap',
							0,
							100
						) }

						<ToggleControl
							label={ __( 'Auto Fit Columns', 'zentro-blocks' ) }
							checked={ gridAutoFit }
							onChange={ ( val ) =>
								setAttributes( { gridAutoFit: val } )
							}
						/>

						<ToggleControl
							label={ __( 'Auto Fill Columns', 'zentro-blocks' ) }
							checked={ gridAutoFill }
							onChange={ ( val ) =>
								setAttributes( { gridAutoFill: val } )
							}
						/>

						<TextareaControl
							label={ __(
								'Grid Template Areas (Advanced)',
								'zentro-blocks'
							) }
							help={ __(
								'E.g., "header header" "sidebar content"',
								'zentro-blocks'
							) }
							value={ gridTemplateAreas }
							onChange={ ( val ) =>
								setAttributes( { gridTemplateAreas: val } )
							}
						/>
					</PanelBody>
				) }

				{ /* 6. Background System */ }
				<PanelBody
					title={ __( 'Background System', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Background Type', 'zentro-blocks' ) }
						value={ bgType }
						options={ [
							{ label: 'Color', value: 'color' },
							{ label: 'Gradient', value: 'gradient' },
							{ label: 'Image', value: 'image' },
							{ label: 'Video (External Link)', value: 'video' },
						] }
						onChange={ ( val ) => setAttributes( { bgType: val } ) }
					/>

					{ bgType === 'gradient' && (
						<TextControl
							label={ __( 'CSS Gradient Code', 'zentro-blocks' ) }
							help={ __(
								'E.g., linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
								'zentro-blocks'
							) }
							value={ bgGradient }
							onChange={ ( val ) =>
								setAttributes( { bgGradient: val } )
							}
						/>
					) }

					{ bgType === 'image' && (
						<>
							<TextControl
								label={ __(
									'Background Image URL',
									'zentro-blocks'
								) }
								value={ backgroundImage }
								onChange={ ( val ) =>
									setAttributes( { backgroundImage: val } )
								}
							/>
							<SelectControl
								label={ __( 'Image Size', 'zentro-blocks' ) }
								value={ backgroundSize }
								options={ [
									{ label: 'Cover', value: 'cover' },
									{ label: 'Contain', value: 'contain' },
									{ label: 'Auto', value: 'auto' },
								] }
								onChange={ ( val ) =>
									setAttributes( { backgroundSize: val } )
								}
							/>
							<SelectControl
								label={ __(
									'Image Position',
									'zentro-blocks'
								) }
								value={ backgroundPosition }
								options={ [
									{
										label: 'Center Center',
										value: 'center center',
									},
									{
										label: 'Top Center',
										value: 'top center',
									},
									{
										label: 'Bottom Center',
										value: 'bottom center',
									},
									{
										label: 'Left Center',
										value: 'left center',
									},
									{
										label: 'Right Center',
										value: 'right center',
									},
								] }
								onChange={ ( val ) =>
									setAttributes( { backgroundPosition: val } )
								}
							/>
							<SelectControl
								label={ __( 'Image Repeat', 'zentro-blocks' ) }
								value={ backgroundRepeat }
								options={ [
									{ label: 'No Repeat', value: 'no-repeat' },
									{ label: 'Repeat', value: 'repeat' },
									{ label: 'Repeat X', value: 'repeat-x' },
									{ label: 'Repeat Y', value: 'repeat-y' },
								] }
								onChange={ ( val ) =>
									setAttributes( { backgroundRepeat: val } )
								}
							/>
							<SelectControl
								label={ __( 'Attachment', 'zentro-blocks' ) }
								value={ backgroundAttachment }
								options={ [
									{ label: 'Scroll', value: 'scroll' },
									{
										label: 'Fixed (Parallax effect)',
										value: 'fixed',
									},
								] }
								onChange={ ( val ) =>
									setAttributes( {
										backgroundAttachment: val,
									} )
								}
							/>
						</>
					) }

					{ bgType === 'video' && (
						<TextControl
							label={ __(
								'Video File URL (mp4)',
								'zentro-blocks'
							) }
							value={ bgVideo }
							onChange={ ( val ) =>
								setAttributes( { bgVideo: val } )
							}
						/>
					) }

					{ /* Overlay Options */ }
					<hr />
					<h4 style={ { margin: '15px 0 5px' } }>
						{ __( 'Background Overlay', 'zentro-blocks' ) }
					</h4>
					<SelectControl
						label={ __( 'Overlay Type', 'zentro-blocks' ) }
						value={ overlayType }
						options={ [
							{ label: 'Color', value: 'color' },
							{ label: 'Gradient', value: 'gradient' },
						] }
						onChange={ ( val ) =>
							setAttributes( { overlayType: val } )
						}
					/>

					{ overlayType === 'color' ? (
						<TextControl
							label={ __(
								'Overlay Color (hex/rgb)',
								'zentro-blocks'
							) }
							value={ overlayColor }
							onChange={ ( val ) =>
								setAttributes( { overlayColor: val } )
							}
						/>
					) : (
						<TextControl
							label={ __(
								'Overlay Gradient CSS',
								'zentro-blocks'
							) }
							value={ overlayGradient }
							onChange={ ( val ) =>
								setAttributes( { overlayGradient: val } )
							}
						/>
					) }

					<RangeControl
						label={ __( 'Overlay Opacity (%)', 'zentro-blocks' ) }
						value={ overlayOpacity }
						onChange={ ( val ) =>
							setAttributes( { overlayOpacity: val } )
						}
						min={ 0 }
						max={ 100 }
					/>
				</PanelBody>

				{ /* 7. Spacing Controls */ }
				<PanelBody
					title={ __( 'Spacing Controls', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					{ renderResponsiveRange(
						__( 'Padding Top (px)', 'zentro-blocks' ),
						'paddingTop',
						0,
						200
					) }
					{ renderResponsiveRange(
						__( 'Padding Bottom (px)', 'zentro-blocks' ),
						'paddingBottom',
						0,
						200
					) }
					{ renderResponsiveRange(
						__( 'Padding Left (px)', 'zentro-blocks' ),
						'paddingLeft',
						0,
						150
					) }
					{ renderResponsiveRange(
						__( 'Padding Right (px)', 'zentro-blocks' ),
						'paddingRight',
						0,
						150
					) }

					<hr />

					{ renderResponsiveRange(
						__( 'Margin Top (px)', 'zentro-blocks' ),
						'marginTop',
						-100,
						200
					) }
					{ renderResponsiveRange(
						__( 'Margin Bottom (px)', 'zentro-blocks' ),
						'marginBottom',
						-100,
						200
					) }
				</PanelBody>

				{ /* 8. Border & Shadow */ }
				<PanelBody
					title={ __( 'Border & Shadow', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<h4>
						{ __( 'Individual Corner Radius', 'zentro-blocks' ) }
					</h4>
					<RangeControl
						label={ __( 'Top Left (px)', 'zentro-blocks' ) }
						value={ borderRadiusTopLeft }
						onChange={ ( val ) =>
							setAttributes( { borderRadiusTopLeft: val } )
						}
						min={ 0 }
						max={ 150 }
					/>
					<RangeControl
						label={ __( 'Top Right (px)', 'zentro-blocks' ) }
						value={ borderRadiusTopRight }
						onChange={ ( val ) =>
							setAttributes( { borderRadiusTopRight: val } )
						}
						min={ 0 }
						max={ 150 }
					/>
					<RangeControl
						label={ __( 'Bottom Right (px)', 'zentro-blocks' ) }
						value={ borderRadiusBottomRight }
						onChange={ ( val ) =>
							setAttributes( { borderRadiusBottomRight: val } )
						}
						min={ 0 }
						max={ 150 }
					/>
					<RangeControl
						label={ __( 'Bottom Left (px)', 'zentro-blocks' ) }
						value={ borderRadiusBottomLeft }
						onChange={ ( val ) =>
							setAttributes( { borderRadiusBottomLeft: val } )
						}
						min={ 0 }
						max={ 150 }
					/>

					<hr />

					<RangeControl
						label={ __( 'Border Width (px)', 'zentro-blocks' ) }
						value={ borderWidth }
						onChange={ ( val ) =>
							setAttributes( { borderWidth: val } )
						}
						min={ 0 }
						max={ 20 }
					/>

					{ borderWidth > 0 && (
						<>
							<SelectControl
								label={ __( 'Border Style', 'zentro-blocks' ) }
								value={ borderStyle }
								options={ [
									{ label: 'Solid', value: 'solid' },
									{ label: 'Dashed', value: 'dashed' },
									{ label: 'Dotted', value: 'dotted' },
									{ label: 'Double', value: 'double' },
								] }
								onChange={ ( val ) =>
									setAttributes( { borderStyle: val } )
								}
							/>
							<TextControl
								label={ __( 'Border Color', 'zentro-blocks' ) }
								value={ borderColor }
								onChange={ ( val ) =>
									setAttributes( { borderColor: val } )
								}
							/>
						</>
					) }

					<hr />

					<ToggleControl
						label={ __( 'Enable Box Shadow', 'zentro-blocks' ) }
						checked={ boxShadow }
						onChange={ ( val ) =>
							setAttributes( { boxShadow: val } )
						}
					/>

					{ boxShadow && (
						<>
							<TextControl
								label={ __( 'Shadow Color', 'zentro-blocks' ) }
								value={ shadowColor }
								onChange={ ( val ) =>
									setAttributes( { shadowColor: val } )
								}
							/>
							<RangeControl
								label={ __(
									'Shadow X Offset',
									'zentro-blocks'
								) }
								value={ shadowX }
								onChange={ ( val ) =>
									setAttributes( { shadowX: val } )
								}
								min={ -50 }
								max={ 50 }
							/>
							<RangeControl
								label={ __(
									'Shadow Y Offset',
									'zentro-blocks'
								) }
								value={ shadowY }
								onChange={ ( val ) =>
									setAttributes( { shadowY: val } )
								}
								min={ -50 }
								max={ 50 }
							/>
							<RangeControl
								label={ __(
									'Shadow Blur Radius',
									'zentro-blocks'
								) }
								value={ shadowBlur }
								onChange={ ( val ) =>
									setAttributes( { shadowBlur: val } )
								}
								min={ 0 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Shadow Spread', 'zentro-blocks' ) }
								value={ shadowSpread }
								onChange={ ( val ) =>
									setAttributes( { shadowSpread: val } )
								}
								min={ -50 }
								max={ 50 }
							/>
						</>
					) }
				</PanelBody>

				{ /* 9. Shape Divider */ }
				<PanelBody
					title={ __( 'Shape Divider', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<h4>{ __( 'Top Shape', 'zentro-blocks' ) }</h4>
					<SelectControl
						label={ __( 'Shape Type', 'zentro-blocks' ) }
						value={ shapeTopType }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Wave', value: 'wave' },
							{ label: 'Curve', value: 'curve' },
							{ label: 'Triangle', value: 'triangle' },
							{ label: 'Tilt', value: 'tilt' },
							{ label: 'Zigzag', value: 'zigzag' },
						] }
						onChange={ ( val ) =>
							setAttributes( { shapeTopType: val } )
						}
					/>
					{ shapeTopType !== 'none' && (
						<>
							<TextControl
								label={ __( 'Shape Color', 'zentro-blocks' ) }
								value={ shapeTopColor }
								onChange={ ( val ) =>
									setAttributes( { shapeTopColor: val } )
								}
							/>
							<RangeControl
								label={ __(
									'Shape Height (px)',
									'zentro-blocks'
								) }
								value={ shapeTopHeight }
								onChange={ ( val ) =>
									setAttributes( { shapeTopHeight: val } )
								}
								min={ 20 }
								max={ 300 }
							/>
							<RangeControl
								label={ __(
									'Shape Width (%)',
									'zentro-blocks'
								) }
								value={ shapeTopWidth }
								onChange={ ( val ) =>
									setAttributes( { shapeTopWidth: val } )
								}
								min={ 50 }
								max={ 200 }
							/>
							<ToggleControl
								label={ __(
									'Flip Shape Horizontally',
									'zentro-blocks'
								) }
								checked={ shapeTopFlip }
								onChange={ ( val ) =>
									setAttributes( { shapeTopFlip: val } )
								}
							/>
						</>
					) }

					<hr />

					<h4>{ __( 'Bottom Shape', 'zentro-blocks' ) }</h4>
					<SelectControl
						label={ __( 'Shape Type', 'zentro-blocks' ) }
						value={ shapeBottomType }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Wave', value: 'wave' },
							{ label: 'Curve', value: 'curve' },
							{ label: 'Triangle', value: 'triangle' },
							{ label: 'Tilt', value: 'tilt' },
							{ label: 'Zigzag', value: 'zigzag' },
						] }
						onChange={ ( val ) =>
							setAttributes( { shapeBottomType: val } )
						}
					/>
					{ shapeBottomType !== 'none' && (
						<>
							<TextControl
								label={ __( 'Shape Color', 'zentro-blocks' ) }
								value={ shapeBottomColor }
								onChange={ ( val ) =>
									setAttributes( { shapeBottomColor: val } )
								}
							/>
							<RangeControl
								label={ __(
									'Shape Height (px)',
									'zentro-blocks'
								) }
								value={ shapeBottomHeight }
								onChange={ ( val ) =>
									setAttributes( { shapeBottomHeight: val } )
								}
								min={ 20 }
								max={ 300 }
							/>
							<RangeControl
								label={ __(
									'Shape Width (%)',
									'zentro-blocks'
								) }
								value={ shapeBottomWidth }
								onChange={ ( val ) =>
									setAttributes( { shapeBottomWidth: val } )
								}
								min={ 50 }
								max={ 200 }
							/>
							<ToggleControl
								label={ __(
									'Flip Shape Horizontally',
									'zentro-blocks'
								) }
								checked={ shapeBottomFlip }
								onChange={ ( val ) =>
									setAttributes( { shapeBottomFlip: val } )
								}
							/>
						</>
					) }
				</PanelBody>

				{ /* 10. Animation */ }
				<PanelBody
					title={ __( 'Animation System', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Entrance Animation', 'zentro-blocks' ) }
						value={ entranceAnimation }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Fade In', value: 'fade' },
							{ label: 'Slide Up', value: 'slide' },
							{ label: 'Zoom In', value: 'zoom' },
						] }
						onChange={ ( val ) =>
							setAttributes( { entranceAnimation: val } )
						}
					/>

					<SelectControl
						label={ __( 'Scroll Animation', 'zentro-blocks' ) }
						value={ scrollAnimation }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Fade In on Scroll', value: 'fade-in' },
							{ label: 'Scale on Scroll', value: 'scale' },
							{ label: 'Parallax Background', value: 'parallax' },
						] }
						onChange={ ( val ) =>
							setAttributes( { scrollAnimation: val } )
						}
					/>

					<SelectControl
						label={ __( 'Hover Animation', 'zentro-blocks' ) }
						value={ hoverAnimation }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Grow', value: 'grow' },
							{ label: 'Float', value: 'float' },
							{ label: 'Rotate', value: 'rotate' },
						] }
						onChange={ ( val ) =>
							setAttributes( { hoverAnimation: val } )
						}
					/>
				</PanelBody>

				{ /* 11. Visibility Controls */ }
				<PanelBody
					title={ __( 'Visibility Controls', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Show on Desktop', 'zentro-blocks' ) }
						checked={ visibilityDesktop }
						onChange={ ( val ) =>
							setAttributes( { visibilityDesktop: val } )
						}
					/>
					<ToggleControl
						label={ __( 'Show on Tablet', 'zentro-blocks' ) }
						checked={ visibilityTablet }
						onChange={ ( val ) =>
							setAttributes( { visibilityTablet: val } )
						}
					/>
					<ToggleControl
						label={ __( 'Show on Mobile', 'zentro-blocks' ) }
						checked={ visibilityMobile }
						onChange={ ( val ) =>
							setAttributes( { visibilityMobile: val } )
						}
					/>

					<hr />

					<SelectControl
						label={ __( 'User Role Visibility', 'zentro-blocks' ) }
						value={ visibilityRole }
						options={ [
							{ label: 'All Users', value: 'all' },
							{
								label: 'Logged Out (Guests Only)',
								value: 'guest',
							},
							{
								label: 'Logged In Users Only',
								value: 'logged-in',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { visibilityRole: val } )
						}
					/>
				</PanelBody>

				{ /* 12. Advanced Features */ }
				<PanelBody
					title={ __( 'Advanced Features', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Container Link URL', 'zentro-blocks' ) }
						help={ __(
							'Makes the entire container clickable.',
							'zentro-blocks'
						) }
						value={ containerLink }
						onChange={ ( val ) =>
							setAttributes( { containerLink: val } )
						}
					/>

					<ToggleControl
						label={ __(
							'Sticky Container (Top)',
							'zentro-blocks'
						) }
						checked={ isSticky }
						onChange={ ( val ) =>
							setAttributes( { isSticky: val } )
						}
					/>

					<RangeControl
						label={ __( 'Z Index', 'zentro-blocks' ) }
						value={ zIndex }
						onChange={ ( val ) => setAttributes( { zIndex: val } ) }
						min={ -10 }
						max={ 1000 }
					/>

					<TextareaControl
						label={ __( 'Custom CSS', 'zentro-blocks' ) }
						value={ customCss }
						onChange={ ( val ) =>
							setAttributes( { customCss: val } )
						}
					/>

					<TextControl
						label={ __( 'HTML Anchor (ID)', 'zentro-blocks' ) }
						value={ htmlId }
						onChange={ ( val ) => setAttributes( { htmlId: val } ) }
					/>

					<TextControl
						label={ __(
							'Additional CSS Classes',
							'zentro-blocks'
						) }
						value={ customClasses }
						onChange={ ( val ) =>
							setAttributes( { customClasses: val } )
						}
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( val ) =>
								setAttributes( { backgroundColor: val } ),
							label: __( 'Background Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps } id={ htmlId || undefined }>
				{ /* Shape Divider Top Render (Simulated in Editor) */ }
				{ shapeTopType !== 'none' && (
					<div
						className={ `gk-shape-divider gk-shape-divider--top ${
							shapeTopFlip ? 'gk-shape-divider--flip' : ''
						}` }
						style={ {
							height: `${ shapeTopHeight }px`,
							fill: shapeTopColor,
						} }
					>
						<svg
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
							style={ { width: `${ shapeTopWidth }%` } }
						>
							{ shapeTopType === 'curve' && (
								<path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" />
							) }
							{ shapeTopType === 'wave' && (
								<path d="M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1200,90 1200,90 L1200,120 L0,120 Z" />
							) }
							{ shapeTopType === 'triangle' && (
								<path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z" />
							) }
							{ shapeTopType === 'tilt' && (
								<path d="M0,0 L1200,100 L1200,120 L0,120 Z" />
							) }
							{ shapeTopType === 'zigzag' && (
								<path d="M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z" />
							) }
						</svg>
					</div>
				) }

				{ /* Background Overlay Rendering */ }
				{ bgType === 'image' && ( overlayColor || overlayGradient ) && (
					<div
						className="gk-container-overlay"
						style={ {
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background:
								overlayType === 'color'
									? overlayColor
									: overlayGradient,
							opacity: overlayOpacity / 100,
							zIndex: 1,
							pointerEvents: 'none',
						} }
					/>
				) }

				{ /* CSS Injection to force the Gutenberg internal block list wrapper to flex/grid exactly like the frontend */ }
				<style>{ `
					.gk-container-editor-${ clientId } > .gk-container-content > .block-editor-inner-blocks > .block-editor-block-list__layout {
						display: ${
							layoutType === 'flex' || layoutType === 'grid'
								? layoutType
								: 'block'
						} !important;
						${
							layoutType === 'flex'
								? `
							flex-direction: ${ getResponsiveVal(
								'flexDirection',
								'flexDirectionTablet',
								'flexDirectionMobile'
							) } !important;
							justify-content: ${ getResponsiveVal(
								'justifyContent',
								'justifyContentTablet',
								'justifyContentMobile'
							) } !important;
							align-items: ${ getResponsiveVal(
								'alignItems',
								'alignItemsTablet',
								'alignItemsMobile'
							) } !important;
							flex-wrap: ${ flexWrap } !important;
							gap: ${ getResponsiveVal( 'gap', 'gapTablet', 'gapMobile' ) }px !important;
						`
								: ''
						}
						${
							layoutType === 'grid'
								? `
							grid-template-columns: ${
								gridTemplateAreas
									? 'none'
									: ( getResponsiveVal(
											'gridTemplateColumns',
											'gridTemplateColumnsTablet',
											'gridTemplateColumnsMobile'
									  ) || `repeat(${ getResponsiveVal(
											'gridColumns',
											'gridColumnsTablet',
											'gridColumnsMobile'
									  ) }, 1fr)` )
							} !important;
							grid-template-rows: ${
								gridTemplateAreas
									? 'none'
									: `repeat(${ getResponsiveVal(
											'gridRows',
											'gridRowsTablet',
											'gridRowsMobile'
									  ) }, auto)`
							} !important;
							${
								gridTemplateAreas
									? `grid-template-areas: ${ gridTemplateAreas } !important;`
									: ''
							}
							row-gap: ${ getResponsiveVal(
								'rowGap',
								'rowGapTablet',
								'rowGapMobile'
							) }px !important;
							column-gap: ${ getResponsiveVal(
								'columnGap',
								'columnGapTablet',
								'columnGapMobile'
							) }px !important;
						`
								: ''
						}
					}
				` }</style>

				{ /* Inner content with flex/grid layouts applied */ }
				<div
					className="gk-container-content"
					style={ getEditorContentStyles() }
				>
					<InnerBlocks />
				</div>

				{ /* Shape Divider Bottom Render (Simulated in Editor) */ }
				{ shapeBottomType !== 'none' && (
					<div
						className={ `gk-shape-divider gk-shape-divider--bottom ${
							shapeBottomFlip ? 'gk-shape-divider--flip' : ''
						}` }
						style={ {
							height: `${ shapeBottomHeight }px`,
							fill: shapeBottomColor,
						} }
					>
						<svg
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
							style={ { width: `${ shapeBottomWidth }%` } }
						>
							{ shapeBottomType === 'curve' && (
								<path d="M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z" />
							) }
							{ shapeBottomType === 'wave' && (
								<path d="M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60 C1150,10 1200,30 1200,30 L1200,0 L0,0 Z" />
							) }
							{ shapeBottomType === 'triangle' && (
								<path d="M0,120 L600,20 L1200,120 L1200,0 L0,0 Z" />
							) }
							{ shapeBottomType === 'tilt' && (
								<path d="M0,120 L1200,20 L1200,0 L0,0 Z" />
							) }
							{ shapeBottomType === 'zigzag' && (
								<path d="M0,120 L100,60 L200,120 L300,60 L400,120 L500,60 L600,120 L700,60 L800,120 L900,60 L1000,120 L1100,60 L1200,120 L1200,0 L0,0 Z" />
							) }
						</svg>
					</div>
				) }
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
