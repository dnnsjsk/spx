// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core'
import Swiper, { Autoplay, Navigation, Pagination, A11y, Thumbs } from 'swiper'
import { css, keyframes } from 'emotion'
import { setVar } from '../../utils/setVar'
import * as c from '../../constants/style'
import { setSize } from '../../utils/setSize'
import { startsWith, fromPairs, mapKeys, camelCase } from 'lodash-es'
import { mq } from '../../utils/mq'

const tag = 'spx-slider'

/**
 * A slider is a revolving carousel that displays photos or other types of content.
 */

@Component({
  tag: 'spx-slider',
  styleUrl: 'spx-slider.scss'
})

export class SpxScrollspy {
    @Element() el: HTMLSpxSliderElement
    private container: HTMLElement
    private next: HTMLElement
    private prev: HTMLElement
    private paginationTabs: HTMLElement
    private paginationBullets: HTMLElement

    @State() mySwiper
    @State() mySwiperGallery
    @State() swiperBreakpoints

    /** Automatically adjusts height of slider. */

    @Prop({ reflect: true }) autoheight: boolean = false

    /** Starts navigating to the next slide when page is loaded. */

    @Prop({ reflect: true }) autoplay: boolean = false

    /** Autoplay delay. */

    @Prop({ reflect: true }) autoplayDelay: number = 6000

    /** Disable autoplay after interaction with slides. */

    @Prop({ reflect: true }) autoplayDisableOnInteraction: boolean = false

    /** Starts navigating to the next slide when page is loaded. */

    @Prop({ reflect: true }) bpTabs: string

    /** Centers slides in viewport. */

    @Prop({ reflect: true }) centeredSlides: boolean = false

    /**
     * Slider direction.
     * @choice 'horizontal', 'vertical'
     */

    @Prop({ reflect: true }) direction: string = 'horizontal'

    /**
     * Image object-fit.
     * @choice 'fill', 'contain', 'cover', 'scale-down', 'none'
     */

    @Prop({ reflect: true }) imageObjectFit: string = 'cover'

    /** Creates a gallery from images. */

    // @Prop({ reflect: true }) gallery: boolean = false

    // @Prop({ reflect: true }) galleryMaxHeight: string = '200px'

    /** Amount of gallery slides shown at once. */

    // @Prop({ reflect: true }) gallerySlidesPerView: number = 3.5

    /** Space between gallery slides. */

    // @Prop({ reflect: true }) gallerySpaceBetween: number = 8

    /** Space between gallery slides. */

    // @Prop({ reflect: true }) gallerySpaceTop: string = 'var(--spx-space-xs)'

    /** Loops all slides infinitely. */

    @Prop({ reflect: true }) loop: boolean = false

    /**
     * Max height.
     * @editor '500px'
     */

    @Prop({ reflect: true }) maxHeight: string = '100%'

    /**
     * Max width.
     * @editor '500px'
     */

    @Prop({ reflect: true }) maxWidth: string = '100%'

    @Prop({ reflect: true }) navigation: boolean

    @Prop({ reflect: true }) navigationBackground: string = 'rgba(0,0,0,0.7)'

    @Prop({ reflect: true }) navigationBorderRadius: string = c.borderRadius

    @Prop({ reflect: true }) navigationColor: string = '#ffffff'

    /**
     * Navigation distance.
     * @CSS
     */

    @Prop({ reflect: true }) navigationDistanceX: string = '12px'

    @Prop({ reflect: true }) navigationPadding: string = '16px 20px'

    /**
     * Navigation size.
     * @CSS
     */

    @Prop({ reflect: true }) navigationSize: string = '20px'

    /**
     * Pagination type.
     * @choice 'bullets', 'tabs', 'none'
     */

    @Prop({ reflect: true }) pagination: string = 'bullets'

    @Prop({ reflect: true }) paginationBulletsBackground: string = 'var(--spx-color-gray-300)'

    @Prop({ reflect: true }) paginationBulletsBackgroundActive: string = 'var(--spx-color-primary-A700)'

    /** Make bullets clickable. */

    @Prop({ reflect: true }) paginationBulletsClickable: boolean

    /** Will only keep a selected amount of bullets visible. */

    @Prop({ reflect: true }) paginationBulletsDynamic: boolean

    /** Amount of dynamic bullets. */

    @Prop({ reflect: true }) paginationBulletsDynamicAmount: number = 5

    /**
     * Size of the bullets.
     * @CSS
     */

    @Prop({ reflect: true }) paginationBulletsSize: string = '8px'

    /**
     * Space between the bullets.
     * @CSS
     */

    @Prop({ reflect: true }) paginationBulletsSpaceBetween: string = '4px'

    @Prop({ reflect: true }) paginationTabsMaxWidth: string = '320px'

