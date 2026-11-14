/**
 * Zentro Kit – full-site page templates for popular niches: dental clinic,
 * water-sports, aquarium, lead-gen SaaS, digital agency, charity and a dark
 * creative studio. Brands, copy and colours are fictional demo content.
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
	grid,
	section,
	intro,
} from './dsl';
import { tint, pill, logoStrip } from './patterns-showcase';
import { header, footerCol } from './templates-extra';

// ---------------------------------------------------------------------------
// Shared helpers (all take a theme object `t`)
// ---------------------------------------------------------------------------
export const H = ( text, t, o = {} ) =>
	heading( text, {
		level: o.level || 2,
		align: o.align,
		color: o.color || t.ink,
		size: o.size || 'clamp(1.9rem, 3.6vw, 2.75rem)',
		weight: o.weight || t.hw || 700,
		lh: o.lh || 1.15,
		ls: o.ls || t.hls || '-0.02em',
		upper: o.upper !== undefined ? o.upper : t.upper,
		mt: '0',
		mb: o.mb || '16px',
	} );

export const P = ( text, t, o = {} ) =>
	para( text, {
		bg: o.bg,
		pad: o.pad,
		radius: o.radius,
		align: o.align,
		color: o.color || t.muted,
		link: o.link,
		size: o.size || '16px',
		lh: o.lh || 1.7,
		weight: o.weight,
		upper: o.upper,
		ls: o.ls,
		mt: o.mt,
		mb: o.mb || '0',
		className: o.className,
	} );

export const I = ( t, eyebrow, title, text, o = {} ) =>
	intro( eyebrow, title, text, {
		accent: t.accent,
		color: t.ink,
		muted: t.muted,
		...o,
	} );

export const btn = ( text, t, o = {} ) =>
	button( text, { bg: t.accent, color: t.onAccent || '#ffffff', ...o } );

export const obtn = ( text, color, o = {} ) =>
	button( text, { outline: true, color, ...o } );

export const card = ( children, t, o = {} ) =>
	group( children, {
		bg: o.bg || t.card || '#ffffff',
		pad: o.pad || '28px',
		radius: o.radius || t.radius || '18px',
		bw: o.bw === false ? undefined : '1px',
		bc: o.bc || t.line || '#e5e7eb',
		shadow: o.shadow,
		className: o.className,
	} );

export const person = ( photo, name, role, t, o = {} ) =>
	group(
		[
			image( img( photo, 160 ), name, {
				ratio: '1/1',
				radius: '999px',
			} ),
			P( `<strong>${ name }</strong><br>${ role }`, t, {
				size: '14px',
				lh: 1.5,
				color: o.color,
			} ),
		],
		{
			row: true,
			nowrap: true,
			gap: '12px',
			className: 'gk-kit-avatar-row',
		}
	);

export const checks = ( items, t, o = {} ) =>
	P(
		items
			.map( ( i ) => `${ tint( o.mark || '✓', t.accent ) }  ${ i }` )
			.join( '<br>' ),
		t,
		{ size: o.size || '15px', lh: 2.1, color: o.color, mb: o.mb }
	);

export const iconTile = ( icon, bg ) =>
	group( [ para( icon, { size: '22px', mb: '0', lh: 1 } ) ], {
		bg,
		radius: '14px',
		className: 'gk-kit-icon-lg',
	} );

export const stars = ( color = '#f59e0b' ) =>
	para( '★★★★★', { color, size: '16px', ls: '0.1em', mb: '14px' } );

export const footer = ( brand, text, cols, t, o = {} ) =>
	section(
		[
			grid(
				[
					group( [
						H( brand, t, {
							level: 3,
							size: '24px',
							color: t.fInk || t.ink,
							mb: '14px',
						} ),
						P( text, t, {
							color: t.fMuted || t.muted,
							size: '15px',
						} ),
						...( o.socials
							? [
									socials( o.socials, {
										color: t.fInk || t.ink,
										bg: 'rgba(127,127,127,0.18)',
										mt: '20px',
									} ),
							  ]
							: [] ),
					] ),
					...cols.map( ( [ title, links ] ) =>
						footerCol( title, links, {
							ink: t.fInk || t.ink,
							muted: t.fMuted || t.muted,
						} )
					),
				],
				{
					tpl: [
						`2fr${ ' 1fr'.repeat( cols.length ) }`,
						'1fr 1fr',
						'1fr 1fr',
					],
					gap: [ 40, 32, 28 ],
				}
			),
			P( o.copy || `© 2026 ${ brand }. All rights reserved.`, t, {
				color: t.fMuted || t.muted,
				size: '14px',
				mt: '48px',
				className: 'gk-kit-meta gk-kit-meta--pad',
			} ),
		],
		{ bg: t.fBg || t.bg, py: [ 72, 64, 48 ], pb: [ 32, 28, 24 ] }
	);

// Header placed inside a cover image (transparent nav).
const coverNav = ( brand, links, cta, t ) =>
	grid(
		[
			H( brand, t, {
				level: 3,
				size: '24px',
				color: '#ffffff',
				mb: '0',
				upper: false,
			} ),
			P(
				links
					.map( ( l ) => `<a href="#">${ l }</a>` )
					.join( '&nbsp;&nbsp;&nbsp;&nbsp; ' ),
				t,
				{
					align: 'center',
					color: '#ffffff',
					link: '#ffffff',
					size: '15px',
					weight: 500,
					className: 'gk-kit-nav',
				}
			),
			buttons( [ cta ], { justify: 'right' } ),
		],
		{
			tpl: [ 'auto 1fr auto', 'auto 1fr auto', '1fr auto' ],
			gap: [ 24, 16, 12 ],
			valign: 'center',
			className: 'gk-kit-cover-inner',
			mb: [ 72, 56, 40 ],
		}
	);

// ===========================================================================
// 1. Dental clinic – SmileCraft (rose)
// ===========================================================================
const DN = {
	ink: '#1f2937',
	muted: '#6b7280',
	accent: '#db2777',
	soft: '#fdf2f8',
	line: '#fce7f3',
	card: '#ffffff',
	hw: 700,
};

const dentalService = ( photo, title, text ) =>
	group(
		[
			image( img( photo, 400 ), title, {
				ratio: '1/1',
				radius: '999px',
				className: 'gk-kit-round-md',
			} ),
			H( title, DN, {
				level: 3,
				size: '18px',
				align: 'center',
				mb: '8px',
			} ),
			P( text, DN, { align: 'center', size: '15px' } ),
		],
		{ pad: '8px' }
	);

const dentist = ( photo, name, role ) =>
	card(
		[
			image( img( photo, 400 ), name, {
				ratio: '1/1',
				radius: '999px',
				className: 'gk-kit-round-md',
			} ),
			H( name, DN, {
				level: 3,
				size: '18px',
				align: 'center',
				mb: '4px',
			} ),
			P( role, DN, { align: 'center', size: '14px', mb: '16px' } ),
			buttons(
				[
					btn( 'Book now', DN, {
						pad: [ '10px', '22px' ],
						size: '14px',
					} ),
				],
				{ justify: 'center' }
			),
		],
		DN,
		{ pad: '28px 20px' }
	);

const dental = () => [
	header(
		'SmileCraft',
		[ 'Home', 'About', 'Services', 'Team', 'Contact' ],
		[ btn( 'Book now', DN, { pad: [ '10px', '20px' ], size: '14px' } ) ],
		{ ink: DN.ink, muted: DN.muted, bg: '#ffffff' }
	),
	section(
		[
			grid(
				[
					group( [
						pill( 'Family &amp; cosmetic dentistry', {
							align: 'left',
							dot: DN.accent,
							color: DN.ink,
							bg: '#ffffff',
						} ),
						H( 'Keep your smile healthy &amp; bright', DN, {
							level: 1,
							size: 'clamp(2.5rem, 5.2vw, 4rem)',
							lh: 1.08,
							mb: '20px',
						} ),
						P(
							'Gentle, modern dental care for the whole family – from first check-ups to implants and whitening, all under one roof.',
							DN,
							{ size: '18px' }
						),
						buttons(
							[
								btn( 'Book an appointment', DN ),
								obtn( 'Call (555) 014-2290', DN.ink ),
							],
							{ mt: '32px', gap: '12px' }
						),
					] ),
					image(
						img( '1559839734-2b71ea197ec2', 1000 ),
						'Smiling dentist at SmileCraft',
						{ ratio: '4/5', radius: '28px' }
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
			gradient: 'linear-gradient(135deg,#fdf2f8 0%,#ffffff 70%)',
			py: [ 80, 64, 48 ],
		}
	),
	section(
		[
			I(
				DN,
				'What we do',
				'Dental care for families in our community',
				'Everything your smile needs, explained clearly and done comfortably.'
			),
			grid(
				[
					dentalService(
						'1606811971618-4486d14f3f99',
						'General dentistry',
						'Check-ups, cleanings and fillings to keep teeth healthy.'
					),
					dentalService(
						'1609840114035-3c981b782dfe',
						'Clear aligners',
						'Discreet orthodontics for straighter smiles at any age.'
					),
					dentalService(
						'1598256989800-fe5f95da9787',
						'Dental implants',
						'Natural-looking, long-lasting tooth replacement.'
					),
					dentalService(
						'1588776814546-1ffcf47267a5',
						'Digital X-ray',
						'Low-radiation imaging for precise, fast diagnosis.'
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 24, 24, 20 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						I(
							DN,
							'Our practice',
							'Top quality care, without the anxiety',
							'Calm treatment rooms, the latest technology and a team that takes time to listen.',
							{ align: 'left', mb: '32px' }
						),
						group(
							[
								iconTile( '🦷', '#ffffff' ),
								group( [
									H( 'Highly experienced team', DN, {
										level: 3,
										size: '18px',
										mb: '4px',
									} ),
									P(
										'Our dentists bring 15+ years of experience in general and cosmetic care.',
										DN,
										{ size: '15px' }
									),
								] ),
							],
							{
								row: true,
								nowrap: true,
								valign: 'top',
								gap: '16px',
								mb: '20px',
							}
						),
						group(
							[
								iconTile( '🛡️', '#ffffff' ),
								group( [
									H( 'Strict hygiene standards', DN, {
										level: 3,
										size: '18px',
										mb: '4px',
									} ),
									P(
										'Hospital-grade sterilisation and single-use instruments for every patient.',
										DN,
										{ size: '15px' }
									),
								] ),
							],
							{
								row: true,
								nowrap: true,
								valign: 'top',
								gap: '16px',
							}
						),
					] ),
					group( [
						image(
							img( '1629909613654-28e377c37b09', 1000 ),
							'Modern treatment room',
							{ ratio: '1/1', radius: '28px 28px 200px 200px' }
						),
						group(
							[
								para( '📞', { size: '20px', mb: '0' } ),
								P(
									'<strong>24/7 dental emergency</strong><br>(555) 014-2290',
									DN,
									{ color: '#ffffff', size: '15px', lh: 1.5 }
								),
							],
							{
								row: true,
								nowrap: true,
								gap: '12px',
								bg: DN.accent,
								pad: [ '16px', '22px' ],
								radius: '999px',
								className: 'gk-kit-float-badge',
							}
						),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 48, 40 ],
					valign: 'center',
				}
			),
		],
		{ bg: DN.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I(
				DN,
				'Our team',
				'Meet your dental professionals',
				'Friendly specialists who explain every step before they start.'
			),
			grid(
				[
					dentist(
						'1594824476967-48c8b964273f',
						'Dr. Lena Ortiz',
						'General dentist'
					),
					dentist(
						'1622253692010-333f2da6031d',
						'Dr. Ravi Patel',
						'Implant specialist'
					),
					dentist(
						'1559839734-2b71ea197ec2',
						'Dr. Hannah Cole',
						'Orthodontist'
					),
					dentist(
						'1537368910025-700350fe46c7',
						'Tom Becker',
						'Dental hygienist'
					),
				],
				{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					image(
						img( '1631217868264-e5b90bb7e133', 1000 ),
						'Dentist talking with a patient',
						{ ratio: '4/3', radius: '24px' }
					),
					group( [
						I(
							DN,
							'Treatments',
							'Everything for a healthy smile',
							'',
							{ align: 'left', mb: '20px' }
						),
						checks(
							[
								'Emergency dental service 24/7',
								'Implants and extractions',
								'Children’s dentistry',
								'Root canal treatment',
								'Whitening and veneers',
								'Online booking in 60 seconds',
							],
							DN
						),
						buttons( [ btn( 'See all treatments', DN ) ], {
							mt: '28px',
						} ),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: DN.soft, py: [ 96, 80, 56 ] }
	),
	logoStrip( {
		label: 'We accept all major insurance providers',
		bg: '#ffffff',
		color: '#9ca3af',
	} ),
	section(
		[
			grid(
				[
					group( [
						H( '12+', DN, {
							size: 'clamp(3rem, 6vw, 4.5rem)',
							color: DN.accent,
							weight: 300,
							mb: '4px',
						} ),
						H( 'Years of experience', DN, {
							level: 3,
							size: '20px',
							mb: '12px',
						} ),
						P(
							'Over 9,000 happy patients trust SmileCraft with their family’s dental health.',
							DN,
							{ size: '15px' }
						),
					] ),
					image(
						img( '1594824476967-48c8b964273f', 800 ),
						'Dentist smiling',
						{ ratio: '3/4', radius: '200px 200px 24px 24px' }
					),
					group( [
						H( 'Premium care at fair, transparent prices', DN, {
							level: 3,
							size: '22px',
							lh: 1.35,
						} ),
						P(
							'You get a clear treatment plan and cost estimate before we begin – no surprises. Flexible monthly payment plans are available.',
							DN,
							{ size: '15px' }
						),
						buttons( [ btn( 'Book now', DN ) ], { mt: '24px' } ),
					] ),
				],
				{
					cols: [ 3, 1, 1 ],
					gap: [ 48, 32, 28 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( DN, 'Our patients', 'What people say', '' ),
			grid(
				[
					[
						'1544005313-94ddf0286df2',
						'Sophie Martin',
						'The friendliest dental team I have ever visited. My kids actually look forward to check-ups now.',
					],
					[
						'1500648767791-00dcc994a43e',
						'Daniel Brooks',
						'My implant looks completely natural. Clear pricing and zero pain – highly recommended.',
					],
					[
						'1438761681033-6461ffad8d80',
						'Emma Larsen',
						'Booked online in a minute and was seen the same day for an emergency. Thank you!',
					],
				].map( ( [ photo, name, text ] ) =>
					card(
						[
							stars( '#fde68a' ),
							P( `“${ text }”`, DN, {
								color: '#ffffff',
								size: '16px',
								mb: '22px',
							} ),
							person( photo, name, 'Patient', DN, {
								color: '#fce7f3',
							} ),
						],
						DN,
						{ bg: DN.accent, bc: DN.accent }
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: DN.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					card(
						[
							H( 'Visit us', DN, { level: 3, size: '24px' } ),
							P(
								'<strong>Address</strong><br>24 Harbour Street, Springfield',
								DN,
								{ mb: '16px' }
							),
							P(
								'<strong>Opening hours</strong><br>Mon – Fri 8:00 – 19:00<br>Sat 9:00 – 14:00',
								DN,
								{ mb: '16px' }
							),
							P(
								'<strong>Email</strong><br><a href="mailto:hello@example.com">hello@example.com</a>',
								DN,
								{ link: DN.accent }
							),
						],
						DN,
						{
							pad: '36px',
							shadow: '0 20px 50px -20px rgba(219,39,119,0.25)',
						}
					),
					group( [
						I(
							DN,
							'Contact us',
							'Find the right treatment for every patient',
							'Not sure what you need? Call us or book a free 15-minute consultation.',
							{ align: 'left', mb: '24px' }
						),
						H( '(555) 014-2290', DN, {
							level: 3,
							size: '28px',
							color: DN.accent,
						} ),
						buttons( [ btn( 'Book online', DN ) ], { mt: '12px' } ),
					] ),
				],
				{
					tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	footer(
		'SmileCraft',
		'Modern family and cosmetic dentistry in Springfield since 2012.',
		[
			[
				'Services',
				[ 'Check-ups', 'Implants', 'Aligners', 'Whitening' ],
			],
			[ 'Clinic', [ 'About', 'Team', 'Prices', 'Contact' ] ],
			[ 'Info', [ 'Insurance', 'FAQ', 'Privacy', 'Imprint' ] ],
		],
		{ ...DN, fBg: '#500724', fInk: '#ffffff', fMuted: '#fbcfe8' },
		{ socials: [ 'facebook', 'instagram', 'x' ] }
	),
];

// ===========================================================================
// 2. Water sports – Coral Bay Adventures (orange / navy)
// ===========================================================================
const WS = {
	ink: '#0b1f3a',
	muted: '#5b6b80',
	accent: '#f97316',
	sand: '#fff7ed',
	line: '#e2e8f0',
	hw: 900,
	upper: true,
	hls: '-0.01em',
};

const activity = ( photo, title, text, o = {} ) =>
	group(
		[
			image( img( photo, 900 ), title, {
				ratio: o.ratio || '4/3',
				radius: '4px',
			} ),
			H( title, WS, {
				level: 3,
				size: '24px',
				upper: false,
				weight: 800,
				mb: '8px',
			} ),
			P( text, WS, { size: '15px', mb: '10px' } ),
			P( '<a href="#">Book this activity →</a>', WS, {
				color: WS.accent,
				link: WS.accent,
				size: '14px',
				weight: 700,
			} ),
		],
		{ gap: '14px', className: o.className }
	);

const watersports = () => [
	cover(
		img( '1530870110042-98b2cb110834', 1920 ),
		[
			coverNav(
				'≋ CORAL BAY',
				[ 'Home', 'Activities', 'About', 'Reviews', 'Contact' ],
				obtn( 'Reservation', '#ffffff', {
					pad: [ '10px', '20px' ],
					size: '14px',
					radius: '4px',
				} ),
				WS
			),
			H( 'Ride the<br>Coral Bay', WS, {
				level: 1,
				color: '#ffffff',
				size: 'clamp(3.4rem, 11vw, 9rem)',
				lh: 0.9,
				align: 'center',
				mb: '0',
			} ),
			P(
				'Surf lessons, diving trips and sunset cruises on the clearest water of the coast.',
				WS,
				{
					color: '#e0f2fe',
					size: '18px',
					align: 'center',
					className: 'gk-kit-intro-center',
					mt: '20px',
				}
			),
		],
		{
			align: 'full',
			minHeight: 720,
			dim: 35,
			overlay: '#0b1f3a',
			position: 'top center',
			pad: [ '28px', '24px', '96px' ],
		}
	),
	section(
		[
			grid(
				[
					group( [
						H( 'Explore Coral Bay with us!', WS, {
							size: 'clamp(2.4rem, 5vw, 3.8rem)',
							lh: 1,
							mb: '20px',
						} ),
						P(
							'<strong>Small groups, certified instructors and all equipment included.</strong>',
							WS,
							{ color: WS.ink, mb: '14px' }
						),
						P(
							'Whether it is your first time on a board or your hundredth dive, our local crew finds the perfect spot for your level and the day’s conditions.',
							WS,
							{ mb: '24px' }
						),
						buttons(
							[
								obtn( 'View all activities', WS.accent, {
									radius: '4px',
								} ),
							],
							{ mb: '64px' }
						),
						activity(
							'1544551763-46a013bb70d5',
							'Scuba diving',
							'Guided reef dives for beginners and certified divers – turtles included most days.'
						),
					] ),
					group( [
						activity(
							'1502680390469-be75c86b636f',
							'Surfing',
							'Two-hour lessons on gentle waves, or board rental for experienced surfers.',
							{ ratio: '4/5' }
						),
						group(
							[
								activity(
									'1507525428034-b723cf961d3e',
									'Sunset cruise',
									'Catamaran trip along the coast with drinks and a stop for snorkelling.'
								),
							],
							{ mt: '56px' }
						),
					] ),
				],
				{
					cols: [ 2, 2, 1 ],
					gap: [ 80, 40, 56 ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 112, 88, 64 ] }
	),
	section(
		[
			grid(
				[
					image(
						img( '1516370873344-fb7c61054fa9', 1000 ),
						'Friends running to the sea with surfboards',
						{ ratio: '4/5', radius: '4px' }
					),
					group( [
						para( '', {
							className: 'gk-kit-dash',
							bg: WS.accent,
							mb: '24px',
						} ),
						H( 'Get the most of Coral Bay', WS, {
							size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
							lh: 1,
							mb: '20px',
						} ),
						P(
							'Combine activities into a day you will never forget. Our team plans the route, the gear and the best lunch spot on the beach.',
							WS,
							{ mb: '20px' }
						),
						checks(
							[
								'Free hotel pick-up in the bay area',
								'Photos and videos of your session',
								'Wetsuits, boards and snorkel gear included',
								'Insurance and safety briefing',
							],
							WS,
							{ mark: '▸', color: WS.ink }
						),
						buttons(
							[
								obtn( 'Read more', WS.accent, {
									radius: '4px',
								} ),
							],
							{ mt: '28px' }
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
		{ bg: WS.sand, py: [ 112, 88, 64 ] }
	),
	section(
		[
			H( 'Why choose us', WS, {
				align: 'center',
				size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
				mb: '56px',
			} ),
			grid(
				[
					[
						'Professional',
						'ISA-certified instructors with 10+ years on the water.',
					],
					[
						'Friendly',
						'Small groups of max. six, so everyone gets attention.',
					],
					[
						'Trusted',
						'Over 4,800 five-star reviews from guests worldwide.',
					],
					[
						'Affordable',
						'Fair prices, family discounts and free cancellation.',
					],
				].map( ( [ title, text ], i ) =>
					group(
						[
							P( `0${ i + 1 }`, WS, {
								color: WS.accent,
								size: '13px',
								weight: 700,
								mb: '16px',
							} ),
							H( title, WS, {
								level: 3,
								size: '20px',
								upper: false,
								weight: 800,
								mb: '8px',
							} ),
							P( text, WS, { size: '15px' } ),
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
		{ bg: '#ffffff', py: [ 112, 88, 64 ] }
	),
	section(
		[
			cover(
				img( '1519046904884-53103b34b206', 1600 ),
				[
					H( 'Couple sunset package', WS, {
						color: '#ffffff',
						size: 'clamp(1.8rem, 3.6vw, 2.6rem)',
						upper: false,
						weight: 800,
						mb: '10px',
					} ),
					P(
						'Private catamaran, champagne and a two-course beach dinner – from $189 per couple.',
						WS,
						{ color: '#ffffff', mb: '24px' }
					),
					buttons( [
						btn( 'Book your place', WS, { radius: '4px' } ),
					] ),
				],
				{
					minHeight: 460,
					dim: 40,
					overlay: '#0b1f3a',
					position: 'bottom left',
					radius: '4px',
					pad: [ '48px', '40px' ],
				}
			),
		],
		{ bg: '#ffffff', py: [ 0, 0, 0 ], pb: [ 112, 88, 64 ] }
	),
	section(
		[
			grid(
				[
					H( 'What people say', WS, {
						size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
						mb: '0',
					} ),
					buttons(
						[ obtn( 'All reviews', WS.accent, { radius: '4px' } ) ],
						{ justify: 'right' }
					),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 24, 24, 20 ],
					valign: 'center',
					mb: 48,
				}
			),
			grid(
				[
					[
						'1500648767791-00dcc994a43e',
						'Jonah Reyes',
						'Stood up on my first wave after 20 minutes. The instructors are patient and so much fun.',
					],
					[
						'1438761681033-6461ffad8d80',
						'Mia Hoffmann',
						'The reef dive was the highlight of our holiday. Perfectly organised from pick-up to drop-off.',
					],
					[
						'1560250097-0b93528c311a',
						'Chris Walker',
						'Booked the sunset package for our anniversary – unforgettable. Worth every dollar.',
					],
				].map( ( [ photo, name, text ] ) =>
					card(
						[
							P( `“${ text }”`, WS, {
								color: WS.ink,
								weight: 600,
								mb: '24px',
							} ),
							person( photo, name, 'Verified guest', WS ),
						],
						WS,
						{
							radius: '6px',
							bw: false,
							shadow: '0 10px 30px -12px rgba(11,31,58,0.15)',
						}
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: '#f1f5f9', py: [ 112, 88, 64 ] }
	),
	section(
		[
			grid(
				[
					group( [
						P( 'Subscribe', WS, {
							color: WS.ink,
							size: '13px',
							weight: 800,
							upper: true,
							ls: '0.12em',
							mb: '12px',
						} ),
						H(
							'Get the latest news and special offers in your inbox',
							WS,
							{
								size: 'clamp(1.6rem, 3vw, 2.2rem)',
								upper: false,
								weight: 800,
								mb: '0',
							}
						),
					] ),
					group( [
						buttons( [
							btn( 'Join the newsletter', WS, { radius: '4px' } ),
						] ),
						P( 'One email per month. Unsubscribe anytime.', WS, {
							size: '13px',
							mt: '12px',
						} ),
					] ),
				],
				{
					tpl: [ '1.3fr 1fr', '1fr', '1fr' ],
					gap: [ 48, 28, 24 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 80, 64, 48 ] }
	),
	footer(
		'≋ CORAL BAY',
		'Pier 9, Slip 24 · Coral Bay Marina<br>+1 555 0148 790 · hello@example.com',
		[
			[ 'About', [ 'Our story', 'Certification', 'Reviews', 'Contact' ] ],
			[
				'Activities',
				[ 'Surfing', 'Scuba diving', 'Sunset cruise', 'Snorkelling' ],
			],
			[ 'Follow', [ 'Instagram', 'Facebook', 'YouTube', 'TikTok' ] ],
		],
		{ ...WS, fBg: WS.ink, fInk: '#ffffff', fMuted: '#94a3b8', upper: false }
	),
];

// ===========================================================================
// 3. Aquarium – Lumina Ocean World (deep teal / aqua)
// ===========================================================================
const AQ = {
	bg: '#042f2e',
	card: '#0b3d3b',
	ink: '#f0fdfa',
	muted: '#99c9c4',
	accent: '#5eead4',
	onAccent: '#042f2e',
	line: 'rgba(240,253,250,0.18)',
	hw: 300,
	upper: true,
	hls: '0.06em',
};

const aqTitle = ( text, o = {} ) =>
	H( text, AQ, {
		size: o.size || 'clamp(2.8rem, 8vw, 6rem)',
		lh: 0.95,
		align: o.align,
		mb: o.mb || '20px',
	} );

const aqBtn = ( text ) =>
	obtn( text, AQ.ink, {
		radius: '0',
		size: '13px',
		pad: [ '10px', '22px' ],
		bc: 'rgba(240,253,250,0.5)',
	} );

const splitCard = ( photo, alt, title, text, cta, o = {} ) =>
	grid(
		[
			image( img( photo, 1000 ), alt, { ratio: '4/3' } ),
			group(
				[
					H( title, AQ, {
						size: 'clamp(1.4rem, 2.4vw, 1.9rem)',
						weight: 400,
						align: 'center',
					} ),
					P( text, AQ, {
						align: 'center',
						size: '15px',
						mb: '24px',
					} ),
					buttons( [ aqBtn( cta ) ], { justify: 'center' } ),
				],
				{
					bg: '#022322',
					pad: [ '48px', '32px' ],
					className: 'gk-kit-center-v',
				}
			),
		],
		{
			cols: [ 2, 2, 1 ],
			gap: [ 0, 0, 0 ],
			className: o.flip
				? 'gk-kit-shadow gk-kit-flip-mobile'
				: 'gk-kit-shadow',
		}
	);

const aquarium = () => [
	cover(
		img( '1607153333879-c174d265f1d2', 1920 ),
		[
			coverNav(
				'Lumina',
				[ 'Home', 'Animals', 'Tickets', 'Gallery', 'Contact' ],
				btn( 'Buy tickets', AQ, {
					radius: '0',
					pad: [ '10px', '20px' ],
					size: '14px',
				} ),
				AQ
			),
			grid(
				[
					group( [
						P( 'They are finally here – come see the', AQ, {
							color: AQ.ink,
							size: '14px',
							upper: true,
							ls: '0.12em',
							mb: '8px',
						} ),
						aqTitle( 'Dolphins', {
							size: 'clamp(3.6rem, 12vw, 9rem)',
							mb: '0',
						} ),
					] ),
					P( '<strong>Open daily</strong><br>9 AM – 9 PM', AQ, {
						color: AQ.ink,
						size: '18px',
						lh: 1.4,
					} ),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 24, 24, 16 ],
					valign: 'end',
					mt: 160,
					className: 'gk-kit-cover-inner',
				}
			),
		],
		{
			align: 'full',
			minHeight: 680,
			dim: 45,
			overlay: '#042f2e',
			position: 'top center',
			pad: [ '28px', '24px', '72px' ],
		}
	),
	section(
		[
			grid(
				[
					aqTitle( 'Daily<br>schedule', { mb: '0' } ),
					P( 'Today · all shows included in your ticket', AQ, {
						color: AQ.ink,
						size: '16px',
					} ),
				],
				{
					tpl: [ '1fr auto', '1fr auto', '1fr' ],
					gap: [ 24, 24, 12 ],
					valign: 'end',
					mb: 40,
				}
			),
			grid(
				[
					[ '10:00', 'Sea otter breakfast' ],
					[ '10:30', 'Reef diver talk' ],
					[ '11:00', 'Dolphin show' ],
					[ '12:00', 'Penguin parade' ],
					[ '12:30', 'Ray touch pool' ],
					[ '13:30', 'Jellyfish lab' ],
					[ '15:00', 'Dolphin show' ],
					[ '16:30', 'Shark feeding' ],
					[ '18:00', 'Ocean film' ],
					[ '19:30', 'Night tunnel tour' ],
				].map( ( [ time, show ] ) =>
					group(
						[
							H( time, AQ, {
								level: 3,
								size: '24px',
								weight: 400,
								ls: '0',
								mb: '6px',
							} ),
							P( show, AQ, { size: '14px', mb: '6px' } ),
							P( '<a href="#">Read more</a>', AQ, {
								color: AQ.accent,
								link: AQ.accent,
								size: '12px',
								upper: true,
								ls: '0.1em',
							} ),
						],
						{
							pad: [ '18px', '0', '0' ],
							className: 'gk-kit-topline',
						}
					)
				),
				{
					cols: [ 5, 3, 2 ],
					gap: [ 24, 24, 16 ],
					rowGap: [ 32, 28, 24 ],
				}
			),
		],
		{ bg: AQ.bg, py: [ 96, 80, 56 ] }
	),
	section(
		[
			splitCard(
				'1593508512255-86ab42a8e620',
				'Visitor exploring the ocean in virtual reality',
				'Book a virtual guided tour',
				'Dive to 4,000 metres with our VR experience – no wetsuit needed. 20 minutes, ages 8+.',
				'Learn more'
			),
		],
		{ bg: AQ.bg, py: [ 32, 24, 16 ] }
	),
	section(
		[
			aqTitle( 'Animals', { align: 'center', mb: '12px' } ),
			P(
				'More than 12,000 animals from 350 species live in our seven ocean zones.',
				AQ,
				{ align: 'center', mb: '24px' }
			),
			buttons( [ aqBtn( 'View all' ) ], {
				justify: 'center',
				mb: '48px',
			} ),
			grid(
				[
					[ '1545671913-b89ac1b4ac10', 'Octopus' ],
					[ '1544551763-77ef2d0cfc6c', 'Reef fish' ],
					[ '1560275619-4662e36fa65c', 'Sharks' ],
				].map( ( [ photo, name ] ) =>
					group(
						[
							image( img( photo, 700 ), name, { ratio: '4/5', mb: '18px' } ),
							H( name, AQ, {
								level: 3,
								size: '22px',
								weight: 400,
								align: 'center',
								mb: '0',
							} ),
						],
						{
							bg: AQ.card,
							pad: [ '0', '0', '22px' ],
							gap: '18px',
							className: 'gk-kit-shadow',
						}
					)
				),
				{ cols: [ 3, 3, 1 ], gap: [ 24, 16, 20 ] }
			),
		],
		{ bg: AQ.bg, py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						aqTitle( 'About', { mb: '12px' } ),
						H( 'Uncover a mysterious world', AQ, {
							level: 3,
							size: '20px',
							weight: 500,
							upper: false,
							ls: '0',
							mb: '12px',
						} ),
						P(
							'Lumina is a non-profit ocean centre. Every ticket supports coral restoration and the rescue of injured sea animals along our coast.',
							AQ,
							{ mb: '24px' }
						),
						buttons( [ aqBtn( 'Read more' ) ] ),
					] ),
					image(
						img( '1551244072-5d12893278ab', 1000 ),
						'Sunlight above a coral reef',
						{ ratio: '1/1' }
					),
				],
				{
					tpl: [ '1fr 1.2fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: AQ.bg, py: [ 96, 80, 56 ] }
	),
	section(
		[
			splitCard(
				'1583212292454-1fe6229603b7',
				'Colourful coral reef',
				'Check out our animal gallery',
				'Hundreds of photos from our reef, kelp forest and polar zones – updated every week.',
				'View gallery',
				{ flip: true }
			),
		],
		{ bg: AQ.bg, py: [ 32, 24, 16 ] }
	),
	section(
		[
			cover(
				img( '1559825481-12a05cc00344', 1600 ),
				[
					P( 'Now open', AQ, {
						color: AQ.ink,
						align: 'center',
						size: '16px',
						upper: true,
						ls: '0.2em',
						mb: '8px',
					} ),
					aqTitle( 'Ocean tunnel', { align: 'center', mb: '16px' } ),
					P(
						'Walk through 80 metres of glass tunnel surrounded by sharks, rays and sea turtles.',
						AQ,
						{ color: AQ.ink, align: 'center', mb: '28px' }
					),
					buttons( [ aqBtn( 'Learn more' ) ], { justify: 'center' } ),
				],
				{
					minHeight: 520,
					dim: 40,
					overlay: '#042f2e',
					pad: [ '64px', '24px' ],
				}
			),
		],
		{ bg: AQ.bg, py: [ 96, 80, 56 ] }
	),
	section(
		[
			H( 'Lumina', AQ, {
				level: 3,
				align: 'center',
				size: '28px',
				weight: 400,
				mb: '8px',
			} ),
			P( '© 2026 Lumina Ocean World · Harbour Road 1, Bayside', AQ, {
				align: 'center',
				size: '14px',
				mb: '20px',
			} ),
			socials( [ 'facebook', 'instagram', 'youtube' ], {
				justify: 'center',
				color: AQ.ink,
				bg: 'rgba(240,253,250,0.1)',
			} ),
		],
		{ bg: '#021f1e', py: [ 56, 48, 40 ] }
	),
];

// ===========================================================================
// 4. Lead-generation SaaS – LeadPulse (indigo / sky)
// ===========================================================================
const LG = {
	ink: '#111827',
	muted: '#6b7280',
	accent: '#4f46e5',
	sky: '#0ea5e9',
	soft: '#eef2ff',
	line: '#e5e7eb',
	grad: 'linear-gradient(135deg,#4338ca 0%,#6366f1 45%,#0ea5e9 100%)',
};

const lgFeature = ( title, text, o = {} ) =>
	card(
		[
			...( o.photo
				? [
						image( img( o.photo, 800 ), title, {
							ratio: '16/10',
							radius: '12px',
							mb: '20px',
						} ),
				  ]
				: [] ),
			...( o.big
				? [
						H( o.big, LG, {
							size: 'clamp(2.6rem, 5vw, 3.6rem)',
							color: o.dark ? '#ffffff' : LG.accent,
							mb: '8px',
						} ),
				  ]
				: [] ),
			H( title, LG, {
				level: 3,
				size: '19px',
				color: o.dark ? '#ffffff' : LG.ink,
				mb: '8px',
			} ),
			P( text, LG, {
				size: '15px',
				color: o.dark ? '#e0e7ff' : LG.muted,
			} ),
		],
		LG,
		o.dark
			? { bw: false, bg: '#4338ca', className: 'gk-kit-grad-card' }
			: {}
	);

const leadgen = () => [
	header(
		'LeadPulse',
		[ 'Product', 'Solutions', 'Pricing', 'Customers' ],
		[ btn( 'Get started', LG, { pad: [ '10px', '20px' ], size: '14px' } ) ],
		{ ink: LG.ink, muted: LG.muted, bg: '#ffffff' }
	),
	section(
		[
			group(
				[
					pill( 'New: AI lead scoring is live', {
						dot: LG.sky,
						color: LG.accent,
						bg: '#ffffff',
					} ),
					H(
						`Generate ${ tint(
							'3× more',
							LG.accent
						) } qualified leads in 30 days`,
						LG,
						{
							level: 1,
							align: 'center',
							size: 'clamp(2.4rem, 5.4vw, 4.2rem)',
							lh: 1.06,
							ls: '-0.035em',
							mb: '20px',
						}
					),
					P(
						'Join 15,000+ businesses using LeadPulse to capture, score and nurture leads automatically – set up in 5 minutes, no code required.',
						LG,
						{ align: 'center', size: '18px' }
					),
					buttons( [ btn( 'Start generating leads today', LG ) ], {
						justify: 'center',
						mt: '32px',
					} ),
					P( 'No credit card required · 14-day free trial', LG, {
						align: 'center',
						size: '13px',
						mt: '12px',
					} ),
				],
				{ mb: '56px', className: 'gk-kit-intro-center' }
			),
			group(
				[
					image(
						img( '1551288049-bebda4e38f71', 1600 ),
						'LeadPulse analytics dashboard',
						{ ratio: '16/8', radius: '14px' }
					),
				],
				{ className: 'gk-kit-frame' }
			),
		],
		{
			gradient:
				'linear-gradient(180deg,#e0e7ff 0%,#eef2ff 45%,#ffffff 100%)',
			py: [ 80, 64, 48 ],
		}
	),
	logoStrip( {
		label: 'Trusted by the world’s fastest-growing sales teams',
		bg: '#ffffff',
	} ),
	section(
		[
			I(
				LG,
				'',
				'Stuck in a lead generation loop that isn’t working?',
				'You are spending time, money and effort – but the results just aren’t adding up.'
			),
			grid(
				[
					card(
						[
							H( 'Sound familiar?', LG, {
								level: 3,
								size: '20px',
							} ),
							checks(
								[
									'Ad spend burnout with nothing to show',
									'Wasted hours chasing unqualified leads',
									'Data scattered across five tools',
									'Sales team frustrated with poor lead quality',
								],
								{ ...LG, accent: '#ef4444' },
								{ mark: '✕' }
							),
						],
						LG,
						{ bg: '#fef2f2', bc: '#fee2e2' }
					),
					card(
						[
							H( 'Imagine this was your new normal', LG, {
								level: 3,
								size: '20px',
							} ),
							checks(
								[
									'24/7 qualified leads without lifting a finger',
									'40% lower cost per lead',
									'Crystal-clear analytics in one dashboard',
									'Sales reps closing deals, not chasing them',
								],
								{ ...LG, accent: '#16a34a' }
							),
						],
						LG,
						{ bg: '#f0fdf4', bc: '#dcfce7' }
					),
				],
				{ cols: [ 2, 2, 1 ], gap: [ 24, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			I(
				LG,
				'The platform',
				'The complete lead generation system that actually works',
				''
			),
			grid(
				[
					image(
						img( '1600880292203-757bb62b4baf', 1000 ),
						'Sales team celebrating a closed deal',
						{ ratio: '4/3', radius: '20px' }
					),
					group( [
						H(
							'Everything you need to turn clicks into clients',
							LG,
							{
								size: 'clamp(1.6rem, 3vw, 2.2rem)',
							}
						),
						P(
							'Landing pages, forms, chat and email sequences that work together – and push every qualified lead straight into your CRM.',
							LG,
							{ mb: '20px' }
						),
						checks(
							[
								'Convert visitors with smart forms',
								'Score leads with AI in real time',
								'Sync to HubSpot, Salesforce &amp; Pipedrive',
							],
							LG
						),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
					mb: 80,
				}
			),
			grid(
				[
					group( [
						H( 'Turn traffic into revenue – automatically', LG, {
							size: 'clamp(1.6rem, 3vw, 2.2rem)',
						} ),
						P(
							'Automated follow-ups reach every lead within 60 seconds, so no opportunity goes cold while your team sleeps.',
							LG,
							{ mb: '20px' }
						),
						checks(
							[
								'Personalised email &amp; SMS sequences',
								'Meetings booked straight into calendars',
								'Revenue attribution for every channel',
							],
							LG
						),
					] ),
					image(
						img( '1517245386807-bb43f82c33c4', 1000 ),
						'Team reviewing lead reports on a laptop',
						{ ratio: '4/3', radius: '20px' }
					),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
					className: 'gk-kit-flip-mobile',
				}
			),
		],
		{ bg: LG.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I(
				LG,
				'Features',
				'Optimized for growth',
				'Powerful tools that scale with your pipeline.'
			),
			grid(
				[
					lgFeature(
						'Drag-and-drop page builder',
						'Launch high-converting landing pages in minutes – no developer needed.',
						{ photo: '1460925895917-afdab827c52f' }
					),
					lgFeature(
						'Dynamic lead scoring',
						'AI ranks every lead by intent, fit and engagement.',
						{ big: '+118%' }
					),
					lgFeature(
						'Conversion insights',
						'See exactly which channels and pages produce revenue.',
						{ big: '4.8×', dark: true }
					),
					lgFeature(
						'Multi-channel campaigns',
						'Email, SMS, ads and chat from a single workflow.',
						{ big: '3TB' }
					),
					lgFeature(
						'CRM sync &amp; enrichment',
						'Company data, socials and tech stack added automatically.',
						{ photo: '1504868584819-f8e8b4b6d7e3' }
					),
					lgFeature(
						'Uptime you can trust',
						'99.99% SLA, SOC 2 Type II and GDPR-ready.',
						{ big: '99.99%' }
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			group(
				[
					pill( 'Limited-time offer', {
						dot: '#fde68a',
						color: '#ffffff',
						bg: 'rgba(255,255,255,0.15)',
					} ),
					H( 'Start generating more leads today', LG, {
						align: 'center',
						color: '#ffffff',
						size: 'clamp(2rem, 4vw, 3rem)',
					} ),
					P(
						'Get 3 months of Pro for the price of one – offer ends soon.',
						LG,
						{ align: 'center', color: '#e0e7ff', mb: '32px' }
					),
				],
				{ className: 'gk-kit-intro-center' }
			),
			grid(
				[
					[ '07', 'Days' ],
					[ '12', 'Hours' ],
					[ '45', 'Minutes' ],
					[ '30', 'Seconds' ],
				].map( ( [ n, l ] ) =>
					group(
						[
							H( n, LG, {
								level: 3,
								align: 'center',
								color: '#ffffff',
								size: 'clamp(2.4rem, 5vw, 3.4rem)',
								mb: '0',
							} ),
							P( l, LG, {
								align: 'center',
								color: '#e0e7ff',
								size: '13px',
							} ),
						],
						{
							bg: 'rgba(255,255,255,0.12)',
							radius: '16px',
							pad: [ '20px', '12px' ],
						}
					)
				),
				{
					cols: [ 4, 4, 2 ],
					gap: [ 16, 12, 12 ],
					className: 'gk-kit-narrow',
				}
			),
			buttons(
				[
					button( 'Claim my offer', {
						bg: '#ffffff',
						color: LG.accent,
					} ),
				],
				{ justify: 'center', mt: '36px' }
			),
		],
		{ gradient: LG.grad, py: [ 88, 72, 56 ] }
	),
	section(
		[
			I( LG, '', 'Why choose LeadPulse?', '' ),
			grid(
				[
					[
						'⚡',
						'Launch in 5 minutes',
						'Ready-made funnels for 30+ industries.',
					],
					[
						'🤖',
						'Automation built in',
						'Workflows that nurture leads for you.',
					],
					[
						'🔌',
						'300+ integrations',
						'Works with the tools you already use.',
					],
					[
						'🔒',
						'Secure by default',
						'SOC 2, GDPR and SSO on every plan.',
					],
				].map( ( [ icon, title, text ] ) =>
					card(
						[
							iconTile( icon, LG.soft ),
							H( title, LG, {
								level: 3,
								size: '18px',
								mb: '6px',
							} ),
							P( text, LG, { size: '15px' } ),
						],
						LG
					)
				),
				{ cols: [ 4, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						H(
							'“The dashboard is clean, the automation is powerful, and setup was a breeze.”',
							LG,
							{ size: 'clamp(1.6rem, 3vw, 2.3rem)', lh: 1.25 }
						),
						person(
							'1580489944761-15a19d654956',
							'Laura Chen',
							'Head of Growth, Brightlane',
							LG
						),
					] ),
					image(
						img( '1573164713988-8665fc963095', 900 ),
						'Customer working with LeadPulse',
						{ ratio: '4/3', radius: '20px' }
					),
				],
				{
					tpl: [ '1.2fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
					mb: 48,
				}
			),
			grid(
				[
					[
						'1556157382-97eda2d62296',
						'Mark Ellis',
						'We doubled demo bookings in six weeks without increasing ad spend.',
					],
					[
						'1544005313-94ddf0286df2',
						'Priya Nair',
						'Lead scoring alone saves our reps ten hours every week.',
					],
					[
						'1507679799987-c73779587ccf',
						'James Porter',
						'The best onboarding we have had from any SaaS tool. Live in one afternoon.',
					],
				].map( ( [ photo, name, text ] ) =>
					card(
						[
							stars(),
							P( `“${ text }”`, LG, {
								color: LG.ink,
								size: '15px',
								mb: '20px',
							} ),
							person( photo, name, 'Customer', LG ),
						],
						LG
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: LG.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( LG, '', 'Frequently asked questions', '' ),
			group(
				[
					node( 'zentro-blocks/accordion-block', {
						panels: [
							{
								title: 'How quickly will I see results?',
								content:
									'Most customers see a lift in qualified leads within the first 30 days. Our onboarding team helps you launch your first funnel in week one.',
							},
							{
								title: 'Do I need technical skills?',
								content:
									'No. Everything is drag-and-drop, and our templates are ready to publish.',
							},
							{
								title: 'Will it work with my existing tools?',
								content:
									'Yes – LeadPulse connects to 300+ apps including HubSpot, Salesforce, Slack and Zapier.',
							},
							{
								title: 'Is my data secure?',
								content:
									'Your data is encrypted, hosted in the EU or US, and we are SOC 2 Type II certified.',
							},
						],
						activeColor: LG.accent,
						titleBgColor: '#f9fafb',
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
	section(
		[
			grid(
				[
					[ '24K', 'Leads captured per month' ],
					[ '3M', 'Additional revenue generated' ],
					[ '98%', 'Customer satisfaction' ],
				].map( ( [ n, l ] ) =>
					group( [
						H( n, LG, {
							level: 3,
							align: 'center',
							size: 'clamp(2.6rem, 5vw, 3.6rem)',
							color: LG.accent,
							mb: '4px',
						} ),
						P( l, LG, { align: 'center', size: '15px' } ),
					] )
				),
				{ cols: [ 3, 3, 1 ], gap: [ 24, 16, 28 ] }
			),
		],
		{ bg: '#ffffff', py: [ 24, 24, 16 ], pb: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						H(
							'Join 1M+ teams using the smartest lead gen tool',
							LG,
							{
								color: '#ffffff',
								size: 'clamp(1.9rem, 3.6vw, 2.75rem)',
							}
						),
						P(
							'Book a free 30-minute strategy call and get a custom growth plan for your business.',
							LG,
							{ color: '#e0e7ff' }
						),
					] ),
					card(
						[
							H( 'Book your free strategy call', LG, {
								level: 3,
								size: '20px',
							} ),
							checks(
								[
									'Personal funnel audit',
									'Benchmarks for your industry',
									'A 90-day action plan',
								],
								LG,
								{ mb: '20px' }
							),
							buttons( [ btn( 'Choose a time', LG ) ] ),
						],
						LG,
						{ pad: '32px', bw: false }
					),
				],
				{
					tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ gradient: LG.grad, py: [ 96, 80, 56 ] }
	),
	footer(
		'LeadPulse',
		'The lead generation platform for modern sales teams.',
		[
			[
				'Product',
				[ 'Features', 'Pricing', 'Integrations', 'Changelog' ],
			],
			[ 'Company', [ 'About', 'Careers', 'Blog', 'Contact' ] ],
			[ 'Legal', [ 'Privacy', 'Terms', 'Security', 'DPA' ] ],
		],
		{ ...LG, fBg: '#f9fafb' }
	),
];

// ===========================================================================
// 5. SaaS & digital agency – Nexora (emerald)
// ===========================================================================
const NX = {
	ink: '#0f172a',
	muted: '#64748b',
	accent: '#059669',
	soft: '#ecfdf5',
	line: '#e2e8f0',
};

const nxStatRow = ( photo, alt, title, text, s1, s2, flip ) => {
	const txt = group( [
		H( title, NX, { size: 'clamp(1.6rem, 3vw, 2.2rem)' } ),
		P( text, NX, { mb: '28px' } ),
		grid(
			[ s1, s2 ].map( ( [ n, l ] ) =>
				group( [
					H( n, NX, {
						level: 3,
						size: 'clamp(2rem, 4vw, 2.6rem)',
						color: NX.accent,
						mb: '4px',
					} ),
					P( l, NX, { size: '14px' } ),
				] )
			),
			{ cols: [ 2, 2, 2 ], gap: [ 24, 24, 16 ] }
		),
	] );
	const pic = image( img( photo, 1000 ), alt, {
		ratio: '4/3',
		radius: '20px',
	} );
	return grid( flip ? [ txt, pic ] : [ pic, txt ], {
		tpl: [ '1fr 1fr', '1fr', '1fr' ],
		gap: [ 64, 40, 32 ],
		valign: 'center',
		className: flip ? 'gk-kit-flip-mobile' : undefined,
	} );
};

const nxPrice = ( planTitle, price, sub, popular ) =>
	node( 'zentro-blocks/pricing-card-block', {
		planTitle,
		price,
		currencySymbol: '$',
		billingPeriod: '/month',
		features: [
			sub,
			'Free 14-day trial',
			'Cancel anytime',
			'Priority support',
		],
		isPopular: popular,
		badgeText: 'Popular',
		buttonLabel: 'Purchase now',
		primaryColor: NX.accent,
		cardBgColor: '#ffffff',
		textColor: NX.ink,
		borderRadius: 20,
	} );

const agency = () => [
	header(
		'Nexora',
		[ 'Home', 'Features', 'Pricing', 'Blog', 'Contact' ],
		[ btn( 'Get started', NX, { pad: [ '10px', '20px' ], size: '14px' } ) ],
		{ ink: NX.ink, muted: NX.muted, bg: '#ffffff' }
	),
	section(
		[
			grid(
				[
					group( [
						H( 'SaaS &amp; digital agency services.', NX, {
							level: 1,
							size: 'clamp(2.5rem, 5.4vw, 4.2rem)',
							weight: 800,
							lh: 1.05,
							ls: '-0.035em',
							mb: '20px',
						} ),
						P(
							'We design, build and grow software products and websites for ambitious companies – strategy, UX, development and marketing in one team.',
							NX,
							{ size: '18px', mb: '20px' }
						),
						checks( [ 'Free 14-day trial', 'Cancel anytime' ], NX ),
						buttons( [ btn( 'Get started', NX ) ], { mt: '28px' } ),
					] ),
					group(
						[
							image(
								img( '1504868584819-f8e8b4b6d7e3', 1000 ),
								'Analytics dashboard on a laptop',
								{ ratio: '4/3', radius: '14px' }
							),
						],
						{ className: 'gk-kit-frame gk-kit-frame--green' }
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
			gradient:
				'linear-gradient(135deg,#ecfdf5 0%,#ffffff 55%,#f0f9ff 100%)',
			py: [ 96, 72, 48 ],
		}
	),
	section(
		[
			I(
				NX,
				'',
				'Kick-start your strategic digital marketing campaign',
				'From first idea to measurable growth – pick the expertise you need.'
			),
			grid(
				[
					[
						'📣',
						'Digital marketing',
						'SEO, paid ads and content that bring qualified traffic.',
					],
					[
						'🧩',
						'Enterprise technology',
						'Custom SaaS platforms, APIs and integrations.',
					],
					[
						'💡',
						'Business innovation',
						'Product strategy and rapid MVPs to test ideas fast.',
					],
				].map( ( [ icon, title, text ] ) =>
					card(
						[
							group(
								[
									iconTile( icon, NX.soft ),
									H( title, NX, {
										level: 3,
										size: '18px',
										mb: '0',
									} ),
								],
								{
									row: true,
									nowrap: true,
									gap: '14px',
									mb: '12px',
								}
							),
							P( text, NX, { size: '15px' } ),
						],
						NX
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			nxStatRow(
				'1519389950473-47ba0277781c',
				'Team working on laptops',
				'We stop interrupting what people are interested in',
				'Helpful, relevant marketing that people actually want – built on data, not guesswork.',
				[ '97.8%', 'Open rate achieved' ],
				[ '7.35%', 'Abandoned cart rate' ]
			),
			group( [], { mb: '80px' } ),
			nxStatRow(
				'1551434678-e076c223a692',
				'Developers reviewing performance',
				'Get tips &amp; tricks on how to skyrocket your sales',
				'Monthly growth reviews with clear next steps, so every sprint moves your numbers.',
				[ '22%', 'Click-through rate' ],
				[ '$1.2', 'Revenue per click' ],
				true
			),
		],
		{ bg: NX.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					image(
						img( '1531545514256-b1400bc00f31', 1000 ),
						'Nexora team collaborating',
						{ ratio: '4/3', radius: '24px' }
					),
					group( [
						I(
							NX,
							'About',
							'Who we are',
							'A team of 40 designers, engineers and marketers in Berlin and Lisbon. Since 2015 we have shipped 220+ products for startups and enterprises.',
							{ align: 'left', mb: '20px' }
						),
						checks( [ 'Free 14-day trial', 'Cancel anytime' ], NX ),
						buttons( [ btn( 'Get started', NX ) ], { mt: '28px' } ),
					] ),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			I(
				NX,
				'',
				'Testimonials from our satisfied clients',
				'Teams around the world rely on Nexora for product and growth.'
			),
			grid(
				[
					[
						'1500648767791-00dcc994a43e',
						'Ryan Edmonds',
						'Nexora rebuilt our platform in four months. Page speed tripled and sign-ups followed.',
					],
					[
						'1438761681033-6461ffad8d80',
						'Marie Garibay',
						'Strategic, fast and honest. They feel like part of our own team.',
					],
					[
						'1560250097-0b93528c311a',
						'Clarence Harris',
						'Our SEO traffic grew 180% in a year. Best agency decision we made.',
					],
				].map( ( [ photo, name, text ], i ) =>
					card(
						[
							person( photo, name, 'Client', NX ),
							stars(),
							P( `“${ text }”`, NX, {
								size: '15px',
								color: NX.ink,
							} ),
						],
						NX,
						{
							shadow: '0 20px 40px -24px rgba(15,23,42,0.25)',
							bw: false,
							className: i === 1 ? 'gk-kit-offset-sm' : undefined,
						}
					)
				),
				{ cols: [ 3, 1, 1 ], gap: [ 24, 16, 16 ] }
			),
		],
		{ bg: '#f8fafc', py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						H( 'Discover effortless customer support', NX, {
							size: 'clamp(1.6rem, 3vw, 2.2rem)',
						} ),
						P(
							'One dedicated team, one Slack channel and a guaranteed response within two business hours.',
							NX,
							{ mb: '20px' }
						),
						checks(
							[
								'Increase conversion rates',
								'Gain an edge over competitors',
								'Advanced caching and CDN',
								'Complete image optimisation',
								'Clean HTML, CSS and JavaScript',
							],
							NX
						),
						buttons( [ btn( 'Get started', NX ) ], { mt: '28px' } ),
					] ),
					image(
						img( '1573164713988-8665fc963095', 1000 ),
						'Support engineer at work',
						{ ratio: '4/3', radius: '24px' }
					),
				],
				{
					tpl: [ '1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
					className: 'gk-kit-flip-mobile',
				}
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			I(
				NX,
				'Pricing',
				'We build digital products for your success',
				'Simple monthly plans. Upgrade or cancel anytime.'
			),
			grid(
				[
					nxPrice( 'Standard', '39', 'Best for individuals', false ),
					nxPrice( 'Pro', '59', 'Best for professionals', true ),
					nxPrice( 'Business', '99', 'Best for teams', false ),
				],
				{ cols: [ 3, 1, 1 ], gap: [ 24, 20, 20 ] }
			),
		],
		{ bg: NX.soft, py: [ 96, 80, 56 ] }
	),
	logoStrip( { label: 'Proud partners of', bg: '#ffffff' } ),
	section(
		[
			grid(
				[
					group( [
						H( 'Get an easy start with Nexora now', NX, {
							color: '#ffffff',
							size: 'clamp(1.9rem, 3.6vw, 2.75rem)',
						} ),
						P(
							'Everything you need to confidently run your business online. Create your free account in under a minute.',
							NX,
							{ color: '#d1fae5', mb: '20px' }
						),
						checks(
							[ 'Free 14-day trial', 'Cancel anytime' ],
							{ ...NX, accent: '#a7f3d0' },
							{ color: '#ffffff' }
						),
						buttons(
							[
								button( 'Try for free', {
									bg: '#ffffff',
									color: NX.accent,
								} ),
							],
							{ mt: '28px' }
						),
					] ),
					image(
						img( '1580489944761-15a19d654956', 800 ),
						'Happy Nexora customer',
						{ ratio: '1/1', radius: '24px' }
					),
				],
				{
					tpl: [ '1.3fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
				}
			),
		],
		{
			gradient:
				'linear-gradient(135deg,#047857 0%,#059669 60%,#10b981 100%)',
			py: [ 88, 72, 56 ],
		}
	),
	footer(
		'Nexora',
		'Product design, development and growth for ambitious companies.<br>Torstraße 12, Berlin · +49 30 1234 567',
		[
			[
				'Product',
				[
					'Plans &amp; pricing',
					'How it works',
					'Web development',
					'SEO',
				],
			],
			[ 'Resources', [ 'About', 'Contact', 'Blog', 'Team' ] ],
			[ 'Legal', [ 'Privacy', 'Terms', 'Imprint', 'Cookies' ] ],
		],
		{ ...NX, fBg: '#022c22', fInk: '#ffffff', fMuted: '#a7f3d0' },
		{ socials: [ 'facebook', 'x', 'instagram' ] }
	),
];

// ===========================================================================
// 6. Charity – Brightwell Foundation (amber)
// ===========================================================================
const CH = {
	ink: '#1c1917',
	muted: '#78716c',
	accent: '#d97706',
	soft: '#fffbeb',
	line: '#f5f5f4',
};

const cause = ( photo, title, raised, goal ) =>
	card(
		[
			H( title, CH, {
				level: 3,
				size: '18px',
				align: 'center',
				mb: '8px',
			} ),
			P(
				'Every donation goes directly to the project – 100% transparent.',
				CH,
				{ align: 'center', size: '14px', mb: '16px' }
			),
			image( img( photo, 800 ), title, { ratio: '4/3', radius: '12px' } ),
			P( `<strong>$${ raised }</strong> raised of $${ goal }`, CH, {
				align: 'center',
				size: '14px',
				color: CH.ink,
				mt: '16px',
				mb: '14px',
			} ),
			buttons(
				[ btn( 'Donate now ›', CH, { radius: '6px', size: '14px' } ) ],
				{
					justify: 'center',
				}
			),
		],
		CH,
		{ pad: '24px', shadow: '0 20px 40px -28px rgba(28,25,23,0.35)' }
	);

const numbered = ( n, photo, alt, eyebrow, title, text, items, flip ) => {
	const pic = group(
		[
			image( img( photo, 900 ), alt, { ratio: '4/3', radius: '8px' } ),
			para( String( n ), {
				color: CH.accent,
				bg: '#ffffff',
				size: '22px',
				weight: 800,
				pad: [ '8px', '16px' ],
				className: 'gk-kit-num-badge',
			} ),
		],
		{ className: 'gk-kit-rel' }
	);
	const txt = group( [
		I( CH, eyebrow, title, text, {
			align: 'left',
			mb: '20px',
			size: 'clamp(1.6rem, 3vw, 2.2rem)',
		} ),
		...( items ? [ checks( items, CH ) ] : [] ),
	] );
	return grid( flip ? [ txt, pic ] : [ pic, txt ], {
		tpl: [ '1fr 1fr', '1fr', '1fr' ],
		gap: [ 64, 40, 28 ],
		valign: 'center',
		mb: 72,
		className: flip ? 'gk-kit-flip-mobile' : undefined,
	} );
};

const charity = () => [
	header(
		'Brightwell',
		[ 'Home', 'Causes', 'About', 'Events', 'Contact' ],
		[
			btn( 'Donate now', CH, {
				pad: [ '10px', '20px' ],
				size: '14px',
				radius: '6px',
			} ),
		],
		{ ink: CH.ink, muted: CH.muted, bg: '#ffffff' }
	),
	section(
		[
			grid(
				[
					group( [
						H( 'Donations that change the world.', CH, {
							level: 1,
							size: 'clamp(2.6rem, 5.6vw, 4.4rem)',
							lh: 1.05,
							ls: '-0.03em',
							mb: '20px',
						} ),
						P(
							'Brightwell funds clean water, school meals and healthcare for families in 14 countries. Your gift starts working the day you give it.',
							CH,
							{ size: '18px' }
						),
						buttons(
							[
								btn( 'Give monthly', CH, { radius: '6px' } ),
								obtn( 'More details', CH.ink, {
									radius: '6px',
									bc: '#d6d3d1',
								} ),
							],
							{ mt: '32px', gap: '12px' }
						),
					] ),
					group(
						[
							image(
								img( '1497486751825-1233686d5d80', 1000 ),
								'Smiling children supported by Brightwell',
								{ ratio: '4/3', radius: '20px' }
							),
							group(
								[
									P( 'Total funds raised', CH, {
										size: '13px',
										mb: '4px',
									} ),
									H( '$98,485', CH, {
										level: 3,
										size: '30px',
										mb: '10px',
									} ),
									P( '<a href="#">See all causes →</a>', CH, {
										color: CH.accent,
										link: CH.accent,
										size: '14px',
										weight: 700,
									} ),
								],
								{
									bg: '#ffffff',
									pad: '22px',
									radius: '14px',
									shadow: '0 20px 40px -16px rgba(28,25,23,0.3)',
									className: 'gk-kit-float-card',
								}
							),
						],
						{ className: 'gk-kit-rel' }
					),
				],
				{
					tpl: [ '1fr 1.1fr', '1fr', '1fr' ],
					gap: [ 64, 48, 36 ],
					valign: 'center',
				}
			),
		],
		{
			gradient: 'linear-gradient(180deg,#fffbeb 0%,#ffffff 100%)',
			py: [ 88, 72, 48 ],
		}
	),
	section(
		[
			I(
				CH,
				'Our causes',
				'You can help lots of people by donating a little',
				'Choose a project close to your heart – or give where it is needed most.'
			),
			grid(
				[
					cause(
						'1524069290683-0457abfe42c3',
						'School meals for 500 children',
						'8,240',
						'12,000'
					),
					cause(
						'1509099836639-18ba1795216d',
						'A safe water well for Kasama',
						'15,900',
						'20,000'
					),
					cause(
						'1488521787991-ed7bbaae773c',
						'Books and uniforms for girls',
						'4,310',
						'9,000'
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	cover(
		img( '1559027615-cd4628902d4a', 1920 ),
		[
			grid(
				[
					group( [
						P( 'Because we can', CH, {
							color: '#fcd34d',
							size: '13px',
							weight: 700,
							upper: true,
							ls: '0.12em',
							mb: '12px',
						} ),
						H( 'How can we help them?', CH, {
							color: '#ffffff',
							size: 'clamp(1.9rem, 3.6vw, 2.75rem)',
						} ),
						P(
							'Join 6,000 volunteers who give their time, skills and energy to communities that need it most.',
							CH,
							{ color: '#e7e5e4', mb: '24px' }
						),
						buttons( [
							btn( 'Become a volunteer', CH, { radius: '6px' } ),
						] ),
					] ),
					grid(
						[
							[
								'❤️',
								'Give with love',
								'Monthly gifts fund long-term projects.',
							],
							[
								'🤝',
								'Give with confidence',
								'Audited accounts, published every year.',
							],
							[
								'🎯',
								'Create lasting change',
								'We stay until communities thrive.',
							],
							[
								'💧',
								'Choose a water project',
								'One well serves 1,500 people.',
							],
						].map( ( [ icon, title, text ] ) =>
							group( [
								para( icon, { size: '24px', mb: '10px' } ),
								H( title, CH, {
									level: 3,
									color: '#ffffff',
									size: '17px',
									mb: '4px',
								} ),
								P( text, CH, {
									color: '#d6d3d1',
									size: '14px',
								} ),
							] )
						),
						{ cols: [ 2, 2, 1 ], gap: [ 32, 28, 24 ] }
					),
				],
				{
					tpl: [ '1fr 1.2fr', '1fr', '1fr' ],
					gap: [ 64, 40, 40 ],
					valign: 'center',
					className: 'gk-kit-cover-inner',
				}
			),
		],
		{
			align: 'full',
			minHeight: 520,
			dim: 75,
			overlay: '#1c1917',
			pad: [ '96px', '24px' ],
		}
	),
	section(
		[
			I(
				CH,
				'Help us now',
				'Water today. Health tomorrow. Hope for generations.',
				''
			),
			grid(
				[
					image(
						img( '1593113598332-cd288d649433', 1200 ),
						'Volunteers packing aid boxes',
						{ ratio: '16/10', radius: '20px' }
					),
					grid(
						[
							[ '15', 'Years of experience' ],
							[ '23K', 'Volunteers' ],
							[ '19', 'Worldwide offices' ],
						].map( ( [ n, l ] ) =>
							group( [
								H( n, CH, {
									level: 3,
									size: 'clamp(2.4rem, 4vw, 3rem)',
									color: CH.accent,
									mb: '0',
								} ),
								P( l, CH, {
									size: '14px',
									upper: true,
									ls: '0.06em',
								} ),
							] )
						),
						{ cols: [ 1, 3, 3 ], gap: [ 28, 16, 12 ] }
					),
				],
				{
					tpl: [ '2fr 1fr', '1fr', '1fr' ],
					gap: [ 48, 32, 28 ],
					valign: 'center',
				}
			),
		],
		{ bg: CH.soft, py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					I(
						CH,
						'Testimonials',
						'Real people. Real transformation.',
						'Stories from the families and volunteers behind every project.',
						{ align: 'left', mb: '0' }
					),
					...[
						[
							'1532629345422-7515f3d16bb6',
							'Having clean water nearby means my daughter can go to school again.',
							'Amara, Kasama',
						],
						[
							'1469571486292-0ba58a3f068b',
							'Volunteering with Brightwell changed how I see the world.',
							'Jonas, volunteer',
						],
					].map( ( [ photo, text, who ] ) =>
						card(
							[
								image( img( photo, 700 ), who, {
									ratio: '4/3',
									radius: '10px',
								} ),
								P( `“${ text }”`, CH, {
									color: CH.ink,
									size: '15px',
									mt: '16px',
									mb: '8px',
								} ),
								P( `<strong>${ who }</strong>`, CH, {
									size: '14px',
								} ),
							],
							CH,
							{ pad: '14px 14px 22px' }
						)
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ], valign: 'center' }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			numbered(
				1,
				'1503454537195-1dcabb73ffb9',
				'Child smiling after a school festival',
				'Join us',
				'Support a clean water project today',
				'$35 gives one person safe water for life. Your name is added to the well’s plaque.',
				[ 'Help for education', 'Help for water', 'Help for food' ]
			),
			numbered(
				2,
				'1527525443983-6e60c75fff46',
				'Hands joined together',
				'Join us',
				'Step forward, serve humanity, reach out and help',
				'Organise a fundraiser at work, school or online – we send you everything you need.',
				[ 'Fundraising kit by post', 'Personal donation page' ],
				true
			),
			numbered(
				3,
				'1559027615-cd4628902d4a',
				'Volunteer at a community event',
				'Featured campaign',
				'Small actions lead to big change',
				'This winter we deliver 10,000 warm-meal packs. Every $10 provides one week of meals.'
			),
		],
		{ bg: CH.soft, py: [ 96, 80, 56 ], pb: [ 24, 8, 0 ] }
	),
	section(
		[
			grid(
				[
					I(
						CH,
						'The Brightwell way',
						'We do it all for people',
						'',
						{
							align: 'left',
							mb: '0',
						}
					),
					buttons(
						[ btn( 'More services', CH, { radius: '6px' } ) ],
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
				[
					[
						'1509099836639-18ba1795216d',
						'💧',
						'Pure water',
						'Wells, filters and hygiene training for whole villages.',
					],
					[
						'1488521787991-ed7bbaae773c',
						'🩺',
						'Medical facilities',
						'Mobile clinics and trained local health workers.',
					],
					[
						'1524069290683-0457abfe42c3',
						'📚',
						'Education',
						'Classrooms, teachers and school meals.',
					],
				].map( ( [ photo, icon, title, text ] ) =>
					card(
						[
							image( img( photo, 800 ), title, {
								ratio: '4/3',
								radius: '10px',
							} ),
							para( icon, {
								size: '22px',
								mt: '18px',
								mb: '8px',
							} ),
							H( title, CH, {
								level: 3,
								size: '19px',
								mb: '6px',
							} ),
							P( text, CH, { size: '15px', mb: '12px' } ),
							P( '<a href="#">Read more →</a>', CH, {
								color: CH.accent,
								link: CH.accent,
								size: '14px',
								weight: 700,
							} ),
						],
						CH,
						{ pad: '14px 14px 24px' }
					)
				),
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 20 ] }
			),
		],
		{ bg: '#ffffff', py: [ 96, 80, 56 ] }
	),
	section(
		[
			grid(
				[
					group( [
						I(
							CH,
							'Join us',
							'Reach out and help at our latest events',
							'Meet the team, volunteer for a day or bring your family along.',
							{ align: 'left', mb: '24px' }
						),
						buttons( [
							btn( 'View all events', CH, { radius: '6px' } ),
						] ),
					] ),
					...[
						[
							'1532629345422-7515f3d16bb6',
							'4 Dec',
							'Charity run for clean water',
							'Riverside Park · 09:00',
						],
						[
							'1469571486292-0ba58a3f068b',
							'23 Dec',
							'Winter meal-pack day',
							'Community Hall · 10:00',
						],
					].map( ( [ photo, date, title, meta ] ) =>
						group(
							[
								group(
									[
										image( img( photo, 800 ), title, {
											ratio: '4/3',
											radius: '10px',
										} ),
										para( date, {
											bg: '#ffffff',
											color: CH.ink,
											size: '14px',
											weight: 800,
											pad: [ '8px', '12px' ],
											radius: '8px',
											className: 'gk-kit-num-badge',
										} ),
									],
									{ className: 'gk-kit-rel' }
								),
								H( title, CH, {
									level: 3,
									size: '18px',
									mb: '6px',
								} ),
								P( `📍 ${ meta }`, CH, { size: '14px' } ),
							],
							{ gap: '14px' }
						)
					),
				],
				{ cols: [ 3, 2, 1 ], gap: [ 32, 24, 28 ], valign: 'center' }
			),
		],
		{ bg: CH.soft, py: [ 96, 80, 56 ] }
	),
	cover(
		img( '1524069290683-0457abfe42c3', 1920 ),
		[
			P( 'Our mission', CH, {
				align: 'center',
				color: '#fcd34d',
				size: '13px',
				weight: 700,
				upper: true,
				ls: '0.12em',
				mb: '12px',
			} ),
			H( 'We won’t stop until every child has safe water', CH, {
				align: 'center',
				color: '#ffffff',
				size: 'clamp(2rem, 4vw, 3rem)',
			} ),
			P(
				'Since 2011 we have reached 1.2 million people. Help us reach the next million.',
				CH,
				{
					align: 'center',
					color: '#e7e5e4',
					mb: '28px',
					className: 'gk-kit-intro-center',
				}
			),
			buttons( [ btn( 'Our process', CH, { radius: '6px' } ) ], {
				justify: 'center',
			} ),
		],
		{ align: 'full', minHeight: 480, dim: 70, overlay: '#1c1917' }
	),
	footer(
		'Brightwell',
		'An international non-profit bringing clean water, education and healthcare to families in need.',
		[
			[
				'Quick links',
				[ 'Become a volunteer', 'Case studies', 'Sponsors', 'FAQ' ],
			],
			[
				'Explore',
				[ 'About us', 'Our history', 'Our services', 'Annual report' ],
			],
			[
				'Contact',
				[ 'hello@example.com', '+1 555 0102 330', 'Press', 'Careers' ],
			],
		],
		{ ...CH, fBg: CH.ink, fInk: '#ffffff', fMuted: '#a8a29e' },
		{ socials: [ 'facebook', 'instagram', 'youtube' ] }
	),
];

// ===========================================================================
// 7. Dark creative studio – Orbit Studio (black / orange)
// ===========================================================================
const OB = {
	bg: '#0c0a09',
	card: '#1c1917',
	ink: '#fafaf9',
	muted: '#a8a29e',
	accent: '#ff6b35',
	onAccent: '#0c0a09',
	line: 'rgba(250,250,249,0.08)',
	light: '#ffffff',
	lInk: '#1c1917',
	lMuted: '#78716c',
};

const LT = {
	ink: OB.lInk,
	muted: OB.lMuted,
	accent: OB.accent,
	line: '#e7e5e4',
	card: '#ffffff',
};

const tag = ( text, t ) =>
	para( text, {
		color: t.ink,
		size: '12px',
		weight: 500,
		radius: '999px',
		bg: 'rgba(127,127,127,0.16)',
		pad: [ '4px', '12px' ],
		mb: '0',
	} );

const obWork = ( photo, title, tags, o = {} ) =>
	group(
		[
			image( img( photo, 1000 ), title, {
				ratio: '16/11',
				radius: '18px',
			} ),
			H( title, OB, { level: 3, size: '20px', weight: 600, mb: '10px' } ),
			group(
				tags.map( ( x ) => tag( x, OB ) ),
				{ row: true, gap: '8px' }
			),
		],
		{ gap: '16px', className: o.className }
	);

const obService = ( title, text, items ) =>
	card(
		[
			H( title, LT, { level: 3, size: '22px', weight: 600, mb: '10px' } ),
			P( text, LT, { size: '15px', mb: '18px' } ),
			checks( items, LT, { size: '14px' } ),
		],
		LT,
		{ pad: '32px', radius: '20px' }
	);

const studio = () => [
	header(
		'ORBIT',
		[ 'About', 'Services', 'Work', 'Journal', 'Contact' ],
		[
			btn( 'Schedule a call', OB, {
				pad: [ '10px', '20px' ],
				size: '14px',
			} ),
		],
		{ ink: OB.ink, muted: OB.muted, bg: OB.bg }
	),
	section(
		[
			group(
				[
					H(
						`Where bold ideas meet ${ tint(
							'brilliant',
							OB.accent
						) } design`,
						OB,
						{
							level: 1,
							align: 'center',
							size: 'clamp(2.6rem, 6vw, 4.8rem)',
							weight: 600,
							lh: 1.04,
							ls: '-0.04em',
							mb: '20px',
						}
					),
					P(
						'Orbit is a design and development studio for startups and brands that want to stand out – websites, products and identities people remember.',
						OB,
						{ align: 'center', size: '18px' }
					),
					buttons( [ btn( 'Start a project', OB ) ], {
						justify: 'center',
						mt: '32px',
					} ),
				],
				{ mb: '56px', className: 'gk-kit-intro-center' }
			),
			group(
				[
					image(
						img( '1552581234-26160f608093', 1600 ),
						'Orbit Studio team in a workshop',
						{ ratio: '16/8', radius: '24px' }
					),
				],
				{
					pad: '8px',
					radius: '30px',
					bw: '1px',
					bc: 'rgba(255,107,53,0.35)',
				}
			),
		],
		{ bg: OB.bg, py: [ 72, 64, 48 ] }
	),
	logoStrip( {
		label: 'Brands we have helped grow',
		bg: OB.bg,
		color: '#d6d3d1',
		labelColor: OB.muted,
		py: [ 40, 40, 32 ],
	} ),
	section(
		[
			grid(
				[
					group( [
						H(
							'Unforgettable websites, brands &amp; visuals for bold visionaries',
							LT,
							{
								size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
								weight: 600,
							}
						),
						P(
							'Founded in 2014, we are a collective of designers, developers and strategists who believe great digital experiences should be beautiful, functional and human-centred.',
							LT,
							{ mb: '28px' }
						),
						buttons( [
							obtn( 'Know more about us', OB.lInk, {
								bc: '#d6d3d1',
							} ),
						] ),
					] ),
					image(
						img( '1499951360447-b19be8fe80f5', 1000 ),
						'Designer workspace',
						{ ratio: '4/3', radius: '20px' }
					),
				],
				{
					tpl: [ '1.1fr 1fr', '1fr', '1fr' ],
					gap: [ 64, 40, 32 ],
					valign: 'center',
					mb: 56,
				}
			),
			grid(
				[
					[ '⏱️', '72', 'Hour prototype guarantee' ],
					[ '🚀', '100+', 'Brands transformed' ],
					[ '✨', '10+', 'Years of pixel-perfect craft' ],
				].map( ( [ icon, n, l ] ) =>
					group(
						[
							iconTile( icon, '#fff1eb' ),
							group( [
								H( n, LT, {
									level: 3,
									size: '28px',
									weight: 600,
									mb: '0',
								} ),
								P( l, LT, { size: '14px' } ),
							] ),
						],
						{ row: true, nowrap: true, gap: '16px' }
					)
				),
				{
					cols: [ 3, 3, 1 ],
					gap: [ 24, 16, 20 ],
					className: 'gk-kit-meta gk-kit-meta--pad',
				}
			),
		],
		{ bg: OB.light, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( LT, '', 'Services we offer', '' ),
			grid(
				[
					obService(
						'1. UI/UX design',
						'Interfaces that delight users and drive conversions.',
						[
							'User flows that boost engagement',
							'Mobile-first, award-worthy interfaces',
							'Prototypes in 72 hours or less',
						]
					),
					obService(
						'2. Web development',
						'Websites that load fast, rank higher and grow with you.',
						[
							'90+ PageSpeed scores guaranteed',
							'SEO-optimised out of the box',
							'Editable CMS for non-tech teams',
						]
					),
					obService(
						'3. Brand design',
						'Visual identities that command attention and build trust.',
						[
							'Logos with a story',
							'Visual systems built to scale',
							'Style guides your team will use',
						]
					),
					obService(
						'4. No-code products',
						'Launch MVPs without engineering headaches.',
						[
							'MVPs in four weeks',
							'Workflows that save hours',
							'API integrations that just work',
						]
					),
				],
				{ cols: [ 2, 2, 1 ], gap: [ 20, 20, 16 ] }
			),
		],
		{ bg: '#f5f5f4', py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( { ...OB }, '', 'Showcase of selected work', '' ),
			grid(
				[
					obWork(
						'1460925895917-afdab827c52f',
						'Finlytic – fintech dashboard',
						[ 'Product UI', 'Data viz' ]
					),
					obWork(
						'1556761175-b413da4baf72',
						'Greenly – social campaign',
						[ 'Animation', 'Brand' ],
						{ className: 'gk-kit-offset-sm' }
					),
					obWork(
						'1542744173-8e7e53415bb0',
						'Lexum – law firm website',
						[ 'CMS', 'Webflow' ]
					),
					obWork(
						'1531482615713-2afd69097998',
						'Kidra – EdTech MVP',
						[ 'No-code', 'Payments' ],
						{ className: 'gk-kit-offset-sm' }
					),
				],
				{
					cols: [ 2, 2, 1 ],
					gap: [ 40, 24, 36 ],
					rowGap: [ 48, 40, 36 ],
				}
			),
			buttons(
				[
					obtn( 'View all case studies', OB.ink, {
						bc: 'rgba(250,250,249,0.3)',
					} ),
				],
				{
					justify: 'center',
					mt: '48px',
				}
			),
		],
		{ bg: OB.bg, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( LT, '', 'What clients say about us', '' ),
			grid(
				[
					card(
						[
							H( '4.9', LT, {
								align: 'center',
								size: '48px',
								weight: 600,
								mb: '4px',
							} ),
							P( '★★★★★', LT, {
								align: 'center',
								color: '#f59e0b',
								mb: '4px',
							} ),
							P( '120+ verified reviews', LT, {
								align: 'center',
								size: '14px',
								mb: '20px',
							} ),
							H( 'Where ideas meet extraordinary design', LT, {
								level: 3,
								align: 'center',
								size: '18px',
								mb: '0',
							} ),
						],
						LT,
						{
							bg: '#f5f5f4',
							bw: false,
							pad: '36px 24px',
							className: 'gk-kit-center-v',
						}
					),
					...[
						[
							'1556157382-97eda2d62296',
							'Sam Keller',
							'CEO of Finlytic',
							'We struggled with user drop-off for months. Orbit redesigned our dashboard and retention went up 40% in 30 days.',
						],
						[
							'1500648767791-00dcc994a43e',
							'David Rowe',
							'Founder of Brewcraft',
							'Our old branding looked like every other brewery. Orbit gave us a bold identity – sales up 65% after the relaunch.',
						],
					].map( ( [ photo, name, role, text ] ) =>
						card(
							[
								P( `4.9  ${ tint( '★★★★★', '#f59e0b' ) }`, LT, {
									color: LT.ink,
									weight: 600,
									mb: '14px',
								} ),
								P( `“${ text }”`, LT, {
									size: '15px',
									mb: '22px',
								} ),
								person( photo, name, role, LT ),
							],
							LT,
							{ pad: '28px' }
						)
					),
				],
				{ cols: [ 3, 1, 1 ], gap: [ 20, 16, 16 ] }
			),
		],
		{ bg: OB.light, py: [ 96, 80, 56 ] }
	),
	section(
		[
			I( LT, '', 'The studio journal', '' ),
			grid(
				[
					[
						'1600880292089-90a7e086ee0c',
						'UI/UX design',
						'How we boosted client conversions 200% with smarter UI/UX',
					],
					[
						'1515378791036-0648a3ef77b2',
						'Web development',
						'How we built a 98/100 PageSpeed website in two weeks',
					],
					[
						'1497366811353-6870744d04b2',
						'Branding',
						'How we made a boring B2B brand go viral',
					],
				].map( ( [ photo, cat, title ] ) =>
					group(
						[
							image( img( photo, 800 ), title, {
								ratio: '16/10',
								radius: '14px',
							} ),
							tag( cat, LT ),
							H( title, LT, {
								level: 3,
								size: '18px',
								weight: 600,
								lh: 1.4,
								mb: '0',
							} ),
							P( 'Orbit team · Nov 2026', LT, { size: '13px' } ),
						],
						{ gap: '14px', className: 'gk-kit-tag-start' }
					)
				),
				{ cols: [ 3, 2, 1 ], gap: [ 24, 20, 32 ] }
			),
		],
		{ bg: OB.light, py: [ 0, 0, 0 ], pb: [ 96, 80, 56 ] }
	),
	section(
		[
			group(
				[
					image(
						img( '1580489944761-15a19d654956', 200 ),
						'Lead designer',
						{
							ratio: '1/1',
							radius: '999px',
							className: 'gk-kit-round-sm',
						}
					),
					H( 'Meet the minds behind the magic', OB, {
						align: 'center',
						size: 'clamp(2rem, 4vw, 3rem)',
						weight: 600,
						mt: '20px',
					} ),
					P(
						'Get a free 30-minute strategy session with our lead designer.',
						OB,
						{
							align: 'center',
							mb: '24px',
						}
					),
					buttons( [ btn( 'Book a free call', OB ) ], {
						justify: 'center',
					} ),
					P(
						'Prefer email?<br><a href="mailto:hello@example.com"><strong>hello@example.com</strong></a>',
						OB,
						{
							align: 'center',
							size: '14px',
							mt: '20px',
							link: OB.ink,
						}
					),
				],
				{ className: 'gk-kit-intro-center' }
			),
		],
		{
			gradient:
				'radial-gradient(circle at 50% 0%,#3b1d10 0%,#0c0a09 60%)',
			py: [ 112, 88, 64 ],
		}
	),
	footer(
		'ORBIT',
		'We craft high-performance digital experiences that drive real business results.',
		[
			[ 'Quick links', [ 'Home', 'About', 'Work', 'Contact' ] ],
			[
				'Services',
				[
					'UI/UX design',
					'Brand design',
					'Web development',
					'No-code',
				],
			],
			[
				'Journal',
				[ 'Latest posts', 'Case studies', 'Newsletter', 'Careers' ],
			],
		],
		{ ...OB, fBg: OB.light, fInk: OB.lInk, fMuted: OB.lMuted },
		{ socials: [ 'instagram', 'linkedin', 'dribbble' ] }
	),
];

export const siteTemplates = [
	{
		id: 'tpl-dental-clinic',
		title: 'Dental Clinic',
		category: 'healthcare',
		desc: 'Friendly dentist website: hero, services, team, treatments, insurance, reviews and contact.',
		keywords: 'dental dentist clinic teeth orthodontist medical health',
		blocks: dental,
	},
	{
		id: 'tpl-water-sports',
		title: 'Water Sports',
		category: 'travel',
		desc: 'Bold adventure / tour operator page with full-screen hero, activities, packages and reviews.',
		keywords:
			'water sports surf diving beach travel tour adventure activities',
		blocks: watersports,
	},
	{
		id: 'tpl-aquarium',
		title: 'Aquarium & Attraction',
		category: 'travel',
		desc: 'Immersive attraction page for aquariums, zoos and museums: schedule, animals, tours and gallery.',
		keywords: 'aquarium zoo museum attraction park ocean tickets schedule',
		blocks: aquarium,
	},
	{
		id: 'tpl-leadgen-saas',
		title: 'Lead Gen SaaS',
		category: 'saas',
		desc: 'High-converting SaaS landing page: problem/solution, features, offer countdown, reviews, FAQ and CTA.',
		keywords:
			'saas lead generation marketing software startup landing conversion',
		blocks: leadgen,
	},
	{
		id: 'tpl-digital-agency',
		title: 'SaaS & Digital Agency',
		category: 'agency',
		desc: 'Clean agency / SaaS company page with stats, about, testimonials, pricing and CTA.',
		keywords: 'agency digital marketing saas company services pricing',
		blocks: agency,
	},
	{
		id: 'tpl-charity',
		title: 'Charity & Non-profit',
		category: 'nonprofit',
		desc: 'Donation-focused charity website: causes, impact numbers, stories, programmes and events.',
		keywords:
			'charity nonprofit ngo donation fundraising volunteer foundation',
		blocks: charity,
	},
	{
		id: 'tpl-creative-studio',
		title: 'Creative Studio',
		category: 'agency',
		desc: 'Dark and light creative agency site: bold hero, services, case studies, reviews and journal.',
		keywords: 'creative studio agency design web development branding dark',
		blocks: studio,
	},
];
