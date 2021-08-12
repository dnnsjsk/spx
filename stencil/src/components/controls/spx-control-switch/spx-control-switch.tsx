// eslint-disable-next-line no-unused-vars
import { Component, h, Element, Prop } from '@stencil/core';
import { cssTw } from '../../../utils/css/cssTw';

@Component({
  tag: 'spx-control-switch',
  shadow: true,
})
export class SpxControlSwitch {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlSwitchElement;

  @Prop({ reflect: true }) checked: boolean;

  @Prop({ reflect: true }) handleChange;

  @Prop({ reflect: true }) label: string;

  render() {
    const { tw, css } = cssTw(this.el.shadowRoot);

    return (
      <label
        class={
          tw(`focus flex items-center cursor-pointer`) +
          ' ' +
          tw(
            css`
              .toggle:checked ~ .dot {
                transform: translateX(28px);
              }
              .toggle:checked + div {
                background: #0f172a;
              }
            `
          )
        }
      >
        <div class={tw(`relative mr-3`)}>
          <input
            type="checkbox"
            class={tw(`sr-only`) + ` toggle`}
            onChange={this.handleChange}
            checked={this.checked}
          />
          <div
            tabindex="0"
            class={tw(
              `focus-out block bg-blue-gray-300 w-12 h-5 rounded-full transition ease-in-out duration-100`
            )}
          />
          <div
            class={tw(
              `dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition ease-in-out duration-100`
            )}
          />
        </div>
        <spx-control-label label={this.label} />
      </label>
    );
  }
}
