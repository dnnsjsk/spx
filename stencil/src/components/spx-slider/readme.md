# spx-slider



<!-- Auto Generated Below -->


## Properties

| Property                             | Attribute                               | Description                                              | Type      | Default                       |
| ------------------------------------ | --------------------------------------- | -------------------------------------------------------- | --------- | ----------------------------- |
| `autoheight`                         | `autoheight`                            | Automatically adjusts height of slider.                  | `boolean` | `false`                       |
| `autoplay`                           | `autoplay`                              | Starts navigating to the next slide when page is loaded. | `boolean` | `false`                       |
| `autoplayDelay`                      | `autoplay-delay`                        | Autoplay delay.                                          | `number`  | `6000`                        |
| `autoplayDisableOnInteraction`       | `autoplay-disable-on-interaction`       | Disable autoplay after interaction with slides.          | `boolean` | `false`                       |
| `bpTabs`                             | `bp-tabs`                               | Starts navigating to the next slide when page is loaded. | `string`  | `undefined`                   |
| `centeredSlides`                     | `centered-slides`                       | Centers slides in viewport.                              | `boolean` | `false`                       |
| `direction`                          | `direction`                             | Slider direction.                                        | `string`  | `'horizontal'`                |
| `effect`                             | `effect`                                | Slider effect.                                           | `string`  | `'slide'`                     |
| `imageObjectFit`                     | `image-object-fit`                      | Image object-fit.                                        | `string`  | `'cover'`                     |
| `imageSize`                          | `image-size`                            | WordPress media size when using the helper function.     | `string`  | `undefined`                   |
| `images`                             | `images`                                | Gets images from an ACF or Metabox field.                | `string`  | `undefined`                   |
| `imagesSrc`                          | `images-src`                            | Gets images from an ACF or Metabox field.                | `string`  | `undefined`                   |
| `loop`                               | `loop`                                  | Loops all slides infinitely.                             | `boolean` | `false`                       |
| `maxHeight`                          | `max-height`                            | Max height.                                              | `string`  | `'100%'`                      |
| `maxWidth`                           | `max-width`                             | Max width.                                               | `string`  | `'100%'`                      |
| `navigation`                         | `navigation`                            |                                                          | `boolean` | `undefined`                   |
| `navigationBackground`               | `navigation-background`                 |                                                          | `string`  | `'rgba(0,0,0,0.7)'`           |
| `navigationBorderRadius`             | `navigation-border-radius`              |                                                          | `string`  | `s.borderRadius`              |
| `navigationColor`                    | `navigation-color`                      |                                                          | `string`  | `'#ffffff'`                   |
| `navigationDistanceX`                | `navigation-distance-x`                 | Navigation distance.                                     | `string`  | `'12px'`                      |
| `navigationIconNext`                 | `navigation-icon-next`                  | Navigation icon type.                                    | `string`  | `'arrow-forward'`             |
| `navigationIconPrev`                 | `navigation-icon-prev`                  | Navigation icon type.                                    | `string`  | `'arrow-back'`                |
| `navigationIconType`                 | `navigation-icon-type`                  | Navigation icon type.                                    | `string`  | `'ionicons'`                  |
| `navigationPadding`                  | `navigation-padding`                    |                                                          | `string`  | `'12px'`                      |
| `navigationSize`                     | `navigation-size`                       | Navigation size.                                         | `string`  | `'20px'`                      |
| `pagination`                         | `pagination`                            | Pagination type.                                         | `string`  | `'bullets'`                   |
| `paginationBulletsBackground`        | `pagination-bullets-background`         |                                                          | `string`  | `'var(--spx-color-gray-300)'` |
| `paginationBulletsBackgroundActive`  | `pagination-bullets-background-active`  |                                                          | `string`  | `'var(--spx-color-gray-900)'` |
| `paginationBulletsClickable`         | `pagination-bullets-clickable`          | Make bullets clickable.                                  | `boolean` | `undefined`                   |
| `paginationBulletsDynamic`           | `pagination-bullets-dynamic`            | Will only keep a selected amount of bullets visible.     | `boolean` | `undefined`                   |
| `paginationBulletsDynamicAmount`     | `pagination-bullets-dynamic-amount`     | Amount of dynamic bullets.                               | `number`  | `5`                           |
| `paginationBulletsSize`              | `pagination-bullets-size`               | Size of the bullets.                                     | `string`  | `'8px'`                       |
| `paginationBulletsSpaceBetween`      | `pagination-bullets-space-between`      | Space between the bullets.                               | `string`  | `'4px'`                       |
| `paginationTabsGapMax`               | `pagination-tabs-gap-max`               |                                                          | `number`  | `1.8`                         |
| `paginationTabsGapMin`               | `pagination-tabs-gap-min`               |                                                          | `number`  | `1`                           |
| `paginationTabsInnerGapMax`          | `pagination-tabs-inner-gap-max`         |                                                          | `number`  | `1`                           |
| `paginationTabsInnerGapMin`          | `pagination-tabs-inner-gap-min`         |                                                          | `number`  | `0.8`                         |
| `paginationTabsMarginBottomMax`      | `pagination-tabs-margin-bottom-max`     |                                                          | `number`  | `2.6`                         |
| `paginationTabsMarginBottomMin`      | `pagination-tabs-margin-bottom-min`     |                                                          | `number`  | `1.4`                         |
| `paginationTabsMaxWidth`             | `pagination-tabs-max-width`             |                                                          | `string`  | `'320px'`                     |
| `paginationTabsPaddingMax`           | `pagination-tabs-padding-max`           |                                                          | `number`  | `1.4`                         |
| `paginationTabsPaddingMin`           | `pagination-tabs-padding-min`           |                                                          | `number`  | `1`                           |
| `paginationTransitionDuration`       | `pagination-transition-duration`        |                                                          | `string`  | `s.transitionDuration`        |
| `paginationTransitionTimingFunction` | `pagination-transition-timing-function` |                                                          | `string`  | `s.transitionTimingFunction`  |
| `prevNextFilter`                     | `prev-next-filter`                      | Filter property for the previous and next elements.      | `string`  | `undefined`                   |
| `slideMessageFirst`                  | `slide-message-first`                   | Screen reader message for first slide.                   | `string`  | `'This is the first slide'`   |
| `slideMessageLast`                   | `slide-message-last`                    | Screen reader message for last slide.                    | `string`  | `'This is the last slide'`    |
| `slideMessageNext`                   | `slide-message-next`                    | Screen reader message for next slide.                    | `string`  | `'Next slide'`                |
| `slideMessagePrevious`               | `slide-message-previous`                | Screen reader message for previous slide.                | `string`  | `'Previous slide'`            |
| `slidesPerView`                      | `slides-per-view`                       | Amount of slides shown at once.                          | `number`  | `1`                           |
| `spaceBetween`                       | `space-between`                         | Space between slides.                                    | `number`  | `0`                           |
| `speed`                              | `speed`                                 | Sliding speed.                                           | `number`  | `1000`                        |


## Events

| Event              | Description                       | Type               |
| ------------------ | --------------------------------- | ------------------ |
| `spxSliderDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Methods

### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [spx-icon](../spx-icon)

### Graph
```mermaid
graph TD;
  spx-slider --> spx-icon
  spx-icon --> ion-icon
  style spx-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
