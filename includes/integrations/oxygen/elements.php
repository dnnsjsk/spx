<?php

/**
 * Oxygen elements.
 *
 * @date  22/09/2021
 * @since 4.0
 */

if ( apply_filters( 'spx/oxygen_elements', FALSE ) ) {

	$path  = SPX_DIR . '/data/components/';
	$files = array_slice( scandir( $path ), 2 );

	foreach (
		$files

		as $file
	) {

		$name = basename( $file, '.json' );

		$object = json_decode( file_get_contents( $path . '/' . $file ), TRUE );
		$name   = $object['name'];

		if ( pathinfo( $file )['extension'] === 'json' ) {

			if ( ! class_exists( $name ) && $name != 'spx-navigation' && $name != 'spx-notation' ) {
				$new_class = new class( $object ) extends OxyEl {
					private $object;

					public function __construct( $object ) {
						$this->object = $object;
						parent::__construct();
					}

					function button_place() {
						return "spx::general";
					}

					function name() {
						return $this->object['name'];
					}

					function tag() {
						return 'div';
					}

					function init() {
						$this->enableNesting();
					}

					function render( $options, $defaults, $content ) { ?>
                      <<?php echo $this->object['name']; ?> class="oxy-inner-content" <?php do_action( "oxygen_vsb_component_attr", $options, $this->options['tag'] ); ?>><?php echo do_shortcode( $content ); ?></<?php echo $this->object['name']; ?>>
					<?php }

					function controls() {
						return [];
					}
				};

				$newClassname = get_class( $new_class );
				class_alias( $newClassname, $name );
			}

		}

	}

}