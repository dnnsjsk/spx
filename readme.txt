=== spx ===
Contributors: dnnsjsk
Requires at least: 5.0
Tested up to: 5.6
Requires PHP: 7.0
Stable tag: 2.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A web component page builder for WordPress developers like you!

== Description ==

Supercharge your workflow using handy components for the next project. Works with any theme, browser and existing code.

== Changelog ==

= 3.0.2 =
* Fix: make 'tested up to version' 5.6
* Image comparison: add lazy load functionality

= 3.0.1 =
* Code: add 'clipboard-button-text' attribute
* Code: add 'clipboard-button-text-copied' attribute

= 3.0.0 =
* Accordion: add 'close' method
* Accordion: add 'disable-animation' attribute - this is necessary when the accordion is starting as hidden
* Accordion: add 'header-text-closed' to change header text when component is open
* Accordion: add 'link' attribute to link a set of accordions together
* Accordion: add 'link-type' attribute
* Accordion: add 'open' method
* Accordion: add 'reverse' attribute to swap icon and text
* Accordion: add 'toggle' method
* Accordion: align header text with icon
* Accordion: remove 'height: 100%' from icon wrap to fix overflowing on iOS devices
* Code: add 'Copy to clipboard' button
* Code: add 'clipboard-button-background' attribute
* Code: add 'clipboard-button-color' attribute
* Code: add 'clipboard-button-font-padding' attribute
* Code: add 'clipboard-button-font-size' attribute
* Code: add 'clipboard-button-font-weight' attribute
* Code: add 'clipboard-button-text-transform' attribute
* Code: add 'hide-scrollbar' attribute
* Code: add 'line-numbers-background' attribute
* Code: add 'line-numbers-colors' attribute
* Code: add JSON support
* Code: add line numbers
* Container: change default colors from Material to Tailwind
* Container: change to linear font sizes and spacings
* Container: container attributes can be overwritten now using the same attributes starting with a 'g-' instead
* Data API: add 'default', 'attribute' and 'defaultValueAttributes' entries
* Edit Button: remove query string from console
* Enhancement: change default border-radius
* Enhancement: remove theme function
* Enhancement: switch to semantic versioning
* Icon: change default display to 'inline-flex'
* Iframe: add 'document-border' attribute
* Iframe: add 'document-border-radius' attribute
* Iframe: add 'document-height' attribute
* Iframe: add 'document-width' attribute
* Iframe: add 'fit' attribute
* Iframe: add 'lazy' attribute
* Iframe: add 'type' attribute
* Image Comparison: make before image 2px bigger to avoid cross browser and iframe inconsistencies
* Lightbox: fix images not taking up full height of wrapper div
* Masonry: fix images not taking up full height of wrapper div
* Navigation: add indicators for nested menu items on mobile
* New: Shortcodes
* New: update default color scale to Tailwind 'gray'
* Offset: apply offset variable to body instead of html
* Oxygen: deprecate singular elements in favor of the master element
* Oxygen: make elements load the correct initial state
* Oxygen: remove 'group', 'iframe', 'navigation', 'notation' and 'snackbar' from master component - use these
* Page Docs: change to linear font sizes and spacings
* Section Card: change to linear font sizes and spacings
* Section Footer: change to linear font sizes and spacings
* Section Header: change to linear font sizes and spacings
* Section Text Media: change to linear font sizes and spacings
* Slideshow: add 'display' attribute
* Slideshow: add 'overflow' attribute
* Slideshow: add conditional check to resize function
* StencilJS: update to 2.3.0
* Text: change to linear font sizes and spacings
* Text: fix global vars not being set correctly
* Updater: make deactivate function static

= 2.2.8 =
* Fix: updater again

= 2.2.7 =
* Fix: updater

= 2.2.6 =
* Fix: insecure .zip warning in Account page

= 2.2.5 =
* Fix: missing file error

= 2.2.3 =
* Code: add 'display' attribute
* Enhancement: new updater
* Fix: change admin page slug back to 'spx-license'
* Page Docs: add 'navigation-height-adjust' attribute
* Page Docs: automatically scroll navigation
* Scrollspy: add 'scrolling' attribute to automatically scroll to active link
* Scrollspy: add 'scrolling-offset' attribute

= 2.2.2 =
* Fix: Make 'Tested up to version' 5.5.3

