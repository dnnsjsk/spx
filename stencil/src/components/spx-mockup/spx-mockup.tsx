import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-mockup';

/**
 * Display device mockups around your content.
 */

@Component({
  tag: 'spx-mockup',
  styleUrl: 'spx-mockup.css',
})
export class SpxMockup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxMockupElement;

  @State() height: string;
  @State() innerElId;
  @State() mockup;
  @State() outerElId;
  @State() parent;
  @State() parentHeight;
  @State() width: string;

  /**
   * Samsung S8 color.
   * @choice 'black', 'blue'
   */

  @Prop({ reflect: true }) colorGalaxyS8: string = 'black';

  /**
   * Google Pixel color.
   * @choice 'silver', 'black', 'blue'
   */

  @Prop({ reflect: true }) colorGooglePixel: string = 'silver';

  /**
   * iPad Pro color.
   * @choice 'silver', 'gold', 'rosegold', 'spacegray'
   */

  @Prop({ reflect: true }) colorIpadPro: string = 'silver';

  /**
   * iPhone 8 color.
   * @choice 'silver', 'gold', 'spacegray'
   */

  @Prop({ reflect: true }) colorIphone8: string = 'silver';

  /**
   * MacBook color.
   * @choice 'silver', 'gold', 'rosegold', 'spacegray'
   */

  @Prop({ reflect: true }) colorMacbook: string = 'silver';

  /**
   * MacBook Pro color.
   * @choice 'silver', 'spacegray'
   */

  @Prop({ reflect: true }) colorMacbookPro: string = 'silver';

  @Prop({ reflect: true }) display: string = 'inline-block';

  @Prop({ reflect: true }) imagePosition: string = '50% 50%';

  /** Image src if no inner slot is used. */

  @Prop({ reflect: true }) src: string = 'https://picsum.photos/400/1200';

  /**
   * Device type.
   * @choice 'iphone-8', 'iphone-x', 'google-pixel-2-xl', 'google-pixel', 'galaxy-s8', 'ipad-pro', 'surface-pro', 'surface-book', 'macbook', 'macbook-pro', 'surface-studio', 'imac-pro', 'apple-watch'
   */

  @Prop({ reflect: true }) type: string = 'iphone-8';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxMockupDidLoad' })
  spxMockupDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    this.handleResize();
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Assign states. */

    this.mockup = this.el.querySelector('.spx-mockup');
    this.parent = this.el.querySelector('.spx-mockup-wrap');

    /** Resize mockup. */

    this.handleResize();

    this.spxMockupDidLoad.emit({ target: 'document' });
  }

  componentDidUpdate() {
    this.handleResize();
  }

  /** Resize function to keep src element in proportion. */

  private handleResize() {
    const ratio = this.parent.offsetWidth / this.mockup.offsetWidth;
    this.mockup.style.transform = 'scale(calc((' + ratio + '))';
    this.parentHeight = this.mockup.offsetHeight;
    this.parent.style.height = (this.parentHeight / 1) * ratio + 'px';
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Set the correct color. */

    const color =
      this.type === 'galaxy-s8'
        ? this.colorGalaxyS8
        : this.type === 'google-pixel'
        ? this.colorGooglePixel
        : this.type === 'ipad-pro'
        ? this.colorIpadPro
        : this.type === 'iphone-8'
        ? this.colorIphone8
        : this.type === 'macbook'
        ? this.colorMacbook
        : this.type === 'macbook-pro'
        ? this.colorMacbookPro
        : null;

    /** Hist styles. */

    const styleHost = css({
      position: 'relative',
      display: setVar(tag, 'display', this.display),
      maxWidth: '100%',
    });

    /** Image styles. */

    const styleImg = css({
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: this.imagePosition,
    });

    return (
      <Host class={styleHost}>
        <div class="spx-mockup-wrap">
          <div
            class={
              'spx-mockup spx-mockup-' +
              this.type +
              ' ' +
              (color !== null && 'spx-mockup-' + color) +
              ''
            }
          >
            <div class="spx-mockup-frame">
              <div class="spx-mockup-content">
                {this.src ? <img class={styleImg} src={this.src} /> : <slot />}
              </div>
            </div>
            <div class="spx-mockup-stripe" />
            <div class="spx-mockup-header" />
            <div class="spx-mockup-sensors" />
            <div class="spx-mockup-btns" />
            <div class="spx-mockup-power" />
            {this.type === 'iphone-x' && <div class="spx-mockup-home" />}
          </div>
        </div>
      </Host>
    );
  }
}
