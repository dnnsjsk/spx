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
  Watch,
} from '@stencil/core';
import { css } from '@emotion/css';
import * as s from '../../constants/style';
import * as c from '../../constants/container';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { merge } from 'lodash-es';
import state from '../../stores/container';
import { setClamp } from '../../utils/setClamp';

const tag = 'spx-page-single';

/**
 * Render a single post layout.
 */

@Component({
  tag: 'spx-page-single',
})
export class SpxPageSingle {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxPageSingleElement;
  private postContentContainer: HTMLElement;

  @State() content: boolean;
  @State() mobileBP: boolean;
  @State() postArray: Array<string>;
  @State() postContent: Document;

  @Prop({ reflect: true }) authorColor: string = 'var(--spx-color-800)';

  @Prop({ reflect: true }) authorFontFamily: string = state.fontFamilyPrimary;

  @Prop({ reflect: true }) authorFontSizeMin = 0.9;

  @Prop({ reflect: true }) authorFontSizeMax = 1.2;

  @Prop({ reflect: true }) authorFontWeight: string = '500';

  @Prop({ reflect: true }) authorLetterSpacing: string = '0';

  @Prop({ reflect: true }) authorLineHeight: string = '1.25';

  @Prop({ reflect: true }) authorMarginTopMin: number = 1;

  @Prop({ reflect: true }) authorMarginTopMax: number = 2;

  @Prop({ reflect: true }) authorTextTransform: string = 'uppercase';

  @Prop({ reflect: true }) contentMarginTopMin: number = 3;

  @Prop({ reflect: true }) contentMarginTopMax: number = 4;

  @Prop({ reflect: true }) contentMaxWidth: string = '700px';

  @Prop({ reflect: true }) contentPaddingX: string =
    'var(--spx-container-padding-x)';

  /** Display date. */

  @Prop({ reflect: true }) date: boolean = true;

  @Prop({ reflect: true }) dateColor: string = 'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) dateFontFamily: string = state.fontFamilyPrimary;

  @Prop({ reflect: true }) dateFontSizeMin = 0.9;

  @Prop({ reflect: true }) dateFontSizeMax = 0.9;

  @Prop({ reflect: true }) dateFontWeight: string = '500';

  @Prop({ reflect: true }) dateLetterSpacing: string = '0';

  @Prop({ reflect: true }) dateLineHeight: string = '1.25';

  @Prop({ reflect: true }) dateMarginTopMin: number = 1.5;

  @Prop({ reflect: true }) dateMarginTopMax: number = 2;

  @Prop({ reflect: true }) dateTextTransform: string = 'default';

  @Prop({ reflect: true }) headerPaddingBottomMin: number = 1;

  @Prop({ reflect: true }) headerPaddingBottomMax: number = 2;

  @Prop({ reflect: true }) headerBorderBottom: string =
    '1px solid var(--spx-color-gray-200)';

  /** Display image. */

  @Prop({ reflect: true }) image: boolean = true;