= 2.2.1 =
* Code: add 'height' attribute
* Code: add 'overflow' attribute
* Container: add 'disable-colors' attribute
* Container: load gray scale when container is on page
* Container: remove '0' from two two digit color variables
* Enhancement: change 'documentation' folder to 'data'
* Enhancement: enqueue spx to Gutenberg
* Fix: fix redirect when license was wrong
* Fix: refactor updater
* Page Docs: add 'navigation-padding' attribute
* Page Docs: add 'navigation-top' attribute
* Page Docs: remove 'height' attribute
* Section Footer: add 'background' attribute
* Section Footer: add 'justify-content' attribute
* Section Footer: add 'max-width' attribute
* Section Footer: add gap value to inner divs
* Section Footer: remove 'display' attribute in favour of 'flex'
* Section Footer: remove 'theme' attribute in favour for separate attributes
* Section Header: don't show mobile logo if none is set

= 2.2.0 =
* Edit Button: added possibility to change various different types of content (ACF, options etc.) with one button
* Edit Button: added possibility to edit normal and nested repeater fields
* Edit Button: removed 'id' attribute
* Edit Button: removed 'type' attribute
* Slideshow: add 'images' attribute
* Slideshow: add 'images-size' attribute
* Slideshow: add 'images-src' attribute
* Slideshow: add support for helper function to be used to populate component with images

= 2.1.3 =
* Animate: add 'repeat-delay' attribute
* Code: add 'background' attribute
* Code: add 'font-size' attribute
* Code: add Twig support
* Code: fix font-size bug on mobile devices
* Dev: add prettier
* Fix: change plugin author name
* Page Docs: add 'spxPageDocsDidLoad' event
* Page Docs: add condition to check if there is any content inside component
* Page Docs: remove globalComponentDidLoad mutation observer
* Section Header: add 'navigation-align' attribute
* Share: add 'item-filter-hover' attribute
* Share: add 'item-transition-duration' attribute
* Share: add 'item-transition-function' attribute
* Slider: add 'images' attribute
* Slider: add 'images-size' attribute
* Slider: add 'images-src' attribute
* Slider: add support for helper function to be used to populate component with images
* Text: add 'link-underline-color' attribute
* Text: add 'text-max-w' attribute
* Text: add 'text-min-w' attribute
* Text: add 'text-type' attribute
* Text: add linear scale as default
* Text: add markdown parsing support
* Text: set link color to 'inherit'

