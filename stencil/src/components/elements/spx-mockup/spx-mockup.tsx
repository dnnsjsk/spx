import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import state from '../../../store/components';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-mockup';

/**
 * Display device mockups around your content.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-mockup',
  styleUrl: 'spx-mockup.scss',
  shadow: true,
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
   *
   * @choice black, blue
   */
  @Prop({ reflect: true }) colorGalaxyS8: string = 'black';

  /**
   * Google Pixel color.
   *
   * @choice silver, black, blue
   */
  @Prop({ reflect: true }) colorGooglePixel: string = 'silver';

  /**
   * IPad Pro color.
   *
   * @choice silver, gold, rosegold, spacegray
   */
  @Prop({ reflect: true }) colorIpadPro: string = 'silver';

  /**
   * IPhone 8 color.
   *
   * @choice silver, gold, spacegray
   */
  @Prop({ reflect: true }) colorIphone8: string = 'silver';

  /**
   * MacBook color.
   *
   * @choice silver, gold, rosegold, spacegray
   */
  @Prop({ reflect: true }) colorMacbook: string = 'silver';

  /**
   * MacBook Pro color.
   *
   * @choice silver, spacegray
   */
  @Prop({ reflect: true }) colorMacbookPro: string = 'silver';

  /** @css */
  @Prop({ reflect: true }) imagePosition: string = '50% 50%';

  /** Mockup size. */
  @Prop({ reflect: true }) size: number;

  /** Mockup size maximum. */
  @Prop({ reflect: true }) sizeMax: number = 0.6;

  /** Mockup size minimum. */
  @Prop({ reflect: true }) sizeMin: number = 0.3;

  /** Image src if no inner slot is used. */
  @Prop({ reflect: true }) src: string;

  /**
   * Device type.
   *
   * @choice iphone-8, iphone-x, google-pixel-2-xl, google-pixel, galaxy-s8, ipad-pro, surface-pro, surface-book, macbook, macbook-pro, surface-studio, imac-pro, apple-watch
   */
  @Prop({ reflect: true }) type: string = 'iphone-8';

  @Watch('imagePosition')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxMockupDidLoad' })
  spxMockupDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    this.handleResize();
  }

  componentDidLoad() {
    this.parent = this.el.shadowRoot.querySelector('.spx-mockup-wrap');
    this.mockup = this.el.shadowRoot.querySelector('.spx-mockup');
    this.handleResize();
    globalComponentDidLoad({ el: this.el, tag: tag, props: ['imagePosition'] });
    this.spxMockupDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.handleResize();
  }

  private handleResize = () => {
    const percentage =
      ((window.innerWidth - state.minWidthPx) * 100) /
      (state.maxWidthPx - state.minWidthPx);

    const slope = ((this.sizeMax - this.sizeMin) / 100) * percentage;

    const size =
      window.innerWidth <= state.minWidthPx
        ? this.sizeMin
        : window.innerWidth >= state.maxWidthPx
        ? this.sizeMax
        : this.sizeMin + slope;

    this.mockup.style.transform = 'scale(' + size + ')';
    this.parent.style.height = (this.mockup.offsetHeight / 1) * size + 'px';
    this.parent.style.width = (this.mockup.offsetWidth / 1) * size + 'px';
  };

  render() {
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

    return (
      <div class="inner spx-mockup-wrap">
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
              {this.src ? (
                <img src={this.src} alt="" />
              ) : (
                <div innerHTML={this.el.innerHTML} />
              )}
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
    );
  }
}
