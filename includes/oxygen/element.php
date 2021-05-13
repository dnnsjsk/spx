<?php

/**
 * spx Wrapper element.
 *
 * @date  22/09/2020
 * @since 2.0
 */
if ( ! class_exists( 'spxOxyEl' ) ) {

	class spxOxyEl extends OxyEl {

		function name() {
			return 'spx Element';
		}

		function tag() {
			return array( 'default' => 'div' );
		}

		function init() {
			$this->enableNesting();
		}

		function render( $options, $defaults, $content ) {

			$tag        = $options['spxElement'];
			$attributes = $options['spxAttributes'];

			$output = '<spx-' . $tag . ' class="oxy-inner-content" ' . $attributes . '>';

			if ( $content ) {
				$output .= do_shortcode( $content );
			}

			$output .= ' </spx-' . $tag . '> ';

			echo $output;
		}

		function class_names() {
			return array();
		}

		function controls() {

			$this->addOptionControl(
				array(
					'type' => 'dropdown',
					'name' => 'Component',
					'slug' => 'spxElement',
				)
			)->setValue( array(
					'accordion'        => 'Accordion',
					'animate'          => 'Animate',
					'class-toggle'     => 'Class Toggle',
					'code'             => 'Code',
					'edit-button'      => 'Edit Button',
					'group'            => 'Group',
					'icon'             => 'Icon',
					//'iframe'           => 'Iframe',
					'image-comparison' => 'Image Comparison',
					'lightbox'         => 'Lightbox',
					'masonry'          => 'Masonry',
					'mockup'           => 'Mockup',
					//'navigation'       => 'Navigation',
					//'notation'         => 'Notation',
					'offset'           => 'Offset',
					'scrollspy'        => 'Scrollspy',
					'share'            => 'Share',
					'slider'           => 'Slider',
					'slideshow'        => 'Slideshow',
					//'snackbar'         => 'Snackbar',
					'typewriter'       => 'Typewriter',
				)
			);

			$this->addOptionControl(
				array(
					"type"   => 'textarea',
					"name"   => __( 'Attributes' ),
					"slug"   => 'spxAttributes',
					"base64" => TRUE
				)
			);

		}

	}

	add_filter( "oxy_base64_encode_options",
		function ( $items ) {
			$items = array_merge( $items, array(
				'oxy-spx-element_spxAttributes',
			) );

			return $items;
		}
	);

	new spxOxyEl();

}