/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container-block/index.js"
/*!**************************************!*\
  !*** ./src/container-block/index.js ***!
  \**************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/container-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/container-block/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/container-block/editor.scss");










function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    hasLayoutSelected,
    selectedStructure,
    gridTemplateColumns,
    gridTemplateColumnsTablet,
    gridTemplateColumnsMobile,
    layoutType,
    contentWidth,
    heightType,
    overflow,
    flexWrap,
    gridAutoFit,
    gridAutoFill,
    gridTemplateAreas,
    backgroundColor,
    bgType,
    bgGradient,
    backgroundImage,
    bgVideo,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat,
    backgroundAttachment,
    overlayColor,
    overlayGradient,
    overlayType,
    overlayOpacity,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    borderWidth,
    borderStyle,
    borderColor,
    boxShadow,
    shadowColor,
    shadowX,
    shadowY,
    shadowBlur,
    shadowSpread,
    shapeTopType,
    shapeTopColor,
    shapeTopHeight,
    shapeTopWidth,
    shapeTopFlip,
    shapeBottomType,
    shapeBottomColor,
    shapeBottomHeight,
    shapeBottomWidth,
    shapeBottomFlip,
    entranceAnimation,
    scrollAnimation,
    hoverAnimation,
    visibilityDesktop,
    visibilityTablet,
    visibilityMobile,
    visibilityRole,
    containerLink,
    isSticky,
    zIndex,
    customCss,
    htmlId,
    customClasses
  } = attributes;
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor').getBlocks(clientId), [clientId]);
  const [activeDevice, setActiveDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)('desktop'); // desktop | tablet | mobile

  const selectStructure = structure => {
    let lType = 'grid';
    let targetCount = 0;
    let attrsToSet = {
      selectedStructure: structure,
      hasLayoutSelected: true
    };
    const childSettings = {
      hasLayoutSelected: true,
      layoutType: 'block',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20
    };
    if (structure === '1-col') {
      lType = 'block';
      targetCount = 1;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 1,
        gridColumnsTablet: 1,
        gridColumnsMobile: 1,
        gridTemplateColumns: '1fr',
        gridTemplateColumnsTablet: '1fr',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === '2-col') {
      targetCount = 2;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 2,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === '3-col') {
      targetCount = 3;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 3,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === '4-col') {
      targetCount = 4;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 4,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === '2-row') {
      targetCount = 2;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 1,
        gridRows: 2,
        gridColumnsTablet: 1,
        gridRowsTablet: 2,
        gridColumnsMobile: 1,
        gridRowsMobile: 2,
        gridTemplateColumns: '1fr',
        gridTemplateColumnsTablet: '1fr',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === 'grid-2x2') {
      targetCount = 4;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 2,
        gridRows: 2,
        gridColumnsTablet: 2,
        gridRowsTablet: 2,
        gridColumnsMobile: 1,
        gridRowsMobile: 4,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === 'grid-3x2') {
      targetCount = 6;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 3,
        gridRows: 2,
        gridColumnsTablet: 2,
        gridRowsTablet: 3,
        gridColumnsMobile: 1,
        gridRowsMobile: 6,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === 'sidebar-left') {
      targetCount = 2;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 2,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: '3fr 7fr',
        gridTemplateColumnsTablet: '3fr 7fr',
        gridTemplateColumnsMobile: '1fr',
        gridTemplateAreas: ''
      };
    } else if (structure === 'sidebar-right') {
      targetCount = 2;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 2,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: '7fr 3fr',
        gridTemplateColumnsTablet: '7fr 3fr',
        gridTemplateColumnsMobile: '1fr',
        gridTemplateAreas: ''
      };
    } else if (structure === 'custom-grid') {
      targetCount = 3;
      attrsToSet = {
        ...attrsToSet,
        gridColumns: 3,
        gridColumnsTablet: 2,
        gridColumnsMobile: 1,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateColumnsTablet: 'repeat(2, 1fr)',
        gridTemplateColumnsMobile: '1fr'
      };
    } else if (structure === 'flex') {
      lType = 'flex';
      targetCount = 0;
      attrsToSet = {
        ...attrsToSet,
        gridTemplateColumns: '',
        gridTemplateColumnsTablet: '',
        gridTemplateColumnsMobile: ''
      };
    } else if (structure === 'grid') {
      lType = 'grid';
      targetCount = 0;
      attrsToSet = {
        ...attrsToSet,
        gridTemplateColumns: '',
        gridTemplateColumnsTablet: '',
        gridTemplateColumnsMobile: ''
      };
    } else if (structure === 'blank') {
      lType = 'block';
      targetCount = 0;
      attrsToSet = {
        ...attrsToSet,
        gridTemplateColumns: '',
        gridTemplateColumnsTablet: '',
        gridTemplateColumnsMobile: ''
      };
    }
    attrsToSet.layoutType = lType;
    setAttributes(attrsToSet);
    if (targetCount > 0) {
      const currentCount = innerBlocks.length;
      if (currentCount < targetCount) {
        const missingCount = targetCount - currentCount;
        const newBlocks = [];
        for (let i = 0; i < missingCount; i++) {
          newBlocks.push((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('zentro-blocks/container-block', childSettings));
        }
        replaceInnerBlocks(clientId, [...innerBlocks, ...newBlocks]);
      } else if (currentCount > targetCount) {
        replaceInnerBlocks(clientId, innerBlocks.slice(0, targetCount));
      }
    }
  };

  // Determine values based on active responsive device
  const getResponsiveVal = (desktopKey, tabletKey, mobileKey) => {
    if (activeDevice === 'mobile') {
      return attributes[mobileKey];
    }
    if (activeDevice === 'tablet') {
      return attributes[tabletKey];
    }
    return attributes[desktopKey];
  };
  const setResponsiveVal = (desktopKey, tabletKey, mobileKey, val) => {
    if (activeDevice === 'mobile') {
      setAttributes({
        [mobileKey]: val
      });
    } else if (activeDevice === 'tablet') {
      setAttributes({
        [tabletKey]: val
      });
    } else {
      setAttributes({
        [desktopKey]: val
      });
    }
  };

  // Responsive attribute names mapping
  const responsiveFields = {
    maxWidth: ['maxWidth', 'maxWidthTablet', 'maxWidthMobile'],
    height: ['height', 'heightTablet', 'heightMobile'],
    paddingTop: ['paddingTop', 'paddingTopTablet', 'paddingTopMobile'],
    paddingBottom: ['paddingBottom', 'paddingBottomTablet', 'paddingBottomMobile'],
    paddingLeft: ['paddingLeft', 'paddingLeftTablet', 'paddingLeftMobile'],
    paddingRight: ['paddingRight', 'paddingRightTablet', 'paddingRightMobile'],
    marginTop: ['marginTop', 'marginTopTablet', 'marginTopMobile'],
    marginBottom: ['marginBottom', 'marginBottomTablet', 'marginBottomMobile'],
    gap: ['gap', 'gapTablet', 'gapMobile'],
    rowGap: ['rowGap', 'rowGapTablet', 'rowGapMobile'],
    columnGap: ['columnGap', 'columnGapTablet', 'columnGapMobile'],
    gridColumns: ['gridColumns', 'gridColumnsTablet', 'gridColumnsMobile'],
    gridRows: ['gridRows', 'gridRowsTablet', 'gridRowsMobile'],
    flexDirection: ['flexDirection', 'flexDirectionTablet', 'flexDirectionMobile'],
    justifyContent: ['justifyContent', 'justifyContentTablet', 'justifyContentMobile'],
    alignItems: ['alignItems', 'alignItemsTablet', 'alignItemsMobile']
  };
  const renderResponsiveRange = (label, key, min = 0, max = 200) => {
    const fields = responsiveFields[key];
    const val = getResponsiveVal(fields[0], fields[1], fields[2]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: `${label} (${activeDevice.toUpperCase()})`,
      value: typeof val === 'string' ? parseInt(val) || 0 : val,
      onChange: newVal => setResponsiveVal(fields[0], fields[1], fields[2], newVal),
      min: min,
      max: max,
      allowReset: true
    });
  };
  const renderResponsiveSelect = (label, key, options) => {
    const fields = responsiveFields[key];
    const val = getResponsiveVal(fields[0], fields[1], fields[2]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: `${label} (${activeDevice.toUpperCase()})`,
      value: val,
      options: options,
      onChange: newVal => setResponsiveVal(fields[0], fields[1], fields[2], newVal)
    });
  };
  const renderResponsiveText = (label, key, help = '') => {
    const fields = responsiveFields[key];
    const val = getResponsiveVal(fields[0], fields[1], fields[2]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: `${label} (${activeDevice.toUpperCase()})`,
      help: help,
      value: val,
      onChange: newVal => setResponsiveVal(fields[0], fields[1], fields[2], newVal)
    });
  };

  // Assemble Container Style for editor view (Simulate active device styling)
  const getEditorContainerStyles = () => {
    const currentMaxWidth = getResponsiveVal('maxWidth', 'maxWidthTablet', 'maxWidthMobile');
    let maxWidthVal = '100%';
    if (contentWidth === 'custom') {
      maxWidthVal = currentMaxWidth;
    } else if (contentWidth === 'boxed') {
      maxWidthVal = '1200px';
    }
    const currentHeight = getResponsiveVal('height', 'heightTablet', 'heightMobile');
    let heightVal = 'auto';
    if (heightType === 'custom') {
      heightVal = currentHeight;
    } else if (heightType === 'fit') {
      heightVal = '100vh';
    }
    const styles = {
      paddingTop: `${getResponsiveVal('paddingTop', 'paddingTopTablet', 'paddingTopMobile')}px`,
      paddingBottom: `${getResponsiveVal('paddingBottom', 'paddingBottomTablet', 'paddingBottomMobile')}px`,
      paddingLeft: `${getResponsiveVal('paddingLeft', 'paddingLeftTablet', 'paddingLeftMobile')}px`,
      paddingRight: `${getResponsiveVal('paddingRight', 'paddingRightTablet', 'paddingRightMobile')}px`,
      marginTop: `${getResponsiveVal('marginTop', 'marginTopTablet', 'marginTopMobile')}px`,
      marginBottom: `${getResponsiveVal('marginBottom', 'marginBottomTablet', 'marginBottomMobile')}px`,
      maxWidth: maxWidthVal,
      height: heightVal,
      minHeight: heightType === 'min' ? currentHeight : undefined,
      overflow,
      borderRadius: `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      zIndex
    };
    if (borderWidth > 0) {
      styles.borderWidth = `${borderWidth}px`;
      styles.borderStyle = borderStyle;
      styles.borderColor = borderColor || undefined;
    }
    if (bgType === 'color' && backgroundColor) {
      styles.backgroundColor = backgroundColor;
    } else if (bgType === 'gradient' && bgGradient) {
      styles.background = bgGradient;
    } else if (bgType === 'image' && backgroundImage) {
      styles.backgroundImage = `url(${backgroundImage})`;
      styles.backgroundPosition = backgroundPosition;
      styles.backgroundSize = backgroundSize;
      styles.backgroundRepeat = backgroundRepeat;
      styles.backgroundAttachment = backgroundAttachment;
    }
    if (boxShadow) {
      styles.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`;
    }
    return styles;
  };
  const getEditorContentStyles = () => {
    const styles = {
      width: '100%',
      position: 'relative',
      zIndex: 2
    };
    return styles;
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `gk-container ${!hasLayoutSelected ? 'gk-container-setup' : `gk-container--layout-${layoutType} ${isSticky ? 'gk-container--sticky' : ''} ${!visibilityDesktop ? 'gk-hidden-desktop' : ''} ${!visibilityTablet ? 'gk-hidden-tablet' : ''} ${!visibilityMobile ? 'gk-hidden-mobile' : ''}`} ${customClasses || ''} gk-container-editor-${clientId}`,
    style: hasLayoutSelected ? getEditorContainerStyles() : {}
  });
  const renderStructurePicker = (onSelect = null) => {
    const structures = [{
      name: '1-col',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1 Column', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-col',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      })
    }, {
      name: '2-col',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2 Columns (50/50)', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-1',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }))
    }, {
      name: '3-col',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3 Columns', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-1-1',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }))
    }, {
      name: '4-col',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4 Columns', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-1-1-1',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col"
      }))
    }, {
      name: '2-row',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2 Rows', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-row-2',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__row"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__row"
      }))
    }, {
      name: 'grid-2x2',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2×2 Grid', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-grid-2x2',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }))
    }, {
      name: 'grid-3x2',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3×2 Grid', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-grid-3x2',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__cell"
      }))
    }, {
      name: 'sidebar-left',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sidebar Left (30/70)', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-2',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          flex: 3
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          flex: 7
        }
      }))
    }, {
      name: 'sidebar-right',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sidebar Right (70/30)', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-2',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          flex: 7
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          flex: 3
        }
      }))
    }, {
      name: 'custom-grid',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Grid', 'zentro-blocks'),
      iconClass: 'gk-structure-icon structure-1-1-1',
      children: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          background: '#ebebeb',
          borderStyle: 'dashed'
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          background: '#ebebeb',
          borderStyle: 'dashed'
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gk-structure-icon__col",
        style: {
          background: '#ebebeb',
          borderStyle: 'dashed'
        }
      }))
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, structures.map(struct => {
      const isActive = selectedStructure === struct.name;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        key: struct.name,
        className: `gk-container-setup__option ${isActive ? 'is-active' : ''}`,
        onClick: () => {
          selectStructure(struct.name);
          if (onSelect) {
            onSelect();
          }
        },
        title: struct.title
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: struct.iconClass
      }, struct.children));
    }));
  };
  if (!hasLayoutSelected) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-container-setup__inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "gk-container-setup__title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select your structure', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-container-setup__grid"
    }, renderStructurePicker()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-container-setup__extra"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => selectStructure('blank')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blank Container', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => selectStructure('flex')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flex Container', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => selectStructure('grid')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Container', 'zentro-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-container-setup__footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "gk-container-setup__skip",
      onClick: () => {
        setAttributes({
          hasLayoutSelected: true,
          layoutType: 'block'
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skip', 'zentro-blocks')))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
      icon: "layout",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Structure', 'zentro-blocks'),
      onClick: onToggle,
      "aria-expanded": isOpen,
      isPressed: isOpen
    }),
    renderContent: ({
      onClose
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-toolbar-layout-picker",
      style: {
        padding: '16px',
        width: '280px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: '600',
        color: '#1e293b'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Structure', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-container-setup__grid"
    }, renderStructurePicker(onClose)))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Presets', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-sidebar-layout-picker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-container-setup__grid"
  }, renderStructurePicker()))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsive Views', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: activeDevice === 'desktop',
    onClick: () => setActiveDevice('desktop')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: activeDevice === 'tablet',
    onClick: () => setActiveDevice('tablet')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: activeDevice === 'mobile',
    onClick: () => setActiveDevice('mobile')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile', 'zentro-blocks'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Settings', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Type', 'zentro-blocks'),
    value: layoutType,
    options: [{
      label: 'Block (Standard)',
      value: 'block'
    }, {
      label: 'Flexbox',
      value: 'flex'
    }, {
      label: 'CSS Grid',
      value: 'grid'
    }],
    onChange: val => setAttributes({
      layoutType: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Width', 'zentro-blocks'),
    value: contentWidth,
    options: [{
      label: 'Boxed (1200px)',
      value: 'boxed'
    }, {
      label: 'Full Width (100%)',
      value: 'full'
    }, {
      label: 'Wide Width',
      value: 'wide'
    }, {
      label: 'Custom Width',
      value: 'custom'
    }],
    onChange: val => setAttributes({
      contentWidth: val
    })
  }), contentWidth === 'custom' && renderResponsiveText((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Max Width', 'zentro-blocks'), 'maxWidth', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('E.g., 100%, 800px, 60rem', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height Type', 'zentro-blocks'),
    value: heightType,
    options: [{
      label: 'Auto',
      value: 'auto'
    }, {
      label: 'Min Height',
      value: 'min'
    }, {
      label: 'Fit Screen (100vh)',
      value: 'fit'
    }, {
      label: 'Custom Height',
      value: 'custom'
    }],
    onChange: val => setAttributes({
      heightType: val
    })
  }), (heightType === 'custom' || heightType === 'min') && renderResponsiveText((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height Value', 'zentro-blocks'), 'height', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('E.g., 400px, 50vh, 30rem', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overflow', 'zentro-blocks'),
    value: overflow,
    options: [{
      label: 'Visible',
      value: 'visible'
    }, {
      label: 'Hidden',
      value: 'hidden'
    }, {
      label: 'Auto',
      value: 'auto'
    }],
    onChange: val => setAttributes({
      overflow: val
    })
  })), layoutType === 'flex' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flexbox Controls', 'zentro-blocks'),
    initialOpen: false
  }, renderResponsiveSelect((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'zentro-blocks'), 'flexDirection', [{
    label: 'Row (Horizontal)',
    value: 'row'
  }, {
    label: 'Column (Vertical)',
    value: 'column'
  }, {
    label: 'Row Reverse',
    value: 'row-reverse'
  }, {
    label: 'Column Reverse',
    value: 'column-reverse'
  }]), renderResponsiveSelect((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Justify Content', 'zentro-blocks'), 'justifyContent', [{
    label: 'Start',
    value: 'flex-start'
  }, {
    label: 'Center',
    value: 'center'
  }, {
    label: 'End',
    value: 'flex-end'
  }, {
    label: 'Space Between',
    value: 'space-between'
  }, {
    label: 'Space Around',
    value: 'space-around'
  }, {
    label: 'Space Evenly',
    value: 'space-evenly'
  }]), renderResponsiveSelect((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Items', 'zentro-blocks'), 'alignItems', [{
    label: 'Start',
    value: 'flex-start'
  }, {
    label: 'Center',
    value: 'center'
  }, {
    label: 'End',
    value: 'flex-end'
  }, {
    label: 'Stretch',
    value: 'stretch'
  }]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Wrap', 'zentro-blocks'),
    value: flexWrap,
    options: [{
      label: 'Wrap',
      value: 'wrap'
    }, {
      label: 'No Wrap',
      value: 'nowrap'
    }],
    onChange: val => setAttributes({
      flexWrap: val
    })
  }), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gap (px)', 'zentro-blocks'), 'gap', 0, 100)), layoutType === 'grid' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Controls', 'zentro-blocks'),
    initialOpen: false
  }, renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Columns (1-12)', 'zentro-blocks'), 'gridColumns', 1, 12), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Rows (1-12)', 'zentro-blocks'), 'gridRows', 1, 12), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Row Gap (px)', 'zentro-blocks'), 'rowGap', 0, 100), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Gap (px)', 'zentro-blocks'), 'columnGap', 0, 100), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Fit Columns', 'zentro-blocks'),
    checked: gridAutoFit,
    onChange: val => setAttributes({
      gridAutoFit: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Fill Columns', 'zentro-blocks'),
    checked: gridAutoFill,
    onChange: val => setAttributes({
      gridAutoFill: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grid Template Areas (Advanced)', 'zentro-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('E.g., "header header" "sidebar content"', 'zentro-blocks'),
    value: gridTemplateAreas,
    onChange: val => setAttributes({
      gridTemplateAreas: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background System', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Type', 'zentro-blocks'),
    value: bgType,
    options: [{
      label: 'Color',
      value: 'color'
    }, {
      label: 'Gradient',
      value: 'gradient'
    }, {
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video (External Link)',
      value: 'video'
    }],
    onChange: val => setAttributes({
      bgType: val
    })
  }), bgType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CSS Gradient Code', 'zentro-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('E.g., linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 'zentro-blocks'),
    value: bgGradient,
    onChange: val => setAttributes({
      bgGradient: val
    })
  }), bgType === 'image' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Image URL', 'zentro-blocks'),
    value: backgroundImage,
    onChange: val => setAttributes({
      backgroundImage: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Size', 'zentro-blocks'),
    value: backgroundSize,
    options: [{
      label: 'Cover',
      value: 'cover'
    }, {
      label: 'Contain',
      value: 'contain'
    }, {
      label: 'Auto',
      value: 'auto'
    }],
    onChange: val => setAttributes({
      backgroundSize: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Position', 'zentro-blocks'),
    value: backgroundPosition,
    options: [{
      label: 'Center Center',
      value: 'center center'
    }, {
      label: 'Top Center',
      value: 'top center'
    }, {
      label: 'Bottom Center',
      value: 'bottom center'
    }, {
      label: 'Left Center',
      value: 'left center'
    }, {
      label: 'Right Center',
      value: 'right center'
    }],
    onChange: val => setAttributes({
      backgroundPosition: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Repeat', 'zentro-blocks'),
    value: backgroundRepeat,
    options: [{
      label: 'No Repeat',
      value: 'no-repeat'
    }, {
      label: 'Repeat',
      value: 'repeat'
    }, {
      label: 'Repeat X',
      value: 'repeat-x'
    }, {
      label: 'Repeat Y',
      value: 'repeat-y'
    }],
    onChange: val => setAttributes({
      backgroundRepeat: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Attachment', 'zentro-blocks'),
    value: backgroundAttachment,
    options: [{
      label: 'Scroll',
      value: 'scroll'
    }, {
      label: 'Fixed (Parallax effect)',
      value: 'fixed'
    }],
    onChange: val => setAttributes({
      backgroundAttachment: val
    })
  })), bgType === 'video' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Video File URL (mp4)', 'zentro-blocks'),
    value: bgVideo,
    onChange: val => setAttributes({
      bgVideo: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      margin: '15px 0 5px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Overlay', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Type', 'zentro-blocks'),
    value: overlayType,
    options: [{
      label: 'Color',
      value: 'color'
    }, {
      label: 'Gradient',
      value: 'gradient'
    }],
    onChange: val => setAttributes({
      overlayType: val
    })
  }), overlayType === 'color' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color (hex/rgb)', 'zentro-blocks'),
    value: overlayColor,
    onChange: val => setAttributes({
      overlayColor: val
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Gradient CSS', 'zentro-blocks'),
    value: overlayGradient,
    onChange: val => setAttributes({
      overlayGradient: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Opacity (%)', 'zentro-blocks'),
    value: overlayOpacity,
    onChange: val => setAttributes({
      overlayOpacity: val
    }),
    min: 0,
    max: 100
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing Controls', 'zentro-blocks'),
    initialOpen: false
  }, renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Top (px)', 'zentro-blocks'), 'paddingTop', 0, 200), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Bottom (px)', 'zentro-blocks'), 'paddingBottom', 0, 200), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Left (px)', 'zentro-blocks'), 'paddingLeft', 0, 150), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Right (px)', 'zentro-blocks'), 'paddingRight', 0, 150), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Top (px)', 'zentro-blocks'), 'marginTop', -100, 200), renderResponsiveRange((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin Bottom (px)', 'zentro-blocks'), 'marginBottom', -100, 200)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border & Shadow', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Individual Corner Radius', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left (px)', 'zentro-blocks'),
    value: borderRadiusTopLeft,
    onChange: val => setAttributes({
      borderRadiusTopLeft: val
    }),
    min: 0,
    max: 150
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right (px)', 'zentro-blocks'),
    value: borderRadiusTopRight,
    onChange: val => setAttributes({
      borderRadiusTopRight: val
    }),
    min: 0,
    max: 150
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right (px)', 'zentro-blocks'),
    value: borderRadiusBottomRight,
    onChange: val => setAttributes({
      borderRadiusBottomRight: val
    }),
    min: 0,
    max: 150
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left (px)', 'zentro-blocks'),
    value: borderRadiusBottomLeft,
    onChange: val => setAttributes({
      borderRadiusBottomLeft: val
    }),
    min: 0,
    max: 150
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Width (px)', 'zentro-blocks'),
    value: borderWidth,
    onChange: val => setAttributes({
      borderWidth: val
    }),
    min: 0,
    max: 20
  }), borderWidth > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Style', 'zentro-blocks'),
    value: borderStyle,
    options: [{
      label: 'Solid',
      value: 'solid'
    }, {
      label: 'Dashed',
      value: 'dashed'
    }, {
      label: 'Dotted',
      value: 'dotted'
    }, {
      label: 'Double',
      value: 'double'
    }],
    onChange: val => setAttributes({
      borderStyle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Color', 'zentro-blocks'),
    value: borderColor,
    onChange: val => setAttributes({
      borderColor: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Box Shadow', 'zentro-blocks'),
    checked: boxShadow,
    onChange: val => setAttributes({
      boxShadow: val
    })
  }), boxShadow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Color', 'zentro-blocks'),
    value: shadowColor,
    onChange: val => setAttributes({
      shadowColor: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow X Offset', 'zentro-blocks'),
    value: shadowX,
    onChange: val => setAttributes({
      shadowX: val
    }),
    min: -50,
    max: 50
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Y Offset', 'zentro-blocks'),
    value: shadowY,
    onChange: val => setAttributes({
      shadowY: val
    }),
    min: -50,
    max: 50
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Blur Radius', 'zentro-blocks'),
    value: shadowBlur,
    onChange: val => setAttributes({
      shadowBlur: val
    }),
    min: 0,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Spread', 'zentro-blocks'),
    value: shadowSpread,
    onChange: val => setAttributes({
      shadowSpread: val
    }),
    min: -50,
    max: 50
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Divider', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Shape', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Type', 'zentro-blocks'),
    value: shapeTopType,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Wave',
      value: 'wave'
    }, {
      label: 'Curve',
      value: 'curve'
    }, {
      label: 'Triangle',
      value: 'triangle'
    }, {
      label: 'Tilt',
      value: 'tilt'
    }, {
      label: 'Zigzag',
      value: 'zigzag'
    }],
    onChange: val => setAttributes({
      shapeTopType: val
    })
  }), shapeTopType !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Color', 'zentro-blocks'),
    value: shapeTopColor,
    onChange: val => setAttributes({
      shapeTopColor: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Height (px)', 'zentro-blocks'),
    value: shapeTopHeight,
    onChange: val => setAttributes({
      shapeTopHeight: val
    }),
    min: 20,
    max: 300
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Width (%)', 'zentro-blocks'),
    value: shapeTopWidth,
    onChange: val => setAttributes({
      shapeTopWidth: val
    }),
    min: 50,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Shape Horizontally', 'zentro-blocks'),
    checked: shapeTopFlip,
    onChange: val => setAttributes({
      shapeTopFlip: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Shape', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Type', 'zentro-blocks'),
    value: shapeBottomType,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Wave',
      value: 'wave'
    }, {
      label: 'Curve',
      value: 'curve'
    }, {
      label: 'Triangle',
      value: 'triangle'
    }, {
      label: 'Tilt',
      value: 'tilt'
    }, {
      label: 'Zigzag',
      value: 'zigzag'
    }],
    onChange: val => setAttributes({
      shapeBottomType: val
    })
  }), shapeBottomType !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Color', 'zentro-blocks'),
    value: shapeBottomColor,
    onChange: val => setAttributes({
      shapeBottomColor: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Height (px)', 'zentro-blocks'),
    value: shapeBottomHeight,
    onChange: val => setAttributes({
      shapeBottomHeight: val
    }),
    min: 20,
    max: 300
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Width (%)', 'zentro-blocks'),
    value: shapeBottomWidth,
    onChange: val => setAttributes({
      shapeBottomWidth: val
    }),
    min: 50,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Shape Horizontally', 'zentro-blocks'),
    checked: shapeBottomFlip,
    onChange: val => setAttributes({
      shapeBottomFlip: val
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation System', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Entrance Animation', 'zentro-blocks'),
    value: entranceAnimation,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Fade In',
      value: 'fade'
    }, {
      label: 'Slide Up',
      value: 'slide'
    }, {
      label: 'Zoom In',
      value: 'zoom'
    }],
    onChange: val => setAttributes({
      entranceAnimation: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Scroll Animation', 'zentro-blocks'),
    value: scrollAnimation,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Fade In on Scroll',
      value: 'fade-in'
    }, {
      label: 'Scale on Scroll',
      value: 'scale'
    }, {
      label: 'Parallax Background',
      value: 'parallax'
    }],
    onChange: val => setAttributes({
      scrollAnimation: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover Animation', 'zentro-blocks'),
    value: hoverAnimation,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Grow',
      value: 'grow'
    }, {
      label: 'Float',
      value: 'float'
    }, {
      label: 'Rotate',
      value: 'rotate'
    }],
    onChange: val => setAttributes({
      hoverAnimation: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility Controls', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show on Desktop', 'zentro-blocks'),
    checked: visibilityDesktop,
    onChange: val => setAttributes({
      visibilityDesktop: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show on Tablet', 'zentro-blocks'),
    checked: visibilityTablet,
    onChange: val => setAttributes({
      visibilityTablet: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show on Mobile', 'zentro-blocks'),
    checked: visibilityMobile,
    onChange: val => setAttributes({
      visibilityMobile: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('User Role Visibility', 'zentro-blocks'),
    value: visibilityRole,
    options: [{
      label: 'All Users',
      value: 'all'
    }, {
      label: 'Logged Out (Guests Only)',
      value: 'guest'
    }, {
      label: 'Logged In Users Only',
      value: 'logged-in'
    }],
    onChange: val => setAttributes({
      visibilityRole: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Features', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Link URL', 'zentro-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Makes the entire container clickable.', 'zentro-blocks'),
    value: containerLink,
    onChange: val => setAttributes({
      containerLink: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sticky Container (Top)', 'zentro-blocks'),
    checked: isSticky,
    onChange: val => setAttributes({
      isSticky: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Z Index', 'zentro-blocks'),
    value: zIndex,
    onChange: val => setAttributes({
      zIndex: val
    }),
    min: -10,
    max: 1000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom CSS', 'zentro-blocks'),
    value: customCss,
    onChange: val => setAttributes({
      customCss: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML Anchor (ID)', 'zentro-blocks'),
    value: htmlId,
    onChange: val => setAttributes({
      htmlId: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Additional CSS Classes', 'zentro-blocks'),
    value: customClasses,
    onChange: val => setAttributes({
      customClasses: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings', 'zentro-blocks'),
    colorSettings: [{
      value: backgroundColor,
      onChange: val => setAttributes({
        backgroundColor: val
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'zentro-blocks')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: htmlId || undefined
  }, shapeTopType !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-shape-divider gk-shape-divider--top ${shapeTopFlip ? 'gk-shape-divider--flip' : ''}`,
    style: {
      height: `${shapeTopHeight}px`,
      fill: shapeTopColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 1200 120",
    preserveAspectRatio: "none",
    style: {
      width: `${shapeTopWidth}%`
    }
  }, shapeTopType === 'curve' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
  }), shapeTopType === 'wave' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1200,90 1200,90 L1200,120 L0,120 Z"
  }), shapeTopType === 'triangle' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,0 L600,100 L1200,0 L1200,120 L0,120 Z"
  }), shapeTopType === 'tilt' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,0 L1200,100 L1200,120 L0,120 Z"
  }), shapeTopType === 'zigzag' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z"
  }))), bgType === 'image' && (overlayColor || overlayGradient) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-container-overlay",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: overlayType === 'color' ? overlayColor : overlayGradient,
      opacity: overlayOpacity / 100,
      zIndex: 1,
      pointerEvents: 'none'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.gk-container-editor-${clientId} > .gk-container-content > .block-editor-inner-blocks > .block-editor-block-list__layout {
						display: ${layoutType === 'flex' || layoutType === 'grid' ? layoutType : 'block'} !important;
						${layoutType === 'flex' ? `
							flex-direction: ${getResponsiveVal('flexDirection', 'flexDirectionTablet', 'flexDirectionMobile')} !important;
							justify-content: ${getResponsiveVal('justifyContent', 'justifyContentTablet', 'justifyContentMobile')} !important;
							align-items: ${getResponsiveVal('alignItems', 'alignItemsTablet', 'alignItemsMobile')} !important;
							flex-wrap: ${flexWrap} !important;
							gap: ${getResponsiveVal('gap', 'gapTablet', 'gapMobile')}px !important;
						` : ''}
						${layoutType === 'grid' ? `
							grid-template-columns: ${gridTemplateAreas ? 'none' : getResponsiveVal('gridTemplateColumns', 'gridTemplateColumnsTablet', 'gridTemplateColumnsMobile') || `repeat(${getResponsiveVal('gridColumns', 'gridColumnsTablet', 'gridColumnsMobile')}, 1fr)`} !important;
							grid-template-rows: ${gridTemplateAreas ? 'none' : `repeat(${getResponsiveVal('gridRows', 'gridRowsTablet', 'gridRowsMobile')}, auto)`} !important;
							${gridTemplateAreas ? `grid-template-areas: ${gridTemplateAreas} !important;` : ''}
							row-gap: ${getResponsiveVal('rowGap', 'rowGapTablet', 'rowGapMobile')}px !important;
							column-gap: ${getResponsiveVal('columnGap', 'columnGapTablet', 'columnGapMobile')}px !important;
						` : ''}
					}
				`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-container-content",
    style: getEditorContentStyles()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null)), shapeBottomType !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-shape-divider gk-shape-divider--bottom ${shapeBottomFlip ? 'gk-shape-divider--flip' : ''}`,
    style: {
      height: `${shapeBottomHeight}px`,
      fill: shapeBottomColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 1200 120",
    preserveAspectRatio: "none",
    style: {
      width: `${shapeBottomWidth}%`
    }
  }, shapeBottomType === 'curve' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z"
  }), shapeBottomType === 'wave' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60 C1150,10 1200,30 1200,30 L1200,0 L0,0 Z"
  }), shapeBottomType === 'triangle' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,120 L600,20 L1200,120 L1200,0 L0,0 Z"
  }), shapeBottomType === 'tilt' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,120 L1200,20 L1200,0 L0,0 Z"
  }), shapeBottomType === 'zigzag' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,120 L100,60 L200,120 L300,60 L400,120 L500,60 L600,120 L700,60 L800,120 L900,60 L1000,120 L1100,60 L1200,120 L1200,0 L0,0 Z"
  })))));
}
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__.name, {
  edit: Edit,
  save: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)
});

/***/ },

