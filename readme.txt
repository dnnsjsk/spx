=== spx ===
Contributors: dnnsjsk
Requires at least: 5.0
Tested up to: 5.5.1
Requires PHP: 7.0
Stable tag: 2.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A web component page builder for WordPress developers like you!

== Description ==

Supercharge your workflow using handy components for the next project. Works with any theme, browser and existing code.

== Changelog ==

= 2.0.9 =
* Oxygen: fix attributes text field.
* Container: fix mobile listener.
* Navigation: fix mobile listener.
* Lightbox: fix image being wrapped multiple times.

= 2.0.7 =
* Animate: fix Oxygen editor bug.
* Animate: add 'reverse' prop.
* Animate: add 'repeat' prop.
* Animate: add 'yoyo' prop.

= 2.0.5 =
* Enhancement: remove IE11 support.
* Enhancement: only enqueue module version of spx.
* Enhancement: add bundle version.
* Enhancement: don't load container scripts when container is not on page.
* StencilJS: update to 2.0.3.
* Section Footer: Add 'before-footer' slot.
* Page Single: Fix image-height prop.

= 2.0.4 =
* New: add IDs to script tags.
* New: add .json documentation to plugin files.
* Animate: add 'play' and 'restart' method.
* Animate: set default opacity value to 0.
* Container: add title max-width prop.
* Edit Button: add position CSS prop.
* Iframe: added default src.
* Image Comparison: added default images.
* Notation: fix loop.
* Page Single Post: add author.
* Section Button: always align text center.
* Section Text Media: fix button alignment.
* Slider: add default dynamic pagination bullet default.
* Slider: fix bullets space between.
* Slider: remove console logs.
* Snackbar: fix left padding when reverse property is set without closeable.
* Snackbar: make default position bottom-right.
* Snackbar: make position property reactive.
* Snackbar: remove size property.
* Snackbar: render text into span instead of div.
* Snackbar: add position CSS prop.
* Typewriter: fix everything and add possibility to write multiple words/sentences. -> ['phrase1', 'phrase2']

= 2.0.3 =
* Edit Button: fix ajax handler.

= 2.0.2 =
* Fix: capability for admin menu item.
* Fix: don't load footer script when section system isn't used.
* Fix: author name.
* Fix: remove unnecessary files from build folder.

= 2.0.1 =
* Fix: version number in WP plugin menu.

= 2.0 =

* New: Section section system (container, button, card, footer, header, text-media).
* New: Full page components (single post, documentation).
* New: Slider component.
* New: Notation component.
* New: Code component.
* New: Slideshow component.
* New: Text component.
* New: responsive settings can be now applied using the "bp-" attribute.
* New: elements can now have a custom font-size variable where applicable. (overwrites the global variable)
* New: elements can now have a custom border-radius variable where applicable. (overwrites the global variable)
* New: elements can now have a custom transition-delay variable where applicable. (overwrites the global variable)
* New: elements can now have a custom transition-timing-function variable where applicable. (overwrites the global variable)
* New: global space-scale for components and sections.
* New: reload method for all components.
* Oxygen: new wrapper component that replaces all other native elements.
* Fix: gray color scale is now always applied to the body element as CSS variables.
* Fix: remove unnecessary classes from some components. The Attribute/CSS vars API should now the main way of styling elements.
* Fix: remove possibility for components to have no styling.
* Fix: moved spx admin menu to "Tools".
* Removed: getAcfGallery and getMbGallery have been removed, use getGallery instead.
* Accordion: add icon rotation property.
* Animate: replace endless loop for inner elements with Mutation Observer.
* Edit Button: fixed a bug that wouldn't save fields if they contained special characters.
* Group: additional target prop can be used to only apply settings to certain elements.
* Image Comparison: apply user-select: none to prevent selecting of images.
* Navigation: added border-radius prop.
* Navigation: added box-shadow prop.
* Navigation: adjusted default design.
* Share: background-color prop has been renamed to background.
* Typewriter: fix cursor animation.
* Typewriter: remove "inner" prop. Component now automatically recognizes inner elements.
* Typewriter: replace endless loop for inner elements with Mutation Observer.

= 1.4.2 =
* Fix: license activating/deactivating.
* Fix: build directory filling up after every release.
* Fix: remove composer. (again)

= 1.4.1 =
* Image Comparison: fix slider on touch devices.

= 1.4.0 =
* New: introduce global transition CSS variables.
* Class Toggle: fix generated class array.
* Edit Button: remove dot from success message.
* Edit Button: fix position array generation.
* Group: make all properties reflect to changes.
* Image Comparison: make start prop reflect to changes.
* Lightbox: fix arrow displaying if only one item in gallery.
* Masonry: make columns prop reflect to changes.
* Navigation: add transitions for item hover and child opacity.
* Fix: remove composer.

