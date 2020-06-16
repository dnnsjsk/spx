<?php

/**
 * spx-mockup Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenMockup extends spxOxygenElement {

	function name() {
		return __( 'Mockup' );
	}

	function spx_button_place() {
		return "elements";
	}

	function init() {
		$this->El->useAJAXControls();
	}

	function render( $options, $defaults, $content ) {

		$type             = isset( $options['spxMockupType'] ) ? $options['spxMockupType'] : 'iphone-x';
		$src              = isset( $options['spxMockupSrc'] ) ? 'src="' . $options['spxMockupSrc'] . '"' : 'http://placehold.it/1600x900';
		$imagePosition    = $options['spxMockupImagePosition'];
		$colorIphone8     = $options['spxMockupType'] == 'iphone-8' ? 'color-iphone-8="' . $options['spxMockupColorIphone8'] . '"' : NULL;
		$colorGooglePixel = $options['spxMockupType'] == 'google-pixel' ? 'color-google-pixel="' . $options['spxMockupColorGooglePixel'] . '"' : NULL;
		$colorGalaxyS8    = $options['spxMockupType'] == 'galaxy-s8' ? 'color-galaxy-s-8="' . $options['spxMockupColorGalaxyS8'] . '"' : NULL;
		$colorIpadPro     = $options['spxMockupType'] == 'ipad-pro' ? 'color-ipad-pro="' . $options['spxMockupColorIpadPro'] . '"' : NULL;
		$colorMacbook     = $options['spxMockupType'] == 'macbook' ? 'color-macbook="' . $options['spxMockupColorMacbook'] . '"' : NULL;
		$colorMacbookPro  = $options['spxMockupType'] == 'macbook-pro' ? 'color-macbook-pro="' . $options['spxMockupColorMacbookPro'] . '"' : NULL;

		$output = '<spx-mockup 
		type="' . $type . '"
		image-position="' . $imagePosition . '"
		' . $colorIphone8 . '
		' . $colorGooglePixel . '
		' . $colorGalaxyS8 . '
		' . $colorIpadPro . '
		' . $colorMacbook . '
		' . $colorMacbookPro . '
		' . $src . '>';

		$output .= '</spx-mockup> ';

		echo $output;

	}

	function controls() {

		/**
		 * Type.
		 */

		$this->addOptionControl(
			array(
				'type' => 'dropdown',
				'name' => 'Type',
				'slug' => 'spxMockupType',
				'css'  => FALSE,
			)
		)->setValue( array(
				'iphone-x'          => 'iPhone X',
				'iphone-8'          => 'iPhone 8',
				'google-pixel-2-xl' => 'Pixel 2 XL',
				'google-pixel'      => 'Pixel',
				'galaxy-s8'         => 'Galaxy S8',
				'ipad-pro'          => 'iPad Pro',
				'surface-pro'       => 'Surface Pro',
				'surface-book'      => 'Surface Book',
				'macbook'           => 'Macbook',
				'macbook-pro'       => 'Macbook Pro',
				'surface-studio'    => 'Surface Studio',
				'imac-pro'          => 'iMac Pro',
				'apple-watch'       => 'Apple Watch',
			)
		)->rebuildElementOnChange();

		/**
		 * Color.
		 */

		/** iPhone 8 */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorIphone8',
				'condition' => 'spxMockupType=iphone-8',
				'default'   => 'gold',
				'css'       => FALSE,
			)
		)->setValue( array(
				'gold'      => 'Gold',
				'silver'    => 'Silver',
				'spacegray' => 'Spacegray',
			)
		)->rebuildElementOnChange();

		/** Google Pixel */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorGooglePixel',
				'condition' => 'spxMockupType=google-pixel',
				'default'   => 'black',
				'css'       => FALSE,
			)
		)->setValue( array(
				'black'  => 'Black',
				'blue'   => 'Blue',
				'silver' => 'Silver',
			)
		)->rebuildElementOnChange();

		/** Samsung Galaxy S8 */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorGalaxyS8',
				'condition' => 'spxMockupType=galaxy-s8',
				'default'   => 'black',
				'css'       => FALSE,
			)
		)->setValue(
			array(
				'black' => 'Black',
				'blue'  => 'Blue',
			)
		)->rebuildElementOnChange();

		/** iPad Pro */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorIpadPro',
				'condition' => 'spxMockupType=ipad-pro',
				'default'   => 'gold',
				'css'       => FALSE,
			)
		)->setValue(
			array(
				'gold'      => 'Gold',
				'rosegold'  => 'Rosegold',
				'silver'    => 'Silver',
				'spacegray' => 'Spacegray',
			)
		)->rebuildElementOnChange();

		/** Macbook */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorMacbook',
				'condition' => 'spxMockupType=macbook',
				'default'   => 'gold',
				'css'       => FALSE,
			)
		)->setValue(
			array(
				'gold'      => 'Gold',
				'rosegold'  => 'Rosegold',
				'silver'    => 'Silver',
				'spacegray' => 'Spacegray',
			)
		)->rebuildElementOnChange();

		/** Macbook Pro */

		$this->addOptionControl(
			array(
				'type'      => 'dropdown',
				'name'      => 'Color',
				'slug'      => 'spxMockupColorMacbookPro',
				'condition' => 'spxMockupType=macbook-pro',
				'default'   => 'silver',
				'css'       => FALSE,
			)
		)->setValue(
			array(
				'silver'    => 'Silver',
				'spacegray' => 'Spacegray',
			)
		)->rebuildElementOnChange();

		/**
		 * URL.
		 */

		$this->addOptionControl(
			array(
				'name'    => 'Image URL',
				'type'    => 'mediaurl',
				'heading' => __( 'Image URL' ),
				'slug'    => 'spxMockupSrc',
				'value'   => 'http://placehold.it/1600x900',
				'css'     => FALSE,
			)
		)->rebuildElementOnChange();

		/**
		 * Position.
		 */

		$this->addOptionControl(
			array(
				'type'    => 'textfield',
				'name'    => __( 'Image position' ),
				'slug'    => 'spxMockupImagePosition',
				'default' => '50% 50%',
				'css'     => FALSE,
			)
		);

	}

}

new spxOxygenMockup();