  @Prop({ reflect: true }) imageBorderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) imageHeight: string = 'clamp(200px, 50vh, 600px)';

  @Prop({ reflect: true }) imageObjectPosition: string = '50% 50%';

  @Prop({ reflect: true }) imagePaddingX: string =
    'var(--spx-container-padding-x-sm)';

  @Prop({ reflect: true }) imageSpaceYMin: number = 1;

  @Prop({ reflect: true }) imageSpaceYMax: number = 2;

  /** Mobile breakpoint. */

  @Prop({ reflect: true }) mobile: number = c.bpMobileWidth;

  /**
   * Gets a WordPress post to render.
   * @helper &lt;?php spx\Get::post($postId, $dateFormat, $imageSize) ?>
   */

  @Prop({ reflect: true }) post: string;

  /** Space to edge of the viewport. */

  @Prop({ reflect: true }) titleColor: string = 'var(--spx-color-800)';

  @Prop({ reflect: true }) titleFontFamily: string = state.fontFamilyPrimary;

  @Prop({ reflect: true }) titleFontSizeMin = 2.7;

  @Prop({ reflect: true }) titleFontSizeMax = 4;

  @Prop({ reflect: true }) titleFontWeight: string = '500';

  @Prop({ reflect: true }) titleLetterSpacing: string = '0';

  @Prop({ reflect: true }) titleLineHeight: string = '1.25';

  @Prop({ reflect: true }) titleMarginTopMin: number = 1;

  @Prop({ reflect: true }) titleMarginTopMax: number = 2;

  @Prop({ reflect: true }) titleTextTransform: string = 'default';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxPageSingleDidLoad' })
  spxPageSingleDidLoad: EventEmitter;

  /** Watch post prop and parse to iteratable array. */

  @Watch('post')
  parsePostProp(newValue: string) {
    if (newValue) {
      this.postArray = JSON.parse(newValue);
      this.postContent = new DOMParser().parseFromString(
        this.postArray['content'],
        'text/html'
      );
    }
  }

  componentWillLoad() {
    /** If menu prop is set. */

    this.parsePostProp(this.post);

    /** Use slot to render content if it's set. */

    this.content = !this.el.querySelector('[slot="content"]');
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Get content from DOMParser and put into content container. */

    if (this.content) {
      this.postContentContainer.innerHTML = this.postContent.body.innerHTML;
    }

    this.spxPageSingleDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      fontSize: s.fontSize,
      display: 'block',
    });

    /** Outer styles. */

    const styleOuter = css({
      display: 'block',
      gridGap: '40px',
      padding:
        '0 ' + setVar(tag, 'content-padding-x', this.contentPaddingX) + '',
    });

    /** Image styles. */

    const styleImage = css({
      maxWidth: '100%',
      padding:
        '' +
        setClamp(
          tag,
          'image-space-y',
          this.imageSpaceYMin,
          this.imageSpaceYMax
        ) +
        ' ' +
        setVar(tag, 'image-padding-x', this.imagePaddingX) +
        '',

      img: {
        width: '100%',
        objectFit: 'cover',
        objectPosition: setVar(
          tag,
          'image-object-position',
          this.imageObjectPosition
        ),
        maxWidth: '100%',
        height: setVar(tag, 'image-height', this.imageHeight),
        borderRadius: setVar(
          tag,
          'image-border-radius',
          this.imageBorderRadius
        ),
      },
    });

    /** Header container styles. */

    const styleHeaderContainer = css({
      maxWidth: 'var(--spx-text-max-width)',
      margin: '0 auto',
      paddingBottom: setClamp(
        tag,
        'header-padding-bottom',
        this.headerPaddingBottomMin,
        this.headerPaddingBottomMax
      ),
      borderBottom: setVar(
        tag,
        'header-padding-bottom',
        this.headerBorderBottom
      ),
    });

    /** Author styles. */

    const styleAuthor = css(
      merge({
        display: 'flex',
        alignItems: 'center',
        marginTop: setClamp(
          tag,
          'author-margin-top',
          this.authorMarginTopMin,
          this.authorMarginTopMax
        ),

        span: {
          marginLeft: '12px',
          ...s.text(
            tag,
            'title',
            this.authorColor,
            this.authorFontSizeMin,
            this.authorFontSizeMax,
            this.authorFontWeight,
            this.authorLetterSpacing,
            this.authorLineHeight,
            this.authorTextTransform
          ),
        },
      }),
      {}
    );

    /** Author image styles. */

    const styleAuthorImg = css({
      height: '30px',
      width: '30px',
      borderRadius: '9999px',
    });

    /** Title styles. */

    const styleTitle = css(
      merge({
        ...s.text(
          tag,
          'title',
          this.titleColor,
          this.titleFontSizeMin,
          this.titleFontSizeMax,
          this.titleFontWeight,
          this.titleLetterSpacing,
          this.titleLineHeight,
          this.titleTextTransform
        ),
        fontFamily: setVar(tag, 'title-font-family', this.titleFontFamily),
        marginTop: setClamp(
          tag,
          'title-margin-top',
          this.titleMarginTopMin,
          this.titleMarginTopMax
        ),
      }),
      {}
    );

    /** Date styles. */

    const styleDate = css(
      merge({
        ...s.text(
          tag,
          'date',
          this.dateColor,
          this.dateFontSizeMin,
          this.dateFontSizeMax,
          this.dateFontWeight,
          this.dateLetterSpacing,
          this.dateLineHeight,
          this.dateTextTransform
        ),
        display: 'block',
        fontFamily: setVar(tag, 'date-font-family', this.dateFontFamily),
        marginTop: setClamp(
          tag,
          'date-margin-top',
          this.dateMarginTopMin,
          this.dateMarginTopMax
        ),
      }),
      {}
    );

    /** Content styles. */

    const styleContent = css({
      marginTop:
        setClamp(
          tag,
          'content-margin-top',
          this.contentMarginTopMin,
          this.contentMarginTopMax
        ) + ' !important',
    });

    return (
      <Host class={styleHost}>
        <article>
          {/** Slot: start */}
          <slot name="start" />

          {this.image && this.postArray['image'] && (
            /** Image. */
            <div class={styleImage}>
              <img
                alt={this.postArray['title']}
                src={this.postArray['image']}
              />
            </div>
          )}

          <div class={styleOuter}>
            <div class={styleHeaderContainer}>
              {/** Slot: before post title. */}
              <slot name="before-title" />

              {this.postArray['title'] && (
                /** Post title. */
                <h1 class={styleTitle}>{this.postArray['title']}</h1>
              )}

              {/** Slot: before date. */}
              <slot name="before-date" />

              {this.date && this.postArray['date'] && (
                /** Post title. */
                <span class={styleDate}>{this.postArray['date']}</span>
              )}

              {/** Slot: before author. */}
              <slot name="before-author" />

              <div class={styleAuthor}>
                <img
                  class={styleAuthorImg}
                  src={this.postArray['author_image']}
                />
                <span>
                  By {this.postArray['author_first_name']}{' '}
                  {this.postArray['author_last_name']}{' '}
                </span>
              </div>
            </div>

            {/** Slot: before content. */}
            <slot name="before-content" />

            {this.content && (
              /** Post content. */
              <spx-text
                ref={(el) => (this.postContentContainer = el as HTMLElement)}
                class={styleContent}
              />
            )}

            {!this.content && (
              /** Slot: content. */
              <spx-text>
                <slot name="content" />
              </spx-text>
            )}
          </div>
        </article>
      </Host>
    );
  }
}
