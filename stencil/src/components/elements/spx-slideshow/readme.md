# spx-slideshow

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                   | Type      | Default     |
| ----------- | ------------ | ----------------------------------------------------------------------------- | --------- | ----------- |
| `duration`  | `duration`   | Duration of slideshow to complete one cycle.                                  | `string`  | `'60s'`     |
| `gap`       | `gap`        | Gap between inner elements.                                                   | `string`  | `'1em'`     |
| `height`    | `height`     |                                                                               | `string`  | `undefined` |
| `imageSize` | `image-size` | WordPress media size when using the helper function.                          | `string`  | `undefined` |
| `imageSrc`  | `image-src`  | Gets images from an ACF or Metabox field.                                     | `string`  | `undefined` |
| `images`    | `images`     | Gets images from an ACF or Metabox field.                                     | `string`  | `undefined` |
| `lazy`      | `lazy`       | Lazy load images.                                                             | `boolean` | `undefined` |
| `maxWidth`  | `max-width`  | Max width of inner elements.                                                  | `string`  | `'300px'`   |
| `objectFit` | `object-fit` |                                                                               | `string`  | `'contain'` |
| `overflow`  | `overflow`   | If not set with this attribute, overflow should be set on the parent element. | `string`  | `undefined` |


## Events

| Event                 | Description    | Type               |
| --------------------- | -------------- | ------------------ |
| `spxSlideshowDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Slots

| Slot      | Description              |
| --------- | ------------------------ |
| `"inner"` | Slot (between HTML tag). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
