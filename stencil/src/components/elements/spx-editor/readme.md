# spx-editor



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type     | Default     |
| ------------ | ------------- | ----------- | -------- | ----------- |
| `active`     | `active`      |             | `string` | `undefined` |
| `activeName` | `active-name` |             | `string` | `undefined` |


## Methods

### `load(data: any) => Promise<void>`

Load an array of JSON objects in the spx format.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [spx-icon](../spx-icon)
- [spx-code](../spx-code)
- [spx-control-group](../../controls/spx-control-group)
- [spx-control-select](../../controls/spx-control-select)
- [spx-control-text](../../controls/spx-control-text)
- [spx-control-slider](../../controls/spx-control-slider)
- [spx-control-switch](../../controls/spx-control-switch)
- [spx-control-color](../../controls/spx-control-color)

### Graph
```mermaid
graph TD;
  spx-editor --> spx-icon
  spx-editor --> spx-code
  spx-editor --> spx-control-group
  spx-editor --> spx-control-select
  spx-editor --> spx-control-text
  spx-editor --> spx-control-slider
  spx-editor --> spx-control-switch
  spx-editor --> spx-control-color
  spx-icon --> ion-icon
  spx-control-select --> spx-control-label
  spx-control-text --> spx-control-label
  spx-control-slider --> spx-control-label
  spx-control-switch --> spx-control-label
  spx-control-color --> spx-control-label
  spx-control-color --> spx-control-text
  style spx-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
