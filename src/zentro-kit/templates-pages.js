/**
 * Zentro Kit – inner page templates (About, Team, Services, Service details,
 * Pricing, Case study, Portfolio).
 *
 * Neutral, industry-agnostic copy: the demo brand "Northstar" is a studio that
 * works for agencies, real estate, SaaS and healthcare clients, so every page
 * fits a business, agency or real-estate site after a quick text swap.
 */
import {
	node,
	img,
	image,
	button,
	buttons,
	group,
	cover,
	container,
	grid,
	section,
	tabs,
	table,
	gallery,
} from './dsl';
import { tint, pill, logoStrip, numberedList } from './patterns-showcase';
import { header } from './templates-extra';
import {
	H,
	P,
	I,
	btn,
	obtn,
	card,
	person,
	checks,
	iconTile,
	stars,
	footer,
} from './templates-sites';

const T = {
	ink: '#0f172a',
	muted: '#64748b',
	accent: '#2563eb',
	soft: '#f1f5f9',
	line: '#e2e8f0',
	card: '#ffffff',
	dark: '#0b1220',
};

const DARK = {
	...T,
	ink: '#f8fafc',
	muted: '#94a3b8',
	card: '#111a2e',
	line: 'rgba(248,250,252,0.08)',
};

// ---------------------------------------------------------------------------
// Shared page parts
// ---------------------------------------------------------------------------
const nav = () =>
	header(
		'Northstar',
		[ 'About', 'Services', 'Work', 'Pricing', 'Team' ],
		[
			btn( 'Let’s talk', T, {
				pad: [ '10px', '20px' ],
				size: '14px',
			} ),
		],
		{ ink: T.ink, muted: T.muted, bg: '#ffffff' }
	);

const crumbs = ( trail ) =>
	P( [ '<a href="#">Home</a>', ...trail ].join( '  /  ' ), T, {
		size: '14px',
		link: T.muted,
		mb: '20px',
	} );

const pageHero = ( trail, eyebrow, title, text, o = {} ) =>
	section(
		[
			group(
				[
					crumbs( trail ),
					pill( eyebrow, {
						align: o.center ? 'center' : 'left',
						dot: T.accent,
						color: T.ink,
						bg: '#ffffff',
					} ),
					H( title, T, {
						level: 1,
						align: o.center ? 'center' : undefined,
						size: 'clamp(2.5rem, 5.6vw, 4.4rem)',
						lh: 1.05,
						ls: '-0.035em',
						mb: '20px',
					} ),
					P( text, T, {
						align: o.center ? 'center' : undefined,
						size: '18px',
					} ),
					...( o.after || [] ),
				],
				{
					className: o.center
						? 'gk-kit-intro-center gk-kit-crumbs-center'
						: 'gk-kit-hero-narrow',
				}
			),
			...( o.below || [] ),
		],
		{
			gradient:
				'linear-gradient(180deg,#eef2ff 0%,#f8fafc 60%,#ffffff 100%)',
			py: [ 80, 64, 48 ],
		}
	);

const ctaBand = ( title, text, cta = 'Book a free call' ) =>
	section(
		[
			grid(
				[
					group( [
						H( title, DARK, {
							size: 'clamp(1.9rem, 3.6vw, 2.75rem)',
						} ),
						P( text, DARK ),
					] ),
					buttons(
						[
							btn( cta, T ),
							obtn( 'See our work', '#ffffff', {
								bc: 'rgba(255,255,255,0.3)',
							} ),
						],
						{ justify: 'right', gap: '12px' }
					),
				],
				{
					tpl: [ '1.4fr 1fr', '1fr', '1fr' ],
					gap: [ 48, 28, 24 ],
					valign: 'center',
				}
			),
		],
		{
			gradient:
				'radial-gradient(circle at 85% 20%,#1e3a8a 0%,#0b1220 55%)',
			py: [ 88, 72, 56 ],
		}
	);

const pageFooter = () =>
	footer(
		'Northstar',
		'Strategy, design and growth for agencies, real estate and product companies.<br>hello@example.com · +1 555 0199 220',
		[
			[ 'Company', [ 'About', 'Team', 'Careers', 'Contact' ] ],
			[
				'Services',
				[ 'Branding', 'Web design', 'Marketing', 'Real estate' ],
			],
			[ 'Resources', [ 'Case studies', 'Pricing', 'Blog', 'FAQ' ] ],
		],
		{ ...T, fBg: '#ffffff' },
		{ socials: [ 'linkedin', 'instagram', 'x' ] }
	);

const counter = ( targetNumber, suffix, label, o = {} ) =>
	node( 'zentro-blocks/animated-counter', {
		targetNumber,
		suffix,
		prefix: o.prefix || '',
		label,
		numberColor: o.color || T.ink,
		labelColor: o.labelColor || T.muted,
		numberSize: o.size || 44,
		labelSize: 15,
		alignment: o.align || 'left',
		duration: 1800,
	} );

const accordion = ( panels ) =>
	node( 'zentro-blocks/accordion-block', {
		panels: panels.map( ( [ title, content ] ) => ( { title, content } ) ),
		activeColor: T.accent,
		titleBgColor: '#f8fafc',
		contentBgColor: '#ffffff',
		borderRadius: 12,
		allowMultiple: false,
	} );

const price = ( planTitle, p, period, features, o = {} ) =>
	node( 'zentro-blocks/pricing-card-block', {
		planTitle,
		price: p,
		currencySymbol: '$',
		billingPeriod: period,
		features,
		isPopular: !! o.popular,
		badgeText: o.badge || 'Most popular',
		buttonLabel: o.cta || 'Get started',
		primaryColor: o.popular ? T.accent : T.ink,
		cardBgColor: '#ffffff',
		textColor: T.ink,
		borderRadius: 20,
	} );

const iconCard = ( icon, title, text, o = {} ) =>
	card(
		[
			iconTile( icon, o.tile || '#eff6ff' ),
			H( title, o.t || T, { level: 3, size: '19px', mb: '8px' } ),
			P( text, o.t || T, { size: '15px', mb: o.link ? '16px' : '0' } ),
			...( o.link
				? [
						P( `<a href="#">${ o.link } →</a>`, T, {
							color: T.accent,
							link: T.accent,
							size: '14px',
							weight: 700,
						} ),
				  ]
				: [] ),
		],
		o.t || T,
		{ bg: o.bg }
	);

