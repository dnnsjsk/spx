import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import {css} from "emotion";

@Component({
  tag: 'spx-class-toggle',
})

export class SpxClassToggle {
  @Element() el: HTMLElement;

  @Prop({reflectToAttr: true}) toggle: string;
  @Prop({reflectToAttr: true}) target: string;
  @Prop({reflectToAttr: true}) local: string;

  @State() targetState;
  @State() classesArray;
  @State() toggled;

  componentDidLoad() {

    /** Convert Prop for iteration. */

    if (this.toggle) {
      this.classesArray = this.toggle.replace(/ /g, ',').split(',');
    }

    /** Set target state. */

    if (this.target) {
      this.targetState = document.querySelector(this.target);
    } else {
      this.targetState = this.el.querySelector(':scope > *');
    }

    /** Check if local storage is set. */

    if (this.local) {
      if (localStorage.getItem(this.local)) {
        this.addClasses();
      }
    }
  }

  /** Toggle classes. */

  toggleClasses() {
    this.classesArray.forEach(item => {
      if (this.targetState.classList.contains(item)) {
        this.targetState.classList.remove(item);
        if (this.local) {
          localStorage.removeItem(this.local);
        }
      } else {
        this.targetState.classList.add(item);
        if (this.local) {
          localStorage.setItem(this.local, String(true));
        }
      }
    });
  }

  /** Add classes. */

  addClasses() {
    this.classesArray.forEach(item => {
      if (this.targetState.classList.contains(item)) {
        this.targetState.classList.remove(item);
      } else {
        this.targetState.classList.add(item);
      }
    });
  }

  render() {
    return <Host onClick={this.toggleClasses.bind(this)}
                 class={css({
                   display: 'block'
                 })}>
      <slot/>
    </Host>
  }
}
