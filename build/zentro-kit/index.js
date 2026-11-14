/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/zentro-kit/dsl.js"
/*!*******************************!*\
  !*** ./src/zentro-kit/dsl.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBlocks: () => (/* binding */ buildBlocks),
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   cover: () => (/* binding */ cover),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   gallery: () => (/* binding */ gallery),
/* harmony export */   grid: () => (/* binding */ grid),
/* harmony export */   group: () => (/* binding */ group),
/* harmony export */   heading: () => (/* binding */ heading),
/* harmony export */   image: () => (/* binding */ image),
/* harmony export */   img: () => (/* binding */ img),
/* harmony export */   intro: () => (/* binding */ intro),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   para: () => (/* binding */ para),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   separator: () => (/* binding */ separator),
/* harmony export */   socials: () => (/* binding */ socials),
/* harmony export */   spacer: () => (/* binding */ spacer),
/* harmony export */   table: () => (/* binding */ table),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
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

const node = (name, attributes = {}, children = []) => ({
  name,
  attributes,
  children
});

/**
 * Convert a list of DSL nodes into fresh block objects (new clientIds).
 *
 * @param {Array} nodes DSL nodes.
 * @return {Array} Blocks ready for insertBlocks()/resetBlocks().
 */
const buildBlocks = nodes => nodes.map(n => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)(n.name, n.attributes, buildBlocks(n.children || [])));

/**
 * Unsplash demo image helper.
 * @param id
 * @param w
 */
const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// ---------------------------------------------------------------------------
// Style helpers
// ---------------------------------------------------------------------------

const clean = obj => {
  Object.keys(obj).forEach(k => {
    if (obj[k] === undefined) {
      delete obj[k];
    } else if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      clean(obj[k]);
      if (!Object.keys(obj[k]).length) {
        delete obj[k];
      }
    }
  });
  return obj;
};
const box = v => {
  if (v === undefined) {
    return undefined;
  }
  const [t, r = t, b = t, l = r] = Array.isArray(v) ? v : [v];
  return {
    top: t,
    right: r,
    bottom: b,
    left: l
  };
};

/**
 * Build a core block `style` attribute from short options.
 *
 * @param {Object} o Options.
 * @return {Object|undefined} style attribute.
 */
const css = (o = {}) => {
  const s = clean({
    typography: {
      fontSize: o.size,
      fontWeight: o.weight ? String(o.weight) : undefined,
      lineHeight: o.lh ? String(o.lh) : undefined,
      letterSpacing: o.ls,
      textTransform: o.upper ? 'uppercase' : undefined,
      // WP 6.8+/7.x store alignment as a typography support; older versions use the attribute.
      textAlign: o.align,
      fontStyle: o.italic ? 'italic' : undefined
    },
    color: {
      text: o.color,
      background: o.bg,
      gradient: o.gradient
    },
    elements: o.link ? {
      link: {
        color: {
          text: o.link
        }
      }
    } : undefined,
    spacing: {
      margin: o.mt !== undefined || o.mb !== undefined ? clean({
        top: o.mt,
        bottom: o.mb
      }) : undefined,
      padding: box(o.pad),
      blockGap: o.gap
    },
    border: {
      radius: o.radius,
      width: o.bw,
      color: o.bc,
      style: o.bw ? 'solid' : undefined
    },
    shadow: o.shadow
  });
  return Object.keys(s).length ? s : undefined;
};

// ---------------------------------------------------------------------------
// Core blocks
// ---------------------------------------------------------------------------

