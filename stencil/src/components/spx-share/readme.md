# spx-share



<!-- Auto Generated Below -->


## Properties

| Property                       | Attribute                         | Description                | Type      | Default                             |
| ------------------------------ | --------------------------------- | -------------------------- | --------- | ----------------------------------- |
| `fontSize`                     | `font-size`                       |                            | `string`  | `s.fontSize`                        |
| `itemBackground`               | `item-background`                 |                            | `string`  | `undefined`                         |
| `itemBorderRadius`             | `item-border-radius`              |                            | `string`  | `s.borderRadius`                    |
| `itemColor`                    | `item-color`                      | Gap between buttons.       | `string`  | `undefined`                         |
| `itemFilterHover`              | `item-filter-hover`               | Filter hover.              | `string`  | `'brightness(110%) saturate(120%)'` |
| `itemGap`                      | `item-gap`                        | Gap between buttons.       | `string`  | `'0.5em'`                           |
| `itemPadding`                  | `item-padding`                    |                            | `string`  | `'0.5em'`                           |
| `itemSize`                     | `item-size`                       |                            | `string`  | `'1em'`                             |
| `itemTransitionDuration`       | `item-transition-duration`        |                            | `string`  | `s.transitionDuration`              |
| `itemTransitionTimingFunction` | `item-transition-timing-function` |                            | `string`  | `s.transitionTimingFunction`        |
| `target`                       | `target`                          | Button href target.        | `string`  | `'_blank'`                          |
| `theme`                        | `theme`                           | Button theme.              | `string`  | `'default'`                         |
| `vertical`                     | `vertical`                        | Render buttons vertically. | `boolean` | `undefined`                         |


## Events

| Event             | Description                       | Type               |
| ----------------- | --------------------------------- | ------------------ |
| `spxShareDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Methods

### `reload() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [spx-icon](../spx-icon)

### Graph
```mermaid
graph TD;
  spx-share --> spx-icon
  spx-icon --> ion-icon
  style spx-share fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
