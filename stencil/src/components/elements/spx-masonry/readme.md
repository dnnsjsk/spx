# spx-masonry

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                              | Type      | Default     |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `bpColumns` | `bp-columns` | Columns for different screen sizes. Example value: 1000:3;600:2 - this will switch to a three column layout when the screen size is under 1000px and to a two column layout under 600px. | `string`  | `undefined` |
| `columns`   | `columns`    | Number of columns.                                                                                                                                                                       | `number`  | `4`         |
| `gap`       | `gap`        | Gap between images.                                                                                                                                                                      | `string`  | `'10px'`    |
| `imageSize` | `image-size` | WordPress media size when using the helper function..                                                                                                                                    | `string`  | `undefined` |
| `imageSrc`  | `image-src`  | Gets images from an ACF or Metabox field.                                                                                                                                                | `string`  | `'acf'`     |
| `images`    | `images`     | Gets images from an ACF or Metabox field.                                                                                                                                                | `string`  | `undefined` |
| `lazy`      | `lazy`       | Lazy load images.                                                                                                                                                                        | `boolean` | `undefined` |


## Events

| Event               | Description    | Type               |
| ------------------- | -------------- | ------------------ |
| `spxMasonryDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Slots

| Slot             | Description |
| ---------------- | ----------- |
| `"[slot:inner]"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
