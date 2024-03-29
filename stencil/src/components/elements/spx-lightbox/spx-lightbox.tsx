import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { lightbox } from './lightbox';

/** Creates a lightbox for images. */
@Component({
  tag: 'spx-lightbox',
  styleUrl: 'spx-lightbox.scss',
  shadow: true,
})
export class SpxLightbox {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxLightboxElement;

  /** If 'overflow: hidden' should be applied to the body when a lightbox is open. */
  @Prop({ reflect: true }) bodyOverflow: boolean = true;

  /** Show close button. */
  @Prop({ reflect: true }) closeButton: boolean = true;

  /** @css */
  @Prop({ reflect: true }) closeButtonColor: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) overlayBackground: string = 'rgba(0,0,0,0.8)';

  /** @css */
  @Prop({ reflect: true }) overlayBackdropFilter: string =
    'var(--spx-backdrop-filter)';

  /** [component:spx-slider] */
  @Prop({ reflect: true }) spxSlider: string;

  /** [prop:target] */
  @Prop({ reflect: true }) target: string = 'img';

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxLightboxDidLoad' })
  spxLightboxDidLoad: EventEmitter;

  componentDidLoad() {
    this.init();
    globalComponentDidLoad({ el: this.el });
    this.spxLightboxDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private init = () => {
    lightbox({
      el: this.el,
      query: this.el.querySelectorAll(this.target),
    });
  };

  render() {
    return <slot />;
  }
}
