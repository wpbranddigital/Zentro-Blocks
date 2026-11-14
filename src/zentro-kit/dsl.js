/**
 * Zentro Kit – tiny block-tree DSL.
 *
 * Patterns and page templates are described as plain trees of
 * `{ name, attributes, children }` nodes and turned into real blocks with
 * `createBlock()` at insert time. Because every block is generated from its
 * attributes (never from hand-written HTML), the inserted markup always
 * matches each block's `save()` output, so Gutenberg never reports
 * "Block contains unexpected or invalid content".
 */
import { createBlock } from '@wordpress/blocks';

export const node = ( name, attributes = {}, children = [] ) => ( {
	name,
	attributes,
	children,
} );

/**
 * Convert a list of DSL nodes into fresh block objects (new clientIds).
 *
 * @param {Array} nodes DSL nodes.
 * @return {Array} Blocks ready for insertBlocks()/resetBlocks().
 */
export const buildBlocks = ( nodes ) =>
	nodes.map( ( n ) =>
		createBlock( n.name, n.attributes, buildBlocks( n.children || [] ) )
	);

/**
 * Unsplash demo image helper.
 * @param id
 * @param w
 */
export const img = ( id, w = 1200 ) =>
	`https://images.unsplash.com/photo-${ id }?auto=format&fit=crop&w=${ w }&q=80`;

// ---------------------------------------------------------------------------
// Style helpers
// ---------------------------------------------------------------------------

const clean = ( obj ) => {
	Object.keys( obj ).forEach( ( k ) => {
		if ( obj[ k ] === undefined ) {
			delete obj[ k ];
		} else if (
			obj[ k ] &&
			typeof obj[ k ] === 'object' &&
			! Array.isArray( obj[ k ] )
		) {
			clean( obj[ k ] );
			if ( ! Object.keys( obj[ k ] ).length ) {
				delete obj[ k ];
			}
		}
	} );
	return obj;
};

const box = ( v ) => {
	if ( v === undefined ) {
		return undefined;
	}
	const [ t, r = t, b = t, l = r ] = Array.isArray( v ) ? v : [ v ];
	return { top: t, right: r, bottom: b, left: l };
};

/**
 * Build a core block `style` attribute from short options.
 *
 * @param {Object} o Options.
 * @return {Object|undefined} style attribute.
 */
export const css = ( o = {} ) => {
	const s = clean( {
		typography: {
			fontSize: o.size,
			fontWeight: o.weight ? String( o.weight ) : undefined,
			lineHeight: o.lh ? String( o.lh ) : undefined,
			letterSpacing: o.ls,
			textTransform: o.upper ? 'uppercase' : undefined,
			// WP 6.8+/7.x store alignment as a typography support; older versions use the attribute.
			textAlign: o.align,
			fontStyle: o.italic ? 'italic' : undefined,
		},
		color: { text: o.color, background: o.bg, gradient: o.gradient },
		elements: o.link ? { link: { color: { text: o.link } } } : undefined,
		spacing: {
			margin:
				o.mt !== undefined || o.mb !== undefined
					? clean( { top: o.mt, bottom: o.mb } )
					: undefined,
			padding: box( o.pad ),
			blockGap: o.gap,
		},
		border: {
			radius: o.radius,
			width: o.bw,
			color: o.bc,
			style: o.bw ? 'solid' : undefined,
		},
		shadow: o.shadow,
	} );
	return Object.keys( s ).length ? s : undefined;
};

// ---------------------------------------------------------------------------
// Core blocks
// ---------------------------------------------------------------------------

export const heading = ( content, o = {} ) =>
	node(
		'core/heading',
		clean( {
			level: o.level || 2,
			content,
			textAlign: o.align,
			style: css( o ),
		} )
	);

export const para = ( content, o = {} ) =>
	node(
		'core/paragraph',
		clean( {
			content,
			align: o.align,
			className: o.className,
			style: css( o ),
		} )
	);

export const image = ( url, alt, o = {} ) =>
	node(
		'core/image',
		clean( {
			url,
			alt,
			sizeSlug: 'full',
			linkDestination: 'none',
			aspectRatio: o.ratio,
			scale: o.ratio ? 'cover' : undefined,
			width: o.width,
			className: o.className,
			style: css( {
				radius: o.radius,
				mt: o.mt,
				mb: o.mb !== undefined ? o.mb : '0',
			} ),
		} )
	);

export const button = ( text, o = {} ) =>
	node(
		'core/button',
		clean( {
			text,
			url: o.url || '#',
			className: o.outline ? 'is-style-outline' : undefined,
			style: css( {
				color: o.color,
				bg: o.outline ? undefined : o.bg,
				radius: o.radius !== undefined ? o.radius : '999px',
				bw: o.outline ? '1.5px' : undefined,
				bc: o.outline ? o.bc || o.color : undefined,
				size: o.size || '15px',
				weight: o.weight || 600,
				pad: o.pad || [ '14px', '28px' ],
			} ),
		} )
	);

