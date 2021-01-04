// eslint-disable-next-line no-unused-vars
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import state from '../../stores/container';
import { tabs } from '../../utils/tabs';
import { merge } from 'lodash-es';
import { setSectionVar } from '../../utils/setSectionVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-section-two-column';

/**
 * Two-column text-media block component that can be used for a variety of layout options.
 * The current homepage consists of this block only.
 */

@Component({
  tag: 'spx-section-two-column',
})
export class SpxSectionTwoColumn {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionTwoColumnElement;

  @State() tabs: boolean;
  @State() buttons: boolean;

  @Prop({ reflect: true }) background: string;

  @Prop({ reflect: true }) backgroundImage: string;

  /**
   * Column size.
   * @CSS
   */

  @Prop({ reflect: true }) columnSize: string = '1fr 1fr';

  /** If set, component will transform the header offset to the top-padding value. */

  @Prop({ reflect: true }) first: boolean;

  @Prop({ reflect: true }) gapMin: number = 3;

  @Prop({ reflect: true }) gapMax: number = 6;

  /** Hides the media column. */

  @Prop({ reflect: true }) hideMedia: boolean;

  @Prop({ reflect: true }) imagesGapMin: number = 1;

  @Prop({ reflect: true }) imagesGapMax: number = 2;

  @Prop({ reflect: true }) mediaPaddingMin: number = 2;

  @Prop({ reflect: true }) mediaPaddingMax: number = 3;

  /**
   * Layout of the section.
   * @choice 'horizontal', 'vertical'
   */

  @Prop({ reflect: true }) layout: string = 'horizontal';

  /**
   * Background color for the media column.
   * @CSS
   */

  @Prop({ reflect: true }) mediaBackground: string;

  /** Overlaps the background with the media column. */

  @Prop({ reflect: true }) mediaBackgroundOverlap: boolean;

  /** Removes the outer spacing for the media column. */

  @Prop({ reflect: true }) mediaFull: boolean;

  /** Adds padding to the media column on mobile. */

  @Prop({ reflect: true }) mediaFullMobileFix: boolean;

  @Prop({ reflect: true }) mediaMargin: string = '0';

  /** Reverses the column order. */

  @Prop({ reflect: true }) reverse: boolean;

  /** Reverses the column order on mobile. */

  @Prop({ reflect: true }) reverseMobile: boolean;

  @Prop({ reflect: true }) tabsAnimation: boolean = false;

  @Prop({ reflect: true }) tabsAnimationColor: string;

  @Prop({ reflect: true }) tabsAnimationDuration: number;

  /** Alignment for the inner text wrapper. */

  @Prop({ reflect: true }) textAlignInner: 'left' | 'center' | 'right' = 'left';

  /** Alignment for the outer text wrapper. */

  @Prop({ reflect: true }) textAlignOuter: 'left' | 'center' | 'right' = 'left';

  /**
   * Background color for the text column.
   * @CSS
   */

  @Prop({ reflect: true }) textBackground: string;

  /** Overlaps the background with the text column. */

  @Prop({ reflect: true }) textBackgroundOverlap: boolean;

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSectionTwoColumnDidLoad' })
  spxSectionTwoColumnDidLoad: EventEmitter;

