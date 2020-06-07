<?php

/**
 * Init class.
 *
 * @since 1.0
 */

namespace spx;

class init {

	/**
	 * Enqueue scripts.
	 *
	 * @since 1.0
	 */

	public static function enqueueScripts() {

		add_action( 'wp_enqueue_scripts', function () {

			global $post;

			$localizeArray = array(
				'ajax'   => admin_url( 'admin-ajax.php' ),
				'postId' => $post->ID,
			);

			wp_enqueue_script(
				'spx-module',
				plugins_url( '../assets/js/build/spx.esm.js', dirname( __FILE__ ) ),
				array(),
				filemtime( SPX_DIR . '/assets/js/build/spx.esm.js' ),
				FALSE );

			wp_enqueue_script(
				'spx-nomodule',
				plugins_url( '../assets/js/build/spx.js', dirname( __FILE__ ) ),
				array(),
				filemtime( SPX_DIR . '/assets/js/build/spx.js' ),
				FALSE );

			wp_localize_script( 'spx-module', 'spx', $localizeArray );

			wp_localize_script( 'spx-nomodule', 'spx', $localizeArray );

		} );
	}

	/**
	 * Add correct script tags.
	 *
	 * @since 1.0
	 */

	public static function addScriptTags() {

		add_filter( 'script_loader_tag', function ( $tag, $handle, $source ) {

			if ( 'spx-module' === $handle ) {
				$tag = '<script type="module" src="' . $source . '"></script>';
			}

			if ( 'spx-nomodule' === $handle ) {
				$tag = '<script type="nomodule" src="' . $source . '"></script>';
			}

			return $tag;
		}, 10, 3 );

	}

}
