<?php
/**
 * Box Card Block - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$cards           = $attributes['cards'] ?? array();
$columns_desktop = intval( $attributes['columnsDesktop'] ?? 3 );
$columns_tablet  = intval( $attributes['columnsTablet'] ?? 2 );
$columns_mobile  = intval( $attributes['columnsMobile'] ?? 1 );
$gap             = intval( $attributes['gap'] ?? 30 );
$alignment       = esc_attr( $attributes['alignment'] ?? 'left' );
$hover_effect    = esc_attr( $attributes['hoverEffect'] ?? 'float' );

$card_bg          = esc_attr( $attributes['cardBg'] ?? '#ffffff' );
$title_color      = esc_attr( $attributes['titleColor'] ?? '#0f172a' );
$desc_color       = esc_attr( $attributes['descColor'] ?? '#475569' );
$badge_bg         = esc_attr( $attributes['badgeBg'] ?? '#0073aa' );
$badge_text_color = esc_attr( $attributes['badgeTextColor'] ?? '#ffffff' );
$link_color       = esc_attr( $attributes['linkColor'] ?? '#0073aa' );
$link_hover_color = esc_attr( $attributes['linkHoverColor'] ?? '#005a87' );
$border_color     = esc_attr( $attributes['borderColor'] ?? '#e2e8f0' );
$border_width     = intval( $attributes['borderWidth'] ?? 1 );
$border_radius    = intval( $attributes['borderRadius'] ?? 12 );
$padding_top      = intval( $attributes['paddingTop'] ?? 32 );
$padding_bottom   = intval( $attributes['paddingBottom'] ?? 32 );
$padding_left     = intval( $attributes['paddingLeft'] ?? 32 );
$padding_right    = intval( $attributes['paddingRight'] ?? 32 );

$wrapper_classes = "gk-box-card-grid-wrapper gk-card-align-{$alignment}";

$grid_styles = array(
	"--gk-bc-cols-desktop: {$columns_desktop};",
	"--gk-bc-cols-tablet: {$columns_tablet};",
	"--gk-bc-cols-mobile: {$columns_mobile};",
	"--gk-bc-gap: {$gap}px;",
);
$grid_style_str = implode( ' ', $grid_styles );

$card_styles = array(
	"--gk-card-bg: {$card_bg};",
	"--gk-card-title-color: {$title_color};",
	"--gk-card-desc-color: {$desc_color};",
	"--gk-card-border-color: {$border_color};",
	"--gk-card-badge-bg: {$badge_bg};",
	"--gk-card-badge-color: {$badge_text_color};",
	"--gk-card-link-color: {$link_color};",
	"--gk-card-link-hover-color: {$link_hover_color};",
	"border-width: {$border_width}px;",
	"border-radius: {$border_radius}px;",
	"padding: {$padding_top}px {$padding_right}px {$padding_bottom}px {$padding_left}px;",
);
$card_style_str = implode( ' ', $card_styles );

$card_class = "gk-box-card gk-card-hover-{$hover_effect}";

if ( ! function_exists( 'gk_get_card_icon_svg' ) ) {
	function gk_get_card_icon_svg( $name ) {
		switch ( $name ) {
			case 'star':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>';
			case 'heart':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>';
			case 'bulb':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5h6zM9 18h6M10 22h4" stroke-linecap="round" stroke-linejoin="round" /></svg>';
			case 'shield':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round" /></svg>';
			case 'rocket':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5 1.5 0 3.5-1 5-2.5m10-10l-6 6m12-12L12.5 7.5m5.5-2l-3-3" stroke-linecap="round" stroke-linejoin="round" /><path d="M19 5c-2.23 2.23-4.88 5.64-6.5 8.5L9.5 10.5C12.36 8.88 15.77 6.23 18 4z" /></svg>';
			case 'check':
				return '<svg class="gk-card-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			default:
				return '';
		}
	}
}
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $wrapper_classes, 'style' => $grid_style_str ) ) ); ?>>
	<?php if ( ! empty( $cards ) && is_array( $cards ) ) : ?>
		<?php foreach ( $cards as $card ) : 
			$title             = $card['title'] ?? '';
			$description       = $card['description'] ?? '';
			$badge_text        = $card['badgeText'] ?? '';
			$show_badge        = ! empty( $card['showBadge'] );
			$icon_type         = $card['iconType'] ?? 'none';
			$icon_name         = $card['iconName'] ?? 'star';
			$image_src         = $card['imageSrc'] ?? '';
			$image_alt         = $card['imageAlt'] ?? '';
			$card_link         = $card['cardLink'] ?? '#';
			$card_link_text    = $card['cardLinkText'] ?? '';
			$card_link_target  = ( $card['cardLinkTarget'] ?? '_self' ) === '_blank' ? '_blank' : '_self';
			$rel_attr          = ( $card_link_target === '_blank' ) ? 'noopener noreferrer' : '';
		?>
			<div class="<?php echo esc_attr( $card_class ); ?>" style="<?php echo esc_attr( $card_style_str ); ?>">
				
				<?php if ( $show_badge && $badge_text ) : ?>
					<div class="gk-card-badge-wrapper">
						<span class="gk-card-badge"><?php echo esc_html( $badge_text ); ?></span>
					</div>
				<?php endif; ?>

				<?php if ( $icon_type !== 'none' ) : ?>
					<div class="gk-card-media">
						<?php if ( $icon_type === 'icon' && $icon_name ) : ?>
							<div class="gk-card-icon-container">
								<?php echo wp_kses( gk_get_card_icon_svg( $icon_name ), zentro_blocks_svg_allowed_html() ); ?>
							</div>
						<?php elseif ( $icon_type === 'image' && $image_src ) : ?>
							<img src="<?php echo esc_url( $image_src ); ?>" class="gk-card-uploaded-image" alt="<?php echo esc_attr( $image_alt ); ?>" loading="lazy" />
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<?php if ( $title ) : ?>
					<h3 class="gk-card-title"><?php echo wp_kses_post( $title ); ?></h3>
				<?php endif; ?>

				<?php if ( $description ) : ?>
					<p class="gk-card-desc"><?php echo wp_kses_post( $description ); ?></p>
				<?php endif; ?>

				<?php if ( $card_link_text ) : ?>
					<div class="gk-card-footer">
						<a href="<?php echo esc_url( $card_link ); ?>" target="<?php echo esc_attr( $card_link_target ); ?>" rel="<?php echo esc_attr( $rel_attr ); ?>" class="gk-card-action-link">
							<?php echo wp_kses_post( $card_link_text ); ?>
						</a>
					</div>
				<?php endif; ?>

			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>
