<?php

/**
 * Plugin Name: spx
 * Plugin URI: https://spx.dev
 * Description: The web component based page-builder for developers.
 * Author: Harmoni
 * Version: 1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

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

require_once plugin_dir_path( __FILE__ ) . 'php/classes/init.php';
require_once plugin_dir_path( __FILE__ ) . 'php/classes/build.php';
require_once plugin_dir_path( __FILE__ ) . 'php/classes/prepare.php';
require_once plugin_dir_path( __FILE__ ) . 'php/classes/get.php';

require_once plugin_dir_path( __FILE__ ) . 'php/functions/edit-ajax-handler.php';
require_once plugin_dir_path( __FILE__ ) . 'php/functions/get.php';

/**
 * Init spx.
 *
 * @since 1.0
 */

init::enqueueScripts();
init::addScriptTags();