const heading = (content, o = {}) => node('core/heading', clean({
  level: o.level || 2,
  content,
  textAlign: o.align,
  style: css(o)
}));
const para = (content, o = {}) => node('core/paragraph', clean({
  content,
  align: o.align,
  className: o.className,
  style: css(o)
}));
const image = (url, alt, o = {}) => node('core/image', clean({
  url,
  alt,
  sizeSlug: 'full',
  linkDestination: 'none',
  aspectRatio: o.ratio,
  scale: o.ratio ? 'cover' : undefined,
  width: o.width,
  className: o.className,
  style: css({
    radius: o.radius,
    mt: o.mt,
    mb: o.mb !== undefined ? o.mb : '0'
  })
}));
const button = (text, o = {}) => node('core/button', clean({
  text,
  url: o.url || '#',
  className: o.outline ? 'is-style-outline' : undefined,
  style: css({
    color: o.color,
    bg: o.outline ? undefined : o.bg,
    radius: o.radius !== undefined ? o.radius : '999px',
    bw: o.outline ? '1.5px' : undefined,
    bc: o.outline ? o.bc || o.color : undefined,
    size: o.size || '15px',
    weight: o.weight || 600,
    pad: o.pad || ['14px', '28px']
  })
}));
const buttons = (list, o = {}) => node('core/buttons', clean({
  layout: {
    type: 'flex',
    justifyContent: o.justify || 'left',
    flexWrap: 'wrap'
  },
  style: css({
    mt: o.mt,
    mb: o.mb,
    gap: o.gap
  })
}), list);

/**
 * Vertical stack (flow layout) used for cards and text columns.
 * @param children
 * @param o
 */
const group = (children, o = {}) => node('core/group', clean({
  tagName: o.tag,
  layout: o.row ? {
    type: 'flex',
    flexWrap: o.nowrap ? 'nowrap' : 'wrap',
    justifyContent: o.justify,
    verticalAlignment: o.valign || 'center'
  } : {
    type: 'default'
  },
  style: css(o),
  className: o.className
}), children);
const cover = (url, children, o = {}) => node('core/cover', clean({
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
    contentSize: o.contentSize || '1200px'
  },
  style: css({
    pad: o.pad || ['80px', '24px'],
    radius: o.radius
  })
}), children);
const list = (items, o = {}) => node('core/list', clean({
  style: css(o)
}), items.map(content => node('core/list-item', {
  content
})));
const separator = (color = '#e2e8f0', o = {}) => node('core/separator', clean({
  className: 'is-style-wide',
  style: css({
    color,
    bg: color,
    mt: o.mt || '40px',
    mb: o.mb || '24px'
  })
}));
const spacer = (height = '40px') => node('core/spacer', {
  height
});
const socials = (services, o = {}) => node('core/social-links', clean({
  iconColorValue: o.color || '#ffffff',
  iconBackgroundColorValue: o.bg || 'rgba(255,255,255,0.12)',
  size: 'has-normal-icon-size',
  layout: {
    type: 'flex',
    justifyContent: o.justify || 'left'
  },
  style: css({
    mt: o.mt
  })
}), services.map(service => node('core/social-link', {
  service,
  url: '#'
})));

// ---------------------------------------------------------------------------
// Zentro Container helpers
// ---------------------------------------------------------------------------

const resp = (key, v) => {
  const [d, t = d, m = t] = Array.isArray(v) ? v : [v];
  return {
    [key]: d,
    [`${key}Tablet`]: t,
    [`${key}Mobile`]: m
  };
};

/**
 * Zentro container with every responsive value set explicitly so the
 * block's own tablet/mobile defaults never leak into a pattern.
 *
 * @param {Array}  children Child nodes.
 * @param {Object} o        Options.
 */
