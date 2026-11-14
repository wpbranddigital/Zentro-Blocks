/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/box-card-block/index.js"
/*!*************************************!*\
  !*** ./src/box-card-block/index.js ***!
  \*************************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/box-card-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/box-card-block/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/box-card-block/editor.scss");









// SVG Icons Lookup
const getCardIconSvg = name => {
  switch (name) {
    case 'star':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      }));
    case 'heart':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      }));
    case 'bulb':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5h6zM9 18h6M10 22h4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'shield':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'rocket':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5 1.5 0 3.5-1 5-2.5m10-10l-6 6m12-12L12.5 7.5m5.5-2l-3-3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M19 5c-2.23 2.23-4.88 5.64-6.5 8.5L9.5 10.5C12.36 8.88 15.77 6.23 18 4z"
      }));
    case 'check':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "gk-card-svg-icon",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M22 11.08V12a10 10 0 11-5.93-9.14",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M22 4L12 14.01l-3-3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
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
    cards,
    columnsDesktop,
    columnsTablet,
    columnsMobile,
    gap,
    alignment,
    cardBg,
    titleColor,
    descColor,
    badgeBg,
    badgeTextColor,
    linkColor,
    linkHoverColor,
    hoverEffect,
    borderRadius,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderColor,
    borderWidth
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `gk-box-card-grid-wrapper gk-card-align-${alignment}`,
    style: {
      '--gk-bc-cols-desktop': columnsDesktop,
      '--gk-bc-cols-tablet': columnsTablet,
      '--gk-bc-cols-mobile': columnsMobile,
      '--gk-bc-gap': `${gap}px`
    }
  });
  const cardStyles = {
    '--gk-card-bg': cardBg,
    '--gk-card-title-color': titleColor,
    '--gk-card-desc-color': descColor,
    '--gk-card-border-color': borderColor,
    '--gk-card-badge-bg': badgeBg,
    '--gk-card-badge-color': badgeTextColor,
    '--gk-card-link-color': linkColor,
    '--gk-card-link-hover-color': linkHoverColor,
    borderWidth: `${borderWidth}px`,
    borderRadius: `${borderRadius}px`,
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
    paddingLeft: `${paddingLeft}px`,
    paddingRight: `${paddingRight}px`
  };
  const cardClass = ['gk-box-card', `gk-card-hover-${hoverEffect}`].filter(Boolean).join(' ');
  const updateCard = (index, key, value) => {
    const newCards = [...cards];
    newCards[index][key] = value;
    setAttributes({
      cards: newCards
    });
  };
  const addCard = () => {
    const newCards = [...cards, {
      title: 'New Feature',
      description: 'Short description of the feature goes here.',
      badgeText: 'NEW',
      showBadge: false,
      iconType: 'icon',
      iconName: 'star',
      imageSrc: '',
      imageAlt: '',
      cardLink: '#',
      cardLinkText: 'Learn More →',
      cardLinkTarget: '_self'
    }];
    setAttributes({
      cards: newCards
    });
  };
  const removeCard = index => {
    const newCards = cards.filter((_, i) => i !== index);
    setAttributes({
      cards: newCards
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Layout', 'zentro-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns (Desktop)', 'zentro-blocks'),
    value: columnsDesktop,
    onChange: val => setAttributes({
      columnsDesktop: val
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns (Tablet)', 'zentro-blocks'),
    value: columnsTablet,
    onChange: val => setAttributes({
      columnsTablet: val
    }),
    min: 1,
    max: 4
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns (Mobile)', 'zentro-blocks'),
    value: columnsMobile,
    onChange: val => setAttributes({
      columnsMobile: val
    }),
    min: 1,
    max: 3
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap (px)', 'zentro-blocks'),
    value: gap,
    onChange: val => setAttributes({
      gap: val
    }),
    min: 0,
    max: 60
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Layout & Padding', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'zentro-blocks'),
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
    }],
    onChange: val => setAttributes({
      alignment: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Animation Effect', 'zentro-blocks'),
    value: hoverEffect,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Float Up',
      value: 'float'
    }, {
      label: 'Scale Up',
      value: 'scale'
    }, {
      label: 'Shadow Glow',
      value: 'shadow'
    }, {
      label: 'Accent Border',
      value: 'border'
    }],
    onChange: val => setAttributes({
      hoverEffect: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Border Radius (px)', 'zentro-blocks'),
    value: borderRadius,
    onChange: val => setAttributes({
      borderRadius: val
    }),
    min: 0,
    max: 40
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Width (px)', 'zentro-blocks'),
    value: borderWidth,
    onChange: val => setAttributes({
      borderWidth: val
    }),
    min: 0,
    max: 10
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Padding Top/Bottom (px)', 'zentro-blocks'),
    value: paddingTop,
    onChange: val => setAttributes({
      paddingTop: val,
      paddingBottom: val
    }),
    min: 10,
    max: 80
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Padding Left/Right (px)', 'zentro-blocks'),
    value: paddingLeft,
    onChange: val => setAttributes({
      paddingLeft: val,
      paddingRight: val
    }),
    min: 10,
    max: 80
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Configurations', 'zentro-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: cardBg,
      onChange: val => setAttributes({
        cardBg: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Background', 'zentro-blocks')
    }, {
      value: titleColor,
      onChange: val => setAttributes({
        titleColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Text Color', 'zentro-blocks')
    }, {
      value: descColor,
      onChange: val => setAttributes({
        descColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Text Color', 'zentro-blocks')
    }, {
      value: borderColor,
      onChange: val => setAttributes({
        borderColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Outline Color', 'zentro-blocks')
    }, {
      value: badgeBg,
      onChange: val => setAttributes({
        badgeBg: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Badge Background', 'zentro-blocks')
    }, {
      value: badgeTextColor,
      onChange: val => setAttributes({
        badgeTextColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Badge Text Color', 'zentro-blocks')
    }, {
      value: linkColor,
      onChange: val => setAttributes({
        linkColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Normal Color', 'zentro-blocks')
    }, {
      value: linkHoverColor,
      onChange: val => setAttributes({
        linkHoverColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Hover Color', 'zentro-blocks')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, cards.map((card, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: cardClass,
    style: cardStyles,
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-controls-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Card ", index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isDestructive: true,
    isSmall: true,
    variant: "link",
    onClick: () => removeCard(index)
  }, "Remove")), card.showBadge && card.badgeText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-badge-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-card-badge"
  }, card.badgeText)), card.iconType !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-media"
  }, card.iconType === 'icon' && card.iconName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-icon-container"
  }, getCardIconSvg(card.iconName)), card.iconType === 'image' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-uploaded-image-wrapper"
  }, card.imageSrc ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-image-edit-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: card.imageSrc,
    className: "gk-card-uploaded-image",
    alt: card.imageAlt
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isDestructive: true,
    isSmall: true,
    variant: "secondary",
    onClick: () => {
      updateCard(index, 'imageSrc', '');
      updateCard(index, 'imageAlt', '');
    },
    style: {
      marginTop: '10px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Image', 'zentro-blocks'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    onSelect: media => {
      updateCard(index, 'imageSrc', media.url);
      updateCard(index, 'imageAlt', media.alt || '');
    },
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: 'Upload Icon Image'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h3",
    className: "gk-card-title",
    value: card.title,
    onChange: val => updateCard(index, 'title', val),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Card Title...', 'zentro-blocks'),
    allowedFormats: ['core/bold', 'core/italic']
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    className: "gk-card-desc",
    value: card.description,
    onChange: val => updateCard(index, 'description', val),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter short feature details...', 'zentro-blocks'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link']
  }), card.cardLinkText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "span",
    className: "gk-card-action-link",
    value: card.cardLinkText,
    onChange: val => updateCard(index, 'cardLinkText', val),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Text...', 'zentro-blocks'),
    allowedFormats: []
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-card-specific-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Badge', 'zentro-blocks'),
    checked: card.showBadge,
    onChange: val => updateCard(index, 'showBadge', val)
  }), card.showBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Badge Text', 'zentro-blocks'),
    value: card.badgeText,
    onChange: val => updateCard(index, 'badgeText', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Media Type', 'zentro-blocks'),
    value: card.iconType,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Built-in SVG Icon',
      value: 'icon'
    }, {
      label: 'Custom Image Upload',
      value: 'image'
    }],
    onChange: val => updateCard(index, 'iconType', val)
  }), card.iconType === 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon', 'zentro-blocks'),
    value: card.iconName,
    options: [{
      label: 'Star ★',
      value: 'star'
    }, {
      label: 'Heart ♥',
      value: 'heart'
    }, {
      label: 'Lightbulb 💡',
      value: 'bulb'
    }, {
      label: 'Shield 🛡️',
      value: 'shield'
    }, {
      label: 'Rocket 🚀',
      value: 'rocket'
    }, {
      label: 'Check ✓',
      value: 'check'
    }],
    onChange: val => updateCard(index, 'iconName', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Action Link URL', 'zentro-blocks'),
    value: card.cardLink,
    onChange: val => updateCard(index, 'cardLink', val)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open Link in New Tab', 'zentro-blocks'),
    checked: card.cardLinkTarget === '_blank',
    onChange: val => updateCard(index, 'cardLinkTarget', val ? '_blank' : '_self')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-add-card-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "secondary",
    onClick: addCard
  }, "+ Add Feature Card")));
}
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: Edit,
  save: () => null
});

/***/ },

