// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, Listen, State } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'
import * as c from '../../constants/style'
import state from '../../stores/container'
import { setSectionVar } from '../../utils/setSectionVar'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

const tag = 'spx-section-header'

/**
 * The introductory element of every website.
 */

@Component({
  tag: 'spx-section-header'
})

export class SpxSectionHeader {
    @Element() el: HTMLSpxSectionHeaderElement
    @State() bgScroll;

    @Prop({ reflect: true }) backdropFilter: string = 'blur(10px)'

    @Prop({ reflect: true }) background: string = 'rgba(255,255,255,0.85)'

    /** Turns on background after scroll. */

    @Prop({ reflect: true }) backgroundScroll: number

    @Prop({ reflect: true }) borderBottom: string

    /** URL the logo links to. */

    @Prop({ reflect: true }) logoLink: string

    @Prop({ reflect: true }) logoMaxHeight: string = '50px'

    /** Logo src. */

    @Prop({ reflect: true }) logoSrc: string

    /** Logo mobile src. */

    @Prop({ reflect: true }) logoSrcMobile: string

    /** Component positioning. */

    @Prop({ reflect: true }) position: 'fixed' | 'static'

    /**
     * Distance to the edge of the viewport on the y-axis.
     * @CSS
     */

    @Prop({ reflect: true }) spaceX: string = 'var(--spx-space-md)'

    @Prop({ reflect: true }) zIndex: number = 102

    @Listen('scroll', { target: 'window' })
    onScroll () {
      if (this.backgroundScroll) {
        this.bgScroll = window.scrollY > this.backgroundScroll
      }
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)
      this.onScroll()
      setSectionVar(this.el)
    }

    render () {
      const styleImg = css({
        maxHeight: setVar(tag, 'logo-max-height', this.logoMaxHeight),
        width: 'auto !important'
      })

      /** Host styles. */

      const styleHost = css({
        background: this.backgroundScroll && !this.bgScroll ? 'none' : setVar(tag, 'background', this.background),
        backdropFilter: this.backgroundScroll && !this.bgScroll ? 'none' : setVar(tag, 'backdrop-filter', this.backdropFilter),
        position: this.position,
        width: '100%',
        display: state.bpMobile ? 'flex' : 'grid',
        gridTemplateColumns: '160px 1fr 160px',
        alignItems: 'center',
        padding: '' + setVar(tag, 'padding', this.spaceX) + ' ' + state.spaceXsm + '',
        zIndex: this.zIndex,
        transitionProperty: 'background',
        transitionDuration: setVar(tag, 'transition-duration', c.transitionDuration),
        transitionTimingFunction: setVar(tag, 'transition-timing-function', c.transitionTimingFunction),

        '*': {
          fontFamily: state.fontFamilySecondary + ' !important'
        }
      })

      /** Navigation styles. */

      const styleNavigation = css({
        justifySelf: 'center',
        marginLeft: state.bpMobile && 'var(--spx-space-md)'
      })

      /** Button styles. */

      const styleButtons = css({
        justifySelf: 'end',
        marginLeft: 'auto'
      })

      /** Logo styles. */

      const styleLogo = css({
        display: 'block',
        maxWidth: 'max-content'
      })

      return <Host class={styleHost}>
        <div>
          <a href={this.logoLink}
            class={styleLogo}>
            {state.bpMobile
              ? <img class={styleImg} src={this.logoSrcMobile} alt="logo"/>
              : <img class={styleImg} src={this.logoSrc} alt="logo"/>}
          </a>
        </div>
        <div class={styleNavigation}>
          <slot name="navigation"/>
        </div>
        <div class={styleButtons}>
          <slot name="buttons"/>
        </div>
        <slot/>
      </Host>
    }
}
