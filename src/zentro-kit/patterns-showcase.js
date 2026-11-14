/**
 * Zentro Kit – showcase patterns: dark bento stats, client logo walls,
 * clean-energy hero and a numbered services list.
 *
 * Section builders are exported so the page templates can reuse them with a
 * different theme (light / dark) instead of duplicating markup.
 */
import {
	img,
	heading,
	para,
	image,
	button,
	buttons,
	group,
	grid,
	section,
} from './dsl';

// Inline colour (native "highlight" rich-text format – survives editing).
export const tint = ( text, color ) =>
	`<mark style="background-color:rgba(0, 0, 0, 0);color:${ color }" class="has-inline-color">${ text }</mark>`;

// Small rounded "pill" eyebrow with a coloured dot.
export const pill = ( text, o = {} ) =>
	para( `${ tint( '●', o.dot || '#22c55e' ) }  ${ text }`, {
		align: o.align || 'center',
		color: o.color || '#d4d4d8',
		bg: o.bg || 'rgba(255,255,255,0.06)',
		size: '13px',
		weight: 500,
		radius: '999px',
		pad: [ '6px', '14px' ],
		mb: o.mb || '20px',
		className:
			o.align === 'left'
				? 'gk-kit-pill gk-kit-pill--left'
				: 'gk-kit-pill',
	} );

// ---------------------------------------------------------------------------
// Bento stats ("Why choose me")
// ---------------------------------------------------------------------------
const statCard = ( value, label, t ) =>
	group(
		[
			heading( value, {
				level: 3,
				color: t.ink,
				size: 'clamp(2.4rem, 4vw, 3.4rem)',
				weight: 300,
				lh: 1,
				ls: '-0.03em',
				mt: '0',
				mb: '0',
			} ),
			para( label, {
				color: t.muted,
				size: '15px',
				lh: 1.5,
				mb: '0',
			} ),
		],
		{
			bg: t.card,
			pad: '28px',
			radius: '16px',
			bw: '1px',
			bc: t.line,
			className: 'gk-kit-bento-card',
		}
	);

export const bentoStats = ( o = {} ) => {
	const t = {
		bg: '#0a0a0b',
		card: '#161618',
		line: 'rgba(255,255,255,0.06)',
		ink: '#fafafa',
		muted: '#a1a1aa',
		...o.theme,
	};
	return section(
		[
			group(
				[
					pill( o.eyebrow || 'Why I’m the best', { mb: '18px' } ),
					heading( o.title || 'Why choose me', {
						align: 'center',
						color: t.ink,
						size: 'clamp(2.2rem, 4.6vw, 3.6rem)',
						weight: 400,
						lh: 1.1,
						ls: '-0.03em',
						mt: '0',
						mb: '16px',
					} ),
					para(
						o.text ||
							'A practical, reliable approach focused on quality, clarity and long-term results.',
						{
							align: 'center',
							color: t.muted,
							size: '17px',
							lh: 1.6,
							mb: '0',
						}
					),
				],
				{ mb: '56px', className: 'gk-kit-intro-center' }
			),
			grid(
				[
					image(
						img( o.photo || '1534528741775-53994a69daeb', 900 ),
						o.photoAlt || 'Portrait of the designer',
						{
							radius: '16px',
							className: 'gk-kit-fill gk-kit-mono',
						}
					),
					grid(
						[
							statCard(
								'10+',
								'Years of hands-on design experience',
								t
							),
							statCard(
								'95%',
								'Average client feedback rate',
								t
							),
							statCard(
								'75+',
								'Projects delivered from concept to launch',
								t
							),
							group(
								[
									group(
										[
											image(
												img(
													'1544005313-94ddf0286df2',
													120
												),
												'Client',
												{
													ratio: '1/1',
													radius: '999px',
												}
											),
											image(
												img(
													'1500648767791-00dcc994a43e',
													120
												),
												'Client',
												{
													ratio: '1/1',
													radius: '999px',
												}
											),
											image(
												img(
													'1438761681033-6461ffad8d80',
													120
												),
												'Client',
												{
													ratio: '1/1',
													radius: '999px',
												}
											),
											heading( '56+', {
												level: 3,
												color: '#0a0a0b',
												size: '28px',
												weight: 500,
												mt: '0',
												mb: '0',
											} ),
										],
										{
											row: true,
											nowrap: true,
											gap: '0',
											className: 'gk-kit-avatars',
										}
									),
									para(
										'<strong>Trusted clients</strong><br>Founders and teams trust me to deliver',
										{
											color: '#52525b',
											size: '15px',
											lh: 1.5,
											mb: '0',
										}
									),
								],
								{
									bg: '#ffffff',
									pad: '28px',
									radius: '16px',
									className: 'gk-kit-bento-card',
								}
							),
						],
						{ cols: [ 2, 2, 1 ], gap: [ 16, 16, 12 ] }
					),
				],
				{
					tpl: [ '1fr 2fr', '1fr', '1fr' ],
					gap: [ 16, 16, 12 ],
				}
			),
		],
		{ bg: t.bg, py: [ 110, 88, 64 ] }
	);
};

