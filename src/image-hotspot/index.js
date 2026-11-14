import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	RangeControl,
	SelectControl,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const { image, imageAlt, activeColor, pinBgColor, trigger, hotspots } =
		attributes;

	const [ selectedPinIndex, setSelectedPinIndex ] = useState( 0 );

	const blockProps = useBlockProps( {
		className: 'gk-image-hotspot-block',
	} );

	const addHotspot = () => {
		const newHotspots = [
			...hotspots,
			{
				x: 50,
				y: 50,
				title: __( 'New Pin', 'zentro-blocks' ),
				content: __( 'Description content…', 'zentro-blocks' ),
				position: 'top',
			},
		];
		setAttributes( { hotspots: newHotspots } );
		setSelectedPinIndex( newHotspots.length - 1 );
	};

	const removeHotspot = ( index ) => {
		const newHotspots = hotspots.filter( ( _, i ) => i !== index );
		setAttributes( { hotspots: newHotspots } );
		setSelectedPinIndex( Math.max( 0, newHotspots.length - 1 ) );
	};

	const updateHotspot = ( index, key, value ) => {
		const newHotspots = hotspots.map( ( hotspot, i ) => {
			if ( i === index ) {
				return { ...hotspot, [ key ]: value };
			}
			return hotspot;
		} );
		setAttributes( { hotspots: newHotspots } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			image: media.url,
			imageAlt: media.alt || '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Image Hotspot Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					{ image && (
						<Button
							isDestructive
							variant="secondary"
							onClick={ () =>
								setAttributes( { image: '', imageAlt: '' } )
							}
							style={ { marginBottom: '16px' } }
						>
							{ __( 'Remove Image', 'zentro-blocks' ) }
						</Button>
					) }

					<SelectControl
						label={ __( 'Tooltip Trigger', 'zentro-blocks' ) }
						value={ trigger }
						options={ [
							{ label: 'Hover', value: 'hover' },
							{ label: 'Click', value: 'click' },
						] }
						onChange={ ( val ) =>
							setAttributes( { trigger: val } )
						}
					/>

					<Button
						variant="primary"
						onClick={ addHotspot }
						style={ { width: '100%', marginBottom: '20px' } }
					>
						{ __( 'Add Hotspot Pin', 'zentro-blocks' ) }
					</Button>

					{ hotspots.length > 0 && (
						<div className="gk-hotspot-list-manager">
							<SelectControl
								label={ __(
									'Edit Hotspot Pin',
									'zentro-blocks'
								) }
								value={ selectedPinIndex }
								options={ hotspots.map( ( h, index ) => ( {
									label: `${ index + 1 }. ${
										h.title || 'Untitled'
									}`,
									value: index,
								} ) ) }
								onChange={ ( val ) =>
									setSelectedPinIndex( parseInt( val ) )
								}
							/>

							{ hotspots[ selectedPinIndex ] && (
								<div
									className="gk-hotspot-card"
									style={ {
										border: '1px solid #e2e8f0',
										padding: '12px',
										borderRadius: '6px',
										background: '#f8fafc',
										marginTop: '10px',
									} }
								>
									<RangeControl
										label={ __(
											'X Position (%)',
											'zentro-blocks'
										) }
										value={ hotspots[ selectedPinIndex ].x }
										onChange={ ( val ) =>
											updateHotspot(
												selectedPinIndex,
												'x',
												val
											)
										}
										min={ 0 }
										max={ 100 }
									/>
									<RangeControl
										label={ __(
											'Y Position (%)',
											'zentro-blocks'
										) }
										value={ hotspots[ selectedPinIndex ].y }
										onChange={ ( val ) =>
											updateHotspot(
												selectedPinIndex,
												'y',
												val
											)
										}
										min={ 0 }
										max={ 100 }
									/>
									<TextControl
										label={ __(
											'Tooltip Title',
											'zentro-blocks'
										) }
										value={
											hotspots[ selectedPinIndex ].title
										}
										onChange={ ( val ) =>
											updateHotspot(
												selectedPinIndex,
												'title',
												val
											)
										}
									/>
									<TextareaControl
										label={ __(
											'Tooltip Content',
											'zentro-blocks'
										) }
										value={
											hotspots[ selectedPinIndex ].content
										}
										onChange={ ( val ) =>
											updateHotspot(
												selectedPinIndex,
												'content',
												val
											)
										}
									/>
									<SelectControl
										label={ __(
											'Tooltip Position',
											'zentro-blocks'
										) }
										value={
											hotspots[ selectedPinIndex ]
												.position
										}
										options={ [
											{ label: 'Top', value: 'top' },
											{
												label: 'Bottom',
												value: 'bottom',
											},
											{ label: 'Left', value: 'left' },
											{ label: 'Right', value: 'right' },
										] }
										onChange={ ( val ) =>
											updateHotspot(
												selectedPinIndex,
												'position',
												val
											)
										}
									/>
									<Button
										isDestructive
										onClick={ () =>
											removeHotspot( selectedPinIndex )
										}
										style={ { marginTop: '10px' } }
									>
										{ __(
											'Delete Hotspot',
											'zentro-blocks'
										) }
									</Button>
								</div>
							) }
						</div>
					) }
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: activeColor,
							onChange: ( val ) =>
								setAttributes( { activeColor: val } ),
							label: __( 'Pin Active Color', 'zentro-blocks' ),
						},
						{
							value: pinBgColor,
							onChange: ( val ) =>
								setAttributes( { pinBgColor: val } ),
							label: __( 'Pin Icon BG Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ ! image && (
					<MediaPlaceholder
						icon="format-image"
						labels={ {
							title: __( 'Hotspot Image', 'zentro-blocks' ),
							instructions: __(
								'Upload an image to start dropping pins.',
								'zentro-blocks'
							),
						} }
						onSelect={ onSelectImage }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
					/>
				) }

				{ image && (
					<div
						className="gk-hotspot-container"
						style={ {
							position: 'relative',
							display: 'inline-block',
							width: '100%',
						} }
					>
						<img
							src={ image }
							alt={ imageAlt }
							style={ {
								display: 'block',
								width: '100%',
								height: 'auto',
							} }
						/>

						{ hotspots.map( ( hotspot, index ) => (
							<div
								key={ index }
								className={ `gk-hotspot-pin-wrapper ${
									selectedPinIndex === index
										? 'is-editing'
										: ''
								}` }
								style={ {
									position: 'absolute',
									left: `${ hotspot.x }%`,
									top: `${ hotspot.y }%`,
									transform: 'translate(-50%, -50%)',
									zIndex: selectedPinIndex === index ? 10 : 5,
								} }
							>
								<button
									type="button"
									className="gk-hotspot-pin"
									onClick={ () =>
										setSelectedPinIndex( index )
									}
									style={ {
										background: pinBgColor,
										borderColor: activeColor,
										cursor: 'pointer',
									} }
								>
									<span
										className="gk-hotspot-pin-icon"
										style={ { background: activeColor } }
									/>
								</button>

								{ /* Simulated Tooltip Bubble in Editor */ }
								<div
									className={ `gk-hotspot-tooltip gk-hotspot-tooltip--${ hotspot.position }` }
								>
									{ hotspot.title && (
										<h4 className="gk-hotspot-tooltip__title">
											{ hotspot.title }
										</h4>
									) }
									{ hotspot.content && (
										<p className="gk-hotspot-tooltip__content">
											{ hotspot.content }
										</p>
									) }
								</div>
							</div>
						) ) }
					</div>
				) }
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
