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
import { setVar } from '../../utils/setVar';
import * as s from '../../constants/style';
import { merge } from 'lodash-es';
import state from '../../stores/container';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { wrap } from '../../utils/wrap';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-page-docs';

/**
 * Renders a documentation page similar to the one you are currently seeing here.
 * Every heading tag becomes a navigation entry, while navigation headings get created by applying
 * the "data-spx-docs-heading" attribute to the first h1 of a new section.
 */

@Component({
  tag: 'spx-page-docs',
})
export class SpxPageDocs {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxPageDocsElement;
  private navigation: HTMLElement;
  private content: HTMLElement;

  @State() mobile: boolean;

  @Prop({ reflect: true }) bpMobile: number = 1024;

  @Prop({ reflect: true }) contentHeadingFontFamily: string =
    state.fontFamilyPrimary;

  @Prop({ reflect: true }) navigationBackground: string =
    'var(--spx-color-gray-50)';

  @Prop({ reflect: true }) navigationFontFamily: string =
    state.fontFamilyPrimary;

  @Prop({ reflect: true }) navigationGapMin: number = 0.2;

  @Prop({ reflect: true }) navigationGapMax: number = 0.4;

  @Prop({ reflect: true }) navigationHeadingTag: string = 'h1';

  @Prop({ reflect: true }) navigationHeightAdjust: string;

  @Prop({ reflect: true }) navigationLinkColor: string = 'var(--spx-color-800)';

  @Prop({ reflect: true }) navigationLinkColorActive: string =
    'var(--spx-color-primary-600)';

  @Prop({ reflect: true }) navigationLinkFontWeight: string = '500';

  @Prop({ reflect: true }) navigationLinkLetterSpacing: string = '0';

  @Prop({ reflect: true }) navigationLinkLineHeight: string = '1.25';

  @Prop({ reflect: true }) navigationLinkTextTransform: string = 'default';

  @Prop({ reflect: true }) navigationSpaceYMin: number = 2;

  @Prop({ reflect: true }) navigationSpaceYMax: number = 4;

  @Prop({ reflect: true }) navigationTitleColor: string =
    'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) navigationTitleFontWeight: string = '500';

  @Prop({ reflect: true }) navigationTitleLetterSpacing: string = '0';

  @Prop({ reflect: true }) navigationTitleLineHeight: string = '1.25';

  @Prop({ reflect: true }) navigationTitleTextTransform: string = 'uppercase';

  @Prop({ reflect: true }) navigationTitleMarginBottomMin: number = 1;

  @Prop({ reflect: true }) navigationTitleMarginBottomMax: number = 2;

  @Prop({ reflect: true }) navigationTop: string = 'var(--spx-offset)';

  @Prop({ reflect: true }) offsetMarginTopMin: number = 0.7;

  @Prop({ reflect: true }) offsetMarginTopMax: number = 1.2;

  @Prop({ reflect: true }) uniqueId: boolean;

  /**
   * Distance to the edge of the viewport on the x-axis.
   * @CSS
   */

  @Prop({ reflect: true }) paddingX: string = state.paddingX;

  @Prop({ reflect: true }) paddingYMin: number = 2;

  @Prop({ reflect: true }) paddingYMax: number = 4;

  /** Listen to window resize. */

  @Listen('resize', { target: 'window' })
  onResize() {
    this.mobile = window.innerWidth < this.bpMobile;
  }

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxPageDocsDidLoad' })
  spxPageDocsDidLoad: EventEmitter;

  componentWillLoad() {
    this.onResize();
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    this.createNavigation();

    if (window.location.hash) {
      document.querySelector(window.location.hash).scrollIntoView();
    }

    this.spxPageDocsDidLoad.emit({ target: 'document' });
  }

  /** Generates the navigation. */

  private createNavigation() {
    if (this.content.innerHTML !== '') {
      /** Create links from h1 tags. */

      this.content
        .querySelectorAll(
          this.navigationHeadingTag + ':not([data-spx-docs-no-navigation])'
        )
        .forEach((item, index) => {
          const link = item.innerHTML
            .replace(/[^A-Z0-9]/gi, '-')
            .replace(/--/g, '-')
            .toLowerCase();
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

      /** Create headings. */

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
        });

      this.el.querySelector('spx-scrollspy').reload();
    }
  }

