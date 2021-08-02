import {
  Component,
  Host,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import * as s from '../../../constants/style';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { setVar } from '../../../utils/cssVariables/setVar';
import LazyLoad from 'vanilla-lazyload';
import { mutationObserver } from '../../../utils/observer/mutationObserver';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';

const tag = 'spx-iframe';

/**
 * A wrapper around a standard iframe element, which scales proportionally to
 * its parent. Great for showing desktop versions of a website on smaller
 * screens or viewports.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-iframe',
  shadow: true,
})
export class SpxIframe {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxIframeElement;
  private iframe: HTMLIFrameElement;
  private content: HTMLElement;

  @State() height: string;
  @State() loaded: boolean;
  @State() parent;
  @State() parentHeight;
  @State() width: string;

  @Prop({ reflect: true }) display: string = s.display;

  @Prop({ reflect: true }) documentBorder: string = 'none';

  @Prop({ reflect: true }) documentBorderRadius: string = 'none';

  @Prop({ reflect: true }) documentHeight: string = 'auto';

  @Prop({ reflect: true }) documentWidth: string = '100%';

  /** Automatically resize iframe to fit content. */
  @Prop() fit: boolean;

  /** Lazy load content. */
  @Prop() lazy: boolean;

  @Prop({ reflect: true }) loaderBackground: string =
    'var(--spx-color-gray-900)';

  @Prop({ reflect: true }) loaderColor: string = '#ffffff';

  @Prop({ reflect: true }) loaderBorderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) minHeight: string = '400px';

  /** Screen size of the site shown inside the iframe. */
  @Prop() size: string = '1440px';

  /** Source for the iframe. */
  @Prop() src: string = 'https://spx.dev';

  /**
   * Screen size of the site shown inside the iframe.
   *
   * @choice 'resize', 'document'
   */
  @Prop() type: string = 'resize';

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxIframeDidLoad' })
  spxIframeDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.type === 'resize') {
      this.handleResize();
    }

    if (this.fit) {
      this.setHeight();
    }
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

    /** Setup lazy loading. */
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
              if (this.type === 'resize') {
                this.handleResize();
              }
            }, 10);
          },
        },
        this.el.shadowRoot.querySelectorAll('[data-src]')
      );
    }

    if (this.type === 'resize') {
      /** Assign states. */
      this.iframe = this.el.shadowRoot.querySelector('iframe');
      this.parent = this.el.shadowRoot.querySelector(':scope > div');

      /** Wait for Iframe to load before showing content. */
      this.el.shadowRoot.querySelector('iframe').onload = () => {
        this.loaded = true;

        if (!this.lazy) {
          this.handleResize();
        }
      };
    }

    if (this.type === 'document') {
      this.createIframeContent();
    }

    if (this.fit && !this.lazy) {
      this.setHeight();
      this.setUpMutationObserver();
    }

    this.spxIframeDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    if (this.type === 'resize') {
      this.handleResize();
    }

    if (this.type === 'document') {
      this.createIframeContent();
    }
  }

  /** Fit function. */
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

  /** Set up mutation observer. */
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

  /** Type: resize - function to keep src element in proportion. */
  private handleResize = () => {
    if (this.parent && this.iframe) {
      const ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
      this.iframe.style.transform = 'scale(calc((' + ratio + '))';
      this.parentHeight = this.parent.offsetHeight;
      this.iframe.style.height = this.parentHeight / ratio + 'px';
    }
  };

  /** Type: document - add all slot elements to iframe. */
  private createIframeContent = () => {
    const doc = this.iframe.contentDocument;

    this.content.querySelectorAll('*').forEach((item) => {
      doc.body.appendChild(item);
    });

    this.content.remove();
  };

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      height: 'auto',
      width: '100%',
      position: 'relative',
      minHeight: setVar(tag, 'min-height', this.minHeight),
    });

    /** Iframe resize styles. */
    const styleIframeResize = css({
      border: 'none',
      width: this.size,
      transformOrigin: 'left top',
      position: 'absolute',
      minHeight: setVar(tag, 'min-height', this.minHeight),
    });

    /** Iframe document styles. */
    const styleIframeDocument = css({
      border: setVar(tag, 'document-border', this.documentBorder),
      borderRadius: setVar(
        tag,
        'document-border-radius',
        this.documentBorderRadius
      ),
      width: setVar(tag, 'document-width', this.documentWidth),
      height: setVar(tag, 'document-height', this.documentHeight),
    });

    /** Iframe styles. */
    const styleIframe =
      this.type === 'resize'
        ? styleIframeResize
        : this.type === 'document' && styleIframeDocument;

    /** Loader styles. */
    const styleLoader = css({
      padding: '0.8em',
      borderRadius: setVar(
        tag,
        'loader-border-radius',
        this.loaderBorderRadius
      ),
      backgroundColor: setVar(tag, 'loader-background', this.loaderBackground),
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(2)',
    });

    return (
      <Host class={styleHost}>
        <div class={styleShadowHost}>
          {/** Slot for document. */}

          {this.type === 'document' && (
            <div
              ref={(el) => (this.content = el as HTMLElement)}
              innerHTML={this.el.innerHTML}
            />
          )}

          {/** Iframes. */}
          {this.type === 'resize' ? (
            <iframe
              class={styleIframe}
              ref={(el) => (this.iframe = el as HTMLIFrameElement)}
              tabindex="-1"
              src={!this.lazy ? this.src : ''}
              data-src={this.lazy && this.src}
            />
          ) : (
            <iframe
              class={styleIframe}
              ref={(el) => (this.iframe = el as HTMLIFrameElement)}
              tabindex="-1"
            />
          )}

          {/** Loader. */}
          {this.type === 'resize' && !this.loaded && (
            <div class={styleLoader}>
              <spx-icon
                type="loader"
                color={setVar(tag, 'loader-color', this.loaderColor)}
              />
            </div>
          )}
        </div>
      </Host>
    );
  }
}
