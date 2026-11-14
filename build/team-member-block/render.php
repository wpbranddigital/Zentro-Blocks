<?php
/**
 * Team Member Block - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$members         = $attributes['members'] ?? array();
$columns_desktop = intval( $attributes['columnsDesktop'] ?? 3 );
$columns_tablet  = intval( $attributes['columnsTablet'] ?? 2 );
$columns_mobile  = intval( $attributes['columnsMobile'] ?? 1 );
$gap             = intval( $attributes['gap'] ?? 30 );
$image_style     = esc_attr( $attributes['imageStyle'] ?? 'square' );
$alignment       = esc_attr( $attributes['alignment'] ?? 'center' );
$bg_color        = esc_attr( $attributes['bgColor'] ?? '#ffffff' );
$text_color      = esc_attr( $attributes['textColor'] ?? '#333333' );
$role_color      = esc_attr( $attributes['roleColor'] ?? '#0073aa' );

$wrapper_classes = "gk-team-member-grid gk-align-{$alignment}";

$styles = array(
	"--gk-tm-cols-desktop: {$columns_desktop};",
	"--gk-tm-cols-tablet: {$columns_tablet};",
	"--gk-tm-cols-mobile: {$columns_mobile};",
	"--gk-tm-gap: {$gap}px;",
);
$style_str = implode( ' ', $styles );

$card_styles = array(
	"--gk-tm-bg: {$bg_color};",
	"--gk-tm-text: {$text_color};",
	"--gk-tm-role: {$role_color};",
);
$card_style_str = implode( ' ', $card_styles );
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => $wrapper_classes, 'style' => $style_str ) ) ); ?>>
	<?php if ( ! empty( $members ) && is_array( $members ) ) : ?>
		<?php foreach ( $members as $member ) : 
			$image_url     = $member['imageUrl'] ?? '';
			$image_alt     = $member['imageAlt'] ?? '';
			$name          = $member['name'] ?? '';
			$role          = $member['role'] ?? '';
			$bio           = $member['bio'] ?? '';
			$facebook_url  = $member['facebookUrl'] ?? '';
			$twitter_url   = $member['twitterUrl'] ?? '';
			$linkedin_url  = $member['linkedinUrl'] ?? '';
			$email_address = sanitize_email( $member['emailAddress'] ?? '' );
			
			$has_socials = $facebook_url || $twitter_url || $linkedin_url || $email_address;
		?>
			<div class="gk-team-member-card" style="<?php echo esc_attr( $card_style_str ); ?>">
				
				<?php if ( $image_url ) : ?>
					<div class="gk-team-image gk-image-style-<?php echo esc_attr( $image_style ); ?>">
						<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" loading="lazy" />
					</div>
				<?php endif; ?>

				<div class="gk-team-content">
					<?php if ( $name ) : ?>
						<h3 class="gk-team-name"><?php echo wp_kses_post( $name ); ?></h3>
					<?php endif; ?>

					<?php if ( $role ) : ?>
						<p class="gk-team-role"><?php echo wp_kses_post( $role ); ?></p>
					<?php endif; ?>

					<?php if ( $bio ) : ?>
						<div class="gk-team-bio"><?php echo wp_kses_post( $bio ); ?></div>
					<?php endif; ?>

					<?php if ( $has_socials ) : ?>
						<div class="gk-team-socials">
							<?php if ( $facebook_url ) : ?>
								<a href="<?php echo esc_url( $facebook_url ); ?>" target="_blank" rel="noopener noreferrer" class="gk-social-icon" aria-label="Facebook">
									<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
								</a>
							<?php endif; ?>

							<?php if ( $twitter_url ) : ?>
								<a href="<?php echo esc_url( $twitter_url ); ?>" target="_blank" rel="noopener noreferrer" class="gk-social-icon" aria-label="Twitter">
									<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
								</a>
							<?php endif; ?>

							<?php if ( $linkedin_url ) : ?>
								<a href="<?php echo esc_url( $linkedin_url ); ?>" target="_blank" rel="noopener noreferrer" class="gk-social-icon" aria-label="LinkedIn">
									<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
								</a>
							<?php endif; ?>

							<?php if ( $email_address ) : ?>
								<a href="<?php echo esc_url( 'mailto:' . $email_address ); ?>" class="gk-social-icon" aria-label="Email">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
								</a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>
