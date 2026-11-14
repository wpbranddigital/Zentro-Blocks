<?php
/**
 * Advanced Map - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$unique_id = wp_unique_id( 'gk-map-' );

// Extract Attributes
$provider        = esc_attr( $attributes['mapProvider'] ?? 'openstreetmap' );
$api_key         = esc_attr( $attributes['apiKey'] ?? '' );
$latitude        = floatval( $attributes['latitude'] ?? 40.7128 );
$longitude       = floatval( $attributes['longitude'] ?? -74.0060 );
$zoom            = intval( $attributes['zoom'] ?? 13 );
$map_height      = intval( $attributes['mapHeight'] ?? 400 );
$marker_title    = esc_attr( $attributes['markerTitle'] ?? '' );
$marker_content  = esc_attr( $attributes['markerContent'] ?? '' );
$show_tooltip    = ! empty( $attributes['showTooltip'] ) ? 'true' : 'false';
$map_theme       = esc_attr( $attributes['mapTheme'] ?? 'standard' );
$zoom_control    = ! empty( $attributes['zoomControl'] ) ? 'true' : 'false';
$marker_icon_url = esc_url( $attributes['markerIconUrl'] ?? '' );

?>
<div <?php echo get_block_wrapper_attributes( [ 'class' => 'gk-advanced-map-block' ] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div 
		class="gk-advanced-map-container" 
		id="<?php echo esc_attr( $unique_id ); ?>"
		style="height: <?php echo esc_attr( $map_height ); ?>px;"
		data-provider="<?php echo esc_attr( $provider ); ?>"
		data-api-key="<?php echo esc_attr( $api_key ); ?>"
		data-lat="<?php echo esc_attr( $latitude ); ?>"
		data-lng="<?php echo esc_attr( $longitude ); ?>"
		data-zoom="<?php echo esc_attr( $zoom ); ?>"
		data-marker-title="<?php echo esc_attr( $marker_title ); ?>"
		data-marker-content="<?php echo esc_attr( $marker_content ); ?>"
		data-show-tooltip="<?php echo esc_attr( $show_tooltip ); ?>"
		data-theme="<?php echo esc_attr( $map_theme ); ?>"
		data-zoom-control="<?php echo esc_attr( $zoom_control ); ?>"
		data-marker-icon="<?php echo esc_attr( $marker_icon_url ); ?>"
	>
		<!-- Skeleton Loader -->
		<div class="gk-map-placeholder">
			<div class="gk-map-placeholder-spinner"></div>
			<div class="gk-map-placeholder-text"><?php esc_html_e( 'Initializing Map...', 'zentro-blocks' ); ?></div>
		</div>

		<!-- Map Container Instance -->
		<div class="gk-advanced-map-instance" style="width: 100%; height: 100%;"></div>
	</div>
</div>
