import {Component, h, Host, Prop, Element} from '@stencil/core';
import {css, cx, keyframes} from "emotion";
import * as constants from "../../constants/style";

@Component({
  tag: 'spx-snackbar',
})

export class SpxSnackbar {
  @Element() el: HTMLElement;
  @Prop({reflectToAttr: true}) styling: string;
  @Prop({reflectToAttr: true}) text: string;

  @Prop({reflectToAttr: true}) bottom: string = '1em';
  @Prop({reflectToAttr: true}) padding: string = '10px 15px';

  @Prop({reflectToAttr: true}) fontSize: string = '16px';
  @Prop({reflectToAttr: true}) color: string = constants.styleColor;
  @Prop({reflectToAttr: true}) background: string = constants.styleBackground;
  @Prop({reflectToAttr: true}) borderRadius: string = constants.styleBorderRadius;

  @Prop({reflectToAttr: true}) animationDelay: string = '0.2s';
  @Prop({reflectToAttr: true}) animationDuration: string = '2s';

  componentDidRender() {
    let el = this.el;

    /** Remove snackbar from dom after 5 seconds. */

    function remove() {
      el.remove();
    }

    setTimeout(remove, 5000)
  }

  render() {

    /** Animation. */

    const kf = keyframes({
      '0%, 100%': {
        opacity: 0,
      },
      '30%, 80%': {
        opacity: 1,
      }
    });

    /** Style default. */

    const styleDefault = css({
      fontFamily: constants.styleFontFamily,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--spx-snackbar-padding, ' + this.padding + ')',
      bottom: 'var(--spx-snackbar-bottom, ' + this.bottom + ')',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: 999999,
      pointerEvents: 'none',
      opacity: 0,
      fontSize: 'var(--spx-snackbar-font-size, ' + this.fontSize + ')',
      color: 'var(--spx-snackbar-background, ' + this.color + ')',
      background: 'var(--spx-snackbar-background, ' + this.background + ')',
      borderRadius: 'var(--spx-snackbar-border-radius, ' + this.borderRadius + ')',
      animation: kf,
      animationDelay: 'var(--spx-snackbar-animation-delay, ' + this.animationDelay + ')',
      animationDuration: 'var(--spx-snackbar-animation-duration, ' + this.animationDuration + ')',
      animationFillMode: 'forwards',
    });

    return <Host class={cx(
      {[constants.styleBase]: this.styling === 'none'},
      {[styleDefault]: !this.styling}
    )}>
      <div>
        {this.text}
      </div>
    </Host>;
  }
}
