<?php

/**
 * Gets data to be prepared for use in data-attributes.
 *
 * @since 1.0
 */

namespace spx;

class get {

	/**
	 * ACF gallery.
	 *
	 * @param $field
	 *
	 * @since 1.0
	 */

	public static function acfGallery( $field ) {

		$array = get_field( $field );
		prepare::JSON( $array );

	}

	/**
	 * Metabox gallery.
	 *
	 * @param $field
	 *
	 * @since 1.15
	 */

	public static function mbGallery( $field ) {

		$array = rwmb_get_value( $field );
		prepare::JSON( $array );

	}

	/**
	 * Navigation.
	 *
	 * @param $name
	 *
	 * @since 1.0
	 */

	public static function navigation( $name ) {

		$items = wp_get_nav_menu_items( $name );
		prepare::JSON( $items ? build::navTree( $items, 0 ) : null );

	}

}
