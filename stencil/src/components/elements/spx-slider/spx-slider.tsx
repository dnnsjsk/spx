import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
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
import { css as cssHost } from '@emotion/css';
import { setVar } from '../../../utils/cssVariables/setVar';
import * as s from '../../../constants/style';
import { startsWith, fromPairs, mapKeys, camelCase } from 'lodash-es';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { helperImagesOrInner } from '../../../utils/helper/helperImagesOrInner';
import { wrap } from '../../../utils/dom/wrap';
import { Button } from '../../../elements/Button';
import { intersectionObserver } from '../../../utils/observer/intersectionObserver';

const tag = 'spx-slider';

/**
 * A slider is a revolving carousel that displays photos or other types of content.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-slider',
  styleUrl: 'spx-slider.scss',
  shadow: true,
})
export class SpxScrollspy {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSliderElement;
  private container: HTMLElement;
  private next: HTMLElement;
  private paginationBullets: HTMLElement;
  private prev: HTMLElement;
  private swiperContainer: HTMLElement;

  @State() content;
  @State() counter = 0;
  @State() imagesArray: Array<string>;
  @State() swiperBreakpoints;
  @State() swiperStyle;
  private mySwiper;

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

  @Prop({ reflect: true }) display: string = s.display;

  /**
   * Slider effect.
   *
   * @choice 'slide', 'effect'
   */
  @Prop({ reflect: true }) effect: string = 'slide';

  /**
   * Image object-fit.
   *
   * @choice 'fill', 'contain', 'cover', 'scale-down', 'none'
   */
  @Prop({ reflect: true }) imageObjectFit: string = 'cover';

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @helper &lt;?php spx\Get::gallery($fieldName, $type) ?>
   */
  @Prop({ reflect: true }) images: string;

  /** WordPress media size when using the helper function. */
  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   *
   * @choice 'acf', 'mb'
   */
  @Prop({ reflect: true }) imageSrc: string;

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Amount of images to to be preloaded when lazy is enabled. */
  @Prop({ reflect: true }) lazyLoadPrevNext: number;

  /** Loops all slides infinitely. */
  @Prop({ reflect: true }) loop: boolean;

  @Prop({ reflect: true }) maxHeight: string;

  @Prop({ reflect: true }) navigation: boolean;

  @Prop({ reflect: true }) navigationBackdropFilter: string = s.backdropFilter;

  @Prop({ reflect: true }) navigationBackground: string = 'rgba(0,0,0,0.7)';

  @Prop({ reflect: true }) navigationBackgroundHover: string = 'rgba(0,0,0,1)';

  @Prop({ reflect: true }) navigationBorderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) navigationColor: string = '#ffffff';

  /**
   * Navigation distance.
   *
   * @CSS
   */
  @Prop({ reflect: true }) navigationDistanceX: string = '12px';

  /** Navigation icon type. */
  @Prop({ reflect: true }) navigationIconNext: string = 'arrow-forward';

  /** Navigation icon type. */

  @Prop({ reflect: true }) navigationIconPrev: string = 'arrow-back';

  /** Navigation icon type. */
  @Prop({ reflect: true }) navigationIconType: string = 'ionicons';

  @Prop({ reflect: true }) navigationPadding: string = '12px';

  /**
   * Navigation size.
   *
   * @CSS
   */
  @Prop({ reflect: true }) navigationSize: string = '20px';

  @Prop({ reflect: true }) navigationTransitionDuration: string =
    s.transitionDuration;

  @Prop({ reflect: true }) navigationTransitionTimingFunction: string =
    s.transitionTimingFunction;

  /**
   * Pagination type.
   *
   * @choice 'bullets', 'none'
   */
  @Prop({ reflect: true }) pagination: string = 'bullets';

  @Prop({ reflect: true }) paginationBackdropFilter: string = s.backdropFilter;

  @Prop({ reflect: true }) paginationBackground: string = 'rgba(0,0,0,0.7)';

  @Prop({ reflect: true }) paginationBulletsBackground: string =
    'var(--spx-color-gray-500)';

  @Prop({ reflect: true }) paginationBulletsBackgroundActive: string =
    '#ffffff';

  /** Make bullets clickable. */
  @Prop({ reflect: true }) paginationBulletsClickable: boolean;

  /** Will only keep a selected amount of bullets visible. */
  @Prop({ reflect: true }) paginationBulletsDynamic: boolean;

  /** Amount of dynamic bullets. */
  @Prop({ reflect: true }) paginationBulletsDynamicAmount: number = 5;

  /**
   * Size of the bullets.
   *
   * @CSS
   */
  @Prop({ reflect: true }) paginationBulletsSize: string = '6px';

  /**
   * Space between the bullets.
   *
   * @CSS
   */
  @Prop({ reflect: true }) paginationBulletsSpaceBetween: string = '6px';

  @Prop({ reflect: true }) paginationTransitionDuration: string =
    s.transitionDuration;

  @Prop({ reflect: true }) paginationTransitionTimingFunction: string =
    s.transitionTimingFunction;

  /** Filter property for the previous and next elements. */
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

  /** Space between slides. */
  @Prop({ reflect: true }) spaceBetween: number = 0;

  /** Sliding speed. */
  @Prop({ reflect: true }) speed: number = 1000;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSliderDidLoad' })
  spxSliderDidLoad: EventEmitter;

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
    globalComponentDidLoad({ el: this.el, cb: this.update });

    this.initSwiper();

    intersectionObserver(this.el, () => {
      this.mySwiper.update();
    });

    this.spxSliderDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
    this.mySwiper.destroy();
    this.initSwiper();
  }

  /**
   * Create breakpoint values.
   *
   * @returns {object} Object containing all breakpoints from properties.
   */
  private createBps = () => {
    for (
      let att, i = 0, atts = this.el.attributes, n = atts.length;
      i < n;
      i++
    ) {
      att = atts[i];
      if (startsWith(att.nodeName, 'bp-')) {
        const attribute = this.el.getAttribute(att.nodeName);
        const array = attribute.split(';');
        const pairsArray = [];
        array.forEach((item) => {
          pairsArray.push(item.replace(/ /g, '').replace(/"/g, '').split(':'));
        });
        const finalArray = fromPairs(pairsArray);
        const camelCaseArray = mapKeys(finalArray, function (_value, key) {
          return camelCase(key);
        });
        const breakpoint = att.nodeName.split('-')[1];
        return { [breakpoint]: camelCaseArray };
      }
    }
  };

  /** Init swiper. */
  private initSwiper = () => {
    /** Wrap all children in div. */
    this.container.querySelectorAll(':scope > *').forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('swiper-slide');
      wrap(item, div);
      if (this.lazy) {
        div.querySelector('img').classList.add('swiper-lazy');
      }
    });

    /** Use modules so autoplay works in build mode. */
    Swiper.use([
      Autoplay,
      Navigation,
      Pagination,
      A11y,
      Thumbs,
      Lazy,
      EffectFade,
    ]);

    /** Create swiper. */
    this.mySwiper = new Swiper(this.swiperContainer, {
      a11y: {
        firstSlideMessage: this.slideMessageFirst,
        lastSlideMessage: this.slideMessageLast,
        nextSlideMessage: this.slideMessageNext,
        prevSlideMessage: this.slideMessagePrevious,
      },
      autoHeight: this.autoheight,
      autoplay: this.autoplay && {
        delay: this.autoplayDelay,
        disableOnInteraction: this.autoplayDisableOnInteraction,
      },
      breakpoints: this.createBps(),
      centeredSlides: this.centeredSlides,
      direction: 'horizontal',
      effect: this.effect as 'slide' | 'fade',
      lazy: this.lazy && {
        checkInView: false,
        loadOnTransitionStart: true,
        loadPrevNext: this.lazyLoadPrevNext && true,
        loadPrevNextAmount: this.lazyLoadPrevNext ?? 0,
      },
      loop: this.loop,
      navigation: {
        prevEl: this.prev,
        nextEl: this.next,
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: this.pagination === 'bullets' && {
        el: this.paginationBullets,
        type: 'bullets',
        clickable: this.paginationBulletsClickable,
        dynamicBullets: this.paginationBulletsDynamic,
        dynamicMainBullets: this.paginationBulletsDynamicAmount,
      },
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      speed: this.speed,
    });

    this.mySwiper.on('observerUpdate', () => {
      this.mySwiper.update();
    });

    setTimeout(() => {
      this.mySwiper.lazy.load();
      this.mySwiper.lazy.loadInSlide(1);
    }, 1000);
  };

  /** Update. */
  private update = () => {
    this.mySwiper.destroy();
    this.container.innerHTML = '';
    this.content = this.el.innerHTML;

    setTimeout(() => {
      this.initSwiper();
    }, 100);
  };

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
      width: '100%',
      height: '100%',
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      width: '100%',
      height: '100%',

      '.swiper-container': {
        height: !this.autoheight && '100%',
      },

      '.swiper-wrapper': {
        maxHeight: setVar(tag, 'max-height', this.maxHeight),
      },

      '.swiper-slide': {
        height: 'auto',
        width: '100%',
      },

      '.swiper-pagination-bullet': {
        position: 'static',
        opacity: '1 !important',
        width:
          setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) +
          ' !important',
        height:
          setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) +
          ' !important',
        background:
          setVar(
            tag,
            'pagination-bullets-background',
            this.paginationBulletsBackground
          ) + ' !important',
        margin: `0
          calc(${setVar(
            tag,
            'pagination-bullets-space-between',
            this.paginationBulletsSpaceBetween
          )} / 2) !important`,
        transitionProperty: 'background',
        transitionDuration: s.transitionDuration,
        transitionTimingFunction: s.transitionTimingFunction,

        '&.swiper-pagination-bullet-active': {
          background:
            setVar(
              tag,
              'pagination-bullets-background-active',
              this.paginationBulletsBackgroundActive
            ) + ' !important',
        },
      },

      '.swiper-slide:not(.swiper-slide-active)': {
        filter:
          this.prevNextFilter &&
          setVar(tag, 'prev-next-filter', this.prevNextFilter),
      },

      img: {
        width: '100% !important',
        height: this.autoheight ? 'auto' : '100%' + '!important',
        objectFit: setVar(tag, 'image-object-fit', this.imageObjectFit) as
          | 'fill'
          | 'contain'
          | 'cover'
          | 'scale-down',
      },
    });

    /** Pagination. */
    const stylePagination = css({
      background: setVar(
        tag,
        'pagination-background',
        this.paginationBackground
      ),
      height:
        this.paginationBackground &&
        `calc(${setVar(
          tag,
          'pagination-bullets-size',
          this.paginationBulletsSize
        )} + 2 * ${setVar(
          tag,
          'pagination-bullets-size',
          this.paginationBulletsSize
        )})`,
      borderRadius: '9999px',
      backdropFilter: setVar(
        tag,
        'pagination-backdrop-filter',
        this.paginationBackdropFilter
      ),
      maxWidth: !this.paginationBulletsDynamic && 'max-content',
      left: !this.paginationBulletsDynamic && '50% !important',
      transform:
        !this.paginationBulletsDynamic && 'translateX(-50%) !important',
      padding:
        !this.paginationBulletsDynamic &&
        `0 ${setVar(
          tag,
          'pagination-bullets-size',
          this.paginationBulletsSize
        )}`,

      '& > span': {
        top:
          this.paginationBackground &&
          setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize),
        position: 'relative !important' as 'relative',
      },
    });

    /** Navigation. */
    const styleNavigation = css({
      display: this.navigation ? 'flex' : 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 'inherit',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& > button': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        background: setVar(
          tag,
          'navigation-background',
          this.navigationBackground
        ),
        borderRadius: setVar(
          tag,
          'navigation-border-radius',
          this.navigationBorderRadius
        ),
        padding: setVar(tag, 'navigation-padding', this.navigationPadding),
        cursor: 'pointer',
        transitionProperty: 'background, box-shadow',
        transitionDuration: setVar(
          tag,
          'navigation-transition-duration',
          this.navigationTransitionDuration
        ),
        transitionTimingFunction: setVar(
          tag,
          'navigation-transition-timing-function',
          this.navigationTransitionTimingFunction
        ),

        '&[aria-disabled="true"]': {
          opacity: 0,
          pointerEvents: 'none',
        },

        '&:hover': {
          background: setVar(
            tag,
            'navigation-background-hover',
            this.navigationBackgroundHover
          ),
        },

        ...s.focus,
      },
    });

    /** Navigation prev. */
    const styleNavigationPrev = css({
      marginLeft: setVar(tag, 'navigation-distance', this.navigationDistanceX),
    });

    /** Navigation prev. */
    const styleNavigationNext = css({
      marginRight: setVar(tag, 'navigation-distance', this.navigationDistanceX),
    });

    return (
      <Host class={styleHost}>
        <div class={styleShadowHost}>
          <div
            ref={(el) => (this.swiperContainer = el as HTMLElement)}
            class="swiper-container"
          >
            {helperImagesOrInner({
              class: 'swiper-wrapper',
              condition: this.images,
              content: this.content,
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

            {this.pagination === 'bullets' && (
              <div
                class={stylePagination + ' swiper-pagination'}
                ref={(el) => (this.paginationBullets = el as HTMLElement)}
              />
            )}

            <div class={styleNavigation}>
              <Button
                ref={(el) => (this.prev = el as HTMLElement)}
                class={styleNavigationPrev}
              >
                <spx-icon
                  type={this.navigationIconType}
                  icon={this.navigationIconPrev}
                  color={setVar(tag, 'navigation-color', this.navigationColor)}
                  size={setVar(tag, 'navigation-size', this.navigationSize)}
                />
              </Button>
              <Button
                ref={(el) => (this.next = el as HTMLElement)}
                class={styleNavigationNext}
              >
                <spx-icon
                  type={this.navigationIconType}
                  icon={this.navigationIconNext}
                  color={setVar(tag, 'navigation-color', this.navigationColor)}
                  size={setVar(tag, 'navigation-size', this.navigationSize)}
                />
              </Button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
