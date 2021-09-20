// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'spx-control-select',
  styleUrl: 'spx-control-select.scss',
  shadow: true,
})
export class SpxControlSelect {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlSelectElement;

  @Prop() data: string;

  @Prop() delimiter: string = ',';

  @Prop() handleInput: Function;

  @Prop() label: string;

  @Prop() options: string;

  @Prop({ mutable: true }) value: string;

  private onInput = (e) => {
    this.handleInput && this.handleInput(e);
    this.value = e.target.value;
  };

  render() {
    return (
      <Host>
        {this.label && <spx-control-label label={this.label} mb={true} />}
        <select data-set={this.data} onInput={this.onInput}>
          {this.options &&
            this.options.split(this.delimiter).map((item) => {
              return <option selected={this.value === item}>{item}</option>;
            })}
        </select>
      </Host>
    );
  }
}
