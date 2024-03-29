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
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-text-path';

/**
 * Write text along a predefined path.
 *
 * @slot inner - Slot (between HTML tag).
 */
@Component({
  tag: 'spx-text-path',
  styleUrl: 'spx-text-path.scss',
  shadow: true,
})
export class SpxTextPath {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxTextPathElement;

  /** Space between text and path. */
  @Prop({ reflect: true }) gap: string = '-2%';

  /** Image src. */
  @Prop({ reflect: true }) src: string;

  /** Starting offset off the text. */
  @Prop({ reflect: true }) startOffset: string = '25%';

  /** Text to be shown. */
  @Prop({ reflect: true }) text: string;

  /** @css */
  @Prop({ reflect: true }) textColor: string = '#000000';

  /** @css */
  @Prop({ reflect: true }) textFontWeight: string;

  /**
   * Text size.
   *
   * @css
   */
  @Prop({ reflect: true }) textFontSize: string = 'clamp(20px, 3vw, 24px)';

  /**
   * Text transform.
   *
   * @css
   */
  @Prop({ reflect: true }) textTransform: string = 'default';

  @Watch('textColor')
  @Watch('textFontWeight')
  @Watch('textFontSize')
  @Watch('textTransform')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxTextPathDidLoad' })
  spxTextPathDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['textColor', 'textFontWeight', 'textFontSize', 'textTransform'],
    });
    this.spxTextPathDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  render() {
    return (
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
          <pattern
            id="img"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image href={this.src} x="0" y="0" width="100%" height="100%" />
          </pattern>
        </defs>
        <use xlinkHref="#circlePathInner" fill="url(#img)" />
        <text dy={this.gap} class="text-path">
          <textPath startOffset={this.startOffset} xlinkHref="#circlePath">
            {this.text}
          </textPath>
        </text>
      </svg>
    );
  }
}
