import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import Swiper, { Autoplay, Navigation, Pagination, A11y, Thumbs } from 'swiper';
import { css, keyframes } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import * as s from '../../constants/style';
import { startsWith, fromPairs, mapKeys, camelCase } from 'lodash-es';
import { getGallery } from '../../utils/getGallery';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-slider';

/**
 * A slider is a revolving carousel that displays photos or other types of content.
 */

@Component({
  tag: 'spx-slider',
  styleUrl: 'spx-slider.scss',
})
export class SpxScrollspy {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSliderElement;
  private container: HTMLElement;
  private next: HTMLElement;
  private prev: HTMLElement;
  private paginationTabs: HTMLElement;
  private paginationBullets: HTMLElement;

  @State() imagesArray: Array<string>;
  @State() mySwiper;
  @State() mySwiperGallery;
  @State() swiperBreakpoints;

  /** Automatically adjusts height of slider. */

  @Prop({ reflect: true }) autoheight: boolean = false;

  /** Starts navigating to the next slide when page is loaded. */

  @Prop({ reflect: true }) autoplay: boolean = false;

  /** Autoplay delay. */

  @Prop({ reflect: true }) autoplayDelay: number = 6000;

  /** Disable autoplay after interaction with slides. */

  @Prop({ reflect: true }) autoplayDisableOnInteraction: boolean = false;

  /** Starts navigating to the next slide when page is loaded. */

  @Prop({ reflect: true }) bpTabs: string;

  /** Centers slides in viewport. */

  @Prop({ reflect: true }) centeredSlides: boolean = false;

  /**
   * Slider direction.
   * @choice 'horizontal', 'vertical'
   */

  @Prop({ reflect: true }) direction: string = 'horizontal';

  /**
   * Slider effect.
   * @choice 'slide', 'effect'
   */

  @Prop({ reflect: true }) effect: string = 'slide';

  /**
   * Image object-fit.
   * @choice 'fill', 'contain', 'cover', 'scale-down', 'none'
   */

  @Prop({ reflect: true }) imageObjectFit: string = 'cover';

  /**
   * WordPress media size when using the helper function..
   */

  @Prop({ reflect: true }) imageSize: string;

  /**
   * Gets images from an ACF or Metabox field.
   * @helper &lt;?php spx\Get::gallery($fieldName, $type) ?>
   */

  @Prop({ reflect: true }) images: string;

  /**
   * Gets images from an ACF or Metabox field.
   * @choice 'acf', 'mb'
   */

  @Prop({ reflect: true }) imagesSrc: string;

  /** Loops all slides infinitely. */

  @Prop({ reflect: true }) loop: boolean = false;

  /**
   * Max height.
   * @editor '500px'
   */

  @Prop({ reflect: true }) maxHeight: string = '100%';

  /**
   * Max width.
   * @editor '500px'
   */

  @Prop({ reflect: true }) maxWidth: string = '100%';

  @Prop({ reflect: true }) navigation: boolean;

  @Prop({ reflect: true }) navigationBackground: string = 'rgba(0,0,0,0.7)';

