<?php
/**
 * Plugin Name:       Zentro Blocks
 * Description:       Ready-made block patterns and page templates for agency, real estate, clinic and small business websites – built with native blocks, plus tabs, accordion, pricing and other focused blocks.
 * Version:           1.1.0
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Author:            WPBrand Digital
 * Author URI:        https://wpbranddigital.org
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       zentro-blocks
 *
 * phpcs:disable WordPress.WP.I18n.TextDomainMismatch
 *
 * @package ZentroBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * Another copy of Zentro Blocks is already loaded – usually an older version
 * uploaded into a differently named folder (e.g. "zentro-blocks-1.1.0").
 *
 * All functions live in includes/plugin.php, so stopping here can never cause
 * a "Cannot redeclare" fatal error. If this copy is the one being activated,
 * the other copies are deactivated so only one version stays active.
 */
if ( defined( 'ZENTRO_BLOCKS_FILE' ) || function_exists( 'zentro_blocks_register_blocks' ) ) {
	register_activation_hook(
		__FILE__,
		static function () {
			$self   = plugin_basename( __FILE__ );
			$others = array();
			foreach ( (array) get_option( 'active_plugins', array() ) as $plugin ) {
				if ( $plugin !== $self && 'zentro-blocks.php' === basename( $plugin ) ) {
					$others[] = $plugin;
				}
			}
			if ( $others ) {
				deactivate_plugins( $others, true );
			}
		}
	);

	add_action(
		'admin_notices',
		static function () {
			if ( ! current_user_can( 'activate_plugins' ) ) {
				return;
			}
			echo '<div class="notice notice-warning"><p>' . esc_html__( 'Two copies of Zentro Blocks are installed. Only one is running. Please deactivate and delete the older copy on the Plugins screen.', 'zentro-blocks' ) . '</p></div>';
		}
	);
	return;
}

define( 'ZENTRO_BLOCKS_VERSION', '1.1.0' );
define( 'ZENTRO_BLOCKS_FILE', __FILE__ );
define( 'ZENTRO_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );
define( 'ZENTRO_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

require_once ZENTRO_BLOCKS_DIR . 'includes/plugin.php';
