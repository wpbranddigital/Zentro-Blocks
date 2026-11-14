<?php
/**
 * Container Block - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$visibility_role = $attributes['visibilityRole'] ?? 'all';
if ( 'guest' === $visibility_role && is_user_logged_in() ) {
	return;
}
if ( 'logged-in' === $visibility_role && ! is_user_logged_in() ) {
	return;
}

$unique_id = wp_unique_id( 'gk-cont-' );

// Extract Attributes
$layout_type         = esc_attr( $attributes['layoutType'] ?? 'block' );
$content_width       = esc_attr( $attributes['contentWidth'] ?? 'boxed' );
$max_width           = esc_attr( $attributes['maxWidth'] ?? '1200px' );
$max_width_tablet    = esc_attr( $attributes['maxWidthTablet'] ?? '960px' );
$max_width_mobile    = esc_attr( $attributes['maxWidthMobile'] ?? '100%' );

$height_type         = esc_attr( $attributes['heightType'] ?? 'auto' );
$height              = esc_attr( $attributes['height'] ?? 'auto' );
$height_tablet       = esc_attr( $attributes['heightTablet'] ?? 'auto' );
$height_mobile       = esc_attr( $attributes['heightMobile'] ?? 'auto' );

$overflow            = esc_attr( $attributes['overflow'] ?? 'visible' );

$flex_direction      = esc_attr( $attributes['flexDirection'] ?? 'row' );
$flex_direction_tab  = esc_attr( $attributes['flexDirectionTablet'] ?? 'row' );
$flex_direction_mob  = esc_attr( $attributes['flexDirectionMobile'] ?? 'column' );

$justify_content     = esc_attr( $attributes['justifyContent'] ?? 'flex-start' );
$justify_content_tab = esc_attr( $attributes['justifyContentTablet'] ?? 'flex-start' );
$justify_content_mob = esc_attr( $attributes['justifyContentMobile'] ?? 'flex-start' );

$align_items         = esc_attr( $attributes['alignItems'] ?? 'stretch' );
$align_items_tab     = esc_attr( $attributes['alignItemsTablet'] ?? 'stretch' );
$align_items_mob     = esc_attr( $attributes['alignItemsMobile'] ?? 'stretch' );

$flex_wrap           = esc_attr( $attributes['flexWrap'] ?? 'nowrap' );

$grid_cols           = intval( $attributes['gridColumns'] ?? 3 );
$grid_cols_tab       = intval( $attributes['gridColumnsTablet'] ?? 2 );
$grid_cols_mob       = intval( $attributes['gridColumnsMobile'] ?? 1 );

$grid_rows           = intval( $attributes['gridRows'] ?? 1 );
$grid_rows_tab       = intval( $attributes['gridRowsTablet'] ?? 1 );
$grid_rows_mob       = intval( $attributes['gridRowsMobile'] ?? 1 );

$gap                 = intval( $attributes['gap'] ?? 20 );
$gap_tab             = intval( $attributes['gapTablet'] ?? 15 );
$gap_mob             = intval( $attributes['gapMobile'] ?? 10 );

$row_gap             = intval( $attributes['rowGap'] ?? 20 );
$row_gap_tab         = intval( $attributes['rowGapTablet'] ?? 15 );
$row_gap_mob         = intval( $attributes['rowGapMobile'] ?? 10 );

$col_gap             = intval( $attributes['columnGap'] ?? 20 );
$col_gap_tab         = intval( $attributes['columnGapTablet'] ?? 15 );
$col_gap_mob         = intval( $attributes['columnGapMobile'] ?? 10 );

$grid_auto_fit       = ! empty( $attributes['gridAutoFit'] );
$grid_auto_fill      = ! empty( $attributes['gridAutoFill'] );
$grid_areas          = esc_attr( $attributes['gridTemplateAreas'] ?? '' );
$grid_template_cols      = esc_attr( $attributes['gridTemplateColumns'] ?? '' );
$grid_template_cols_tab  = esc_attr( $attributes['gridTemplateColumnsTablet'] ?? '' );
$grid_template_cols_mob  = esc_attr( $attributes['gridTemplateColumnsMobile'] ?? '' );

$padding_top         = intval( $attributes['paddingTop'] ?? 40 );
$padding_top_tab     = intval( $attributes['paddingTopTablet'] ?? 30 );
$padding_top_mob     = intval( $attributes['paddingTopMobile'] ?? 20 );

$padding_bottom      = intval( $attributes['paddingBottom'] ?? 40 );
$padding_bottom_tab  = intval( $attributes['paddingBottomTablet'] ?? 30 );
$padding_bottom_mob  = intval( $attributes['paddingBottomMobile'] ?? 20 );

$padding_left        = intval( $attributes['paddingLeft'] ?? 20 );
$padding_left_tab    = intval( $attributes['paddingLeftTablet'] ?? 15 );
$padding_left_mob    = intval( $attributes['paddingLeftMobile'] ?? 10 );

$padding_right       = intval( $attributes['paddingRight'] ?? 20 );
$padding_right_tab   = intval( $attributes['paddingRightTablet'] ?? 15 );
$padding_right_mob   = intval( $attributes['paddingRightMobile'] ?? 10 );

$margin_top          = intval( $attributes['marginTop'] ?? 0 );
$margin_top_tab      = intval( $attributes['marginTopTablet'] ?? 0 );
$margin_top_mob      = intval( $attributes['marginTopMobile'] ?? 0 );

$margin_bottom       = intval( $attributes['marginBottom'] ?? 0 );
$margin_bottom_tab   = intval( $attributes['marginBottomTablet'] ?? 0 );
$margin_bottom_mob   = intval( $attributes['marginBottomMobile'] ?? 0 );

$bg_type             = esc_attr( $attributes['bgType'] ?? 'color' );
$bg_color            = esc_attr( $attributes['backgroundColor'] ?? '' );
$bg_gradient         = esc_attr( $attributes['bgGradient'] ?? '' );
$bg_image            = esc_url( $attributes['backgroundImage'] ?? '' );
$bg_video            = esc_url( $attributes['bgVideo'] ?? '' );

$bg_pos              = esc_attr( $attributes['backgroundPosition'] ?? 'center center' );
$bg_size             = esc_attr( $attributes['backgroundSize'] ?? 'cover' );
$bg_repeat           = esc_attr( $attributes['backgroundRepeat'] ?? 'no-repeat' );
$bg_attach           = esc_attr( $attributes['backgroundAttachment'] ?? 'scroll' );

$overlay_type        = esc_attr( $attributes['overlayType'] ?? 'color' );
$overlay_color       = esc_attr( $attributes['overlayColor'] ?? '' );
$overlay_gradient    = esc_attr( $attributes['overlayGradient'] ?? '' );
$overlay_opacity     = intval( $attributes['overlayOpacity'] ?? 50 );

$br_tl               = intval( $attributes['borderRadiusTopLeft'] ?? 0 );
$br_tr               = intval( $attributes['borderRadiusTopRight'] ?? 0 );
$br_bl               = intval( $attributes['borderRadiusBottomLeft'] ?? 0 );
$br_br               = intval( $attributes['borderRadiusBottomRight'] ?? 0 );

$border_width        = intval( $attributes['borderWidth'] ?? 0 );
$border_style        = esc_attr( $attributes['borderStyle'] ?? 'solid' );
$border_color        = esc_attr( $attributes['borderColor'] ?? '' );

$box_shadow          = ! empty( $attributes['boxShadow'] );
$shadow_color        = esc_attr( $attributes['shadowColor'] ?? 'rgba(0,0,0,0.1)' );
$shadow_x            = intval( $attributes['shadowX'] ?? 0 );
$shadow_y            = intval( $attributes['shadowY'] ?? 10 );
$shadow_blur         = intval( $attributes['shadowBlur'] ?? 30 );
$shadow_spread       = intval( $attributes['shadowSpread'] ?? 0 );

$shape_top_type      = esc_attr( $attributes['shapeTopType'] ?? 'none' );
$shape_top_color     = esc_attr( $attributes['shapeTopColor'] ?? '#ffffff' );
$shape_top_height    = intval( $attributes['shapeTopHeight'] ?? 80 );
$shape_top_width     = intval( $attributes['shapeTopWidth'] ?? 100 );
$shape_top_flip      = ! empty( $attributes['shapeTopFlip'] );

$shape_bottom_type   = esc_attr( $attributes['shapeBottomType'] ?? 'none' );
$shape_bottom_color  = esc_attr( $attributes['shapeBottomColor'] ?? '#ffffff' );
$shape_bottom_height = intval( $attributes['shapeBottomHeight'] ?? 80 );
$shape_bottom_width  = intval( $attributes['shapeBottomWidth'] ?? 100 );
$shape_bottom_flip   = ! empty( $attributes['shapeBottomFlip'] );

$entrance_anim       = esc_attr( $attributes['entranceAnimation'] ?? 'none' );
$scroll_anim         = esc_attr( $attributes['scrollAnimation'] ?? 'none' );
$hover_anim          = esc_attr( $attributes['hoverAnimation'] ?? 'none' );

$vis_desktop         = ! isset( $attributes['visibilityDesktop'] ) || ! empty( $attributes['visibilityDesktop'] );
$vis_tablet          = ! isset( $attributes['visibilityTablet'] ) || ! empty( $attributes['visibilityTablet'] );
$vis_mobile          = ! isset( $attributes['visibilityMobile'] ) || ! empty( $attributes['visibilityMobile'] );

$container_link      = esc_url( $attributes['containerLink'] ?? '' );
$is_sticky           = ! empty( $attributes['isSticky'] );
$z_index             = intval( $attributes['zIndex'] ?? 1 );
$custom_css          = $attributes['customCss'] ?? '';
$html_id             = esc_attr( $attributes['htmlId'] ?? '' );
$custom_classes      = esc_attr( $attributes['customClasses'] ?? '' );

// Build Custom Class Lists
$classes = [ 'gk-container', "gk-container--layout-{$layout_type}" ];
if ( $is_sticky ) {
	$classes[] = 'gk-container--sticky';
}
if ( 'none' !== $entrance_anim ) {
	$classes[] = "gk-anim-entrance-{$entrance_anim}";
}
if ( 'none' !== $hover_anim ) {
	$classes[] = "gk-anim-hover-{$hover_anim}";
}
if ( 'none' !== $scroll_anim ) {
	$classes[] = "gk-anim-scroll-{$scroll_anim}";
}
if ( ! $vis_desktop ) {
	$classes[] = 'gk-hide-desktop';
}
if ( ! $vis_tablet ) {
	$classes[] = 'gk-hide-tablet';
}
if ( ! $vis_mobile ) {
	$classes[] = 'gk-hide-mobile';
}
if ( $custom_classes ) {
	$classes[] = $custom_classes;
}

// Inline styles computed for the parent container (that don't require media query responsive handling)
$parent_styles = [
	"z-index: {$z_index};",
	"overflow: {$overflow};",
	"border-radius: {$br_tl}px {$br_tr}px {$br_br}px {$br_bl}px;",
];

if ( $border_width > 0 ) {
	$parent_styles[] = "border-width: {$border_width}px;";
	$parent_styles[] = "border-style: {$border_style};";
	if ( $border_color ) {
		$parent_styles[] = "border-color: {$border_color};";
	}
}

if ( $box_shadow ) {
	$parent_styles[] = "box-shadow: {$shadow_x}px {$shadow_y}px {$shadow_blur}px {$shadow_spread}px {$shadow_color};";
}

if ( $bg_type === 'color' && $bg_color ) {
	$parent_styles[] = "background-color: {$bg_color};";
} elseif ( $bg_type === 'gradient' && $bg_gradient ) {
	$parent_styles[] = "background: {$bg_gradient};";
} elseif ( $bg_type === 'image' && $bg_image ) {
	$parent_styles[] = "background-image: url('{$bg_image}');";
	$parent_styles[] = "background-position: {$bg_pos};";
	$parent_styles[] = "background-size: {$bg_size};";
	$parent_styles[] = "background-repeat: {$bg_repeat};";
	$parent_styles[] = "background-attachment: {$bg_attach};";
	$parent_styles[] = 'position: relative;';
}

$parent_style_str = implode( ' ', $parent_styles );

// Wrapper parameters
$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => esc_attr( implode( ' ', $classes ) ),
	'id'    => esc_attr( $unique_id ),
	'style' => $parent_style_str,
] );

// Whitelist the wrapper tag so a crafted attribute can never inject e.g. <script>.
$html_tag = $attributes['htmlTag'] ?? 'div';
if ( ! in_array( $html_tag, array( 'div', 'section', 'header', 'footer', 'main', 'article', 'aside', 'nav' ), true ) ) {
	$html_tag = 'div';
}
?>

<style>
/* Responsive style overrides for <?php echo esc_html( $unique_id ); ?> */
#<?php echo esc_html( $unique_id ); ?> {
	padding-top: <?php echo intval( $padding_top ); ?>px;
	padding-bottom: <?php echo intval( $padding_bottom ); ?>px;
	padding-left: <?php echo intval( $padding_left ); ?>px;
	padding-right: <?php echo intval( $padding_right ); ?>px;
	margin-top: <?php echo intval( $margin_top ); ?>px;
	margin-bottom: <?php echo intval( $margin_bottom ); ?>px;
	<?php if ( $content_width === 'custom' ) : ?>
		max-width: <?php echo esc_html( $max_width ); ?>;
	<?php elseif ( $content_width === 'boxed' ) : ?>
		max-width: 1200px;
	<?php else : ?>
		max-width: 100%;
	<?php endif; ?>
	<?php if ( $height_type === 'custom' || $height_type === 'min' ) : ?>
		<?php echo 'min' === $height_type ? 'min-height' : 'height'; ?>: <?php echo esc_html( $height ); ?>;
	<?php elseif ( $height_type === 'fit' ) : ?>
		height: 100vh;
	<?php endif; ?>
}

