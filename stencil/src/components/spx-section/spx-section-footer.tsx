// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { css } from 'emotion';
import { setVar } from '../../utils/setVar';
import state from '../../stores/container';
import { setSectionVar } from '../../utils/setSectionVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-section-footer';

/**
 * Footer component for sections.
 */

@Component({
  tag: 'spx-section-footer',
})
export class SpxSectionFooter {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionFooterElement;

  /**
   * Minimum column size.
   * @CSS
   */

  @Prop({ reflect: true }) columnSizeMin: string = '0';

  /**
   * Maximum column size.
   * @CSS
   */

  @Prop({ reflect: true }) columnSizeMax: string = 'auto';

  /**
   * Display.
   * @choice 'grid', 'flex'
   */

  @Prop({ reflect: true }) display: string = 'grid';

  /**
   * Gap between columns.
   * @CSS
   */

  @Prop({ reflect: true }) gap: string = 'var(--spx-space-lg)';

  @Prop({ reflect: true }) imageMaxHeight: string = '40px';

  /**
   * Space before the footer.
   * @CSS
   */

  @Prop({ reflect: true }) spaceBefore: string = 'var(--spx-space-4xl)';

  /**
   * Distance to the edge of the viewport on the y-axis.
   * @CSS
   */

  @Prop({ reflect: true }) spaceY: string = 'var(--spx-space-3xl)';

  @Prop({ reflect: true }) textMaxWidth: string = '370px';

  /**
   * Footer theme.
   * @choice 'dark', 'light'
   */

  @Prop({ reflect: true }) theme: string = 'dark';

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);
  }

  render() {
    /** Text styles. */

    const styleText = {
      color: 'var(--spx-color-gray-600)',
      fontSize: 'clamp(16px, 1.2vw, 20px)',
      lineHeight: '1.6',
      maxWidth: setVar(tag, 'text-max-width', this.textMaxWidth),
    };

    /** Host styles. */

    const styleHost = css({
      marginTop: 'auto',

      'div > h3, & > h3': {
        marginTop: state.bpMobile && 'var(--spx-space-lg)',
        marginBottom: 'var(--spx-space-md)',
      },

      '&:before': {
        display: 'block',
        content: '" "',
        height: setVar(tag, 'space-before', this.spaceBefore),
      },
    });

    /** Outer styles. */

    const styleOuter = css({
      display: 'block',
      width: '100%',
      background: 'var(--spx-color-gray-900)',
    });

    /** Inner styles. */

    const styleInner = css({
      display: this.display,
      flexDirection:
        this.display === 'flex' && state.bpMobile ? 'column' : 'row',
      justifyContent: this.display === 'flex' && 'space-between',
      flexWrap: 'wrap',
      gridAutoFlow: this.display === 'grid' && state.bpMobile && 'row',
      gridTemplateColumns:
        this.display === 'grid' && state.bpMobile
          ? '1fr'
          : 'repeat(auto-fit, minmax(' +
            setVar(tag, 'column-size-min', this.columnSizeMin) +
            ', ' +
            setVar(tag, 'column-size-max', this.columnSizeMax) +
            '))',
      gap: this.display === 'grid' && setVar(tag, 'gap', this.gap),
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '' + setVar(tag, 'padding', this.spaceY) + ' 0',

      h3: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 'clamp(18px, 1.6vw, 28px)',
        fontFamily: state.fontFamilyPrimary,
      },

      a: {
        ...styleText,
        display: 'block',
        fontFamily: state.fontFamilySecondary,
        maxWidth: 'max-content',

        '& + a': {
          marginTop: 'var(--spx-space-sm)',
        },

        '&:hover': {
          textDecoration: 'underline',
        },

        '& + h3': {
          marginTop: 'var(--spx-space-lg)',
        },
      },

      p: {
        ...styleText,
        marginTop: 'var(--spx-space-sm)',
        fontFamily: state.fontFamilySecondary,

        '& + a': {
          marginTop: 'var(--spx-space-lg)',
        },
      },

      img: {
        width: 'auto !important',
        maxWidth: '100%',
      },

      'img:not(.spx-e)': {
        maxHeight: setVar(tag, 'image-max-height', this.imageMaxHeight),
      },
    });

    return (
      <Host class={styleHost}>
        <slot name="before" />
        <div class={styleOuter}>
          <div class={styleInner}>
            <slot />
          </div>
        </div>
        <slot name="after" />
      </Host>
    );
  }
}
