# spx-typewriter

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                        | Type      | Default              |
| ------------- | -------------- | -------------------------------------------------- | --------- | -------------------- |
| `autoStart`   | `auto-start`   | Automatically starts writing.                      | `boolean` | `true`               |
| `delay`       | `delay`        | Writing delay in ms. Also accepts 'natural' value. | `any`     | `'natural'`          |
| `deleteSpeed` | `delete-speed` | Delete delay in ms. Also accepts 'natural' value.  | `any`     | `'natural'`          |
| `loop`        | `loop`         | Loops the animation.                               | `boolean` | `undefined`          |
| `text`        | `text`         | Text that should be written.                       | `string`  | `"I'm a typewriter"` |


## Events

| Event                  | Description    | Type               |
| ---------------------- | -------------- | ------------------ |
| `spxTypewriterDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Methods

### `play() => Promise<void>`

Start animation.

#### Returns

Type: `Promise<void>`



### `stop() => Promise<void>`

Stop animation.

#### Returns

Type: `Promise<void>`




## Slots

| Slot             | Description |
| ---------------- | ----------- |
| `"[slot:inner]"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
