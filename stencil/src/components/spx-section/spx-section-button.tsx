// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { css } from 'emotion';
import state from '../../stores/container';
import { palette } from '../../constants/palettes';
import { setVar } from '../../utils/setVar';
import * as c from '../../constants/style';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setSectionVar } from '../../utils/setSectionVar';

/**
 * Button component for sections.
 */

const tag = 'spx-section-button';

@Component({
  tag: 'spx-section-button',
})
export class SpxSectionButton {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionButtonElement;

  /** Link href. */

  @Prop({ reflect: true }) href: string;

  /** Reverse text color. */

  @Prop({ reflect: true }) reverseColor: boolean;

  /** Target. */

  @Prop({ reflect: true }) target: string;

  @Prop({ reflect: true }) transitionDuration: string = c.transitionDuration;

  @Prop({ reflect: true }) transitionTimingFunction: string =
    c.transitionTimingFunction;

  /**
   * Button type.
   * @choice 'primary', 'secondary'
   */

  @Prop({ reflect: true }) type: string = 'primary';

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);
  }

  private applyColors(type) {
    /** Apply color depending if primary or secondary. */

    const style =
      this.type === 'primary'
        ? 'var(--spx-color-primary-A700)'
        : 'var(--spx-color-primary-45)';

    /** Get the hue. */

    const styleHue = style
      .substring(style.lastIndexOf('-'))
      .slice(1, -1)
      .replace(/^0+/, '');
    const color = palette[state.colorPrimary][styleHue]['text'];

    /** Apply background, color or hover. */

    if (type === 'background') {
      return this.type === 'translucent'
        ? color === '#ffffff'
          ? 'rgba(0,0,0,0.2)'
          : 'rgba(255,255,255,0.2)'
        : style;
    }

    if (type === 'color') {
      if (this.reverseColor) {
        if (color === '#000000') {
          return '#ffffff';
        } else if (color === '#ffffff') {
          return '#000000';
        }
      } else {
        return palette[state.colorPrimary][styleHue]['text'];
      }
    }

    if (type === 'background-hover') {
      return this.type === 'primary'
        ? palette[state.colorPrimary]['600']['color']
        : this.type === 'translucent'
        ? color === '#ffffff'
          ? 'rgba(0,0,0,0.3)'
          : 'rgba(255,255,255,0.3)'
        : palette[state.colorPrimary]['50']['color'];
    }
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      background: this.applyColors('background'),
      color: this.applyColors('color'),
      transitionProperty: 'background',
      transitionDuration: setVar(
        tag,
        'transition-duration',
        this.transitionDuration
      ),
      transitionTimingFunction: setVar(
        tag,
        'transition-timing-function',
        this.transitionDuration
      ),

      a: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },

      '&:hover': {
        background: this.applyColors('background-hover'),
      },
    });

    return (
      <Host>
        <a class={styleHost} href={this.href} target={this.target}>
          <slot />
        </a>
      </Host>
    );
  }
}
