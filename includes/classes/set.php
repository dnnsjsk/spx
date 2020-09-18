<?php

/**
 * Sets global settings.
 *
 * @since 2.0
 */

namespace spx;

class set {

	/**
	 * Color.
	 *
	 * @param $color
	 *
	 * @param $type
	 *
	 * @since 1.0
	 */

	public static function color( $color, $type ) {

		if ( $color === get_field( $color ) ) {
			die();
		} else {
			update_option( 'spx_color_' . $type . '', $color );
		}

	}

}