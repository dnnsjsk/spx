import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Event,
  EventEmitter,
  State,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { getDoc } from '../../../utils/dom/getDoc';

/**
 * Automatically add CSS classes to navigation items
 * and content elements depending on the scroll position.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-scrollspy',
  styleUrl: 'spx-scrollspy.scss',
  shadow: true,
})
export class SpxScrollspy {
  private observer;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxScrollspyElement;

  @State() links = [];

  /** Applied class to active navigation element. */
  @Prop({ reflect: true }) navClass: string = 'spx-scrollspy__nav--active';

  /** [prop:target] */
  @Prop({ reflect: true }) target: string = 'a';

  /** Intersection observer threshold. */
  @Prop({ reflect: true }) threshold: number = 0.5;

  /** Intersection observer root margin. */
  @Prop({ reflect: true }) rootMargin: string = '0px';

  /** Appends the currently active link to the end of the URL. */
  @Prop({ reflect: true }) urlChange: boolean = false;

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxScrollspyDidLoad' })
  spxScrollspyDidLoad: EventEmitter;

  componentDidLoad() {
    this.init();
    globalComponentDidLoad({ el: this.el });
    this.spxScrollspyDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private init() {
    this.links = [];
    this.observer?.disconnect();

    this.el.querySelectorAll(this.target).forEach((item) => {
      this.links.push(item.getAttribute('href'));
    });

    const observerOptions = {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.el
            .querySelectorAll(`${this.target}:not([href="#${id}"])`)
            .forEach((item) => {
              item.classList.remove(this.navClass);
            });
          this.el.querySelector(`[href="#${id}"]`).classList.add(this.navClass);

          if (this.urlChange) {
            history.replaceState(null, null, `#${id}`);
          }
        }
      });
    };

    this.observer = new IntersectionObserver(observerCallback, observerOptions);

    getDoc(this.el)
      .querySelectorAll(this.links.toString())
      .forEach((i) => {
        if (i) {
          this.observer.observe(i);
        }
      });
  }

  render() {
    return <slot />;
  }
}
