import {
  Component,
  // eslint-disable-next-line no-unused-vars
  Element,
  Prop,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import Macy from 'macy';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { lazy } from '../../../utils/3rd/lazy';
import { setProperty } from '../../../utils/dom/setProperty';
import { parse } from '../../../utils/strings/parse';
import { helperImagesCreate } from '../../../utils/helper/helperImagesCreate';

const tag = 'spx-masonry';

/**
 * Arrange images in a masonry layout.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-masonry',
  styleUrl: 'spx-masonry.scss',
  shadow: true,
})
export class SpxMasonry {
  private container: HTMLElement;
  private imagesArray: Array<string>;
  private macyState;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxMasonryElement;

  /** Number of columns. */
  @Prop({ reflect: true }) columns: number = 4;

  /**
   * Gap between images.
   *
   * @css
   */
  @Prop({ reflect: true }) gap: string = '10px';

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @helper &lt;?php spxGetImages( $fieldName, $type, $postId ); ?>
   * @function spxGetImages
   */
  @Prop({ reflect: true }) images: string;

  /** WordPress media size when using the helper function. */
  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @choice acf, mb
   */
  @Prop({ reflect: true }) imageSrc: string = 'acf';

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = parse(newValue);
  }

  @Watch('gap')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxMasonryDidLoad' })
  spxMasonryDidLoad: EventEmitter;

  componentWillLoad() {
    if (this.images) {
      this.imagesChanged(this.images);
    }
  }

  componentDidLoad() {
    this.recursiveInit();

    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['gap'],
      lazy: this.lazy,
      cb: this.update,
      mutations: {
        subtree: true,
      },
    });
    this.spxMasonryDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    this.macyState?.remove();
    this.init();
    globalComponentWillUpdate(this.el);
  }

  disconnectedCallback() {
    this.macyState?.remove();
  }

  private recursiveInit = () => {
    helperImagesCreate({
      images: this.images,
      el: this.el,
      container: this.container,
      lazy: this.lazy,
      cb: () => this.init(),
    });
  };

  private init = () => {
    this.el.style.visibility = 'hidden';

    this.macyState = Macy({
      container: this.container,
      margin: 0,
      runOnImageLoad: true,
      waitForImages: false,
      columns: !this.columns ? 1 : this.columns.toFixed(0),
    });

    this.macyState.on(this.macyState.constants.EVENT_IMAGE_COMPLETE, () => {
      this.macyState.recalculate(true);

      setTimeout(() => {
        this.macyState.recalculate(true);
      });
      this.el.style.visibility = 'visible';
    });
  };

  private update = () => {
    this.macyState?.remove();
    this.container.innerHTML = '';
    lazy({
      el: this.el,
      condition: this.lazy,
    });

    this.recursiveInit();
  };

  render() {
    return helperImagesOrInner({
      class: 'inner',
      condition: this.images,
      el: this.el,
      ref: (el) => (this.container = el as HTMLElement),
      helper: {
        array: this.imagesArray,
        el: this.el,
        images: this.images,
        lazy: this.lazy,
        size: this.imageSize,
        src: this.imageSrc,
      },
    });
  }
}
