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
	ToggleControl,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const {
		testimonials,
		autoplay,
		autoplaySpeed,
		showRatings,
		primaryColor,
		textColor,
		cardBgColor,
	} = attributes;

	const [ activeSlide, setActiveSlide ] = useState( 0 );
	const blockProps = useBlockProps();

	const updateTestimonial = ( index, key, value ) => {
		const updated = testimonials.map( ( t, i ) =>
			i === index ? { ...t, [ key ]: value } : t
		);
		setAttributes( { testimonials: updated } );
	};

	const addTestimonial = () => {
		const updated = [
			...testimonials,
			{
				name: 'Client Name',
				role: 'Position / Company',
				feedback: 'Review feedback description goes here.',
				rating: 5,
				avatar: '',
			},
		];
		setAttributes( { testimonials: updated } );
		setActiveSlide( updated.length - 1 );
	};

	const removeTestimonial = ( index ) => {
		const updated = testimonials.filter( ( _, i ) => i !== index );
		setAttributes( { testimonials: updated } );
		setActiveSlide( Math.max( 0, index - 1 ) );
	};

	const moveTestimonial = ( fromIndex, toIndex ) => {
		if ( toIndex < 0 || toIndex >= testimonials.length ) {
			return;
		}
		const updated = [ ...testimonials ];
		const [ movedItem ] = updated.splice( fromIndex, 1 );
		updated.splice( toIndex, 0, movedItem );
		setAttributes( { testimonials: updated } );
		setActiveSlide( toIndex );
	};

	// Generate Star Rating SVGs
	const renderStars = ( rating ) => {
		const stars = [];
		for ( let i = 1; i <= 5; i++ ) {
			stars.push(
				<svg
					key={ i }
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill={ i <= rating ? primaryColor : 'none' }
					stroke={ primaryColor }
					strokeWidth="2"
					style={ { marginRight: '2px' } }
				>
					<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
				</svg>
			);
		}
		return stars;
	};

	const containerStyles = {
		'--gk-primary-color': primaryColor,
		'--gk-text-color': textColor,
		'--gk-card-bg-color': cardBgColor,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Carousel Options', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<ToggleControl
						label={ __( 'Autoplay Carousel', 'zentro-blocks' ) }
						checked={ autoplay }
						onChange={ ( val ) => setAttributes( { autoplay: val } ) }
					/>
					{ autoplay && (
						<RangeControl
							label={ __( 'Autoplay Speed (ms)', 'zentro-blocks' ) }
							value={ autoplaySpeed }
							onChange={ ( val ) =>
								setAttributes( { autoplaySpeed: val } )
							}
							min={ 2000 }
							max={ 10000 }
							step={ 500 }
						/>
					) }
					<ToggleControl
						label={ __( 'Show Star Ratings', 'zentro-blocks' ) }
						checked={ showRatings }
						onChange={ ( val ) => setAttributes( { showRatings: val } ) }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Manage Testimonials', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					{ testimonials.map( ( item, index ) => (
						<PanelBody
							key={ index }
							title={ item.name || `Review ${ index + 1 }` }
							initialOpen={ index === activeSlide }
						>
							<div
								style={ {
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '12px',
								} }
							>
								<div>
									<Button
										isSmall
										variant="secondary"
										disabled={ index === 0 }
										onClick={ () => moveTestimonial( index, index - 1 ) }
										style={ { marginRight: '4px' } }
									>
										▲
									</Button>
									<Button
										isSmall
										variant="secondary"
										disabled={ index === testimonials.length - 1 }
										onClick={ () => moveTestimonial( index, index + 1 ) }
									>
										▼
									</Button>
								</div>
								{ testimonials.length > 1 && (
									<Button
										isSmall
										isDestructive
										variant="secondary"
										onClick={ () => removeTestimonial( index ) }
									>
										{ __( 'Delete', 'zentro-blocks' ) }
									</Button>
								) }
							</div>

							<div style={ { marginBottom: '8px' } }>
								<label style={ { fontWeight: '600', fontSize: '12px' } }>
									{ __( 'Avatar Image', 'zentro-blocks' ) }
								</label>
								{ item.avatar ? (
									<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' } }>
										<img src={ item.avatar } style={ { width: '40px', height: '40px', borderRadius: '50%' } } alt="" />
										<Button
											isDestructive
											isSmall
											variant="secondary"
											onClick={ () => updateTestimonial( index, 'avatar', '' ) }
										>
											{ __( 'Remove', 'zentro-blocks' ) }
										</Button>
									</div>
								) : (
									<MediaPlaceholder
										onSelect={ ( media ) => updateTestimonial( index, 'avatar', media.url ) }
										allowedTypes={ [ 'image' ] }
										multiple={ false }
										labels={ { title: 'Upload Avatar' } }
									/>
								) }
							</div>

							<RangeControl
								label={ __( 'Rating (Stars)', 'zentro-blocks' ) }
								value={ item.rating }
								onChange={ ( val ) => updateTestimonial( index, 'rating', val ) }
								min={ 1 }
								max={ 5 }
							/>
						</PanelBody>
					) ) }
					<Button
						variant="primary"
						onClick={ addTestimonial }
						style={ { marginTop: '12px', width: '100%' } }
					>
						{ __( '+ Add Testimonial', 'zentro-blocks' ) }
					</Button>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Options', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: primaryColor,
							onChange: ( val ) => setAttributes( { primaryColor: val } ),
							label: __( 'Star Rating & Navigation', 'zentro-blocks' ),
						},
						{
							value: cardBgColor,
							onChange: ( val ) => setAttributes( { cardBgColor: val } ),
							label: __( 'Card Background Color', 'zentro-blocks' ),
						},
						{
							value: textColor,
							onChange: ( val ) => setAttributes( { textColor: val } ),
							label: __( 'Text Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps } style={ containerStyles }>
				<div className="gk-testimonials-carousel-wrapper">
					<div className="gk-testimonials-carousel gk-testimonials-carousel--editor">
						<div className="gk-testimonials-carousel__viewport">
							<div className="gk-testimonials-carousel__card">
								{ /* rating stars */ }
								{ showRatings && (
									<div className="gk-testimonials-carousel__ratings">
										{ renderStars( testimonials[ activeSlide ]?.rating || 5 ) }
									</div>
								) }

								{ /* Feedback Text */ }
								<div className="gk-testimonials-carousel__quote-icon">“</div>
								<TextareaControl
									className="gk-testimonials-carousel__feedback-edit"
									value={ testimonials[ activeSlide ]?.feedback }
									onChange={ ( val ) => updateTestimonial( activeSlide, 'feedback', val ) }
									rows={ 4 }
								/>

								{ /* User Details Info */ }
								<div className="gk-testimonials-carousel__user">
									<div className="gk-testimonials-carousel__avatar-wrap">
										{ testimonials[ activeSlide ]?.avatar ? (
											<img
												src={ testimonials[ activeSlide ]?.avatar }
												className="gk-testimonials-carousel__avatar"
												alt=""
											/>
										) : (
											<div className="gk-testimonials-carousel__avatar gk-testimonials-carousel__avatar--empty" />
										) }
									</div>
									<div className="gk-testimonials-carousel__meta">
										<TextControl
											className="gk-testimonials-carousel__name-edit"
											value={ testimonials[ activeSlide ]?.name }
											onChange={ ( val ) => updateTestimonial( activeSlide, 'name', val ) }
										/>
										<TextControl
											className="gk-testimonials-carousel__role-edit"
											value={ testimonials[ activeSlide ]?.role }
											onChange={ ( val ) => updateTestimonial( activeSlide, 'role', val ) }
										/>
									</div>
								</div>
							</div>
						</div>

						{ /* Slide Navigation arrows */ }
						<div className="gk-testimonials-carousel__nav">
							<button
								className="gk-testimonials-carousel__prev"
								onClick={ () => setActiveSlide( ( activeSlide - 1 + testimonials.length ) % testimonials.length ) }
							>
								&larr;
							</button>
							<span className="gk-testimonials-carousel__indicator">
								{ activeSlide + 1 } / { testimonials.length }
							</span>
							<button
								className="gk-testimonials-carousel__next"
								onClick={ () => setActiveSlide( ( activeSlide + 1 ) % testimonials.length ) }
							>
								&rarr;
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
