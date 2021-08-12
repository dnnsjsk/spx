import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../../utils/cssVariables/setVar';
import * as s from '../../../constants/style';
import { merge } from 'lodash-es';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { wrap } from '../../../utils/dom/wrap';
import { setClamp } from '../../../utils/cssVariables/setClamp';
import { setStyle } from '../../../utils/cssVariables/setStyle';
import { insertBefore } from '../../../utils/dom/insertBefore';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { slugify } from '../../../utils/strings/slugify';

const tag = 'spx-block-docs';

/**
 * Renders a documentation page similar to the one you are currently seeing
 * here. Every heading tag becomes a navigation entry, while navigation headings
 * get created by applying the "data-spx-docs-heading" attribute to the first h1
 * of a new section.
 *
 * @slot inner - Slot (between HTML tags).
 */
@Component({
  tag: 'spx-block-docs',
})
export class SpxBlockDocs {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxBlockDocsElement;
  private navigation: HTMLElement;
  private content: HTMLElement;

  @State() mobile: boolean;

  @Prop({ reflect: true }) bpMobile: number = 1024;

  @Prop({ reflect: true }) gap: string = '3em';

  @Prop({ reflect: true }) contentPadding: string;

  @Prop({ reflect: true }) contentPaddingYMin: number = 0;

  @Prop({ reflect: true }) contentPaddingYMax: number = 0;

  @Prop({ reflect: true }) navigationBackground: string;

  @Prop({ reflect: true }) navigationGap: string;

  @Prop({ reflect: true }) navigationGapMin: number = 0.2;

  @Prop({ reflect: true }) navigationGapMax: number = 0.4;

  @Prop({ reflect: true }) navigationHeadingTag: string = 'h1';

  @Prop({ reflect: true }) navigationHeightAdjust: string;

  @Prop({ reflect: true }) navigationLinkColor: string;

  @Prop({ reflect: true }) navigationLinkColorActive: string;

  @Prop({ reflect: true }) navigationLinkFontSize;

  @Prop({ reflect: true }) navigationLinkFontSizeMax: number = 1;

  @Prop({ reflect: true }) navigationLinkFontSizeMin: number = 0.8;

  @Prop({ reflect: true }) navigationLinkFontWeight: string = '500';

  @Prop({ reflect: true }) navigationLinkLetterSpacing: string = '0';

  @Prop({ reflect: true }) navigationLinkLineHeight: string = '1.25';

  @Prop({ reflect: true }) navigationLinkTextTransform: string = 'default';

  @Prop({ reflect: true }) navigationPaddingY: string;

  @Prop({ reflect: true }) navigationPaddingYMin: number = 0;

  @Prop({ reflect: true }) navigationPaddingYMax: number = 0;

  @Prop({ reflect: true }) navigationTitleColor: string;

  @Prop({ reflect: true }) navigationTitleFontSize;

  @Prop({ reflect: true }) navigationTitleFontSizeMax: number = 0.9;

  @Prop({ reflect: true }) navigationTitleFontSizeMin: number = 0.8;

  @Prop({ reflect: true }) navigationTitleFontWeight: string = '500';

  @Prop({ reflect: true }) navigationTitleLetterSpacing: string = '0';

  @Prop({ reflect: true }) navigationTitleLineHeight: string = '1.25';

  @Prop({ reflect: true }) navigationTitleTextTransform: string = 'uppercase';

  @Prop({ reflect: true }) navigationTitleMarginBottom: number = 1;

  @Prop({ reflect: true }) navigationTitleMarginBottomMin: number = 1;

  @Prop({ reflect: true }) navigationTitleMarginBottomMax: number = 2;

  @Prop({ reflect: true }) navigationTop: string = '0';

  @Prop({ reflect: true }) offsetMarginTop: string = '';

  /** Create a separator between sections. */
  @Prop({ reflect: true }) separator: string;

  /** Activates automatic navigation scrolling and sets the offset. */
  @Prop({ reflect: true }) scrolling: number;

  /**
   * Styling.
   *
   * @choice 'default', 'fluid'
   */
  @Prop({ reflect: true }) styling: string = 'fluid';

  @Prop({ reflect: true }) uniqueId: boolean;

  /** Listen to window resize. */
  @Listen('resize', { target: 'window' })
  onResize() {
    this.mobile = window.innerWidth < this.bpMobile;
  }

  /** Fires after component has loaded. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxDocsDidLoad' })
  spxDocsDidLoad: EventEmitter;

  componentWillLoad() {
    this.onResize();
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });
    this.createNavigation();

    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        document.querySelector(window.location.hash).scrollIntoView();
      }
    }

    this.spxDocsDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  /** Generates the navigation. */
  private createNavigation = () => {
    if (this.content.innerHTML !== '') {
      /** Create links from IDs. */
      this.content
        .querySelectorAll(
          this.navigationHeadingTag + ':not([data-spx-docs-no-navigation])'
        )
        .forEach((item, index) => {
          const link = slugify(item.innerHTML);
          const id = this.uniqueId ? link + '-' + index : link;
          const a = document.createElement('a');
          item.setAttribute('data-spx-docs-index', String(index));
          item.setAttribute('id', id);
          a.setAttribute('data-spx-docs-index', String(index));
          a.setAttribute('href', '#' + id);
          a.innerHTML = item.innerHTML;
          this.navigation.appendChild(a);
          wrap(a, document.createElement('li'));
        });

      /** Create headings and separators. */
      this.content
        .querySelectorAll(
          this.navigationHeadingTag +
            '[data-spx-docs-heading]:not([data-spx-docs-no-navigation])'
        )
        .forEach((item) => {
          const index = item.getAttribute('data-spx-docs-index');
          const span = document.createElement('span');
          const el = this.navigation.querySelector(
            '[data-spx-docs-index="' + index + '"]'
          ).parentElement;
          span.innerHTML = item.getAttribute('data-spx-docs-heading');
          this.navigation.insertBefore(span, el);

          if (this.separator && index !== '0') {
            const span = document.createElement(this.separator);
            span.setAttribute('data-spx-docs-separator', '');
            span.setAttribute(
              'data-spx-docs-content',
              item.getAttribute('data-spx-docs-heading')
            );
            span.innerHTML = item.getAttribute('data-spx-docs-heading');
            this.content.appendChild(span);
            insertBefore(span, item);
          }
        });

      this.el.querySelector('spx-scrollspy').reload();
    }
  };

