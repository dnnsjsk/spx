<?php

/**
 * Init class.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */

namespace spx;

class Init
{
    public function script()
    {
        global $post;

        $localizeArray = [
            "ajax" => admin_url("admin-ajax.php"),
            "postId" => $post->ID,
            "nonce" => wp_create_nonce("ajax-nonce"),
        ];

        wp_enqueue_script(
            "spx",
            plugins_url(
                "../assets/components/build/spx.esm.js",
                dirname(__FILE__)
            ),
            [],
            filemtime(SPX_DIR . "/assets/components/build/spx.esm.js"),
            false
        );

        wp_localize_script("spx", "spx", $localizeArray);
    }

    /**
     * Enqueue scripts.
     *
     * @date    28/07/2020
     * @since   1.0.0
     */
    private function enqueueScripts()
    {
        add_action("wp_enqueue_scripts", [$this, "script"]);
        add_action("enqueue_block_editor_assets", [&$this, "script"]);
    }

    /**
     * Add correct script tags.
     *
     * @date    28/07/2020
     * @since   1.0.0
     */
    private function addScriptTags()
    {
        add_filter(
            "script_loader_tag",
            function ($tag, $handle, $source) {
                if ("spx" === $handle) {
                    if (defined("SHOW_CT_BUILDER")) {
                        $tag =
                            '<script type="module" id="spx-js" src="' .
                            $source .
                            '"></script>';
                    } else {
                        $tag =
                            '<script type="module" id="spx-js" data-src="' .
                            $source .
                            '"></script>';
                    }
                }

                return $tag;
            },
            10,
            3
        );
    }

    /**
     * Remove assets if no components are found.
     *
     * @date    24/03/2021
     * @since   3.1.1
     */
    private function lazyLoadAssets()
    {
        $classes = apply_filters("spx/lazyload_whitelist", []);
        $classesJS = implode(",", $classes);

        add_filter("wp_footer", function () use (&$classesJS) {
            if (!defined("SHOW_CT_BUILDER")) {
                echo "<script type='text/javascript' id='spx-lazyload'>
				function getAllTagMatches(regEx) {
				  return Array.prototype.slice.call(document.body.querySelectorAll('*')).filter(function (el) { 
				    return el.tagName.match(regEx);
				  });
				}
	        
	            const spxWhitelist = '$classesJS';
				const spxWhiteListArray = spxWhitelist.replaceAll(' ', '').split(',');
				let classNumber = 0;
				spxWhiteListArray.forEach(item => {
				  if (document.body.classList.contains(item)) {
				    classNumber++;
				  }
			    });
			    
			    if (getAllTagMatches(/^spx/i).length >= 1 || classNumber >= 1) {
				  document.querySelector('#spx-js').src = document.querySelector('#spx-js').getAttribute('data-src');
				} else {
                  if (document.querySelector('#spx-js')) {
				    document.querySelector('#spx-js').remove();
				  }
				  if (document.querySelector('#spx-js-extra')) {
				    document.querySelector('#spx-js-extra').remove();
				  }
				  if (document.querySelector('#spx-js-extra')) {
				    document.querySelector('#spx-css').remove();
				  }
				}
				</script>";
            }
        });
    }

    /**
     * Inline CSS.
     *
     * @date    22/09/2020
     * @since   2.0.4
     */
    public static function addCss()
    {
        $str = file_get_contents(SPX_DIR . "/assets/components/build/spx.css");

        add_action("wp_head", function () use (&$str) {
            echo '<style id="spx-css">' . $str . "</style>";
        });

        add_action("admin_head", function () use (&$str) {
            echo '<style id="spx-css">' . $str . "</style>";
        });
    }

    /**
     * Create shortcodes.
     *
     * @date    06/12/2020
     * @since   3.0.0
     */
    public static function shortcodes()
    {
        $path = SPX_DIR . "/data/components/";
        $files = array_slice(scandir($path), 2);

        function get_helper($array, $key, $value): array
        {
            $results = [];
            if (is_array($array)) {
                if (isset($array[$key]) && $array[$key] == $value) {
                    $results[] = $array;
                }
                foreach ($array as $subarray) {
                    $results = array_merge(
                        $results,
                        get_helper($subarray, $key, $value)
                    );
                }
            }

            return $results;
        }

        foreach ($files as $file) {
            $name = basename($file, ".json");

            if (pathinfo($file)["extension"] === "json") {
                add_shortcode($name, function ($atts, $content = null) use (
                    &$path,
                    $file,
                    $name
                ) {
                    $object = json_decode(
                        file_get_contents($path . "/" . $file),
                        true
                    );
                    $array = [];
                    $helpers = [];

                    foreach ($object["properties"] as $prop) {
                        $array[$prop["attribute"]] = $prop["default"]
                            ? trim($prop["default"], '\'"')
                            : "";
                        array_walk_recursive($prop["tags"], function (
                            $item,
                            $key
                        ) use (&$helpers, $prop) {
                            if ($item == "function") {
                                $helpers[$prop["attribute"]] = get_helper(
                                    $prop["tags"],
                                    "name",
                                    "function"
                                )[0]["text"];
                            }
                        });
                    }

                    $a = shortcode_atts($array, $atts);

                    $output = "<" . $name . " ";
                    foreach ($a as $key => $value) {
                        if (!empty($value) || $value == "0") {
                            if ($helpers[$key]) {
                                if ($key == "images") {
                                    $val = explode(", ", $value);

                                    $output .=
                                        $key .
                                        '="' .
                                        call_user_func(
                                            $helpers[$key],
                                            $val[0],
                                            $val[1],
                                            $val[2] ?: get_the_ID(),
                                            true
                                        ) .
                                        '" ';
                                } else {
                                    $output .=
                                        $key .
                                        '="' .
                                        call_user_func(
                                            $helpers[$key],
                                            $value,
                                            true
                                        ) .
                                        '" ';
                                }
                            } else {
                                $output .= $key . '="' . $value . '" ';
                            }
                        }
                    }
                    $output .= ">";
                    if ($content != null) {
                        $output .= $content;
                    }
                    $output .= "</" . $name . ">";

                    return $output;
                });
            }
        }
    }

    /**
     * Construct.
     *
     * @date    22/09/2020
     * @since   2.0.5
     */
    public function __construct()
    {
        self::enqueueScripts();
        self::addScriptTags();
        self::addCss();
        self::lazyLoadAssets();
        self::shortcodes();
    }
}
