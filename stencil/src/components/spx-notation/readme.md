# spx-notation



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                              | Type                                                                                                | Default                            |
| ------------------- | -------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `animation`         | `animation`          | Turn animation on or off when animation. | `boolean`                                                                                           | `true`                             |
| `animationDuration` | `animation-duration` | Animation duration.                      | `number`                                                                                            | `800`                              |
| `color`             | `color`              |                                          | `string`                                                                                            | `'var(--spx-color-secondary-100)'` |
| `display`           | `display`            |                                          | `string`                                                                                            | `'inline-block'`                   |
| `iterations`        | `iterations`         | Number of iterations.                    | `number`                                                                                            | `1`                                |
| `multiline`         | `multiline`          | Annotate multiline text.                 | `boolean`                                                                                           | `true`                             |
| `strokeWidth`       | `stroke-width`       | Stroke width.                            | `number`                                                                                            | `1`                                |
| `type`              | `type`               | Type of notation.                        | `"box" \| "bracket" \| "circle" \| "crossed-off" \| "highlight" \| "strike-through" \| "underline"` | `undefined`                        |


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
