// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'spx-control-input',
  styleUrl: 'spx-control-input.scss',
  shadow: true,
})
export class SpxControlInput {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlInputElement;

  @Prop() data: string;

  @Prop() handleInput: Function = function () {};

  @Prop() label: string;

  @Prop() min: number;

  @Prop() max: number;

  @Prop() placeholder: string;

  @Prop() step: number;

  @Prop() type: string = 'text';

  @Prop({ mutable: true }) value: string;

  private onInput = (e) => {
    this.handleInput && this.handleInput(e);
    this.value = e.target.value;
  };

  render() {
    return (
      <div>
        {this.label && <spx-control-label label={this.label} mb={true} />}
        <input
          data-set={this.data}
          type={this.type}
          placeholder={this.placeholder}
          onInput={this.onInput}
          min={this.type === 'number' && this.min}
          max={this.type === 'number' && this.max}
          step={this.type === 'number' && this.step}
          value={this.value}
        />
      </div>
    );
  }
}
