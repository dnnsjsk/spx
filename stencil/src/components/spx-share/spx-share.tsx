import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Element,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css } from '@emotion/css';
import * as s from '../../constants/style';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setVarOrClamp } from '../../utils/setVarOrClamp';

const tag = 'spx-share';

/**
 * Social share buttons. Currently includes Facebook, Twitter, Whatsapp and E-Mail.
 */

@Component({
  tag: 'spx-share',
})
export class SpxShare {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxShareElement;

  @State() location;

  @Prop({ reflect: true }) classItem: string;

  @Prop({ reflect: true }) fontSize: string = s.fontSize;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  @Prop({ reflect: true }) fontSizeMax: number = 1.4;

  @Prop({ reflect: true }) itemBackground: string;

  @Prop({ reflect: true }) itemBorderRadius: string = s.borderRadius;

  /**
   * Gap between buttons.
   * @CSS
   */

  @Prop({ reflect: true }) itemColor: string;

  /**
   * Filter hover.
   * @CSS
   */

  @Prop({ reflect: true }) itemFilterHover: string =
    'brightness(110%) saturate(120%)';

  /**
   * Gap between buttons.
   * @CSS
   */

  @Prop({ reflect: true }) itemGap: string = '0.5em';

  @Prop({ reflect: true }) itemGapMin: number = 0.4;

  @Prop({ reflect: true }) itemGapMax: number = 1;

  @Prop({ reflect: true }) itemPadding: string = '0.5em';

  @Prop({ reflect: true }) itemPaddingMin: number = 0.5;

  @Prop({ reflect: true }) itemPaddingMax: number = 1.2;

  @Prop({ reflect: true }) itemSize: string = '1em';

  @Prop({ reflect: true }) itemSizeMin: number = 0.7;

  @Prop({ reflect: true }) itemSizeMax: number = 1;

  @Prop({ reflect: true }) itemTransitionDuration: string =
    s.transitionDuration;

  @Prop({ reflect: true }) itemTransitionTimingFunction: string =
    s.transitionTimingFunction;

  /**
   * Styling.
   * @choice 'default', 'fluid', 'headless'
   */

  @Prop({ reflect: true }) styling: string = 'default';

  /** Button href target. */

  @Prop({ reflect: true }) target: string = '_blank';

  /**
   * Button theme.
   * @choice 'default', 'outline', 'minimal'
   */

  @Prop({ reflect: true }) theme: string = 'default';

  /** Render buttons vertically. */

  @Prop({ reflect: true }) vertical: boolean;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxShareDidLoad' })
  spxShareDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.location = location.href;

    this.spxShareDidLoad.emit({ target: 'document' });
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        fontSize: setVar(tag, 'font-size', this.fontSize),
        display: 'grid',
        gridAutoFlow: this.vertical ? 'row' : 'column',
        gridAutoColumns: !this.vertical && 'max-content',
        gridAutoRows: this.vertical && 'max-content',
        gridGap: setVarOrClamp(
          tag,
          'item-gap',
          this.itemGap,
          this.itemGapMin,
          this.itemGapMax,
          this.styling
        ),
      });

    /** Link styles. */

    const styleItem =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'content-box',
            cursor: 'pointer',
            width: setVarOrClamp(
              tag,
              'item-size',
              this.itemSize,
              this.itemSizeMin,
              this.itemSizeMax,
              this.styling
            ),
            height: setVarOrClamp(
              tag,
              'item-size',
              this.itemSize,
              this.itemSizeMin,
              this.itemSizeMax,
              this.styling
            ),
            padding: setVarOrClamp(
              tag,
              'item-padding',
              this.itemPadding,
              this.itemPaddingMin,
              this.itemPaddingMax,
              this.styling
            ),
            borderRadius: setVar(
              tag,
              'item-border-radius',
              this.itemBorderRadius
            ),
            color: setVar(tag, 'item-color', this.itemColor),
            background: setVar(tag, 'item-background', this.itemBackground),
            transitionProperty: 'filter',
            transitionDuration: setVar(
              tag,
              'item-transition-duration',
              this.itemTransitionDuration
            ),
            transitionTimingFunction: setVar(
              tag,
              'item-transition-timing-function',
              this.itemTransitionTimingFunction
            ),

            '&:hover': {
              filter: setVar(tag, 'item-filter-hover', this.itemFilterHover),
            },

            svg: {
              height: '100%',
            },
          })
        : this.classItem;

    /** Facebook styles. */

    const styleFacebook = css({
      background:
        this.theme === 'default' && !this.itemBackground
          ? '#1877F2'
          : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color:
        this.theme === 'outline' || this.theme === 'minimal'
          ? '#1877F2'
          : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #1877F2',
    });

    /** Twitter styles. */

    const styleTwitter = css({
      background:
        this.theme === 'default' && !this.itemBackground
          ? '#1DA1F2'
          : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color:
        this.theme === 'outline' || this.theme === 'minimal'
          ? '#1DA1F2'
          : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #1DA1F2',
    });

    /** Email styles. */

    const styleEmail = css({
      background:
        this.theme === 'default' && !this.itemBackground
          ? '#c6c6c6'
          : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color:
        this.theme === 'outline' || this.theme === 'minimal'
          ? '#c6c6c6'
          : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #c6c6c6',
    });

    /** WhatsApp styles. */

    const styleWhatsapp = css({
      background:
        this.theme === 'default' && !this.itemBackground
          ? '#25D366'
          : this.theme === 'default' && this.itemBackground
          ? this.itemBackground
          : null,
      color:
        this.theme === 'outline' || this.theme === 'minimal'
          ? '#25D366'
          : !this.itemColor
          ? '#ffffff'
          : null,
      border: this.theme === 'outline' && '1px solid #25D366',
    });

    return (
      <Host class={styleHost}>
        {/** Facebook. */}

        <a
          class={css([styleItem, styleFacebook])}
          target={this.target}
          href={
            'https://www.facebook.com/sharer/sharer.php?u=' + this.location + ''
          }
        >
          <spx-icon icon="logo-facebook" />
        </a>

        {/** Twitter. */}

        <a
          class={css([styleItem, styleTwitter])}
          target={this.target}
          href={'http://www.twitter.com/share?url=' + this.location + ''}
        >
          <spx-icon icon="logo-twitter" />
        </a>

        {/** WhatsApp. */}

        <a
          class={css([styleItem, styleWhatsapp])}
          target={this.target}
          href={'https://web.whatsapp.com/send?text=' + this.location + ''}
        >
          <spx-icon icon="logo-whatsapp" />
        </a>

        {/** Email. */}

        <a
          class={css([styleItem, styleEmail])}
          target={this.target}
          href={'mailto:?body=' + this.location + ''}
        >
          <spx-icon icon="mail" />
        </a>
      </Host>
    );
  }
}
