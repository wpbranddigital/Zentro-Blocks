/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs-block/index.js"
/*!*********************************!*\
  !*** ./src/tabs-block/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/tabs-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/tabs-block/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/tabs-block/editor.scss");










const PANEL = 'zentro-blocks/tab-panel';

/**
 * Build a tab-panel block from a label and an HTML string (legacy content).
 *
 * @param {string} label Tab label.
 * @param {string} html  Legacy HTML/text content.
 * @return {Object} Block.
 */
const makePanel = (label, html = '') => {
  let inner = html ? (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.rawHandler)({
    HTML: html
  }) : [];
  if (!inner.length) {
    inner = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/paragraph', {
      content: html || ''
    })];
  }
  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)(PANEL, {
    label
  }, inner);
};
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tabs,
    activeColor,
    borderRadius,
    alignment
  } = attributes;
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const {
    panels,
    selectedPanelIndex,
    selectedId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const be = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const children = be.getBlocks(clientId);
    const selId = be.getSelectedBlockClientId();
    let idx = -1;
    if (selId) {
      const parents = [selId, ...be.getBlockParents(selId, true)];
      idx = children.findIndex(c => parents.includes(c.clientId));
    }
    return {
      panels: children,
      selectedPanelIndex: idx,
      selectedId: selId
    };
  }, [clientId]);
  const {
    replaceInnerBlocks,
    insertBlock,
    removeBlock,
    moveBlocksUp,
    moveBlocksDown,
    updateBlockAttributes,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);

  // One-time migration: old tabs stored plain text in the `tabs` attribute.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (panels.length === 0 && Array.isArray(tabs) && tabs.length) {
      replaceInnerBlocks(clientId, tabs.map((t, i) => makePanel(t.label || `Tab ${i + 1}`, t.content || '')), false);
      setAttributes({
        tabs: []
      });
    } else if (panels.length === 0) {
      replaceInnerBlocks(clientId, [makePanel((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab One', 'zentro-blocks')), makePanel((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Two', 'zentro-blocks'))], false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Selecting a block inside a hidden tab (e.g. via List View) opens that tab.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (selectedPanelIndex > -1 && selectedPanelIndex !== activeTab) {
      setActiveTab(selectedPanelIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, selectedPanelIndex]);

  // Keep the active index valid after tabs are removed.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (activeTab > panels.length - 1 && panels.length) {
      setActiveTab(panels.length - 1);
    }
  }, [panels.length, activeTab]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: 'gk-tabs'
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    className: 'gk-tabs__panels'
  }, {
    allowedBlocks: [PANEL],
    orientation: 'horizontal',
    renderAppender: false,
    templateLock: false
  });
  const addTab = () => {
    const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %d: tab number */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab %d', 'zentro-blocks'), panels.length + 1);
    insertBlock(makePanel(label), panels.length, clientId, false);
    setActiveTab(panels.length);
  };
  const removeTab = index => {
    if (panels[index]) {
      removeBlock(panels[index].clientId, false);
      setActiveTab(Math.max(0, index - 1));
    }
  };
  const moveTab = (index, dir) => {
    const id = panels[index]?.clientId;
    if (!id) {
      return;
    }
    if (dir < 0) {
      moveBlocksUp([id], clientId);
    } else {
      moveBlocksDown([id], clientId);
    }
    setActiveTab(index + dir);
  };
  const setLabel = (index, label) => {
    if (panels[index]) {
      updateBlockAttributes(panels[index].clientId, {
        label
      });
    }
  };

  // Hide every panel except the active one (editor only).
  const hideCss = panels.map((p, i) => i === activeTab ? '' : `#block-${p.clientId}{display:none !important;}`).join('');
  const justify = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[alignment] || 'flex-start';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Settings', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Alignment', 'zentro-blocks'),
    value: alignment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'zentro-blocks'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'zentro-blocks'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'zentro-blocks'),
      value: 'right'
    }],
    onChange: val => setAttributes({
      alignment: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius (px)', 'zentro-blocks'),
    value: borderRadius,
    onChange: val => setAttributes({
      borderRadius: val
    }),
    min: 0,
    max: 20
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs', 'zentro-blocks'),
    initialOpen: true
  }, panels.map((panel, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: panel.clientId,
    className: "gk-tabs-sidebar-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %d: tab number */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab %d label', 'zentro-blocks'), index + 1),
    value: panel.attributes.label,
    onChange: val => setLabel(index, val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-tabs-sidebar-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    size: "small",
    variant: "tertiary",
    icon: "arrow-up-alt2",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move up', 'zentro-blocks'),
    disabled: index === 0,
    onClick: () => moveTab(index, -1)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    size: "small",
    variant: "tertiary",
    icon: "arrow-down-alt2",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move down', 'zentro-blocks'),
    disabled: index === panels.length - 1,
    onClick: () => moveTab(index, 1)
  }), panels.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    size: "small",
    isDestructive: true,
    variant: "tertiary",
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove tab', 'zentro-blocks'),
    onClick: () => removeTab(index)
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    onClick: addTab
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('+ Add Tab', 'zentro-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings', 'zentro-blocks'),
    colorSettings: [{
      value: activeColor,
      onChange: val => setAttributes({
        activeColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Tab Color', 'zentro-blocks')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, hideCss && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, hideCss), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-tabs__nav",
    role: "tablist",
    style: {
      justifyContent: justify
    }
  }, panels.map((panel, index) => {
    const isActive = index === activeTab;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: panel.clientId,
      role: "tab",
      tabIndex: 0,
      "aria-selected": isActive,
      className: `gk-tabs__nav-btn${isActive ? ' is-active' : ''}`,
      style: {
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
        ...(isActive ? {
          borderBottomColor: activeColor,
          color: activeColor
        } : {})
      },
      onClick: () => setActiveTab(index),
      onKeyDown: e => {
        if (e.key === 'Enter' && !isActive) {
          setActiveTab(index);
        }
      }
    }, isActive ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "span",
      value: panel.attributes.label,
      onChange: val => setLabel(index, val),
      allowedFormats: [],
      withoutInteractiveFormatting: true,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab label', 'zentro-blocks'),
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab label', 'zentro-blocks')
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, panel.attributes.label));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "gk-tabs__add",
    icon: "plus",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add tab', 'zentro-blocks'),
    onClick: addTab
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }), panels[activeTab] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "gk-tabs__select-panel",
    variant: "link",
    onClick: () => selectBlock(panels[activeTab].clientId)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select this tab', 'zentro-blocks'))));
}
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__.name, {
  edit: Edit,
  save: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)
});

