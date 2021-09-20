// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host } from '@stencil/core';
import state from '../../../store/editor';
import { find } from 'lodash-es';
import { Button } from '../../../elements/Button';
import { getValue } from '../../../utils/editor/getValue';
import { selectTemplate } from '../../../utils/editor/selectTemplate';

@Component({
  tag: 'spx-editor-controls',
  styleUrl: 'spx-editor-controls.scss',
  shadow: true,
})
export class SpxEditorControls {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorControlsElement;

  componentDidLoad() {
    selectTemplate();
  }

  private onInput = (e) => {
    const id = e.target.getRootNode().host.id
      ? e.target.getRootNode().host.id
      : e.target.getRootNode().host.getRootNode().host.id;

    state.activeControlObject = {
      ...state.activeControlObject,
      ...{
        [id]: {
          ...state.activeControlObject[id],
          ...{
            default: e.target.checked ? 'true' : e.target.value,
          },
        },
      },
    };

    const content = document
      .querySelector('spx-editor')
      .shadowRoot.querySelector('spx-editor-container')
      .shadowRoot.querySelector('spx-editor-content')
      .shadowRoot.querySelector('#content');

    const value = e.target.value === 'on' ? e.target.checked : e.target.value;

    let el;

    if (content.querySelector(':scope > spx-tailwind')) {
      el = content
        .querySelector('spx-tailwind')
        .shadowRoot.querySelector(state.activeComponent);
    } else {
      el = content.querySelector(state.activeComponent);
    }

    const data = JSON.parse(e.target.getAttribute('data-set'));

    if ((data.type === 'number' && value) || data.type !== 'number') {
      el.setAttribute(data.attribute, String(value));
    }
  };

  private static switchSelected = () => {
    state.modeSelected = !state.modeSelected;
  };

  private getControls = (component) => {
    return Object.values(component as unknown).map((item) => {
      const id = item.attribute;

      const select = find(item.tags, function (o) {
        return o.name === 'choice';
      });

      const label = item.attribute.replaceAll('-', ' ').toUpperCase();

      const inputData = `{"attribute": "${item.attribute}", "type": "${item.type}"}`;

      return (
        ((state.activeControls.length >= 1 &&
          state.activeControls.includes(item.attribute) &&
          state.modeSelected) ||
          (state.activeControls.length === 0 && state.modeSelected) ||
          !state.modeSelected) && (
          <div>
            {item.type === 'string' && select ? (
              <spx-control-select
                data={inputData}
                id={id}
                handleInput={this.onInput}
                label={label}
                options={select?.text.replaceAll("', '", ',')}
                value={getValue(item.default)}
              />
            ) : item.type === 'string' &&
              !item.attribute.includes('color') &&
              !item.attribute.includes('background') ? (
              <spx-control-input
                data={inputData}
                id={id}
                handleInput={this.onInput}
                label={label}
                value={getValue(item.default)}
              />
            ) : item.type === 'number' || item.type === 'any' ? (
              <spx-control-number
                data={inputData}
                id={id}
                handleInput={this.onInput}
                label={label}
                // @ts-ignore
                value={item.default}
                start={
                  item.default && item.default !== 'natural' ? item.default : 0
                }
                // @ts-ignore
                min={0}
                // @ts-ignore
                max={100}
                step={0.1}
              />
            ) : item.type === 'boolean' ? (
              <spx-control-switch
                data={inputData}
                id={id}
                handleInput={this.onInput}
                label={label}
                checked={item.default === 'true'}
              />
            ) : (
              (item.attribute.includes('color') ||
                item.attribute.includes('background')) && (
                <spx-control-color
                  data={inputData}
                  id={id}
                  value={getValue(item.default)}
                  label={label}
                  handleInput={this.onInput}
                />
              )
            )}
          </div>
        )
      );
    });
  };

  render() {
    return (
      <Host>
        <div class="top">
          <Button
            style={{
              color:
                state.activeControls.length === 0
                  ? 'var(--spx-color-gray-400)'
                  : 'var(--spx-color-gray-500)',
              pointerEvents:
                state.activeControls.length === 0 ? 'none' : 'auto',
            }}
            onClick={SpxEditorControls.switchSelected}
          >
            {state.activeControls.length === 0
              ? 'All Attributes Shown'
              : !state.modeSelected
              ? 'Show Selected Attributes'
              : 'Show All Attributes'}
          </Button>
        </div>
        <div
          tabindex="-1"
          style={{
            height: `calc(${state.height} - var(--spx-editor-header-height) ${
              state.showControls ? ' - var(--spx-editor-header-height)' : ''
            }
          `,
          }}
          class="controls"
        >
          <spx-control-group>
            {this.getControls(state.activeControlObject)}
          </spx-control-group>
        </div>
      </Host>
    );
  }
}
