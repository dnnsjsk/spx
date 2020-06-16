<?php

/**
 * spx-image-comparison Oxygen wrapper.
 *
 * @since 1.39
 */

class spxOxygenImageComparison extends spxOxygenElement {

	function name() {
		return __( 'Image Comparison' );
	}

	function spx_button_place() {
		return "elements";
	}

	function init() {
		$this->El->useAJAXControls();
	}

	function render( $options, $defaults, $content ) {

		$srcBefore = isset( $options['spxImageComparisonSrcBefore'] ) ? 'src-before="' . $options['spxImageComparisonSrcBefore'] . '"' : 'src-before="https://placehold.it/1600x900"';
		$srcAfter  = isset( $options['spxImageComparisonSrcAfter'] ) ? 'src-after="' . $options['spxImageComparisonSrcAfter'] . '"' : 'src-after="https://placehold.it/1600x900"';
		$start     = isset( $options['spxImageComparisonStart'] ) ? $options['spxImageComparisonStart'] : '150';
		$color     = isset( $options['spxImageComparisonColor'] ) ? $options['spxImageComparisonColor'] : '#ffffff';
		$iconColor = isset( $options['spxImageComparisonIconColor'] ) ? $options['spxImageComparisonIconColor'] : '#9E9E9E';

		$output = '<spx-image-comparison 
		' . $srcBefore . ' 
		' . $srcAfter . ' 
		start="' . $start . '"
		color="' . $color . '"
		icon-color="' . $iconColor . '">';

		if ( $content ) {
			$output .= do_shortcode( $content );
		}

		$output .= '</spx-image-comparison> ';

		echo $output;

	}

	function description() {
		ob_start(); ?>

        <div class=oxygen-control-label><?php echo __( "This element currently only works by setting a width and height value. (Advanced Tab -> Size & Spacing) Also please note that the functionality is disabled in the editor to avoid accidentally dragging the element." ) ?></div>

		<?php

		return ob_get_clean();
	}

	function controls() {

		$html = $this->description( 'desc', __( "Description", "oxygen" ) );
		$this->addCustomControl( $html, 'desc' );


		/**
		 * Before src.
		 */

		$this->addOptionControl(
			array(
				'name'    => 'Before image URL',
				'type'    => 'mediaurl',
				'heading' => __( 'Before image URL' ),
				'slug'    => 'spxImageComparisonSrcBefore',
				'value'   => 'https://placehold.it/1600x900',
				'css'     => FALSE,
			)
		)->rebuildElementOnChange();

		/**
		 * After src.
		 */

		$this->addOptionControl(
			array(
				'name'    => 'After image URL',
				'type'    => 'mediaurl',
				'heading' => __( 'After image URL' ),
				'slug'    => 'spxImageComparisonSrcAfter',
				'value'   => 'https://placehold.it/1600x900',
				'css'     => FALSE,
			)
		)->rebuildElementOnChange();

		/**
		 * Start.
		 */

		$this->addStyleControl(
			array(
				'name'         => 'Starting point for after image',
				'type'         => 'measurebox',
				'slug'         => 'spxImageComparisonStart',
				'control_type' => 'slider-measurebox',
				'value'        => '150',
				'css'          => FALSE,
			)
		)->setRange( '0', '1000', '1' )
		     ->setUnits( 'px', 'px' );

		/**
		 * Color.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'colorpicker',
				'name'    => 'UI color',
				'slug'    => 'spxImageComparisonColor',
				'default' => '#ffffff',
				'css'     => FALSE,
			)
		);

		/**
		 * Icon color.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'colorpicker',
				'name'    => 'Icon color',
				'slug'    => 'spxImageComparisonIconColor',
				'default' => '#9E9E9E',
				'css'     => FALSE,
			)
		);

	}

}

new spxOxygenImageComparison();