  @Prop({ reflect: true }) navigationBorderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) navigationColor: string = '#ffffff';

  /**
   * Navigation distance.
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
   * @CSS
   */

  @Prop({ reflect: true }) navigationSize: string = '20px';

  /**
   * Pagination type.
   * @choice 'bullets', 'tabs', 'none'
   */

  @Prop({ reflect: true }) pagination: string = 'bullets';

  @Prop({ reflect: true }) paginationBulletsBackground: string =
    'var(--spx-color-gray-300)';

  @Prop({ reflect: true }) paginationBulletsBackgroundActive: string =
    'var(--spx-color-gray-900)';

  /** Make bullets clickable. */

  @Prop({ reflect: true }) paginationBulletsClickable: boolean;

  /** Will only keep a selected amount of bullets visible. */

  @Prop({ reflect: true }) paginationBulletsDynamic: boolean;

  /** Amount of dynamic bullets. */

  @Prop({ reflect: true }) paginationBulletsDynamicAmount: number = 5;

  /**
   * Size of the bullets.
   * @CSS
   */

  @Prop({ reflect: true }) paginationBulletsSize: string = '8px';

  /**
   * Space between the bullets.
   * @CSS
   */

  @Prop({ reflect: true }) paginationBulletsSpaceBetween: string = '4px';

  @Prop({ reflect: true }) paginationTabsGapMin: number = 1;

  @Prop({ reflect: true }) paginationTabsGapMax: number = 1.8;

  @Prop({ reflect: true }) paginationTabsMarginBottomMin: number = 1.4;

  @Prop({ reflect: true }) paginationTabsMarginBottomMax: number = 2.6;

  @Prop({ reflect: true }) paginationTabsMaxWidth: string = '320px';

  @Prop({ reflect: true }) paginationTabsInnerGapMin: number = 0.8;

  @Prop({ reflect: true }) paginationTabsInnerGapMax: number = 1;

  @Prop({ reflect: true }) paginationTabsPaddingMin: number = 1;

  @Prop({ reflect: true }) paginationTabsPaddingMax: number = 1.4;

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

  /** Watch images prop and parse to array. */

  @Watch('images')
  imagesChanged(newValue: string) {
    if (newValue) this.imagesArray = JSON.parse(newValue);
  }

  componentWillLoad() {
    /** If image prop is set. */

    if (this.images) {
      this.imagesChanged(this.images);
    }
  }

  componentWillUpdate() {
    this.reload();
  }

  componentDidLoad() {
    /** Add swiper class and duplicate slides for gallery. */

    this.el.querySelectorAll('.swiper-wrapper > *').forEach((item, index) => {
      item.classList.add('swiper-slide');
      item.setAttribute('data-spx-slider-index', String(index));
    });

    /** Create breakpoint values. */

    const createBPs = () => {
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
            pairsArray.push(
              item.replace(/ /g, '').replace(/"/g, '').split(':')
            );
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

    /** Use modules so autoplay works in build mode. */

    Swiper.use([Autoplay, Navigation, Pagination, A11y, Thumbs]);

    /** Create swiper. */

    this.mySwiper = new Swiper(this.container, {
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
      breakpoints: createBPs(),
      centeredSlides: this.centeredSlides,
      direction: this.direction === 'horizontal' ? 'horizontal' : 'vertical',
      effect: this.effect as 'slide' | 'fade',
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

    /** Create tabs and set appropriate event listeners. */

    if (this.pagination === 'tabs') {
      this.createTabs();

      this.mySwiper.on('slideChangeTransitionStart', () => {
        this.reloadTabsActive(
          this.el
            .querySelector('.swiper-slide-active')
            .getAttribute('data-spx-slider-index')
        );
      });
    }

    this.spxSliderDidLoad.emit({ target: 'document' });
  }

  /** Creates tab pagination from data-attributes. */

  private createTabs() {
    this.paginationTabs.innerHTML = '';

    const slides = this.el.querySelectorAll(
      '.swiper-wrapper > *.swiper-slide:not(.swiper-slide-duplicate)'
    );

    /** Create slides. */

    slides.forEach((item, index) => {
      const indexInner = item.getAttribute('data-spx-slider-index');

      /** Animation. */

      const kf = keyframes({
        from: {
          width: '0',
        },
        to: {
          width: '100%',
        },
      });

      /** Outer wrap. */

      const slide = document.createElement('div');
      slide.setAttribute('tabindex', '0');
      slide.classList.add(
        css({
          padding:
            setClamp(
              tag,
              'pagination-tabs-padding',
              this.paginationTabsPaddingMin,
              this.paginationTabsPaddingMax
            ) +
            ' ' +
            setClamp(
              tag,
              'pagination-tabs-padding',
              this.paginationTabsPaddingMin,
              this.paginationTabsPaddingMax
            ) +
            ' ' +
            setClamp(
              tag,
              'pagination-tabs-padding',
              this.paginationTabsPaddingMin * 2,
              this.paginationTabsPaddingMax * 2
            ) +
            ' ' +
            setClamp(
              tag,
              'pagination-tabs-padding',
              this.paginationTabsPaddingMin,
              this.paginationTabsPaddingMax
            ),
          background: 'var(--spx-color-gray-50)',
          border: '1px solid var(--spx-color-gray-200)',
          borderRadius: s.borderRadius,
          cursor: 'pointer',
          transitionProperty: 'background, border',
          transitionDuration: setVar(
            tag,
            'pagination-transition-duration',
            this.paginationTransitionDuration
          ),
          transitionTimingFunction: setVar(
            tag,
            'pagination-transition-timing-function',
            this.paginationTransitionDuration
          ),
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',

          'span:nth-child(2)': {
            marginTop: setClamp(
              tag,
              'pagination-tabs-inner-gap',
              this.paginationTabsInnerGapMin,
              this.paginationTabsInnerGapMax
            ),
          },

          '&[data-spx-slider-tab-active] div': {
            content: '" "',
            display: this.autoplay ? 'block' : 'none',
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '3px',
            background: 'var(--spx-color-primary-600)',
            animation: kf,
            animationIterationCount: 1,
            animationDuration: this.autoplayDelay + 'ms',
            animationFillMode: 'forwards',
            animationTimingFunction: s.transitionTimingFunction,
          },

          [this.mq(this.bpTabs)]: {
            display: 'none',
          },

          '&:hover:not([data-spx-slider-tab-active])': {
            background: 'var(--spx-color-primary-50)',
            borderColor: 'var(--spx-color-primary-100)',
          },

          '&[data-spx-slider-tab-active]': {
            background: 'var(--spx-color-primary-50)',
            border: '1px solid var(--spx-color-primary-200)',

            [this.mq(this.bpTabs)]: {
              display: 'grid',
            },
          },
        })
      );

      slide.setAttribute('role', 'button');

      /** Set according slide index. */

      slide.setAttribute('data-spx-slider-tab-index', indexInner);

      const tabClick = () => {
        this.mySwiper.slideToLoop(parseInt(indexInner), this.speed);
        this.reloadTabsActive(indexInner);
      };

      /** Click listener. */

      slide.addEventListener('click', () => {
        tabClick();
      });

      /** Enter listener. */

      slide.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          tabClick();
        }
      });

      /** Set active to first slide. */

      if (index === 0) {
        slide.setAttribute('data-spx-slider-tab-active', '');
      }

      /** Title. */

      const title = document.createElement('span');
      title.classList.add(
        css({
          fontWeight: 500,
          color: 'var(--spx-color-primary-600)',
          fontSize: setClamp(tag, 'pagination-title-font-size', 1, 1.2),
        })
      );
      title.innerText = item.getAttribute('data-spx-slider-title');

      /** Description. */

      const description = document.createElement('span');
      description.classList.add(
        css({
          fontSize: setClamp(tag, 'pagination-description-font-size', 0.8, 0.9),
        })
      );
      description.innerText = item.getAttribute('data-spx-slider-description');

      /** Loader. */

      const loader = document.createElement('div');

      /** Append it all. */

      slide.appendChild(title);
      slide.appendChild(description);
      slide.appendChild(loader);

      this.paginationTabs.appendChild(slide);
    });
  }

  /** Reload tabs when necessary. */

  private reloadTabsActive(index) {
    this.paginationTabs.querySelectorAll(':scope > div').forEach((item) => {
      item.removeAttribute('data-spx-slider-tab-active');
    });
    this.el
      .querySelector('[data-spx-slider-tab-index="' + index + '"]')
      .setAttribute('data-spx-slider-tab-active', '');
  }

  private mq(value, type = 'max') {
    return '@media (' + type + '-width: ' + value + 'px)';
  }

  @Method()
  async reload() {
    this.mySwiper.destroy();

    const bullets = this.el.querySelector('.swiper-pagination-bullets-dynamic');

    if (bullets) {
      bullets.classList.remove('swiper-pagination-bullets-dynamic');
    }

    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'block',
      width: '100%',
      maxHeight: setVar(tag, 'max-height', this.maxHeight),
      maxWidth: setVar(tag, 'max-width', this.maxWidth),

      '.swiper-container:not(.swiper-gallery)': {
        maxHeight: setVar(tag, 'max-height', this.maxHeight),
        maxWidth: setVar(tag, 'max-width', this.maxWidth),
      },

      '.swiper-pagination-bullet': {
        position: 'static',
        opacity: '1',
        width: setVar(
          tag,
          'pagination-bullets-size',
          this.paginationBulletsSize
        ),
        height: setVar(
          tag,
          'pagination-bullets-size',
          this.paginationBulletsSize
        ),
        background: setVar(
          tag,
          'pagination-bullets-background',
          this.paginationBulletsBackground
        ),
        margin: '0 !important',

        '&.swiper-pagination-bullet-active': {
          background: setVar(
            tag,
            'pagination-bullets-background-active',
            this.paginationBulletsBackgroundActive
          ),
        },
      },

      '.swiper-slide:not(.swiper-slide-active)': {
        filter:
          this.prevNextFilter &&
          setVar(tag, 'prev-next-filter', this.prevNextFilter),
      },

      img: {
        width: '100%',
        height: 'auto',
        objectFit: setVar(tag, 'image-object-fit', this.imageObjectFit) as
          | 'fill'
          | 'contain'
          | 'cover'
          | 'scale-down',
      },
    });

    /** Pagination styles. */

    const stylePagination = css({
      display: 'flex',
      alignItems: 'center',
      marginBottom: setClamp(
        tag,
        'pagination-tabs-margin-bottom',
        this.paginationTabsMarginBottomMin,
        this.paginationTabsMarginBottomMax
      ),
    });

    /** Tab styles. */

    const stylePaginationTabs = css({
      margin: '0 auto',
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: setVar(
        tag,
        'pagination-tabs-max-width',
        this.paginationTabsMaxWidth
      ),
      gridGap: setClamp(
        tag,
        'pagination-tabs-gap',
        this.paginationTabsGapMin,
        this.paginationTabsGapMax
      ),
    });

    /** Bullet styles. */

    const stylePaginationBullets = css({
      display: 'grid',
      gridAutoFlow: this.direction === 'horizontal' ? 'column' : 'row',
      gridAutoRows: this.direction === 'vertical' && 'max-content',
      gridAutoColumns: this.direction === 'horizontal' && 'max-content',
      height:
        this.direction === 'horizontal'
          ? setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) +
            ' !important'
          : 'auto' + ' !important',
      width:
        this.direction === 'vertical'
          ? setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) +
            ' !important'
          : '100%' + ' !important',
      maxWidth: 'max-content !important',
      left: this.direction === 'horizontal' && '50% !important',
      top: this.direction === 'vertical' && '50% !important',
      transform:
        this.direction === 'horizontal'
          ? 'translateX(-50%) !important'
          : 'translateY(-50%) !important',
      gridGap: setVar(
        tag,
        'pagination-bullets-space-between',
        this.paginationBulletsSpaceBetween
      ),
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

      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

        '&[aria-disabled="true"]': {
          opacity: 0,
          pointerEvents: 'none',
        },
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
        {this.pagination === 'tabs' && (
          <div class={stylePagination}>
            <div
              ref={(el) => (this.paginationTabs = el as HTMLElement)}
              class={stylePaginationTabs}
            />
          </div>
        )}

        <div
          ref={(el) => (this.container = el as HTMLElement)}
          class="swiper-container"
        >
          <div class="swiper-wrapper">
            {getGallery(
              this.images,
              this.imagesSrc,
              this.imagesArray,
              this.imageSize
            )}
          </div>

          {this.pagination === 'bullets' && (
            <div
              class={stylePaginationBullets + ' ' + 'swiper-pagination'}
              ref={(el) => (this.paginationBullets = el as HTMLElement)}
            />
          )}

          <div class={styleNavigation}>
            <div
              ref={(el) => (this.prev = el as HTMLElement)}
              class={styleNavigationPrev}
            >
              <spx-icon
                type={this.navigationIconType}
                icon={this.navigationIconPrev}
                color={setVar(tag, 'navigation-color', this.navigationColor)}
                size={setVar(tag, 'navigation-size', this.navigationSize)}
              />
            </div>
            <div
              ref={(el) => (this.next = el as HTMLElement)}
              class={styleNavigationNext}
            >
              <spx-icon
                type={this.navigationIconType}
                icon={this.navigationIconNext}
                color={setVar(tag, 'navigation-color', this.navigationColor)}
                size={setVar(tag, 'navigation-size', this.navigationSize)}
              />
            </div>
          </div>
        </div>
        <slot name="gallery" />
      </Host>
    );
  }
}
