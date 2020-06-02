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

function spxGetPost( $id = null, $dateFormat = null, $size = null ) {
	get::post( $id, $dateFormat, $size );
}

/**
 * Get breadcrumbs.
 *
 * @since 1.0
 */

function spxGetBreadcrumbs() {
	get::breadcrumbs();
}