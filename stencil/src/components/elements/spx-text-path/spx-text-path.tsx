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
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import 'ionicons/dist/index';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';

const tag = 'spx-text-path';

/**
 * Write text along a predefined path.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-text-path',
  shadow: true,
})
export class SpxTextPath {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTextPathElement;

  @Prop({ reflect: true }) display: string = 'block';

  /** Space between text and path. */
  @Prop({ reflect: true }) spaceBetween: string = '-2%';

  /** Starting offset off the text. */
  @Prop({ reflect: true }) startOffset: string = '25%';

  /** Text to be shown. */
  @Prop({ reflect: true }) text: string;

  @Prop({ reflect: true }) textColor: string;

  @Prop({ reflect: true }) textFontWeight: string;

  /** Text size. */
  @Prop({ reflect: true }) textFontSize: string = 'clamp(20px, 3vw, 24px)';

  /** Text transform. */
  @Prop({ reflect: true }) textTransform: string = 'default';

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTextPathDidLoad' })
  spxTextPathDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

    this.el.shadowRoot
      .querySelector('foreignObject')
      .setAttribute('height', '100%');
    this.el.shadowRoot
      .querySelector('foreignObject')
      .setAttribute('width', '100%');

    this.spxTextPathDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    /** Slot styles. */
    const styleSlot = css({
      display: 'relative',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      clipPath: 'path("M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z")',
    });

    /** Slot styles. */
    const styleTextPath = css({
      textTransform: setVar(tag, 'text-transform', this.textTransform) as any,
      fontWeight: setVar(tag, 'text-font-weight', this.textFontWeight) as any,
      fontSize: setVar(tag, 'text-font-size', this.textFontSize),
    });

    return (
      <Host class={styleHost}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="circlePath"
              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            />
            <path
              id="circlePathInner"
              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            />
          </defs>
          <foreignObject x="0" y="0" height={0} width={0}>
            <div class={styleSlot}>
              <slot />
            </div>
          </foreignObject>
          <use xlinkHref="#circlePathInner" fill="none" />
          <text
            dy={this.spaceBetween}
            class={styleTextPath}
            fill={this.textColor}
          >
            <textPath startOffset={this.startOffset} xlinkHref="#circlePath">
              {this.text}
            </textPath>
          </text>
        </svg>
      </Host>
    );
  }
}
