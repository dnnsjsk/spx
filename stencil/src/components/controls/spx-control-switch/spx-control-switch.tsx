// eslint-disable-next-line no-unused-vars
import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'spx-control-switch',
  styleUrl: 'spx-control-switch.scss',
  shadow: true,
})
export class SpxControlSwitch {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlSwitchElement;

  @Prop({ mutable: true }) checked: boolean;

  @Prop() data: string;

  @Prop() handleInput: Function;

  @Prop() label: string;

  private onInput = (e) => {
    this.handleInput && this.handleInput(e);
    this.checked = e.target.checked;
  };

  render() {
    return (
      <label>
        <div class="wrap">
          <input
            data-set={this.data}
            type="checkbox"
            class="toggle"
            onInput={this.onInput}
            checked={this.checked}
          />
          <div tabindex="0" class="dot-bg" />
          <div class="dot" />
        </div>
        <spx-control-label label={this.label} />
      </label>
    );
  }
}
