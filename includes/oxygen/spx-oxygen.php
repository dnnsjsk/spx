<?php

/**
 * spx Oxygen class.
 *
 * @since 1.23
 */

if ( ! class_exists( 'spxOxygen' ) ) {

	class spxOxygen {

		function __construct() {

			$this->loadFiles();

			add_action( 'oxygen_add_plus_sections', array( $this, 'registerSections' ) );
			add_action( 'oxygen_add_plus_spx_section_content', array( $this, 'registerSubSections' ) );

		}

		function registerSections() {

			CT_Toolbar::oxygen_add_plus_accordion_section( "spx", __( "spx" ) );

		}

		function registerSubSections() { ?>

            <h2><?php _e( "utilities", 'oxygen' ); ?></h2>
			<?php do_action( "oxygen_add_plus_spx_utilities" ); ?>

            <h2><?php _e( "Elements", 'oxygen' ); ?></h2>
			<?php do_action( "oxygen_add_plus_spx_elements" ); ?>

		<?php }

		function loadFiles() {

			include plugin_dir_path( __FILE__ ) . 'spx-oxygen-element.php';
			include plugin_dir_path( __FILE__ ) . 'components/animate.php';
			include plugin_dir_path( __FILE__ ) . 'components/class-toggle.php';
			include plugin_dir_path( __FILE__ ) . 'components/mockup.php';
			include plugin_dir_path( __FILE__ ) . 'components/offset.php';
			include plugin_dir_path( __FILE__ ) . 'components/snackbar.php';
			include plugin_dir_path( __FILE__ ) . 'components/typewriter.php';

		}

	}

	new spxOxygen();

}