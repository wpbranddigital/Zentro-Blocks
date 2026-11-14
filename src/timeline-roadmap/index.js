import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const { milestones, timelineColor, nodeBgColor, textColor, layout, animateOnScroll } = attributes;
	const blockProps = useBlockProps();

	const updateMilestone = ( index, key, value ) => {
		const updated = milestones.map( ( milestone, i ) =>
			i === index ? { ...milestone, [ key ]: value } : milestone
		);
		setAttributes( { milestones: updated } );
	};

	const addMilestone = () => {
		setAttributes( {
			milestones: [
				...milestones,
				{
					date: `New Date`,
					title: `New Milestone Title`,
					content: `Milestone description goes here.`,
				},
			],
		} );
	};

	const removeMilestone = ( index ) => {
		const updated = milestones.filter( ( _, i ) => i !== index );
		setAttributes( { milestones: updated } );
	};

	const moveMilestone = ( fromIndex, toIndex ) => {
		if ( toIndex < 0 || toIndex >= milestones.length ) {
			return;
		}
		const updated = [ ...milestones ];
		const [ movedItem ] = updated.splice( fromIndex, 1 );
		updated.splice( toIndex, 0, movedItem );
		setAttributes( { milestones: updated } );
	};

	// Inline CSS variables mapping for real-time live preview
	const containerStyles = {
		'--gk-timeline-color': timelineColor,
		'--gk-node-bg-color': nodeBgColor,
		'--gk-text-color': textColor,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Timeline Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Layout Orientation', 'zentro-blocks' ) }
						value={ layout }
						options={ [
							{ label: 'Vertical (Alternating)', value: 'vertical' },
							{ label: 'Horizontal Scrollbar', value: 'horizontal' },
						] }
						onChange={ ( val ) => setAttributes( { layout: val } ) }
					/>
					<ToggleControl
						label={ __( 'Animate Milestones on Scroll', 'zentro-blocks' ) }
						checked={ animateOnScroll }
						onChange={ ( val ) =>
							setAttributes( { animateOnScroll: val } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Milestones List', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					{ milestones.map( ( milestone, index ) => (
						<PanelBody
							key={ index }
							title={ milestone.title || `Milestone ${ index + 1 }` }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Date / Stage Text', 'zentro-blocks' ) }
								value={ milestone.date }
								onChange={ ( val ) =>
									updateMilestone( index, 'date', val )
								}
							/>
							<TextControl
								label={ __( 'Title', 'zentro-blocks' ) }
								value={ milestone.title }
								onChange={ ( val ) =>
									updateMilestone( index, 'title', val )
								}
							/>
							<TextareaControl
								label={ __( 'Description', 'zentro-blocks' ) }
								value={ milestone.content }
								onChange={ ( val ) =>
									updateMilestone( index, 'content', val )
								}
								rows={ 3 }
							/>
							<div
								style={ {
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '8px',
								} }
							>
								<div>
									<Button
										isSmall
										variant="secondary"
										disabled={ index === 0 }
										onClick={ () =>
											moveMilestone( index, index - 1 )
										}
										style={ { marginRight: '4px' } }
									>
										▲
									</Button>
									<Button
										isSmall
										variant="secondary"
										disabled={ index === milestones.length - 1 }
										onClick={ () =>
											moveMilestone( index, index + 1 )
										}
									>
										▼
									</Button>
								</div>
								{ milestones.length > 1 && (
									<Button
										isSmall
										isDestructive
										variant="secondary"
										onClick={ () => removeMilestone( index ) }
									>
										{ __( 'Remove', 'zentro-blocks' ) }
									</Button>
								) }
							</div>
						</PanelBody>
					) ) }
					<Button
						variant="primary"
						onClick={ addMilestone }
						style={ { marginTop: '12px', width: '100%' } }
					>
						{ __( '+ Add Milestone', 'zentro-blocks' ) }
					</Button>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'zentro-blocks' ) }
					colorSettings={ [
						{
							value: timelineColor,
							onChange: ( val ) =>
								setAttributes( { timelineColor: val } ),
							label: __( 'Connector / Node Border Color', 'zentro-blocks' ),
						},
						{
							value: nodeBgColor,
							onChange: ( val ) =>
								setAttributes( { nodeBgColor: val } ),
							label: __( 'Node Dot Inner Background', 'zentro-blocks' ),
						},
						{
							value: textColor,
							onChange: ( val ) =>
								setAttributes( { textColor: val } ),
							label: __( 'Content Text Color', 'zentro-blocks' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...blockProps } style={ containerStyles }>
				<div className={ `gk-timeline gk-timeline--layout-${ layout } gk-timeline--editor` }>
					<div className="gk-timeline__track"></div>
					<div className="gk-timeline__items">
						{ milestones.map( ( milestone, index ) => (
							<div
								key={ index }
								className={ `gk-timeline__item ${
									index % 2 === 0 ? 'gk-timeline__item--left' : 'gk-timeline__item--right'
								} is-visible` }
							>
								<div className="gk-timeline__node">
									<div className="gk-timeline__node-dot"></div>
								</div>
								<div className="gk-timeline__card">
									{ milestone.date && (
										<span className="gk-timeline__date">
											{ milestone.date }
										</span>
									) }
									{ milestone.title && (
										<h4 className="gk-timeline__title">
											{ milestone.title }
										</h4>
									) }
									{ milestone.content && (
										<p className="gk-timeline__content">
											{ milestone.content }
										</p>
									) }
								</div>
							</div>
						) ) }
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
