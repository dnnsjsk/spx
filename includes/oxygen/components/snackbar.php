<?php

/**
 * spx-snackbar Oxygen wrapper.
 *
 * @since 1.30
 */

class spxOxygenSnackbar extends spxOxygenElement {

	function name() {
		return __( 'Snackbar' );
	}

	function spx_button_place() {
		return "elements";
	}

	function render( $options, $defaults, $content ) {

		$text              = isset( $options['spxSnackbarText'] ) ? $options['spxSnackbarText'] : 'Hello, I\'m a snackbar.';
		$fixed             = isset( $options['spxSnackbarFixed'] ) && $options["spxSnackbarFixed"] == "true" ? 'spx-snackbar-fixed' : NULL;
		$closeable         = isset( $options['spxSnackbarCloseable'] ) && $options["spxSnackbarCloseable"] == "true" ? 'spx-snackbar-closeable' : NULL;
		$reverse           = isset( $options['spxSnackbarReverse'] ) && $options["spxSnackbarReverse"] == "true" ? 'spx-snackbar-reverse' : NULL;
		$position          = isset( $options['spxSnackbarPosition'] ) ? $options['spxSnackbarPosition'] : 'bottom-right';
		$distanceX         = isset( $options['spxSnackbarDistanceX'] ) ? $options['spxSnackbarDistanceX'] . 'em' : '1em';
		$distanceY         = isset( $options['spxSnackbarDistanceY'] ) ? $options['spxSnackbarDistanceY'] . 'em' : '1em';
		$size              = isset( $options['spxSnackbarSize'] ) ? $options['spxSnackbarSize'] : 'sm';
		$bgcolor           = isset( $options['spxSnackbarBackground'] ) ? $options['spxSnackbarBackground'] : '#000000';
		$color             = isset( $options['spxSnackbarColor'] ) ? $options['spxSnackbarColor'] : '#ffffff';
		$borderRadius      = isset( $options['spxSnackbarBorderRadius'] ) ? $options['spxSnackbarBorderRadius'] . 'em' : '0.25em';
		$animationDelay    = isset( $options['spxSnackbarAnimationDelay'] ) ? $options['spxSnackbarAnimationDelay'] . 'ms' : '200ms';
		$animationDuration = isset( $options['spxSnackbarAnimationDuration'] ) ? $options['spxSnackbarAnimationDuration'] . 'ms' : '2000ms';

		$output = '<spx-snackbar-toggle 
		class="oxy-inner-content" 
		spx-snackbar-text="' . $text . '"
		' . $fixed . '
		' . $closeable . '
		' . $reverse . '
		spx-snackbar-position="' . $position . '"
		spx-snackbar-distance-x="' . $distanceX . '"
		spx-snackbar-distance-y="' . $distanceY . '"
		spx-snackbar-size="' . $size . '"
		spx-snackbar-background="' . $bgcolor . '"
		spx-snackbar-color="' . $color . '"
		spx-snackbar-border-radius="' . $borderRadius . '"
		spx-snackbar-animation-delay="' . $animationDelay . '"
		spx-snackbar-animation-duration="' . $animationDuration . '">';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-snackbar-toggle> ';

		echo $output;

	}

