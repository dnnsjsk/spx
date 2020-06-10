<?php

/**
 * spx-class-toggle Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenClassToggle extends spxOxygenElement {

	function name() {
		return __( 'Class Toggle' );
	}

	function spx_button_place() {
		return "utilities";
	}

	function render( $options, $defaults, $content ) {

		$toggle = isset( $options['spxClassToggleToggle'] ) ? $options['spxClassToggleToggle'] : 'spx-class-toggle--active';
		$target = isset( $options['spxClassToggleTarget'] ) ? $options['spxClassToggleTarget'] : NULL;
		$local  = isset( $options['spxClassToggleLocal'] ) ? $options['spxClassToggleLocal'] : NULL;

		$output = '<spx-class-toggle 
		class="oxy-inner-content" 
		toggle="' . $toggle . '"
		target="' . $target . '"
		local="' . $local . '">';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-class-toggle> ';

		echo $output;

	}

	function controls() {

		/**
		 * Target.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Classes to toggle (must be seperated by space)' ),
				'slug'    => 'spxClassToggleToggle',
				'default' => 'spx-class-toggle--active',
				'css'     => FALSE,
			)
		);

		/**
		 * Toggle.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Target selector' ),
				'slug'    => 'spxClassToggleTarget',
				'default' => NULL,
				'css'     => FALSE,
			)
		);

		/**
		 * Target.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Local storage string' ),
				'slug'    => 'spxClassToggleLocal',
				'default' => NULL,
				'css'     => FALSE,
			)
		);

	}

}

new spxOxygenClassToggle();