    @Prop({ reflect: true }) paginationTransitionDuration: string = c.transitionDuration

    @Prop({ reflect: true }) paginationTransitionTimingFunction: string = c.transitionTimingFunction

    /** Filter property for the previous and next elements. */

    @Prop({ reflect: true }) prevNextFilter: string

    /** Screen reader message for first slide. */

    @Prop({ reflect: true }) slideMessageFirst: string = 'This is the first slide'

    /** Screen reader message for last slide. */

    @Prop({ reflect: true }) slideMessageLast: string = 'This is the last slide'

    /** Screen reader message for next slide. */

    @Prop({ reflect: true }) slideMessageNext: string = 'Next slide'

    /** Screen reader message for previous slide. */

    @Prop({ reflect: true }) slideMessagePrevious: string = 'Previous slide'

    /** Amount of slides shown at once. */

    @Prop({ reflect: true }) slidesPerView: number = 1

    /** Space between slides. */

    @Prop({ reflect: true }) spaceBetween: number = 0

    /** Sliding speed. */

    @Prop({ reflect: true }) speed: number = 1000

    componentWillUpdate () {
      this.reload()
    }

    componentDidLoad () {
      /** Add swiper class and duplicate slides for gallery. */

      this.el.querySelectorAll('.swiper-wrapper > *').forEach((item, index) => {
        item.classList.add('swiper-slide')
        item.setAttribute('data-spx-slider-index', String(index))
      })

      /*

      if (this.gallery === true) {
        const thumbs = this.el.querySelectorAll('.swiper-gallery')
        if (thumbs) {
          thumbs.forEach(item => {
            item.remove()
          })
        }
        const container = document.createElement('div')
        container.classList.add('swiper-container')
        container.classList.add('swiper-gallery')
        const wrapper = document.createElement('div')
        wrapper.classList.add('swiper-wrapper')
        container.setAttribute('slot', 'gallery')

        container.appendChild(wrapper)
        this.el.appendChild(container)

        this.el.querySelectorAll('.swiper-slide').forEach(item => {
          const clone = item.cloneNode(true)
          wrapper.appendChild(clone)
        })
      }

         */

      /** Create breakpoint values. */

      const createBPs = () => {
        for (var att, i = 0, atts = this.el.attributes, n = atts.length; i < n; i++) {
          att = atts[i]
          if (startsWith(att.nodeName, 'bp-')) {
            const attribute = this.el.getAttribute(att.nodeName)
            const array = attribute.split(';')
            const pairsArray = []
            array.forEach(item => {
              pairsArray.push(item.replace(/ /g, '').replace(/"/g, '').split(':'))
            })
            const finalArray = fromPairs(pairsArray)
            const camelCaseArray = mapKeys(finalArray, function (_value, key) {
              return camelCase(key)
            })
            const breakpoint = att.nodeName.split('-')[1]
            return { [breakpoint]: camelCaseArray }
          }
        }
      }

      /** Use modules so autoplay works in build mode. */

      Swiper.use([Autoplay, Navigation, Pagination, A11y, Thumbs])

      /*

      if (this.gallery === true) {
        this.mySwiperGallery = new Swiper(this.el.querySelector('.swiper-gallery') as HTMLElement, {
          slidesPerView: this.gallerySlidesPerView,
          spaceBetween: this.gallerySpaceBetween,
          freeMode: true
        })
      }

      */

      /** Create swiper. */

      this.mySwiper = new Swiper(this.container, {
        a11y: {
          firstSlideMessage: this.slideMessageFirst,
          lastSlideMessage: this.slideMessageLast,
          nextSlideMessage: this.slideMessageNext,
          prevSlideMessage: this.slideMessagePrevious
        },
        autoHeight: this.autoheight,
        autoplay: this.autoplay && {
          delay: this.autoplayDelay,
          disableOnInteraction: this.autoplayDisableOnInteraction
        },
        breakpoints: createBPs(),
        centeredSlides: this.centeredSlides,
        direction: this.direction === 'horizontal' ? 'horizontal' : 'vertical',
        loop: this.loop,
        navigation: {
          prevEl: this.prev,
          nextEl: this.next
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination: this.pagination === 'bullets' && {
          el: this.paginationBullets,
          type: 'bullets',
          clickable: this.paginationBulletsClickable,
          dynamicBullets: this.paginationBulletsDynamic,
          dynamicMainBullets: this.paginationBulletsDynamicAmount
        },
        slidesPerView: this.slidesPerView,
        spaceBetween: this.spaceBetween,
        speed: this.speed
        /*
        thumbs: this.gallery === true && {
          swiper: this.mySwiperGallery,
          autoScrollOffset: 1
        }
        */
      })

      this.mySwiper.on('observerUpdate', () => {
        this.mySwiper.update()
      })

      /** Create tabs and set appropriate event listeners. */

      if (this.pagination === 'tabs') {
        this.createTabs()

        this.mySwiper.on('slideChangeTransitionStart', () => {
          this.reloadTabsActive(this.el.querySelector('.swiper-slide-active').getAttribute('data-spx-slider-index'))
        })
      }
    }

    private createTabs () {
      this.paginationTabs.innerHTML = ''

      const slides = this.el.querySelectorAll('.swiper-wrapper > *.swiper-slide:not(.swiper-slide-duplicate)')

      /** Create slides. */

      slides.forEach((item, index) => {
        const indexInner = item.getAttribute('data-spx-slider-index')

        /** Animation. */

        const kf = keyframes({
          from: {
            width: '0'
          },
          to: {
            width: '100%'
          }
        })

        /** Outer wrap. */

        const slide = document.createElement('div')
        slide.setAttribute('tabindex', '0')
        slide.classList.add(css({
          padding: 'var(--spx-space-md) var(--spx-space-md) var(--spx-space-lg) var(--spx-space-md)',
          display: 'grid',
          gridGap: 'var(--spx-space-sm)',
          gridAutoRows: 'max-content',
          background: 'var(--spx-color-gray-050)',
          border: '1px solid var(--spx-color-gray-100)',
          borderRadius: c.borderRadius,
          cursor: 'pointer',
          transitionProperty: 'background, border',
          transitionDuration: setVar(tag, 'pagination-transition-duration', this.paginationTransitionDuration),
          transitionTimingFunction: setVar(tag, 'pagination-transition-timing-function', this.paginationTransitionDuration),
          overflow: 'hidden',
          position: 'relative',

          '&[data-spx-slider-tab-active] div': {
            content: '" "',
            display: this.autoplay ? 'block' : 'none',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '3px',
            background: 'var(--spx-color-primary-A700)',
            animation: kf,
            animationIterationCount: 1,
            animationDuration: this.autoplayDelay + 'ms',
            animationFillMode: 'forwards',
            animationTimingFunction: c.transitionTimingFunction
          },

          [mq(this.bpTabs)]: {
            display: 'none'
          },

          '&:hover:not([data-spx-slider-tab-active])': {
            background: 'var(--spx-color-primary-042)',
            borderColor: 'var(--spx-color-primary-050)'
          },

          '&[data-spx-slider-tab-active]': {
            background: 'var(--spx-color-primary-042)',
            border: '1px solid var(--spx-color-primary-100)',

            [mq(this.bpTabs)]: {
              display: 'grid'
            }
          }
        }))

        slide.setAttribute('role', 'button')

        /** Set according slide index. */

        slide.setAttribute('data-spx-slider-tab-index', indexInner)

        const tabClick = () => {
          this.mySwiper.slideToLoop(parseInt(indexInner), this.speed)
          this.reloadTabsActive(indexInner)
        }

        /** Click listener. */

        slide.addEventListener('click', () => {
          tabClick()
        })

        /** Enter listener. */

        slide.addEventListener('keydown', (e) => {
          if (e.keyCode === 13) {
            tabClick()
          }
        })

        /** Set active to first slide. */

        if (index === 0) {
          slide.setAttribute('data-spx-slider-tab-active', '')
        }

        /** Title. */

        const title = document.createElement('span')
        title.classList.add(css({
          fontWeight: 500,
          color: 'var(--spx-color-primary-600)',
          fontSize: setSize('16px', '3vw', '20px', setVar(tag, 'pagination-title-font-size-multiplier', '1'))
        }))
        title.innerText = item.getAttribute('data-spx-slider-title')

        /** Description. */

        const description = document.createElement('span')
        description.classList.add(css({
          fontSize: setSize('12px', '2.6vw', '15px', setVar(tag, 'pagination-description-font-size-multiplier', '1'))
        }))
        description.innerText = item.getAttribute('data-spx-slider-description')

        /** Loader. */

        const loader = document.createElement('div')

        /** Append it all. */

        slide.appendChild(title)
        slide.appendChild(description)
        slide.appendChild(loader)

        this.paginationTabs.appendChild(slide)
      })
    }

    /** Reload tabs when necessary. */

    private reloadTabsActive (index) {
      this.paginationTabs.querySelectorAll(':scope > div').forEach(item => {
        item.removeAttribute('data-spx-slider-tab-active')
      })
      this.el.querySelector('[data-spx-slider-tab-index="' + index + '"]').setAttribute('data-spx-slider-tab-active', '')
    }

    @Method()
    async reload () {
      /*
      if (this.el.querySelector('.swiper-gallery')) {
        this.el.querySelector('.swiper-gallery').remove()
        this.mySwiperGallery.destroy()
      }
      */
      this.mySwiper.destroy()

      const bullets = this.el.querySelector('.swiper-pagination-bullets-dynamic')

      if (bullets) {
        bullets.classList.remove('swiper-pagination-bullets-dynamic')
      }

      this.componentDidLoad()
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: 'block',
        width: '100%',
        maxHeight: setVar(tag, 'max-height', this.maxHeight),
        maxWidth: setVar(tag, 'max-width', this.maxWidth),

        '.swiper-container:not(.swiper-gallery)': {
          maxHeight: setVar(tag, 'max-height', this.maxHeight),
          maxWidth: setVar(tag, 'max-width', this.maxWidth)
        },

        /*
        '.swiper-gallery': {
          marginTop: setVar(tag, 'gallery-space-top', this.gallerySpaceTop),
          maxHeight: setVar(tag, 'gallery-max-height', this.galleryMaxHeight)
        },
        */

        '--swiper-navigation-size': setVar(tag, 'navigation-size', this.navigationSize),
        '--swiper-navigation-color': setVar(tag, 'navigation-color', this.navigationColor),

        '.swiper-button-prev': {
          left: setVar(tag, 'navigation-distance', this.navigationDistanceX)
        },

        '.swiper-button-next': {
          right: setVar(tag, 'navigation-distance', this.navigationDistanceX)
        },

        '.swiper-button-next, .swiper-button-prev': {
          background: setVar(tag, 'navigation-background', this.navigationBackground),
          height: 'calc(' + this.navigationSize + ' * 2)',
          width: 'calc(' + this.navigationSize + ' * 2)',
          borderRadius: setVar(tag, 'navigation-border-radius', this.navigationBorderRadius)
        },

        '.swiper-pagination-bullet': {
          position: 'static',
          opacity: '1',
          width: setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize),
          height: setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize),
          background: setVar(tag, 'pagination-bullets-background', this.paginationBulletsBackground),
          margin: '0 !important',

          '&.swiper-pagination-bullet-active': {
            background: setVar(tag, 'pagination-bullets-background-active', this.paginationBulletsBackgroundActive)
          }
        },

        '.swiper-slide:not(.swiper-slide-active)': {
          filter: this.prevNextFilter && setVar(tag, 'prev-next-filter', this.prevNextFilter)
        },

        img: {
          width: '100%',
          height: 'auto',
          objectFit: setVar(tag, 'image-object-fit', this.imageObjectFit) as 'fill' | 'contain' | 'cover' | 'scale-down'
        }
      })

