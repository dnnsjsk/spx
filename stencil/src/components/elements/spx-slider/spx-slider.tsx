import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  Thumbs,
  Lazy,
  EffectFade,
} from 'swiper';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { Button } from '../../../elements/Button';
import { setProperty } from '../../../utils/dom/setProperty';
import { parse } from '../../../utils/strings/parse';
import { helperImagesCreate } from '../../../utils/helper/helperImagesCreate';

const tag = 'spx-slider';

/**
 * A slider is a revolving carousel that displays photos or other types of content.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-slider',
  styleUrl: 'spx-slider.scss',
  shadow: true,
})
export class SpxSlider {
  private container: HTMLElement;
  private mySwiper;
  private next: HTMLElement;
  private paginationBullets: HTMLElement;
  private prev: HTMLElement;
  private swiperContainer: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSliderElement;

  @State() content;
  @State() counter = 0;
  @State() imagesArray: Array<string>;
  @State() swiperBreakpoints;
  @State() swiperStyle;

  /** Automatically adjusts height of slider. */
  @Prop({ reflect: true }) autoheight: boolean = false;

  /** Starts navigating to the next slide when page is loaded. */
  @Prop({ reflect: true }) autoplay: boolean = false;

  /** Autoplay delay. */
  @Prop({ reflect: true }) autoplayDelay: number = 6000;

  /** Disable autoplay after interaction with slides. */
  @Prop({ reflect: true }) autoplayDisableOnInteraction: boolean = false;

  /** Centers slides in viewport. */
  @Prop({ reflect: true }) centeredSlides: boolean = false;

  /**
   * Slider effect.
   *
   * @choice slide, effect
   */
  @Prop({ reflect: true }) effect: string = 'slide';

  /** Space between slides. */
  @Prop({ reflect: true }) gap: number = 0;

  /**
   * Image object-fit.
   *
   * @choice fill, contain, cover, scale-down, none
   */
  @Prop({ reflect: true }) imageObjectFit: string = 'cover';

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

  /** Amount of images to to be preloaded when lazy is enabled. */
  @Prop({ reflect: true }) lazyLoadPrevNext: number;

  /** Loops all slides infinitely. */
  @Prop({ reflect: true }) loop: boolean;

  /** @css */
  @Prop({ reflect: true }) maxHeight: string;

  @Prop({ reflect: true }) navigation: boolean = true;

  /** @css */
  @Prop({ reflect: true }) navigationBackdropFilter: string =
    'var(--spx-backdrop-filter)';

  /** @css */
  @Prop({ reflect: true }) navigationBackground: string = 'rgba(0,0,0,0.7)';

  /** @css */
  @Prop({ reflect: true }) navigationBackgroundHover: string = 'rgba(0,0,0,1)';

  /** @css */
  @Prop({ reflect: true }) navigationBorderRadius: string =
    'var(--spx-border-radius)';

  /** @css */
  @Prop({ reflect: true }) navigationColor: string = '#ffffff';

  /**
   * Navigation distance.
   *
   * @css
   */
  @Prop({ reflect: true }) navigationDistanceX: string = '12px';

  /** Navigation icon type. */
  @Prop({ reflect: true }) navigationIconNext: string = 'arrow-forward';

  /** Navigation icon type. */
  @Prop({ reflect: true }) navigationIconPrev: string = 'arrow-back';

  /** Navigation icon type. */
  @Prop({ reflect: true }) navigationIconType: string = 'ionicons';

  /** @css */
  @Prop({ reflect: true }) navigationPadding: string = '12px';

  /**
   * Navigation size.
   *
   * @css
   */
  @Prop({ reflect: true }) navigationSize: string = '20px';

  /**
   * Pagination type.
   *
   * @choice bullets, none
   */
  @Prop({ reflect: true }) pagination: string = 'bullets';

  /** @css */
  @Prop({ reflect: true }) paginationBackdropFilter: string =
    'var(--spx-backdrop-filter)';

  /** @css */
  @Prop({ reflect: true }) paginationBackground: string = 'rgba(0,0,0,0.7)';

  /** @css */
  @Prop({ reflect: true }) paginationBulletsBackground: string =
    'var(--spx-color-gray-500)';

  /** @css */
  @Prop({ reflect: true }) paginationBulletsBackgroundActive: string =
    '#ffffff';

  /** Make bullets clickable. */
  @Prop({ reflect: true }) paginationBulletsClickable: boolean;

  /** Will only keep a selected amount of bullets visible. */
  @Prop({ reflect: true }) paginationBulletsDynamic: boolean = false;

  /** Amount of dynamic bullets. */
  @Prop({ reflect: true }) paginationBulletsDynamicAmount: number = 5;

  /**
   * Space between the bullets.
   *
   * @css
   */
  @Prop({ reflect: true }) paginationBulletsGap: string = '6px';

  /**
   * Size of the bullets.
   *
   * @css
   */
  @Prop({ reflect: true }) paginationBulletsSize: string = '6px';

  /**
   * Filter property for the previous and next elements.
   *
   * @css
   */
  @Prop({ reflect: true }) prevNextFilter: string;

  /** Screen reader message for first slide. */
  @Prop({ reflect: true }) slideMessageFirst: string =
    'This is the first slide';

  /** Screen reader message for last slide. */
  @Prop({ reflect: true }) slideMessageLast: string = 'This is the last slide';

  /** Screen reader message for next slide. */
  @Prop({ reflect: true }) slideMessageNext: string = 'Next slide';

  /** Screen reader message for previous slide. */
  @Prop({ reflect: true }) slideMessagePrevious: string = 'Previous slide';

  /** Amount of slides shown at once. */
  @Prop({ reflect: true }) slidesPerView: number = 1;

  /** At which slide component should start. */
  @Prop({ reflect: true }) start: number;

  /** Sliding speed. */
  @Prop({ reflect: true }) speed: number = 1000;

  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = parse(newValue);
  }

  @Watch('paginationBulletsDynamic')
  @Watch('paginationBulletsDynamicAmount')
  reloadAttributesChanged() {
    this.update();
  }

  @Watch('imageObjectFit')
  @Watch('maxHeight')
  @Watch('navigationBackdropFilter')
  @Watch('navigationBackground')
  @Watch('navigationBackgroundHover')
  @Watch('navigationBorderRadius')
  @Watch('navigationColor')
  @Watch('navigationDistanceX')
  @Watch('navigationPadding')
  @Watch('navigationSize')
  @Watch('paginationBackdropFilter')
  @Watch('paginationBackground')
  @Watch('paginationBulletsBackground')
  @Watch('paginationBulletsBackgroundActive')
  @Watch('paginationBulletsGap')
  @Watch('paginationBulletsSize')
  @Watch('prevNextFilter')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSliderDidLoad' })
  spxSliderDidLoad: EventEmitter;

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
      props: [
        'imageObjectFit',
        'maxHeight',
        'navigationBackdropFilter',
        'navigationBackground',
        'navigationBackgroundHover',
        'navigationBorderRadius',
        'navigationColor',
        'navigationDistanceX',
        'navigationPadding',
        'navigationSize',
        'paginationBackdropFilter',
        'paginationBackground',
        'paginationBulletsBackground',
        'paginationBulletsBackgroundActive',
        'paginationBulletsGap',
        'paginationBulletsSize',
        'prevNextFilter',
      ],
      cb: this.update,
    });

    this.spxSliderDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    this.setParams();
    this.mySwiper.update();
    globalComponentWillUpdate(this.el);
  }

  private init = () => {
    helperImagesCreate({
      images: this.images,
      el: this.el,
      container: this.container,
      lazy: this.lazy,
      cb: () => {
        Swiper.use([
          Autoplay,
          Navigation,
          Pagination,
          A11y,
          Thumbs,
          Lazy,
          EffectFade,
        ]);

        this.mySwiper = new Swiper(this.swiperContainer, {
          init: false,
        });
        this.setParams();
        this.mySwiper.init();

        if (this.start) {
          this.mySwiper.slideTo(this.start, 0);
        }
      },
    });
  };

  private setParams = () => {
    this.mySwiper.params = {
      ...this.mySwiper.params,
      ...{
        a11y: {
          ...this.mySwiper.params.a11y,
          ...{
            firstSlideMessage: this.slideMessageFirst,
            lastSlideMessage: this.slideMessageLast,
            nextSlideMessage: this.slideMessageNext,
            prevSlideMessage: this.slideMessagePrevious,
          },
        },
        autoHeight: this.autoheight,
        autoplay: this.autoplay
          ? {
              ...this.mySwiper.params.autoplay,
              ...{
                delay: this.autoplayDelay,
                disableOnInteraction: this.autoplayDisableOnInteraction,
              },
            }
          : false,
        centeredSlides: this.centeredSlides,
        direction: 'horizontal',
        effect: this.effect as 'slide' | 'fade',
        lazy: this.lazy
          ? {
              ...this.mySwiper.params.lazy,
              ...{
                checkInView: false,
                loadOnTransitionStart: true,
                loadPrevNext: this.lazyLoadPrevNext && true,
                loadPrevNextAmount: this.lazyLoadPrevNext ?? 0,
              },
            }
          : false,
        loop: this.loop,
        navigation: this.navigation
          ? {
              ...this.mySwiper.params.navigation,
              ...{
                prevEl: this.prev,
                nextEl: this.next,
              },
            }
          : false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination:
          this.pagination === 'bullets'
            ? {
                ...this.mySwiper.params.pagination,
                ...{
                  el: this.paginationBullets,
                  type: 'bullets',
                  clickable: this.paginationBulletsClickable,
                  dynamicBullets: this.paginationBulletsDynamic,
                  dynamicMainBullets: this.paginationBulletsDynamicAmount,
                },
              }
            : false,
        slidesPerView: this.slidesPerView,
        spaceBetween: this.gap,
        speed: this.speed,
      },
    };

    if (this.autoplay) {
      this.mySwiper.autoplay.start();
    } else {
      this.mySwiper.autoplay.stop();
    }
  };

  private update = () => {
    this.mySwiper?.destroy();
    this.container.innerHTML = '';

    this.init();
  };

  render() {
    return (
      <div class="inner">
        <div
          ref={(el) => (this.swiperContainer = el as HTMLElement)}
          class="swiper-container"
        >
          {helperImagesOrInner({
            class: 'swiper-wrapper',
            condition: this.images,
            el: this.el,
            ref: (el) => (this.container = el as HTMLElement),
            helper: {
              array: this.imagesArray,
              images: this.images,
              lazy: this.lazy,
              size: this.imageSize,
              src: this.imageSrc,
            },
          })}

          <div
            class={
              'pagination swiper-pagination ' +
              (this.paginationBulletsDynamic
                ? 'swiper-pagination-bullets swiper-pagination-bullets-dynamic'
                : 'swiper-pagination-bullets')
            }
            ref={(el) => (this.paginationBullets = el as HTMLElement)}
          />

          <div class="navigation">
            <Button
              ref={(el) => (this.prev = el as HTMLElement)}
              class="navigation__prev"
            >
              <spx-icon
                type={this.navigationIconType}
                icon={this.navigationIconPrev}
              />
            </Button>
            <Button
              ref={(el) => (this.next = el as HTMLElement)}
              class="navigation__next"
            >
              <spx-icon
                type={this.navigationIconType}
                icon={this.navigationIconNext}
              />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
