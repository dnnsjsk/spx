<?php

/**
 * Oxygen class.
 *
 * @date  22/09/2021
 * @since 4.0
 */

if (!class_exists("spxOxygen") && apply_filters("spx/oxygen_elements", false)) {
    class spxOxygen
    {
        function __construct()
        {
            add_action("oxygen_add_plus_sections", [$this, "registerSections"]);
            add_action("oxygen_add_plus_spx_section_content", [
                $this,
                "registerSubSections",
            ]);
        }

        function registerSections()
        {
            CT_Toolbar::oxygen_add_plus_accordion_section("spx", __("spx"));
        }

        function registerSubSections()
        {
            ?>
          <h2><?php _e("General", "oxygen"); ?></h2>
			<?php do_action("oxygen_add_plus_spx_general"); ?>

		<?php
        }
    }

    new spxOxygen();
}
