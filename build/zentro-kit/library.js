"use strict";
(globalThis["webpackChunkzentro_blocks"] = globalThis["webpackChunkzentro_blocks"] || []).push([["zentro-kit/library"],{

/***/ "./src/zentro-kit/kit-data.js"
/*!************************************!*\
  !*** ./src/zentro-kit/kit-data.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   templateCategories: () => (/* binding */ templateCategories),
/* harmony export */   templates: () => (/* binding */ templates)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "./src/zentro-kit/patterns.js");
/* harmony import */ var _patterns_industry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns-industry */ "./src/zentro-kit/patterns-industry.js");
/* harmony import */ var _patterns_more__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns-more */ "./src/zentro-kit/patterns-more.js");
/* harmony import */ var _patterns_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns-showcase */ "./src/zentro-kit/patterns-showcase.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates */ "./src/zentro-kit/templates.js");
/* harmony import */ var _templates_extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates-extra */ "./src/zentro-kit/templates-extra.js");
/* harmony import */ var _templates_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates-sites */ "./src/zentro-kit/templates-sites.js");
/* harmony import */ var _templates_pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates-pages */ "./src/zentro-kit/templates-pages.js");
/**
 * Zentro Kit – design library data.
 *
 * Loaded on demand (dynamic import) the first time the library opens, so the
 * ~200 KB of pattern / template definitions never slow down the editor.
 */










// Industry packs first: they are complete, niche-specific designs.
// "Logos & Clients" sits right after Testimonials.
const categories = [..._patterns_industry__WEBPACK_IMPORTED_MODULE_2__.industryCategories, ..._patterns__WEBPACK_IMPORTED_MODULE_1__.categories];
categories.splice(categories.findIndex(c => c.id === 'testimonials') + 1, 0, ..._patterns_showcase__WEBPACK_IMPORTED_MODULE_4__.showcaseCategories);
const byOrder = (list, order) => list.sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
const patterns = byOrder([..._patterns_industry__WEBPACK_IMPORTED_MODULE_2__.industryPatterns, ..._patterns__WEBPACK_IMPORTED_MODULE_1__.patterns, ..._patterns_more__WEBPACK_IMPORTED_MODULE_3__.morePatterns, ..._patterns_showcase__WEBPACK_IMPORTED_MODULE_4__.showcasePatterns], categories.map(c => c.id));
const templateCategories = [{
  id: 'inner',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner Pages', 'zentro-blocks')
}, {
  id: 'agency',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Agency & Business', 'zentro-blocks')
}, {
  id: 'saas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SaaS & Startup', 'zentro-blocks')
}, {
  id: 'portfolio',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Portfolio & Personal', 'zentro-blocks')
}, {
  id: 'architecture',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Architecture & Real Estate', 'zentro-blocks')
}, {
  id: 'healthcare',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Healthcare', 'zentro-blocks')
}, {
  id: 'coaching',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coaching & Consulting', 'zentro-blocks')
}, {
  id: 'travel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Travel & Attractions', 'zentro-blocks')
}, {
  id: 'nonprofit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Non-profit', 'zentro-blocks')
}];
const templates = byOrder([..._templates_pages__WEBPACK_IMPORTED_MODULE_8__.pageTemplates, ..._templates__WEBPACK_IMPORTED_MODULE_5__.templates, ..._templates_extra__WEBPACK_IMPORTED_MODULE_6__.extraTemplates, ..._templates_sites__WEBPACK_IMPORTED_MODULE_7__.siteTemplates], templateCategories.map(c => c.id));

/***/ },

/***/ "./src/zentro-kit/patterns-industry.js"
/*!*********************************************!*\
  !*** ./src/zentro-kit/patterns-industry.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   industryCategories: () => (/* binding */ industryCategories),
/* harmony export */   industryPatterns: () => (/* binding */ industryPatterns)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/**
 * Zentro Kit – industry pattern packs:
 * Digital Agency, Healthcare / Clinic and Real Estate.
 *
 * Layouts follow the conventions used by top-performing sites in each niche
 * (clear H1 + primary CTA above the fold, trust signals, scannable cards,
 * semantic headings for SEO). All copy and images are demo content.
 */

const industryCategories = [{
  id: 'agency',
  label: 'Digital Agency'
}, {
  id: 'healthcare',
  label: 'Healthcare / Clinic'
}, {
  id: 'realestate',
  label: 'Real Estate'
}];

// ===========================================================================
// DIGITAL AGENCY – "Nova Studio"
// ===========================================================================
const AG = {
  ink: '#0a0a0a',
  muted: '#525252',
  violet: '#7c3aed',
  lime: '#bef264',
  soft: '#f5f5f4'
};
const agIntro = (e, t, x, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(e, t, x, {
  accent: AG.violet,
  color: AG.ink,
  muted: AG.muted,
  ...o
});
const agBtn = t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  bg: AG.ink,
  color: '#ffffff'
});
const agPrice = (planTitle, price, billingPeriod, features, popular = false) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
  planTitle,
  price,
  currencySymbol: '€',
  billingPeriod,
  features,
  isPopular: popular,
  badgeText: 'Most popular',
  buttonLabel: popular ? 'Get started' : 'Book a call',
  primaryColor: popular ? AG.violet : AG.ink,
  borderRadius: 18
});
const agencyPatterns = [{
  id: 'agency-hero',
  title: 'Agency Hero',
  category: 'agency',
  desc: 'Bold dark hero with headline, CTAs, team image and client logo strip.',
  keywords: 'agency marketing digital hero studio',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('● Digital growth agency · Since 2014', {
    color: AG.lime,
    size: '14px',
    weight: 600,
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('We build brands that grow your business', {
    level: 1,
    color: '#ffffff',
    size: 'clamp(2.5rem, 5.6vw, 4.4rem)',
    weight: 800,
    lh: 1.04,
    ls: '-0.035em',
    mt: '0',
    mb: '22px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Strategy, design and performance marketing under one roof. We turn ambitious companies into category leaders — with results you can measure.', {
    color: '#a3a3a3',
    size: '18px',
    lh: 1.7,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Get a free proposal', {
    bg: AG.lime,
    color: AG.ink
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('See our work →', {
    outline: true,
    color: '#ffffff',
    bc: 'rgba(255,255,255,0.3)'
  })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1522071820081-009f0129c71c', 1000), 'Nova Studio team planning a campaign', {
    ratio: '4/5',
    radius: '28px'
  })], {
    tpl: ['1.15fr 1fr', '1fr', '1fr'],
    gap: [64, 48, 40],
    valign: 'center',
    mb: 64
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Trusted by fast-growing brands', {
    color: '#737373',
    size: '13px',
    weight: 600,
    upper: true,
    ls: '0.12em',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(['Lumora', 'Brightpath', 'Kinetic', 'Oakridge', 'Velvet&Co', 'Nordwave'].map(n => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(n, {
    color: '#d4d4d4',
    size: '20px',
    weight: 800,
    mb: '0'
  })), {
    cols: [6, 3, 2],
    gap: [24, 20, 16],
    rowGap: [0, 16, 16]
  })], {
    bg: AG.ink,
    py: [110, 88, 64]
  })]
}, {
  id: 'agency-services',
  title: 'Marketing Services',
  category: 'agency',
  desc: 'Six numbered service cards: SEO, ads, social, content, web and CRO.',
  keywords: 'services seo ads social media content marketing',
  blocks: () => {
    const svc = (n, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(n, {
      color: AG.violet,
      size: '14px',
      weight: 700,
      mb: '28px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: AG.ink,
      size: '22px',
      weight: 700,
      mt: '0',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
      color: AG.muted,
      size: '15px',
      lh: 1.65,
      mb: '18px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Learn more →</a>', {
      size: '15px',
      weight: 600,
      link: AG.ink,
      mb: '0'
    })], {
      bg: '#ffffff',
      pad: '32px',
      radius: '22px',
      bw: '1px',
      bc: '#e7e5e4'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('What we do', 'Marketing services that move the numbers', 'Pick one service or let us run your entire growth engine.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([svc('01', 'Search Engine Optimisation', 'Technical SEO, content and links that win page-one rankings for the searches that matter.'), svc('02', 'Paid Advertising', 'Google, Meta and LinkedIn campaigns optimised daily for cost per lead, not vanity clicks.'), svc('03', 'Social Media', 'Scroll-stopping content and community management that builds a loyal audience.'), svc('04', 'Content Marketing', 'Articles, guides and video that educate buyers and generate demand on autopilot.'), svc('05', 'Web Design & Dev', 'Fast, accessible, conversion-focused websites built on WordPress and headless stacks.'), svc('06', 'Email & CRO', 'Automations, A/B tests and landing pages that turn more visitors into customers.')], {
      cols: [3, 2, 1],
      gap: [24, 20, 20]
    })], {
      bg: AG.soft
    })];
  }
}, {
  id: 'agency-case-studies',
  title: 'Case Studies',
  category: 'agency',
  desc: 'Two results-driven case study cards with headline metrics.',
  keywords: 'case study results clients success',
  blocks: () => {
    const cs = (photo, tag, title, m1, l1, m2, l2) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), title, {
      ratio: '16/10',
      radius: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(tag, {
      color: AG.violet,
      size: '13px',
      weight: 700,
      upper: true,
      ls: '0.1em',
      mt: '24px',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: AG.ink,
      size: 'clamp(1.4rem, 2.4vw, 1.8rem)',
      weight: 700,
      lh: 1.25,
      mt: '0',
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(m1, {
      level: 4,
      color: AG.ink,
      size: '34px',
      weight: 800,
      mt: '0',
      mb: '4px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(l1, {
      color: AG.muted,
      size: '14px',
      mb: '0'
    })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(m2, {
      level: 4,
      color: AG.ink,
      size: '34px',
      weight: 800,
      mt: '0',
      mb: '4px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(l2, {
      color: AG.muted,
      size: '14px',
      mb: '0'
    })])], {
      cols: [2, 2, 2],
      gap: [20, 16, 12],
      mb: 20
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Read the case study →</a>', {
      size: '15px',
      weight: 600,
      link: AG.ink,
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([agIntro('Case studies', 'Results we’re proud of', null, {
      align: 'left',
      mb: '0'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([agBtn('All case studies')])], {
      tpl: ['1fr auto', '1fr', '1fr'],
      valign: 'end',
      gap: [24, 20, 20],
      mb: 48
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cs('1460925895917-afdab827c52f', 'E-commerce · SEO + Ads', 'How Lumora tripled online revenue in 9 months', '+312%', 'Organic traffic', '3.4×', 'Return on ad spend'), cs('1551434678-e076c223a692', 'SaaS · Content + CRO', 'Brightpath cut cost per lead by 58% while doubling demos', '-58%', 'Cost per lead', '2.1×', 'Demo bookings')], {
      cols: [2, 2, 1],
      gap: [40, 28, 48]
    })], {
      bg: '#ffffff'
    })];
  }
}, {
  id: 'agency-portfolio-grid',
  title: 'Portfolio Grid',
  category: 'agency',
  desc: 'Six project tiles with category labels for showcasing work.',
  keywords: 'portfolio work projects grid branding web design',
  blocks: () => {
    const tile = (photo, title, cat) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), `${title} project`, {
      ratio: '1/1',
      radius: '18px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: AG.ink,
      size: '19px',
      weight: 700,
      mt: '16px',
      mb: '4px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(cat, {
      color: AG.muted,
      size: '14px',
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('Selected work', 'Brands we’ve helped shine', 'Branding, websites and campaigns for startups and household names.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([tile('1561070791-2526d30994b5', 'Kinetic Fitness', 'Brand identity · Website'), tile('1498050108023-c5249f4df085', 'Oakridge Bank', 'Web app · UX design'), tile('1542744094-3a31f272c490', 'Velvet & Co', 'Social media campaign'), tile('1531482615713-2afd69097998', 'Nordwave Travel', 'Website redesign'), tile('1557838923-2985c318be48', 'Lumora Skincare', 'E-commerce · Ads'), tile('1504868584819-f8e8b4b6d7e3', 'Brightpath', 'SaaS marketing site')], {
      cols: [3, 2, 1],
      gap: [28, 20, 28]
    })], {
      bg: AG.soft
    })];
  }
}, {
  id: 'agency-work-process',
  title: 'Work Process',
  category: 'agency',
  desc: 'Four-step process on a dark background: discover, strategy, create, grow.',
  keywords: 'process steps how we work method',
  blocks: () => {
    const step = (n, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(n, {
      level: 3,
      color: AG.lime,
      size: '44px',
      weight: 800,
      mt: '0',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: '#ffffff',
      size: '21px',
      weight: 700,
      mt: '0',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
      color: '#a3a3a3',
      size: '15px',
      lh: 1.65,
      mb: '0'
    })], {
      pad: '28px',
      radius: '20px',
      bw: '1px',
      bc: '#262626'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('How we work', 'A proven process, from kickoff to growth', null, {
      color: '#ffffff',
      accent: AG.lime
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([step('01', 'Discover', 'Workshops, audits and competitor research to understand where the growth is hiding.'), step('02', 'Strategy', 'A clear 90-day roadmap with channels, budgets, KPIs and owners.'), step('03', 'Create', 'Design, build and launch — campaigns, content and websites shipped fast.'), step('04', 'Grow', 'Weekly optimisation and transparent reporting that compounds results.')], {
      cols: [4, 2, 1],
      gap: [20, 20, 16]
    })], {
      bg: AG.ink
    })];
  }
}, {
  id: 'agency-client-reviews',
  title: 'Client Reviews',
  category: 'agency',
  desc: 'Rating summary with three client review cards and photos.',
  keywords: 'reviews testimonials clients rating google',
  blocks: () => {
    const review = (photo, name, role, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★', {
      color: '#f59e0b',
      size: '18px',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`“${text}”`, {
      color: AG.ink,
      size: '17px',
      lh: 1.65,
      mb: '24px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 160), name, {
      ratio: '1/1',
      radius: '999px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`<strong>${name}</strong><br>${role}`, {
      color: AG.muted,
      size: '14px',
      lh: 1.5,
      mb: '0'
    })], {
      row: true,
      nowrap: true,
      gap: '12px',
      className: 'gk-kit-avatar-row'
    })], {
      bg: '#ffffff',
      pad: '30px',
      radius: '22px',
      bw: '1px',
      bc: '#e7e5e4'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('Client reviews', 'Rated 4.9/5 from 180+ reviews', 'What founders and marketing leaders say about working with us.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([review('1494790108377-be9c29b29330', 'Emma Clarke', 'CMO, Lumora', 'Nova rebuilt our funnel from scratch. Revenue from organic search tripled and our ads finally make money.'), review('1500648767791-00dcc994a43e', 'Jonas Weber', 'Founder, Kinetic', 'The best agency we have worked with. Fast, honest and obsessed with results — not hours billed.'), review('1438761681033-6461ffad8d80', 'Sara Lindqvist', 'Head of Growth, Brightpath', 'Clear reporting every week and a team that feels like ours. We doubled demo bookings in one quarter.')], {
      cols: [3, 1, 1],
      gap: [24, 20, 20]
    })], {
      bg: '#ffffff'
    })];
  }
}, {
  id: 'agency-pricing-plans',
  title: 'Pricing Plans (Tabs)',
  category: 'agency',
  desc: 'Monthly retainers and one-off projects in switchable tabs with pricing cards.',
  keywords: 'pricing plans packages retainer tabs',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('Pricing', 'Transparent plans, no surprises', 'Cancel monthly plans any time. All prices exclude VAT.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
    label: 'Monthly retainers',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([agPrice('Starter', '1,490', '/month', ['SEO or Ads (1 channel)', 'Monthly strategy call', 'Performance dashboard', 'Email support']), agPrice('Growth', '2,990', '/month', ['SEO + Ads + Social', 'Bi-weekly strategy calls', '4 landing pages / quarter', 'Dedicated account manager'], true), agPrice('Scale', '5,900', '/month', ['Full-funnel marketing team', 'Weekly strategy calls', 'Unlimited creative', 'CRO & A/B testing'])], {
      cols: [3, 1, 1],
      gap: [24, 20, 20],
      valign: 'center',
      py: [16, 12, 8]
    })]
  }, {
    label: 'One-off projects',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([agPrice('Brand Sprint', '3,500', 'one-off', ['Logo & visual identity', 'Brand guidelines', 'Social templates']), agPrice('Website', '8,900', 'from', ['Up to 12 pages', 'WordPress + SEO setup', 'Accessibility (WCAG AA)', '30 days support'], true), agPrice('Marketing Audit', '990', 'one-off', ['SEO, ads & analytics audit', 'Prioritised action plan', '60-min walkthrough'])], {
      cols: [3, 1, 1],
      gap: [24, 20, 20],
      valign: 'center',
      py: [16, 12, 8]
    })]
  }], {
    color: AG.violet,
    align: 'center',
    radius: 10
  })], {
    bg: AG.soft
  })]
}, {
  id: 'agency-team-showcase',
  title: 'Team Showcase',
  category: 'agency',
  desc: 'Four team members with photos, roles and social links.',
  keywords: 'team people experts staff',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([agIntro('The team', 'Specialists, not generalists', 'Senior experts in every channel — no juniors learning on your budget.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/team-member-block', {
    members: [{
      name: 'Mia Hoffmann',
      role: 'Founder & Strategy',
      bio: '15 years growing brands across Europe.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1580489944761-15a19d654956', 600),
      imageAlt: 'Mia Hoffmann',
      linkedinUrl: '#'
    }, {
      name: 'Leo Martins',
      role: 'Head of Performance',
      bio: '€40M+ ad spend managed profitably.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1519085360753-af0119f7cbe7', 600),
      imageAlt: 'Leo Martins',
      linkedinUrl: '#'
    }, {
      name: 'Aisha Khan',
      role: 'Creative Director',
      bio: 'Award-winning brand and campaign design.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1534528741775-53994a69daeb', 600),
      imageAlt: 'Aisha Khan',
      linkedinUrl: '#'
    }, {
      name: 'Noah Fischer',
      role: 'SEO Lead',
      bio: 'Ranks competitive keywords in 6 languages.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1527980965255-d3b416303d12', 600),
      imageAlt: 'Noah Fischer',
      linkedinUrl: '#'
    }],
    columnsDesktop: 4,
    columnsTablet: 2,
    columnsMobile: 1,
    gap: 24,
    imageStyle: 'square',
    alignment: 'left',
    bgColor: '#ffffff',
    textColor: AG.ink,
    roleColor: AG.violet
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'agency-lead-cta',
  title: 'Lead Generation CTA',
  category: 'agency',
  desc: 'Free audit offer with benefits checklist and strong call to action.',
  keywords: 'lead generation cta audit offer contact',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Get a free marketing audit worth €990', {
    color: '#ffffff',
    size: 'clamp(1.9rem, 4vw, 3rem)',
    weight: 800,
    lh: 1.1,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('In 48 hours you’ll know exactly what’s holding your growth back — and how to fix it.', {
    color: '#ede9fe',
    size: '18px',
    lh: 1.6,
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Claim my free audit', {
    bg: AG.lime,
    color: AG.ink
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Talk to us', {
    outline: true,
    color: '#ffffff'
  })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('What you get', {
    level: 3,
    color: '#ffffff',
    size: '18px',
    weight: 700,
    mt: '0',
    mb: '12px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['SEO & site speed review', 'Ad account & tracking check', 'Competitor benchmark', '30-min video walkthrough'], {
    color: '#ffffff',
    size: '16px',
    lh: 2
  })], {
    bg: 'rgba(255,255,255,0.1)',
    radius: '20px',
    pad: '28px'
  })], {
    tpl: ['1.4fr 1fr', '1fr', '1fr'],
    gap: [48, 32, 28],
    valign: 'center'
  })], {
    gradient: 'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)',
    radius: 28,
    py: [64, 56, 40],
    px: [56, 40, 24]
  })], {
    bg: '#ffffff',
    py: [80, 64, 48]
  })]
}];

// ===========================================================================
// HEALTHCARE / CLINIC – "CareWell Clinic"
// ===========================================================================
const MD = {
  ink: '#0f2a3a',
  muted: '#4b6475',
  teal: '#0e7490',
  tealLight: '#06b6d4',
  soft: '#ecfeff',
  mint: '#f0fdfa'
};
const mdIntro = (e, t, x, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(e, t, x, {
  accent: MD.teal,
  color: MD.ink,
  muted: MD.muted,
  ...o
});
const mdBtn = t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  bg: MD.teal,
  color: '#ffffff'
});
const healthcarePatterns = [{
  id: 'medical-hero',
  title: 'Medical Hero',
  category: 'healthcare',
  desc: 'Clinic hero with appointment CTA, phone number, trust stats and doctor photo.',
  keywords: 'medical clinic doctor hospital health hero',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('✚ Family clinic in Berlin-Mitte', {
    color: MD.teal,
    size: '14px',
    weight: 700,
    mb: '18px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Compassionate care for your whole family', {
    level: 1,
    color: MD.ink,
    size: 'clamp(2.4rem, 5.2vw, 3.9rem)',
    weight: 700,
    lh: 1.08,
    ls: '-0.02em',
    mt: '0',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Same-week appointments with experienced doctors, modern diagnostics and a team that takes time to listen.', {
    color: MD.muted,
    size: '18px',
    lh: 1.7,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([mdBtn('Book an appointment'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Call +49 30 1234 567', {
    outline: true,
    color: MD.ink
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('25+', {
    level: 3,
    color: MD.ink,
    size: '32px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Years of care', {
    color: MD.muted,
    size: '14px',
    mb: '0'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('40', {
    level: 3,
    color: MD.ink,
    size: '32px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Specialist doctors', {
    color: MD.muted,
    size: '14px',
    mb: '0'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('4.9★', {
    level: 3,
    color: MD.ink,
    size: '32px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('2,300 reviews', {
    color: MD.muted,
    size: '14px',
    mb: '0'
  })])], {
    cols: [3, 3, 3],
    gap: [24, 20, 12],
    mt: 40
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1612349317150-e413f6a5b16d', 1000), 'Smiling doctor at CareWell Clinic', {
    ratio: '4/5',
    radius: '32px'
  })], {
    tpl: ['1.1fr 1fr', '1fr', '1fr'],
    gap: [64, 48, 40],
    valign: 'center'
  })], {
    gradient: 'linear-gradient(180deg,#ecfeff 0%,#ffffff 100%)',
    py: [100, 80, 56]
  })]
}, {
  id: 'doctor-profiles',
  title: 'Doctor Profiles',
  category: 'healthcare',
  desc: 'Four doctor cards with photo, specialty, short bio and profile links.',
  keywords: 'doctors physicians team specialists profiles',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([mdIntro('Our doctors', 'Meet our specialists', 'Board-certified physicians with decades of combined experience.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/team-member-block', {
    members: [{
      name: 'Dr. Laura Becker',
      role: 'Cardiologist',
      bio: '18 years in preventive cardiology. Speaks German & English.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1559839734-2b71ea197ec2', 600),
      imageAlt: 'Dr. Laura Becker, cardiologist',
      linkedinUrl: '#',
      emailAddress: 'becker@carewell.example'
    }, {
      name: 'Dr. Samuel Osei',
      role: 'General Practitioner',
      bio: 'Family medicine for all ages, with a focus on chronic care.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1622253692010-333f2da6031d', 600),
      imageAlt: 'Dr. Samuel Osei, general practitioner',
      linkedinUrl: '#',
      emailAddress: 'osei@carewell.example'
    }, {
      name: 'Dr. Mei Tanaka',
      role: 'Pediatrician',
      bio: 'Gentle care for babies, children and teens.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1594824476967-48c8b964273f', 600),
      imageAlt: 'Dr. Mei Tanaka, pediatrician',
      linkedinUrl: '#',
      emailAddress: 'tanaka@carewell.example'
    }, {
      name: 'Dr. Paul Richter',
      role: 'Dermatologist',
      bio: 'Skin cancer screening and medical dermatology.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1537368910025-700350fe46c7', 600),
      imageAlt: 'Dr. Paul Richter, dermatologist',
      linkedinUrl: '#',
      emailAddress: 'richter@carewell.example'
    }],
    columnsDesktop: 4,
    columnsTablet: 2,
    columnsMobile: 1,
    gap: 24,
    imageStyle: 'square',
    alignment: 'center',
    bgColor: '#ffffff',
    textColor: MD.ink,
    roleColor: MD.teal
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'medical-services',
  title: 'Medical Services',
  category: 'healthcare',
  desc: 'Six service cards with icons for check-ups, cardiology, pediatrics and more.',
  keywords: 'medical services treatments care check-up',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([mdIntro('Services', 'Complete care under one roof', 'From routine check-ups to specialist treatment — no long waits, no referrals ping-pong.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/box-card-block', {
    cards: [{
      title: 'General Check-ups',
      description: 'Annual health checks, vaccinations and preventive screenings for adults.',
      iconType: 'icon',
      iconName: 'check',
      showBadge: false,
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }, {
      title: 'Cardiology',
      description: 'ECG, stress tests and heart health programs led by specialists.',
      iconType: 'icon',
      iconName: 'heart',
      showBadge: false,
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }, {
      title: 'Pediatrics',
      description: 'Child development checks, vaccinations and same-day sick visits.',
      iconType: 'icon',
      iconName: 'star',
      showBadge: false,
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }, {
      title: 'Dermatology',
      description: 'Skin cancer screening, acne treatment and allergy testing.',
      iconType: 'icon',
      iconName: 'shield',
      showBadge: false,
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }, {
      title: 'Lab & Diagnostics',
      description: 'On-site blood tests and ultrasound with results in 24 hours.',
      iconType: 'icon',
      iconName: 'bulb',
      showBadge: true,
      badgeText: '24H',
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }, {
      title: 'Telehealth',
      description: 'Video consultations and e-prescriptions from the comfort of home.',
      iconType: 'icon',
      iconName: 'rocket',
      showBadge: false,
      cardLink: '#',
      cardLinkText: 'Learn more →'
    }],
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
    borderRadius: 18
  })], {
    bg: MD.soft
  })]
}, {
  id: 'appointment-cta',
  title: 'Appointment CTA',
  category: 'healthcare',
  desc: 'Teal booking banner with buttons and a contact / emergency card.',
  keywords: 'appointment booking cta call emergency',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Book your appointment in under 60 seconds', {
    color: '#ffffff',
    size: 'clamp(1.9rem, 3.8vw, 2.8rem)',
    weight: 700,
    lh: 1.15,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Choose your doctor and time online, or call us — new patients are always welcome.', {
    color: '#cffafe',
    size: '18px',
    lh: 1.6,
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book online', {
    bg: '#ffffff',
    color: MD.teal
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Call the clinic', {
    outline: true,
    color: '#ffffff'
  })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Reception</strong><br><a href="tel:+49301234567">+49 30 1234 567</a>', {
    color: '#ffffff',
    link: '#ffffff',
    size: '16px',
    lh: 1.6,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Email</strong><br><a href="mailto:hello@carewell.example">hello@carewell.example</a>', {
    color: '#ffffff',
    link: '#ffffff',
    size: '16px',
    lh: 1.6,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Emergency</strong><br>Call 112 for life-threatening emergencies.', {
    color: '#ffffff',
    size: '16px',
    lh: 1.6,
    mb: '0'
  })], {
    bg: 'rgba(255,255,255,0.12)',
    radius: '20px',
    pad: '28px'
  })], {
    tpl: ['1.5fr 1fr', '1fr', '1fr'],
    gap: [48, 32, 28],
    valign: 'center'
  })], {
    gradient: 'linear-gradient(135deg,#0e7490 0%,#0891b2 100%)',
    radius: 28,
    py: [64, 56, 40],
    px: [56, 40, 24]
  })], {
    bg: '#ffffff',
    py: [80, 64, 48]
  })]
}, {
  id: 'opening-hours',
  title: 'Opening Hours',
  category: 'healthcare',
  desc: 'Address, directions and a semantic opening-hours table.',
  keywords: 'opening hours schedule location address contact',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([mdIntro('Visit us', 'Opening hours & location', 'Walk-ins welcome for urgent cases during opening hours.', {
    align: 'left',
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>CareWell Clinic</strong><br>Friedrichstraße 120, 10117 Berlin<br>U6 Oranienburger Tor · Parking in courtyard', {
    color: MD.ink,
    size: '16px',
    lh: 1.8,
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([mdBtn('Get directions')])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Clinic hours', {
    level: 3,
    color: MD.ink,
    size: '22px',
    weight: 700,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Monday', '08:00 – 18:00'], ['Tuesday', '08:00 – 18:00'], ['Wednesday', '08:00 – 14:00'], ['Thursday', '08:00 – 20:00'], ['Friday', '08:00 – 16:00'], ['Saturday', '09:00 – 13:00'], ['Sunday', 'Closed']], {
    stripes: true,
    color: MD.ink
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Telehealth available Mon–Fri until 21:00.', {
    color: MD.muted,
    size: '14px',
    mt: '12px',
    mb: '0'
  })], {
    bg: '#ffffff',
    radius: '22px',
    pad: '32px',
    bw: '1px',
    bc: '#cffafe'
  })], {
    tpl: ['1fr 1fr', '1fr', '1fr'],
    gap: [64, 40, 32],
    valign: 'center'
  })], {
    bg: MD.mint
  })]
}, {
  id: 'patient-testimonials',
  title: 'Patient Testimonials',
  category: 'healthcare',
  desc: 'Auto-playing patient reviews with star ratings.',
  keywords: 'patient reviews testimonials feedback',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([mdIntro('Patient stories', 'Trusted by 12,000+ patients', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/testimonials-carousel', {
    testimonials: [{
      name: 'Katrin M.',
      role: 'Patient since 2019',
      feedback: 'I got an appointment the same week and Dr. Becker took real time to explain everything. The whole team is warm and professional.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1544005313-94ddf0286df2', 200)
    }, {
      name: 'Ahmed R.',
      role: 'Father of two',
      feedback: 'Our kids actually like going to the doctor now. Dr. Tanaka is wonderful, and the online booking saves us so much time.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1507003211169-0a1dd7228f2d', 200)
    }, {
      name: 'Helga S.',
      role: 'Cardiology patient',
      feedback: 'Modern equipment, short waiting times and results within a day. I finally feel in good hands with my heart condition.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1438761681033-6461ffad8d80', 200)
    }],
    autoplay: true,
    autoplaySpeed: 5000,
    showRatings: true,
    primaryColor: MD.teal,
    textColor: MD.ink,
    cardBgColor: '#ffffff'
  })], {
    bg: MD.soft
  })]
}, {
  id: 'department-cards',
  title: 'Department Cards',
  category: 'healthcare',
  desc: 'Four department cards with photos, descriptions and links.',
  keywords: 'departments specialties cardiology pediatrics dental',
  blocks: () => {
    const dept = (photo, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 700), `${title} department`, {
      ratio: '4/3',
      radius: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: MD.ink,
      size: '20px',
      weight: 700,
      mt: '18px',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
      color: MD.muted,
      size: '15px',
      lh: 1.6,
      mb: '14px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">View department →</a>', {
      size: '15px',
      weight: 600,
      link: MD.teal,
      mb: '0'
    })], {
      bg: '#ffffff',
      pad: ['14px', '14px', '24px'],
      radius: '22px',
      bw: '1px',
      bc: '#e2e8f0'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([mdIntro('Departments', 'Specialist departments', 'Every department is led by a senior consultant with dedicated nursing staff.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([dept('1579684385127-1ef15d508118', 'Cardiology', 'Heart screening, ECG and long-term cardiac care.'), dept('1581056771107-24ca5f033842', 'Dental Care', 'Check-ups, hygiene and cosmetic dentistry.'), dept('1631217868264-e5b90bb7e133', 'Pediatrics', 'Friendly care from newborns to teenagers.'), dept('1551076805-e1869033e561', 'Diagnostics', 'Lab tests, ultrasound and digital X-ray.')], {
      cols: [4, 2, 1],
      gap: [20, 20, 20]
    })], {
      bg: '#ffffff'
    })];
  }
}, {
  id: 'medical-faq',
  title: 'Medical FAQ',
  category: 'healthcare',
  desc: 'Patient questions on insurance, first visits and results in an accordion.',
  keywords: 'faq questions insurance appointment',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([mdIntro('FAQ', 'Questions patients often ask', 'Can’t find your answer? Our reception team is happy to help.', {
    align: 'left',
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([mdBtn('Contact reception')])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
    panels: [{
      title: 'Do you accept public and private insurance?',
      content: 'Yes. We work with all statutory health insurers (GKV) and private insurers (PKV). Self-paying patients are also welcome.'
    }, {
      title: 'What should I bring to my first visit?',
      content: 'Please bring your insurance card, photo ID, a list of current medications and any recent test results or doctor’s letters.'
    }, {
      title: 'How quickly can I get an appointment?',
      content: 'Most patients are seen within 3 working days. Urgent cases are seen the same day during opening hours.'
    }, {
      title: 'How do I receive my test results?',
      content: 'Results are available in our secure patient portal within 24–48 hours, and your doctor will call you if anything needs discussing.'
    }, {
      title: 'Can I cancel or reschedule online?',
      content: 'Yes, up to 24 hours before your appointment via the confirmation email or patient portal.'
    }],
    activeColor: MD.teal,
    titleBgColor: '#f0fdfa',
    contentBgColor: '#ffffff',
    borderRadius: 12,
    allowMultiple: false
  })], {
    tpl: ['1fr 1.4fr', '1fr', '1fr'],
    gap: [64, 40, 32]
  })], {
    bg: '#ffffff'
  })]
}];