#<?php echo esc_html( $unique_id ); ?> > .gk-container-content {
	<?php if ( $layout_type === 'flex' ) : ?>
		display: flex;
		flex-direction: <?php echo esc_html( $flex_direction ); ?>;
		justify-content: <?php echo esc_html( $justify_content ); ?>;
		align-items: <?php echo esc_html( $align_items ); ?>;
		flex-wrap: <?php echo esc_html( $flex_wrap ); ?>;
		gap: <?php echo intval( $gap ); ?>px;
	<?php elseif ( $layout_type === 'grid' ) : ?>
		display: grid;
		<?php if ( ! empty( $grid_areas ) ) : ?>
			grid-template-areas: <?php echo esc_html( $grid_areas ); ?>;
		<?php elseif ( ! empty( $grid_template_cols ) ) : ?>
			grid-template-columns: <?php echo esc_html( $grid_template_cols ); ?>;
		<?php elseif ( $grid_auto_fit ) : ?>
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		<?php elseif ( $grid_auto_fill ) : ?>
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		<?php else : ?>
			grid-template-columns: repeat(<?php echo intval( $grid_cols ); ?>, 1fr);
			grid-template-rows: repeat(<?php echo intval( $grid_rows ); ?>, auto);
		<?php endif; ?>
		row-gap: <?php echo intval( $row_gap ); ?>px;
		column-gap: <?php echo intval( $col_gap ); ?>px;
	<?php endif; ?>
}