const container = (children, o = {}) => {
  const isGrid = !!(o.cols || o.tpl);
  const gap = o.gap !== undefined ? o.gap : [32, 24, 20];
  const attrs = {
    hasLayoutSelected: true,
    layoutType: isGrid ? 'grid' : 'block',
    contentWidth: o.width || 'full',
    ...resp('paddingTop', o.pt !== undefined ? o.pt : o.py || 0),
    ...resp('paddingBottom', o.pb !== undefined ? o.pb : o.py || 0),
    ...resp('paddingLeft', o.px || 0),
    ...resp('paddingRight', o.px || 0),
    ...resp('marginTop', o.mt || 0),
    ...resp('marginBottom', o.mb || 0)
  };
  if (isGrid) {
    Object.assign(attrs, resp('gridColumns', o.cols || 1), resp('gridTemplateColumns', o.tpl || ''), resp('rowGap', o.rowGap !== undefined ? o.rowGap : gap), resp('columnGap', gap), resp('gap', gap), resp('gridRows', 1));
    attrs.alignItems = o.valign || 'stretch';
  }
  if (o.bg) {
    attrs.bgType = 'color';
    attrs.backgroundColor = o.bg;
  }
  if (o.gradient) {
    attrs.bgType = 'gradient';
    attrs.bgGradient = o.gradient;
  }
  if (o.radius) {
    attrs.borderRadiusTopLeft = o.radius;
    attrs.borderRadiusTopRight = o.radius;
    attrs.borderRadiusBottomLeft = o.radius;
    attrs.borderRadiusBottomRight = o.radius;
    attrs.overflow = 'hidden';
  }
  if (o.border) {
    attrs.borderWidth = 1;
    attrs.borderColor = o.border;
  }
  if (o.align) {
    attrs.align = o.align;
  }
  if (o.className) {
    attrs.customClasses = o.className;
  }
  return node('zentro-blocks/container-block', attrs, children);
};

/**
 * Responsive grid inside a section.
 * @param children
 * @param o
 */
const grid = (children, o = {}) => container(children, {
  cols: [3, 2, 1],
  ...o
});

/**
 * Full-bleed section: full-width background + centred 1200px content box.
 *
 * @param {Array}  children Child nodes.
 * @param {Object} o        Options (bg, gradient, py).
 */
const section = (children, o = {}) => container([container(children, {
  width: 'boxed',
  px: [24, 24, 20],
  className: 'gk-section-inner'
})], {
  align: 'full',
  bg: o.bg,
  gradient: o.gradient,
  py: o.py || [100, 80, 64],
  pt: o.pt,
  pb: o.pb,
  className: o.className
});

/**
 * Section heading block: eyebrow + title + intro.
 * @param eyebrow
 * @param title
 * @param text
 * @param o
 */
const intro = (eyebrow, title, text, o = {}) => {
  const align = o.align || 'center';
  const out = [];
  if (eyebrow) {
    out.push(para(eyebrow, {
      align,
      color: o.accent || '#2563eb',
      size: '13px',
      weight: 700,
      ls: '0.12em',
      upper: true,
      mb: '12px'
    }));
  }
  out.push(heading(title, {
    align,
    color: o.color || '#0f172a',
    size: o.size || 'clamp(1.9rem, 3.6vw, 2.75rem)',
    weight: 700,
    lh: 1.15,
    ls: '-0.02em',
    mt: '0',
    mb: '16px'
  }));
  if (text) {
    out.push(para(text, {
      align,
      color: o.muted || '#64748b',
      size: '17px',
      lh: 1.7,
      mb: '0'
    }));
  }
  return group(out, {
    mb: o.mb || '48px',
    className: align === 'center' ? 'gk-kit-intro-center' : undefined
  });
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
const tabs = (items, o = {}) => node('zentro-blocks/tabs-block', {
  activeColor: o.color || '#2563eb',
  alignment: o.align || 'left',
  borderRadius: o.radius !== undefined ? o.radius : 8
}, items.map(t => node('zentro-blocks/tab-panel', {
  label: t.label
}, t.blocks)));

/**
 * Semantic core table.
 *
 * @param {Array}  rows Array of [cell, cell] arrays.
 * @param {Object} o    Options (head: [..], stripes).
 * @return {Object} DSL node.
 */
const table = (rows, o = {}) => node('core/table', clean({
  hasFixedLayout: true,
  className: o.stripes ? 'is-style-stripes' : undefined,
  head: o.head ? [{
    cells: o.head.map(content => ({
      content,
      tag: 'th'
    }))
  }] : [],
  body: rows.map(r => ({
    cells: r.map(content => ({
      content,
      tag: 'td'
    }))
  })),
  style: css({
    size: o.size || '16px',
    color: o.color
  })
}));

/**
 * Zentro image gallery.
 *
 * @param {Array}  images [ [ url, alt ] ].
 * @param {Object} o      Options.
 * @return {Object} DSL node.
 */
const gallery = (images, o = {}) => node('zentro-blocks/image-gallery-block', {
  images: images.map(([url, alt]) => ({
    url,
    alt
  })),
  columnsDesktop: o.cols || 3,
  columnsTablet: o.tab || 2,
  columnsMobile: o.mob || 1,
  gap: o.gap || 16,
  imageRadius: o.radius !== undefined ? o.radius : 12,
  aspectRatio: o.ratio || '4/3'
});

/***/ },

