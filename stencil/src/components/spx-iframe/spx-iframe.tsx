import {
  Component,
  Host,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Listen,
  Element,
  Method,
} from '@stencil/core';
import { css } from 'emotion';
import * as c from '../../constants/style';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

/**
 * A wrapper around a standard iframe element, which scales proportionally to its parent.
 * Great for showing desktop versions of a website on smaller screens or viewports.
 */

@Component({
  tag: 'spx-iframe',
})
export class SpxIframe {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxIframeElement;

  @State() height: string;
  @State() iframe;
  @State() loaded: boolean;
  @State() parent;
  @State() parentHeight;
  @State() width: string;

  /** Screen size of the site shown inside the iframe. */

  @Prop() size: string = '1440px';

  /** Source for the iframe. */

  @Prop() src: string = 'https://spx.dev';

  @Listen('resize', { target: 'window' })
  onResize() {
    this.handleResize();
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Assign states. */

    this.iframe = this.el.querySelector('iframe');
    this.parent = this.el;

    /** Resize and wait for iFrame to load before showing content. */

    this.handleResize();
    this.el.querySelector('iframe').onload = () => {
      this.loaded = true;
    };
  }

  componentDidUpdate() {
    this.handleResize();
  }

  /** Resize function to keep src element in proportion. */

  private handleResize() {
    const ratio = this.parent.offsetWidth / this.iframe.offsetWidth;
    this.iframe.style.transform = 'scale(calc((' + ratio + '))';
    this.parentHeight = this.parent.offsetHeight;
    this.iframe.style.height = this.parentHeight / ratio + 'px';
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      height: '100%',
      width: '100%',
      position: 'relative',
      overflowX: 'scroll',
      overflowY: 'hidden',
      display: 'block',
    });

    /** Iframe styles. */

    const styleIframe = css({
      border: 'none',
      width: this.size,
      height: '100vh',
      transformOrigin: 'left top',
      position: 'absolute',
    });

    /** Loader styles. */

    const styleLoader = css({
      padding: '0.8em',
      borderRadius: c.borderRadius,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(2)',
    });

    return (
      <Host class={styleHost}>
        {/** iFrame. */}

        <iframe class={styleIframe} tabindex="-1" src={this.src} />

        {/** Loader. */}

        {!this.loaded && (
          <div class={styleLoader}>
            <spx-loader />
          </div>
        )}
      </Host>
    );
  }
}
