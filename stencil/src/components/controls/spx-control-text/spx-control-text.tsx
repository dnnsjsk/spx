// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element } from '@stencil/core';
import { cssTw } from '../../../utils/css/cssTw';

@Component({
  tag: 'spx-control-text',
  shadow: true,
})
export class SpxControlText {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlTextElement;

  @Prop({ reflect: true }) handleChange;

  @Prop({ reflect: true }) label: string;

  @Prop({ reflect: true }) placeholder: string;

  @Prop({ reflect: true }) value: string;

  render() {
    const { tw } = cssTw(this.el.shadowRoot);

    return (
      <div>
        {this.label && <spx-control-label label={this.label} mb={true} />}
        <input
          class={tw(
            `focus-out border border-blue-gray-200 py-1.5 px-2 rounded-md w-full text-blue-gray-900 text-sm`
          )}
          type="text"
          value={this.value}
          placeholder={this.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
