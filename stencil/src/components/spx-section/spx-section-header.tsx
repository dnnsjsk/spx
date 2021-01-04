import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  Listen,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import * as s from '../../constants/style';
import state from '../../stores/container';
import { setSectionVar } from '../../utils/setSectionVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-section-header';

/**
 * The introductory element of every website.
 */

@Component({
  tag: 'spx-section-header',
})
export class SpxSectionHeader {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionHeaderElement;

  @State() bgScroll;

  @Prop({ reflect: true }) backdropFilter: string = 'blur(10px)';

  @Prop({ reflect: true }) background: string = 'rgba(255,255,255,0.85)';

  /** Turns on background after scroll. */

  @Prop({ reflect: true }) backgroundScroll: number;

  @Prop({ reflect: true }) borderBottom: string;

  /** URL the logo links to. */

  @Prop({ reflect: true }) logoLink: string;

  @Prop({ reflect: true }) logoMaxHeight: string = '50px';

  /** Logo src. */

  @Prop({ reflect: true }) logoSrc: string;

  /** Logo mobile src. */

  @Prop({ reflect: true }) logoSrcMobile: string;

  /**
   * Where the navigation should be aligned to.
   * @choice 'center', 'right'
   */

  @Prop({ reflect: true }) navigationAlign: string = 'center';

  /** Component positioning. */

  @Prop({ reflect: true }) position: 'fixed' | 'static';

  @Prop({ reflect: true }) paddingYMin: number = 0.8;

  @Prop({ reflect: true }) paddingYMax: number = 1;

  @Prop({ reflect: true }) wrapper: boolean;

  @Prop({ reflect: true }) zIndex: number = 102;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSectionHeaderDidLoad' })
  spxSectionHeaderDidLoad: EventEmitter;

  @Listen('scroll', { target: 'window' })
  onScroll() {
    if (this.backgroundScroll) {
      this.bgScroll = window.scrollY > this.backgroundScroll;
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.onScroll();
    setSectionVar(this.el);

    this.spxSectionHeaderDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Image styles. */

    const styleImg = css({
      maxHeight: setVar(tag, 'logo-max-height', this.logoMaxHeight),
      width: 'auto !important',
    });

    /** Host styles. */

    const styleHost = css({
      maxWidth: '2560px',
      background:
        this.backgroundScroll && !this.bgScroll
          ? 'none'
          : setVar(tag, 'background', this.background),
      backdropFilter:
        this.backgroundScroll && !this.bgScroll
          ? 'none'
          : setVar(tag, 'backdrop-filter', this.backdropFilter),
      position: this.position,
      width: '100%',
      display:
        state.bpMobile || this.navigationAlign === 'right' ? 'flex' : 'grid',
      gridTemplateColumns: '160px 1fr 160px',
      alignItems: 'center',
      padding:
        '' +
        setClamp(tag, 'padding-y', this.paddingYMin, this.paddingYMax) +
        ' ' +
        state.paddingXsm +
        '',
      zIndex: this.zIndex,
      transitionProperty: 'background',
      transitionDuration: setVar(
        tag,
        'transition-duration',
        s.transitionDuration
      ),
      transitionTimingFunction: setVar(
        tag,
        'transition-timing-function',
        s.transitionTimingFunction
      ),

      '*': {
        fontFamily: state.fontFamilySecondary + ' !important',
      },
    });

    /** Navigation styles. */

    const styleNavigation = css({
      justifySelf: 'center',
      marginLeft: state.bpMobile
        ? '16px'
        : this.navigationAlign === 'right' && !state.bpMobile && 'auto',
      marginRight: this.navigationAlign === 'right' && '32px',
    });

    /** Button styles. */

    const styleButtons = css({
      justifySelf: 'end',
      marginLeft: state.bpMobile && 'auto',
    });

    /** Logo styles. */

    const styleLogo = css({
      display: 'block',
      maxWidth: 'max-content',
    });

    return (
      <Host class={!this.wrapper && styleHost}>
        {!this.wrapper && [
          <div>
            <a href={this.logoLink} class={styleLogo}>
              {state.bpMobile && this.logoSrcMobile ? (
                <img class={styleImg} src={this.logoSrcMobile} alt="logo" />
              ) : (
                <img class={styleImg} src={this.logoSrc} alt="logo" />
              )}
            </a>
          </div>,
          <div class={styleNavigation}>
            <slot name="navigation" />
          </div>,
          <div class={styleButtons}>
            <slot name="buttons" />
          </div>,
        ]}
        <slot />
      </Host>
    );
  }
}
