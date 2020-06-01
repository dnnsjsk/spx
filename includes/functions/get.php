<?php

use spx\get;

/**
 * ACF gallery function.
 *
 * @param $field
 *
 * @since 1.0
 */

function spxGetAcfGallery( $field ) {
	get::acfGallery( $field );
}

/**
 * ACF gallery function.
 *
 * @param $field
 *
 * @since 1.15
 */

function spxGetMbGallery( $field ) {
	get::mbGallery( $field );
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
 *
 * @since 1.0
 */

function spxGetPost( $id = null ) {
	get::post( $id );
}