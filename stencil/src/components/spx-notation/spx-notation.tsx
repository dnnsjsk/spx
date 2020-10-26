import {
  Component,
  Host,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  Element,
  Method,
  State,
} from '@stencil/core';
import { css } from 'emotion';
import { setVar } from '../../utils/setVar';
import { annotate } from 'rough-notation';
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

  /** Turn animation on or off when animation. */

  @Prop({ reflect: true }) animation: boolean = true;

  /** Animation duration. */

  @Prop({ reflect: true }) animationDuration: number = 800;

  @Prop({ reflect: true }) color: string = 'var(--spx-color-secondary-100)';

  @Prop({ reflect: true }) display: string = 'inline-block';

  /** Number of iterations. */

  @Prop({ reflect: true }) iterations: number = 1;

  /** Annotate multiline text. */

  @Prop({ reflect: true }) multiline: boolean = true;

  /** Stroke width. */

  @Prop({ reflect: true }) strokeWidth: number = 1;

  /**
   * Type of notation.
   * @choice 'underline', 'box', 'circle', 'highlight', 'strike-through', 'crossed-off', 'bracket'
   */

  @Prop({ reflect: true }) type: string = 'underline';

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    if (this.el.querySelector('span').innerHTML.length !== 0) {
      this.annotate();
    }
  }

  private annotate() {
    this.annotation = annotate(this.el.querySelector('span > *'), {
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
    });
    this.annotation.show();
  }

  /** Draws the annotation. */

  @Method()
  async show() {
    this.annotation.show();
  }

  /** Hides the annotation. (non animated) */

  @Method()
  async hide() {
    this.annotation.hide();
  }

  /** Remove the annotation. */

  @Method()
  async clear() {
    this.annotation.remove();
  }

  @Method()
  async reload() {
    this.annotation.remove();
    this.annotate();
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return (
      <Host class={styleHost}>
        <span>
          <slot />
        </span>
      </Host>
    );
  }
}
