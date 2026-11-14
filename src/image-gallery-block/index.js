import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const {
		images,
		columnsDesktop,
		columnsTablet,
		columnsMobile,
		gap,
		imageRadius,
		aspectRatio,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'gk-image-gallery-wrapper',
	} );

	const onSelectImages = ( newImages ) => {
		// Map the selected images to extract what we need
		const formattedImages = newImages.map( ( img ) => ( {
			id: img.id,
			url: img.url,
			alt: img.alt || img.caption || '',
		} ) );
		setAttributes( { images: formattedImages } );
	};

	const removeImage = ( indexToRemove ) => {
		const newImages = images.filter( ( _, index ) => index !== indexToRemove );
		setAttributes( { images: newImages } );
	};

	const galleryStyle = {
		'--gk-gallery-cols-desktop': columnsDesktop,
		'--gk-gallery-cols-tablet': columnsTablet,
		'--gk-gallery-cols-mobile': columnsMobile,
		'--gk-gallery-gap': `${ gap }px`,
		'--gk-gallery-radius': `${ imageRadius }px`,
		'--gk-gallery-aspect': aspectRatio === 'auto' ? 'auto' : aspectRatio,
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
				<PanelBody title={ __( 'Image Style', 'zentro-blocks' ) }>
					<RangeControl
						label={ __( 'Border Radius (px)', 'zentro-blocks' ) }
						value={ imageRadius }
						onChange={ ( val ) => setAttributes( { imageRadius: val } ) }
						min={ 0 }
						max={ 100 }
					/>
					<SelectControl
						label={ __( 'Aspect Ratio', 'zentro-blocks' ) }
						value={ aspectRatio }
						options={ [
							{ label: 'Original', value: 'auto' },
							{ label: 'Square (1:1)', value: '1/1' },
							{ label: 'Landscape (4:3)', value: '4/3' },
							{ label: 'Wide (16:9)', value: '16/9' },
							{ label: 'Portrait (3:4)', value: '3/4' },
						] }
						onChange={ ( val ) => setAttributes( { aspectRatio: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ images.length === 0 ? (
					<MediaPlaceholder
						onSelect={ onSelectImages }
						allowedTypes={ [ 'image' ] }
						multiple
						labels={ { title: 'Image Gallery' } }
					/>
				) : (
					<div className="gk-image-gallery" style={ galleryStyle }>
						{ images.map( ( img, index ) => (
							<div key={ img.id || index } className="gk-gallery-item">
								<img src={ img.url } alt={ img.alt } />
								<Button
									className="gk-remove-image-btn"
									icon="no"
									label="Remove Image"
									onClick={ () => removeImage( index ) }
								/>
							</div>
						) ) }
					</div>
				) }
				
				{ images.length > 0 && (
					<div style={ { marginTop: '15px' } }>
						<MediaPlaceholder
							onSelect={ ( newImages ) => {
								const formattedImages = newImages.map( ( img ) => ( {
									id: img.id,
									url: img.url,
									alt: img.alt || img.caption || '',
								} ) );
								setAttributes( { images: [ ...images, ...formattedImages ] } );
							} }
							allowedTypes={ [ 'image' ] }
							multiple
							labels={ { title: 'Add More Images' } }
							value={ images }
							disableMediaButtons={ images.length > 0 }
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
