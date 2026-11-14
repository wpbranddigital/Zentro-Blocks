<?php
/**
 * Progress Tracker - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$unique_id = wp_unique_id( 'gk-pr-' );

// Extract Attributes
$type        = esc_attr( $attributes['type'] ?? 'bar' );
$percentage  = intval( $attributes['percentage'] ?? 75 );
$duration    = intval( $attributes['duration'] ?? 1500 );
$stroke_width = intval( $attributes['strokeWidth'] ?? 8 );
$track_color = esc_attr( $attributes['trackColor'] ?? '#e2e8f0' );
$bar_color   = esc_attr( $attributes['barColor'] ?? '#38bdf8' );
$text_color  = esc_attr( $attributes['textColor'] ?? '#0f172a' );
$text_size   = intval( $attributes['textSize'] ?? 20 );
$label       = $attributes['label'] ?? '';
$label_color = esc_attr( $attributes['labelColor'] ?? '#64748b' );
$label_size  = intval( $attributes['labelSize'] ?? 14 );
$alignment   = esc_attr( $attributes['alignment'] ?? 'center' );

// Align map
$align_map = [
	'left'   => 'left',
	'center' => 'center',
	'right'  => 'right',
];
$align_val = $align_map[ $alignment ] ?? 'center';

// Circle math
$radius = 50 - $stroke_width / 2;
$circumference = 2 * M_PI * $radius;
?>

<style>
#<?php echo esc_html( $unique_id ); ?> .gk-progress-tracker__text {
	color: <?php echo esc_html( $text_color ); ?>;
	font-size: <?php echo esc_html( $text_size ); ?>px;
}
#<?php echo esc_html( $unique_id ); ?> .gk-progress-tracker__label {
	color: <?php echo esc_html( $label_color ); ?>;
	font-size: <?php echo esc_html( $label_size ); ?>px;
}
#<?php echo esc_html( $unique_id ); ?> .gk-progress-tracker__bar-track {
	background: <?php echo esc_html( $track_color ); ?>;
}
#<?php echo esc_html( $unique_id ); ?> .gk-progress-tracker__bar-fill {
	background: <?php echo esc_html( $bar_color ); ?>;
}
</style>

<div
	class="gk-progress-tracker gk-progress-tracker--<?php echo esc_attr( $type ); ?>"
	id="<?php echo esc_attr( $unique_id ); ?>"
	style="text-align: <?php echo esc_attr( $align_val ); ?>;"
	data-type="<?php echo esc_attr( $type ); ?>"
	data-percentage="<?php echo esc_attr( $percentage ); ?>"
	data-duration="<?php echo esc_attr( $duration ); ?>"
>
	<?php if ( 'bar' === $type ) : ?>
		<div class="gk-progress-tracker__bar-wrapper" style="width: 100%; max-width: 600px; display: inline-block;">
			<div class="gk-progress-tracker__label-bar" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
				<?php if ( ! empty( $label ) ) : ?>
					<span class="gk-progress-tracker__label"><?php echo esc_html( $label ); ?></span>
				<?php endif; ?>
				<span class="gk-progress-tracker__text" style="font-weight: bold;">0%</span>
			</div>
			<div class="gk-progress-tracker__bar-track" style="height: <?php echo esc_attr( $stroke_width ); ?>px; border-radius: <?php echo esc_attr( $stroke_width ); ?>px; overflow: hidden; width: 100%;">
				<div class="gk-progress-tracker__bar-fill" style="width: 0%; height: 100%; border-radius: <?php echo esc_attr( $stroke_width ); ?>px; transition: none;"></div>
			</div>
		</div>
	<?php elseif ( 'circle' === $type ) : ?>
		<div class="gk-progress-tracker__circle-wrapper" style="display: inline-flex; flex-direction: column; align-items: center; position: relative;">
			<div class="gk-progress-tracker__circle-container" style="position: relative; width: 150px; height: 150px;">
				<svg viewBox="0 0 100 100" style="transform: rotate(-90deg); width: 100%; height: 100%;">
					<circle
						cx="50"
						cy="50"
						r="<?php echo esc_attr( $radius ); ?>"
						fill="transparent"
						stroke="<?php echo esc_attr( $track_color ); ?>"
						stroke-width="<?php echo esc_attr( $stroke_width ); ?>"
					/>
					<circle
						class="gk-progress-tracker__circle-fill"
						cx="50"
						cy="50"
						r="<?php echo esc_attr( $radius ); ?>"
						fill="transparent"
						stroke="<?php echo esc_attr( $bar_color ); ?>"
						stroke-width="<?php echo esc_attr( $stroke_width ); ?>"
						stroke-dasharray="<?php echo esc_attr( $circumference ); ?>"
						stroke-dashoffset="<?php echo esc_attr( $circumference ); ?>"
						stroke-linecap="round"
						style="transition: none;"
					/>
				</svg>
				<div class="gk-progress-tracker__circle-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold;">
					<span class="gk-progress-tracker__text">0%</span>
				</div>
			</div>
			<?php if ( ! empty( $label ) ) : ?>
				<div class="gk-progress-tracker__label" style="margin-top: 10px;"><?php echo esc_html( $label ); ?></div>
			<?php endif; ?>
		</div>
	<?php endif; ?>
</div>