// ---------------------------------------------------------------------------
// Client logo walls (fictional wordmarks – replace with real logos)
// ---------------------------------------------------------------------------
const WORDMARKS = [
	[ 'NOVA', { weight: 900, ls: '0.08em' } ],
	[ 'Lumen', { weight: 700, italic: true, ls: '-0.02em' } ],
	[ 'ORBITAL', { weight: 800, italic: true, ls: '-0.03em' } ],
	[ 'kinetic', { weight: 500, ls: '-0.04em' } ],
	[ 'Vertex', { weight: 300, italic: true, ls: '0.02em' } ],
	[ 'HALO', { weight: 600, ls: '0.3em' } ],
];

export const wordmark = ( i, color, size = '28px' ) => {
	const [ name, st ] = WORDMARKS[ i % WORDMARKS.length ];
	return para( name, {
		align: 'center',
		color,
		size,
		lh: 1,
		mb: '0',
		...st,
	} );
};

export const logoCards = ( o = {} ) => {
	const t = {
		bg: '#c9d1dc',
		card: '#ffffff',
		ink: '#0a0a0b',
		...o.theme,
	};
	const n = o.count || 5;
	return section(
		[
			group(
				[
					para( o.label || 'Some of my clients', {
						color: t.ink,
						size: '14px',
						weight: 800,
						upper: true,
						ls: '0.02em',
						mb: '0',
					} ),
					para( o.count2 || '100+ clients', {
						color: t.ink,
						size: '14px',
						weight: 800,
						upper: true,
						mb: '0',
					} ),
				],
				{
					row: true,
					justify: 'space-between',
					mb: '24px',
				}
			),
			grid(
				Array.from( { length: n }, ( _, i ) =>
					group( [ wordmark( i, t.ink ) ], {
						bg: t.card,
						radius: '14px',
						bw: t.line ? '1px' : undefined,
						bc: t.line,
						className: 'gk-kit-logo-card',
					} )
				),
				{
					cols: [ n, 3, 2 ],
					gap: [ 12, 12, 10 ],
				}
			),
		],
		{ bg: t.bg, py: o.py || [ 72, 64, 48 ] }
	);
};

export const logoStrip = ( o = {} ) => {
	const color = o.color || '#94a3b8';
	return section(
		[
			para( o.label || 'Trusted by 2,000+ fast-growing teams worldwide', {
				align: 'center',
				color: o.labelColor || '#64748b',
				size: '14px',
				weight: 500,
				mb: '28px',
			} ),
			grid(
				WORDMARKS.map( ( _, i ) => wordmark( i, color, '24px' ) ),
				{
					cols: [ 6, 3, 2 ],
					gap: [ 32, 28, 24 ],
					rowGap: [ 24, 28, 24 ],
					valign: 'center',
				}
			),
		],
		{ bg: o.bg || '#ffffff', py: o.py || [ 56, 48, 40 ] }
	);
};

