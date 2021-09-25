import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Listen,
  Method,
  Prop,
} from '@stencil/core';
import { offsetHeader } from '../../../utils/dom/offsetHeader';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

/**
 * The component offsets itself to the height of a specified element. It comes
 * in handy when dealing with a fixed header and is used on this site. Simply
 * wrap your main content container with it and select a target element. The
 * distance will adjust on screen resize.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-offset',
  styleUrl: 'spx-offset.scss',
  shadow: true,
})
export class SpxOffset {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxOffsetElement;

  /** [prop:target] */
  @Prop({ reflect: true }) target: string = 'header';

  /** Add offset as CSS variable to body. */
  @Prop({ reflect: true }) variable: boolean = true;

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxOffsetDidLoad' })
  spxOffsetDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    offsetHeader(this.el, this.target, this.variable);
  }

  componentDidLoad() {
    this.onResize();
    globalComponentDidLoad({ el: this.el });
    this.spxOffsetDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.onResize();
  }

  /** Recalculate distance. */
  @Method()
  async recalc() {
    this.onResize();
  }

  render() {
    return <slot />;
  }
}
