import {Component, h, Host, Prop} from '@stencil/core';
import {css, keyframes} from "emotion";

@Component({
  tag: 'spx-loader',
})

export class SpxLoader {
  @Prop({reflectToAttr: true}) color: string = '#ffffff';
  @Prop({reflectToAttr: true}) speed: string = '1.5s';

  render() {

    /** Animation. */

    const kf = keyframes({
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      }
    });

    return <Host class={css({
      display: 'block',
      width: 'max-content',
      height: 'max-content',

      'svg': {
        width: '1em',
        color: 'var(--spx-loader-color, ' + this.color + ')',
        animation: kf,
        animationDuration: 'var(--spx-loader-speed, ' + this.speed + ')',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        transformOrigin: 'center',
      },
    })}>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/>
      </svg>
    </Host>;
  }
}
