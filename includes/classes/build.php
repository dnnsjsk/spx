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

class build {

	public static function navTree( array &$elements, $parentId = 0 ) {
		$branch = array();
		foreach ( $elements as &$element ) {
			if ( $element->menu_item_parent == $parentId ) {
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
