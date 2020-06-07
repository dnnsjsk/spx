<?php

/**
 * spx-iframe Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenOffset extends spxOxygenElement {

	function name() {
		return __( 'Offset' );
	}

	function spx_button_place() {
		return "tools";
	}

	function render( $options, $defaults, $content ) {

		$target = isset( $options['target'] ) ? $options['target'] : 'header';

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
				"type"     => 'textfield',
				"name"     => __( 'Target element' ),
				"slug"     => 'target',
				"default"  => 'header',
				"selector" => $this->selector(),
			)
		);

	}

}

new spxOxygenOffset();