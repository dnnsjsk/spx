// eslint-disable-next-line no-unused-vars
import { Component, h, Host, Element, Prop, State, Watch, Listen, Event, EventEmitter, Method } from '@stencil/core'
import { css } from 'emotion'
import * as c from '../../constants/style'
import { createPopper } from '@popperjs/core'
import { setVar } from '../../utils/setVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-navigation'

/**
 * Render a complete WordPress menu with nested submenus and automatic positioning.
 */

@Component({
  tag: 'spx-navigation'
})

export class SpxNavigation {
    @Element() el: HTMLSpxNavigationElement

    @State() menuArray: Array<string>
    @State() mobileBP: boolean

    @Prop({ reflect: true }) childBorder: string = '1px solid var(--spx-color-gray-200)'

    /**
     * Child menu border-radius.
     * @CSS
     */

    @Prop({ reflect: true }) childBorderRadius: string = c.borderRadius

    /**
     * Child menu box-shadow.
     * @CSS
     */

    @Prop({ reflect: true }) childBoxShadow: string = '0 3px 10px 0 rgba(0,0,0,0.05)'

    /**
     * Gap between nested child menus.
     * @CSS
     */

    @Prop({ reflect: true }) childChildGap: string = '0.8em'

    /**
     * Gap between top level menu items and child menus.
     * @CSS
     */

    @Prop({ reflect: true }) childGap: string = '0.5em'

    /** Indicator icon. Accepts any Font Awesome icon class. */

    @Prop({ reflect: true }) childIcon: string

    /**
     * Gap between child menu indicator and text.
     * @CSS
     */

    @Prop({ reflect: true }) childIndicatorGap: string = '0.2em'

    @Prop({ reflect: true }) childItemBackground: string = '#ffffff'

    @Prop({ reflect: true }) childItemBackgroundHover: string = 'var(--spx-color-gray-100)'

    @Prop({ reflect: true }) childItemColor: string = 'var(--spx-color-gray-700)'

    @Prop({ reflect: true }) childItemColorHover: string = 'var(--spx-color-gray-900)'

    @Prop({ reflect: true }) childItemPadding: string = '0.6em 0.8em'

    /**
     * Child menu placement.
     * @CSS
     * @choice 'start', 'end'
     */

    @Prop({ reflect: true }) childPlacement: string = 'start'

    @Prop({ reflect: true }) fontSize: string = c.fontSize

    @Prop({ reflect: true }) itemTransitionDuration: string = c.transitionDuration

    @Prop({ reflect: true }) itemTransitionTimingFunction: string = c.transitionTimingFunction

    /** Underlines all links. */

    @Prop({ reflect: true }) itemUnderline: boolean

    /** Underlines all links on hover. */

    @Prop({ reflect: true }) itemUnderlineHover: boolean

    /**
     * Renders a WordPress menu.
     * @helper &lt;?php spx\get::navigation("myMenu") ?>
     */

    @Prop({ reflect: true }) menu: string

    /** Mobile breakpoint. */

    @Prop({ reflect: true }) mobile: number = c.mobileBpWidth

    /** Mobile button icon. Accepts any Font Awesome icon class. */

    @Prop({ reflect: true }) mobileIcon: string

    @Prop({ reflect: true }) mobileItemBackground: string = '#ffffff'

    @Prop({ reflect: true }) mobileItemBackgroundHover: string = 'var(--spx-color-gray-100)'

    @Prop({ reflect: true }) mobileItemColor: string = 'var(--spx-color-gray-800)'

    @Prop({ reflect: true }) mobileItemColorHover: string = 'var(--spx-color-gray-900)'

    @Prop({ reflect: true }) mobileItemNestedMarginLeft: string = '0.8em'

    @Prop({ reflect: true }) mobileItemPadding: string = '0.6em'

    /**
     * Mobile placement.
     * @CSS
     * @choice 'start', 'end'
     */

    @Prop({ reflect: true }) mobilePlacement: string = 'start'

    @Prop({ reflect: true }) parentItemBackground: string = '#ffffff'

    @Prop({ reflect: true }) parentItemBackgroundHover: string = 'var(--spx-color-gray-100)'

    @Prop({ reflect: true }) parentItemColor: string = 'var(--spx-color-gray-800)'

    @Prop({ reflect: true }) parentItemColorHover: string = 'var(--spx-color-gray-900)'

    /**
     * Gap between parent menu items.
     * @CSS
     */

