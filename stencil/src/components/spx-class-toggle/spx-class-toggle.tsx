import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { css } from '@emotion/css';
import { setVar } from '../../utils/setVar';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';

const tag = 'spx-class-toggle';

/**
 * Toggle CSS classes on any element in the document.
 */
@Component({
  tag: 'spx-class-toggle',
})
export class SpxClassToggle {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxClassToggleElement;

  @State() classesArray;
  @State() toggled;

  @Prop({ reflect: true }) display: string = 'block';

  /**
   * Specify a local storage item, so the toggle state will be remembered when the user visits the site again.
   */
  @Prop({ reflect: true }) local: string;

  /**
   * Target element. Can take any querySelector value. (id, class, tag etc.) If none is set it will default to the first element inside.
   */
  @Prop({ reflect: true }) target: string;

  /**
   * List of classes that should be toggled.
   */
  @Prop({ reflect: true }) toggle: string = 'spx-class-toggle--active';

  /**
   * Fires after component has loaded.
   */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxClassToggleDidLoad' })
  spxClassToggleDidLoad: EventEmitter;

  @Watch('toggle')
  toggleChanged() {
    this.createToggleArray();
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.createToggleArray();

    /**
     * Check if local storage is set.
     */
    if (this.local) {
      if (localStorage.getItem(this.local)) {
        this.addClasses();
      }
    }

    this.spxClassToggleDidLoad.emit({ target: 'document' });
  }

  /**
   * Create an array of classes from the component attribute.
   */
  private createToggleArray = () => {
    this.classesArray = this.toggle.replace(/ /g, ',').split(',');
  };

  /**
   * Toggle classes.
   */
  private toggleClasses = () => {
    this.classesArray.forEach((item) => {
      (this.target
        ? document.querySelectorAll(this.target)
        : this.el.querySelectorAll('*')
      ).forEach((itemInner) => {
        if (itemInner.classList.contains(item)) {
          itemInner.classList.remove(item);
          if (this.local) {
            localStorage.removeItem(this.local);
          }
        } else {
          itemInner.classList.add(item);
          if (this.local) {
            localStorage.setItem(this.local, String(true));
          }
        }
      });
    });
  };

  /**
   * Add classes.
   */
  private addClasses() {
    this.classesArray.forEach((item) => {
      (this.target
        ? document.querySelectorAll(this.target)
        : this.el.querySelectorAll('*')
      ).forEach((itemInner) => {
        if (itemInner.classList.contains(item)) {
          itemInner.classList.remove(item);
        } else {
          itemInner.classList.add(item);
        }
      });
    });
  }

  @Method()
  async reload() {
    this.componentDidLoad();
  }

  render() {
    /**
     * Host styles.
     */
    const styleHost = css({
      display: setVar(tag, 'display', this.display),
    });

    return (
      <Host onClick={this.toggleClasses} class={styleHost}>
        <slot />
      </Host>
    );
  }
}
