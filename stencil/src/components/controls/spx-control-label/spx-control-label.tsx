// eslint-disable-next-line no-unused-vars
import { Component, h, Element, Prop, Host } from '@stencil/core';
import { cssTw } from '../../../utils/css/cssTw';

@Component({
  tag: 'spx-control-label',
  shadow: true,
})
export class SpxControlGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlLabelElement;

  @Prop({ reflect: true }) label: string;

  @Prop({ reflect: true }) mb: boolean;

  render() {
    const { tw } = cssTw(this.el.shadowRoot);

    return (
      <Host style={{ display: 'flex' }}>
        <span
          class={tw(
            `text-blue-gray-700 text-xs uppercase font-medium inline-block ${
              this.mb && 'mb-1.5'
            }`
          )}
        >
          {this.label}
        </span>
      </Host>
    );
  }
}
