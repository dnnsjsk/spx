# spx-edit-button



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description | Type      | Default                              |
| ------------------- | -------------------- | ----------- | --------- | ------------------------------------ |
| `background`        | `background`         |             | `string`  | `constants.styleBackground`          |
| `backgroundDiscard` | `background-discard` |             | `string`  | `constants.styleBackgroundSecondary` |
| `border`            | `border`             |             | `string`  | `undefined`                          |
| `borderRadius`      | `border-radius`      |             | `string`  | `constants.styleBorderRadius`        |
| `color`             | `color`              |             | `string`  | `constants.styleColor`               |
| `colorDiscard`      | `color-discard`      |             | `string`  | `constants.styleColor`               |
| `distanceX`         | `distance-x`         |             | `string`  | `'1em'`                              |
| `distanceY`         | `distance-y`         |             | `string`  | `'1em'`                              |
| `fontSize`          | `font-size`          |             | `string`  | `'16px'`                             |
| `gap`               | `gap`                |             | `string`  | `'8px'`                              |
| `padding`           | `padding`            |             | `string`  | `'12px 24px'`                        |
| `position`          | `position`           |             | `string`  | `'bottom-center'`                    |
| `styling`           | `styling`            |             | `string`  | `undefined`                          |
| `test`              | `test`               |             | `boolean` | `false`                              |
| `textDiscard`       | `text-discard`       |             | `string`  | `'Discard'`                          |
| `textEdit`          | `text-edit`          |             | `string`  | `'Edit site'`                        |
| `textSave`          | `text-save`          |             | `string`  | `'Save'`                             |
| `textSuccess`       | `text-success`       |             | `string`  | `'Save was successful.'`             |


## Events

| Event                   | Description | Type               |
| ----------------------- | ----------- | ------------------ |
| `spxEditDiscardChanges` |             | `CustomEvent<any>` |
| `spxEditSaveChanges`    |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [spx-snackbar](../spx-snackbar)
- [spx-loader](../spx-loader)

### Graph
```mermaid
graph TD;
  spx-edit-button --> spx-snackbar
  spx-edit-button --> spx-loader
  style spx-edit-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
