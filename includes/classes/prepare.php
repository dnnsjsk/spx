<?php

/**
 * Prepare JSON for correct parsing in DOM elements.
 *
 * @since 1.0
 */

namespace spx;

class Prepare {

	public static function JSON( $data ) {

		echo htmlspecialchars( json_encode( $data ), ENT_QUOTES, 'UTF-8' );

	}

}
