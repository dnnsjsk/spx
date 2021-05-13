import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
} from '@stencil/core';
import Typewriter from 'typewriter-effect/dist/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-typewriter';

/**
 * Animates text like it is being written on a typewriter.
 */
@Component({
  tag: 'spx-typewriter',
  styleUrl: 'spx-typewriter.css',
})
export class SpxTypewriter {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTypewriterElement;

  @State() typewriter;

  /**
   * Automatically starts writing.
   */
  @Prop({ reflect: true }) autoStart: boolean = true;

  /**
   * Writing delay in ms. Also accepts 'natural' value.
   */
  @Prop({ reflect: true }) delay: any = 'natural';

  /**
   * Delete delay in ms. Also accepts 'natural' value.
   */
  @Prop({ reflect: true }) deleteSpeed: any = 'natural';
  @Prop({ reflect: true }) display: string = 'block';

  /**
   * Loops the animation.
   */
  @Prop({ reflect: true }) loop: boolean;

  /**
   * Text that should be written.
   */
  @Prop({ reflect: true }) text: string = "I'm a typewriter";

  /**
   * Fires after component has loaded.
   */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTypewriterDidLoad' })
  spxTypewriterDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /**
     * Define elements.
     */
    const el =
      this.el.querySelector('h1, h2, h3, h4, h5, h6, p, span') || this.el;

    /**
     * Init Typewriter.
     */
    this.typewriter = new Typewriter(el, {
      strings:
        this.text[0] === '['
          ? this.text
              .replaceAll("['", '')
              .replaceAll("']", '')
              .replaceAll(" '", '')
              .split("',")
          : this.text,
      delay: this.delay,
      deleteSpeed: this.deleteSpeed,
      loop: this.loop,
      autoStart: this.autoStart,
      wrapperClassName: 'spx-typewriter__wrapper',
      cursorClassName: 'spx-typewriter__cursor',
      skipAddStyles: true,
    });

    this.spxTypewriterDidLoad.emit({ target: 'document' });
  }

  /**
   * Start animation.
   */
  @Method()
  async play() {
    this.typewriter.typeString(this.text);
    this.typewriter.start();
  }

  /**
   * Stop animation.
   */
  @Method()
  async stop() {
    this.typewriter.stop();
  }

  render() {
    /**
     * Host styles.
     */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return <Host class={styleHost} />;
  }
}
