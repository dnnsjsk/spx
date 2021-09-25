import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Element,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { Button } from '../../../elements/Button';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-share';

/** Social share buttons. Currently includes Facebook, Twitter, Whatsapp and E-Mail. */
@Component({
  tag: 'spx-share',
  styleUrl: 'spx-share.scss',
  shadow: true,
})
export class SpxShare {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxShareElement;

  @State() location;

  /** @css */
  @Prop({ reflect: true }) fontSize: string = 'var(--spx-font-size)';

  /** @css */
  @Prop({ reflect: true }) fontSizeMax: number = 1.4;

  /** @css */
  @Prop({ reflect: true }) fontSizeMin: number = 1;

  /** @css */
  @Prop({ reflect: true }) itemBackground: string;

  /** @css */
  @Prop({ reflect: true }) itemBorderRadius: string =
    'var(--spx-border-radius)';

  /**
   * Gap between buttons.
   *
   * @css
   */
  @Prop({ reflect: true }) itemColor: string;

  /**
   * Filter hover.
   *
   * @css
   */
  @Prop({ reflect: true }) itemFilterHover: string =
    'brightness(110%) saturate(120%)';

  /**
   * Gap between buttons.
   *
   * @css
   */
  @Prop({ reflect: true }) itemGap: string = '0.5em';

  /** @css */
  @Prop({ reflect: true }) itemGapMin: number = 0.4;

  /** @css */
  @Prop({ reflect: true }) itemGapMax: number = 1;

  /** @css */
  @Prop({ reflect: true }) itemPadding: string = '0.5em';

  /** @css */
  @Prop({ reflect: true }) itemPaddingMin: number = 0.5;

  /** @css */
  @Prop({ reflect: true }) itemPaddingMax: number = 1.2;

  /** @css */
  @Prop({ reflect: true }) itemSize: string = '1em';

  /** @css */
  @Prop({ reflect: true }) itemSizeMin: number = 0.7;

  /** @css */
  @Prop({ reflect: true }) itemSizeMax: number = 1;

  /**
   * Styling.
   *
   * @choice default, fluid
   */
  @Prop({ reflect: true }) styling: string = 'default';

  /** Link href target. */
  @Prop({ reflect: true }) target: string = '_blank';

  /**
   * Button theme.
   *
   * @choice default, outline, minimal
   */
  @Prop({ reflect: true }) theme: string = 'default';

  /** Render buttons vertically. */
  @Prop({ reflect: true }) vertical: boolean;

  @Watch('fontSize')
  @Watch('fontSizeMax')
  @Watch('fontSizeMin')
  @Watch('itemBackground')
  @Watch('itemBorderRadius')
  @Watch('itemColor')
  @Watch('itemFilterHover')
  @Watch('itemGap')
  @Watch('itemGapMax')
  @Watch('itemGapMin')
  @Watch('itemPaddingMax')
  @Watch('itemPaddingMin')
  @Watch('itemSize')
  @Watch('itemSizeMax')
  @Watch('itemSizeMin')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxShareDidLoad' })
  spxShareDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'fontSize',
        'fontSizeMax',
        'fontSizeMin',
        'itemBackground',
        'itemBorderRadius',
        'itemColor',
        'itemFilterHover',
        'itemGap',
        'itemGapMax',
        'itemGapMin',
        'itemPaddingMax',
        'itemPaddingMin',
        'itemSize',
        'itemSizeMax',
        'itemSizeMin',
      ],
    });
    this.spxShareDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  render() {
    return (
      <div class="inner">
        {[
          {
            className: 'facebook',
            href: 'https://www.facebook.com/sharer/sharer.php?u=',
            icon: 'logo-facebook',
          },
          {
            className: 'twitter',
            href: 'https://www.twitter.com/share?url=',
            icon: 'logo-twitter',
          },
          {
            className: 'whatsapp',
            href: 'https://web.whatsapp.com/send?text=',
            icon: 'logo-whatsapp',
          },
          {
            className: 'email',
            href: 'mailto:?body=',
            icon: 'mail',
          },
        ].map((item) => {
          return (
            <Button
              class={item.className}
              href={item.href + window.location.href}
              target={this.target}
            >
              <spx-icon icon={item.icon} />
            </Button>
          );
        })}
      </div>
    );
  }
}
