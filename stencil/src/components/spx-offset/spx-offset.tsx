import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Listen,
  Method,
  Prop,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/cssVariables/setVar';
import { offsetHeader } from '../../utils/dom/offsetHeader';
import { globalComponentDidLoad } from '../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../utils/global/globalComponentWillUpdate';
import * as s from '../../constants/style';

const tag = 'spx-offset';

/**
 * The component offsets itself to the height of a specified element. It comes
 * in handy when dealing with a fixed header and is used on this site. Simply
 * wrap your main content container with it and select a target element. The
 * distance will adjust on screen resize.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-offset',
  shadow: true,
})
export class SpxOffset {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxOffsetElement;

  @Prop({ reflect: true }) display: string = s.display;

  /** Target element. */
  @Prop({ reflect: true }) target: string = 'header';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxOffsetDidLoad' })
  spxOffsetDidLoad: EventEmitter;

  /** Listen to window resize. */
  @Listen('resize', { target: 'window' })
  onResize() {
    offsetHeader(this.el, this.target);
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });
    this.onResize();

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
