<?php

namespace spx;

/**
 * Sets global settings.
 *
 * @date  22/09/2020
 * @since 2.0
 */
class Set
{
    /**
     * Color.
     *
     * @date    28/07/2020
     * @since   1.0.0
     *
     * @param $color
     *
     * @param $type
     */
    public static function color($color, $type)
    {
        if ($color === get_field($color)) {
            die();
        } else {
            update_option("spx_color_" . $type . "", $color);
        }
    }
}
