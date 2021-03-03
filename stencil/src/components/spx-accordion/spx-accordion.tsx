import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css } from '@emotion/css';
import * as s from '../../constants/style';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { tagSelector } from '../../utils/tagSelector';
import { setVarOrClamp } from '../../utils/setVarOrClamp';

const tag = 'spx-accordion';

/**
 * The classic method to show and hide elements on your website.
 * Can be used with custom markup for the header and/or content section.
 * @slot content - Slot for the content.
 * @slot header - Slot for the header.
 */

@Component({
  tag: 'spx-accordion',
})
export class SpxAccordion {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxAccordionElement;
  private content: HTMLElement;

  @State() contentCustom: boolean;
  @State() headerCustom: boolean;
  @State() headerHeight;

  @Prop({ reflect: true }) classContent: string;

  @Prop({ reflect: true }) classContentActive: string;

  @Prop({ reflect: true }) classContentInactive: string;

  @Prop({ reflect: true }) classContentText: string;

  @Prop({ reflect: true }) classContentTextActive: string;

  @Prop({ reflect: true }) classContentTextInactive: string;

  @Prop({ reflect: true }) classHeader: string;

  @Prop({ reflect: true }) classHeaderActive: string;

  @Prop({ reflect: true }) classHeaderInactive: string;

  @Prop({ reflect: true }) classHeaderText: string;

  @Prop({ reflect: true }) classHeaderTextActive: string;

  @Prop({ reflect: true }) classHeaderTextInactive: string;

  @Prop({ reflect: true }) classHeaderIcon: string;

  @Prop({ reflect: true }) classHeaderIconActive: string;

  @Prop({ reflect: true }) classHeaderIconInactive: string;

  @Prop({ reflect: true }) classHeaderIconContainer: string;

  @Prop({ reflect: true }) classHeaderIconContainerActive: string;

  @Prop({ reflect: true }) classHeaderIconContainerInactive: string;

  @Prop({ reflect: true }) contentColor: string = 'var(--spx-color-gray-900)';

  /** Content text. */

  @Prop({ reflect: true }) contentText: string = 'Default Content Text';

  /** Content text tag. */

  @Prop({ reflect: true }) contentTextTag: string = 'span';

  @Prop({ reflect: true }) contentTransitionDuration: string =
    s.transitionDuration;

  @Prop({ reflect: true }) contentTransitionTimingFunction: string =
    s.transitionTimingFunction;

  /**
   * Disables the animation.
   * Set this attribute if the accordion is starting hidden in the DOM.
   */

  @Prop({ reflect: true }) disableAnimation: boolean;

  @Prop({ reflect: true }) fontSize: string = s.fontSize;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  @Prop({ reflect: true }) fontSizeMax: number = 1.2;

  /**
   * Space between header and content.
   * @CSS
   */

  @Prop({ reflect: true }) gap: string = '0.4em';

  @Prop({ reflect: true }) gapMin: number = 1;

  @Prop({ reflect: true }) gapMax: number = 1.2;

  @Prop({ reflect: true }) headerColor: string = 'var(--spx-color-gray-900)';

  /**
   * Gap between header text and icon.
   * @CSS
   */

  @Prop({ reflect: true }) headerGap: string = '0.4em';

  @Prop({ reflect: true }) headerGapMin: number = 0.6;

  @Prop({ reflect: true }) headerGapMax: number = 1;

  /** Header text. */

  @Prop({ reflect: true }) headerText: string = 'Default Header Text';

  /** Header text when component is closed. */

  @Prop({ reflect: true }) headerTextOpen: string;

  /** Header text tag. */

  @Prop({ reflect: true }) headerTextTag: string = 'span';

  /** Indicator icon. */

  @Prop({ reflect: true }) indicatorIcon: string = 'arrow-down';

  /** Indicator icon type. */

  @Prop({ reflect: true }) indicatorIconType: string = 'ionicons';

  /** Indicator icon transform. */

  @Prop({ reflect: true }) indicatorIconTransform: string = 'rotate(180deg)';

  /** Sets the ID to link different accordions together. */

  @Prop({ reflect: true }) link: string;

  /**
   * Sets the type of link.
   * @choice 'open', 'close', 'toggle'
   */

  @Prop({ reflect: true }) linkType: string;

  /** State of accordion. */

  // prettier-ignore
  @Prop({ reflect: true, attribute: 'open' }) openState: boolean = false;

  /** Reverse icon positioning. */

  @Prop({ reflect: true }) reverse: boolean;

  /**
   * Styling.
   * @choice 'default', 'fluid', 'headless'
   */

  @Prop({ reflect: true }) styling: string = 'default';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxAccordionDidLoad' })
  spxAccordionDidLoad: EventEmitter;

  @Listen('keydown')
  onKeydown(e) {
    if (e.key === 'Enter') {
      this.clickHeader();
    }
  }

