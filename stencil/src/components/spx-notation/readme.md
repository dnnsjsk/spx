# spx-notation



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                           | Type      | Default                       |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------- | --------- | ----------------------------- |
| `animation`         | `animation`          | Turn animation on or off when animation.                                              | `boolean` | `true`                        |
| `animationDuration` | `animation-duration` | Animation duration.                                                                   | `number`  | `800`                         |
| `autoplay`          | `autoplay`           | Autoplay.                                                                             | `boolean` | `true`                        |
| `brackets`          | `brackets`           | Brackets.                                                                             | `string`  | `'left, right'`               |
| `color`             | `color`              |                                                                                       | `string`  | `'var(--spx-color-gray-100)'` |
| `delay`             | `delay`              |                                                                                       | `number`  | `undefined`                   |
| `display`           | `display`            |                                                                                       | `string`  | `'inline-block'`              |
| `group`             | `group`              | Create a group on annotations by applying a "data-spx-annotation" to elements within. | `boolean` | `undefined`                   |
| `iterations`        | `iterations`         | Number of iterations.                                                                 | `number`  | `1`                           |
| `multiline`         | `multiline`          | Annotate multiline text.                                                              | `boolean` | `true`                        |
| `padding`           | `padding`            | Padding around notations.                                                             | `number`  | `undefined`                   |
| `strokeWidth`       | `stroke-width`       | Stroke width.                                                                         | `number`  | `1`                           |
| `type`              | `type`               | Type of notation.                                                                     | `string`  | `'underline'`                 |


## Events

| Event                | Description                       | Type               |
| -------------------- | --------------------------------- | ------------------ |
| `spxNotationDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Methods

### `clear() => Promise<void>`

Remove the annotation.

#### Returns

Type: `Promise<void>`



### `hide() => Promise<void>`

Hides the annotation. (non animated)

#### Returns

Type: `Promise<void>`



### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Draws the annotation.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
