# spx-editor

<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [spx-editor](../spx-editor)

### Depends on

- [spx-editor-components](../spx-editor-components)
- [spx-editor-header](../spx-editor-header)
- [spx-editor-content](../spx-editor-content)
- [spx-editor-controls](../spx-editor-controls)

### Graph
```mermaid
graph TD;
  spx-editor-container --> spx-editor-components
  spx-editor-container --> spx-editor-header
  spx-editor-container --> spx-editor-content
  spx-editor-container --> spx-editor-controls
  spx-editor-components --> spx-icon
  spx-icon --> ion-icon
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
  spx-editor --> spx-editor-container
  style spx-editor-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