// ===========================================================================
// REAL ESTATE – "Haven Estates"
// ===========================================================================
const RE = {
  navy: '#0f2742',
  ink: '#14213d',
  muted: '#5b6472',
  gold: '#c8a24a',
  soft: '#f6f4ef'
};
const reIntro = (e, t, x, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(e, t, x, {
  accent: RE.gold,
  color: RE.ink,
  muted: RE.muted,
  ...o
});
const reBtn = t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  bg: RE.navy,
  color: '#ffffff',
  radius: '10px'
});
const propertyCard = (photo, price, title, address, meta, badge) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '4/3',
  radius: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(badge, {
  color: RE.gold,
  size: '12px',
  weight: 700,
  upper: true,
  ls: '0.1em',
  mt: '18px',
  mb: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(price, {
  level: 4,
  color: RE.ink,
  size: '24px',
  weight: 800,
  mt: '0',
  mb: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: RE.ink,
  size: '18px',
  weight: 600,
  mt: '0',
  mb: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(address, {
  color: RE.muted,
  size: '14px',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(meta, {
  color: RE.ink,
  size: '14px',
  weight: 600,
  pad: ['12px', '0', '0'],
  mb: '0',
  className: 'gk-kit-meta'
})], {
  bg: '#ffffff',
  pad: ['14px', '14px', '22px'],
  radius: '20px',
  bw: '1px',
  bc: '#e7e2d6'
});
const realEstatePatterns = [{
  id: 'property-hero',
  title: 'Property Hero',
  category: 'realestate',
  desc: 'Full-width home photo hero with headline, CTAs and market stats.',
  keywords: 'real estate property hero home house realtor',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600047509807-ba8f99d2cdde', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Haven Estates · Munich & surroundings', {
    color: RE.gold,
    size: '14px',
    weight: 700,
    upper: true,
    ls: '0.12em',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Find a home you’ll love for years', {
    level: 1,
    color: '#ffffff',
    size: 'clamp(2.6rem, 6vw, 4.6rem)',
    weight: 700,
    lh: 1.05,
    ls: '-0.02em',
    mt: '0',
    mb: '18px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Hand-picked houses and apartments, honest advice and agents who know every street.', {
    color: '#e5e7eb',
    size: '19px',
    lh: 1.6,
    mb: '30px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Browse properties', {
    bg: RE.gold,
    color: RE.navy,
    radius: '10px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Get a free valuation', {
    outline: true,
    color: '#ffffff',
    radius: '10px'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('1,200+', {
    level: 3,
    color: '#ffffff',
    size: '30px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Homes sold', {
    color: '#d1d5db',
    size: '14px',
    mb: '0'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('98%', {
    level: 3,
    color: '#ffffff',
    size: '30px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Asking price achieved', {
    color: '#d1d5db',
    size: '14px',
    mb: '0'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('21 days', {
    level: 3,
    color: '#ffffff',
    size: '30px',
    weight: 800,
    mt: '0',
    mb: '2px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Average time to sell', {
    color: '#d1d5db',
    size: '14px',
    mb: '0'
  })])], {
    cols: [3, 3, 3],
    gap: [32, 24, 12],
    mt: 48
  })], {
    align: 'full',
    minHeight: 680,
    overlay: '#0b1a2e',
    dim: 55,
    position: 'center center'
  })]
}, {
  id: 'property-search',
  title: 'Property Search Bar',
  category: 'realestate',
  desc: 'Visual search panel (location, type, price, beds) with popular searches.',
  keywords: 'search filter find property location price',
  blocks: () => {
    const field = (label, value) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(label, {
      color: RE.muted,
      size: '12px',
      weight: 700,
      upper: true,
      ls: '0.08em',
      mb: '4px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`${value} <span aria-hidden="true">▾</span>`, {
      color: RE.ink,
      size: '16px',
      weight: 600,
      mb: '0'
    })], {
      bg: '#ffffff',
      radius: '12px',
      pad: ['14px', '18px']
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([reIntro('Search', 'Search 2,400+ properties', null, {
      color: '#ffffff',
      mb: '32px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([field('Location', 'Munich, Germany'), field('Property type', 'House'), field('Price range', '€500k – €900k'), field('Bedrooms', '3+'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Search', {
      bg: RE.gold,
      color: RE.navy,
      radius: '12px',
      pad: ['20px', '32px']
    })], {
      justify: 'center'
    })], {
      tpl: ['1.3fr 1fr 1.2fr 0.8fr auto', '1fr 1fr', '1fr'],
      gap: [12, 12, 10],
      valign: 'center'
    })], {
      bg: 'rgba(255,255,255,0.08)',
      radius: 18,
      py: [14, 14, 12],
      px: [14, 14, 12]
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Popular: <a href="#">Schwabing apartments</a> · <a href="#">Family homes with garden</a> · <a href="#">New builds</a> · <a href="#">Lakeside villas</a>', {
      color: '#cbd5e1',
      link: '#ffffff',
      size: '15px',
      mt: '20px',
      mb: '0'
    })], {
      bg: RE.navy,
      py: [80, 64, 48]
    })];
  }
}, {
  id: 'property-listings',
  title: 'Property Listings (Tabs)',
  category: 'realestate',
  desc: 'For Sale / For Rent tabs with property cards: price, address and specs.',
  keywords: 'listings properties for sale rent cards tabs',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([reIntro('Latest listings', 'Homes available now', null, {
    align: 'left',
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([reBtn('View all properties')])], {
    tpl: ['1fr auto', '1fr', '1fr'],
    valign: 'end',
    gap: [24, 20, 20],
    mb: 32
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
    label: 'For sale',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([propertyCard('1570129477492-45c003edd2be', '€845,000', 'Family House with Garden', 'Pasing, Munich', '4 bd · 3 ba · 165 m²', 'For sale'), propertyCard('1605276374104-dee2a0ed3cd6', '€1,290,000', 'Modern Villa with Pool', 'Grünwald, Munich', '5 bd · 4 ba · 280 m²', 'New'), propertyCard('1568605114967-8130f3a36994', '€629,000', 'Charming Townhouse', 'Haidhausen, Munich', '3 bd · 2 ba · 120 m²', 'Price reduced')], {
      cols: [3, 2, 1],
      gap: [24, 20, 20],
      pt: [24, 20, 16]
    })]
  }, {
    label: 'For rent',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([propertyCard('1522708323590-d24dbb6b0267', '€2,150 / month', 'Bright Loft Apartment', 'Schwabing, Munich', '2 bd · 1 ba · 85 m²', 'For rent'), propertyCard('1560448204-e02f11c3d0e2', '€1,780 / month', 'Furnished City Flat', 'Maxvorstadt, Munich', '2 bd · 1 ba · 72 m²', 'Furnished'), propertyCard('1502672260266-1c1ef2d93688', '€3,400 / month', 'Penthouse with Terrace', 'Bogenhausen, Munich', '3 bd · 2 ba · 140 m²', 'Premium')], {
      cols: [3, 2, 1],
      gap: [24, 20, 20],
      pt: [24, 20, 16]
    })]
  }], {
    color: RE.navy,
    radius: 10
  })], {
    bg: RE.soft
  })]
}, {
  id: 'featured-property',
  title: 'Featured Property',
  category: 'realestate',
  desc: 'Large featured listing: photo, price, specs grid and viewing CTA.',
  keywords: 'featured property spotlight luxury listing',
  blocks: () => {
    const spec = (value, label) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(value, {
      level: 4,
      color: RE.ink,
      size: '22px',
      weight: 800,
      mt: '0',
      mb: '2px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(label, {
      color: RE.muted,
      size: '13px',
      mb: '0'
    })], {
      bg: RE.soft,
      radius: '12px',
      pad: '14px'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([reIntro('Featured property', 'This week’s spotlight', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1613490493576-7fde63acd811', 1200), 'Lakeside villa with pool', {
      ratio: '4/3',
      radius: '24px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Featured · New listing', {
      color: RE.gold,
      size: '13px',
      weight: 700,
      upper: true,
      ls: '0.1em',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Lakeside Villa with Private Pool', {
      level: 3,
      color: RE.ink,
      size: 'clamp(1.7rem, 3vw, 2.3rem)',
      weight: 700,
      lh: 1.2,
      mt: '0',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Starnberg, Bavaria', {
      color: RE.muted,
      size: '16px',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('€2,450,000', {
      level: 4,
      color: RE.navy,
      size: '32px',
      weight: 800,
      mt: '0',
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([spec('5', 'Bedrooms'), spec('4', 'Bathrooms'), spec('320 m²', 'Living area'), spec('1,100 m²', 'Plot')], {
      cols: [2, 4, 2],
      gap: [12, 12, 10],
      mb: 24
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Floor-to-ceiling glass, a heated pool and direct lake views — 30 minutes from Munich.', {
      color: RE.muted,
      size: '16px',
      lh: 1.7,
      mb: '24px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([reBtn('Schedule a viewing'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Download exposé', {
      outline: true,
      color: RE.ink,
      radius: '10px'
    })])])], {
      tpl: ['1.2fr 1fr', '1fr', '1fr'],
      gap: [56, 40, 32],
      valign: 'center'
    })], {
      bg: '#ffffff'
    })];
  }
}, {
  id: 'agent-profiles',
  title: 'Agent Profiles',
  category: 'realestate',
  desc: 'Four real-estate agents with photos, areas and contact links.',
  keywords: 'agents realtors brokers team contact',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([reIntro('Our agents', 'Local experts on your side', 'Each agent specialises in specific neighbourhoods — so you get insider knowledge.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/team-member-block', {
    members: [{
      name: 'Julia Wagner',
      role: 'Senior Agent · Schwabing',
      bio: '320+ homes sold. Speaks German, English & Italian.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573497019940-1c28c88b4f3e', 600),
      imageAlt: 'Julia Wagner, senior agent',
      linkedinUrl: '#',
      emailAddress: 'julia@haven.example'
    }, {
      name: 'Marco Rossi',
      role: 'Luxury Homes · Starnberg',
      bio: 'Specialist in lakeside and luxury properties.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1560250097-0b93528c311a', 600),
      imageAlt: 'Marco Rossi, luxury agent',
      linkedinUrl: '#',
      emailAddress: 'marco@haven.example'
    }, {
      name: 'Lena Schulz',
      role: 'Rentals · City Centre',
      bio: 'Finds tenants in under 14 days on average.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1580489944761-15a19d654956', 600),
      imageAlt: 'Lena Schulz, rentals agent',
      linkedinUrl: '#',
      emailAddress: 'lena@haven.example'
    }, {
      name: 'David Klein',
      role: 'New Builds · Riem',
      bio: 'Advises buyers on off-plan and new developments.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1519085360753-af0119f7cbe7', 600),
      imageAlt: 'David Klein, new builds agent',
      linkedinUrl: '#',
      emailAddress: 'david@haven.example'
    }],
    columnsDesktop: 4,
    columnsTablet: 2,
    columnsMobile: 1,
    gap: 24,
    imageStyle: 'square',
    alignment: 'center',
    bgColor: '#ffffff',
    textColor: RE.ink,
    roleColor: RE.gold
  })], {
    bg: RE.soft
  })]
}, {
  id: 'property-details',
  title: 'Property Details',
  category: 'realestate',
  desc: 'Listing detail layout: price, key facts, description, features, facts table and agent card.',
  keywords: 'property details listing single facts features agent',
  blocks: () => {
    const fact = (value, label) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(value, {
      level: 4,
      color: RE.ink,
      size: '22px',
      weight: 800,
      mt: '0',
      mb: '2px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(label, {
      color: RE.muted,
      size: '13px',
      mb: '0'
    })], {
      bg: '#ffffff',
      radius: '14px',
      pad: '16px',
      bw: '1px',
      bc: '#e7e2d6'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('For sale · Ref. HE-2041', {
      color: RE.gold,
      size: '13px',
      weight: 700,
      upper: true,
      ls: '0.1em',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Modern Family Villa with Pool', {
      level: 2,
      color: RE.ink,
      size: 'clamp(1.9rem, 3.6vw, 2.7rem)',
      weight: 700,
      lh: 1.15,
      mt: '0',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Waldstraße 14, 82031 Grünwald', {
      color: RE.muted,
      size: '16px',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('€1,290,000', {
      level: 3,
      color: RE.navy,
      size: '34px',
      weight: 800,
      mt: '0',
      mb: '28px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([fact('5', 'Bedrooms'), fact('4', 'Bathrooms'), fact('280 m²', 'Living area'), fact('2022', 'Year built')], {
      cols: [4, 4, 2],
      gap: [14, 12, 10],
      mb: 32
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('About this home', {
      level: 3,
      color: RE.ink,
      size: '22px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('A light-filled villa on a quiet, tree-lined street, designed for family life. The open kitchen flows into a double-height living room and a south-facing terrace with heated pool.', {
      color: RE.muted,
      size: '16px',
      lh: 1.75,
      mb: '14px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Upstairs, the master suite has a walk-in wardrobe and spa bathroom. Excellent schools, forest trails and the S-Bahn are within walking distance.', {
      color: RE.muted,
      size: '16px',
      lh: 1.75,
      mb: '28px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Features', {
      level: 3,
      color: RE.ink,
      size: '22px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['Heated outdoor pool', 'Underfloor heating', 'Smart-home system', 'Double garage'], {
      color: RE.ink,
      size: '15px',
      lh: 2
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['Solar panels (A+ energy)', 'Fitted designer kitchen', 'Landscaped garden', 'Wine cellar'], {
      color: RE.ink,
      size: '15px',
      lh: 2
    })], {
      cols: [2, 2, 1],
      gap: [24, 20, 0],
      mb: 28
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Property facts', {
      level: 3,
      color: RE.ink,
      size: '22px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Property type', 'Detached villa'], ['Plot size', '850 m²'], ['Energy class', 'A+'], ['Heating', 'Heat pump + solar'], ['Available from', 'March 2027']], {
      stripes: true,
      color: RE.ink,
      size: '15px'
    })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573497019940-1c28c88b4f3e', 400), 'Julia Wagner, listing agent', {
      ratio: '1/1',
      radius: '999px',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Julia Wagner', {
      level: 3,
      align: 'center',
      color: RE.ink,
      size: '20px',
      weight: 700,
      mt: '0',
      mb: '4px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Senior Agent · Haven Estates', {
      align: 'center',
      color: RE.muted,
      size: '14px',
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([reBtn('Schedule a viewing')], {
      justify: 'center',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Call +49 89 555 0123', {
      outline: true,
      color: RE.ink,
      radius: '10px'
    })], {
      justify: 'center'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Usually replies within 1 hour', {
      align: 'center',
      color: RE.muted,
      size: '13px',
      mt: '16px',
      mb: '0'
    })], {
      bg: '#ffffff',
      radius: '22px',
      pad: '28px',
      bw: '1px',
      bc: '#e7e2d6',
      className: 'gk-kit-agent-card'
    })], {
      tpl: ['2fr 1fr', '1fr', '1fr'],
      gap: [48, 32, 32],
      valign: 'start'
    })], {
      bg: RE.soft
    })];
  }
}, {
  id: 'property-gallery',
  title: 'Property Gallery',
  category: 'realestate',
  desc: 'Six-photo responsive gallery for a property or development.',
  keywords: 'gallery photos images property interior',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([reIntro('Gallery', 'Take a look inside', 'Every room photographed in natural light. Book a viewing to see it in person.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.gallery)([[(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600210492486-724fe5c67fb0', 900), 'Open-plan living room'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600573472550-8090b5e0745e', 900), 'Designer kitchen with island'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1502005229762-cf1b2da7c5d6', 900), 'Master bedroom'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1560185007-cde436f6a4d0', 900), 'Bright lounge area'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1484154218962-a197022b5858', 900), 'Dining area and kitchen'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600585154340-be6161a56a0c', 900), 'Exterior with terrace and pool']], {
    cols: 3,
    tab: 2,
    mob: 1,
    gap: 16,
    radius: 14,
    ratio: '4/3'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([reBtn('Book a viewing')], {
    justify: 'center',
    mt: '36px'
  })], {
    bg: '#ffffff'
  })]
}];
const industryPatterns = [...agencyPatterns, ...healthcarePatterns, ...realEstatePatterns];

/***/ },

/***/ "./src/zentro-kit/patterns-more.js"
/*!*****************************************!*\
  !*** ./src/zentro-kit/patterns-more.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morePatterns: () => (/* binding */ morePatterns)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/**
 * Zentro Kit – extra section patterns (3 more for every small category).
 * Realistic demo content; users only replace copy and images.
 */

const BLUE = '#2563eb';
const INK = '#0f172a';
const MUTED = '#64748b';
const SOFT = '#f8fafc';
const counter = (targetNumber, suffix, label, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/animated-counter', {
  targetNumber,
  suffix,
  prefix: o.prefix || '',
  label,
  numberColor: o.color || INK,
  labelColor: o.labelColor || MUTED,
  numberSize: o.size || 44,
  labelSize: 15,
  alignment: o.align || 'center',
  duration: 1800
});
const card = (children, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)(children, {
  bg: o.bg || '#ffffff',
  pad: o.pad || '28px',
  radius: o.radius || '20px',
  bw: o.bw === false ? undefined : '1px',
  bc: o.bc || '#e2e8f0',
  className: o.className
});
const price = (planTitle, p, period, features, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
  planTitle,
  price: p,
  currencySymbol: o.cur || '€',
  billingPeriod: period,
  features,
  isPopular: !!o.popular,
  badgeText: o.badge || 'Most popular',
  buttonLabel: o.cta || 'Get started',
  primaryColor: o.color || (o.popular ? BLUE : INK),
  cardBgColor: o.bg || '#ffffff',
  textColor: o.text || '#333333',
  borderRadius: 18
});
const accordion = (panels, color = BLUE) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
  panels: panels.map(([title, content]) => ({
    title,
    content
  })),
  activeColor: color,
  titleBgColor: SOFT,
  contentBgColor: '#ffffff',
  borderRadius: 12,
  allowMultiple: false
});
const avatarRow = (photo, name, role, color = MUTED) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 160), name, {
  ratio: '1/1',
  radius: '999px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`<strong>${name}</strong><br>${role}`, {
  color,
  size: '14px',
  lh: 1.5,
  mb: '0'
})], {
  row: true,
  nowrap: true,
  gap: '12px',
  className: 'gk-kit-avatar-row'
});
const footerCol = (title, links, color = '#94a3b8', titleColor = '#ffffff') => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 4,
  color: titleColor,
  size: '15px',
  weight: 600,
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(links.map(l => `<a href="#">${l}</a>`).join('<br>'), {
  color,
  link: color,
  size: '15px',
  lh: 2.1,
  mb: '0'
})]);
const morePatterns = [
// ================================================================ CONTENT
{
  id: 'content-feature-zigzag',
  title: 'Feature Zig-Zag Rows',
  category: 'content',
  desc: 'Alternating image / text rows with checklists — perfect for explaining a product or service.',
  keywords: 'zigzag alternating feature rows image text checklist',
  blocks: () => {
    const row = (photo, eyebrow, title, text, items, flip) => {
      const txt = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(eyebrow, title, text, {
        align: 'left',
        mb: '20px'
      }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(items, {
        color: INK,
        size: '16px',
        lh: 2
      })]);
      const pic = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), title, {
        ratio: '4/3',
        radius: '24px'
      });
      return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(flip ? [txt, pic] : [pic, txt], {
        tpl: ['1fr 1fr', '1fr', '1fr'],
        gap: [72, 40, 32],
        valign: 'center',
        mb: 80,
        className: flip ? 'gk-kit-flip-mobile' : undefined
      });
    };
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([row('1460925895917-afdab827c52f', 'Reporting', 'Every metric in one clear view', 'Stop switching between tabs. All your numbers update live in one dashboard.', ['Live data from 120+ sources', 'Custom KPIs and goals', 'Scheduled PDF reports'], false), row('1552664730-d307ca884978', 'Collaboration', 'Make decisions together', 'Comment, assign and share insights with the people who need them — instantly.', ['Comments on any chart', 'Slack & Teams alerts', 'Free guest access'], true)], {
      bg: '#ffffff',
      pb: [20, 0, 0]
    })];
  }
}, {
  id: 'content-mission-values',
  title: 'Mission & Values',
  category: 'content',
  desc: 'Big mission statement on dark background followed by three core values.',
  keywords: 'mission values vision company culture about',
  blocks: () => {
    const value = (n, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(n, {
      color: '#60a5fa',
      size: '14px',
      weight: 700,
      mb: '14px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: '#ffffff',
      size: '22px',
      weight: 700,
      mt: '0',
      mb: '10px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
      color: '#94a3b8',
      size: '16px',
      lh: 1.7,
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Our mission', {
      color: '#60a5fa',
      size: '13px',
      weight: 700,
      upper: true,
      ls: '0.12em',
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('We believe every small business deserves the tools big companies take for granted.', {
      color: '#ffffff',
      size: 'clamp(1.8rem, 4vw, 3.2rem)',
      weight: 600,
      lh: 1.2,
      ls: '-0.02em',
      mt: '0',
      mb: '64px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([value('01', 'Radical simplicity', 'If it needs a manual, we haven’t finished designing it.'), value('02', 'Privacy by default', 'Your data stays in the EU and is never sold. Ever.'), value('03', 'Customers first', 'Every feature starts with a real conversation with a real user.')], {
      cols: [3, 3, 1],
      gap: [48, 28, 36]
    })], {
      bg: INK,
      py: [110, 88, 64]
    })];
  }
}, {
  id: 'content-blog-cards',
  title: 'Latest Articles',
  category: 'content',
  desc: 'Three blog post cards with category, reading time and excerpt.',
  keywords: 'blog articles news posts latest',
  blocks: () => {
    const post = (photo, cat, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
      ratio: '16/10',
      radius: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(cat, {
      color: BLUE,
      size: '13px',
      weight: 600,
      mt: '18px',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(`<a href="#">${title}</a>`, {
      level: 3,
      color: INK,
      link: INK,
      size: '20px',
      weight: 700,
      lh: 1.35,
      mt: '0',
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
      color: MUTED,
      size: '15px',
      lh: 1.6,
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Blog', 'Insights from our team', null, {
      align: 'left',
      mb: '0'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('View all articles', {
      outline: true,
      color: INK
    })])], {
      tpl: ['1fr auto', '1fr', '1fr'],
      valign: 'end',
      gap: [24, 20, 20],
      mb: 40
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([post('1499750310107-5fef28a66643', 'Growth · 6 min read', '7 metrics every founder should check weekly', 'Skip vanity numbers — these are the signals that predict revenue.'), post('1517245386807-bb43f82c33c4', 'Product · 4 min read', 'How we ship features in two-week cycles', 'Our lightweight process for building fast without breaking things.'), post('1454165804606-c3d57bc86b40', 'Guides · 8 min read', 'A practical guide to GDPR-friendly analytics', 'Track what matters while respecting your visitors’ privacy.')], {
      cols: [3, 2, 1],
      gap: [28, 24, 32]
    })], {
      bg: SOFT
    })];
  }
},
// ================================================================== STATS
{
  id: 'stats-cards-light',
  title: 'Stats Cards',
  category: 'stats',
  desc: 'Four bordered stat cards with animated counters on a light background.',
  keywords: 'stats cards numbers metrics light',
  blocks: () => {
    const s = (n, suf, label, sub) => card([counter(n, suf, label, {
      align: 'left',
      size: 46,
      color: BLUE
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(sub, {
      color: MUTED,
      size: '14px',
      lh: 1.5,
      mt: '8px',
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Impact', 'Results our customers see', 'Average results after 6 months, based on 1,200 customer accounts.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([s(38, '%', 'More qualified leads', 'Thanks to smarter targeting.'), s(12, 'h', 'Saved every week', 'Reports build themselves.'), s(3, 'x', 'Faster decisions', 'Live data instead of exports.'), s(97, '%', 'Would recommend', 'Net promoter score of 72.')], {
      cols: [4, 2, 1],
      gap: [20, 20, 16]
    })], {
      bg: SOFT
    })];
  }
}, {
  id: 'stats-split-image',
  title: 'Stats with Image',
  category: 'stats',
  desc: 'Photo on one side, headline and a 2×2 grid of counters on the other.',
  keywords: 'stats image split numbers about',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1522202176988-66273c2fd55f', 1000), 'Workshop with clients', {
    ratio: '1/1',
    radius: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('By the numbers', 'Ten years of helping teams grow', 'We started with three people in a garage. Today we support companies in 48 countries.', {
    align: 'left',
    mb: '36px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(48, '', 'Countries', {
    align: 'left'
  }), counter(4200, '+', 'Customers', {
    align: 'left'
  }), counter(120, '+', 'Team members', {
    align: 'left'
  }), counter(99, '%', 'Uptime', {
    align: 'left'
  })], {
    cols: [2, 2, 2],
    gap: [32, 24, 16],
    rowGap: [32, 28, 24]
  })])], {
    tpl: ['1fr 1.1fr', '1fr', '1fr'],
    gap: [72, 48, 40],
    valign: 'center'
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'stats-progress-skills',
  title: 'Progress Bars',
  category: 'stats',
  desc: 'Expertise or results shown as animated progress bars next to a short intro.',
  keywords: 'progress bars skills expertise percentage',
  blocks: () => {
    const bar = (percentage, label) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/progress-tracker', {
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
      alignment: 'left'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Expertise', 'Skills that deliver results', 'A senior team with deep experience across strategy, design and engineering.', {
      align: 'left',
      mb: '28px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('See our process', {
      bg: INK,
      color: '#ffffff'
    })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([bar(95, 'UX & product design'), bar(90, 'WordPress development'), bar(85, 'SEO & performance'), bar(80, 'Brand strategy')], {
      gap: '22px'
    })], {
      tpl: ['1fr 1.2fr', '1fr', '1fr'],
      gap: [72, 40, 32],
      valign: 'center'
    })], {
      bg: '#ffffff'
    })];
  }
},
// ================================================================ PRICING
{
  id: 'pricing-tabs-billing',
  title: 'Monthly / Yearly Pricing',
  category: 'pricing',
  desc: 'Billing switch built with Zentro Tabs — monthly and yearly plans.',
  keywords: 'pricing monthly yearly annual toggle tabs',
  blocks: () => {
    const set = (mult, period) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([price('Basic', String(9 * mult), period, ['1 website', '5 GB storage', 'Email support']), price('Pro', String(29 * mult), period, ['10 websites', '50 GB storage', 'Priority support', 'Free domain'], {
      popular: true
    }), price('Agency', String(79 * mult), period, ['Unlimited websites', '500 GB storage', 'White-label', 'Phone support'])], {
      cols: [3, 1, 1],
      gap: [24, 20, 20],
      valign: 'center',
      py: [16, 12, 8]
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Pricing', 'Pick the plan that fits', 'Save 2 months with yearly billing.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
      label: 'Monthly',
      blocks: [set(1, '/month')]
    }, {
      label: 'Yearly (save 17%)',
      blocks: [set(10, '/year')]
    }], {
      color: BLUE,
      align: 'center'
    })], {
      bg: SOFT
    })];
  }
}, {
  id: 'pricing-two-plans-dark',
  title: 'Free vs Pro Pricing',
  category: 'pricing',
  desc: 'Two plans side by side on a dark background — ideal for freemium products.',
  keywords: 'pricing free pro two plans freemium dark',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Pricing', 'Start free. Upgrade when you grow.', 'No credit card required.', {
    color: '#ffffff',
    accent: '#60a5fa',
    muted: '#94a3b8'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([price('Free', '0', '/forever', ['3 projects', 'Basic analytics', 'Community support'], {
    cta: 'Start for free',
    bg: '#1e293b',
    text: '#e2e8f0',
    color: '#94a3b8'
  }), price('Pro', '19', '/month', ['Unlimited projects', 'Advanced analytics', 'Custom domain', 'Priority support'], {
    popular: true,
    badge: 'Best value',
    cta: 'Start 14-day trial',
    bg: '#1e293b',
    text: '#e2e8f0',
    color: '#60a5fa'
  })], {
    cols: [2, 2, 1],
    gap: [28, 20, 24],
    valign: 'center',
    className: 'gk-kit-narrow'
  })], {
    bg: INK
  })]
}, {
  id: 'pricing-comparison-table',
  title: 'Plan Comparison Table',
  category: 'pricing',
  desc: 'Detailed feature comparison table across plans, with CTA buttons.',
  keywords: 'pricing comparison table features plans compare',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Compare plans', 'Every feature, side by side', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Team members', '3', '15', 'Unlimited'], ['Dashboards', '10', 'Unlimited', 'Unlimited'], ['Data refresh', 'Daily', 'Every 5 min', 'Real-time'], ['Integrations', '20', '120+', '120+ & API'], ['SSO & audit log', '—', '—', '✓'], ['Support', 'Email', 'Priority chat', 'Dedicated manager'], ['<strong>Price</strong>', '<strong>€19/mo</strong>', '<strong>€49/mo</strong>', '<strong>€199/mo</strong>']], {
    head: ['Feature', 'Starter', 'Growth', 'Enterprise'],
    stripes: true,
    color: INK,
    size: '15px'
  })], {
    className: 'gk-kit-table-scroll'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start free trial', {
    bg: BLUE,
    color: '#ffffff'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Talk to sales', {
    outline: true,
    color: INK
  })], {
    justify: 'center',
    mt: '36px'
  })], {
    bg: '#ffffff'
  })]
},
// =========================================================== TESTIMONIALS
{
  id: 'testimonials-colored-grid',
  title: 'Colourful Review Cards',
  category: 'testimonials',
  desc: 'Three pastel review cards with ratings, quotes and customer photos.',
  keywords: 'testimonials reviews grid cards colorful',
  blocks: () => {
    const r = (bg, photo, name, role, text) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★', {
      color: '#f59e0b',
      size: '18px',
      mb: '14px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`“${text}”`, {
      color: INK,
      size: '17px',
      lh: 1.65,
      mb: '22px'
    }), avatarRow(photo, name, role)], {
      bg,
      bw: false,
      radius: '24px',
      pad: '30px'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Reviews', 'Don’t take our word for it', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([r('#fef3c7', '1494790108377-be9c29b29330', 'Hannah Lee', 'Owner, Bloom Café', 'Our online orders doubled within two months of launching the new site. Customers keep complimenting it.'), r('#e0f2fe', '1500648767791-00dcc994a43e', 'Daniel Costa', 'CEO, Fieldwork', 'Professional, fast and genuinely invested in our success. The best decision we made this year.'), r('#ede9fe', '1438761681033-6461ffad8d80', 'Olivia Brandt', 'Marketing Lead, Nordlys', 'Clear communication from day one and a result that looks even better than the mock-ups.')], {
      cols: [3, 1, 1],
      gap: [24, 20, 20]
    })], {
      bg: '#ffffff'
    })];
  }
}, {
  id: 'testimonial-big-quote',
  title: 'Featured Quote',
  category: 'testimonials',
  desc: 'One large centred customer quote with portrait — high-impact social proof.',
  keywords: 'testimonial quote single featured big',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('“', {
    align: 'center',
    color: BLUE,
    size: '96px',
    weight: 800,
    lh: 0.8,
    mb: '8px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('We cut our reporting time from two days to twenty minutes. It changed how our whole company makes decisions.', {
    align: 'center',
    color: INK,
    size: 'clamp(1.6rem, 3.4vw, 2.5rem)',
    weight: 600,
    lh: 1.3,
    ls: '-0.01em',
    mt: '0',
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573497019940-1c28c88b4f3e', 300), 'Rachel Kim', {
    ratio: '1/1',
    radius: '999px',
    mb: '14px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Rachel Kim</strong><br>COO, Meridian Logistics', {
    align: 'center',
    color: MUTED,
    size: '15px',
    lh: 1.6,
    mb: '0'
  })], {
    className: 'gk-kit-intro-center gk-kit-quote'
  })], {
    bg: '#eef2ff'
  })]
}, {
  id: 'testimonials-rating-split',
  title: 'Rating Summary + Reviews',
  category: 'testimonials',
  desc: 'Overall rating with platform scores next to two highlighted reviews.',
  keywords: 'rating reviews score google trustpilot summary',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Customer rating', {
    color: BLUE,
    size: '13px',
    weight: 700,
    upper: true,
    ls: '0.12em',
    mb: '12px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('4.9', {
    color: INK,
    size: '88px',
    weight: 800,
    lh: 1,
    mt: '0',
    mb: '4px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★', {
    color: '#f59e0b',
    size: '24px',
    mb: '8px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Based on 2,340 verified reviews', {
    color: MUTED,
    size: '15px',
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Google', '4.9 / 5'], ['Trustpilot', '4.8 / 5'], ['Capterra', '4.9 / 5']], {
    color: INK,
    size: '15px'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('“Setup was painless and support answered within minutes. Exactly what a small team needs.”', {
    color: INK,
    size: '17px',
    lh: 1.65,
    mb: '20px'
  }), avatarRow('1507003211169-0a1dd7228f2d', 'Martin Novak', 'Founder, Brightside')]), card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('“Beautiful, fast and easy to update ourselves. Our bounce rate dropped by 30%.”', {
    color: INK,
    size: '17px',
    lh: 1.65,
    mb: '20px'
  }), avatarRow('1544005313-94ddf0286df2', 'Clara Jensen', 'Director, Fjord Studio')])], {
    gap: '20px'
  })], {
    tpl: ['1fr 1.5fr', '1fr', '1fr'],
    gap: [64, 40, 32],
    valign: 'center'
  })], {
    bg: SOFT
  })]
},
// =================================================================== TEAM
{
  id: 'team-circle-dark',
  title: 'Team on Dark',
  category: 'team',
  desc: 'Circular team photos on a dark background with roles and socials.',
  keywords: 'team dark circle photos staff',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Leadership', 'The people steering the ship', null, {
    color: '#ffffff',
    accent: '#60a5fa'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/team-member-block', {
    members: [{
      name: 'Elena Fischer',
      role: 'CEO',
      bio: 'Scaled two SaaS companies past €50M ARR.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1580489944761-15a19d654956', 500),
      imageAlt: 'Elena Fischer',
      linkedinUrl: '#'
    }, {
      name: 'Omar Haddad',
      role: 'CTO',
      bio: 'Former principal engineer at a major cloud provider.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1519085360753-af0119f7cbe7', 500),
      imageAlt: 'Omar Haddad',
      linkedinUrl: '#'
    }, {
      name: 'Grace Liu',
      role: 'CPO',
      bio: 'Product leader focused on simple, humane software.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1534528741775-53994a69daeb', 500),
      imageAlt: 'Grace Liu',
      linkedinUrl: '#'
    }],
    columnsDesktop: 3,
    columnsTablet: 3,
    columnsMobile: 1,
    gap: 28,
    imageStyle: 'circle',
    alignment: 'center',
    bgColor: '#1e293b',
    textColor: '#ffffff',
    roleColor: '#60a5fa'
  })], {
    bg: INK
  })]
}, {
  id: 'team-founder-split',
  title: 'Meet the Founder',
  category: 'team',
  desc: 'Founder portrait with personal story, signature quote and social links.',
  keywords: 'founder owner personal story about me',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1560250097-0b93528c311a', 900), 'Thomas Berg, founder', {
    ratio: '4/5',
    radius: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Meet the founder', 'Hi, I’m Thomas.', null, {
    align: 'left',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('I started Berg & Co in 2011 with one simple promise: treat every client’s budget like it was my own. Fifteen years and 600 projects later, that promise still guides everything we do.', {
    color: '#475569',
    size: '17px',
    lh: 1.8,
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('“Great work comes from listening first and designing second.”', {
    color: INK,
    size: '20px',
    weight: 600,
    italic: true,
    lh: 1.5,
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['linkedin', 'x', 'instagram'], {
    color: INK,
    bg: '#e2e8f0'
  })])], {
    tpl: ['1fr 1.2fr', '1fr', '1fr'],
    gap: [72, 48, 40],
    valign: 'center'
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'team-photo-cards',
  title: 'Team Photo Cards',
  category: 'team',
  desc: 'Tall portrait cards with name, role and a short line about each person.',
  keywords: 'team portraits cards staff experts',
  blocks: () => {
    const m = (photo, name, role, line) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 700), name, {
      ratio: '3/4',
      radius: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(name, {
      level: 3,
      color: INK,
      size: '20px',
      weight: 700,
      mt: '18px',
      mb: '2px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(role, {
      color: BLUE,
      size: '14px',
      weight: 600,
      mb: '8px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(line, {
      color: MUTED,
      size: '14px',
      lh: 1.6,
      mb: '0'
    })], {
      pad: '12px'
    });
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Our team', 'Small team, big expertise', 'Every project gets a senior designer, developer and strategist.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([m('1544005313-94ddf0286df2', 'Nina Patel', 'Design Lead', 'Turns complex ideas into simple interfaces.'), m('1507003211169-0a1dd7228f2d', 'Jakob Meyer', 'Lead Developer', 'Writes fast, accessible, maintainable code.'), m('1573497019940-1c28c88b4f3e', 'Sophie Laurent', 'Strategist', 'Connects business goals with user needs.')], {
      cols: [3, 3, 1],
      gap: [24, 16, 24]
    })], {
      bg: SOFT
    })];
  }
},
// ==================================================================== FAQ
{
  id: 'faq-centered',
  title: 'Centred FAQ',
  category: 'faq',
  desc: 'Centred heading with a full-width accordion and contact link below.',
  keywords: 'faq centered accordion questions',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('FAQ', 'Frequently asked questions', 'Everything you need to know before getting started.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([accordion([['How long does a typical project take?', 'Most websites launch in 4–6 weeks. Larger projects with custom features take 8–12 weeks.'], ['Do you work with clients outside Germany?', 'Yes — about half of our clients are in other EU countries, the UK and North America.'], ['Can I update the website myself?', 'Absolutely. Every site is built with the WordPress block editor and we include a training session.'], ['What does maintenance cost?', 'Care plans start at €49/month and include updates, backups, security monitoring and small edits.']]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Still have questions? <a href="#">Contact our team →</a>', {
    align: 'center',
    color: MUTED,
    link: BLUE,
    size: '16px',
    mt: '28px',
    mb: '0'
  })], {
    className: 'gk-kit-intro-center'
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'faq-two-columns',
  title: 'Two-Column FAQ',
  category: 'faq',
  desc: 'Two accordions side by side to show more questions without long scrolling.',
  keywords: 'faq two columns accordion',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Help centre', 'Answers to common questions', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([accordion([['Is there a free trial?', '14 days, all features included, no credit card required.'], ['Can I cancel any time?', 'Yes, cancel with one click. No contracts or hidden fees.'], ['Do you offer refunds?', 'If you’re not happy within 30 days, we’ll refund you in full.']]), accordion([['Where is my data hosted?', 'In ISO 27001 certified data centres in Frankfurt, Germany.'], ['Is it GDPR compliant?', 'Yes. We sign a DPA with every customer and never sell data.'], ['Do you have an API?', 'A full REST API and webhooks are available on Growth plans and above.']])], {
    cols: [2, 2, 1],
    gap: [28, 20, 0],
    rowGap: [0, 0, 12]
  })], {
    bg: SOFT
  })]
}, {
  id: 'faq-tabs-categories',
  title: 'FAQ by Category (Tabs)',
  category: 'faq',
  desc: 'FAQ grouped into General, Billing and Technical tabs, each with an accordion.',
  keywords: 'faq tabs categories billing technical support',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Support', 'How can we help?', 'Browse questions by topic.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
    label: 'General',
    blocks: [accordion([['What is Pulse?', 'An analytics platform that turns your business data into live dashboards.'], ['Who is it for?', 'Startups and SMEs that want clear numbers without hiring a data team.'], ['Which languages are supported?', 'English, German, French and Spanish.']])]
  }, {
    label: 'Billing',
    blocks: [accordion([['Which payment methods do you accept?', 'Credit card, SEPA direct debit and invoice for yearly plans.'], ['Do prices include VAT?', 'Prices exclude VAT; it is added at checkout based on your country.'], ['Can I switch plans?', 'Yes, changes are prorated automatically.']])]
  }, {
    label: 'Technical',
    blocks: [accordion([['Is there an API?', 'Yes, a REST API with webhooks on Growth and Enterprise plans.'], ['Do you support SSO?', 'SAML SSO is included in Enterprise.'], ['What is your uptime?', '99.99% over the last 12 months — see our status page.']])]
  }], {
    color: BLUE,
    align: 'center'
  })], {
    bg: '#ffffff'
  })]
},
// ============================================================== PORTFOLIO
{
  id: 'portfolio-gallery',
  title: 'Photo Gallery Grid',
  category: 'portfolio',
  desc: 'Six-image responsive gallery for photographers, venues and studios.',
  keywords: 'gallery photos portfolio images grid',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Gallery', 'A glimpse of our recent work', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.gallery)([[(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600607687939-ce8a6c25118c', 900), 'Bright living room interior'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600566753190-17f0baa2a6c3', 900), 'Modern kitchen design'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1497366216548-37526070297c', 900), 'Open office space'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600210492486-724fe5c67fb0', 900), 'Minimal lounge'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1502005229762-cf1b2da7c5d6', 900), 'Calm bedroom'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1560185007-cde436f6a4d0', 900), 'Sunny reading corner']], {
    cols: 3,
    tab: 2,
    mob: 1,
    ratio: '1/1',
    radius: 16
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'portfolio-case-feature',
  title: 'Featured Project',
  category: 'portfolio',
  desc: 'Large project image with client, services and results in a facts table.',
  keywords: 'case study project featured client results',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1498050108023-c5249f4df085', 1200), 'Oakridge Bank web app', {
    ratio: '4/3',
    radius: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Featured project', 'Oakridge Bank: a banking app people actually enjoy', null, {
    align: 'left',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Client', 'Oakridge Bank'], ['Services', 'UX research, UI design, development'], ['Timeline', '14 weeks'], ['Result', '+46% mobile sign-ups']], {
    color: INK,
    size: '15px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Read the case study', {
    bg: INK,
    color: '#ffffff'
  })], {
    mt: '28px'
  })])], {
    tpl: ['1.2fr 1fr', '1fr', '1fr'],
    gap: [64, 40, 32],
    valign: 'center'
  })], {
    bg: SOFT
  })]
}, {
  id: 'portfolio-before-after',
  title: 'Before / After Showcase',
  category: 'portfolio',
  desc: 'Draggable before/after image slider with project story — great for renovation, design and beauty.',
  keywords: 'before after comparison renovation transformation',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Transformation', 'From dated to delightful in 6 weeks', 'Drag the slider to see how we transformed this 1970s kitchen into a bright family space.', {
    align: 'left',
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['Full layout redesign', 'Custom oak cabinetry', 'Energy-efficient lighting'], {
    color: INK,
    size: '16px',
    lh: 2
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start your project', {
    bg: INK,
    color: '#ffffff'
  })], {
    mt: '24px'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/image-comparison', {
    beforeImage: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1484154218962-a197022b5858', 1200),
    afterImage: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600566753190-17f0baa2a6c3', 1200),
    beforeLabel: 'Before',
    afterLabel: 'After',
    showLabels: true,
    sliderOffset: 50,
    handleColor: BLUE,
    height: 460
  })], {
    tpl: ['1fr 1.3fr', '1fr', '1fr'],
    gap: [56, 40, 32],
    valign: 'center'
  })], {
    bg: '#ffffff'
  })]
},
// ==================================================================== CTA
{
  id: 'cta-dark-split',
  title: 'Dark Split CTA',
  category: 'cta',
  desc: 'Dark call-to-action card with image, headline and two buttons.',
  keywords: 'cta dark split image signup',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Launch your new website this month', {
    color: '#ffffff',
    size: 'clamp(1.9rem, 3.8vw, 2.8rem)',
    weight: 700,
    lh: 1.15,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Book a 20-minute call. We’ll share a free plan, timeline and fixed price — no obligation.', {
    color: '#94a3b8',
    size: '18px',
    lh: 1.6,
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a call', {
    bg: '#ffffff',
    color: INK
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('See pricing', {
    outline: true,
    color: '#ffffff'
  })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1553877522-43269d4ea984', 900), 'Team in a bright office', {
    ratio: '4/3',
    radius: '20px'
  })], {
    tpl: ['1.1fr 1fr', '1fr', '1fr'],
    gap: [48, 32, 28],
    valign: 'center'
  })], {
    bg: INK,
    radius: 28,
    py: [56, 48, 32],
    px: [56, 40, 24]
  })], {
    bg: '#ffffff',
    py: [80, 64, 48]
  })]
}, {
  id: 'cta-cover-image',
  title: 'Image Background CTA',
  category: 'cta',
  desc: 'Full-width photo background with dark overlay and centred call to action.',
  keywords: 'cta cover image background full width',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1497366216548-37526070297c', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Ready to build something great together?', {
    align: 'center',
    color: '#ffffff',
    size: 'clamp(2rem, 4.6vw, 3.4rem)',
    weight: 700,
    lh: 1.12,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Tell us about your idea. We reply within one business day.', {
    align: 'center',
    color: '#e2e8f0',
    size: '19px',
    mb: '30px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start a project', {
    bg: '#ffffff',
    color: INK
  })], {
    justify: 'center'
  })], {
    align: 'full',
    minHeight: 480,
    overlay: '#0b1220',
    dim: 70,
    contentSize: '760px'
  })]
}, {
  id: 'cta-contact-strip',
  title: 'Contact Options CTA',
  category: 'cta',
  desc: 'Three contact cards (call, email, visit) with a headline — easy for visitors to reach you.',
  keywords: 'contact cta phone email address visit',
  blocks: () => {
    const c = (title, line, link) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 3,
      color: INK,
      size: '18px',
      weight: 700,
      mt: '0',
      mb: '6px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(line, {
      color: MUTED,
      size: '15px',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(link, {
      size: '16px',
      weight: 600,
      link: BLUE,
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Get in touch', 'Let’s talk about your project', 'Choose whatever works best for you.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([c('Call us', 'Mon–Fri, 9:00–18:00 CET', '<a href="tel:+493012345678">+49 30 1234 5678</a>'), c('Email us', 'We reply within 24 hours', '<a href="mailto:hello@example.com">hello@example.com</a>'), c('Visit us', 'Torstraße 1, 10119 Berlin', '<a href="#">Get directions →</a>')], {
      cols: [3, 3, 1],
      gap: [24, 16, 16]
    })], {
      bg: SOFT
    })];
  }
},
// ================================================================= FOOTER
{
  id: 'footer-simple-centered',
  title: 'Simple Centred Footer',
  category: 'footer',
  desc: 'Minimal centred footer with logo, links, social icons and copyright.',
  keywords: 'footer simple centered minimal',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Lumen', {
    align: 'center',
    color: INK,
    size: '26px',
    weight: 800,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Home</a>   ·   <a href="#">About</a>   ·   <a href="#">Services</a>   ·   <a href="#">Blog</a>   ·   <a href="#">Contact</a>', {
    align: 'center',
    color: MUTED,
    link: MUTED,
    size: '15px',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['facebook', 'instagram', 'linkedin', 'youtube'], {
    color: INK,
    bg: '#e2e8f0',
    justify: 'center'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Lumen Studio · <a href="#">Privacy</a> · <a href="#">Imprint</a>', {
    align: 'center',
    color: '#94a3b8',
    link: '#94a3b8',
    size: '14px',
    mt: '24px',
    mb: '0'
  })], {
    bg: SOFT,
    py: [56, 48, 40]
  })]
}, {
  id: 'footer-big-cta',
  title: 'Footer with Big CTA',
  category: 'footer',
  desc: 'Gradient footer that opens with a large call to action, then links and copyright.',
  keywords: 'footer cta big gradient links',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Have a project in mind? Let’s talk.', {
    color: '#ffffff',
    size: 'clamp(2rem, 4.6vw, 3.4rem)',
    weight: 700,
    lh: 1.1,
    mt: '0',
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('hello@studio.example →', {
    bg: '#ffffff',
    color: INK
  })])], {
    tpl: ['1.4fr auto', '1fr', '1fr'],
    gap: [40, 24, 24],
    valign: 'center',
    mb: 64
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([footerCol('Studio', ['About', 'Work', 'Careers'], '#cbd5e1'), footerCol('Services', ['Branding', 'Websites', 'Marketing'], '#cbd5e1'), footerCol('Follow', ['Instagram', 'LinkedIn', 'Dribbble'], '#cbd5e1'), footerCol('Office', ['Torstraße 1', '10119 Berlin', 'Germany'], '#cbd5e1')], {
    cols: [4, 4, 2],
    gap: [32, 24, 24]
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.separator)('rgba(255,255,255,0.15)'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Studio North. All rights reserved.', {
    color: '#94a3b8',
    size: '14px',
    mb: '0'
  })], {
    gradient: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)',
    py: [96, 72, 56],
    pb: [36, 32, 28]
  })]
}, {
  id: 'footer-light-newsletter',
  title: 'Light Footer with Newsletter',
  category: 'footer',
  desc: 'Light footer with brand, link columns and a newsletter call-out.',
  keywords: 'footer light newsletter subscribe links',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Greenleaf', {
    level: 3,
    color: '#14532d',
    size: '26px',
    weight: 800,
    mt: '0',
    mb: '12px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Organic groceries delivered across Berlin, plastic-free.', {
    color: MUTED,
    size: '15px',
    lh: 1.7,
    mb: '0'
  })]), footerCol('Shop', ['Vegetables', 'Fruit', 'Bakery', 'Gift boxes'], MUTED, INK), footerCol('Help', ['Delivery', 'Returns', 'FAQ', 'Contact'], MUTED, INK), card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Get 10% off your first order', {
    level: 4,
    color: INK,
    size: '17px',
    weight: 700,
    mt: '0',
    mb: '8px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Join 8,000+ subscribers for seasonal recipes and offers.', {
    color: MUTED,
    size: '14px',
    lh: 1.6,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Subscribe', {
    bg: '#16a34a',
    color: '#ffffff',
    pad: ['10px', '22px']
  })])], {
    bg: '#f0fdf4',
    bc: '#bbf7d0'
  })], {
    tpl: ['1.3fr 1fr 1fr 1.5fr', '1fr 1fr', '1fr'],
    gap: [40, 28, 28]
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.separator)('#e2e8f0'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Greenleaf GmbH · <a href="#">Privacy</a> · <a href="#">Terms</a>', {
    color: '#94a3b8',
    link: '#94a3b8',
    size: '14px',
    mb: '0'
  })], {
    bg: '#ffffff',
    py: [72, 56, 48],
    pb: [32, 28, 28]
  })]
}];

