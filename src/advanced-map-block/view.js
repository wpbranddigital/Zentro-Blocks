( function () {
	const loadedScripts = {};
	const loadedStyles = {};

	function loadStylesheet( url ) {
		if ( loadedStyles[ url ] ) {
			return Promise.resolve();
		}
		return new Promise( ( resolve, reject ) => {
			const link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.href = url;
			link.onload = () => {
				loadedStyles[ url ] = true;
				resolve();
			};
			link.onerror = reject;
			document.head.appendChild( link );
		} );
	}

	function loadScript( url ) {
		if ( loadedScripts[ url ] ) {
			return loadedScripts[ url ];
		}
		loadedScripts[ url ] = new Promise( ( resolve, reject ) => {
			const script = document.createElement( 'script' );
			script.src = url;
			script.async = true;
			script.defer = true;
			script.onload = () => resolve();
			script.onerror = reject;
			document.head.appendChild( script );
		} );
		return loadedScripts[ url ];
	}

	// Google Maps Theme Styles
	const MAP_THEMES = {
		silver: [
			{ elementType: 'geometry', stylers: [ { color: '#f5f5f5' } ] },
			{ elementType: 'labels.icon', stylers: [ { visibility: 'off' } ] },
			{
				elementType: 'labels.text.fill',
				stylers: [ { color: '#616161' } ],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [ { color: '#f5f5f5' } ],
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#bdbdbd' } ],
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [ { color: '#eeeeee' } ],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#757575' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [ { color: '#e5e5e5' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#9e9e9e' } ],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [ { color: '#ffffff' } ],
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#757575' } ],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [ { color: '#dadada' } ],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#616161' } ],
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#9e9e9e' } ],
			},
			{
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [ { color: '#e5e5e5' } ],
			},
			{
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [ { color: '#eeeeee' } ],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [ { color: '#c9c9c9' } ],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#9e9e9e' } ],
			},
		],
		retro: [
			{ elementType: 'geometry', stylers: [ { color: '#ebe3cd' } ] },
			{
				elementType: 'labels.text.fill',
				stylers: [ { color: '#523735' } ],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [ { color: '#f5f1e6' } ],
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#c9b2a6' } ],
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#dcd2be' } ],
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#ae9e90' } ],
			},
			{
				featureType: 'landscape.natural',
				elementType: 'geometry',
				stylers: [ { color: '#dfd2ae' } ],
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [ { color: '#dfd2ae' } ],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#93817c' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [ { color: '#e1480c' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#6b9a76' } ],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [ { color: '#f5f1e6' } ],
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [ { color: '#fdfcf8' } ],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [ { color: '#f8c967' } ],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#e9bc62' } ],
			},
			{
				featureType: 'road.highway.controlled_access',
				elementType: 'geometry',
				stylers: [ { color: '#e98d58' } ],
			},
			{
				featureType: 'road.highway.controlled_access',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#db8555' } ],
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#806b63' } ],
			},
			{
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [ { color: '#dfd2ae' } ],
			},
			{
				featureType: 'transit.line',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#8f7d77' } ],
			},
			{
				featureType: 'transit.line',
				elementType: 'labels.text.stroke',
				stylers: [ { color: '#ebe3cd' } ],
			},
			{
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [ { color: '#dfd2ae' } ],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [ { color: '#b9d3c2' } ],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#92998d' } ],
			},
		],
		dark: [
			{ elementType: 'geometry', stylers: [ { color: '#212121' } ] },
			{ elementType: 'labels.icon', stylers: [ { visibility: 'off' } ] },
			{
				elementType: 'labels.text.fill',
				stylers: [ { color: '#757575' } ],
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [ { color: '#212121' } ],
			},
			{
				featureType: 'administrative',
				elementType: 'geometry',
				stylers: [ { color: '#757575' } ],
			},
			{
				featureType: 'administrative.country',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#9e9e9e' } ],
			},
			{
				featureType: 'administrative.land_parcel',
				stylers: [ { visibility: 'off' } ],
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#bdbdbd' } ],
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [ { color: '#181818' } ],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#757575' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [ { color: '#181818' } ],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#616161' } ],
			},
			{
				featureType: 'road',
				elementType: 'geometry.fill',
				stylers: [ { color: '#2c2c2c' } ],
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#8a8a8a' } ],
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [ { color: '#373737' } ],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [ { color: '#3c3c3c' } ],
			},
			{
				featureType: 'road.highway.controlled_access',
				elementType: 'geometry',
				stylers: [ { color: '#4e4e4e' } ],
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#616161' } ],
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [ { color: '#303030' } ],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [ { color: '#000000' } ],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [ { color: '#3d3d3d' } ],
			},
		],
	};

	function initMap( container ) {
		const provider = container.dataset.provider || 'openstreetmap';
		const placeholder = container.querySelector( '.gk-map-placeholder' );

		const hidePlaceholder = () => {
			if ( placeholder ) {
				placeholder.classList.add( 'is-loaded' );
			}
		};

		if ( provider === 'googlemaps' ) {
			const apiKey = container.dataset.apiKey || '';
			if ( ! apiKey ) {
				if ( placeholder ) {
					const notice = placeholder.querySelector(
						'.gk-map-placeholder-text'
					);
					if ( notice ) {
						notice.textContent =
							'Error: Google Maps API Key is missing.';
					}
				}
				return;
			}

			const lat = parseFloat( container.dataset.lat || '40.7128' );
			const lng = parseFloat( container.dataset.lng || '-74.0060' );
			const zoom = parseInt( container.dataset.zoom || '13' );
			const title = container.dataset.markerTitle || '';
			const content = container.dataset.markerContent || '';
			const showTooltip = container.dataset.showTooltip === 'true';
			const theme = container.dataset.theme || 'standard';
			const zoomControl = container.dataset.zoomControl === 'true';
			const markerIcon = container.dataset.markerIcon || '';
			const mapEl = container.querySelector(
				'.gk-advanced-map-instance'
			);

			// Load Google Maps API SDK
			const sdkUrl = `https://maps.googleapis.com/maps/api/js?key=${ apiKey }`;
			loadScript( sdkUrl )
				.then( () => {
					// Initialize Google Map
					const mapOptions = {
						center: { lat, lng },
						zoom,
						zoomControl,
						mapTypeControl: false,
						scaleControl: true,
						streetViewControl: false,
						rotateControl: false,
						fullscreenControl: false,
					};

					if ( theme !== 'standard' && MAP_THEMES[ theme ] ) {
						mapOptions.styles = MAP_THEMES[ theme ];
					}

					/* global google */
					const map = new google.maps.Map( mapEl, mapOptions );

					// Add Resize Observer to handle container resizing
					if ( typeof window.ResizeObserver !== 'undefined' ) {
						const resizeObserver = new window.ResizeObserver(
							() => {
								google.maps.event.trigger( map, 'resize' );
								map.setCenter( { lat, lng } );
							}
						);
						resizeObserver.observe( mapEl );
					}

					const markerOptions = {
						position: { lat, lng },
						map,
						title,
					};

					if ( markerIcon ) {
						markerOptions.icon = {
							url: markerIcon,
							scaledSize: new google.maps.Size( 32, 32 ),
						};
					}

					const marker = new google.maps.Marker( markerOptions );

					if ( showTooltip && ( title || content ) ) {
						const infoContent = `
							<div class="gk-gmap-info-window">
								${ title ? `<h4>${ title }</h4>` : '' }
								${ content ? `<p>${ content }</p>` : '' }
							</div>
						`;
						const infoWindow = new google.maps.InfoWindow( {
							content: infoContent,
						} );

						marker.addListener( 'click', () => {
							infoWindow.open( map, marker );
						} );

						// Show by default
						infoWindow.open( map, marker );
					}

					// Google Maps fires an event once fully idle (rendered)
					google.maps.event.addListenerOnce( map, 'idle', () => {
						hidePlaceholder();
					} );
				} )
				.catch( ( err ) => {
					// eslint-disable-next-line no-console
					console.error( 'Google Maps failed to load:', err );
				} );
		} else {
			const lat = parseFloat( container.dataset.lat || '40.7128' );
			const lng = parseFloat( container.dataset.lng || '-74.0060' );
			const zoom = parseInt( container.dataset.zoom || '13' );
			const title = container.dataset.markerTitle || '';
			const content = container.dataset.markerContent || '';
			const showTooltip = container.dataset.showTooltip === 'true';
			const theme = container.dataset.theme || 'standard';
			const zoomControl = container.dataset.zoomControl === 'true';
			const markerIcon = container.dataset.markerIcon || '';
			const mapEl = container.querySelector(
				'.gk-advanced-map-instance'
			);

			// OpenStreetMap (Leaflet)
			const leafletCss =
				'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			const leafletJs = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

			Promise.all( [
				loadStylesheet( leafletCss ),
				loadScript( leafletJs ),
			] )
				.then( () => {
					/* global L */
					// Create Map
					const map = L.map( mapEl, {
						center: [ lat, lng ],
						zoom,
						zoomControl,
						attributionControl: false,
					} );

					// Add Resize Observer to handle container resizing
					if ( typeof window.ResizeObserver !== 'undefined' ) {
						const resizeObserver = new window.ResizeObserver(
							() => {
								map.invalidateSize();
							}
						);
						resizeObserver.observe( mapEl );
					}

					// Add standard OpenStreetMap tiles
					let tileUrl =
						'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

					// Apply dark mode tiles if dark theme selected
					if ( theme === 'dark' ) {
						tileUrl =
							'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
					} else if ( theme === 'silver' ) {
						tileUrl =
							'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
					} else if ( theme === 'retro' ) {
						tileUrl =
							'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
					}

					L.tileLayer( tileUrl, {
						maxZoom: 19,
					} ).addTo( map );

					// Marker customization
					let marker;
					if ( markerIcon ) {
						const customIcon = L.icon( {
							iconUrl: markerIcon,
							iconSize: [ 32, 32 ],
							iconAnchor: [ 16, 32 ],
							popupAnchor: [ 0, -32 ],
						} );
						marker = L.marker( [ lat, lng ], {
							icon: customIcon,
						} ).addTo( map );
					} else {
						marker = L.marker( [ lat, lng ] ).addTo( map );
					}

					if ( showTooltip && ( title || content ) ) {
						const popupContent = `
							<div>
								${ title ? `<h4>${ title }</h4>` : '' }
								${ content ? `<p>${ content }</p>` : '' }
							</div>
						`;
						marker.bindPopup( popupContent );

						// Show by default
						marker.openPopup();
					}

					// Leaflet map fully loaded trigger
					map.whenReady( () => {
						hidePlaceholder();
					} );
				} )
				.catch( ( err ) => {
					// eslint-disable-next-line no-console
					console.error( 'Leaflet failed to load:', err );
				} );
		}
	}

	// Setup Intersection Observer for Lazy Loading
	/* global IntersectionObserver */
	const mapObserver = new IntersectionObserver(
		( entries ) => {
			entries.forEach( ( entry ) => {
				if ( entry.isIntersecting ) {
					initMap( entry.target );
					mapObserver.unobserve( entry.target );
				}
			} );
		},
		{
			rootMargin: '100px', // Start loading 100px before viewport
			threshold: 0.01,
		}
	);

	document
		.querySelectorAll( '.gk-advanced-map-container' )
		.forEach( ( container ) => {
			mapObserver.observe( container );
		} );
} )();
