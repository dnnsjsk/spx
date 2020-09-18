<?php

/**
 * spx Wrapper element.
 *
 * @since 2.0
 */

if ( ! class_exists( 'spxOxyEl' ) ) {

	class spxOxyEl extends OxyEl {

		function init() {
			$this->enableNesting();
		}


		function name() {
			return __( 'spx Element' );
		}

		function render( $options, $defaults, $content ) {

			$tag        = $options['spxElement'];
			$attributes = $options['spxAttributes'];

			$output = '<spx-' . $tag . ' class="oxy-inner-content" ' . $attributes . '>';

			if ( $content ) {

				$output .= do_shortcode( $content );

			}

			$output .= '</spx-' . $tag . '>';

			echo $output;

		}

		function controls() {
			$this->addOptionControl(
				array(
					'type' => 'dropdown',
					'name' => 'Component',
					'slug' => 'spxElement',
					'css'  => FALSE,
				)
			)->setValue( array(
					'accordion'        => 'Accordion',
					'animate'          => 'Animate',
					'class-toggle'     => 'Class Toggle',
					'code'             => 'Code',
					'edit-button'      => 'Edit Button',
					'group'            => 'Group',
					'iframe'           => 'Iframe',
					'image-comparison' => 'Image Comparison',
					'lightbox'         => 'Lightbox',
					'masonry'          => 'Masonry',
					'mockup'           => 'Mockup',
					'navigation'       => 'Navigation',
					'notation'         => 'Notation',
					'offset'           => 'Offset',
					'scrollspy'        => 'Scrollspy',
					'share'            => 'Share',
					'slider'           => 'Slider',
					'slideshow'        => 'Slideshow',
					'snackbar'         => 'Snackbar',
					'typewriter'       => 'Typewriter',
				)
			);

			$this->addOptionControl(
				array(
					'type' => 'textarea',
					'name' => 'Attributes',
					'slug' => 'spxAttributes',
					'css'  => FALSE,
				)
			);
		}

	}

	new spxOxyEl();

}