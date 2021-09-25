import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  State,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import 'ionicons/dist/index';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { shim } from 'twind/shim/server';
import { twind } from '../../../utils/3rd/twind';

/**
 * Generate Tailwind classes for inner elements.
 */
@Component({
  tag: 'spx-tailwind',
  styleUrl: 'spx-tailwind.scss',
  shadow: true,
})
export class SpxTailwind {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTailwindElement;

  @State() content;

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTailwindDidLoad' })
  spxTailwindDidLoad: EventEmitter;

  componentWillLoad() {
    this.setContent();
  }

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      cb: this.setContent,
      mutations: {
        subtree: true,
        attributes: true,
        classList: true,
      },
    });
    this.spxTailwindDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private setContent = () => {
    this.content = this.el.innerHTML;
    const { tw } = twind(this.el.shadowRoot);

    shim(this.content, {
      tw,
    });
  };

  render() {
    return <div innerHTML={this.content} />;
  }
}
