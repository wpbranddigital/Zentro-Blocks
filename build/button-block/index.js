/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button-block/index.js"
/*!***********************************!*\
  !*** ./src/button-block/index.js ***!
  \***********************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/button-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/button-block/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/button-block/editor.scss");









// SVG Icons Lookup
const getIconSvg = name => {
  switch (name) {
    case 'arrow':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M5 12h14M12 5l7 7-7 7",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'check':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20 6L9 17l-5-5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'cart':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "9",
        cy: "21",
        r: "1"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "20",
        cy: "21",
        r: "1"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'download':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'envelope':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M22 6l-10 7L2 6"
      }));
    case 'heart':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      }));
    case 'star':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-btn-icon",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      }));
    default:
      return null;
  }
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    text,
    url,
    linkTarget,
    buttonSize,
    customPaddingTop,
    customPaddingBottom,
    customPaddingLeft,
    customPaddingRight,
    fontSize,
    borderRadius,
    alignment,
    normalBg,
    normalText,
    hoverBg,
    hoverText,
    shadowType,
    animationType,
    iconName,
    iconPosition,
    iconHoverAnim
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `gk-button-block-wrapper gk-btn-align-${alignment}`
  });

  // Build padding styles
  let pt = 14,
    pb = 14,
    pl = 32,
    pr = 32,
    fs = 16;
  if (buttonSize === 'small') {
    pt = 10;
    pb = 10;
    pl = 24;
    pr = 24;
    fs = 14;
  } else if (buttonSize === 'large') {
    pt = 18;
    pb = 18;
    pl = 44;
    pr = 44;
    fs = 18;
  } else if (buttonSize === 'custom') {
    pt = customPaddingTop;
    pb = customPaddingBottom;
    pl = customPaddingLeft;
    pr = customPaddingRight;
    fs = fontSize;
  }
  const buttonStyles = {
    '--gk-btn-bg': normalBg,
    '--gk-btn-color': normalText,
    '--gk-btn-hover-bg': hoverBg,
    '--gk-btn-hover-color': hoverText,
    paddingTop: `${pt}px`,
    paddingBottom: `${pb}px`,
    paddingLeft: `${pl}px`,
    paddingRight: `${pr}px`,
    fontSize: `${fs}px`,
    borderRadius: `${borderRadius}px`
  };
  const buttonClass = ['gk-btn-interactive', `gk-btn-shadow-${shadowType}`, `gk-btn-anim-${animationType}`, iconName !== 'none' ? `gk-btn-has-icon gk-btn-icon-${iconPosition}` : '', iconName !== 'none' ? `gk-btn-icon-hover-${iconHoverAnim}` : ''].filter(Boolean).join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Link Settings', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button URL', 'zentro-blocks'),
    value: url,
    onChange: val => setAttributes({
      url: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'zentro-blocks'),
    checked: linkTarget === '_blank',
    onChange: val => setAttributes({
      linkTarget: val ? '_blank' : '_self'
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alignment', 'zentro-blocks'),
    value: alignment,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }, {
      label: 'Full Width',
      value: 'justify'
    }],
    onChange: val => setAttributes({
      alignment: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sizing & Layout', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Size', 'zentro-blocks'),
    value: buttonSize,
    options: [{
      label: 'Small',
      value: 'small'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'Custom Sizing',
      value: 'custom'
    }],
    onChange: val => setAttributes({
      buttonSize: val
    })
  }), buttonSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Size (px)', 'zentro-blocks'),
    value: fontSize,
    onChange: val => setAttributes({
      fontSize: val
    }),
    min: 12,
    max: 40
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top/Bottom (px)', 'zentro-blocks'),
    value: customPaddingTop,
    onChange: val => setAttributes({
      customPaddingTop: val,
      customPaddingBottom: val
    }),
    min: 6,
    max: 50
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left/Right (px)', 'zentro-blocks'),
    value: customPaddingLeft,
    onChange: val => setAttributes({
      customPaddingLeft: val,
      customPaddingRight: val
    }),
    min: 12,
    max: 80
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius (px)', 'zentro-blocks'),
    value: borderRadius,
    onChange: val => setAttributes({
      borderRadius: val
    }),
    min: 0,
    max: 50
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Options', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zentro-blocks'),
    value: iconName,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Arrow →',
      value: 'arrow'
    }, {
      label: 'Checkmark ✓',
      value: 'check'
    }, {
      label: 'Shopping Cart 🛒',
      value: 'cart'
    }, {
      label: 'Download 📥',
      value: 'download'
    }, {
      label: 'Envelope ✉',
      value: 'envelope'
    }, {
      label: 'Heart ♥',
      value: 'heart'
    }, {
      label: 'Star ★',
      value: 'star'
    }],
    onChange: val => setAttributes({
      iconName: val
    })
  }), iconName !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'zentro-blocks'),
    value: iconPosition,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: val => setAttributes({
      iconPosition: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Hover Animation', 'zentro-blocks'),
    value: iconHoverAnim,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Shift / Translate',
      value: 'translate'
    }, {
      label: 'Rotate',
      value: 'rotate'
    }, {
      label: 'Bounce',
      value: 'bounce'
    }],
    onChange: val => setAttributes({
      iconHoverAnim: val
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover & Effect Styles', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Effect', 'zentro-blocks'),
    value: animationType,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Scale Up (Grow)',
      value: 'grow'
    }, {
      label: 'Float Up',
      value: 'float'
    }, {
      label: 'Shine Shimmer Effect',
      value: 'shine'
    }],
    onChange: val => setAttributes({
      animationType: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Style', 'zentro-blocks'),
    value: shadowType,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Soft Shadow',
      value: 'soft'
    }, {
      label: 'Medium Shadow',
      value: 'medium'
    }, {
      label: 'Glow Effect',
      value: 'glow'
    }],
    onChange: val => setAttributes({
      shadowType: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings', 'zentro-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: normalBg,
      onChange: val => setAttributes({
        normalBg: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zentro-blocks')
    }, {
      value: normalText,
      onChange: val => setAttributes({
        normalText: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'zentro-blocks')
    }, {
      value: hoverBg,
      onChange: val => setAttributes({
        hoverBg: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Background Color', 'zentro-blocks')
    }, {
      value: hoverText,
      onChange: val => setAttributes({
        hoverText: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Text Color', 'zentro-blocks')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: buttonClass,
    style: buttonStyles
  }, iconName !== 'none' && iconPosition === 'left' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-btn-icon-wrap gk-btn-icon-wrap--left"
  }, getIconSvg(iconName)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "span",
    value: text,
    onChange: val => setAttributes({
      text: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text...', 'zentro-blocks'),
    allowedFormats: []
  }), iconName !== 'none' && iconPosition === 'right' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-btn-icon-wrap gk-btn-icon-wrap--right"
  }, getIconSvg(iconName)))));
}
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: Edit,
  save: () => null
});

/***/ },

