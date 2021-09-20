import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
} from '@stencil/core';
import Typewriter from 'typewriter-effect/dist/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

/**
 * Animates text like it is being written on a typewriter.
 *
 * @slot [slot:inner]
 */
@Component({
  tag: 'spx-typewriter',
  styleUrl: 'spx-typewriter.scss',
  shadow: true,
})
export class SpxTypewriter {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTypewriterElement;

  @State() typewriter;

  /** Automatically starts writing. */
  @Prop({ reflect: true }) autoStart: boolean = true;

  /** Writing delay in ms. Also accepts 'natural' value. */
  @Prop({ reflect: true }) delay: any = 'natural';

  /** Delete delay in ms. Also accepts 'natural' value. */
  @Prop({ reflect: true }) deleteSpeed: any = 'natural';

  /** Loops the animation. */
  @Prop({ reflect: true }) loop: boolean;

  /** Text that should be written. */
  @Prop({ reflect: true }) text: string = "I'm a typewriter";

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTypewriterDidLoad' })
  spxTypewriterDidLoad: EventEmitter;

  componentDidLoad() {
    const el =
      this.el.querySelector('h1, h2, h3, h4, h5, h6, p, span') ||
      this.el.shadowRoot.querySelector('div');

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
      wrapperClassName: 'wrapper',
      cursorClassName: 'cursor',
      skipAddStyles: true,
    });

    globalComponentDidLoad({ el: this.el });
    this.spxTypewriterDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  /** Start animation. */
  @Method()
  async play() {
    this.typewriter.typeString(this.text);
    this.typewriter.start();
  }

  /** Stop animation. */
  @Method()
  async stop() {
    this.typewriter.stop();
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
