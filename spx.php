<?php

/**
 * Plugin Name: spx
 * Plugin URI: https://spx.dev
 * Description: A web component page builder for WordPress developers like you!
 * Author: Harmoni
 * Version: 1.07
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

define( 'SPX', __FILE__ );
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

require_once plugin_dir_path( __FILE__ ) . 'includes/functions/edit-ajax-handler.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/functions/get.php';

include plugin_dir_path( __FILE__ ) . 'includes/admin/spx-updater.php';

/**
 * Init spx.
 *
 * @since 1.0
 */

init::enqueueScripts();
init::addScriptTags();
