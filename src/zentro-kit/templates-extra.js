/**
 * Zentro Kit – extra page templates: clinic SaaS landing page and a dark
 * personal portfolio.
 */
import {
	node,
	img,
	heading,
	para,
	image,
	button,
	buttons,
	group,
	list,
	grid,
	section,
	intro,
} from './dsl';
import {
	tint,
	pill,
	bentoStats,
	logoCards,
	logoStrip,
	numberedList,
} from './patterns-showcase';

// Shared header bar: brand · nav links · actions.
export const header = ( brand, links, actions, t ) =>
	section(
		[
			grid(
				[
					heading( brand, {
						level: 3,
						color: t.ink,
						size: '22px',
						weight: 700,
						ls: '-0.02em',
						mt: '0',
						mb: '0',
					} ),
					para(
						links
							.map( ( l ) => `<a href="#">${ l }</a>` )
							.join( '&nbsp;&nbsp;&nbsp;&nbsp; ' ),
						{
							align: 'center',
							color: t.muted,
							link: t.muted,
							size: '15px',
							weight: 500,
							mb: '0',
							className: 'gk-kit-nav',
						}
					),
					buttons( actions, { justify: 'right', gap: '8px' } ),
				],
				{
					tpl: [ 'auto 1fr auto', 'auto 1fr auto', '1fr auto' ],
					gap: [ 24, 16, 12 ],
					valign: 'center',
				}
			),
		],
		{ bg: t.bg, gradient: t.gradient, py: [ 20, 18, 14 ] }
	);

export const footerCol = ( title, links, t ) =>
	group( [
		heading( title, {
			level: 4,
			color: t.ink,
			size: '15px',
			weight: 600,
			mt: '0',
			mb: '14px',
		} ),
		para( links.map( ( l ) => `<a href="#">${ l }</a>` ).join( '<br>' ), {
			color: t.muted,
			link: t.muted,
			size: '15px',
			lh: 2.1,
			mb: '0',
		} ),
	] );

// ===========================================================================
// 1. Clinic SaaS landing page (Clinova)
// ===========================================================================
const S = {
	ink: '#18181b',
	muted: '#52525b',
	violet: '#7c3aed',
	lav: '#f5f3ff',
	line: '#e4e4e7',
};

const sBtn = ( t, o = {} ) =>
	button( t, { bg: S.ink, color: '#ffffff', ...o } );

const sCard = ( children, o = {} ) =>
	group( children, {
		bg: '#ffffff',
		pad: o.pad || '28px',
		radius: '20px',
		bw: '1px',
		bc: S.line,
		className: o.className,
	} );

const stepCard = ( photo, title, text, items ) =>
	sCard(
		[
			image( img( photo, 800 ), title, {
				ratio: '16/10',
				radius: '12px',
			} ),
			heading( title, {
				level: 3,
				color: S.ink,
				size: '19px',
				weight: 600,
				mt: '22px',
				mb: '8px',
			} ),
			para( text, { color: S.muted, size: '15px', lh: 1.6, mb: '14px' } ),
			list( items, { color: S.muted, size: '14px', lh: 1.9 } ),
		],
		{ pad: '14px 14px 22px' }
	);

const featureCard = ( icon, title, text ) =>
	sCard( [
		para( icon, { size: '20px', mb: '20px', className: 'gk-kit-icon' } ),
		heading( title, {
			level: 3,
			color: S.ink,
			size: '18px',
			weight: 600,
			mt: '0',
			mb: '8px',
		} ),
		para( text, { color: S.muted, size: '15px', lh: 1.6, mb: '0' } ),
	] );

const sCounter = ( targetNumber, suffix, label, prefix = '' ) =>
	node( 'zentro-blocks/animated-counter', {
		targetNumber,
		suffix,
		prefix,
		label,
		numberColor: '#ffffff',
		labelColor: '#ddd6fe',
		numberSize: 42,
		labelSize: 15,
		alignment: 'center',
		duration: 1800,
	} );

const sPrice = ( planTitle, price, features, popular = false ) =>
	node( 'zentro-blocks/pricing-card-block', {
		planTitle,
		price,
		currencySymbol: '$',
		billingPeriod: '/month',
		features,
		isPopular: popular,
		badgeText: 'Most popular',
		buttonLabel: popular ? 'Start free trial' : 'Get started',
		primaryColor: popular ? S.violet : S.ink,
		cardBgColor: '#ffffff',
		textColor: S.ink,
		borderRadius: 20,
	} );

