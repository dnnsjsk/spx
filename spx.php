<?php

/**
 * Plugin Name: spx
 * Plugin URI: https://spx.dev
 * Description: An ever growing collection of flexible web components to supercharge your workflow.
 * Author: Fabrikat
 * Version: 3.1.7
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

use spx\init;

define( 'SPX', __FILE__ );
define( 'SPX_DIR', __DIR__ );
define( 'SPX_STORE_URL', 'http://spx.dev' );
define( 'SPX_ITEM_ID', 75 );
define( 'SPX_ITEM_NAME', 'spx' );
define( 'SPX_LICENSE_PAGE', 'spx-license' );

/**
 * Exit if accessed directly.
 *
 * @date    15/07/2020
 * @since   1.0.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Require files.
 *
 * @date    15/07/2020
 * @since   1.0.0
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/build.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/prepare.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/get.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/set.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/init.php';

require_once plugin_dir_path( __FILE__ ) . 'includes/functions/edit-ajax-handler.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/functions/get.php';

if ( class_exists( 'OxyEl' ) ) {
	require_once plugin_dir_path( __FILE__ ) . 'includes/oxygen/element.php';
}

if ( ! class_exists( 'EDD_SL_Plugin_Updater' ) ) {
	include( plugin_dir_path( __FILE__ ) . 'includes/admin/edd-sl-updater.php' );
}

require_once plugin_dir_path( __FILE__ ) . 'includes/admin/spx-updater.php';

spxPlugin::init( 'spx_', SPX_ITEM_NAME, SPX_STORE_URL, SPX_ITEM_ID, SPX_LICENSE_PAGE, SPX );

/**
 * Init spx.
 *
 * @date    15/07/2020
 * @since   1.0.0
 */
new Init();