/***/ },

/***/ "./src/zentro-kit/patterns-showcase.js"
/*!*********************************************!*\
  !*** ./src/zentro-kit/patterns-showcase.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bentoStats: () => (/* binding */ bentoStats),
/* harmony export */   logoCards: () => (/* binding */ logoCards),
/* harmony export */   logoStrip: () => (/* binding */ logoStrip),
/* harmony export */   numberedList: () => (/* binding */ numberedList),
/* harmony export */   pill: () => (/* binding */ pill),
/* harmony export */   showcaseCategories: () => (/* binding */ showcaseCategories),
/* harmony export */   showcasePatterns: () => (/* binding */ showcasePatterns),
/* harmony export */   tint: () => (/* binding */ tint),
/* harmony export */   wordmark: () => (/* binding */ wordmark)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/**
 * Zentro Kit – showcase patterns: dark bento stats, client logo walls,
 * clean-energy hero and a numbered services list.
 *
 * Section builders are exported so the page templates can reuse them with a
 * different theme (light / dark) instead of duplicating markup.
 */


// Inline colour (native "highlight" rich-text format – survives editing).
const tint = (text, color) => `<mark style="background-color:rgba(0, 0, 0, 0);color:${color}" class="has-inline-color">${text}</mark>`;

// Small rounded "pill" eyebrow with a coloured dot.
const pill = (text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`${tint('●', o.dot || '#22c55e')}  ${text}`, {
  align: o.align || 'center',
  color: o.color || '#d4d4d8',
  bg: o.bg || 'rgba(255,255,255,0.06)',
  size: '13px',
  weight: 500,
  radius: '999px',
  pad: ['6px', '14px'],
  mb: o.mb || '20px',
  className: o.align === 'left' ? 'gk-kit-pill gk-kit-pill--left' : 'gk-kit-pill'
});

// ---------------------------------------------------------------------------
// Bento stats ("Why choose me")
// ---------------------------------------------------------------------------
const statCard = (value, label, t) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(value, {
  level: 3,
  color: t.ink,
  size: 'clamp(2.4rem, 4vw, 3.4rem)',
  weight: 300,
  lh: 1,
  ls: '-0.03em',
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(label, {
  color: t.muted,
  size: '15px',
  lh: 1.5,
  mb: '0'
})], {
  bg: t.card,
  pad: '28px',
  radius: '16px',
  bw: '1px',
  bc: t.line,
  className: 'gk-kit-bento-card'
});
const bentoStats = (o = {}) => {
  const t = {
    bg: '#0a0a0b',
    card: '#161618',
    line: 'rgba(255,255,255,0.06)',
    ink: '#fafafa',
    muted: '#a1a1aa',
    ...o.theme
  };
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([pill(o.eyebrow || 'Why I’m the best', {
    mb: '18px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(o.title || 'Why choose me', {
    align: 'center',
    color: t.ink,
    size: 'clamp(2.2rem, 4.6vw, 3.6rem)',
    weight: 400,
    lh: 1.1,
    ls: '-0.03em',
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(o.text || 'A practical, reliable approach focused on quality, clarity and long-term results.', {
    align: 'center',
    color: t.muted,
    size: '17px',
    lh: 1.6,
    mb: '0'
  })], {
    mb: '56px',
    className: 'gk-kit-intro-center'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(o.photo || '1534528741775-53994a69daeb', 900), o.photoAlt || 'Portrait of the designer', {
    radius: '16px',
    className: 'gk-kit-fill gk-kit-mono'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([statCard('10+', 'Years of hands-on design experience', t), statCard('95%', 'Average client feedback rate', t), statCard('75+', 'Projects delivered from concept to launch', t), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1544005313-94ddf0286df2', 120), 'Client', {
    ratio: '1/1',
    radius: '999px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1500648767791-00dcc994a43e', 120), 'Client', {
    ratio: '1/1',
    radius: '999px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1438761681033-6461ffad8d80', 120), 'Client', {
    ratio: '1/1',
    radius: '999px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('56+', {
    level: 3,
    color: '#0a0a0b',
    size: '28px',
    weight: 500,
    mt: '0',
    mb: '0'
  })], {
    row: true,
    nowrap: true,
    gap: '0',
    className: 'gk-kit-avatars'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Trusted clients</strong><br>Founders and teams trust me to deliver', {
    color: '#52525b',
    size: '15px',
    lh: 1.5,
    mb: '0'
  })], {
    bg: '#ffffff',
    pad: '28px',
    radius: '16px',
    className: 'gk-kit-bento-card'
  })], {
    cols: [2, 2, 1],
    gap: [16, 16, 12]
  })], {
    tpl: ['1fr 2fr', '1fr', '1fr'],
    gap: [16, 16, 12]
  })], {
    bg: t.bg,
    py: [110, 88, 64]
  });
};

// ---------------------------------------------------------------------------
// Client logo walls (fictional wordmarks – replace with real logos)
// ---------------------------------------------------------------------------
const WORDMARKS = [['NOVA', {
  weight: 900,
  ls: '0.08em'
}], ['Lumen', {
  weight: 700,
  italic: true,
  ls: '-0.02em'
}], ['ORBITAL', {
  weight: 800,
  italic: true,
  ls: '-0.03em'
}], ['kinetic', {
  weight: 500,
  ls: '-0.04em'
}], ['Vertex', {
  weight: 300,
  italic: true,
  ls: '0.02em'
}], ['HALO', {
  weight: 600,
  ls: '0.3em'
}]];
const wordmark = (i, color, size = '28px') => {
  const [name, st] = WORDMARKS[i % WORDMARKS.length];
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(name, {
    align: 'center',
    color,
    size,
    lh: 1,
    mb: '0',
    ...st
  });
};
const logoCards = (o = {}) => {
  const t = {
    bg: '#c9d1dc',
    card: '#ffffff',
    ink: '#0a0a0b',
    ...o.theme
  };
  const n = o.count || 5;
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(o.label || 'Some of my clients', {
    color: t.ink,
    size: '14px',
    weight: 800,
    upper: true,
    ls: '0.02em',
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(o.count2 || '100+ clients', {
    color: t.ink,
    size: '14px',
    weight: 800,
    upper: true,
    mb: '0'
  })], {
    row: true,
    justify: 'space-between',
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(Array.from({
    length: n
  }, (_, i) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([wordmark(i, t.ink)], {
    bg: t.card,
    radius: '14px',
    bw: t.line ? '1px' : undefined,
    bc: t.line,
    className: 'gk-kit-logo-card'
  })), {
    cols: [n, 3, 2],
    gap: [12, 12, 10]
  })], {
    bg: t.bg,
    py: o.py || [72, 64, 48]
  });
};
const logoStrip = (o = {}) => {
  const color = o.color || '#94a3b8';
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(o.label || 'Trusted by 2,000+ fast-growing teams worldwide', {
    align: 'center',
    color: o.labelColor || '#64748b',
    size: '14px',
    weight: 500,
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(WORDMARKS.map((_, i) => wordmark(i, color, '24px')), {
    cols: [6, 3, 2],
    gap: [32, 28, 24],
    rowGap: [24, 28, 24],
    valign: 'center'
  })], {
    bg: o.bg || '#ffffff',
    py: o.py || [56, 48, 40]
  });
};

// ---------------------------------------------------------------------------
// Numbered list of services / sectors
// ---------------------------------------------------------------------------
const numberedList = (items, o = {}) => {
  const t = {
    ink: '#0a0a0b',
    muted: '#71717a',
    line: '#d4d4d8',
    hl: '#e0f2fe',
    ...o.theme
  };
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(items.map((it, i) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(String(i + 1).padStart(2, '0'), {
    color: t.muted,
    size: '14px',
    mb: '0',
    className: 'gk-kit-num'
  }), ...(it.photo ? [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(it.photo, 200), it.title, {
    ratio: '1/1',
    radius: '4px'
  })] : []), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(it.title, {
    level: 3,
    color: t.ink,
    size: 'clamp(1.15rem, 2vw, 1.45rem)',
    weight: 500,
    lh: 1.25,
    mt: '0',
    mb: '6px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(it.text, {
    color: t.muted,
    size: '14px',
    lh: 1.55,
    mb: '0'
  })])], {
    row: true,
    nowrap: true,
    valign: 'top',
    gap: '20px',
    pad: ['22px', '16px'],
    bg: it.highlight ? t.hl : undefined,
    className: 'gk-kit-svc-row'
  })), {
    cols: [2, 2, 1],
    gap: [0, 0, 0],
    rowGap: [0, 0, 0]
  });
};
const ENERGY_SECTORS = [{
  title: 'Residential Communities',
  text: 'Clean, reliable electricity for homes and neighbourhoods.',
  photo: '1545324418-cc1a3fa10c00'
}, {
  title: 'Commercial Enterprises',
  text: 'Cost-effective, eco-friendly power for offices and retail.',
  photo: '1486406146926-c627a92ad1ab'
}, {
  title: 'Industrial Facilities',
  text: 'Powering manufacturing plants and large operations sustainably.',
  photo: '1581091226825-a6a2a5aee158'
}, {
  title: 'Agriculture',
  text: 'Helping farms run efficiently on renewable energy.',
  photo: '1500382017468-9049fed747ef'
}, {
  title: 'Public Infrastructure',
  text: 'Green energy for schools, hospitals and public buildings.',
  photo: '1541339907198-e08756dedf3f'
}, {
  title: 'Data Centers',
  text: 'Meeting the high energy demand of modern tech operations.',
  photo: '1558494949-ef010cbdcc31',
  highlight: true
}, {
  title: 'Transportation Hubs',
  text: 'Cutting the carbon footprint of airports, railways and ports.',
  photo: '1474487548417-781cb71495f3'
}];

// ---------------------------------------------------------------------------
// Patterns
// ---------------------------------------------------------------------------
const showcaseCategories = [{
  id: 'logos',
  label: 'Logos & Clients'
}];
const showcasePatterns = [
// ================================================================== STATS
{
  id: 'stats-bento-dark',
  title: 'Why Choose Me – Bento',
  category: 'stats',
  desc: 'Dark bento grid: portrait, three big stats and a trusted-clients card.',
  keywords: 'bento dark why choose me stats portfolio freelancer personal',
  blocks: () => [bentoStats()]
},
// ================================================================== LOGOS
{
  id: 'logos-client-cards',
  title: 'Client Logo Cards',
  category: 'logos',
  desc: 'Five white logo cards on a soft grey band with a client count.',
  keywords: 'logos clients brands partners trusted by cards',
  blocks: () => [logoCards()]
}, {
  id: 'logos-strip-minimal',
  title: 'Trusted-By Logo Strip',
  category: 'logos',
  desc: 'Minimal single-row logo strip for under a hero section.',
  keywords: 'logos strip trusted by brands minimal social proof',
  blocks: () => [logoStrip({
    bg: '#ffffff',
    py: [56, 48, 40]
  })]
}, {
  id: 'logos-dark-grid',
  title: 'Logo Grid on Dark',
  category: 'logos',
  desc: 'Bordered logo grid with a headline, on a dark background.',
  keywords: 'logos dark grid partners clients agency',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Partners', {
    color: '#a3e635',
    size: '13px',
    weight: 700,
    upper: true,
    ls: '0.12em',
    mb: '12px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Brands that grow with us, year after year', {
    color: '#fafafa',
    size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
    weight: 500,
    lh: 1.15,
    ls: '-0.02em',
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('From seed-stage startups to listed companies – 140+ teams rely on us for design and development.', {
    color: '#a1a1aa',
    size: '16px',
    lh: 1.7,
    mb: '0'
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(WORDMARKS.map((_, i) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([wordmark(i, '#e4e4e7', '24px')], {
    radius: '12px',
    bw: '1px',
    bc: 'rgba(255,255,255,0.1)',
    className: 'gk-kit-logo-card'
  })), {
    cols: [3, 3, 2],
    gap: [12, 12, 10]
  })], {
    tpl: ['1fr 1.4fr', '1fr', '1fr'],
    gap: [64, 40, 32],
    valign: 'center'
  })], {
    bg: '#0a0a0b',
    py: [96, 80, 64]
  })]
},
// =================================================================== HERO
{
  id: 'hero-energy-split',
  title: 'Clean Energy Hero',
  category: 'hero',
  desc: 'Bright split hero with big headline, two buttons, a project card and a large visual.',
  keywords: 'hero energy solar wind green eco sustainability split image',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Clean Energy, Sustainable Future', {
    level: 1,
    color: '#0a0a0b',
    size: 'clamp(2.6rem, 5.6vw, 4.6rem)',
    weight: 500,
    lh: 1.05,
    ls: '-0.035em',
    mt: '0',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('We install advanced wind turbines and solar parks that generate reliable, efficient and eco-friendly energy for a greener tomorrow.', {
    color: '#52525b',
    size: '17px',
    lh: 1.65,
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Contact us', {
    bg: '#0a0a0b',
    color: '#ffffff'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('About AeroVolt', {
    outline: true,
    color: '#0a0a0b'
  })], {
    mt: '32px',
    gap: '12px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1466611653911-95081537e5b7', 160), 'Wind farm project', {
    ratio: '1/1',
    radius: '10px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Discover our recent project ↗</a>', {
    color: '#0a0a0b',
    link: '#0a0a0b',
    size: '15px',
    weight: 500,
    lh: 1.4,
    mb: '0'
  })], {
    row: true,
    nowrap: true,
    gap: '14px',
    bg: '#e0f2fe',
    pad: '14px',
    radius: '14px',
    className: 'gk-kit-avatar-row'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('⚡', {
    size: '18px',
    mb: '0',
    className: 'gk-kit-icon'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>48 MW</strong><br>generated last year', {
    color: '#52525b',
    size: '13px',
    lh: 1.45,
    mb: '0'
  })], {
    row: true,
    nowrap: true,
    gap: '12px'
  })], {
    tpl: ['auto auto', 'auto auto', '1fr'],
    gap: [28, 24, 16],
    valign: 'center',
    mt: 56
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1532601224476-15c79f2f7a51', 1200), 'Wind turbines on green hills', {
    ratio: '4/5',
    radius: '28px'
  })], {
    tpl: ['1.05fr 1fr', '1fr', '1fr'],
    gap: [64, 48, 36],
    valign: 'center'
  })], {
    bg: '#ffffff',
    py: [96, 72, 48]
  })]
},
// =============================================================== FEATURES
{
  id: 'features-numbered-list',
  title: 'Numbered Services List',
  category: 'features',
  desc: 'Two-column numbered list with thumbnails, divider lines and a highlighted item.',
  keywords: 'services list numbered sectors industries energy thumbnails',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Our energy runs', {
    color: '#0a0a0b',
    size: 'clamp(2rem, 4vw, 3rem)',
    weight: 500,
    ls: '-0.03em',
    mt: '0',
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Contact us', {
    bg: '#0a0a0b',
    color: '#ffffff',
    pad: ['10px', '22px']
  })])], {
    row: true,
    justify: 'space-between',
    gap: '16px',
    mb: '40px'
  }), numberedList(ENERGY_SECTORS)], {
    bg: '#ffffff',
    py: [96, 80, 56]
  })]
}];

/***/ },

/***/ "./src/zentro-kit/patterns.js"
/*!************************************!*\
  !*** ./src/zentro-kit/patterns.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   patterns: () => (/* binding */ patterns)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/**
 * Zentro Kit – section patterns.
 *
 * Every pattern ships with realistic demo copy, images and styling, so a user
 * only has to replace the text and pictures.
 */

