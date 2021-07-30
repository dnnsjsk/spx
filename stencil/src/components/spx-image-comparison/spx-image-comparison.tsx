import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  State,
  Watch,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import { setVar } from '../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../utils/global/globalComponentWillUpdate';
import * as s from '../../constants/style';
import { cssEmotion } from '../../utils/css/cssEmotion';
import { Button } from '../../utils/elements/button';

const tag = 'spx-image-comparison';

/**
 * Compare two images visually using a slider. Handy for showing subtle (or not
 * so subtle) before/after differences.
 */
@Component({
  tag: 'spx-image-comparison',
  shadow: true,
})
export class SpxImageComparison {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxImageComparisonElement;
  private root: HTMLElement;
  private container: HTMLElement;
  private imageAfter: HTMLElement;
  private scroller: HTMLElement;

  @State() active: boolean;
  @State() width: number;
  private x: number;

  @Prop({ reflect: true }) color: string = '#ffffff';

  @Prop({ reflect: true }) display: string = s.display;

  @Prop({ reflect: true }) height: string = '100%';

  @Prop({ reflect: true }) iconColor: string = 'var(--spx-color-gray-900)';

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Image URL of the before image. */
  @Prop({ reflect: true }) srcAfter: string =
    'https://source.unsplash.com/random/1200x300';

  /** Image URL of the after image. */
  @Prop({ reflect: true }) srcBefore: string =
    'https://source.unsplash.com/random/1201x300';

  /** Step amount when using component with arrow keys. */
  @Prop({ reflect: true }) steps: number = 10;

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.el.offsetWidth !== this.width) {
      this.move(this.start);
      this.width = this.root.offsetWidth;
    }
  }

  /** Opening state in pixels. */
  @Prop({ reflect: true }) start: number = 150;

  @Watch('start')
  move(x) {
    /** Show image in start. */
    const transform = Math.max(0, Math.min(x, this.container.offsetWidth));
    this.imageAfter.style.width = transform + 2 + 'px';
    this.scroller.style.left = transform - 25 + 'px';

    if (x >= 2 && x <= this.width) {
      this.x = x;
    }
  }

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxImageComparisonDidLoad' })
  spxImageComparisonDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el, lazy: this.lazy });

    /** Set starting width. */
    this.width = this.root.offsetWidth;

    /** Disable for Oxygen. */
    if (document.body.classList.contains('oxygen-builder-body')) {
      this.scroller.style.pointerEvents = 'none';
    }

    /** Use boolean to know when it is being used. */
    this.active = false;

    /** Watch for clicks on scroller. */
    this.scroller.addEventListener('mousedown', () => {
      this.active = true;
    });

    /** Add scrolling class to the scroller so it has full opacity while active. */
    document.body.addEventListener('mouseup', () => {
      this.active = false;
    });

    /** Watch body for changes to the state. */
    document.body.addEventListener('mouseleave', () => {
      this.active = false;
    });

    /** Figure out where the mouse is. */
    document.body.addEventListener('mousemove', (e) => {
      this.mover(e);
    });

    /** Set starting width. */
    this.move(this.start);

    /** Repeat for touch events. */
    this.scroller.addEventListener('touchstart', () => {
      this.active = true;
    });

    document.body.addEventListener('touchend', () => {
      this.active = false;
    });

    document.body.addEventListener('touchcancel', () => {
      this.active = false;
    });

    document.body.addEventListener('touchmove', (e) => {
      this.mover(e);
    });

    this.spxImageComparisonDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  /**
   * Thumb mover function.
   *
   * @param {event} e Mover function.
   */
  private mover = (e) => {
    if (!this.active) return;
    let x = e.pageX;
    x -= this.container.getBoundingClientRect().left;
    this.move(x);
  };

  private moveLeft = () => {
    if (this.x >= 2) {
      this.move(this.x - this.steps);
    }
  };

  private moveRight = () => {
    if (this.x <= this.width) {
      this.move(this.x + this.steps);
    }
  };

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      display: 'block',
      position: 'relative',
      height: setVar(tag, 'height', this.height),
      width: '100%',
      overflow: 'hidden',
    });

    /** Container styles. */
    const styleContainer = css({
      width: '100%',
      height: setVar(tag, 'height', this.height),
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      overflow: 'hidden',
      userSelect: 'none',
    });

    /** Image styles. */
    const styleImage = css({
      height: '100%',
      maxWidth: 'none !important',
    });

    /** Image after styles. */
    const styleImageAfter = css({
      width: '125px',
    });

    /** Scroller styles. */
    const styleScroller = css({
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: '100px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      backgroundColor: ' transparent',
      opacity: this.active ? 1 : 0.9,
      pointerEvents: !this.active ? 'auto' : 'none',
      cursor: 'pointer',
      background: setVar(tag, 'color', this.color),
      border: '4px solid ' + setVar(tag, 'color', this.color) + '',
      transitionProperty: 'box-shadow, opacity',
      transitionDuration: s.transitionDuration,
      transitionTimingFunction: s.transitionTimingFunction,

      '&:hover': {
        opacity: 1,
      },

      '&:after, &:before': {
        content: '" "',
        display: 'block',
        width: '4px',
        height: '9999px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-2px',
        zIndex: 30,
        transition: '0.1s',
        background: setVar(tag, 'color', this.color),
      },

      '&:before': {
        top: '100%',
      },

      '&:after': {
        bottom: '100%',
      },

      ...s.focus,
    });

    /** Thumb styles. */
    const styleThumb = css({
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      'spx-icon': {
        transform: 'rotate(45deg)',
      },
    });

    return (
      <Host class={styleHost}>
        <div
          ref={(el) => (this.root = el as HTMLElement)}
          class={styleShadowHost}
        >
          {this.srcBefore &&
            this.srcAfter && [
              <div
                ref={(el) => (this.container = el as HTMLElement)}
                class={styleContainer}
              >
                <img
                  class={styleImage}
                  src={!this.lazy && this.srcBefore}
                  data-src={this.lazy && this.srcBefore}
                  alt="before"
                />
              </div>,

              <div
                ref={(el) => (this.imageAfter = el as HTMLElement)}
                class={css([styleContainer, styleImageAfter])}
              >
                <img
                  class={styleImage}
                  src={!this.lazy && this.srcAfter}
                  data-src={this.lazy && this.srcAfter}
                  alt="after"
                />
              </div>,

              <Button
                tag="button"
                ref={(el) => (this.scroller = el as HTMLElement)}
                class={styleScroller}
                onArrowLeft={this.moveLeft}
                onArrowRight={this.moveRight}
              >
                <div class={styleThumb}>
                  <spx-icon icon="resize" size="32px" color={this.iconColor} />
                </div>
              </Button>,
            ]}
        </div>
      </Host>
    );
  }
}
