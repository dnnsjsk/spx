import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  State,
  Listen,
  Element,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { setVar } from '../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../utils/global/globalComponentDidLoad';
import { css as cssHost } from '@emotion/css';
import { cssEmotion } from '../../utils/css/cssEmotion';
import { globalComponentWillUpdate } from '../../utils/global/globalComponentWillUpdate';
import { helperImagesOrInner } from '../../utils/helper/helperImagesOrInner';
import { lazy } from '../../utils/3rd/lazy';

const tag = 'spx-slideshow';

/**
 * Continuously playing slideshow.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-slideshow',
  shadow: true,
})
export class SpxSlideshow {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSlideshowElement;
  private clone: HTMLElement;
  private container: HTMLElement;

  @State() content;
  @State() imagesArray: Array<string>;
  @State() offsetWidth;

  @Prop({ reflect: true }) display: string = 'block';

  /**
   * Duration of slideshow to complete one cycle.
   *
   * @CSS
   */
  @Prop({ reflect: true }) duration: string = '60s';

  /**
   * Gap between inner elements.
   *
   * @CSS
   */
  @Prop({ reflect: true }) gap: string = '1em';

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @helper &lt;?php spx\get::gallery($fieldName, $type) ?>
   */
  @Prop({ reflect: true }) images: string;

  @Prop({ reflect: true }) height: string;

  /** WordPress media size when using the helper function.. */
  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @choice 'acf', 'mb'
   */
  @Prop({ reflect: true }) imageSrc: string;

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /**
   * Max width of inner elements.
   *
   * @CSS
   */
  @Prop({ reflect: true }) maxWidth: string = '300px';

  @Prop({ reflect: true }) objectFit: string = 'contain';

  /**
   * If not set with this attribute, overflow should be set on the parent element.
   *
   * @CSS
   */
  @Prop({ reflect: true }) overflow: string;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSlideshowDidLoad' })
  spxSlideshowDidLoad: EventEmitter;

  /**
   * Watch images prop and parse to array.
   *
   * @param {string} newValue Array string.
   */
  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = JSON.parse(newValue);
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.container) {
      this.offsetWidth = this.container.offsetWidth;
    }
  }

  componentWillLoad() {
    this.content = this.el.innerHTML;

    /** If image prop is set. */
    if (this.images) {
      this.imagesChanged(this.images);
    }
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el, lazy: this.lazy, cb: this.update });

    this.initSlideshow();

    this.spxSlideshowDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private initSlideshow = () => {
    this.container.querySelectorAll(':scope > *').forEach((item) => {
      const clone = item.cloneNode(true);
      this.clone.appendChild(clone);
    });

    this.offsetWidth = this.container.offsetWidth;
  };

  /** Update. */
  private update = () => {
    this.container.innerHTML = '';
    this.clone.innerHTML = '';
    this.content = this.el.innerHTML;
    setTimeout(() => {
      this.initSlideshow();
      lazy({
        el: this.el,
        condition: this.lazy,
      });
    }, 100);
  };

  render() {
    const { css, keyframes } = cssEmotion(this.el.shadowRoot);

    /** Animation. */
    const kf = keyframes({
      '0%': {
        transform: 'translate3d(0px, 0px, 0px)',
      },
      to: {
        transform:
          'translate3d(calc(-' +
          this.offsetWidth +
          'px - ' +
          this.gap +
          '), 0px, 0px)',
      },
    });

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      overflow: setVar(tag, 'overflow', this.overflow),
    });

    /** Wrap styles. */
    const styleWrap = css({
      animationName: kf,
      animationDuration: setVar(tag, 'speed', this.duration),
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationFillMode: 'none',
      animationPlayState: 'running',
      display: 'flex',

      img: {
        maxWidth: '100%',
        width: '100%',
        height: this.height ? setVar(tag, 'image-height', this.height) : 'auto',
        objectFit: setVar(tag, 'object-fit', this.objectFit) as
          | 'fill'
          | 'contain'
          | 'cover'
          | 'scale-down',
      },

      '& > div + div': {
        marginLeft: setVar(tag, 'gap', this.gap),
      },
    });

    /** Slideshow style. */
    const slideshowStyle = css({
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: setVar(tag, 'max-width', this.maxWidth),
      gridGap: setVar(tag, 'gap', this.gap),
    });

    return (
      <Host class={styleHost}>
        <div class={styleShadowHost}>
          <div class={styleWrap}>
            {helperImagesOrInner({
              class: slideshowStyle,
              condition: this.images,
              content: this.content,
              el: this.el,
              ref: (el) => (this.container = el as HTMLElement),
              helper: {
                array: this.imagesArray,
                images: this.images,
                size: this.imageSize,
                src: this.imageSrc,
              },
            })}
            <div
              class={slideshowStyle}
              ref={(el) => (this.clone = el as HTMLElement)}
            />
          </div>
        </div>
      </Host>
    );
  }
}
