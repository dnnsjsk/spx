import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  Element,
  State,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import * as s from '../../../constants/style';
import { position } from '../../../constants/style';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { setStyle } from '../../../utils/cssVariables/setStyle';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { cssTw } from '../../../utils/css/cssTw';
import { Button } from '../../../elements/Button';

const tag = 'spx-snackbar';

/**
 * Notification bars with a variety of options. Great for success or failure
 * messages. In default mode, the snackbar will fade out and remove itself from the DOM.
 */
@Component({
  tag: 'spx-snackbar',
  shadow: true,
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

  @Prop({ reflect: true }) buttonBackground: string =
    'var(--spx-color-gray-700)';

  @Prop({ reflect: true }) buttonBackgroundHover: string =
    'var(--spx-color-gray-800)';

  @Prop({ reflect: true }) buttonTransitionDuration: string =
    s.transitionDuration;

  @Prop({ reflect: true }) buttonTransitionTimingFunction: string =
    s.transitionTimingFunction;

  @Prop({ reflect: true }) classButton: string;

  @Prop({ reflect: true }) classText: string;

  /** Adds option to close snackbar after its creation. */
  @Prop({ reflect: true }) closeable: boolean;

  @Prop({ reflect: true }) color: string = '#ffffff';

  @Prop({ reflect: true }) display: string = s.display;

  /**
   * Distance to the edge of the viewport on the x-axis.
   *
   * @CSS
   */
  @Prop({ reflect: true }) distanceX: string = '1em';

  /**
   * Distance to the edge of the viewport on the y-axis.
   *
   * @CSS
   */
  @Prop({ reflect: true }) distanceY: string = '1em';

  /**
   * Makes snackbar not removable.
   */
  @Prop({ reflect: true }) fixed: boolean;

  @Prop({ reflect: true }) fontSize: string = '18px';

  @Prop({ reflect: true }) fontSizeMax: number = 1.6;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  /**
   * Unique identifier for snackbar instance.
   */
  @Prop({ reflect: true }) identifier: string = 'primary';

  @Prop({ reflect: true }) padding: string = '0.8em';

  @Prop({ reflect: true }) paddingMin: number = 1;

  @Prop({ reflect: true }) paddingMax: number = 1.4;

  /**
   * Component position in page.
   *
   * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
   */
  @Prop({ reflect: true }) position: string = 'bottom-right';

  /** CSS property position of button. */
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
   *
   * @choice 'default', 'fluid', 'headless'
   */
  @Prop({ reflect: true }) styling: string = 'default';

  /** Element where snackbars should be created in. */
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
        cssHost({
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
        cssHost({
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
    globalComponentDidLoad({ el: this.el });

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

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private createPositionArray = () => {
    this.positionArray = this.position.split('-');
  };

  private removeItem = () => {
    const container = document.querySelector('#spx-snackbar-container');
    if (container) {
      container.remove();
    } else {
      const el = this.el;
      el.remove();
    }
  };

  render() {
    const { css, keyframes } = cssEmotion(this.el.shadowRoot);
    const { tw } = cssTw(this.el.shadowRoot);

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
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        overflow: 'hidden',
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'max-content',
        alignItems: 'center',
        userSelect: 'none',
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
            gridColumn: this.reverse && '1',
            padding: '0 ' + setVar(tag, 'padding', this.padding) + '',
            background: setVar(tag, 'button-background', this.buttonBackground),
            width: '1em',
            boxSizing: 'content-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderBottomLeftRadius:
              this.reverse && setVar(tag, 'border-radius', this.borderRadius),
            borderTopLeftRadius:
              this.reverse && setVar(tag, 'border-radius', this.borderRadius),
            borderTopRightRadius:
              !this.reverse && setVar(tag, 'border-radius', this.borderRadius),
            borderBottomRightRadius:
              !this.reverse && setVar(tag, 'border-radius', this.borderRadius),
            transitionProperty: 'background, box-shadow',
            transitionDuration: setVar(
              tag,
              'button-transition-duration',
              this.buttonTransitionDuration
            ),
            transitionTimingFunction: setVar(
              tag,
              'button-transition-timing-function',
              this.buttonTransitionTimingFunction
            ),

            '&:hover': {
              background: setVar(
                tag,
                'button-background-hover',
                this.buttonBackgroundHover
              ),
            },

            ...s.focus,
          })
        : tw(this.classButton ?? '');

    /** Text styles. */
    const styleText =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            gridColumn: this.reverse && '2',
            whiteSpace: 'nowrap',
            fontFamily: s.fontFamily,
            fontSize: setStyle(
              tag,
              'font-size',
              this.fontSize,
              this.fontSizeMin,
              this.fontSizeMax,
              this.styling
            ),
            padding: setStyle(
              tag,
              'padding',
              this.padding,
              this.paddingMin,
              this.paddingMax,
              this.styling
            ),
          })
        : tw(this.classText ?? '');

    return (
      <Host class={styleHost}>
        <div class={styleShadowHost}>
          {/** Text. */}
          <span class={styleText}>{this.text ? this.text : <slot />}</span>

          {/** Close button. */}
          {this.closeable && (
            <Button onClick={this.removeItem} class={styleButton}>
              <spx-icon size="1.25em" icon="close" />
            </Button>
          )}
        </div>
      </Host>
    );
  }
}