    @Prop({ reflect: true }) parentItemGap: string = '0.4em'

    @Prop({ reflect: true }) parentItemPadding: string = '0.6em'

    /** Renders menu vertically. */

    @Prop({ reflect: true }) vertical: boolean

    /** Watch menu prop and parse to iteratable array. */

    @Watch('menu')
    imagesChanged (newValue: string) {
      if (newValue) this.menuArray = JSON.parse(newValue)
    }

    /** Fires when component has loaded. */

    @Event({ eventName: 'spxNavigationDidLoad' }) spxNavigationDidLoad: EventEmitter

    /** Init popper on mouse/touch enter. */

    @Listen('ontouchstart', { target: this.el })
    @Listen('mouseenter', { target: this.el })
    @Listen('focusin', { target: this.el })
    onClick () {
      if (this.mobileBP) {
        this.initPopperMobile()
      } else {
        this.initPopperDesktop()
        this.initPopperDesktop()
      }
    }

    /** Listen to window resize. */

    @Listen('resize', { target: 'window' })
    onResize () {
      this.mobileBP = window.innerWidth < this.mobile
    }

    connectedCallback () {
      /** Check if is mobile view. */

      this.onResize()
    }

    componentWillLoad () {
      /** If menu prop is set. */

      this.imagesChanged(this.menu)
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Sort menu items. */

      this.sortMenuItem()

      /** Emit event after render. */

      this.spxNavigationDidLoad.emit({ target: 'document' })
    }

    componentDidUpdate () {
      this.sortMenuItem()
    }

    /** Render menu function. */

    private renderMenu (obj, type, mobile) {
      function checkMobile () {
        if (mobile) {
          return 'spx-navigation--' + type + '' + ' ' + 'spx-navigation--mobile'
        } else {
          return 'spx-navigation--' + type + ''
        }
      }

      return <div class={checkMobile()}>
        <ul>
          {Object.values(obj).map((object) => {
            const objectChild = object['spxChildren']
            const extraClasses = object['classes'].map((objectClasses) => objectClasses).toString().replace(/,/g, '  ')

            return <li
              class={object['spxChildren']

              /** Check if menu has any children. */

                ? 'spx-navigation__item--' + type + '' + ' ' + 'spx-navigation__item--has-child' + extraClasses
                : 'spx-navigation__item--' + type + '' + ' ' + extraClasses}

              data-order={object['menu_order']}>

              <a href={object['url'] === '#' ? '#0' : object['url']}>
                {object['title']}

                {(objectChild && (!this.mobileBP && !this.vertical) && !this.childIcon)

                /** Render caret if has any children. */

                  ? <spx-icon type="caret"/>

                  : (objectChild && (!this.mobileBP && !this.vertical) && this.childIcon)

                    ? <i class={this.childIcon}/>

                    : null}
              </a>

              {objectChild && !mobile &&
                        this.renderMenu(object['spxChildren'], 'child', false)}

              {objectChild && mobile &&
                        this.renderMenu(object['spxChildren'], 'child', true)}
            </li>
          })}
        </ul>
      </div>
    }

    private sortMenuItem () {
      /** Sort menu items depending on menu order. */

      const dataItems = this.el.querySelectorAll('li')
      const dataArray = []
      for (let i = 0; i < dataItems.length; ++i) {
        dataArray.push(dataItems[i])
      }
      dataArray.sort(function (a, b) {
        return +a.getAttribute('data-order') - +b.getAttribute('data-order')
      })

      dataArray.forEach(e => {
        e.closest('ul').appendChild(e)
      })
    }