/***/ "./src/zentro-kit/editor.scss"
/*!************************************!*\
  !*** ./src/zentro-kit/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/notices"
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["notices"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["plugins"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "zentro-blocks:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"zentro-kit/index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkzentro_blocks"] = globalThis["webpackChunkzentro_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/zentro-kit/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dsl */ "./src/zentro-kit/dsl.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/zentro-kit/editor.scss");











// Library data (all patterns + templates) is code-split and fetched only when
// the library is opened (or the toolbar button is hovered).
let kitPromise = null;
const loadKit = () => {
  if (!kitPromise) {
    kitPromise = __webpack_require__.e(/*! import() | zentro-kit/library */ "zentro-kit/library").then(__webpack_require__.bind(__webpack_require__, /*! ./kit-data */ "./src/zentro-kit/kit-data.js")).catch(error => {
      kitPromise = null;
      throw error;
    });
  }
  return kitPromise;
};

// Cards rendered per "page" (more load on scroll or via the button).
const PAGE_SIZE = {
  patterns: 6,
  templates: 4
};
const EMPTY = [];
const Spinner = ({
  label
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "gk-kit-loading",
  role: "status"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: "gk-kit-spinner",
  "aria-hidden": "true"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label));


// PluginMoreMenuItem moved from edit-post to editor in WP 6.6.
const PluginMoreMenuItem = window.wp && window.wp.editor && window.wp.editor.PluginMoreMenuItem || window.wp && window.wp.editPost && window.wp.editPost.PluginMoreMenuItem;
const kitData = window.zentroKitData || {};
const previewUrl = id => kitData.previewBase ? `${kitData.previewBase}${id}.jpg?v=${kitData.version || ''}` : '';
const TOOLBAR_SELECTORS = ['.editor-header__toolbar', '.edit-post-header-toolbar', '.edit-post-header__toolbar'];

/**
 * Insert generated blocks.
 *
 * - Empty post (or only an empty paragraph selected): replace.
 * - A block is selected: insert after its top-level ancestor (sections are
 *   full-width, so they never get nested inside another block).
 * - Otherwise: append to the end of the post.
 *
 * @param {Array} blocks   Freshly created blocks.
 * @param         dispatch
 */
