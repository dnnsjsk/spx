import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  Listen,
  Event,
  EventEmitter,
  Method,
  State,
} from '@stencil/core';
import Gumshoe from 'gumshoejs/dist/gumshoe.js';
import { css } from '@emotion/css';
import { offset } from '../../../utils/dom/offset';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import * as s from '../../../constants/style';

const tag = 'spx-scrollspy';

/**
 * Automatically add CSS classes to navigation items
 * and content elements depending on the scroll position.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-scrollspy',
})
export class SpxScrollspy {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxScrollspyElement;

  @State() myGumshoe;

  /** Applied class to active content element. */
  @Prop({ reflect: true }) contentClass: string =
    'spx-scrollspy__content--active';

  @Prop({ reflect: true }) display: string = s.display;

  /** Applied class to active navigation element. */
  @Prop({ reflect: true }) navClass: string = 'spx-scrollspy__nav--active';

  /**
   * Selects the height of an element (any querySelector value) or number that
   * is used for offsetting how far from the top the next section is activated.
   */
  @Prop({ reflect: true }) offset: any = 0;

  /** Activates automatic navigation scrolling and sets the offset. */
  @Prop({ reflect: true }) scrolling: number;

  /** Target element. Can take any querySelector value. (id, class, tag etc.) */
  @Prop({ reflect: true }) target: string = 'a';

  /** Appends the currently active link to the end of the URL. */
  @Prop({ reflect: true }) urlChange: boolean = false;

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxScrollspyDidLoad' })
  spxScrollspyDidLoad: EventEmitter;

  /** Fires after a link is activated. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxScrollspyActivate' })
  spxScrollspyActivate: EventEmitter;

  /** Fires after a link is deactivated. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxScrollspyDeactivate' })
  spxScrollspyDeactivate: EventEmitter;

  /**
   * Replace state of URL bar.
   *
   * @param {event} event Gumshoe activate event.
   */
  @Listen('gumshoeActivate', { target: 'document' })
  onLinkActive(event) {
    if (this.urlChange) {
      history.replaceState(null, null, event.detail.link.getAttribute('href'));
    }

    if (this.scrolling) {
      this.el.scroll({
        top:
          this.el.querySelector(
            'a[href="' + event.detail.link.getAttribute('href') + '"]'
          )['offsetTop'] - this.scrolling,
        behavior: 'smooth',
      });
    }

    this.spxScrollspyActivate.emit({
      target: 'document',
      link: event.detail.link,
      content: event.detail.content,
    });
  }

  /**
   * Deactivate event.
   *
   * @param {event} event Gumshoe deactivate event.
   */
  @Listen('gumshoeDeactivate', { target: 'document' })
  onLinkDeactivate(event) {
    this.spxScrollspyDeactivate.emit({
      target: 'document',
      link: event.detail.link,
      content: event.detail.content,
    });
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

    /** Init Gumshoe. */
    // eslint-disable-next-line no-new
    this.myGumshoe = new Gumshoe(':scope ' + this.target + '', {
      reflow: true,
      navClass: this.navClass,
      contentClass: this.contentClass,
      events: true,

      offset: () => {
        /** Check if prop is a number otherwise look for querySelector. */
        return offset(this.offset);
      },
    });

    /** Emit event after render. */
    this.spxScrollspyDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  /** Reload the Scrollspy. */
  @Method()
  async reload() {
    this.myGumshoe.setup();
  }

  render() {
    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return <Host class={styleHost} />;
  }
}