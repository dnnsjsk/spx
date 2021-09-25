// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element, Watch } from '@stencil/core';
import { Button } from '../../../elements/Button';
import iro from '@jaames/iro';
import { TinyColor } from '@ctrl/tinycolor';

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
    this.colorHandler(this.convertColor(newValue));
  }

  componentDidLoad() {
    // @ts-ignore
    this.colorPicker = new iro.ColorPicker(this.picker, {
      width: 206,
      color: this.getValue(),
      layout: [
        {
          component: iro.ui.Wheel,
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'value',
          },
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'alpha',
          },
        },
      ],
    });

    this.el.shadowRoot
      .querySelector('spx-control-input')
      .setAttribute('value', this.getValue());

    this.colorHandler(this.getValue(), false);

    this.colorPicker.on('color:change', (color) => {
      if (color.index === 0) {
        this.colorHandler(color.rgbaString, false);
      }
    });

    this.colorPicker.on('input:end', () => {
      this.input.shadowRoot
        .querySelector('input')
        .dispatchEvent(new Event('input'));
    });
  }

  private getValue = () => {
    const color = new TinyColor(this.value);
    return this.convertColor(color.isValid ? this.value : '#000000');
  };

  private convertColor = (value, alpha = 1) => {
    const color = new TinyColor(value);
    if (this.isRgba(color)) {
      return value;
    } else {
      const hex = color.toHexString();

      const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
      return `rgba(${r},${g},${b},${alpha})`;
    }
  };

  private isRgba = (value) => {
    return /^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/i.test(
      value
    );
  };

  private clickHandler = () => {
    this.picker.classList.toggle('is-active');
  };

  private textHandler = (e) => {
    this.handleInput(e);
    if (this.isRgba(e.target.value)) {
      this.colorHandler(e.target.value);
    }
  };

  private colorHandler = (color, colorPicker = true) => {
    if (this.isRgba(color)) {
      if (colorPicker) {
        this.colorPicker.color.rgbaString = color;
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
            handleInput={this.textHandler}
          />
        </div>
        <div ref={(el) => (this.picker = el as HTMLElement)} class="picker" />
      </div>
    );
  }
}