	function controls() {

		/**
		 * Text.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Text' ),
				'slug'    => 'spxSnackbarText',
				'default' => 'Hello, I\'m a snackbar.',
				'css'     => FALSE,
			) );

		/**
		 * Section: Options.
		 */

		$sectionOptions = $this->addControlSection( "spxSnackbarOptions", __( "Options" ), "assets/icon.png", $this );

		/** Fixed. */

		$sectionOptions->addOptionControl(
			array(
				'type'  => 'checkbox',
				'name'  => __( 'Don\'t fade out' ),
				'slug'  => 'spxSnackbarFixed',
				'value' => 'false',
				'css'   => FALSE,
			)
		);

		/** Closeable. */

		$sectionOptions->addOptionControl(
			array(
				'type'  => 'checkbox',
				'name'  => __( 'Make it closeable' ),
				'slug'  => 'spxSnackbarCloseable',
				'value' => 'false',
				'css'   => FALSE,
			)
		);

		/** Reverse. */

		$sectionOptions->addOptionControl(
			array(
				'type'  => 'checkbox',
				'name'  => __( 'Reverse close button' ),
				'slug'  => 'spxSnackbarReverse',
				'value' => 'false',
				'css'   => FALSE,
			)
		);

		/**
		 * Section: Options.
		 */

		$sectionPosition = $this->addControlSection( "spxSnackbarPosition", __( "Position" ), "assets/icon.png", $this );

		/** Position. */

		$sectionPosition->addOptionControl(
			array(
				'type'    => 'dropdown',
				'name'    => 'Position',
				'slug'    => 'spxSnackbarPosition',
				'default' => 'bottom-right',
				'css'     => FALSE,
			)
		)->setValue( array(
				'bottom-right'  => 'bottom-right',
				'bottom-center' => 'bottom-center',
				'bottom-left'   => 'bottom-left',
				'top-right'     => 'top-right',
				'top-center'    => 'top-center',
				'top-left'      => 'top-left',
			)
		);

		/** Distance X. */

		$sectionPosition->addStyleControl(
			array(
				'name'         => 'X distance',
				'type'         => 'measurebox',
				'slug'         => 'spxSnackbarDistanceX',
				'control_type' => 'slider-measurebox',
				'value'        => '1',
				'css'          => FALSE,
			)
		)->setRange( '0', '100', '1' )
		                ->setUnits( 'em', 'em' );;

		/** Distance Y. */

		$sectionPosition->addStyleControl(
			array(
				'name'         => 'X distance',
				'type'         => 'measurebox',
				'slug'         => 'spxSnackbarDistanceY',
				'control_type' => 'slider-measurebox',
				'value'        => '1',
				'css'          => FALSE,
			)
		)->setRange( '0', '100', '1' )
		                ->setUnits( 'em', 'em' );

		/**
		 * Section: Design.
		 */

		$sectionDesign = $this->addControlSection( "spxSnackbarDesign", __( "Design" ), "assets/icon.png", $this );

		/** Size. */

		$sectionDesign->addOptionControl(
			array(
				'type'    => 'dropdown',
				'name'    => 'Size',
				'slug'    => 'spxSnackbarSize',
				'default' => 'md',
				'css'     => FALSE,
			)
		)->setValue( array(
				'sm' => 'Small',
				'md' => 'Medium',
				'lg' => 'Large',
			)
		);

		/** Background Color. */

		$sectionDesign->addOptionControl(
			array(
				'type'    => 'colorpicker',
				'name'    => 'Background color',
				'slug'    => 'spxSnackbarBackground',
				'default' => '#000000',
				'css'     => FALSE,
			)
		);

		/** Color. */

		$sectionDesign->addOptionControl(
			array(
				'type'    => 'colorpicker',
				'name'    => 'Color',
				'slug'    => 'spxSnackbarColor',
				'default' => '#ffffff',
				'css'     => FALSE,
			)
		);

		/** Border Radius. */

		$sectionDesign->addStyleControl(
			array(
				'name'         => 'Border radius',
				'type'         => 'measurebox',
				'slug'         => 'spxSnackbarBorderRadius',
				'control_type' => 'slider-measurebox',
				'value'        => '0.25',
				'css'          => FALSE,
			)
		)->setRange( '0', '5', '0.01' )
		              ->setUnits( 'em', 'em' );

		/**
		 * Section: Animation.
		 */

		$sectionAnimation = $this->addControlSection( "spxSnackbarAnimation", __( "Animation" ), "assets/icon.png", $this );

		/** Animation delay. */

		$sectionAnimation->addStyleControl(
			array(
				'name'         => 'Animation delay',
				'type'         => 'measurebox',
				'slug'         => 'spxSnackbarAnimationDelay',
				'control_type' => 'slider-measurebox',
				'value'        => '200',
				'css'          => FALSE,
			)
		)->setRange( '0', '5000', '1' );

		/** Animation duration. */

		$sectionAnimation->addStyleControl(
			array(
				'name'         => 'Animation duration',
				'type'         => 'measurebox',
				'slug'         => 'spxSnackbarAnimationDuration',
				'control_type' => 'slider-measurebox',
				'value'        => '2000',
				'css'          => FALSE,
			)
		)->setRange( '0', '5000', '1' );

	}

}

new spxOxygenSnackbar();