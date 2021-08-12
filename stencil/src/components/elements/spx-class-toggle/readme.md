# spx-class-toggle

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                                         | Type     | Default                      |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| `display` | `display` |                                                                                                                                     | `string` | `s.display`                  |
| `local`   | `local`   | Specify a local storage item, so the toggle state will be remembered when the user visits the site again.                           | `string` | `undefined`                  |
| `target`  | `target`  | Target element. Can take any querySelector value. (id, class, tag etc.) If none is set it will default to the first element inside. | `string` | `undefined`                  |
| `toggle`  | `toggle`  | List of classes that should be toggled.                                                                                             | `string` | `'spx-class-toggle--active'` |


## Events

| Event                   | Description                       | Type               |
| ----------------------- | --------------------------------- | ------------------ |
| `spxClassToggleDidLoad` | Fires after component has loaded. | `CustomEvent<any>` |


## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| `"inner"` | Slot (between HTML tags). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*