@media (max-width: 1024px) {
	#<?php echo esc_html( $unique_id ); ?> {
		padding-top: <?php echo intval( $padding_top_tab ); ?>px;
		padding-bottom: <?php echo intval( $padding_bottom_tab ); ?>px;
		padding-left: <?php echo intval( $padding_left_tab ); ?>px;
		padding-right: <?php echo intval( $padding_right_tab ); ?>px;
		margin-top: <?php echo intval( $margin_top_tab ); ?>px;
		margin-bottom: <?php echo intval( $margin_bottom_tab ); ?>px;
		<?php if ( $content_width === 'custom' ) : ?>
			max-width: <?php echo esc_html( $max_width_tablet ); ?>;
		<?php endif; ?>
		<?php if ( $height_type === 'custom' || $height_type === 'min' ) : ?>
			<?php echo 'min' === $height_type ? 'min-height' : 'height'; ?>: <?php echo esc_html( $height_tablet ); ?>;
		<?php endif; ?>
	}
	#<?php echo esc_html( $unique_id ); ?> > .gk-container-content {
		<?php if ( $layout_type === 'flex' ) : ?>
			flex-direction: <?php echo esc_html( $flex_direction_tab ); ?>;
			justify-content: <?php echo esc_html( $justify_content_tab ); ?>;
			align-items: <?php echo esc_html( $align_items_tab ); ?>;
			gap: <?php echo intval( $gap_tab ); ?>px;
		<?php elseif ( $layout_type === 'grid' ) : ?>
			<?php if ( empty( $grid_areas ) && ! $grid_auto_fit && ! $grid_auto_fill ) : ?>
				<?php if ( ! empty( $grid_template_cols_tab ) ) : ?>
					grid-template-columns: <?php echo esc_html( $grid_template_cols_tab ); ?>;
				<?php else : ?>
					grid-template-columns: repeat(<?php echo intval( $grid_cols_tab ); ?>, 1fr);
				<?php endif; ?>
				grid-template-rows: repeat(<?php echo intval( $grid_rows_tab ); ?>, auto);
			<?php endif; ?>
			row-gap: <?php echo intval( $row_gap_tab ); ?>px;
			column-gap: <?php echo intval( $col_gap_tab ); ?>px;
		<?php endif; ?>
	}
}