    private initPopperDesktop () {
      if (!this.vertical) {
        /** Init popper for parent menu. */

        const parentMenu = this.el.querySelectorAll('nav > .spx-navigation--parent .spx-navigation__item--parent.spx-navigation__item--has-child')

        if (parentMenu) {
          parentMenu.forEach(item => {
            createPopper(item, item.querySelector('div'), {
              // @ts-ignore
              placement: 'bottom-' + this.childPlacement + ''
            })
          })
        }

        /** Init popper for child menu. */

        const childMenus = this.el.querySelectorAll('nav > .spx-navigation--parent .spx-navigation--child .spx-navigation__item--child.spx-navigation__item--has-child')

        if (childMenus) {
          childMenus.forEach(item => {
            createPopper(item, item.querySelector('div'), {
              placement: 'right-start',
              strategy: 'fixed',
              modifiers: [
                {
                  name: 'flip',
                  options: {
                    fallbackPlacements: ['left-start']
                  }
                },

                /** Calculate offset depending on parent padding/margin. */

                {
                  name: 'offset',
                  options: {
                    offset: ({ placement }) => {
                      if (placement === 'right-start') {
                        return [-Math.abs(item.getBoundingClientRect().top - item.parentElement.getBoundingClientRect().top), Math.abs(item.getBoundingClientRect().right - item.parentElement.getBoundingClientRect().right)]
                      } else {
                        return [-Math.abs(item.getBoundingClientRect().top - item.parentElement.getBoundingClientRect().top), Math.abs(item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left)]
                      }
                    }
                  }
                },

                /** Make fixed position work properly. */

                {
                  name: 'preventOverflow',
                  options: {
                    rootBoundary: item,
                    padding: -1
                  }
                }
              ]
            })
          })
        }
      }
    }

    private initPopperMobile () {
      /** Init popper for mobile menu. */

      const mobileMenu = this.el.querySelector('.spx-navigation__mobile-button')

      if (mobileMenu) {
        createPopper(mobileMenu, mobileMenu.querySelector('.spx-navigation--mobile'), {
          // @ts-ignore
          placement: 'bottom-' + this.mobilePlacement + ''
        })
      }
    }

