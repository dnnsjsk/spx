# spx-editor

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `height` | `height`  |             | `string` | `undefined` |


## Dependencies

### Depends on

- [spx-icon](../../elements/spx-icon)
- [spx-editor-container](../spx-editor-container)

### Graph
```mermaid
graph TD;
  spx-editor --> spx-icon
  spx-editor --> spx-editor-container
  spx-icon --> ion-icon
  spx-editor-container --> spx-editor-components
  spx-editor-container --> spx-editor-header
  spx-editor-container --> spx-editor-content
  spx-editor-container --> spx-editor-controls
  spx-editor-components --> spx-icon
  spx-editor-header --> spx-icon
  spx-editor-content --> spx-code
  spx-editor-controls --> spx-control-select
  spx-editor-controls --> spx-control-input
  spx-editor-controls --> spx-control-number
  spx-editor-controls --> spx-control-switch
  spx-editor-controls --> spx-control-color
  spx-editor-controls --> spx-control-group
  spx-control-select --> spx-control-label
  spx-control-input --> spx-control-label
  spx-control-number --> spx-control-label
  spx-control-number --> spx-control-input
  spx-control-switch --> spx-control-label
  spx-control-color --> spx-control-label
  spx-control-color --> spx-control-input
  style spx-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
