/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/advanced-map-block/index.js"
/*!*****************************************!*\
  !*** ./src/advanced-map-block/index.js ***!
  \*****************************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/advanced-map-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/advanced-map-block/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/advanced-map-block/editor.scss");










// Global cache for script and style loading to prevent duplicates in editor
const loadedScripts = {};
const loadedStyles = {};
function loadStylesheet(url) {
  if (loadedStyles[url]) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = () => {
      loadedStyles[url] = true;
      resolve();
    };
    link.onerror = reject;
    document.head.appendChild(link);
  });
}
function loadScript(url) {
  if (loadedScripts[url]) {
    return loadedScripts[url];
  }
  loadedScripts[url] = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return loadedScripts[url];
}

// Google Maps Theme Styles
const MAP_THEMES = {
  silver: [{
    elementType: 'geometry',
    stylers: [{
      color: '#f5f5f5'
    }]
  }, {
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#616161'
    }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#f5f5f5'
    }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#bdbdbd'
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#eeeeee'
    }]
  }, {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#757575'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#e5e5e5'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#9e9e9e'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: '#ffffff'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#757575'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{
      color: '#dadada'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#616161'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#9e9e9e'
    }]
  }, {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{
      color: '#e5e5e5'
    }]
  }, {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{
      color: '#eeeeee'
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#c9c9c9'
    }]
  }, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#9e9e9e'
    }]
  }],
  retro: [{
    elementType: 'geometry',
    stylers: [{
      color: '#ebe3cd'
    }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#523735'
    }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#f5f1e6'
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#c9b2a6'
    }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#dcd2be'
    }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#ae9e90'
    }]
  }, {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{
      color: '#dfd2ae'
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#dfd2ae'
    }]
  }, {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#93817c'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#e1480c'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#6b9a76'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: '#f5f1e6'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#fdfcf8'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{
      color: '#f8c967'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#e9bc62'
    }]
  }, {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{
      color: '#e98d58'
    }]
  }, {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#db8555'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#806b63'
    }]
  }, {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{
      color: '#dfd2ae'
    }]
  }, {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#8f7d77'
    }]
  }, {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#ebe3cd'
    }]
  }, {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{
      color: '#dfd2ae'
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#b9d3c2'
    }]
  }, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#92998d'
    }]
  }],
  dark: [{
    elementType: 'geometry',
    stylers: [{
      color: '#212121'
    }]
  }, {
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#757575'
    }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#212121'
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{
      color: '#757575'
    }]
  }, {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#9e9e9e'
    }]
  }, {
    featureType: 'administrative.land_parcel',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#bdbdbd'
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#181818'
    }]
  }, {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#757575'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#181818'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#616161'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#2c2c2c'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#8a8a8a'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#373737'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{
      color: '#3c3c3c'
    }]
  }, {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{
      color: '#4e4e4e'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#616161'
    }]
  }, {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{
      color: '#303030'
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }]
  }, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#3d3d3d'
    }]
  }]
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    mapProvider,
    apiKey,
    latitude,
    longitude,
    zoom,
    mapHeight,
    markerTitle,
    markerContent,
    showTooltip,
    mapTheme,
    zoomControl,
    markerIconUrl
  } = attributes;
  const [mapError, setMapError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [isScriptLoaded, setIsScriptLoaded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const mapContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const mapInstanceRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(null); // Holds current Leaflet or Google Maps map object

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: 'gk-advanced-map-editor-wrapper'
  });

  // Clean up map instance
  const destroyMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    if (mapInstanceRef.current) {
      if (mapInstanceRef.current._resizeObserver) {
        mapInstanceRef.current._resizeObserver.disconnect();
      }
      if (mapProvider === 'openstreetmap' && typeof mapInstanceRef.current.remove === 'function') {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          // Ignore leaflet removal errors
        }
      }
      mapInstanceRef.current = null;
    }
    if (mapContainerRef.current) {
      const instanceDiv = mapContainerRef.current.querySelector('.gk-advanced-map-instance');
      if (instanceDiv) {
        instanceDiv.innerHTML = '';
      }
    }
  }, [mapProvider]);

  // Trigger script loading and map rendering inside the Gutenberg Editor
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    let isCancelled = false;
    destroyMap();
    setMapError('');
    const mapEl = mapContainerRef.current ? mapContainerRef.current.querySelector('.gk-advanced-map-instance') : null;
    if (!mapEl) {
      return;
    }
    if (mapProvider === 'googlemaps') {
      if (!apiKey) {
        setMapError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please enter a Google Maps API Key in settings.', 'zentro-blocks'));
        return;
      }
      const sdkUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      setIsScriptLoaded(false);
      loadScript(sdkUrl).then(() => {
        if (isCancelled) {
          return;
        }
        setIsScriptLoaded(true);

        /* global google */
        const mapOptions = {
          center: {
            lat: latitude,
            lng: longitude
          },
          zoom,
          zoomControl,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        };
        if (mapTheme !== 'standard' && MAP_THEMES[mapTheme]) {
          mapOptions.styles = MAP_THEMES[mapTheme];
        }
        const map = new google.maps.Map(mapEl, mapOptions);
        mapInstanceRef.current = map;

        // Add Resize Observer to handle container resizing (e.g. alignment toggle)
        if (typeof window.ResizeObserver !== 'undefined') {
          const resizeObserver = new window.ResizeObserver(() => {
            google.maps.event.trigger(map, 'resize');
            map.setCenter({
              lat: latitude,
              lng: longitude
            });
          });
          resizeObserver.observe(mapEl);
          mapInstanceRef.current._resizeObserver = resizeObserver;
        }
        const markerOptions = {
          position: {
            lat: latitude,
            lng: longitude
          },
          map,
          title: markerTitle
        };
        if (markerIconUrl) {
          markerOptions.icon = {
            url: markerIconUrl,
            scaledSize: new google.maps.Size(32, 32)
          };
        }
        const marker = new google.maps.Marker(markerOptions);
        if (showTooltip && (markerTitle || markerContent)) {
          const infoContent = `
							<div class="gk-gmap-info-window">
								${markerTitle ? `<h4>${markerTitle}</h4>` : ''}
								${markerContent ? `<p>${markerContent}</p>` : ''}
							</div>
						`;
          const infoWindow = new google.maps.InfoWindow({
            content: infoContent
          });
          infoWindow.open(map, marker);
        }
      }).catch(err => {
        if (isCancelled) {
          return;
        }
        setMapError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Failed to load Google Maps SDK. Check console.', 'zentro-blocks'));
        // eslint-disable-next-line no-console
        console.error(err);
      });
    } else {
      // OpenStreetMap
      const leafletCss = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      const leafletJs = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      setIsScriptLoaded(false);
      Promise.all([loadStylesheet(leafletCss), loadScript(leafletJs)]).then(() => {
        if (isCancelled) {
          return;
        }
        setIsScriptLoaded(true);

        /* global L */
        const map = L.map(mapEl, {
          center: [latitude, longitude],
          zoom,
          zoomControl,
          attributionControl: false
        });
        mapInstanceRef.current = map;

        // Add Resize Observer to handle container resizing (e.g. alignment toggle)
        if (typeof window.ResizeObserver !== 'undefined') {
          const resizeObserver = new window.ResizeObserver(() => {
            map.invalidateSize();
          });
          resizeObserver.observe(mapEl);
          mapInstanceRef.current._resizeObserver = resizeObserver;
        }
        let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        if (mapTheme === 'dark') {
          tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
        } else if (mapTheme === 'silver') {
          tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
        } else if (mapTheme === 'retro') {
          tileUrl = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
        }
        L.tileLayer(tileUrl, {
          maxZoom: 19
        }).addTo(map);
        let marker;
        if (markerIconUrl) {
          const customIcon = L.icon({
            iconUrl: markerIconUrl,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });
          marker = L.marker([latitude, longitude], {
            icon: customIcon
          }).addTo(map);
        } else {
          marker = L.marker([latitude, longitude]).addTo(map);
        }
        if (showTooltip && (markerTitle || markerContent)) {
          const popupContent = `
							<div>
								${markerTitle ? `<h4>${markerTitle}</h4>` : ''}
								${markerContent ? `<p>${markerContent}</p>` : ''}
							</div>
						`;
          marker.bindPopup(popupContent).openPopup();
        }
      }).catch(err => {
        if (isCancelled) {
          return;
        }
        setMapError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Failed to load OpenStreetMap assets.', 'zentro-blocks'));
        // eslint-disable-next-line no-console
        console.error(err);
      });
    }
    return () => {
      isCancelled = true;
      destroyMap();
    };
  }, [mapProvider, apiKey, latitude, longitude, zoom, markerTitle, markerContent, showTooltip, mapTheme, zoomControl, markerIconUrl, destroyMap]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Map Settings', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Map Provider', 'zentro-blocks'),
    value: mapProvider,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('OpenStreetMap (Free)', 'zentro-blocks'),
      value: 'openstreetmap'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Google Maps', 'zentro-blocks'),
      value: 'googlemaps'
    }],
    onChange: val => setAttributes({
      mapProvider: val
    })
  }), mapProvider === 'googlemaps' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Google Maps API Key', 'zentro-blocks'),
    value: apiKey,
    onChange: val => setAttributes({
      apiKey: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get an API key from Google Cloud Console.', 'zentro-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Map Height (px)', 'zentro-blocks'),
    value: mapHeight,
    min: 200,
    max: 800,
    onChange: val => setAttributes({
      mapHeight: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location & Zoom', 'zentro-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Latitude', 'zentro-blocks'),
    value: String(latitude),
    onChange: val => setAttributes({
      latitude: parseFloat(val) || 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Longitude', 'zentro-blocks'),
    value: String(longitude),
    onChange: val => setAttributes({
      longitude: parseFloat(val) || 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zoom Level', 'zentro-blocks'),
    value: zoom,
    min: 1,
    max: 20,
    onChange: val => setAttributes({
      zoom: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marker Details', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marker Title', 'zentro-blocks'),
    value: markerTitle,
    onChange: val => setAttributes({
      markerTitle: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marker Description', 'zentro-blocks'),
    value: markerContent,
    onChange: val => setAttributes({
      markerContent: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Tooltip Initially', 'zentro-blocks'),
    checked: showTooltip,
    onChange: val => setAttributes({
      showTooltip: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: media => setAttributes({
      markerIconUrl: media.url
    }),
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '10px'
      }
    }, markerIconUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: markerIconUrl,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Marker Pin', 'zentro-blocks'),
      style: {
        maxHeight: '32px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      isDestructive: true,
      variant: "link",
      onClick: () => setAttributes({
        markerIconUrl: ''
      }),
      style: {
        display: 'block',
        padding: '0'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Custom Marker Pin', 'zentro-blocks'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upload Custom Pin Icon', 'zentro-blocks')))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Map Controls & Themes', 'zentro-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Map Color Theme', 'zentro-blocks'),
    value: mapTheme,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Standard', 'zentro-blocks'),
      value: 'standard'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Silver / Light', 'zentro-blocks'),
      value: 'silver'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Retro', 'zentro-blocks'),
      value: 'retro'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dark Mode', 'zentro-blocks'),
      value: 'dark'
    }],
    onChange: val => setAttributes({
      mapTheme: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Zoom Controls', 'zentro-blocks'),
    checked: zoomControl,
    onChange: val => setAttributes({
      zoomControl: val
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, mapError ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-map-editor-placeholder-notice"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Map Config', 'zentro-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, mapError)) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-advanced-map-block",
    ref: mapContainerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-advanced-map-container",
    style: {
      height: `${mapHeight}px`
    }
  }, !isScriptLoaded && !mapError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-map-placeholder"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-map-placeholder-spinner"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-map-placeholder-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading Map Assets…', 'zentro-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-advanced-map-instance",
    style: {
      width: '100%',
      height: '100%'
    }
  })))));
}
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  edit: Edit,
  save: () => null
});

/***/ },

/***/ "./src/advanced-map-block/editor.scss"
/*!********************************************!*\
  !*** ./src/advanced-map-block/editor.scss ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/advanced-map-block/style.scss"
/*!*******************************************!*\
  !*** ./src/advanced-map-block/style.scss ***!
  \*******************************************/
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

/***/ "./src/advanced-map-block/block.json"
/*!*******************************************!*\
  !*** ./src/advanced-map-block/block.json ***!
  \*******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"zentro-blocks/advanced-map-block","version":"1.0.0","title":"Advanced Map","category":"zentro-blocks","icon":"location-alt","description":"Premium interactive map supporting Google Maps and OpenStreetMap (Leaflet) with customized pins, styles, and viewport lazy-loading.","keywords":["map","google maps","openstreetmap","leaflet","location"],"textdomain":"zentro-blocks","attributes":{"mapProvider":{"type":"string","default":"openstreetmap"},"apiKey":{"type":"string","default":""},"latitude":{"type":"number","default":40.7128},"longitude":{"type":"number","default":-74.006},"zoom":{"type":"number","default":13},"mapHeight":{"type":"number","default":400},"markerTitle":{"type":"string","default":"Zentro HQ"},"markerContent":{"type":"string","default":"123 Creative Studio, New York"},"showTooltip":{"type":"boolean","default":true},"mapTheme":{"type":"string","default":"standard"},"zoomControl":{"type":"boolean","default":true},"markerIconUrl":{"type":"string","default":""}},"supports":{"html":false,"align":["wide","full"]},"render":"file:./render.php","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 			"advanced-map-block/index": 0,
/******/ 			"advanced-map-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["advanced-map-block/style-index"], () => (__webpack_require__("./src/advanced-map-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map