// ---------------------------------------------------------------------------
// Numbered list of services / sectors
// ---------------------------------------------------------------------------
export const numberedList = ( items, o = {} ) => {
	const t = {
		ink: '#0a0a0b',
		muted: '#71717a',
		line: '#d4d4d8',
		hl: '#e0f2fe',
		...o.theme,
	};
	return grid(
		items.map( ( it, i ) =>
			group(
				[
					para( String( i + 1 ).padStart( 2, '0' ), {
						color: t.muted,
						size: '14px',
						mb: '0',
						className: 'gk-kit-num',
					} ),
					...( it.photo
						? [
								image( img( it.photo, 200 ), it.title, {
									ratio: '1/1',
									radius: '4px',
								} ),
						  ]
						: [] ),
					group( [
						heading( it.title, {
							level: 3,
							color: t.ink,
							size: 'clamp(1.15rem, 2vw, 1.45rem)',
							weight: 500,
							lh: 1.25,
							mt: '0',
							mb: '6px',
						} ),
						para( it.text, {
							color: t.muted,
							size: '14px',
							lh: 1.55,
							mb: '0',
						} ),
					] ),
				],
				{
					row: true,
					nowrap: true,
					valign: 'top',
					gap: '20px',
					pad: [ '22px', '16px' ],
					bg: it.highlight ? t.hl : undefined,
					className: 'gk-kit-svc-row',
				}
			)
		),
		{ cols: [ 2, 2, 1 ], gap: [ 0, 0, 0 ], rowGap: [ 0, 0, 0 ] }
	);
};

const ENERGY_SECTORS = [
	{
		title: 'Residential Communities',
		text: 'Clean, reliable electricity for homes and neighbourhoods.',
		photo: '1545324418-cc1a3fa10c00',
	},
	{
		title: 'Commercial Enterprises',
		text: 'Cost-effective, eco-friendly power for offices and retail.',
		photo: '1486406146926-c627a92ad1ab',
	},
	{
		title: 'Industrial Facilities',
		text: 'Powering manufacturing plants and large operations sustainably.',
		photo: '1581091226825-a6a2a5aee158',
	},
	{
		title: 'Agriculture',
		text: 'Helping farms run efficiently on renewable energy.',
		photo: '1500382017468-9049fed747ef',
	},
	{
		title: 'Public Infrastructure',
		text: 'Green energy for schools, hospitals and public buildings.',
		photo: '1541339907198-e08756dedf3f',
	},
	{
		title: 'Data Centers',
		text: 'Meeting the high energy demand of modern tech operations.',
		photo: '1558494949-ef010cbdcc31',
		highlight: true,
	},
	{
		title: 'Transportation Hubs',
		text: 'Cutting the carbon footprint of airports, railways and ports.',
		photo: '1474487548417-781cb71495f3',
	},
];

// ---------------------------------------------------------------------------
// Patterns
// ---------------------------------------------------------------------------
export const showcaseCategories = [ { id: 'logos', label: 'Logos & Clients' } ];

