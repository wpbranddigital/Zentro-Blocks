/**
 * Zentro Kit – industry pattern packs:
 * Digital Agency, Healthcare / Clinic and Real Estate.
 *
 * Layouts follow the conventions used by top-performing sites in each niche
 * (clear H1 + primary CTA above the fold, trust signals, scannable cards,
 * semantic headings for SEO). All copy and images are demo content.
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
	container,
	grid,
	section,
	intro,
	tabs,
	table,
	gallery,
} from './dsl';

export const industryCategories = [
	{ id: 'agency', label: 'Digital Agency' },
	{ id: 'healthcare', label: 'Healthcare / Clinic' },
	{ id: 'realestate', label: 'Real Estate' },
];

// ===========================================================================
// DIGITAL AGENCY – "Nova Studio"
// ===========================================================================
const AG = {
	ink: '#0a0a0a',
	muted: '#525252',
	violet: '#7c3aed',
	lime: '#bef264',
	soft: '#f5f5f4',
};
const agIntro = ( e, t, x, o = {} ) =>
	intro( e, t, x, {
		accent: AG.violet,
		color: AG.ink,
		muted: AG.muted,
		...o,
	} );
const agBtn = ( t ) => button( t, { bg: AG.ink, color: '#ffffff' } );

const agPrice = (
	planTitle,
	price,
	billingPeriod,
	features,
	popular = false
) =>
	node( 'zentro-blocks/pricing-card-block', {
		planTitle,
		price,
		currencySymbol: '€',
		billingPeriod,
		features,
		isPopular: popular,
		badgeText: 'Most popular',
		buttonLabel: popular ? 'Get started' : 'Book a call',
		primaryColor: popular ? AG.violet : AG.ink,
		borderRadius: 18,
	} );

const agencyPatterns = [
	{
		id: 'agency-hero',
		title: 'Agency Hero',
		category: 'agency',
		desc: 'Bold dark hero with headline, CTAs, team image and client logo strip.',
		keywords: 'agency marketing digital hero studio',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								para( '● Digital growth agency · Since 2014', {
									color: AG.lime,
									size: '14px',
									weight: 600,
									mb: '20px',
								} ),
								heading(
									'We build brands that grow your business',
									{
										level: 1,
										color: '#ffffff',
										size: 'clamp(2.5rem, 5.6vw, 4.4rem)',
										weight: 800,
										lh: 1.04,
										ls: '-0.035em',
										mt: '0',
										mb: '22px',
									}
								),
								para(
									'Strategy, design and performance marketing under one roof. We turn ambitious companies into category leaders — with results you can measure.',
									{
										color: '#a3a3a3',
										size: '18px',
										lh: 1.7,
										mb: '32px',
									}
								),
								buttons( [
									button( 'Get a free proposal', {
										bg: AG.lime,
										color: AG.ink,
									} ),
									button( 'See our work →', {
										outline: true,
										color: '#ffffff',
										bc: 'rgba(255,255,255,0.3)',
									} ),
								] ),
							] ),
							image(
								img( '1522071820081-009f0129c71c', 1000 ),
								'Nova Studio team planning a campaign',
								{ ratio: '4/5', radius: '28px' }
							),
						],
						{
							tpl: [ '1.15fr 1fr', '1fr', '1fr' ],
							gap: [ 64, 48, 40 ],
							valign: 'center',
							mb: 64,
						}
					),
					para( 'Trusted by fast-growing brands', {
						color: '#737373',
						size: '13px',
						weight: 600,
						upper: true,
						ls: '0.12em',
						mb: '20px',
					} ),
					grid(
						[
							'Lumora',
							'Brightpath',
							'Kinetic',
							'Oakridge',
							'Velvet&Co',
							'Nordwave',
						].map( ( n ) =>
							para( n, {
								color: '#d4d4d4',
								size: '20px',
								weight: 800,
								mb: '0',
							} )
						),
						{
							cols: [ 6, 3, 2 ],
							gap: [ 24, 20, 16 ],
							rowGap: [ 0, 16, 16 ],
						}
					),
				],
				{ bg: AG.ink, py: [ 110, 88, 64 ] }
			),
		],
	},
	{
		id: 'agency-services',
		title: 'Marketing Services',
		category: 'agency',
		desc: 'Six numbered service cards: SEO, ads, social, content, web and CRO.',
		keywords: 'services seo ads social media content marketing',
		blocks: () => {
			const svc = ( n, title, text ) =>
				group(
					[
						para( n, {
							color: AG.violet,
							size: '14px',
							weight: 700,
							mb: '28px',
						} ),
						heading( title, {
							level: 3,
							color: AG.ink,
							size: '22px',
							weight: 700,
							mt: '0',
							mb: '10px',
						} ),
						para( text, {
							color: AG.muted,
							size: '15px',
							lh: 1.65,
							mb: '18px',
						} ),
						para( '<a href="#">Learn more →</a>', {
							size: '15px',
							weight: 600,
							link: AG.ink,
							mb: '0',
						} ),
					],
					{
						bg: '#ffffff',
						pad: '32px',
						radius: '22px',
						bw: '1px',
						bc: '#e7e5e4',
					}
				);
			return [
				section(
					[
						agIntro(
							'What we do',
							'Marketing services that move the numbers',
							'Pick one service or let us run your entire growth engine.'
						),
						grid(
							[
								svc(
									'01',
									'Search Engine Optimisation',
									'Technical SEO, content and links that win page-one rankings for the searches that matter.'
								),
								svc(
									'02',
									'Paid Advertising',
									'Google, Meta and LinkedIn campaigns optimised daily for cost per lead, not vanity clicks.'
								),
								svc(
									'03',
									'Social Media',
									'Scroll-stopping content and community management that builds a loyal audience.'
								),
								svc(
									'04',
									'Content Marketing',
									'Articles, guides and video that educate buyers and generate demand on autopilot.'
								),
								svc(
									'05',
									'Web Design & Dev',
									'Fast, accessible, conversion-focused websites built on WordPress and headless stacks.'
								),
								svc(
									'06',
									'Email & CRO',
									'Automations, A/B tests and landing pages that turn more visitors into customers.'
								),
							],
							{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ] }
						),
					],
					{ bg: AG.soft }
				),
			];
		},
	},
	{
		id: 'agency-case-studies',
		title: 'Case Studies',
		category: 'agency',
		desc: 'Two results-driven case study cards with headline metrics.',
		keywords: 'case study results clients success',
		blocks: () => {
			const cs = ( photo, tag, title, m1, l1, m2, l2 ) =>
				group( [
					image( img( photo, 1000 ), title, {
						ratio: '16/10',
						radius: '20px',
					} ),
					para( tag, {
						color: AG.violet,
						size: '13px',
						weight: 700,
						upper: true,
						ls: '0.1em',
						mt: '24px',
						mb: '8px',
					} ),
					heading( title, {
						level: 3,
						color: AG.ink,
						size: 'clamp(1.4rem, 2.4vw, 1.8rem)',
						weight: 700,
						lh: 1.25,
						mt: '0',
						mb: '20px',
					} ),
					grid(
						[
							group( [
								heading( m1, {
									level: 4,
									color: AG.ink,
									size: '34px',
									weight: 800,
									mt: '0',
									mb: '4px',
								} ),
								para( l1, {
									color: AG.muted,
									size: '14px',
									mb: '0',
								} ),
							] ),
							group( [
								heading( m2, {
									level: 4,
									color: AG.ink,
									size: '34px',
									weight: 800,
									mt: '0',
									mb: '4px',
								} ),
								para( l2, {
									color: AG.muted,
									size: '14px',
									mb: '0',
								} ),
							] ),
						],
						{ cols: [ 2, 2, 2 ], gap: [ 20, 16, 12 ], mb: 20 }
					),
					para( '<a href="#">Read the case study →</a>', {
						size: '15px',
						weight: 600,
						link: AG.ink,
						mb: '0',
					} ),
				] );
			return [
				section(
					[
						grid(
							[
								agIntro(
									'Case studies',
									'Results we’re proud of',
									null,
									{ align: 'left', mb: '0' }
								),
								buttons( [ agBtn( 'All case studies' ) ] ),
							],
							{
								tpl: [ '1fr auto', '1fr', '1fr' ],
								valign: 'end',
								gap: [ 24, 20, 20 ],
								mb: 48,
							}
						),
						grid(
							[
								cs(
									'1460925895917-afdab827c52f',
									'E-commerce · SEO + Ads',
									'How Lumora tripled online revenue in 9 months',
									'+312%',
									'Organic traffic',
									'3.4×',
									'Return on ad spend'
								),
								cs(
									'1551434678-e076c223a692',
									'SaaS · Content + CRO',
									'Brightpath cut cost per lead by 58% while doubling demos',
									'-58%',
									'Cost per lead',
									'2.1×',
									'Demo bookings'
								),
							],
							{ cols: [ 2, 2, 1 ], gap: [ 40, 28, 48 ] }
						),
					],
					{ bg: '#ffffff' }
				),
			];
		},
	},
	{
		id: 'agency-portfolio-grid',
		title: 'Portfolio Grid',
		category: 'agency',
		desc: 'Six project tiles with category labels for showcasing work.',
		keywords: 'portfolio work projects grid branding web design',
		blocks: () => {
			const tile = ( photo, title, cat ) =>
				group( [
					image( img( photo, 800 ), `${ title } project`, {
						ratio: '1/1',
						radius: '18px',
					} ),
					heading( title, {
						level: 3,
						color: AG.ink,
						size: '19px',
						weight: 700,
						mt: '16px',
						mb: '4px',
					} ),
					para( cat, { color: AG.muted, size: '14px', mb: '0' } ),
				] );
			return [
				section(
					[
						agIntro(
							'Selected work',
							'Brands we’ve helped shine',
							'Branding, websites and campaigns for startups and household names.'
						),
						grid(
							[
								tile(
									'1561070791-2526d30994b5',
									'Kinetic Fitness',
									'Brand identity · Website'
								),
								tile(
									'1498050108023-c5249f4df085',
									'Oakridge Bank',
									'Web app · UX design'
								),
								tile(
									'1542744094-3a31f272c490',
									'Velvet & Co',
									'Social media campaign'
								),
								tile(
									'1531482615713-2afd69097998',
									'Nordwave Travel',
									'Website redesign'
								),
								tile(
									'1557838923-2985c318be48',
									'Lumora Skincare',
									'E-commerce · Ads'
								),
								tile(
									'1504868584819-f8e8b4b6d7e3',
									'Brightpath',
									'SaaS marketing site'
								),
							],
							{ cols: [ 3, 2, 1 ], gap: [ 28, 20, 28 ] }
						),
					],
					{ bg: AG.soft }
				),
			];
		},
	},
	{
		id: 'agency-work-process',
		title: 'Work Process',
		category: 'agency',
		desc: 'Four-step process on a dark background: discover, strategy, create, grow.',
		keywords: 'process steps how we work method',
		blocks: () => {
			const step = ( n, title, text ) =>
				group(
					[
						heading( n, {
							level: 3,
							color: AG.lime,
							size: '44px',
							weight: 800,
							mt: '0',
							mb: '16px',
						} ),
						heading( title, {
							level: 3,
							color: '#ffffff',
							size: '21px',
							weight: 700,
							mt: '0',
							mb: '10px',
						} ),
						para( text, {
							color: '#a3a3a3',
							size: '15px',
							lh: 1.65,
							mb: '0',
						} ),
					],
					{ pad: '28px', radius: '20px', bw: '1px', bc: '#262626' }
				);
			return [
				section(
					[
						agIntro(
							'How we work',
							'A proven process, from kickoff to growth',
							null,
							{ color: '#ffffff', accent: AG.lime }
						),
						grid(
							[
								step(
									'01',
									'Discover',
									'Workshops, audits and competitor research to understand where the growth is hiding.'
								),
								step(
									'02',
									'Strategy',
									'A clear 90-day roadmap with channels, budgets, KPIs and owners.'
								),
								step(
									'03',
									'Create',
									'Design, build and launch — campaigns, content and websites shipped fast.'
								),
								step(
									'04',
									'Grow',
									'Weekly optimisation and transparent reporting that compounds results.'
								),
							],
							{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 16 ] }
						),
					],
					{ bg: AG.ink }
				),
			];
		},
	},
	{
		id: 'agency-client-reviews',
		title: 'Client Reviews',
		category: 'agency',
		desc: 'Rating summary with three client review cards and photos.',
		keywords: 'reviews testimonials clients rating google',
		blocks: () => {
			const review = ( photo, name, role, text ) =>
				group(
					[
						para( '★★★★★', {
							color: '#f59e0b',
							size: '18px',
							mb: '16px',
						} ),
						para( `“${ text }”`, {
							color: AG.ink,
							size: '17px',
							lh: 1.65,
							mb: '24px',
						} ),
						group(
							[
								image( img( photo, 160 ), name, {
									ratio: '1/1',
									radius: '999px',
								} ),
								para(
									`<strong>${ name }</strong><br>${ role }`,
									{
										color: AG.muted,
										size: '14px',
										lh: 1.5,
										mb: '0',
									}
								),
							],
							{
								row: true,
								nowrap: true,
								gap: '12px',
								className: 'gk-kit-avatar-row',
							}
						),
					],
					{
						bg: '#ffffff',
						pad: '30px',
						radius: '22px',
						bw: '1px',
						bc: '#e7e5e4',
					}
				);
			return [
				section(
					[
						agIntro(
							'Client reviews',
							'Rated 4.9/5 from 180+ reviews',
							'What founders and marketing leaders say about working with us.'
						),
						grid(
							[
								review(
									'1494790108377-be9c29b29330',
									'Emma Clarke',
									'CMO, Lumora',
									'Nova rebuilt our funnel from scratch. Revenue from organic search tripled and our ads finally make money.'
								),
								review(
									'1500648767791-00dcc994a43e',
									'Jonas Weber',
									'Founder, Kinetic',
									'The best agency we have worked with. Fast, honest and obsessed with results — not hours billed.'
								),
								review(
									'1438761681033-6461ffad8d80',
									'Sara Lindqvist',
									'Head of Growth, Brightpath',
									'Clear reporting every week and a team that feels like ours. We doubled demo bookings in one quarter.'
								),
							],
							{ cols: [ 3, 1, 1 ], gap: [ 24, 20, 20 ] }
						),
					],
					{ bg: '#ffffff' }
				),
			];
		},
	},
	{
		id: 'agency-pricing-plans',
		title: 'Pricing Plans (Tabs)',
		category: 'agency',
		desc: 'Monthly retainers and one-off projects in switchable tabs with pricing cards.',
		keywords: 'pricing plans packages retainer tabs',
		blocks: () => [
			section(
				[
					agIntro(
						'Pricing',
						'Transparent plans, no surprises',
						'Cancel monthly plans any time. All prices exclude VAT.'
					),
					tabs(
						[
							{
								label: 'Monthly retainers',
								blocks: [
									grid(
										[
											agPrice(
												'Starter',
												'1,490',
												'/month',
												[
													'SEO or Ads (1 channel)',
													'Monthly strategy call',
													'Performance dashboard',
													'Email support',
												]
											),
											agPrice(
												'Growth',
												'2,990',
												'/month',
												[
													'SEO + Ads + Social',
													'Bi-weekly strategy calls',
													'4 landing pages / quarter',
													'Dedicated account manager',
												],
												true
											),
											agPrice(
												'Scale',
												'5,900',
												'/month',
												[
													'Full-funnel marketing team',
													'Weekly strategy calls',
													'Unlimited creative',
													'CRO & A/B testing',
												]
											),
										],
										{
											cols: [ 3, 1, 1 ],
											gap: [ 24, 20, 20 ],
											valign: 'center',
											py: [ 16, 12, 8 ],
										}
									),
								],
							},
							{
								label: 'One-off projects',
								blocks: [
									grid(
										[
											agPrice(
												'Brand Sprint',
												'3,500',
												'one-off',
												[
													'Logo & visual identity',
													'Brand guidelines',
													'Social templates',
												]
											),
											agPrice(
												'Website',
												'8,900',
												'from',
												[
													'Up to 12 pages',
													'WordPress + SEO setup',
													'Accessibility (WCAG AA)',
													'30 days support',
												],
												true
											),
											agPrice(
												'Marketing Audit',
												'990',
												'one-off',
												[
													'SEO, ads & analytics audit',
													'Prioritised action plan',
													'60-min walkthrough',
												]
											),
										],
										{
											cols: [ 3, 1, 1 ],
											gap: [ 24, 20, 20 ],
											valign: 'center',
											py: [ 16, 12, 8 ],
										}
									),
								],
							},
						],
						{ color: AG.violet, align: 'center', radius: 10 }
					),
				],
				{ bg: AG.soft }
			),
		],
	},
	{
		id: 'agency-team-showcase',
		title: 'Team Showcase',
		category: 'agency',
		desc: 'Four team members with photos, roles and social links.',
		keywords: 'team people experts staff',
		blocks: () => [
			section(
				[
					agIntro(
						'The team',
						'Specialists, not generalists',
						'Senior experts in every channel — no juniors learning on your budget.'
					),
					node( 'zentro-blocks/team-member-block', {
						members: [
							{
								name: 'Mia Hoffmann',
								role: 'Founder & Strategy',
								bio: '15 years growing brands across Europe.',
								imageUrl: img(
									'1580489944761-15a19d654956',
									600
								),
								imageAlt: 'Mia Hoffmann',
								linkedinUrl: '#',
							},
							{
								name: 'Leo Martins',
								role: 'Head of Performance',
								bio: '€40M+ ad spend managed profitably.',
								imageUrl: img(
									'1519085360753-af0119f7cbe7',
									600
								),
								imageAlt: 'Leo Martins',
								linkedinUrl: '#',
							},
							{
								name: 'Aisha Khan',
								role: 'Creative Director',
								bio: 'Award-winning brand and campaign design.',
								imageUrl: img(
									'1534528741775-53994a69daeb',
									600
								),
								imageAlt: 'Aisha Khan',
								linkedinUrl: '#',
							},
							{
								name: 'Noah Fischer',
								role: 'SEO Lead',
								bio: 'Ranks competitive keywords in 6 languages.',
								imageUrl: img(
									'1527980965255-d3b416303d12',
									600
								),
								imageAlt: 'Noah Fischer',
								linkedinUrl: '#',
							},
						],
						columnsDesktop: 4,
						columnsTablet: 2,
						columnsMobile: 1,
						gap: 24,
						imageStyle: 'square',
						alignment: 'left',
						bgColor: '#ffffff',
						textColor: AG.ink,
						roleColor: AG.violet,
					} ),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'agency-lead-cta',
		title: 'Lead Generation CTA',
		category: 'agency',
		desc: 'Free audit offer with benefits checklist and strong call to action.',
		keywords: 'lead generation cta audit offer contact',
		blocks: () => [
			section(
				[
					container(
						[
							grid(
								[
									group( [
										heading(
											'Get a free marketing audit worth €990',
											{
												color: '#ffffff',
												size: 'clamp(1.9rem, 4vw, 3rem)',
												weight: 800,
												lh: 1.1,
												mt: '0',
												mb: '16px',
											}
										),
										para(
											'In 48 hours you’ll know exactly what’s holding your growth back — and how to fix it.',
											{
												color: '#ede9fe',
												size: '18px',
												lh: 1.6,
												mb: '28px',
											}
										),
										buttons( [
											button( 'Claim my free audit', {
												bg: AG.lime,
												color: AG.ink,
											} ),
											button( 'Talk to us', {
												outline: true,
												color: '#ffffff',
											} ),
										] ),
									] ),
									group(
										[
											heading( 'What you get', {
												level: 3,
												color: '#ffffff',
												size: '18px',
												weight: 700,
												mt: '0',
												mb: '12px',
											} ),
											list(
												[
													'SEO & site speed review',
													'Ad account & tracking check',
													'Competitor benchmark',
													'30-min video walkthrough',
												],
												{
													color: '#ffffff',
													size: '16px',
													lh: 2,
												}
											),
										],
										{
											bg: 'rgba(255,255,255,0.1)',
											radius: '20px',
											pad: '28px',
										}
									),
								],
								{
									tpl: [ '1.4fr 1fr', '1fr', '1fr' ],
									gap: [ 48, 32, 28 ],
									valign: 'center',
								}
							),
						],
						{
							gradient:
								'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)',
							radius: 28,
							py: [ 64, 56, 40 ],
							px: [ 56, 40, 24 ],
						}
					),
				],
				{ bg: '#ffffff', py: [ 80, 64, 48 ] }
			),
		],
	},
];

// ===========================================================================
// HEALTHCARE / CLINIC – "CareWell Clinic"
// ===========================================================================
const MD = {
	ink: '#0f2a3a',
	muted: '#4b6475',
	teal: '#0e7490',
	tealLight: '#06b6d4',
	soft: '#ecfeff',
	mint: '#f0fdfa',
};
const mdIntro = ( e, t, x, o = {} ) =>
	intro( e, t, x, { accent: MD.teal, color: MD.ink, muted: MD.muted, ...o } );
const mdBtn = ( t ) => button( t, { bg: MD.teal, color: '#ffffff' } );

const healthcarePatterns = [
	{
		id: 'medical-hero',
		title: 'Medical Hero',
		category: 'healthcare',
		desc: 'Clinic hero with appointment CTA, phone number, trust stats and doctor photo.',
		keywords: 'medical clinic doctor hospital health hero',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								para( '✚ Family clinic in Berlin-Mitte', {
									color: MD.teal,
									size: '14px',
									weight: 700,
									mb: '18px',
								} ),
								heading(
									'Compassionate care for your whole family',
									{
										level: 1,
										color: MD.ink,
										size: 'clamp(2.4rem, 5.2vw, 3.9rem)',
										weight: 700,
										lh: 1.08,
										ls: '-0.02em',
										mt: '0',
										mb: '20px',
									}
								),
								para(
									'Same-week appointments with experienced doctors, modern diagnostics and a team that takes time to listen.',
									{
										color: MD.muted,
										size: '18px',
										lh: 1.7,
										mb: '32px',
									}
								),
								buttons( [
									mdBtn( 'Book an appointment' ),
									button( 'Call +49 30 1234 567', {
										outline: true,
										color: MD.ink,
									} ),
								] ),
								grid(
									[
										group( [
											heading( '25+', {
												level: 3,
												color: MD.ink,
												size: '32px',
												weight: 800,
												mt: '0',
												mb: '2px',
											} ),
											para( 'Years of care', {
												color: MD.muted,
												size: '14px',
												mb: '0',
											} ),
										] ),
										group( [
											heading( '40', {
												level: 3,
												color: MD.ink,
												size: '32px',
												weight: 800,
												mt: '0',
												mb: '2px',
											} ),
											para( 'Specialist doctors', {
												color: MD.muted,
												size: '14px',
												mb: '0',
											} ),
										] ),
										group( [
											heading( '4.9★', {
												level: 3,
												color: MD.ink,
												size: '32px',
												weight: 800,
												mt: '0',
												mb: '2px',
											} ),
											para( '2,300 reviews', {
												color: MD.muted,
												size: '14px',
												mb: '0',
											} ),
										] ),
									],
									{
										cols: [ 3, 3, 3 ],
										gap: [ 24, 20, 12 ],
										mt: 40,
									}
								),
							] ),
							image(
								img( '1612349317150-e413f6a5b16d', 1000 ),
								'Smiling doctor at CareWell Clinic',
								{ ratio: '4/5', radius: '32px' }
							),
						],
						{
							tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
							gap: [ 64, 48, 40 ],
							valign: 'center',
						}
					),
				],
				{
					gradient: 'linear-gradient(180deg,#ecfeff 0%,#ffffff 100%)',
					py: [ 100, 80, 56 ],
				}
			),
		],
	},
	{
		id: 'doctor-profiles',
		title: 'Doctor Profiles',
		category: 'healthcare',
		desc: 'Four doctor cards with photo, specialty, short bio and profile links.',
		keywords: 'doctors physicians team specialists profiles',
		blocks: () => [
			section(
				[
					mdIntro(
						'Our doctors',
						'Meet our specialists',
						'Board-certified physicians with decades of combined experience.'
					),
					node( 'zentro-blocks/team-member-block', {
						members: [
							{
								name: 'Dr. Laura Becker',
								role: 'Cardiologist',
								bio: '18 years in preventive cardiology. Speaks German & English.',
								imageUrl: img( '1559839734-2b71ea197ec2', 600 ),
								imageAlt: 'Dr. Laura Becker, cardiologist',
								linkedinUrl: '#',
								emailAddress: 'becker@carewell.example',
							},
							{
								name: 'Dr. Samuel Osei',
								role: 'General Practitioner',
								bio: 'Family medicine for all ages, with a focus on chronic care.',
								imageUrl: img(
									'1622253692010-333f2da6031d',
									600
								),
								imageAlt:
									'Dr. Samuel Osei, general practitioner',
								linkedinUrl: '#',
								emailAddress: 'osei@carewell.example',
							},
							{
								name: 'Dr. Mei Tanaka',
								role: 'Pediatrician',
								bio: 'Gentle care for babies, children and teens.',
								imageUrl: img(
									'1594824476967-48c8b964273f',
									600
								),
								imageAlt: 'Dr. Mei Tanaka, pediatrician',
								linkedinUrl: '#',
								emailAddress: 'tanaka@carewell.example',
							},
							{
								name: 'Dr. Paul Richter',
								role: 'Dermatologist',
								bio: 'Skin cancer screening and medical dermatology.',
								imageUrl: img(
									'1537368910025-700350fe46c7',
									600
								),
								imageAlt: 'Dr. Paul Richter, dermatologist',
								linkedinUrl: '#',
								emailAddress: 'richter@carewell.example',
							},
						],
						columnsDesktop: 4,
						columnsTablet: 2,
						columnsMobile: 1,
						gap: 24,
						imageStyle: 'square',
						alignment: 'center',
						bgColor: '#ffffff',
						textColor: MD.ink,
						roleColor: MD.teal,
					} ),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'medical-services',
		title: 'Medical Services',
		category: 'healthcare',
		desc: 'Six service cards with icons for check-ups, cardiology, pediatrics and more.',
		keywords: 'medical services treatments care check-up',
		blocks: () => [
			section(
				[
					mdIntro(
						'Services',
						'Complete care under one roof',
						'From routine check-ups to specialist treatment — no long waits, no referrals ping-pong.'
					),
					node( 'zentro-blocks/box-card-block', {
						cards: [
							{
								title: 'General Check-ups',
								description:
									'Annual health checks, vaccinations and preventive screenings for adults.',
								iconType: 'icon',
								iconName: 'check',
								showBadge: false,
								cardLink: '#',
								cardLinkText: 'Learn more →',
							},
							{
								title: 'Cardiology',
								description:
									'ECG, stress tests and heart health programs led by specialists.',
								iconType: 'icon',
								iconName: 'heart',
								showBadge: false,
								cardLink: '#',
								cardLinkText: 'Learn more →',
							},
							{
								title: 'Pediatrics',
								description:
									'Child development checks, vaccinations and same-day sick visits.',
								iconType: 'icon',
								iconName: 'star',
								showBadge: false,
								cardLink: '#',
								cardLinkText: 'Learn more →',
							},
							{
								title: 'Dermatology',
								description:
									'Skin cancer screening, acne treatment and allergy testing.',
								iconType: 'icon',
								iconName: 'shield',
								showBadge: false,
								cardLink: '#',
								cardLinkText: 'Learn more →',
							},
							{
								title: 'Lab & Diagnostics',
								description:
									'On-site blood tests and ultrasound with results in 24 hours.',
								iconType: 'icon',
								iconName: 'bulb',
								showBadge: true,
								badgeText: '24H',
								cardLink: '#',
								cardLinkText: 'Learn more →',
							},
							{
								title: 'Telehealth',
								description:
									'Video consultations and e-prescriptions from the comfort of home.',
								iconType: 'icon',
								iconName: 'rocket',
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
						titleColor: MD.ink,
						descColor: MD.muted,
						badgeBg: MD.teal,
						linkColor: MD.teal,
						borderColor: '#cffafe',
						borderRadius: 18,
					} ),
				],
				{ bg: MD.soft }
			),
		],
	},
	{
		id: 'appointment-cta',
		title: 'Appointment CTA',
		category: 'healthcare',
		desc: 'Teal booking banner with buttons and a contact / emergency card.',
		keywords: 'appointment booking cta call emergency',
		blocks: () => [
			section(
				[
					container(
						[
							grid(
								[
									group( [
										heading(
											'Book your appointment in under 60 seconds',
											{
												color: '#ffffff',
												size: 'clamp(1.9rem, 3.8vw, 2.8rem)',
												weight: 700,
												lh: 1.15,
												mt: '0',
												mb: '16px',
											}
										),
										para(
											'Choose your doctor and time online, or call us — new patients are always welcome.',
											{
												color: '#cffafe',
												size: '18px',
												lh: 1.6,
												mb: '28px',
											}
										),
										buttons( [
											button( 'Book online', {
												bg: '#ffffff',
												color: MD.teal,
											} ),
											button( 'Call the clinic', {
												outline: true,
												color: '#ffffff',
											} ),
										] ),
									] ),
									group(
										[
											para(
												'<strong>Reception</strong><br><a href="tel:+49301234567">+49 30 1234 567</a>',
												{
													color: '#ffffff',
													link: '#ffffff',
													size: '16px',
													lh: 1.6,
													mb: '16px',
												}
											),
											para(
												'<strong>Email</strong><br><a href="mailto:hello@carewell.example">hello@carewell.example</a>',
												{
													color: '#ffffff',
													link: '#ffffff',
													size: '16px',
													lh: 1.6,
													mb: '16px',
												}
											),
											para(
												'<strong>Emergency</strong><br>Call 112 for life-threatening emergencies.',
												{
													color: '#ffffff',
													size: '16px',
													lh: 1.6,
													mb: '0',
												}
											),
										],
										{
											bg: 'rgba(255,255,255,0.12)',
											radius: '20px',
											pad: '28px',
										}
									),
								],
								{
									tpl: [ '1.5fr 1fr', '1fr', '1fr' ],
									gap: [ 48, 32, 28 ],
									valign: 'center',
								}
							),
						],
						{
							gradient:
								'linear-gradient(135deg,#0e7490 0%,#0891b2 100%)',
							radius: 28,
							py: [ 64, 56, 40 ],
							px: [ 56, 40, 24 ],
						}
					),
				],
				{ bg: '#ffffff', py: [ 80, 64, 48 ] }
			),
		],
	},
	{
		id: 'opening-hours',
		title: 'Opening Hours',
		category: 'healthcare',
		desc: 'Address, directions and a semantic opening-hours table.',
		keywords: 'opening hours schedule location address contact',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								mdIntro(
									'Visit us',
									'Opening hours & location',
									'Walk-ins welcome for urgent cases during opening hours.',
									{ align: 'left', mb: '24px' }
								),
								para(
									'<strong>CareWell Clinic</strong><br>Friedrichstraße 120, 10117 Berlin<br>U6 Oranienburger Tor · Parking in courtyard',
									{
										color: MD.ink,
										size: '16px',
										lh: 1.8,
										mb: '24px',
									}
								),
								buttons( [ mdBtn( 'Get directions' ) ] ),
							] ),
							group(
								[
									heading( 'Clinic hours', {
										level: 3,
										color: MD.ink,
										size: '22px',
										weight: 700,
										mt: '0',
										mb: '16px',
									} ),
									table(
										[
											[ 'Monday', '08:00 – 18:00' ],
											[ 'Tuesday', '08:00 – 18:00' ],
											[ 'Wednesday', '08:00 – 14:00' ],
											[ 'Thursday', '08:00 – 20:00' ],
											[ 'Friday', '08:00 – 16:00' ],
											[ 'Saturday', '09:00 – 13:00' ],
											[ 'Sunday', 'Closed' ],
										],
										{ stripes: true, color: MD.ink }
									),
									para(
										'Telehealth available Mon–Fri until 21:00.',
										{
											color: MD.muted,
											size: '14px',
											mt: '12px',
											mb: '0',
										}
									),
								],
								{
									bg: '#ffffff',
									radius: '22px',
									pad: '32px',
									bw: '1px',
									bc: '#cffafe',
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
				{ bg: MD.mint }
			),
		],
	},
	{
		id: 'patient-testimonials',
		title: 'Patient Testimonials',
		category: 'healthcare',
		desc: 'Auto-playing patient reviews with star ratings.',
		keywords: 'patient reviews testimonials feedback',
		blocks: () => [
			section(
				[
					mdIntro(
						'Patient stories',
						'Trusted by 12,000+ patients',
						null
					),
					node( 'zentro-blocks/testimonials-carousel', {
						testimonials: [
							{
								name: 'Katrin M.',
								role: 'Patient since 2019',
								feedback:
									'I got an appointment the same week and Dr. Becker took real time to explain everything. The whole team is warm and professional.',
								rating: 5,
								avatar: img( '1544005313-94ddf0286df2', 200 ),
							},
							{
								name: 'Ahmed R.',
								role: 'Father of two',
								feedback:
									'Our kids actually like going to the doctor now. Dr. Tanaka is wonderful, and the online booking saves us so much time.',
								rating: 5,
								avatar: img(
									'1507003211169-0a1dd7228f2d',
									200
								),
							},
							{
								name: 'Helga S.',
								role: 'Cardiology patient',
								feedback:
									'Modern equipment, short waiting times and results within a day. I finally feel in good hands with my heart condition.',
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
						primaryColor: MD.teal,
						textColor: MD.ink,
						cardBgColor: '#ffffff',
					} ),
				],
				{ bg: MD.soft }
			),
		],
	},
	{
		id: 'department-cards',
		title: 'Department Cards',
		category: 'healthcare',
		desc: 'Four department cards with photos, descriptions and links.',
		keywords: 'departments specialties cardiology pediatrics dental',
		blocks: () => {
			const dept = ( photo, title, text ) =>
				group(
					[
						image( img( photo, 700 ), `${ title } department`, {
							ratio: '4/3',
							radius: '16px',
						} ),
						heading( title, {
							level: 3,
							color: MD.ink,
							size: '20px',
							weight: 700,
							mt: '18px',
							mb: '8px',
						} ),
						para( text, {
							color: MD.muted,
							size: '15px',
							lh: 1.6,
							mb: '14px',
						} ),
						para( '<a href="#">View department →</a>', {
							size: '15px',
							weight: 600,
							link: MD.teal,
							mb: '0',
						} ),
					],
					{
						bg: '#ffffff',
						pad: [ '14px', '14px', '24px' ],
						radius: '22px',
						bw: '1px',
						bc: '#e2e8f0',
					}
				);
			return [
				section(
					[
						mdIntro(
							'Departments',
							'Specialist departments',
							'Every department is led by a senior consultant with dedicated nursing staff.'
						),
						grid(
							[
								dept(
									'1579684385127-1ef15d508118',
									'Cardiology',
									'Heart screening, ECG and long-term cardiac care.'
								),
								dept(
									'1581056771107-24ca5f033842',
									'Dental Care',
									'Check-ups, hygiene and cosmetic dentistry.'
								),
								dept(
									'1631217868264-e5b90bb7e133',
									'Pediatrics',
									'Friendly care from newborns to teenagers.'
								),
								dept(
									'1551076805-e1869033e561',
									'Diagnostics',
									'Lab tests, ultrasound and digital X-ray.'
								),
							],
							{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 20 ] }
						),
					],
					{ bg: '#ffffff' }
				),
			];
		},
	},
	{
		id: 'medical-faq',
		title: 'Medical FAQ',
		category: 'healthcare',
		desc: 'Patient questions on insurance, first visits and results in an accordion.',
		keywords: 'faq questions insurance appointment',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								mdIntro(
									'FAQ',
									'Questions patients often ask',
									'Can’t find your answer? Our reception team is happy to help.',
									{ align: 'left', mb: '28px' }
								),
								buttons( [ mdBtn( 'Contact reception' ) ] ),
							] ),
							node( 'zentro-blocks/accordion-block', {
								panels: [
									{
										title: 'Do you accept public and private insurance?',
										content:
											'Yes. We work with all statutory health insurers (GKV) and private insurers (PKV). Self-paying patients are also welcome.',
									},
									{
										title: 'What should I bring to my first visit?',
										content:
											'Please bring your insurance card, photo ID, a list of current medications and any recent test results or doctor’s letters.',
									},
									{
										title: 'How quickly can I get an appointment?',
										content:
											'Most patients are seen within 3 working days. Urgent cases are seen the same day during opening hours.',
									},
									{
										title: 'How do I receive my test results?',
										content:
											'Results are available in our secure patient portal within 24–48 hours, and your doctor will call you if anything needs discussing.',
									},
									{
										title: 'Can I cancel or reschedule online?',
										content:
											'Yes, up to 24 hours before your appointment via the confirmation email or patient portal.',
									},
								],
								activeColor: MD.teal,
								titleBgColor: '#f0fdfa',
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
];

// ===========================================================================
// REAL ESTATE – "Haven Estates"
// ===========================================================================
const RE = {
	navy: '#0f2742',
	ink: '#14213d',
	muted: '#5b6472',
	gold: '#c8a24a',
	soft: '#f6f4ef',
};
const reIntro = ( e, t, x, o = {} ) =>
	intro( e, t, x, { accent: RE.gold, color: RE.ink, muted: RE.muted, ...o } );
const reBtn = ( t ) =>
	button( t, { bg: RE.navy, color: '#ffffff', radius: '10px' } );

const propertyCard = ( photo, price, title, address, meta, badge ) =>
	group(
		[
			image( img( photo, 800 ), title, { ratio: '4/3', radius: '14px' } ),
			para( badge, {
				color: RE.gold,
				size: '12px',
				weight: 700,
				upper: true,
				ls: '0.1em',
				mt: '18px',
				mb: '6px',
			} ),
			heading( price, {
				level: 4,
				color: RE.ink,
				size: '24px',
				weight: 800,
				mt: '0',
				mb: '6px',
			} ),
			heading( title, {
				level: 3,
				color: RE.ink,
				size: '18px',
				weight: 600,
				mt: '0',
				mb: '6px',
			} ),
			para( address, { color: RE.muted, size: '14px', mb: '14px' } ),
			para( meta, {
				color: RE.ink,
				size: '14px',
				weight: 600,
				pad: [ '12px', '0', '0' ],
				mb: '0',
				className: 'gk-kit-meta',
			} ),
		],
		{
			bg: '#ffffff',
			pad: [ '14px', '14px', '22px' ],
			radius: '20px',
			bw: '1px',
			bc: '#e7e2d6',
		}
	);

const realEstatePatterns = [
	{
		id: 'property-hero',
		title: 'Property Hero',
		category: 'realestate',
		desc: 'Full-width home photo hero with headline, CTAs and market stats.',
		keywords: 'real estate property hero home house realtor',
		blocks: () => [
			cover(
				img( '1600047509807-ba8f99d2cdde', 1920 ),
				[
					para( 'Haven Estates · Munich & surroundings', {
						color: RE.gold,
						size: '14px',
						weight: 700,
						upper: true,
						ls: '0.12em',
						mb: '16px',
					} ),
					heading( 'Find a home you’ll love for years', {
						level: 1,
						color: '#ffffff',
						size: 'clamp(2.6rem, 6vw, 4.6rem)',
						weight: 700,
						lh: 1.05,
						ls: '-0.02em',
						mt: '0',
						mb: '18px',
					} ),
					para(
						'Hand-picked houses and apartments, honest advice and agents who know every street.',
						{ color: '#e5e7eb', size: '19px', lh: 1.6, mb: '30px' }
					),
					buttons( [
						button( 'Browse properties', {
							bg: RE.gold,
							color: RE.navy,
							radius: '10px',
						} ),
						button( 'Get a free valuation', {
							outline: true,
							color: '#ffffff',
							radius: '10px',
						} ),
					] ),
					grid(
						[
							group( [
								heading( '1,200+', {
									level: 3,
									color: '#ffffff',
									size: '30px',
									weight: 800,
									mt: '0',
									mb: '2px',
								} ),
								para( 'Homes sold', {
									color: '#d1d5db',
									size: '14px',
									mb: '0',
								} ),
							] ),
							group( [
								heading( '98%', {
									level: 3,
									color: '#ffffff',
									size: '30px',
									weight: 800,
									mt: '0',
									mb: '2px',
								} ),
								para( 'Asking price achieved', {
									color: '#d1d5db',
									size: '14px',
									mb: '0',
								} ),
							] ),
							group( [
								heading( '21 days', {
									level: 3,
									color: '#ffffff',
									size: '30px',
									weight: 800,
									mt: '0',
									mb: '2px',
								} ),
								para( 'Average time to sell', {
									color: '#d1d5db',
									size: '14px',
									mb: '0',
								} ),
							] ),
						],
						{ cols: [ 3, 3, 3 ], gap: [ 32, 24, 12 ], mt: 48 }
					),
				],
				{
					align: 'full',
					minHeight: 680,
					overlay: '#0b1a2e',
					dim: 55,
					position: 'center center',
				}
			),
		],
	},
	{
		id: 'property-search',
		title: 'Property Search Bar',
		category: 'realestate',
		desc: 'Visual search panel (location, type, price, beds) with popular searches.',
		keywords: 'search filter find property location price',
		blocks: () => {
			const field = ( label, value ) =>
				group(
					[
						para( label, {
							color: RE.muted,
							size: '12px',
							weight: 700,
							upper: true,
							ls: '0.08em',
							mb: '4px',
						} ),
						para( `${ value } <span aria-hidden="true">▾</span>`, {
							color: RE.ink,
							size: '16px',
							weight: 600,
							mb: '0',
						} ),
					],
					{ bg: '#ffffff', radius: '12px', pad: [ '14px', '18px' ] }
				);
			return [
				section(
					[
						reIntro( 'Search', 'Search 2,400+ properties', null, {
							color: '#ffffff',
							mb: '32px',
						} ),
						container(
							[
								grid(
									[
										field( 'Location', 'Munich, Germany' ),
										field( 'Property type', 'House' ),
										field( 'Price range', '€500k – €900k' ),
										field( 'Bedrooms', '3+' ),
										buttons(
											[
												button( 'Search', {
													bg: RE.gold,
													color: RE.navy,
													radius: '12px',
													pad: [ '20px', '32px' ],
												} ),
											],
											{ justify: 'center' }
										),
									],
									{
										tpl: [
											'1.3fr 1fr 1.2fr 0.8fr auto',
											'1fr 1fr',
											'1fr',
										],
										gap: [ 12, 12, 10 ],
										valign: 'center',
									}
								),
							],
							{
								bg: 'rgba(255,255,255,0.08)',
								radius: 18,
								py: [ 14, 14, 12 ],
								px: [ 14, 14, 12 ],
							}
						),
						para(
							'Popular: <a href="#">Schwabing apartments</a> · <a href="#">Family homes with garden</a> · <a href="#">New builds</a> · <a href="#">Lakeside villas</a>',
							{
								color: '#cbd5e1',
								link: '#ffffff',
								size: '15px',
								mt: '20px',
								mb: '0',
							}
						),
					],
					{ bg: RE.navy, py: [ 80, 64, 48 ] }
				),
			];
		},
	},
	{
		id: 'property-listings',
		title: 'Property Listings (Tabs)',
		category: 'realestate',
		desc: 'For Sale / For Rent tabs with property cards: price, address and specs.',
		keywords: 'listings properties for sale rent cards tabs',
		blocks: () => [
			section(
				[
					grid(
						[
							reIntro(
								'Latest listings',
								'Homes available now',
								null,
								{ align: 'left', mb: '0' }
							),
							buttons( [ reBtn( 'View all properties' ) ] ),
						],
						{
							tpl: [ '1fr auto', '1fr', '1fr' ],
							valign: 'end',
							gap: [ 24, 20, 20 ],
							mb: 32,
						}
					),
					tabs(
						[
							{
								label: 'For sale',
								blocks: [
									grid(
										[
											propertyCard(
												'1570129477492-45c003edd2be',
												'€845,000',
												'Family House with Garden',
												'Pasing, Munich',
												'4 bd · 3 ba · 165 m²',
												'For sale'
											),
											propertyCard(
												'1605276374104-dee2a0ed3cd6',
												'€1,290,000',
												'Modern Villa with Pool',
												'Grünwald, Munich',
												'5 bd · 4 ba · 280 m²',
												'New'
											),
											propertyCard(
												'1568605114967-8130f3a36994',
												'€629,000',
												'Charming Townhouse',
												'Haidhausen, Munich',
												'3 bd · 2 ba · 120 m²',
												'Price reduced'
											),
										],
										{
											cols: [ 3, 2, 1 ],
											gap: [ 24, 20, 20 ],
											pt: [ 24, 20, 16 ],
										}
									),
								],
							},
							{
								label: 'For rent',
								blocks: [
									grid(
										[
											propertyCard(
												'1522708323590-d24dbb6b0267',
												'€2,150 / month',
												'Bright Loft Apartment',
												'Schwabing, Munich',
												'2 bd · 1 ba · 85 m²',
												'For rent'
											),
											propertyCard(
												'1560448204-e02f11c3d0e2',
												'€1,780 / month',
												'Furnished City Flat',
												'Maxvorstadt, Munich',
												'2 bd · 1 ba · 72 m²',
												'Furnished'
											),
											propertyCard(
												'1502672260266-1c1ef2d93688',
												'€3,400 / month',
												'Penthouse with Terrace',
												'Bogenhausen, Munich',
												'3 bd · 2 ba · 140 m²',
												'Premium'
											),
										],
										{
											cols: [ 3, 2, 1 ],
											gap: [ 24, 20, 20 ],
											pt: [ 24, 20, 16 ],
										}
									),
								],
							},
						],
						{ color: RE.navy, radius: 10 }
					),
				],
				{ bg: RE.soft }
			),
		],
	},
	{
		id: 'featured-property',
		title: 'Featured Property',
		category: 'realestate',
		desc: 'Large featured listing: photo, price, specs grid and viewing CTA.',
		keywords: 'featured property spotlight luxury listing',
		blocks: () => {
			const spec = ( value, label ) =>
				group(
					[
						heading( value, {
							level: 4,
							color: RE.ink,
							size: '22px',
							weight: 800,
							mt: '0',
							mb: '2px',
						} ),
						para( label, {
							color: RE.muted,
							size: '13px',
							mb: '0',
						} ),
					],
					{ bg: RE.soft, radius: '12px', pad: '14px' }
				);
			return [
				section(
					[
						reIntro(
							'Featured property',
							'This week’s spotlight',
							null
						),
						grid(
							[
								image(
									img( '1613490493576-7fde63acd811', 1200 ),
									'Lakeside villa with pool',
									{ ratio: '4/3', radius: '24px' }
								),
								group( [
									para( 'Featured · New listing', {
										color: RE.gold,
										size: '13px',
										weight: 700,
										upper: true,
										ls: '0.1em',
										mb: '10px',
									} ),
									heading(
										'Lakeside Villa with Private Pool',
										{
											level: 3,
											color: RE.ink,
											size: 'clamp(1.7rem, 3vw, 2.3rem)',
											weight: 700,
											lh: 1.2,
											mt: '0',
											mb: '8px',
										}
									),
									para( 'Starnberg, Bavaria', {
										color: RE.muted,
										size: '16px',
										mb: '16px',
									} ),
									heading( '€2,450,000', {
										level: 4,
										color: RE.navy,
										size: '32px',
										weight: 800,
										mt: '0',
										mb: '20px',
									} ),
									grid(
										[
											spec( '5', 'Bedrooms' ),
											spec( '4', 'Bathrooms' ),
											spec( '320 m²', 'Living area' ),
											spec( '1,100 m²', 'Plot' ),
										],
										{
											cols: [ 2, 4, 2 ],
											gap: [ 12, 12, 10 ],
											mb: 24,
										}
									),
									para(
										'Floor-to-ceiling glass, a heated pool and direct lake views — 30 minutes from Munich.',
										{
											color: RE.muted,
											size: '16px',
											lh: 1.7,
											mb: '24px',
										}
									),
									buttons( [
										reBtn( 'Schedule a viewing' ),
										button( 'Download exposé', {
											outline: true,
											color: RE.ink,
											radius: '10px',
										} ),
									] ),
								] ),
							],
							{
								tpl: [ '1.2fr 1fr', '1fr', '1fr' ],
								gap: [ 56, 40, 32 ],
								valign: 'center',
							}
						),
					],
					{ bg: '#ffffff' }
				),
			];
		},
	},
	{
		id: 'agent-profiles',
		title: 'Agent Profiles',
		category: 'realestate',
		desc: 'Four real-estate agents with photos, areas and contact links.',
		keywords: 'agents realtors brokers team contact',
		blocks: () => [
			section(
				[
					reIntro(
						'Our agents',
						'Local experts on your side',
						'Each agent specialises in specific neighbourhoods — so you get insider knowledge.'
					),
					node( 'zentro-blocks/team-member-block', {
						members: [
							{
								name: 'Julia Wagner',
								role: 'Senior Agent · Schwabing',
								bio: '320+ homes sold. Speaks German, English & Italian.',
								imageUrl: img(
									'1573497019940-1c28c88b4f3e',
									600
								),
								imageAlt: 'Julia Wagner, senior agent',
								linkedinUrl: '#',
								emailAddress: 'julia@haven.example',
							},
							{
								name: 'Marco Rossi',
								role: 'Luxury Homes · Starnberg',
								bio: 'Specialist in lakeside and luxury properties.',
								imageUrl: img( '1560250097-0b93528c311a', 600 ),
								imageAlt: 'Marco Rossi, luxury agent',
								linkedinUrl: '#',
								emailAddress: 'marco@haven.example',
							},
							{
								name: 'Lena Schulz',
								role: 'Rentals · City Centre',
								bio: 'Finds tenants in under 14 days on average.',
								imageUrl: img(
									'1580489944761-15a19d654956',
									600
								),
								imageAlt: 'Lena Schulz, rentals agent',
								linkedinUrl: '#',
								emailAddress: 'lena@haven.example',
							},
							{
								name: 'David Klein',
								role: 'New Builds · Riem',
								bio: 'Advises buyers on off-plan and new developments.',
								imageUrl: img(
									'1519085360753-af0119f7cbe7',
									600
								),
								imageAlt: 'David Klein, new builds agent',
								linkedinUrl: '#',
								emailAddress: 'david@haven.example',
							},
						],
						columnsDesktop: 4,
						columnsTablet: 2,
						columnsMobile: 1,
						gap: 24,
						imageStyle: 'square',
						alignment: 'center',
						bgColor: '#ffffff',
						textColor: RE.ink,
						roleColor: RE.gold,
					} ),
				],
				{ bg: RE.soft }
			),
		],
	},
	{
		id: 'property-details',
		title: 'Property Details',
		category: 'realestate',
		desc: 'Listing detail layout: price, key facts, description, features, facts table and agent card.',
		keywords: 'property details listing single facts features agent',
		blocks: () => {
			const fact = ( value, label ) =>
				group(
					[
						heading( value, {
							level: 4,
							color: RE.ink,
							size: '22px',
							weight: 800,
							mt: '0',
							mb: '2px',
						} ),
						para( label, {
							color: RE.muted,
							size: '13px',
							mb: '0',
						} ),
					],
					{
						bg: '#ffffff',
						radius: '14px',
						pad: '16px',
						bw: '1px',
						bc: '#e7e2d6',
					}
				);
			return [
				section(
					[
						grid(
							[
								group( [
									para( 'For sale · Ref. HE-2041', {
										color: RE.gold,
										size: '13px',
										weight: 700,
										upper: true,
										ls: '0.1em',
										mb: '10px',
									} ),
									heading( 'Modern Family Villa with Pool', {
										level: 2,
										color: RE.ink,
										size: 'clamp(1.9rem, 3.6vw, 2.7rem)',
										weight: 700,
										lh: 1.15,
										mt: '0',
										mb: '8px',
									} ),
									para( 'Waldstraße 14, 82031 Grünwald', {
										color: RE.muted,
										size: '16px',
										mb: '16px',
									} ),
									heading( '€1,290,000', {
										level: 3,
										color: RE.navy,
										size: '34px',
										weight: 800,
										mt: '0',
										mb: '28px',
									} ),
									grid(
										[
											fact( '5', 'Bedrooms' ),
											fact( '4', 'Bathrooms' ),
											fact( '280 m²', 'Living area' ),
											fact( '2022', 'Year built' ),
										],
										{
											cols: [ 4, 4, 2 ],
											gap: [ 14, 12, 10 ],
											mb: 32,
										}
									),
									heading( 'About this home', {
										level: 3,
										color: RE.ink,
										size: '22px',
										weight: 700,
										mt: '0',
										mb: '12px',
									} ),
									para(
										'A light-filled villa on a quiet, tree-lined street, designed for family life. The open kitchen flows into a double-height living room and a south-facing terrace with heated pool.',
										{
											color: RE.muted,
											size: '16px',
											lh: 1.75,
											mb: '14px',
										}
									),
									para(
										'Upstairs, the master suite has a walk-in wardrobe and spa bathroom. Excellent schools, forest trails and the S-Bahn are within walking distance.',
										{
											color: RE.muted,
											size: '16px',
											lh: 1.75,
											mb: '28px',
										}
									),
									heading( 'Features', {
										level: 3,
										color: RE.ink,
										size: '22px',
										weight: 700,
										mt: '0',
										mb: '12px',
									} ),
									grid(
										[
											list(
												[
													'Heated outdoor pool',
													'Underfloor heating',
													'Smart-home system',
													'Double garage',
												],
												{
													color: RE.ink,
													size: '15px',
													lh: 2,
												}
											),
											list(
												[
													'Solar panels (A+ energy)',
													'Fitted designer kitchen',
													'Landscaped garden',
													'Wine cellar',
												],
												{
													color: RE.ink,
													size: '15px',
													lh: 2,
												}
											),
										],
										{
											cols: [ 2, 2, 1 ],
											gap: [ 24, 20, 0 ],
											mb: 28,
										}
									),
									heading( 'Property facts', {
										level: 3,
										color: RE.ink,
										size: '22px',
										weight: 700,
										mt: '0',
										mb: '12px',
									} ),
									table(
										[
											[
												'Property type',
												'Detached villa',
											],
											[ 'Plot size', '850 m²' ],
											[ 'Energy class', 'A+' ],
											[ 'Heating', 'Heat pump + solar' ],
											[ 'Available from', 'March 2027' ],
										],
										{
											stripes: true,
											color: RE.ink,
											size: '15px',
										}
									),
								] ),
								group(
									[
										image(
											img(
												'1573497019940-1c28c88b4f3e',
												400
											),
											'Julia Wagner, listing agent',
											{
												ratio: '1/1',
												radius: '999px',
												mb: '16px',
											}
										),
										heading( 'Julia Wagner', {
											level: 3,
											align: 'center',
											color: RE.ink,
											size: '20px',
											weight: 700,
											mt: '0',
											mb: '4px',
										} ),
										para( 'Senior Agent · Haven Estates', {
											align: 'center',
											color: RE.muted,
											size: '14px',
											mb: '20px',
										} ),
										buttons(
											[ reBtn( 'Schedule a viewing' ) ],
											{ justify: 'center', mb: '10px' }
										),
										buttons(
											[
												button(
													'Call +49 89 555 0123',
													{
														outline: true,
														color: RE.ink,
														radius: '10px',
													}
												),
											],
											{ justify: 'center' }
										),
										para( 'Usually replies within 1 hour', {
											align: 'center',
											color: RE.muted,
											size: '13px',
											mt: '16px',
											mb: '0',
										} ),
									],
									{
										bg: '#ffffff',
										radius: '22px',
										pad: '28px',
										bw: '1px',
										bc: '#e7e2d6',
										className: 'gk-kit-agent-card',
									}
								),
							],
							{
								tpl: [ '2fr 1fr', '1fr', '1fr' ],
								gap: [ 48, 32, 32 ],
								valign: 'start',
							}
						),
					],
					{ bg: RE.soft }
				),
			];
		},
	},
	{
		id: 'property-gallery',
		title: 'Property Gallery',
		category: 'realestate',
		desc: 'Six-photo responsive gallery for a property or development.',
		keywords: 'gallery photos images property interior',
		blocks: () => [
			section(
				[
					reIntro(
						'Gallery',
						'Take a look inside',
						'Every room photographed in natural light. Book a viewing to see it in person.'
					),
					gallery(
						[
							[
								img( '1600210492486-724fe5c67fb0', 900 ),
								'Open-plan living room',
							],
							[
								img( '1600573472550-8090b5e0745e', 900 ),
								'Designer kitchen with island',
							],
							[
								img( '1502005229762-cf1b2da7c5d6', 900 ),
								'Master bedroom',
							],
							[
								img( '1560185007-cde436f6a4d0', 900 ),
								'Bright lounge area',
							],
							[
								img( '1484154218962-a197022b5858', 900 ),
								'Dining area and kitchen',
							],
							[
								img( '1600585154340-be6161a56a0c', 900 ),
								'Exterior with terrace and pool',
							],
						],
						{
							cols: 3,
							tab: 2,
							mob: 1,
							gap: 16,
							radius: 14,
							ratio: '4/3',
						}
					),
					buttons( [ reBtn( 'Book a viewing' ) ], {
						justify: 'center',
						mt: '36px',
					} ),
				],
				{ bg: '#ffffff' }
			),
		],
	},
];

export const industryPatterns = [
	...agencyPatterns,
	...healthcarePatterns,
	...realEstatePatterns,
];