      /** Pagination styles. */

      const stylePagination = css({
        display: 'flex',
        alignItems: 'center',
        marginBottom: 'var(--spx-space-xl)'
      })

      /** Tab styles. */

      const stylePaginationTabs = css({
        margin: '0 auto',
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: setVar(tag, 'pagination-tabs-max-width', this.paginationTabsMaxWidth),
        gridGap: 'var(--spx-space-md)'
      })

      /** Bullet styles. */

      const stylePaginationBullets = css({
        display: 'grid',
        gridAutoFlow: this.direction === 'horizontal' ? 'column' : 'row',
        gridAutoRows: this.direction === 'vertical' && 'max-content',
        gridAutoColumns: this.direction === 'horizontal' && 'max-content',
        height: this.direction === 'horizontal' ? setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) + ' !important' : 'auto' + ' !important',
        width: this.direction === 'vertical' ? setVar(tag, 'pagination-bullets-size', this.paginationBulletsSize) + ' !important' : '100%' + ' !important',
        maxWidth: 'max-content !important',
        left: this.direction === 'horizontal' && '50% !important',
        top: this.direction === 'vertical' && '50% !important',
        transform: this.direction === 'horizontal' ? 'translateX(-50%) !important' : 'translateY(-50%) !important',
        gridGap: setVar(tag, 'pagination-bullets-space-between', this.paginationBulletsSpaceBetween)
      })

      /** Bullet styles. */

      const styleNavigation = css({
        display: this.navigation ? 'block' : 'none'
      })

      return <Host class={styleHost}>

        {this.pagination === 'tabs' &&
            <div class={stylePagination}>

              <div
                ref={(el) => this.paginationTabs = el as HTMLElement}
                class={stylePaginationTabs}>

              </div>
            </div>}

        <div ref={(el) => this.container = el as HTMLElement}
          class="swiper-container">
          <div class="swiper-wrapper">
            <slot/>
          </div>

          {this.pagination === 'bullets' &&
                <div class={stylePaginationBullets + ' ' + 'swiper-pagination'} ref={(el) => this.paginationBullets = el as HTMLElement}/>}

          <div class={styleNavigation}>
            <div ref={(el) => this.prev = el as HTMLElement} class="swiper-button-prev"/>
            <div ref={(el) => this.next = el as HTMLElement} class="swiper-button-next"/>
          </div>

        </div>
        <slot name="gallery"/>
      </Host>
    }
}