  render() {
    /** Host. */
    const styleHost = css({
      display: this.mobile ? 'block' : 'grid',
      gridTemplateColumns: !this.mobile && 'minmax(0, auto) minmax(0, 1fr)',
      gap: setVar(tag, 'gap', this.gap),
      gridAutoFlow: 'column',
    });

    const styleNavigationWrap = css({
      display: this.mobile ? 'none' : 'block',
      background: setVar(
        tag,
        'navigation-background',
        this.navigationBackground
      ),
    });

    /** Navigation. */
    const styleNavigation = {
      position: 'sticky',
      top: setVar(tag, 'navigation-top', this.navigationTop),
      gridAutoRows: 'max-content',
      height: 'calc(100vh - ' + this.navigationTop + ')',
      paddingTop: setStyle(
        tag,
        'navigation-padding-y',
        this.navigationPaddingY,
        this.navigationPaddingYMin,
        this.navigationPaddingYMax,
        this.styling
      ),
      paddingBottom: setStyle(
        tag,
        'navigation-padding-y',
        this.navigationPaddingY,
        this.navigationPaddingYMin,
        this.navigationPaddingYMax,
        this.styling
      ),
      overflowY: 'auto',

      ul: {
        display: 'grid',
        gridGap: setStyle(
          tag,
          'navigation-gap',
          this.navigationGap,
          this.navigationGapMin,
          this.navigationGapMax,
          this.styling
        ),
      },

      a: {
        ...s.text(
          tag,
          'navigation-link',
          this.navigationLinkColor,
          this.navigationLinkFontSize,
          this.navigationLinkFontSizeMin,
          this.navigationLinkFontSizeMax,
          this.navigationLinkFontWeight,
          this.navigationLinkLetterSpacing,
          this.navigationLinkLineHeight,
          this.navigationLinkTextTransform,
          this.styling
        ),
        width: 'max-content',
        transitionProperty: 'color',
        transitionDuration: setVar(
          tag,
          'navigation-transition-duration',
          s.transitionDuration
        ),
        itemTransitionTimingFunction: setVar(
          tag,
          'navigation-transition-timing-function',
          s.transitionTimingFunction
        ),
      },

      li: {
        '&:last-of-type': {
          marginBottom: setStyle(
            tag,
            'navigation-padding-y',
            this.navigationPaddingY,
            this.navigationPaddingYMin,
            this.navigationPaddingYMax,
            this.styling
          ),
        },

        '&.spx-scrollspy__nav--active a': {
          color: setVar(
            tag,
            'navigation-link-color-active',
            this.navigationLinkColorActive
          ),
        },
      },

      span: {
        ...s.text(
          tag,
          'navigation-title',
          this.navigationTitleColor,
          this.navigationTitleFontSize,
          this.navigationTitleFontSizeMin,
          this.navigationTitleFontSizeMax,
          this.navigationTitleFontWeight,
          this.navigationTitleLetterSpacing,
          this.navigationTitleLineHeight,
          this.navigationTitleTextTransform,
          this.styling
        ),
      },

      'li + span': {
        display: 'block',
        marginTop: setStyle(
          tag,
          'navigation-title-margin-bottom',
          this.navigationTitleMarginBottom,
          this.navigationTitleMarginBottomMin,
          this.navigationTitleMarginBottomMax,
          this.styling
        ),
      },
    };

    /** Merge navigation objects to avoid emotion error. */
    const styleNavigationMerge = css(merge(styleNavigation, {}));

    /** Content. */
    const styleContent = {
      paddingTop: setVar(
        tag,
        'content-padding',
        setClamp(
          tag,
          'padding-y',
          this.contentPaddingYMin,
          this.contentPaddingYMax
        )
      ),
      paddingBottom: setVar(
        tag,
        'content-padding',
        setClamp(
          tag,
          'padding-y',
          this.contentPaddingYMin,
          this.contentPaddingYMax
        )
      ),

      '[data-spx-docs-index]:before': {
        display: 'block',
        content: '" "',
        marginTop:
          'calc(' +
          setVar(tag, 'offset-margin-top', this.offsetMarginTop) +
          ' * -1)',
        height: setVar(tag, 'offset-margin-top', this.offsetMarginTop),
        visibility: 'hidden',
      },

      '&:last-child': {
        marginBottom: setClamp(
          tag,
          'content-padding-y',
          this.contentPaddingYMin,
          this.contentPaddingYMax
        ),
      },
    };

    /** Merge content objects to avoid emotion error. */
    const styleContentMerge = css(merge(styleContent, {}));

    return (
      <Host class={styleHost}>
        {/** Navigation. */}
        <div class={styleNavigationWrap}>
          <spx-scrollspy
            display="grid"
            url-change={true}
            scrolling={this.scrolling}
            class={styleNavigationMerge}
          >
            <ul ref={(el) => (this.navigation = el as HTMLElement)} />
          </spx-scrollspy>
        </div>

        {/** Content. */}
        <div
          ref={(el) => (this.content = el as HTMLElement)}
          class={styleContentMerge}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
