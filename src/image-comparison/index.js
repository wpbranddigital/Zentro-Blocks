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
	ToggleControl,
	SelectControl,
	RangeControl,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const {
		beforeImage,
		beforeImageAlt,
		afterImage,
		afterImageAlt,
		beforeLabel,
		afterLabel,
		showLabels,
		sliderOffset,
		orientation,
		handleColor,
		height,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'gk-image-comparison-block',
	} );

	const containerStyles = {
		'--gk-slider-offset': `${ sliderOffset }%`,
		'--gk-handle-color': handleColor,
		height: `${ height }px`,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Comparison Options', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Slider Orientation', 'zentro-blocks' ) }
						value={ orientation }
						options={ [
							{ label: 'Horizontal (Left/Right)', value: 'horizontal' },
							{ label: 'Vertical (Top/Bottom)', value: 'vertical' },
						] }
						onChange={ ( val ) => setAttributes( { orientation: val } ) }
					/>
					<RangeControl
						label={ __( 'Slider Height (px)', 'zentro-blocks' ) }
						value={ height }
						onChange={ ( val ) => setAttributes( { height: val } ) }
						min={ 200 }
						max={ 800 }
						step={ 10 }
					/>
					<ToggleControl
						label={ __( 'Show Before/After Labels', 'zentro-blocks' ) }
						checked={ showLabels }
						onChange={ ( val ) => setAttributes( { showLabels: val } ) }
					/>
					{ showLabels && (
						<>
							<TextControl
								label={ __( 'Before Label Text', 'zentro-blocks' ) }
								value={ beforeLabel }
								onChange={ ( val ) =>
									setAttributes( { beforeLabel: val } )
								}
							/>
							<TextControl
								label={ __( 'After Label Text', 'zentro-blocks' ) }
								value={ afterLabel }
								onChange={ ( val ) =>
									setAttributes( { afterLabel: val } )
								}
							/>
						</>
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'Image Management', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<div style={ { marginBottom: '12px' } }>
						<label style={ { fontWeight: '600', display: 'block', marginBottom: '4px' } }>
							{ __( 'Before Image', 'zentro-blocks' ) }
						</label>
						{ beforeImage ? (
							<Button
								isDestructive
								variant="secondary"
								onClick={ () =>
									setAttributes( { beforeImage: '', beforeImageAlt: '' } )
								}
							>
								{ __( 'Remove Before Image', 'zentro-blocks' ) }
							</Button>
						) : (
							<MediaPlaceholder
								onSelect={ ( media ) =>
									setAttributes( {
										beforeImage: media.url,
										beforeImageAlt: media.alt || '',
									} )
								}
								allowedTypes={ [ 'image' ] }
								multiple={ false }
								labels={ { title: 'Upload Before Image' } }
							/>
						) }
					</div>

					<div>
						<label style={ { fontWeight: '600', display: 'block', marginBottom: '4px' } }>
							{ __( 'After Image', 'zentro-blocks' ) }
						</label>
						{ afterImage ? (
							<Button
								isDestructive
								variant="secondary"
								onClick={ () =>
									setAttributes( { afterImage: '', afterImageAlt: '' } )
								}
							>
								{ __( 'Remove After Image', 'zentro-blocks' ) }
							</Button>
						) : (
							<MediaPlaceholder
								onSelect={ ( media ) =>
									setAttributes( {
										afterImage: media.url,
										afterImageAlt: media.alt || '',
									} )
								}
								allowedTypes={ [ 'image' ] }
								multiple={ false }
								labels={ { title: 'Upload After Image' } }
							/>
						) }
					</div>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: handleColor,
							onChange: ( val ) => setAttributes( { handleColor: val } ),
							label: __( 'Slider Handle Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ ! beforeImage || ! afterImage ? (
					<div className="gk-image-comparison-placeholder">
						<p>
							{ __(
								'Please upload both a "Before" and an "After" image in the block sidebar or placeholders to begin.',
								'zentro-blocks'
							) }
						</p>
						<div style={ { display: 'flex', gap: '8px', justifyContent: 'center' } }>
							{ ! beforeImage && (
								<MediaPlaceholder
									onSelect={ ( media ) =>
										setAttributes( {
											beforeImage: media.url,
											beforeImageAlt: media.alt || '',
										} )
									}
									allowedTypes={ [ 'image' ] }
									multiple={ false }
									labels={ { title: 'Before Image' } }
								/>
							) }
							{ ! afterImage && (
								<MediaPlaceholder
									onSelect={ ( media ) =>
										setAttributes( {
											afterImage: media.url,
											afterImageAlt: media.alt || '',
										} )
									}
									allowedTypes={ [ 'image' ] }
									multiple={ false }
									labels={ { title: 'After Image' } }
								/>
							) }
						</div>
					</div>
				) : (
					<div
						className={ `gk-image-comparison gk-image-comparison--${ orientation }` }
						style={ containerStyles }
					>
						{ /* After (Base) Image */ }
						<div className="gk-image-comparison__after">
							<img src={ afterImage } alt={ afterImageAlt } />
							{ showLabels && afterLabel && (
								<span className="gk-image-comparison__label gk-image-comparison__label--after">
									{ afterLabel }
								</span>
							) }
						</div>

						{ /* Before (Overlay) Image */ }
						<div className="gk-image-comparison__before">
							<img src={ beforeImage } alt={ beforeImageAlt } />
							{ showLabels && beforeLabel && (
								<span className="gk-image-comparison__label gk-image-comparison__label--before">
									{ beforeLabel }
								</span>
							) }
						</div>

						{ /* Slider Handle Line and Button */ }
						<div className="gk-image-comparison__handle">
							<div className="gk-image-comparison__handle-button">
								<svg
									viewBox="0 0 24 24"
									width="16"
									height="16"
									stroke="currentColor"
									strokeWidth="3"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									style={ {
										transform:
											orientation === 'vertical'
												? 'rotate(90deg)'
												: 'none',
									} }
								>
									<polyline points="15 18 9 12 15 6" />
									<polyline points="9 18 15 12 9 6" />
								</svg>
							</div>
						</div>

						{ /* Interactive Transparent Range Input in Editor */ }
						<input
							type="range"
							className="gk-image-comparison__range"
							min="0"
							max="100"
							value={ sliderOffset }
							onChange={ ( e ) =>
								setAttributes( {
									sliderOffset: parseInt( e.target.value, 10 ),
								} )
							}
						/>
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
