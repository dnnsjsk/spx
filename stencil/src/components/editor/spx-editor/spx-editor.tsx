// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import state from '../../../store/editor';

@Component({
  tag: 'spx-editor',
  styleUrl: 'spx-editor.scss',
  shadow: true,
})
export class SpxEditor {
  @State() loaded: boolean;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorElement;

  @Prop({ reflect: true }) height: string;

  connectedCallback() {
    if (this.height) {
      state.height = this.height;
    }
  }

  componentDidLoad() {
    this.loaded = true;
  }

  render() {
    return (
      <Host style={{ maxHeight: state.height }}>
        {!this.loaded && (
          <div class="loader">
            <spx-icon type="loader" size="2rem" />
          </div>
        )}
        <spx-editor-container
          style={{ visibility: this.loaded ? '' : 'hidden' }}
        >
          <slot />
        </spx-editor-container>
      </Host>
    );
  }
}
