import {
  Component,
  Host,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Element,
  Method,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { annotate, annotationGroup } from 'rough-notation';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-notation';

/**
 * Annotate letters, words or whole sentences.
 */
@Component({
  tag: 'spx-notation',
})
export class SpxNotation {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxNotationElement;

  @State() annotation;

  /**
   * Turn animation on or off when animation.
   */
  @Prop({ reflect: true }) animation: boolean = true;

  /**
   * Animation duration.
   */
  @Prop({ reflect: true }) animationDuration: number = 800;

  /**
   * Autoplay.
   */
  @Prop({ reflect: true }) autoplay: boolean = true;

  /**
   * Brackets.
   */
  @Prop({ reflect: true }) brackets: string = 'left, right';

  @Prop({ reflect: true }) color: string = 'var(--spx-color-gray-100)';

  @Prop({ reflect: true }) display: string = 'inline-block';

  @Prop({ reflect: true }) delay: number;

  /**
   * Create a group on annotations by applying a "data-spx-annotation" to elements within.
   */
  @Prop({ reflect: true }) group: boolean;

  /**
   * Number of iterations.
   */
  @Prop({ reflect: true }) iterations: number = 1;

  /**
   * Annotate multiline text.
   */
  @Prop({ reflect: true }) multiline: boolean = true;

  /**
   * Padding around notations.
   */
  @Prop({ reflect: true }) padding: number;

  /**
   * Stroke width.
   */
  @Prop({ reflect: true }) strokeWidth: number = 1;

  /**
   * Type of notation.
   * @choice 'underline', 'box', 'circle', 'highlight', 'strike-through', 'crossed-off', 'bracket'
   */
  @Prop({ reflect: true }) type: string = 'underline';

  /**
   * Fires after component has loaded.
   */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxNotationDidLoad' })
  spxNotationDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    if (
      ((this.el.querySelector(':scope > span > span') &&
        this.el.querySelector(':scope > span > span').innerHTML.length > 0) ||
        this.group) &&
      this.autoplay
    ) {
      this.annotate();
    }

    this.spxNotationDidLoad.emit({ target: 'document' });
  }

  private annotate() {
    const groupArray = [];

    /**
     * Get options.
     */
    const options = {
      animate: this.animation,
      animationDuration: this.animationDuration,
      type:
        this.type === 'underline'
          ? 'underline'
          : this.type === 'box'
          ? 'box'
          : this.type === 'circle'
          ? 'circle'
          : this.type === 'highlight'
          ? 'highlight'
          : this.type === 'strike-through'
          ? 'strike-through'
          : this.type === 'crossed-off'
          ? 'crossed-off'
          : 'bracket',
      color: this.color,
      strokeWidth: this.strokeWidth,
      multiline: this.multiline,
      iterations: this.iterations,
      padding: this.padding,
      brackets: this.brackets,
    };

    /**
     * Check if group is active.
     */
    if (!this.group) {
      this.annotation = annotate(
        this.el.querySelector(':scope > span > span'),
        // @ts-ignore
        options
      );
    } else {
      this.el.querySelectorAll('[data-spx-notation]').forEach((item) => {
        const obj = {};
        const string = item.getAttribute('data-spx-notation');
        const arr = string.replaceAll(':', '').replaceAll(', ', ' ').split(' ');

        for (let i = 0; i < arr.length; i += 2) {
          obj[arr[i]] = isNaN(Number(arr[i + 1]))
            ? arr[i + 1]
            : Number(arr[i + 1]);
        }

        // @ts-ignore
        groupArray.push(annotate(item as HTMLElement, { ...options, ...obj }));
      });
    }

    /**
     * Fire off animation.
     */
    if (this.delay) {
      setTimeout(() => {
        if (!this.group) {
          this.annotation.show();
        } else {
          annotationGroup(groupArray).show();
        }
      }, this.delay);
    } else {
      if (!this.group) {
        this.annotation.show();
      } else {
        annotationGroup(groupArray).show();
      }
    }
  }

  /**
   * Remove the annotation.
   */
  @Method()
  async clear() {
    this.annotation.remove();
  }

  /**
   * Hides the annotation. (non animated)
   */
  @Method()
  async hide() {
    this.annotation.hide();
  }

  @Method()
  async reload() {
    if (this.annotation) {
      this.annotation.remove();
    }
    if (!this.group) {
      this.annotate();
    }
  }

  /**
   * Draws the annotation.
   */
  @Method()
  async show() {
    this.annotate();
  }

  render() {
    /**
     * Host styles.
     */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
      position: 'relative',
    });

    /**
     * Span styles.
     */
    const styleSpan = css({ position: 'relative', display: 'inline-block' });

    return (
      <Host class={styleHost}>
        {this.group ? (
          <slot />
        ) : (
          <span class={styleSpan}>
            <span class={styleSpan}>
              <slot />
            </span>
          </span>
        )}
      </Host>
    );
  }
}
