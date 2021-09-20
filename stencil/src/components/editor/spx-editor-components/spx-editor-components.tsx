// eslint-disable-next-line no-unused-vars
import { Component, Element, h, State, Host } from '@stencil/core';
import { Button } from '../../../elements/Button';
import { titleCase } from '../../../utils/strings/titleCase';
import state from '../../../store/editor';
import { TextInput } from '../../../elements/TextInput';
import { filter } from 'lodash-es';
import { components } from '../../../constants/editor';

@Component({
  tag: 'spx-editor-components',
  styleUrl: 'spx-editor-components.scss',
  shadow: true,
})
export class SpxEditorComponents {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorComponentsElement;

  @State() currentData: object;

  connectedCallback() {
    const data = {};

    components.forEach((item) => {
      const examples = {
        examples: [],
      };

      const properties = {
        properties: {},
      };

      item.properties.forEach((item) => {
        properties.properties[item.attribute] = item;
      });

      [].slice
        .call(document.querySelector('spx-editor').children)
        .forEach((itemInner) => {
          if (itemInner.getAttribute('data-spx-element') === item.name) {
            examples['examples'].push(itemInner.getAttribute('data-spx-name'));
          }
        });

      data[item['name']] = { ...item, ...properties, ...examples };
    });

    state.components = data;
    this.currentData = data;
  }

  private setActive = (e) => {
    if (e.target.getAttribute('name-inner')) {
      state.activeTemplate = e.target.getAttribute('name-inner');
    } else {
      state.activeComponent = e.target.name;
      state.activeTemplate =
        this.currentData[state.activeComponent].examples[0];
    }
    if (window.innerWidth <= 1024) {
      state.showComponents = false;
    }
  };

  private onSearch = (e) => {
    if (e.target.value === '') {
      this.currentData = state.components;
    } else {
      this.currentData = filter(state.components, function (o) {
        return o.name.includes(e.target.value);
      });
    }
  };

  render() {
    return (
      <Host>
        <div class="search">
          <spx-icon icon="search-outline" />
          <TextInput placeholder="Search components" onInput={this.onSearch} />
        </div>
        <div
          style={{
            height: `calc(${state.height} - var(--spx-editor-header-height) ${
              state.showComponents ? ' - var(--spx-editor-header-height)' : ''
            }
          `,
          }}
          tabindex="-1"
          class="list"
        >
          {Object.values(this.currentData as unknown).map((object) => {
            const isActive = state.activeComponent === object.name;

            return (
              <div class={`button ${isActive ? 'is-active' : ''}`}>
                <Button
                  name={object.name}
                  tabindex={isActive ? '-1' : '0'}
                  class={`${isActive ? 'is-active' : ''}`}
                  onClick={this.setActive}
                >
                  {titleCase(
                    object.name.replace('spx-', '').replaceAll('-', ' ')
                  )}
                </Button>
                {object.examples.length >= 2 && (
                  <div class={isActive ? 'is-active' : ''}>
                    {Object.values(object.examples).map((item) => {
                      const isActiveName = state.activeTemplate === item;

                      return (
                        <Button
                          name-inner={item}
                          class={isActiveName ? 'is-active' : ''}
                          onClick={this.setActive}
                        >
                          {isActiveName && <span class="side" />}
                          <span class="text">
                            {(item as String).replaceAll('-', ' ')}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
