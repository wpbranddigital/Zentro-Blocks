<?php
/**
 * Tab panel – frontend render.
 *
 * The parent Tabs block assigns ids, ARIA attributes and the active state.
 *
 * @param array  $attributes Block attributes.
 * @param string $content    Rendered inner blocks.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="gk-tabs__panel" role="tabpanel" tabindex="0"><?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- rendered block markup. ?></div>
