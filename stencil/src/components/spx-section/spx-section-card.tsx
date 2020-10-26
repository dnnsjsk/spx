// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { css } from 'emotion';
import { setVar } from '../../utils/setVar';
import { merge } from 'lodash-es';
import * as c from '../../constants/style';
import { setSectionVar } from '../../utils/setSectionVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-section-card';

/**
 * Card component for sections.
 */

@Component({
  tag: 'spx-section-card',
})
export class SpxSectionCard {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionCardElement;

  @Prop({ reflect: true }) boxShadow: string =
    '0px 2px 10px 0px rgba(0, 0, 0, 0.1)';

  @Prop({ reflect: true }) padding: string = 'var(--spx-space-lg)';

  @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) textFontSizeMultiplier: number = 1;

  @Prop({ reflect: true }) textFontWeight: string = '500';

  @Prop({ reflect: true }) textLetterSpacing: string = '0';

  @Prop({ reflect: true }) textLineHeight: string = '1.6';

  @Prop({ reflect: true }) textMarginTop: string = 'var(--spx-space-lg)';

  @Prop({ reflect: true }) textMaxWidth: string;

  @Prop({ reflect: true }) textTransform: string = 'default';

  @Prop({ reflect: true }) titleColor: string = 'var(--spx-color-black)';

  @Prop({ reflect: true }) titleFontSizeMultiplier: number = 1;

  @Prop({ reflect: true }) titleFontWeight: string = '500';

  @Prop({ reflect: true }) titleLetterSpacing: string = '0';

  @Prop({ reflect: true }) titleLineHeight: string = '1.25';

  @Prop({ reflect: true }) titleMaxWidth: string;

  @Prop({ reflect: true }) titleTextTransform: string = 'default';

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);
  }

  render() {
    /** Style base. */

    const styleBase = {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: setVar(tag, 'padding', this.padding),
      boxShadow: setVar(tag, 'box-shadow', this.boxShadow),

      h3: {
        ...c.text(
          tag,
          'title',
          this.titleColor,
          '16px',
          '4vw',
          '24px',
          this.titleFontSizeMultiplier,
          this.titleFontWeight,
          this.titleLetterSpacing,
          this.titleLineHeight,
          this.titleTextTransform
        ),
        display: 'inline-block',
        maxWidth: 'max-content',
      },

      p: {
        ...c.text(
          tag,
          'text',
          this.textColor,
          '14px',
          '3vw',
          '18px',
          this.textFontSizeMultiplier,
          this.textFontWeight,
          this.textLetterSpacing,
          this.textLineHeight,
          this.textTransform
        ),
        display: 'inline-block',
        maxWidth: 'max-content',
        marginTop: setVar(tag, 'text-margin-top', this.textMarginTop),
      },
    };

    /** Style default. */

    const styleDefault = {
      display: 'flex',
    };

    /** Merge objects. */

    const styleMerge = css(merge(styleBase, styleDefault));

    return (
      <Host class={styleMerge}>
        <slot />
      </Host>
    );
  }
}
