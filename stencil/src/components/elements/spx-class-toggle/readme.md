# spx-class-toggle

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                               | Type      | Default                      |
| -------- | --------- | --------------------------------------------------------------------------------------------------------- | --------- | ---------------------------- |
| `inner`  | `inner`   | If target element should be searched within component or in document.                                     | `boolean` | `true`                       |
| `local`  | `local`   | Specify a local storage item, so the toggle state will be remembered when the user visits the site again. | `string`  | `undefined`                  |
| `target` | `target`  | [prop:target]                                                                                             | `string`  | `'*'`                        |
| `toggle` | `toggle`  | List of classes that should be toggled.                                                                   | `string`  | `'spx-class-toggle--active'` |


## Events

| Event                   | Description    | Type               |
| ----------------------- | -------------- | ------------------ |
| `spxClassToggleDidLoad` | [event:loaded] | `CustomEvent<any>` |


## Slots

| Slot      | Description              |
| --------- | ------------------------ |
| `"inner"` | Slot (between HTML tag). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
