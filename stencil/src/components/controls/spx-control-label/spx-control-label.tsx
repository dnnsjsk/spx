// eslint-disable-next-line no-unused-vars
import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'spx-control-label',
  styleUrl: 'spx-control-label.scss',
  shadow: true,
})
export class SpxControlGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxControlLabelElement;

  @Prop() label: string;

  @Prop({ reflect: true }) mb: boolean;

  render() {
    return (
      <div class="inner">
        <span>{this.label}</span>
      </div>
    );
  }
}
