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
import { startsWith } from 'lodash-es';
import { css } from '@emotion/css';
import * as s from '../../../constants/style';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

const tag = 'spx-group';

/**
 * Pass attributes to all inner (spx) child elements.
 * All attributes that start with g-* will be passed on to child elements.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-group',
})
export class SpxGroup {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxGroupElement;

  @Prop({ reflect: true }) content: string;

  @Prop({ reflect: true }) display: string = s.display;

  /** Specifies a target element. */
  @Prop({ reflect: true }) target: string;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxGroupDidLoad' })
  spxGroupDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

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
  };

  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return (
      <Host class={styleHost}>
        <div innerHTML={this.content ?? this.el.innerHTML} />
      </Host>
    );
  }
}