/***/ },

/***/ "./src/tabs-block/editor.scss"
/*!************************************!*\
  !*** ./src/tabs-block/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/tabs-block/style.scss"
/*!***********************************!*\
  !*** ./src/tabs-block/style.scss ***!
  \***********************************/
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

/***/ "./src/tabs-block/block.json"
/*!***********************************!*\
  !*** ./src/tabs-block/block.json ***!
  \***********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"zentro-blocks/tabs-block","version":"1.0.0","title":"Tabs Block","category":"zentro-blocks","icon":"table-row-before","description":"Display content in switchable tabs with keyboard navigation and ARIA support.","keywords":["tabs","tabbed","content"],"textdomain":"zentro-blocks","attributes":{"tabs":{"type":"array","default":[{"label":"Tab One","content":"Content for tab one."},{"label":"Tab Two","content":"Content for tab two."}]},"activeColor":{"type":"string","default":"#0073aa"},"borderRadius":{"type":"number","default":4},"alignment":{"type":"string","default":"left"}},"supports":{"html":false,"align":["wide","full"]},"render":"file:./render.php","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tabs-block/index": 0,
/******/ 			"tabs-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
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
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkzentro_blocks"] = globalThis["webpackChunkzentro_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tabs-block/style-index"], () => (__webpack_require__("./src/tabs-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map