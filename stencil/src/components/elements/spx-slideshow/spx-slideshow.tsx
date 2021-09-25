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
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { lazy } from '../../../utils/3rd/lazy';
import { setProperty } from '../../../utils/dom/setProperty';
import { twind } from '../../../utils/3rd/twind';
import { keyframes } from 'twind/css';
import { parse } from '../../../utils/strings/parse';
import { helperImagesCreate } from '../../../utils/helper/helperImagesCreate';

const tag = 'spx-slideshow';

/**
 * Continuously playing slideshow.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-slideshow',
  styleUrl: 'spx-slideshow.scss',
  shadow: true,
})
export class SpxSlideshow {
  private clone: HTMLElement;
  private container: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSlideshowElement;

  @State() content;
  @State() imagesArray: Array<string>;
  @State() offsetWidth;

  /**
   * Duration of slideshow to complete one cycle.
   *
   * @css
   */
  @Prop({ reflect: true }) duration: string = '60s';

  /**
   * Gap between inner elements.
   *
   * @css
   */
  @Prop({ reflect: true }) gap: string = '1em';

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @helper &lt;?php spx\get::gallery($fieldName, $type; ?>
   * @function spxGetImages
   */
  @Prop({ reflect: true }) images: string;

  /** @css */
  @Prop({ reflect: true }) height: string;

  /** WordPress media size when using the helper function. */
  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @choice acf, mb
   */
  @Prop({ reflect: true }) imageSrc: string;

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /**
   * Max width of inner elements.
   *
   * @css
   */
  @Prop({ reflect: true }) maxWidth: string = '300px';

  /** @css */
  @Prop({ reflect: true }) objectFit: string = 'contain';

  /**
   * If not set with this attribute, overflow should be set on the parent element.
   *
   * @css
   */
  @Prop({ reflect: true }) overflow: string;

  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = parse(newValue);
  }

  @Watch('duration')
  @Watch('gap')
  @Watch('height')
  @Watch('maxWidth')
  @Watch('objectFit')
  @Watch('overflow')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSlideshowDidLoad' })
  spxSlideshowDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.container) {
      this.offsetWidth = this.container.offsetWidth;
    }
  }

  componentWillLoad() {
    this.content = this.el.innerHTML;

    if (this.images) {
      this.imagesChanged(this.images);
    }
  }

  componentDidLoad() {
    this.init();
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['duration', 'gap', 'height', 'maxWidth', 'objectFit', 'overflow'],
      lazy: this.lazy,
      cb: this.update,
    });
    this.spxSlideshowDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private init = () => {
    helperImagesCreate({
      images: this.images,
      el: this.el,
      container: this.container,
      cb: () => {
        this.container.querySelectorAll(':scope > *').forEach((item) => {
          const clone = item.cloneNode(true);
          this.clone.appendChild(clone);
        });
      },
    });

    this.offsetWidth = this.container.offsetWidth;
  };

  private update = () => {
    this.container.innerHTML = '';
    this.clone.innerHTML = '';
    this.init();
    lazy({
      el: this.el,
      condition: this.lazy,
    });
  };

  render() {
    const { tw, css: style } = twind(this.el.shadowRoot);
    const css = (obj) => tw(style(obj));

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

    const styleWrap = css({
      animationName: kf,
    });

    return (
      <div class="inner">
        <div class={`wrap ${styleWrap}`}>
          {helperImagesOrInner({
            class: 'slideshow',
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
            class="slideshow"
            ref={(el) => (this.clone = el as HTMLElement)}
          />
        </div>
      </div>
    );
  }
}
