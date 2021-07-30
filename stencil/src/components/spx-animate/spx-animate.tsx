import {
  Component,
  Host,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Element,
  State,
  Method,
  Event,
  EventEmitter,
} from '@stencil/core';
import * as s from '../../constants/style';
import { css } from '@emotion/css';
import { gsap } from 'gsap';
import { setVar } from '../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../utils/global/globalComponentWillUpdate';

const tag = 'spx-animate';

/**
 * Wrapper around GSAP that allows for staggered and scroll-based animation.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-animate',
})
export class SpxAnimate {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxAnimateElement;

  @State() elements;
  @State() tl;

  /** Clip-path value the animation starts from. */
  @Prop() clipPath: string;

  /** Delay before animation starts. */
  @Prop() delay: number = 0;

  @Prop({ reflect: true }) display: string = s.display;

  /** Animation duration. */
  @Prop() duration: number = 1;

  /** Ease being used. Accepts all common GSAP options. */
  @Prop() ease: string = 'power1.out';

  /** Filter value the animation starts from. */
  @Prop() filter: string;

  /** Determines if animation should only play once. (if viewport is true) */
  @Prop() once: boolean;

  /** Opacity level the animation starts from. */
  @Prop() opacity: number = 0;

  /** Repeats the animation. -1 to repeat indefinitely. */
  @Prop() repeat: number;

  /** Time to wait between repetitions. */
  @Prop() repeatDelay: number;

  /** Reverses the animation. */
  @Prop() reverse: boolean;

  /** Amount of time elements should be staggered by. */
  @Prop() stagger: number = 0.15;

  /** The target element that should be animated inside the component. */
  @Prop() target: string = '*';

  /** Starts animation when target is in the viewport. */
  @Prop() viewport: boolean;

  /** Adjust the root margin of the animation start. */
  @Prop() viewportMarginBottom: string;

  /** Adjust the root margin of the animation start. */
  @Prop() viewportMarginLeft: string;

  /** Adjust the root margin of the animation start. */
  @Prop() viewportMarginRight: string;

  /** Adjust the root margin of the animation start. */
  @Prop() viewportMarginTop: string;

  /** X position the animation starts from. */
  @Prop() x: any = 0;

  /** Y position the animation starts from. */
  @Prop() y: any = 0;

  /**
   * Causes the animation to go back and forth, alternating backward and forward
   * on each repeat.
   */
  @Prop() yoyo: boolean;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxAnimateDidLoad' })
  spxAnimateDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

    /** Init loop to make sure the component fires correctly in Oxygen. */
    const init = () => {
      this.elements = this.el.querySelectorAll(this.target);

      if (
        (this.elements === undefined || this.elements.length === 0) &&
        document.body.classList.contains('oxygen-builder-body')
      ) {
        setTimeout(init, 100);
      } else {
        this.tl = gsap.timeline({
          defaults: {
            ease: this.ease,
          },
          paused: true,
        });

        const options = {
          clipPath: this.clipPath,
          delay: this.delay,
          duration: this.duration,
          filter: this.filter,
          webkitFilter: this.filter,
          opacity: this.opacity,
          repeat: this.repeat,
          repeatDelay: this.repeatDelay,
          stagger: this.stagger,
          x: this.x,
          y: this.y,
          yoyo: this.yoyo,
          onComplete: () => {
            const el = this.el.parentElement;

            if (this.el.parentElement.tagName === 'SPX-NOTATION') {
              // @ts-ignore
              el.show();
            }
          },
        };

        if (this.reverse) {
          this.tl.to(this.elements, options);
        } else {
          this.tl.from(this.elements, options);
        }

        /** Play immediately when not in viewport. */
        if (!this.viewport) {
          this.tl.play();
        }

        /** Check viewport before playing. */
        if (this.viewport) {
          const options = {
            rootMargin:
              '' +
              '' +
              (this.viewportMarginTop || '0px') +
              ' ' +
              '' +
              (this.viewportMarginRight || '0px') +
              ' ' +
              '' +
              (this.viewportMarginBottom || '0px') +
              ' ' +
              '' +
              (this.viewportMarginLeft || '0px') +
              '',
          };

          const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.tl.play();
              } else {
                if (!this.once) {
                  this.tl.reverse();
                }
              }
            });
          }, options);
          intersectionObserver.observe(this.el);
        }

        this.spxAnimateDidLoad.emit({ target: 'document' });
      }
    };

    init();
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  /**
   * Plays animation.
   *
   * @param {number} from From where to play animation.
   * @param {boolean} suppressEvents Suppress events before playing.
   */
  @Method()
  async play(from = 0, suppressEvents = true) {
    this.tl.play(from, suppressEvents);
  }

  /**
   * Restarts animation.
   *
   * @param {boolean} includeDelay Include delay when restarting.
   * @param {boolean} suppressEvents Suppress events before playing.
   */
  @Method()
  async restart(includeDelay = false, suppressEvents = true) {
    this.tl.restart(includeDelay, suppressEvents);
  }

  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return (
      <Host class={styleHost}>
        <slot />
      </Host>
    );
  }
}
