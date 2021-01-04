# spx-animate



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                 | Type      | Default        |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------- | --------- | -------------- |
| `delay`                | `delay`                  | Delay before animation starts.                                                              | `number`  | `0`            |
| `display`              | `display`                |                                                                                             | `string`  | `'block'`      |
| `duration`             | `duration`               | Animation duration.                                                                         | `number`  | `1`            |
| `ease`                 | `ease`                   | Ease being used. Accepts all common GSAP options.                                           | `string`  | `'power1.out'` |
| `once`                 | `once`                   | Determines if animation should only play once. (if viewport is true)                        | `boolean` | `undefined`    |
| `opacity`              | `opacity`                | Opacity level the animation starts from.                                                    | `number`  | `0`            |
| `repeat`               | `repeat`                 | Repeats the animation. -1 to repeat indefinitely.                                           | `number`  | `undefined`    |
| `repeatDelay`          | `repeat-delay`           | Time to wait between repetitions.                                                           | `number`  | `undefined`    |
| `reverse`              | `reverse`                | Reverses the animation.                                                                     | `boolean` | `undefined`    |
| `stagger`              | `stagger`                | Amount of time elements should be staggered by.                                             | `number`  | `0.15`         |
| `target`               | `target`                 | The target element that should be animated inside the component.                            | `string`  | `'*'`          |
| `viewport`             | `viewport`               | Starts animation when target is in the viewport.                                            | `boolean` | `undefined`    |
| `viewportMarginBottom` | `viewport-margin-bottom` | Adjust the root margin of the animation start.                                              | `string`  | `undefined`    |
| `viewportMarginLeft`   | `viewport-margin-left`   | Adjust the root margin of the animation start.                                              | `string`  | `undefined`    |
| `viewportMarginRight`  | `viewport-margin-right`  | Adjust the root margin of the animation start.                                              | `string`  | `undefined`    |
| `viewportMarginTop`    | `viewport-margin-top`    | Adjust the root margin of the animation start.                                              | `string`  | `undefined`    |
| `x`                    | `x`                      | X position the animation starts from.                                                       | `number`  | `0`            |
| `y`                    | `y`                      | Y position the animation starts from.                                                       | `number`  | `0`            |
| `yoyo`                 | `yoyo`                   | Causes the animation to go back and forth, alternating backward and forward on each repeat. | `boolean` | `undefined`    |


## Events

| Event               | Description                       | Type               |
| ------------------- | --------------------------------- | ------------------ |
| `spxAnimateDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Methods

### `play(from?: number, suppressEvents?: boolean) => Promise<void>`

Plays animation.

#### Returns

Type: `Promise<void>`



### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `restart(includeDelay?: boolean, suppressEvents?: boolean) => Promise<void>`

Restarts animation.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
