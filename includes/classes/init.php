<?php

/**
 * Init class.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */

namespace spx;

class Init {

	public function script() {

		global $post;

		$localizeArray = [
			'ajax'   => admin_url( 'admin-ajax.php' ),
			'postId' => $post->ID,
		];

		wp_enqueue_script(
			'spx',
			plugins_url( '../assets/js/components/build/spx.esm.js', dirname( __FILE__ ) ),
			[],
			filemtime( SPX_DIR . '/assets/js/components/build/spx.esm.js' ),
			FALSE );

		wp_localize_script( 'spx', 'spx', $localizeArray );

	}

	/**
	 * Enqueue scripts.
	 *
	 * @date    28/07/2020
	 * @since   1.0.0
	 */

	private function enqueueScripts() {

		add_action( 'wp_enqueue_scripts', [ $this, 'script' ] );
		add_action( 'enqueue_block_editor_assets', [ &$this, 'script' ] );
	}

	/**
	 * Add correct script tags.
	 *
	 * @date    28/07/2020
	 * @since   1.0.0
	 */

	private function addScriptTags() {

		add_filter( 'script_loader_tag', function ( $tag, $handle, $source ) {

			if ( 'spx' === $handle ) {
				if ( defined( 'SHOW_CT_BUILDER' ) ) {
					$tag = '<script type="module" id="spx-js" src="' . $source . '"></script>';
				} else {
					$tag = '<script type="module" id="spx-js" data-src="' . $source . '"></script>';
				}
			}

			return $tag;
		}, 10, 3 );

	}

	/**
	 * Remove assets if no components are found.
	 *
	 * @date    24/03/2021
	 * @since   3.1.1
	 */

	private function lazyLoadAssets() {

		add_filter( 'wp_footer', function () {

			echo "<script id='spx-lazyload'>
			function getAllTagMatches(regEx) {
			  return Array.prototype.slice.call(document.body.querySelectorAll('*')).filter(function (el) { 
			    return el.tagName.match(regEx);
			  });
			}
			if (!document.body.classList.contains('oxygen-builder-body')) {
				 if (getAllTagMatches(/^spx/i).length === 0) {
				  document.querySelector('#spx-js').remove();
				  document.querySelector('#spx-js-extra').remove();
				  document.querySelector('#spx-css').remove();
				} else {
				  let src = document.querySelector('#spx-js').getAttribute('data-src');
				  document.querySelector('#spx-js').src = src
				}
			}
			document.querySelector('#spx-lazyload').remove();
			</script>";

		} );

	}

	/**
	 * Initialise CSS without theme.
	 *
	 * @date    22/09/2020
	 * @since   2.0.4
	 */

	public static function css() {

		$str = file_get_contents( SPX_DIR . '/assets/css/spx.min.css' );

		add_action( 'wp_head', function () use ( &$str ) {

			echo '<style id="spx-css">' . $str . '</style>';

		} );

		add_action( 'admin_head', function () use ( &$str ) {

			echo '<style id="spx-css">' . $str . '</style>';

		} );

	}

	/**
	 * Create shortcodes.
	 *
	 * @date    06/12/2020
	 * @since   3.0.0
	 */

	public static function shortcodes() {

		$path  = SPX_DIR . '/data/components/';
		$files = array_slice( scandir( $path ), 2 );

		$element_array = [ 'spx-navigation', 'spx-group', 'spx-scrollspy', 'spx-snackbar' ];

		foreach ( $files as $file ) {

			$name = basename( $file, '.json' );

			if ( pathinfo( $file )['extension'] === 'json' ) {

				if ( ! in_array( $name, $element_array ) ) {

					add_shortcode( $name, function ( $atts, $content = NULL ) use ( &$path, $file, $name ) {

						// Get object from .json.

						$object = json_decode( file_get_contents( $path . '/' . $file ), TRUE );
						$array  = [];

						// Add attributes with default value to array.

						foreach ( $object['properties'] as $prop ) {
							if ( $prop['type'] === 'boolean' && ! $prop['defaultValue'] ) {
							} else {
								$array[ $prop['attribute'] ] = trim( $prop['defaultValue'], '\'"' );
							}
						}

						// Move array to shortcode attributes.

						$a = shortcode_atts( $array, $atts );

						// Setup output.

						$output = '';

						$output .= '<' . $name . ' ';
						foreach ( $a as $key => $value ) {
							$output .= $key . '="' . $value . '" ';
						}
						$output .= '>';
						if ( $content != NULL ) {
							$output .= $content;
						}
						$output .= '</' . $name . '>';

						return $output;

					} );

				}

			}

		}

	}

	/**
	 * Construct.
	 *
	 * @date    22/09/2020
	 * @since   2.0.5
	 */

	public function __construct() {
		self::enqueueScripts();
		self::addScriptTags();
		self::lazyLoadAssets();
		self::css();
		self::shortcodes();
	}

}