export const showcasePatterns = [
	// ================================================================== STATS
	{
		id: 'stats-bento-dark',
		title: 'Why Choose Me – Bento',
		category: 'stats',
		desc: 'Dark bento grid: portrait, three big stats and a trusted-clients card.',
		keywords:
			'bento dark why choose me stats portfolio freelancer personal',
		blocks: () => [ bentoStats() ],
	},

	// ================================================================== LOGOS
	{
		id: 'logos-client-cards',
		title: 'Client Logo Cards',
		category: 'logos',
		desc: 'Five white logo cards on a soft grey band with a client count.',
		keywords: 'logos clients brands partners trusted by cards',
		blocks: () => [ logoCards() ],
	},
	{
		id: 'logos-strip-minimal',
		title: 'Trusted-By Logo Strip',
		category: 'logos',
		desc: 'Minimal single-row logo strip for under a hero section.',
		keywords: 'logos strip trusted by brands minimal social proof',
		blocks: () => [
			logoStrip( {
				bg: '#ffffff',
				py: [ 56, 48, 40 ],
			} ),
		],
	},
	{
		id: 'logos-dark-grid',
		title: 'Logo Grid on Dark',
		category: 'logos',
		desc: 'Bordered logo grid with a headline, on a dark background.',
		keywords: 'logos dark grid partners clients agency',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								para( 'Partners', {
									color: '#a3e635',
									size: '13px',
									weight: 700,
									upper: true,
									ls: '0.12em',
									mb: '12px',
								} ),
								heading(
									'Brands that grow with us, year after year',
									{
										color: '#fafafa',
										size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
										weight: 500,
										lh: 1.15,
										ls: '-0.02em',
										mt: '0',
										mb: '16px',
									}
								),
								para(
									'From seed-stage startups to listed companies – 140+ teams rely on us for design and development.',
									{
										color: '#a1a1aa',
										size: '16px',
										lh: 1.7,
										mb: '0',
									}
								),
							] ),
							grid(
								WORDMARKS.map( ( _, i ) =>
									group(
										[ wordmark( i, '#e4e4e7', '24px' ) ],
										{
											radius: '12px',
											bw: '1px',
											bc: 'rgba(255,255,255,0.1)',
											className: 'gk-kit-logo-card',
										}
									)
								),
								{ cols: [ 3, 3, 2 ], gap: [ 12, 12, 10 ] }
							),
						],
						{
							tpl: [ '1fr 1.4fr', '1fr', '1fr' ],
							gap: [ 64, 40, 32 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#0a0a0b', py: [ 96, 80, 64 ] }
			),
		],
	},

	// =================================================================== HERO
	{
		id: 'hero-energy-split',
		title: 'Clean Energy Hero',
		category: 'hero',
		desc: 'Bright split hero with big headline, two buttons, a project card and a large visual.',
		keywords: 'hero energy solar wind green eco sustainability split image',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								heading( 'Clean Energy, Sustainable Future', {
									level: 1,
									color: '#0a0a0b',
									size: 'clamp(2.6rem, 5.6vw, 4.6rem)',
									weight: 500,
									lh: 1.05,
									ls: '-0.035em',
									mt: '0',
									mb: '20px',
								} ),
								para(
									'We install advanced wind turbines and solar parks that generate reliable, efficient and eco-friendly energy for a greener tomorrow.',
									{
										color: '#52525b',
										size: '17px',
										lh: 1.65,
										mb: '0',
									}
								),
								buttons(
									[
										button( 'Contact us', {
											bg: '#0a0a0b',
											color: '#ffffff',
										} ),
										button( 'About AeroVolt', {
											outline: true,
											color: '#0a0a0b',
										} ),
									],
									{ mt: '32px', gap: '12px' }
								),
								grid(
									[
										group(
											[
												image(
													img(
														'1466611653911-95081537e5b7',
														160
													),
													'Wind farm project',
													{
														ratio: '1/1',
														radius: '10px',
													}
												),
												para(
													'<a href="#">Discover our recent project ↗</a>',
													{
														color: '#0a0a0b',
														link: '#0a0a0b',
														size: '15px',
														weight: 500,
														lh: 1.4,
														mb: '0',
													}
												),
											],
											{
												row: true,
												nowrap: true,
												gap: '14px',
												bg: '#e0f2fe',
												pad: '14px',
												radius: '14px',
												className: 'gk-kit-avatar-row',
											}
										),
										group(
											[
												para( '⚡', {
													size: '18px',
													mb: '0',
													className: 'gk-kit-icon',
												} ),
												para(
													'<strong>48 MW</strong><br>generated last year',
													{
														color: '#52525b',
														size: '13px',
														lh: 1.45,
														mb: '0',
													}
												),
											],
											{
												row: true,
												nowrap: true,
												gap: '12px',
											}
										),
									],
									{
										tpl: [
											'auto auto',
											'auto auto',
											'1fr',
										],
										gap: [ 28, 24, 16 ],
										valign: 'center',
										mt: 56,
									}
								),
							] ),
							image(
								img( '1532601224476-15c79f2f7a51', 1200 ),
								'Wind turbines on green hills',
								{ ratio: '4/5', radius: '28px' }
							),
						],
						{
							tpl: [ '1.05fr 1fr', '1fr', '1fr' ],
							gap: [ 64, 48, 36 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#ffffff', py: [ 96, 72, 48 ] }
			),
		],
	},

	// =============================================================== FEATURES
	{
		id: 'features-numbered-list',
		title: 'Numbered Services List',
		category: 'features',
		desc: 'Two-column numbered list with thumbnails, divider lines and a highlighted item.',
		keywords: 'services list numbered sectors industries energy thumbnails',
		blocks: () => [
			section(
				[
					group(
						[
							heading( 'Our energy runs', {
								color: '#0a0a0b',
								size: 'clamp(2rem, 4vw, 3rem)',
								weight: 500,
								ls: '-0.03em',
								mt: '0',
								mb: '0',
							} ),
							buttons( [
								button( 'Contact us', {
									bg: '#0a0a0b',
									color: '#ffffff',
									pad: [ '10px', '22px' ],
								} ),
							] ),
						],
						{
							row: true,
							justify: 'space-between',
							gap: '16px',
							mb: '40px',
						}
					),
					numberedList( ENERGY_SECTORS ),
				],
				{ bg: '#ffffff', py: [ 96, 80, 56 ] }
			),
		],
	},
];