/***/ "./src/button-block/editor.scss"
/*!**************************************!*\
  !*** ./src/button-block/editor.scss ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/button-block/style.scss"
/*!*************************************!*\
  !*** ./src/button-block/style.scss ***!
  \*************************************/
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/button-block/block.json"
/*!*************************************!*\
  !*** ./src/button-block/block.json ***!
  \*************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"zentro-blocks/button-block","version":"1.0.0","title":"Interactive Button","category":"zentro-blocks","icon":"button","description":"Customizable, highly animated Call-To-Action button with custom sizes, hover styles, icons, and alignments.","keywords":["button","link","cta","button-block"],"textdomain":"zentro-blocks","attributes":{"text":{"type":"string","default":"Explore More"},"url":{"type":"string","default":"#"},"linkTarget":{"type":"string","default":"_self"},"buttonSize":{"type":"string","default":"medium"},"customPaddingTop":{"type":"number","default":14},"customPaddingBottom":{"type":"number","default":14},"customPaddingLeft":{"type":"number","default":32},"customPaddingRight":{"type":"number","default":32},"fontSize":{"type":"number","default":16},"borderRadius":{"type":"number","default":8},"alignment":{"type":"string","default":"center"},"normalBg":{"type":"string","default":"#0073aa"},"normalText":{"type":"string","default":"#ffffff"},"hoverBg":{"type":"string","default":"#005a87"},"hoverText":{"type":"string","default":"#ffffff"},"shadowType":{"type":"string","default":"soft"},"animationType":{"type":"string","default":"float"},"iconName":{"type":"string","default":"arrow"},"iconPosition":{"type":"string","default":"right"},"iconHoverAnim":{"type":"string","default":"translate"}},"supports":{"html":false,"align":["wide","full"]},"render":"file:./render.php","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"button-block/index": 0,
/******/ 			"button-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["button-block/style-index"], () => (__webpack_require__("./src/button-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map