export const buttons = ( list, o = {} ) =>
	node(
		'core/buttons',
		clean( {
			layout: {
				type: 'flex',
				justifyContent: o.justify || 'left',
				flexWrap: 'wrap',
			},
			style: css( { mt: o.mt, mb: o.mb, gap: o.gap } ),
		} ),
		list
	);

/**
 * Vertical stack (flow layout) used for cards and text columns.
 * @param children
 * @param o
 */
export const group = ( children, o = {} ) =>
	node(
		'core/group',
		clean( {
			tagName: o.tag,
			layout: o.row
				? {
						type: 'flex',
						flexWrap: o.nowrap ? 'nowrap' : 'wrap',
						justifyContent: o.justify,
						verticalAlignment: o.valign || 'center',
				  }
				: { type: 'default' },
			style: css( o ),
			className: o.className,
		} ),
		children
	);

export const cover = ( url, children, o = {} ) =>
	node(
		'core/cover',
		clean( {
			url,
			alt: o.alt || '',
			dimRatio: o.dim !== undefined ? o.dim : 50,
			customOverlayColor: o.overlay || '#000000',
			isDark: true,
			minHeight: o.minHeight || 560,
			minHeightUnit: 'px',
			contentPosition: o.position || 'center center',
			align: o.align,
			layout: {
				type: 'constrained',
				contentSize: o.contentSize || '1200px',
			},
			style: css( {
				pad: o.pad || [ '80px', '24px' ],
				radius: o.radius,
			} ),
		} ),
		children
	);

export const list = ( items, o = {} ) =>
	node(
		'core/list',
		clean( { style: css( o ) } ),
		items.map( ( content ) => node( 'core/list-item', { content } ) )
	);

export const separator = ( color = '#e2e8f0', o = {} ) =>
	node(
		'core/separator',
		clean( {
			className: 'is-style-wide',
			style: css( {
				color,
				bg: color,
				mt: o.mt || '40px',
				mb: o.mb || '24px',
			} ),
		} )
	);

export const spacer = ( height = '40px' ) => node( 'core/spacer', { height } );

export const socials = ( services, o = {} ) =>
	node(
		'core/social-links',
		clean( {
			iconColorValue: o.color || '#ffffff',
			iconBackgroundColorValue: o.bg || 'rgba(255,255,255,0.12)',
			size: 'has-normal-icon-size',
			layout: { type: 'flex', justifyContent: o.justify || 'left' },
			style: css( { mt: o.mt } ),
		} ),
		services.map( ( service ) =>
			node( 'core/social-link', { service, url: '#' } )
		)
	);

// ---------------------------------------------------------------------------
// Zentro Container helpers
// ---------------------------------------------------------------------------

const resp = ( key, v ) => {
	const [ d, t = d, m = t ] = Array.isArray( v ) ? v : [ v ];
	return { [ key ]: d, [ `${ key }Tablet` ]: t, [ `${ key }Mobile` ]: m };
};

/**
 * Zentro container with every responsive value set explicitly so the
 * block's own tablet/mobile defaults never leak into a pattern.
 *
 * @param {Array}  children Child nodes.
 * @param {Object} o        Options.
 */
export const container = ( children, o = {} ) => {
	const isGrid = !! ( o.cols || o.tpl );
	const gap = o.gap !== undefined ? o.gap : [ 32, 24, 20 ];
	const attrs = {
		hasLayoutSelected: true,
		layoutType: isGrid ? 'grid' : 'block',
		contentWidth: o.width || 'full',
		...resp( 'paddingTop', o.pt !== undefined ? o.pt : o.py || 0 ),
		...resp( 'paddingBottom', o.pb !== undefined ? o.pb : o.py || 0 ),
		...resp( 'paddingLeft', o.px || 0 ),
		...resp( 'paddingRight', o.px || 0 ),
		...resp( 'marginTop', o.mt || 0 ),
		...resp( 'marginBottom', o.mb || 0 ),
	};
	if ( isGrid ) {
		Object.assign(
			attrs,
			resp( 'gridColumns', o.cols || 1 ),
			resp( 'gridTemplateColumns', o.tpl || '' ),
			resp( 'rowGap', o.rowGap !== undefined ? o.rowGap : gap ),
			resp( 'columnGap', gap ),
			resp( 'gap', gap ),
			resp( 'gridRows', 1 )
		);
		attrs.alignItems = o.valign || 'stretch';
	}
	if ( o.bg ) {
		attrs.bgType = 'color';
		attrs.backgroundColor = o.bg;
	}
	if ( o.gradient ) {
		attrs.bgType = 'gradient';
		attrs.bgGradient = o.gradient;
	}
	if ( o.radius ) {
		attrs.borderRadiusTopLeft = o.radius;
		attrs.borderRadiusTopRight = o.radius;
		attrs.borderRadiusBottomLeft = o.radius;
		attrs.borderRadiusBottomRight = o.radius;
		attrs.overflow = 'hidden';
	}
	if ( o.border ) {
		attrs.borderWidth = 1;
		attrs.borderColor = o.border;
	}
	if ( o.align ) {
		attrs.align = o.align;
	}
	if ( o.className ) {
		attrs.customClasses = o.className;
	}
	return node( 'zentro-blocks/container-block', attrs, children );
};

