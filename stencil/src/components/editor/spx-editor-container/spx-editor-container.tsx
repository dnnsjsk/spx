// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host } from '@stencil/core';
import state from '../../../store/editor';

@Component({
  tag: 'spx-editor-container',
  styleUrl: 'spx-editor-container.scss',
  shadow: true,
})
export class SpxEditorContainer {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorContainerElement;

  componentDidLoad() {}

  render() {
    return (
      <Host style={{ maxHeight: state.height }}>
        <div
          style={{
            position: state.modeFullscreen ? 'fixed' : 'static',
            top: state.modeFullscreen && '0',
            left: state.modeFullscreen && '0',
            width: state.modeFullscreen ? '100vw' : '100%',
            height: state.modeFullscreen ? 'var(--vh)' : '100%',
            zIndex: state.modeFullscreen ? '999999999999' : '0',
          }}
          class="inner"
        >
          <spx-editor-components
            style={{ display: state.showComponents ? 'block' : 'none' }}
          >
            <slot />
          </spx-editor-components>
          <div class="header-content">
            <spx-editor-header />
            <spx-editor-content
              style={{ display: state.showContent ? 'block' : 'none' }}
            />
          </div>
          <spx-editor-controls
            style={{ display: state.showControls ? 'block' : 'none' }}
          />
        </div>
      </Host>
    );
  }
}
