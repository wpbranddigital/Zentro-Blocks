/**
 * Zentro Kit – section patterns.
 *
 * Every pattern ships with realistic demo copy, images and styling, so a user
 * only has to replace the text and pictures.
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
	socials,
	separator,
	container,
	grid,
	section,
	intro,
	tabs,
} from './dsl';

const BLUE = '#2563eb';
const INK = '#0f172a';
const MUTED = '#64748b';

const counter = ( targetNumber, suffix, label, o = {} ) =>
	node( 'zentro-blocks/animated-counter', {
		targetNumber,
		suffix,
		prefix: o.prefix || '',
		label,
		numberColor: o.color || INK,
		labelColor: o.labelColor || MUTED,
		numberSize: o.size || 44,
		labelSize: 15,
		alignment: o.align || 'center',
		duration: 1800,
	} );

const projectCard = ( photo, title, text, o = {} ) =>
	group(
		[
			image( img( photo ), title, {
				ratio: o.ratio || '4/3',
				radius: '18px',
			} ),
			heading( title, {
				level: 3,
				size: '22px',
				weight: 600,
				color: o.color || '#ffffff',
				mt: '20px',
				mb: '6px',
			} ),
			para( `${ text } <a href="#">View Project →</a>`, {
				size: '15px',
				color: o.muted || '#a7c4b5',
				link: o.link || '#d9f99d',
				mb: '0',
			} ),
		],
		{ mb: '48px' }
	);

const serviceCard = ( photo, title, text ) =>
	group(
		[
			image( img( photo, 800 ), title, { ratio: '4/3', radius: '14px' } ),
			heading( title, {
				level: 3,
				size: '20px',
				weight: 700,
				color: INK,
				mt: '20px',
				mb: '8px',
			} ),
			para( text, { size: '15px', color: MUTED, lh: 1.6, mb: '14px' } ),
			para( '<a href="#">Learn more →</a>', {
				size: '15px',
				weight: 600,
				link: BLUE,
				mb: '0',
			} ),
		],
		{
			bg: '#ffffff',
			pad: [ '14px', '14px', '24px' ],
			radius: '20px',
			bw: '1px',
			bc: '#e2e8f0',
		}
	);

export const categories = [
	{ id: 'hero', label: 'Hero Headers' },
	{ id: 'features', label: 'Features & Services' },
	{ id: 'content', label: 'About & Content' },
	{ id: 'stats', label: 'Stats & Counters' },
	{ id: 'pricing', label: 'Pricing' },
	{ id: 'testimonials', label: 'Testimonials' },
	{ id: 'team', label: 'Team' },
	{ id: 'faq', label: 'FAQ' },
	{ id: 'portfolio', label: 'Portfolio' },
	{ id: 'cta', label: 'Call to Action' },
	{ id: 'footer', label: 'Footers' },
];

export const patterns = [
	// -------------------------------------------------------------------- HERO
	{
		id: 'hero-saas-centered',
		title: 'SaaS Product Hero',
		category: 'hero',
		desc: 'Dark centred hero with headline, two CTAs, trust line and product screenshot.',
		keywords: 'saas startup software app dark',
		blocks: () => [
			section(
				[
					group(
						[
							buttons(
								[
									button( '✦ New — AI reports are live', {
										outline: true,
										color: '#93c5fd',
										bc: 'rgba(147,197,253,0.4)',
										size: '13px',
										pad: [ '6px', '16px' ],
									} ),
								],
								{ justify: 'center', mb: '24px' }
							),
							heading(
								'Turn your product data into decisions in minutes',
								{
									level: 1,
									align: 'center',
									color: '#ffffff',
									size: 'clamp(2.4rem, 5.5vw, 4rem)',
									weight: 800,
									lh: 1.08,
									ls: '-0.03em',
									mt: '0',
									mb: '20px',
								}
							),
							para(
								'Pulse connects your tools, cleans your data and builds live dashboards your whole team understands — no SQL, no spreadsheets.',
								{
									align: 'center',
									color: '#94a3b8',
									size: '19px',
									lh: 1.7,
									mb: '32px',
								}
							),
							buttons(
								[
									button( 'Start free trial', {
										bg: BLUE,
										color: '#ffffff',
									} ),
									button( 'Book a demo', {
										outline: true,
										color: '#ffffff',
										bc: 'rgba(255,255,255,0.3)',
									} ),
								],
								{ justify: 'center' }
							),
							para(
								'No credit card required · 14-day free trial · Cancel anytime',
								{
									align: 'center',
									color: '#64748b',
									size: '14px',
									mt: '20px',
									mb: '56px',
								}
							),
						],
						{ className: 'gk-kit-intro-center' }
					),
					image(
						img( '1551288049-bebda4e38f71', 1600 ),
						'Analytics dashboard preview',
						{ ratio: '16/8', radius: '16px' }
					),
				],
				{
					gradient: 'linear-gradient(180deg,#0b1220 0%,#111c34 100%)',
					py: [ 120, 96, 72 ],
				}
			),
		],
	},
	{
		id: 'hero-split-coaching',
		title: 'Split Hero with Stats',
		category: 'hero',
		desc: 'Warm two-column hero for coaches, consultants and agencies with animated stats.',
		keywords: 'coach consultant personal brand agency split image',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								para( 'Certified Life & Career Coach', {
									color: '#ea580c',
									size: '13px',
									weight: 700,
									ls: '0.12em',
									upper: true,
									mb: '16px',
								} ),
								heading(
									'Transform your life with expert coaching',
									{
										level: 1,
										color: INK,
										size: 'clamp(2.3rem, 5vw, 3.6rem)',
										weight: 700,
										lh: 1.1,
										ls: '-0.02em',
										mt: '0',
										mb: '20px',
									}
								),
								para(
									'Personalised one-to-one sessions that help you find clarity, build confidence and reach the goals you keep putting off.',
									{
										color: '#57534e',
										size: '18px',
										lh: 1.7,
										mb: '32px',
									}
								),
								buttons( [
									button( 'Book a free call', {
										bg: INK,
										color: '#ffffff',
									} ),
									button( 'Explore programs', {
										outline: true,
										color: INK,
									} ),
								] ),
								grid(
									[
										counter( 12, 'k+', 'Sessions held', {
											align: 'left',
											size: 34,
										} ),
										counter(
											98,
											'%',
											'Client satisfaction',
											{ align: 'left', size: 34 }
										),
										counter( 15, '+', 'Years experience', {
											align: 'left',
											size: 34,
										} ),
									],
									{
										cols: [ 3, 3, 3 ],
										gap: [ 24, 20, 12 ],
										mt: 40,
									}
								),
							] ),
							image(
								img( '1573497019940-1c28c88b4f3e', 1000 ),
								'Coach smiling in her studio',
								{ ratio: '4/5', radius: '28px' }
							),
						],
						{
							tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
							gap: [ 64, 48, 40 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#fdf8f1', py: [ 110, 88, 64 ] }
			),
		],
	},
	{
		id: 'hero-cover-architecture',
		title: 'Full Image Hero',
		category: 'hero',
		desc: 'Full-width photo hero with dark overlay — ideal for architecture, real estate and hotels.',
		keywords: 'architecture real estate hotel image cover photo',
		blocks: () => [
			cover(
				img( '1600585154340-be6161a56a0c', 1920 ),
				[
					para( 'Architecture · Interiors · Landscape', {
						color: '#d9f99d',
						size: '13px',
						weight: 700,
						ls: '0.14em',
						upper: true,
						mb: '16px',
					} ),
					heading( 'Spaces designed to <em>live</em> beautifully', {
						level: 1,
						color: '#ffffff',
						size: 'clamp(2.6rem, 6.5vw, 5rem)',
						weight: 600,
						lh: 1.05,
						ls: '-0.03em',
						mt: '0',
						mb: '20px',
					} ),
					para(
						'We craft sustainable homes and workplaces that balance light, material and landscape.',
						{ color: '#e2e8f0', size: '19px', lh: 1.6, mb: '32px' }
					),
					buttons( [
						button( 'View our projects', {
							bg: '#d9f99d',
							color: '#0b2a22',
						} ),
						button( 'Book a meeting', {
							outline: true,
							color: '#ffffff',
						} ),
					] ),
				],
				{
					align: 'full',
					minHeight: 680,
					overlay: '#06201a',
					dim: 60,
					position: 'bottom center',
					pad: [ '96px', '24px' ],
				}
			),
		],
	},

	// ---------------------------------------------------------------- FEATURES
	{
		id: 'features-icon-cards',
		title: 'Feature Cards Grid',
		category: 'features',
		desc: 'Six icon cards with hover float effect to explain product benefits.',
		keywords: 'features benefits icons cards saas grid',
		blocks: () => [
			section(
				[
					intro(
						'Why teams choose Pulse',
						'Everything you need to ship faster',
						'One platform for tracking, reporting and collaborating — built for growing teams.'
					),
					node( 'zentro-blocks/box-card-block', {
						cards: [
							{
								title: 'Launch in minutes',
								description:
									'Connect 120+ tools with one click and see your first dashboard before your coffee cools.',
								iconType: 'icon',
								iconName: 'rocket',
								showBadge: false,
								cardLinkText: '',
							},
							{
								title: 'Bank-grade security',
								description:
									'SOC 2 Type II, SSO and encryption at rest keep your customer data locked down.',
								iconType: 'icon',
								iconName: 'shield',
								showBadge: false,
								cardLinkText: '',
							},
							{
								title: 'Smart insights',
								description:
									'AI spots trends and anomalies automatically and explains them in plain language.',
								iconType: 'icon',
								iconName: 'bulb',
								showBadge: true,
								badgeText: 'NEW',
								cardLinkText: '',
							},
							{
								title: 'Loved by teams',
								description:
									'Comment, share and present dashboards together — no more screenshot chains.',
								iconType: 'icon',
								iconName: 'heart',
								showBadge: false,
								cardLinkText: '',
							},
							{
								title: 'Always accurate',
								description:
									'Automatic data validation means every number on screen is one you can trust.',
								iconType: 'icon',
								iconName: 'check',
								showBadge: false,
								cardLinkText: '',
							},
							{
								title: 'Premium support',
								description:
									'Real humans reply in under 5 minutes, 24/7, in English, German and Spanish.',
								iconType: 'icon',
								iconName: 'star',
								showBadge: false,
								cardLinkText: '',
							},
						],
						columnsDesktop: 3,
						columnsTablet: 2,
						columnsMobile: 1,
						gap: 24,
						hoverEffect: 'float',
						cardBg: '#ffffff',
						titleColor: INK,
						descColor: MUTED,
						badgeBg: BLUE,
						borderColor: '#e2e8f0',
						borderRadius: 16,
					} ),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'services-image-cards',
		title: 'Services with Images',
		category: 'features',
		desc: 'Heading row with button and three photo service cards with links.',
		keywords: 'services agency interior consulting image cards',
		blocks: () => [
			section(
				[
					grid(
						[
							intro(
								'What we do',
								'Services built around your goals',
								'From first sketch to final handover, one team takes care of every detail.',
								{ align: 'left', mb: '0' }
							),
							buttons( [
								button( 'All services →', {
									outline: true,
									color: INK,
								} ),
							] ),
						],
						{
							tpl: [ '1fr auto', '1fr', '1fr' ],
							valign: 'end',
							gap: [ 32, 24, 24 ],
							mb: 48,
						}
					),
					grid(
						[
							serviceCard(
								'1600607687939-ce8a6c25118c',
								'Interior Design',
								'Thoughtful layouts, materials and lighting that make every room feel effortless.'
							),
							serviceCard(
								'1497366216548-37526070297c',
								'Space Planning',
								'We map how you live and work, then design spaces that flow naturally.'
							),
							serviceCard(
								'1600566753190-17f0baa2a6c3',
								'Renovation',
								'Full project management, from permits and budgets to the final coat of paint.'
							),
						],
						{ cols: [ 3, 2, 1 ], gap: [ 28, 20, 20 ] }
					),
				],
				{ bg: '#f8fafc' }
			),
		],
	},
	{
		id: 'features-tabs',
		title: 'Product Feature Tabs',
		category: 'features',
		desc: 'Centred heading with switchable tabs explaining each product module.',
		keywords: 'tabs product modules features',
		blocks: () => [
			section(
				[
					intro(
						'Product tour',
						'One workspace, every workflow',
						'Switch between modules to see how Pulse fits the way your team already works.'
					),
					tabs(
						[
							{
								label: 'Dashboards',
								blocks: [
									grid(
										[
											group( [
												heading(
													'Dashboards everyone understands',
													{
														level: 3,
														color: INK,
														size: '26px',
														weight: 700,
														mt: '0',
														mb: '12px',
													}
												),
												para(
													'Drag-and-drop charts, live filters and scheduled email reports. Build a board for every team in minutes and share it with a single link.',
													{
														color: MUTED,
														size: '17px',
														lh: 1.7,
														mb: '20px',
													}
												),
												buttons( [
													button( 'Learn more', {
														bg: BLUE,
														color: '#ffffff',
													} ),
												] ),
											] ),
											image(
												img(
													'1551288049-bebda4e38f71',
													900
												),
												'Dashboards everyone understands',
												{
													ratio: '16/10',
													radius: '16px',
												}
											),
										],
										{
											tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
											gap: [ 40, 28, 24 ],
											valign: 'center',
											py: [ 8, 8, 4 ],
										}
									),
								],
							},
							{
								label: 'Automations',
								blocks: [
									grid(
										[
											group( [
												heading(
													'Automations that run themselves',
													{
														level: 3,
														color: INK,
														size: '26px',
														weight: 700,
														mt: '0',
														mb: '12px',
													}
												),
												para(
													'Trigger Slack alerts when KPIs move, sync results to your CRM and refresh data every five minutes — without writing code.',
													{
														color: MUTED,
														size: '17px',
														lh: 1.7,
														mb: '20px',
													}
												),
												buttons( [
													button( 'Learn more', {
														bg: BLUE,
														color: '#ffffff',
													} ),
												] ),
											] ),
											image(
												img(
													'1460925895917-afdab827c52f',
													900
												),
												'Automations that run themselves',
												{
													ratio: '16/10',
													radius: '16px',
												}
											),
										],
										{
											tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
											gap: [ 40, 28, 24 ],
											valign: 'center',
											py: [ 8, 8, 4 ],
										}
									),
								],
							},
							{
								label: 'Collaboration',
								blocks: [
									grid(
										[
											group( [
												heading(
													'Decide together, faster',
													{
														level: 3,
														color: INK,
														size: '26px',
														weight: 700,
														mt: '0',
														mb: '12px',
													}
												),
												para(
													'Comment on any chart, mention teammates and keep decisions next to the data that drove them. Guest access is always free.',
													{
														color: MUTED,
														size: '17px',
														lh: 1.7,
														mb: '20px',
													}
												),
												buttons( [
													button( 'Learn more', {
														bg: BLUE,
														color: '#ffffff',
													} ),
												] ),
											] ),
											image(
												img(
													'1552664730-d307ca884978',
													900
												),
												'Decide together, faster',
												{
													ratio: '16/10',
													radius: '16px',
												}
											),
										],
										{
											tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
											gap: [ 40, 28, 24 ],
											valign: 'center',
											py: [ 8, 8, 4 ],
										}
									),
								],
							},
						],
						{ color: BLUE, align: 'center', radius: 10 }
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// ----------------------------------------------------------------- CONTENT
	{
		id: 'about-split-stats',
		title: 'About Us with Counters',
		category: 'content',
		desc: 'Image and story side by side with animated counters and a CTA.',
		keywords: 'about story company counters image',
		blocks: () => [
			section(
				[
					grid(
						[
							image(
								img( '1552664730-d307ca884978', 1000 ),
								'Our team in a workshop',
								{ ratio: '4/5', radius: '24px' }
							),
							group( [
								intro(
									'About us',
									'A small studio with a big obsession for detail',
									null,
									{ align: 'left', mb: '20px' }
								),
								para(
									'Founded in Berlin in 2012, we help ambitious brands turn complex ideas into simple, beautiful digital products.',
									{
										color: '#475569',
										size: '17px',
										lh: 1.75,
										mb: '16px',
									}
								),
								para(
									'Our team of 24 designers, engineers and strategists works as an extension of yours — transparent, fast and fully accountable.',
									{
										color: '#475569',
										size: '17px',
										lh: 1.75,
										mb: '32px',
									}
								),
								grid(
									[
										counter(
											240,
											'+',
											'Projects delivered',
											{
												align: 'left',
												size: 36,
												color: BLUE,
											}
										),
										counter( 12, '', 'Years in business', {
											align: 'left',
											size: 36,
											color: BLUE,
										} ),
										counter( 31, '', 'Design awards', {
											align: 'left',
											size: 36,
											color: BLUE,
										} ),
									],
									{
										cols: [ 3, 3, 3 ],
										gap: [ 24, 20, 12 ],
										mb: 32,
									}
								),
								buttons( [
									button( 'Meet the team', {
										bg: INK,
										color: '#ffffff',
									} ),
								] ),
							] ),
						],
						{
							tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
							gap: [ 72, 48, 40 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'process-timeline',
		title: 'Process Timeline',
		category: 'content',
		desc: 'Step-by-step timeline that explains how you work with clients.',
		keywords: 'process steps timeline roadmap how it works',
		blocks: () => [
			section(
				[
					intro(
						'How it works',
						'From first call to launch in 6 weeks',
						'A clear process with fixed milestones, so you always know what happens next.'
					),
					node( 'zentro-blocks/timeline-roadmap', {
						milestones: [
							{
								date: 'Week 1',
								title: 'Discovery call',
								content:
									'We learn about your business, goals and audience, and agree on scope and budget.',
							},
							{
								date: 'Week 2–3',
								title: 'Strategy & design',
								content:
									'Wireframes and visual design for every key page, refined with two feedback rounds.',
							},
							{
								date: 'Week 4–5',
								title: 'Build & test',
								content:
									'Fast, accessible development with testing on every device and browser.',
							},
							{
								date: 'Week 6',
								title: 'Launch & support',
								content:
									'We go live, train your team and stay on hand for 30 days of free support.',
							},
						],
						timelineColor: BLUE,
						nodeBgColor: '#ffffff',
						textColor: INK,
						layout: 'vertical',
						animateOnScroll: true,
					} ),
				],
				{ bg: '#f8fafc' }
			),
		],
	},

	// ------------------------------------------------------------------- STATS
	{
		id: 'stats-dark-band',
		title: 'Dark Stats Band',
		category: 'stats',
		desc: 'Four large animated counters on a dark background.',
		keywords: 'stats numbers counters metrics dark',
		blocks: () => [
			section(
				[
					intro(
						'Trusted worldwide',
						'Numbers that speak for themselves',
						null,
						{ color: '#ffffff', accent: '#60a5fa', mb: '56px' }
					),
					grid(
						[
							counter( 99, '%', 'Platform uptime', {
								color: '#ffffff',
								labelColor: '#94a3b8',
								size: 52,
							} ),
							counter( 15, 'M+', 'Reports generated', {
								color: '#60a5fa',
								labelColor: '#94a3b8',
								size: 52,
							} ),
							counter( 4200, '+', 'Companies onboard', {
								color: '#ffffff',
								labelColor: '#94a3b8',
								size: 52,
							} ),
							counter( 48, '', 'Countries served', {
								color: '#60a5fa',
								labelColor: '#94a3b8',
								size: 52,
							} ),
						],
						{
							cols: [ 4, 2, 1 ],
							gap: [ 32, 32, 20 ],
							rowGap: [ 32, 40, 28 ],
						}
					),
				],
				{ bg: INK, py: [ 96, 80, 64 ] }
			),
		],
	},

	// ----------------------------------------------------------------- PRICING
	{
		id: 'pricing-three-tier',
		title: 'Three-Tier Pricing',
		category: 'pricing',
		desc: 'Three pricing plans with a highlighted most-popular tier.',
		keywords: 'pricing plans subscription tiers',
		blocks: () => [
			section(
				[
					intro(
						'Pricing',
						'Simple pricing that grows with you',
						'Start free, upgrade when you need more. All plans include unlimited viewers.'
					),
					grid(
						[
							node( 'zentro-blocks/pricing-card-block', {
								planTitle: 'Starter',
								price: '19',
								currencySymbol: '€',
								billingPeriod: '/month',
								features: [
									'3 team members',
									'10 dashboards',
									'Daily data refresh',
									'Email support',
								],
								buttonLabel: 'Start free trial',
								primaryColor: INK,
								borderRadius: 16,
							} ),
							node( 'zentro-blocks/pricing-card-block', {
								planTitle: 'Growth',
								price: '49',
								currencySymbol: '€',
								billingPeriod: '/month',
								features: [
									'15 team members',
									'Unlimited dashboards',
									'Refresh every 5 minutes',
									'Slack & CRM automations',
									'Priority chat support',
								],
								isPopular: true,
								badgeText: 'Most popular',
								buttonLabel: 'Start free trial',
								primaryColor: BLUE,
								borderRadius: 16,
							} ),
							node( 'zentro-blocks/pricing-card-block', {
								planTitle: 'Enterprise',
								price: '199',
								currencySymbol: '€',
								billingPeriod: '/month',
								features: [
									'Unlimited members',
									'SSO & audit logs',
									'EU data residency',
									'Dedicated success manager',
								],
								buttonLabel: 'Contact sales',
								primaryColor: INK,
								borderRadius: 16,
							} ),
						],
						{
							cols: [ 3, 3, 1 ],
							gap: [ 28, 16, 24 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#f8fafc' }
			),
		],
	},

	// ------------------------------------------------------------ TESTIMONIALS
	{
		id: 'testimonials-carousel',
		title: 'Testimonials Slider',
		category: 'testimonials',
		desc: 'Auto-playing client reviews with photos and star ratings.',
		keywords: 'testimonials reviews clients slider carousel',
		blocks: () => [
			section(
				[
					intro(
						'Client stories',
						'Loved by 4,000+ growing teams',
						null
					),
					node( 'zentro-blocks/testimonials-carousel', {
						testimonials: [
							{
								name: 'Sarah Jenkins',
								role: 'VP Growth, Northwind',
								feedback:
									'We replaced three tools and a weekly reporting meeting with Pulse. Our team finally looks at the same numbers — and acts on them.',
								rating: 5,
								avatar: img(
									'1494790108377-be9c29b29330',
									200
								),
							},
							{
								name: 'Marco Bianchi',
								role: 'Founder, Studio Lume',
								feedback:
									'Setup took one afternoon. The automated Slack alerts alone saved us from two costly campaign mistakes in the first month.',
								rating: 5,
								avatar: img(
									'1500648767791-00dcc994a43e',
									200
								),
							},
							{
								name: 'Anna Schmidt',
								role: 'Head of Ops, Kiehl & Co',
								feedback:
									'EU hosting and SSO made legal sign-off easy. Support answered every question in minutes. Couldn’t recommend it more.',
								rating: 5,
								avatar: img(
									'1438761681033-6461ffad8d80',
									200
								),
							},
						],
						autoplay: true,
						autoplaySpeed: 5000,
						showRatings: true,
						primaryColor: BLUE,
						textColor: INK,
						cardBgColor: '#ffffff',
					} ),
				],
				{ bg: '#eef2ff' }
			),
		],
	},

	// -------------------------------------------------------------------- TEAM
	{
		id: 'team-grid',
		title: 'Team Members',
		category: 'team',
		desc: 'Four team member cards with photos, roles, bios and social links.',
		keywords: 'team staff people members',
		blocks: () => [
			section(
				[
					intro(
						'Our people',
						'Meet the team behind the work',
						'Designers, engineers and strategists who care about every pixel.'
					),
					node( 'zentro-blocks/team-member-block', {
						members: [
							{
								name: 'Lena Weber',
								role: 'Founder & CEO',
								bio: 'Former product lead at a Berlin fintech, obsessed with simple design.',
								imageUrl: img( '1544005313-94ddf0286df2', 600 ),
								imageAlt: 'Lena Weber',
								linkedinUrl: '#',
								twitterUrl: '#',
							},
							{
								name: 'David Okafor',
								role: 'Head of Engineering',
								bio: 'Builds fast, accessible products and mentors our dev team.',
								imageUrl: img(
									'1507003211169-0a1dd7228f2d',
									600
								),
								imageAlt: 'David Okafor',
								linkedinUrl: '#',
								twitterUrl: '#',
							},
							{
								name: 'Sofia Martín',
								role: 'Design Director',
								bio: 'Brand systems and UI design for 60+ companies across Europe.',
								imageUrl: img(
									'1534528741775-53994a69daeb',
									600
								),
								imageAlt: 'Sofia Martín',
								linkedinUrl: '#',
								twitterUrl: '#',
							},
							{
								name: 'Tom Becker',
								role: 'Client Success',
								bio: 'Your first call and your fastest reply — always.',
								imageUrl: img(
									'1472099645785-5658abf4ff4e',
									600
								),
								imageAlt: 'Tom Becker',
								linkedinUrl: '#',
								twitterUrl: '#',
							},
						],
						columnsDesktop: 4,
						columnsTablet: 2,
						columnsMobile: 1,
						gap: 24,
						imageStyle: 'square',
						alignment: 'center',
						bgColor: '#ffffff',
						textColor: INK,
						roleColor: BLUE,
					} ),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// --------------------------------------------------------------------- FAQ
	{
		id: 'faq-split',
		title: 'FAQ with Contact',
		category: 'faq',
		desc: 'Questions in an accessible accordion next to a support call-out.',
		keywords: 'faq questions accordion support help',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								intro(
									'FAQ',
									'Questions? We have answers.',
									'Can’t find what you’re looking for? Our team replies within one business hour.',
									{ align: 'left', mb: '28px' }
								),
								buttons( [
									button( 'Contact support', {
										bg: BLUE,
										color: '#ffffff',
									} ),
								] ),
							] ),
							node( 'zentro-blocks/accordion-block', {
								panels: [
									{
										title: 'Is there a free trial?',
										content:
											'Yes. Every plan includes a 14-day free trial with all features unlocked. No credit card needed.',
									},
									{
										title: 'Where is my data stored?',
										content:
											'All data is hosted in Frankfurt (EU) and never leaves the European Union. We are fully GDPR compliant.',
									},
									{
										title: 'Can I change plans later?',
										content:
											'Absolutely. Upgrade or downgrade any time from your account settings; we prorate the difference automatically.',
									},
									{
										title: 'Do you offer discounts for non-profits?',
										content:
											'Registered non-profits and schools get 50% off any plan. Contact us with proof of status.',
									},
									{
										title: 'How do I cancel?',
										content:
											'Cancel with one click in your billing settings. You keep access until the end of your billing period.',
									},
								],
								activeColor: BLUE,
								titleBgColor: '#f8fafc',
								contentBgColor: '#ffffff',
								borderRadius: 12,
								allowMultiple: false,
							} ),
						],
						{
							tpl: [ '1fr 1.4fr', '1fr', '1fr' ],
							gap: [ 64, 40, 32 ],
						}
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// --------------------------------------------------------------- PORTFOLIO
	{
		id: 'portfolio-staggered',
		title: 'Staggered Project Grid',
		category: 'portfolio',
		desc: 'Two-column offset project gallery for studios, architects and photographers.',
		keywords: 'portfolio projects gallery architecture works',
		blocks: () => [
			section(
				[
					intro( 'Selected works', 'Projects we’re proud of', null, {
						align: 'left',
						color: '#ffffff',
						accent: '#d9f99d',
						mb: '56px',
					} ),
					grid(
						[
							group( [
								projectCard(
									'1600596542815-ffad4c1539a9',
									'Verdant Curve Residence',
									'Hillside family home, 2025.'
								),
								projectCard(
									'1512917774080-9991f1c4c750',
									'Cascade House',
									'Pool villa with garden terraces.'
								),
							] ),
							group(
								[
									projectCard(
										'1613490493576-7fde63acd811',
										'Horizon Block',
										'Modern urban living, 18 units.'
									),
									projectCard(
										'1580587771525-78b9dba3b914',
										'Canopy House',
										'Timber retreat in the forest.'
									),
								],
								{ className: 'gk-kit-offset' }
							),
						],
						{
							cols: [ 2, 2, 1 ],
							gap: [ 48, 28, 0 ],
							rowGap: [ 0, 0, 0 ],
						}
					),
				],
				{ bg: '#0b2a22' }
			),
		],
	},

	// --------------------------------------------------------------------- CTA
	{
		id: 'cta-gradient-card',
		title: 'Gradient CTA Card',
		category: 'cta',
		desc: 'Rounded gradient call-to-action box with headline and two buttons.',
		keywords: 'cta call to action signup banner gradient',
		blocks: () => [
			section(
				[
					container(
						[
							group(
								[
									heading(
										'Ready to see your data clearly?',
										{
											align: 'center',
											color: '#ffffff',
											size: 'clamp(1.9rem, 4vw, 2.9rem)',
											weight: 700,
											lh: 1.15,
											mt: '0',
											mb: '16px',
										}
									),
									para(
										'Join 4,000+ teams who make faster decisions with Pulse. Set up in minutes, cancel any time.',
										{
											align: 'center',
											color: '#dbeafe',
											size: '18px',
											lh: 1.6,
											mb: '32px',
										}
									),
									buttons(
										[
											button( 'Start free trial', {
												bg: '#ffffff',
												color: BLUE,
											} ),
											button( 'Talk to sales', {
												outline: true,
												color: '#ffffff',
											} ),
										],
										{ justify: 'center' }
									),
								],
								{ className: 'gk-kit-intro-center' }
							),
						],
						{
							gradient:
								'linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)',
							radius: 28,
							py: [ 72, 64, 48 ],
							px: [ 48, 40, 24 ],
						}
					),
				],
				{ bg: '#ffffff', py: [ 80, 64, 48 ] }
			),
		],
	},
	{
		id: 'cta-banner-simple',
		title: 'Newsletter CTA Banner',
		category: 'cta',
		desc: 'Inline Zentro CTA banner for sign-ups or lead magnets.',
		keywords: 'cta banner newsletter lead inline',
		blocks: () => [
			section(
				[
					node( 'zentro-blocks/cta-banner-block', {
						headline: 'Get our free 2027 web design checklist',
						subtext:
							'42 points every agency checks before launch — accessibility, GDPR, speed and SEO.',
						buttonLabel: 'Download free',
						bgColor: '#fff7ed',
						textColor: '#7c2d12',
						btnBgColor: '#ea580c',
						btnTextColor: '#ffffff',
						alignment: 'left',
						layout: 'inline',
						paddingV: 48,
						borderRadius: 20,
					} ),
				],
				{ bg: '#ffffff', py: [ 64, 56, 40 ] }
			),
		],
	},

	// ------------------------------------------------------------------ FOOTER
	{
		id: 'footer-mega',
		title: 'Mega Footer',
		category: 'footer',
		desc: 'Dark footer with brand, link columns, contact details and socials.',
		keywords: 'footer links contact bottom',
		blocks: () => {
			const col = ( title, links ) =>
				group( [
					heading( title, {
						level: 4,
						color: '#ffffff',
						size: '15px',
						weight: 600,
						mt: '0',
						mb: '16px',
					} ),
					para(
						links
							.map( ( l ) => `<a href="#">${ l }</a>` )
							.join( '<br>' ),
						{
							color: '#94a3b8',
							link: '#94a3b8',
							size: '15px',
							lh: 2.1,
							mb: '0',
						}
					),
				] );
			return [
				section(
					[
						grid(
							[
								group( [
									heading( 'Pulse', {
										level: 3,
										color: '#ffffff',
										size: '26px',
										weight: 800,
										mt: '0',
										mb: '12px',
									} ),
									para(
										'Live dashboards and reporting for modern teams. Hosted in the EU.',
										{
											color: '#94a3b8',
											size: '15px',
											lh: 1.7,
											mb: '20px',
										}
									),
									socials( [
										'linkedin',
										'x',
										'instagram',
										'youtube',
									] ),
								] ),
								col( 'Product', [
									'Features',
									'Integrations',
									'Pricing',
									'Changelog',
								] ),
								col( 'Company', [
									'About',
									'Careers',
									'Blog',
									'Press',
								] ),
								col( 'Contact', [
									'hello@pulse.example',
									'+49 30 1234 5678',
									'Berlin, Germany',
								] ),
							],
							{
								tpl: [ '1.6fr 1fr 1fr 1fr', '1fr 1fr', '1fr' ],
								gap: [ 40, 32, 32 ],
							}
						),
						separator( '#1e293b' ),
						para(
							'© 2026 Pulse GmbH. All rights reserved. · <a href="#">Privacy</a> · <a href="#">Imprint</a>',
							{
								color: '#64748b',
								link: '#94a3b8',
								size: '14px',
								mb: '0',
							}
						),
					],
					{ bg: INK, py: [ 80, 64, 48 ], pb: [ 40, 32, 32 ] }
				),
			];
		},
	},
];
