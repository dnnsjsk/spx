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
} from '@stencil/core';
import { css } from 'emotion';
import * as c from '../../constants/style';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { tagSelector } from '../../utils/tagSelector';

const tag = 'spx-accordion';

/**
 * Accordions are the classic method to show and hide elements on your website.
 * @slot content - Content.
 * @slot header - Header.
 * @slot icon - Icon.
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
  @State() open: boolean = false;
  @State() headerHeight;

  @Prop({ reflect: true }) contentColor: string = 'var(--spx-color-gray-900)';

  /** Content text. */

  @Prop({ reflect: true }) contentText: string = 'Default Content Text';

  /** Content text tag. */

  @Prop({ reflect: true }) contentTextTag: string = 'span';

  @Prop({ reflect: true }) contentTransitionDuration: string =
    c.transitionDuration;

  @Prop({ reflect: true }) contentTransitionTimingFunction: string =
    c.transitionTimingFunction;

  @Prop({ reflect: true }) fontSize: string = c.fontSize;

  /**
   * Space between header and content.
   * @CSS
   */

  @Prop({ reflect: true }) gap: string = '0.4em';

  @Prop({ reflect: true }) headerColor: string = 'var(--spx-color-gray-900)';

  /**
   * Gap between header text and icon.
   * @CSS
   */

  @Prop({ reflect: true }) headerGap: string = '0.4em';

  /** Header text. */

  @Prop({ reflect: true }) headerText: string = 'Default Header Text';

  /** Header text tag. */

  @Prop({ reflect: true }) headerTextTag: string = 'span';

  /** Indicator icon. */

  @Prop({ reflect: true }) indicatorIcon: string = 'arrow-down';

  /** Indicator icon type. */

  @Prop({ reflect: true }) indicatorIconType: string = 'ionicons';

  /** Indicator icon transform. */

  @Prop({ reflect: true }) indicatorIconTransform: string = 'rotate(180deg)';

  @Listen('keydown')
  onKeydown(e) {
    if (e.keyCode === 13) {
      this.clickHeader();
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
  }

  /** Toggle content. */

  private clickHeader = () => {
    if (this.open === true) {
      this.content.style.maxHeight = null;
      this.open = false;
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
      this.open = true;
    }
  };

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      fontFamily: c.fontFamily,
      fontSize: setVar(tag, 'font-size', this.fontSize),
      display: 'flex',
      flexDirection: 'column',
    });

    /** Header styles. */

    const styleHeader = css({
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'max-content',
      gridColumnGap: setVar(tag, 'header-gap', this.headerGap),
      cursor: 'pointer',

      'h1, h2, h3, h4, h5, h6, p, span': {
        color: setVar(tag, 'header-color', this.headerColor),
      },

      '*:not([slot])': {
        margin: '0',
      },
    });

    /** Header custom styles. */

    const styleHeaderCustom = css({
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transformOrigin: 'center center',
      transform:
        this.open &&
        setVar(tag, 'indicator-icon-transform', this.indicatorIconTransform),
      color: setVar(tag, 'header-color', this.headerColor),
    });

    const styleContent = css({
      marginTop: this.open ? setVar(tag, 'gap', this.gap) : 0,
      maxHeight: '0',
      overflow: 'hidden',
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

      'h1, h2, h3, h4, h5, h6, p, span': {
        color: setVar(tag, 'content-color', this.contentColor),
      },
    });

    return (
      <Host class={styleHost}>
        {/** Header. */}

        <div
          tabindex="0"
          role="button"
          aria-pressed={this.open ? 'true' : 'false'}
          onClick={this.clickHeader}
          class={styleHeader}
        >
          {/** Header custom. */}

          {!this.headerCustom && (
            <div class={styleHeaderCustom}>
              {this.indicatorIcon && this.indicatorIconType && (
                <spx-icon
                  icon={this.indicatorIcon}
                  type={this.indicatorIconType}
                />
              )}
            </div>
          )}
          {tagSelector(
            !this.headerCustom,
            this.headerTextTag,
            this.headerText,
            'header'
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
            'content'
          )}
        </div>
      </Host>
    );
  }
}
