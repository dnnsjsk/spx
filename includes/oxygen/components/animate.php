<?php

/**
 * spx-animate Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenAnimate extends spxOxygenElement {

	function name() {
		return __( 'Animate' );
	}

	function spx_button_place() {
		return "utilities";
	}

	function render( $options, $defaults, $content ) {

		$target       = isset( $options['spxAnimateTarget'] ) ? $options['spxAnimateTarget'] : '*';
		$duration     = isset( $options['spxAnimateDuration'] ) ? $options['spxAnimateDuration'] : '1';
		$opacity      = isset( $options['spxAnimateOpacity'] ) ? $options['spxAnimateOpacity'] : '0';
		$positionX    = isset( $options['spxAnimatePositionX'] ) ? $options['spxAnimatePositionX'] : '0';
		$positionY    = isset( $options['spxAnimatePositionY'] ) ? $options['spxAnimatePositionY'] : '0';
		$delay        = isset( $options['spxAnimateDelay'] ) ? $options['spxAnimateDelay'] : '0';
		$stagger      = isset( $options['spxAnimateStagger'] ) ? $options['spxAnimateStagger'] : '0.15';
		$ease         = isset( $options['spxAnimateEase'] ) ? $options['spxAnimateEase'] : 'power1';
		$easeProperty = isset( $options['spxAnimateEaseProperty'] ) ? $options['spxAnimateEaseProperty'] : 'out';
		$easeFull     = $ease . '.' . $easeProperty;
		$viewport     = isset( $options['spxAnimateViewport'] ) && $options["spxAnimateViewport"] == "true" ? 'viewport' : NULL;
		$once         = isset( $options['spxAnimateOnce'] ) && $options["spxAnimateOnce"] == "true" ? 'once' : NULL;

		$output = '<spx-animate 
		class="oxy-inner-content" 
		target="' . $target . '" 
		duration="' . $duration . '" 
		opacity="' . $opacity . '"
		x="' . $positionX . '" 
		y="' . $positionY . '"
		delay="' . $delay . '" 
		stagger="' . $stagger . '"
		ease="' . $easeFull . '"
		' . $viewport . ' 
		' . $once . '>';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-animate> ';

		echo $output;

	}

	function controls() {

		/**
		 * Target.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Target selector' ),
				'slug'    => 'spxAnimateTarget',
				'default' => '*',
				'css'     => FALSE,
			)
		);

		/**
		 * Viewport.
		 */

		$this->addOptionControl(
			array(
				'type'  => 'checkbox',
				'name'  => 'Start animation when element is in viewport',
				'slug'  => 'spxAnimateViewport',
				'value' => 'false',
				'css'   => FALSE,
			)

		);

		/**
		 * Once.
		 */

		$this->addOptionControl(
			array(
				'type'      => 'checkbox',
				'name'      => 'Only animate once',
				'slug'      => 'spxAnimateOnce',
				'condition' => 'spxAnimateViewport=true',
				'css'       => FALSE,
			)

		);

		/**
		 * Section: Options.
		 */

		$sectionProperties = $this->addControlSection( "spxAnimateProperties", __( "Properties" ), "assets/icon.png", $this );

		/** Duration. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'Animation duration' ),
				'slug'         => 'spxAnimateDuration',
				'control_type' => 'slider-measurebox',
				'value'        => '1',
				'css'          => FALSE,
			)
		)->setRange( 0, 50, 1 );

		/** Opacity. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'Opacity animation starts from' ),
				'slug'         => 'spxAnimateOpacity',
				'control_type' => 'slider-measurebox',
				'value'        => '0',
				'css'          => FALSE,
			)
		)->setRange( 0, 1, 0.01 );

		/** Position X. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'X position animation starts from' ),
				'slug'         => 'spxAnimatePositionX',
				'control_type' => 'slider-measurebox',
				'value'        => '0',
				'css'          => FALSE,
			)
		)->setRange( 0, 1000, 1 );

		/** Position Y. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'Y position animation starts from' ),
				'slug'         => 'spxAnimatePositionY',
				'control_type' => 'slider-measurebox',
				'value'        => '0',
				'css'          => FALSE,
			)
		)->setRange( 0, 1000, 1 );

		/** Delay. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'Delay before animation starts' ),
				'slug'         => 'spxAnimateDelay',
				'control_type' => 'slider-measurebox',
				'value'        => '0',
				'css'          => FALSE,
			)
		)->setRange( 0, 50, 1 );

		/** Stagger. */

		$sectionProperties->addStyleControl(
			array(
				'name'         => __( 'Stagger element animation' ),
				'slug'         => 'spxAnimateStagger',
				'control_type' => 'slider-measurebox',
				'value'        => '0.15',
				'css'          => FALSE,
			)
		)->setRange( 0, 5, 0.01 );

		/**
		 * Section: Ease.
		 */

		$sectionEase = $this->addControlSection( "spxAnimateEase", __( "Ease" ), "assets/icon.png", $this );

		/** Ease. */

		$sectionEase->addOptionControl(
			array(
				'type'    => 'dropdown',
				'name'    => 'Ease',
				'slug'    => 'spxAnimateEase',
				'default' => 'power1',
				'css'     => FALSE,
			)
		)->setValue( array(
				'power1'  => 'Power 1',
				'power2'  => 'Power 2',
				'power3'  => 'Power 3',
				'power4'  => 'Power 4',
				'back'    => 'back',
				'elastic' => 'elastic',
				'bounce'  => 'bounce',
				'steps'   => 'steps',
				'circ'    => 'sine',
				'none'    => 'none',
			)
		);

		/** Ease property. */

		$sectionEase->addOptionControl(
			array(
				'type'    => 'dropdown',
				'name'    => 'Ease property',
				'slug'    => 'spxAnimateEaseProperty',
				'default' => 'in',
				'css'     => FALSE,
			)
		)->setValue( array(
				'in'    => 'in',
				'inOut' => 'inOut',
				'out'   => 'out',
			)
		);

	}

}

new spxOxygenAnimate();