/**
 * Zentro Kit – extra section patterns (3 more for every small category).
 * Realistic demo content; users only replace copy and images.
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
	tabs,
	table,
	gallery,
} from './dsl';

const BLUE = '#2563eb';
const INK = '#0f172a';
const MUTED = '#64748b';
const SOFT = '#f8fafc';

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

const card = ( children, o = {} ) =>
	group( children, {
		bg: o.bg || '#ffffff',
		pad: o.pad || '28px',
		radius: o.radius || '20px',
		bw: o.bw === false ? undefined : '1px',
		bc: o.bc || '#e2e8f0',
		className: o.className,
	} );

const price = ( planTitle, p, period, features, o = {} ) =>
	node( 'zentro-blocks/pricing-card-block', {
		planTitle,
		price: p,
		currencySymbol: o.cur || '€',
		billingPeriod: period,
		features,
		isPopular: !! o.popular,
		badgeText: o.badge || 'Most popular',
		buttonLabel: o.cta || 'Get started',
		primaryColor: o.color || ( o.popular ? BLUE : INK ),
		cardBgColor: o.bg || '#ffffff',
		textColor: o.text || '#333333',
		borderRadius: 18,
	} );

const accordion = ( panels, color = BLUE ) =>
	node( 'zentro-blocks/accordion-block', {
		panels: panels.map( ( [ title, content ] ) => ( { title, content } ) ),
		activeColor: color,
		titleBgColor: SOFT,
		contentBgColor: '#ffffff',
		borderRadius: 12,
		allowMultiple: false,
	} );

const avatarRow = ( photo, name, role, color = MUTED ) =>
	group(
		[
			image( img( photo, 160 ), name, { ratio: '1/1', radius: '999px' } ),
			para( `<strong>${ name }</strong><br>${ role }`, {
				color,
				size: '14px',
				lh: 1.5,
				mb: '0',
			} ),
		],
		{ row: true, nowrap: true, gap: '12px', className: 'gk-kit-avatar-row' }
	);

const footerCol = ( title, links, color = '#94a3b8', titleColor = '#ffffff' ) =>
	group( [
		heading( title, {
			level: 4,
			color: titleColor,
			size: '15px',
			weight: 600,
			mt: '0',
			mb: '14px',
		} ),
		para( links.map( ( l ) => `<a href="#">${ l }</a>` ).join( '<br>' ), {
			color,
			link: color,
			size: '15px',
			lh: 2.1,
			mb: '0',
		} ),
	] );

export const morePatterns = [
	// ================================================================ CONTENT
	{
		id: 'content-feature-zigzag',
		title: 'Feature Zig-Zag Rows',
		category: 'content',
		desc: 'Alternating image / text rows with checklists — perfect for explaining a product or service.',
		keywords: 'zigzag alternating feature rows image text checklist',
		blocks: () => {
			const row = ( photo, eyebrow, title, text, items, flip ) => {
				const txt = group( [
					intro( eyebrow, title, text, {
						align: 'left',
						mb: '20px',
					} ),
					list( items, { color: INK, size: '16px', lh: 2 } ),
				] );
				const pic = image( img( photo, 1000 ), title, {
					ratio: '4/3',
					radius: '24px',
				} );
				return grid( flip ? [ txt, pic ] : [ pic, txt ], {
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 72, 40, 32 ],
					valign: 'center',
					mb: 80,
					className: flip ? 'gk-kit-flip-mobile' : undefined,
				} );
			};
			return [
				section(
					[
						row(
							'1460925895917-afdab827c52f',
							'Reporting',
							'Every metric in one clear view',
							'Stop switching between tabs. All your numbers update live in one dashboard.',
							[
								'Live data from 120+ sources',
								'Custom KPIs and goals',
								'Scheduled PDF reports',
							],
							false
						),
						row(
							'1552664730-d307ca884978',
							'Collaboration',
							'Make decisions together',
							'Comment, assign and share insights with the people who need them — instantly.',
							[
								'Comments on any chart',
								'Slack & Teams alerts',
								'Free guest access',
							],
							true
						),
					],
					{ bg: '#ffffff', pb: [ 20, 0, 0 ] }
				),
			];
		},
	},
	{
		id: 'content-mission-values',
		title: 'Mission & Values',
		category: 'content',
		desc: 'Big mission statement on dark background followed by three core values.',
		keywords: 'mission values vision company culture about',
		blocks: () => {
			const value = ( n, title, text ) =>
				group( [
					para( n, {
						color: '#60a5fa',
						size: '14px',
						weight: 700,
						mb: '14px',
					} ),
					heading( title, {
						level: 3,
						color: '#ffffff',
						size: '22px',
						weight: 700,
						mt: '0',
						mb: '10px',
					} ),
					para( text, {
						color: '#94a3b8',
						size: '16px',
						lh: 1.7,
						mb: '0',
					} ),
				] );
			return [
				section(
					[
						para( 'Our mission', {
							color: '#60a5fa',
							size: '13px',
							weight: 700,
							upper: true,
							ls: '0.12em',
							mb: '20px',
						} ),
						heading(
							'We believe every small business deserves the tools big companies take for granted.',
							{
								color: '#ffffff',
								size: 'clamp(1.8rem, 4vw, 3.2rem)',
								weight: 600,
								lh: 1.2,
								ls: '-0.02em',
								mt: '0',
								mb: '64px',
							}
						),
						grid(
							[
								value(
									'01',
									'Radical simplicity',
									'If it needs a manual, we haven’t finished designing it.'
								),
								value(
									'02',
									'Privacy by default',
									'Your data stays in the EU and is never sold. Ever.'
								),
								value(
									'03',
									'Customers first',
									'Every feature starts with a real conversation with a real user.'
								),
							],
							{ cols: [ 3, 3, 1 ], gap: [ 48, 28, 36 ] }
						),
					],
					{ bg: INK, py: [ 110, 88, 64 ] }
				),
			];
		},
	},
	{
		id: 'content-blog-cards',
		title: 'Latest Articles',
		category: 'content',
		desc: 'Three blog post cards with category, reading time and excerpt.',
		keywords: 'blog articles news posts latest',
		blocks: () => {
			const post = ( photo, cat, title, text ) =>
				group( [
					image( img( photo, 800 ), title, {
						ratio: '16/10',
						radius: '16px',
					} ),
					para( cat, {
						color: BLUE,
						size: '13px',
						weight: 600,
						mt: '18px',
						mb: '8px',
					} ),
					heading( `<a href="#">${ title }</a>`, {
						level: 3,
						color: INK,
						link: INK,
						size: '20px',
						weight: 700,
						lh: 1.35,
						mt: '0',
						mb: '8px',
					} ),
					para( text, {
						color: MUTED,
						size: '15px',
						lh: 1.6,
						mb: '0',
					} ),
				] );
			return [
				section(
					[
						grid(
							[
								intro( 'Blog', 'Insights from our team', null, {
									align: 'left',
									mb: '0',
								} ),
								buttons( [
									button( 'View all articles', {
										outline: true,
										color: INK,
									} ),
								] ),
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
								post(
									'1499750310107-5fef28a66643',
									'Growth · 6 min read',
									'7 metrics every founder should check weekly',
									'Skip vanity numbers — these are the signals that predict revenue.'
								),
								post(
									'1517245386807-bb43f82c33c4',
									'Product · 4 min read',
									'How we ship features in two-week cycles',
									'Our lightweight process for building fast without breaking things.'
								),
								post(
									'1454165804606-c3d57bc86b40',
									'Guides · 8 min read',
									'A practical guide to GDPR-friendly analytics',
									'Track what matters while respecting your visitors’ privacy.'
								),
							],
							{ cols: [ 3, 2, 1 ], gap: [ 28, 24, 32 ] }
						),
					],
					{ bg: SOFT }
				),
			];
		},
	},

	// ================================================================== STATS
	{
		id: 'stats-cards-light',
		title: 'Stats Cards',
		category: 'stats',
		desc: 'Four bordered stat cards with animated counters on a light background.',
		keywords: 'stats cards numbers metrics light',
		blocks: () => {
			const s = ( n, suf, label, sub ) =>
				card( [
					counter( n, suf, label, {
						align: 'left',
						size: 46,
						color: BLUE,
					} ),
					para( sub, {
						color: MUTED,
						size: '14px',
						lh: 1.5,
						mt: '8px',
						mb: '0',
					} ),
				] );
			return [
				section(
					[
						intro(
							'Impact',
							'Results our customers see',
							'Average results after 6 months, based on 1,200 customer accounts.'
						),
						grid(
							[
								s(
									38,
									'%',
									'More qualified leads',
									'Thanks to smarter targeting.'
								),
								s(
									12,
									'h',
									'Saved every week',
									'Reports build themselves.'
								),
								s(
									3,
									'x',
									'Faster decisions',
									'Live data instead of exports.'
								),
								s(
									97,
									'%',
									'Would recommend',
									'Net promoter score of 72.'
								),
							],
							{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 16 ] }
						),
					],
					{ bg: SOFT }
				),
			];
		},
	},
	{
		id: 'stats-split-image',
		title: 'Stats with Image',
		category: 'stats',
		desc: 'Photo on one side, headline and a 2×2 grid of counters on the other.',
		keywords: 'stats image split numbers about',
		blocks: () => [
			section(
				[
					grid(
						[
							image(
								img( '1522202176988-66273c2fd55f', 1000 ),
								'Workshop with clients',
								{ ratio: '1/1', radius: '28px' }
							),
							group( [
								intro(
									'By the numbers',
									'Ten years of helping teams grow',
									'We started with three people in a garage. Today we support companies in 48 countries.',
									{ align: 'left', mb: '36px' }
								),
								grid(
									[
										counter( 48, '', 'Countries', {
											align: 'left',
										} ),
										counter( 4200, '+', 'Customers', {
											align: 'left',
										} ),
										counter( 120, '+', 'Team members', {
											align: 'left',
										} ),
										counter( 99, '%', 'Uptime', {
											align: 'left',
										} ),
									],
									{
										cols: [ 2, 2, 2 ],
										gap: [ 32, 24, 16 ],
										rowGap: [ 32, 28, 24 ],
									}
								),
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
		id: 'stats-progress-skills',
		title: 'Progress Bars',
		category: 'stats',
		desc: 'Expertise or results shown as animated progress bars next to a short intro.',
		keywords: 'progress bars skills expertise percentage',
		blocks: () => {
			const bar = ( percentage, label ) =>
				node( 'zentro-blocks/progress-tracker', {
					type: 'bar',
					percentage,
					label,
					barColor: BLUE,
					trackColor: '#e2e8f0',
					textColor: INK,
					labelColor: INK,
					labelSize: 15,
					textSize: 15,
					strokeWidth: 10,
					alignment: 'left',
				} );
			return [
				section(
					[
						grid(
							[
								group( [
									intro(
										'Expertise',
										'Skills that deliver results',
										'A senior team with deep experience across strategy, design and engineering.',
										{ align: 'left', mb: '28px' }
									),
									buttons( [
										button( 'See our process', {
											bg: INK,
											color: '#ffffff',
										} ),
									] ),
								] ),
								group(
									[
										bar( 95, 'UX & product design' ),
										bar( 90, 'WordPress development' ),
										bar( 85, 'SEO & performance' ),
										bar( 80, 'Brand strategy' ),
									],
									{ gap: '22px' }
								),
							],
							{
								tpl: [ '1fr 1.2fr', '1fr', '1fr' ],
								gap: [ 72, 40, 32 ],
								valign: 'center',
							}
						),
					],
					{ bg: '#ffffff' }
				),
			];
		},
	},

	// ================================================================ PRICING
	{
		id: 'pricing-tabs-billing',
		title: 'Monthly / Yearly Pricing',
		category: 'pricing',
		desc: 'Billing switch built with Zentro Tabs — monthly and yearly plans.',
		keywords: 'pricing monthly yearly annual toggle tabs',
		blocks: () => {
			const set = ( mult, period ) =>
				grid(
					[
						price( 'Basic', String( 9 * mult ), period, [
							'1 website',
							'5 GB storage',
							'Email support',
						] ),
						price(
							'Pro',
							String( 29 * mult ),
							period,
							[
								'10 websites',
								'50 GB storage',
								'Priority support',
								'Free domain',
							],
							{ popular: true }
						),
						price( 'Agency', String( 79 * mult ), period, [
							'Unlimited websites',
							'500 GB storage',
							'White-label',
							'Phone support',
						] ),
					],
					{
						cols: [ 3, 1, 1 ],
						gap: [ 24, 20, 20 ],
						valign: 'center',
						py: [ 16, 12, 8 ],
					}
				);
			return [
				section(
					[
						intro(
							'Pricing',
							'Pick the plan that fits',
							'Save 2 months with yearly billing.'
						),
						tabs(
							[
								{
									label: 'Monthly',
									blocks: [ set( 1, '/month' ) ],
								},
								{
									label: 'Yearly (save 17%)',
									blocks: [ set( 10, '/year' ) ],
								},
							],
							{ color: BLUE, align: 'center' }
						),
					],
					{ bg: SOFT }
				),
			];
		},
	},
	{
		id: 'pricing-two-plans-dark',
		title: 'Free vs Pro Pricing',
		category: 'pricing',
		desc: 'Two plans side by side on a dark background — ideal for freemium products.',
		keywords: 'pricing free pro two plans freemium dark',
		blocks: () => [
			section(
				[
					intro(
						'Pricing',
						'Start free. Upgrade when you grow.',
						'No credit card required.',
						{
							color: '#ffffff',
							accent: '#60a5fa',
							muted: '#94a3b8',
						}
					),
					grid(
						[
							price(
								'Free',
								'0',
								'/forever',
								[
									'3 projects',
									'Basic analytics',
									'Community support',
								],
								{
									cta: 'Start for free',
									bg: '#1e293b',
									text: '#e2e8f0',
									color: '#94a3b8',
								}
							),
							price(
								'Pro',
								'19',
								'/month',
								[
									'Unlimited projects',
									'Advanced analytics',
									'Custom domain',
									'Priority support',
								],
								{
									popular: true,
									badge: 'Best value',
									cta: 'Start 14-day trial',
									bg: '#1e293b',
									text: '#e2e8f0',
									color: '#60a5fa',
								}
							),
						],
						{
							cols: [ 2, 2, 1 ],
							gap: [ 28, 20, 24 ],
							valign: 'center',
							className: 'gk-kit-narrow',
						}
					),
				],
				{ bg: INK }
			),
		],
	},
	{
		id: 'pricing-comparison-table',
		title: 'Plan Comparison Table',
		category: 'pricing',
		desc: 'Detailed feature comparison table across plans, with CTA buttons.',
		keywords: 'pricing comparison table features plans compare',
		blocks: () => [
			section(
				[
					intro(
						'Compare plans',
						'Every feature, side by side',
						null
					),
					container(
						[
							table(
								[
									[ 'Team members', '3', '15', 'Unlimited' ],
									[
										'Dashboards',
										'10',
										'Unlimited',
										'Unlimited',
									],
									[
										'Data refresh',
										'Daily',
										'Every 5 min',
										'Real-time',
									],
									[
										'Integrations',
										'20',
										'120+',
										'120+ & API',
									],
									[ 'SSO & audit log', '—', '—', '✓' ],
									[
										'Support',
										'Email',
										'Priority chat',
										'Dedicated manager',
									],
									[
										'<strong>Price</strong>',
										'<strong>€19/mo</strong>',
										'<strong>€49/mo</strong>',
										'<strong>€199/mo</strong>',
									],
								],
								{
									head: [
										'Feature',
										'Starter',
										'Growth',
										'Enterprise',
									],
									stripes: true,
									color: INK,
									size: '15px',
								}
							),
						],
						{ className: 'gk-kit-table-scroll' }
					),
					buttons(
						[
							button( 'Start free trial', {
								bg: BLUE,
								color: '#ffffff',
							} ),
							button( 'Talk to sales', {
								outline: true,
								color: INK,
							} ),
						],
						{ justify: 'center', mt: '36px' }
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// =========================================================== TESTIMONIALS
	{
		id: 'testimonials-colored-grid',
		title: 'Colourful Review Cards',
		category: 'testimonials',
		desc: 'Three pastel review cards with ratings, quotes and customer photos.',
		keywords: 'testimonials reviews grid cards colorful',
		blocks: () => {
			const r = ( bg, photo, name, role, text ) =>
				card(
					[
						para( '★★★★★', {
							color: '#f59e0b',
							size: '18px',
							mb: '14px',
						} ),
						para( `“${ text }”`, {
							color: INK,
							size: '17px',
							lh: 1.65,
							mb: '22px',
						} ),
						avatarRow( photo, name, role ),
					],
					{ bg, bw: false, radius: '24px', pad: '30px' }
				);
			return [
				section(
					[
						intro( 'Reviews', 'Don’t take our word for it', null ),
						grid(
							[
								r(
									'#fef3c7',
									'1494790108377-be9c29b29330',
									'Hannah Lee',
									'Owner, Bloom Café',
									'Our online orders doubled within two months of launching the new site. Customers keep complimenting it.'
								),
								r(
									'#e0f2fe',
									'1500648767791-00dcc994a43e',
									'Daniel Costa',
									'CEO, Fieldwork',
									'Professional, fast and genuinely invested in our success. The best decision we made this year.'
								),
								r(
									'#ede9fe',
									'1438761681033-6461ffad8d80',
									'Olivia Brandt',
									'Marketing Lead, Nordlys',
									'Clear communication from day one and a result that looks even better than the mock-ups.'
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
		id: 'testimonial-big-quote',
		title: 'Featured Quote',
		category: 'testimonials',
		desc: 'One large centred customer quote with portrait — high-impact social proof.',
		keywords: 'testimonial quote single featured big',
		blocks: () => [
			section(
				[
					group(
						[
							para( '“', {
								align: 'center',
								color: BLUE,
								size: '96px',
								weight: 800,
								lh: 0.8,
								mb: '8px',
							} ),
							heading(
								'We cut our reporting time from two days to twenty minutes. It changed how our whole company makes decisions.',
								{
									align: 'center',
									color: INK,
									size: 'clamp(1.6rem, 3.4vw, 2.5rem)',
									weight: 600,
									lh: 1.3,
									ls: '-0.01em',
									mt: '0',
									mb: '32px',
								}
							),
							image(
								img( '1573497019940-1c28c88b4f3e', 300 ),
								'Rachel Kim',
								{ ratio: '1/1', radius: '999px', mb: '14px' }
							),
							para(
								'<strong>Rachel Kim</strong><br>COO, Meridian Logistics',
								{
									align: 'center',
									color: MUTED,
									size: '15px',
									lh: 1.6,
									mb: '0',
								}
							),
						],
						{ className: 'gk-kit-intro-center gk-kit-quote' }
					),
				],
				{ bg: '#eef2ff' }
			),
		],
	},
	{
		id: 'testimonials-rating-split',
		title: 'Rating Summary + Reviews',
		category: 'testimonials',
		desc: 'Overall rating with platform scores next to two highlighted reviews.',
		keywords: 'rating reviews score google trustpilot summary',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								para( 'Customer rating', {
									color: BLUE,
									size: '13px',
									weight: 700,
									upper: true,
									ls: '0.12em',
									mb: '12px',
								} ),
								heading( '4.9', {
									color: INK,
									size: '88px',
									weight: 800,
									lh: 1,
									mt: '0',
									mb: '4px',
								} ),
								para( '★★★★★', {
									color: '#f59e0b',
									size: '24px',
									mb: '8px',
								} ),
								para( 'Based on 2,340 verified reviews', {
									color: MUTED,
									size: '15px',
									mb: '24px',
								} ),
								table(
									[
										[ 'Google', '4.9 / 5' ],
										[ 'Trustpilot', '4.8 / 5' ],
										[ 'Capterra', '4.9 / 5' ],
									],
									{ color: INK, size: '15px' }
								),
							] ),
							group(
								[
									card( [
										para(
											'“Setup was painless and support answered within minutes. Exactly what a small team needs.”',
											{
												color: INK,
												size: '17px',
												lh: 1.65,
												mb: '20px',
											}
										),
										avatarRow(
											'1507003211169-0a1dd7228f2d',
											'Martin Novak',
											'Founder, Brightside'
										),
									] ),
									card( [
										para(
											'“Beautiful, fast and easy to update ourselves. Our bounce rate dropped by 30%.”',
											{
												color: INK,
												size: '17px',
												lh: 1.65,
												mb: '20px',
											}
										),
										avatarRow(
											'1544005313-94ddf0286df2',
											'Clara Jensen',
											'Director, Fjord Studio'
										),
									] ),
								],
								{ gap: '20px' }
							),
						],
						{
							tpl: [ '1fr 1.5fr', '1fr', '1fr' ],
							gap: [ 64, 40, 32 ],
							valign: 'center',
						}
					),
				],
				{ bg: SOFT }
			),
		],
	},

	// =================================================================== TEAM
	{
		id: 'team-circle-dark',
		title: 'Team on Dark',
		category: 'team',
		desc: 'Circular team photos on a dark background with roles and socials.',
		keywords: 'team dark circle photos staff',
		blocks: () => [
			section(
				[
					intro( 'Leadership', 'The people steering the ship', null, {
						color: '#ffffff',
						accent: '#60a5fa',
					} ),
					node( 'zentro-blocks/team-member-block', {
						members: [
							{
								name: 'Elena Fischer',
								role: 'CEO',
								bio: 'Scaled two SaaS companies past €50M ARR.',
								imageUrl: img(
									'1580489944761-15a19d654956',
									500
								),
								imageAlt: 'Elena Fischer',
								linkedinUrl: '#',
							},
							{
								name: 'Omar Haddad',
								role: 'CTO',
								bio: 'Former principal engineer at a major cloud provider.',
								imageUrl: img(
									'1519085360753-af0119f7cbe7',
									500
								),
								imageAlt: 'Omar Haddad',
								linkedinUrl: '#',
							},
							{
								name: 'Grace Liu',
								role: 'CPO',
								bio: 'Product leader focused on simple, humane software.',
								imageUrl: img(
									'1534528741775-53994a69daeb',
									500
								),
								imageAlt: 'Grace Liu',
								linkedinUrl: '#',
							},
						],
						columnsDesktop: 3,
						columnsTablet: 3,
						columnsMobile: 1,
						gap: 28,
						imageStyle: 'circle',
						alignment: 'center',
						bgColor: '#1e293b',
						textColor: '#ffffff',
						roleColor: '#60a5fa',
					} ),
				],
				{ bg: INK }
			),
		],
	},
	{
		id: 'team-founder-split',
		title: 'Meet the Founder',
		category: 'team',
		desc: 'Founder portrait with personal story, signature quote and social links.',
		keywords: 'founder owner personal story about me',
		blocks: () => [
			section(
				[
					grid(
						[
							image(
								img( '1560250097-0b93528c311a', 900 ),
								'Thomas Berg, founder',
								{ ratio: '4/5', radius: '28px' }
							),
							group( [
								intro(
									'Meet the founder',
									'Hi, I’m Thomas.',
									null,
									{ align: 'left', mb: '20px' }
								),
								para(
									'I started Berg & Co in 2011 with one simple promise: treat every client’s budget like it was my own. Fifteen years and 600 projects later, that promise still guides everything we do.',
									{
										color: '#475569',
										size: '17px',
										lh: 1.8,
										mb: '20px',
									}
								),
								para(
									'“Great work comes from listening first and designing second.”',
									{
										color: INK,
										size: '20px',
										weight: 600,
										italic: true,
										lh: 1.5,
										mb: '24px',
									}
								),
								socials( [ 'linkedin', 'x', 'instagram' ], {
									color: INK,
									bg: '#e2e8f0',
								} ),
							] ),
						],
						{
							tpl: [ '1fr 1.2fr', '1fr', '1fr' ],
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
		id: 'team-photo-cards',
		title: 'Team Photo Cards',
		category: 'team',
		desc: 'Tall portrait cards with name, role and a short line about each person.',
		keywords: 'team portraits cards staff experts',
		blocks: () => {
			const m = ( photo, name, role, line ) =>
				card(
					[
						image( img( photo, 700 ), name, {
							ratio: '3/4',
							radius: '16px',
						} ),
						heading( name, {
							level: 3,
							color: INK,
							size: '20px',
							weight: 700,
							mt: '18px',
							mb: '2px',
						} ),
						para( role, {
							color: BLUE,
							size: '14px',
							weight: 600,
							mb: '8px',
						} ),
						para( line, {
							color: MUTED,
							size: '14px',
							lh: 1.6,
							mb: '0',
						} ),
					],
					{ pad: '12px' }
				);
			return [
				section(
					[
						intro(
							'Our team',
							'Small team, big expertise',
							'Every project gets a senior designer, developer and strategist.'
						),
						grid(
							[
								m(
									'1544005313-94ddf0286df2',
									'Nina Patel',
									'Design Lead',
									'Turns complex ideas into simple interfaces.'
								),
								m(
									'1507003211169-0a1dd7228f2d',
									'Jakob Meyer',
									'Lead Developer',
									'Writes fast, accessible, maintainable code.'
								),
								m(
									'1573497019940-1c28c88b4f3e',
									'Sophie Laurent',
									'Strategist',
									'Connects business goals with user needs.'
								),
							],
							{ cols: [ 3, 3, 1 ], gap: [ 24, 16, 24 ] }
						),
					],
					{ bg: SOFT }
				),
			];
		},
	},

	// ==================================================================== FAQ
	{
		id: 'faq-centered',
		title: 'Centred FAQ',
		category: 'faq',
		desc: 'Centred heading with a full-width accordion and contact link below.',
		keywords: 'faq centered accordion questions',
		blocks: () => [
			section(
				[
					intro(
						'FAQ',
						'Frequently asked questions',
						'Everything you need to know before getting started.'
					),
					group(
						[
							accordion( [
								[
									'How long does a typical project take?',
									'Most websites launch in 4–6 weeks. Larger projects with custom features take 8–12 weeks.',
								],
								[
									'Do you work with clients outside Germany?',
									'Yes — about half of our clients are in other EU countries, the UK and North America.',
								],
								[
									'Can I update the website myself?',
									'Absolutely. Every site is built with the WordPress block editor and we include a training session.',
								],
								[
									'What does maintenance cost?',
									'Care plans start at €49/month and include updates, backups, security monitoring and small edits.',
								],
							] ),
							para(
								'Still have questions? <a href="#">Contact our team →</a>',
								{
									align: 'center',
									color: MUTED,
									link: BLUE,
									size: '16px',
									mt: '28px',
									mb: '0',
								}
							),
						],
						{ className: 'gk-kit-intro-center' }
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'faq-two-columns',
		title: 'Two-Column FAQ',
		category: 'faq',
		desc: 'Two accordions side by side to show more questions without long scrolling.',
		keywords: 'faq two columns accordion',
		blocks: () => [
			section(
				[
					intro( 'Help centre', 'Answers to common questions', null ),
					grid(
						[
							accordion( [
								[
									'Is there a free trial?',
									'14 days, all features included, no credit card required.',
								],
								[
									'Can I cancel any time?',
									'Yes, cancel with one click. No contracts or hidden fees.',
								],
								[
									'Do you offer refunds?',
									'If you’re not happy within 30 days, we’ll refund you in full.',
								],
							] ),
							accordion( [
								[
									'Where is my data hosted?',
									'In ISO 27001 certified data centres in Frankfurt, Germany.',
								],
								[
									'Is it GDPR compliant?',
									'Yes. We sign a DPA with every customer and never sell data.',
								],
								[
									'Do you have an API?',
									'A full REST API and webhooks are available on Growth plans and above.',
								],
							] ),
						],
						{
							cols: [ 2, 2, 1 ],
							gap: [ 28, 20, 0 ],
							rowGap: [ 0, 0, 12 ],
						}
					),
				],
				{ bg: SOFT }
			),
		],
	},
	{
		id: 'faq-tabs-categories',
		title: 'FAQ by Category (Tabs)',
		category: 'faq',
		desc: 'FAQ grouped into General, Billing and Technical tabs, each with an accordion.',
		keywords: 'faq tabs categories billing technical support',
		blocks: () => [
			section(
				[
					intro(
						'Support',
						'How can we help?',
						'Browse questions by topic.'
					),
					tabs(
						[
							{
								label: 'General',
								blocks: [
									accordion( [
										[
											'What is Pulse?',
											'An analytics platform that turns your business data into live dashboards.',
										],
										[
											'Who is it for?',
											'Startups and SMEs that want clear numbers without hiring a data team.',
										],
										[
											'Which languages are supported?',
											'English, German, French and Spanish.',
										],
									] ),
								],
							},
							{
								label: 'Billing',
								blocks: [
									accordion( [
										[
											'Which payment methods do you accept?',
											'Credit card, SEPA direct debit and invoice for yearly plans.',
										],
										[
											'Do prices include VAT?',
											'Prices exclude VAT; it is added at checkout based on your country.',
										],
										[
											'Can I switch plans?',
											'Yes, changes are prorated automatically.',
										],
									] ),
								],
							},
							{
								label: 'Technical',
								blocks: [
									accordion( [
										[
											'Is there an API?',
											'Yes, a REST API with webhooks on Growth and Enterprise plans.',
										],
										[
											'Do you support SSO?',
											'SAML SSO is included in Enterprise.',
										],
										[
											'What is your uptime?',
											'99.99% over the last 12 months — see our status page.',
										],
									] ),
								],
							},
						],
						{ color: BLUE, align: 'center' }
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// ============================================================== PORTFOLIO
	{
		id: 'portfolio-gallery',
		title: 'Photo Gallery Grid',
		category: 'portfolio',
		desc: 'Six-image responsive gallery for photographers, venues and studios.',
		keywords: 'gallery photos portfolio images grid',
		blocks: () => [
			section(
				[
					intro( 'Gallery', 'A glimpse of our recent work', null ),
					gallery(
						[
							[
								img( '1600607687939-ce8a6c25118c', 900 ),
								'Bright living room interior',
							],
							[
								img( '1600566753190-17f0baa2a6c3', 900 ),
								'Modern kitchen design',
							],
							[
								img( '1497366216548-37526070297c', 900 ),
								'Open office space',
							],
							[
								img( '1600210492486-724fe5c67fb0', 900 ),
								'Minimal lounge',
							],
							[
								img( '1502005229762-cf1b2da7c5d6', 900 ),
								'Calm bedroom',
							],
							[
								img( '1560185007-cde436f6a4d0', 900 ),
								'Sunny reading corner',
							],
						],
						{ cols: 3, tab: 2, mob: 1, ratio: '1/1', radius: 16 }
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},
	{
		id: 'portfolio-case-feature',
		title: 'Featured Project',
		category: 'portfolio',
		desc: 'Large project image with client, services and results in a facts table.',
		keywords: 'case study project featured client results',
		blocks: () => [
			section(
				[
					grid(
						[
							image(
								img( '1498050108023-c5249f4df085', 1200 ),
								'Oakridge Bank web app',
								{ ratio: '4/3', radius: '24px' }
							),
							group( [
								intro(
									'Featured project',
									'Oakridge Bank: a banking app people actually enjoy',
									null,
									{ align: 'left', mb: '20px' }
								),
								table(
									[
										[ 'Client', 'Oakridge Bank' ],
										[
											'Services',
											'UX research, UI design, development',
										],
										[ 'Timeline', '14 weeks' ],
										[ 'Result', '+46% mobile sign-ups' ],
									],
									{ color: INK, size: '15px' }
								),
								buttons(
									[
										button( 'Read the case study', {
											bg: INK,
											color: '#ffffff',
										} ),
									],
									{ mt: '28px' }
								),
							] ),
						],
						{
							tpl: [ '1.2fr 1fr', '1fr', '1fr' ],
							gap: [ 64, 40, 32 ],
							valign: 'center',
						}
					),
				],
				{ bg: SOFT }
			),
		],
	},
	{
		id: 'portfolio-before-after',
		title: 'Before / After Showcase',
		category: 'portfolio',
		desc: 'Draggable before/after image slider with project story — great for renovation, design and beauty.',
		keywords: 'before after comparison renovation transformation',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								intro(
									'Transformation',
									'From dated to delightful in 6 weeks',
									'Drag the slider to see how we transformed this 1970s kitchen into a bright family space.',
									{ align: 'left', mb: '24px' }
								),
								list(
									[
										'Full layout redesign',
										'Custom oak cabinetry',
										'Energy-efficient lighting',
									],
									{ color: INK, size: '16px', lh: 2 }
								),
								buttons(
									[
										button( 'Start your project', {
											bg: INK,
											color: '#ffffff',
										} ),
									],
									{ mt: '24px' }
								),
							] ),
							node( 'zentro-blocks/image-comparison', {
								beforeImage: img(
									'1484154218962-a197022b5858',
									1200
								),
								afterImage: img(
									'1600566753190-17f0baa2a6c3',
									1200
								),
								beforeLabel: 'Before',
								afterLabel: 'After',
								showLabels: true,
								sliderOffset: 50,
								handleColor: BLUE,
								height: 460,
							} ),
						],
						{
							tpl: [ '1fr 1.3fr', '1fr', '1fr' ],
							gap: [ 56, 40, 32 ],
							valign: 'center',
						}
					),
				],
				{ bg: '#ffffff' }
			),
		],
	},

	// ==================================================================== CTA
	{
		id: 'cta-dark-split',
		title: 'Dark Split CTA',
		category: 'cta',
		desc: 'Dark call-to-action card with image, headline and two buttons.',
		keywords: 'cta dark split image signup',
		blocks: () => [
			section(
				[
					container(
						[
							grid(
								[
									group( [
										heading(
											'Launch your new website this month',
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
											'Book a 20-minute call. We’ll share a free plan, timeline and fixed price — no obligation.',
											{
												color: '#94a3b8',
												size: '18px',
												lh: 1.6,
												mb: '28px',
											}
										),
										buttons( [
											button( 'Book a call', {
												bg: '#ffffff',
												color: INK,
											} ),
											button( 'See pricing', {
												outline: true,
												color: '#ffffff',
											} ),
										] ),
									] ),
									image(
										img( '1553877522-43269d4ea984', 900 ),
										'Team in a bright office',
										{ ratio: '4/3', radius: '20px' }
									),
								],
								{
									tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
									gap: [ 48, 32, 28 ],
									valign: 'center',
								}
							),
						],
						{
							bg: INK,
							radius: 28,
							py: [ 56, 48, 32 ],
							px: [ 56, 40, 24 ],
						}
					),
				],
				{ bg: '#ffffff', py: [ 80, 64, 48 ] }
			),
		],
	},
	{
		id: 'cta-cover-image',
		title: 'Image Background CTA',
		category: 'cta',
		desc: 'Full-width photo background with dark overlay and centred call to action.',
		keywords: 'cta cover image background full width',
		blocks: () => [
			cover(
				img( '1497366216548-37526070297c', 1920 ),
				[
					heading( 'Ready to build something great together?', {
						align: 'center',
						color: '#ffffff',
						size: 'clamp(2rem, 4.6vw, 3.4rem)',
						weight: 700,
						lh: 1.12,
						mt: '0',
						mb: '16px',
					} ),
					para(
						'Tell us about your idea. We reply within one business day.',
						{
							align: 'center',
							color: '#e2e8f0',
							size: '19px',
							mb: '30px',
						}
					),
					buttons(
						[
							button( 'Start a project', {
								bg: '#ffffff',
								color: INK,
							} ),
						],
						{ justify: 'center' }
					),
				],
				{
					align: 'full',
					minHeight: 480,
					overlay: '#0b1220',
					dim: 70,
					contentSize: '760px',
				}
			),
		],
	},
	{
		id: 'cta-contact-strip',
		title: 'Contact Options CTA',
		category: 'cta',
		desc: 'Three contact cards (call, email, visit) with a headline — easy for visitors to reach you.',
		keywords: 'contact cta phone email address visit',
		blocks: () => {
			const c = ( title, line, link ) =>
				card( [
					heading( title, {
						level: 3,
						color: INK,
						size: '18px',
						weight: 700,
						mt: '0',
						mb: '6px',
					} ),
					para( line, { color: MUTED, size: '15px', mb: '12px' } ),
					para( link, {
						size: '16px',
						weight: 600,
						link: BLUE,
						mb: '0',
					} ),
				] );
			return [
				section(
					[
						intro(
							'Get in touch',
							'Let’s talk about your project',
							'Choose whatever works best for you.'
						),
						grid(
							[
								c(
									'Call us',
									'Mon–Fri, 9:00–18:00 CET',
									'<a href="tel:+493012345678">+49 30 1234 5678</a>'
								),
								c(
									'Email us',
									'We reply within 24 hours',
									'<a href="mailto:hello@example.com">hello@example.com</a>'
								),
								c(
									'Visit us',
									'Torstraße 1, 10119 Berlin',
									'<a href="#">Get directions →</a>'
								),
							],
							{ cols: [ 3, 3, 1 ], gap: [ 24, 16, 16 ] }
						),
					],
					{ bg: SOFT }
				),
			];
		},
	},

	// ================================================================= FOOTER
	{
		id: 'footer-simple-centered',
		title: 'Simple Centred Footer',
		category: 'footer',
		desc: 'Minimal centred footer with logo, links, social icons and copyright.',
		keywords: 'footer simple centered minimal',
		blocks: () => [
			section(
				[
					heading( 'Lumen', {
						align: 'center',
						color: INK,
						size: '26px',
						weight: 800,
						mt: '0',
						mb: '16px',
					} ),
					para(
						'<a href="#">Home</a>   ·   <a href="#">About</a>   ·   <a href="#">Services</a>   ·   <a href="#">Blog</a>   ·   <a href="#">Contact</a>',
						{
							align: 'center',
							color: MUTED,
							link: MUTED,
							size: '15px',
							mb: '20px',
						}
					),
					socials(
						[ 'facebook', 'instagram', 'linkedin', 'youtube' ],
						{ color: INK, bg: '#e2e8f0', justify: 'center' }
					),
					para(
						'© 2026 Lumen Studio · <a href="#">Privacy</a> · <a href="#">Imprint</a>',
						{
							align: 'center',
							color: '#94a3b8',
							link: '#94a3b8',
							size: '14px',
							mt: '24px',
							mb: '0',
						}
					),
				],
				{ bg: SOFT, py: [ 56, 48, 40 ] }
			),
		],
	},
	{
		id: 'footer-big-cta',
		title: 'Footer with Big CTA',
		category: 'footer',
		desc: 'Gradient footer that opens with a large call to action, then links and copyright.',
		keywords: 'footer cta big gradient links',
		blocks: () => [
			section(
				[
					grid(
						[
							heading( 'Have a project in mind? Let’s talk.', {
								color: '#ffffff',
								size: 'clamp(2rem, 4.6vw, 3.4rem)',
								weight: 700,
								lh: 1.1,
								mt: '0',
								mb: '0',
							} ),
							buttons( [
								button( 'hello@studio.example →', {
									bg: '#ffffff',
									color: INK,
								} ),
							] ),
						],
						{
							tpl: [ '1.4fr auto', '1fr', '1fr' ],
							gap: [ 40, 24, 24 ],
							valign: 'center',
							mb: 64,
						}
					),
					grid(
						[
							footerCol(
								'Studio',
								[ 'About', 'Work', 'Careers' ],
								'#cbd5e1'
							),
							footerCol(
								'Services',
								[ 'Branding', 'Websites', 'Marketing' ],
								'#cbd5e1'
							),
							footerCol(
								'Follow',
								[ 'Instagram', 'LinkedIn', 'Dribbble' ],
								'#cbd5e1'
							),
							footerCol(
								'Office',
								[ 'Torstraße 1', '10119 Berlin', 'Germany' ],
								'#cbd5e1'
							),
						],
						{ cols: [ 4, 4, 2 ], gap: [ 32, 24, 24 ] }
					),
					separator( 'rgba(255,255,255,0.15)' ),
					para( '© 2026 Studio North. All rights reserved.', {
						color: '#94a3b8',
						size: '14px',
						mb: '0',
					} ),
				],
				{
					gradient: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)',
					py: [ 96, 72, 56 ],
					pb: [ 36, 32, 28 ],
				}
			),
		],
	},
	{
		id: 'footer-light-newsletter',
		title: 'Light Footer with Newsletter',
		category: 'footer',
		desc: 'Light footer with brand, link columns and a newsletter call-out.',
		keywords: 'footer light newsletter subscribe links',
		blocks: () => [
			section(
				[
					grid(
						[
							group( [
								heading( 'Greenleaf', {
									level: 3,
									color: '#14532d',
									size: '26px',
									weight: 800,
									mt: '0',
									mb: '12px',
								} ),
								para(
									'Organic groceries delivered across Berlin, plastic-free.',
									{
										color: MUTED,
										size: '15px',
										lh: 1.7,
										mb: '0',
									}
								),
							] ),
							footerCol(
								'Shop',
								[
									'Vegetables',
									'Fruit',
									'Bakery',
									'Gift boxes',
								],
								MUTED,
								INK
							),
							footerCol(
								'Help',
								[ 'Delivery', 'Returns', 'FAQ', 'Contact' ],
								MUTED,
								INK
							),
							card(
								[
									heading( 'Get 10% off your first order', {
										level: 4,
										color: INK,
										size: '17px',
										weight: 700,
										mt: '0',
										mb: '8px',
									} ),
									para(
										'Join 8,000+ subscribers for seasonal recipes and offers.',
										{
											color: MUTED,
											size: '14px',
											lh: 1.6,
											mb: '16px',
										}
									),
									buttons( [
										button( 'Subscribe', {
											bg: '#16a34a',
											color: '#ffffff',
											pad: [ '10px', '22px' ],
										} ),
									] ),
								],
								{ bg: '#f0fdf4', bc: '#bbf7d0' }
							),
						],
						{
							tpl: [ '1.3fr 1fr 1fr 1.5fr', '1fr 1fr', '1fr' ],
							gap: [ 40, 28, 28 ],
						}
					),
					separator( '#e2e8f0' ),
					para(
						'© 2026 Greenleaf GmbH · <a href="#">Privacy</a> · <a href="#">Terms</a>',
						{
							color: '#94a3b8',
							link: '#94a3b8',
							size: '14px',
							mb: '0',
						}
					),
				],
				{ bg: '#ffffff', py: [ 72, 56, 48 ], pb: [ 32, 28, 28 ] }
			),
		],
	},
];
