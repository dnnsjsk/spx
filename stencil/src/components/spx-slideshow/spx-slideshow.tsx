import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Listen,
  Element,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { getGallery } from '../../utils/getGallery';
import { emotion } from '../../utils/emotion';

const tag = 'spx-slideshow';

/**
 * Continuously playing slideshow.
 */

@Component({
  tag: 'spx-slideshow',
  shadow: true,
})
export class SpxSlideshow {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSlideshowElement;
  private clone: HTMLElement;
  private elements: HTMLElement;

  @State() imagesArray: Array<string>;
  @State() offsetWidth;

  @Prop({ reflect: true }) display: string = 'block';

  /**
   * Duration of slideshow to complete one cycle.
   * @CSS
   */

  @Prop({ reflect: true }) duration: string = '60s';

  /**
   * Gap between inner elements.
   * @CSS
   */

  @Prop({ reflect: true }) gap: string = '1em';

  /**
   * Gets images from an ACF or Metabox field.
   * @helper &lt;?php spx\get::gallery($fieldName, $type) ?>
   */

  @Prop({ reflect: true }) images: string;

  /**
   * WordPress media size when using the helper function..
   */

  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   * @choice 'acf', 'mb'
   */

  @Prop({ reflect: true }) imagesSrc: string;

  /**
   * Max width of inner elements.
   * @CSS
   */

  @Prop({ reflect: true }) maxWidth: string = '350px';

  /**
   * If not set with this attribute, overflow should be set on the parent element.
   * @CSS
   */

  @Prop({ reflect: true }) overflow: string;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSlideshowDidLoad' })
  spxSlideshowDidLoad: EventEmitter;

  /** Watch images prop and parse to array. */

  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = JSON.parse(newValue);
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.elements) {
      this.offsetWidth = this.elements.offsetWidth;
    }
  }

  componentWillLoad() {
    /** If image prop is set. */

    if (this.images) {
      this.imagesChanged(this.images);
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el.shadowRoot);

    this.elements.querySelectorAll(':scope > *').forEach((item) => {
      const clone = item.cloneNode(true);
      this.clone.appendChild(clone);
    });

    this.offsetWidth = this.elements.offsetWidth;

    this.spxSlideshowDidLoad.emit({ target: 'document' });
  }

  render() {
    const { css, keyframes } = emotion(this.el.shadowRoot);

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

    const styleHost = css({
      display: setVar(tag, 'display', this.display),
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
      <div class={styleHost}>
        <div class={styleWrap}>
          <div
            class={slideshowStyle}
            ref={(el) => (this.elements = el as HTMLElement)}
          >
            {getGallery(
              this.images,
              this.imagesSrc,
              this.imagesArray,
              this.imageSize
            )}
          </div>
          <div
            class={slideshowStyle}
            ref={(el) => (this.clone = el as HTMLElement)}
          />
        </div>
      </div>
    );
  }
}
