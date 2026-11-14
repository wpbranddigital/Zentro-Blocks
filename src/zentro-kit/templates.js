/**
 * Zentro Kit – full page templates.
 *
 * Each template is a complete, responsive landing page built from Zentro
 * containers, Zentro blocks and core blocks. Users only replace copy/images.
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
	cover,
	list,
	socials,
	separator,
	container,
	grid,
	section,
	intro,
} from './dsl';

// ===========================================================================
// 1. Life coaching landing page
// ===========================================================================
const C = {
	ink: '#1c1917',
	muted: '#57534e',
	accent: '#ea580c',
	lime: '#d9f99d',
	cream: '#fdf8f1',
	soft: '#f5f5f4',
};

const cBtn = ( t ) => button( t, { bg: C.ink, color: '#ffffff' } );
const cOutline = ( t ) => button( t, { outline: true, color: C.ink } );
const cIntro = ( e, t, x, o = {} ) =>
	intro( e, t, x, { accent: C.accent, color: C.ink, muted: C.muted, ...o } );

const cCounter = ( targetNumber, suffix, label ) =>
	node( 'zentro-blocks/animated-counter', {
		targetNumber,
		suffix,
		label,
		numberColor: C.ink,
		labelColor: C.muted,
		numberSize: 36,
		labelSize: 14,
		alignment: 'left',
	} );

const cCard = ( photo, title, meta, text, o = {} ) =>
	group(
		[
			image( img( photo, 800 ), title, {
				ratio: o.ratio || '4/3',
				radius: '16px',
			} ),
			para( meta, {
				color: C.accent,
				size: '13px',
				weight: 600,
				mt: '18px',
				mb: '6px',
			} ),
			heading( title, {
				level: 3,
				color: C.ink,
				size: '20px',
				weight: 700,
				lh: 1.3,
				mt: '0',
				mb: '8px',
			} ),
			para( text, { color: C.muted, size: '15px', lh: 1.6, mb: '0' } ),
		],
		{ bg: '#ffffff', pad: '14px', radius: '20px', bw: '1px', bc: '#e7e5e4' }
	);

const story = ( photo, bg, quote, name, role ) =>
	grid(
		[
			image( img( photo, 700 ), name, { ratio: '1/1', radius: '20px' } ),
			group( [
				para( 'Success story', {
					color: C.accent,
					size: '13px',
					weight: 700,
					upper: true,
					ls: '0.1em',
					mb: '12px',
				} ),
				heading( quote, {
					level: 3,
					color: C.ink,
					size: 'clamp(1.4rem, 2.6vw, 2rem)',
					weight: 600,
					lh: 1.3,
					mt: '0',
					mb: '20px',
				} ),
				para( `<strong>${ name }</strong><br>${ role }`, {
					color: C.muted,
					size: '15px',
					mb: '0',
				} ),
			] ),
		],
		{
			tpl: [ '280px 1fr', '220px 1fr', '1fr' ],
			gap: [ 48, 32, 24 ],
			valign: 'center',
			bg,
			radius: 28,
			py: [ 32, 28, 24 ],
			px: [ 32, 28, 24 ],
			mb: 24,
		}
	);

const coaching = () => [
	// Header bar
	section(
		[
			grid(
				[
					heading( 'MindRise', {
						level: 3,
						color: C.ink,
						size: '24px',
						weight: 800,
						mt: '0',
						mb: '0',
					} ),
					para(
						'<a href="#">Home</a>   ·   <a href="#">About</a>   ·   <a href="#">Services</a>   ·   <a href="#">Courses</a>   ·   <a href="#">Blog</a>',
						{
							align: 'center',
							color: C.ink,
							link: C.ink,
							size: '15px',
							weight: 500,
							mb: '0',
							className: 'gk-kit-nav',
						}
					),
					buttons(
						[
							button( 'Get started', {
								bg: C.lime,
								color: C.ink,
								pad: [ '10px', '22px' ],
							} ),
						],
						{ justify: 'right' }
					),
				],
				{
					tpl: [ 'auto 1fr auto', 'auto 1fr auto', '1fr auto' ],
					gap: [ 24, 16, 12 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 20, 18, 16 ] }
	),

	// Hero
	section(
		[
			grid(
				[
					group( [
						para( '★★★★★  Rated 4.9 by 1,200+ clients', {
							color: C.accent,
							size: '14px',
							weight: 600,
							mb: '18px',
						} ),
						heading( 'Transform your life with expert coaching', {
							level: 1,
							color: C.ink,
							size: 'clamp(2.4rem, 5.4vw, 4rem)',
							weight: 700,
							lh: 1.08,
							ls: '-0.03em',
							mt: '0',
							mb: '22px',
						} ),
						para(
							'Transform your life with expert, compassionate guidance. Clarify your goals, unlock your potential and build the confidence to live on purpose.',
							{
								color: C.muted,
								size: '18px',
								lh: 1.7,
								mb: '32px',
							}
						),
						buttons( [
							cBtn( 'Book a free session' ),
							cOutline( 'Learn more' ),
						] ),
						grid(
							[
								cCounter( 30, '+', 'Years combined' ),
								cCounter( 500, '+', 'Happy clients' ),
								cCounter( 90, '%', 'Goal success' ),
							],
							{ cols: [ 3, 3, 3 ], gap: [ 24, 20, 12 ], mt: 44 }
						),
					] ),
					image(
						img( '1507003211169-0a1dd7228f2d', 1000 ),
						'Smiling life coach',
						{ ratio: '4/5', radius: '32px' }
					),
				],
				{
					tpl: [ '1.15fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 48, 40 ],
					valign: 'center',
				}
			),
		],
		{ bg: C.cream, py: [ 96, 80, 56 ] }
	),

	// Logos
	section(
		[
			para( 'Organisations I’ve worked with', {
				align: 'center',
				color: C.muted,
				size: '14px',
				weight: 600,
				upper: true,
				ls: '0.1em',
				mb: '24px',
			} ),
			grid(
				[
					'Orbitly',
					'Visionary Labs',
					'DesignFlow',
					'PeakWell',
					'Northbeam',
					'Crestline',
				].map( ( n ) =>
					para( n, {
						align: 'center',
						color: '#a8a29e',
						size: '20px',
						weight: 800,
						mb: '0',
					} )
				),
				{
					cols: [ 6, 3, 2 ],
					gap: [ 24, 20, 16 ],
					rowGap: [ 0, 20, 16 ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 48, 40, 32 ] }
	),

	// About me
	section(
		[
			grid(
				[
					grid(
						[
							image(
								img( '1484480974693-6ca0a78fb36b', 700 ),
								'Planning notebook on a desk',
								{ ratio: '3/4', radius: '24px' }
							),
							image(
								img( '1573497019940-1c28c88b4f3e', 700 ),
								'Coach in a session',
								{ ratio: '3/4', radius: '24px', mt: '48px' }
							),
						],
						{
							cols: [ 2, 2, 2 ],
							gap: [ 20, 16, 12 ],
							valign: 'start',
						}
					),
					group( [
						cIntro(
							'About me',
							'Helping people grow with clarity and confidence',
							null,
							{ align: 'left', mb: '20px' }
						),
						para(
							'Hi, I’m Daniel. For over 15 years I’ve helped professionals, founders and creatives turn overwhelm into a clear plan — and that plan into real, lasting change.',
							{
								color: C.muted,
								size: '17px',
								lh: 1.75,
								mb: '16px',
							}
						),
						list(
							[
								'ICF-certified professional coach',
								'Former HR director at a global tech company',
								'Author of “Small Steps, Big Life”',
							],
							{ color: C.ink, size: '16px', lh: 2 }
						),
						buttons( [ cBtn( 'Read my story' ) ], { mt: '28px' } ),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 72, 48, 40 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff' }
	),

	// Live sessions banner
	cover(
		img( '1517245386807-bb43f82c33c4', 1800 ),
		[
			grid(
				[
					group( [
						heading( 'Join live coaching sessions for free', {
							color: '#ffffff',
							size: 'clamp(1.9rem, 4vw, 3rem)',
							weight: 700,
							lh: 1.15,
							mt: '0',
							mb: '16px',
						} ),
						para(
							'Every Thursday at 18:00 CET — practical tools, Q&A and a supportive community.',
							{
								color: '#e7e5e4',
								size: '18px',
								lh: 1.6,
								mb: '28px',
							}
						),
						buttons( [
							button( 'Reserve my seat', {
								bg: C.lime,
								color: C.ink,
							} ),
						] ),
					] ),
					group(
						[
							'Goal-setting',
							'Mindset reset',
							'Stress & balance',
							'Career clarity',
						].map( ( t ) =>
							para( `✓  ${ t }`, {
								color: '#ffffff',
								size: '16px',
								weight: 600,
								bg: 'rgba(255,255,255,0.12)',
								radius: '999px',
								pad: [ '10px', '18px' ],
								mb: '10px',
							} )
						)
					),
				],
				{
					tpl: [ '1.4fr 1fr', '1fr', '1fr' ],
					gap: [ 48, 32, 28 ],
					valign: 'center',
				}
			),
		],
		{ align: 'full', overlay: '#1e3a8a', dim: 80, minHeight: 460 }
	),

	// Services
	section(
		[
			cIntro(
				'Services',
				'Coaching that meets you where you are',
				'Choose the support that fits your season of life — every program starts with a free discovery call.'
			),
			node( 'zentro-blocks/box-card-block', {
				cards: [
					{
						title: 'Personalised Coaching',
						description:
							'Weekly 1:1 sessions with a tailored plan, accountability and tools between calls.',
						iconType: 'icon',
						iconName: 'heart',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
					{
						title: 'Mindset Transformation',
						description:
							'Replace limiting beliefs with habits and thinking patterns that move you forward.',
						iconType: 'icon',
						iconName: 'bulb',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
					{
						title: 'Stress & Anxiety Management',
						description:
							'Science-backed techniques to calm your mind and regain control of your days.',
						iconType: 'icon',
						iconName: 'shield',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
					{
						title: 'Goal Setting & Achievement',
						description:
							'Turn big dreams into a 90-day roadmap with milestones you actually hit.',
						iconType: 'icon',
						iconName: 'rocket',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
					{
						title: 'Life Transitions Coaching',
						description:
							'Navigate career changes, relocations and new chapters with confidence.',
						iconType: 'icon',
						iconName: 'star',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
					{
						title: 'Relationship & Communication',
						description:
							'Build healthier relationships through clear, honest and kind communication.',
						iconType: 'icon',
						iconName: 'check',
						showBadge: false,
						cardLink: '#',
						cardLinkText: 'Learn more →',
					},
				],
				columnsDesktop: 3,
				columnsTablet: 2,
				columnsMobile: 1,
				gap: 24,
				hoverEffect: 'float',
				cardBg: '#ffffff',
				titleColor: C.ink,
				descColor: C.muted,
				linkColor: C.accent,
				linkHoverColor: C.ink,
				borderColor: '#e7e5e4',
				borderRadius: 20,
			} ),
		],
		{ bg: C.cream }
	),

	// Experience
	section(
		[
			grid(
				[
					heading(
						'Over 15 years of experience coaching individuals and teams',
						{
							color: C.ink,
							size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
							weight: 700,
							lh: 1.2,
							mt: '0',
							mb: '0',
						}
					),
					para(
						'From first-time managers to founders of fast-growing companies, I’ve guided more than 500 people through change — with a method that is practical, warm and measurable.',
						{ color: C.muted, size: '17px', lh: 1.75, mb: '0' }
					),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 24, 20 ],
					valign: 'end',
					mb: 48,
				}
			),
			grid(
				[
					group(
						[
							heading( '85%', {
								color: C.ink,
								size: '56px',
								weight: 800,
								mt: '0',
								mb: '8px',
							} ),
							para(
								'of clients report higher confidence within 8 weeks.',
								{ color: C.ink, size: '16px', lh: 1.5, mb: '0' }
							),
						],
						{ bg: C.lime, radius: '24px', pad: '28px' }
					),
					image(
						img( '1522202176988-66273c2fd55f', 700 ),
						'Group workshop',
						{ ratio: '3/4', radius: '24px' }
					),
					image(
						img( '1556761175-5973dc0f32e7', 700 ),
						'Team coaching session',
						{ ratio: '3/4', radius: '24px' }
					),
					group(
						[
							heading( '7k hours', {
								color: '#ffffff',
								size: '56px',
								weight: 800,
								mt: '0',
								mb: '8px',
							} ),
							para(
								'of one-to-one coaching delivered worldwide.',
								{
									color: '#e7e5e4',
									size: '16px',
									lh: 1.5,
									mb: '0',
								}
							),
						],
						{ bg: C.ink, radius: '24px', pad: '28px' }
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 20, 16, 16 ], valign: 'center' }
			),
		],
		{ bg: '#ffffff' }
	),

	// Guide / lead magnet
	section(
		[
			grid(
				[
					image(
						img( '1517842645767-c639042777db', 900 ),
						'Free life coaching guide',
						{ ratio: '4/3', radius: '28px' }
					),
					group( [
						cIntro(
							'Free guide',
							'Make your life healthier & happier',
							'Download my 30-page workbook with the exact exercises I use with private clients — free.',
							{ align: 'left', mb: '28px' }
						),
						buttons( [
							button( 'Download the guide', {
								bg: C.accent,
								color: '#ffffff',
							} ),
						] ),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: C.soft }
	),

	// Success stories
	section(
		[
			cIntro(
				'Success stories',
				'Real people, real change',
				'A few of the clients who decided this was their year.'
			),
			story(
				'1500648767791-00dcc994a43e',
				'#fef3c7',
				'“25-pound weight loss in just six months, alongside a 50% improvement in sleep quality.”',
				'Jason M.',
				'Product designer, Amsterdam'
			),
			story(
				'1494790108377-be9c29b29330',
				'#e0f2fe',
				'“60% decrease in stress and a 30% boost in work-life balance satisfaction in a short period of time.”',
				'Priya S.',
				'Engineering manager, London'
			),
			story(
				'1472099645785-5658abf4ff4e',
				'#ede9fe',
				'“80% rise in self-esteem and a 75% improvement in relationships that make life healthier and happier.”',
				'Lucas R.',
				'Founder, Lisbon'
			),
		],
		{ bg: '#ffffff' }
	),

	// Courses
	section(
		[
			grid(
				[
					cIntro(
						'Courses',
						'Courses for you',
						'Self-paced programs you can start today.',
						{ align: 'left', mb: '0' }
					),
					buttons( [ cOutline( 'View all courses' ) ] ),
				],
				{
					tpl: [ '1fr auto', '1fr', '1fr' ],
					valign: 'end',
					gap: [ 24, 20, 20 ],
					mb: 40,
				}
			),
			grid(
				[
					cCard(
						'1454165804606-c3d57bc86b40',
						'Master your mindset for true potential',
						'6 weeks · 24 lessons',
						'Rewire limiting beliefs and build daily habits that stick.'
					),
					cCard(
						'1506126613408-eca07ce68773',
						'Stress-free living: manage stress and find peace',
						'4 weeks · 16 lessons',
						'Breathwork, boundaries and routines for a calmer life.'
					),
					cCard(
						'1552664730-d307ca884978',
						'Building confidence: transform your self-belief',
						'5 weeks · 20 lessons',
						'Speak up, show up and own your strengths at work.'
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ] }
			),
		],
		{ bg: C.cream }
	),

	// Podcast
	section(
		[
			cIntro(
				'Podcast',
				'Listen to transformational podcast',
				'New episodes every Monday on Spotify and Apple Podcasts.'
			),
			grid(
				[
					cCard(
						'1478737270239-2f02b77fc618',
						'Transform your mindset for success',
						'Episode 48 · 32 min',
						'The 3 questions I ask every new client.',
						{ ratio: '1/1' }
					),
					cCard(
						'1590602847861-f357a9332bbc',
						'Shifting perspective for a better life',
						'Episode 47 · 41 min',
						'How to reframe setbacks into momentum.',
						{ ratio: '1/1' }
					),
					cCard(
						'1499750310107-5fef28a66643',
						'Turning dreams into actionable plans',
						'Episode 46 · 28 min',
						'A simple weekly planning ritual.',
						{ ratio: '1/1' }
					),
					cCard(
						'1515378791036-0648a3ef77b2',
						'Practical tips to find calm in your daily life',
						'Episode 45 · 35 min',
						'Micro-habits for busy professionals.',
						{ ratio: '1/1' }
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 20 ] }
			),
		],
		{ bg: '#ffffff' }
	),

	// CTA
	section(
		[
			container(
				[
					group(
						[
							heading( 'Ready to transform your life?', {
								align: 'center',
								color: '#ffffff',
								size: 'clamp(1.9rem, 4vw, 3rem)',
								weight: 700,
								lh: 1.15,
								mt: '0',
								mb: '14px',
							} ),
							para(
								'Book a free 30-minute discovery call. No pressure — just clarity on your next step.',
								{
									align: 'center',
									color: '#ffedd5',
									size: '18px',
									lh: 1.6,
									mb: '28px',
								}
							),
							buttons(
								[
									button( 'Book your free call', {
										bg: '#ffffff',
										color: C.accent,
									} ),
								],
								{ justify: 'center' }
							),
						],
						{ className: 'gk-kit-intro-center' }
					),
				],
				{
					gradient: 'linear-gradient(135deg,#f97316 0%,#ea580c 100%)',
					radius: 28,
					py: [ 72, 60, 48 ],
					px: [ 40, 32, 24 ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 40, 32, 24 ] }
	),

	// Blog
	section(
		[
			cIntro(
				'Blog',
				'Stay inspired with our blog',
				'Practical ideas on mindset, habits and personal growth.'
			),
			grid(
				[
					cCard(
						'1531545514256-b1400bc00f31',
						'5 powerful mindset shifts to unlock your potential',
						'Mindset · 6 min read',
						'Small changes in thinking that create big results.'
					),
					cCard(
						'1544367567-0f2fcb009e0b',
						'How to manage stress and build a balanced life',
						'Wellbeing · 8 min read',
						'A gentle, realistic plan for overloaded weeks.'
					),
					cCard(
						'1488190211105-8b0e65b80b4e',
						'Goal setting for success: a step-by-step guide',
						'Productivity · 7 min read',
						'The framework I use with every private client.'
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ] }
			),
		],
		{ bg: C.soft }
	),

	// Contact
	section(
		[
			grid(
				[
					group( [
						cIntro(
							'Let’s get connected',
							'Start your transformation today!',
							'Tell me a little about where you are and where you want to be. I reply personally within 24 hours.',
							{ align: 'left', mb: '24px' }
						),
						para(
							'<strong>Email:</strong> <a href="mailto:hello@mindrise.example">hello@mindrise.example</a><br><strong>Phone:</strong> +44 20 7946 0123<br><strong>Studio:</strong> 21 Kings Road, London',
							{
								color: C.ink,
								link: C.accent,
								size: '16px',
								lh: 2,
								mb: '24px',
							}
						),
						socials(
							[ 'facebook', 'instagram', 'linkedin', 'youtube' ],
							{ color: C.ink, bg: '#e7e5e4' }
						),
					] ),
					group(
						[
							heading( 'Book a free discovery call', {
								level: 3,
								color: C.ink,
								size: '24px',
								weight: 700,
								mt: '0',
								mb: '12px',
							} ),
							para( '30 minutes · Online · No obligation', {
								color: C.muted,
								size: '15px',
								mb: '20px',
							} ),
							list(
								[
									'Clarify your #1 goal',
									'Identify what’s holding you back',
									'Leave with 3 concrete next steps',
								],
								{ color: C.ink, size: '16px', lh: 2 }
							),
							buttons(
								[
									button( 'Choose a time', {
										bg: C.ink,
										color: '#ffffff',
									} ),
								],
								{ mt: '24px' }
							),
						],
						{
							bg: '#ffffff',
							radius: '24px',
							pad: '36px',
							bw: '1px',
							bc: '#e7e5e4',
						}
					),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: C.cream }
	),

	// Footer
	section(
		[
			grid(
				[
					group( [
						heading( 'MindRise', {
							level: 3,
							color: '#ffffff',
							size: '26px',
							weight: 800,
							mt: '0',
							mb: '12px',
						} ),
						para(
							'Let’s build the confidence and clarity you need to live a life you love.',
							{ color: '#a8a29e', size: '15px', lh: 1.7, mb: '0' }
						),
					] ),
					group( [
						heading( 'Company', {
							level: 4,
							color: '#ffffff',
							size: '15px',
							mt: '0',
							mb: '14px',
						} ),
						para(
							'<a href="#">Home</a><br><a href="#">About</a><br><a href="#">Services</a><br><a href="#">Courses</a>',
							{
								color: '#a8a29e',
								link: '#a8a29e',
								size: '15px',
								lh: 2.1,
								mb: '0',
							}
						),
					] ),
					group( [
						heading( 'Support', {
							level: 4,
							color: '#ffffff',
							size: '15px',
							mt: '0',
							mb: '14px',
						} ),
						para(
							'<a href="#">Contact</a><br><a href="#">FAQ</a><br><a href="#">Privacy policy</a><br><a href="#">Terms</a>',
							{
								color: '#a8a29e',
								link: '#a8a29e',
								size: '15px',
								lh: 2.1,
								mb: '0',
							}
						),
					] ),
					group( [
						heading( 'Follow', {
							level: 4,
							color: '#ffffff',
							size: '15px',
							mt: '0',
							mb: '14px',
						} ),
						socials(
							[ 'facebook', 'instagram', 'linkedin', 'youtube' ],
							{ color: C.ink, bg: C.lime }
						),
					] ),
				],
				{
					tpl: [ '1.6fr 1fr 1fr 1fr', '1fr 1fr', '1fr' ],
					gap: [ 40, 32, 28 ],
				}
			),
			separator( '#292524' ),
			para( '© 2026 MindRise Coaching. All rights reserved.', {
				color: '#78716c',
				size: '14px',
				mb: '0',
			} ),
		],
		{ bg: C.ink, py: [ 72, 56, 48 ], pb: [ 32, 28, 28 ] }
	),
];

// ===========================================================================
// 2. Architecture studio page
// ===========================================================================
const A = {
	green: '#0b2a22',
	deep: '#06201a',
	lime: '#d9f99d',
	sage: '#a7c4b5',
	paper: '#ffffff',
};

const project = ( photo, title, ratio = '4/3' ) =>
	group(
		[
			image( img( photo, 1000 ), title, { ratio, radius: '6px' } ),
			heading( title, {
				level: 3,
				color: '#0b2a22',
				size: 'clamp(1.25rem, 2.2vw, 1.75rem)',
				weight: 500,
				lh: 1.2,
				mt: '18px',
				mb: '8px',
			} ),
			para( '<a href="#">View Project →</a>', {
				color: '#0b2a22',
				link: '#0b2a22',
				size: '14px',
				weight: 600,
				mb: '0',
			} ),
		],
		{ mb: '64px' }
	);

const architecture = () => [
	// Header
	section(
		[
			grid(
				[
					heading( 'Arcvale', {
						level: 3,
						color: '#ffffff',
						size: '26px',
						weight: 700,
						ls: '-0.02em',
						mt: '0',
						mb: '0',
					} ),
					para(
						'<a href="#">Home</a>   ·   <a href="#">Services</a>   ·   <a href="#">Projects</a>   ·   <a href="#">About</a>   ·   <a href="#">Contact</a>',
						{
							align: 'center',
							color: '#ffffff',
							link: '#ffffff',
							size: '15px',
							mb: '0',
							className: 'gk-kit-nav',
						}
					),
					buttons(
						[
							button( 'Book a meeting →', {
								bg: A.lime,
								color: A.green,
								pad: [ '10px', '22px' ],
							} ),
						],
						{ justify: 'right' }
					),
				],
				{
					tpl: [ 'auto 1fr auto', 'auto 1fr auto', '1fr auto' ],
					gap: [ 24, 16, 12 ],
					valign: 'center',
				}
			),
		],
		{ bg: A.deep, py: [ 20, 18, 16 ] }
	),

	// Hero
	cover(
		img( '1613490493576-7fde63acd811', 1920 ),
		[
			para( 'Project •', {
				color: '#ffffff',
				size: '13px',
				weight: 600,
				upper: true,
				ls: '0.14em',
				mb: '16px',
			} ),
			heading(
				'Selected works <em>in</em><br><em>architecture</em> & design',
				{
					level: 1,
					color: A.lime,
					size: 'clamp(2.8rem, 7.5vw, 6rem)',
					weight: 600,
					lh: 1.02,
					ls: '-0.03em',
					mt: '0',
					mb: '0',
				}
			),
		],
		{
			align: 'full',
			minHeight: 720,
			overlay: A.deep,
			dim: 55,
			position: 'bottom center',
			pad: [ '120px', '24px', '72px' ],
		}
	),

	// Projects – staggered
	section(
		[
			grid(
				[
					group( [
						project(
							'1600596542815-ffad4c1539a9',
							'Verdant Curve Residences for Modern Urban Living'
						),
						project(
							'1512917774080-9991f1c4c750',
							'The Cascade House Full Block Residential Project'
						),
						project(
							'1600585154340-be6161a56a0c',
							'The Green Arc Contemporary Residential Development'
						),
					] ),
					group(
						[
							project(
								'1486406146926-c627a92ad1ab',
								'The Horizon Block Modern Living Development'
							),
							project(
								'1580587771525-78b9dba3b914',
								'Luminous Curve Residences for Contemporary Living'
							),
							project(
								'1449844908441-8829872d2607',
								'The Canopy House Integrated Residential Complex'
							),
						],
						{ className: 'gk-kit-offset' }
					),
				],
				{ cols: [ 2, 2, 1 ], gap: [ 64, 32, 0 ], rowGap: [ 0, 0, 0 ] }
			),
		],
		{ bg: A.paper, py: [ 96, 72, 56 ], pb: [ 40, 32, 16 ] }
	),

	// Wide image
	cover( img( '1564013799919-ab600027ffc6', 1920 ), [], {
		align: 'full',
		minHeight: 560,
		overlay: A.deep,
		dim: 20,
		pad: [ '0px', '0px' ],
	} ),

	// Testimonial
	section(
		[
			grid(
				[
					group( [
						heading(
							'“A strategic, professional experience from start to finish. The team made a complex process feel clear.”',
							{
								color: A.green,
								size: 'clamp(1.7rem, 3.6vw, 2.9rem)',
								weight: 500,
								lh: 1.2,
								ls: '-0.02em',
								mt: '0',
								mb: '24px',
							}
						),
						para(
							'<strong>— Daniel Thompson</strong><br>Property investor',
							{ color: '#3f6212', size: '16px', mb: '32px' }
						),
						buttons( [
							button( '←', {
								bg: A.green,
								color: A.lime,
								pad: [ '12px', '20px' ],
							} ),
							button( '→', {
								bg: A.green,
								color: A.lime,
								pad: [ '12px', '20px' ],
							} ),
						] ),
					] ),
					image(
						img( '1560250097-0b93528c311a', 800 ),
						'Daniel Thompson, property investor',
						{ ratio: '1/1', radius: '6px' }
					),
				],
				{
					tpl: [ '1.4fr 1fr', '1fr 1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: A.lime, py: [ 96, 72, 56 ] }
	),

	// CTA
	cover(
		img( '1600566753190-17f0baa2a6c3', 1920 ),
		[
			para( 'Contact us •', {
				color: '#ffffff',
				size: '13px',
				weight: 600,
				upper: true,
				ls: '0.14em',
				mb: '16px',
			} ),
			heading(
				'Start your next great<br><em>project with confidence</em>',
				{
					level: 2,
					color: A.lime,
					size: 'clamp(2.2rem, 5vw, 4rem)',
					weight: 500,
					lh: 1.08,
					ls: '-0.02em',
					mt: '0',
					mb: '28px',
				}
			),
			buttons( [
				button( 'Send inquiry →', {
					outline: true,
					color: '#ffffff',
					radius: '4px',
				} ),
			] ),
		],
		{
			align: 'full',
			minHeight: 560,
			overlay: A.green,
			dim: 70,
			position: 'center center',
		}
	),

	// Services strip
	section(
		[
			grid(
				[
					'Architecture Design •',
					'Interior Planning •',
					'Outdoor Development •',
					'Concept Visualization •',
				].map( ( t ) =>
					para( t, {
						color: A.sage,
						size: '15px',
						weight: 500,
						mb: '0',
					} )
				),
				{
					cols: [ 4, 2, 1 ],
					gap: [ 24, 16, 12 ],
					rowGap: [ 0, 16, 12 ],
				}
			),
		],
		{ bg: A.green, py: [ 36, 32, 28 ] }
	),

	// Footer
	section(
		[
			grid(
				[
					group( [
						heading( 'hello@arcvale.example<br>+1 (756) 657-768', {
							level: 2,
							color: '#ffffff',
							size: 'clamp(1.6rem, 3.4vw, 2.6rem)',
							weight: 500,
							lh: 1.25,
							mt: '0',
							mb: '16px',
						} ),
						para( '2464 Royal Lane, Mesa, New Jersey 45463', {
							color: A.sage,
							size: '16px',
							mb: '40px',
						} ),
						grid(
							[
								group( [
									heading( 'Company', {
										level: 4,
										color: '#ffffff',
										size: '15px',
										mt: '0',
										mb: '12px',
									} ),
									para(
										'<a href="#">Home</a><br><a href="#">Service</a><br><a href="#">Project</a><br><a href="#">Blog</a>',
										{
											color: A.sage,
											link: A.sage,
											size: '15px',
											lh: 2,
											mb: '0',
										}
									),
								] ),
								group( [
									heading( 'Support', {
										level: 4,
										color: '#ffffff',
										size: '15px',
										mt: '0',
										mb: '12px',
									} ),
									para(
										'<a href="#">Contact Us</a><br><a href="#">404 Error</a><br><a href="#">Privacy Policy</a>',
										{
											color: A.sage,
											link: A.sage,
											size: '15px',
											lh: 2,
											mb: '0',
										}
									),
								] ),
								group( [
									heading( 'Social', {
										level: 4,
										color: '#ffffff',
										size: '15px',
										mt: '0',
										mb: '12px',
									} ),
									para(
										'<a href="#">Instagram</a><br><a href="#">Facebook</a><br><a href="#">Twitter</a>',
										{
											color: A.sage,
											link: A.sage,
											size: '15px',
											lh: 2,
											mb: '0',
										}
									),
								] ),
							],
							{ cols: [ 3, 3, 3 ], gap: [ 24, 20, 16 ] }
						),
					] ),
					image(
						img( '1449844908441-8829872d2607', 900 ),
						'Forest cabin by Arcvale',
						{ ratio: '4/3', radius: '6px' }
					),
				],
				{
					tpl: [ '1.2fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
			heading( 'Arcvale', {
				align: 'center',
				color: A.lime,
				size: 'clamp(4rem, 19vw, 16rem)',
				weight: 600,
				lh: 0.9,
				ls: '-0.05em',
				mt: '64px',
				mb: '0',
			} ),
		],
		{ bg: A.green, py: [ 96, 72, 56 ], pb: [ 24, 24, 16 ] }
	),
];

export const templates = [
	{
		id: 'tpl-life-coaching',
		title: 'Life Coaching',
		category: 'coaching',
		desc: 'Complete coach / consultant landing page: hero, about, services, stories, courses, podcast, blog and contact.',
		keywords: 'coach coaching consultant personal brand mentor therapist',
		blocks: coaching,
	},
	{
		id: 'tpl-architecture-studio',
		title: 'Architecture Studio',
		category: 'architecture',
		desc: 'Elegant portfolio page for architects, interior designers and real-estate developers.',
		keywords:
			'architecture architect interior real estate portfolio studio',
		blocks: architecture,
	},
];
