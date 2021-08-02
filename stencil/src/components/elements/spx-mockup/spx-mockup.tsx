import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { css as cssHost, cx } from '@emotion/css';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import state from '../../../store/store';

const tag = 'spx-mockup';

/**
 * Display device mockups around your content.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-mockup',
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
   * @choice 'black', 'blue'
   */
  @Prop({ reflect: true }) colorGalaxyS8: string = 'black';

  /**
   * Google Pixel color.
   *
   * @choice 'silver', 'black', 'blue'
   */
  @Prop({ reflect: true }) colorGooglePixel: string = 'silver';

  /**
   * IPad Pro color.
   *
   * @choice 'silver', 'gold', 'rosegold', 'spacegray'
   */
  @Prop({ reflect: true }) colorIpadPro: string = 'silver';

  /**
   * IPhone 8 color.
   *
   * @choice 'silver', 'gold', 'spacegray'
   */
  @Prop({ reflect: true }) colorIphone8: string = 'silver';

  /**
   * MacBook color.
   *
   * @choice 'silver', 'gold', 'rosegold', 'spacegray'
   */
  @Prop({ reflect: true }) colorMacbook: string = 'silver';

  /**
   * MacBook Pro color.
   *
   * @choice 'silver', 'spacegray'
   */
  @Prop({ reflect: true }) colorMacbookPro: string = 'silver';

  @Prop({ reflect: true }) display: string = 'inline-block';

  @Prop({ reflect: true }) imagePosition: string = '50% 50%';

  /** Mockup size. */
  @Prop({ reflect: true }) size: number;

  /** Mockup size minimum. */
  @Prop({ reflect: true }) sizeMin: number = 0.3;

  /** Mockup size maximum. */
  @Prop({ reflect: true }) sizeMax: number = 0.6;

  /** Image src if no inner slot is used. */
  @Prop({ reflect: true }) src: string;

  /**
   * Device type.
   *
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
    globalComponentDidLoad({ el: this.el });

    /** Assign states. */
    this.parent = this.el.shadowRoot.querySelector('.spx-mockup-wrap');
    this.mockup = this.el.shadowRoot.querySelector('.spx-mockup');

    /** Resize mockup. */
    this.handleResize();

    this.spxMockupDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.handleResize();
  }

  /** Resize function to keep src element in proportion. */
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

    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
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

    /** Image styles. */
    const styleDevice = css({
      '.spx-mockup, .spx-mockup::before, .spx-mockup::after, .spx-mockup *, .spx-mockup *::before, .spx-mockup *::after':
        {
          boxSizing: 'border-box',
          display: 'block',
        },
      '.spx-mockup': {
        position: 'relative',
        transform: 'scale(1)',
        transformOrigin: 'left top',
        zIndex: 1,
      },
      '.spx-mockup .spx-mockup-frame': { zIndex: 1 },
      '.spx-mockup .spx-mockup-content': {
        backgroundColor: '#fff',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        objectFit: 'cover',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      },
      '.spx-mockup .spx-mockup-content script': { display: 'none' },
      '.spx-mockup-iphone-x': { height: '868px', width: '428px' },
      '.spx-mockup-iphone-x .spx-mockup-frame': {
        background: '#222',
        borderRadius: '68px',
        boxShadow: 'inset 0 0 2px 2px #c8cacb, inset 0 0 0 7px #e2e3e4',
        height: '868px',
        padding: '28px',
        width: '428px',
      },
      '.spx-mockup-iphone-x .spx-mockup-content': {
        borderRadius: '40px',
        height: '812px',
        width: '375px',
      },
      '.spx-mockup-iphone-x .spx-mockup-stripe::after, .spx-mockup-iphone-x .spx-mockup-stripe::before':
        {
          border: 'solid rgba(51, 51, 51, 0.25)',
          borderWidth: '0 7px',
          content: "''",
          height: '7px',
          left: '0',
          position: 'absolute',
          width: '100%',
          zIndex: 9,
        },
      '.spx-mockup-iphone-x .spx-mockup-stripe::after': { top: '85px' },
      '.spx-mockup-iphone-x .spx-mockup-stripe::before': { bottom: '85px' },
      '.spx-mockup-iphone-x .spx-mockup-header': {
        background: '#222',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        height: '30px',
        left: '50%',
        marginLeft: '-102px',
        position: 'absolute',
        top: '28px',
        width: '204px',
      },
      '.spx-mockup-iphone-x .spx-mockup-header::after, .spx-mockup-iphone-x .spx-mockup-header::before':
        {
          content: "''",
          height: '10px',
          position: 'absolute',
          top: '0',
          width: '10px',
        },
      '.spx-mockup-iphone-x .spx-mockup-header::after': {
        background:
          'radial-gradient( circle at bottom left, transparent 0, transparent 75%, #222 75%, #222 100%)',
        left: '-10px',
      },
      '.spx-mockup-iphone-x .spx-mockup-header::before': {
        background:
          'radial-gradient( circle at bottom right, transparent 0, transparent 75%, #222 75%, #222 100%)',
        right: '-10px',
      },
      '.spx-mockup-iphone-x .spx-mockup-sensors::after, .spx-mockup-iphone-x .spx-mockup-sensors::before':
        {
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-iphone-x .spx-mockup-sensors::after': {
        background: '#444',
        borderRadius: '3px',
        height: '6px',
        left: '50%',
        marginLeft: '-25px',
        top: '32px',
        width: '50px',
      },
      '.spx-mockup-iphone-x .spx-mockup-sensors::before': {
        background: '#444',
        borderRadius: '50%',
        height: '14px',
        left: '50%',
        marginLeft: '40px',
        top: '28px',
        width: '14px',
      },
      '.spx-mockup-iphone-x .spx-mockup-btns': {
        background: '#c8cacb',
        height: '32px',
        left: '-3px',
        position: 'absolute',
        top: '115px',
        width: '3px',
      },
      '.spx-mockup-iphone-x .spx-mockup-btns::after, .spx-mockup-iphone-x .spx-mockup-btns::before':
        {
          background: '#c8cacb',
          content: "''",
          height: '62px',
          left: '0',
          position: 'absolute',
          width: '3px',
        },
      '.spx-mockup-iphone-x .spx-mockup-btns::after': { top: '60px' },
      '.spx-mockup-iphone-x .spx-mockup-btns::before': { top: '140px' },
      '.spx-mockup-iphone-x .spx-mockup-power': {
        background: '#c8cacb',
        height: '100px',
        position: 'absolute',
        right: '-3px',
        top: '200px',
        width: '3px',
      },
      '.spx-mockup-iphone-8': { height: '871px', width: '419px' },
      '.spx-mockup-iphone-8 .spx-mockup-frame': {
        background: '#fff',
        borderRadius: '68px',
        boxShadow: 'inset 0 0 0 2px #c8cacb, inset 0 0 0 7px #e2e3e4',
        height: '871px',
        padding: '102px 22px',
        width: '419px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-content': {
        border: '2px solid #222',
        borderRadius: '4px',
        height: '667px',
        width: '375px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-stripe::after, .spx-mockup-iphone-8 .spx-mockup-stripe::before':
        {
          border: 'solid rgba(51, 51, 51, 0.15)',
          borderWidth: '0 7px',
          content: "''",
          height: '6px',
          left: '0',
          position: 'absolute',
          width: '100%',
          zIndex: 9,
        },
      '.spx-mockup-iphone-8 .spx-mockup-stripe::after': { top: '68px' },
      '.spx-mockup-iphone-8 .spx-mockup-stripe::before': { bottom: '68px' },
      '.spx-mockup-iphone-8 .spx-mockup-header': {
        border: '2px solid #c8cacb',
        borderRadius: '50%',
        bottom: '25px',
        height: '58px',
        left: '50%',
        marginLeft: '-29px',
        position: 'absolute',
        width: '58px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-sensors': {
        background: '#666',
        borderRadius: '3px',
        height: '6px',
        left: '50%',
        marginLeft: '-38px',
        position: 'absolute',
        top: '52px',
        width: '76px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-sensors::after, .spx-mockup-iphone-8 .spx-mockup-sensors::before':
        {
          background: '#666',
          borderRadius: '50%',
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-iphone-8 .spx-mockup-sensors::after': {
        height: '10px',
        left: '50%',
        marginLeft: '-5px',
        top: '-25px',
        width: '10px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-sensors::before': {
        height: '12px',
        left: '-42px',
        marginTop: '-6px',
        top: '50%',
        width: '12px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-btns': {
        background: '#c8cacb',
        height: '30px',
        left: '-3px',
        position: 'absolute',
        top: '102px',
        width: '3px',
      },
      '.spx-mockup-iphone-8 .spx-mockup-btns::after, .spx-mockup-iphone-8 .spx-mockup-btns::before':
        {
          background: '#c8cacb',
          content: "''",
          height: '56px',
          left: '0',
          position: 'absolute',
          width: '3px',
        },
      '.spx-mockup-iphone-8 .spx-mockup-btns::after': { top: '62px' },
      '.spx-mockup-iphone-8 .spx-mockup-btns::before': { top: '132px' },
      '.spx-mockup-iphone-8 .spx-mockup-power': {
        background: '#c8cacb',
        height: '80px',
        position: 'absolute',
        right: '-2px',
        top: '160px',
        width: '3px',
      },
      '.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #e4b08a, inset 0 0 0 7px #f7e8dd',
      },
      '.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-header': {
        borderColor: '#e4b08a',
      },
      '.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns, .spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns::after, .spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-btns::before':
        {
          background: '#e4b08a',
        },
      '.spx-mockup-iphone-8.spx-mockup-gold .spx-mockup-power': {
        background: '#e4b08a',
      },
      '.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-frame': {
        background: '#222',
        boxShadow: 'inset 0 0 0 2px #74747a, inset 0 0 0 7px #9b9ba0',
      },
      '.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-stripe::after, .spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-stripe::before':
        {
          borderColor: 'rgba(204, 204, 204, 0.35)',
        },
      '.spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns, .spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns::after, .spx-mockup-iphone-8.spx-mockup-spacegray .spx-mockup-btns::before':
        {
          background: '#74747a',
        },
      '.spx-mockup-google-pixel-2-xl': { height: '832px', width: '404px' },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-frame': {
        background: '#121212',
        borderRadius: '36px',
        boxShadow: 'inset 0 0 0 2px #cfcfcf, inset 0 0 0 7px #9c9c9c',
        height: '832px',
        padding: '56px 22px',
        width: '404px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-content': {
        borderRadius: '27px',
        height: '720px',
        width: '360px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-header': {
        height: '832px',
        left: '50%',
        marginLeft: '-150px',
        position: 'absolute',
        top: '0',
        width: '300px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-header::after, .spx-mockup-google-pixel-2-xl .spx-mockup-header::before':
        {
          background: '#333',
          borderRadius: '3px',
          content: "''",
          height: '6px',
          left: '50%',
          marginLeft: '-73px',
          marginTop: '-3px',
          position: 'absolute',
          width: '146px',
        },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-header::after': {
        top: '24px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-header::before': {
        bottom: '28px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-sensors': {
        background: '#333',
        borderRadius: '7px',
        height: '14px',
        left: '54px',
        marginTop: '-7px',
        position: 'absolute',
        top: '36px',
        width: '14px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-btns': {
        background: '#cfcfcf',
        height: '102px',
        position: 'absolute',
        right: '-3px',
        top: '306px',
        width: '3px',
      },
      '.spx-mockup-google-pixel-2-xl .spx-mockup-power': {
        background: '#cfcfcf',
        height: '58px',
        position: 'absolute',
        right: '-3px',
        top: '194px',
        width: '3px',
      },
      '.spx-mockup-google-pixel': { height: '744px', width: '360px' },
      '.spx-mockup-google-pixel .spx-mockup-frame': {
        background: '#f7f7f8',
        borderRadius: '54px',
        boxShadow:
          'inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4, inset 0 0 0 10px white',
        height: '744px',
        padding: '82px 18px 86px 18px',
        width: '360px',
      },
      '.spx-mockup-google-pixel .spx-mockup-content': {
        border: '2px solid #222',
        borderRadius: '2px',
        height: '576px',
        width: '324px',
      },
      '.spx-mockup-google-pixel .spx-mockup-stripe': {
        borderTop: '6px solid rgba(51, 51, 51, 0.15)',
        bottom: '0',
        left: '254px',
        position: 'absolute',
        top: '0',
        width: '8px',
      },
      '.spx-mockup-google-pixel .spx-mockup-stripe::after, .spx-mockup-google-pixel .spx-mockup-stripe::before':
        {
          border: 'solid rgba(51, 51, 51, 0.15)',
          borderWidth: '0 6px',
          content: "''",
          height: '10px',
          left: '-254px',
          position: 'absolute',
          width: '360px',
          zIndex: 9,
        },
      '.spx-mockup-google-pixel .spx-mockup-stripe::after': { top: '60px' },
      '.spx-mockup-google-pixel .spx-mockup-stripe::before': { bottom: '46px' },
      '.spx-mockup-google-pixel .spx-mockup-sensors': {
        background: '#ddd',
        borderRadius: '2.5px',
        height: '5px',
        left: '50%',
        marginLeft: '-39px',
        marginTop: '-2.5px',
        position: 'absolute',
        top: '41px',
        width: '78px',
      },
      '.spx-mockup-google-pixel .spx-mockup-sensors::after, .spx-mockup-google-pixel .spx-mockup-sensors::before':
        {
          background: '#333',
          borderRadius: '6px',
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-google-pixel .spx-mockup-sensors::after': {
        height: '12px',
        left: '50%',
        marginLeft: '-14px',
        top: '21.5px',
        width: '28px',
      },
      '.spx-mockup-google-pixel .spx-mockup-sensors::before': {
        height: '10px',
        left: '-81px',
        marginTop: '-5px',
        top: '50%',
        width: '10px',
      },
      '.spx-mockup-google-pixel .spx-mockup-btns': {
        background: '#c8cacb',
        height: '102px',
        position: 'absolute',
        right: '-2px',
        top: '298px',
        width: '3px',
      },
      '.spx-mockup-google-pixel .spx-mockup-power': {
        background: '#c8cacb',
        height: '50px',
        position: 'absolute',
        right: '-2px',
        top: '184px',
        width: '3px',
      },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-frame': {
        background: '#211d1c',
        boxShadow:
          'inset 0 0 0 2px #363635, inset 0 0 0 6px #6a6967, inset 0 0 0 10px #3d3533',
      },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe, .spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe::after, .spx-mockup-google-pixel.spx-mockup-black .spx-mockup-stripe::before':
        {
          borderColor: 'rgba(13, 13, 13, 0.35)',
        },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-sensors': {
        background: '#444',
      },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-sensors::after': {
        background: '#0d0d0d',
      },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns, .spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns::after, .spx-mockup-google-pixel.spx-mockup-black .spx-mockup-btns::before':
        {
          background: '#363635',
        },
      '.spx-mockup-google-pixel.spx-mockup-black .spx-mockup-power': {
        background: '#363635',
      },
      '.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-frame': {
        boxShadow:
          'inset 0 0 0 2px #2a5aff, inset 0 0 0 6px #7695ff, inset 0 0 0 10px white',
      },
      '.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns, .spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns::after, .spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-btns::before':
        {
          background: '#2a5aff',
        },
      '.spx-mockup-google-pixel.spx-mockup-blue .spx-mockup-power': {
        background: '#2a5aff',
      },
      '.spx-mockup-galaxy-s8': { height: '828px', width: '380px' },
      '.spx-mockup-galaxy-s8 .spx-mockup-frame': {
        background: '#222',
        border: 'solid #cfcfcf',
        borderRadius: '55px',
        borderWidth: '5px 0',
        boxShadow: 'inset 0 0 0 2px #9c9c9c',
        height: '828px',
        padding: '48px 10px 40px 10px',
        width: '380px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-content': {
        border: '2px solid #222',
        borderRadius: '34px',
        height: '740px',
        width: '360px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-stripe::after, .spx-mockup-galaxy-s8 .spx-mockup-stripe::before':
        {
          border: 'solid rgba(51, 51, 51, 0.15)',
          borderWidth: '5px 0',
          content: "''",
          height: '828px',
          position: 'absolute',
          top: '0',
          width: '6px',
          zIndex: 9,
        },
      '.spx-mockup-galaxy-s8 .spx-mockup-stripe::after': { left: '48px' },
      '.spx-mockup-galaxy-s8 .spx-mockup-stripe::before': { right: '48px' },
      '.spx-mockup-galaxy-s8 .spx-mockup-sensors': {
        background: '#666',
        borderRadius: '3px',
        height: '6px',
        left: '50%',
        marginLeft: '-24px',
        marginTop: '-3px',
        position: 'absolute',
        top: '32px',
        width: '48px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-sensors::after, .spx-mockup-galaxy-s8 .spx-mockup-sensors::before':
        {
          background: '#666',
          borderRadius: '50%',
          content: "''",
          position: 'absolute',
          top: '50%',
        },
      '.spx-mockup-galaxy-s8 .spx-mockup-sensors::after': {
        boxShadow: '-192px 0 #333, -174px 0 #333, -240px 0 #333',
        height: '8px',
        marginTop: '-4px',
        right: '-90px',
        width: '8px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-sensors::before': {
        boxShadow: '186px 0 #666',
        height: '12px',
        left: '-90px',
        marginTop: '-6px',
        width: '12px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-btns': {
        background: '#9c9c9c',
        borderRadius: '3px 0 0 3px',
        height: '116px',
        left: '-3px',
        position: 'absolute',
        top: '144px',
        width: '3px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-btns::after': {
        background: '#9c9c9c',
        borderRadius: '3px 0 0 3px',
        content: "''",
        height: '54px',
        left: '0',
        position: 'absolute',
        top: '164px',
        width: '3px',
      },
      '.spx-mockup-galaxy-s8 .spx-mockup-power': {
        background: '#9c9c9c',
        borderRadius: '0 3px 3px 0',
        height: '54px',
        position: 'absolute',
        right: '-3px',
        top: '260px',
        width: '3px',
      },
      '.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-frame': {
        borderColor: '#a3c5e8',
        boxShadow: 'inset 0 0 0 2px #5192d4',
      },
      '.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-stripe::after, .spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-stripe::before':
        {
          borderColor: 'rgba(255, 255, 255, 0.35)',
        },
      '.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-btns, .spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-btns::after':
        {
          background: '#5192d4',
        },
      '.spx-mockup-galaxy-s8.spx-mockup-blue .spx-mockup-power': {
        background: '#5192d4',
      },
      '.spx-mockup-ipad-pro': { height: '804px', width: '560px' },
      '.spx-mockup-ipad-pro .spx-mockup-frame': {
        background: '#fff',
        borderRadius: '38px',
        boxShadow: 'inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4',
        height: '804px',
        padding: '62px 25px',
        width: '560px',
      },
      '.spx-mockup-ipad-pro .spx-mockup-content': {
        border: '2px solid #222',
        borderRadius: '2px',
        height: '680px',
        width: '510px',
      },
      '.spx-mockup-ipad-pro .spx-mockup-header': {
        border: '2px solid #c8cacb',
        borderRadius: '50%',
        bottom: '17px',
        height: '34px',
        left: '50%',
        marginLeft: '-17px',
        position: 'absolute',
        width: '34px',
      },
      '.spx-mockup-ipad-pro .spx-mockup-sensors': {
        background: '#666',
        borderRadius: '50%',
        height: '10px',
        left: '50%',
        marginLeft: '-5px',
        marginTop: '-5px',
        position: 'absolute',
        top: '34px',
        width: '10px',
      },
      '.spx-mockup-ipad-pro.spx-mockup-gold .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #e4b08a, inset 0 0 0 6px #f7e8dd',
      },
      '.spx-mockup-ipad-pro.spx-mockup-gold .spx-mockup-header': {
        borderColor: '#e4b08a',
      },
      '.spx-mockup-ipad-pro.spx-mockup-rosegold .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #f6a69a, inset 0 0 0 6px #facfc9',
      },
      '.spx-mockup-ipad-pro.spx-mockup-rosegold .spx-mockup-header': {
        borderColor: '#f6a69a',
      },
      '.spx-mockup-ipad-pro.spx-mockup-spacegray .spx-mockup-frame': {
        background: '#222',
        boxShadow: 'inset 0 0 0 2px #818187, inset 0 0 0 6px #9b9ba0',
      },
      '.spx-mockup-ipad-pro.spx-mockup-spacegray .spx-mockup-header': {
        borderColor: '#818187',
      },
      '.spx-mockup-surface-pro': { height: '394px', width: '561px' },
      '.spx-mockup-surface-pro .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '10px',
        boxShadow: 'inset 0 0 0 2px #c8c8c8',
        height: '394px',
        margin: '0 auto',
        padding: '26px 24px',
        width: '561px',
      },
      '.spx-mockup-surface-pro .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '342px',
        width: '513px',
      },
      '.spx-mockup-surface-pro .spx-mockup-btns::after, .spx-mockup-surface-pro .spx-mockup-btns::before':
        {
          background: '#c8c8c8',
          content: "''",
          height: '2px',
          position: 'absolute',
          top: '-2px',
        },
      '.spx-mockup-surface-pro .spx-mockup-btns::after': {
        left: '48px',
        width: '26px',
      },
      '.spx-mockup-surface-pro .spx-mockup-btns::before': {
        left: '94px',
        width: '48px',
      },
      '.spx-mockup-surface-pro .spx-mockup-sensors': {
        background: '#333',
        borderRadius: '50%',
        height: '6px',
        left: '50%',
        marginLeft: '-3px',
        marginTop: '-3px',
        position: 'absolute',
        top: '14px',
        width: '6px',
      },
      '.spx-mockup-surface-book': { height: '424px', width: '728px' },
      '.spx-mockup-surface-book .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '12px',
        boxShadow: 'inset 0 0 0 2px #c8c8c8',
        height: '408px',
        margin: '0 auto',
        padding: '24px 22px',
        position: 'relative',
        width: '584px',
      },
      '.spx-mockup-surface-book .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '360px',
        width: '540px',
      },
      '.spx-mockup-surface-book .spx-mockup-btns::after, .spx-mockup-surface-book .spx-mockup-btns::before':
        {
          background: '#c8c8c8',
          content: "''",
          height: '2px',
          position: 'absolute',
          top: '-2px',
        },
      '.spx-mockup-surface-book .spx-mockup-btns::after': {
        left: '122px',
        width: '20px',
      },
      '.spx-mockup-surface-book .spx-mockup-btns::before': {
        left: '168px',
        width: '44px',
      },
      '.spx-mockup-surface-book .spx-mockup-power': {
        background: 'linear-gradient(to bottom, #eee, #c8c8c8)',
        border: 'solid #c8c8c8',
        borderRadius: '2px',
        borderWidth: '0 2px',
        height: '12px',
        marginTop: '4px',
        position: 'relative',
        width: '728px',
      },
      '.spx-mockup-surface-book .spx-mockup-power::after, .spx-mockup-surface-book .spx-mockup-power::before':
        {
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-surface-book .spx-mockup-power::after': {
        background:
          'radial-gradient( circle at center, #eee 0, #eee 95%, #a2a1a1 100%)',
        borderRadius: '0 0 6px 6px',
        height: '8px',
        left: '50%',
        marginLeft: '-125px',
        top: '0',
        width: '250px',
        zIndex: 1,
      },
      '.spx-mockup-surface-book .spx-mockup-power::before': {
        background: 'linear-gradient(to bottom, #eee, #c8c8c8)',
        borderRadius: '2px 2px 0 0',
        bottom: '12px',
        height: '8px',
        left: '50%',
        marginLeft: '-292px',
        width: '584px',
      },
      '.spx-mockup-macbook-pro': { height: '444px', width: '740px' },
      '.spx-mockup-macbook-pro .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '20px',
        boxShadow: 'inset 0 0 0 2px #c8cacb',
        height: '428px',
        margin: '0 auto',
        padding: '29px 19px 39px 19px',
        position: 'relative',
        width: '614px',
      },
      '.spx-mockup-macbook-pro .spx-mockup-frame::after': {
        background: '#272626',
        borderRadius: '0 0 20px 20px',
        bottom: '2px',
        content: "''",
        height: '26px',
        left: '2px',
        position: 'absolute',
        width: '610px',
      },
      '.spx-mockup-macbook-pro .spx-mockup-frame::before': {
        bottom: '10px',
        color: '#c8cacb',
        content: "'MacBook Pro'",
        fontSize: '12px',
        height: '16px',
        left: '50%',
        lineHeight: '16px',
        marginLeft: '-100px',
        position: 'absolute',
        textAlign: 'center',
        width: '200px',
        zIndex: 1,
      },
      '.spx-mockup-macbook-pro .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '360px',
        width: '576px',
      },
      '.spx-mockup-macbook-pro .spx-mockup-power': {
        background: '#e2e3e4',
        border: 'solid #d5d6d8',
        borderRadius: '2px 2px 0 0',
        borderWidth: '2px 4px 0 4px',
        height: '14px',
        marginTop: '-10px',
        position: 'relative',
        width: '740px',
        zIndex: 9,
      },
      '.spx-mockup-macbook-pro .spx-mockup-power::after, .spx-mockup-macbook-pro .spx-mockup-power::before':
        {
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-macbook-pro .spx-mockup-power::after': {
        background: '#d5d6d8',
        borderRadius: '0 0 10px 10px',
        boxShadow: 'inset 0 0 4px 2px #babdbf',
        height: '10px',
        left: '50%',
        marginLeft: '-60px',
        top: '-2px',
        width: '120px',
      },
      '.spx-mockup-macbook-pro .spx-mockup-power::before': {
        background: '#a0a3a7',
        borderRadius: '0 0 180px 180px/ 0 0 12px 12px',
        boxShadow: 'inset 0 -2px 6px 0 #474a4d',
        height: '12px',
        left: '-4px',
        margin: '0 auto',
        top: '10px',
        width: '740px',
      },
      '.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #767a7d',
      },
      '.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power': {
        background: '#909496',
        borderColor: '#767a7d',
      },
      '.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power::after': {
        background: '#83878a',
        boxShadow: 'inset 0 0 4px 2px #6a6d70',
      },
      '.spx-mockup-macbook-pro.spx-mockup-spacegray .spx-mockup-power::before':
        {
          background: '#515456',
          boxShadow: 'inset 0 -2px 6px 0 black',
        },
      '.spx-mockup-macbook': { height: '432px', width: '740px' },
      '.spx-mockup-macbook .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '20px',
        boxShadow: 'inset 0 0 0 2px #c8cacb',
        height: '428px',
        margin: '0 auto',
        padding: '29px 19px 39px 19px',
        position: 'relative',
        width: '614px',
      },
      '.spx-mockup-macbook .spx-mockup-frame::after': {
        background: '#272626',
        borderRadius: '0 0 20px 20px',
        bottom: '2px',
        content: "''",
        height: '26px',
        left: '2px',
        position: 'absolute',
        width: '610px',
      },
      '.spx-mockup-macbook .spx-mockup-frame::before': {
        bottom: '10px',
        color: '#c8cacb',
        content: "'MacBook'",
        fontSize: '12px',
        height: '16px',
        left: '50%',
        lineHeight: '16px',
        marginLeft: '-100px',
        position: 'absolute',
        textAlign: 'center',
        width: '200px',
        zIndex: 1,
      },
      '.spx-mockup-macbook .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '360px',
        width: '576px',
      },
      '.spx-mockup-macbook .spx-mockup-power': {
        background: '#e2e3e4',
        border: 'solid #d5d6d8',
        borderRadius: '2px 2px 0 0',
        borderWidth: '0 4px',
        height: '4px',
        marginTop: '-10px',
        position: 'relative',
        width: '740px',
        zIndex: 9,
      },
      '.spx-mockup-macbook .spx-mockup-power::after, .spx-mockup-macbook .spx-mockup-power::before':
        {
          content: "''",
          position: 'absolute',
        },
      '.spx-mockup-macbook .spx-mockup-power::after': {
        background:
          'radial-gradient( circle at center, #e2e3e4 0, #e2e3e4 85%, #a0a3a7 100%)',
        border: 'solid #adb0b3',
        borderWidth: '0 2px',
        height: '4px',
        left: '50%',
        marginLeft: '-60px',
        width: '120px',
      },
      '.spx-mockup-macbook .spx-mockup-power::before': {
        background: '#a0a3a7',
        borderRadius: '0 0 180px 180px/ 0 0 10px 10px',
        boxShadow: 'inset 0 -2px 6px 0 #474a4d',
        height: '10px',
        left: '-4px',
        margin: '0 auto',
        top: '4px',
        width: '740px',
      },
      '.spx-mockup-macbook.spx-mockup-gold .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #edccb4',
      },
      '.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power': {
        background: '#f7e8dd',
        borderColor: '#edccb4',
      },
      '.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power::after': {
        background:
          'radial-gradient( circle at center, #f7e8dd 0, #f7e8dd 85%, #dfa276 100%)',
        borderColor: '#e4b08a',
      },
      '.spx-mockup-macbook.spx-mockup-gold .spx-mockup-power::before': {
        background: '#edccb4',
        boxShadow: 'inset 0 -2px 6px 0 #83491f',
      },
      '.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #f6a69a',
      },
      '.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power': {
        background: '#facfc9',
        borderColor: '#f6a69a',
      },
      '.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power::after': {
        background:
          'radial-gradient( circle at center, #facfc9 0, #facfc9 85%, #ef6754 100%)',
        borderColor: '#f6a69a',
      },
      '.spx-mockup-macbook.spx-mockup-rosegold .spx-mockup-power::before': {
        background: '#f6a69a',
        boxShadow: 'inset 0 -2px 6px 0 #851b0c',
      },
      '.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-frame': {
        boxShadow: 'inset 0 0 0 2px #767a7d',
      },
      '.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power': {
        background: '#909496',
        borderColor: '#767a7d',
      },
      '.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power::after': {
        background:
          'radial-gradient( circle at center, #909496 0, #909496 85%, #515456 100%)',
        borderColor: '#5d6163',
      },
      '.spx-mockup-macbook.spx-mockup-spacegray .spx-mockup-power::before': {
        background: '#515456',
        boxShadow: 'inset 0 -2px 6px 0 black',
      },
      '.spx-mockup-surface-studio': { height: '506px', width: '640px' },
      '.spx-mockup-surface-studio .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '10px',
        boxShadow: 'inset 0 0 0 2px black',
        height: '440px',
        padding: '20px',
        width: '640px',
      },
      '.spx-mockup-surface-studio .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '400px',
        width: '600px',
      },
      '.spx-mockup-surface-studio .spx-mockup-stripe': {
        background: '#444',
        borderRadius: '0 0 2px 2px',
        bottom: '0',
        height: '4px',
        left: '50%',
        marginLeft: '-117px',
        position: 'absolute',
        width: '234px',
      },
      '.spx-mockup-surface-studio .spx-mockup-stripe::after, .spx-mockup-surface-studio .spx-mockup-stripe::before':
        {
          content: "''",
          left: '50%',
          position: 'absolute',
          top: '-75px',
        },
      '.spx-mockup-surface-studio .spx-mockup-stripe::after': {
        border: '6px solid #d5d6d8',
        borderRadius: '0 0 18px 18px',
        borderTop: '0',
        boxShadow: 'inset 0 0 0 4px #c8cacb',
        height: '60px',
        marginLeft: '-140px',
        width: '280px',
        zIndex: -1,
      },
      '.spx-mockup-surface-studio .spx-mockup-stripe::before': {
        border: '15px solid #e2e3e4',
        borderRadius: '0 0 4px 4px',
        borderTop: '0',
        height: '70px',
        marginLeft: '-150px',
        width: '300px',
        zIndex: -2,
      },
      '.spx-mockup-surface-studio .spx-mockup-power': {
        background: '#eff0f0',
        border: 'solid #e2e3e4',
        borderRadius: '0 0 2px 2px',
        borderWidth: '0 4px 2px 4px',
        height: '32px',
        margin: '30px auto 0 auto',
        position: 'relative',
        width: '250px',
      },
      '.spx-mockup-surface-studio .spx-mockup-power::after': {
        background: '#adb0b3',
        content: "''",
        height: '2px',
        left: '-4px',
        position: 'absolute',
        top: '4px',
        width: '250px',
      },
      '.spx-mockup-imac-pro': { height: '484px', width: '624px' },
      '.spx-mockup-imac-pro .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '18px',
        boxShadow: 'inset 0 0 0 2px #080808',
        height: '428px',
        padding: '24px 24px 80px 24px',
        position: 'relative',
        width: '624px',
      },
      '.spx-mockup-imac-pro .spx-mockup-frame::after': {
        background: '#2f2e33',
        borderRadius: '0 0 18px 18px',
        bottom: '2px',
        content: "''",
        height: '54px',
        left: '2px',
        position: 'absolute',
        width: '620px',
      },
      '.spx-mockup-imac-pro .spx-mockup-frame::before': {
        bottom: '15px',
        color: '#0d0d0d',
        content: "''",
        fontSize: '24px',
        height: '24px',
        left: '50%',
        lineHeight: '24px',
        marginLeft: '-100px',
        position: 'absolute',
        textAlign: 'center',
        width: '200px',
        zIndex: 9,
      },
      '.spx-mockup-imac-pro .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '324px',
        width: '576px',
      },
      '.spx-mockup-imac-pro .spx-mockup-power::after, .spx-mockup-imac-pro .spx-mockup-power::before':
        {
          content: "''",
        },
      '.spx-mockup-imac-pro .spx-mockup-power::after': {
        background: '#222225',
        borderRadius: '2px',
        height: '6px',
        margin: '0 auto',
        position: 'relative',
        width: '180px',
      },
      '.spx-mockup-imac-pro .spx-mockup-power::before': {
        border: 'solid transparent',
        borderBottomColor: '#333',
        borderWidth: '0 8px 50px 8px',
        height: '50px',
        margin: '0 auto',
        position: 'relative',
        width: '130px',
      },
      '.spx-mockup-apple-watch': { height: '234px', maxWidth: '300px' },
      '.spx-mockup-apple-watch .spx-mockup-frame': {
        background: '#0d0d0d',
        borderRadius: '40px',
        boxShadow:
          'inset 0 0 2px 2px #adb0b3, inset 0 0 0 6px #e2e3e4, inset 0 0 0 8px #e2e3e4',
        height: '234px',
        padding: '32px',
        position: 'relative',
        width: '200px',
      },
      '.spx-mockup-apple-watch .spx-mockup-frame::after': {
        borderRadius: '30px',
        boxShadow: 'inset 0 0 25px 0 rgba(255, 255, 255, 0.75)',
        content: "''",
        height: '216px',
        left: '9px',
        position: 'absolute',
        top: '9px',
        width: '182px',
      },
      '.spx-mockup-apple-watch .spx-mockup-content': {
        border: '2px solid #121212',
        borderRadius: '2px',
        height: '170px',
        width: '136px',
      },
      '.spx-mockup-apple-watch .spx-mockup-btns': {
        background: '#e2e3e4',
        borderLeft: '2px solid #adb0b3',
        borderRadius: '8px 4px 4px 8px / 20px 4px 4px 20px',
        boxShadow: 'inset 0 0 2px 2px #adb0b3',
        height: '44px',
        position: 'absolute',
        right: '-10px',
        top: '52px',
        width: '16px',
        zIndex: 9,
      },
      '.spx-mockup-apple-watch .spx-mockup-btns::after': {
        background: '#e2e3e4',
        borderRadius: '4px 2px 2px 4px / 10px 2px 2px 10px',
        boxShadow: 'inset 0 0 1px 2px #adb0b3',
        content: "''",
        height: '66px',
        position: 'absolute',
        right: '6px',
        top: '68px',
        width: '8px',
      },
      '.spx-mockup-apple-watch .spx-mockup-btns::before': {
        background: '#adb0b3',
        boxShadow:
          '0 -16px #adb0b3, 0 -12px #adb0b3, 0 -8px #adb0b3, 0 -4px #adb0b3, 0 4px #adb0b3, 0 8px #adb0b3, 0 12px #adb0b3, 0 16px #adb0b3',
        content: "''",
        height: '2px',
        marginTop: '-1px',
        position: 'absolute',
        right: '0',
        top: '50%',
        width: '6px',
      },
    });

    return (
      <Host class={styleHost}>
        <div class={cx(styleShadowHost, styleDevice) + ' spx-mockup-wrap'}>
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
                  <img class={styleImg} src={this.src} alt="" />
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
      </Host>
    );
  }
}
