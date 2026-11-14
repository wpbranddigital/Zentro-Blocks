<?php
/**
 * Timeline & Roadmap Block - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$milestones       = $attributes['milestones'] ?? [];
$timeline_color   = esc_attr( $attributes['timelineColor'] ?? '#0073aa' );
$node_bg_color    = esc_attr( $attributes['nodeBgColor'] ?? '#ffffff' );
$text_color       = esc_attr( $attributes['textColor'] ?? '#333333' );
$layout           = esc_attr( $attributes['layout'] ?? 'vertical' );
$animate_on_scroll = ! empty( $attributes['animateOnScroll'] );
$block_id         = 'gk-tl-' . wp_unique_id();

if ( empty( $milestones ) ) {
	return;
}

$wrapper_classes = 'gk-timeline gk-timeline--layout-' . $layout;
if ( $animate_on_scroll ) {
	$wrapper_classes .= ' gk-timeline--animated';
}
?>

<div
	<?php
	echo wp_kses_data(
		get_block_wrapper_attributes(
		[
			'class' => $wrapper_classes,
			'id'    => esc_attr( $block_id ),
			'style' => esc_attr(
				"--gk-timeline-color: {$timeline_color};" .
				"--gk-node-bg-color: {$node_bg_color};" .
				"--gk-text-color: {$text_color};"
			),
		]
		)
	);
	?>
	data-animate="<?php echo $animate_on_scroll ? 'true' : 'false'; ?>"
>
	<div class="gk-timeline__track"></div>
	<div class="gk-timeline__items">
		<?php foreach ( $milestones as $index => $milestone ) : ?>
			<?php
			$date    = $milestone['date'] ?? '';
			$title   = $milestone['title'] ?? '';
			$content = $milestone['content'] ?? '';
			$alignment_class = ( 0 === $index % 2 ) ? 'gk-timeline__item--left' : 'gk-timeline__item--right';
			?>
			<div class="gk-timeline__item <?php echo esc_attr( $alignment_class ); ?>">
				<div class="gk-timeline__node">
					<div class="gk-timeline__node-dot"></div>
				</div>
				<div class="gk-timeline__card">
					<?php if ( ! empty( $date ) ) : ?>
						<span class="gk-timeline__date"><?php echo esc_html( $date ); ?></span>
					<?php endif; ?>
					<?php if ( ! empty( $title ) ) : ?>
						<h4 class="gk-timeline__title"><?php echo esc_html( $title ); ?></h4>
					<?php endif; ?>
					<?php if ( ! empty( $content ) ) : ?>
						<p class="gk-timeline__content"><?php echo wp_kses_post( $content ); ?></p>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
