import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

// SVG Icons Lookup
const getCardIconSvg = ( name ) => {
	switch ( name ) {
		case 'star':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
				</svg>
			);
		case 'heart':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
				</svg>
			);
		case 'bulb':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5h6zM9 18h6M10 22h4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'shield':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);
		case 'rocket':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5 1.5 0 3.5-1 5-2.5m10-10l-6 6m12-12L12.5 7.5m5.5-2l-3-3" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M19 5c-2.23 2.23-4.88 5.64-6.5 8.5L9.5 10.5C12.36 8.88 15.77 6.23 18 4z" />
				</svg>
			);
		case 'check':
			return (
				<svg className="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
					<path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			);
		default:
			return null;
	}
};

function Edit( { attributes, setAttributes } ) {
	const {
		cards,
		columnsDesktop,
		columnsTablet,
		columnsMobile,
		gap,
		alignment,
		cardBg,
		titleColor,
		descColor,
		badgeBg,
		badgeTextColor,
		linkColor,
		linkHoverColor,
		hoverEffect,
		borderRadius,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		borderColor,
		borderWidth,
	} = attributes;

	const blockProps = useBlockProps( {
		className: `gk-box-card-grid-wrapper gk-card-align-${ alignment }`,
		style: {
			'--gk-bc-cols-desktop': columnsDesktop,
			'--gk-bc-cols-tablet': columnsTablet,
			'--gk-bc-cols-mobile': columnsMobile,
			'--gk-bc-gap': `${ gap }px`,
		},
	} );

	const cardStyles = {
		'--gk-card-bg': cardBg,
		'--gk-card-title-color': titleColor,
		'--gk-card-desc-color': descColor,
		'--gk-card-border-color': borderColor,
		'--gk-card-badge-bg': badgeBg,
		'--gk-card-badge-color': badgeTextColor,
		'--gk-card-link-color': linkColor,
		'--gk-card-link-hover-color': linkHoverColor,
		borderWidth: `${ borderWidth }px`,
		borderRadius: `${ borderRadius }px`,
		paddingTop: `${ paddingTop }px`,
		paddingBottom: `${ paddingBottom }px`,
		paddingLeft: `${ paddingLeft }px`,
		paddingRight: `${ paddingRight }px`,
	};

	const cardClass = [
		'gk-box-card',
		`gk-card-hover-${ hoverEffect }`,
	].filter( Boolean ).join( ' ' );

	const updateCard = ( index, key, value ) => {
		const newCards = [ ...cards ];
		newCards[ index ][ key ] = value;
		setAttributes( { cards: newCards } );
	};

	const addCard = () => {
		const newCards = [ ...cards, {
			title: 'New Feature',
			description: 'Short description of the feature goes here.',
			badgeText: 'NEW',
			showBadge: false,
			iconType: 'icon',
			iconName: 'star',
			imageSrc: '',
			imageAlt: '',
			cardLink: '#',
			cardLinkText: 'Learn More →',
			cardLinkTarget: '_self'
		} ];
		setAttributes( { cards: newCards } );
	};

	const removeCard = ( index ) => {
		const newCards = cards.filter( ( _, i ) => i !== index );
		setAttributes( { cards: newCards } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Grid Layout', 'zentro-blocks' ) }>
					<RangeControl
						label={ __( 'Columns (Desktop)', 'zentro-blocks' ) }
						value={ columnsDesktop }
						onChange={ ( val ) => setAttributes( { columnsDesktop: val } ) }
						min={ 1 }
						max={ 6 }
					/>
					<RangeControl
						label={ __( 'Columns (Tablet)', 'zentro-blocks' ) }
						value={ columnsTablet }
						onChange={ ( val ) => setAttributes( { columnsTablet: val } ) }
						min={ 1 }
						max={ 4 }
					/>
					<RangeControl
						label={ __( 'Columns (Mobile)', 'zentro-blocks' ) }
						value={ columnsMobile }
						onChange={ ( val ) => setAttributes( { columnsMobile: val } ) }
						min={ 1 }
						max={ 3 }
					/>
					<RangeControl
						label={ __( 'Gap (px)', 'zentro-blocks' ) }
						value={ gap }
						onChange={ ( val ) => setAttributes( { gap: val } ) }
						min={ 0 }
						max={ 60 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Card Layout & Padding', 'zentro-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Content Alignment', 'zentro-blocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						] }
						onChange={ ( val ) => setAttributes( { alignment: val } ) }
					/>
					<SelectControl
						label={ __( 'Hover Animation Effect', 'zentro-blocks' ) }
						value={ hoverEffect }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Float Up', value: 'float' },
							{ label: 'Scale Up', value: 'scale' },
							{ label: 'Shadow Glow', value: 'shadow' },
							{ label: 'Accent Border', value: 'border' },
						] }
						onChange={ ( val ) => setAttributes( { hoverEffect: val } ) }
					/>
					<RangeControl
						label={ __( 'Card Border Radius (px)', 'zentro-blocks' ) }
						value={ borderRadius }
						onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
						min={ 0 }
						max={ 40 }
					/>
					<RangeControl
						label={ __( 'Border Width (px)', 'zentro-blocks' ) }
						value={ borderWidth }
						onChange={ ( val ) => setAttributes( { borderWidth: val } ) }
						min={ 0 }
						max={ 10 }
					/>
					<RangeControl
						label={ __( 'Card Padding Top/Bottom (px)', 'zentro-blocks' ) }
						value={ paddingTop }
						onChange={ ( val ) => setAttributes( { paddingTop: val, paddingBottom: val } ) }
						min={ 10 }
						max={ 80 }
					/>
					<RangeControl
						label={ __( 'Card Padding Left/Right (px)', 'zentro-blocks' ) }
						value={ paddingLeft }
						onChange={ ( val ) => setAttributes( { paddingLeft: val, paddingRight: val } ) }
						min={ 10 }
						max={ 80 }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Configurations', 'zentro-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: cardBg,
							onChange: ( val ) => setAttributes( { cardBg: val } ),
							label: __( 'Card Background', 'zentro-blocks' ),
						},
						{
							value: titleColor,
							onChange: ( val ) => setAttributes( { titleColor: val } ),
							label: __( 'Title Text Color', 'zentro-blocks' ),
						},
						{
							value: descColor,
							onChange: ( val ) => setAttributes( { descColor: val } ),
							label: __( 'Description Text Color', 'zentro-blocks' ),
						},
						{
							value: borderColor,
							onChange: ( val ) => setAttributes( { borderColor: val } ),
							label: __( 'Border Outline Color', 'zentro-blocks' ),
						},
						{
							value: badgeBg,
							onChange: ( val ) => setAttributes( { badgeBg: val } ),
							label: __( 'Badge Background', 'zentro-blocks' ),
						},
						{
							value: badgeTextColor,
							onChange: ( val ) => setAttributes( { badgeTextColor: val } ),
							label: __( 'Badge Text Color', 'zentro-blocks' ),
						},
						{
							value: linkColor,
							onChange: ( val ) => setAttributes( { linkColor: val } ),
							label: __( 'Link Normal Color', 'zentro-blocks' ),
						},
						{
							value: linkHoverColor,
							onChange: ( val ) => setAttributes( { linkHoverColor: val } ),
							label: __( 'Link Hover Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ cards.map( ( card, index ) => (
					<div className={ cardClass } style={ cardStyles } key={ index }>
						
						<div className="gk-card-controls-header">
							<span>Card { index + 1 }</span>
							<Button isDestructive isSmall variant="link" onClick={ () => removeCard( index ) }>
								Remove
							</Button>
						</div>

						{ /* Tag Badge */ }
						{ card.showBadge && card.badgeText && (
							<div className="gk-card-badge-wrapper">
								<span className="gk-card-badge">{ card.badgeText }</span>
							</div>
						) }

						{ /* Icon Media Header */ }
						{ card.iconType !== 'none' && (
							<div className="gk-card-media">
								{ card.iconType === 'icon' && card.iconName && (
									<div className="gk-card-icon-container">
										{ getCardIconSvg( card.iconName ) }
									</div>
								) }
								{ card.iconType === 'image' && (
									<div className="gk-card-uploaded-image-wrapper">
										{ card.imageSrc ? (
											<div className="gk-image-edit-container">
												<img src={ card.imageSrc } className="gk-card-uploaded-image" alt={ card.imageAlt } />
												<Button
													isDestructive
													isSmall
													variant="secondary"
													onClick={ () => {
														updateCard( index, 'imageSrc', '' );
														updateCard( index, 'imageAlt', '' );
													} }
													style={ { marginTop: '10px' } }
												>
													{ __( 'Remove Image', 'zentro-blocks' ) }
												</Button>
											</div>
										) : (
											<MediaPlaceholder
												onSelect={ ( media ) => {
													updateCard( index, 'imageSrc', media.url );
													updateCard( index, 'imageAlt', media.alt || '' );
												} }
												allowedTypes={ [ 'image' ] }
												multiple={ false }
												labels={ { title: 'Upload Icon Image' } }
											/>
										) }
									</div>
								) }
							</div>
						) }

						{ /* Card Header Title */ }
						<RichText
							tagName="h3"
							className="gk-card-title"
							value={ card.title }
							onChange={ ( val ) => updateCard( index, 'title', val ) }
							placeholder={ __( 'Card Title...', 'zentro-blocks' ) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
						/>

						{ /* Card Text Description */ }
						<RichText
							tagName="p"
							className="gk-card-desc"
							value={ card.description }
							onChange={ ( val ) => updateCard( index, 'description', val ) }
							placeholder={ __( 'Enter short feature details...', 'zentro-blocks' ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>

						{ /* Bottom Link Action Button */ }
						{ card.cardLinkText && (
							<div className="gk-card-footer">
								<RichText
									tagName="span"
									className="gk-card-action-link"
									value={ card.cardLinkText }
									onChange={ ( val ) => updateCard( index, 'cardLinkText', val ) }
									placeholder={ __( 'Link Text...', 'zentro-blocks' ) }
									allowedFormats={ [] }
								/>
							</div>
						) }

						<div className="gk-card-specific-settings">
							<ToggleControl
								label={ __( 'Show Badge', 'zentro-blocks' ) }
								checked={ card.showBadge }
								onChange={ ( val ) => updateCard( index, 'showBadge', val ) }
							/>
							{ card.showBadge && (
								<TextControl
									label={ __( 'Badge Text', 'zentro-blocks' ) }
									value={ card.badgeText }
									onChange={ ( val ) => updateCard( index, 'badgeText', val ) }
								/>
							) }
							
							<SelectControl
								label={ __( 'Media Type', 'zentro-blocks' ) }
								value={ card.iconType }
								options={ [
									{ label: 'None', value: 'none' },
									{ label: 'Built-in SVG Icon', value: 'icon' },
									{ label: 'Custom Image Upload', value: 'image' },
								] }
								onChange={ ( val ) => updateCard( index, 'iconType', val ) }
							/>

							{ card.iconType === 'icon' && (
								<SelectControl
									label={ __( 'Select Icon', 'zentro-blocks' ) }
									value={ card.iconName }
									options={ [
										{ label: 'Star ★', value: 'star' },
										{ label: 'Heart ♥', value: 'heart' },
										{ label: 'Lightbulb 💡', value: 'bulb' },
										{ label: 'Shield 🛡️', value: 'shield' },
										{ label: 'Rocket 🚀', value: 'rocket' },
										{ label: 'Check ✓', value: 'check' },
									] }
									onChange={ ( val ) => updateCard( index, 'iconName', val ) }
								/>
							) }
							
							<TextControl
								label={ __( 'Action Link URL', 'zentro-blocks' ) }
								value={ card.cardLink }
								onChange={ ( val ) => updateCard( index, 'cardLink', val ) }
							/>
							<ToggleControl
								label={ __( 'Open Link in New Tab', 'zentro-blocks' ) }
								checked={ card.cardLinkTarget === '_blank' }
								onChange={ ( val ) => updateCard( index, 'cardLinkTarget', val ? '_blank' : '_self' ) }
							/>
						</div>
					</div>
				) ) }
			</div>

			<div className="gk-add-card-wrapper">
				<Button variant="secondary" onClick={ addCard }>
					+ Add Feature Card
				</Button>
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
