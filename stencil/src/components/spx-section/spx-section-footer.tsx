// eslint-disable-next-line no-unused-vars
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import state from '../../stores/container';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setClamp } from '../../utils/setClamp';
import { setSectionVar } from '../../utils/setSectionVar';

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

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-800)';

  /**
   * Gap between columns.
   * @CSS
   */

  @Prop({ reflect: true }) gap: string;

  @Prop({ reflect: true }) imageMaxHeight: string = '40px';

  @Prop({ reflect: true }) justifyContent: string = 'space-between';

  @Prop({ reflect: true }) maxWidth: string;

  @Prop({ reflect: true }) spaceBeforeMin: number = 5;

  @Prop({ reflect: true }) spaceBeforeMax: number = 12;

  @Prop({ reflect: true }) paddingYMin: number = 4;

  @Prop({ reflect: true }) paddingYMax: number = 12;

  @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-500)';

  @Prop({ reflect: true }) textFontSizeMin: number = 1;

  @Prop({ reflect: true }) textFontSizeMax: number = 1.2;

  @Prop({ reflect: true }) textMarginTopMin: number = 0.8;

  @Prop({ reflect: true }) textMarginTopMax: number = 1.2;

  @Prop({ reflect: true }) textMaxWidth: string = '370px';

  @Prop({ reflect: true }) titleFontSizeMin: number = 1;

  @Prop({ reflect: true }) titleFontSizeMax: number = 1.6;

  @Prop({ reflect: true }) titleMarginBottomMin: number = 1;

  @Prop({ reflect: true }) titleMarginBottomMax: number = 2;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSectionFooterDidLoad' })
  spxSectionFooterDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);

    this.spxSectionFooterDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Padding Y. */

    const stylePaddingY =
      '' +
      setClamp(tag, 'padding-y', this.paddingYMin, this.paddingYMax) +
      ' 0 !important';

    /** Text styles. */

    const styleText = {
      color: setVar(tag, 'text-color', this.textColor),
      fontSize: setClamp(
        tag,
        'text-font-size',
        this.textFontSizeMin,
        this.textFontSizeMax
      ),
      lineHeight: '1.6',
      maxWidth: setVar(tag, 'text-max-width', this.textMaxWidth),
    };

    /** Host styles. */

    const styleHost = css({
      marginTop: 'auto',

      'div > h3, & > h3': {
        marginBottom: setClamp(
          tag,
          'title-margin-bottom',
          this.titleMarginBottomMin,
          this.titleMarginBottomMax
        ),
      },

      'div > h3:not(.spx-e), & > h3': {
        marginTop:
          state.bpMobile &&
          setClamp(
            tag,
            'text-margin-top',
            this.textMarginTopMin * 4,
            this.textMarginTopMax * 4
          ),
      },

      '&:before': {
        display: 'block',
        content: '" "',
        height: setClamp(
          tag,
          'space-before',
          this.spaceBeforeMin,
          this.spaceBeforeMax
        ),
      },

      'div[data-spx-footer-padding-y]': {
        padding: stylePaddingY,
      },
    });

    /** Outer styles. */

    const styleOuter = css({
      display: 'block',
      width: '100%',
      background: setVar(tag, 'background', this.background),
    });

    /** Inner styles. */

    const styleInner = css({
      display: 'flex',
      flexDirection: state.bpMobile ? 'column' : 'row',
      // justifyContent: setVar(tag, 'justify-content', this.justifyContent),
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: stylePaddingY,
      maxWidth: setVar(tag, 'max-width', this.maxWidth),

      '& > div + div:not(.spx-e)': {
        marginLeft: !state.bpMobile && setVar(tag, 'gap', this.gap),
      },

      h3: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: setClamp(
          tag,
          'title-font-size',
          this.titleFontSizeMin,
          this.titleFontSizeMax
        ),
        fontFamily: state.fontFamilyPrimary,
      },

      'h3:not(.spx-e)': {
        marginTop:
          state.bpMobile &&
          setClamp(
            tag,
            'title-margin-bottom',
            this.titleMarginBottomMin * 2,
            this.titleMarginBottomMax * 2
          ),
      },

      a: {
        ...styleText,
        display: 'block',
        fontFamily: state.fontFamilySecondary,
        maxWidth: 'max-content',

        '& + a': {
          marginTop: setClamp(
            tag,
            'text-margin-top',
            this.textMarginTopMin,
            this.textMarginTopMax
          ),
        },

        '& + h3': {
          marginTop: setClamp(
            tag,
            'title-margin-bottom',
            this.titleMarginBottomMin * 2,
            this.titleMarginBottomMax * 2
          ),
        },

        '&:hover': {
          textDecoration: 'underline',
        },
      },

      p: {
        ...styleText,
        marginTop: setClamp(
          tag,
          'text-margin-top',
          this.textMarginTopMin,
          this.textMarginTopMax
        ),
        fontFamily: state.fontFamilySecondary,

        '& + a': {
          marginTop: setClamp(
            tag,
            'title-margin-bottom',
            this.titleMarginBottomMin,
            this.titleMarginBottomMax
          ),
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
