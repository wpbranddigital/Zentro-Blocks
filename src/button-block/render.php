<?php
/**
 * Interactive Button - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$text                  = $attributes['text'] ?? 'Explore More';
$url                   = $attributes['url'] ?? '#';
$link_target           = ( $attributes['linkTarget'] ?? '_self' ) === '_blank' ? '_blank' : '_self';
$button_size           = esc_attr( $attributes['buttonSize'] ?? 'medium' );
$custom_padding_top    = intval( $attributes['customPaddingTop'] ?? 14 );
$custom_padding_bottom = intval( $attributes['customPaddingBottom'] ?? 14 );
$custom_padding_left   = intval( $attributes['customPaddingLeft'] ?? 32 );
$custom_padding_right  = intval( $attributes['customPaddingRight'] ?? 32 );
$font_size             = intval( $attributes['fontSize'] ?? 16 );
$border_radius         = intval( $attributes['borderRadius'] ?? 8 );
$alignment             = esc_attr( $attributes['alignment'] ?? 'center' );
$normal_bg             = esc_attr( $attributes['normalBg'] ?? '#0073aa' );
$normal_text           = esc_attr( $attributes['normalText'] ?? '#ffffff' );
$hover_bg              = esc_attr( $attributes['hoverBg'] ?? '#005a87' );
$hover_text            = esc_attr( $attributes['hoverText'] ?? '#ffffff' );
$shadow_type           = esc_attr( $attributes['shadowType'] ?? 'soft' );
$animation_type        = esc_attr( $attributes['animationType'] ?? 'float' );
$icon_name             = esc_attr( $attributes['iconName'] ?? 'arrow' );
$icon_position         = esc_attr( $attributes['iconPosition'] ?? 'right' );
$icon_hover_anim       = esc_attr( $attributes['iconHoverAnim'] ?? 'translate' );

// Sizes presets padding
$pt = 14; $pb = 14; $pl = 32; $pr = 32; $fs = 16;
if ( $button_size === 'small' ) {
	$pt = 10; $pb = 10; $pl = 24; $pr = 24; $fs = 14;
} elseif ( $button_size === 'large' ) {
	$pt = 18; $pb = 18; $pl = 44; $pr = 44; $fs = 18;
} elseif ( $button_size === 'custom' ) {
	$pt = $custom_padding_top;
	$pb = $custom_padding_bottom;
	$pl = $custom_padding_left;
	$pr = $custom_padding_right;
	$fs = $font_size;
}

$wrapper_classes = "gk-button-block-wrapper gk-btn-align-{$alignment}";

$button_classes = array(
	'gk-btn-interactive',
	"gk-btn-shadow-{$shadow_type}",
	"gk-btn-anim-{$animation_type}",
);

if ( 'none' !== $icon_name ) {
	$button_classes[] = "gk-btn-has-icon gk-btn-icon-{$icon_position}";
	$button_classes[] = "gk-btn-icon-hover-{$icon_hover_anim}";
}

$button_class_str = implode( ' ', $button_classes );

// Render Icon helper
if ( ! function_exists( 'gk_get_render_icon_svg' ) ) {
	function gk_get_render_icon_svg( $name ) {
		switch ( $name ) {
			case 'arrow':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			case 'check':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			case 'cart':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			case 'download':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			case 'envelope':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 6l-10 7L2 6"/></svg>';
			case 'heart':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
			case 'star':
				return '<svg class="gk-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
			default:
				return '';
		}
	}
}

$styles = array(
	"--gk-btn-bg: {$normal_bg};",
	"--gk-btn-color: {$normal_text};",
	"--gk-btn-hover-bg: {$hover_bg};",
	"--gk-btn-hover-color: {$hover_text};",
	"padding-top: {$pt}px;",
	"padding-bottom: {$pb}px;",
	"padding-left: {$pl}px;",
	"padding-right: {$pr}px;",
	"font-size: {$fs}px;",
	"border-radius: {$border_radius}px;",
);

$style_str = implode( '', $styles );
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $wrapper_classes ) ) ); ?>>
	<a
		href="<?php echo esc_url( $url ); ?>"
		target="<?php echo esc_attr( $link_target ); ?>"
		rel="<?php echo '_blank' === $link_target ? 'noopener noreferrer' : ''; ?>"
		class="<?php echo esc_attr( $button_class_str ); ?>"
		style="<?php echo esc_attr( $style_str ); ?>"
	>
		<?php if ( 'none' !== $icon_name && 'left' === $icon_position ) : ?>
			<span class="gk-btn-icon-wrap gk-btn-icon-wrap--left">
				<?php echo wp_kses( gk_get_render_icon_svg( $icon_name ), zentro_blocks_svg_allowed_html() ); ?>
			</span>
		<?php endif; ?>

		<span class="gk-btn-text"><?php echo esc_html( $text ); ?></span>

		<?php if ( 'none' !== $icon_name && 'right' === $icon_position ) : ?>
			<span class="gk-btn-icon-wrap gk-btn-icon-wrap--right">
				<?php echo wp_kses( gk_get_render_icon_svg( $icon_name ), zentro_blocks_svg_allowed_html() ); ?>
			</span>
		<?php endif; ?>
	</a>
</div>
