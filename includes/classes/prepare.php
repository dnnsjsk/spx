<?php

namespace spx;

/**
 * Prepare JSON for correct parsing in DOM elements.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */
class Prepare {

	public static function JSON( $data, $encode = FALSE ) {

		$string = htmlspecialchars( json_encode( $data ), ENT_QUOTES, 'UTF-8' );

		if ( $encode ) {
			return base64_encode( $string );
		} else {
			echo $string;
		}

	}

}
