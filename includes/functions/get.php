<?php

use spx\get;

/**
 * Get gallery.
 *
 * @param $field
 * @param $type
 *
 * @since 1.21
 */

function spxGetGallery( $field, $type ) {
	get::gallery( $field, $type );
}

/**
 * Get navigation.
 *
 * @param $name
 *
 * @since 1.0
 */


function spxGetNavigation( $name ) {
	get::navigation( $name );
}

/**
 * Get post.
 *
 * @param $id
 * @param null $dateFormat
 * @param null $size
 *
 * @since 1.0
 */

function spxGetPost( $id = NULL, $dateFormat = NULL, $size = NULL ) {
	get::post( $id, $dateFormat, $size );
}