  componentWillLoad() {
    if (this.el.querySelector('[slot="buttons"]')) {
      this.buttons = true;
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);

    if (this.el.querySelector('[data-spx-tabs-header]')) {
      this.tabs = true;
      tabs(
        this.el,
        tag,
        '1000ms',
        this.tabsAnimation,
        this.tabsAnimationDuration,
        this.tabsAnimationColor
      );
    }

    this.spxSectionTwoColumnDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Helper function to determine layout. */

    const pq = (valueCenter, valueSide) => {
      return this.layout === 'vertical'
        ? valueCenter
        : this.layout === 'horizontal' && valueSide;
    };

    /** Conditions. */

    const isVertical = this.layout === 'vertical';
    const isHorizontal = this.layout === 'horizontal';

    /** Background overlap styles. */

    const backgroundOverlap = {
      content: "' '",
      position: 'absolute',
      top: '0',
      width: '300%',
      height: '100%',
      zIndex: -1,
    };

    /** Text align inner styles. */

    const textAlignInner =
      this.textAlignInner === 'left'
        ? 'flex-start'
        : this.textAlignInner === 'center'
        ? 'center'
        : this.textAlignInner === 'right' && 'flex-end';

    /** Text align outer styles. */

    const textAlignOuter =
      this.textAlignOuter === 'left'
        ? 'flex-start'
        : this.textAlignOuter === 'center'
        ? 'center'
        : this.textAlignOuter === 'right' && 'flex-end';

    /** Host styles. */

    const styleHost = css({
      '--spx-section-two-column-grid-gap':
        isHorizontal && setClamp(tag, 'gap', this.gapMin, this.gapMax),
      marginTop: this.first && '0 !important',
      position: 'relative',
      background: this.backgroundImage
        ? setVar(tag, 'background', this.backgroundImage)
        : setVar(tag, 'background', this.background),
      backgroundSize: 'cover',
      overflowX: 'hidden',

      'h1, h2, p': {
        textAlign: this.textAlignInner,
      },

      'img + img': {
        marginTop: setClamp(
          tag,
          'images-gap',
          this.imagesGapMin,
          this.imagesGapMax
        ),
      },
    });

    /** Inner styles. */

    const styleInner = css({
      display: pq('block', 'grid'),
      gridTemplateColumns: state.bpMobile
        ? '1fr'
        : setVar(tag, 'column-size', this.columnSize),
      gridGap: isHorizontal && setClamp(tag, 'gap', this.gapMin, this.gapMax),
      marginLeft: 'auto',
      marginRight: 'auto',
    });

    /** Text styles. */

    const styleText = css({
      position: 'relative',
      gridRow: state.bpMobile && this.reverseMobile && '1',
      gridColumn: this.reverse && !state.bpMobile ? 2 : state.bpMobile && 1,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: this.mediaFull && state.paddingX,
      paddingRight: this.mediaFull && state.paddingX,
      justifyContent: textAlignInner,
      alignItems: state.bpMobile
        ? 'left'
        : this.layout === 'horizontal' && this.reverse
        ? 'center'
        : textAlignOuter,

      '&:before': merge(
        {
          background: this.textBackground,
          display: !this.textBackgroundOverlap && 'none',
          left: !this.reverse && '-230%',
          right: this.reverse && '-230%',
        },
        backgroundOverlap
      ),
    });

    /** Text wrap styles. */

    const styleTextWrap = css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: textAlignInner,
    });

    /** Button styles. */

    const styleButtons = css({
      display: 'flex',
      flexWrap: 'wrap',
      width: this.layout === 'vertical' && '100%',
      justifyContent: textAlignInner,

      'spx-section-button:nth-child(1)': {
        marginLeft:
          this.textAlignInner !== 'center' &&
          this.textAlignOuter !== 'center' &&
          '0 !important',
      },
    });

    /** Media styles. */

    const styleMedia = css({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gridColumn: (this.reverse || state.bpMobile) && 1,
      gridRow:
        this.reverseMobile && state.bpMobile
          ? 2
          : (this.reverse || state.bpMobile) && 1,
      marginTop: isVertical && setClamp(tag, 'gap', this.gapMin, this.gapMax),
      padding:
        this.mediaBackground &&
        !this.mediaFull &&
        !this.tabs &&
        setClamp(
          tag,
          'media-background-padding',
          this.mediaPaddingMin,
          this.mediaPaddingMax
        ),
      background: !this.mediaBackgroundOverlap && this.mediaBackground,

      '&>*': {
        margin: setVar(tag, 'media-margin', this.mediaMargin),
      },

      '&:before': merge(
        {
          background: this.mediaBackground,
          display: !this.mediaBackgroundOverlap && 'none',
          left: this.reverse && '-230%',
          right: !this.reverse && '-230%',
        },
        backgroundOverlap
      ),
    });

    return (
      <Host class={styleHost}>
        <section class={styleInner}>
          <div class={styleText}>
            {/** Text wrap. */}

            <div class={styleTextWrap}>
              <slot name="pre-title" />

              <slot name="text" />

              {this.buttons && (
                /** Buttons. */

                <div
                  data-spx-section-two-column-buttons={true}
                  class={styleButtons}
                >
                  <slot name="buttons" />
                </div>
              )}
            </div>
          </div>

          {/** Media. */}

          {!this.hideMedia && (
            <div class={styleMedia}>
              <slot name="media" />
            </div>
          )}
        </section>
      </Host>
    );
  }
}
