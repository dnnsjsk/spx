<?php

use spx\Get;

/**
 * Get gallery.
 *
 * @param $field
 * @param $type
 *
 * @since 1.21
 */

function spxGetGallery( $field, $type ) {
	Get::gallery( $field, $type );
}

/**
 * Get navigation.
 *
 * @param $name
 *
 * @since 1.0
 */


function spxGetNavigation( $name ) {
	Get::navigation( $name );
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
	Get::post( $id, $dateFormat, $size );
}