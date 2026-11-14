import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { useState, useEffect, useRef, useCallback } from '@wordpress/element';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

// Global cache for script and style loading to prevent duplicates in editor
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
		{ elementType: 'labels.text.fill', stylers: [ { color: '#616161' } ] },
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
		{ elementType: 'labels.text.fill', stylers: [ { color: '#523735' } ] },
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
		{ elementType: 'labels.text.fill', stylers: [ { color: '#757575' } ] },
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

function Edit( { attributes, setAttributes } ) {
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
		markerIconUrl,
	} = attributes;

	const [ mapError, setMapError ] = useState( '' );
	const [ isScriptLoaded, setIsScriptLoaded ] = useState( false );
	const mapContainerRef = useRef( null );
	const mapInstanceRef = useRef( null ); // Holds current Leaflet or Google Maps map object

	const blockProps = useBlockProps( {
		className: 'gk-advanced-map-editor-wrapper',
	} );

	// Clean up map instance
	const destroyMap = useCallback( () => {
		if ( mapInstanceRef.current ) {
			if ( mapInstanceRef.current._resizeObserver ) {
				mapInstanceRef.current._resizeObserver.disconnect();
			}
			if (
				mapProvider === 'openstreetmap' &&
				typeof mapInstanceRef.current.remove === 'function'
			) {
				try {
					mapInstanceRef.current.remove();
				} catch ( e ) {
					// Ignore leaflet removal errors
				}
			}
			mapInstanceRef.current = null;
		}
		if ( mapContainerRef.current ) {
			const instanceDiv = mapContainerRef.current.querySelector(
				'.gk-advanced-map-instance'
			);
			if ( instanceDiv ) {
				instanceDiv.innerHTML = '';
			}
		}
	}, [ mapProvider ] );

	// Trigger script loading and map rendering inside the Gutenberg Editor
	useEffect( () => {
		let isCancelled = false;
		destroyMap();
		setMapError( '' );

		const mapEl = mapContainerRef.current
			? mapContainerRef.current.querySelector(
					'.gk-advanced-map-instance'
			  )
			: null;
		if ( ! mapEl ) {
			return;
		}

		if ( mapProvider === 'googlemaps' ) {
			if ( ! apiKey ) {
				setMapError(
					__(
						'Please enter a Google Maps API Key in settings.',
						'zentro-blocks'
					)
				);
				return;
			}

			const sdkUrl = `https://maps.googleapis.com/maps/api/js?key=${ apiKey }`;
			setIsScriptLoaded( false );

			loadScript( sdkUrl )
				.then( () => {
					if ( isCancelled ) {
						return;
					}
					setIsScriptLoaded( true );

					/* global google */
					const mapOptions = {
						center: { lat: latitude, lng: longitude },
						zoom,
						zoomControl,
						mapTypeControl: false,
						scaleControl: true,
						streetViewControl: false,
						rotateControl: false,
						fullscreenControl: false,
					};

					if ( mapTheme !== 'standard' && MAP_THEMES[ mapTheme ] ) {
						mapOptions.styles = MAP_THEMES[ mapTheme ];
					}

					const map = new google.maps.Map( mapEl, mapOptions );
					mapInstanceRef.current = map;

					// Add Resize Observer to handle container resizing (e.g. alignment toggle)
					if ( typeof window.ResizeObserver !== 'undefined' ) {
						const resizeObserver = new window.ResizeObserver(
							() => {
								google.maps.event.trigger( map, 'resize' );
								map.setCenter( {
									lat: latitude,
									lng: longitude,
								} );
							}
						);
						resizeObserver.observe( mapEl );
						mapInstanceRef.current._resizeObserver = resizeObserver;
					}

					const markerOptions = {
						position: { lat: latitude, lng: longitude },
						map,
						title: markerTitle,
					};

					if ( markerIconUrl ) {
						markerOptions.icon = {
							url: markerIconUrl,
							scaledSize: new google.maps.Size( 32, 32 ),
						};
					}

					const marker = new google.maps.Marker( markerOptions );

					if ( showTooltip && ( markerTitle || markerContent ) ) {
						const infoContent = `
							<div class="gk-gmap-info-window">
								${ markerTitle ? `<h4>${ markerTitle }</h4>` : '' }
								${ markerContent ? `<p>${ markerContent }</p>` : '' }
							</div>
						`;
						const infoWindow = new google.maps.InfoWindow( {
							content: infoContent,
						} );
						infoWindow.open( map, marker );
					}
				} )
				.catch( ( err ) => {
					if ( isCancelled ) {
						return;
					}
					setMapError(
						__(
							'Failed to load Google Maps SDK. Check console.',
							'zentro-blocks'
						)
					);
					// eslint-disable-next-line no-console
					console.error( err );
				} );
		} else {
			// OpenStreetMap
			const leafletCss =
				'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			const leafletJs = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
			setIsScriptLoaded( false );

			Promise.all( [
				loadStylesheet( leafletCss ),
				loadScript( leafletJs ),
			] )
				.then( () => {
					if ( isCancelled ) {
						return;
					}
					setIsScriptLoaded( true );

					/* global L */
					const map = L.map( mapEl, {
						center: [ latitude, longitude ],
						zoom,
						zoomControl,
						attributionControl: false,
					} );
					mapInstanceRef.current = map;

					// Add Resize Observer to handle container resizing (e.g. alignment toggle)
					if ( typeof window.ResizeObserver !== 'undefined' ) {
						const resizeObserver = new window.ResizeObserver(
							() => {
								map.invalidateSize();
							}
						);
						resizeObserver.observe( mapEl );
						mapInstanceRef.current._resizeObserver = resizeObserver;
					}

					let tileUrl =
						'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
					if ( mapTheme === 'dark' ) {
						tileUrl =
							'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
					} else if ( mapTheme === 'silver' ) {
						tileUrl =
							'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
					} else if ( mapTheme === 'retro' ) {
						tileUrl =
							'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
					}

					L.tileLayer( tileUrl, {
						maxZoom: 19,
					} ).addTo( map );

					let marker;
					if ( markerIconUrl ) {
						const customIcon = L.icon( {
							iconUrl: markerIconUrl,
							iconSize: [ 32, 32 ],
							iconAnchor: [ 16, 32 ],
							popupAnchor: [ 0, -32 ],
						} );
						marker = L.marker( [ latitude, longitude ], {
							icon: customIcon,
						} ).addTo( map );
					} else {
						marker = L.marker( [ latitude, longitude ] ).addTo(
							map
						);
					}

					if ( showTooltip && ( markerTitle || markerContent ) ) {
						const popupContent = `
							<div>
								${ markerTitle ? `<h4>${ markerTitle }</h4>` : '' }
								${ markerContent ? `<p>${ markerContent }</p>` : '' }
							</div>
						`;
						marker.bindPopup( popupContent ).openPopup();
					}
				} )
				.catch( ( err ) => {
					if ( isCancelled ) {
						return;
					}
					setMapError(
						__(
							'Failed to load OpenStreetMap assets.',
							'zentro-blocks'
						)
					);
					// eslint-disable-next-line no-console
					console.error( err );
				} );
		}

		return () => {
			isCancelled = true;
			destroyMap();
		};
	}, [
		mapProvider,
		apiKey,
		latitude,
		longitude,
		zoom,
		markerTitle,
		markerContent,
		showTooltip,
		mapTheme,
		zoomControl,
		markerIconUrl,
		destroyMap,
	] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Map Settings', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Map Provider', 'zentro-blocks' ) }
						value={ mapProvider }
						options={ [
							{
								label: __(
									'OpenStreetMap (Free)',
									'zentro-blocks'
								),
								value: 'openstreetmap',
							},
							{
								label: __( 'Google Maps', 'zentro-blocks' ),
								value: 'googlemaps',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { mapProvider: val } )
						}
					/>

					{ mapProvider === 'googlemaps' && (
						<TextControl
							label={ __(
								'Google Maps API Key',
								'zentro-blocks'
							) }
							value={ apiKey }
							onChange={ ( val ) =>
								setAttributes( { apiKey: val } )
							}
							help={ __(
								'Get an API key from Google Cloud Console.',
								'zentro-blocks'
							) }
						/>
					) }

					<RangeControl
						label={ __( 'Map Height (px)', 'zentro-blocks' ) }
						value={ mapHeight }
						min={ 200 }
						max={ 800 }
						onChange={ ( val ) =>
							setAttributes( { mapHeight: val } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Location & Zoom', 'zentro-blocks' ) }
					initialOpen={ true }
				>
					<TextControl
						label={ __( 'Latitude', 'zentro-blocks' ) }
						value={ String( latitude ) }
						onChange={ ( val ) =>
							setAttributes( {
								latitude: parseFloat( val ) || 0,
							} )
						}
					/>
					<TextControl
						label={ __( 'Longitude', 'zentro-blocks' ) }
						value={ String( longitude ) }
						onChange={ ( val ) =>
							setAttributes( {
								longitude: parseFloat( val ) || 0,
							} )
						}
					/>
					<RangeControl
						label={ __( 'Zoom Level', 'zentro-blocks' ) }
						value={ zoom }
						min={ 1 }
						max={ 20 }
						onChange={ ( val ) => setAttributes( { zoom: val } ) }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Marker Details', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Marker Title', 'zentro-blocks' ) }
						value={ markerTitle }
						onChange={ ( val ) =>
							setAttributes( { markerTitle: val } )
						}
					/>
					<TextControl
						label={ __( 'Marker Description', 'zentro-blocks' ) }
						value={ markerContent }
						onChange={ ( val ) =>
							setAttributes( { markerContent: val } )
						}
					/>
					<ToggleControl
						label={ __(
							'Show Tooltip Initially',
							'zentro-blocks'
						) }
						checked={ showTooltip }
						onChange={ ( val ) =>
							setAttributes( { showTooltip: val } )
						}
					/>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { markerIconUrl: media.url } )
							}
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<div style={ { marginTop: '10px' } }>
									{ markerIconUrl ? (
										<div style={ { marginBottom: '10px' } }>
											<img
												src={ markerIconUrl }
												alt={ __(
													'Custom Marker Pin',
													'zentro-blocks'
												) }
												style={ { maxHeight: '32px' } }
											/>
											<Button
												isDestructive
												variant="link"
												onClick={ () =>
													setAttributes( {
														markerIconUrl: '',
													} )
												}
												style={ {
													display: 'block',
													padding: '0',
												} }
											>
												{ __(
													'Remove Custom Marker Pin',
													'zentro-blocks'
												) }
											</Button>
										</div>
									) : (
										<Button
											variant="secondary"
											onClick={ open }
										>
											{ __(
												'Upload Custom Pin Icon',
												'zentro-blocks'
											) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody
					title={ __( 'Map Controls & Themes', 'zentro-blocks' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Map Color Theme', 'zentro-blocks' ) }
						value={ mapTheme }
						options={ [
							{
								label: __( 'Standard', 'zentro-blocks' ),
								value: 'standard',
							},
							{
								label: __( 'Silver / Light', 'zentro-blocks' ),
								value: 'silver',
							},
							{
								label: __( 'Retro', 'zentro-blocks' ),
								value: 'retro',
							},
							{
								label: __( 'Dark Mode', 'zentro-blocks' ),
								value: 'dark',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { mapTheme: val } )
						}
					/>
					<ToggleControl
						label={ __( 'Show Zoom Controls', 'zentro-blocks' ) }
						checked={ zoomControl }
						onChange={ ( val ) =>
							setAttributes( { zoomControl: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ mapError ? (
					<div className="gk-map-editor-placeholder-notice">
						<h3>
							{ __( 'Advanced Map Config', 'zentro-blocks' ) }
						</h3>
						<p>{ mapError }</p>
					</div>
				) : null }

				<div className="gk-advanced-map-block" ref={ mapContainerRef }>
					<div
						className="gk-advanced-map-container"
						style={ { height: `${ mapHeight }px` } }
					>
						{ ! isScriptLoaded && ! mapError && (
							<div className="gk-map-placeholder">
								<div className="gk-map-placeholder-spinner"></div>
								<div className="gk-map-placeholder-text">
									{ __(
										'Loading Map Assets…',
										'zentro-blocks'
									) }
								</div>
							</div>
						) }
						<div
							className="gk-advanced-map-instance"
							style={ { width: '100%', height: '100%' } }
						></div>
					</div>
				</div>
			</div>
		</>
	);
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
