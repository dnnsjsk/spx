# spx-animate

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                 | Type      | Default        |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------- | --------- | -------------- |
| `autoAlpha`          | `auto-alpha`           | Same as opacity but sets visibility to 'hidden' after hitting 0.                            | `number`  | `undefined`    |
| `clipPath`           | `clip-path`            | Clip-path value the animation starts from.                                                  | `string`  | `undefined`    |
| `delay`              | `delay`                | Delay before animation starts.                                                              | `number`  | `0`            |
| `duration`           | `duration`             | Animation duration.                                                                         | `number`  | `1`            |
| `ease`               | `ease`                 | Ease being used. Accepts all common GSAP options.                                           | `string`  | `'power1.out'` |
| `filter`             | `filter`               | Filter value the animation starts from.                                                     | `string`  | `undefined`    |
| `once`               | `once`                 | Determines if animation should only play once. (if viewport is true)                        | `boolean` | `undefined`    |
| `opacity`            | `opacity`              | Opacity level the animation starts from.                                                    | `number`  | `undefined`    |
| `repeat`             | `repeat`               | Repeats the animation. -1 to repeat indefinitely.                                           | `number`  | `undefined`    |
| `repeatDelay`        | `repeat-delay`         | Time to wait between repetitions.                                                           | `number`  | `undefined`    |
| `reverse`            | `reverse`              | Reverses the animation.                                                                     | `boolean` | `undefined`    |
| `stagger`            | `stagger`              | Amount of time elements should be staggered by.                                             | `number`  | `0.15`         |
| `target`             | `target`               | [prop:target]                                                                               | `string`  | `'*'`          |
| `viewport`           | `viewport`             | Starts animation when target is in the viewport.                                            | `boolean` | `undefined`    |
| `viewportRootMargin` | `viewport-root-margin` | Scroll intersection observer root margin.                                                   | `string`  | `'0px'`        |
| `viewportThreshold`  | `viewport-threshold`   | Scroll intersection observer threshold.                                                     | `number`  | `0`            |
| `x`                  | `x`                    | X position the animation starts from.                                                       | `any`     | `0`            |
| `y`                  | `y`                    | Y position the animation starts from.                                                       | `any`     | `0`            |
| `yoyo`               | `yoyo`                 | Causes the animation to go back and forth, alternating backward and forward on each repeat. | `boolean` | `undefined`    |


## Events

| Event               | Description    | Type               |
| ------------------- | -------------- | ------------------ |
| `spxAnimateDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Methods

### `play(from?: number, suppressEvents?: boolean) => Promise<void>`

Plays animation.

#### Returns

Type: `Promise<void>`



### `restart(includeDelay?: boolean, suppressEvents?: boolean) => Promise<void>`

Restarts animation.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description              |
| --------- | ------------------------ |
| `"inner"` | Slot (between HTML tag). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
