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
	 * deprecated
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
	 * deprecated
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
	 * Gallery function.
	 *
	 * @param $field
	 * @param $type
	 *
	 * @since 1.21
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

	/**
	 * Post.
	 *
	 * @param $id
	 * @param null $dateFormat
	 * @param null $size
	 *
	 * @since 1.19
	 */

	public static function post( $id = null, $dateFormat = null, $size = null ) {

		$idCheck = $id === null ? get_the_ID() : $id;

		$object = (object) [
			'title'   => get_the_title( $idCheck ),
			'date'    => get_the_date( $dateFormat, $idCheck ),
			'image'   => get_the_post_thumbnail_url( $idCheck, $size === null ? 'original' : $size ),
			'content' => do_blocks( get_the_content( $idCheck ) )
		];

		prepare::JSON( $object );

	}

	/**
	 * Breadcrumbs.
	 *
	 * @since 1.21
	 */

	public static function breadcrumbs() {



	}

}