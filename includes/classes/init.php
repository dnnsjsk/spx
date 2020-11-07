<?php

/**
 * Init class.
 *
 * @since 1.0
 */

namespace spx;

class Init {

	public function script() {

		global $post;

		$localizeArray = array(
			'ajax'   => admin_url( 'admin-ajax.php' ),
			'postId' => $post->ID,
		);

		wp_enqueue_script(
			'spx',
			plugins_url( '../assets/js/components/build/spx.esm.js', dirname( __FILE__ ) ),
			array(),
			filemtime( SPX_DIR . '/assets/js/components/build/spx.esm.js' ),
			FALSE );

		wp_localize_script( 'spx', 'spx', $localizeArray );

	}

	/**
	 * Enqueue scripts.
	 *
	 * @since 1.0
	 */

	private function enqueueScripts() {

		add_action( 'wp_enqueue_scripts', array( $this, 'script' ) );
		add_action( 'enqueue_block_editor_assets', array( &$this, 'script' ) );
	}

	/**
	 * Add correct script tags.
	 *
	 * @since 1.0
	 */

	public function addScriptTags() {

		add_filter( 'script_loader_tag', function ( $tag, $handle, $source ) {

			if ( 'spx' === $handle ) {
				$tag = '<script type="module" id="spx-js" src="' . $source . '"></script>';
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

	}

	/**
	 * Construct.
	 *
	 * @since 2.05
	 */

	public function __construct() {
		self::enqueueScripts();
		self::addScriptTags();
	}

}

