<?php
/**
 * Tabs Block - Frontend render template.
 *
 * New format: each tab is a `zentro-blocks/tab-panel` inner block that can
 * hold any blocks. Legacy format (plain text in the `tabs` attribute) is
 * still rendered for content saved before v1.1.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block inner content.
 * @param WP_Block $block      Block instance.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$active_color  = sanitize_hex_color( $attributes['activeColor'] ?? '' ) ?: '#0073aa';
$border_radius = intval( $attributes['borderRadius'] ?? 4 );
$alignment     = in_array( $attributes['alignment'] ?? 'left', array( 'left', 'center', 'right' ), true ) ? $attributes['alignment'] : 'left';
$justify       = array( 'left' => 'flex-start', 'center' => 'center', 'right' => 'flex-end' )[ $alignment ];
$block_id      = wp_unique_id( 'gk-tabs-' );

// Collect labels + panel HTML.
$labels      = array();
$panels_html = '';

$inner = ( $block instanceof WP_Block ) ? $block->parsed_block['innerBlocks'] : array();
$inner = array_values(
	array_filter(
		$inner,
		static function ( $b ) {
			return 'zentro-blocks/tab-panel' === ( $b['blockName'] ?? '' );
		}
	)
);

if ( ! empty( $inner ) ) {
	foreach ( $inner as $i => $panel ) {
		$labels[] = $panel['attrs']['label'] ?? sprintf( /* translators: %d: tab number */ __( 'Tab %d', 'zentro-blocks' ), $i + 1 );
	}

	// Add ids / ARIA / active state to this block's own panels. Panels of
	// nested Tabs blocks already received an id, so they are skipped.
	$p     = new WP_HTML_Tag_Processor( $content );
	$index = 0;
	while ( $p->next_tag( array( 'class_name' => 'gk-tabs__panel' ) ) ) {
		if ( null !== $p->get_attribute( 'id' ) ) {
			continue;
		}
		$p->set_attribute( 'id', $block_id . '-panel-' . $index );
		$p->set_attribute( 'aria-labelledby', $block_id . '-tab-' . $index );
		if ( 0 === $index ) {
			$p->add_class( 'is-active' );
		} else {
			$p->set_attribute( 'hidden', true );
		}
		++$index;
	}
	$panels_html = $p->get_updated_html();
} else {
	// Legacy attribute-based tabs.
	$tabs = is_array( $attributes['tabs'] ?? null ) ? $attributes['tabs'] : array();
	foreach ( $tabs as $index => $tab ) {
		$labels[]     = $tab['label'] ?? '';
		$panels_html .= sprintf(
			'<div class="gk-tabs__panel%1$s" role="tabpanel" tabindex="0" id="%2$s" aria-labelledby="%3$s"%4$s>%5$s</div>',
			0 === $index ? ' is-active' : '',
			esc_attr( $block_id . '-panel-' . $index ),
			esc_attr( $block_id . '-tab-' . $index ),
			0 === $index ? '' : ' hidden',
			wp_kses_post( wpautop( $tab['content'] ?? '' ) )
		);
	}
}

if ( empty( $labels ) ) {
	return;
}
?>
<div
	<?php echo get_block_wrapper_attributes( array( 'class' => 'gk-tabs', 'id' => $block_id ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	data-active-color="<?php echo esc_attr( $active_color ); ?>"
>
	<div class="gk-tabs__nav" style="justify-content: <?php echo esc_attr( $justify ); ?>;" role="tablist">
		<?php foreach ( $labels as $index => $label ) : ?>
			<button
				type="button"
				class="gk-tabs__nav-btn<?php echo 0 === $index ? ' is-active' : ''; ?>"
				role="tab"
				aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>"
				aria-controls="<?php echo esc_attr( $block_id . '-panel-' . $index ); ?>"
				id="<?php echo esc_attr( $block_id . '-tab-' . $index ); ?>"
				tabindex="<?php echo 0 === $index ? '0' : '-1'; ?>"
				style="border-radius: <?php echo esc_attr( $border_radius ); ?>px <?php echo esc_attr( $border_radius ); ?>px 0 0;<?php echo 0 === $index ? ' color:' . esc_attr( $active_color ) . '; border-bottom-color:' . esc_attr( $active_color ) . ';' : ''; ?>"
			><?php echo esc_html( wp_strip_all_tags( $label ) ); ?></button>
		<?php endforeach; ?>
	</div>

	<div class="gk-tabs__panels">
		<?php echo $panels_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- rendered block markup / kses-filtered legacy content. ?>
	</div>
</div>