const BLUE = '#2563eb';
const INK = '#0f172a';
const MUTED = '#64748b';
const counter = (targetNumber, suffix, label, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/animated-counter', {
  targetNumber,
  suffix,
  prefix: o.prefix || '',
  label,
  numberColor: o.color || INK,
  labelColor: o.labelColor || MUTED,
  numberSize: o.size || 44,
  labelSize: 15,
  alignment: o.align || 'center',
  duration: 1800
});
const projectCard = (photo, title, text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo), title, {
  ratio: o.ratio || '4/3',
  radius: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  size: '22px',
  weight: 600,
  color: o.color || '#ffffff',
  mt: '20px',
  mb: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`${text} <a href="#">View Project →</a>`, {
  size: '15px',
  color: o.muted || '#a7c4b5',
  link: o.link || '#d9f99d',
  mb: '0'
})], {
  mb: '48px'
});
const serviceCard = (photo, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '4/3',
  radius: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  size: '20px',
  weight: 700,
  color: INK,
  mt: '20px',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  size: '15px',
  color: MUTED,
  lh: 1.6,
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Learn more →</a>', {
  size: '15px',
  weight: 600,
  link: BLUE,
  mb: '0'
})], {
  bg: '#ffffff',
  pad: ['14px', '14px', '24px'],
  radius: '20px',
  bw: '1px',
  bc: '#e2e8f0'
});
const categories = [{
  id: 'hero',
  label: 'Hero Headers'
}, {
  id: 'features',
  label: 'Features & Services'
}, {
  id: 'content',
  label: 'About & Content'
}, {
  id: 'stats',
  label: 'Stats & Counters'
}, {
  id: 'pricing',
  label: 'Pricing'
}, {
  id: 'testimonials',
  label: 'Testimonials'
}, {
  id: 'team',
  label: 'Team'
}, {
  id: 'faq',
  label: 'FAQ'
}, {
  id: 'portfolio',
  label: 'Portfolio'
}, {
  id: 'cta',
  label: 'Call to Action'
}, {
  id: 'footer',
  label: 'Footers'
}];
const patterns = [
// -------------------------------------------------------------------- HERO
{
  id: 'hero-saas-centered',
  title: 'SaaS Product Hero',
  category: 'hero',
  desc: 'Dark centred hero with headline, two CTAs, trust line and product screenshot.',
  keywords: 'saas startup software app dark',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('✦ New — AI reports are live', {
    outline: true,
    color: '#93c5fd',
    bc: 'rgba(147,197,253,0.4)',
    size: '13px',
    pad: ['6px', '16px']
  })], {
    justify: 'center',
    mb: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Turn your product data into decisions in minutes', {
    level: 1,
    align: 'center',
    color: '#ffffff',
    size: 'clamp(2.4rem, 5.5vw, 4rem)',
    weight: 800,
    lh: 1.08,
    ls: '-0.03em',
    mt: '0',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Pulse connects your tools, cleans your data and builds live dashboards your whole team understands — no SQL, no spreadsheets.', {
    align: 'center',
    color: '#94a3b8',
    size: '19px',
    lh: 1.7,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start free trial', {
    bg: BLUE,
    color: '#ffffff'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a demo', {
    outline: true,
    color: '#ffffff',
    bc: 'rgba(255,255,255,0.3)'
  })], {
    justify: 'center'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('No credit card required · 14-day free trial · Cancel anytime', {
    align: 'center',
    color: '#64748b',
    size: '14px',
    mt: '20px',
    mb: '56px'
  })], {
    className: 'gk-kit-intro-center'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1551288049-bebda4e38f71', 1600), 'Analytics dashboard preview', {
    ratio: '16/8',
    radius: '16px'
  })], {
    gradient: 'linear-gradient(180deg,#0b1220 0%,#111c34 100%)',
    py: [120, 96, 72]
  })]
}, {
  id: 'hero-split-coaching',
  title: 'Split Hero with Stats',
  category: 'hero',
  desc: 'Warm two-column hero for coaches, consultants and agencies with animated stats.',
  keywords: 'coach consultant personal brand agency split image',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Certified Life & Career Coach', {
    color: '#ea580c',
    size: '13px',
    weight: 700,
    ls: '0.12em',
    upper: true,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Transform your life with expert coaching', {
    level: 1,
    color: INK,
    size: 'clamp(2.3rem, 5vw, 3.6rem)',
    weight: 700,
    lh: 1.1,
    ls: '-0.02em',
    mt: '0',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Personalised one-to-one sessions that help you find clarity, build confidence and reach the goals you keep putting off.', {
    color: '#57534e',
    size: '18px',
    lh: 1.7,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a free call', {
    bg: INK,
    color: '#ffffff'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Explore programs', {
    outline: true,
    color: INK
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(12, 'k+', 'Sessions held', {
    align: 'left',
    size: 34
  }), counter(98, '%', 'Client satisfaction', {
    align: 'left',
    size: 34
  }), counter(15, '+', 'Years experience', {
    align: 'left',
    size: 34
  })], {
    cols: [3, 3, 3],
    gap: [24, 20, 12],
    mt: 40
  })]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573497019940-1c28c88b4f3e', 1000), 'Coach smiling in her studio', {
    ratio: '4/5',
    radius: '28px'
  })], {
    tpl: ['1.1fr 1fr', '1fr', '1fr'],
    gap: [64, 48, 40],
    valign: 'center'
  })], {
    bg: '#fdf8f1',
    py: [110, 88, 64]
  })]
}, {
  id: 'hero-cover-architecture',
  title: 'Full Image Hero',
  category: 'hero',
  desc: 'Full-width photo hero with dark overlay — ideal for architecture, real estate and hotels.',
  keywords: 'architecture real estate hotel image cover photo',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600585154340-be6161a56a0c', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Architecture · Interiors · Landscape', {
    color: '#d9f99d',
    size: '13px',
    weight: 700,
    ls: '0.14em',
    upper: true,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Spaces designed to <em>live</em> beautifully', {
    level: 1,
    color: '#ffffff',
    size: 'clamp(2.6rem, 6.5vw, 5rem)',
    weight: 600,
    lh: 1.05,
    ls: '-0.03em',
    mt: '0',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('We craft sustainable homes and workplaces that balance light, material and landscape.', {
    color: '#e2e8f0',
    size: '19px',
    lh: 1.6,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('View our projects', {
    bg: '#d9f99d',
    color: '#0b2a22'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a meeting', {
    outline: true,
    color: '#ffffff'
  })])], {
    align: 'full',
    minHeight: 680,
    overlay: '#06201a',
    dim: 60,
    position: 'bottom center',
    pad: ['96px', '24px']
  })]
},
// ---------------------------------------------------------------- FEATURES
{
  id: 'features-icon-cards',
  title: 'Feature Cards Grid',
  category: 'features',
  desc: 'Six icon cards with hover float effect to explain product benefits.',
  keywords: 'features benefits icons cards saas grid',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Why teams choose Pulse', 'Everything you need to ship faster', 'One platform for tracking, reporting and collaborating — built for growing teams.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/box-card-block', {
    cards: [{
      title: 'Launch in minutes',
      description: 'Connect 120+ tools with one click and see your first dashboard before your coffee cools.',
      iconType: 'icon',
      iconName: 'rocket',
      showBadge: false,
      cardLinkText: ''
    }, {
      title: 'Bank-grade security',
      description: 'SOC 2 Type II, SSO and encryption at rest keep your customer data locked down.',
      iconType: 'icon',
      iconName: 'shield',
      showBadge: false,
      cardLinkText: ''
    }, {
      title: 'Smart insights',
      description: 'AI spots trends and anomalies automatically and explains them in plain language.',
      iconType: 'icon',
      iconName: 'bulb',
      showBadge: true,
      badgeText: 'NEW',
      cardLinkText: ''
    }, {
      title: 'Loved by teams',
      description: 'Comment, share and present dashboards together — no more screenshot chains.',
      iconType: 'icon',
      iconName: 'heart',
      showBadge: false,
      cardLinkText: ''
    }, {
      title: 'Always accurate',
      description: 'Automatic data validation means every number on screen is one you can trust.',
      iconType: 'icon',
      iconName: 'check',
      showBadge: false,
      cardLinkText: ''
    }, {
      title: 'Premium support',
      description: 'Real humans reply in under 5 minutes, 24/7, in English, German and Spanish.',
      iconType: 'icon',
      iconName: 'star',
      showBadge: false,
      cardLinkText: ''
    }],
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
    borderRadius: 16
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'services-image-cards',
  title: 'Services with Images',
  category: 'features',
  desc: 'Heading row with button and three photo service cards with links.',
  keywords: 'services agency interior consulting image cards',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('What we do', 'Services built around your goals', 'From first sketch to final handover, one team takes care of every detail.', {
    align: 'left',
    mb: '0'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('All services →', {
    outline: true,
    color: INK
  })])], {
    tpl: ['1fr auto', '1fr', '1fr'],
    valign: 'end',
    gap: [32, 24, 24],
    mb: 48
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([serviceCard('1600607687939-ce8a6c25118c', 'Interior Design', 'Thoughtful layouts, materials and lighting that make every room feel effortless.'), serviceCard('1497366216548-37526070297c', 'Space Planning', 'We map how you live and work, then design spaces that flow naturally.'), serviceCard('1600566753190-17f0baa2a6c3', 'Renovation', 'Full project management, from permits and budgets to the final coat of paint.')], {
    cols: [3, 2, 1],
    gap: [28, 20, 20]
  })], {
    bg: '#f8fafc'
  })]
}, {
  id: 'features-tabs',
  title: 'Product Feature Tabs',
  category: 'features',
  desc: 'Centred heading with switchable tabs explaining each product module.',
  keywords: 'tabs product modules features',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Product tour', 'One workspace, every workflow', 'Switch between modules to see how Pulse fits the way your team already works.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
    label: 'Dashboards',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Dashboards everyone understands', {
      level: 3,
      color: INK,
      size: '26px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Drag-and-drop charts, live filters and scheduled email reports. Build a board for every team in minutes and share it with a single link.', {
      color: MUTED,
      size: '17px',
      lh: 1.7,
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Learn more', {
      bg: BLUE,
      color: '#ffffff'
    })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1551288049-bebda4e38f71', 900), 'Dashboards everyone understands', {
      ratio: '16/10',
      radius: '16px'
    })], {
      tpl: ['1fr 1.1fr', '1fr', '1fr'],
      gap: [40, 28, 24],
      valign: 'center',
      py: [8, 8, 4]
    })]
  }, {
    label: 'Automations',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Automations that run themselves', {
      level: 3,
      color: INK,
      size: '26px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Trigger Slack alerts when KPIs move, sync results to your CRM and refresh data every five minutes — without writing code.', {
      color: MUTED,
      size: '17px',
      lh: 1.7,
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Learn more', {
      bg: BLUE,
      color: '#ffffff'
    })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1460925895917-afdab827c52f', 900), 'Automations that run themselves', {
      ratio: '16/10',
      radius: '16px'
    })], {
      tpl: ['1fr 1.1fr', '1fr', '1fr'],
      gap: [40, 28, 24],
      valign: 'center',
      py: [8, 8, 4]
    })]
  }, {
    label: 'Collaboration',
    blocks: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Decide together, faster', {
      level: 3,
      color: INK,
      size: '26px',
      weight: 700,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Comment on any chart, mention teammates and keep decisions next to the data that drove them. Guest access is always free.', {
      color: MUTED,
      size: '17px',
      lh: 1.7,
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Learn more', {
      bg: BLUE,
      color: '#ffffff'
    })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1552664730-d307ca884978', 900), 'Decide together, faster', {
      ratio: '16/10',
      radius: '16px'
    })], {
      tpl: ['1fr 1.1fr', '1fr', '1fr'],
      gap: [40, 28, 24],
      valign: 'center',
      py: [8, 8, 4]
    })]
  }], {
    color: BLUE,
    align: 'center',
    radius: 10
  })], {
    bg: '#ffffff'
  })]
},
// ----------------------------------------------------------------- CONTENT
{
  id: 'about-split-stats',
  title: 'About Us with Counters',
  category: 'content',
  desc: 'Image and story side by side with animated counters and a CTA.',
  keywords: 'about story company counters image',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1552664730-d307ca884978', 1000), 'Our team in a workshop', {
    ratio: '4/5',
    radius: '24px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('About us', 'A small studio with a big obsession for detail', null, {
    align: 'left',
    mb: '20px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Founded in Berlin in 2012, we help ambitious brands turn complex ideas into simple, beautiful digital products.', {
    color: '#475569',
    size: '17px',
    lh: 1.75,
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Our team of 24 designers, engineers and strategists works as an extension of yours — transparent, fast and fully accountable.', {
    color: '#475569',
    size: '17px',
    lh: 1.75,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(240, '+', 'Projects delivered', {
    align: 'left',
    size: 36,
    color: BLUE
  }), counter(12, '', 'Years in business', {
    align: 'left',
    size: 36,
    color: BLUE
  }), counter(31, '', 'Design awards', {
    align: 'left',
    size: 36,
    color: BLUE
  })], {
    cols: [3, 3, 3],
    gap: [24, 20, 12],
    mb: 32
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Meet the team', {
    bg: INK,
    color: '#ffffff'
  })])])], {
    tpl: ['1fr 1.1fr', '1fr', '1fr'],
    gap: [72, 48, 40],
    valign: 'center'
  })], {
    bg: '#ffffff'
  })]
}, {
  id: 'process-timeline',
  title: 'Process Timeline',
  category: 'content',
  desc: 'Step-by-step timeline that explains how you work with clients.',
  keywords: 'process steps timeline roadmap how it works',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('How it works', 'From first call to launch in 6 weeks', 'A clear process with fixed milestones, so you always know what happens next.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/timeline-roadmap', {
    milestones: [{
      date: 'Week 1',
      title: 'Discovery call',
      content: 'We learn about your business, goals and audience, and agree on scope and budget.'
    }, {
      date: 'Week 2–3',
      title: 'Strategy & design',
      content: 'Wireframes and visual design for every key page, refined with two feedback rounds.'
    }, {
      date: 'Week 4–5',
      title: 'Build & test',
      content: 'Fast, accessible development with testing on every device and browser.'
    }, {
      date: 'Week 6',
      title: 'Launch & support',
      content: 'We go live, train your team and stay on hand for 30 days of free support.'
    }],
    timelineColor: BLUE,
    nodeBgColor: '#ffffff',
    textColor: INK,
    layout: 'vertical',
    animateOnScroll: true
  })], {
    bg: '#f8fafc'
  })]
},
// ------------------------------------------------------------------- STATS
{
  id: 'stats-dark-band',
  title: 'Dark Stats Band',
  category: 'stats',
  desc: 'Four large animated counters on a dark background.',
  keywords: 'stats numbers counters metrics dark',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Trusted worldwide', 'Numbers that speak for themselves', null, {
    color: '#ffffff',
    accent: '#60a5fa',
    mb: '56px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(99, '%', 'Platform uptime', {
    color: '#ffffff',
    labelColor: '#94a3b8',
    size: 52
  }), counter(15, 'M+', 'Reports generated', {
    color: '#60a5fa',
    labelColor: '#94a3b8',
    size: 52
  }), counter(4200, '+', 'Companies onboard', {
    color: '#ffffff',
    labelColor: '#94a3b8',
    size: 52
  }), counter(48, '', 'Countries served', {
    color: '#60a5fa',
    labelColor: '#94a3b8',
    size: 52
  })], {
    cols: [4, 2, 1],
    gap: [32, 32, 20],
    rowGap: [32, 40, 28]
  })], {
    bg: INK,
    py: [96, 80, 64]
  })]
},
// ----------------------------------------------------------------- PRICING
{
  id: 'pricing-three-tier',
  title: 'Three-Tier Pricing',
  category: 'pricing',
  desc: 'Three pricing plans with a highlighted most-popular tier.',
  keywords: 'pricing plans subscription tiers',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Pricing', 'Simple pricing that grows with you', 'Start free, upgrade when you need more. All plans include unlimited viewers.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
    planTitle: 'Starter',
    price: '19',
    currencySymbol: '€',
    billingPeriod: '/month',
    features: ['3 team members', '10 dashboards', 'Daily data refresh', 'Email support'],
    buttonLabel: 'Start free trial',
    primaryColor: INK,
    borderRadius: 16
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
    planTitle: 'Growth',
    price: '49',
    currencySymbol: '€',
    billingPeriod: '/month',
    features: ['15 team members', 'Unlimited dashboards', 'Refresh every 5 minutes', 'Slack & CRM automations', 'Priority chat support'],
    isPopular: true,
    badgeText: 'Most popular',
    buttonLabel: 'Start free trial',
    primaryColor: BLUE,
    borderRadius: 16
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
    planTitle: 'Enterprise',
    price: '199',
    currencySymbol: '€',
    billingPeriod: '/month',
    features: ['Unlimited members', 'SSO & audit logs', 'EU data residency', 'Dedicated success manager'],
    buttonLabel: 'Contact sales',
    primaryColor: INK,
    borderRadius: 16
  })], {
    cols: [3, 3, 1],
    gap: [28, 16, 24],
    valign: 'center'
  })], {
    bg: '#f8fafc'
  })]
},
// ------------------------------------------------------------ TESTIMONIALS
{
  id: 'testimonials-carousel',
  title: 'Testimonials Slider',
  category: 'testimonials',
  desc: 'Auto-playing client reviews with photos and star ratings.',
  keywords: 'testimonials reviews clients slider carousel',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Client stories', 'Loved by 4,000+ growing teams', null), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/testimonials-carousel', {
    testimonials: [{
      name: 'Sarah Jenkins',
      role: 'VP Growth, Northwind',
      feedback: 'We replaced three tools and a weekly reporting meeting with Pulse. Our team finally looks at the same numbers — and acts on them.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1494790108377-be9c29b29330', 200)
    }, {
      name: 'Marco Bianchi',
      role: 'Founder, Studio Lume',
      feedback: 'Setup took one afternoon. The automated Slack alerts alone saved us from two costly campaign mistakes in the first month.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1500648767791-00dcc994a43e', 200)
    }, {
      name: 'Anna Schmidt',
      role: 'Head of Ops, Kiehl & Co',
      feedback: 'EU hosting and SSO made legal sign-off easy. Support answered every question in minutes. Couldn’t recommend it more.',
      rating: 5,
      avatar: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1438761681033-6461ffad8d80', 200)
    }],
    autoplay: true,
    autoplaySpeed: 5000,
    showRatings: true,
    primaryColor: BLUE,
    textColor: INK,
    cardBgColor: '#ffffff'
  })], {
    bg: '#eef2ff'
  })]
},
// -------------------------------------------------------------------- TEAM
{
  id: 'team-grid',
  title: 'Team Members',
  category: 'team',
  desc: 'Four team member cards with photos, roles, bios and social links.',
  keywords: 'team staff people members',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Our people', 'Meet the team behind the work', 'Designers, engineers and strategists who care about every pixel.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/team-member-block', {
    members: [{
      name: 'Lena Weber',
      role: 'Founder & CEO',
      bio: 'Former product lead at a Berlin fintech, obsessed with simple design.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1544005313-94ddf0286df2', 600),
      imageAlt: 'Lena Weber',
      linkedinUrl: '#',
      twitterUrl: '#'
    }, {
      name: 'David Okafor',
      role: 'Head of Engineering',
      bio: 'Builds fast, accessible products and mentors our dev team.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1507003211169-0a1dd7228f2d', 600),
      imageAlt: 'David Okafor',
      linkedinUrl: '#',
      twitterUrl: '#'
    }, {
      name: 'Sofia Martín',
      role: 'Design Director',
      bio: 'Brand systems and UI design for 60+ companies across Europe.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1534528741775-53994a69daeb', 600),
      imageAlt: 'Sofia Martín',
      linkedinUrl: '#',
      twitterUrl: '#'
    }, {
      name: 'Tom Becker',
      role: 'Client Success',
      bio: 'Your first call and your fastest reply — always.',
      imageUrl: (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1472099645785-5658abf4ff4e', 600),
      imageAlt: 'Tom Becker',
      linkedinUrl: '#',
      twitterUrl: '#'
    }],
    columnsDesktop: 4,
    columnsTablet: 2,
    columnsMobile: 1,
    gap: 24,
    imageStyle: 'square',
    alignment: 'center',
    bgColor: '#ffffff',
    textColor: INK,
    roleColor: BLUE
  })], {
    bg: '#ffffff'
  })]
},
// --------------------------------------------------------------------- FAQ
{
  id: 'faq-split',
  title: 'FAQ with Contact',
  category: 'faq',
  desc: 'Questions in an accessible accordion next to a support call-out.',
  keywords: 'faq questions accordion support help',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('FAQ', 'Questions? We have answers.', 'Can’t find what you’re looking for? Our team replies within one business hour.', {
    align: 'left',
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Contact support', {
    bg: BLUE,
    color: '#ffffff'
  })])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
    panels: [{
      title: 'Is there a free trial?',
      content: 'Yes. Every plan includes a 14-day free trial with all features unlocked. No credit card needed.'
    }, {
      title: 'Where is my data stored?',
      content: 'All data is hosted in Frankfurt (EU) and never leaves the European Union. We are fully GDPR compliant.'
    }, {
      title: 'Can I change plans later?',
      content: 'Absolutely. Upgrade or downgrade any time from your account settings; we prorate the difference automatically.'
    }, {
      title: 'Do you offer discounts for non-profits?',
      content: 'Registered non-profits and schools get 50% off any plan. Contact us with proof of status.'
    }, {
      title: 'How do I cancel?',
      content: 'Cancel with one click in your billing settings. You keep access until the end of your billing period.'
    }],
    activeColor: BLUE,
    titleBgColor: '#f8fafc',
    contentBgColor: '#ffffff',
    borderRadius: 12,
    allowMultiple: false
  })], {
    tpl: ['1fr 1.4fr', '1fr', '1fr'],
    gap: [64, 40, 32]
  })], {
    bg: '#ffffff'
  })]
},
// --------------------------------------------------------------- PORTFOLIO
{
  id: 'portfolio-staggered',
  title: 'Staggered Project Grid',
  category: 'portfolio',
  desc: 'Two-column offset project gallery for studios, architects and photographers.',
  keywords: 'portfolio projects gallery architecture works',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Selected works', 'Projects we’re proud of', null, {
    align: 'left',
    color: '#ffffff',
    accent: '#d9f99d',
    mb: '56px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([projectCard('1600596542815-ffad4c1539a9', 'Verdant Curve Residence', 'Hillside family home, 2025.'), projectCard('1512917774080-9991f1c4c750', 'Cascade House', 'Pool villa with garden terraces.')]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([projectCard('1613490493576-7fde63acd811', 'Horizon Block', 'Modern urban living, 18 units.'), projectCard('1580587771525-78b9dba3b914', 'Canopy House', 'Timber retreat in the forest.')], {
    className: 'gk-kit-offset'
  })], {
    cols: [2, 2, 1],
    gap: [48, 28, 0],
    rowGap: [0, 0, 0]
  })], {
    bg: '#0b2a22'
  })]
},
// --------------------------------------------------------------------- CTA
{
  id: 'cta-gradient-card',
  title: 'Gradient CTA Card',
  category: 'cta',
  desc: 'Rounded gradient call-to-action box with headline and two buttons.',
  keywords: 'cta call to action signup banner gradient',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Ready to see your data clearly?', {
    align: 'center',
    color: '#ffffff',
    size: 'clamp(1.9rem, 4vw, 2.9rem)',
    weight: 700,
    lh: 1.15,
    mt: '0',
    mb: '16px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Join 4,000+ teams who make faster decisions with Pulse. Set up in minutes, cancel any time.', {
    align: 'center',
    color: '#dbeafe',
    size: '18px',
    lh: 1.6,
    mb: '32px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start free trial', {
    bg: '#ffffff',
    color: BLUE
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Talk to sales', {
    outline: true,
    color: '#ffffff'
  })], {
    justify: 'center'
  })], {
    className: 'gk-kit-intro-center'
  })], {
    gradient: 'linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)',
    radius: 28,
    py: [72, 64, 48],
    px: [48, 40, 24]
  })], {
    bg: '#ffffff',
    py: [80, 64, 48]
  })]
}, {
  id: 'cta-banner-simple',
  title: 'Newsletter CTA Banner',
  category: 'cta',
  desc: 'Inline Zentro CTA banner for sign-ups or lead magnets.',
  keywords: 'cta banner newsletter lead inline',
  blocks: () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/cta-banner-block', {
    headline: 'Get our free 2027 web design checklist',
    subtext: '42 points every agency checks before launch — accessibility, GDPR, speed and SEO.',
    buttonLabel: 'Download free',
    bgColor: '#fff7ed',
    textColor: '#7c2d12',
    btnBgColor: '#ea580c',
    btnTextColor: '#ffffff',
    alignment: 'left',
    layout: 'inline',
    paddingV: 48,
    borderRadius: 20
  })], {
    bg: '#ffffff',
    py: [64, 56, 40]
  })]
},
// ------------------------------------------------------------------ FOOTER
{
  id: 'footer-mega',
  title: 'Mega Footer',
  category: 'footer',
  desc: 'Dark footer with brand, link columns, contact details and socials.',
  keywords: 'footer links contact bottom',
  blocks: () => {
    const col = (title, links) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
      level: 4,
      color: '#ffffff',
      size: '15px',
      weight: 600,
      mt: '0',
      mb: '16px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(links.map(l => `<a href="#">${l}</a>`).join('<br>'), {
      color: '#94a3b8',
      link: '#94a3b8',
      size: '15px',
      lh: 2.1,
      mb: '0'
    })]);
    return [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Pulse', {
      level: 3,
      color: '#ffffff',
      size: '26px',
      weight: 800,
      mt: '0',
      mb: '12px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Live dashboards and reporting for modern teams. Hosted in the EU.', {
      color: '#94a3b8',
      size: '15px',
      lh: 1.7,
      mb: '20px'
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['linkedin', 'x', 'instagram', 'youtube'])]), col('Product', ['Features', 'Integrations', 'Pricing', 'Changelog']), col('Company', ['About', 'Careers', 'Blog', 'Press']), col('Contact', ['hello@pulse.example', '+49 30 1234 5678', 'Berlin, Germany'])], {
      tpl: ['1.6fr 1fr 1fr 1fr', '1fr 1fr', '1fr'],
      gap: [40, 32, 32]
    }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.separator)('#1e293b'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Pulse GmbH. All rights reserved. · <a href="#">Privacy</a> · <a href="#">Imprint</a>', {
      color: '#64748b',
      link: '#94a3b8',
      size: '14px',
      mb: '0'
    })], {
      bg: INK,
      py: [80, 64, 48],
      pb: [40, 32, 32]
    })];
  }
}];

/***/ },

/***/ "./src/zentro-kit/templates-extra.js"
/*!*******************************************!*\
  !*** ./src/zentro-kit/templates-extra.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extraTemplates: () => (/* binding */ extraTemplates),
/* harmony export */   footerCol: () => (/* binding */ footerCol),
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/* harmony import */ var _patterns_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns-showcase */ "./src/zentro-kit/patterns-showcase.js");
/**
 * Zentro Kit – extra page templates: clinic SaaS landing page and a dark
 * personal portfolio.
 */



// Shared header bar: brand · nav links · actions.
const header = (brand, links, actions, t) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(brand, {
  level: 3,
  color: t.ink,
  size: '22px',
  weight: 700,
  ls: '-0.02em',
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(links.map(l => `<a href="#">${l}</a>`).join('&nbsp;&nbsp;&nbsp;&nbsp; '), {
  align: 'center',
  color: t.muted,
  link: t.muted,
  size: '15px',
  weight: 500,
  mb: '0',
  className: 'gk-kit-nav'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)(actions, {
  justify: 'right',
  gap: '8px'
})], {
  tpl: ['auto 1fr auto', 'auto 1fr auto', '1fr auto'],
  gap: [24, 16, 12],
  valign: 'center'
})], {
  bg: t.bg,
  gradient: t.gradient,
  py: [20, 18, 14]
});
const footerCol = (title, links, t) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 4,
  color: t.ink,
  size: '15px',
  weight: 600,
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(links.map(l => `<a href="#">${l}</a>`).join('<br>'), {
  color: t.muted,
  link: t.muted,
  size: '15px',
  lh: 2.1,
  mb: '0'
})]);

// ===========================================================================
// 1. Clinic SaaS landing page (Clinova)
// ===========================================================================
const S = {
  ink: '#18181b',
  muted: '#52525b',
  violet: '#7c3aed',
  lav: '#f5f3ff',
  line: '#e4e4e7'
};
const sBtn = (t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  bg: S.ink,
  color: '#ffffff',
  ...o
});
const sCard = (children, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)(children, {
  bg: '#ffffff',
  pad: o.pad || '28px',
  radius: '20px',
  bw: '1px',
  bc: S.line,
  className: o.className
});
const stepCard = (photo, title, text, items) => sCard([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '16/10',
  radius: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: S.ink,
  size: '19px',
  weight: 600,
  mt: '22px',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  color: S.muted,
  size: '15px',
  lh: 1.6,
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(items, {
  color: S.muted,
  size: '14px',
  lh: 1.9
})], {
  pad: '14px 14px 22px'
});
const featureCard = (icon, title, text) => sCard([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(icon, {
  size: '20px',
  mb: '20px',
  className: 'gk-kit-icon'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: S.ink,
  size: '18px',
  weight: 600,
  mt: '0',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  color: S.muted,
  size: '15px',
  lh: 1.6,
  mb: '0'
})]);
const sCounter = (targetNumber, suffix, label, prefix = '') => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/animated-counter', {
  targetNumber,
  suffix,
  prefix,
  label,
  numberColor: '#ffffff',
  labelColor: '#ddd6fe',
  numberSize: 42,
  labelSize: 15,
  alignment: 'center',
  duration: 1800
});
const sPrice = (planTitle, price, features, popular = false) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
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
  borderRadius: 20
});
const review = (photo, name, role, text) => sCard([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★', {
  color: '#f59e0b',
  size: '16px',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`“${text}”`, {
  color: S.ink,
  size: '16px',
  lh: 1.7,
  mb: '22px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 160), name, {
  ratio: '1/1',
  radius: '999px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`<strong>${name}</strong><br>${role}`, {
  color: S.muted,
  size: '14px',
  lh: 1.5,
  mb: '0'
})], {
  row: true,
  nowrap: true,
  gap: '12px',
  className: 'gk-kit-avatar-row'
})]);
const clinic = () => [header('Clinova', ['Features', 'Pricing', 'Integrations', 'Resources'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Log in', {
  outline: true,
  color: S.ink,
  bc: S.line,
  pad: ['10px', '18px'],
  size: '14px'
}), sBtn('Start free', {
  pad: ['10px', '18px'],
  size: '14px'
})], {
  ink: S.ink,
  muted: S.muted,
  gradient: 'linear-gradient(180deg,#ede9fe 0%,#f5f3ff 100%)'
}),
// Hero
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('All-in-one clinic platform · 2026', {
  dot: S.violet,
  color: S.muted,
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(`Automate &amp; scale your clinic with ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('Clinova', S.violet)}`, {
  level: 1,
  align: 'center',
  color: S.ink,
  size: 'clamp(2.4rem, 5.4vw, 4.2rem)',
  weight: 600,
  lh: 1.08,
  ls: '-0.035em',
  mt: '0',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Online booking, patient records, payments and reminders in one secure platform – so your team spends less time on admin and more time with patients.', {
  align: 'center',
  color: S.muted,
  size: '18px',
  lh: 1.65,
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start free trial', {
  bg: S.violet,
  color: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Watch 2-min demo', {
  outline: true,
  color: S.ink,
  bc: '#d4d4d8'
})], {
  justify: 'center',
  mt: '32px',
  gap: '12px'
})], {
  mb: '56px',
  className: 'gk-kit-intro-center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1551288049-bebda4e38f71', 1600), 'Clinova dashboard with appointments and revenue', {
  ratio: '16/9',
  radius: '14px'
})], {
  className: 'gk-kit-frame'
})], {
  gradient: 'linear-gradient(180deg,#f5f3ff 0%,#faf5ff 55%,#ffffff 100%)',
  py: [72, 64, 48]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Trusted by 1,200+ clinics and medical practices',
  bg: '#ffffff',
  py: [40, 40, 32]
}),
// How it works
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('How it works', 'From setup to first appointment in minutes', 'Clinova is fully cloud-based – no installation, no IT team, no long onboarding.', {
  align: 'left',
  accent: S.violet,
  color: S.ink,
  muted: S.muted,
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([sBtn('Get started for free')], {
  justify: 'right'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [32, 24, 24],
  valign: 'end',
  mb: 48
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([stepCard('1576091160550-2173dba999ef', 'Instant profile builder', 'Launch your clinic profile in minutes.', ['Drag-and-drop setup', 'Google-ready booking page', 'Multi-location support']), stepCard('1551288049-bebda4e38f71', 'Smart booking engine', '24/7 online scheduling for every doctor.', ['Google &amp; Outlook calendar sync', 'Automatic SMS reminders', 'Telehealth links included']), stepCard('1579684385127-1ef15d508118', 'Secure payments', 'Get paid upfront or after the visit.', ['Cards, wallets and invoices', 'Deposits for no-show protection', 'Multi-currency payouts'])], {
  cols: [3, 2, 1],
  gap: [24, 20, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}),
// Features
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Clinic management', 'Everything your clinic needs to operate at scale', 'One platform for front desk, doctors and management – with HIPAA- and GDPR-ready security built in.', {
  accent: S.violet,
  color: S.ink,
  muted: S.muted
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([featureCard('🗂️', 'Patient records', 'Digital patient files with history, prescriptions and attachments in one place.'), featureCard('📊', 'Analytics dashboard', 'Track appointments, revenue and no-show rates with clear, real-time reports.'), featureCard('🩺', 'Staff &amp; doctor management', 'Shifts, rooms and permissions for every team member and location.'), featureCard('💬', 'Secure messaging', 'Encrypted chat and file sharing between patients and your care team.'), featureCard('🧾', 'Billing &amp; invoicing', 'Automatic invoices, insurance codes and payment tracking.'), featureCard('⭐', 'Reviews &amp; reputation', 'Ask happy patients for reviews automatically after every visit.')], {
  cols: [3, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#fafafa',
  py: [96, 80, 56]
}),
// Stats band
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([sCounter(1200, '+', 'Clinics on Clinova'), sCounter(2, 'M+', 'Appointments booked'), sCounter(38, '%', 'Fewer no-shows'), sCounter(12, 'h', 'Admin time saved / week')], {
  cols: [4, 2, 2],
  gap: [24, 32, 24]
})], {
  gradient: 'linear-gradient(135deg,#6d28d9 0%,#7c3aed 50%,#a855f7 100%)',
  py: [72, 64, 48]
}),
// Pricing
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Pricing', 'Simple plans that grow with your practice', '14-day free trial on every plan. No credit card required.', {
  accent: S.violet,
  color: S.ink,
  muted: S.muted
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([sPrice('Starter', '49', ['1 practitioner', 'Online booking page', 'Email reminders', 'Basic reports']), sPrice('Growth', '129', ['Up to 10 practitioners', 'SMS reminders &amp; deposits', 'Patient records &amp; messaging', 'Advanced analytics'], true), sPrice('Enterprise', '349', ['Unlimited practitioners', 'Multi-location management', 'SSO &amp; audit logs', 'Dedicated success manager'])], {
  cols: [3, 1, 1],
  gap: [24, 20, 20],
  className: 'gk-kit-pricing'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}),
// Reviews
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('Loved by clinics', 'Teams switch to Clinova and never look back', '', {
  accent: S.violet,
  color: S.ink,
  muted: S.muted
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([review('1612349317150-e413f6a5b16d', 'Dr. Sarah Lindqvist', 'Owner, Nordic Dental', 'No-shows dropped by a third in the first month. Patients love booking online at night.'), review('1560250097-0b93528c311a', 'Marcus Bell', 'Practice manager, Bell Physio', 'We replaced four tools with Clinova. Setup took one afternoon, support is fantastic.'), review('1544005313-94ddf0286df2', 'Dr. Amira Haddad', 'Dermatologist, SkinLab', 'The reports finally show which services are profitable. Worth every cent.')], {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: S.lav,
  py: [96, 80, 56]
}),
// FAQ
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)('FAQ', 'Questions, answered', '', {
  accent: S.violet,
  color: S.ink,
  muted: S.muted
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
  panels: [{
    title: 'Is patient data secure?',
    content: 'Yes. All data is encrypted in transit and at rest, hosted in EU or US data centres of your choice, and access is fully logged.'
  }, {
    title: 'Can I import data from my current software?',
    content: 'Our team migrates patients, appointments and records for free on Growth and Enterprise plans.'
  }, {
    title: 'Do patients need to download an app?',
    content: 'No. Patients book through your website or a shareable link on any device.'
  }, {
    title: 'Can I cancel anytime?',
    content: 'Yes. Plans are monthly, and you can export all your data at any time.'
  }],
  activeColor: S.violet,
  titleBgColor: '#fafafa',
  contentBgColor: '#ffffff',
  borderRadius: 12,
  allowMultiple: false
})], {
  className: 'gk-kit-intro-center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}),
// CTA
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Ready to run a calmer clinic?', {
  align: 'center',
  color: '#ffffff',
  size: 'clamp(2rem, 4vw, 3rem)',
  weight: 600,
  lh: 1.15,
  ls: '-0.02em',
  mt: '0',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Start your 14-day free trial today. Setup takes less than 10 minutes.', {
  align: 'center',
  color: '#ede9fe',
  size: '17px',
  lh: 1.6,
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start free trial', {
  bg: '#ffffff',
  color: S.violet
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Talk to sales', {
  outline: true,
  color: '#ffffff'
})], {
  justify: 'center',
  mt: '28px',
  gap: '12px'
})], {
  gradient: 'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)',
  pad: ['64px', '28px'],
  radius: '28px'
})], {
  bg: '#ffffff',
  py: [24, 24, 16],
  pb: [96, 80, 56]
}),
// Footer
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Clinova', {
  level: 3,
  color: S.ink,
  size: '22px',
  weight: 700,
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('The all-in-one platform for modern clinics and medical practices.', {
  color: S.muted,
  size: '15px',
  lh: 1.7,
  mb: '0'
})]), footerCol('Product', ['Features', 'Pricing', 'Integrations', 'Security'], S), footerCol('Company', ['About', 'Careers', 'Blog', 'Contact'], S), footerCol('Legal', ['Privacy', 'Terms', 'Imprint', 'DPA'], S)], {
  tpl: ['2fr 1fr 1fr 1fr', '1fr 1fr', '1fr 1fr'],
  gap: [40, 32, 28]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Clinova. All rights reserved.', {
  color: '#a1a1aa',
  size: '14px',
  mt: '48px',
  mb: '0'
})], {
  bg: '#fafafa',
  py: [72, 64, 48]
})];

