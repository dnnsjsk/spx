<?php

/**
 * Gets data to be prepared for use in data-attributes.
 *
 * @since 1.0
 */

namespace spx;

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

	/**
	 * Post.
	 *
	 * @date    20/10/2020
	 * @since   1.1.9
	 *
	 * @param null $dateFormat
	 * @param null $size
	 *
	 * @param      $id
	 */

	public static function post( $id = NULL, $dateFormat = NULL, $size = NULL ) {

		$idCheck = $id === NULL ? get_the_ID() : $id;

		$avatar = get_user_meta( get_the_author_meta( 'id' ), 'simple_local_avatar' );

		$object = (object) [
			'title'             => get_the_title( $idCheck ),
			'author_first_name' => get_the_author_meta( 'first_name' ),
			'author_last_name'  => get_the_author_meta( 'last_name' ),
			'author_image'      => $avatar[0]['full'],
			'date'              => get_the_date( $dateFormat, $idCheck ),
			'image'             => get_the_post_thumbnail_url( $idCheck, $size === NULL ? 'original' : $size ),
			'content'           => do_blocks( get_the_content( $idCheck ) )
		];

		prepare::JSON( $object );

	}

}