= 1.3.9 =
* New: Image Comparison component. (Main & Oxygen)
* Lightbox: make icons uniform.
* Lightbox: fix hover states.
* Navigation: component now renders desktop & menu version once and then hides it via CSS.
* Navigation: add icon support for mobile button.
* Navigation: make mobile button focusable.
* Navigation: give mobile button aria role="button".

= 1.3.8 =
* Fix: bump "Tested up to" version to 5.4.2.

= 1.3.7 =
* Lightbox: make body not scrollable when open.
* Lightbox: avoid scroll to top when opening on mobile.

= 1.3.6 =
* Navigation: only create one nav tag.
* Edit Button: position new defaults to bottom-right again.

= 1.3.5 =
* New: Lightbox component.
* Masonry: fix generated CSS when being nested inside Lightbox.
* Scrollspy: add DidLoad event.
* Navigation: fix desktop menu flashing in when on mobile.
* Navigation: fix sub sub menus not positioning correctly when navigation is fixed.
* Enhance: add CSS variable to all components that can have a different display property.

= 1.3.4 =
* Oxygen: fix Typewriter JS error.
* Oxygen: fix possible Animate bottleneck on front-end.

= 1.3.3 =
* Oxygen: Fix typo in editor subheading.

= 1.3.2 =
* New: Typewriter component.
* Scrollspy: Don't force url-change to be true.

= 1.3.1 =
* Snackbar: make height even when component is closeable.

= 1.3.0 =
* Oxygen: disabled editor CSS generation.
* Oxygen: organized components more logically.
* Oxygen: add snackbar element.
* Animate: fix viewport conditions in editor.
* Animate: swap button lists for checkboxes.
* Snackbar: give snackbar close button the following aria attribute: role="button".

= 1.2.9 =
* Edit Button: add JS events and edit-id capabilities.

= 1.2.8 =
* Edit Button: added wp_options support.

= 1.2.7 =
* Animate: add easing options in Oxygen.

= 1.2.6 =
* Animate: fix animation in Oxygen editor.

= 1.2.5 =
* Navigation: fix sub menu positioning.

= 1.2.4 =
* Navigation: add options for mobile items. (padding, color, color-hover, background & background-hover)

= 1.2.3 =
* NEW: Native Oxygen integration. (animate, class-toggle, mockup & offset component)
* New: Offset component.
* Navigation: add loaded event.
* Navigation: prevent hash link from jumping to the top.
* Animate: add sane defaults.
* Class toggle: add sane defaults.
* Class toggle: optimized selector selection.
* Class toggle: target will now toggle all elements with selector.
* Mockup: 13 new responsive devices. (https://picturepan2.github.io/devices.css/)
* Enhanced: spx now has it's own page in the admin.
* Enhanced: alignments on admin page.

= 1.2.2 =
* Navigation: fix font-size inheritance.

= 1.2.1 =
* New: new color scale CSS variable for all colour attributes
* New: unified gallery helper function.
* Enhanced: all components (where applicable) have a font-size attribute with variable set in place now.
* Enhanced: all font-sizes and paddings/margins are now in em.
* Accordion: add color attributes for header and content.
* Navigation: fix mobile menu link styles.
* Navigation: change wrapper tag to <nav>.
* Navigation: add default mobile breakpoint. (768)
* Share: added custom colour options.

= 1.2.0 =
* New: Snackbar component.
* Edit button: Adapted new positioning properties from Snackbar component.
* Edit button: Fixed font inheritance.
* StencilJS: Update to 1.14.0.

= 1.1.9 =
* New: Share component.

= 1.1.8 =
* Navigation: simplified child and mobile placement. (always defaults to bottom)
* Navigation: fixed CSS variable for distance between mobile menu button and menu.

= 1.1.7 =
* New: Scrollspy component.
* Navigation: fixed position calculation when tabbing through links.
* Navigation: vertical now renders correctly.
* Navigation: added child-item-margin-left attribute for mobile and vertical mode.
* StencilJS: Update to 1.13.0.

= 1.1.6 =
* Optimized queries of Masonry PHP helper component.

= 1.1.5 =
* New: Metabox helper for Masonry component.
* New: child menu positioning props for Navigation component.
* New: positioning props for Edit Button component.

= 1.1.4 =
* Fix: readme file.

= 1.1.3 =
* Fix: test-mode for Edit Button component.

= 1.1.2 =
* Fix: file versioning to prevent JS errors after updates.

= 1.1.1 =
* New: iframe component.

= 1.1.0 =
* Fix: plugin header.

= 1.0.9 =
* Pre-release bug fix.

= 1.0.8 =
* Bug fixes.

= 1.0.7 =
* Fix: Navigation.

= 1.0.6 =
* Add other readme tags so WP validator is happy.

= 1.0.5 =
* Add GPL license.

= 1.0.4 =
* Change description.

= 1.0.3 =
* Fixed some minor pre-launch issues.

= 1.0.2 =
* Add tested up to version to readme.

= 1.0.1 =
* Change folder structure and set up automatic updates.

= 1.0 =
* Initial release.
