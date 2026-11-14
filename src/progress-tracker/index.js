import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const {
		type,
		percentage,
		duration,
		strokeWidth,
		trackColor,
		barColor,
		textColor,
		textSize,
		label,
		labelColor,
		labelSize,
		alignment,
	} = attributes;

	const blockProps = useBlockProps( {
		className: `gk-progress-tracker gk-progress-tracker--${ type }`,
		style: { textAlign: alignment },
	} );

	// Calculations for Circle SVG representation
	const radius = 50 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset =
		circumference - ( percentage / 100 ) * circumference;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Tracker Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Type', 'zentro-blocks' ) }
						value={ type }
						options={ [
							{ label: 'Progress Bar (Linear)', value: 'bar' },
							{
								label: 'Progress Circle (Loop)',
								value: 'circle',
							},
						] }
						onChange={ ( val ) => setAttributes( { type: val } ) }
					/>
					<RangeControl
						label={ __( 'Percentage', 'zentro-blocks' ) }
						value={ percentage }
						onChange={ ( val ) =>
							setAttributes( { percentage: val } )
						}
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={ __( 'Stroke Width (px)', 'zentro-blocks' ) }
						value={ strokeWidth }
						onChange={ ( val ) =>
							setAttributes( { strokeWidth: val } )
						}
						min={ 2 }
						max={ 20 }
					/>
					<RangeControl
						label={ __(
							'Animation Duration (ms)',
							'zentro-blocks'
						) }
						value={ duration }
						onChange={ ( val ) =>
							setAttributes( { duration: val } )
						}
						min={ 500 }
						max={ 4000 }
						step={ 100 }
					/>
					<SelectControl
						label={ __( 'Alignment', 'zentro-blocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						] }
						onChange={ ( val ) =>
							setAttributes( { alignment: val } )
						}
					/>
					<TextControl
						label={ __( 'Label', 'zentro-blocks' ) }
						value={ label }
						onChange={ ( val ) => setAttributes( { label: val } ) }
					/>
					<RangeControl
						label={ __( 'Text Font Size (px)', 'zentro-blocks' ) }
						value={ textSize }
						onChange={ ( val ) =>
							setAttributes( { textSize: val } )
						}
						min={ 14 }
						max={ 48 }
					/>
					<RangeControl
						label={ __( 'Label Font Size (px)', 'zentro-blocks' ) }
						value={ labelSize }
						onChange={ ( val ) =>
							setAttributes( { labelSize: val } )
						}
						min={ 10 }
						max={ 24 }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: barColor,
							onChange: ( val ) =>
								setAttributes( { barColor: val } ),
							label: __(
								'Active Progress Color',
								'zentro-blocks'
							),
						},
						{
							value: trackColor,
							onChange: ( val ) =>
								setAttributes( { trackColor: val } ),
							label: __( 'Background Track BG', 'zentro-blocks' ),
						},
						{
							value: textColor,
							onChange: ( val ) =>
								setAttributes( { textColor: val } ),
							label: __(
								'Percentage Text Color',
								'zentro-blocks'
							),
						},
						{
							value: labelColor,
							onChange: ( val ) =>
								setAttributes( { labelColor: val } ),
							label: __( 'Label Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ type === 'bar' && (
					<div className="gk-progress-tracker__bar-wrapper">
						<div
							className="gk-progress-tracker__label-bar"
							style={ {
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							} }
						>
							{ label && (
								<span
									className="gk-progress-tracker__label"
									style={ {
										color: labelColor,
										fontSize: `${ labelSize }px`,
									} }
								>
									{ label }
								</span>
							) }
							<span
								className="gk-progress-tracker__text"
								style={ {
									color: textColor,
									fontSize: `${ textSize }px`,
									fontWeight: 'bold',
								} }
							>
								{ percentage }%
							</span>
						</div>
						<div
							className="gk-progress-tracker__bar-track"
							style={ {
								background: trackColor,
								height: `${ strokeWidth }px`,
								borderRadius: `${ strokeWidth }px`,
								overflow: 'hidden',
								width: '100%',
							} }
						>
							<div
								className="gk-progress-tracker__bar-fill"
								style={ {
									background: barColor,
									width: `${ percentage }%`,
									height: '100%',
									borderRadius: `${ strokeWidth }px`,
								} }
							/>
						</div>
					</div>
				) }

				{ type === 'circle' && (
					<div
						className="gk-progress-tracker__circle-wrapper"
						style={ {
							display: 'inline-flex',
							flexDirection: 'column',
							alignItems: 'center',
							position: 'relative',
						} }
					>
						<div
							className="gk-progress-tracker__circle-container"
							style={ {
								position: 'relative',
								width: '150px',
								height: '150px',
							} }
						>
							<svg
								viewBox="0 0 100 100"
								style={ {
									transform: 'rotate(-90deg)',
									width: '100%',
									height: '100%',
								} }
							>
								<circle
									cx="50"
									cy="50"
									r={ radius }
									fill="transparent"
									stroke={ trackColor }
									strokeWidth={ strokeWidth }
								/>
								<circle
									cx="50"
									cy="50"
									r={ radius }
									fill="transparent"
									stroke={ barColor }
									strokeWidth={ strokeWidth }
									strokeDasharray={ circumference }
									strokeDashoffset={ strokeDashoffset }
									strokeLinecap="round"
								/>
							</svg>
							<div
								className="gk-progress-tracker__circle-text"
								style={ {
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									color: textColor,
									fontSize: `${ textSize }px`,
									fontWeight: 'bold',
								} }
							>
								{ percentage }%
							</div>
						</div>
						{ label && (
							<div
								className="gk-progress-tracker__label"
								style={ {
									color: labelColor,
									fontSize: `${ labelSize }px`,
									marginTop: '10px',
								} }
							>
								{ label }
							</div>
						) }
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
