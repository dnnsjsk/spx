import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { css } from '@emotion/css';
import 'ionicons/dist/index';
import { gsap } from 'gsap';
import { setVar } from '../../utils/setVar';

const tag = 'spx-text-path';

/**
 * Write text along a predefined path.
 */

@Component({
  tag: 'spx-text-path',
})
export class SpxTextPath {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTextPathElement;

  /** Text rotation amount. */

  @Prop({ reflect: true }) textRotate: number;

  /** Text rotation animation duration. */

  @Prop({ reflect: true }) textRotationDuration: number;

  /** Text to be shown. */

  @Prop({ reflect: true }) text: string;

  /** Text color. */

  @Prop({ reflect: true }) textColor: string;

  /** Text size. */

  @Prop({ reflect: true }) textSize: string = 'clamp(16px, 3vw, 24px)';

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTextCircleDidLoad' })
  spxTextCircleDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.spxTextCircleDidLoad.emit({ target: 'document' });

    this.el.querySelector('foreignObject').setAttribute('height', '100%');
    this.el.querySelector('foreignObject').setAttribute('width', '100%');

    gsap.to(this.el, {
      '--text-transform': 'rotate(360deg)',
      ease: 'linear',
      repeat: -1,
      duration: this.textRotationDuration,
    });
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'block',
      position: 'relative',
    });

    /** Slot styles. */

    const styleSlot = css({
      display: 'relative',
      height: '100%',
      width: '100%',
      clipPath:
        'path("M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0")',
    });

    /** Slot styles. */

    const styleTextPath = css({
      transform: 'var(--text-transform)',
      transformOrigin: 'center',
      textTransform: 'uppercase',
      fontSize: setVar(tag, 'text-font-size', this.textSize),
    });

    return (
      <Host class={styleHost}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"
            />
            <path
              id="circlePathInner"
              d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"
            />
          </defs>
          <foreignObject height={0} width={0}>
            <div class={styleSlot}>
              <slot />
            </div>
          </foreignObject>
          <use xlinkHref="#circlePathInner" fill="none" />
          <text class={styleTextPath} fill={this.textColor}>
            <textPath xlinkHref="#circlePath">{this.text}</textPath>
          </text>
        </svg>
      </Host>
    );
  }
}
