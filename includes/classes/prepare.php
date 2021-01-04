<?php

/**
 * Prepare JSON for correct parsing in DOM elements.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */

namespace spx;

class Prepare {

	public static function JSON( $data ) {

		echo htmlspecialchars( json_encode( $data ), ENT_QUOTES, 'UTF-8' );

	}

}
