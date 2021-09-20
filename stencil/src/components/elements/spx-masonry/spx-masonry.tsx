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
import { wrap } from '../../../utils/dom/wrap';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { lazy } from '../../../utils/3rd/lazy';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-masonry';

/**
 * Arrange images in a masonry layout.
 *
 * @slot [slot:inner]
 */
@Component({
  tag: 'spx-masonry',
  styleUrl: 'spx-masonry.scss',
  shadow: true,
})
export class SpxMasonry {
  private container: HTMLElement;
  private bpColumnsObject: object;
  private imagesArray: Array<string>;
  private macyState;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxMasonryElement;

  /**
   * Columns for different screen sizes. Example value: 1000:3;600:2 - this will
   * switch to a three column layout when the screen size is under 1000px and to
   * a two column layout under 600px.
   */
  @Prop({ reflect: true }) bpColumns: string;

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
   * @helper &lt;?php spx\Get::images($fieldName, $type) ?>
   */
  @Prop({ reflect: true }) images: string;

  /** WordPress media size when using the helper function.. */
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
    if (newValue) this.imagesArray = JSON.parse(newValue);
  }

  @Watch('gap')
  // @ts-ignore
  watchAttributes(value, old, attribute) {
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
    this.wrapElements();
    this.init();
    if (this.bpColumns) {
      this.bpColumnsObject = JSON.parse(
        '{' + this.bpColumns.replace(/([0-9]+)/g, '"$1"') + '}'
      );
    }

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
    this.macyState.remove();
    this.init();
    globalComponentWillUpdate(this.el);
  }

  disconnectedCallback() {
    this.macyState.remove();
  }

  private wrapElements = () => {
    Array.from(this.container.children).forEach((item) => {
      wrap(item, document.createElement('div'));
    });
  };

  private init = () => {
    this.el.style.visibility = 'hidden';

    this.macyState = Macy({
      container: this.container,
      margin: 0,
      mobileFirst: true,
      runOnImageLoad: true,
      waitForImages: false,
      columns: !this.columns ? 1 : this.columns.toFixed(0),
      breakAt: this.bpColumns
        ? this.bpColumnsObject
        : {
            9999: this.columns ? this.columns : 4,
          },
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
    this.macyState.remove();
    this.container.innerHTML = this.el.innerHTML;
    lazy({
      el: this.el,
      condition: this.lazy,
    });
    this.wrapElements();
    this.init();
  };

  render() {
    return helperImagesOrInner({
      class: 'inner',
      condition: this.images,
      content: this.el.innerHTML,
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