// ===========================================================================
// 2. Dark personal portfolio (Mara Voss)
// ===========================================================================
const D = {
  bg: '#0a0a0b',
  card: '#161618',
  ink: '#fafafa',
  muted: '#a1a1aa',
  line: 'rgba(255,255,255,0.08)',
  lime: '#a3e635'
};
const dIntro = (e, t, x, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(e, t, x, {
  accent: D.lime,
  color: D.ink,
  muted: D.muted,
  ...o
});
const work = (photo, title, tags, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), title, {
  ratio: o.ratio || '4/3',
  radius: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: D.ink,
  size: '20px',
  weight: 500,
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(tags, {
  color: D.muted,
  size: '14px',
  mb: '0'
})], {
  row: true,
  justify: 'space-between',
  mt: '18px',
  gap: '8px'
})], {
  className: o.className
});
const step = (n, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(n, {
  color: D.lime,
  size: '14px',
  weight: 600,
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: D.ink,
  size: '20px',
  weight: 500,
  mt: '0',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  color: D.muted,
  size: '15px',
  lh: 1.6,
  mb: '0'
})], {
  bg: D.card,
  pad: '28px',
  radius: '16px',
  bw: '1px',
  bc: D.line
});
const quote = (photo, name, role, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`“${text}”`, {
  color: D.ink,
  size: 'clamp(1.1rem, 1.8vw, 1.35rem)',
  lh: 1.6,
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 160), name, {
  ratio: '1/1',
  radius: '999px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`<strong>${name}</strong><br>${role}`, {
  color: D.muted,
  size: '14px',
  lh: 1.5,
  mb: '0'
})], {
  row: true,
  nowrap: true,
  gap: '12px',
  className: 'gk-kit-avatar-row'
})], {
  bg: D.card,
  pad: '32px',
  radius: '16px',
  bw: '1px',
  bc: D.line
});
const portfolio = () => [header('Mara Voss', ['Work', 'Services', 'About', 'Contact'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Let’s talk', {
  bg: D.ink,
  color: D.bg,
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: D.ink,
  muted: D.muted,
  bg: D.bg
}),
// Hero
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('Available for new projects', {
  align: 'left'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(`Product designer crafting ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('calm, clear', D.lime)} digital experiences.`, {
  level: 1,
  color: D.ink,
  size: 'clamp(2.5rem, 5.4vw, 4.4rem)',
  weight: 400,
  lh: 1.06,
  ls: '-0.035em',
  mt: '0',
  mb: '22px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('I help startups and growing brands turn complex ideas into simple, beautiful products – from first sketch to launch.', {
  color: D.muted,
  size: '18px',
  lh: 1.65,
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('View my work', {
  bg: D.lime,
  color: D.bg
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Download CV', {
  outline: true,
  color: D.ink,
  bc: 'rgba(255,255,255,0.25)'
})], {
  mt: '32px',
  gap: '12px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1488426862026-3ee34a7d66df', 1000), 'Portrait of Mara Voss', {
  ratio: '4/5',
  radius: '20px',
  className: 'gk-kit-mono'
})], {
  tpl: ['1.25fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 36],
  valign: 'center'
})], {
  bg: D.bg,
  py: [80, 64, 40]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoCards)({
  label: 'Some of my clients',
  count2: '100+ clients',
  theme: {
    bg: D.bg,
    card: D.card,
    ink: '#e4e4e7',
    line: D.line
  },
  py: [24, 24, 16]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.bentoStats)({
  photo: '1534528741775-53994a69daeb',
  photoAlt: 'Mara Voss in her studio'
}),
// Services
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([dIntro('Services', 'What I can do for you', '', {
  align: 'left'
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.numberedList)([{
  title: 'Product &amp; UX design',
  text: 'Research, flows and wireframes that make complex products feel simple.'
}, {
  title: 'UI &amp; design systems',
  text: 'Scalable component libraries in Figma, ready for developers.'
}, {
  title: 'Brand identity',
  text: 'Logos, typography and colour systems with a clear story.',
  highlight: true
}, {
  title: 'Websites &amp; landing pages',
  text: 'High-converting marketing sites built for speed and SEO.'
}], {
  theme: {
    ink: D.ink,
    muted: D.muted,
    hl: '#1c1f14'
  }
})], {
  bg: D.bg,
  py: [96, 80, 56]
}),
// Selected work
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([dIntro('Selected work', 'Recent projects', '', {
  align: 'left',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('All projects', {
  outline: true,
  color: D.ink,
  bc: 'rgba(255,255,255,0.25)'
})], {
  justify: 'right'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 20],
  valign: 'end',
  mb: 48
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([work('1561070791-2526d30994b5', 'Fluxo – fintech app', 'Product · UI'), work('1626785774573-4b799315345d', 'Mellow – brand identity', 'Branding', {
  className: 'gk-kit-offset'
}), work('1586717791821-3f44a563fa4c', 'Routa – travel planner', 'UX · Mobile'), work('1609921212029-bb5a28e60960', 'Bloom – packaging', 'Packaging · Print', {
  className: 'gk-kit-offset'
})], {
  cols: [2, 2, 1],
  gap: [32, 24, 32]
})], {
  bg: D.bg,
  py: [96, 80, 56]
}),
// Process
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([dIntro('Process', 'A simple process, no surprises', 'Clear steps, weekly updates and one point of contact from kickoff to launch.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([step('01', 'Discover', 'Workshops and research to understand your users and goals.'), step('02', 'Define', 'Flows, wireframes and a clear scope you can sign off.'), step('03', 'Design', 'High-fidelity UI and prototypes, tested with real users.'), step('04', 'Deliver', 'Developer hand-off, design system and launch support.')], {
  cols: [4, 2, 1],
  gap: [16, 16, 12]
})], {
  bg: D.bg,
  py: [96, 80, 56]
}),
// Testimonials
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([dIntro('Kind words', 'What clients say', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([quote('1500648767791-00dcc994a43e', 'Jonas Weber', 'CEO, Fluxo', 'Mara turned a messy prototype into a product our users love. Conversion went up 32% after launch.'), quote('1438761681033-6461ffad8d80', 'Elena Rossi', 'Founder, Mellow', 'Thoughtful, fast and a joy to work with. The new brand finally feels like us.')], {
  cols: [2, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: D.bg,
  py: [96, 80, 56]
}),
// Contact CTA + footer
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('Open for Q1 2027', {
  mb: '22px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Have a project in mind?', {
  align: 'center',
  color: D.ink,
  size: 'clamp(2.4rem, 6vw, 5rem)',
  weight: 400,
  lh: 1.05,
  ls: '-0.04em',
  mt: '0',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="mailto:hello@example.com">hello@example.com</a>', {
  align: 'center',
  color: D.lime,
  link: D.lime,
  size: 'clamp(1.2rem, 2.4vw, 1.6rem)',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a free intro call', {
  bg: D.lime,
  color: D.bg
})], {
  justify: 'center',
  mt: '32px'
})], {
  className: 'gk-kit-intro-center',
  mb: '96px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 Mara Voss. Designed with Zentro Blocks.', {
  color: D.muted,
  size: '14px',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Dribbble</a>&nbsp;&nbsp;&nbsp; <a href="#">Behance</a>&nbsp;&nbsp;&nbsp; <a href="#">LinkedIn</a>', {
  color: D.muted,
  link: D.muted,
  size: '14px',
  mb: '0'
})], {
  row: true,
  justify: 'space-between',
  gap: '12px',
  pad: ['24px', '0', '0', '0'],
  className: 'gk-kit-meta'
})], {
  bg: D.bg,
  py: [96, 80, 56],
  pb: [32, 32, 24]
})];
const extraTemplates = [{
  id: 'tpl-clinic-saas',
  title: 'Clinic SaaS',
  category: 'saas',
  desc: 'Modern SaaS landing page for clinic / healthcare software: hero with product shot, steps, features, stats, pricing, reviews and FAQ.',
  keywords: 'saas software app clinic healthcare medical startup landing product',
  blocks: clinic
}, {
  id: 'tpl-dark-portfolio',
  title: 'Dark Portfolio',
  category: 'portfolio',
  desc: 'Dark personal portfolio for designers and freelancers: hero, clients, bento stats, services, work, process and contact.',
  keywords: 'portfolio personal designer freelancer dark resume cv creative',
  blocks: portfolio
}];

/***/ },

/***/ "./src/zentro-kit/templates-pages.js"
/*!*******************************************!*\
  !*** ./src/zentro-kit/templates-pages.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageTemplates: () => (/* binding */ pageTemplates)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/* harmony import */ var _patterns_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns-showcase */ "./src/zentro-kit/patterns-showcase.js");
/* harmony import */ var _templates_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates-extra */ "./src/zentro-kit/templates-extra.js");
/* harmony import */ var _templates_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates-sites */ "./src/zentro-kit/templates-sites.js");
/**
 * Zentro Kit – inner page templates (About, Team, Services, Service details,
 * Pricing, Case study, Portfolio).
 *
 * Neutral, industry-agnostic copy: the demo brand "Northstar" is a studio that
 * works for agencies, real estate, SaaS and healthcare clients, so every page
 * fits a business, agency or real-estate site after a quick text swap.
 */




const T = {
  ink: '#0f172a',
  muted: '#64748b',
  accent: '#2563eb',
  soft: '#f1f5f9',
  line: '#e2e8f0',
  card: '#ffffff',
  dark: '#0b1220'
};
const DARK = {
  ...T,
  ink: '#f8fafc',
  muted: '#94a3b8',
  card: '#111a2e',
  line: 'rgba(248,250,252,0.08)'
};

// ---------------------------------------------------------------------------
// Shared page parts
// ---------------------------------------------------------------------------
const nav = () => (0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('Northstar', ['About', 'Services', 'Work', 'Pricing', 'Team'], [(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('Let’s talk', T, {
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: T.ink,
  muted: T.muted,
  bg: '#ffffff'
});
const crumbs = trail => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(['<a href="#">Home</a>', ...trail].join('  /  '), T, {
  size: '14px',
  link: T.muted,
  mb: '20px'
});
const pageHero = (trail, eyebrow, title, text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([crumbs(trail), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)(eyebrow, {
  align: o.center ? 'center' : 'left',
  dot: T.accent,
  color: T.ink,
  bg: '#ffffff'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, T, {
  level: 1,
  align: o.center ? 'center' : undefined,
  size: 'clamp(2.5rem, 5.6vw, 4.4rem)',
  lh: 1.05,
  ls: '-0.035em',
  mb: '20px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, T, {
  align: o.center ? 'center' : undefined,
  size: '18px'
}), ...(o.after || [])], {
  className: o.center ? 'gk-kit-intro-center gk-kit-crumbs-center' : 'gk-kit-hero-narrow'
}), ...(o.below || [])], {
  gradient: 'linear-gradient(180deg,#eef2ff 0%,#f8fafc 60%,#ffffff 100%)',
  py: [80, 64, 48]
});
const ctaBand = (title, text, cta = 'Book a free call') => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, DARK, {
  size: 'clamp(1.9rem, 3.6vw, 2.75rem)'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, DARK)]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)(cta, T), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.obtn)('See our work', '#ffffff', {
  bc: 'rgba(255,255,255,0.3)'
})], {
  justify: 'right',
  gap: '12px'
})], {
  tpl: ['1.4fr 1fr', '1fr', '1fr'],
  gap: [48, 28, 24],
  valign: 'center'
})], {
  gradient: 'radial-gradient(circle at 85% 20%,#1e3a8a 0%,#0b1220 55%)',
  py: [88, 72, 56]
});
const pageFooter = () => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.footer)('Northstar', 'Strategy, design and growth for agencies, real estate and product companies.<br>hello@example.com · +1 555 0199 220', [['Company', ['About', 'Team', 'Careers', 'Contact']], ['Services', ['Branding', 'Web design', 'Marketing', 'Real estate']], ['Resources', ['Case studies', 'Pricing', 'Blog', 'FAQ']]], {
  ...T,
  fBg: '#ffffff'
}, {
  socials: ['linkedin', 'instagram', 'x']
});
const counter = (targetNumber, suffix, label, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/animated-counter', {
  targetNumber,
  suffix,
  prefix: o.prefix || '',
  label,
  numberColor: o.color || T.ink,
  labelColor: o.labelColor || T.muted,
  numberSize: o.size || 44,
  labelSize: 15,
  alignment: o.align || 'left',
  duration: 1800
});
const accordion = panels => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
  panels: panels.map(([title, content]) => ({
    title,
    content
  })),
  activeColor: T.accent,
  titleBgColor: '#f8fafc',
  contentBgColor: '#ffffff',
  borderRadius: 12,
  allowMultiple: false
});
const price = (planTitle, p, period, features, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
  planTitle,
  price: p,
  currencySymbol: '$',
  billingPeriod: period,
  features,
  isPopular: !!o.popular,
  badgeText: o.badge || 'Most popular',
  buttonLabel: o.cta || 'Get started',
  primaryColor: o.popular ? T.accent : T.ink,
  cardBgColor: '#ffffff',
  textColor: T.ink,
  borderRadius: 20
});
const iconCard = (icon, title, text, o = {}) => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.iconTile)(icon, o.tile || '#eff6ff'), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, o.t || T, {
  level: 3,
  size: '19px',
  mb: '8px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, o.t || T, {
  size: '15px',
  mb: o.link ? '16px' : '0'
}), ...(o.link ? [(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(`<a href="#">${o.link} →</a>`, T, {
  color: T.accent,
  link: T.accent,
  size: '14px',
  weight: 700
})] : [])], o.t || T, {
  bg: o.bg
});
const quoteBlock = (text, photo, name, role, t = T) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('“', t, {
  color: T.accent,
  size: '72px',
  lh: 0.6,
  mb: '20px',
  align: 'center'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(text, t, {
  align: 'center',
  size: 'clamp(1.4rem, 2.8vw, 2.1rem)',
  weight: 500,
  lh: 1.4,
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.person)(photo, name, role, t)], {
  className: 'gk-kit-center-row'
})], {
  className: 'gk-kit-intro-center'
});
const project = (photo, title, tags, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 900), title, {
  ratio: o.ratio || '4/3',
  radius: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, o.t || T, {
  level: 3,
  size: '19px',
  mb: '0'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(tags, o.t || T, {
  size: '14px'
})], {
  row: true,
  justify: 'space-between',
  gap: '8px',
  mt: '16px'
})], {
  className: o.className
});
const member = (photo, name, role) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 600), name, {
  ratio: '4/5',
  radius: '18px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(name, T, {
  level: 3,
  size: '18px',
  mb: '2px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(role, T, {
  size: '14px'
})], {
  gap: '14px',
  className: 'gk-kit-member'
});

// Demo content shared by several pages.
const SERVICES = [['🎯', 'Brand strategy', 'Positioning, naming and messaging that make you the obvious choice.'], ['🎨', 'Brand identity', 'Logos, colour, typography and guidelines your team can use.'], ['💻', 'Web design &amp; development', 'Fast, accessible websites on WordPress and headless stacks.'], ['📈', 'Performance marketing', 'SEO, paid social and search campaigns tied to revenue.'], ['🏠', 'Real estate marketing', 'Launch campaigns, listing sites and 3D tours for developers.'], ['📱', 'Product &amp; app design', 'Research-led UX and UI for SaaS and mobile products.']];
const TEAM = [['1573497019940-1c28c88b4f3e', 'Olivia Hart', 'Creative Director'], ['1507003211169-0a1dd7228f2d', 'Marcus Lee', 'Head of Strategy'], ['1580489944761-15a19d654956', 'Sofia Romero', 'Lead Designer'], ['1500648767791-00dcc994a43e', 'Daniel Park', 'Tech Lead'], ['1438761681033-6461ffad8d80', 'Emma Novak', 'Brand Designer'], ['1556157382-97eda2d62296', 'Leo Fischer', 'Growth Marketer'], ['1544005313-94ddf0286df2', 'Aisha Khan', 'UX Researcher'], ['1507679799987-c73779587ccf', 'Noah Bennett', 'Account Director']];
const PROJECTS = {
  harbor: ['1600585154340-be6161a56a0c', 'Harborview Homes', 'Real estate · Launch'],
  villa: ['1613490493576-7fde63acd811', 'Lakeside Villas', 'Real estate · Web'],
  fin: ['1460925895917-afdab827c52f', 'Fluxo Finance', 'SaaS · Product'],
  mellow: ['1626785774573-4b799315345d', 'Mellow Coffee', 'Branding'],
  routa: ['1586717791821-3f44a563fa4c', 'Routa Travel', 'App · UX'],
  bloom: ['1609921212029-bb5a28e60960', 'Bloom Skincare', 'Packaging'],
  care: ['1576091160550-2173dba999ef', 'CareWell Clinics', 'Healthcare · Web'],
  loft: ['1600607687939-ce8a6c25118c', 'Urban Lofts', 'Real estate · Brand'],
  pulse: ['1551288049-bebda4e38f71', 'Pulse Analytics', 'SaaS · Web']
};
const proj = (key, o) => project(...PROJECTS[key], o);

// ===========================================================================
// About
// ===========================================================================
const about = () => [nav(), pageHero(['About'], 'About Northstar', `We build brands, websites and places ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('people love', T.accent)}.`, 'Since 2014 we have helped 300+ agencies, property developers and product companies grow with strategy, design and marketing that works together.', {
  below: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1522071820081-009f0129c71c', 1800), 'The Northstar team at work', {
    ratio: '21/9',
    radius: '24px',
    mt: '56px'
  })]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Our story', T, {
  color: T.accent,
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.12em',
  mb: '12px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('From a two-person studio to a team of 40', T, {
  size: 'clamp(1.8rem, 3.4vw, 2.6rem)'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Northstar started in a small Lisbon office with one belief: great design should be measured by the results it creates. Our first clients were local real estate developers who needed more than pretty brochures – they needed sold-out launches.', T, {
  size: '17px',
  mb: '18px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Today we work with brands across Europe and North America, but the approach is the same: listen first, decide with data and craft every detail. Most of our clients have been with us for more than three years.', T, {
  size: '17px',
  mb: '24px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.person)('1573497019940-1c28c88b4f3e', 'Olivia Hart', 'Founder &amp; Creative Director', T)])], {
  tpl: ['1fr 1.3fr', '1fr', '1fr'],
  gap: [80, 32, 24]
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(12, '+', 'Years in business', {
  color: '#ffffff',
  labelColor: '#94a3b8'
}), counter(320, '+', 'Projects delivered', {
  color: '#ffffff',
  labelColor: '#94a3b8'
}), counter(40, '', 'Team members', {
  color: '#ffffff',
  labelColor: '#94a3b8'
}), counter(98, '%', 'Client retention', {
  color: '#ffffff',
  labelColor: '#94a3b8'
})], {
  cols: [4, 2, 2],
  gap: [32, 32, 24]
})], {
  bg: T.dark,
  py: [72, 64, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'What drives us', 'Mission, vision and values', 'The principles behind every project we take on.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([iconCard('🚀', 'Our mission', 'Help ambitious companies grow with design that is measurable, not just beautiful.'), iconCard('🔭', 'Our vision', 'A world where every business – big or small – has a brand it is proud of.'), iconCard('🤝', 'Partnership', 'We work as an extension of your team, with full transparency and shared goals.'), iconCard('✨', 'Craft', 'Details matter. We sweat the small things so your customers never have to.')], {
  cols: [4, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Our journey', 'Milestones along the way', '', {
  align: 'left'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['2014', 'Founded in Lisbon', 'Two designers, one desk and a first real estate client.'], ['2017', 'First international office', 'Opened in Berlin to serve clients across Europe.'], ['2021', '200 projects', 'Expanded into SaaS, healthcare and e-commerce.'], ['2026', 'Team of 40', 'Strategy, design, development and growth under one roof.']].map(([year, title, text]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(year, T, {
  level: 3,
  size: 'clamp(2rem, 3.6vw, 2.6rem)',
  color: T.accent,
  weight: 300,
  mb: '10px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, T, {
  level: 4,
  size: '18px',
  mb: '6px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, T, {
  size: '15px'
})], {
  pad: ['24px', '0', '0'],
  className: 'gk-kit-topline'
})), {
  cols: [4, 2, 1],
  gap: [32, 32, 8]
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Leadership', 'The people who lead Northstar', '', {
  align: 'left',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.obtn)('Meet the full team', T.ink, {
  bc: T.line
})], {
  justify: 'right'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 20],
  valign: 'end',
  mb: 40
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(TEAM.slice(0, 4).map(m => member(...m)), {
  cols: [4, 2, 2],
  gap: [24, 20, 16]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Trusted by 300+ companies worldwide',
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([quoteBlock('Northstar feels like part of our company. They rebranded us, rebuilt our website and doubled our qualified leads within a year.', '1560250097-0b93528c311a', 'Thomas Berg', 'CEO, Harborview Homes')], {
  bg: '#ffffff',
  py: [40, 32, 24],
  pb: [100, 80, 56]
}), ctaBand('Let’s build something great together', 'Tell us about your goals – we reply within one business day.'), pageFooter()];

// ===========================================================================
// Team
// ===========================================================================
const founder = (photo, name, role, bio) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), name, {
  ratio: '4/5',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(role, T, {
  color: T.accent,
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.1em',
  mb: '8px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(name, T, {
  level: 3,
  size: '28px',
  mb: '12px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(bio, T, {
  size: '15px',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('core/social-links', {
  iconColorValue: T.ink,
  iconBackgroundColorValue: T.soft,
  size: 'has-normal-icon-size',
  layout: {
    type: 'flex'
  }
}, ['linkedin', 'x', 'mail'].map(service => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('core/social-link', {
  service,
  url: '#'
})))])], {
  tpl: ['1fr 1.2fr', '1fr 1.2fr', '1fr'],
  gap: [28, 24, 20],
  valign: 'center'
});
const job = (role, meta) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(role, T, {
  level: 3,
  size: '19px',
  mb: '4px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(meta, T, {
  size: '14px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.obtn)('Apply', T.ink, {
  bc: T.line,
  pad: ['10px', '22px'],
  size: '14px'
})])], {
  row: true,
  justify: 'space-between',
  gap: '16px',
  pad: ['22px', '0'],
  className: 'gk-kit-topline'
});
const team = () => [nav(), pageHero(['Team'], 'Our team', 'The people behind every project', 'Strategists, designers, engineers and marketers – 40 specialists in Lisbon, Berlin and remote, working as one team for your goals.', {
  center: true
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([founder('1573497019940-1c28c88b4f3e', 'Olivia Hart', 'Founder &amp; Creative Director', 'Olivia founded Northstar in 2014 after ten years leading brand teams for property developers and tech companies. She still reviews every launch personally.'), founder('1507003211169-0a1dd7228f2d', 'Marcus Lee', 'Co-founder &amp; Head of Strategy', 'Marcus turns business goals into clear roadmaps. Before Northstar he grew two SaaS companies from seed to Series B as VP of Marketing.')], {
  cols: [2, 1, 1],
  gap: [48, 40, 48]
})], {
  bg: '#ffffff',
  py: [40, 32, 24],
  pb: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'The crew', 'Meet the team', 'Talented people who care about your results as much as you do.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(TEAM.map(m => member(...m)), {
  cols: [4, 3, 2],
  gap: [24, 20, 16],
  rowGap: [40, 32, 28]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1552664730-d307ca884978', 700), 'Team workshop', {
  ratio: '3/4',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1553877522-43269d4ea984', 700), 'Bright office', {
  ratio: '3/4',
  radius: '20px'
})], {
  className: 'gk-kit-offset'
})], {
  cols: [2, 2, 2],
  gap: [16, 16, 12]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Life at Northstar', 'A culture built on trust and craft', 'We hire great people and give them the freedom, tools and time to do their best work.', {
  align: 'left',
  mb: '24px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.checks)(['4-day work week in summer', 'Remote-first with two beautiful studios', '$2,000 yearly learning budget', 'Private health insurance', 'Team retreat every spring'], T)])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [80, 48, 40],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Careers', 'Join our team', 'We are always looking for curious, kind and talented people.', {
  align: 'left',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('See all openings', T)])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([job('Senior Brand Designer', 'Lisbon or remote · Full-time'), job('WordPress Developer', 'Remote (EU) · Full-time'), job('Performance Marketing Lead', 'Berlin · Full-time'), job('UX Research Intern', 'Lisbon · 6 months')])], {
  tpl: ['1fr 1.4fr', '1fr', '1fr'],
  gap: [64, 40, 32]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), ctaBand('Want to work with this team?', 'Book a free 30-minute call with one of our strategists.'), pageFooter()];

// ===========================================================================
// Services
// ===========================================================================
const industry = (photo, title, text, items) => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 900), title, {
  ratio: '4/3',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, T, {
  level: 3,
  size: 'clamp(1.5rem, 2.6vw, 2rem)'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, T, {
  mb: '20px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.checks)(items, T), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('View case studies', T)], {
  mt: '24px'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [56, 32, 28],
  valign: 'center'
})];
const services = () => [nav(), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([crumbs(['Services']), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('What we do', {
  align: 'left',
  dot: T.accent,
  color: T.ink,
  bg: '#ffffff'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Services that grow your business', T, {
  level: 1,
  size: 'clamp(2.5rem, 5.4vw, 4.2rem)',
  lh: 1.05,
  ls: '-0.035em',
  mb: '20px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('One partner for strategy, brand, website and marketing – so every channel tells the same story and drives the same goal.', T, {
  size: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('Get a proposal', T), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.obtn)('Our process', T.ink, {
  bc: T.line
})], {
  mt: '32px',
  gap: '12px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1542744173-8e7e53415bb0', 1000), 'Strategy workshop', {
  ratio: '4/3',
  radius: '24px'
})], {
  tpl: ['1.1fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 36],
  valign: 'center'
})], {
  gradient: 'linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)',
  py: [80, 64, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Our services', 'Everything you need to launch and grow', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(SERVICES.map(([icon, title, text]) => iconCard(icon, title, text, {
  link: 'Learn more'
})), {
  cols: [3, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(DARK, 'How we work', 'A proven four-step process', 'Clear milestones, weekly updates and no surprises.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['01', 'Discover', 'Workshops, research and competitor analysis.'], ['02', 'Strategy', 'Positioning, goals and a clear roadmap.'], ['03', 'Create', 'Design and build, tested with real users.'], ['04', 'Grow', 'Launch, measure and optimise every month.']].map(([n, title, text]) => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(n, DARK, {
  color: '#60a5fa',
  weight: 700,
  size: '14px',
  mb: '28px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(title, DARK, {
  level: 3,
  size: '20px',
  mb: '8px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(text, DARK, {
  size: '15px'
})], DARK)), {
  cols: [4, 2, 1],
  gap: [16, 16, 12]
})], {
  bg: T.dark,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Industries', 'Experts in your industry', 'Specialised teams who already know your market.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
  label: 'Real estate',
  blocks: industry('1600585154340-be6161a56a0c', 'Real estate &amp; property', 'Launch campaigns, listing websites and lead funnels that sell homes faster.', ['Project branding &amp; sales centres', 'Listing sites with search &amp; maps', 'Paid campaigns for buyers and renters'])
}, {
  label: 'Agencies',
  blocks: industry('1552581234-26160f608093', 'Agencies &amp; consultancies', 'White-label design and development for agencies that need extra hands.', ['White-label WordPress builds', 'Pitch decks and brand systems', 'Flexible monthly retainers'])
}, {
  label: 'SaaS',
  blocks: industry('1551288049-bebda4e38f71', 'SaaS &amp; technology', 'Product marketing sites and UX that turn trials into paying customers.', ['Conversion-focused landing pages', 'Product UX audits', 'Content and SEO programmes'])
}, {
  label: 'Healthcare',
  blocks: industry('1576091160550-2173dba999ef', 'Healthcare &amp; clinics', 'Trustworthy, accessible websites with online booking and patient journeys.', ['Accessible, GDPR-ready websites', 'Online booking integrations', 'Local SEO for every location'])
}], {
  color: T.accent,
  align: 'center',
  radius: 999
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Why Northstar', 'Results you can measure', 'We tie every project to clear goals and report on them monthly.', {
  align: 'left',
  mb: '32px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(3, '×', 'More qualified leads'), counter(42, '%', 'Lower cost per lead'), counter(98, '%', 'Client retention'), counter(4, '.9 ★', 'Average rating')], {
  cols: [2, 2, 2],
  gap: [24, 24, 20]
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600880292203-757bb62b4baf', 1000), 'Client celebrating results', {
  ratio: '1/1',
  radius: '24px'
})], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [80, 48, 40],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'FAQ', 'Common questions', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([accordion([['How long does a typical project take?', 'Brand projects take 4–6 weeks, websites 6–10 weeks. You get a detailed timeline in our proposal.'], ['Do you work with small businesses?', 'Yes. We have packages for startups and local businesses as well as enterprise retainers.'], ['Can you work with our in-house team?', 'Absolutely – many clients use us to extend their own marketing or product team.'], ['What does it cost?', 'Projects start at $4,900. See our pricing page or book a call for a custom quote.']])], {
  className: 'gk-kit-intro-center'
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), ctaBand('Not sure which service you need?', 'Book a free strategy call – we will recommend the right next step.'), pageFooter()];

// ===========================================================================
// Service details
// ===========================================================================
const sideLinks = active => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('All services', T, {
  level: 3,
  size: '18px',
  mb: '14px'
}), ...SERVICES.map(([, title]) => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(`<a href="#">${title}</a>`, T, title === active ? {
  bg: T.accent,
  color: '#ffffff',
  link: '#ffffff',
  weight: 600,
  size: '15px',
  className: 'gk-kit-side-link is-active'
} : {
  color: T.ink,
  link: T.ink,
  size: '15px',
  className: 'gk-kit-side-link'
}))], T, {
  pad: '24px'
});
const serviceDetails = () => {
  const active = 'Web design &amp; development';
  return [nav(), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('<a href="#">Home</a>  /  <a href="#">Services</a>  /  Web design &amp; development', DARK, {
    size: '14px',
    link: DARK.muted,
    mb: '20px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Web design &amp; development', DARK, {
    level: 1,
    size: 'clamp(2.4rem, 5.4vw, 4rem)',
    lh: 1.06,
    ls: '-0.035em',
    mb: '20px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Fast, beautiful websites that turn visitors into customers – designed around your goals and built to grow with you.', DARK, {
    size: '18px'
  })], {
    className: 'gk-kit-hero-narrow'
  })], {
    gradient: 'radial-gradient(circle at 80% 0%,#1e3a8a 0%,#0b1220 60%)',
    py: [96, 80, 56]
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1499951360447-b19be8fe80f5', 1400), 'Website design on a desktop', {
    ratio: '16/9',
    radius: '20px',
    mb: '40px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Overview', T, {
    size: 'clamp(1.6rem, 3vw, 2.2rem)'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Your website is your hardest-working salesperson. We combine strategy, UX, design and development to create sites that load in under a second, rank on Google and make it easy for visitors to take the next step – whether that is booking a viewing, starting a trial or calling your team.', T, {
    size: '17px',
    mb: '40px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('What’s included', T, {
    size: 'clamp(1.4rem, 2.6vw, 1.8rem)'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.checks)(['UX research &amp; sitemap', 'Custom design system', 'WordPress or headless build', 'Copywriting support'], T), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.checks)(['Technical SEO setup', 'Speed &amp; accessibility audit', 'Analytics &amp; tracking', '3 months free support'], T)], {
    cols: [2, 2, 1],
    gap: [24, 24, 0],
    mb: 40
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Our process', T, {
    size: 'clamp(1.4rem, 2.6vw, 1.8rem)',
    mb: '8px'
  }), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.numberedList)([{
    title: 'Discovery workshop',
    text: 'Goals, audience, competitors and success metrics.'
  }, {
    title: 'UX &amp; wireframes',
    text: 'Sitemap and page structure, tested with real users.'
  }, {
    title: 'Design &amp; build',
    text: 'Pixel-perfect design and clean, fast code.'
  }, {
    title: 'Launch &amp; grow',
    text: 'Go live, measure and improve every month.'
  }], {
    theme: {
      ink: T.ink,
      muted: T.muted,
      hl: '#eff6ff'
    }
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([counter(800, 'ms', 'Average load time', {
    color: T.accent
  })], T, {
    bg: T.soft,
    bw: false
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([counter(95, '+', 'PageSpeed score', {
    color: T.accent
  })], T, {
    bg: T.soft,
    bw: false
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([counter(2, '×', 'Conversion rate', {
    color: T.accent
  })], T, {
    bg: T.soft,
    bw: false
  })], {
    cols: [3, 3, 1],
    gap: [16, 16, 12],
    mt: 40,
    mb: 40
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Frequently asked questions', T, {
    size: 'clamp(1.4rem, 2.6vw, 1.8rem)'
  }), accordion([['Which platform do you build on?', 'Mostly WordPress with the block editor, so your team can edit everything. For complex products we also build headless sites.'], ['Can you redesign my existing site?', 'Yes – we migrate your content and keep your SEO rankings safe with proper redirects.'], ['Do you offer hosting and maintenance?', 'We offer managed hosting and care plans from $149 per month.']])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([sideLinks(active), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Need help choosing?', DARK, {
    level: 3,
    size: '22px',
    mb: '10px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Talk to a strategist – free, no obligation.', DARK, {
    size: '15px',
    mb: '18px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('+1 555 0199 220', DARK, {
    level: 4,
    size: '20px',
    color: '#60a5fa',
    mb: '18px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('Book a call', T)])], {
    bg: T.dark,
    pad: '28px',
    radius: '18px',
    mt: '20px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Download brochure', T, {
    level: 3,
    size: '18px',
    mb: '6px'
  }), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Services, process and prices (PDF, 2 MB).', T, {
    size: '14px',
    mb: '14px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.obtn)('Download', T.ink, {
    bc: T.line,
    pad: ['10px', '20px'],
    size: '14px'
  })])], T, {
    pad: '24px',
    className: 'gk-kit-mt-20'
  })], {
    className: 'gk-kit-sticky'
  })], {
    tpl: ['2fr 1fr', '1fr', '1fr'],
    gap: [56, 48, 40],
    valign: 'start'
  })], {
    bg: '#ffffff',
    py: [100, 80, 56]
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Packages', 'Choose the right package', 'Fixed prices, clear deliverables.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([price('Starter site', '4,900', ' one-time', ['Up to 6 pages', 'Template-based design', 'Basic SEO setup', '1 month support']), price('Business site', '9,800', ' one-time', ['Up to 15 pages', 'Custom design system', 'Advanced SEO &amp; analytics', '3 months support'], {
    popular: true
  }), price('Custom platform', '19,500', ' from', ['Unlimited pages', 'Integrations &amp; portals', 'Headless or multisite', '6 months support'], {
    cta: 'Request a quote'
  })], {
    cols: [3, 1, 1],
    gap: [24, 20, 20]
  })], {
    bg: T.soft,
    py: [100, 80, 56]
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Related', 'Other services you may need', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(SERVICES.filter(s => s[1] !== active).slice(0, 3).map(([icon, title, text]) => iconCard(icon, title, text, {
    link: 'Learn more'
  })), {
    cols: [3, 1, 1],
    gap: [20, 16, 16]
  })], {
    bg: '#ffffff',
    py: [100, 80, 56]
  }), ctaBand('Ready for a website that works?', 'Get a free website audit and proposal within 48 hours.', 'Get my free audit'), pageFooter()];
};

