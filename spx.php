<?php

/**
 * Plugin Name: spx
 * Plugin URI: https://spx.dev
 * Description: An ever growing collection of flexible web components to supercharge your workflow.
 * Author: Dennis Josek
 * Version: 2.10
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

define( 'SPX', __FILE__ );
define( 'SPX_DIR', __DIR__ );
define( 'SPX_STORE_URL', 'http://spx.dev' );
define( 'SPX_ITEM_ID', 75 );
define( 'SPX_ITEM_NAME', 'spx' );
define( 'SPX_LICENSE_PAGE', 'spx-license' );

use spx\init;

/**
 * Exit if accessed directly.
 *
 * @since 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Require files.
 *
 * @since 1.0
 */

require_once plugin_dir_path( __FILE__ ) . 'includes/classes/init.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/build.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/prepare.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/get.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/classes/set.php';

require_once plugin_dir_path( __FILE__ ) . 'includes/functions/edit-ajax-handler.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/functions/get.php';

if ( class_exists( 'OxyEl' ) ) {

	require_once plugin_dir_path( __FILE__ ) . 'includes/oxygen/spx-oxygen.php';
	require_once plugin_dir_path( __FILE__ ) . 'includes/oxygen/element.php';

}

include plugin_dir_path( __FILE__ ) . 'includes/admin/spx-updater.php';

/**
 * Init spx.
 *
 * @since 1.0
 */

new init();