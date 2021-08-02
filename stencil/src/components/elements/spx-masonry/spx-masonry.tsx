import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Element,
  Prop,
  State,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import Macy from 'macy';
import { wrap } from '../../../utils/dom/wrap';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { setVar } from '../../../utils/cssVariables/setVar';
import * as s from '../../../constants/style';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { lazy } from '../../../utils/3rd/lazy';

const tag = 'spx-masonry';

/**
 * Arrange images in a masonry layout.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-masonry',
  shadow: true,
})
export class SpxMasonry {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxMasonryElement;
  private container: HTMLElement;

  @State() bpColumnsObject: object;
  @State() content;
  @State() imagesArray: Array<string>;
  @State() macyState;

  /**
   * Columns for different screen sizes. Example value: 1000:3;600:2 - this will
   * switch to a three column layout when the screen size is under 1000px and to
   * a two column layout under 600px.
   */
  @Prop({ reflect: true }) bpColumns: string;

  /** Number of columns. */
  @Prop({ reflect: true }) columns: number = 4;

  @Prop({ reflect: true }) display: string = s.display;

  /**
   * Gap between images.
   *
   * @CSS
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
   * @choice 'acf', 'mb'
   */
  @Prop({ reflect: true }) imageSrc: string;

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxMasonryDidLoad' })
  spxMasonryDidLoad: EventEmitter;

  /**
   * Watch images.
   *
   * @param {string} newValue Array string.
   */
  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = JSON.parse(newValue);
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

    /** Create object for breakpoint attribute. */
    if (this.bpColumns) {
      this.bpColumnsObject = JSON.parse(
        '{' + this.bpColumns.replace(/([0-9]+)/g, '"$1"') + '}'
      );
    }

    /** Init Macy. */
    this.initMacy();

    /** Emit event to document when Masonry finished loading. */
    this.spxMasonryDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.macyState.reInit();
  }

  disconnectedCallback() {
    this.macyState.remove();
  }

  /** Init Macy. */
  private initMacy = () => {
    /** Wrap all children in div. */
    Array.from(this.container.children).forEach((item) => {
      wrap(item, document.createElement('div'));
    });

    this.macyState = Macy({
      container: this.container,
      margin: 0,
      mobileFirst: true,
      runOnImageLoad: true,
      columns: this.columns,
      breakAt: this.bpColumns
        ? this.bpColumnsObject
        : {
            9999: this.columns ? this.columns : 4,
          },
    });
  };

  /** Update. */
  private update = () => {
    this.macyState.remove();
    this.container.innerHTML = '';
    this.content = this.el.innerHTML;
    setTimeout(() => {
      lazy({
        el: this.el,
        condition: this.lazy,
      });
      this.initMacy();
    }, 100);
  };

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      /** Adjust container margin to make up for element paddings. */
      margin:
        'calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') * -1) calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') / 2 * -1) 0 calc(var(--spx-masonry-gap, ' +
        this.gap +
        ') / 2 * -1)',
      /** Convert gap to correct padding for elements. */
      '& > div': {
        padding:
          'var(--spx-masonry-gap, ' +
          this.gap +
          ') calc(var(--spx-masonry-gap, ' +
          this.gap +
          ') / 2) 0 calc(var(--spx-masonry-gap, ' +
          this.gap +
          ') / 2)',
        boxSizing: 'border-box',

        '*': {
          width: '100%',
          maxWidth: '100%',
        },

        img: {
          verticalAlign: 'top',
        },
      },
    });

    return (
      <Host class={styleHost}>
        {helperImagesOrInner({
          class: styleShadowHost,
          condition: this.images,
          content: this.content,
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
        })}
      </Host>
    );
  }
}