// ===========================================================================
// Pricing
// ===========================================================================
const plans = yearly => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([price('Starter', yearly ? '790' : '79', yearly ? '/year' : '/month', ['1 brand or listing site', 'Monthly design hours: 5', 'Basic SEO report', 'Email support']), price('Growth', yearly ? '1,990' : '199', yearly ? '/year' : '/month', ['Up to 3 sites or projects', 'Monthly design hours: 20', 'SEO &amp; ads management', 'Priority chat support'], {
  popular: true,
  badge: yearly ? 'Save 17%' : 'Most popular'
}), price('Scale', yearly ? '4,990' : '499', yearly ? '/year' : '/month', ['Unlimited projects', 'Dedicated design team', 'Full-funnel marketing', 'Account director'], {
  cta: 'Talk to sales'
})], {
  cols: [3, 1, 1],
  gap: [24, 20, 20]
})];
const pricing = () => [nav(), pageHero(['Pricing'], 'Pricing', 'Simple, transparent pricing', 'Flexible monthly plans for agencies, property brands and growing businesses. No setup fees, cancel anytime.', {
  center: true
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
  label: 'Monthly',
  blocks: plans(false)
}, {
  label: 'Yearly – save 17%',
  blocks: plans(true)
}], {
  color: T.accent,
  align: 'center',
  radius: 999
})], {
  bg: '#ffffff',
  py: [24, 24, 16],
  pb: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Compare', 'Compare all features', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.table)([['Projects', '1', '3', 'Unlimited'], ['Design hours / month', '5', '20', 'Dedicated team'], ['Website care &amp; hosting', '✓', '✓', '✓'], ['SEO reporting', 'Basic', 'Advanced', 'Advanced + content'], ['Paid ads management', '—', '✓', '✓'], ['Real estate listing tools', '—', '✓', '✓'], ['Account director', '—', '—', '✓'], ['Support', 'Email', 'Priority chat', '24/7 phone']], {
  head: ['Feature', 'Starter', 'Growth', 'Scale'],
  stripes: true,
  color: T.ink,
  size: '15px'
})], {
  className: 'gk-kit-table-scroll'
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Add-ons', 'Extend any plan', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([iconCard('📸', 'Photo &amp; video', 'Professional shoots for products, teams and properties. From $590.'), iconCard('🧭', '3D virtual tours', 'Interactive tours for listings and showrooms. From $290 per property.'), iconCard('✍️', 'Copywriting', 'Website and campaign copy by native writers. From $190 per page.')], {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('🛡️', T, {
  size: '48px',
  lh: 1,
  color: T.ink
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('30-day money-back guarantee', DARK, {
  level: 3,
  size: 'clamp(1.4rem, 2.6vw, 1.9rem)',
  mb: '6px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Not happy in the first month? We refund you in full – no questions asked.', DARK)]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Start now', {
  bg: '#ffffff',
  color: T.ink
})], {
  justify: 'right'
})], {
  tpl: ['auto 1fr auto', 'auto 1fr', '1fr'],
  gap: [28, 24, 16],
  valign: 'center'
})], {
  bg: T.accent,
  py: [56, 48, 40]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Join 300+ companies on a Northstar plan',
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'FAQ', 'Pricing questions', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([accordion([['Can I change plans later?', 'Yes, upgrade or downgrade anytime. Changes apply from your next billing cycle.'], ['Are there setup fees?', 'No. You only pay the monthly or yearly plan price.'], ['What happens to unused hours?', 'Up to 5 unused design hours roll over to the next month.']]), accordion([['Do you offer discounts for non-profits?', 'Yes – registered non-profits get 25% off every plan.'], ['Which payment methods do you accept?', 'All major credit cards, bank transfer and invoices for yearly plans.'], ['Is there a contract?', 'Monthly plans can be cancelled anytime. Yearly plans are billed upfront.']])], {
  cols: [2, 1, 1],
  gap: [24, 12, 12]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), ctaBand('Need a custom plan?', 'Large portfolio or multiple brands? We build plans around your needs.', 'Contact sales'), pageFooter()];

// ===========================================================================
// Case study
// ===========================================================================
const metaItem = (label, value) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(label, T, {
  size: '13px',
  upper: true,
  ls: '0.08em',
  mb: '4px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(value, T, {
  color: T.ink,
  weight: 600,
  size: '16px'
})], {
  pad: ['18px', '0', '0'],
  className: 'gk-kit-topline'
});
const caseStudy = () => [nav(), pageHero(['<a href="#">Work</a>', 'Harborview Homes'], 'Case study · Real estate', 'How Harborview Homes sold out 120 apartments four months early', 'A new brand, a launch website and a performance campaign for a waterfront development – delivered in eight weeks.', {
  after: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([metaItem('Client', 'Harborview Homes'), metaItem('Industry', 'Real estate'), metaItem('Timeline', '8 weeks'), metaItem('Services', 'Brand, web, ads')], {
    cols: [4, 4, 2],
    gap: [24, 20, 16],
    mt: 40
  })],
  below: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600585154340-be6161a56a0c', 1800), 'Harborview Homes waterfront apartments', {
    ratio: '21/9',
    radius: '24px',
    mt: '56px'
  })]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(120, '', 'Apartments sold', {
  color: T.accent
}), counter(4, ' mo', 'Ahead of schedule', {
  color: T.accent
}), counter(312, '%', 'More qualified leads', {
  color: T.accent
}), counter(38, '%', 'Lower cost per lead', {
  color: T.accent
})], {
  cols: [4, 2, 2],
  gap: [24, 28, 20]
})], {
  bg: '#ffffff',
  py: [72, 64, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('01 — The challenge', T, {
  color: T.accent,
  weight: 700,
  size: '14px',
  mb: '12px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('A premium project lost in a crowded market', T, {
  size: 'clamp(1.5rem, 2.8vw, 2rem)'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Harborview launched 120 waterfront apartments while three competing developments opened nearby. Their old brand looked generic, the website was slow, and paid ads brought clicks but very few serious buyers.', T)]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('02 — The solution', T, {
  color: T.accent,
  weight: 700,
  size: '14px',
  mb: '12px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('A lifestyle brand with a lead machine behind it', T, {
  size: 'clamp(1.5rem, 2.8vw, 2rem)'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('We repositioned the project around “calm living by the water”, designed a new identity and built a fast launch site with floor-plan search, 3D tours and instant viewing booking – connected to targeted campaigns.', T)])], {
  cols: [2, 1, 1],
  gap: [64, 40, 40]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.gallery)([[(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600607687939-ce8a6c25118c', 900), 'Show apartment living room'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600566753190-17f0baa2a6c3', 900), 'Kitchen design'], [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1502005229762-cf1b2da7c5d6', 900), 'Bedroom']], {
  cols: 3,
  tab: 3,
  mob: 1,
  radius: 16
})], {
  bg: '#ffffff',
  py: [100, 80, 56],
  pb: [40, 32, 24]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Our approach', 'What we did, step by step', '', {
  align: 'left'
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.numberedList)([{
  title: 'Research &amp; positioning',
  text: 'Buyer interviews and competitor audit to find a unique story.'
}, {
  title: 'Brand identity',
  text: 'Name lock-up, colours, photography direction and sales brochure.'
}, {
  title: 'Launch website',
  text: 'Floor-plan finder, 3D tours, live availability and booking.'
}, {
  title: 'Performance campaign',
  text: 'Search, social and portal ads optimised for booked viewings.',
  highlight: true
}], {
  theme: {
    ink: T.ink,
    muted: T.muted,
    hl: '#eff6ff'
  }
})], {
  bg: '#ffffff',
  py: [40, 32, 24],
  pb: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([quoteBlock('Northstar understood our buyers better than we did. The new brand and website paid for themselves within the first month.', '1560250097-0b93528c311a', 'Thomas Berg', 'Sales Director, Harborview Homes', DARK)], {
  bg: T.dark,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1613490493576-7fde63acd811', 1600), [(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Next case study', T, {
  color: '#cbd5e1',
  size: '14px',
  upper: true,
  ls: '0.12em',
  mb: '8px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Lakeside Villas: a luxury launch in 6 weeks →', T, {
  color: '#ffffff',
  size: 'clamp(1.6rem, 3.4vw, 2.6rem)',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Read the story', {
  bg: '#ffffff',
  color: T.ink
})])], {
  minHeight: 380,
  dim: 55,
  overlay: '#0b1220',
  position: 'bottom left',
  radius: '24px',
  pad: ['48px', '40px']
})], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), pageFooter()];

// ===========================================================================
// Portfolio
// ===========================================================================
const workGrid = keys => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(keys.map(k => proj(k)), {
  cols: [3, 2, 1],
  gap: [28, 24, 28],
  rowGap: [40, 32, 28]
})];
const portfolio = () => [nav(), pageHero(['Work'], 'Portfolio', 'Selected work, 2019&nbsp;–&nbsp;2026', 'Brands, websites and campaigns for real estate developers, SaaS companies, clinics and consumer brands.', {
  after: [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([counter(320, '+', 'Projects'), counter(24, '', 'Awards'), counter(14, '', 'Countries')], {
    cols: [3, 3, 3],
    gap: [24, 20, 12],
    mt: 40,
    className: 'gk-kit-stats-sm'
  })]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.tabs)([{
  label: 'All',
  blocks: workGrid(['harbor', 'fin', 'mellow', 'care', 'routa', 'loft'])
}, {
  label: 'Real estate',
  blocks: workGrid(['harbor', 'villa', 'loft'])
}, {
  label: 'Branding',
  blocks: workGrid(['mellow', 'bloom', 'loft'])
}, {
  label: 'Web &amp; apps',
  blocks: workGrid(['fin', 'routa', 'pulse'])
}], {
  color: T.accent,
  align: 'left',
  radius: 999
})], {
  bg: '#ffffff',
  py: [32, 24, 16],
  pb: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1613490493576-7fde63acd811', 1200), 'Lakeside Villas', {
  ratio: '4/3',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Featured project', DARK, {
  color: '#60a5fa',
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.12em',
  mb: '12px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)('Lakeside Villas', DARK, {
  size: 'clamp(2rem, 4vw, 3rem)'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)('Brand, website and launch film for 18 luxury villas – all reserved within six weeks of launch.', DARK, {
  mb: '24px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.checks)(['Brand identity &amp; signage', 'Launch website with 3D tours', 'Drone film and photography'], {
  ...DARK,
  accent: '#60a5fa'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.btn)('View case study', T)], {
  mt: '28px'
})])], {
  tpl: ['1.2fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: T.dark,
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.I)(T, 'Recognition', 'Awards &amp; features', '', {
  align: 'left'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([['2026', 'Awwwards – Site of the Day', 'Lakeside Villas'], ['2025', 'CSS Design Awards – Best UX', 'Fluxo Finance'], ['2025', 'Real Estate Marketing Awards – Gold', 'Harborview Homes'], ['2024', 'Brand New – Noted', 'Mellow Coffee']].map(([year, award, client]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(year, T, {
  color: T.muted,
  size: '15px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.H)(award, T, {
  level: 3,
  size: '19px',
  mb: '0'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(client, T, {
  size: '15px',
  className: 'gk-kit-text-right'
})], {
  tpl: ['120px 1fr auto', '90px 1fr auto', '1fr'],
  gap: [24, 16, 4],
  valign: 'center',
  className: 'gk-kit-topline gk-kit-row-pad'
})))], {
  bg: '#ffffff',
  py: [100, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1544005313-94ddf0286df2', 'Priya Nair', 'CMO, Pulse Analytics', 'The new site doubled our trial sign-ups in the first quarter.'], ['1500648767791-00dcc994a43e', 'Jonas Weber', 'CEO, Fluxo', 'They think like product people and design like artists.'], ['1612349317150-e413f6a5b16d', 'Dr. Sarah Lindqvist', 'Founder, CareWell', 'Online bookings went up 60% after launch. Patients love it.']].map(([photo, name, role, text]) => (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.card)([(0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.stars)(), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.P)(`“${text}”`, T, {
  color: T.ink,
  size: '16px',
  mb: '22px'
}), (0,_templates_sites__WEBPACK_IMPORTED_MODULE_3__.person)(photo, name, role, T)], T)), {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: T.soft,
  py: [100, 80, 56]
}), ctaBand('Have a project in mind?', 'Tell us what you are building – we reply within one business day.', 'Start a project'), pageFooter()];
const pageTemplates = [{
  id: 'tpl-page-about',
  title: 'About Page',
  category: 'inner',
  desc: 'Modern about page: story, numbers, values, timeline, leadership, logos and testimonial.',
  keywords: 'about us company story mission values team history agency real estate',
  blocks: about
}, {
  id: 'tpl-page-team',
  title: 'Team Page',
  category: 'inner',
  desc: 'Team page with founders, team grid, culture and open positions.',
  keywords: 'team people staff founders careers jobs culture agents',
  blocks: team
}, {
  id: 'tpl-page-services',
  title: 'Services Page',
  category: 'inner',
  desc: 'Services overview: service grid, process, industries tabs, results, FAQ and CTA.',
  keywords: 'services what we do process industries agency real estate business',
  blocks: services
}, {
  id: 'tpl-page-service-details',
  title: 'Service Details Page',
  category: 'inner',
  desc: 'Single service page with sticky sidebar, deliverables, process, packages and FAQ.',
  keywords: 'service details single service sidebar packages deliverables',
  blocks: serviceDetails
}, {
  id: 'tpl-page-pricing',
  title: 'Pricing Page',
  category: 'inner',
  desc: 'Pricing page with monthly / yearly tabs, comparison table, add-ons, guarantee and FAQ.',
  keywords: 'pricing plans packages compare monthly yearly subscription',
  blocks: pricing
}, {
  id: 'tpl-page-case-study',
  title: 'Case Study Page',
  category: 'inner',
  desc: 'Results-driven case study: project facts, metrics, challenge, solution, gallery and quote.',
  keywords: 'case study project results success story client work real estate',
  blocks: caseStudy
}, {
  id: 'tpl-page-portfolio',
  title: 'Portfolio Page',
  category: 'inner',
  desc: 'Portfolio with filter tabs, featured project, awards list and client reviews.',
  keywords: 'portfolio work projects gallery filter showcase agency properties',
  blocks: portfolio
}];

/***/ },

/***/ "./src/zentro-kit/templates-sites.js"
/*!*******************************************!*\
  !*** ./src/zentro-kit/templates-sites.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   btn: () => (/* binding */ btn),
/* harmony export */   card: () => (/* binding */ card),
/* harmony export */   checks: () => (/* binding */ checks),
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   iconTile: () => (/* binding */ iconTile),
/* harmony export */   obtn: () => (/* binding */ obtn),
/* harmony export */   person: () => (/* binding */ person),
/* harmony export */   siteTemplates: () => (/* binding */ siteTemplates),
/* harmony export */   stars: () => (/* binding */ stars)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/* harmony import */ var _patterns_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns-showcase */ "./src/zentro-kit/patterns-showcase.js");
/* harmony import */ var _templates_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates-extra */ "./src/zentro-kit/templates-extra.js");
/**
 * Zentro Kit – full-site page templates for popular niches: dental clinic,
 * water-sports, aquarium, lead-gen SaaS, digital agency, charity and a dark
 * creative studio. Brands, copy and colours are fictional demo content.
 */




// ---------------------------------------------------------------------------
// Shared helpers (all take a theme object `t`)
// ---------------------------------------------------------------------------
const H = (text, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(text, {
  level: o.level || 2,
  align: o.align,
  color: o.color || t.ink,
  size: o.size || 'clamp(1.9rem, 3.6vw, 2.75rem)',
  weight: o.weight || t.hw || 700,
  lh: o.lh || 1.15,
  ls: o.ls || t.hls || '-0.02em',
  upper: o.upper !== undefined ? o.upper : t.upper,
  mt: '0',
  mb: o.mb || '16px'
});
const P = (text, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
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
  className: o.className
});
const I = (t, eyebrow, title, text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(eyebrow, title, text, {
  accent: t.accent,
  color: t.ink,
  muted: t.muted,
  ...o
});
const btn = (text, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(text, {
  bg: t.accent,
  color: t.onAccent || '#ffffff',
  ...o
});
const obtn = (text, color, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(text, {
  outline: true,
  color,
  ...o
});
const card = (children, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)(children, {
  bg: o.bg || t.card || '#ffffff',
  pad: o.pad || '28px',
  radius: o.radius || t.radius || '18px',
  bw: o.bw === false ? undefined : '1px',
  bc: o.bc || t.line || '#e5e7eb',
  shadow: o.shadow,
  className: o.className
});
const person = (photo, name, role, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 160), name, {
  ratio: '1/1',
  radius: '999px'
}), P(`<strong>${name}</strong><br>${role}`, t, {
  size: '14px',
  lh: 1.5,
  color: o.color
})], {
  row: true,
  nowrap: true,
  gap: '12px',
  className: 'gk-kit-avatar-row'
});
const checks = (items, t, o = {}) => P(items.map(i => `${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)(o.mark || '✓', t.accent)}  ${i}`).join('<br>'), t, {
  size: o.size || '15px',
  lh: 2.1,
  color: o.color,
  mb: o.mb
});
const iconTile = (icon, bg) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(icon, {
  size: '22px',
  mb: '0',
  lh: 1
})], {
  bg,
  radius: '14px',
  className: 'gk-kit-icon-lg'
});
const stars = (color = '#f59e0b') => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★', {
  color,
  size: '16px',
  ls: '0.1em',
  mb: '14px'
});
const footer = (brand, text, cols, t, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(brand, t, {
  level: 3,
  size: '24px',
  color: t.fInk || t.ink,
  mb: '14px'
}), P(text, t, {
  color: t.fMuted || t.muted,
  size: '15px'
}), ...(o.socials ? [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(o.socials, {
  color: t.fInk || t.ink,
  bg: 'rgba(127,127,127,0.18)',
  mt: '20px'
})] : [])]), ...cols.map(([title, links]) => (0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.footerCol)(title, links, {
  ink: t.fInk || t.ink,
  muted: t.fMuted || t.muted
}))], {
  tpl: [`2fr${' 1fr'.repeat(cols.length)}`, '1fr 1fr', '1fr 1fr'],
  gap: [40, 32, 28]
}), P(o.copy || `© 2026 ${brand}. All rights reserved.`, t, {
  color: t.fMuted || t.muted,
  size: '14px',
  mt: '48px',
  className: 'gk-kit-meta gk-kit-meta--pad'
})], {
  bg: t.fBg || t.bg,
  py: [72, 64, 48],
  pb: [32, 28, 24]
});

// Header placed inside a cover image (transparent nav).
const coverNav = (brand, links, cta, t) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([H(brand, t, {
  level: 3,
  size: '24px',
  color: '#ffffff',
  mb: '0',
  upper: false
}), P(links.map(l => `<a href="#">${l}</a>`).join('&nbsp;&nbsp;&nbsp;&nbsp; '), t, {
  align: 'center',
  color: '#ffffff',
  link: '#ffffff',
  size: '15px',
  weight: 500,
  className: 'gk-kit-nav'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([cta], {
  justify: 'right'
})], {
  tpl: ['auto 1fr auto', 'auto 1fr auto', '1fr auto'],
  gap: [24, 16, 12],
  valign: 'center',
  className: 'gk-kit-cover-inner',
  mb: [72, 56, 40]
});

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
  hw: 700
};
const dentalService = (photo, title, text) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 400), title, {
  ratio: '1/1',
  radius: '999px',
  className: 'gk-kit-round-md'
}), H(title, DN, {
  level: 3,
  size: '18px',
  align: 'center',
  mb: '8px'
}), P(text, DN, {
  align: 'center',
  size: '15px'
})], {
  pad: '8px'
});
const dentist = (photo, name, role) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 400), name, {
  ratio: '1/1',
  radius: '999px',
  className: 'gk-kit-round-md'
}), H(name, DN, {
  level: 3,
  size: '18px',
  align: 'center',
  mb: '4px'
}), P(role, DN, {
  align: 'center',
  size: '14px',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book now', DN, {
  pad: ['10px', '22px'],
  size: '14px'
})], {
  justify: 'center'
})], DN, {
  pad: '28px 20px'
});
const dental = () => [(0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('SmileCraft', ['Home', 'About', 'Services', 'Team', 'Contact'], [btn('Book now', DN, {
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: DN.ink,
  muted: DN.muted,
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('Family &amp; cosmetic dentistry', {
  align: 'left',
  dot: DN.accent,
  color: DN.ink,
  bg: '#ffffff'
}), H('Keep your smile healthy &amp; bright', DN, {
  level: 1,
  size: 'clamp(2.5rem, 5.2vw, 4rem)',
  lh: 1.08,
  mb: '20px'
}), P('Gentle, modern dental care for the whole family – from first check-ups to implants and whitening, all under one roof.', DN, {
  size: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book an appointment', DN), obtn('Call (555) 014-2290', DN.ink)], {
  mt: '32px',
  gap: '12px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1559839734-2b71ea197ec2', 1000), 'Smiling dentist at SmileCraft', {
  ratio: '4/5',
  radius: '28px'
})], {
  tpl: ['1.1fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 36],
  valign: 'center'
})], {
  gradient: 'linear-gradient(135deg,#fdf2f8 0%,#ffffff 70%)',
  py: [80, 64, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(DN, 'What we do', 'Dental care for families in our community', 'Everything your smile needs, explained clearly and done comfortably.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([dentalService('1606811971618-4486d14f3f99', 'General dentistry', 'Check-ups, cleanings and fillings to keep teeth healthy.'), dentalService('1609840114035-3c981b782dfe', 'Clear aligners', 'Discreet orthodontics for straighter smiles at any age.'), dentalService('1598256989800-fe5f95da9787', 'Dental implants', 'Natural-looking, long-lasting tooth replacement.'), dentalService('1588776814546-1ffcf47267a5', 'Digital X-ray', 'Low-radiation imaging for precise, fast diagnosis.')], {
  cols: [4, 2, 1],
  gap: [24, 24, 20]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(DN, 'Our practice', 'Top quality care, without the anxiety', 'Calm treatment rooms, the latest technology and a team that takes time to listen.', {
  align: 'left',
  mb: '32px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([iconTile('🦷', '#ffffff'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Highly experienced team', DN, {
  level: 3,
  size: '18px',
  mb: '4px'
}), P('Our dentists bring 15+ years of experience in general and cosmetic care.', DN, {
  size: '15px'
})])], {
  row: true,
  nowrap: true,
  valign: 'top',
  gap: '16px',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([iconTile('🛡️', '#ffffff'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Strict hygiene standards', DN, {
  level: 3,
  size: '18px',
  mb: '4px'
}), P('Hospital-grade sterilisation and single-use instruments for every patient.', DN, {
  size: '15px'
})])], {
  row: true,
  nowrap: true,
  valign: 'top',
  gap: '16px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1629909613654-28e377c37b09', 1000), 'Modern treatment room', {
  ratio: '1/1',
  radius: '28px 28px 200px 200px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('📞', {
  size: '20px',
  mb: '0'
}), P('<strong>24/7 dental emergency</strong><br>(555) 014-2290', DN, {
  color: '#ffffff',
  size: '15px',
  lh: 1.5
})], {
  row: true,
  nowrap: true,
  gap: '12px',
  bg: DN.accent,
  pad: ['16px', '22px'],
  radius: '999px',
  className: 'gk-kit-float-badge'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 40],
  valign: 'center'
})], {
  bg: DN.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(DN, 'Our team', 'Meet your dental professionals', 'Friendly specialists who explain every step before they start.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([dentist('1594824476967-48c8b964273f', 'Dr. Lena Ortiz', 'General dentist'), dentist('1622253692010-333f2da6031d', 'Dr. Ravi Patel', 'Implant specialist'), dentist('1559839734-2b71ea197ec2', 'Dr. Hannah Cole', 'Orthodontist'), dentist('1537368910025-700350fe46c7', 'Tom Becker', 'Dental hygienist')], {
  cols: [4, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1631217868264-e5b90bb7e133', 1000), 'Dentist talking with a patient', {
  ratio: '4/3',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(DN, 'Treatments', 'Everything for a healthy smile', '', {
  align: 'left',
  mb: '20px'
}), checks(['Emergency dental service 24/7', 'Implants and extractions', 'Children’s dentistry', 'Root canal treatment', 'Whitening and veneers', 'Online booking in 60 seconds'], DN), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('See all treatments', DN)], {
  mt: '28px'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: DN.soft,
  py: [96, 80, 56]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'We accept all major insurance providers',
  bg: '#ffffff',
  color: '#9ca3af'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('12+', DN, {
  size: 'clamp(3rem, 6vw, 4.5rem)',
  color: DN.accent,
  weight: 300,
  mb: '4px'
}), H('Years of experience', DN, {
  level: 3,
  size: '20px',
  mb: '12px'
}), P('Over 9,000 happy patients trust SmileCraft with their family’s dental health.', DN, {
  size: '15px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1594824476967-48c8b964273f', 800), 'Dentist smiling', {
  ratio: '3/4',
  radius: '200px 200px 24px 24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Premium care at fair, transparent prices', DN, {
  level: 3,
  size: '22px',
  lh: 1.35
}), P('You get a clear treatment plan and cost estimate before we begin – no surprises. Flexible monthly payment plans are available.', DN, {
  size: '15px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book now', DN)], {
  mt: '24px'
})])], {
  cols: [3, 1, 1],
  gap: [48, 32, 28],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(DN, 'Our patients', 'What people say', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1544005313-94ddf0286df2', 'Sophie Martin', 'The friendliest dental team I have ever visited. My kids actually look forward to check-ups now.'], ['1500648767791-00dcc994a43e', 'Daniel Brooks', 'My implant looks completely natural. Clear pricing and zero pain – highly recommended.'], ['1438761681033-6461ffad8d80', 'Emma Larsen', 'Booked online in a minute and was seen the same day for an emergency. Thank you!']].map(([photo, name, text]) => card([stars('#fde68a'), P(`“${text}”`, DN, {
  color: '#ffffff',
  size: '16px',
  mb: '22px'
}), person(photo, name, 'Patient', DN, {
  color: '#fce7f3'
})], DN, {
  bg: DN.accent,
  bc: DN.accent
})), {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: DN.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([card([H('Visit us', DN, {
  level: 3,
  size: '24px'
}), P('<strong>Address</strong><br>24 Harbour Street, Springfield', DN, {
  mb: '16px'
}), P('<strong>Opening hours</strong><br>Mon – Fri 8:00 – 19:00<br>Sat 9:00 – 14:00', DN, {
  mb: '16px'
}), P('<strong>Email</strong><br><a href="mailto:hello@example.com">hello@example.com</a>', DN, {
  link: DN.accent
})], DN, {
  pad: '36px',
  shadow: '0 20px 50px -20px rgba(219,39,119,0.25)'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(DN, 'Contact us', 'Find the right treatment for every patient', 'Not sure what you need? Call us or book a free 15-minute consultation.', {
  align: 'left',
  mb: '24px'
}), H('(555) 014-2290', DN, {
  level: 3,
  size: '28px',
  color: DN.accent
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book online', DN)], {
  mt: '12px'
})])], {
  tpl: ['1fr 1.1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), footer('SmileCraft', 'Modern family and cosmetic dentistry in Springfield since 2012.', [['Services', ['Check-ups', 'Implants', 'Aligners', 'Whitening']], ['Clinic', ['About', 'Team', 'Prices', 'Contact']], ['Info', ['Insurance', 'FAQ', 'Privacy', 'Imprint']]], {
  ...DN,
  fBg: '#500724',
  fInk: '#ffffff',
  fMuted: '#fbcfe8'
}, {
  socials: ['facebook', 'instagram', 'x']
})];

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
  hls: '-0.01em'
};
const activity = (photo, title, text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 900), title, {
  ratio: o.ratio || '4/3',
  radius: '4px'
}), H(title, WS, {
  level: 3,
  size: '24px',
  upper: false,
  weight: 800,
  mb: '8px'
}), P(text, WS, {
  size: '15px',
  mb: '10px'
}), P('<a href="#">Book this activity →</a>', WS, {
  color: WS.accent,
  link: WS.accent,
  size: '14px',
  weight: 700
})], {
  gap: '14px',
  className: o.className
});
const watersports = () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1530870110042-98b2cb110834', 1920), [coverNav('≋ CORAL BAY', ['Home', 'Activities', 'About', 'Reviews', 'Contact'], obtn('Reservation', '#ffffff', {
  pad: ['10px', '20px'],
  size: '14px',
  radius: '4px'
}), WS), H('Ride the<br>Coral Bay', WS, {
  level: 1,
  color: '#ffffff',
  size: 'clamp(3.4rem, 11vw, 9rem)',
  lh: 0.9,
  align: 'center',
  mb: '0'
}), P('Surf lessons, diving trips and sunset cruises on the clearest water of the coast.', WS, {
  color: '#e0f2fe',
  size: '18px',
  align: 'center',
  className: 'gk-kit-intro-center',
  mt: '20px'
})], {
  align: 'full',
  minHeight: 720,
  dim: 35,
  overlay: '#0b1f3a',
  position: 'top center',
  pad: ['28px', '24px', '96px']
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Explore Coral Bay with us!', WS, {
  size: 'clamp(2.4rem, 5vw, 3.8rem)',
  lh: 1,
  mb: '20px'
}), P('<strong>Small groups, certified instructors and all equipment included.</strong>', WS, {
  color: WS.ink,
  mb: '14px'
}), P('Whether it is your first time on a board or your hundredth dive, our local crew finds the perfect spot for your level and the day’s conditions.', WS, {
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([obtn('View all activities', WS.accent, {
  radius: '4px'
})], {
  mb: '64px'
}), activity('1544551763-46a013bb70d5', 'Scuba diving', 'Guided reef dives for beginners and certified divers – turtles included most days.')]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([activity('1502680390469-be75c86b636f', 'Surfing', 'Two-hour lessons on gentle waves, or board rental for experienced surfers.', {
  ratio: '4/5'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([activity('1507525428034-b723cf961d3e', 'Sunset cruise', 'Catamaran trip along the coast with drinks and a stop for snorkelling.')], {
  mt: '56px'
})])], {
  cols: [2, 2, 1],
  gap: [80, 40, 56]
})], {
  bg: '#ffffff',
  py: [112, 88, 64]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1516370873344-fb7c61054fa9', 1000), 'Friends running to the sea with surfboards', {
  ratio: '4/5',
  radius: '4px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('', {
  className: 'gk-kit-dash',
  bg: WS.accent,
  mb: '24px'
}), H('Get the most of Coral Bay', WS, {
  size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
  lh: 1,
  mb: '20px'
}), P('Combine activities into a day you will never forget. Our team plans the route, the gear and the best lunch spot on the beach.', WS, {
  mb: '20px'
}), checks(['Free hotel pick-up in the bay area', 'Photos and videos of your session', 'Wetsuits, boards and snorkel gear included', 'Insurance and safety briefing'], WS, {
  mark: '▸',
  color: WS.ink
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([obtn('Read more', WS.accent, {
  radius: '4px'
})], {
  mt: '28px'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [80, 48, 40],
  valign: 'center'
})], {
  bg: WS.sand,
  py: [112, 88, 64]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([H('Why choose us', WS, {
  align: 'center',
  size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
  mb: '56px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['Professional', 'ISA-certified instructors with 10+ years on the water.'], ['Friendly', 'Small groups of max. six, so everyone gets attention.'], ['Trusted', 'Over 4,800 five-star reviews from guests worldwide.'], ['Affordable', 'Fair prices, family discounts and free cancellation.']].map(([title, text], i) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([P(`0${i + 1}`, WS, {
  color: WS.accent,
  size: '13px',
  weight: 700,
  mb: '16px'
}), H(title, WS, {
  level: 3,
  size: '20px',
  upper: false,
  weight: 800,
  mb: '8px'
}), P(text, WS, {
  size: '15px'
})], {
  pad: ['24px', '0', '0'],
  className: 'gk-kit-topline'
})), {
  cols: [4, 2, 1],
  gap: [32, 32, 8]
})], {
  bg: '#ffffff',
  py: [112, 88, 64]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1519046904884-53103b34b206', 1600), [H('Couple sunset package', WS, {
  color: '#ffffff',
  size: 'clamp(1.8rem, 3.6vw, 2.6rem)',
  upper: false,
  weight: 800,
  mb: '10px'
}), P('Private catamaran, champagne and a two-course beach dinner – from $189 per couple.', WS, {
  color: '#ffffff',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book your place', WS, {
  radius: '4px'
})])], {
  minHeight: 460,
  dim: 40,
  overlay: '#0b1f3a',
  position: 'bottom left',
  radius: '4px',
  pad: ['48px', '40px']
})], {
  bg: '#ffffff',
  py: [0, 0, 0],
  pb: [112, 88, 64]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([H('What people say', WS, {
  size: 'clamp(2.2rem, 4.6vw, 3.4rem)',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([obtn('All reviews', WS.accent, {
  radius: '4px'
})], {
  justify: 'right'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 20],
  valign: 'center',
  mb: 48
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1500648767791-00dcc994a43e', 'Jonah Reyes', 'Stood up on my first wave after 20 minutes. The instructors are patient and so much fun.'], ['1438761681033-6461ffad8d80', 'Mia Hoffmann', 'The reef dive was the highlight of our holiday. Perfectly organised from pick-up to drop-off.'], ['1560250097-0b93528c311a', 'Chris Walker', 'Booked the sunset package for our anniversary – unforgettable. Worth every dollar.']].map(([photo, name, text]) => card([P(`“${text}”`, WS, {
  color: WS.ink,
  weight: 600,
  mb: '24px'
}), person(photo, name, 'Verified guest', WS)], WS, {
  radius: '6px',
  bw: false,
  shadow: '0 10px 30px -12px rgba(11,31,58,0.15)'
})), {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: '#f1f5f9',
  py: [112, 88, 64]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([P('Subscribe', WS, {
  color: WS.ink,
  size: '13px',
  weight: 800,
  upper: true,
  ls: '0.12em',
  mb: '12px'
}), H('Get the latest news and special offers in your inbox', WS, {
  size: 'clamp(1.6rem, 3vw, 2.2rem)',
  upper: false,
  weight: 800,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Join the newsletter', WS, {
  radius: '4px'
})]), P('One email per month. Unsubscribe anytime.', WS, {
  size: '13px',
  mt: '12px'
})])], {
  tpl: ['1.3fr 1fr', '1fr', '1fr'],
  gap: [48, 28, 24],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [80, 64, 48]
}), footer('≋ CORAL BAY', 'Pier 9, Slip 24 · Coral Bay Marina<br>+1 555 0148 790 · hello@example.com', [['About', ['Our story', 'Certification', 'Reviews', 'Contact']], ['Activities', ['Surfing', 'Scuba diving', 'Sunset cruise', 'Snorkelling']], ['Follow', ['Instagram', 'Facebook', 'YouTube', 'TikTok']]], {
  ...WS,
  fBg: WS.ink,
  fInk: '#ffffff',
  fMuted: '#94a3b8',
  upper: false
})];

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
  hls: '0.06em'
};
const aqTitle = (text, o = {}) => H(text, AQ, {
  size: o.size || 'clamp(2.8rem, 8vw, 6rem)',
  lh: 0.95,
  align: o.align,
  mb: o.mb || '20px'
});
const aqBtn = text => obtn(text, AQ.ink, {
  radius: '0',
  size: '13px',
  pad: ['10px', '22px'],
  bc: 'rgba(240,253,250,0.5)'
});
const splitCard = (photo, alt, title, text, cta, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), alt, {
  ratio: '4/3'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(title, AQ, {
  size: 'clamp(1.4rem, 2.4vw, 1.9rem)',
  weight: 400,
  align: 'center'
}), P(text, AQ, {
  align: 'center',
  size: '15px',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([aqBtn(cta)], {
  justify: 'center'
})], {
  bg: '#022322',
  pad: ['48px', '32px'],
  className: 'gk-kit-center-v'
})], {
  cols: [2, 2, 1],
  gap: [0, 0, 0],
  className: o.flip ? 'gk-kit-shadow gk-kit-flip-mobile' : 'gk-kit-shadow'
});
const aquarium = () => [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1607153333879-c174d265f1d2', 1920), [coverNav('Lumina', ['Home', 'Animals', 'Tickets', 'Gallery', 'Contact'], btn('Buy tickets', AQ, {
  radius: '0',
  pad: ['10px', '20px'],
  size: '14px'
}), AQ), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([P('They are finally here – come see the', AQ, {
  color: AQ.ink,
  size: '14px',
  upper: true,
  ls: '0.12em',
  mb: '8px'
}), aqTitle('Dolphins', {
  size: 'clamp(3.6rem, 12vw, 9rem)',
  mb: '0'
})]), P('<strong>Open daily</strong><br>9 AM – 9 PM', AQ, {
  color: AQ.ink,
  size: '18px',
  lh: 1.4
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 16],
  valign: 'end',
  mt: 160,
  className: 'gk-kit-cover-inner'
})], {
  align: 'full',
  minHeight: 680,
  dim: 45,
  overlay: '#042f2e',
  position: 'top center',
  pad: ['28px', '24px', '72px']
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([aqTitle('Daily<br>schedule', {
  mb: '0'
}), P('Today · all shows included in your ticket', AQ, {
  color: AQ.ink,
  size: '16px'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 12],
  valign: 'end',
  mb: 40
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['10:00', 'Sea otter breakfast'], ['10:30', 'Reef diver talk'], ['11:00', 'Dolphin show'], ['12:00', 'Penguin parade'], ['12:30', 'Ray touch pool'], ['13:30', 'Jellyfish lab'], ['15:00', 'Dolphin show'], ['16:30', 'Shark feeding'], ['18:00', 'Ocean film'], ['19:30', 'Night tunnel tour']].map(([time, show]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(time, AQ, {
  level: 3,
  size: '24px',
  weight: 400,
  ls: '0',
  mb: '6px'
}), P(show, AQ, {
  size: '14px',
  mb: '6px'
}), P('<a href="#">Read more</a>', AQ, {
  color: AQ.accent,
  link: AQ.accent,
  size: '12px',
  upper: true,
  ls: '0.1em'
})], {
  pad: ['18px', '0', '0'],
  className: 'gk-kit-topline'
})), {
  cols: [5, 3, 2],
  gap: [24, 24, 16],
  rowGap: [32, 28, 24]
})], {
  bg: AQ.bg,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([splitCard('1593508512255-86ab42a8e620', 'Visitor exploring the ocean in virtual reality', 'Book a virtual guided tour', 'Dive to 4,000 metres with our VR experience – no wetsuit needed. 20 minutes, ages 8+.', 'Learn more')], {
  bg: AQ.bg,
  py: [32, 24, 16]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([aqTitle('Animals', {
  align: 'center',
  mb: '12px'
}), P('More than 12,000 animals from 350 species live in our seven ocean zones.', AQ, {
  align: 'center',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([aqBtn('View all')], {
  justify: 'center',
  mb: '48px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1545671913-b89ac1b4ac10', 'Octopus'], ['1544551763-77ef2d0cfc6c', 'Reef fish'], ['1560275619-4662e36fa65c', 'Sharks']].map(([photo, name]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 700), name, {
  ratio: '4/5',
  mb: '18px'
}), H(name, AQ, {
  level: 3,
  size: '22px',
  weight: 400,
  align: 'center',
  mb: '0'
})], {
  bg: AQ.card,
  pad: ['0', '0', '22px'],
  gap: '18px',
  className: 'gk-kit-shadow'
})), {
  cols: [3, 3, 1],
  gap: [24, 16, 20]
})], {
  bg: AQ.bg,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([aqTitle('About', {
  mb: '12px'
}), H('Uncover a mysterious world', AQ, {
  level: 3,
  size: '20px',
  weight: 500,
  upper: false,
  ls: '0',
  mb: '12px'
}), P('Lumina is a non-profit ocean centre. Every ticket supports coral restoration and the rescue of injured sea animals along our coast.', AQ, {
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([aqBtn('Read more')])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1551244072-5d12893278ab', 1000), 'Sunlight above a coral reef', {
  ratio: '1/1'
})], {
  tpl: ['1fr 1.2fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: AQ.bg,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([splitCard('1583212292454-1fe6229603b7', 'Colourful coral reef', 'Check out our animal gallery', 'Hundreds of photos from our reef, kelp forest and polar zones – updated every week.', 'View gallery', {
  flip: true
})], {
  bg: AQ.bg,
  py: [32, 24, 16]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1559825481-12a05cc00344', 1600), [P('Now open', AQ, {
  color: AQ.ink,
  align: 'center',
  size: '16px',
  upper: true,
  ls: '0.2em',
  mb: '8px'
}), aqTitle('Ocean tunnel', {
  align: 'center',
  mb: '16px'
}), P('Walk through 80 metres of glass tunnel surrounded by sharks, rays and sea turtles.', AQ, {
  color: AQ.ink,
  align: 'center',
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([aqBtn('Learn more')], {
  justify: 'center'
})], {
  minHeight: 520,
  dim: 40,
  overlay: '#042f2e',
  pad: ['64px', '24px']
})], {
  bg: AQ.bg,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([H('Lumina', AQ, {
  level: 3,
  align: 'center',
  size: '28px',
  weight: 400,
  mb: '8px'
}), P('© 2026 Lumina Ocean World · Harbour Road 1, Bayside', AQ, {
  align: 'center',
  size: '14px',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['facebook', 'instagram', 'youtube'], {
  justify: 'center',
  color: AQ.ink,
  bg: 'rgba(240,253,250,0.1)'
})], {
  bg: '#021f1e',
  py: [56, 48, 40]
})];

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
  grad: 'linear-gradient(135deg,#4338ca 0%,#6366f1 45%,#0ea5e9 100%)'
};
const lgFeature = (title, text, o = {}) => card([...(o.photo ? [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(o.photo, 800), title, {
  ratio: '16/10',
  radius: '12px',
  mb: '20px'
})] : []), ...(o.big ? [H(o.big, LG, {
  size: 'clamp(2.6rem, 5vw, 3.6rem)',
  color: o.dark ? '#ffffff' : LG.accent,
  mb: '8px'
})] : []), H(title, LG, {
  level: 3,
  size: '19px',
  color: o.dark ? '#ffffff' : LG.ink,
  mb: '8px'
}), P(text, LG, {
  size: '15px',
  color: o.dark ? '#e0e7ff' : LG.muted
})], LG, o.dark ? {
  bw: false,
  bg: '#4338ca',
  className: 'gk-kit-grad-card'
} : {});
const leadgen = () => [(0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('LeadPulse', ['Product', 'Solutions', 'Pricing', 'Customers'], [btn('Get started', LG, {
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: LG.ink,
  muted: LG.muted,
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('New: AI lead scoring is live', {
  dot: LG.sky,
  color: LG.accent,
  bg: '#ffffff'
}), H(`Generate ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('3× more', LG.accent)} qualified leads in 30 days`, LG, {
  level: 1,
  align: 'center',
  size: 'clamp(2.4rem, 5.4vw, 4.2rem)',
  lh: 1.06,
  ls: '-0.035em',
  mb: '20px'
}), P('Join 15,000+ businesses using LeadPulse to capture, score and nurture leads automatically – set up in 5 minutes, no code required.', LG, {
  align: 'center',
  size: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Start generating leads today', LG)], {
  justify: 'center',
  mt: '32px'
}), P('No credit card required · 14-day free trial', LG, {
  align: 'center',
  size: '13px',
  mt: '12px'
})], {
  mb: '56px',
  className: 'gk-kit-intro-center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1551288049-bebda4e38f71', 1600), 'LeadPulse analytics dashboard', {
  ratio: '16/8',
  radius: '14px'
})], {
  className: 'gk-kit-frame'
})], {
  gradient: 'linear-gradient(180deg,#e0e7ff 0%,#eef2ff 45%,#ffffff 100%)',
  py: [80, 64, 48]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Trusted by the world’s fastest-growing sales teams',
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LG, '', 'Stuck in a lead generation loop that isn’t working?', 'You are spending time, money and effort – but the results just aren’t adding up.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([card([H('Sound familiar?', LG, {
  level: 3,
  size: '20px'
}), checks(['Ad spend burnout with nothing to show', 'Wasted hours chasing unqualified leads', 'Data scattered across five tools', 'Sales team frustrated with poor lead quality'], {
  ...LG,
  accent: '#ef4444'
}, {
  mark: '✕'
})], LG, {
  bg: '#fef2f2',
  bc: '#fee2e2'
}), card([H('Imagine this was your new normal', LG, {
  level: 3,
  size: '20px'
}), checks(['24/7 qualified leads without lifting a finger', '40% lower cost per lead', 'Crystal-clear analytics in one dashboard', 'Sales reps closing deals, not chasing them'], {
  ...LG,
  accent: '#16a34a'
})], LG, {
  bg: '#f0fdf4',
  bc: '#dcfce7'
})], {
  cols: [2, 2, 1],
  gap: [24, 20, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LG, 'The platform', 'The complete lead generation system that actually works', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600880292203-757bb62b4baf', 1000), 'Sales team celebrating a closed deal', {
  ratio: '4/3',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Everything you need to turn clicks into clients', LG, {
  size: 'clamp(1.6rem, 3vw, 2.2rem)'
}), P('Landing pages, forms, chat and email sequences that work together – and push every qualified lead straight into your CRM.', LG, {
  mb: '20px'
}), checks(['Convert visitors with smart forms', 'Score leads with AI in real time', 'Sync to HubSpot, Salesforce &amp; Pipedrive'], LG)])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center',
  mb: 80
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Turn traffic into revenue – automatically', LG, {
  size: 'clamp(1.6rem, 3vw, 2.2rem)'
}), P('Automated follow-ups reach every lead within 60 seconds, so no opportunity goes cold while your team sleeps.', LG, {
  mb: '20px'
}), checks(['Personalised email &amp; SMS sequences', 'Meetings booked straight into calendars', 'Revenue attribution for every channel'], LG)]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1517245386807-bb43f82c33c4', 1000), 'Team reviewing lead reports on a laptop', {
  ratio: '4/3',
  radius: '20px'
})], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center',
  className: 'gk-kit-flip-mobile'
})], {
  bg: LG.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LG, 'Features', 'Optimized for growth', 'Powerful tools that scale with your pipeline.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([lgFeature('Drag-and-drop page builder', 'Launch high-converting landing pages in minutes – no developer needed.', {
  photo: '1460925895917-afdab827c52f'
}), lgFeature('Dynamic lead scoring', 'AI ranks every lead by intent, fit and engagement.', {
  big: '+118%'
}), lgFeature('Conversion insights', 'See exactly which channels and pages produce revenue.', {
  big: '4.8×',
  dark: true
}), lgFeature('Multi-channel campaigns', 'Email, SMS, ads and chat from a single workflow.', {
  big: '3TB'
}), lgFeature('CRM sync &amp; enrichment', 'Company data, socials and tech stack added automatically.', {
  photo: '1504868584819-f8e8b4b6d7e3'
}), lgFeature('Uptime you can trust', '99.99% SLA, SOC 2 Type II and GDPR-ready.', {
  big: '99.99%'
})], {
  cols: [3, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.pill)('Limited-time offer', {
  dot: '#fde68a',
  color: '#ffffff',
  bg: 'rgba(255,255,255,0.15)'
}), H('Start generating more leads today', LG, {
  align: 'center',
  color: '#ffffff',
  size: 'clamp(2rem, 4vw, 3rem)'
}), P('Get 3 months of Pro for the price of one – offer ends soon.', LG, {
  align: 'center',
  color: '#e0e7ff',
  mb: '32px'
})], {
  className: 'gk-kit-intro-center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['07', 'Days'], ['12', 'Hours'], ['45', 'Minutes'], ['30', 'Seconds']].map(([n, l]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(n, LG, {
  level: 3,
  align: 'center',
  color: '#ffffff',
  size: 'clamp(2.4rem, 5vw, 3.4rem)',
  mb: '0'
}), P(l, LG, {
  align: 'center',
  color: '#e0e7ff',
  size: '13px'
})], {
  bg: 'rgba(255,255,255,0.12)',
  radius: '16px',
  pad: ['20px', '12px']
})), {
  cols: [4, 4, 2],
  gap: [16, 12, 12],
  className: 'gk-kit-narrow'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Claim my offer', {
  bg: '#ffffff',
  color: LG.accent
})], {
  justify: 'center',
  mt: '36px'
})], {
  gradient: LG.grad,
  py: [88, 72, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LG, '', 'Why choose LeadPulse?', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['⚡', 'Launch in 5 minutes', 'Ready-made funnels for 30+ industries.'], ['🤖', 'Automation built in', 'Workflows that nurture leads for you.'], ['🔌', '300+ integrations', 'Works with the tools you already use.'], ['🔒', 'Secure by default', 'SOC 2, GDPR and SSO on every plan.']].map(([icon, title, text]) => card([iconTile(icon, LG.soft), H(title, LG, {
  level: 3,
  size: '18px',
  mb: '6px'
}), P(text, LG, {
  size: '15px'
})], LG)), {
  cols: [4, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('“The dashboard is clean, the automation is powerful, and setup was a breeze.”', LG, {
  size: 'clamp(1.6rem, 3vw, 2.3rem)',
  lh: 1.25
}), person('1580489944761-15a19d654956', 'Laura Chen', 'Head of Growth, Brightlane', LG)]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573164713988-8665fc963095', 900), 'Customer working with LeadPulse', {
  ratio: '4/3',
  radius: '20px'
})], {
  tpl: ['1.2fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center',
  mb: 48
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1556157382-97eda2d62296', 'Mark Ellis', 'We doubled demo bookings in six weeks without increasing ad spend.'], ['1544005313-94ddf0286df2', 'Priya Nair', 'Lead scoring alone saves our reps ten hours every week.'], ['1507679799987-c73779587ccf', 'James Porter', 'The best onboarding we have had from any SaaS tool. Live in one afternoon.']].map(([photo, name, text]) => card([stars(), P(`“${text}”`, LG, {
  color: LG.ink,
  size: '15px',
  mb: '20px'
}), person(photo, name, 'Customer', LG)], LG)), {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: LG.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LG, '', 'Frequently asked questions', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/accordion-block', {
  panels: [{
    title: 'How quickly will I see results?',
    content: 'Most customers see a lift in qualified leads within the first 30 days. Our onboarding team helps you launch your first funnel in week one.'
  }, {
    title: 'Do I need technical skills?',
    content: 'No. Everything is drag-and-drop, and our templates are ready to publish.'
  }, {
    title: 'Will it work with my existing tools?',
    content: 'Yes – LeadPulse connects to 300+ apps including HubSpot, Salesforce, Slack and Zapier.'
  }, {
    title: 'Is my data secure?',
    content: 'Your data is encrypted, hosted in the EU or US, and we are SOC 2 Type II certified.'
  }],
  activeColor: LG.accent,
  titleBgColor: '#f9fafb',
  contentBgColor: '#ffffff',
  borderRadius: 12,
  allowMultiple: false
})], {
  className: 'gk-kit-intro-center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['24K', 'Leads captured per month'], ['3M', 'Additional revenue generated'], ['98%', 'Customer satisfaction']].map(([n, l]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(n, LG, {
  level: 3,
  align: 'center',
  size: 'clamp(2.6rem, 5vw, 3.6rem)',
  color: LG.accent,
  mb: '4px'
}), P(l, LG, {
  align: 'center',
  size: '15px'
})])), {
  cols: [3, 3, 1],
  gap: [24, 16, 28]
})], {
  bg: '#ffffff',
  py: [24, 24, 16],
  pb: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Join 1M+ teams using the smartest lead gen tool', LG, {
  color: '#ffffff',
  size: 'clamp(1.9rem, 3.6vw, 2.75rem)'
}), P('Book a free 30-minute strategy call and get a custom growth plan for your business.', LG, {
  color: '#e0e7ff'
})]), card([H('Book your free strategy call', LG, {
  level: 3,
  size: '20px'
}), checks(['Personal funnel audit', 'Benchmarks for your industry', 'A 90-day action plan'], LG, {
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Choose a time', LG)])], LG, {
  pad: '32px',
  bw: false
})], {
  tpl: ['1.1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  gradient: LG.grad,
  py: [96, 80, 56]
}), footer('LeadPulse', 'The lead generation platform for modern sales teams.', [['Product', ['Features', 'Pricing', 'Integrations', 'Changelog']], ['Company', ['About', 'Careers', 'Blog', 'Contact']], ['Legal', ['Privacy', 'Terms', 'Security', 'DPA']]], {
  ...LG,
  fBg: '#f9fafb'
})];

