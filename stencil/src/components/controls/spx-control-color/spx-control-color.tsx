// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Element, State } from '@stencil/core';
import { Button } from '../../../elements/Button';
import { cssTw } from '../../../utils/css/cssTw';
import iro from '@jaames/iro';

@Component({
  tag: 'spx-control-color',
  shadow: true,
})
export class SpxControlColor {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlColorElement;
  private init: boolean = false;
  private input: HTMLElement;
  private picker: HTMLElement;
  private swatch: HTMLElement;

  @State() colorPicker;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) color: string;

  @Prop({ reflect: true }) label: string;

  private clickHandler = () => {
    this.picker.classList.toggle('hidden');

    if (!this.init) {
      // @ts-ignore
      this.colorPicker = new iro.ColorPicker(this.picker, {
        width: 217,
        color: this.color ?? 'black',
      });

      this.colorPicker.on('color:change', (color) => {
        if (color.index === 0) {
          this.swatch.style.background = color.hexString;
          (this.input as HTMLInputElement).value = color.hexString;
        }
      });

      this.init = true;
    }
  };

  private textHandler = (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      this.colorPicker.color.hexString = e.target.value;
    }
  };

  render() {
    const { tw } = cssTw(this.el.shadowRoot);

    return (
      <div class={tw(`flex flex-col`)}>
        <spx-control-label label={this.label} mb={true} />
        <div
          style={{ gridTemplateColumns: 'auto 1fr' }}
          class={tw(`grid items-center gap-2`)}
        >
          <Button
            ref={(el) => (this.swatch = el as HTMLElement)}
            onClick={this.clickHandler}
            class={tw(
              `focus-out bg-[${this.color}] h-[34px] w-[34px] border border-blue-gray-300 rounded-md`
            )}
          />
          <spx-control-text
            ref={(el) => (this.input = el as HTMLElement)}
            value={this.color}
            handleChange={this.textHandler}
          />
        </div>
        <div
          ref={(el) => (this.picker = el as HTMLElement)}
          class={tw(`hidden mt-4`)}
        />
      </div>
    );
  }
}
