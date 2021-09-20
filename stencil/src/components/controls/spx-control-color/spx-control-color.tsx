// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element, Watch } from '@stencil/core';
import { Button } from '../../../elements/Button';
import iro from '@jaames/iro';

@Component({
  tag: 'spx-control-color',
  styleUrl: 'spx-control-color.scss',
  shadow: true,
})
export class SpxControlColor {
  private colorPicker;
  private input: HTMLElement;
  private picker: HTMLElement;
  private swatch: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlColorElement;

  @Prop() data: string;

  @Prop() handleInput: Function = function () {};

  @Prop() label: string;

  @Prop({ mutable: true }) value: string;

  @Watch('value')
  handleColorChange(newValue: string) {
    this.colorHandler(newValue);
  }

  componentDidLoad() {
    // @ts-ignore
    this.colorPicker = new iro.ColorPicker(this.picker, {
      width: 206,
      color: this.value ?? '#000000',
    });

    this.colorHandler(this.value, false);

    this.colorPicker.on('color:change', (color) => {
      if (color.index === 0) {
        this.colorHandler(color.hexString, false);
      }
    });

    this.colorPicker.on('input:end', () => {
      this.input.shadowRoot
        .querySelector('input')
        .dispatchEvent(new Event('input'));
    });
  }

  private clickHandler = () => {
    this.picker.classList.toggle('is-active');
  };

  private testColor = (value) => {
    return /^#[0-9A-F]{6}$/i.test(value);
  };

  private textHandler = (e) => {
    this.handleInput(e);
    if (this.testColor(e.target.value)) {
      this.colorHandler(e.target.value);
    }
  };

  private colorHandler = (color, colorPicker = true) => {
    if (this.testColor(color)) {
      if (colorPicker) {
        this.colorPicker.color.hexString = color;
      }
      this.swatch.style.background = color;
      (this.input as HTMLInputElement).value = color;
      this.value = color;
    }
  };

  render() {
    return (
      <div class="inner">
        <spx-control-label label={this.label} mb={true} />
        <div class="control">
          <Button
            ref={(el) => (this.swatch = el as HTMLElement)}
            onClick={this.clickHandler}
          />
          <spx-control-input
            ref={(el) => (this.input = el as HTMLElement)}
            data={this.data}
            value={this.value}
            handleInput={this.textHandler}
          />
        </div>
        <div ref={(el) => (this.picker = el as HTMLElement)} class="picker" />
      </div>
    );
  }
}
