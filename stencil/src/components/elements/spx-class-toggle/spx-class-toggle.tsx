import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';

/**
 * Toggle CSS classes on any element in the document.
 *
 * @slot [slot:inner]
 */
@Component({
  tag: 'spx-class-toggle',
  styleUrl: 'spx-class-toggle.scss',
  shadow: true,
})
export class SpxClassToggle {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxClassToggleElement;

  @State() classesArray;
  @State() toggled;

  /** Specify a local storage item, so the toggle state will be remembered when the user visits the site again. */
  @Prop({ reflect: true }) local: string;

  /** If target element should be searched within component or in document. */
  @Prop({ reflect: true }) inner: boolean = true;

  /** [prop:target] */
  @Prop({ reflect: true }) target: string = '*';

  /** List of classes that should be toggled. */
  @Prop({ reflect: true }) toggle: string = 'spx-class-toggle--active';

  @Watch('toggle')
  toggleUpdate() {
    this.createToggleArray();
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxClassToggleDidLoad' })
  spxClassToggleDidLoad: EventEmitter;

  componentWillLoad() {
    this.createToggleArray();

    if (this.local) {
      if (localStorage.getItem(this.local)) {
        this.addClasses();
      }
    }
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });
    this.spxClassToggleDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private createToggleArray = () => {
    this.classesArray = this.toggle.replace(/ /g, ',').split(',');
  };

  private toggleClasses = () => {
    this.classesArray.forEach((item) => {
      (this.inner ? this.el : document)
        .querySelectorAll(this.target)
        .forEach((itemInner) => {
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

  private addClasses = () => {
    this.classesArray.forEach((item) => {
      (this.inner ? this.el : document)
        .querySelectorAll(this.target)
        .forEach((itemInner) => {
          if (itemInner.classList.contains(item)) {
            itemInner.classList.remove(item);
          } else {
            itemInner.classList.add(item);
          }
        });
    });
  };

  render() {
    return (
      <Host onClick={this.toggleClasses}>
        <slot />
      </Host>
    );
  }
}
