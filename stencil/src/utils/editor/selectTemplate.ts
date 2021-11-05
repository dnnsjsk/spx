// @ts-ignore
import prettier from 'prettier/esm/standalone.mjs';
// @ts-ignore
import parserHtml from 'prettier/esm/parser-html.mjs';
import state from '../../store/editor';

/**
 * Select template to show in editor.
 */
export function selectTemplate() {
  const template = (
    state.components[state.activeComponent].examples.length >= 2
      ? document.querySelector(
          `template[data-spx-element="${state.activeComponent}"][data-spx-name="${state.activeTemplate}"]`
        )
      : document.querySelector(
          `template[data-spx-element="${state.activeComponent}"]`
        )
  ) as HTMLTemplateElement;

  if (template) {
    // Set controls.
    state.activeControls = template.getAttribute('data-spx-controls')
      ? template.getAttribute('data-spx-controls').split(', ')
      : [];

    // Create element.
    const node = template.content.cloneNode(true);
    const wrapper = document.createElement('div');
    wrapper.appendChild(node);

    // Set element.
    state.activeElement = wrapper.querySelector(
      state.components[state.activeComponent].name
    ) as HTMLElement;

    // Set code.
    state.activeCode = prettier.format(wrapper.innerHTML, {
      parser: 'html',
      plugins: [parserHtml],
    });
    state.activeCode2 = state.activeCode;

    // Set controls.
    const newControls = {};
    const updatedControls = {};
    Object.values(
      state.components[state.activeComponent].properties as unknown
    ).forEach((item) => {
      updatedControls[item.attribute] = Object.assign({}, item);
      newControls[item.attribute] = Object.assign({}, item);
    });

    Array.prototype.slice
      .call(state.activeElement.attributes)
      .forEach((item) => {
        if (newControls[item.name]) {
          newControls[item.name].default =
            item.value === '' ? 'true' : item.value;
        }
      });

    state.activeControlObject = {
      ...updatedControls,
      ...newControls,
    };
  }
}
