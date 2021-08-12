import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Element,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import * as s from '../../../constants/style';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { setStyle } from '../../../utils/cssVariables/setStyle';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { Button } from '../../../elements/Button';

const tag = 'spx-share';

/** Social share buttons. Currently includes Facebook, Twitter, Whatsapp and E-Mail. */
@Component({
  tag: 'spx-share',
  shadow: true,
})
export class SpxShare {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxShareElement;

  @State() location;

  @Prop({ reflect: true }) classItem: string;

  @Prop({ reflect: true }) display: string = s.display;

  @Prop({ reflect: true }) fontSize: string = s.fontSize;

  @Prop({ reflect: true }) fontSizeMax: number = 1.4;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  @Prop({ reflect: true }) itemBackground: string;

  @Prop({ reflect: true }) itemBorderRadius: string = s.borderRadius;

  /**
   * Gap between buttons.
   *
   * @CSS
   */
  @Prop({ reflect: true }) itemColor: string;

  /**
   * Filter hover.
   *
   * @CSS
   */
  @Prop({ reflect: true }) itemFilterHover: string =
    'brightness(110%) saturate(120%)';

  /**
   * Gap between buttons.
   *
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
   *
   * @choice 'default', 'fluid', 'headless'
   */
  @Prop({ reflect: true }) styling: string = 'default';

  /** Button href target. */
  @Prop({ reflect: true }) target: string = '_blank';

  /**
   * Button theme.
   *
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
    globalComponentDidLoad({ el: this.el });

    this.spxShareDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        fontSize: setVar(tag, 'font-size', this.fontSize),
        display: 'grid',
        gridAutoFlow: this.vertical ? 'row' : 'column',
        gridAutoColumns: !this.vertical && 'max-content',
        gridAutoRows: this.vertical && 'max-content',
        gridGap: setStyle(
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
            width: setStyle(
              tag,
              'item-size',
              this.itemSize,
              this.itemSizeMin,
              this.itemSizeMax,
              this.styling
            ),
            height: setStyle(
              tag,
              'item-size',
              this.itemSize,
              this.itemSizeMin,
              this.itemSizeMax,
              this.styling
            ),
            padding: setStyle(
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
            transitionProperty: 'filter, box-shadow',
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

            ...s.focus,
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
        <div class={styleShadowHost}>
          {[
            {
              className: styleFacebook,
              href: 'https://www.facebook.com/sharer/sharer.php?u=',
              icon: 'logo-facebook',
            },
            {
              className: styleTwitter,
              href: 'https://www.twitter.com/share?url=',
              icon: 'logo-twitter',
            },
            {
              className: styleWhatsapp,
              href: 'https://web.whatsapp.com/send?text=',
              icon: 'logo-whatsapp',
            },
            {
              className: styleEmail,
              href: 'mailto:?body=',
              icon: 'mail',
            },
          ].map((item) => {
            return (
              <Button
                class={css([styleItem, item.className])}
                href={item.href + window.location.href}
                target={this.target}
              >
                <spx-icon icon={item.icon} />
              </Button>
            );
          })}
        </div>
      </Host>
    );
  }
}