const quoteBlock = ( text, photo, name, role, t = T ) =>
	group(
		[
			P( '“', t, {
				color: T.accent,
				size: '72px',
				lh: 0.6,
				mb: '20px',
				align: 'center',
			} ),
			H( text, t, {
				align: 'center',
				size: 'clamp(1.4rem, 2.8vw, 2.1rem)',
				weight: 500,
				lh: 1.4,
				mb: '28px',
			} ),
			group( [ person( photo, name, role, t ) ], {
				className: 'gk-kit-center-row',
			} ),
		],
		{ className: 'gk-kit-intro-center' }
	);

const project = ( photo, title, tags, o = {} ) =>
	group(
		[
			image( img( photo, 900 ), title, {
				ratio: o.ratio || '4/3',
				radius: '18px',
			} ),
			group(
				[
					H( title, o.t || T, {
						level: 3,
						size: '19px',
						mb: '0',
					} ),
					P( tags, o.t || T, { size: '14px' } ),
				],
				{
					row: true,
					justify: 'space-between',
					gap: '8px',
					mt: '16px',
				}
			),
		],
		{ className: o.className }
	);

const member = ( photo, name, role ) =>
	group(
		[
			image( img( photo, 600 ), name, { ratio: '4/5', radius: '18px' } ),
			H( name, T, { level: 3, size: '18px', mb: '2px' } ),
			P( role, T, { size: '14px' } ),
		],
		{ gap: '14px', className: 'gk-kit-member' }
	);

// Demo content shared by several pages.
const SERVICES = [
	[
		'🎯',
		'Brand strategy',
		'Positioning, naming and messaging that make you the obvious choice.',
	],
	[
		'🎨',
		'Brand identity',
		'Logos, colour, typography and guidelines your team can use.',
	],
	[
		'💻',
		'Web design &amp; development',
		'Fast, accessible websites on WordPress and headless stacks.',
	],
	[
		'📈',
		'Performance marketing',
		'SEO, paid social and search campaigns tied to revenue.',
	],
	[
		'🏠',
		'Real estate marketing',
		'Launch campaigns, listing sites and 3D tours for developers.',
	],
	[
		'📱',
		'Product &amp; app design',
		'Research-led UX and UI for SaaS and mobile products.',
	],
];

const TEAM = [
	[ '1573497019940-1c28c88b4f3e', 'Olivia Hart', 'Creative Director' ],
	[ '1507003211169-0a1dd7228f2d', 'Marcus Lee', 'Head of Strategy' ],
	[ '1580489944761-15a19d654956', 'Sofia Romero', 'Lead Designer' ],
	[ '1500648767791-00dcc994a43e', 'Daniel Park', 'Tech Lead' ],
	[ '1438761681033-6461ffad8d80', 'Emma Novak', 'Brand Designer' ],
	[ '1556157382-97eda2d62296', 'Leo Fischer', 'Growth Marketer' ],
	[ '1544005313-94ddf0286df2', 'Aisha Khan', 'UX Researcher' ],
	[ '1507679799987-c73779587ccf', 'Noah Bennett', 'Account Director' ],
];

const PROJECTS = {
	harbor: [
		'1600585154340-be6161a56a0c',
		'Harborview Homes',
		'Real estate · Launch',
	],
	villa: [
		'1613490493576-7fde63acd811',
		'Lakeside Villas',
		'Real estate · Web',
	],
	fin: [ '1460925895917-afdab827c52f', 'Fluxo Finance', 'SaaS · Product' ],
	mellow: [ '1626785774573-4b799315345d', 'Mellow Coffee', 'Branding' ],
	routa: [ '1586717791821-3f44a563fa4c', 'Routa Travel', 'App · UX' ],
	bloom: [ '1609921212029-bb5a28e60960', 'Bloom Skincare', 'Packaging' ],
	care: [
		'1576091160550-2173dba999ef',
		'CareWell Clinics',
		'Healthcare · Web',
	],
	loft: [
		'1600607687939-ce8a6c25118c',
		'Urban Lofts',
		'Real estate · Brand',
	],
	pulse: [ '1551288049-bebda4e38f71', 'Pulse Analytics', 'SaaS · Web' ],
};

const proj = ( key, o ) => project( ...PROJECTS[ key ], o );