// ===========================================================================
// 5. SaaS & digital agency – Nexora (emerald)
// ===========================================================================
const NX = {
  ink: '#0f172a',
  muted: '#64748b',
  accent: '#059669',
  soft: '#ecfdf5',
  line: '#e2e8f0'
};
const nxStatRow = (photo, alt, title, text, s1, s2, flip) => {
  const txt = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(title, NX, {
    size: 'clamp(1.6rem, 3vw, 2.2rem)'
  }), P(text, NX, {
    mb: '28px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([s1, s2].map(([n, l]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(n, NX, {
    level: 3,
    size: 'clamp(2rem, 4vw, 2.6rem)',
    color: NX.accent,
    mb: '4px'
  }), P(l, NX, {
    size: '14px'
  })])), {
    cols: [2, 2, 2],
    gap: [24, 24, 16]
  })]);
  const pic = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), alt, {
    ratio: '4/3',
    radius: '20px'
  });
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(flip ? [txt, pic] : [pic, txt], {
    tpl: ['1fr 1fr', '1fr', '1fr'],
    gap: [64, 40, 32],
    valign: 'center',
    className: flip ? 'gk-kit-flip-mobile' : undefined
  });
};
const nxPrice = (planTitle, price, sub, popular) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/pricing-card-block', {
  planTitle,
  price,
  currencySymbol: '$',
  billingPeriod: '/month',
  features: [sub, 'Free 14-day trial', 'Cancel anytime', 'Priority support'],
  isPopular: popular,
  badgeText: 'Popular',
  buttonLabel: 'Purchase now',
  primaryColor: NX.accent,
  cardBgColor: '#ffffff',
  textColor: NX.ink,
  borderRadius: 20
});
const agency = () => [(0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('Nexora', ['Home', 'Features', 'Pricing', 'Blog', 'Contact'], [btn('Get started', NX, {
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: NX.ink,
  muted: NX.muted,
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('SaaS &amp; digital agency services.', NX, {
  level: 1,
  size: 'clamp(2.5rem, 5.4vw, 4.2rem)',
  weight: 800,
  lh: 1.05,
  ls: '-0.035em',
  mb: '20px'
}), P('We design, build and grow software products and websites for ambitious companies – strategy, UX, development and marketing in one team.', NX, {
  size: '18px',
  mb: '20px'
}), checks(['Free 14-day trial', 'Cancel anytime'], NX), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Get started', NX)], {
  mt: '28px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1504868584819-f8e8b4b6d7e3', 1000), 'Analytics dashboard on a laptop', {
  ratio: '4/3',
  radius: '14px'
})], {
  className: 'gk-kit-frame gk-kit-frame--green'
})], {
  tpl: ['1.1fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 36],
  valign: 'center'
})], {
  gradient: 'linear-gradient(135deg,#ecfdf5 0%,#ffffff 55%,#f0f9ff 100%)',
  py: [96, 72, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(NX, '', 'Kick-start your strategic digital marketing campaign', 'From first idea to measurable growth – pick the expertise you need.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['📣', 'Digital marketing', 'SEO, paid ads and content that bring qualified traffic.'], ['🧩', 'Enterprise technology', 'Custom SaaS platforms, APIs and integrations.'], ['💡', 'Business innovation', 'Product strategy and rapid MVPs to test ideas fast.']].map(([icon, title, text]) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([iconTile(icon, NX.soft), H(title, NX, {
  level: 3,
  size: '18px',
  mb: '0'
})], {
  row: true,
  nowrap: true,
  gap: '14px',
  mb: '12px'
}), P(text, NX, {
  size: '15px'
})], NX)), {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([nxStatRow('1519389950473-47ba0277781c', 'Team working on laptops', 'We stop interrupting what people are interested in', 'Helpful, relevant marketing that people actually want – built on data, not guesswork.', ['97.8%', 'Open rate achieved'], ['7.35%', 'Abandoned cart rate']), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([], {
  mb: '80px'
}), nxStatRow('1551434678-e076c223a692', 'Developers reviewing performance', 'Get tips &amp; tricks on how to skyrocket your sales', 'Monthly growth reviews with clear next steps, so every sprint moves your numbers.', ['22%', 'Click-through rate'], ['$1.2', 'Revenue per click'], true)], {
  bg: NX.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1531545514256-b1400bc00f31', 1000), 'Nexora team collaborating', {
  ratio: '4/3',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(NX, 'About', 'Who we are', 'A team of 40 designers, engineers and marketers in Berlin and Lisbon. Since 2015 we have shipped 220+ products for startups and enterprises.', {
  align: 'left',
  mb: '20px'
}), checks(['Free 14-day trial', 'Cancel anytime'], NX), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Get started', NX)], {
  mt: '28px'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(NX, '', 'Testimonials from our satisfied clients', 'Teams around the world rely on Nexora for product and growth.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1500648767791-00dcc994a43e', 'Ryan Edmonds', 'Nexora rebuilt our platform in four months. Page speed tripled and sign-ups followed.'], ['1438761681033-6461ffad8d80', 'Marie Garibay', 'Strategic, fast and honest. They feel like part of our own team.'], ['1560250097-0b93528c311a', 'Clarence Harris', 'Our SEO traffic grew 180% in a year. Best agency decision we made.']].map(([photo, name, text], i) => card([person(photo, name, 'Client', NX), stars(), P(`“${text}”`, NX, {
  size: '15px',
  color: NX.ink
})], NX, {
  shadow: '0 20px 40px -24px rgba(15,23,42,0.25)',
  bw: false,
  className: i === 1 ? 'gk-kit-offset-sm' : undefined
})), {
  cols: [3, 1, 1],
  gap: [24, 16, 16]
})], {
  bg: '#f8fafc',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Discover effortless customer support', NX, {
  size: 'clamp(1.6rem, 3vw, 2.2rem)'
}), P('One dedicated team, one Slack channel and a guaranteed response within two business hours.', NX, {
  mb: '20px'
}), checks(['Increase conversion rates', 'Gain an edge over competitors', 'Advanced caching and CDN', 'Complete image optimisation', 'Clean HTML, CSS and JavaScript'], NX), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Get started', NX)], {
  mt: '28px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573164713988-8665fc963095', 1000), 'Support engineer at work', {
  ratio: '4/3',
  radius: '24px'
})], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center',
  className: 'gk-kit-flip-mobile'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(NX, 'Pricing', 'We build digital products for your success', 'Simple monthly plans. Upgrade or cancel anytime.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([nxPrice('Standard', '39', 'Best for individuals', false), nxPrice('Pro', '59', 'Best for professionals', true), nxPrice('Business', '99', 'Best for teams', false)], {
  cols: [3, 1, 1],
  gap: [24, 20, 20]
})], {
  bg: NX.soft,
  py: [96, 80, 56]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Proud partners of',
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Get an easy start with Nexora now', NX, {
  color: '#ffffff',
  size: 'clamp(1.9rem, 3.6vw, 2.75rem)'
}), P('Everything you need to confidently run your business online. Create your free account in under a minute.', NX, {
  color: '#d1fae5',
  mb: '20px'
}), checks(['Free 14-day trial', 'Cancel anytime'], {
  ...NX,
  accent: '#a7f3d0'
}, {
  color: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Try for free', {
  bg: '#ffffff',
  color: NX.accent
})], {
  mt: '28px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1580489944761-15a19d654956', 800), 'Happy Nexora customer', {
  ratio: '1/1',
  radius: '24px'
})], {
  tpl: ['1.3fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  gradient: 'linear-gradient(135deg,#047857 0%,#059669 60%,#10b981 100%)',
  py: [88, 72, 56]
}), footer('Nexora', 'Product design, development and growth for ambitious companies.<br>Torstraße 12, Berlin · +49 30 1234 567', [['Product', ['Plans &amp; pricing', 'How it works', 'Web development', 'SEO']], ['Resources', ['About', 'Contact', 'Blog', 'Team']], ['Legal', ['Privacy', 'Terms', 'Imprint', 'Cookies']]], {
  ...NX,
  fBg: '#022c22',
  fInk: '#ffffff',
  fMuted: '#a7f3d0'
}, {
  socials: ['facebook', 'x', 'instagram']
})];

// ===========================================================================
// 6. Charity – Brightwell Foundation (amber)
// ===========================================================================
const CH = {
  ink: '#1c1917',
  muted: '#78716c',
  accent: '#d97706',
  soft: '#fffbeb',
  line: '#f5f5f4'
};
const cause = (photo, title, raised, goal) => card([H(title, CH, {
  level: 3,
  size: '18px',
  align: 'center',
  mb: '8px'
}), P('Every donation goes directly to the project – 100% transparent.', CH, {
  align: 'center',
  size: '14px',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '4/3',
  radius: '12px'
}), P(`<strong>$${raised}</strong> raised of $${goal}`, CH, {
  align: 'center',
  size: '14px',
  color: CH.ink,
  mt: '16px',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Donate now ›', CH, {
  radius: '6px',
  size: '14px'
})], {
  justify: 'center'
})], CH, {
  pad: '24px',
  shadow: '0 20px 40px -28px rgba(28,25,23,0.35)'
});
const numbered = (n, photo, alt, eyebrow, title, text, items, flip) => {
  const pic = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 900), alt, {
    ratio: '4/3',
    radius: '8px'
  }), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(String(n), {
    color: CH.accent,
    bg: '#ffffff',
    size: '22px',
    weight: 800,
    pad: ['8px', '16px'],
    className: 'gk-kit-num-badge'
  })], {
    className: 'gk-kit-rel'
  });
  const txt = (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(CH, eyebrow, title, text, {
    align: 'left',
    mb: '20px',
    size: 'clamp(1.6rem, 3vw, 2.2rem)'
  }), ...(items ? [checks(items, CH)] : [])]);
  return (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(flip ? [txt, pic] : [pic, txt], {
    tpl: ['1fr 1fr', '1fr', '1fr'],
    gap: [64, 40, 28],
    valign: 'center',
    mb: 72,
    className: flip ? 'gk-kit-flip-mobile' : undefined
  });
};
const charity = () => [(0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('Brightwell', ['Home', 'Causes', 'About', 'Events', 'Contact'], [btn('Donate now', CH, {
  pad: ['10px', '20px'],
  size: '14px',
  radius: '6px'
})], {
  ink: CH.ink,
  muted: CH.muted,
  bg: '#ffffff'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Donations that change the world.', CH, {
  level: 1,
  size: 'clamp(2.6rem, 5.6vw, 4.4rem)',
  lh: 1.05,
  ls: '-0.03em',
  mb: '20px'
}), P('Brightwell funds clean water, school meals and healthcare for families in 14 countries. Your gift starts working the day you give it.', CH, {
  size: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Give monthly', CH, {
  radius: '6px'
}), obtn('More details', CH.ink, {
  radius: '6px',
  bc: '#d6d3d1'
})], {
  mt: '32px',
  gap: '12px'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1497486751825-1233686d5d80', 1000), 'Smiling children supported by Brightwell', {
  ratio: '4/3',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([P('Total funds raised', CH, {
  size: '13px',
  mb: '4px'
}), H('$98,485', CH, {
  level: 3,
  size: '30px',
  mb: '10px'
}), P('<a href="#">See all causes →</a>', CH, {
  color: CH.accent,
  link: CH.accent,
  size: '14px',
  weight: 700
})], {
  bg: '#ffffff',
  pad: '22px',
  radius: '14px',
  shadow: '0 20px 40px -16px rgba(28,25,23,0.3)',
  className: 'gk-kit-float-card'
})], {
  className: 'gk-kit-rel'
})], {
  tpl: ['1fr 1.1fr', '1fr', '1fr'],
  gap: [64, 48, 36],
  valign: 'center'
})], {
  gradient: 'linear-gradient(180deg,#fffbeb 0%,#ffffff 100%)',
  py: [88, 72, 48]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(CH, 'Our causes', 'You can help lots of people by donating a little', 'Choose a project close to your heart – or give where it is needed most.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cause('1524069290683-0457abfe42c3', 'School meals for 500 children', '8,240', '12,000'), cause('1509099836639-18ba1795216d', 'A safe water well for Kasama', '15,900', '20,000'), cause('1488521787991-ed7bbaae773c', 'Books and uniforms for girls', '4,310', '9,000')], {
  cols: [3, 2, 1],
  gap: [24, 20, 20]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1559027615-cd4628902d4a', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([P('Because we can', CH, {
  color: '#fcd34d',
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.12em',
  mb: '12px'
}), H('How can we help them?', CH, {
  color: '#ffffff',
  size: 'clamp(1.9rem, 3.6vw, 2.75rem)'
}), P('Join 6,000 volunteers who give their time, skills and energy to communities that need it most.', CH, {
  color: '#e7e5e4',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Become a volunteer', CH, {
  radius: '6px'
})])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['❤️', 'Give with love', 'Monthly gifts fund long-term projects.'], ['🤝', 'Give with confidence', 'Audited accounts, published every year.'], ['🎯', 'Create lasting change', 'We stay until communities thrive.'], ['💧', 'Choose a water project', 'One well serves 1,500 people.']].map(([icon, title, text]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(icon, {
  size: '24px',
  mb: '10px'
}), H(title, CH, {
  level: 3,
  color: '#ffffff',
  size: '17px',
  mb: '4px'
}), P(text, CH, {
  color: '#d6d3d1',
  size: '14px'
})])), {
  cols: [2, 2, 1],
  gap: [32, 28, 24]
})], {
  tpl: ['1fr 1.2fr', '1fr', '1fr'],
  gap: [64, 40, 40],
  valign: 'center',
  className: 'gk-kit-cover-inner'
})], {
  align: 'full',
  minHeight: 520,
  dim: 75,
  overlay: '#1c1917',
  pad: ['96px', '24px']
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(CH, 'Help us now', 'Water today. Health tomorrow. Hope for generations.', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1593113598332-cd288d649433', 1200), 'Volunteers packing aid boxes', {
  ratio: '16/10',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['15', 'Years of experience'], ['23K', 'Volunteers'], ['19', 'Worldwide offices']].map(([n, l]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(n, CH, {
  level: 3,
  size: 'clamp(2.4rem, 4vw, 3rem)',
  color: CH.accent,
  mb: '0'
}), P(l, CH, {
  size: '14px',
  upper: true,
  ls: '0.06em'
})])), {
  cols: [1, 3, 3],
  gap: [28, 16, 12]
})], {
  tpl: ['2fr 1fr', '1fr', '1fr'],
  gap: [48, 32, 28],
  valign: 'center'
})], {
  bg: CH.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([I(CH, 'Testimonials', 'Real people. Real transformation.', 'Stories from the families and volunteers behind every project.', {
  align: 'left',
  mb: '0'
}), ...[['1532629345422-7515f3d16bb6', 'Having clean water nearby means my daughter can go to school again.', 'Amara, Kasama'], ['1469571486292-0ba58a3f068b', 'Volunteering with Brightwell changed how I see the world.', 'Jonas, volunteer']].map(([photo, text, who]) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 700), who, {
  ratio: '4/3',
  radius: '10px'
}), P(`“${text}”`, CH, {
  color: CH.ink,
  size: '15px',
  mt: '16px',
  mb: '8px'
}), P(`<strong>${who}</strong>`, CH, {
  size: '14px'
})], CH, {
  pad: '14px 14px 22px'
}))], {
  cols: [3, 2, 1],
  gap: [24, 20, 20],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([numbered(1, '1503454537195-1dcabb73ffb9', 'Child smiling after a school festival', 'Join us', 'Support a clean water project today', '$35 gives one person safe water for life. Your name is added to the well’s plaque.', ['Help for education', 'Help for water', 'Help for food']), numbered(2, '1527525443983-6e60c75fff46', 'Hands joined together', 'Join us', 'Step forward, serve humanity, reach out and help', 'Organise a fundraiser at work, school or online – we send you everything you need.', ['Fundraising kit by post', 'Personal donation page'], true), numbered(3, '1559027615-cd4628902d4a', 'Volunteer at a community event', 'Featured campaign', 'Small actions lead to big change', 'This winter we deliver 10,000 warm-meal packs. Every $10 provides one week of meals.')], {
  bg: CH.soft,
  py: [96, 80, 56],
  pb: [24, 8, 0]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([I(CH, 'The Brightwell way', 'We do it all for people', '', {
  align: 'left',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('More services', CH, {
  radius: '6px'
})], {
  justify: 'right'
})], {
  tpl: ['1fr auto', '1fr auto', '1fr'],
  gap: [24, 24, 20],
  valign: 'end',
  mb: 40
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1509099836639-18ba1795216d', '💧', 'Pure water', 'Wells, filters and hygiene training for whole villages.'], ['1488521787991-ed7bbaae773c', '🩺', 'Medical facilities', 'Mobile clinics and trained local health workers.'], ['1524069290683-0457abfe42c3', '📚', 'Education', 'Classrooms, teachers and school meals.']].map(([photo, icon, title, text]) => card([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '4/3',
  radius: '10px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(icon, {
  size: '22px',
  mt: '18px',
  mb: '8px'
}), H(title, CH, {
  level: 3,
  size: '19px',
  mb: '6px'
}), P(text, CH, {
  size: '15px',
  mb: '12px'
}), P('<a href="#">Read more →</a>', CH, {
  color: CH.accent,
  link: CH.accent,
  size: '14px',
  weight: 700
})], CH, {
  pad: '14px 14px 24px'
})), {
  cols: [3, 2, 1],
  gap: [24, 20, 20]
})], {
  bg: '#ffffff',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([I(CH, 'Join us', 'Reach out and help at our latest events', 'Meet the team, volunteer for a day or bring your family along.', {
  align: 'left',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('View all events', CH, {
  radius: '6px'
})])]), ...[['1532629345422-7515f3d16bb6', '4 Dec', 'Charity run for clean water', 'Riverside Park · 09:00'], ['1469571486292-0ba58a3f068b', '23 Dec', 'Winter meal-pack day', 'Community Hall · 10:00']].map(([photo, date, title, meta]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '4/3',
  radius: '10px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(date, {
  bg: '#ffffff',
  color: CH.ink,
  size: '14px',
  weight: 800,
  pad: ['8px', '12px'],
  radius: '8px',
  className: 'gk-kit-num-badge'
})], {
  className: 'gk-kit-rel'
}), H(title, CH, {
  level: 3,
  size: '18px',
  mb: '6px'
}), P(`📍 ${meta}`, CH, {
  size: '14px'
})], {
  gap: '14px'
}))], {
  cols: [3, 2, 1],
  gap: [32, 24, 28],
  valign: 'center'
})], {
  bg: CH.soft,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1524069290683-0457abfe42c3', 1920), [P('Our mission', CH, {
  align: 'center',
  color: '#fcd34d',
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.12em',
  mb: '12px'
}), H('We won’t stop until every child has safe water', CH, {
  align: 'center',
  color: '#ffffff',
  size: 'clamp(2rem, 4vw, 3rem)'
}), P('Since 2011 we have reached 1.2 million people. Help us reach the next million.', CH, {
  align: 'center',
  color: '#e7e5e4',
  mb: '28px',
  className: 'gk-kit-intro-center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Our process', CH, {
  radius: '6px'
})], {
  justify: 'center'
})], {
  align: 'full',
  minHeight: 480,
  dim: 70,
  overlay: '#1c1917'
}), footer('Brightwell', 'An international non-profit bringing clean water, education and healthcare to families in need.', [['Quick links', ['Become a volunteer', 'Case studies', 'Sponsors', 'FAQ']], ['Explore', ['About us', 'Our history', 'Our services', 'Annual report']], ['Contact', ['hello@example.com', '+1 555 0102 330', 'Press', 'Careers']]], {
  ...CH,
  fBg: CH.ink,
  fInk: '#ffffff',
  fMuted: '#a8a29e'
}, {
  socials: ['facebook', 'instagram', 'youtube']
})];

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
  lMuted: '#78716c'
};
const LT = {
  ink: OB.lInk,
  muted: OB.lMuted,
  accent: OB.accent,
  line: '#e7e5e4',
  card: '#ffffff'
};
const tag = (text, t) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  color: t.ink,
  size: '12px',
  weight: 500,
  radius: '999px',
  bg: 'rgba(127,127,127,0.16)',
  pad: ['4px', '12px'],
  mb: '0'
});
const obWork = (photo, title, tags, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), title, {
  ratio: '16/11',
  radius: '18px'
}), H(title, OB, {
  level: 3,
  size: '20px',
  weight: 600,
  mb: '10px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)(tags.map(x => tag(x, OB)), {
  row: true,
  gap: '8px'
})], {
  gap: '16px',
  className: o.className
});
const obService = (title, text, items) => card([H(title, LT, {
  level: 3,
  size: '22px',
  weight: 600,
  mb: '10px'
}), P(text, LT, {
  size: '15px',
  mb: '18px'
}), checks(items, LT, {
  size: '14px'
})], LT, {
  pad: '32px',
  radius: '20px'
});
const studio = () => [(0,_templates_extra__WEBPACK_IMPORTED_MODULE_2__.header)('ORBIT', ['About', 'Services', 'Work', 'Journal', 'Contact'], [btn('Schedule a call', OB, {
  pad: ['10px', '20px'],
  size: '14px'
})], {
  ink: OB.ink,
  muted: OB.muted,
  bg: OB.bg
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(`Where bold ideas meet ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('brilliant', OB.accent)} design`, OB, {
  level: 1,
  align: 'center',
  size: 'clamp(2.6rem, 6vw, 4.8rem)',
  weight: 600,
  lh: 1.04,
  ls: '-0.04em',
  mb: '20px'
}), P('Orbit is a design and development studio for startups and brands that want to stand out – websites, products and identities people remember.', OB, {
  align: 'center',
  size: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Start a project', OB)], {
  justify: 'center',
  mt: '32px'
})], {
  mb: '56px',
  className: 'gk-kit-intro-center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1552581234-26160f608093', 1600), 'Orbit Studio team in a workshop', {
  ratio: '16/8',
  radius: '24px'
})], {
  pad: '8px',
  radius: '30px',
  bw: '1px',
  bc: 'rgba(255,107,53,0.35)'
})], {
  bg: OB.bg,
  py: [72, 64, 48]
}), (0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.logoStrip)({
  label: 'Brands we have helped grow',
  bg: OB.bg,
  color: '#d6d3d1',
  labelColor: OB.muted,
  py: [40, 40, 32]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H('Unforgettable websites, brands &amp; visuals for bold visionaries', LT, {
  size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
  weight: 600
}), P('Founded in 2014, we are a collective of designers, developers and strategists who believe great digital experiences should be beautiful, functional and human-centred.', LT, {
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([obtn('Know more about us', OB.lInk, {
  bc: '#d6d3d1'
})])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1499951360447-b19be8fe80f5', 1000), 'Designer workspace', {
  ratio: '4/3',
  radius: '20px'
})], {
  tpl: ['1.1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center',
  mb: 56
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['⏱️', '72', 'Hour prototype guarantee'], ['🚀', '100+', 'Brands transformed'], ['✨', '10+', 'Years of pixel-perfect craft']].map(([icon, n, l]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([iconTile(icon, '#fff1eb'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([H(n, LT, {
  level: 3,
  size: '28px',
  weight: 600,
  mb: '0'
}), P(l, LT, {
  size: '14px'
})])], {
  row: true,
  nowrap: true,
  gap: '16px'
})), {
  cols: [3, 3, 1],
  gap: [24, 16, 20],
  className: 'gk-kit-meta gk-kit-meta--pad'
})], {
  bg: OB.light,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LT, '', 'Services we offer', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([obService('1. UI/UX design', 'Interfaces that delight users and drive conversions.', ['User flows that boost engagement', 'Mobile-first, award-worthy interfaces', 'Prototypes in 72 hours or less']), obService('2. Web development', 'Websites that load fast, rank higher and grow with you.', ['90+ PageSpeed scores guaranteed', 'SEO-optimised out of the box', 'Editable CMS for non-tech teams']), obService('3. Brand design', 'Visual identities that command attention and build trust.', ['Logos with a story', 'Visual systems built to scale', 'Style guides your team will use']), obService('4. No-code products', 'Launch MVPs without engineering headaches.', ['MVPs in four weeks', 'Workflows that save hours', 'API integrations that just work'])], {
  cols: [2, 2, 1],
  gap: [20, 20, 16]
})], {
  bg: '#f5f5f4',
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I({
  ...OB
}, '', 'Showcase of selected work', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([obWork('1460925895917-afdab827c52f', 'Finlytic – fintech dashboard', ['Product UI', 'Data viz']), obWork('1556761175-b413da4baf72', 'Greenly – social campaign', ['Animation', 'Brand'], {
  className: 'gk-kit-offset-sm'
}), obWork('1542744173-8e7e53415bb0', 'Lexum – law firm website', ['CMS', 'Webflow']), obWork('1531482615713-2afd69097998', 'Kidra – EdTech MVP', ['No-code', 'Payments'], {
  className: 'gk-kit-offset-sm'
})], {
  cols: [2, 2, 1],
  gap: [40, 24, 36],
  rowGap: [48, 40, 36]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([obtn('View all case studies', OB.ink, {
  bc: 'rgba(250,250,249,0.3)'
})], {
  justify: 'center',
  mt: '48px'
})], {
  bg: OB.bg,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LT, '', 'What clients say about us', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([card([H('4.9', LT, {
  align: 'center',
  size: '48px',
  weight: 600,
  mb: '4px'
}), P('★★★★★', LT, {
  align: 'center',
  color: '#f59e0b',
  mb: '4px'
}), P('120+ verified reviews', LT, {
  align: 'center',
  size: '14px',
  mb: '20px'
}), H('Where ideas meet extraordinary design', LT, {
  level: 3,
  align: 'center',
  size: '18px',
  mb: '0'
})], LT, {
  bg: '#f5f5f4',
  bw: false,
  pad: '36px 24px',
  className: 'gk-kit-center-v'
}), ...[['1556157382-97eda2d62296', 'Sam Keller', 'CEO of Finlytic', 'We struggled with user drop-off for months. Orbit redesigned our dashboard and retention went up 40% in 30 days.'], ['1500648767791-00dcc994a43e', 'David Rowe', 'Founder of Brewcraft', 'Our old branding looked like every other brewery. Orbit gave us a bold identity – sales up 65% after the relaunch.']].map(([photo, name, role, text]) => card([P(`4.9  ${(0,_patterns_showcase__WEBPACK_IMPORTED_MODULE_1__.tint)('★★★★★', '#f59e0b')}`, LT, {
  color: LT.ink,
  weight: 600,
  mb: '14px'
}), P(`“${text}”`, LT, {
  size: '15px',
  mb: '22px'
}), person(photo, name, role, LT)], LT, {
  pad: '28px'
}))], {
  cols: [3, 1, 1],
  gap: [20, 16, 16]
})], {
  bg: OB.light,
  py: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([I(LT, '', 'The studio journal', ''), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([['1600880292089-90a7e086ee0c', 'UI/UX design', 'How we boosted client conversions 200% with smarter UI/UX'], ['1515378791036-0648a3ef77b2', 'Web development', 'How we built a 98/100 PageSpeed website in two weeks'], ['1497366811353-6870744d04b2', 'Branding', 'How we made a boring B2B brand go viral']].map(([photo, cat, title]) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: '16/10',
  radius: '14px'
}), tag(cat, LT), H(title, LT, {
  level: 3,
  size: '18px',
  weight: 600,
  lh: 1.4,
  mb: '0'
}), P('Orbit team · Nov 2026', LT, {
  size: '13px'
})], {
  gap: '14px',
  className: 'gk-kit-tag-start'
})), {
  cols: [3, 2, 1],
  gap: [24, 20, 32]
})], {
  bg: OB.light,
  py: [0, 0, 0],
  pb: [96, 80, 56]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1580489944761-15a19d654956', 200), 'Lead designer', {
  ratio: '1/1',
  radius: '999px',
  className: 'gk-kit-round-sm'
}), H('Meet the minds behind the magic', OB, {
  align: 'center',
  size: 'clamp(2rem, 4vw, 3rem)',
  weight: 600,
  mt: '20px'
}), P('Get a free 30-minute strategy session with our lead designer.', OB, {
  align: 'center',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([btn('Book a free call', OB)], {
  justify: 'center'
}), P('Prefer email?<br><a href="mailto:hello@example.com"><strong>hello@example.com</strong></a>', OB, {
  align: 'center',
  size: '14px',
  mt: '20px',
  link: OB.ink
})], {
  className: 'gk-kit-intro-center'
})], {
  gradient: 'radial-gradient(circle at 50% 0%,#3b1d10 0%,#0c0a09 60%)',
  py: [112, 88, 64]
}), footer('ORBIT', 'We craft high-performance digital experiences that drive real business results.', [['Quick links', ['Home', 'About', 'Work', 'Contact']], ['Services', ['UI/UX design', 'Brand design', 'Web development', 'No-code']], ['Journal', ['Latest posts', 'Case studies', 'Newsletter', 'Careers']]], {
  ...OB,
  fBg: OB.light,
  fInk: OB.lInk,
  fMuted: OB.lMuted
}, {
  socials: ['instagram', 'linkedin', 'dribbble']
})];
const siteTemplates = [{
  id: 'tpl-dental-clinic',
  title: 'Dental Clinic',
  category: 'healthcare',
  desc: 'Friendly dentist website: hero, services, team, treatments, insurance, reviews and contact.',
  keywords: 'dental dentist clinic teeth orthodontist medical health',
  blocks: dental
}, {
  id: 'tpl-water-sports',
  title: 'Water Sports',
  category: 'travel',
  desc: 'Bold adventure / tour operator page with full-screen hero, activities, packages and reviews.',
  keywords: 'water sports surf diving beach travel tour adventure activities',
  blocks: watersports
}, {
  id: 'tpl-aquarium',
  title: 'Aquarium & Attraction',
  category: 'travel',
  desc: 'Immersive attraction page for aquariums, zoos and museums: schedule, animals, tours and gallery.',
  keywords: 'aquarium zoo museum attraction park ocean tickets schedule',
  blocks: aquarium
}, {
  id: 'tpl-leadgen-saas',
  title: 'Lead Gen SaaS',
  category: 'saas',
  desc: 'High-converting SaaS landing page: problem/solution, features, offer countdown, reviews, FAQ and CTA.',
  keywords: 'saas lead generation marketing software startup landing conversion',
  blocks: leadgen
}, {
  id: 'tpl-digital-agency',
  title: 'SaaS & Digital Agency',
  category: 'agency',
  desc: 'Clean agency / SaaS company page with stats, about, testimonials, pricing and CTA.',
  keywords: 'agency digital marketing saas company services pricing',
  blocks: agency
}, {
  id: 'tpl-charity',
  title: 'Charity & Non-profit',
  category: 'nonprofit',
  desc: 'Donation-focused charity website: causes, impact numbers, stories, programmes and events.',
  keywords: 'charity nonprofit ngo donation fundraising volunteer foundation',
  blocks: charity
}, {
  id: 'tpl-creative-studio',
  title: 'Creative Studio',
  category: 'agency',
  desc: 'Dark and light creative agency site: bold hero, services, case studies, reviews and journal.',
  keywords: 'creative studio agency design web development branding dark',
  blocks: studio
}];

