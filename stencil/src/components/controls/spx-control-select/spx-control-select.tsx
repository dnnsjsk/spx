// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element } from '@stencil/core';
import { cssTw } from '../../../utils/css/cssTw';

@Component({
  tag: 'spx-control-select',
  shadow: true,
})
export class SpxControlSelect {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlSelectElement;

  @Prop({ reflect: true }) delimiter: string = ',';

  @Prop({ reflect: true }) handleChange;

  @Prop({ reflect: true }) label: string;

  @Prop({ reflect: true }) options: string;

  @Prop({ reflect: true }) selected: string;

  render() {
    const { tw, css } = cssTw(this.el.shadowRoot);

    return (
      <div>
        {this.label && <spx-control-label label={this.label} mb={true} />}
        <select
          class={
            tw(
              `focus-out border border-blue-gray-200 py-1.5 px-2 rounded-md w-full text-blue-gray-900 text-sm`
            ) +
            ' ' +
            tw(css`
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
              background-position: right 0.25rem center;
              background-repeat: no-repeat;
              background-size: 1.5em 1.5em;
              appearance: none;
            `)
          }
          onChange={this.handleChange}
        >
          {this.options &&
            this.options.split(this.delimiter).map((item) => {
              return <option selected={this.selected === item}>{item}</option>;
            })}
        </select>
      </div>
    );
  }
}
