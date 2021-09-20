import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
} from '@stencil/core';
import { startsWith } from 'lodash-es';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

/**
 * Pass attributes to all inner (spx) child elements.
 * All attributes that start with g-* will be passed on to child elements.
 *
 * @slot [slot:inner]
 */
@Component({
  tag: 'spx-group',
  styleUrl: 'spx-group.scss',
  shadow: true,
})
export class SpxGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxGroupElement;

  @Prop({ reflect: true }) content: string;

  /** [prop:target] */
  @Prop({ reflect: true }) target: string;

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxGroupDidLoad' })
  spxGroupDidLoad: EventEmitter;

  componentDidLoad() {
    this.forwardAttributes();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.forwardAttributes();
      });
    });

    observer.observe(this.el, {
      attributes: true,
    });

    globalComponentDidLoad({ el: this.el });
    this.spxGroupDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private forwardAttributes = () => {
    const getAllTagMatches = (regEx) => {
      return Array.prototype.slice
        .call(this.el.querySelectorAll('*'))
        .filter(function (el) {
          return el.tagName.match(regEx);
        });
    };

    const elements = this.target
      ? getAllTagMatches(new RegExp(this.target, 'i'))
      : getAllTagMatches(/^spx/i);

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
  };

  render() {
    return <slot />;
  }
}
