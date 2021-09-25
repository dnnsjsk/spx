import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Element,
  Method,
  Event,
  EventEmitter,
} from '@stencil/core';
import { gsap } from 'gsap';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

/**
 * Wrapper around GSAP that allows for staggered and scroll-based animation.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-animate',
  styleUrl: 'spx-animate.scss',
  shadow: true,
})
export class SpxAnimate {
  private elements;
  private intersectionObserver;
  private tl;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxAnimateElement;

  /** Same as opacity but sets visibility to 'hidden' after hitting 0. */
  @Prop() autoAlpha: number;

  /** Clip-path value the animation starts from. */
  @Prop() clipPath: string;

  /** Delay before animation starts. */
  @Prop() delay: number = 0;

  /** Animation duration. */
  @Prop() duration: number = 1;

  /** Ease being used. Accepts all common GSAP options. */
  @Prop() ease: string = 'power1.out';

  /** Filter value the animation starts from. */
  @Prop() filter: string;

  /** Determines if animation should only play once. (if viewport is true) */
  @Prop() once: boolean;

  /** Opacity level the animation starts from. */
  @Prop() opacity: number;

  /** Repeats the animation. -1 to repeat indefinitely. */
  @Prop() repeat: number;

  /** Time to wait between repetitions. */
  @Prop() repeatDelay: number;

  /** Reverses the animation. */
  @Prop() reverse: boolean;

  /** Amount of time elements should be staggered by. */
  @Prop() stagger: number = 0.15;

  /** [prop:target] */
  @Prop() target: string = '*';

  /** Starts animation when target is in the viewport. */
  @Prop() viewport: boolean;

  /** Scroll intersection observer threshold. */
  @Prop({ reflect: true }) viewportThreshold: number = 0;

  /** Scroll intersection observer root margin. */
  @Prop({ reflect: true }) viewportRootMargin: string = '0px';

  /** X position the animation starts from. */
  @Prop() x: any = 0;

  /** Y position the animation starts from. */
  @Prop() y: any = 0;

  /** Causes the animation to go back and forth, alternating backward and forward on each repeat. */
  @Prop() yoyo: boolean;

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxAnimateDidLoad' })
  spxAnimateDidLoad: EventEmitter;

  componentDidLoad() {
    const init = () => {
      this.elements = this.el.querySelectorAll(this.target);

      if (
        (this.elements === undefined || this.elements.length === 0) &&
        document.body.classList.contains('oxygen-builder-body')
      ) {
        setTimeout(init, 100);
      } else {
        this.init();
        this.spxAnimateDidLoad.emit({ target: 'document' });
      }
    };
    init();
    globalComponentDidLoad({ el: this.el });
  }

  componentWillUpdate() {
    if (!this.tl.isActive()) {
      this.tl?.kill();
      this.tl = null;
      this.intersectionObserver?.disconnect();
      this.init();
    }

    globalComponentWillUpdate(this.el);
  }

  private init = () => {
    this.tl = gsap.timeline({
      defaults: {
        ease: this.ease,
      },
      paused: true,
    });

    const options = {
      autoAlpha: this.autoAlpha,
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

        if (this.el.parentElement?.tagName === 'SPX-NOTATION') {
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

    if (!this.viewport) {
      this.tl.play();
    }

    if (this.viewport) {
      const options = {
        rootMargin: this.viewportRootMargin,
        threshold: this.viewportThreshold,
      };

      this.intersectionObserver = new IntersectionObserver((entries) => {
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
      this.intersectionObserver.observe(this.el);
    }
  };

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
    return <slot />;
  }
}
