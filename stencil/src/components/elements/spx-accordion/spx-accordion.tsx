import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Method,
  Prop,
  State,
  Event,
  Watch,
  EventEmitter,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { tagSelector } from '../../../utils/dom/tagSelector';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { twind } from '../../../utils/3rd/twind';
import { Button } from '../../../elements/Button';
import { getDoc } from '../../../utils/dom/getDoc';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-accordion';

/**
 * The classic method to show and hide elements on your website. Can be used
 * with custom markup for the header and/or content section.
 *
 * @slot content - Slot for the content.
 * @slot header - Slot for the header.
 */
@Component({
  tag: 'spx-accordion',
  styleUrl: 'spx-accordion.scss',
  shadow: true,
})
export class SpxAccordion {
  private content: HTMLElement;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxAccordionElement;

  @State() contentCustom: boolean;
  @State() disableAnimation: boolean;
  @State() headerCustom: boolean;
  @State() height;

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

  /** @css */
  @Prop({ reflect: true }) contentColor: string = 'var(--spx-color-gray-900)';

  /** Content text. */
  @Prop({ reflect: true }) contentText: string = 'Default Content Text';

  /** Content text tag. */
  @Prop({ reflect: true }) contentTextTag: string = 'span';

  /** @css */
  @Prop({ reflect: true }) contentFontSize: string = 'var(--spx-font-size)';

  /** @css */
  @Prop({ reflect: true }) contentFontSizeMax: number = 1.2;

  /** @css */
  @Prop({ reflect: true }) contentFontSizeMin: number = 1;

  /**
   * Space between header and content.
   *
   * @css
   */
  @Prop({ reflect: true }) gap: string = '0.4em';

  /** @css */
  @Prop({ reflect: true }) gapMax: number = 1.2;

  /** @css */
  @Prop({ reflect: true }) gapMin: number = 1;

  /** @css */
  @Prop({ reflect: true }) headerColor: string = 'var(--spx-color-gray-900)';

  /** @css */
  @Prop({ reflect: true }) headerFontSize: string = 'var(--spx-font-size)';

  /** @css */
  @Prop({ reflect: true }) headerFontSizeMax: number = 1.2;

  /** @css */
  @Prop({ reflect: true }) headerFontSizeMin: number = 1;

  /**
   * Gap between header text and icon.
   *
   * @css
   */
  @Prop({ reflect: true }) headerGap: string = '0.4em';

  /** @css */
  @Prop({ reflect: true }) headerGapMax: number = 1;

  /** @css */
  @Prop({ reflect: true }) headerGapMin: number = 0.6;

  /** Header text. */
  @Prop({ reflect: true }) headerText: string = 'Default Header Text';

  /** Header text when component is closed. */
  @Prop({ reflect: true }) headerTextOpen: string;

  /** Header text tag. */
  @Prop({ reflect: true }) headerTextTag: string = 'span';

  /** Icon. */
  @Prop({ reflect: true }) icon: string = 'arrow-down';

  /** Icon type. */
  @Prop({ reflect: true }) iconType: string = 'ionicons';

  /**
   * Icon transform.
   *
   * @css
   */
  @Prop({ reflect: true }) iconTransform: string = 'rotate(180deg)';

  /** Sets the ID to link different accordions together. */
  @Prop({ reflect: true }) link: string;

  /**
   * Sets the type of link.
   *
   * @choice open, close, toggle
   */
  @Prop({ reflect: true }) linkType: string = 'open';

  /** State of accordion. */
  // eslint-disable-next-line @stencil/decorators-style
  @Prop({ reflect: true, attribute: 'open', mutable: true })
  openState: boolean = false;

  /** Reverse icon positioning. */
  @Prop({ reflect: true }) reverse: boolean;

  /**
   * Styling.
   *
   * @choice default, fluid, headless
   */
  @Prop({ reflect: true }) styling: string = 'default';