/***/ },

/***/ "./src/zentro-kit/templates.js"
/*!*************************************!*\
  !*** ./src/zentro-kit/templates.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   templates: () => (/* binding */ templates)
/* harmony export */ });
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/**
 * Zentro Kit – full page templates.
 *
 * Each template is a complete, responsive landing page built from Zentro
 * containers, Zentro blocks and core blocks. Users only replace copy/images.
 */


// ===========================================================================
// 1. Life coaching landing page
// ===========================================================================
const C = {
  ink: '#1c1917',
  muted: '#57534e',
  accent: '#ea580c',
  lime: '#d9f99d',
  cream: '#fdf8f1',
  soft: '#f5f5f4'
};
const cBtn = t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  bg: C.ink,
  color: '#ffffff'
});
const cOutline = t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)(t, {
  outline: true,
  color: C.ink
});
const cIntro = (e, t, x, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.intro)(e, t, x, {
  accent: C.accent,
  color: C.ink,
  muted: C.muted,
  ...o
});
const cCounter = (targetNumber, suffix, label) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/animated-counter', {
  targetNumber,
  suffix,
  label,
  numberColor: C.ink,
  labelColor: C.muted,
  numberSize: 36,
  labelSize: 14,
  alignment: 'left'
});
const cCard = (photo, title, meta, text, o = {}) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 800), title, {
  ratio: o.ratio || '4/3',
  radius: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(meta, {
  color: C.accent,
  size: '13px',
  weight: 600,
  mt: '18px',
  mb: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: C.ink,
  size: '20px',
  weight: 700,
  lh: 1.3,
  mt: '0',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(text, {
  color: C.muted,
  size: '15px',
  lh: 1.6,
  mb: '0'
})], {
  bg: '#ffffff',
  pad: '14px',
  radius: '20px',
  bw: '1px',
  bc: '#e7e5e4'
});
const story = (photo, bg, quote, name, role) => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 700), name, {
  ratio: '1/1',
  radius: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Success story', {
  color: C.accent,
  size: '13px',
  weight: 700,
  upper: true,
  ls: '0.1em',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(quote, {
  level: 3,
  color: C.ink,
  size: 'clamp(1.4rem, 2.6vw, 2rem)',
  weight: 600,
  lh: 1.3,
  mt: '0',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`<strong>${name}</strong><br>${role}`, {
  color: C.muted,
  size: '15px',
  mb: '0'
})])], {
  tpl: ['280px 1fr', '220px 1fr', '1fr'],
  gap: [48, 32, 24],
  valign: 'center',
  bg,
  radius: 28,
  py: [32, 28, 24],
  px: [32, 28, 24],
  mb: 24
});
const coaching = () => [
// Header bar
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('MindRise', {
  level: 3,
  color: C.ink,
  size: '24px',
  weight: 800,
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Home</a>   ·   <a href="#">About</a>   ·   <a href="#">Services</a>   ·   <a href="#">Courses</a>   ·   <a href="#">Blog</a>', {
  align: 'center',
  color: C.ink,
  link: C.ink,
  size: '15px',
  weight: 500,
  mb: '0',
  className: 'gk-kit-nav'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Get started', {
  bg: C.lime,
  color: C.ink,
  pad: ['10px', '22px']
})], {
  justify: 'right'
})], {
  tpl: ['auto 1fr auto', 'auto 1fr auto', '1fr auto'],
  gap: [24, 16, 12],
  valign: 'center'
})], {
  bg: '#ffffff',
  py: [20, 18, 16]
}),
// Hero
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('★★★★★  Rated 4.9 by 1,200+ clients', {
  color: C.accent,
  size: '14px',
  weight: 600,
  mb: '18px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Transform your life with expert coaching', {
  level: 1,
  color: C.ink,
  size: 'clamp(2.4rem, 5.4vw, 4rem)',
  weight: 700,
  lh: 1.08,
  ls: '-0.03em',
  mt: '0',
  mb: '22px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Transform your life with expert, compassionate guidance. Clarify your goals, unlock your potential and build the confidence to live on purpose.', {
  color: C.muted,
  size: '18px',
  lh: 1.7,
  mb: '32px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([cBtn('Book a free session'), cOutline('Learn more')]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cCounter(30, '+', 'Years combined'), cCounter(500, '+', 'Happy clients'), cCounter(90, '%', 'Goal success')], {
  cols: [3, 3, 3],
  gap: [24, 20, 12],
  mt: 44
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1507003211169-0a1dd7228f2d', 1000), 'Smiling life coach', {
  ratio: '4/5',
  radius: '32px'
})], {
  tpl: ['1.15fr 1fr', '1fr', '1fr'],
  gap: [64, 48, 40],
  valign: 'center'
})], {
  bg: C.cream,
  py: [96, 80, 56]
}),
// Logos
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Organisations I’ve worked with', {
  align: 'center',
  color: C.muted,
  size: '14px',
  weight: 600,
  upper: true,
  ls: '0.1em',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(['Orbitly', 'Visionary Labs', 'DesignFlow', 'PeakWell', 'Northbeam', 'Crestline'].map(n => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(n, {
  align: 'center',
  color: '#a8a29e',
  size: '20px',
  weight: 800,
  mb: '0'
})), {
  cols: [6, 3, 2],
  gap: [24, 20, 16],
  rowGap: [0, 20, 16]
})], {
  bg: '#ffffff',
  py: [48, 40, 32]
}),
// About me
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1484480974693-6ca0a78fb36b', 700), 'Planning notebook on a desk', {
  ratio: '3/4',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1573497019940-1c28c88b4f3e', 700), 'Coach in a session', {
  ratio: '3/4',
  radius: '24px',
  mt: '48px'
})], {
  cols: [2, 2, 2],
  gap: [20, 16, 12],
  valign: 'start'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([cIntro('About me', 'Helping people grow with clarity and confidence', null, {
  align: 'left',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Hi, I’m Daniel. For over 15 years I’ve helped professionals, founders and creatives turn overwhelm into a clear plan — and that plan into real, lasting change.', {
  color: C.muted,
  size: '17px',
  lh: 1.75,
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['ICF-certified professional coach', 'Former HR director at a global tech company', 'Author of “Small Steps, Big Life”'], {
  color: C.ink,
  size: '16px',
  lh: 2
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([cBtn('Read my story')], {
  mt: '28px'
})])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [72, 48, 40],
  valign: 'center'
})], {
  bg: '#ffffff'
}),
// Live sessions banner
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1517245386807-bb43f82c33c4', 1800), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Join live coaching sessions for free', {
  color: '#ffffff',
  size: 'clamp(1.9rem, 4vw, 3rem)',
  weight: 700,
  lh: 1.15,
  mt: '0',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Every Thursday at 18:00 CET — practical tools, Q&A and a supportive community.', {
  color: '#e7e5e4',
  size: '18px',
  lh: 1.6,
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Reserve my seat', {
  bg: C.lime,
  color: C.ink
})])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)(['Goal-setting', 'Mindset reset', 'Stress & balance', 'Career clarity'].map(t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(`✓  ${t}`, {
  color: '#ffffff',
  size: '16px',
  weight: 600,
  bg: 'rgba(255,255,255,0.12)',
  radius: '999px',
  pad: ['10px', '18px'],
  mb: '10px'
})))], {
  tpl: ['1.4fr 1fr', '1fr', '1fr'],
  gap: [48, 32, 28],
  valign: 'center'
})], {
  align: 'full',
  overlay: '#1e3a8a',
  dim: 80,
  minHeight: 460
}),
// Services
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([cIntro('Services', 'Coaching that meets you where you are', 'Choose the support that fits your season of life — every program starts with a free discovery call.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.node)('zentro-blocks/box-card-block', {
  cards: [{
    title: 'Personalised Coaching',
    description: 'Weekly 1:1 sessions with a tailored plan, accountability and tools between calls.',
    iconType: 'icon',
    iconName: 'heart',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }, {
    title: 'Mindset Transformation',
    description: 'Replace limiting beliefs with habits and thinking patterns that move you forward.',
    iconType: 'icon',
    iconName: 'bulb',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }, {
    title: 'Stress & Anxiety Management',
    description: 'Science-backed techniques to calm your mind and regain control of your days.',
    iconType: 'icon',
    iconName: 'shield',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }, {
    title: 'Goal Setting & Achievement',
    description: 'Turn big dreams into a 90-day roadmap with milestones you actually hit.',
    iconType: 'icon',
    iconName: 'rocket',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }, {
    title: 'Life Transitions Coaching',
    description: 'Navigate career changes, relocations and new chapters with confidence.',
    iconType: 'icon',
    iconName: 'star',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }, {
    title: 'Relationship & Communication',
    description: 'Build healthier relationships through clear, honest and kind communication.',
    iconType: 'icon',
    iconName: 'check',
    showBadge: false,
    cardLink: '#',
    cardLinkText: 'Learn more →'
  }],
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
  borderRadius: 20
})], {
  bg: C.cream
}),
// Experience
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Over 15 years of experience coaching individuals and teams', {
  color: C.ink,
  size: 'clamp(1.8rem, 3.4vw, 2.6rem)',
  weight: 700,
  lh: 1.2,
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('From first-time managers to founders of fast-growing companies, I’ve guided more than 500 people through change — with a method that is practical, warm and measurable.', {
  color: C.muted,
  size: '17px',
  lh: 1.75,
  mb: '0'
})], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 24, 20],
  valign: 'end',
  mb: 48
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('85%', {
  color: C.ink,
  size: '56px',
  weight: 800,
  mt: '0',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('of clients report higher confidence within 8 weeks.', {
  color: C.ink,
  size: '16px',
  lh: 1.5,
  mb: '0'
})], {
  bg: C.lime,
  radius: '24px',
  pad: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1522202176988-66273c2fd55f', 700), 'Group workshop', {
  ratio: '3/4',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1556761175-5973dc0f32e7', 700), 'Team coaching session', {
  ratio: '3/4',
  radius: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('7k hours', {
  color: '#ffffff',
  size: '56px',
  weight: 800,
  mt: '0',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('of one-to-one coaching delivered worldwide.', {
  color: '#e7e5e4',
  size: '16px',
  lh: 1.5,
  mb: '0'
})], {
  bg: C.ink,
  radius: '24px',
  pad: '28px'
})], {
  cols: [4, 2, 1],
  gap: [20, 16, 16],
  valign: 'center'
})], {
  bg: '#ffffff'
}),
// Guide / lead magnet
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1517842645767-c639042777db', 900), 'Free life coaching guide', {
  ratio: '4/3',
  radius: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([cIntro('Free guide', 'Make your life healthier & happier', 'Download my 30-page workbook with the exact exercises I use with private clients — free.', {
  align: 'left',
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Download the guide', {
  bg: C.accent,
  color: '#ffffff'
})])])], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: C.soft
}),
// Success stories
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([cIntro('Success stories', 'Real people, real change', 'A few of the clients who decided this was their year.'), story('1500648767791-00dcc994a43e', '#fef3c7', '“25-pound weight loss in just six months, alongside a 50% improvement in sleep quality.”', 'Jason M.', 'Product designer, Amsterdam'), story('1494790108377-be9c29b29330', '#e0f2fe', '“60% decrease in stress and a 30% boost in work-life balance satisfaction in a short period of time.”', 'Priya S.', 'Engineering manager, London'), story('1472099645785-5658abf4ff4e', '#ede9fe', '“80% rise in self-esteem and a 75% improvement in relationships that make life healthier and happier.”', 'Lucas R.', 'Founder, Lisbon')], {
  bg: '#ffffff'
}),
// Courses
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cIntro('Courses', 'Courses for you', 'Self-paced programs you can start today.', {
  align: 'left',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([cOutline('View all courses')])], {
  tpl: ['1fr auto', '1fr', '1fr'],
  valign: 'end',
  gap: [24, 20, 20],
  mb: 40
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cCard('1454165804606-c3d57bc86b40', 'Master your mindset for true potential', '6 weeks · 24 lessons', 'Rewire limiting beliefs and build daily habits that stick.'), cCard('1506126613408-eca07ce68773', 'Stress-free living: manage stress and find peace', '4 weeks · 16 lessons', 'Breathwork, boundaries and routines for a calmer life.'), cCard('1552664730-d307ca884978', 'Building confidence: transform your self-belief', '5 weeks · 20 lessons', 'Speak up, show up and own your strengths at work.')], {
  cols: [3, 2, 1],
  gap: [24, 20, 20]
})], {
  bg: C.cream
}),
// Podcast
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([cIntro('Podcast', 'Listen to transformational podcast', 'New episodes every Monday on Spotify and Apple Podcasts.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cCard('1478737270239-2f02b77fc618', 'Transform your mindset for success', 'Episode 48 · 32 min', 'The 3 questions I ask every new client.', {
  ratio: '1/1'
}), cCard('1590602847861-f357a9332bbc', 'Shifting perspective for a better life', 'Episode 47 · 41 min', 'How to reframe setbacks into momentum.', {
  ratio: '1/1'
}), cCard('1499750310107-5fef28a66643', 'Turning dreams into actionable plans', 'Episode 46 · 28 min', 'A simple weekly planning ritual.', {
  ratio: '1/1'
}), cCard('1515378791036-0648a3ef77b2', 'Practical tips to find calm in your daily life', 'Episode 45 · 35 min', 'Micro-habits for busy professionals.', {
  ratio: '1/1'
})], {
  cols: [4, 2, 1],
  gap: [20, 20, 20]
})], {
  bg: '#ffffff'
}),
// CTA
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.container)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Ready to transform your life?', {
  align: 'center',
  color: '#ffffff',
  size: 'clamp(1.9rem, 4vw, 3rem)',
  weight: 700,
  lh: 1.15,
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Book a free 30-minute discovery call. No pressure — just clarity on your next step.', {
  align: 'center',
  color: '#ffedd5',
  size: '18px',
  lh: 1.6,
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book your free call', {
  bg: '#ffffff',
  color: C.accent
})], {
  justify: 'center'
})], {
  className: 'gk-kit-intro-center'
})], {
  gradient: 'linear-gradient(135deg,#f97316 0%,#ea580c 100%)',
  radius: 28,
  py: [72, 60, 48],
  px: [40, 32, 24]
})], {
  bg: '#ffffff',
  py: [40, 32, 24]
}),
// Blog
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([cIntro('Blog', 'Stay inspired with our blog', 'Practical ideas on mindset, habits and personal growth.'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([cCard('1531545514256-b1400bc00f31', '5 powerful mindset shifts to unlock your potential', 'Mindset · 6 min read', 'Small changes in thinking that create big results.'), cCard('1544367567-0f2fcb009e0b', 'How to manage stress and build a balanced life', 'Wellbeing · 8 min read', 'A gentle, realistic plan for overloaded weeks.'), cCard('1488190211105-8b0e65b80b4e', 'Goal setting for success: a step-by-step guide', 'Productivity · 7 min read', 'The framework I use with every private client.')], {
  cols: [3, 2, 1],
  gap: [24, 20, 20]
})], {
  bg: C.soft
}),
// Contact
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([cIntro('Let’s get connected', 'Start your transformation today!', 'Tell me a little about where you are and where you want to be. I reply personally within 24 hours.', {
  align: 'left',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>Email:</strong> <a href="mailto:hello@mindrise.example">hello@mindrise.example</a><br><strong>Phone:</strong> +44 20 7946 0123<br><strong>Studio:</strong> 21 Kings Road, London', {
  color: C.ink,
  link: C.accent,
  size: '16px',
  lh: 2,
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['facebook', 'instagram', 'linkedin', 'youtube'], {
  color: C.ink,
  bg: '#e7e5e4'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Book a free discovery call', {
  level: 3,
  color: C.ink,
  size: '24px',
  weight: 700,
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('30 minutes · Online · No obligation', {
  color: C.muted,
  size: '15px',
  mb: '20px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.list)(['Clarify your #1 goal', 'Identify what’s holding you back', 'Leave with 3 concrete next steps'], {
  color: C.ink,
  size: '16px',
  lh: 2
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Choose a time', {
  bg: C.ink,
  color: '#ffffff'
})], {
  mt: '24px'
})], {
  bg: '#ffffff',
  radius: '24px',
  pad: '36px',
  bw: '1px',
  bc: '#e7e5e4'
})], {
  tpl: ['1fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: C.cream
}),
// Footer
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('MindRise', {
  level: 3,
  color: '#ffffff',
  size: '26px',
  weight: 800,
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Let’s build the confidence and clarity you need to live a life you love.', {
  color: '#a8a29e',
  size: '15px',
  lh: 1.7,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Company', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Home</a><br><a href="#">About</a><br><a href="#">Services</a><br><a href="#">Courses</a>', {
  color: '#a8a29e',
  link: '#a8a29e',
  size: '15px',
  lh: 2.1,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Support', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Contact</a><br><a href="#">FAQ</a><br><a href="#">Privacy policy</a><br><a href="#">Terms</a>', {
  color: '#a8a29e',
  link: '#a8a29e',
  size: '15px',
  lh: 2.1,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Follow', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '14px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.socials)(['facebook', 'instagram', 'linkedin', 'youtube'], {
  color: C.ink,
  bg: C.lime
})])], {
  tpl: ['1.6fr 1fr 1fr 1fr', '1fr 1fr', '1fr'],
  gap: [40, 32, 28]
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.separator)('#292524'), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('© 2026 MindRise Coaching. All rights reserved.', {
  color: '#78716c',
  size: '14px',
  mb: '0'
})], {
  bg: C.ink,
  py: [72, 56, 48],
  pb: [32, 28, 28]
})];

// ===========================================================================
// 2. Architecture studio page
// ===========================================================================
const A = {
  green: '#0b2a22',
  deep: '#06201a',
  lime: '#d9f99d',
  sage: '#a7c4b5',
  paper: '#ffffff'
};
const project = (photo, title, ratio = '4/3') => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)(photo, 1000), title, {
  ratio,
  radius: '6px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)(title, {
  level: 3,
  color: '#0b2a22',
  size: 'clamp(1.25rem, 2.2vw, 1.75rem)',
  weight: 500,
  lh: 1.2,
  mt: '18px',
  mb: '8px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">View Project →</a>', {
  color: '#0b2a22',
  link: '#0b2a22',
  size: '14px',
  weight: 600,
  mb: '0'
})], {
  mb: '64px'
});
const architecture = () => [
// Header
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Arcvale', {
  level: 3,
  color: '#ffffff',
  size: '26px',
  weight: 700,
  ls: '-0.02em',
  mt: '0',
  mb: '0'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Home</a>   ·   <a href="#">Services</a>   ·   <a href="#">Projects</a>   ·   <a href="#">About</a>   ·   <a href="#">Contact</a>', {
  align: 'center',
  color: '#ffffff',
  link: '#ffffff',
  size: '15px',
  mb: '0',
  className: 'gk-kit-nav'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Book a meeting →', {
  bg: A.lime,
  color: A.green,
  pad: ['10px', '22px']
})], {
  justify: 'right'
})], {
  tpl: ['auto 1fr auto', 'auto 1fr auto', '1fr auto'],
  gap: [24, 16, 12],
  valign: 'center'
})], {
  bg: A.deep,
  py: [20, 18, 16]
}),
// Hero
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1613490493576-7fde63acd811', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Project •', {
  color: '#ffffff',
  size: '13px',
  weight: 600,
  upper: true,
  ls: '0.14em',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Selected works <em>in</em><br><em>architecture</em> & design', {
  level: 1,
  color: A.lime,
  size: 'clamp(2.8rem, 7.5vw, 6rem)',
  weight: 600,
  lh: 1.02,
  ls: '-0.03em',
  mt: '0',
  mb: '0'
})], {
  align: 'full',
  minHeight: 720,
  overlay: A.deep,
  dim: 55,
  position: 'bottom center',
  pad: ['120px', '24px', '72px']
}),
// Projects – staggered
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([project('1600596542815-ffad4c1539a9', 'Verdant Curve Residences for Modern Urban Living'), project('1512917774080-9991f1c4c750', 'The Cascade House Full Block Residential Project'), project('1600585154340-be6161a56a0c', 'The Green Arc Contemporary Residential Development')]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([project('1486406146926-c627a92ad1ab', 'The Horizon Block Modern Living Development'), project('1580587771525-78b9dba3b914', 'Luminous Curve Residences for Contemporary Living'), project('1449844908441-8829872d2607', 'The Canopy House Integrated Residential Complex')], {
  className: 'gk-kit-offset'
})], {
  cols: [2, 2, 1],
  gap: [64, 32, 0],
  rowGap: [0, 0, 0]
})], {
  bg: A.paper,
  py: [96, 72, 56],
  pb: [40, 32, 16]
}),
// Wide image
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1564013799919-ab600027ffc6', 1920), [], {
  align: 'full',
  minHeight: 560,
  overlay: A.deep,
  dim: 20,
  pad: ['0px', '0px']
}),
// Testimonial
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('“A strategic, professional experience from start to finish. The team made a complex process feel clear.”', {
  color: A.green,
  size: 'clamp(1.7rem, 3.6vw, 2.9rem)',
  weight: 500,
  lh: 1.2,
  ls: '-0.02em',
  mt: '0',
  mb: '24px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<strong>— Daniel Thompson</strong><br>Property investor', {
  color: '#3f6212',
  size: '16px',
  mb: '32px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('←', {
  bg: A.green,
  color: A.lime,
  pad: ['12px', '20px']
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('→', {
  bg: A.green,
  color: A.lime,
  pad: ['12px', '20px']
})])]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1560250097-0b93528c311a', 800), 'Daniel Thompson, property investor', {
  ratio: '1/1',
  radius: '6px'
})], {
  tpl: ['1.4fr 1fr', '1fr 1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
})], {
  bg: A.lime,
  py: [96, 72, 56]
}),
// CTA
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.cover)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1600566753190-17f0baa2a6c3', 1920), [(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('Contact us •', {
  color: '#ffffff',
  size: '13px',
  weight: 600,
  upper: true,
  ls: '0.14em',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Start your next great<br><em>project with confidence</em>', {
  level: 2,
  color: A.lime,
  size: 'clamp(2.2rem, 5vw, 4rem)',
  weight: 500,
  lh: 1.08,
  ls: '-0.02em',
  mt: '0',
  mb: '28px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.buttons)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.button)('Send inquiry →', {
  outline: true,
  color: '#ffffff',
  radius: '4px'
})])], {
  align: 'full',
  minHeight: 560,
  overlay: A.green,
  dim: 70,
  position: 'center center'
}),
// Services strip
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)(['Architecture Design •', 'Interior Planning •', 'Outdoor Development •', 'Concept Visualization •'].map(t => (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)(t, {
  color: A.sage,
  size: '15px',
  weight: 500,
  mb: '0'
})), {
  cols: [4, 2, 1],
  gap: [24, 16, 12],
  rowGap: [0, 16, 12]
})], {
  bg: A.green,
  py: [36, 32, 28]
}),
// Footer
(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.section)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('hello@arcvale.example<br>+1 (756) 657-768', {
  level: 2,
  color: '#ffffff',
  size: 'clamp(1.6rem, 3.4vw, 2.6rem)',
  weight: 500,
  lh: 1.25,
  mt: '0',
  mb: '16px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('2464 Royal Lane, Mesa, New Jersey 45463', {
  color: A.sage,
  size: '16px',
  mb: '40px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.grid)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Company', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Home</a><br><a href="#">Service</a><br><a href="#">Project</a><br><a href="#">Blog</a>', {
  color: A.sage,
  link: A.sage,
  size: '15px',
  lh: 2,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Support', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Contact Us</a><br><a href="#">404 Error</a><br><a href="#">Privacy Policy</a>', {
  color: A.sage,
  link: A.sage,
  size: '15px',
  lh: 2,
  mb: '0'
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Social', {
  level: 4,
  color: '#ffffff',
  size: '15px',
  mt: '0',
  mb: '12px'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.para)('<a href="#">Instagram</a><br><a href="#">Facebook</a><br><a href="#">Twitter</a>', {
  color: A.sage,
  link: A.sage,
  size: '15px',
  lh: 2,
  mb: '0'
})])], {
  cols: [3, 3, 3],
  gap: [24, 20, 16]
})]), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.image)((0,_dsl__WEBPACK_IMPORTED_MODULE_0__.img)('1449844908441-8829872d2607', 900), 'Forest cabin by Arcvale', {
  ratio: '4/3',
  radius: '6px'
})], {
  tpl: ['1.2fr 1fr', '1fr', '1fr'],
  gap: [64, 40, 32],
  valign: 'center'
}), (0,_dsl__WEBPACK_IMPORTED_MODULE_0__.heading)('Arcvale', {
  align: 'center',
  color: A.lime,
  size: 'clamp(4rem, 19vw, 16rem)',
  weight: 600,
  lh: 0.9,
  ls: '-0.05em',
  mt: '64px',
  mb: '0'
})], {
  bg: A.green,
  py: [96, 72, 56],
  pb: [24, 24, 16]
})];
const templates = [{
  id: 'tpl-life-coaching',
  title: 'Life Coaching',
  category: 'coaching',
  desc: 'Complete coach / consultant landing page: hero, about, services, stories, courses, podcast, blog and contact.',
  keywords: 'coach coaching consultant personal brand mentor therapist',
  blocks: coaching
}, {
  id: 'tpl-architecture-studio',
  title: 'Architecture Studio',
  category: 'architecture',
  desc: 'Elegant portfolio page for architects, interior designers and real-estate developers.',
  keywords: 'architecture architect interior real estate portfolio studio',
  blocks: architecture
}];

/***/ }

}]);
//# sourceMappingURL=library.js.map