/**
 * Responsive grid inside a section.
 * @param children
 * @param o
 */
export const grid = ( children, o = {} ) =>
	container( children, { cols: [ 3, 2, 1 ], ...o } );

/**
 * Full-bleed section: full-width background + centred 1200px content box.
 *
 * @param {Array}  children Child nodes.
 * @param {Object} o        Options (bg, gradient, py).
 */
export const section = ( children, o = {} ) =>
	container(
		[
			container( children, {
				width: 'boxed',
				px: [ 24, 24, 20 ],
				className: 'gk-section-inner',
			} ),
		],
		{
			align: 'full',
			bg: o.bg,
			gradient: o.gradient,
			py: o.py || [ 100, 80, 64 ],
			pt: o.pt,
			pb: o.pb,
			className: o.className,
		}
	);

/**
 * Section heading block: eyebrow + title + intro.
 * @param eyebrow
 * @param title
 * @param text
 * @param o
 */
export const intro = ( eyebrow, title, text, o = {} ) => {
	const align = o.align || 'center';
	const out = [];
	if ( eyebrow ) {
		out.push(
			para( eyebrow, {
				align,
				color: o.accent || '#2563eb',
				size: '13px',
				weight: 700,
				ls: '0.12em',
				upper: true,
				mb: '12px',
			} )
		);
	}
	out.push(
		heading( title, {
			align,
			color: o.color || '#0f172a',
			size: o.size || 'clamp(1.9rem, 3.6vw, 2.75rem)',
			weight: 700,
			lh: 1.15,
			ls: '-0.02em',
			mt: '0',
			mb: '16px',
		} )
	);
	if ( text ) {
		out.push(
			para( text, {
				align,
				color: o.muted || '#64748b',
				size: '17px',
				lh: 1.7,
				mb: '0',
			} )
		);
	}
	return group( out, {
		mb: o.mb || '48px',
		className: align === 'center' ? 'gk-kit-intro-center' : undefined,
	} );
};

// ---------------------------------------------------------------------------
// Extra helpers (tabs with inner blocks, tables, galleries)
// ---------------------------------------------------------------------------

/**
 * Zentro Tabs with real inner blocks per tab.
 *
 * @param {Array}  items [ { label, blocks: [ nodes ] } ].
 * @param {Object} o     Options (color, align, radius).
 * @return {Object} DSL node.
 */
export const tabs = ( items, o = {} ) =>
	node(
		'zentro-blocks/tabs-block',
		{
			activeColor: o.color || '#2563eb',
			alignment: o.align || 'left',
			borderRadius: o.radius !== undefined ? o.radius : 8,
		},
		items.map( ( t ) =>
			node( 'zentro-blocks/tab-panel', { label: t.label }, t.blocks )
		)
	);

/**
 * Semantic core table.
 *
 * @param {Array}  rows Array of [cell, cell] arrays.
 * @param {Object} o    Options (head: [..], stripes).
 * @return {Object} DSL node.
 */
export const table = ( rows, o = {} ) =>
	node(
		'core/table',
		clean( {
			hasFixedLayout: true,
			className: o.stripes ? 'is-style-stripes' : undefined,
			head: o.head
				? [
						{
							cells: o.head.map( ( content ) => ( {
								content,
								tag: 'th',
							} ) ),
						},
				  ]
				: [],
			body: rows.map( ( r ) => ( {
				cells: r.map( ( content ) => ( { content, tag: 'td' } ) ),
			} ) ),
			style: css( { size: o.size || '16px', color: o.color } ),
		} )
	);

/**
 * Zentro image gallery.
 *
 * @param {Array}  images [ [ url, alt ] ].
 * @param {Object} o      Options.
 * @return {Object} DSL node.
 */
export const gallery = ( images, o = {} ) =>
	node( 'zentro-blocks/image-gallery-block', {
		images: images.map( ( [ url, alt ] ) => ( { url, alt } ) ),
		columnsDesktop: o.cols || 3,
		columnsTablet: o.tab || 2,
		columnsMobile: o.mob || 1,
		gap: o.gap || 16,
		imageRadius: o.radius !== undefined ? o.radius : 12,
		aspectRatio: o.ratio || '4/3',
	} );
