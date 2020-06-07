<?php

/**
 * spx Oxygen element class.
 *
 * @since 1.23
 */

if ( ! class_exists( 'spxOxygenElement' ) ) {

	class spxOxygenElement extends OxyEl {

		function selector() {
			return substr( str_shuffle( MD5( microtime() ) ), 0, 10 );
		}

		function class_names() {
			return '';
		}

		function button_place() {

			$spx_button_place = $this->spx_button_place();

			if ( $spx_button_place ) {
				return "spx::" . $spx_button_place;
			}

		}

		function button_priority() {
			return '';
		}

		function init() {
			$this->enableNesting();
			$this->El->useAJAXControls();
		}

	}

}