/***/ "./src/container-block/editor.scss"
/*!*****************************************!*\
  !*** ./src/container-block/editor.scss ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/container-block/style.scss"
/*!****************************************!*\
  !*** ./src/container-block/style.scss ***!
  \****************************************/
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

/***/ "./src/container-block/block.json"
/*!****************************************!*\
  !*** ./src/container-block/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"zentro-blocks/container-block","version":"1.0.0","title":"Container","category":"zentro-blocks","icon":"editor-table","description":"Flexible section wrapper with grid/flex layouts, custom background patterns, overlays, and spacing controls.","keywords":["container","section","columns","layout","grid"],"textdomain":"zentro-blocks","attributes":{"hasLayoutSelected":{"type":"boolean","default":false},"selectedStructure":{"type":"string","default":""},"gridTemplateColumns":{"type":"string","default":""},"gridTemplateColumnsTablet":{"type":"string","default":""},"gridTemplateColumnsMobile":{"type":"string","default":""},"layoutType":{"type":"string","default":"block"},"contentWidth":{"type":"string","default":"boxed"},"maxWidth":{"type":"string","default":"1200px"},"maxWidthTablet":{"type":"string","default":"960px"},"maxWidthMobile":{"type":"string","default":"100%"},"heightType":{"type":"string","default":"auto"},"height":{"type":"string","default":"auto"},"heightTablet":{"type":"string","default":"auto"},"heightMobile":{"type":"string","default":"auto"},"overflow":{"type":"string","default":"visible"},"flexDirection":{"type":"string","default":"row"},"flexDirectionTablet":{"type":"string","default":"row"},"flexDirectionMobile":{"type":"string","default":"column"},"justifyContent":{"type":"string","default":"flex-start"},"justifyContentTablet":{"type":"string","default":"flex-start"},"justifyContentMobile":{"type":"string","default":"flex-start"},"alignItems":{"type":"string","default":"stretch"},"alignItemsTablet":{"type":"string","default":"stretch"},"alignItemsMobile":{"type":"string","default":"stretch"},"flexWrap":{"type":"string","default":"nowrap"},"gridColumns":{"type":"number","default":3},"gridColumnsTablet":{"type":"number","default":2},"gridColumnsMobile":{"type":"number","default":1},"gridRows":{"type":"number","default":1},"gridRowsTablet":{"type":"number","default":1},"gridRowsMobile":{"type":"number","default":1},"gap":{"type":"number","default":20},"gapTablet":{"type":"number","default":15},"gapMobile":{"type":"number","default":10},"rowGap":{"type":"number","default":20},"rowGapTablet":{"type":"number","default":15},"rowGapMobile":{"type":"number","default":10},"columnGap":{"type":"number","default":20},"columnGapTablet":{"type":"number","default":15},"columnGapMobile":{"type":"number","default":10},"gridAutoFit":{"type":"boolean","default":false},"gridAutoFill":{"type":"boolean","default":false},"gridTemplateAreas":{"type":"string","default":""},"paddingTop":{"type":"number","default":40},"paddingTopTablet":{"type":"number","default":30},"paddingTopMobile":{"type":"number","default":20},"paddingBottom":{"type":"number","default":40},"paddingBottomTablet":{"type":"number","default":30},"paddingBottomMobile":{"type":"number","default":20},"paddingLeft":{"type":"number","default":20},"paddingLeftTablet":{"type":"number","default":15},"paddingLeftMobile":{"type":"number","default":10},"paddingRight":{"type":"number","default":20},"paddingRightTablet":{"type":"number","default":15},"paddingRightMobile":{"type":"number","default":10},"marginTop":{"type":"number","default":0},"marginTopTablet":{"type":"number","default":0},"marginTopMobile":{"type":"number","default":0},"marginBottom":{"type":"number","default":0},"marginBottomTablet":{"type":"number","default":0},"marginBottomMobile":{"type":"number","default":0},"backgroundColor":{"type":"string","default":""},"bgType":{"type":"string","default":"color"},"bgGradient":{"type":"string","default":""},"backgroundImage":{"type":"string","default":""},"bgVideo":{"type":"string","default":""},"bgSlideshow":{"type":"array","default":[]},"backgroundPosition":{"type":"string","default":"center center"},"backgroundSize":{"type":"string","default":"cover"},"backgroundRepeat":{"type":"string","default":"no-repeat"},"backgroundAttachment":{"type":"string","default":"scroll"},"overlayColor":{"type":"string","default":""},"overlayGradient":{"type":"string","default":""},"overlayType":{"type":"string","default":"color"},"overlayOpacity":{"type":"number","default":50},"borderRadiusTopLeft":{"type":"number","default":0},"borderRadiusTopRight":{"type":"number","default":0},"borderRadiusBottomLeft":{"type":"number","default":0},"borderRadiusBottomRight":{"type":"number","default":0},"borderWidth":{"type":"number","default":0},"borderStyle":{"type":"string","default":"solid"},"borderColor":{"type":"string","default":""},"boxShadow":{"type":"boolean","default":false},"shadowColor":{"type":"string","default":"rgba(0,0,0,0.1)"},"shadowX":{"type":"number","default":0},"shadowY":{"type":"number","default":10},"shadowBlur":{"type":"number","default":30},"shadowSpread":{"type":"number","default":0},"shapeTopType":{"type":"string","default":"none"},"shapeTopColor":{"type":"string","default":"#ffffff"},"shapeTopHeight":{"type":"number","default":80},"shapeTopWidth":{"type":"number","default":100},"shapeTopFlip":{"type":"boolean","default":false},"shapeBottomType":{"type":"string","default":"none"},"shapeBottomColor":{"type":"string","default":"#ffffff"},"shapeBottomHeight":{"type":"number","default":80},"shapeBottomWidth":{"type":"number","default":100},"shapeBottomFlip":{"type":"boolean","default":false},"entranceAnimation":{"type":"string","default":"none"},"scrollAnimation":{"type":"string","default":"none"},"hoverAnimation":{"type":"string","default":"none"},"visibilityDesktop":{"type":"boolean","default":true},"visibilityTablet":{"type":"boolean","default":true},"visibilityMobile":{"type":"boolean","default":true},"visibilityRole":{"type":"string","default":"all"},"containerLink":{"type":"string","default":""},"isSticky":{"type":"boolean","default":false},"zIndex":{"type":"number","default":1},"customCss":{"type":"string","default":""},"htmlId":{"type":"string","default":""},"customClasses":{"type":"string","default":""}},"supports":{"html":false,"align":["wide","full"],"color":{"background":true,"text":true}},"render":"file:./render.php","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"container-block/index": 0,
/******/ 			"container-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["container-block/style-index"], () => (__webpack_require__("./src/container-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map