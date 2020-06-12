<?php

/**
 * spx-typewriter Oxygen wrapper.
 *
 * @since 1.32
 */

class spxOxygenTypewriter extends spxOxygenElement {

	function name() {
		return __( 'Typewriter' );
	}

	function spx_button_place() {
		return "utilities";
	}

	function render( $options, $defaults, $content ) {

		$text        = isset( $options['spxTypewriterText'] ) ? $options['spxTypewriterText'] : 'I\'m a typewriter';
		$delay       = isset( $options['spxTypewriterDelay'] ) ? $options['spxTypewriterDelay'] : 'natural';
		$deleteSpeed = isset( $options['spxTypewriterDeleteSpeed'] ) ? $options['spxTypewriterDeleteSpeed'] : 'natural';
		$loop        = isset( $options['spxTypewriterLoop'] ) && $options["spxTypewriterLoop"] == "true" ? 'loop' : NULL;

		$output = '<spx-typewriter 
		class="oxy-inner-content" 
		inner
		auto-start
		text="' . $text . '"
		delay="' . $delay . '"
		delete-speed="' . $deleteSpeed . '"
		' . $loop . '>';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-typewriter> ';

		echo $output;

	}

	function controls() {

		/**
		 * Text.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Text to be typed' ),
				'slug'    => 'spxTypewriterText',
				'default' => 'I\'m a typewriter.',
				'css'     => FALSE,
			)
		);

		/**
		 * Delay.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Delay between each key when typing (natural or number)' ),
				'slug'    => 'spxTypewriterDelay',
				'default' => 'natural',
				'css'     => FALSE,
			)
		);

		/**
		 * Delete speed.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Delay between deleting each character (natural or number)' ),
				'slug'    => 'spxTypewriterDeleteSpeed',
				'default' => 'natural',
				'css'     => FALSE,
			)
		);

		/**
		 * Loop.
		 */

		$this->addOptionControl(
			array(
				'type'  => 'checkbox',
				'name'  => 'Loop animation',
				'slug'  => 'spxTypewriterLoop',
				'value' => 'false',
				'css'   => FALSE,
			)
		);

	}

}

new spxOxygenTypewriter();