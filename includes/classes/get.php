<?php

namespace spx;

/**
 * Gets data to be prepared for use in data-attributes.
 *
 * @since 1.0
 */
class Get
{
    /**
     * Gallery function.
     *
     * @date    25/10/2020
     * @since   1.2.1
     *
     * @param        $field
     * @param string $type
     * @param string $id
     * @param bool   $encode
     *
     * @return string|void
     */
    public static function gallery(
        $field,
        string $type,
        string $id = "",
        bool $encode = false
    ) {
        if ($type === "acf") {
            $array = get_field($field, $id === "" ? get_the_ID() : $id);

            return prepare::JSON($array, $encode);
        }

        if ($type === "mb") {
            $array = rwmb_get_value($field);

            return prepare::JSON($array, $encode);
        }
    }

    /**
     * Images function.
     *
     * @date    22/09/2021
     * @since   4.0.0
     *
     * @param        $field
     * @param string $type
     * @param string $id
     * @param bool   $encode
     *
     * @return string|void
     */
    public static function images(
        $field,
        string $type,
        string $id = "",
        bool $encode = false
    ) {
        if ($type === "acf") {
            $array = get_field($field, $id === "" ? get_the_ID() : $id);

            return prepare::JSON($array, $encode);
        }

        if ($type === "mb") {
            $array = rwmb_get_value($field);

            return prepare::JSON($array, $encode);
        }
    }

    /**
     * Navigation.
     *
     * @date    28/07/2020
     * @since   1.0.0
     *
     * @param      $name
     * @param bool $encode
     *
     * @return string
     */
    public static function navigation($name, bool $encode = false): string
    {
        $items = wp_get_nav_menu_items($name);

        return prepare::JSON(
            $items ? build::navTree($items, 0) : null,
            $encode
        );
    }
}
