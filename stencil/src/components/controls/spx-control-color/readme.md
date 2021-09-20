# spx-control-color

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type       | Default          |
| ------------- | --------- | ----------- | ---------- | ---------------- |
| `data`        | `data`    |             | `string`   | `undefined`      |
| `handleInput` | --        |             | `Function` | `function () {}` |
| `label`       | `label`   |             | `string`   | `undefined`      |
| `value`       | `value`   |             | `string`   | `undefined`      |


## Dependencies

### Used by

 - [spx-editor-controls](../../editor/spx-editor-controls)

### Depends on

- [spx-control-label](../spx-control-label)
- [spx-control-input](../spx-control-input)

### Graph
```mermaid
graph TD;
  spx-control-color --> spx-control-label
  spx-control-color --> spx-control-input
  spx-control-input --> spx-control-label
  spx-editor-controls --> spx-control-color
  style spx-control-color fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
