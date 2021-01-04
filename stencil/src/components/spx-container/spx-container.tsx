import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  Watch,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { merge } from 'lodash-es';
import * as s from '../../constants/style';
import * as c from '../../constants/container';
import state from '../../stores/container';
import { offsetHeader } from '../../utils/offsetHeader';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { watchMobile } from '../../utils/watchMobile';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-container';

/**
 * The container element is a special component, as it isn't outputting any visible markup.
 * Rather, it's purpose is to provide global styles for section and page components.
 * It does not affect single components and won't ever will.
 */

@Component({
  tag: 'spx-container',
  styleUrl: 'spx-container.scss',
})
export class SpxContainer {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxContainerElement;

  /** Mobile breakpoint width. */

  @Prop({ reflect: true }) bpMobile: number = c.bpMobileWidth;

  @Prop({ reflect: true }) buttonBackgroundPrimary: number =
    c.buttonBackgroundPrimary;

  @Prop({ reflect: true }) buttonBackgroundSecondary: number =
    c.buttonBackgroundSecondary;

  @Prop({ reflect: true }) buttonBorderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) buttonColorPrimary: number = c.buttonColorPrimary;

  @Prop({ reflect: true }) buttonColorSecondary: number =
    c.buttonColorSecondary;

  @Prop({ reflect: true }) buttonFontSizeMin = 1;

  @Prop({ reflect: true }) buttonFontSizeMax = 1.3;

  @Prop({ reflect: true }) buttonFontWeight: string = 'bold';

  @Prop({ reflect: true }) buttonMarginXMin: number = 0.5;

  @Prop({ reflect: true }) buttonMarginXMax: number = 1;

  @Prop({ reflect: true }) buttonMarginTopMin: number = 1;

  @Prop({ reflect: true }) buttonMarginTopMax: number = 2;

  @Prop({ reflect: true }) buttonPaddingXMin: number = 1;

  @Prop({ reflect: true }) buttonPaddingXMax: number = 2;

  @Prop({ reflect: true }) buttonPaddingYMin: number = 1;

  @Prop({ reflect: true }) buttonPaddingYMax: number = 1.5;

  @Prop({ reflect: true }) buttonTextTransform: string = 'uppercase';

  /**
   * Gray color which will be used for sections and pages.
   * @choice 'blue-gray', 'cool-gray', 'gray', 'true-gray', 'warm-gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'violet', 'purple'; 'fuchsia', 'pink', 'rose'
   */

  @Prop({ reflect: true }) colorGray: string = c.colorGray;

  /**
   * Primary color which will be used for sections and pages.
   * @choice 'blue-gray', 'cool-gray', 'gray', 'true-gray', 'warm-gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'violet', 'purple'; 'fuchsia', 'pink', 'rose'
   */

  @Prop({ reflect: true }) colorPrimary: string = c.colorPrimary;

  /**
   * Secondary color which will be used for sections and pages.
   * @choice 'blue-gray', 'cool-gray', 'gray', 'true-gray', 'warm-gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'violet', 'purple'; 'fuchsia', 'pink', 'rose'
   */

  @Prop({ reflect: true }) colorSecondary: string = c.colorSecondary;

  /** Disable color generation. */

  @Prop({ reflect: true }) disableColors: boolean;

  @Prop({ reflect: true }) focusColor: string =
    'var(--spx-color-secondary-600)';

  /** Primary font-family. */

  @Prop({ reflect: true }) fontFamilyPrimary: string = c.fontFamilyPrimary;

  /** Secondary font-family. */

  @Prop({ reflect: true }) fontFamilySecondary: string = c.fontFamilySecondary;

  @Prop({ reflect: true }) imageMaxWidth: string = 'none';

  /** Linear scaling root number. */

  @Prop({ reflect: true }) linearBase: number = c.linearBase;

  /** Linear scaling minimum width. */

  @Prop({ reflect: true }) linearMinW: number = c.linearMinW;

  /** Linear scaling maximum width. */

  @Prop({ reflect: true }) linearMaxW: number = c.linearMaxW;

  /** Section max-width. */

  @Prop({ reflect: true }) maxWidth: string = c.maxWidth;

  /** Section max-width on mobile. */

  @Prop({ reflect: true }) maxWidthMobile: string = c.maxWidthMobile;

  /** Offsets first section to the height of the header. */

  @Prop({ reflect: true }) offsetHeader: boolean;

  /**
   * Space between content and outer edge of the viewport.
   * @CSS
   */

  @Prop({ reflect: true }) paddingX: string = c.paddingX;

  /**
   * Space between content and outer edge of the viewport.
   * @CSS
   */

  @Prop({ reflect: true }) paddingXSm: string = c.paddingXSm;

  @Prop({ reflect: true }) paddingYMin: number = 3;

  @Prop({ reflect: true }) paddingYMax: number = 10;

  @Prop({ reflect: true }) paddingYFirstMin: number = 2;

  @Prop({ reflect: true }) paddingYFirstMax: number = 8;

  @Prop({ reflect: true }) paddingYMaxWidth: number = 2560;

  @Prop({ reflect: true }) paddingYMultiplier: number = 1.5;

  @Prop({ reflect: true }) preTitleBackground: string =
    'var(--spx-color-secondary-50)';

  @Prop({ reflect: true }) preTitleBorderRadius: string = '9999px';

  @Prop({ reflect: true }) preTitleColor: string =
    'var(--spx-color-secondary-900)';

  @Prop({ reflect: true }) preTitleFontSizeMin = 0.6;

  @Prop({ reflect: true }) preTitleFontSizeMax = 0.7;

  @Prop({ reflect: true }) preTitleFontWeight: string = '400';

  @Prop({ reflect: true }) preTitleLetterSpacing: string = '0';

  @Prop({ reflect: true }) preTitleLineHeight: string = '1.6';

  @Prop({ reflect: true }) preTitleMarginBottomMin: number = 1;

  @Prop({ reflect: true }) preTitleMarginBottomMax: number = 2.5;

  @Prop({ reflect: true }) preTitlePaddingXMin: number = 0.8;

  @Prop({ reflect: true }) preTitlePaddingXMax: number = 1.2;

  @Prop({ reflect: true }) preTitlePaddingYMin: number = 0.3;

  @Prop({ reflect: true }) preTitlePaddingYMax: number = 0.4;

  @Prop({ reflect: true }) preTitleTextTransform: string = 'uppercase';

  @Prop({ reflect: true }) tabsMarginTopMin: number = 0.5;

  @Prop({ reflect: true }) tabsMarginTopMax: number = 1;

  @Prop({ reflect: true }) tabsFirstMarginTopMin: number = 1;

  @Prop({ reflect: true }) tabsFirstMarginTopMax: number = 2;

  /**
   * Tabs opacity.
   * @CSS
   */

  @Prop({ reflect: true }) tabsOpacity: number = 0.5;

  @Prop({ reflect: true }) textColor: string = 'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) textFontSizeMin = 1;

  @Prop({ reflect: true }) textFontSizeMax = 1.8;

  @Prop({ reflect: true }) textFontWeight: string = '400';

  @Prop({ reflect: true }) textLetterSpacing: string = '0';

  @Prop({ reflect: true }) textLineHeight: string = '1.6';

  @Prop({ reflect: true }) textLinkDecorationColor: string =
    'var(--spx-color-primary-400)';

  @Prop({ reflect: true }) textLinkDecorationColorHover: string =
    'var(--spx-color-primary-500)';

  @Prop({ reflect: true }) textMarginTopMin: number = 1;

  @Prop({ reflect: true }) textMarginTopMax: number = 1.8;

  @Prop({ reflect: true }) textMaxWidth: string = '800px';

  @Prop({ reflect: true }) textTransform: string = 'default';

  @Prop({ reflect: true }) titleColor: string = 'var(--spx-color-black)';

  @Prop({ reflect: true }) titleFontSizeMin = 1.7;

  @Prop({ reflect: true }) titleFontSizeMax = 3;

  @Prop({ reflect: true }) titleFontWeight: number = 500;

  @Prop({ reflect: true }) titleLetterSpacing: string = '0';

  @Prop({ reflect: true }) titleLineHeight: string = '1.25';

  @Prop({ reflect: true }) titleMaxWidth: string = 'max-content';

  @Prop({ reflect: true }) titleTextTransform: string = 'default';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxContainerDidLoad' })
  spxContainerDidLoad: EventEmitter;

  @Watch('bpMobile')
  bpMobileChanged() {
    state.bpMobileWidth = this.bpMobile;
  }

  /** Watch all attributes that have a store value and update it changes. */

  @Watch('buttonBackgroundPrimary')
  @Watch('buttonBackgroundSecondary')
  @Watch('buttonColorPrimary')
  @Watch('buttonColorSecondary')
  buttonColorsChanged() {
    state.buttonBackgroundPrimary = this.buttonBackgroundPrimary;
    state.buttonBackgroundSecondary = this.buttonBackgroundSecondary;
    state.buttonColorPrimary = this.buttonColorPrimary;
    state.buttonColorSecondary = this.buttonColorSecondary;
  }

  @Watch('colorSecondary')
  @Watch('colorPrimary')
  @Watch('colorGray')
  colorChanged() {
    state.colorPrimary = this.colorPrimary;
    state.colorSecondary = this.colorSecondary;
    state.colorGray = this.colorGray;
  }

  @Watch('fontFamilySecondary')
  @Watch('fontFamilyPrimary')
  fontChanged() {
    state.fontFamilyPrimary = this.fontFamilyPrimary;
    state.fontFamilySecondary = this.fontFamilySecondary;
  }

  @Watch('maxWidth')
  @Watch('maxWidthMobile')
  maxWidthChanged() {
    state.bpMaxWidth = this.maxWidth;
    state.bpMaxWidthMobile = this.maxWidthMobile;
  }

  @Watch('paddingXSm')
  @Watch('paddingX')
  spaceChanged() {
    state.paddingX = this.paddingX;
    state.paddingXsm = this.paddingXSm;
  }

  @Watch('linearBase')
  @Watch('linearMinW')
  @Watch('linearMaxW')
  linearChanged() {
    state.linearBase = this.linearBase;
    state.linearMinW = this.linearMinW;
    state.linearMaxW = this.linearMaxW;
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.offsetHeader) {
      offsetHeader(
        this.el.querySelector(':scope spx-section-header + *'),
        'spx-section-header'
      );
    }

    watchMobile();
  }

  connectedCallback() {
    /** Set initial settings. */

    state.bpMaxWidth = this.maxWidth || c.maxWidth;
    state.bpMaxWidthMobile = this.maxWidthMobile || c.maxWidthMobile;
    state.bpMobileWidth = this.bpMobile || c.bpMobileWidth;
    state.buttonBackgroundPrimary =
      this.buttonBackgroundPrimary || c.buttonBackgroundPrimary;
    state.buttonBackgroundSecondary =
      this.buttonBackgroundSecondary || c.buttonBackgroundSecondary;
    state.buttonColorPrimary = this.buttonColorPrimary || c.buttonColorPrimary;
    state.buttonColorSecondary =
      this.buttonColorSecondary || c.buttonColorSecondary;
    if (!this.disableColors) {
      state.colorPrimary = this.colorPrimary || 'red';
      state.colorSecondary = this.colorSecondary || 'pink';
      state.colorGray = this.colorGray || 'gray';
    }
    state.fontFamilyPrimary = this.fontFamilyPrimary || c.fontFamilyPrimary;
    state.fontFamilySecondary =
      this.fontFamilySecondary || c.fontFamilySecondary;
    state.paddingX = this.paddingX || c.paddingX;
    state.paddingXsm = this.paddingXSm || c.paddingXSm;
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    watchMobile();

    /** Apply margin if more than one button. */

    this.el.querySelectorAll('spx-section-button').forEach((item) => {
      if (
        item.nextElementSibling &&
        item.nextElementSibling.tagName === 'SPX-SECTION-BUTTON'
      ) {
        const style = css({
          margin:
            '0 ' +
            setClamp(
              'tag',
              'button-margin-x',
              this.buttonMarginXMin,
              this.buttonMarginXMax
            ),
        });

        item.classList.add(style);
        item.nextElementSibling.classList.add(style);
      }
    });

    this.spxContainerDidLoad.emit({ target: 'document' });
  }

  componentDidRender() {
    this.onResize();
  }

  render() {
    /** Text styles. */

    const styleText = {
      '[slot="pre-title"]:not(.spx-e)': {
        ...s.text(
          tag,
          'pre-title',
          this.preTitleColor,
          this.preTitleFontSizeMin,
          this.preTitleFontSizeMax,
          this.preTitleFontWeight,
          this.preTitleLetterSpacing,
          this.preTitleLineHeight,
          this.preTitleTextTransform
        ),
        background: setVar(
          tag,
          'pre-title-background',
          this.preTitleBackground
        ),
        padding:
          setClamp(
            tag,
            'pre-title-padding-y',
            this.preTitlePaddingYMin,
            this.preTitlePaddingYMax
          ) +
          ' ' +
          setClamp(
            tag,
            'pre-title-padding-x',
            this.preTitlePaddingXMin,
            this.preTitlePaddingXMax
          ),
        borderRadius: setVar(
          tag,
          'pre-title-border-radius',
          this.preTitleBorderRadius
        ),
        marginBottom: setClamp(
          tag,
          'pre-title-margin-bottom',
          this.preTitleMarginBottomMin,
          this.preTitleMarginBottomMax
        ),
        fontFamily: setVar(
          tag,
          'pre-title-font-family',
          state.fontFamilySecondary
        ),
      },

      'h1:not(.spx-e), h1 span:not(.spx-e), h2:not(.spx-e), h2 span:not(.spx-e)': {
        ...s.text(
          tag,
          'title',
          this.titleColor,
          this.titleFontSizeMin,
          this.titleFontSizeMax,
          this.titleFontWeight,
          this.titleLetterSpacing,
          this.titleLineHeight,
          this.titleTextTransform
        ),
        display: 'inline-block',
        maxWidth: setVar(tag, 'title-max-width', this.titleMaxWidth),
        fontFamily: setVar(tag, 'title-font-family', state.fontFamilyPrimary),
      },

      'p:not(.spx-e), [data-spx-tabs-header]:not(.spx-e)': {
        ...s.text(
          tag,
          'text',
          this.textColor,
          this.textFontSizeMin,
          this.textFontSizeMax,
          this.textFontWeight,
          this.textLetterSpacing,
          this.textLineHeight,
          this.textTransform
        ),
        background: 'none',
        maxWidth: setVar(tag, 'text-max-width', this.textMaxWidth),
        marginTop: setClamp(
          tag,
          'text-margin-top',
          this.textMarginTopMin,
          this.textMarginTopMax
        ),
        fontFamily: setVar(tag, 'text-font-family', state.fontFamilySecondary),
      },

      'p a': {
        fontFamily: setVar(tag, 'text-font-family', state.fontFamilySecondary),
        textDecoration: 'underline',
        textDecorationColor: setVar(
          tag,
          'text-link-decoration-color',
          this.textLinkDecorationColor
        ),

        '&:hover': {
          textDecorationColor: setVar(
            tag,
            'text-link-decoration-color-hover',
            this.textLinkDecorationColorHover
          ),
        },
      },
    };

    /** Style base. */

    const styleBase = {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      // height: this.el.querySelector('spx-page-docs') && '100vh',

      '& > spx-section-two-column, & > spx-section-footer > div:not([data-spx-no-styles]) > div': {
        paddingTop: setClamp(
          tag,
          'padding-y',
          this.paddingYMin,
          this.paddingYMax,
          state.linearBase,
          state.linearMinW,
          this.paddingYMaxWidth
        ),
        paddingBottom: setClamp(
          tag,
          'padding-y',
          this.paddingYMin,
          this.paddingYMax,
          state.linearBase,
          state.linearMinW,
          this.paddingYMaxWidth
        ),
      },

      '& > spx-section-two-column:not([background]) ~ spx-section-two-column[background]': {
        marginTop: setClamp(
          tag,
          'padding-y',
          this.paddingYMin / 2,
          this.paddingYMax / 2,
          state.linearBase,
          state.linearMinW,
          this.paddingYMaxWidth
        ),
      },

      '& > spx-section-two-column[background]': {
        paddingTop: setClamp(
          tag,
          'padding-y',
          this.paddingYMin * this.paddingYMultiplier,
          this.paddingYMax * this.paddingYMultiplier,
          state.linearBase,
          state.linearMinW,
          this.paddingYMaxWidth
        ),
        paddingBottom: setClamp(
          tag,
          'padding-y',
          this.paddingYMin * this.paddingYMultiplier,
          this.paddingYMax * this.paddingYMultiplier,
          state.linearBase,
          state.linearMinW,
          this.paddingYMaxWidth
        ),

        '& + spx-section-two-column[background]': {
          marginTop: 0,
        },

        '& + spx-section-two-column:not([background])': {
          paddingTop: setClamp(
            tag,
            'padding-y',
            this.paddingYMin * this.paddingYMultiplier,
            this.paddingYMax * this.paddingYMultiplier,
            state.linearBase,
            state.linearMinW,
            this.paddingYMaxWidth
          ),
        },
      },

      '& > spx-section-two-column:not([full-width]):not([media-full-width]) > *, & > spx-section-footer > div:not([data-spx-no-styles]) > div': {
        width: '100%',
        maxWidth: state.bpMobile
          ? setVar(tag, 'max-width-mobile', this.maxWidthMobile)
          : setVar(tag, 'max-width', this.maxWidth),
        marginLeft: state.bpMobile && 'auto',
        marginRight: state.bpMobile && 'auto',
      },

      '& > spx-section-two-column:not([full-width]):not([media-full-width]) > * > div': {
        maxWidth:
          state.bpMobile &&
          setVar(tag, 'max-width-mobile', this.maxWidthMobile),
      },

      '& > spx-section-two-column:not([full-width]):not([media-full-width]), & > spx-section-footer > div:not([data-spx-no-styles])': {
        paddingLeft: this.paddingX,
        paddingRight: this.paddingX,
      },

      '& > spx-section-two-column[media-full-width-mobile-fix] > div': {
        paddingLeft: state.bpMobile && this.paddingX,
        paddingRight: state.bpMobile && this.paddingX,
      },

      /** Button. */

      'p + [data-spx-section-two-column-buttons], [data-spx-tabs-header] + [data-spx-section-two-column-buttons]': {
        marginTop: setClamp(
          tag,
          'button-margin-top',
          this.buttonMarginTopMin,
          this.buttonMarginTopMax
        ),
      },

      'spx-section-button': {
        marginTop: setClamp(
          tag,
          'button-margin-x',
          this.buttonMarginXMin,
          this.buttonMarginXMax
        ),
      },

      'spx-section-button a': {
        borderRadius: setVar(
          tag,
          'button-border-radius',
          this.buttonBorderRadius
        ),
        padding:
          setClamp(
            tag,
            'button-padding-y',
            this.buttonPaddingYMin,
            this.buttonPaddingYMax
          ) +
          ' ' +
          setClamp(
            tag,
            'button-padding-x',
            this.buttonPaddingXMin,
            this.buttonPaddingXMax
          ),
        fontSize: setClamp(
          tag,
          'button-font-size',
          this.buttonFontSizeMin,
          this.buttonFontSizeMax
        ),
        fontFamily: setVar(
          tag,
          'button-font-family',
          state.fontFamilySecondary
        ),
        fontWeight: setVar(tag, 'button-font-weight', this.buttonFontWeight),
        textTransform: setVar(
          tag,
          'button-text-transform',
          this.buttonTextTransform
        ),
      },

      /** Text Media styles. */

      'spx-section-two-column': {
        '*': {
          fontFamily: setVar(tag, 'font-family', state.fontFamilyPrimary),
        },

        '&:first-of-type': {
          paddingTop: setClamp(
            tag,
            'padding-y',
            this.paddingYFirstMin,
            this.paddingYFirstMax,
            state.linearBase,
            state.linearMinW,
            this.paddingYMaxWidth
          ),
        },

        '&:first-of-type[first]': {
          paddingTop:
            'calc(' +
            setClamp(
              tag,
              'padding-y-first',
              this.paddingYFirstMin,
              this.paddingYFirstMax,
              state.linearBase,
              state.linearMinW,
              this.paddingYMaxWidth
            ) +
            ' + var(--spx-offset))',
        },

        img: {
          width: '100%',
          maxWidth: setVar(tag, 'image-max-width', this.imageMaxWidth),
        },

        '& > * > div': {
          ...styleText,
        },

        '&[type="tabs"]': {
          '[data-spx-tabs-header]': {
            maxWidth: 'max-content',
            opacity: setVar(tag, 'tabs-opacity', this.tabsOpacity),
            padding: 0,
            fontFamily: setVar(
              tag,
              'tabs-font-family',
              state.fontFamilySecondary
            ),

            '&[open]': {
              opacity: 1,
            },

            '&:first-of-type': {
              marginTop: setClamp(
                tag,
                'tabs-first-margin-top',
                this.tabsFirstMarginTopMin,
                this.tabsFirstMarginTopMax
              ),
            },

            '& + [data-spx-tabs-header]': {
              marginTop: setClamp(
                tag,
                'tabs-margin-top',
                this.tabsMarginTopMin,
                this.tabsMarginTopMax
              ),
            },
          },
        },
      },

      /** Text styles. */

      'div[data-spx-styles]': {
        ...styleText,
      },

      /** Focus styles. */

      'a, button, input, select, [data-spx-slider-tab-index], [role="button"]': {
        '&:focus': {
          outline: 'none !important',
          boxShadow: 'none',
        },

        '&:focus-visible:not([spx-focus-border])': {
          boxShadow:
            '0 0 0 2px ' + setVar(tag, 'focus-color', this.focusColor) + '',
        },

        '&[spx-focus-border]:focus-visible': {
          borderColor:
            setVar(tag, 'focus-color', this.focusColor) + '!important',
        },
      },
    };

    /** Merge objects to avoid emotion error. */

    const styleMerge = css(merge(styleBase, {}));

    return <Host class={styleMerge} />;
  }
}
