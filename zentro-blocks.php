<?php
/**
 * Plugin Name:       Zentro Blocks
 * Description:       74 block patterns, 18 page templates and 17 interactive Gutenberg blocks (tabs, accordion, pricing, counter, gallery and more) for building fast, responsive websites in the block editor.
 * Version:           1.1.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Author:            WPBrand Digital
 * Author URI:        https://wpbranddigital.org
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       zentro-blocks
 *
 * phpcs:disable WordPress.WP.I18n.TextDomainMismatch
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Allowed HTML for the plugin's inline SVG icons (used with wp_kses()).
 *
 * @return array
 */
function zentro_blocks_svg_allowed_html() {
	$common = array(
		'fill'            => true,
		'stroke'          => true,
		'stroke-width'    => true,
		'stroke-linecap'  => true,
		'stroke-linejoin' => true,
		'stroke-dasharray' => true,
		'stroke-dashoffset' => true,
		'class'           => true,
		'transform'       => true,
		'opacity'         => true,
	);
	return array(
		'svg'      => array_merge( $common, array( 'xmlns' => true, 'viewbox' => true, 'width' => true, 'height' => true, 'aria-hidden' => true, 'focusable' => true, 'role' => true ) ),
		'g'        => $common,
		'path'     => array_merge( $common, array( 'd' => true, 'fill-rule' => true, 'clip-rule' => true ) ),
		'circle'   => array_merge( $common, array( 'cx' => true, 'cy' => true, 'r' => true ) ),
		'rect'     => array_merge( $common, array( 'x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'ry' => true ) ),
		'line'     => array_merge( $common, array( 'x1' => true, 'y1' => true, 'x2' => true, 'y2' => true ) ),
		'polyline' => array_merge( $common, array( 'points' => true ) ),
		'polygon'  => array_merge( $common, array( 'points' => true ) ),
		'ellipse'  => array_merge( $common, array( 'cx' => true, 'cy' => true, 'rx' => true, 'ry' => true ) ),
	);
}

function zentro_blocks_register_blocks() {
	$active_blocks = get_option( 'zentro_blocks_active_blocks', array() );
	$blocks = [
		'tabs-block',
		'popup-block',
		'animated-counter',
		'cta-banner-block',
		'accordion-block',
		'pricing-card-block',
		'container-block',
		'progress-tracker',
		'image-hotspot',
		'advanced-map-block',
		'timeline-roadmap',
		'image-comparison',
		'testimonials-carousel',
		'button-block',
		'box-card-block',
		'image-gallery-block',
		'team-member-block',
	];

	foreach ( $blocks as $block ) {
		if ( ! empty( $active_blocks ) && isset( $active_blocks[ $block ] ) && ! $active_blocks[ $block ] ) {
			continue;
		}
		register_block_type( plugin_dir_path( __FILE__ ) . 'build/' . $block );

		// Tabs uses a child block for each tab.
		if ( 'tabs-block' === $block ) {
			register_block_type( plugin_dir_path( __FILE__ ) . 'build/tab-panel' );
		}
	}
}
add_action( 'init', 'zentro_blocks_register_blocks' );

function zentro_blocks_register_category( $categories, $block_editor_context ) {
	return array_merge(
		[
			[
				'slug'  => 'zentro-blocks',
				'title' => __( 'Zentro Blocks', 'zentro-blocks' ),
				'icon'  => 'admin-plugins',
			],
		],
		$categories
	);
}
add_filter( 'block_categories_all', 'zentro_blocks_register_category', 10, 2 );

// --- ADMIN DASHBOARD MENU REGISTRATION ---
add_action( 'admin_menu', 'zentro_blocks_register_admin_dashboard' );
function zentro_blocks_register_admin_dashboard() {
	add_menu_page(
		'Zentro Blocks',
		'Zentro Blocks',
		'manage_options',
		'zentro-blocks',
		'zentro_blocks_render_dashboard',
		'dashicons-grid-view',
		59
	);
}

function zentro_blocks_render_dashboard() {
	include plugin_dir_path( __FILE__ ) . 'admin/dashboard.php';
}

add_action( 'admin_enqueue_scripts', 'zentro_blocks_enqueue_admin_assets' );
function zentro_blocks_enqueue_admin_assets( $hook ) {
	if ( 'toplevel_page_zentro-blocks' !== $hook ) {
		return;
	}
	wp_enqueue_style( 'zentro-blocks-admin-css', plugin_dir_url( __FILE__ ) . 'admin/admin.css', array(), '1.0.0' );
}

// --- GLOBAL STYLING & TYPOGRAPHY OUTPUT ---

/**
 * Sanitised global settings (brand colour, font family, base font size).
 *
 * @return array{primaryColor:string,fontFamily:string,fontSize:int}
 */
function zentro_blocks_get_global_settings() {
	$settings = get_option( 'zentro_blocks_global_settings', array() );
	$settings = is_array( $settings ) ? $settings : array();

	$color = sanitize_hex_color( $settings['primaryColor'] ?? '' );
	$font  = (string) ( $settings['fontFamily'] ?? 'inherit' );
	// Only allow characters that can appear in a font-family list.
	$font = trim( preg_replace( '/[^A-Za-z0-9 ,\'"\-]/', '', $font ) );
	$size = absint( $settings['fontSize'] ?? 16 );

	return array(
		'primaryColor' => $color ? $color : '#0073aa',
		'fontFamily'   => '' !== $font ? $font : 'inherit',
		'fontSize'     => $size ? min( $size, 40 ) : 16,
	);
}

/**
 * Google Fonts stylesheet URL for the chosen font, or '' for "inherit".
 *
 * @return string
 */
function zentro_blocks_google_font_url() {
	$font = zentro_blocks_get_global_settings()['fontFamily'];
	if ( 'inherit' === $font ) {
		return '';
	}
	$name = trim( str_replace( array( "'", '"', ', sans-serif', ', serif' ), '', $font ) );
	return 'https://fonts.googleapis.com/css2?family=' . rawurlencode( $name ) . ':wght@400;500;600;700&display=swap';
}

/**
 * CSS variables + font family for Zentro blocks.
 *
 * @return string
 */
function zentro_blocks_global_css() {
	$s = zentro_blocks_get_global_settings();
	return ':root{--gk-primary-color:' . $s['primaryColor'] . ';--gk-font-family:' . $s['fontFamily'] . ';--gk-base-font-size:' . $s['fontSize'] . 'px;}'
		. '.gk-tabs,.gk-popup-wrap,.gk-counter,.gk-cta,.gk-accordion,.gk-pricing-card,.gk-container,.gk-progress-tracker,.gk-image-hotspot-block,.gk-timeline,'
		. '.gk-image-comparison,.gk-testimonials-carousel-wrapper,.gk-btn-interactive,.gk-box-card,.gk-image-gallery,.gk-team-member{font-family:var(--gk-font-family);}';
}

// Front end and editor canvas (the block editor iframe also runs enqueue_block_assets).
add_action( 'enqueue_block_assets', 'zentro_blocks_enqueue_global_styles' );
function zentro_blocks_enqueue_global_styles() {
	$font_url = zentro_blocks_google_font_url();
	if ( $font_url ) {
		wp_enqueue_style( 'zentro-blocks-global-font', $font_url, array(), null ); // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- Google Fonts URL is versioned by its query string.
	}
	wp_register_style( 'zentro-blocks-global-vars', false, array(), '1.1.0' );
	wp_enqueue_style( 'zentro-blocks-global-vars' );
	wp_add_inline_style( 'zentro-blocks-global-vars', zentro_blocks_global_css() );
}

// --- ENQUEUE ZENTRO KIT EDITOR ASSETS ---
add_action( 'enqueue_block_editor_assets', 'zentro_blocks_enqueue_kit_assets' );
function zentro_blocks_enqueue_kit_assets() {
	$asset_file = plugin_dir_path( __FILE__ ) . 'build/zentro-kit/index.asset.php';
	if ( file_exists( $asset_file ) ) {
		$assets = require $asset_file;
		wp_enqueue_script(
			'zentro-kit-editor-script',
			plugin_dir_url( __FILE__ ) . 'build/zentro-kit/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
		// Real screenshot previews for the pattern / template library cards.
		wp_add_inline_script(
			'zentro-kit-editor-script',
			'window.zentroKitData = ' . wp_json_encode(
				array(
					'previewBase' => esc_url_raw( plugin_dir_url( __FILE__ ) . 'assets/kit-previews/' ),
					'version'     => $assets['version'],
				)
			) . ';',
			'before'
		);
		wp_enqueue_style(
			'zentro-kit-editor-style',
			plugin_dir_url( __FILE__ ) . 'build/zentro-kit/index.css',
			array(),
			$assets['version']
		);
	}
}


// --- PERFORMANCE: lazy-load external pattern images ---
// WordPress only lazy-loads images that have width/height attributes, so
// external (e.g. demo) images inserted by Zentro patterns would all load
// eagerly. Keep the first such image eager (likely the hero / LCP image) and
// lazy-load the rest.
add_filter( 'render_block_core/image', 'zentro_blocks_lazy_load_external_images', 10, 1 );
function zentro_blocks_lazy_load_external_images( $block_content ) {
	static $seen = 0;

	$is_rest = function_exists( 'wp_is_serving_rest_request' ) ? wp_is_serving_rest_request() : ( defined( 'REST_REQUEST' ) && REST_REQUEST );
	if ( is_admin() || $is_rest || false === strpos( $block_content, '<img' ) ) {
		return $block_content;
	}

	$p = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $p->next_tag( 'img' ) || null !== $p->get_attribute( 'loading' ) || null !== $p->get_attribute( 'width' ) ) {
		return $block_content;
	}

	++$seen;
	if ( 1 === $seen ) {
		$p->set_attribute( 'fetchpriority', 'high' );
	} else {
		$p->set_attribute( 'loading', 'lazy' );
	}
	$p->set_attribute( 'decoding', 'async' );

	return $p->get_updated_html();
}
