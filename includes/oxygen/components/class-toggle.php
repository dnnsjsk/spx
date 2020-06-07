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
		return "tools";
	}

	function render( $options, $defaults, $content ) {

		$toggle = isset( $options['toggle'] ) ? $options['toggle'] : 'spx-class-toggle--active';
		$target = isset( $options['target'] ) ? $options['target'] : NULL;
		$local  = isset( $options['local'] ) ? $options['local'] : NULL;

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
				"type"    => 'textfield',
				"name"    => __( 'Classes to toggle (must be seperated by space)' ),
				"slug"    => 'toggle',
				"default" => 'spx-class-toggle--active',
				"selector" => $this->selector(),
			) );

		/**
		 * Toggle.
		 */

		$this->addOptionControl(
			array(
				"type"    => 'textfield',
				"name"    => __( 'Target selector' ),
				"slug"    => 'target',
				"default" => NULL,
				"selector" => $this->selector(),
			) );

		/**
		 * Target.
		 */

		$this->addOptionControl(
			array(
				"type"    => 'textfield',
				"name"    => __( 'Local storage string' ),
				"slug"    => 'local',
				"default" => NULL,
				"selector" => $this->selector(),
			) );

	}

}

new spxOxygenClassToggle();