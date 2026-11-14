import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import metadata from './block.json';

const TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __(
				'Add tab content… type / to add any block',
				'zentro-blocks'
			),
		},
	],
];

function Edit() {
	const blockProps = useBlockProps( {
		className: 'gk-tabs__panel is-active',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: false,
		renderAppender: InnerBlocks.ButtonBlockAppender,
	} );
	return <div { ...innerBlocksProps } />;
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
