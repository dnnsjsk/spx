import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import 'ionicons/dist/index';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-icon';

/** Wrapper component for different kinds of icon sets. Currently comes included with Ionicons. */
@Component({
  tag: 'spx-icon',
  styleUrl: 'spx-icon.scss',
  shadow: true,
})
export class SpxIcon {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxIconElement;

  @Prop({ reflect: true }) color: string = 'inherit';

  /** Icon code. */
  @Prop({ reflect: true }) icon: string;

  /**
   * Icon type.
   *
   * @choice ionicons, caret
   */
  @Prop({ reflect: true }) type: string = 'ionicons';

  /** Icon size. */
  @Prop({ reflect: true }) size: string = '1em';

  @Prop({ reflect: true }) sizeMin: number = 0.8;

  @Prop({ reflect: true }) sizeMax: number = 1;

  /**
   * Styling.
   *
   * @choice default, fluid
   */
  @Prop({ reflect: true }) styling: string = 'default';

  @Prop({ reflect: true }) width: string;

  @Watch('color')
  @Watch('size')
  @Watch('sizeMax')
  @Watch('sizeMin')
  // @ts-ignore
  watchAttributes(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxIconDidLoad' })
  spxIconDidLoad: EventEmitter;

  componentWillLoad() {}

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['color', 'size', 'sizeMax', 'sizeMin'],
    });
    this.spxIconDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  render() {
    return (
      <div class="inner">
        {this.type === 'ionicons' ? (
          <ion-icon name={this.icon} class="icon" />
        ) : this.type === 'caret' ? (
          <i class="icon">▼</i>
        ) : (
          this.type === 'loader' && (
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="icon loader"
            >
              <path
                fill="currentColor"
                d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
              />
            </svg>
          )
        )}
      </div>
    );
  }
}
