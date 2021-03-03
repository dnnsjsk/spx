# spx-edit-button



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                    | Type                                              | Default                       |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------- |
| `background`         | `background`           |                                                                                                                                                                                                                | `string`                                          | `'var(--spx-color-gray-900)'` |
| `backgroundDiscard`  | `background-discard`   | Discard button background.                                                                                                                                                                                     | `string`                                          | `'var(--spx-color-gray-600)'` |
| `border`             | `border`               |                                                                                                                                                                                                                | `string`                                          | `'none'`                      |
| `borderRadius`       | `border-radius`        |                                                                                                                                                                                                                | `string`                                          | `s.borderRadius`              |
| `classButton`        | `class-button`         |                                                                                                                                                                                                                | `string`                                          | `undefined`                   |
| `classButtonDiscard` | `class-button-discard` |                                                                                                                                                                                                                | `string`                                          | `undefined`                   |
| `classLoader`        | `class-loader`         |                                                                                                                                                                                                                | `string`                                          | `undefined`                   |
| `color`              | `color`                |                                                                                                                                                                                                                | `string`                                          | `'#ffffff'`                   |
| `colorDiscard`       | `color-discard`        | Discard button color.                                                                                                                                                                                          | `string`                                          | `'#ffffff'`                   |
| `distanceX`          | `distance-x`           | Distance to the edge of the viewport on the x-axis.                                                                                                                                                            | `string`                                          | `'1em'`                       |
| `distanceY`          | `distance-y`           | Distance to the edge of the viewport on the y-axis.                                                                                                                                                            | `string`                                          | `'1em'`                       |
| `editId`             | `edit-id`              | Corresponding ID for editable fields. This property is needed when multiple edit-button components are used on the page. Simply apply a "data-spx-edit-id" attribute with the same value to editable elements. | `string`                                          | `undefined`                   |
| `fontFamily`         | `font-family`          |                                                                                                                                                                                                                | `string`                                          | `s.fontFamily`                |
| `fontSize`           | `font-size`            |                                                                                                                                                                                                                | `string`                                          | `s.fontSize`                  |
| `fontSizeMax`        | `font-size-max`        |                                                                                                                                                                                                                | `number`                                          | `1.2`                         |
| `fontSizeMin`        | `font-size-min`        |                                                                                                                                                                                                                | `number`                                          | `1`                           |
| `gap`                | `gap`                  | Gap between the buttons.                                                                                                                                                                                       | `string`                                          | `'0.4em'`                     |
| `padding`            | `padding`              |                                                                                                                                                                                                                | `string`                                          | `'0.8em 1.2em'`               |
| `paddingXMax`        | `padding-x-max`        |                                                                                                                                                                                                                | `number`                                          | `1.4`                         |
| `paddingXMin`        | `padding-x-min`        |                                                                                                                                                                                                                | `number`                                          | `1`                           |
| `paddingYMax`        | `padding-y-max`        |                                                                                                                                                                                                                | `number`                                          | `1.2`                         |
| `paddingYMin`        | `padding-y-min`        |                                                                                                                                                                                                                | `number`                                          | `0.7`                         |
| `position`           | `position`             | Component position in page.                                                                                                                                                                                    | `string`                                          | `'bottom-right'`              |
| `positionCss`        | `position-css`         | CSS property position of button.                                                                                                                                                                               | `"absolute" \| "fixed" \| "relative" \| "static"` | `'fixed'`                     |
| `styling`            | `styling`              | Styling.                                                                                                                                                                                                       | `string`                                          | `'default'`                   |
| `test`               | `test`                 |                                                                                                                                                                                                                | `boolean`                                         | `false`                       |
| `textDiscard`        | `text-discard`         | Discard button text.                                                                                                                                                                                           | `string`                                          | `'Discard'`                   |
| `textEdit`           | `text-edit`            | Edit button text.                                                                                                                                                                                              | `string`                                          | `'Edit site'`                 |
| `textSave`           | `text-save`            | Save button text.                                                                                                                                                                                              | `string`                                          | `'Save'`                      |
| `textSuccess`        | `text-success`         | Success message.                                                                                                                                                                                               | `string`                                          | `'Save was successful'`       |
| `zIndex`             | `z-index`              |                                                                                                                                                                                                                | `number`                                          | `99`                          |


## Events

| Event                  | Description                              | Type               |
| ---------------------- | ---------------------------------------- | ------------------ |
| `spxEditButtonDidLoad` | Fires after component has loaded.        | `CustomEvent<any>` |
| `spxEditButtonDiscard` | Fires after pressing the discard button. | `CustomEvent<any>` |
| `spxEditButtonSave`    | Fires after pressing the save button.    | `CustomEvent<any>` |


## Methods

### `discard() => Promise<void>`

Discard changes.

#### Returns

Type: `Promise<void>`



### `edit() => Promise<void>`

Enable editing.

#### Returns

Type: `Promise<void>`



### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `save() => Promise<void>`

Save changes.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [spx-edit](.)
- [spx-snackbar](../spx-snackbar)
- [spx-loader](../spx-loader)

### Graph
```mermaid
graph TD;
  spx-edit-button --> spx-edit
  spx-edit-button --> spx-snackbar
  spx-edit-button --> spx-loader
  spx-snackbar --> spx-icon
  spx-icon --> ion-icon
  style spx-edit-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
