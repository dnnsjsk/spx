<?php

use spx\Get;

/**
 * Get gallery.
 *
 * @date    25/10/2020
 * @since   1.2.1
 *
 * @param $field
 * @param $type
 *
 */

function spxGetGallery( $field, $type ) {
	Get::gallery( $field, $type );
}

/**
 * Get navigation.
 *
 * @date    28/07/2020
 * @since   1.0.0
 *
 * @param $name
 *
 */


function spxGetNavigation( $name ) {
	Get::navigation( $name );
}