= 2.1.2 =
* Accordion: add 'child-icon-type' attribute
* Accordion: change default icon
* Enhancement: set Ionicons (https://ionicons.com/) as default icon set throughout components
* Image Comparison: change default icon
* Lightbox: add 'height' attribute
* Lightbox: add 'width' attribute
* Lightbox: change default icons
* Navigation: add 'child-icon-type' attribute
* Navigation: add 'mobile-icon-type' attribute
* Navigation: change default icon
* Navigation: set correct icon position for nested child items
* New: Icon component
* Section Footer: add 'after' slot
* Section Footer: add 'display' attribute
* Share: change default icons
* Slider: add 'effect' attribute
* Slider: add 'navigation-icon-next' attribute
* Slider: add 'navigation-icon-prev' attribute
* Slider: add 'navigation-icon-type' attribute
* Slider: change default navigation icons
* Slider: fix 'navigation-padding' attribute
* Slider: remove unnecessary styles from component
* Snackbar: change default icon

= 2.1.1 =
* Code: set correct right spacing if content is overflowing
* Enhancement: remove footer.js
* Navigation: fix desktop menu flashing on mobile
* Page Docs: add attribute to create navigation from different heading level
* Page Docs: add bottom space option
* Page Docs: add default navigation background color
* Page Docs: add possibility to disable heading from creating navigation entry
* Page Docs: remove special characters from id generation
* Section Text Media: add no-margin-top attribute
* Slider: add attributes for screen reader navigation messages
* Slider: fix navigation not working in edge cases
* Slider: general fixes
* Snackbar: add identifier attribute
* Snackbar: add spaceY attribute
* Snackbar: add target attribute
* Snackbar: automatically stack snackbars if multiple are called in a short timespan
* Snackbar: remove DOM element after animation delay

= 2.1.0 =
* Accordion: add animation
* Accordion: add role="button" and aria-pressed attributes
* Accordion: add tab-index attribute to header
* Accordion: change default icon rotation to 180 degrees
* Accordion: open content by pressing 'enter'
* Container: add focus-within styles
* Resize observer: only create when 'bp-' attribute is applied
* Slider: add role="button" attribute to tabs
* Slider: add tab-index attribute to tabs
* Slider: fix clickable attribute
* Slider: fix dynamic bullets
* Slider: fix space between pagination bullets
* Slider: fix vertical direction
* Slider: navigate through tabs by pressing 'enter'

= 2.0.9 =
* Container: fix mobile listener
* Lightbox: fix image being wrapped multiple times
* Navigation: fix mobile listener
* Oxygen: fix attributes text field

= 2.0.7 =
* Animate: add 'repeat' attribute
* Animate: add 'reverse' attribute
* Animate: add 'yoyo' attribute
* Animate: fix Oxygen editor bug

= 2.0.5 =
* Enhancement: add bundle version
* Enhancement: don't load container scripts when container is not on page
* Enhancement: only enqueue module version of spx
* Enhancement: remove IE11 support
* Page Single: Fix image-height attribute
* Section Footer: Add 'before-footer' slot
* StencilJS: update to 2.0.3

= 2.0.4 =
* Animate: add 'play' and 'restart' method
* Animate: set default opacity value to 0
* Container: add title max-width attribute
* Edit Button: add position CSS attribute
* Iframe: added default src
* Image Comparison: added default images
* New: add .json documentation to plugin files
* New: add IDs to script tags
* Notation: fix loop
* Page Single Post: add author
* Section Button: always align text center
* Section Text Media: fix button alignment
* Slider: add default dynamic pagination bullet default
* Slider: fix bullets space between
* Slider: remove console logs
* Snackbar: add position CSS attribute
* Snackbar: fix left padding when reverse attribute is set without closeable
* Snackbar: make default position bottom-right
* Snackbar: make position attribute reactive
* Snackbar: remove size attribute
* Snackbar: render text into span instead of div
* Typewriter: fix everything and add possibility to write multiple words/sentences. -> ['phrase1', 'phrase2']

= 2.0.3 =
* Edit Button: fix ajax handler

= 2.0.2 =
* Fix: author name
* Fix: capability for admin menu item
* Fix: don't load footer script when section system isn't used
* Fix: remove unnecessary files from build folder

= 2.0.1 =
* Fix: version number in WP plugin menu

= 2.0.0 =
* Accordion: add icon rotation attribute
* Animate: replace endless loop for inner elements with Mutation Observer
* Edit Button: fixed a bug that wouldn't save fields if they contained special characters
* Fix: gray color scale is now always applied to the body element as CSS variables
* Fix: moved spx admin menu to 'Tools'
* Fix: remove possibility for components to have no styling
* Fix: remove unnecessary classes from some components. The Attribute/CSS vars API should now the main way of styling elements
* Group: additional target attribute can be used to only apply settings to certain elements
* Image Comparison: apply user-select: none to prevent selecting of images
* Navigation: added border-radius attribute
* Navigation: added box-shadow attribute
* Navigation: adjusted default design
* New: Code component
* New: Full page components (single post, documentation)
* New: Notation component
* New: Section section system (container, button, card, footer, header, text-media)
* New: Slider component
* New: Slideshow component
* New: Text component
* New: elements can now have a custom border-radius variable where applicable. (overwrites the global variable)
* New: elements can now have a custom font-size variable where applicable. (overwrites the global variable)
* New: elements can now have a custom transition-delay variable where applicable. (overwrites the global variable)
* New: elements can now have a custom transition-timing-function variable where applicable. (overwrites the global variable)
* New: global space-scale for components and sections
* New: reload method for all components
* New: responsive settings can be now applied using the 'bp-' attribute
* Oxygen: new wrapper component that replaces all other native elements
* Removed: getAcfGallery and getMbGallery have been removed, use getGallery instead
* Share: background-color attribute has been renamed to background
* Typewriter: fix cursor animation
* Typewriter: remove 'inner' attribute. Component now automatically recognizes inner elements
* Typewriter: replace endless loop for inner elements with Mutation Observer

= 1.4.2 =
* Fix: build directory filling up after every release
* Fix: license activating/deactivating
* Fix: remove composer. (again)

= 1.4.1 =
* Image Comparison: fix slider on touch devices

= 1.4.0 =
* Class Toggle: fix generated class array
* Edit Button: fix position array generation
* Edit Button: remove dot from success message
* Fix: remove composer
* Group: make all attributes reflect to changes
* Image Comparison: make start attribute reflect to changes
* Lightbox: fix arrow displaying if only one item in gallery
* Masonry: make columns attribute reflect to changes
* Navigation: add transitions for item hover and child opacity
* New: introduce global transition CSS variables

= 1.3.9 =
* Lightbox: fix hover states
* Lightbox: make icons uniform
* Navigation: add icon support for mobile button
* Navigation: component now renders desktop & menu version once and then hides it via CSS
* Navigation: give mobile button aria role="button"
* Navigation: make mobile button focusable
* New: Image Comparison component. (Main & Oxygen)

= 1.3.8 =
* Fix: bump 'Tested up to' version to 5.4.2

= 1.3.7 =
* Lightbox: avoid scroll to top when opening on mobile
* Lightbox: make body not scrollable when open

= 1.3.6 =
* Edit Button: position new defaults to bottom-right again
* Navigation: only create one nav tag

= 1.3.5 =
* Enhance: add CSS variable to all components that can have a different display attribute
* Masonry: fix generated CSS when being nested inside Lightbox
* Navigation: fix desktop menu flashing in when on mobile
* Navigation: fix sub sub menus not positioning correctly when navigation is fixed
* New: Lightbox component
* Scrollspy: add 'spxScrollspyDidLoad' event

= 1.3.4 =
* Oxygen: fix Typewriter JS error
* Oxygen: fix possible Animate bottleneck on front-end

= 1.3.3 =
* Oxygen: Fix typo in editor subheading

= 1.3.2 =
* New: Typewriter component
* Scrollspy: Don't force url-change to be true

= 1.3.1 =
* Snackbar: make height even when component is closeable

= 1.3.0 =
* Animate: fix viewport conditions in editor
* Animate: swap button lists for checkboxes
* Oxygen: add snackbar element
* Oxygen: disabled editor CSS generation
* Oxygen: organized components more logically
* Snackbar: give snackbar close button the following aria attribute: role="button"

= 1.2.9 =
* Edit Button: add JS events and edit-id capabilities

= 1.2.8 =
* Edit Button: added wp_options support

= 1.2.7 =
* Animate: add easing options in Oxygen

= 1.2.6 =
* Animate: fix animation in Oxygen editor

= 1.2.5 =
* Navigation: fix sub menu positioning

= 1.2.4 =
* Navigation: add options for mobile items. (padding, color, color-hover, background & background-hover)

= 1.2.3 =
* Animate: add sane defaults
* Class toggle: add sane defaults
* Class toggle: optimized selector selection
* Class toggle: target will now toggle all elements with selector
* Enhanced: alignments on admin page
* Enhanced: spx now has it's own page in the admin
* Mockup: 13 new responsive devices. (https://picturepan2.github.io/devices.css/)
* New: Native Oxygen integration. (animate, class-toggle, mockup & offset component)
* Navigation: add loaded event
* Navigation: prevent hash link from jumping to the top
* New: Offset component

= 1.2.2 =
* Navigation: fix font-size inheritance

= 1.2.1 =
* Accordion: add color attributes for header and content
* Enhanced: all components (where applicable) have a font-size attribute with variable set in place now
* Enhanced: all font-sizes and paddings/margins are now in em
* Navigation: add default mobile breakpoint. (768)
* Navigation: change wrapper tag to nav
* Navigation: fix mobile menu link styles
* New: new color scale CSS variable for all colour attributes
* New: unified gallery helper function
* Share: added custom colour options

= 1.2.0 =
* Edit button: Adapted new positioning attributes from Snackbar component
* Edit button: Fixed font inheritance
* New: Snackbar component
* StencilJS: Update to 1.14.0

= 1.1.9 =
* New: Share component

= 1.1.8 =
* Navigation: fixed CSS variable for distance between mobile menu button and menu
* Navigation: simplified child and mobile placement. (always defaults to bottom)

= 1.1.7 =
* Navigation: added child-item-margin-left attribute for mobile and vertical mode
* Navigation: fixed position calculation when tabbing through links
* Navigation: vertical now renders correctly
* New: Scrollspy component
* StencilJS: Update to 1.13.0

= 1.1.6 =
* Enhancement: optimized queries of Masonry PHP helper component

= 1.1.5 =
* New: Metabox helper for Masonry component
* New: child menu positioning attributes for Navigation component
* New: positioning attributes for Edit Button component

= 1.1.4 =
* Fix: readme file

= 1.1.3 =
* Fix: test-mode for Edit Button component

= 1.1.2 =
* Fix: file versioning to prevent JS errors after updates

= 1.1.1 =
* New: iframe component

= 1.1.0 =
* Fix: plugin header

= 1.0.0 =
* New: initial release