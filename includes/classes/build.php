<?php

/**
 * Build a tree from a flat array.
 *
 * @param array $elements
 * @param int $parentId
 *
 * @return array
 * @since 1.0
 */

namespace spx;

class Build {

	public static function navTree( array &$elements, $parentId = 0 ) {
		$branch = array();
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
