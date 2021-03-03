# spx-masonry



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                              | Type     | Default     |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `bpColumns` | `bp-columns` | Columns for different screen sizes. Example value: 1000:3;600:2 - this will switch to a three column layout when the screen size is under 1000px and to a two column layout under 600px. | `string` | `undefined` |
| `columns`   | `columns`    | Number of columns.                                                                                                                                                                       | `number` | `4`         |
| `gap`       | `gap`        | Gap between images.                                                                                                                                                                      | `string` | `'10px'`    |
| `imageSize` | `image-size` | WordPress media size when using the helper function..                                                                                                                                    | `string` | `undefined` |
| `images`    | `images`     | Gets images from an ACF or Metabox field.                                                                                                                                                | `string` | `undefined` |
| `imagesSrc` | `images-src` | Gets images from an ACF or Metabox field.                                                                                                                                                | `string` | `undefined` |


## Events

| Event               | Description                       | Type               |
| ------------------- | --------------------------------- | ------------------ |
| `spxMasonryDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Methods

### `recalc() => Promise<void>`

Recalculates grid.

#### Returns

Type: `Promise<void>`



### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
