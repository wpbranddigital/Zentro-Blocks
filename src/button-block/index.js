import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

// SVG Icons Lookup
const getIconSvg = ( name ) => {
	switch ( name ) {
		case 'arrow':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
					<path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'check':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
					<path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'cart':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
					<path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'download':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'envelope':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M22 6l-10 7L2 6" />
				</svg>
			);
		case 'heart':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
				</svg>
			);
		case 'star':
			return (
				<svg className="gk-btn-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
				</svg>
			);
		default:
			return null;
	}
};

function Edit( { attributes, setAttributes } ) {
	const {
		text,
		url,
		linkTarget,
		buttonSize,
		customPaddingTop,
		customPaddingBottom,
		customPaddingLeft,
		customPaddingRight,
		fontSize,
		borderRadius,
		alignment,
		normalBg,
		normalText,
		hoverBg,
		hoverText,
		shadowType,
		animationType,
		iconName,
		iconPosition,
		iconHoverAnim,
	} = attributes;

	const blockProps = useBlockProps( {
		className: `gk-button-block-wrapper gk-btn-align-${ alignment }`,
	} );

	// Build padding styles
	let pt = 14, pb = 14, pl = 32, pr = 32, fs = 16;
	if ( buttonSize === 'small' ) {
		pt = 10; pb = 10; pl = 24; pr = 24; fs = 14;
	} else if ( buttonSize === 'large' ) {
		pt = 18; pb = 18; pl = 44; pr = 44; fs = 18;
	} else if ( buttonSize === 'custom' ) {
		pt = customPaddingTop;
		pb = customPaddingBottom;
		pl = customPaddingLeft;
		pr = customPaddingRight;
		fs = fontSize;
	}

	const buttonStyles = {
		'--gk-btn-bg': normalBg,
		'--gk-btn-color': normalText,
		'--gk-btn-hover-bg': hoverBg,
		'--gk-btn-hover-color': hoverText,
		paddingTop: `${ pt }px`,
		paddingBottom: `${ pb }px`,
		paddingLeft: `${ pl }px`,
		paddingRight: `${ pr }px`,
		fontSize: `${ fs }px`,
		borderRadius: `${ borderRadius }px`,
	};

	const buttonClass = [
		'gk-btn-interactive',
		`gk-btn-shadow-${ shadowType }`,
		`gk-btn-anim-${ animationType }`,
		iconName !== 'none' ? `gk-btn-has-icon gk-btn-icon-${ iconPosition }` : '',
		iconName !== 'none' ? `gk-btn-icon-hover-${ iconHoverAnim }` : '',
	].filter( Boolean ).join( ' ' );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Button Link Settings', 'zentro-blocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Button URL', 'zentro-blocks' ) }
						value={ url }
						onChange={ ( val ) => setAttributes( { url: val } ) }
					/>
					<ToggleControl
						label={ __( 'Open in new tab', 'zentro-blocks' ) }
						checked={ linkTarget === '_blank' }
						onChange={ ( val ) => setAttributes( { linkTarget: val ? '_blank' : '_self' } ) }
					/>
					<SelectControl
						label={ __( 'Alignment', 'zentro-blocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
							{ label: 'Full Width', value: 'justify' },
						] }
						onChange={ ( val ) => setAttributes( { alignment: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Sizing & Layout', 'zentro-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Button Size', 'zentro-blocks' ) }
						value={ buttonSize }
						options={ [
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Large', value: 'large' },
							{ label: 'Custom Sizing', value: 'custom' },
						] }
						onChange={ ( val ) => setAttributes( { buttonSize: val } ) }
					/>

					{ buttonSize === 'custom' && (
						<>
							<RangeControl
								label={ __( 'Font Size (px)', 'zentro-blocks' ) }
								value={ fontSize }
								onChange={ ( val ) => setAttributes( { fontSize: val } ) }
								min={ 12 }
								max={ 40 }
							/>
							<RangeControl
								label={ __( 'Padding Top/Bottom (px)', 'zentro-blocks' ) }
								value={ customPaddingTop }
								onChange={ ( val ) => setAttributes( { customPaddingTop: val, customPaddingBottom: val } ) }
								min={ 6 }
								max={ 50 }
							/>
							<RangeControl
								label={ __( 'Padding Left/Right (px)', 'zentro-blocks' ) }
								value={ customPaddingLeft }
								onChange={ ( val ) => setAttributes( { customPaddingLeft: val, customPaddingRight: val } ) }
								min={ 12 }
								max={ 80 }
							/>
						</>
					) }

					<RangeControl
						label={ __( 'Border Radius (px)', 'zentro-blocks' ) }
						value={ borderRadius }
						onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
						min={ 0 }
						max={ 50 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon Options', 'zentro-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Select Icon', 'zentro-blocks' ) }
						value={ iconName }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Arrow →', value: 'arrow' },
							{ label: 'Checkmark ✓', value: 'check' },
							{ label: 'Shopping Cart 🛒', value: 'cart' },
							{ label: 'Download 📥', value: 'download' },
							{ label: 'Envelope ✉', value: 'envelope' },
							{ label: 'Heart ♥', value: 'heart' },
							{ label: 'Star ★', value: 'star' },
						] }
						onChange={ ( val ) => setAttributes( { iconName: val } ) }
					/>

					{ iconName !== 'none' && (
						<>
							<SelectControl
								label={ __( 'Icon Position', 'zentro-blocks' ) }
								value={ iconPosition }
								options={ [
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( val ) => setAttributes( { iconPosition: val } ) }
							/>
							<SelectControl
								label={ __( 'Icon Hover Animation', 'zentro-blocks' ) }
								value={ iconHoverAnim }
								options={ [
									{ label: 'None', value: 'none' },
									{ label: 'Shift / Translate', value: 'translate' },
									{ label: 'Rotate', value: 'rotate' },
									{ label: 'Bounce', value: 'bounce' },
								] }
								onChange={ ( val ) => setAttributes( { iconHoverAnim: val } ) }
							/>
						</>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Hover & Effect Styles', 'zentro-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Hover Effect', 'zentro-blocks' ) }
						value={ animationType }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Scale Up (Grow)', value: 'grow' },
							{ label: 'Float Up', value: 'float' },
							{ label: 'Shine Shimmer Effect', value: 'shine' },
						] }
						onChange={ ( val ) => setAttributes( { animationType: val } ) }
					/>
					<SelectControl
						label={ __( 'Shadow Style', 'zentro-blocks' ) }
						value={ shadowType }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Soft Shadow', value: 'soft' },
							{ label: 'Medium Shadow', value: 'medium' },
							{ label: 'Glow Effect', value: 'glow' },
						] }
						onChange={ ( val ) => setAttributes( { shadowType: val } ) }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: normalBg,
							onChange: ( val ) => setAttributes( { normalBg: val } ),
							label: __( 'Background Color', 'zentro-blocks' ),
						},
						{
							value: normalText,
							onChange: ( val ) => setAttributes( { normalText: val } ),
							label: __( 'Text Color', 'zentro-blocks' ),
						},
						{
							value: hoverBg,
							onChange: ( val ) => setAttributes( { hoverBg: val } ),
							label: __( 'Hover Background Color', 'zentro-blocks' ),
						},
						{
							value: hoverText,
							onChange: ( val ) => setAttributes( { hoverText: val } ),
							label: __( 'Hover Text Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={ buttonClass } style={ buttonStyles }>
					{ iconName !== 'none' && iconPosition === 'left' && (
						<span className="gk-btn-icon-wrap gk-btn-icon-wrap--left">
							{ getIconSvg( iconName ) }
						</span>
					) }
					<RichText
						tagName="span"
						value={ text }
						onChange={ ( val ) => setAttributes( { text: val } ) }
						placeholder={ __( 'Button Text...', 'zentro-blocks' ) }
						allowedFormats={ [] }
					/>
					{ iconName !== 'none' && iconPosition === 'right' && (
						<span className="gk-btn-icon-wrap gk-btn-icon-wrap--right">
							{ getIconSvg( iconName ) }
						</span>
					) }
				</div>
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
