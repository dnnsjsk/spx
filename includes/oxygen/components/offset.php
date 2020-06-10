<?php

/**
 * spx-offset Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenOffset extends spxOxygenElement {

	function name() {
		return __( 'Offset' );
	}

	function spx_button_place() {
		return "utilities";
	}

	function render( $options, $defaults, $content ) {

		$target = isset( $options['spxOffsetTarget'] ) ? $options['spxOffsetTarget'] : 'header';

		$output = '<spx-offset 
		class="oxy-inner-content" 
		target="' . $target . '">';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-offset> ';

		echo $output;

	}

	function controls() {

		/**
		 * Target.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Target element' ),
				'slug'    => 'spxOffsetTarget',
				'default' => 'header',
				'css'     => FALSE,
			)
		);

	}

}

new spxOxygenOffset();