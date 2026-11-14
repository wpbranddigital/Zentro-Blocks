<?php
/**
 * Before/After Image Comparison - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$before_image     = $attributes['beforeImage'] ?? '';
$before_image_alt = $attributes['beforeImageAlt'] ?? '';
$after_image      = $attributes['afterImage'] ?? '';
$after_image_alt  = $attributes['afterImageAlt'] ?? '';
$before_label     = $attributes['beforeLabel'] ?? 'Before';
$after_label      = $attributes['afterLabel'] ?? 'After';
$show_labels      = ! empty( $attributes['showLabels'] );
$slider_offset    = intval( $attributes['sliderOffset'] ?? 50 );
$orientation      = esc_attr( $attributes['orientation'] ?? 'horizontal' );
$handle_color     = esc_attr( $attributes['handleColor'] ?? '#0073aa' );
$height           = intval( $attributes['height'] ?? 450 );
$block_id         = 'gk-ic-' . wp_unique_id();

if ( empty( $before_image ) || empty( $after_image ) ) {
	return;
}

$wrapper_classes = "gk-image-comparison gk-image-comparison--{$orientation}";
?>

<div
	<?php
	echo wp_kses_data(
		get_block_wrapper_attributes(
		[
			'class' => $wrapper_classes,
			'id'    => esc_attr( $block_id ),
			'style' => esc_attr(
				"--gk-slider-offset: {$slider_offset}%;" .
				"--gk-handle-color: {$handle_color};" .
				"height: {$height}px;"
			),
		]
		)
	);
	?>
>
	<!-- After (Base) Image -->
	<div class="gk-image-comparison__after">
		<img src="<?php echo esc_url( $after_image ); ?>" alt="<?php echo esc_attr( $after_image_alt ); ?>" />
		<?php if ( $show_labels && ! empty( $after_label ) ) : ?>
			<span class="gk-image-comparison__label gk-image-comparison__label--after">
				<?php echo esc_html( $after_label ); ?>
			</span>
		<?php endif; ?>
	</div>

	<!-- Before (Overlay) Image -->
	<div class="gk-image-comparison__before">
		<img src="<?php echo esc_url( $before_image ); ?>" alt="<?php echo esc_attr( $before_image_alt ); ?>" />
		<?php if ( $show_labels && ! empty( $before_label ) ) : ?>
			<span class="gk-image-comparison__label gk-image-comparison__label--before">
				<?php echo esc_html( $before_label ); ?>
			</span>
		<?php endif; ?>
	</div>

	<!-- Slider Handle Line and Button -->
	<div class="gk-image-comparison__handle">
		<div class="gk-image-comparison__handle-button">
			<svg
				viewBox="0 0 24 24"
				width="16"
				height="16"
				stroke="currentColor"
				stroke-width="3"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="<?php echo 'vertical' === $orientation ? 'transform: rotate(90deg);' : ''; ?>"
			>
				<polyline points="15 18 9 12 15 6" />
				<polyline points="9 18 15 12 9 6" />
			</svg>
		</div>
	</div>
</div>