  render() {
    /** Host. */

    const styleHost = css({
      display: this.mobile ? 'block' : 'grid',
      gridTemplateColumns: !this.mobile && 'auto 1fr',
      gridAutoFlow: 'column',
    });

    const styleNavigationWrap = css({
      display: this.mobile ? 'none' : 'block',
      background: setVar(
        tag,
        'navigation-background',
        this.navigationBackground
      ),
      width: '120%',
    });

    /** Navigation. */

    const styleNavigation = {
      position: 'sticky',
      top: setVar(tag, 'navigation-top', this.navigationTop),
      gridAutoRows: 'max-content',
      height: 'calc(100vh - ' + this.navigationTop + ')',
      paddingTop: setClamp(
        tag,
        'navigation-space-y',
        this.navigationSpaceYMin,
        this.navigationSpaceYMax
      ),
      paddingBottom: setClamp(
        tag,
        'navigation-space-y',
        this.navigationSpaceYMin,
        this.navigationSpaceYMax
      ),
      paddingLeft: state.paddingXsm,
      paddingRight: state.paddingXsm,
      overflowY: 'auto',

      ul: {
        display: 'grid',
        gridGap: setClamp(
          tag,
          'navigation-gap',
          this.navigationGapMin,
          this.navigationGapMax
        ),
      },

      a: {
        ...s.text(
          tag,
          'navigation-link',
          this.navigationLinkColor,
          0.8,
          1,
          this.navigationLinkFontWeight,
          this.navigationLinkLetterSpacing,
          this.navigationLinkLineHeight,
          this.navigationLinkTextTransform
        ),
        fontFamily: setVar(
          tag,
          'navigation-font-family',
          this.navigationFontFamily
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
          marginBottom: setClamp(
            tag,
            'navigation-spacey-y',
            this.navigationSpaceYMin,
            this.navigationSpaceYMax
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
          0.8,
          0.9,
          this.navigationTitleFontWeight,
          this.navigationTitleLetterSpacing,
          this.navigationTitleLineHeight,
          this.navigationTitleTextTransform
        ),
        fontFamily: setVar(
          tag,
          'navigation-font-family',
          this.navigationFontFamily
        ),
      },

      'li + span': {
        display: 'block',
        marginTop: setClamp(
          tag,
          'navigation-title-margin-bottom',
          this.navigationTitleMarginBottomMin,
          this.navigationTitleMarginBottomMax
        ),
      },
    };

    /** Merge navigation objects to avoid emotion error. */

    const styleNavigationMerge = css(merge(styleNavigation, {}));

    /** Content. */

    const styleContent = {
      padding: setVar(
        tag,
        'content-padding',
        '' +
          setClamp(tag, 'padding-y', this.paddingYMin, this.paddingYMax) +
          ' ' +
          setVar(tag, 'padding-x', this.paddingX) +
          ''
      ),

      h1: {
        '&[id]:before': {
          display: 'block',
          content: '" "',
          marginTop:
            'calc((var(--spx-offset) + ' +
            setClamp(
              tag,
              'offset-margin-top',
              this.offsetMarginTopMin,
              this.offsetMarginTopMax
            ) +
            ') * -1)',
          height:
            'calc(var(--spx-offset) + ' +
            setClamp(
              tag,
              'offset-margin-top',
              this.offsetMarginTopMin,
              this.offsetMarginTopMax
            ) +
            ')',
          visibility: 'hidden',
        },
      },

      'spx-code': {
        maxWidth: 'calc(100vw - ' + this.paddingX + ')',
      },

      img: {
        maxWidth: '100%',
      },

      '&:last-child': {
        marginBottom: setClamp(
          tag,
          'space-y',
          this.paddingYMin,
          this.paddingYMax
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
            offset="100"
            scrolling={true}
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
