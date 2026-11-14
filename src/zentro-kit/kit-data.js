/**
 * Zentro Kit – design library data.
 *
 * Loaded on demand (dynamic import) the first time the library opens, so the
 * ~200 KB of pattern / template definitions never slow down the editor.
 */
import { __ } from '@wordpress/i18n';
import {
	patterns as basePatterns,
	categories as baseCategories,
} from './patterns';
import { industryPatterns, industryCategories } from './patterns-industry';
import { morePatterns } from './patterns-more';
import { showcasePatterns, showcaseCategories } from './patterns-showcase';
import { templates as baseTemplates } from './templates';
import { extraTemplates } from './templates-extra';
import { siteTemplates } from './templates-sites';
import { pageTemplates } from './templates-pages';

// Industry packs first: they are complete, niche-specific designs.
// "Logos & Clients" sits right after Testimonials.
export const categories = [ ...industryCategories, ...baseCategories ];
categories.splice(
	categories.findIndex( ( c ) => c.id === 'testimonials' ) + 1,
	0,
	...showcaseCategories
);

const byOrder = ( list, order ) =>
	list.sort(
		( a, b ) => order.indexOf( a.category ) - order.indexOf( b.category )
	);

export const patterns = byOrder(
	[
		...industryPatterns,
		...basePatterns,
		...morePatterns,
		...showcasePatterns,
	],
	categories.map( ( c ) => c.id )
);

export const templateCategories = [
	{ id: 'inner', label: __( 'Inner Pages', 'zentro-blocks' ) },
	{ id: 'agency', label: __( 'Agency & Business', 'zentro-blocks' ) },
	{ id: 'saas', label: __( 'SaaS & Startup', 'zentro-blocks' ) },
	{ id: 'portfolio', label: __( 'Portfolio & Personal', 'zentro-blocks' ) },
	{
		id: 'architecture',
		label: __( 'Architecture & Real Estate', 'zentro-blocks' ),
	},
	{ id: 'healthcare', label: __( 'Healthcare', 'zentro-blocks' ) },
	{ id: 'coaching', label: __( 'Coaching & Consulting', 'zentro-blocks' ) },
	{ id: 'travel', label: __( 'Travel & Attractions', 'zentro-blocks' ) },
	{ id: 'nonprofit', label: __( 'Non-profit', 'zentro-blocks' ) },
];

export const templates = byOrder(
	[ ...pageTemplates, ...baseTemplates, ...extraTemplates, ...siteTemplates ],
	templateCategories.map( ( c ) => c.id )
);
