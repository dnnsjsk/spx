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
 * @param string $id
 * @param bool $encode
 *
 * @return string|void
 */
function spxGetGallery( $field, $type, string $id = '', bool $encode = false ) {
	return Get::gallery( $field, $type, $id, $encode );
}

/**
 * Get images.
 *
 * @date    22/09/2021
 * @since   4.0.0
 *
 * @param $field
 * @param $type
 * @param string $id
 * @param bool $encode
 *
 * @return string|void
 */
function spxGetImages( $field, $type, string $id = '', bool $encode = false ) {
	return Get::images( $field, $type, $id, $encode );
}

/**
 * Get navigation.
 *
 * @date    28/07/2020
 * @since   1.0.0
 *
 * @param      $name
 * @param bool $encode
 *
 * @return string|void
 */
function spxGetNavigation( $name, bool $encode = FALSE ) {
	return Get::navigation( $name, $encode );
}