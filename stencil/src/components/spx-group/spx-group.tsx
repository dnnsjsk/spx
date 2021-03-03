import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
} from '@stencil/core';
import { startsWith } from 'lodash-es';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-group';

/**
 * Pass attributes to all inner (spx) child elements.
 * All attributes that start with g-* will be passed on to child elements.
 */

@Component({
  tag: 'spx-group',
})
export class SpxGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxGroupElement;

  @Prop({ reflect: true }) display: string = 'block';

  /** Specifies a target element. */

  @Prop({ reflect: true }) target: string;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxGroupDidLoad' })
  spxGroupDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.forwardAttributes();

    /** Set up mutation observer. */

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.forwardAttributes();
      });
    });

    observer.observe(this.el, {
      attributes: true,
    });

    this.spxGroupDidLoad.emit({ target: 'document' });
  }

  private forwardAttributes() {
    /** Function to filter elements. */

    const getAllTagMatches = (regEx) => {
      return Array.prototype.slice
        .call(this.el.querySelectorAll('*'))
        .filter(function (el) {
          return el.tagName.match(regEx);
        });
    };

    /** Get all tag matches. */

    const elements = this.target
      ? getAllTagMatches(new RegExp(this.target, 'i'))
      : getAllTagMatches(/^spx/i);

    /** Loop matches. */

    for (
      let att, i = 0, atts = this.el.attributes, n = atts.length;
      i < n;
      i++
    ) {
      att = atts[i];
      if (startsWith(att.nodeName, 'g-')) {
        elements.forEach((item) => {
          item.setAttribute(att.nodeName.substring(2), att.nodeValue);
        });
      }
    }
  }

  @Method()
  async reload() {
    this.componentDidLoad();
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