@media (max-width: 767px) {
	#<?php echo esc_html( $unique_id ); ?> {
		padding-top: <?php echo intval( $padding_top_mob ); ?>px;
		padding-bottom: <?php echo intval( $padding_bottom_mob ); ?>px;
		padding-left: <?php echo intval( $padding_left_mob ); ?>px;
		padding-right: <?php echo intval( $padding_right_mob ); ?>px;
		margin-top: <?php echo intval( $margin_top_mob ); ?>px;
		margin-bottom: <?php echo intval( $margin_bottom_mob ); ?>px;
		<?php if ( $content_width === 'custom' ) : ?>
			max-width: <?php echo esc_html( $max_width_mobile ); ?>;
		<?php endif; ?>
		<?php if ( $height_type === 'custom' || $height_type === 'min' ) : ?>
			<?php echo 'min' === $height_type ? 'min-height' : 'height'; ?>: <?php echo esc_html( $height_mobile ); ?>;
		<?php endif; ?>
	}
	#<?php echo esc_html( $unique_id ); ?> > .gk-container-content {
		<?php if ( $layout_type === 'flex' ) : ?>
			flex-direction: <?php echo esc_html( $flex_direction_mob ); ?>;
			justify-content: <?php echo esc_html( $justify_content_mob ); ?>;
			align-items: <?php echo esc_html( $align_items_mob ); ?>;
			gap: <?php echo intval( $gap_mob ); ?>px;
		<?php elseif ( $layout_type === 'grid' ) : ?>
			<?php if ( empty( $grid_areas ) && ! $grid_auto_fit && ! $grid_auto_fill ) : ?>
				<?php if ( ! empty( $grid_template_cols_mob ) ) : ?>
					grid-template-columns: <?php echo esc_html( $grid_template_cols_mob ); ?>;
				<?php else : ?>
					grid-template-columns: repeat(<?php echo intval( $grid_cols_mob ); ?>, 1fr);
				<?php endif; ?>
				grid-template-rows: repeat(<?php echo intval( $grid_rows_mob ); ?>, auto);
			<?php endif; ?>
			row-gap: <?php echo intval( $row_gap_mob ); ?>px;
			column-gap: <?php echo intval( $col_gap_mob ); ?>px;
		<?php endif; ?>
	}
}

