<?php

namespace spx;

/**
 * Gets data to be prepared for use in data-attributes.
 *
 * @since 1.0
 */
class Get {

	/**
	 * Gallery function.
	 *
	 * @date    25/10/2020
	 * @since   1.2.1
	 *
	 * @param $type
	 *
	 * @param $field
	 */
	public static function gallery( $field, $type ) {

		if ( $type === 'acf' ) {

			$array = get_field( $field );
			prepare::JSON( $array );

		}

		if ( $type === 'mb' ) {

			$array = rwmb_get_value( $field );
			prepare::JSON( $array );

		}

	}

	/**
	 * Images function.
	 *
	 * @date    24/07/2020
	 * @since   4.0.0
	 *
	 * @param $type
	 *
	 * @param $field
	 */
	public static function images( $field, $type = 'acf' ) {

		if ( $type == 'acf' ) {

			$array = get_field( $field );
			prepare::JSON( $array );

		}

		if ( $type == 'mb' ) {

			$array = rwmb_get_value( $field );
			prepare::JSON( $array );

		}

	}

	/**
	 * Navigation.
	 *
	 * @date    28/07/2020
	 * @since   1.0.0
	 *
	 * @param $name
	 *
	 */
	public static function navigation( $name ) {

		$items = wp_get_nav_menu_items( $name );
		prepare::JSON( $items ? build::navTree( $items, 0 ) : NULL );

	}

}