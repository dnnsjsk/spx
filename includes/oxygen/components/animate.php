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
		return "tools";
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
		$viewport     = ( $options['spxAnimateViewport'] == 'true' ) ? 'viewport' : NULL;
		$once         = ( $options['spxAnimateOnce'] == 'true' ) ? 'once' : NULL;

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
				"type"     => 'textfield',
				"name"     => __( 'Target selector' ),
				"slug"     => 'spxAnimateTarget',
				"default"  => '*',
				"selector" => $this->selector(),
			)
		);

		/**
		 * Duration.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'Animation duration' ),
				"slug"         => "spxAnimateDuration",
				"control_type" => 'slider-measurebox',
				"value"        => '1',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 50, 1 );

		/**
		 * Opacity.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'Opacity animation starts from' ),
				"slug"         => "spxAnimateOpacity",
				"control_type" => 'slider-measurebox',
				"value"        => '0',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 1, 0.01 );

		/**
		 * X position.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'X position animation starts from' ),
				"slug"         => "spxAnimatePositionX",
				"control_type" => 'slider-measurebox',
				"value"        => '0',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 1000, 1 );

		/**
		 * Y position.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'Y position animation starts from' ),
				"slug"         => "spxAnimatePositionY",
				"control_type" => 'slider-measurebox',
				"value"        => '0',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 1000, 1 );

		/**
		 * Delay.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'Delay before animation starts' ),
				"slug"         => "spxAnimateDelay",
				"control_type" => 'slider-measurebox',
				"value"        => '0',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 50, 1 );

		/**
		 * Stagger.
		 */

		$this->addStyleControl(
			array(
				"name"         => __( 'Stagger element animation' ),
				"slug"         => "spxAnimateStagger",
				"control_type" => 'slider-measurebox',
				"value"        => '0.15',
				"selector"     => $this->selector(),
			)
		)->setRange( 0, 5, 0.01 );

		/**
		 * Ease.
		 */

		$this->addOptionControl(
			array(
				"type"     => "dropdown",
				"name"     => "Ease",
				"slug"     => "spxAnimateEase",
				"selector" => $this->selector(),
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

		/**
		 * Ease property.
		 */

		$this->addOptionControl(
			array(
				"type"     => "dropdown",
				"name"     => "Ease property",
				"slug"     => "spxAnimateEaseProperty",
				"selector" => $this->selector(),
			)
		)->setValue( array(
				'in'    => 'in',
				'inOut' => 'inOut',
				'out'   => 'out',
			)
		);

		/**
		 * Viewport.
		 */

		$this->addOptionControl(
			array(
				'type'     => 'buttons-list',
				'name'     => 'Start animation when element is in viewport',
				'slug'     => 'spxAnimateViewport',
				"selector" => $this->selector(),
			)

		)->setValue( array( "TRUE" => "TRUE", "FALSE" => "FALSE" ) )
		     ->setDefaultValue( 'false' );

		/**
		 * Once.
		 */

		$this->addOptionControl(
			array(
				'type'      => 'buttons-list',
				'name'      => 'Only animate once',
				'slug'      => 'spxAnimateOnce',
				'condition' => 'spxAnimateViewport=true',
				"selector"  => $this->selector(),
			)

		)->setValue( array( "TRUE" => "TRUE", "FALSE" => "FALSE" ) )
		     ->setDefaultValue( 'false' );
	}

}

new spxOxygenAnimate();