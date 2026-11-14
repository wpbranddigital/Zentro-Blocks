<?php
/**
 * Image Gallery Block - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$images          = $attributes['images'] ?? array();
$columns_desktop = intval( $attributes['columnsDesktop'] ?? 3 );
$columns_tablet  = intval( $attributes['columnsTablet'] ?? 2 );
$columns_mobile  = intval( $attributes['columnsMobile'] ?? 1 );
$gap             = intval( $attributes['gap'] ?? 20 );
$image_radius    = intval( $attributes['imageRadius'] ?? 8 );
$aspect_ratio    = esc_attr( $attributes['aspectRatio'] ?? '1/1' );

$wrapper_classes = "gk-image-gallery-wrapper";

$styles = array(
	"--gk-gallery-cols-desktop: {$columns_desktop};",
	"--gk-gallery-cols-tablet: {$columns_tablet};",
	"--gk-gallery-cols-mobile: {$columns_mobile};",
	"--gk-gallery-gap: {$gap}px;",
	"--gk-gallery-radius: {$image_radius}px;",
	"--gk-gallery-aspect: " . ( 'auto' === $aspect_ratio ? 'auto' : $aspect_ratio ) . ";",
);

$style_str = implode( ' ', $styles );
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $wrapper_classes ) ) ); ?>>
	<?php if ( ! empty( $images ) && is_array( $images ) ) : ?>
		<div class="gk-image-gallery" style="<?php echo esc_attr( $style_str ); ?>">
			<?php foreach ( $images as $img ) : ?>
				<?php 
					$url = $img['url'] ?? '';
					$alt = $img['alt'] ?? '';
					if ( empty( $url ) ) continue; 
				?>
				<div class="gk-gallery-item">
					<img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy" />
				</div>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>
</div>
