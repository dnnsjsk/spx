// eslint-disable-next-line no-unused-vars
import { Component, Element, h } from '@stencil/core';
import state from '../../../store/editor';

@Component({
  tag: 'spx-editor-content',
  styleUrl: 'spx-editor-content.scss',
  shadow: true,
})
export class SpxEditorContent {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorContentElement;

  render() {
    return (
      <div
        style={{
          height: `calc(${state.height} - var(--spx-editor-header-height))`,
        }}
        class="inner"
      >
        {state.modeCode ? (
          <spx-code font-size="14px" border-radius="0" filter="saturate(2)">
            {state.activeCode}
          </spx-code>
        ) : (
          <div class="wrap">
            <div
              style={{
                height:
                  state.activeComponent === 'spx-iframe' ? '100%' : 'auto',
              }}
              id="content"
              innerHTML={state.activeCode}
            />
          </div>
        )}
      </div>
    );
  }
}
