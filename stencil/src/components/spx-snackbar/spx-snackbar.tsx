import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  Element,
  State,
  Method,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css, keyframes } from '@emotion/css';
import * as s from '../../constants/style';
import { position } from '../../constants/style';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setVarOrClamp } from '../../utils/setVarOrClamp';

const tag = 'spx-snackbar';

/**
 * Notification bars with a variety of options.
 * Great for success or failure messages.
 * In default mode, the snackbar will fade out and remove itself from the DOM.
 */

@Component({
  tag: 'spx-snackbar',
})
export class SpxSnackbar {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSnackbarElement;

  @State() containerClass;
  @State() positionArray;

  @Prop({ reflect: true }) animationDelay: string = '200ms';

  @Prop({ reflect: true }) animationDuration: string = '2000ms';

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  @Prop({ reflect: true }) border: string;

  @Prop({ reflect: true }) borderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) classButton: string;

  @Prop({ reflect: true }) classText: string;

  /** Adds option to close snackbar after its creation. */

  @Prop({ reflect: true }) closeable: boolean;

  @Prop({ reflect: true }) color: string = '#ffffff';

  /**
   * Distance to the edge of the viewport on the x-axis.
   * @CSS
   */

  @Prop({ reflect: true }) distanceX: string = '1em';

  /**
   * Distance to the edge of the viewport on the y-axis.
   * @CSS
   */

  @Prop({ reflect: true }) distanceY: string = '1em';

  /**
   * Makes snackbar not removable.
   * @editor '#components'
   */

  @Prop({ reflect: true }) fixed: boolean;

  @Prop({ reflect: true }) fontSize: string = '18px';

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  @Prop({ reflect: true }) fontSizeMax: number = 1.6;

  /**
   * Unique identifier for snackbar instance.
   * @editor '#components'
   */

  @Prop({ reflect: true }) identifier: string = 'primary';

  @Prop({ reflect: true }) padding: string = '1em';

  @Prop({ reflect: true }) paddingMin: number = 1;

  @Prop({ reflect: true }) paddingMax: number = 1.4;

  /**
   * Component position in page.
   * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
   */

  @Prop({ reflect: true }) position: string = 'bottom-right';

  /**
   * CSS property position of button.
   * @editor 'absolute'
   */

  @Prop({ reflect: true }) positionCss:
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'static' = 'fixed';

  /** Reverses the close button if "closable" prop is true. */

  @Prop({ reflect: true }) reverse: boolean;

  /** Space between snackbars. */

  @Prop({ reflect: true }) spaceBetween: string = '12px';

  /**
   * Styling.
   * @choice 'default', 'fluid', 'headless'
   */

  @Prop({ reflect: true }) styling: string = 'default';

  /**
   * Element where snackbars should be created in.
   * @editor '#components'
   */

  @Prop({ reflect: true }) target: string = 'body';

  /** Text inside snackbar. */

  @Prop({ reflect: true }) text: string = "Hello, I'm a snackbar.";

  @Prop({ reflect: true }) zIndex: number = 103;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSnackbarDidLoad' })
  spxSnackbarDidLoad: EventEmitter;

  @Watch('zIndex')
  @Watch('spaceBetween')
  @Watch('position')
  positionChanged() {
    this.createPositionArray();
    document.querySelector(
      '[data-spx-id="' + this.identifier + '"]'
    ).className = '';
    document
      .querySelector('[data-spx-id="' + this.identifier + '"]')
      .classList.add(
        css({
          ...position(
            'snackbar',
            this.positionArray,
            this.distanceX,
            this.distanceY
          ),
          position: this.positionCss,
          display: 'flex',
          flexDirection: 'column',
          zIndex: this.zIndex,

          'spx-snackbar + spx-snackbar': {
            marginTop: setVar(tag, 'space-Y', this.spaceBetween),
          },
        })
      );
  }

  componentWillLoad() {
    this.createPositionArray();

    /** Load into container if more than one snackbar are on screen. */

    if (!document.querySelector('[data-spx-id="' + this.identifier + '"]')) {
      const div = document.createElement('div');
      this.containerClass = {};
      div.classList.add(
        css({
          ...position(
            'snackbar',
            this.positionArray,
            this.distanceX,
            this.distanceY
          ),
          position: this.positionCss,
          display: 'flex',
          flexDirection: 'column',
          zIndex: this.zIndex,

          'spx-snackbar + spx-snackbar': {
            marginTop: setVar(tag, 'space-Y', this.spaceBetween),
          },
        })
      );
      div.setAttribute('data-spx-id', this.identifier);
      div.appendChild(this.el);
      const target = document.querySelector(this.target);
      target.appendChild(div);
    } else {
      document
        .querySelector('[data-spx-id="' + this.identifier + '"]')
        .appendChild(this.el);
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.spxSnackbarDidLoad.emit({ target: 'document' });
  }

  componentDidRender() {
    const removeItem = () => {
      const el = this.el;
      el.remove();
    };

    /** Remove snackbar from dom after 5 seconds. */

    if (!this.fixed) {
      setTimeout(
        removeItem,
        parseInt(this.animationDuration.replace('ms', ''))
      );
    }
  }

  private createPositionArray() {
    this.positionArray = this.position.split('-');
  }

  private removeItem = () => {
    const container = document.querySelector('#spx-snackbar-container');
    if (container) {
      container.remove();
    } else {
      const el = this.el;
      el.remove();
    }
  };

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Animation in and out. */

    const kfOut = keyframes({
      '0%, 100%': {
        opacity: 0,
      },
      '30%, 80%': {
        opacity: 1,
      },
    });

    /** Animation in. */

    const kfIn = keyframes({
      '0%': {
        opacity: 0,
      },
      '30%, 100%': {
        opacity: 1,
      },
    });

    /** Host styles. */

    const styleHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        display: 'flex',
        flexDirection: !this.reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: setVarOrClamp(
          tag,
          'padding',
          this.padding,
          this.paddingMin,
          this.paddingMax,
          this.styling
        ),
        paddingRight:
          (this.reverse || !this.closeable) &&
          setVarOrClamp(
            tag,
            'padding',
            this.padding,
            this.paddingMin,
            this.paddingMax,
            this.styling
          ),
        paddingBottom: setVarOrClamp(
          tag,
          'padding',
          this.padding,
          this.paddingMin,
          this.paddingMax,
          this.styling
        ),
        paddingLeft:
          this.closeable && this.reverse
            ? 0
            : setVarOrClamp(
                tag,
                'padding',
                this.padding,
                this.paddingMin,
                this.paddingMax,
                this.styling
              ),
        opacity: 0,
        color: setVar(tag, 'color', this.color),
        background: setVar(tag, 'background', this.background),
        border: setVar(tag, 'border', this.border),
        borderRadius: setVar(tag, 'border-radius', this.borderRadius),
        animation: !this.fixed ? kfOut : kfIn,
        animationDelay: setVar(tag, 'animation-delay', this.animationDelay),
        animationDuration: setVar(
          tag,
          'animation-duration',
          this.animationDuration
        ),
        animationFillMode: 'forwards',
      });

    /** Button styles. */

    const styleButton =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            padding: '0 ' + setVar(tag, 'padding', this.padding) + '',
            width: '0.7em',
            opacity: '0.3',
            boxSizing: 'content-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })
        : this.classButton;

    /** Text styles. */

    const styleText =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            whiteSpace: 'nowrap',
            fontFamily: s.fontFamily,
            fontSize: setVarOrClamp(
              tag,
              'font-size',
              this.fontSize,
              this.fontSizeMin,
              this.fontSizeMax,
              this.styling
            ),
          })
        : this.classText;

    return (
      <Host class={styleHost}>
        {/** Close button. */}

        {this.closeable && (
          <div role="button" onClick={this.removeItem} class={styleButton}>
            <spx-icon icon="close" />
          </div>
        )}

        {/** Text. */}

        <span class={styleText}>{this.text ? this.text : <slot />}</span>
      </Host>
    );
  }
}
