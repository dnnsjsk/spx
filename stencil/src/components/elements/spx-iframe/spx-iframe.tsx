import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import LazyLoad from 'vanilla-lazyload';
import { mutationObserver } from '../../../utils/observer/mutationObserver';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-iframe';

/**
 * A wrapper around a standard iframe element, which scales proportionally to
 * its parent. Great for showing desktop versions of a website on smaller
 * screens or viewports.
 */
@Component({
  tag: 'spx-iframe',
  styleUrl: 'spx-iframe.scss',
  shadow: true,
})
export class SpxIframe {
  private iframe: HTMLIFrameElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxIframeElement;

  @State() height: string;
  @State() loaded: boolean;
  @State() parent;
  @State() parentHeight;
  @State() width: string;

  /** Automatically resize iframe to fit content. */
  @Prop() fit: boolean;

  /** Lazy load content. */
  @Prop() lazy: boolean;

  /** @css */
  @Prop({ reflect: true }) loaderBackground: string =
    'var(--spx-color-gray-900)';

  /** @css */
  @Prop({ reflect: true }) loaderColor: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) loaderBorderRadius: string =
    'var(--spx-border-radius)';

  /** @css */
  @Prop({ reflect: true }) loaderPadding: string = '0.8em';

  /** @css */
  @Prop({ reflect: true }) minHeight: string = '400px';

  /** Screen size of the site shown inside the iframe. */
  @Prop() size: string = '1440px';

  /** Source for the iframe. */
  @Prop() src: string = 'https://spx.dev';

  @Watch('loaderBackground')
  @Watch('loaderBorderRadius')
  @Watch('loaderColor')
  @Watch('loaderPadding')
  @Watch('minHeight')
  // @ts-ignore
  watchAttributes(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxIframeDidLoad' })
  spxIframeDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    this.handleResize();

    if (this.fit) {
      this.setHeight();
    }
  }

  componentDidLoad() {
    if (this.lazy) {
      // @ts-ignore
      // eslint-disable-next-line no-unused-vars
      const lazyLoadInstance = new LazyLoad(
        {
          unobserve_entered: true,
          unobserve_completed: true,
          callback_loaded: () => {
            setTimeout(() => {
              if (this.fit) {
                this.setHeight();
                this.setUpMutationObserver();
              }
              this.handleResize();
            }, 10);
          },
        },
        this.el.shadowRoot.querySelectorAll('[data-src]')
      );
    }

    this.iframe = this.el.shadowRoot.querySelector('iframe');
    this.parent = this.el.shadowRoot.querySelector('.inner');

    this.el.shadowRoot.querySelector('iframe').onload = () => {
      this.loaded = true;

      if (!this.lazy) {
        this.handleResize();
      }
    };

    if (this.fit && !this.lazy) {
      this.setHeight();
      this.setUpMutationObserver();
    }

    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'loaderBackground',
        'loaderBorderRadius',
        'loaderColor',
        'loaderPadding',
        'minHeight',
      ],
    });
    this.spxIframeDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.handleResize();
  }

  private setHeight = () => {
    const set = () => {
      if (
        this.el.shadowRoot.querySelector('iframe').contentWindow.document
          .body === undefined ||
        this.el.shadowRoot.querySelector('iframe').contentWindow.document
          .body === null
      ) {
        setTimeout(set, 100);
      } else {
        this.iframe.style.height =
          this.el.shadowRoot.querySelector('iframe').contentWindow.document.body
            .scrollHeight + 'px';
      }
    };

    set();
  };

  private setUpMutationObserver = () => {
    mutationObserver(
      this.el.shadowRoot.querySelector('iframe').contentWindow.document.body,
      {
        attributes: true,
        childList: true,
        subtree: true,
      },
      () => {
        this.setHeight();
        setTimeout(() => this.setHeight(), 500);
      }
    );
  };

  private handleResize = () => {
    if (this.parent && this.iframe) {
      const ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
      this.iframe.style.transform = 'scale(calc((' + ratio + '))';
      this.parentHeight = this.parent.offsetHeight;
      this.iframe.style.height = this.parentHeight / ratio + 'px';
    }
  };

  render() {
    return (
      <div class="inner">
        <iframe
          style={{ width: this.size }}
          ref={(el) => (this.iframe = el as HTMLIFrameElement)}
          tabindex="-1"
          src={!this.lazy ? this.src : ''}
          data-src={this.lazy && this.src}
        />

        {!this.loaded && (
          <div class="loader">
            <spx-icon type="loader" />
          </div>
        )}
      </div>
    );
  }
}
