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
				plugins_url( '../assets/js/components/build/spx.esm.js', dirname( __FILE__ ) ),
				array(),
				filemtime( SPX_DIR . '/assets/js/components/build/spx.esm.js' ),
				FALSE );

			wp_enqueue_script(
				'spx-nomodule',
				plugins_url( '../assets/js/components/build/spx.js', dirname( __FILE__ ) ),
				array(),
				filemtime( SPX_DIR . '/assets/js/components/build/spx.js' ),
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
				$tag = '<script type="module" id="spx-js-nomodule" src="' . $source . '"></script>';
			}

			if ( 'spx-nomodule' === $handle ) {
				$tag = '<script type="nomodule" id="spx-js-module" src="' . $source . '"></script>';
			}

			return $tag;
		}, 10, 3 );

	}

	/**
	 * Initialise CSS without theme.
	 *
	 * @since 2.04
	 */

	public static function css() {

		add_action( 'wp_head', function () {

			echo '
				<style id="spx-css">
				' . file_get_contents( SPX_DIR . '/assets/css/spx.css' ) . '
				</style>';

		} );

		add_action( 'wp_footer', function () {

			echo '
				<script 
				id="spx-footer">
				' . file_get_contents( SPX_DIR . '/assets/js/footer.js' ) . '
				</script>';

		} );

	}

	/**
	 * Initialise theme.
	 *
	 * @param $name
	 *
	 * @since 2.0
	 */

	public static function theme( $name ) {

		add_action( 'wp_head', function () use ( &$name ) {

			echo '
				<style id="spx-style">
				' . file_get_contents( SPX_DIR . '/assets/css/spx.css' ) . '
				</style>';

			echo '
				<style id="spx-theme-' . $name . '">
				' . file_get_contents( SPX_DIR . '/assets/css/themes/' . $name . '.css' ) . '
				</style>';

		} );

		add_action( 'wp_footer', function () {

			echo '
				<script 
				id="spx-footer">
				' . file_get_contents( SPX_DIR . '/assets/js/footer.js' ) . '
				</script>';

		} );

	}

}

