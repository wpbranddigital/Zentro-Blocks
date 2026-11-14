<?php
/**
 * Image Hotspot - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$unique_id = wp_unique_id( 'gk-ht-' );

// Extract Attributes
$image        = $attributes['image'] ?? '';
$image_alt    = $attributes['imageAlt'] ?? '';
$active_color = esc_attr( $attributes['activeColor'] ?? '#38bdf8' );
$pin_bg_color = esc_attr( $attributes['pinBgColor'] ?? '#ffffff' );
$trigger      = esc_attr( $attributes['trigger'] ?? 'hover' );
$hotspots     = $attributes['hotspots'] ?? [];

if ( empty( $image ) ) {
	return;
}
?>

<style>
#<?php echo esc_html( $unique_id ); ?> .gk-hotspot-pin {
	background: <?php echo esc_html( $pin_bg_color ); ?>;
	border-color: <?php echo esc_html( $active_color ); ?>;
}
#<?php echo esc_html( $unique_id ); ?> .gk-hotspot-pin-icon {
	background: <?php echo esc_html( $active_color ); ?>;
}
#<?php echo esc_html( $unique_id ); ?> .gk-hotspot-pin-wrapper:hover .gk-hotspot-pin {
	background: <?php echo esc_html( $active_color ); ?>;
}
#<?php echo esc_html( $unique_id ); ?> .gk-hotspot-pin-wrapper:hover .gk-hotspot-pin-icon {
	background: <?php echo esc_html( $pin_bg_color ); ?>;
}
</style>

<div
	class="gk-image-hotspot-block"
	id="<?php echo esc_attr( $unique_id ); ?>"
	data-trigger="<?php echo esc_attr( $trigger ); ?>"
>
	<div class="gk-hotspot-container" style="position: relative; display: inline-block; width: 100%;">
		<img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" style="display: block; width: 100%; height: auto;" />

		<?php foreach ( $hotspots as $index => $hotspot ) : ?>
			<?php
			$x        = floatval( $hotspot['x'] ?? 50 );
			$y        = floatval( $hotspot['y'] ?? 50 );
			$title    = $hotspot['title'] ?? '';
			$content  = $hotspot['content'] ?? '';
			$position = in_array( $hotspot['position'] ?? 'top', array( 'top', 'bottom', 'left', 'right' ), true ) ? $hotspot['position'] : 'top';
			?>
			<div
				class="gk-hotspot-pin-wrapper"
				style="position: absolute; left: <?php echo esc_attr( $x ); ?>%; top: <?php echo esc_attr( $y ); ?>%; transform: translate(-50%, -50%); z-index: 5;"
				data-index="<?php echo intval( $index ); ?>"
			>
				<button
					type="button"
					class="gk-hotspot-pin"
					aria-label="Hotspot Pin"
					style="cursor: pointer;"
				>
					<span class="gk-hotspot-pin-icon"></span>
				</button>

				<div class="gk-hotspot-tooltip gk-hotspot-tooltip--<?php echo esc_attr( $position ); ?>">
					<?php if ( ! empty( $title ) ) : ?>
						<h4 class="gk-hotspot-tooltip__title"><?php echo esc_html( $title ); ?></h4>
					<?php endif; ?>
					<?php if ( ! empty( $content ) ) : ?>
						<p class="gk-hotspot-tooltip__content"><?php echo esc_html( $content ); ?></p>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
