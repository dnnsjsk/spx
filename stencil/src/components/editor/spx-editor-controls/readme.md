# spx-editor-controls

<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [spx-editor-container](../spx-editor-container)

### Depends on

- [spx-control-select](../../controls/spx-control-select)
- [spx-control-input](../../controls/spx-control-input)
- [spx-control-number](../../controls/spx-control-number)
- [spx-control-switch](../../controls/spx-control-switch)
- [spx-control-color](../../controls/spx-control-color)
- [spx-control-group](../../controls/spx-control-group)

### Graph
```mermaid
graph TD;
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
  spx-editor-container --> spx-editor-controls
  style spx-editor-controls fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
