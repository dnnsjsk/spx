# spx-slider

<!-- Auto Generated Below -->


## Properties

| Property                            | Attribute                              | Description                                               | Type      | Default                        |
| ----------------------------------- | -------------------------------------- | --------------------------------------------------------- | --------- | ------------------------------ |
| `autoheight`                        | `autoheight`                           | Automatically adjusts height of slider.                   | `boolean` | `false`                        |
| `autoplay`                          | `autoplay`                             | Starts navigating to the next slide when page is loaded.  | `boolean` | `false`                        |
| `autoplayDelay`                     | `autoplay-delay`                       | Autoplay delay.                                           | `number`  | `6000`                         |
| `autoplayDisableOnInteraction`      | `autoplay-disable-on-interaction`      | Disable autoplay after interaction with slides.           | `boolean` | `false`                        |
| `centeredSlides`                    | `centered-slides`                      | Centers slides in viewport.                               | `boolean` | `false`                        |
| `effect`                            | `effect`                               | Slider effect.                                            | `string`  | `'slide'`                      |
| `gap`                               | `gap`                                  | Space between slides.                                     | `number`  | `0`                            |
| `imageObjectFit`                    | `image-object-fit`                     | Image object-fit.                                         | `string`  | `'cover'`                      |
| `imageSize`                         | `image-size`                           | WordPress media size when using the helper function.      | `string`  | `undefined`                    |
| `imageSrc`                          | `image-src`                            | Gets images from an ACF or Metabox field.                 | `string`  | `'acf'`                        |
| `images`                            | `images`                               | Gets images from an ACF or Metabox field.                 | `string`  | `undefined`                    |
| `lazy`                              | `lazy`                                 | Lazy load images.                                         | `boolean` | `undefined`                    |
| `lazyLoadPrevNext`                  | `lazy-load-prev-next`                  | Amount of images to to be preloaded when lazy is enabled. | `number`  | `undefined`                    |
| `lightbox`                          | `lightbox`                             | [prop:lightbox]                                           | `boolean` | `undefined`                    |
| `loop`                              | `loop`                                 | Loops all slides infinitely.                              | `boolean` | `undefined`                    |
| `maxHeight`                         | `max-height`                           |                                                           | `string`  | `undefined`                    |
| `navigation`                        | `navigation`                           |                                                           | `boolean` | `true`                         |
| `navigationBackdropFilter`          | `navigation-backdrop-filter`           |                                                           | `string`  | `'var(--spx-backdrop-filter)'` |
| `navigationBackground`              | `navigation-background`                |                                                           | `string`  | `'rgba(0,0,0,0.7)'`            |
| `navigationBackgroundHover`         | `navigation-background-hover`          |                                                           | `string`  | `'rgba(0,0,0,1)'`              |
| `navigationBorderRadius`            | `navigation-border-radius`             |                                                           | `string`  | `'var(--spx-border-radius)'`   |
| `navigationColor`                   | `navigation-color`                     |                                                           | `string`  | `'#ffffff'`                    |
| `navigationDistanceX`               | `navigation-distance-x`                | Navigation distance.                                      | `string`  | `'12px'`                       |
| `navigationIconNext`                | `navigation-icon-next`                 | Navigation icon type.                                     | `string`  | `'arrow-forward'`              |
| `navigationIconPrev`                | `navigation-icon-prev`                 | Navigation icon type.                                     | `string`  | `'arrow-back'`                 |
| `navigationIconType`                | `navigation-icon-type`                 | Navigation icon type.                                     | `string`  | `'ionicons'`                   |
| `navigationPadding`                 | `navigation-padding`                   |                                                           | `string`  | `'12px'`                       |
| `navigationSize`                    | `navigation-size`                      | Navigation size.                                          | `string`  | `'20px'`                       |
| `pagination`                        | `pagination`                           | Pagination type.                                          | `string`  | `'bullets'`                    |
| `paginationBackdropFilter`          | `pagination-backdrop-filter`           |                                                           | `string`  | `'var(--spx-backdrop-filter)'` |
| `paginationBackground`              | `pagination-background`                |                                                           | `string`  | `'rgba(0,0,0,0.7)'`            |
| `paginationBulletsBackground`       | `pagination-bullets-background`        |                                                           | `string`  | `'var(--spx-color-gray-500)'`  |
| `paginationBulletsBackgroundActive` | `pagination-bullets-background-active` |                                                           | `string`  | `'#ffffff'`                    |
| `paginationBulletsClickable`        | `pagination-bullets-clickable`         | Make bullets clickable.                                   | `boolean` | `undefined`                    |
| `paginationBulletsDynamic`          | `pagination-bullets-dynamic`           | Will only keep a selected amount of bullets visible.      | `boolean` | `false`                        |
| `paginationBulletsDynamicAmount`    | `pagination-bullets-dynamic-amount`    | Amount of dynamic bullets.                                | `number`  | `5`                            |
| `paginationBulletsGap`              | `pagination-bullets-gap`               | Space between the bullets.                                | `string`  | `'6px'`                        |
| `paginationBulletsSize`             | `pagination-bullets-size`              | Size of the bullets.                                      | `string`  | `'6px'`                        |
| `prevNextFilter`                    | `prev-next-filter`                     | Filter property for the previous and next elements.       | `string`  | `undefined`                    |
| `slideMessageFirst`                 | `slide-message-first`                  | Screen reader message for first slide.                    | `string`  | `'This is the first slide'`    |
| `slideMessageLast`                  | `slide-message-last`                   | Screen reader message for last slide.                     | `string`  | `'This is the last slide'`     |
| `slideMessageNext`                  | `slide-message-next`                   | Screen reader message for next slide.                     | `string`  | `'Next slide'`                 |
| `slideMessagePrevious`              | `slide-message-previous`               | Screen reader message for previous slide.                 | `string`  | `'Previous slide'`             |
| `slidesPerView`                     | `slides-per-view`                      | Amount of slides shown at once.                           | `number`  | `1`                            |
| `speed`                             | `speed`                                | Sliding speed.                                            | `number`  | `1000`                         |
| `spxLightbox`                       | `spx-lightbox`                         | [component:spx-lightbox]                                  | `string`  | `undefined`                    |
| `spxLightboxSlider`                 | `spx-lightbox-slider`                  | [component:spx-slider]                                    | `string`  | `undefined`                    |
| `start`                             | `start`                                | At which slide component should start.                    | `number`  | `undefined`                    |


## Events

| Event              | Description    | Type               |
| ------------------ | -------------- | ------------------ |
| `spxSliderDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Slots

| Slot      | Description              |
| --------- | ------------------------ |
| `"inner"` | Slot (between HTML tag). |


## Dependencies

### Used by

 - [spx-lightbox](../spx-lightbox)
 - [spx-masonry](../spx-masonry)
 - [spx-slider](.)
 - [spx-slideshow](../spx-slideshow)

### Depends on

- [spx-icon](../spx-icon)
- [spx-slider](.)

### Graph
```mermaid
graph TD;
  spx-slider --> spx-slider
  spx-icon --> ion-icon
  spx-lightbox --> spx-slider
  spx-masonry --> spx-slider
  spx-slideshow --> spx-slider
  style spx-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