const insertIntoEditor = (blocks, dispatch) => {
  const be = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
  const rootBlocks = be.getBlocks();
  const selectedId = be.getSelectedBlockClientId();
  if (!rootBlocks.length) {
    dispatch.insertBlocks(blocks, 0);
    return;
  }
  if (selectedId) {
    const selected = be.getBlock(selectedId);
    if (selected && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.isUnmodifiedDefaultBlock)(selected) && !be.getBlockRootClientId(selectedId)) {
      dispatch.replaceBlocks(selectedId, blocks);
      return;
    }
    const rootId = be.getBlockHierarchyRootClientId(selectedId);
    const index = be.getBlockIndex(rootId);
    dispatch.insertBlocks(blocks, index + 1);
    return;
  }
  if (rootBlocks.length === 1 && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.isUnmodifiedDefaultBlock)(rootBlocks[0])) {
    dispatch.replaceBlocks(rootBlocks[0].clientId, blocks);
    return;
  }
  dispatch.insertBlocks(blocks);
};
const SearchIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "gk-kit-search-icon",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}));
const InsertIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const PreviewImage = ({
  item
}) => {
  const [failed, setFailed] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const src = previewUrl(item.id);
  if (!src || failed) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-kit-shot-fallback"
    }, item.title);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "gk-kit-shot",
    src: src,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(/* translators: %s: pattern name */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Preview of %s', 'zentro-blocks'), item.title),
    loading: "lazy",
    decoding: "async",
    onError: () => setFailed(true)
  });
};
const KitCard = ({
  item,
  isTemplate,
  onInsert
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: `gk-kit-card ${isTemplate ? 'gk-kit-card--template' : ''}`,
  "data-kit-id": item.id
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "gk-kit-card-preview"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PreviewImage, {
  item: item
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "gk-kit-card-overlay"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
  type: "button",
  className: "gk-kit-card-btn-insert",
  onClick: () => onInsert(item)
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InsertIcon, null), isTemplate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Insert Template', 'zentro-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Insert Pattern', 'zentro-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "gk-kit-card-info"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: "gk-kit-card-tag"
}, item.categoryLabel), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, item.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.desc)));
const ZentroKitLibraryModal = () => {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [searchQuery, setSearchQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [activeCategory, setActiveCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('patterns');
  const [kit, setKit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [limit, setLimit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(PAGE_SIZE.patterns);
  const [loadingMore, setLoadingMore] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const sentinelRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const bodyRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const {
    insertBlocks,
    replaceBlocks,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  const openModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => setIsOpen(true), []);

  // Fetch the library chunk the first time the modal opens.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isOpen || kit) {
      return;
    }
    let alive = true;
    setLoadError(false);
    loadKit().then(mod => alive && setKit(mod)).catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [isOpen, kit]);
  const closeModal = () => setIsOpen(false);

  // Toolbar shortcut button (Gutenberg has no slot for the header-left area).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const addButton = () => {
      const toolbar = document.querySelector(TOOLBAR_SELECTORS.join(','));
      if (!toolbar || toolbar.querySelector('.gk-zentro-kit-trigger-btn')) {
        return;
      }
      const btn = document.createElement('button');
      btn.className = 'components-button gk-zentro-kit-trigger-btn';
      btn.type = 'button';
      btn.textContent = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Zentro Patterns', 'zentro-blocks');
      btn.addEventListener('click', e => {
        e.preventDefault();
        openModal();
      });
      // Warm up the library chunk on intent.
      btn.addEventListener('mouseenter', () => loadKit().catch(() => {}), {
        once: true
      });
      toolbar.appendChild(btn);
    };
    addButton();
    const interval = setInterval(addButton, 1000);
    return () => {
      clearInterval(interval);
      document.querySelectorAll('.gk-zentro-kit-trigger-btn').forEach(b => b.remove());
    };
  }, [openModal]);
  const switchTab = tab => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
    setActiveCategory('all');
  };
  const handleInsert = item => {
    try {
      const blocks = (0,_dsl__WEBPACK_IMPORTED_MODULE_9__.buildBlocks)(item.blocks());
      insertIntoEditor(blocks, {
        insertBlocks,
        replaceBlocks
      });
      if (blocks[0]) {
        selectBlock(blocks[0].clientId);
      }
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(/* translators: %s: pattern name */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('“%s” inserted. Replace the demo text and images with your own.', 'zentro-blocks'), item.title), {
        type: 'snackbar'
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Zentro Kit: failed to insert', error);
      createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Could not insert this design. Please make sure all Zentro blocks are enabled.', 'zentro-blocks'), {
        type: 'snackbar'
      });
    }
    closeModal();
  };
  const isTemplates = activeTab === 'templates';
  const pageSize = isTemplates ? PAGE_SIZE.templates : PAGE_SIZE.patterns;
  let source = EMPTY;
  let cats = EMPTY;
  if (kit) {
    source = isTemplates ? kit.templates : kit.patterns;
    cats = isTemplates ? kit.templateCategories : kit.categories;
  }
  const labelled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => source.map(item => ({
    ...item,
    categoryLabel: (cats.find(c => c.id === item.category) || {}).label || item.category
  })), [source, cats]);
  const filtered = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const q = searchQuery.trim().toLowerCase();
    return labelled.filter(item => {
      const inCat = activeCategory === 'all' || item.category === activeCategory;
      const hay = `${item.title} ${item.desc} ${item.keywords || ''} ${item.categoryLabel}`.toLowerCase();
      return inCat && (!q || hay.includes(q));
    });
  }, [labelled, searchQuery, activeCategory]);
  const counts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const c = {
      all: source.length
    };
    source.forEach(p => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, [source]);

  // Start again from the first page whenever the list changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setLimit(pageSize);
    setLoadingMore(false);
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [activeTab, activeCategory, searchQuery, pageSize]);
  const visible = filtered.slice(0, limit);
  const hasMore = filtered.length > limit;
  const loadMore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setLoadingMore(true);
    // Short pause so the loader is visible and images start in batches.
    window.setTimeout(() => {
      setLimit(l => l + pageSize);
      setLoadingMore(false);
    }, 250);
  }, [pageSize]);

  // Infinite scroll: load the next page when the sentinel scrolls into view.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || loadingMore || typeof window.IntersectionObserver !== 'function') {
      return;
    }
    const io = new window.IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        loadMore();
      }
    }, {
      root: bodyRef.current,
      rootMargin: '200px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, loadingMore, loadMore, visible.length]);
  const menuItem = PluginMoreMenuItem ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginMoreMenuItem, {
    icon: "grid-view",
    onClick: openModal
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Zentro Patterns', 'zentro-blocks')) : null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, menuItem, isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Zentro Patterns & Templates', 'zentro-blocks'),
    onRequestClose: closeModal,
    className: "gk-zentro-kit-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-modal-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-logo-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-kit-logo-text"
  }, "Zentro")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-header-tabs",
    role: "tablist"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    role: "tab",
    "aria-selected": isTemplates,
    className: `gk-kit-header-tab-btn ${isTemplates ? 'is-active' : ''}`,
    onClick: () => switchTab('templates')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Page Templates', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    role: "tab",
    "aria-selected": !isTemplates,
    className: `gk-kit-header-tab-btn ${!isTemplates ? 'is-active' : ''}`,
    onClick: () => switchTab('patterns')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Patterns', 'zentro-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "gk-kit-close-btn",
    onClick: closeModal,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Close', 'zentro-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-layout"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: "gk-kit-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-search-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    className: "gk-kit-search-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Search…', 'zentro-blocks'),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Search designs', 'zentro-blocks'),
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SearchIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "gk-kit-categories",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Categories', 'zentro-blocks')
  }, [{
    id: 'all',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('All', 'zentro-blocks')
  }, ...cats].filter(c => c.id === 'all' || counts[c.id]).map(c => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: c.id,
    type: "button",
    "aria-pressed": activeCategory === c.id,
    className: `gk-kit-category-btn ${activeCategory === c.id ? 'is-active' : ''}`,
    onClick: () => setActiveCategory(c.id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-kit-cat-name"
  }, c.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-kit-cat-count"
  }, counts[c.id] || 0))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    className: "gk-kit-body",
    ref: bodyRef
  }, !kit && !loadError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Loading designs…', 'zentro-blocks')
  }), loadError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-no-results"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('The design library could not be loaded. Please check your connection and try again.', 'zentro-blocks'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "gk-kit-load-more",
    onClick: () => {
      setLoadError(false);
      loadKit().then(setKit).catch(() => setLoadError(true));
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Retry', 'zentro-blocks')))), kit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-kit-grid ${isTemplates ? 'gk-kit-grid--templates' : ''}`
  }, visible.length > 0 ? visible.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(KitCard, {
    key: item.id,
    item: item,
    isTemplate: isTemplates,
    onInsert: handleInsert
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-no-results"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('No designs found matching your search.', 'zentro-blocks'))), filtered.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-kit-more"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-kit-more-count"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(/* translators: 1: shown designs, 2: total designs */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Showing %1$d of %2$d', 'zentro-blocks'), visible.length, filtered.length)), hasMore && (loadingMore ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Loading more…', 'zentro-blocks')
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "gk-kit-load-more",
    onClick: loadMore
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Load more', 'zentro-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: sentinelRef,
    className: "gk-kit-sentinel",
    "aria-hidden": "true"
  })))))));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('zentro-kit-library', {
  render: ZentroKitLibraryModal
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map