const review = ( photo, name, role, text ) =>
	sCard( [
		para( '★★★★★', { color: '#f59e0b', size: '16px', mb: '14px' } ),
		para( `“${ text }”`, {
			color: S.ink,
			size: '16px',
			lh: 1.7,
			mb: '22px',
		} ),
		group(
			[
				image( img( photo, 160 ), name, {
					ratio: '1/1',
					radius: '999px',
				} ),
				para( `<strong>${ name }</strong><br>${ role }`, {
					color: S.muted,
					size: '14px',
					lh: 1.5,
					mb: '0',
				} ),
			],
			{
				row: true,
				nowrap: true,
				gap: '12px',
				className: 'gk-kit-avatar-row',
			}
		),
	] );

const clinic = () => [
	header(
		'Clinova',
		[ 'Features', 'Pricing', 'Integrations', 'Resources' ],
		[
			button( 'Log in', {
				outline: true,
				color: S.ink,
				bc: S.line,
				pad: [ '10px', '18px' ],
				size: '14px',
			} ),
			sBtn( 'Start free', { pad: [ '10px', '18px' ], size: '14px' } ),
		],
		{
			ink: S.ink,
			muted: S.muted,
			gradient: 'linear-gradient(180deg,#ede9fe 0%,#f5f3ff 100%)',
		}
	),

	// Hero
	section(
		[
			group(
				[
					pill( 'All-in-one clinic platform · 2026', {
						dot: S.violet,
						color: S.muted,
						bg: '#ffffff',
					} ),
					heading(
						`Automate &amp; scale your clinic with ${ tint(
							'Clinova',
							S.violet
						) }`,
						{
							level: 1,
							align: 'center',
							color: S.ink,
							size: 'clamp(2.4rem, 5.4vw, 4.2rem)',
							weight: 600,
							lh: 1.08,
							ls: '-0.035em',
							mt: '0',
							mb: '20px',
						}
					),
					para(
						'Online booking, patient records, payments and reminders in one secure platform – so your team spends less time on admin and more time with patients.',
						{
							align: 'center',
							color: S.muted,
							size: '18px',
							lh: 1.65,
							mb: '0',
						}
					),
					buttons(
						[
							button( 'Start free trial', {
								bg: S.violet,
								color: '#ffffff',
							} ),
							button( 'Watch 2-min demo', {
								outline: true,
								color: S.ink,
								bc: '#d4d4d8',
							} ),
						],
						{ justify: 'center', mt: '32px', gap: '12px' }
					),
				],
				{ mb: '56px', className: 'gk-kit-intro-center' }
			),
			group(
				[
					image(
						img( '1551288049-bebda4e38f71', 1600 ),
						'Clinova dashboard with appointments and revenue',
						{ ratio: '16/9', radius: '14px' }
					),
				],
				{ className: 'gk-kit-frame' }
			),
		],
		{
			gradient:
				'linear-gradient(180deg,#f5f3ff 0%,#faf5ff 55%,#ffffff 100%)',
			py: [ 72, 64, 48 ],
		}
	),

	logoStrip( {
		label: 'Trusted by 1,200+ clinics and medical practices',
		bg: '#ffffff',
		py: [ 40, 40, 32 ],
	} ),

	// How it works
	section(
		[
			grid(
				[
					intro(
						'How it works',
						'From setup to first appointment in minutes',
						'Clinova is fully cloud-based – no installation, no IT team, no long onboarding.',
						{
							align: 'left',
							accent: S.violet,
							color: S.ink,
							muted: S.muted,
							mb: '0',
						}
					),
					buttons( [ sBtn( 'Get started for free' ) ], {
						justify: 'right',
					} ),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 32, 24, 24 ],
					valign: 'end',
					mb: 48,
				}
			),
			grid(
				[
					stepCard(
						'1576091160550-2173dba999ef',
						'Instant profile builder',
						'Launch your clinic profile in minutes.',
						[
							'Drag-and-drop setup',
							'Google-ready booking page',
							'Multi-location support',
						]
					),
					stepCard(
						'1551288049-bebda4e38f71',
						'Smart booking engine',
						'24/7 online scheduling for every doctor.',
						[
							'Google &amp; Outlook calendar sync',
							'Automatic SMS reminders',
							'Telehealth links included',
						]
					),
					stepCard(
						'1579684385127-1ef15d508118',
						'Secure payments',
						'Get paid upfront or after the visit.',
						[
							'Cards, wallets and invoices',
							'Deposits for no-show protection',
							'Multi-currency payouts',
						]
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),

	// Features
	section(
		[
			intro(
				'Clinic management',
				'Everything your clinic needs to operate at scale',
				'One platform for front desk, doctors and management – with HIPAA- and GDPR-ready security built in.',
				{ accent: S.violet, color: S.ink, muted: S.muted }
			),
			grid(
				[
					featureCard(
						'🗂️',
						'Patient records',
						'Digital patient files with history, prescriptions and attachments in one place.'
					),
					featureCard(
						'📊',
						'Analytics dashboard',
						'Track appointments, revenue and no-show rates with clear, real-time reports.'
					),
					featureCard(
						'🩺',
						'Staff &amp; doctor management',
						'Shifts, rooms and permissions for every team member and location.'
					),
					featureCard(
						'💬',
						'Secure messaging',
						'Encrypted chat and file sharing between patients and your care team.'
					),
					featureCard(
						'🧾',
						'Billing &amp; invoicing',
						'Automatic invoices, insurance codes and payment tracking.'
					),
					featureCard(
						'⭐',
						'Reviews &amp; reputation',
						'Ask happy patients for reviews automatically after every visit.'
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#fafafa', py: [ 96, 80, 56 ] }
	),

	// Stats band
	section(
		[
			grid(
				[
					sCounter( 1200, '+', 'Clinics on Clinova' ),
					sCounter( 2, 'M+', 'Appointments booked' ),
					sCounter( 38, '%', 'Fewer no-shows' ),
					sCounter( 12, 'h', 'Admin time saved / week' ),
				],
				{ cols: [ 4, 2, 2 ], gap: [ 24, 32, 24 ] }
			),
		],
		{
			gradient:
				'linear-gradient(135deg,#6d28d9 0%,#7c3aed 50%,#a855f7 100%)',
			py: [ 72, 64, 48 ],
		}
	),

	// Pricing
	section(
		[
			intro(
				'Pricing',
				'Simple plans that grow with your practice',
				'14-day free trial on every plan. No credit card required.',
				{ accent: S.violet, color: S.ink, muted: S.muted }
			),
			grid(
				[
					sPrice( 'Starter', '49', [
						'1 practitioner',
						'Online booking page',
						'Email reminders',
						'Basic reports',
					] ),
					sPrice(
						'Growth',
						'129',
						[
							'Up to 10 practitioners',
							'SMS reminders &amp; deposits',
							'Patient records &amp; messaging',
							'Advanced analytics',
						],
						true
					),
					sPrice( 'Enterprise', '349', [
						'Unlimited practitioners',
						'Multi-location management',
						'SSO &amp; audit logs',
						'Dedicated success manager',
					] ),
				],
				{
					cols: [ 3, 1, 1 ],
					gap: [ 24, 20, 20 ],
					className: 'gk-kit-pricing',
				}
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),

	// Reviews
	section(
		[
			intro(
				'Loved by clinics',
				'Teams switch to Clinova and never look back',
				'',
				{ accent: S.violet, color: S.ink, muted: S.muted }
			),
			grid(
				[
					review(
						'1612349317150-e413f6a5b16d',
						'Dr. Sarah Lindqvist',
						'Owner, Nordic Dental',
						'No-shows dropped by a third in the first month. Patients love booking online at night.'
					),
					review(
						'1560250097-0b93528c311a',
						'Marcus Bell',
						'Practice manager, Bell Physio',
						'We replaced four tools with Clinova. Setup took one afternoon, support is fantastic.'
					),
					review(
						'1544005313-94ddf0286df2',
						'Dr. Amira Haddad',
						'Dermatologist, SkinLab',
						'The reports finally show which services are profitable. Worth every cent.'
					),
				],
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: S.lav, py: [ 96, 80, 56 ] }
	),

	// FAQ
	section(
		[
			intro( 'FAQ', 'Questions, answered', '', {
				accent: S.violet,
				color: S.ink,
				muted: S.muted,
			} ),
			group(
				[
					node( 'zentro-blocks/accordion-block', {
						panels: [
							{
								title: 'Is patient data secure?',
								content:
									'Yes. All data is encrypted in transit and at rest, hosted in EU or US data centres of your choice, and access is fully logged.',
							},
							{
								title: 'Can I import data from my current software?',
								content:
									'Our team migrates patients, appointments and records for free on Growth and Enterprise plans.',
							},
							{
								title: 'Do patients need to download an app?',
								content:
									'No. Patients book through your website or a shareable link on any device.',
							},
							{
								title: 'Can I cancel anytime?',
								content:
									'Yes. Plans are monthly, and you can export all your data at any time.',
							},
						],
						activeColor: S.violet,
						titleBgColor: '#fafafa',
						contentBgColor: '#ffffff',
						borderRadius: 12,
						allowMultiple: false,
					} ),
				],
				{ className: 'gk-kit-intro-center' }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),

	// CTA
	section(
		[
			group(
				[
					heading( 'Ready to run a calmer clinic?', {
						align: 'center',
						color: '#ffffff',
						size: 'clamp(2rem, 4vw, 3rem)',
						weight: 600,
						lh: 1.15,
						ls: '-0.02em',
						mt: '0',
						mb: '16px',
					} ),
					para(
						'Start your 14-day free trial today. Setup takes less than 10 minutes.',
						{
							align: 'center',
							color: '#ede9fe',
							size: '17px',
							lh: 1.6,
							mb: '0',
						}
					),
					buttons(
						[
							button( 'Start free trial', {
								bg: '#ffffff',
								color: S.violet,
							} ),
							button( 'Talk to sales', {
								outline: true,
								color: '#ffffff',
							} ),
						],
						{ justify: 'center', mt: '28px', gap: '12px' }
					),
				],
				{
					gradient:
						'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)',
					pad: [ '64px', '28px' ],
					radius: '28px',
				}
			),
		],
		{ bg: '#ffffff', py: [ 24, 24, 16 ], pb: [ 96, 80, 56 ] }
	),

	// Footer
	section(
		[
			grid(
				[
					group( [
						heading( 'Clinova', {
							level: 3,
							color: S.ink,
							size: '22px',
							weight: 700,
							mt: '0',
							mb: '12px',
						} ),
						para(
							'The all-in-one platform for modern clinics and medical practices.',
							{ color: S.muted, size: '15px', lh: 1.7, mb: '0' }
						),
					] ),
					footerCol(
						'Product',
						[ 'Features', 'Pricing', 'Integrations', 'Security' ],
						S
					),
					footerCol(
						'Company',
						[ 'About', 'Careers', 'Blog', 'Contact' ],
						S
					),
					footerCol(
						'Legal',
						[ 'Privacy', 'Terms', 'Imprint', 'DPA' ],
						S
					),
				],
				{
					tpl: [ '2fr 1fr 1fr 1fr', '1fr 1fr', '1fr 1fr' ],
					gap: [ 40, 32, 28 ],
				}
			),
			para( '© 2026 Clinova. All rights reserved.', {
				color: '#a1a1aa',
				size: '14px',
				mt: '48px',
				mb: '0',
			} ),
		],
		{ bg: '#fafafa', py: [ 72, 64, 48 ] }
	),
];

// ===========================================================================
// 2. Dark personal portfolio (Mara Voss)
// ===========================================================================
const D = {
	bg: '#0a0a0b',
	card: '#161618',
	ink: '#fafafa',
	muted: '#a1a1aa',
	line: 'rgba(255,255,255,0.08)',
	lime: '#a3e635',
};

const dIntro = ( e, t, x, o = {} ) =>
	intro( e, t, x, {
		accent: D.lime,
		color: D.ink,
		muted: D.muted,
		...o,
	} );

const work = ( photo, title, tags, o = {} ) =>
	group(
		[
			image( img( photo, 1000 ), title, {
				ratio: o.ratio || '4/3',
				radius: '16px',
			} ),
			group(
				[
					heading( title, {
						level: 3,
						color: D.ink,
						size: '20px',
						weight: 500,
						mt: '0',
						mb: '0',
					} ),
					para( tags, { color: D.muted, size: '14px', mb: '0' } ),
				],
				{ row: true, justify: 'space-between', mt: '18px', gap: '8px' }
			),
		],
		{ className: o.className }
	);

const step = ( n, title, text ) =>
	group(
		[
			para( n, { color: D.lime, size: '14px', weight: 600, mb: '28px' } ),
			heading( title, {
				level: 3,
				color: D.ink,
				size: '20px',
				weight: 500,
				mt: '0',
				mb: '8px',
			} ),
			para( text, { color: D.muted, size: '15px', lh: 1.6, mb: '0' } ),
		],
		{ bg: D.card, pad: '28px', radius: '16px', bw: '1px', bc: D.line }
	);

const quote = ( photo, name, role, text ) =>
	group(
		[
			para( `“${ text }”`, {
				color: D.ink,
				size: 'clamp(1.1rem, 1.8vw, 1.35rem)',
				lh: 1.6,
				mb: '28px',
			} ),
			group(
				[
					image( img( photo, 160 ), name, {
						ratio: '1/1',
						radius: '999px',
					} ),
					para( `<strong>${ name }</strong><br>${ role }`, {
						color: D.muted,
						size: '14px',
						lh: 1.5,
						mb: '0',
					} ),
				],
				{
					row: true,
					nowrap: true,
					gap: '12px',
					className: 'gk-kit-avatar-row',
				}
			),
		],
		{ bg: D.card, pad: '32px', radius: '16px', bw: '1px', bc: D.line }
	);

const portfolio = () => [
	header(
		'Mara Voss',
		[ 'Work', 'Services', 'About', 'Contact' ],
		[
			button( 'Let’s talk', {
				bg: D.ink,
				color: D.bg,
				pad: [ '10px', '20px' ],
				size: '14px',
			} ),
		],
		{ ink: D.ink, muted: D.muted, bg: D.bg }
	),

	// Hero
	section(
		[
			grid(
				[
					group( [
						pill( 'Available for new projects', {
							align: 'left',
						} ),
						heading(
							`Product designer crafting ${ tint(
								'calm, clear',
								D.lime
							) } digital experiences.`,
							{
								level: 1,
								color: D.ink,
								size: 'clamp(2.5rem, 5.4vw, 4.4rem)',
								weight: 400,
								lh: 1.06,
								ls: '-0.035em',
								mt: '0',
								mb: '22px',
							}
						),
						para(
							'I help startups and growing brands turn complex ideas into simple, beautiful products – from first sketch to launch.',
							{
								color: D.muted,
								size: '18px',
								lh: 1.65,
								mb: '0',
							}
						),
						buttons(
							[
								button( 'View my work', {
									bg: D.lime,
									color: D.bg,
								} ),
								button( 'Download CV', {
									outline: true,
									color: D.ink,
									bc: 'rgba(255,255,255,0.25)',
								} ),
							],
							{ mt: '32px', gap: '12px' }
						),
					] ),
					image(
						img( '1488426862026-3ee34a7d66df', 1000 ),
						'Portrait of Mara Voss',
						{
							ratio: '4/5',
							radius: '20px',
							className: 'gk-kit-mono',
						}
					),
				],
				{
					tpl: [ '1.25fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 48, 36 ],
					valign: 'center',
				}
			),
		],
		{ bg: D.bg, py: [ 80, 64, 40 ] }
	),

	logoCards( {
		label: 'Some of my clients',
		count2: '100+ clients',
		theme: {
			bg: D.bg,
			card: D.card,
			ink: '#e4e4e7',
			line: D.line,
		},
		py: [ 24, 24, 16 ],
	} ),

	bentoStats( {
		photo: '1534528741775-53994a69daeb',
		photoAlt: 'Mara Voss in her studio',
	} ),

	// Services
	section(
		[
			dIntro( 'Services', 'What I can do for you', '', {
				align: 'left',
			} ),
			numberedList(
				[
					{
						title: 'Product &amp; UX design',
						text: 'Research, flows and wireframes that make complex products feel simple.',
					},
					{
						title: 'UI &amp; design systems',
						text: 'Scalable component libraries in Figma, ready for developers.',
					},
					{
						title: 'Brand identity',
						text: 'Logos, typography and colour systems with a clear story.',
						highlight: true,
					},
					{
						title: 'Websites &amp; landing pages',
						text: 'High-converting marketing sites built for speed and SEO.',
					},
				],
				{
					theme: {
						ink: D.ink,
						muted: D.muted,
						hl: '#1c1f14',
					},
				}
			),
		],
		{ bg: D.bg, py: [ 96, 80, 56 ] }
	),

	// Selected work
	section(
		[
			grid(
				[
					dIntro( 'Selected work', 'Recent projects', '', {
						align: 'left',
						mb: '0',
					} ),
					buttons(
						[
							button( 'All projects', {
								outline: true,
								color: D.ink,
								bc: 'rgba(255,255,255,0.25)',
							} ),
						],
						{ justify: 'right' }
					),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 24, 24, 20 ],
					valign: 'end',
					mb: 48,
				}
			),
			grid(
				[
					work(
						'1561070791-2526d30994b5',
						'Fluxo – fintech app',
						'Product · UI'
					),
					work(
						'1626785774573-4b799315345d',
						'Mellow – brand identity',
						'Branding',
						{ className: 'gk-kit-offset' }
					),
					work(
						'1586717791821-3f44a563fa4c',
						'Routa – travel planner',
						'UX · Mobile'
					),
					work(
						'1609921212029-bb5a28e60960',
						'Bloom – packaging',
						'Packaging · Print',
						{ className: 'gk-kit-offset' }
					),
				],
				{ cols: [ 2, 2, 1 ], gap: [ 32, 24, 32 ] }
			),
		],
		{ bg: D.bg, py: [ 96, 80, 56 ] }
	),

	// Process
	section(
		[
			dIntro(
				'Process',
				'A simple process, no surprises',
				'Clear steps, weekly updates and one point of contact from kickoff to launch.'
			),
			grid(
				[
					step(
						'01',
						'Discover',
						'Workshops and research to understand your users and goals.'
					),
					step(
						'02',
						'Define',
						'Flows, wireframes and a clear scope you can sign off.'
					),
					step(
						'03',
						'Design',
						'High-fidelity UI and prototypes, tested with real users.'
					),
					step(
						'04',
						'Deliver',
						'Developer hand-off, design system and launch support.'
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 16, 16, 12 ] }
			),
		],
		{ bg: D.bg, py: [ 96, 80, 56 ] }
	),

	// Testimonials
	section(
		[
			dIntro( 'Kind words', 'What clients say', '' ),
			grid(
				[
					quote(
						'1500648767791-00dcc994a43e',
						'Jonas Weber',
						'CEO, Fluxo',
						'Mara turned a messy prototype into a product our users love. Conversion went up 32% after launch.'
					),
					quote(
						'1438761681033-6461ffad8d80',
						'Elena Rossi',
						'Founder, Mellow',
						'Thoughtful, fast and a joy to work with. The new brand finally feels like us.'
					),
				],
				{ cols: [ 2, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: D.bg, py: [ 96, 80, 56 ] }
	),

	// Contact CTA + footer
	section(
		[
			group(
				[
					pill( 'Open for Q1 2027', { mb: '22px' } ),
					heading( 'Have a project in mind?', {
						align: 'center',
						color: D.ink,
						size: 'clamp(2.4rem, 6vw, 5rem)',
						weight: 400,
						lh: 1.05,
						ls: '-0.04em',
						mt: '0',
						mb: '20px',
					} ),
					para(
						'<a href="mailto:hello@example.com">hello@example.com</a>',
						{
							align: 'center',
							color: D.lime,
							link: D.lime,
							size: 'clamp(1.2rem, 2.4vw, 1.6rem)',
							mb: '0',
						}
					),
					buttons(
						[
							button( 'Book a free intro call', {
								bg: D.lime,
								color: D.bg,
							} ),
						],
						{ justify: 'center', mt: '32px' }
					),
				],
				{ className: 'gk-kit-intro-center', mb: '96px' }
			),
			group(
				[
					para( '© 2026 Mara Voss. Designed with Zentro Blocks.', {
						color: D.muted,
						size: '14px',
						mb: '0',
					} ),
					para(
						'<a href="#">Dribbble</a>&nbsp;&nbsp;&nbsp; <a href="#">Behance</a>&nbsp;&nbsp;&nbsp; <a href="#">LinkedIn</a>',
						{
							color: D.muted,
							link: D.muted,
							size: '14px',
							mb: '0',
						}
					),
				],
				{
					row: true,
					justify: 'space-between',
					gap: '12px',
					pad: [ '24px', '0', '0', '0' ],
					className: 'gk-kit-meta',
				}
			),
		],
		{ bg: D.bg, py: [ 96, 80, 56 ], pb: [ 32, 32, 24 ] }
	),
];

export const extraTemplates = [
	{
		id: 'tpl-clinic-saas',
		title: 'Clinic SaaS',
		category: 'saas',
		desc: 'Modern SaaS landing page for clinic / healthcare software: hero with product shot, steps, features, stats, pricing, reviews and FAQ.',
		keywords:
			'saas software app clinic healthcare medical startup landing product',
		blocks: clinic,
	},
	{
		id: 'tpl-dark-portfolio',
		title: 'Dark Portfolio',
		category: 'portfolio',
		desc: 'Dark personal portfolio for designers and freelancers: hero, clients, bento stats, services, work, process and contact.',
		keywords:
			'portfolio personal designer freelancer dark resume cv creative',
		blocks: portfolio,
	},
];
