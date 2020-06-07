<?php

/**
 * spx-iframe Oxygen wrapper.
 *
 * @since 1.23
 */

class spxOxygenMockup extends spxOxygenElement {

	function name() {
		return __( 'Mockup' );
	}

	function init() {
		$this->El->useAJAXControls();
	}

	function spx_button_place() {
		return "tools";
	}

	function render( $options, $defaults, $content ) {

		$type             = isset( $options['type'] ) ? $options['type'] : 'iphone-x';
		$src              = isset( $options['src'] ) ? 'src="' . $options['src'] . '"' : NULL;
		$imagePosition    = $options['imagePosition'];
		$colorIphone8     = $options['type'] == 'iphone-8' ? 'color-iphone-8="' . $options['spxMockupIphone8'] . '"' : NULL;
		$colorGooglePixel = $options['type'] == 'google-pixel' ? 'color-google-pixel="' . $options['spxMockupGooglePixel'] . '"' : NULL;
		$colorGalaxyS8    = $options['type'] == 'galaxy-s8' ? 'color-galaxy-s-8="' . $options['spxMockupGalaxyS8'] . '"' : NULL;
		$colorIpadPro     = $options['type'] == 'ipad-pro' ? 'color-ipad-pro="' . $options['spxMockupIpadPro'] . '"' : NULL;
		$colorMacbook     = $options['type'] == 'macbook' ? 'color-macbook="' . $options['spxMockupMacbook'] . '"' : NULL;
		$colorMacbookPro  = $options['type'] == 'macbook-pro' ? 'color-macbook-pro="' . $options['spxMockupMacbookPro'] . '"' : NULL;

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
				"type"     => "dropdown",
				"name"     => "Type",
				"slug"     => "type",
				"selector" => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupIphone8",
				"condition" => "type=iphone-8",
				"default"   => "gold",
				"selector"  => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupGooglePixel",
				"condition" => "type=google-pixel",
				"default"   => "black",
				"selector"  => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupGalaxyS8",
				"condition" => "type=galaxy-s8",
				"default"   => "black",
				"selector"  => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupIpadPro",
				"condition" => "type=ipad-pro",
				"default"   => "gold",
				"selector"  => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupMacbook",
				"condition" => "type=macbook",
				"default"   => "gold",
				"selector"  => $this->selector(),
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
				"type"      => "dropdown",
				"name"      => "Color",
				"slug"      => "spxMockupMacbookPro",
				"condition" => "type=macbook-pro",
				"default"   => "silver",
				"selector"  => $this->selector(),
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
				"name"     => "Image URL",
				"type"     => "mediaurl",
				"heading"  => __( "Image URL" ),
				"slug"     => "src",
				"value"    => "http://placehold.it/1600x900",
				"selector" => $this->selector(),
			)
		)->rebuildElementOnChange();

		/**
		 * Position.
		 */

		$this->addOptionControl(
			array(
				"type"     => 'textfield',
				"name"     => __( 'Image position' ),
				"slug"     => 'imagePosition',
				"default"  => '50% 50%',
				"selector" => $this->selector(),
			)
		);

	}

}

new spxOxygenMockup();