<?php if ( ! empty( $custom_css ) ) : ?>
	<?php echo wp_strip_all_tags( $custom_css ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Inside <style>: all tags are stripped; esc_html() would break CSS selectors such as ">". ?>
<?php endif; ?>
</style>

<<?php echo tag_escape( $html_tag ); ?> <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> <?php echo $html_id ? 'id="' . esc_attr( $html_id ) . '"' : ''; ?>>
	
	<?php /* 6. Background Video support */ ?>
	<?php if ( $bg_type === 'video' && ! empty( $bg_video ) ) : ?>
		<video class="gk-container-video" autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; pointer-events: none;">
			<source src="<?php echo esc_url( $bg_video ); ?>" type="video/mp4">
		</video>
	<?php endif; ?>

	<?php /* Background Overlay support */ ?>
	<?php if ( ( $bg_type === 'image' || $bg_type === 'video' ) && ( ! empty( $overlay_color ) || ! empty( $overlay_gradient ) ) ) : ?>
		<div
			class="gk-container-overlay"
			style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: <?php echo $overlay_type === 'gradient' ? esc_attr( $overlay_gradient ) : esc_attr( $overlay_color ); ?>; opacity: <?php echo esc_attr( $overlay_opacity / 100 ); ?>; z-index: 1; pointer-events: none;"
		></div>
	<?php endif; ?>

	<?php /* 9. Shape Divider Top */ ?>
	<?php if ( $shape_top_type !== 'none' ) : ?>
		<div
			class="gk-shape-divider gk-shape-divider--top <?php echo $shape_top_flip ? 'gk-shape-divider--flip' : ''; ?>"
			style="height: <?php echo intval( $shape_top_height ); ?>px; fill: <?php echo esc_attr( $shape_top_color ); ?>; z-index: 2;"
		>
			<svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="width: <?php echo intval( $shape_top_width ); ?>%;">
				<?php if ( $shape_top_type === 'curve' ) : ?>
					<path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
				<?php elseif ( $shape_top_type === 'wave' ) : ?>
					<path d="M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1200,90 1200,90 L1200,120 L0,120 Z"></path>
				<?php elseif ( $shape_top_type === 'triangle' ) : ?>
					<path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z"></path>
				<?php elseif ( $shape_top_type === 'tilt' ) : ?>
					<path d="M0,0 L1200,100 L1200,120 L0,120 Z"></path>
				<?php elseif ( $shape_top_type === 'zigzag' ) : ?>
					<path d="M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z"></path>
				<?php endif; ?>
			</svg>
		</div>
	<?php endif; ?>

	<?php /* 12. Clickable Container URL */ ?>
	<?php if ( ! empty( $container_link ) ) : ?>
		<a href="<?php echo esc_url( $container_link ); ?>" class="gk-container-link-overlay" aria-label="Container Link" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 10; cursor: pointer; text-decoration: none;"></a>
	<?php endif; ?>

	<div class="gk-container-content">
		<?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>

	<?php /* 9. Shape Divider Bottom */ ?>
	<?php if ( $shape_bottom_type !== 'none' ) : ?>
		<div
			class="gk-shape-divider gk-shape-divider--bottom <?php echo $shape_bottom_flip ? 'gk-shape-divider--flip' : ''; ?>"
			style="height: <?php echo intval( $shape_bottom_height ); ?>px; fill: <?php echo esc_attr( $shape_bottom_color ); ?>; z-index: 2;"
		>
			<svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="width: <?php echo intval( $shape_bottom_width ); ?>%;">
				<?php if ( $shape_bottom_type === 'curve' ) : ?>
					<path d="M0,120 C300,30 900,30 1200,120 L1200,0 L0,0 Z"></path>
				<?php elseif ( $shape_bottom_type === 'wave' ) : ?>
					<path d="M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60 C1150,10 1200,30 1200,30 L1200,0 L0,0 Z"></path>
				<?php elseif ( $shape_bottom_type === 'triangle' ) : ?>
					<path d="M0,120 L600,20 L1200,120 L1200,0 L0,0 Z"></path>
				<?php elseif ( $shape_bottom_type === 'tilt' ) : ?>
					<path d="M0,120 L1200,20 L1200,0 L0,0 Z"></path>
				<?php elseif ( $shape_bottom_type === 'zigzag' ) : ?>
					<path d="M0,120 L100,60 L200,120 L300,60 L400,120 L500,60 L600,120 L700,60 L800,120 L900,60 L1000,120 L1100,60 L1200,120 L1200,0 L0,0 Z"></path>
				<?php endif; ?>
			</svg>
		</div>
	<?php endif; ?>

</<?php echo tag_escape( $html_tag ); ?>>
