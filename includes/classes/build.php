<?php

namespace spx;

/**
 * Build a tree from a flat array.
 *
 * @date    28/07/2020
 * @since   1.0.0
 *
 * @param array $elements
 * @param int   $parentId
 *
 * @return array
 */
class Build {

	public static function navTree( array &$elements, $parentId = 0 ) {
		$branch = [];
		foreach ( $elements as &$element ) {
			if ( $element->menu_item_parent == $parentId ) {
				$current = ( $_SERVER['REQUEST_URI'] == parse_url( $element->url, PHP_URL_PATH ) ) ? 'spx-navigation__item--active' : '';
				if ( $current ) {
					if ( ! empty( $element->classes ) ) {
						array_push( $element->classes, $current );
					} else {
						$element->classes = $current;
					}
				}
				$children = self::navTree( $elements, $element->ID );
				if ( $children ) {
					$element->spxChildren = $children;
				}

				$branch[ $element->ID ] = $element;
				unset( $element );
			}
		}

		return $branch;
	}

}