  componentWillLoad() {
    /** Turn animation off if linked, since height can't be calculated otherwise. */

    if (this.link) {
      this.disableAnimation = true;
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    if (this.el.querySelector('[slot="header"]')) {
      this.headerCustom = true;
    }

    if (this.el.querySelector('[slot="content"]')) {
      this.contentCustom = true;
    }

    this.spxAccordionDidLoad.emit({ target: 'document' });
  }

  /** Header is clicked. */

  private clickHeader = () => {
    /** Handle linked instances. */

    if (this.link) {
      document
        .querySelectorAll('spx-accordion[link="' + this.link + '"]')
        .forEach((item) => {
          /** Make sure not to toggle current element. */

          if (item !== this.el) {
            if (this.linkType === 'open') {
              item.setAttribute('open', '');
            }
            if (this.linkType === 'close') {
              item.removeAttribute('open');
            }
            if (this.linkType === 'toggle') {
              if (item.hasAttribute('open')) {
                item.removeAttribute('open');
              } else {
                item.setAttribute('open', '');
              }
            }
          }
        });
    }

    /** Set the correct heights.. */

    if (this.openState) {
      if (!this.disableAnimation) {
        this.content.style.maxHeight = null;
      }
      this.openState = false;
    } else {
      if (!this.disableAnimation) {
        this.content.style.maxHeight = this.content.scrollHeight + 'px';
      }
      this.openState = true;
    }
  };

  /** Closes the accordion. */

  @Method()
  async close() {
    this.openState = false;
  }

  /** Opens the accordion. */

  @Method()
  async open() {
    this.openState = true;
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  /** Toggles the accordion. */

  @Method()
  async toggle() {
    this.openState = !this.openState;
  }

  render() {
    /** Host styles. */

    const styleHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      css({
        fontFamily: s.fontFamily,
        fontSize: setVarOrClamp(
          tag,
          'font-size',
          this.fontSize,
          this.fontSizeMin,
          this.fontSizeMax,
          this.styling
        ),
        display: 'flex',
        flexDirection: 'column',
      });

    /** Header styles. */

    const styleHeader =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: this.reverse ? '1fr auto' : 'auto 1fr',
            alignItems: 'center',
            gridColumnGap: setVarOrClamp(
              tag,
              'header-gap',
              this.headerGap,
              this.headerGapMin,
              this.headerGapMax,
              this.styling
            ),
            cursor: 'pointer',

            'h1, h2, h3, h4, h5, h6, p, span': {
              color: setVar(tag, 'header-color', this.headerColor),
            },

            '*:not([slot])': {
              margin: '0',
            },
          })
        : this.openState
        ? this.classHeader + ' ' + this.classHeaderActive
        : this.classHeader + ' ' + this.classHeaderInactive;

    /** Header custom styles. */

    const styleHeaderIcon =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformOrigin: 'center center',
            gridColumn: this.reverse && '2',
            transform:
              this.openState &&
              setVar(
                tag,
                'indicator-icon-transform',
                this.indicatorIconTransform
              ),
            color: setVar(tag, 'header-color', this.headerColor),
          })
        : this.openState
        ? this.classHeaderIcon + ' ' + this.classHeaderIconActive
        : this.classHeaderIcon + ' ' + this.classHeaderIconInactive;

    /** Content styles. */

    const styleContent =
      this.styling === 'default' || this.styling === 'fluid'
        ? css({
            display:
              this.disableAnimation && this.openState
                ? 'block'
                : this.disableAnimation && !this.openState && 'none',
            marginTop: this.openState
              ? setVarOrClamp(
                  tag,
                  'gap',
                  this.gap,
                  this.gapMin,
                  this.gapMax,
                  this.styling
                )
              : 0,
            maxHeight: this.disableAnimation ? 'none' : '0',
            overflow: 'hidden',
            height: this.disableAnimation && 'auto',
            transitionProperty: 'max-height, margin-top',
            willChange: 'max-height, margin-top',
            transitionDuration: setVar(
              tag,
              'transition-duration',
              this.contentTransitionDuration
            ),
            transitionTimingFunction: setVar(
              tag,
              'transition-timing-function',
              this.contentTransitionTimingFunction
            ),

            'h1, h2, h3, h4, h5, h6, p, span:not(.token)': {
              color: setVar(tag, 'content-color', this.contentColor),
            },
          })
        : this.openState
        ? this.classContent + ' ' + this.classContentActive
        : this.classContentActive + ' ' + this.classContentInactive;

    return (
      <Host class={styleHost}>
        {/** Header. */}

        <div
          tabindex="0"
          role="button"
          aria-pressed={this.openState ? 'true' : 'false'}
          onClick={this.clickHeader}
          class={!this.headerCustom && styleHeader}
        >
          {/** Header custom. */}

          {!this.headerCustom && (
            <div class={styleHeaderIcon}>
              {this.indicatorIcon && this.indicatorIconType && (
                <spx-icon
                  icon={this.indicatorIcon}
                  type={this.indicatorIconType}
                />
              )}
            </div>
          )}
          {this.headerTextOpen && this.openState
            ? tagSelector(
                !this.headerCustom,
                this.headerTextTag,
                this.headerTextOpen,
                'header',
                this.styling === 'headless' && this.openState
                  ? this.classHeaderText + ' ' + this.classHeaderTextActive
                  : this.styling === 'headless' &&
                      this.classHeaderText + ' ' + this.classHeaderTextInactive
              )
            : tagSelector(
                !this.headerCustom,
                this.headerTextTag,
                this.headerText,
                'header',
                this.styling === 'headless' && this.openState
                  ? this.classHeaderText + ' ' + this.classHeaderTextActive
                  : this.styling === 'headless' &&
                      this.classHeaderText + ' ' + this.classHeaderTextInactive
              )}
        </div>

        {/** Content. */}

        <div
          class={styleContent}
          ref={(el) => (this.content = el as HTMLElement)}
        >
          {tagSelector(
            !this.contentCustom,
            this.contentTextTag,
            this.contentText,
            'content',
            this.styling === 'headless' && this.openState
              ? this.classContentText + ' ' + this.classContentTextActive
              : this.styling === 'headless' &&
                  this.classContentText + ' ' + this.classContentTextInactive
          )}
        </div>
      </Host>
    );
  }
}
