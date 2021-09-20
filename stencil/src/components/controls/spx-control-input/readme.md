# spx-control-input

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type       | Default          |
| ------------- | ------------- | ----------- | ---------- | ---------------- |
| `data`        | `data`        |             | `string`   | `undefined`      |
| `handleInput` | --            |             | `Function` | `function () {}` |
| `label`       | `label`       |             | `string`   | `undefined`      |
| `max`         | `max`         |             | `number`   | `undefined`      |
| `min`         | `min`         |             | `number`   | `undefined`      |
| `placeholder` | `placeholder` |             | `string`   | `undefined`      |
| `step`        | `step`        |             | `number`   | `undefined`      |
| `type`        | `type`        |             | `string`   | `'text'`         |
| `value`       | `value`       |             | `string`   | `undefined`      |


## Dependencies

### Used by

 - [spx-control-color](../spx-control-color)
 - [spx-control-number](../spx-control-number)
 - [spx-editor-controls](../../editor/spx-editor-controls)

### Depends on

- [spx-control-label](../spx-control-label)

### Graph
```mermaid
graph TD;
  spx-control-input --> spx-control-label
  spx-control-color --> spx-control-input
  spx-control-number --> spx-control-input
  spx-editor-controls --> spx-control-input
  style spx-control-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