    @Method()
    async reload () {
      this.componentDidLoad()
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: 'block',
        fontFamily: c.fontFamily,
        fontSize: setVar(tag, 'font-size', this.fontSize),
        zIndex: 999999,

        'nav > .spx-navigation--parent': {
          display: this.mobileBP ? 'none' : 'grid'
        },

        ul: {
          margin: '0',
          padding: '0',
          listStyleType: 'none',

          ul: {
            display: this.vertical && 'grid',
            gridGap: this.vertical && setVar(tag, 'parent-item-gap', this.parentItemGap),
            marginLeft: (this.mobileBP || this.vertical) && setVar(tag, 'mobile-item-nested-margin-left', this.mobileItemNestedMarginLeft)
          }
        },

        'ul ul, .spx-navigation--mobile ul': {
          border: !this.mobileBP && setVar(tag, 'child-border', this.childBorder),
          borderRadius: setVar(tag, 'child-border-radius', this.childBorderRadius),
          overflow: 'hidden',
          boxShadow: !this.mobileBP && setVar(tag, 'child-box-shadow', this.childBoxShadow)
        },

        '.spx-navigation--parent:not(.spx-navigation--mobile) > ul': {
          display: 'grid',
          gridAutoFlow: (this.mobileBP || this.vertical) ? 'row' : 'column',
          gridAutoColumns: 'max-content',
          gridAutoRows: (this.mobileBP || this.vertical) && 'max-content',
          gridGap: setVar(tag, 'parent-item-gap', this.parentItemGap)
        },

        '.spx-navigation__item--parent': {
          a: {
            padding: setVar(tag, 'parent-item-padding', this.parentItemPadding),
            color: setVar(tag, 'parent-item-color', this.parentItemColor),
            background: setVar(tag, 'parent-item-background', this.parentItemBackground),

            '&:hover': {
              color: setVar(tag, 'parent-item-color-hover', this.parentItemColorHover),
              background: setVar(tag, 'parent-item-color-background-hover', this.parentItemBackgroundHover)
            }
          },

          '&.spx-navigation__item--has-child > .spx-navigation--child': {
            flexDirection: 'column',
            marginTop: this.vertical && setVar(tag, 'parent-item-gap', this.parentItemGap),

            a: {
              width: '100%',
              whiteSpace: 'nowrap',
              color: !this.mobileBP && setVar(tag, 'child-item-color', this.childItemColor),
              background: !this.mobileBP && setVar(tag, 'child-item-background', this.childItemBackground),

              '&:hover': {
                color: !this.mobileBP && setVar(tag, 'child-item-color-hover', this.childItemColorHover),
                background: !this.mobileBP && setVar(tag, 'child-item-color-background-hover', this.childItemBackgroundHover)
              }
            },

            '::before': {
              content: '" "',
              position: 'relative',
              display: (this.mobileBP || this.vertical) ? 'none' : 'block',
              minHeight: setVar(tag, 'child-gap', this.childGap),
              width: '100%'
            }
          }
        },

        '.spx-navigation--child, .spx-navigation--mobile': {
          pointerEvents: !this.vertical ? 'none' : 'auto',
          opacity: !this.vertical ? '0' : '1',
          position: !this.vertical ? 'absolute' : 'relative',
          display: 'flex',
          flexDirection: this.mobileBP ? 'column' : 'row',
          transitionProperty: 'opacity',
          transitionDuration: setVar(tag, 'item-transition-duration', this.itemTransitionDuration),
          transitionTimingFunction: setVar(tag, 'item-transition-timing-function', this.itemTransitionTimingFunction)
        },

        '.spx-navigation--mobile .spx-navigation--child': {
          position: 'relative'
        },

        ['li:hover > .spx-navigation--child, ' +
            'li:focus-within > .spx-navigation--child, ' +
            '.spx-navigation__mobile-button:hover .spx-navigation--mobile, ' +
            '.spx-navigation__mobile-button:focus-within .spx-navigation--mobile, ' +
            '.spx-navigation__mobile-button:hover .spx-navigation--child, ' +
            '.spx-navigation__mobile-button:focus-within .spx-navigation--child']: {
          opacity: '1',
          pointerEvents: 'auto',
          transform: 'translateY(0px)'
        },

        '.spx-navigation__item--child': {
          a: {
            padding: setVar(tag, 'child-item-padding', this.childItemPadding)
          },

          '[data-popper-placement="left-start"]': {
            flexDirection: 'row-reverse'
          },

          '[data-popper-placement]::before': {
            content: '" "',
            position: 'relative',
            display: (this.mobileBP || this.vertical) ? 'none' : 'block',
            minWidth: setVar(tag, 'child-child-gap', this.childChildGap),
            height: '100%'
          }
        },

        li: {
          position: 'relative',
          display: (!this.mobileBP && !this.vertical) && 'flex',
          flexDirection: 'row'
        },

        a: {
          display: 'inline-grid',
          gridAutoFlow: 'column',
          gridColumnGap: setVar(tag, 'child-indicator-gap', this.childIndicatorGap),
          textDecoration: this.itemUnderline ? 'underline' : 'none',
          width: '100%',
          fontSize: 'inherit',
          transitionProperty: 'color, background',
          transitionDuration: setVar(tag, 'item-transition-duration', this.itemTransitionDuration),
          transitionTimingFunction: setVar(tag, 'item-transition-timing-function', this.itemTransitionTimingFunction),

          '&:hover': {
            textDecoration: this.itemUnderlineHover && 'underline'
          }
        },

        '.spx-navigation__mobile-button': {
          cursor: 'pointer',
          maxWidth: 'fit-content',
          padding: setVar(tag, 'parent-item-padding', this.parentItemPadding),
          color: setVar(tag, 'parent-item-color', this.parentItemColor),
          background: setVar(tag, 'parent-item-background', this.parentItemBackground),
          gridGap: '0.4rem',
          gridAutoFlow: 'column',
          alignItems: 'center',
          display: this.mobileBP ? 'grid' : 'none',

          a: {
            padding: setVar(tag, 'mobile-item-padding', this.mobileItemPadding),
            color: setVar(tag, 'mobile-item-color', this.mobileItemColor),
            background: setVar(tag, 'mobile-item-background', this.mobileItemBackground),

            '&:hover': {
              color: setVar(tag, 'mobile-item-color-hover', this.mobileItemColorHover),
              background: setVar(tag, 'mobile-item-background-hover', this.mobileItemBackgroundHover)
            }
          },

          '.spx-navigation--parent': {
            '::before': {
              content: '" "',
              position: 'relative',
              display: 'block',
              minHeight: setVar(tag, 'child-gap', this.childGap),
              width: '100%'
            },

            '> ul': {
              background: setVar(tag, 'child-item-background', this.childItemBackground),
              border: setVar(tag, 'child-border', this.childBorder),
              boxShadow: setVar(tag, 'child-box-shadow', this.childBoxShadow)
            }
          }
        }
      })

      return <Host
        class={styleHost}>

        <nav>

          {this.menu &&

          /** Render desktop menu. */

                [this.renderMenu(this.menuArray, 'parent', false),

                  /** Render mobile menu. */

                  <div tabindex="0" role="button" class='spx-navigation__mobile-button'>
                    {this.mobileIcon && <i class={this.mobileIcon}/>}
                    <span>Menu</span>
                    {this.renderMenu(this.menuArray, 'parent', true)}
                  </div>]}

        </nav>

      </Host>
    }
}
