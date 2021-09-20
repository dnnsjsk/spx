// eslint-disable-next-line no-unused-vars
import { Component, Element, h } from '@stencil/core';
import state from '../../../store/editor';
import { titleCase } from '../../../utils/strings/titleCase';
import { Button } from '../../../elements/Button';

@Component({
  tag: 'spx-editor-header',
  styleUrl: 'spx-editor-header.scss',
  shadow: true,
})
export class SpxEditorHeader {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorHeaderElement;

  render() {
    return (
      <div class="inner">
        <h1>
          {titleCase(
            state.activeComponent.replace('spx-', '').replaceAll('-', ' ')
          ) ?? 'No component active'}
        </h1>
        <div class="buttons">
          {[
            {
              icon: 'code-slash-outline',
              function: () => (state.modeCode = !state.modeCode),
              active: state.modeCode,
            },
            {
              icon: 'expand-outline',
              function: () => {
                state.modeFullscreen = !state.modeFullscreen;
                window.dispatchEvent(new Event('resize'));
              },
              active: state.modeFullscreen,
            },
            {
              icon: 'list-outline',
              function: () => (state.showComponents = !state.showComponents),
              active: state.showComponents,
            },
            {
              icon: 'layers-outline',
              function: () => (state.showControls = !state.showControls),
              active: state.showControls,
            },
          ].map((item) => {
            return (
              <Button
                class={
                  item.icon === 'list-outline' || item.icon === 'layers-outline'
                    ? 'is-desktop'
                    : ''
                }
                onClick={item.function}
              >
                {item.active && <span />}
                <spx-icon icon={item.icon} />
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}