/***/ "./src/box-card-block/editor.scss"
/*!****************************************!*\
  !*** ./src/box-card-block/editor.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/box-card-block/style.scss"
/*!***************************************!*\
  !*** ./src/box-card-block/style.scss ***!
  \***************************************/
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

/***/ "./src/box-card-block/block.json"
/*!***************************************!*\
  !*** ./src/box-card-block/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"zentro-blocks/box-card-block","version":"1.0.0","title":"Premium Feature Card","category":"zentro-blocks","icon":"welcome-widgets-menus","description":"Showcase your product features, services, or highlights inside highly animated, customizable grid cards.","keywords":["card","box","feature","grid"],"textdomain":"zentro-blocks","attributes":{"cards":{"type":"array","default":[{"title":"Feature One","description":"Short description of the feature goes here.","badgeText":"NEW","showBadge":true,"iconType":"icon","iconName":"star","imageSrc":"","imageAlt":"","cardLink":"#","cardLinkText":"Learn More →","cardLinkTarget":"_self"},{"title":"Feature Two","description":"Short description of the feature goes here.","badgeText":"HOT","showBadge":false,"iconType":"icon","iconName":"check","imageSrc":"","imageAlt":"","cardLink":"#","cardLinkText":"Learn More →","cardLinkTarget":"_self"},{"title":"Feature Three","description":"Short description of the feature goes here.","badgeText":"PRO","showBadge":false,"iconType":"icon","iconName":"heart","imageSrc":"","imageAlt":"","cardLink":"#","cardLinkText":"Learn More →","cardLinkTarget":"_self"}]},"columnsDesktop":{"type":"number","default":3},"columnsTablet":{"type":"number","default":2},"columnsMobile":{"type":"number","default":1},"gap":{"type":"number","default":30},"alignment":{"type":"string","default":"left"},"cardBg":{"type":"string","default":"#ffffff"},"titleColor":{"type":"string","default":"#0f172a"},"descColor":{"type":"string","default":"#475569"},"badgeBg":{"type":"string","default":"#0073aa"},"badgeTextColor":{"type":"string","default":"#ffffff"},"linkColor":{"type":"string","default":"#0073aa"},"linkHoverColor":{"type":"string","default":"#005a87"},"hoverEffect":{"type":"string","default":"float"},"borderRadius":{"type":"number","default":12},"paddingTop":{"type":"number","default":32},"paddingBottom":{"type":"number","default":32},"paddingLeft":{"type":"number","default":32},"paddingRight":{"type":"number","default":32},"borderColor":{"type":"string","default":"#e2e8f0"},"borderWidth":{"type":"number","default":1}},"supports":{"html":false,"align":["wide","full"]},"render":"file:./render.php","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"box-card-block/index": 0,
/******/ 			"box-card-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["box-card-block/style-index"], () => (__webpack_require__("./src/box-card-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map