  @Watch('contentColor')
  @Watch('contentFontSize')
  @Watch('contentFontSizeMax')
  @Watch('contentFontSizeMin')
  @Watch('gap')
  @Watch('gapMax')
  @Watch('gapMin')
  @Watch('headerColor')
  @Watch('headerFontSize')
  @Watch('headerFontSizeMax')
  @Watch('headerFontSizeMin')
  @Watch('headerGap')
  @Watch('headerGapMax')
  @Watch('headerGapMin')
  @Watch('iconTransform')
  // @ts-ignore
  watchAttributes(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxAccordionDidLoad' })
  spxAccordionDidLoad: EventEmitter;

  componentWillLoad() {
    if (this.el.querySelector('[slot="header"]')) {
      this.headerCustom = true;
    }

    if (this.el.querySelector('[slot="content"]')) {
      this.contentCustom = true;
    }
  }

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'contentColor',
        'contentFontSize',
        'contentFontSizeMax',
        'contentFontSizeMin',
        'gap',
        'gapMax',
        'gapMin',
        'headerColor',
        'headerFontSize',
        'headerFontSizeMax',
        'headerFontSizeMin',
        'headerGap',
        'headerGapMax',
        'headerGapMin',
        'iconTransform',
      ],
    });
    this.spxAccordionDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    this.getHeight();
    globalComponentWillUpdate(this.el);
  }

  private getHeight = () => {
    this.height = this.content.scrollHeight + 'px';
  };

  private clickHeader = () => {
    if (this.link) {
      getDoc(this.el)
        .querySelectorAll('spx-accordion[link="' + this.link + '"]')
        .forEach((item) => {
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

    this.getHeight();
    this.openState = !this.openState;
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

  /** Toggles the accordion. */
  @Method()
  async toggle() {
    this.openState = !this.openState;
  }

  render() {
    const { tw } = twind(this.el.shadowRoot, this.styling === 'headless');

    const styleHeader =
      this.styling === 'headless' && this.openState
        ? tw(this.classHeader ?? '') + ' ' + tw(this.classHeaderActive ?? '')
        : this.styling === 'headless' &&
          tw(this.classHeader ?? '') + ' ' + tw(this.classHeaderInactive ?? '');

    const styleHeaderIcon =
      this.styling === 'headless' && this.openState
        ? tw(this.classHeaderIcon ?? '') +
          ' ' +
          tw(this.classHeaderIconActive ?? '')
        : this.styling === 'headless' &&
          tw(this.classHeaderIcon ?? '') +
            ' ' +
            tw(this.classHeaderIconInactive ?? '');

    const styleContent =
      this.styling === 'headless' && this.openState
        ? tw(this.classContent ?? '') + ' ' + tw(this.classContentActive ?? '')
        : this.styling === 'headless' &&
          tw(this.classContentActive ?? '') +
            ' ' +
            tw(this.classContentInactive ?? '');

    return (
      <div class="inner">
        <Button
          as="div"
          onClick={this.clickHeader}
          onEnter={this.clickHeader}
          class={
            this.styling === 'headless'
              ? styleHeader
              : this.headerCustom
              ? ''
              : 'header'
          }
          aria-expanded={this.openState ? 'true' : 'false'}
        >
          {!this.headerCustom && (
            <div
              class={
                this.styling === 'headless' ? styleHeaderIcon : 'header-icon'
              }
            >
              {this.icon && this.iconType && (
                <spx-icon icon={this.icon} type={this.iconType} />
              )}
            </div>
          )}
          {tagSelector(
            !this.headerCustom,
            this.headerTextTag,
            this.headerTextOpen && this.openState
              ? this.headerTextOpen
              : this.headerText,
            'header',
            this.styling === 'headless' && this.openState
              ? tw(this.classHeaderText ?? '') +
                  ' ' +
                  tw(this.classHeaderTextActive ?? '')
              : this.styling === 'headless' &&
                  tw(this.classHeaderText ?? '') +
                    ' ' +
                    tw(this.classHeaderTextInactive ?? '')
          )}
        </Button>
        <div
          class={this.styling === 'headless' ? styleContent : 'content'}
          ref={(el) => (this.content = el as HTMLElement)}
        >
          {tagSelector(
            !this.contentCustom,
            this.contentTextTag,
            this.contentText,
            'content',
            this.styling === 'headless' && this.openState
              ? tw(this.classContentText ?? '') +
                  ' ' +
                  (this.classContentTextActive ?? '')
              : this.styling === 'headless' &&
                  tw(this.classContentText ?? '') +
                    ' ' +
                    (this.classContentTextInactive ?? '')
          )}
        </div>
      </div>
    );
  }
}
