import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	RangeControl,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const {
		members,
		columnsDesktop,
		columnsTablet,
		columnsMobile,
		gap,
		imageStyle,
		alignment,
		bgColor,
		textColor,
		roleColor,
	} = attributes;

	const blockProps = useBlockProps( {
		className: `gk-team-member-grid gk-align-${ alignment }`,
		style: {
			'--gk-tm-cols-desktop': columnsDesktop,
			'--gk-tm-cols-tablet': columnsTablet,
			'--gk-tm-cols-mobile': columnsMobile,
			'--gk-tm-gap': `${ gap }px`,
		},
	} );

	const updateMember = ( index, key, value ) => {
		const newMembers = [ ...members ];
		newMembers[ index ][ key ] = value;
		setAttributes( { members: newMembers } );
	};

	const addMember = () => {
		const newMembers = [ ...members, {
			name: 'New Member',
			role: 'Role',
			bio: 'Brief bio goes here.',
			imageUrl: '',
			imageId: 0,
			imageAlt: '',
			facebookUrl: '',
			twitterUrl: '',
			linkedinUrl: '',
			emailAddress: ''
		} ];
		setAttributes( { members: newMembers } );
	};

	const removeMember = ( index ) => {
		const newMembers = members.filter( ( _, i ) => i !== index );
		setAttributes( { members: newMembers } );
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

				<PanelBody title={ __( 'Card Style', 'zentro-blocks' ) }>
					<SelectControl
						label={ __( 'Image Style', 'zentro-blocks' ) }
						value={ imageStyle }
						options={ [
							{ label: 'Square / Rounded', value: 'square' },
							{ label: 'Circle', value: 'circle' },
						] }
						onChange={ ( val ) => setAttributes( { imageStyle: val } ) }
					/>
					<SelectControl
						label={ __( 'Alignment', 'zentro-blocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						] }
						onChange={ ( val ) => setAttributes( { alignment: val } ) }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: bgColor,
							onChange: ( val ) => setAttributes( { bgColor: val } ),
							label: __( 'Card Background', 'zentro-blocks' ),
						},
						{
							value: textColor,
							onChange: ( val ) => setAttributes( { textColor: val } ),
							label: __( 'Text Color', 'zentro-blocks' ),
						},
						{
							value: roleColor,
							onChange: ( val ) => setAttributes( { roleColor: val } ),
							label: __( 'Role Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps }>
				{ members.map( ( member, index ) => (
					<div className="gk-team-member-card" key={ index } style={ {
						'--gk-tm-bg': bgColor,
						'--gk-tm-text': textColor,
						'--gk-tm-role': roleColor,
					} }>
						<div className="gk-member-controls-header">
							<span>Member { index + 1 }</span>
							<Button isDestructive isSmall variant="link" onClick={ () => removeMember( index ) }>
								Remove
							</Button>
						</div>

						<div className={ `gk-team-image gk-image-style-${ imageStyle }` }>
							{ ! member.imageUrl ? (
								<MediaPlaceholder
									onSelect={ ( media ) => {
										updateMember( index, 'imageUrl', media.url );
										updateMember( index, 'imageId', media.id );
										updateMember( index, 'imageAlt', media.alt || media.title || '' );
									} }
									allowedTypes={ [ 'image' ] }
									multiple={ false }
									labels={ { title: 'Photo' } }
								/>
							) : (
								<div className="gk-image-wrapper">
									<img src={ member.imageUrl } alt={ member.imageAlt } />
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ ( media ) => {
												updateMember( index, 'imageUrl', media.url );
												updateMember( index, 'imageId', media.id );
												updateMember( index, 'imageAlt', media.alt || media.title || '' );
											} }
											allowedTypes={ [ 'image' ] }
											value={ member.imageId }
											render={ ( { open } ) => (
												<div className="gk-image-actions">
													<Button onClick={ open } variant="secondary">Edit</Button>
													<Button onClick={ () => {
														updateMember( index, 'imageUrl', '' );
														updateMember( index, 'imageId', 0 );
														updateMember( index, 'imageAlt', '' );
													} } variant="link" isDestructive>Remove</Button>
												</div>
											) }
										/>
									</MediaUploadCheck>
								</div>
							) }
						</div>

						<div className="gk-team-content">
							<RichText
								tagName="h3"
								className="gk-team-name"
								value={ member.name }
								onChange={ ( val ) => updateMember( index, 'name', val ) }
								placeholder={ __( 'Name...', 'zentro-blocks' ) }
							/>
							<RichText
								tagName="p"
								className="gk-team-role"
								value={ member.role }
								onChange={ ( val ) => updateMember( index, 'role', val ) }
								placeholder={ __( 'Role / Position...', 'zentro-blocks' ) }
							/>
							<RichText
								tagName="div"
								className="gk-team-bio"
								value={ member.bio }
								onChange={ ( val ) => updateMember( index, 'bio', val ) }
								placeholder={ __( 'Write a short biography...', 'zentro-blocks' ) }
							/>

							<div className="gk-team-socials-editor">
								<TextControl
									placeholder="Facebook URL"
									value={ member.facebookUrl }
									onChange={ ( val ) => updateMember( index, 'facebookUrl', val ) }
								/>
								<TextControl
									placeholder="Twitter/X URL"
									value={ member.twitterUrl }
									onChange={ ( val ) => updateMember( index, 'twitterUrl', val ) }
								/>
								<TextControl
									placeholder="LinkedIn URL"
									value={ member.linkedinUrl }
									onChange={ ( val ) => updateMember( index, 'linkedinUrl', val ) }
								/>
								<TextControl
									placeholder="Email Address"
									value={ member.emailAddress }
									onChange={ ( val ) => updateMember( index, 'emailAddress', val ) }
								/>
							</div>
						</div>
					</div>
				) ) }
			</div>
			
			<div className="gk-add-member-wrapper">
				<Button variant="secondary" onClick={ addMember }>
					+ Add Team Member
				</Button>
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
