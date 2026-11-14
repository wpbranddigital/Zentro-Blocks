<?php
/**
 * Testimonials Carousel - Frontend render template.
 *
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$testimonials   = $attributes['testimonials'] ?? [];
$autoplay       = ! empty( $attributes['autoplay'] ) ? 'true' : 'false';
$autoplay_speed = intval( $attributes['autoplaySpeed'] ?? 4000 );
$show_ratings   = ! empty( $attributes['showRatings'] );
$primary_color  = esc_attr( $attributes['primaryColor'] ?? '#0073aa' );
$text_color     = esc_attr( $attributes['textColor'] ?? '#333333' );
$card_bg_color  = esc_attr( $attributes['cardBgColor'] ?? '#ffffff' );
$block_id       = 'gk-tc-' . wp_unique_id();

if ( empty( $testimonials ) ) {
	return;
}
?>

<div
	<?php
	echo wp_kses_data(
		get_block_wrapper_attributes(
		[
			'class' => 'gk-testimonials-carousel-wrapper',
			'id'    => esc_attr( $block_id ),
			'style' => esc_attr(
				"--gk-primary-color: {$primary_color};" .
				"--gk-text-color: {$text_color};" .
				"--gk-card-bg-color: {$card_bg_color};"
			),
		]
		)
	);
	?>
	data-autoplay="<?php echo esc_attr( $autoplay ); ?>"
	data-autoplay-speed="<?php echo esc_attr( $autoplay_speed ); ?>"
>
	<div class="gk-testimonials-carousel">
		<div class="gk-testimonials-carousel__track">
			<?php foreach ( $testimonials as $index => $item ) : ?>
				<?php
				$name     = $item['name'] ?? '';
				$role     = $item['role'] ?? '';
				$feedback = $item['feedback'] ?? '';
				$rating   = intval( $item['rating'] ?? 5 );
				$avatar   = $item['avatar'] ?? '';
				?>
				<div class="gk-testimonials-carousel__card" data-index="<?php echo intval( $index ); ?>">
					
					<!-- Rating Stars -->
					<?php if ( $show_ratings ) : ?>
						<div class="gk-testimonials-carousel__ratings">
							<?php for ( $i = 1; $i <= 5; $i++ ) : ?>
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="<?php echo $i <= $rating ? 'var(--gk-primary-color)' : 'none'; ?>"
									stroke="var(--gk-primary-color)"
									stroke-width="2"
									style="margin-right: 2px;"
								>
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
							<?php endfor; ?>
						</div>
					<?php endif; ?>

					<!-- Feedback Quote -->
					<div class="gk-testimonials-carousel__quote-icon">“</div>
					<blockquote class="gk-testimonials-carousel__feedback">
						<p><?php echo wp_kses_post( $feedback ); ?></p>
					</blockquote>

					<!-- User Info -->
					<div class="gk-testimonials-carousel__user">
						<div class="gk-testimonials-carousel__avatar-wrap">
							<?php if ( $avatar ) : ?>
								<img src="<?php echo esc_url( $avatar ); ?>" class="gk-testimonials-carousel__avatar" alt="<?php echo esc_attr( $name ); ?>" />
							<?php else : ?>
								<div class="gk-testimonials-carousel__avatar gk-testimonials-carousel__avatar--empty"></div>
							<?php endif; ?>
						</div>
						<div class="gk-testimonials-carousel__meta">
							<cite class="gk-testimonials-carousel__name"><?php echo esc_html( $name ); ?></cite>
							<span class="gk-testimonials-carousel__role"><?php echo esc_html( $role ); ?></span>
						</div>
					</div>

				</div>
			<?php endforeach; ?>
		</div>
	</div>

	<!-- Navigation Controls -->
	<div class="gk-testimonials-carousel__nav">
		<button type="button" class="gk-testimonials-carousel__prev" aria-label="Previous slide">&larr;</button>
		
		<!-- Dots Indicators -->
		<div class="gk-testimonials-carousel__dots">
			<?php foreach ( $testimonials as $index => $item ) : ?>
				<button
					type="button"
					class="gk-testimonials-carousel__dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
					data-slide="<?php echo intval( $index ); ?>"
					aria-label="<?php echo esc_attr( sprintf( __( 'Go to slide %d', 'zentro-blocks' ), $index + 1 ) ); ?>"
				></button>
			<?php endforeach; ?>
		</div>

		<button type="button" class="gk-testimonials-carousel__next" aria-label="Next slide">&rarr;</button>
	</div>
</div>
