<?php
/**
 * Zentro Blocks Admin Dashboard template.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Handle Form Submissions
$settings_saved = false;
if ( isset( $_POST['zentro_blocks_save_settings'] ) && current_user_can( 'manage_options' ) && check_admin_referer( 'zentro_blocks_dashboard_action', 'zentro_blocks_nonce' ) ) {
	// 1. Process Active Blocks (only the keys are used, checked against a whitelist below).
	$posted_blocks = isset( $_POST['active_blocks'] ) && is_array( $_POST['active_blocks'] )
		? array_map( 'sanitize_text_field', wp_unslash( $_POST['active_blocks'] ) )
		: array();
	$active_blocks = array();
	
	// Valid blocks list
	$valid_blocks = array(
		'tabs-block',
		'popup-block',
		'animated-counter',
		'cta-banner-block',
		'accordion-block',
		'pricing-card-block',
		'container-block',
		'progress-tracker',
		'image-hotspot',
		'advanced-map-block',
		'timeline-roadmap',
		'image-comparison',
		'testimonials-carousel',
		'button-block',
		'box-card-block',
		'image-gallery-block',
		'team-member-block',
	);

	foreach ( $valid_blocks as $b ) {
		$active_blocks[ $b ] = isset( $posted_blocks[ $b ] ) ? true : false;
	}

	update_option( 'zentro_blocks_active_blocks', $active_blocks );

	// 2. Process Global Settings
	$global_settings = array(
		'primaryColor' => sanitize_hex_color( wp_unslash( $_POST['global_settings']['primaryColor'] ?? '#0073aa' ) ),
		'fontFamily'   => sanitize_text_field( wp_unslash( $_POST['global_settings']['fontFamily'] ?? 'inherit' ) ),
		'fontSize'     => absint( wp_unslash( $_POST['global_settings']['fontSize'] ?? 16 ) ),
	);

	update_option( 'zentro_blocks_global_settings', $global_settings );

	$settings_saved = true;
}

// Retrieve current options
$active_blocks = get_option( 'zentro_blocks_active_blocks', array() );
$global_settings = get_option(
	'zentro_blocks_global_settings',
	array(
		'primaryColor' => '#0073aa',
		'fontFamily'   => 'inherit',
		'fontSize'     => 16,
	)
);

// All blocks information list
$blocks_data = array(
	'tabs-block' => array(
		'title' => 'Tabs Block',
		'badge' => 'Standard',
		'desc'  => 'Switchable tab panels with ARIA keyboard navigation.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM3 9h18M9 3v6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'popup-block' => array(
		'title' => 'Popup Block',
		'badge' => 'Standard',
		'desc'  => 'Modal dialog with focus trap and overlay click closing.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'animated-counter' => array(
		'title' => 'Animated Counter',
		'badge' => 'Standard',
		'desc'  => 'Count-up statistics animation when scrolled into view.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'cta-banner-block' => array(
		'title' => 'CTA Banner',
		'badge' => 'Standard',
		'desc'  => 'Highly customizable Call-To-Action layouts.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'accordion-block' => array(
		'title' => 'Accordion Block',
		'badge' => 'Standard',
		'desc'  => 'Smooth collapsing FAQ panels with ARIA accessibility.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'pricing-card-block' => array(
		'title' => 'Pricing Card',
		'badge' => 'Premium',
		'desc'  => 'High-converting pricing tables with feature badges.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 8v8M8 12h8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'container-block' => array(
		'title' => 'Container Block',
		'badge' => 'Standard',
		'desc'  => 'Section layouts wrapper supporting custom shapes and shapes dividers.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"/><path d="M8 8h8v8H8z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'progress-tracker' => array(
		'title' => 'Progress Tracker',
		'badge' => 'Premium',
		'desc'  => 'Dynamic circular/horizontal progress tracking layouts.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'image-hotspot' => array(
		'title' => 'Image Hotspot',
		'badge' => 'Premium',
		'desc'  => 'Interactive coordinate pins on images with custom tooltips.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'advanced-map-block' => array(
		'title' => 'Advanced Map',
		'badge' => 'Premium',
		'desc'  => 'Premium maps embedding OpenStreetMap and viewport lazy-loading.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" fill="currentColor"/></svg>',
	),
	'timeline-roadmap' => array(
		'title' => 'Timeline & Roadmap',
		'badge' => 'Premium',
		'desc'  => 'Beautiful milestone and vertical/horizontal roads layout tracker.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H7M17 11H7M17 17H7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'image-comparison' => array(
		'title' => 'Image Comparison',
		'badge' => 'Premium',
		'desc'  => 'Draggable comparison slider comparing before and after images.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M5 5h14M5 19h14M2 12h20" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'testimonials-carousel' => array(
		'title' => 'Testimonials Carousel',
		'badge' => 'Premium',
		'desc'  => 'Interactive client testimonial slide review card with ratings.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'button-block' => array(
		'title' => 'Interactive Button',
		'badge' => 'Premium',
		'desc'  => 'Highly animated call-to-action button with hover shimmer shine.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10 12h4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	'box-card-block' => array(
		'title' => 'Box Card',
		'badge' => 'Premium',
		'desc'  => 'Grid features card container blocks with float and glow hovers.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
	),
	'image-gallery-block' => array(
		'title' => 'Image Gallery',
		'badge' => 'Standard',
		'desc'  => 'A responsive, modern image gallery block.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
	),
	'team-member-block' => array(
		'title' => 'Team Member',
		'badge' => 'Standard',
		'desc'  => 'Professional, responsive team member profile card.',
		'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21v-2a6.5 6.5 0 0113 0v2"/></svg>',
	),
);

// Diagnose server data
global $wp_version;
$php_version = phpversion();
$memory_limit = ini_get( 'memory_limit' );
$upload_max = ini_get( 'upload_max_filesize' );
$active_theme = wp_get_theme()->get( 'Name' );
?>

<div class="gk-admin-dashboard">
	<?php if ( $settings_saved ) : ?>
		<div class="notice notice-success is-dismissible" style="margin: 0 0 20px 0;"><p><?php esc_html_e( 'Settings saved successfully!', 'zentro-blocks' ); ?></p></div>
	<?php endif; ?>

	<!-- Header Banner -->
	<header class="gk-admin-header">
		<div class="gk-admin-header__content">
			<span class="gk-admin-header__tagline">Premium Blocks for WordPress</span>
			<h2>Zentro Blocks</h2>
			<p class="gk-admin-header__desc">Configure included blocks and shared typography global settings.</p>
		</div>
		<div class="gk-admin-header__status">
			Online
		</div>
	</header>

	<form method="post" action="">
		<?php wp_nonce_field( 'zentro_blocks_dashboard_action', 'zentro_blocks_nonce' ); ?>

		<!-- Tab Buttons -->
		<nav class="gk-admin-nav">
			<button type="button" class="gk-admin-tab-btn is-active" data-tab="overview">Overview</button>
			<button type="button" class="gk-admin-tab-btn" data-tab="suite">My Suite</button>
			<button type="button" class="gk-admin-tab-btn" data-tab="settings">Global Settings</button>
			<button type="button" class="gk-admin-tab-btn" data-tab="sysinfo">System Info</button>
		</nav>

		<!-- Tab Panels -->
		<div class="gk-admin-tab-content">
			
			<!-- Tab 1: Overview -->
			<section class="gk-admin-tab-panel is-active" id="panel-overview">
				<div class="gk-admin-content-card">
					<div class="gk-overview-grid">
						<div>
							<h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 600; margin: 0 0 16px 0 !important; color: #0f172a !important;">Welcome to Zentro Blocks!</h3>
							<p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 20px 0 !important;">
								Zentro Blocks delivers a suite of 17 premium Gutenberg blocks built for optimal speeds, elegant responsive adjustments, and beautiful micro-animations. Customize your branding colors, typography fonts, and active blocks list using this dashboard to speed up your page loading.
							</p>
							
							<div class="gk-overview-instruction">
								<h4>How to Use:</h4>
								<ul class="gk-step-list">
									<li class="gk-step-item">
										<div class="gk-step-number">1</div>
										<div class="gk-step-text">
											<h5>Create or Edit a Page</h5>
											<p>Navigate to WordPress Pages -> Add New to open the block editor canvas.</p>
										</div>
									</li>
									<li class="gk-step-item">
										<div class="gk-step-number">2</div>
										<div class="gk-step-text">
											<h5>Add Zentro Blocks</h5>
											<p>Click the "+" icon in the top left editor menu and type <strong>"Zentro"</strong> in search or find them under the Zentro Blocks category.</p>
										</div>
									</li>
									<li class="gk-step-item">
										<div class="gk-step-number">3</div>
										<div class="gk-step-text">
											<h5>Configure Options & Save</h5>
											<p>Adjust visual sizes, border outlines, colors, and animations inside the right-hand Inspector Options sidebar.</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						
						<!-- Block list summaries -->
						<div style="border-left: 1px solid #e2e8f0; padding-left: 30px;">
							<h4 style="font-size: 15px; font-weight: 600; margin: 0 0 16px 0 !important; color: #0f172a !important;">Suite Statistics:</h4>
							<table class="gk-sysinfo-table">
								<tr>
									<td class="gk-sys-key" style="width: 180px; padding: 10px 0;">Total Blocks Included:</td>
									<td class="gk-sys-val" style="padding: 10px 0; font-weight: 600; color: #2563eb;">17 Blocks</td>
								</tr>
								<tr>
									<td class="gk-sys-key" style="width: 180px; padding: 10px 0;">Performance Mode:</td>
									<td class="gk-sys-val" style="padding: 10px 0; font-weight: 600; color: #10b981;">Highly Optimized</td>
								</tr>
								<tr>
									<td class="gk-sys-key" style="width: 180px; padding: 10px 0;">Typography Engines:</td>
									<td class="gk-sys-val" style="padding: 10px 0;">Dynamic Google Fonts</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</section>

			<!-- Tab 2: My Suite -->
			<section class="gk-admin-tab-panel" id="panel-suite">
				<div class="gk-admin-content-card">
					<div class="gk-admin-section-header">
						<div>
							<h3>My Suite</h3>
							<p>Select which premium Gutenberg blocks you want to enable/disable for your editor.</p>
						</div>
						<input type="submit" name="zentro_blocks_save_settings" class="gk-admin-btn-save" value="Save Changes" />
					</div>
					
					<div class="gk-suite-grid">
						<?php foreach ( $blocks_data as $key => $data ) : 
							$is_checked = ! isset( $active_blocks[ $key ] ) || $active_blocks[ $key ];
						?>
							<div class="gk-suite-card <?php echo $is_checked ? '' : 'is-disabled'; ?>">
								<div class="gk-suite-card__image-mock">
									<div class="gk-suite-card__icon-svg">
										<?php echo wp_kses( $data['icon'], zentro_blocks_svg_allowed_html() ); ?>
									</div>
								</div>
								<div class="gk-suite-card__content">
									<div class="gk-suite-card__header">
										<h4 class="gk-suite-card__title"><?php echo esc_html( $data['title'] ); ?></h4>
										<span class="gk-suite-card__badge gk-suite-card__badge--<?php echo esc_attr( strtolower( $data['badge'] ) ); ?>">
											<?php echo esc_html( $data['badge'] ); ?>
										</span>
									</div>
									<p class="gk-suite-card__desc"><?php echo esc_html( $data['desc'] ); ?></p>
									<div class="gk-suite-card__footer">
										<span class="gk-suite-card__status">
											<?php echo $is_checked ? 'Enabled' : 'Disabled'; ?>
										</span>
										<label class="gk-switch">
											<input type="checkbox" name="active_blocks[<?php echo esc_attr( $key ); ?>]" value="1" class="gk-block-toggle-checkbox" <?php checked( $is_checked ); ?> />
											<span class="gk-switch-slider"></span>
										</label>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</section>

			<!-- Tab 3: Global Settings -->
			<section class="gk-admin-tab-panel" id="panel-settings">
				<div class="gk-admin-content-card">
					<div class="gk-admin-section-header">
						<div>
							<h3>Global Settings</h3>
							<p>Fine-tune primary color tokens and shared font typography variables.</p>
						</div>
						<input type="submit" name="zentro_blocks_save_settings" class="gk-admin-btn-save" value="Save Settings" />
					</div>

					<div class="gk-settings-grid">
						<!-- Brand color settings -->
						<div class="gk-settings-card">
							<h4>Visual Tokens</h4>
							<div class="gk-settings-group">
								<label>Accent Brand Color</label>
								<div class="gk-color-picker-wrap">
									<input type="color" name="global_settings[primaryColor]" id="gk-settings-color-input" value="<?php echo esc_attr( $global_settings['primaryColor'] ); ?>" />
									<input type="text" id="gk-settings-color-text" value="<?php echo esc_attr( $global_settings['primaryColor'] ); ?>" style="width: 140px;" readonly />
								</div>
								<p style="font-size: 11px; color: #64748b; margin: 8px 0 0 0;">This defines the base primary color used for star ratings, navigation dots, and highlights.</p>
							</div>

							<div class="gk-settings-group">
								<label>Accent Design Preview</label>
								<button type="button" class="gk-settings-preview-btn" id="gk-settings-preview-node" style="--gk-preview-bg: <?php echo esc_attr( $global_settings['primaryColor'] ); ?>;">
									Primary Button Preview
								</button>
							</div>
						</div>

						<!-- Font typography settings -->
						<div class="gk-settings-card">
							<h4>Shared Typography</h4>
							<div class="gk-settings-group">
								<label>Global Font Family</label>
								<select name="global_settings[fontFamily]">
									<option value="inherit" <?php selected( $global_settings['fontFamily'], 'inherit' ); ?>>Default / Theme Inherit</option>
									<option value="'Outfit', sans-serif" <?php selected( $global_settings['fontFamily'], "'Outfit', sans-serif" ); ?>>Outfit (Modern/Clean)</option>
									<option value="'Inter', sans-serif" <?php selected( $global_settings['fontFamily'], "'Inter', sans-serif" ); ?>>Inter (Professional/Sleek)</option>
									<option value="'Poppins', sans-serif" <?php selected( $global_settings['fontFamily'], "'Poppins', sans-serif" ); ?>>Poppins (Geometric/Friendly)</option>
									<option value="'Montserrat', sans-serif" <?php selected( $global_settings['fontFamily'], "'Montserrat', sans-serif" ); ?>>Montserrat (Bold/Clean)</option>
									<option value="'Roboto', sans-serif" <?php selected( $global_settings['fontFamily'], "'Roboto', sans-serif" ); ?>>Roboto (Standard/Functional)</option>
								</select>
							</div>

							<div class="gk-settings-group">
								<label>Global Base Font Size</label>
								<div class="gk-slider-wrap">
									<input type="range" name="global_settings[fontSize]" min="14" max="22" value="<?php echo intval( $global_settings['fontSize'] ); ?>" id="gk-settings-fontsize-slider" />
									<span class="gk-value-box" id="gk-settings-fontsize-value"><?php echo intval( $global_settings['fontSize'] ); ?>px</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Tab 4: System Info -->
			<section class="gk-admin-tab-panel" id="panel-sysinfo">
				<div class="gk-admin-content-card">
					<div class="gk-admin-section-header" style="margin-bottom: 20px;">
						<div>
							<h3>System Info</h3>
							<p>Diagnostics properties representing environment and hosting configuration variables.</p>
						</div>
					</div>

					<table class="gk-sysinfo-table">
						<tr>
							<td class="gk-sys-key">WordPress Version:</td>
							<td class="gk-sys-val"><?php echo esc_html( $wp_version ); ?></td>
						</tr>
						<tr>
							<td class="gk-sys-key">Active Theme:</td>
							<td class="gk-sys-val"><?php echo esc_html( $active_theme ); ?></td>
						</tr>
						<tr>
							<td class="gk-sys-key">PHP Version:</td>
							<td class="gk-sys-val"><?php echo esc_html( $php_version ); ?></td>
						</tr>
						<tr>
							<td class="gk-sys-key">Memory Limit:</td>
							<td class="gk-sys-val"><?php echo esc_html( $memory_limit ); ?></td>
						</tr>
						<tr>
							<td class="gk-sys-key">Upload Max Filesize:</td>
							<td class="gk-sys-val"><?php echo esc_html( $upload_max ); ?></td>
						</tr>
						<tr>
							<td class="gk-sys-key">Active Plugins:</td>
							<td class="gk-sys-val">
								<?php
								$plugins = get_option( 'active_plugins' );
								$list = array();
								foreach ( $plugins as $p ) {
									$data = get_plugin_data( WP_PLUGIN_DIR . '/' . $p );
									$list[] = $data['Name'] . ' (' . $data['Version'] . ')';
								}
								echo esc_html( implode( ', ', $list ) );
								?>
							</td>
						</tr>
					</table>
				</div>
			</section>

		</div>
	</form>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
	// 1. Tab Switching Logic
	const tabButtons = document.querySelectorAll('.gk-admin-tab-btn');
	const tabPanels = document.querySelectorAll('.gk-admin-tab-panel');

	tabButtons.forEach(btn => {
		btn.addEventListener('click', function() {
			const targetTab = this.getAttribute('data-tab');

			// Update active tab buttons
			tabButtons.forEach(b => b.classList.remove('is-active'));
			this.classList.add('is-active');

			// Update active panels
			tabPanels.forEach(panel => {
				panel.classList.remove('is-active');
				if (panel.id === `panel-${targetTab}`) {
					panel.classList.add('is-active');
				}
			});
		});
	});

	// 2. iOS Toggle Style Update
	const toggles = document.querySelectorAll('.gk-block-toggle-checkbox');
	toggles.forEach(toggle => {
		toggle.addEventListener('change', function() {
			const card = this.closest('.gk-suite-card');
			const label = card.querySelector('.gk-suite-card__status');
			if (this.checked) {
				card.classList.remove('is-disabled');
				label.textContent = 'Enabled';
			} else {
				card.classList.add('is-disabled');
				label.textContent = 'Disabled';
			}
		});
	});

	// 3. Live Color Picker Preview
	const colorInput = document.getElementById('gk-settings-color-input');
	const colorText = document.getElementById('gk-settings-color-text');
	const previewNode = document.getElementById('gk-settings-preview-node');

	if (colorInput && colorText && previewNode) {
		colorInput.addEventListener('input', function() {
			const val = this.value;
			colorText.value = val;
			previewNode.style.setProperty('--gk-preview-bg', val);
		});
	}

	// 4. Font Size Range Slider
	const fontSizeSlider = document.getElementById('gk-settings-fontsize-slider');
	const fontSizeValue = document.getElementById('gk-settings-fontsize-value');

	if (fontSizeSlider && fontSizeValue) {
		fontSizeSlider.addEventListener('input', function() {
			fontSizeValue.textContent = `${this.value}px`;
		});
	}
});
</script>