// ===========================================================================
// About
// ===========================================================================
const about = () => [
	nav(),
	pageHero(
		[ 'About' ],
		'About Northstar',
		`We build brands, websites and places ${ tint(
			'people love',
			T.accent
		) }.`,
		'Since 2014 we have helped 300+ agencies, property developers and product companies grow with strategy, design and marketing that works together.',
		{
			below: [
				image(
					img( '1522071820081-009f0129c71c', 1800 ),
					'The Northstar team at work',
					{ ratio: '21/9', radius: '24px', mt: '56px' }
				),
			],
		}
	),
	section(
		[
			grid(
				[
					group( [
						P( 'Our story', T, {
							color: T.accent,
							size: '13px',
							weight: 700,
							upper: true,
							ls: '0.12em',
							mb: '12px',
						} ),
						H( 'From a two-person studio to a team of 40', T, {
							size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
						} ),
					] ),
					group( [
						P(
							'Northstar started in a small Lisbon office with one belief: great design should be measured by the results it creates. Our first clients were local real estate developers who needed more than pretty brochures – they needed sold-out launches.',
							T,
							{ size: '17px', mb: '18px' }
						),
						P(
							'Today we work with brands across Europe and North America, but the approach is the same: listen first, decide with data and craft every detail. Most of our clients have been with us for more than three years.',
							T,
							{ size: '17px', mb: '24px' }
						),
						person(
							'1573497019940-1c28c88b4f3e',
							'Olivia Hart',
							'Founder &amp; Creative Director',
							T
						),
					] ),
				],
				{
					tpl: [ '1fr 1.3fr', '1fr', '1fr' ],
					gap: [ 80, 32, 24 ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					counter( 12, '+', 'Years in business', {
						color: '#ffffff',
						labelColor: '#94a3b8',
					} ),
					counter( 320, '+', 'Projects delivered', {
						color: '#ffffff',
						labelColor: '#94a3b8',
					} ),
					counter( 40, '', 'Team members', {
						color: '#ffffff',
						labelColor: '#94a3b8',
					} ),
					counter( 98, '%', 'Client retention', {
						color: '#ffffff',
						labelColor: '#94a3b8',
					} ),
				],
				{ cols: [ 4, 2, 2 ], gap: [ 32, 32, 24 ] }
			),
		],
		{ bg: T.dark, py: [ 72, 64, 48 ] }
	),
	section(
		[
			I(
				T,
				'What drives us',
				'Mission, vision and values',
				'The principles behind every project we take on.'
			),
			grid(
				[
					iconCard(
						'🚀',
						'Our mission',
						'Help ambitious companies grow with design that is measurable, not just beautiful.'
					),
					iconCard(
						'🔭',
						'Our vision',
						'A world where every business – big or small – has a brand it is proud of.'
					),
					iconCard(
						'🤝',
						'Partnership',
						'We work as an extension of your team, with full transparency and shared goals.'
					),
					iconCard(
						'✨',
						'Craft',
						'Details matter. We sweat the small things so your customers never have to.'
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	section(
		[
			I( T, 'Our journey', 'Milestones along the way', '', {
				align: 'left',
			} ),
			grid(
				[
					[
						'2014',
						'Founded in Lisbon',
						'Two designers, one desk and a first real estate client.',
					],
					[
						'2017',
						'First international office',
						'Opened in Berlin to serve clients across Europe.',
					],
					[
						'2021',
						'200 projects',
						'Expanded into SaaS, healthcare and e-commerce.',
					],
					[
						'2026',
						'Team of 40',
						'Strategy, design, development and growth under one roof.',
					],
				].map( ( [ year, title, text ] ) =>
					group(
						[
							H( year, T, {
								level: 3,
								size: 'clamp(2rem, 3.6vw, 2.6rem)',
								color: T.accent,
								weight: 300,
								mb: '10px',
							} ),
							H( title, T, {
								level: 4,
								size: '18px',
								mb: '6px',
							} ),
							P( text, T, { size: '15px' } ),
						],
						{
							pad: [ '24px', '0', '0' ],
							className: 'gk-kit-topline',
						}
					)
				),
				{ cols: [ 4, 2, 1 ], gap: [ 32, 32, 8 ] }
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					I( T, 'Leadership', 'The people who lead Northstar', '', {
						align: 'left',
						mb: '0',
					} ),
					buttons(
						[ obtn( 'Meet the full team', T.ink, { bc: T.line } ) ],
						{
							justify: 'right',
						}
					),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 24, 24, 20 ],
					valign: 'end',
					mb: 40,
				}
			),
			grid(
				TEAM.slice( 0, 4 ).map( ( m ) => member( ...m ) ),
				{ cols: [ 4, 2, 2 ], gap: [ 24, 20, 16 ] }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	logoStrip( {
		label: 'Trusted by 300+ companies worldwide',
		bg: '#ffffff',
	} ),
	section(
		[
			quoteBlock(
				'Northstar feels like part of our company. They rebranded us, rebuilt our website and doubled our qualified leads within a year.',
				'1560250097-0b93528c311a',
				'Thomas Berg',
				'CEO, Harborview Homes'
			),
		],
		{ bg: '#ffffff', py: [ 40, 32, 24 ], pb: [ 100, 80, 56 ] }
	),
	ctaBand(
		'Let’s build something great together',
		'Tell us about your goals – we reply within one business day.'
	),
	pageFooter(),
];

// ===========================================================================
// Team
// ===========================================================================
const founder = ( photo, name, role, bio ) =>
	grid(
		[
			image( img( photo, 800 ), name, { ratio: '4/5', radius: '20px' } ),
			group( [
				P( role, T, {
					color: T.accent,
					size: '13px',
					weight: 700,
					upper: true,
					ls: '0.1em',
					mb: '8px',
				} ),
				H( name, T, { level: 3, size: '28px', mb: '12px' } ),
				P( bio, T, { size: '15px', mb: '20px' } ),
				node(
					'core/social-links',
					{
						iconColorValue: T.ink,
						iconBackgroundColorValue: T.soft,
						size: 'has-normal-icon-size',
						layout: { type: 'flex' },
					},
					[ 'linkedin', 'x', 'mail' ].map( ( service ) =>
						node( 'core/social-link', { service, url: '#' } )
					)
				),
			] ),
		],
		{
			tpl: [ '1fr 1.2fr', '1fr 1.2fr', '1fr' ],
			gap: [ 28, 24, 20 ],
			valign: 'center',
		}
	);

const job = ( role, meta ) =>
	group(
		[
			group( [
				H( role, T, { level: 3, size: '19px', mb: '4px' } ),
				P( meta, T, { size: '14px' } ),
			] ),
			buttons( [
				obtn( 'Apply', T.ink, {
					bc: T.line,
					pad: [ '10px', '22px' ],
					size: '14px',
				} ),
			] ),
		],
		{
			row: true,
			justify: 'space-between',
			gap: '16px',
			pad: [ '22px', '0' ],
			className: 'gk-kit-topline',
		}
	);

const team = () => [
	nav(),
	pageHero(
		[ 'Team' ],
		'Our team',
		'The people behind every project',
		'Strategists, designers, engineers and marketers – 40 specialists in Lisbon, Berlin and remote, working as one team for your goals.',
		{ center: true }
	),
	section(
		[
			grid(
				[
					founder(
						'1573497019940-1c28c88b4f3e',
						'Olivia Hart',
						'Founder &amp; Creative Director',
						'Olivia founded Northstar in 2014 after ten years leading brand teams for property developers and tech companies. She still reviews every launch personally.'
					),
					founder(
						'1507003211169-0a1dd7228f2d',
						'Marcus Lee',
						'Co-founder &amp; Head of Strategy',
						'Marcus turns business goals into clear roadmaps. Before Northstar he grew two SaaS companies from seed to Series B as VP of Marketing.'
					),
				],
				{ cols: [ 2, 1, 1 ], gap: [ 48, 40, 48 ] }
			),
		],
		{ bg: '#ffffff', py: [ 40, 32, 24 ], pb: [ 100, 80, 56 ] }
	),
	section(
		[
			I(
				T,
				'The crew',
				'Meet the team',
				'Talented people who care about your results as much as you do.'
			),
			grid(
				TEAM.map( ( m ) => member( ...m ) ),
				{
					cols: [ 4, 3, 2 ],
					gap: [ 24, 20, 16 ],
					rowGap: [ 40, 32, 28 ],
				}
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					grid(
						[
							image(
								img( '1552664730-d307ca884978', 700 ),
								'Team workshop',
								{
									ratio: '3/4',
									radius: '20px',
								}
							),
							group(
								[
									image(
										img( '1553877522-43269d4ea984', 700 ),
										'Bright office',
										{
											ratio: '3/4',
											radius: '20px',
										}
									),
								],
								{ className: 'gk-kit-offset' }
							),
						],
						{ cols: [ 2, 2, 2 ], gap: [ 16, 16, 12 ] }
					),
					group( [
						I(
							T,
							'Life at Northstar',
							'A culture built on trust and craft',
							'We hire great people and give them the freedom, tools and time to do their best work.',
							{ align: 'left', mb: '24px' }
						),
						checks(
							[
								'4-day work week in summer',
								'Remote-first with two beautiful studios',
								'$2,000 yearly learning budget',
								'Private health insurance',
								'Team retreat every spring',
							],
							T
						),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 80, 48, 40 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						I(
							T,
							'Careers',
							'Join our team',
							'We are always looking for curious, kind and talented people.',
							{ align: 'left', mb: '24px' }
						),
						buttons( [ btn( 'See all openings', T ) ] ),
					] ),
					group( [
						job(
							'Senior Brand Designer',
							'Lisbon or remote · Full-time'
						),
						job( 'WordPress Developer', 'Remote (EU) · Full-time' ),
						job(
							'Performance Marketing Lead',
							'Berlin · Full-time'
						),
						job( 'UX Research Intern', 'Lisbon · 6 months' ),
					] ),
				],
				{
					tpl: [ '1fr 1.4fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
				}
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	ctaBand(
		'Want to work with this team?',
		'Book a free 30-minute call with one of our strategists.'
	),
	pageFooter(),
];

// ===========================================================================
// Services
// ===========================================================================
const industry = ( photo, title, text, items ) => [
	grid(
		[
			image( img( photo, 900 ), title, { ratio: '4/3', radius: '20px' } ),
			group( [
				H( title, T, { level: 3, size: 'clamp(1.5rem, 2.6vw, 2rem)' } ),
				P( text, T, { mb: '20px' } ),
				checks( items, T ),
				buttons( [ btn( 'View case studies', T ) ], { mt: '24px' } ),
			] ),
		],
		{
			tpl: [ '1fr 1fr', '1fr', '1fr' ],
			gap: [ 56, 32, 28 ],
			valign: 'center',
		}
	),
];

const services = () => [
	nav(),
	section(
		[
			grid(
				[
					group( [
						crumbs( [ 'Services' ] ),
						pill( 'What we do', {
							align: 'left',
							dot: T.accent,
							color: T.ink,
							bg: '#ffffff',
						} ),
						H( 'Services that grow your business', T, {
							level: 1,
							size: 'clamp(2.5rem, 5.4vw, 4.2rem)',
							lh: 1.05,
							ls: '-0.035em',
							mb: '20px',
						} ),
						P(
							'One partner for strategy, brand, website and marketing – so every channel tells the same story and drives the same goal.',
							T,
							{ size: '18px' }
						),
						buttons(
							[
								btn( 'Get a proposal', T ),
								obtn( 'Our process', T.ink, { bc: T.line } ),
							],
							{ mt: '32px', gap: '12px' }
						),
					] ),
					image(
						img( '1542744173-8e7e53415bb0', 1000 ),
						'Strategy workshop',
						{
							ratio: '4/3',
							radius: '24px',
						}
					),
				],
				{
					tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 48, 36 ],
					valign: 'center',
				}
			),
		],
		{
			gradient: 'linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)',
			py: [ 80, 64, 48 ],
		}
	),
	section(
		[
			I(
				T,
				'Our services',
				'Everything you need to launch and grow',
				''
			),
			grid(
				SERVICES.map( ( [ icon, title, text ] ) =>
					iconCard( icon, title, text, { link: 'Learn more' } )
				),
				{ cols: [ 3, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			I(
				DARK,
				'How we work',
				'A proven four-step process',
				'Clear milestones, weekly updates and no surprises.'
			),
			grid(
				[
					[
						'01',
						'Discover',
						'Workshops, research and competitor analysis.',
					],
					[
						'02',
						'Strategy',
						'Positioning, goals and a clear roadmap.',
					],
					[
						'03',
						'Create',
						'Design and build, tested with real users.',
					],
					[
						'04',
						'Grow',
						'Launch, measure and optimise every month.',
					],
				].map( ( [ n, title, text ] ) =>
					card(
						[
							P( n, DARK, {
								color: '#60a5fa',
								weight: 700,
								size: '14px',
								mb: '28px',
							} ),
							H( title, DARK, {
								level: 3,
								size: '20px',
								mb: '8px',
							} ),
							P( text, DARK, { size: '15px' } ),
						],
						DARK
					)
				),
				{ cols: [ 4, 2, 1 ], gap: [ 16, 16, 12 ] }
			),
		],
		{ bg: T.dark, py: [ 100, 80, 56 ] }
	),
	section(
		[
			I(
				T,
				'Industries',
				'Experts in your industry',
				'Specialised teams who already know your market.'
			),
			tabs(
				[
					{
						label: 'Real estate',
						blocks: industry(
							'1600585154340-be6161a56a0c',
							'Real estate &amp; property',
							'Launch campaigns, listing websites and lead funnels that sell homes faster.',
							[
								'Project branding &amp; sales centres',
								'Listing sites with search &amp; maps',
								'Paid campaigns for buyers and renters',
							]
						),
					},
					{
						label: 'Agencies',
						blocks: industry(
							'1552581234-26160f608093',
							'Agencies &amp; consultancies',
							'White-label design and development for agencies that need extra hands.',
							[
								'White-label WordPress builds',
								'Pitch decks and brand systems',
								'Flexible monthly retainers',
							]
						),
					},
					{
						label: 'SaaS',
						blocks: industry(
							'1551288049-bebda4e38f71',
							'SaaS &amp; technology',
							'Product marketing sites and UX that turn trials into paying customers.',
							[
								'Conversion-focused landing pages',
								'Product UX audits',
								'Content and SEO programmes',
							]
						),
					},
					{
						label: 'Healthcare',
						blocks: industry(
							'1576091160550-2173dba999ef',
							'Healthcare &amp; clinics',
							'Trustworthy, accessible websites with online booking and patient journeys.',
							[
								'Accessible, GDPR-ready websites',
								'Online booking integrations',
								'Local SEO for every location',
							]
						),
					},
				],
				{ color: T.accent, align: 'center', radius: 999 }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						I(
							T,
							'Why Northstar',
							'Results you can measure',
							'We tie every project to clear goals and report on them monthly.',
							{ align: 'left', mb: '32px' }
						),
						grid(
							[
								counter( 3, '×', 'More qualified leads' ),
								counter( 42, '%', 'Lower cost per lead' ),
								counter( 98, '%', 'Client retention' ),
								counter( 4, '.9 ★', 'Average rating' ),
							],
							{ cols: [ 2, 2, 2 ], gap: [ 24, 24, 20 ] }
						),
					] ),
					image(
						img( '1600880292203-757bb62b4baf', 1000 ),
						'Client celebrating results',
						{
							ratio: '1/1',
							radius: '24px',
						}
					),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 80, 48, 40 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			I( T, 'FAQ', 'Common questions', '' ),
			group(
				[
					accordion( [
						[
							'How long does a typical project take?',
							'Brand projects take 4–6 weeks, websites 6–10 weeks. You get a detailed timeline in our proposal.',
						],
						[
							'Do you work with small businesses?',
							'Yes. We have packages for startups and local businesses as well as enterprise retainers.',
						],
						[
							'Can you work with our in-house team?',
							'Absolutely – many clients use us to extend their own marketing or product team.',
						],
						[
							'What does it cost?',
							'Projects start at $4,900. See our pricing page or book a call for a custom quote.',
						],
					] ),
				],
				{ className: 'gk-kit-intro-center' }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	ctaBand(
		'Not sure which service you need?',
		'Book a free strategy call – we will recommend the right next step.'
	),
	pageFooter(),
];

// ===========================================================================
// Service details
// ===========================================================================
const sideLinks = ( active ) =>
	card(
		[
			H( 'All services', T, { level: 3, size: '18px', mb: '14px' } ),
			...SERVICES.map( ( [ , title ] ) =>
				P(
					`<a href="#">${ title }</a>`,
					T,
					title === active
						? {
								bg: T.accent,
								color: '#ffffff',
								link: '#ffffff',
								weight: 600,
								size: '15px',
								className: 'gk-kit-side-link is-active',
						  }
						: {
								color: T.ink,
								link: T.ink,
								size: '15px',
								className: 'gk-kit-side-link',
						  }
				)
			),
		],
		T,
		{ pad: '24px' }
	);

const serviceDetails = () => {
	const active = 'Web design &amp; development';
	return [
		nav(),
		section(
			[
				group(
					[
						P(
							'<a href="#">Home</a>  /  <a href="#">Services</a>  /  Web design &amp; development',
							DARK,
							{ size: '14px', link: DARK.muted, mb: '20px' }
						),
						H( 'Web design &amp; development', DARK, {
							level: 1,
							size: 'clamp(2.4rem, 5.4vw, 4rem)',
							lh: 1.06,
							ls: '-0.035em',
							mb: '20px',
						} ),
						P(
							'Fast, beautiful websites that turn visitors into customers – designed around your goals and built to grow with you.',
							DARK,
							{ size: '18px' }
						),
					],
					{ className: 'gk-kit-hero-narrow' }
				),
			],
			{
				gradient:
					'radial-gradient(circle at 80% 0%,#1e3a8a 0%,#0b1220 60%)',
				py: [ 96, 80, 56 ],
			}
		),
		section(
			[
				grid(
					[
						group( [
							image(
								img( '1499951360447-b19be8fe80f5', 1400 ),
								'Website design on a desktop',
								{
									ratio: '16/9',
									radius: '20px',
									mb: '40px',
								}
							),
							H( 'Overview', T, {
								size: 'clamp(1.6rem, 3vw, 2.2rem)',
							} ),
							P(
								'Your website is your hardest-working salesperson. We combine strategy, UX, design and development to create sites that load in under a second, rank on Google and make it easy for visitors to take the next step – whether that is booking a viewing, starting a trial or calling your team.',
								T,
								{ size: '17px', mb: '40px' }
							),
							H( 'What’s included', T, {
								size: 'clamp(1.4rem, 2.6vw, 1.8rem)',
							} ),
							grid(
								[
									checks(
										[
											'UX research &amp; sitemap',
											'Custom design system',
											'WordPress or headless build',
											'Copywriting support',
										],
										T
									),
									checks(
										[
											'Technical SEO setup',
											'Speed &amp; accessibility audit',
											'Analytics &amp; tracking',
											'3 months free support',
										],
										T
									),
								],
								{
									cols: [ 2, 2, 1 ],
									gap: [ 24, 24, 0 ],
									mb: 40,
								}
							),
							H( 'Our process', T, {
								size: 'clamp(1.4rem, 2.6vw, 1.8rem)',
								mb: '8px',
							} ),
							numberedList(
								[
									{
										title: 'Discovery workshop',
										text: 'Goals, audience, competitors and success metrics.',
									},
									{
										title: 'UX &amp; wireframes',
										text: 'Sitemap and page structure, tested with real users.',
									},
									{
										title: 'Design &amp; build',
										text: 'Pixel-perfect design and clean, fast code.',
									},
									{
										title: 'Launch &amp; grow',
										text: 'Go live, measure and improve every month.',
									},
								],
								{
									theme: {
										ink: T.ink,
										muted: T.muted,
										hl: '#eff6ff',
									},
								}
							),
							grid(
								[
									card(
										[
											counter(
												800,
												'ms',
												'Average load time',
												{ color: T.accent }
											),
										],
										T,
										{ bg: T.soft, bw: false }
									),
									card(
										[
											counter(
												95,
												'+',
												'PageSpeed score',
												{ color: T.accent }
											),
										],
										T,
										{ bg: T.soft, bw: false }
									),
									card(
										[
											counter(
												2,
												'×',
												'Conversion rate',
												{ color: T.accent }
											),
										],
										T,
										{ bg: T.soft, bw: false }
									),
								],
								{
									cols: [ 3, 3, 1 ],
									gap: [ 16, 16, 12 ],
									mt: 40,
									mb: 40,
								}
							),
							H( 'Frequently asked questions', T, {
								size: 'clamp(1.4rem, 2.6vw, 1.8rem)',
							} ),
							accordion( [
								[
									'Which platform do you build on?',
									'Mostly WordPress with the block editor, so your team can edit everything. For complex products we also build headless sites.',
								],
								[
									'Can you redesign my existing site?',
									'Yes – we migrate your content and keep your SEO rankings safe with proper redirects.',
								],
								[
									'Do you offer hosting and maintenance?',
									'We offer managed hosting and care plans from $149 per month.',
								],
							] ),
						] ),
						group(
							[
								sideLinks( active ),
								group(
									[
										H( 'Need help choosing?', DARK, {
											level: 3,
											size: '22px',
											mb: '10px',
										} ),
										P(
											'Talk to a strategist – free, no obligation.',
											DARK,
											{ size: '15px', mb: '18px' }
										),
										H( '+1 555 0199 220', DARK, {
											level: 4,
											size: '20px',
											color: '#60a5fa',
											mb: '18px',
										} ),
										buttons( [ btn( 'Book a call', T ) ] ),
									],
									{
										bg: T.dark,
										pad: '28px',
										radius: '18px',
										mt: '20px',
									}
								),
								card(
									[
										H( 'Download brochure', T, {
											level: 3,
											size: '18px',
											mb: '6px',
										} ),
										P(
											'Services, process and prices (PDF, 2 MB).',
											T,
											{ size: '14px', mb: '14px' }
										),
										buttons( [
											obtn( 'Download', T.ink, {
												bc: T.line,
												pad: [ '10px', '20px' ],
												size: '14px',
											} ),
										] ),
									],
									T,
									{ pad: '24px', className: 'gk-kit-mt-20' }
								),
							],
							{ className: 'gk-kit-sticky' }
						),
					],
					{
						tpl: [ '2fr 1fr', '1fr', '1fr' ],
						gap: [ 56, 48, 40 ],
						valign: 'start',
					}
				),
			],
			{ bg: '#ffffff', py: [ 100, 80, 56 ] }
		),
		section(
			[
				I(
					T,
					'Packages',
					'Choose the right package',
					'Fixed prices, clear deliverables.'
				),
				grid(
					[
						price( 'Starter site', '4,900', ' one-time', [
							'Up to 6 pages',
							'Template-based design',
							'Basic SEO setup',
							'1 month support',
						] ),
						price(
							'Business site',
							'9,800',
							' one-time',
							[
								'Up to 15 pages',
								'Custom design system',
								'Advanced SEO &amp; analytics',
								'3 months support',
							],
							{ popular: true }
						),
						price(
							'Custom platform',
							'19,500',
							' from',
							[
								'Unlimited pages',
								'Integrations &amp; portals',
								'Headless or multisite',
								'6 months support',
							],
							{ cta: 'Request a quote' }
						),
					],
					{ cols: [ 3, 1, 1 ], gap: [ 24, 20, 20 ] }
				),
			],
			{ bg: T.soft, py: [ 100, 80, 56 ] }
		),
		section(
			[
				I( T, 'Related', 'Other services you may need', '' ),
				grid(
					SERVICES.filter( ( s ) => s[ 1 ] !== active )
						.slice( 0, 3 )
						.map( ( [ icon, title, text ] ) =>
							iconCard( icon, title, text, {
								link: 'Learn more',
							} )
						),
					{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
				),
			],
			{ bg: '#ffffff', py: [ 100, 80, 56 ] }
		),
		ctaBand(
			'Ready for a website that works?',
			'Get a free website audit and proposal within 48 hours.',
			'Get my free audit'
		),
		pageFooter(),
	];
};

// ===========================================================================
// Pricing
// ===========================================================================
const plans = ( yearly ) => [
	grid(
		[
			price(
				'Starter',
				yearly ? '790' : '79',
				yearly ? '/year' : '/month',
				[
					'1 brand or listing site',
					'Monthly design hours: 5',
					'Basic SEO report',
					'Email support',
				]
			),
			price(
				'Growth',
				yearly ? '1,990' : '199',
				yearly ? '/year' : '/month',
				[
					'Up to 3 sites or projects',
					'Monthly design hours: 20',
					'SEO &amp; ads management',
					'Priority chat support',
				],
				{ popular: true, badge: yearly ? 'Save 17%' : 'Most popular' }
			),
			price(
				'Scale',
				yearly ? '4,990' : '499',
				yearly ? '/year' : '/month',
				[
					'Unlimited projects',
					'Dedicated design team',
					'Full-funnel marketing',
					'Account director',
				],
				{ cta: 'Talk to sales' }
			),
		],
		{ cols: [ 3, 1, 1 ], gap: [ 24, 20, 20 ] }
	),
];

const pricing = () => [
	nav(),
	pageHero(
		[ 'Pricing' ],
		'Pricing',
		'Simple, transparent pricing',
		'Flexible monthly plans for agencies, property brands and growing businesses. No setup fees, cancel anytime.',
		{ center: true }
	),
	section(
		[
			tabs(
				[
					{ label: 'Monthly', blocks: plans( false ) },
					{ label: 'Yearly – save 17%', blocks: plans( true ) },
				],
				{ color: T.accent, align: 'center', radius: 999 }
			),
		],
		{ bg: '#ffffff', py: [ 24, 24, 16 ], pb: [ 100, 80, 56 ] }
	),
	section(
		[
			I( T, 'Compare', 'Compare all features', '' ),
			container(
				[
					table(
						[
							[ 'Projects', '1', '3', 'Unlimited' ],
							[
								'Design hours / month',
								'5',
								'20',
								'Dedicated team',
							],
							[ 'Website care &amp; hosting', '✓', '✓', '✓' ],
							[
								'SEO reporting',
								'Basic',
								'Advanced',
								'Advanced + content',
							],
							[ 'Paid ads management', '—', '✓', '✓' ],
							[ 'Real estate listing tools', '—', '✓', '✓' ],
							[ 'Account director', '—', '—', '✓' ],
							[
								'Support',
								'Email',
								'Priority chat',
								'24/7 phone',
							],
						],
						{
							head: [ 'Feature', 'Starter', 'Growth', 'Scale' ],
							stripes: true,
							color: T.ink,
							size: '15px',
						}
					),
				],
				{ className: 'gk-kit-table-scroll' }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	section(
		[
			I( T, 'Add-ons', 'Extend any plan', '' ),
			grid(
				[
					iconCard(
						'📸',
						'Photo &amp; video',
						'Professional shoots for products, teams and properties. From $590.'
					),
					iconCard(
						'🧭',
						'3D virtual tours',
						'Interactive tours for listings and showrooms. From $290 per property.'
					),
					iconCard(
						'✍️',
						'Copywriting',
						'Website and campaign copy by native writers. From $190 per page.'
					),
				],
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					P( '🛡️', T, { size: '48px', lh: 1, color: T.ink } ),
					group( [
						H( '30-day money-back guarantee', DARK, {
							level: 3,
							size: 'clamp(1.4rem, 2.6vw, 1.9rem)',
							mb: '6px',
						} ),
						P(
							'Not happy in the first month? We refund you in full – no questions asked.',
							DARK
						),
					] ),
					buttons(
						[
							button( 'Start now', {
								bg: '#ffffff',
								color: T.ink,
							} ),
						],
						{ justify: 'right' }
					),
				],
				{
					tpl: [ 'auto 1fr auto', 'auto 1fr', '1fr' ],
					gap: [ 28, 24, 16 ],
					valign: 'center',
				}
			),
		],
		{ bg: T.accent, py: [ 56, 48, 40 ] }
	),
	logoStrip( {
		label: 'Join 300+ companies on a Northstar plan',
		bg: '#ffffff',
	} ),
	section(
		[
			I( T, 'FAQ', 'Pricing questions', '' ),
			grid(
				[
					accordion( [
						[
							'Can I change plans later?',
							'Yes, upgrade or downgrade anytime. Changes apply from your next billing cycle.',
						],
						[
							'Are there setup fees?',
							'No. You only pay the monthly or yearly plan price.',
						],
						[
							'What happens to unused hours?',
							'Up to 5 unused design hours roll over to the next month.',
						],
					] ),
					accordion( [
						[
							'Do you offer discounts for non-profits?',
							'Yes – registered non-profits get 25% off every plan.',
						],
						[
							'Which payment methods do you accept?',
							'All major credit cards, bank transfer and invoices for yearly plans.',
						],
						[
							'Is there a contract?',
							'Monthly plans can be cancelled anytime. Yearly plans are billed upfront.',
						],
					] ),
				],
				{ cols: [ 2, 1, 1 ], gap: [ 24, 12, 12 ] }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	ctaBand(
		'Need a custom plan?',
		'Large portfolio or multiple brands? We build plans around your needs.',
		'Contact sales'
	),
	pageFooter(),
];

// ===========================================================================
// Case study
// ===========================================================================
const metaItem = ( label, value ) =>
	group(
		[
			P( label, T, {
				size: '13px',
				upper: true,
				ls: '0.08em',
				mb: '4px',
			} ),
			P( value, T, { color: T.ink, weight: 600, size: '16px' } ),
		],
		{ pad: [ '18px', '0', '0' ], className: 'gk-kit-topline' }
	);

const caseStudy = () => [
	nav(),
	pageHero(
		[ '<a href="#">Work</a>', 'Harborview Homes' ],
		'Case study · Real estate',
		'How Harborview Homes sold out 120 apartments four months early',
		'A new brand, a launch website and a performance campaign for a waterfront development – delivered in eight weeks.',
		{
			after: [
				grid(
					[
						metaItem( 'Client', 'Harborview Homes' ),
						metaItem( 'Industry', 'Real estate' ),
						metaItem( 'Timeline', '8 weeks' ),
						metaItem( 'Services', 'Brand, web, ads' ),
					],
					{ cols: [ 4, 4, 2 ], gap: [ 24, 20, 16 ], mt: 40 }
				),
			],
			below: [
				image(
					img( '1600585154340-be6161a56a0c', 1800 ),
					'Harborview Homes waterfront apartments',
					{
						ratio: '21/9',
						radius: '24px',
						mt: '56px',
					}
				),
			],
		}
	),
	section(
		[
			grid(
				[
					counter( 120, '', 'Apartments sold', { color: T.accent } ),
					counter( 4, ' mo', 'Ahead of schedule', {
						color: T.accent,
					} ),
					counter( 312, '%', 'More qualified leads', {
						color: T.accent,
					} ),
					counter( 38, '%', 'Lower cost per lead', {
						color: T.accent,
					} ),
				],
				{ cols: [ 4, 2, 2 ], gap: [ 24, 28, 20 ] }
			),
		],
		{ bg: '#ffffff', py: [ 72, 64, 48 ] }
	),
	section(
		[
			grid(
				[
					group( [
						P( '01 — The challenge', T, {
							color: T.accent,
							weight: 700,
							size: '14px',
							mb: '12px',
						} ),
						H( 'A premium project lost in a crowded market', T, {
							size: 'clamp(1.5rem, 2.8vw, 2rem)',
						} ),
						P(
							'Harborview launched 120 waterfront apartments while three competing developments opened nearby. Their old brand looked generic, the website was slow, and paid ads brought clicks but very few serious buyers.',
							T
						),
					] ),
					group( [
						P( '02 — The solution', T, {
							color: T.accent,
							weight: 700,
							size: '14px',
							mb: '12px',
						} ),
						H(
							'A lifestyle brand with a lead machine behind it',
							T,
							{ size: 'clamp(1.5rem, 2.8vw, 2rem)' }
						),
						P(
							'We repositioned the project around “calm living by the water”, designed a new identity and built a fast launch site with floor-plan search, 3D tours and instant viewing booking – connected to targeted campaigns.',
							T
						),
					] ),
				],
				{ cols: [ 2, 1, 1 ], gap: [ 64, 40, 40 ] }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	section(
		[
			gallery(
				[
					[
						img( '1600607687939-ce8a6c25118c', 900 ),
						'Show apartment living room',
					],
					[
						img( '1600566753190-17f0baa2a6c3', 900 ),
						'Kitchen design',
					],
					[ img( '1502005229762-cf1b2da7c5d6', 900 ), 'Bedroom' ],
				],
				{ cols: 3, tab: 3, mob: 1, radius: 16 }
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ], pb: [ 40, 32, 24 ] }
	),
	section(
		[
			I( T, 'Our approach', 'What we did, step by step', '', {
				align: 'left',
			} ),
			numberedList(
				[
					{
						title: 'Research &amp; positioning',
						text: 'Buyer interviews and competitor audit to find a unique story.',
					},
					{
						title: 'Brand identity',
						text: 'Name lock-up, colours, photography direction and sales brochure.',
					},
					{
						title: 'Launch website',
						text: 'Floor-plan finder, 3D tours, live availability and booking.',
					},
					{
						title: 'Performance campaign',
						text: 'Search, social and portal ads optimised for booked viewings.',
						highlight: true,
					},
				],
				{ theme: { ink: T.ink, muted: T.muted, hl: '#eff6ff' } }
			),
		],
		{ bg: '#ffffff', py: [ 40, 32, 24 ], pb: [ 100, 80, 56 ] }
	),
	section(
		[
			quoteBlock(
				'Northstar understood our buyers better than we did. The new brand and website paid for themselves within the first month.',
				'1560250097-0b93528c311a',
				'Thomas Berg',
				'Sales Director, Harborview Homes',
				DARK
			),
		],
		{ bg: T.dark, py: [ 100, 80, 56 ] }
	),
	section(
		[
			cover(
				img( '1613490493576-7fde63acd811', 1600 ),
				[
					P( 'Next case study', T, {
						color: '#cbd5e1',
						size: '14px',
						upper: true,
						ls: '0.12em',
						mb: '8px',
					} ),
					H( 'Lakeside Villas: a luxury launch in 6 weeks →', T, {
						color: '#ffffff',
						size: 'clamp(1.6rem, 3.4vw, 2.6rem)',
						mb: '20px',
					} ),
					buttons( [
						button( 'Read the story', {
							bg: '#ffffff',
							color: T.ink,
						} ),
					] ),
				],
				{
					minHeight: 380,
					dim: 55,
					overlay: '#0b1220',
					position: 'bottom left',
					radius: '24px',
					pad: [ '48px', '40px' ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	pageFooter(),
];

// ===========================================================================
// Portfolio
// ===========================================================================
const workGrid = ( keys ) => [
	grid(
		keys.map( ( k ) => proj( k ) ),
		{ cols: [ 3, 2, 1 ], gap: [ 28, 24, 28 ], rowGap: [ 40, 32, 28 ] }
	),
];

const portfolio = () => [
	nav(),
	pageHero(
		[ 'Work' ],
		'Portfolio',
		'Selected work, 2019&nbsp;–&nbsp;2026',
		'Brands, websites and campaigns for real estate developers, SaaS companies, clinics and consumer brands.',
		{
			after: [
				grid(
					[
						counter( 320, '+', 'Projects' ),
						counter( 24, '', 'Awards' ),
						counter( 14, '', 'Countries' ),
					],
					{
						cols: [ 3, 3, 3 ],
						gap: [ 24, 20, 12 ],
						mt: 40,
						className: 'gk-kit-stats-sm',
					}
				),
			],
		}
	),
	section(
		[
			tabs(
				[
					{
						label: 'All',
						blocks: workGrid( [
							'harbor',
							'fin',
							'mellow',
							'care',
							'routa',
							'loft',
						] ),
					},
					{
						label: 'Real estate',
						blocks: workGrid( [ 'harbor', 'villa', 'loft' ] ),
					},
					{
						label: 'Branding',
						blocks: workGrid( [ 'mellow', 'bloom', 'loft' ] ),
					},
					{
						label: 'Web &amp; apps',
						blocks: workGrid( [ 'fin', 'routa', 'pulse' ] ),
					},
				],
				{ color: T.accent, align: 'left', radius: 999 }
			),
		],
		{ bg: '#ffffff', py: [ 32, 24, 16 ], pb: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					image(
						img( '1613490493576-7fde63acd811', 1200 ),
						'Lakeside Villas',
						{
							ratio: '4/3',
							radius: '24px',
						}
					),
					group( [
						P( 'Featured project', DARK, {
							color: '#60a5fa',
							size: '13px',
							weight: 700,
							upper: true,
							ls: '0.12em',
							mb: '12px',
						} ),
						H( 'Lakeside Villas', DARK, {
							size: 'clamp(2rem, 4vw, 3rem)',
						} ),
						P(
							'Brand, website and launch film for 18 luxury villas – all reserved within six weeks of launch.',
							DARK,
							{ mb: '24px' }
						),
						checks(
							[
								'Brand identity &amp; signage',
								'Launch website with 3D tours',
								'Drone film and photography',
							],
							{ ...DARK, accent: '#60a5fa' }
						),
						buttons( [ btn( 'View case study', T ) ], {
							mt: '28px',
						} ),
					] ),
				],
				{
					tpl: [ '1.2fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: T.dark, py: [ 100, 80, 56 ] }
	),
	section(
		[
			I( T, 'Recognition', 'Awards &amp; features', '', {
				align: 'left',
			} ),
			group(
				[
					[ '2026', 'Awwwards – Site of the Day', 'Lakeside Villas' ],
					[ '2025', 'CSS Design Awards – Best UX', 'Fluxo Finance' ],
					[
						'2025',
						'Real Estate Marketing Awards – Gold',
						'Harborview Homes',
					],
					[ '2024', 'Brand New – Noted', 'Mellow Coffee' ],
				].map( ( [ year, award, client ] ) =>
					grid(
						[
							P( year, T, { color: T.muted, size: '15px' } ),
							H( award, T, { level: 3, size: '19px', mb: '0' } ),
							P( client, T, {
								size: '15px',
								className: 'gk-kit-text-right',
							} ),
						],
						{
							tpl: [ '120px 1fr auto', '90px 1fr auto', '1fr' ],
							gap: [ 24, 16, 4 ],
							valign: 'center',
							className: 'gk-kit-topline gk-kit-row-pad',
						}
					)
				)
			),
		],
		{ bg: '#ffffff', py: [ 100, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					[
						'1544005313-94ddf0286df2',
						'Priya Nair',
						'CMO, Pulse Analytics',
						'The new site doubled our trial sign-ups in the first quarter.',
					],
					[
						'1500648767791-00dcc994a43e',
						'Jonas Weber',
						'CEO, Fluxo',
						'They think like product people and design like artists.',
					],
					[
						'1612349317150-e413f6a5b16d',
						'Dr. Sarah Lindqvist',
						'Founder, CareWell',
						'Online bookings went up 60% after launch. Patients love it.',
					],
				].map( ( [ photo, name, role, text ] ) =>
					card(
						[
							stars(),
							P( `“${ text }”`, T, {
								color: T.ink,
								size: '16px',
								mb: '22px',
							} ),
							person( photo, name, role, T ),
						],
						T
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: T.soft, py: [ 100, 80, 56 ] }
	),
	ctaBand(
		'Have a project in mind?',
		'Tell us what you are building – we reply within one business day.',
		'Start a project'
	),
	pageFooter(),
];

export const pageTemplates = [
	{
		id: 'tpl-page-about',
		title: 'About Page',
		category: 'inner',
		desc: 'Modern about page: story, numbers, values, timeline, leadership, logos and testimonial.',
		keywords:
			'about us company story mission values team history agency real estate',
		blocks: about,
	},
	{
		id: 'tpl-page-team',
		title: 'Team Page',
		category: 'inner',
		desc: 'Team page with founders, team grid, culture and open positions.',
		keywords: 'team people staff founders careers jobs culture agents',
		blocks: team,
	},
	{
		id: 'tpl-page-services',
		title: 'Services Page',
		category: 'inner',
		desc: 'Services overview: service grid, process, industries tabs, results, FAQ and CTA.',
		keywords:
			'services what we do process industries agency real estate business',
		blocks: services,
	},
	{
		id: 'tpl-page-service-details',
		title: 'Service Details Page',
		category: 'inner',
		desc: 'Single service page with sticky sidebar, deliverables, process, packages and FAQ.',
		keywords:
			'service details single service sidebar packages deliverables',
		blocks: serviceDetails,
	},
	{
		id: 'tpl-page-pricing',
		title: 'Pricing Page',
		category: 'inner',
		desc: 'Pricing page with monthly / yearly tabs, comparison table, add-ons, guarantee and FAQ.',
		keywords: 'pricing plans packages compare monthly yearly subscription',
		blocks: pricing,
	},
	{
		id: 'tpl-page-case-study',
		title: 'Case Study Page',
		category: 'inner',
		desc: 'Results-driven case study: project facts, metrics, challenge, solution, gallery and quote.',
		keywords:
			'case study project results success story client work real estate',
		blocks: caseStudy,
	},
	{
		id: 'tpl-page-portfolio',
		title: 'Portfolio Page',
		category: 'inner',
		desc: 'Portfolio with filter tabs, featured project, awards list and client reviews.',
		keywords:
			'portfolio work projects gallery filter showcase agency properties',
		blocks: portfolio,
	},
];
