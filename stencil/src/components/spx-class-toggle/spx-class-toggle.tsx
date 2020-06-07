import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import {css} from "emotion";

@Component({
    tag: 'spx-class-toggle',
})

export class SpxClassToggle {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) toggle: string = 'spx-class-toggle--active';
    @Prop({reflectToAttr: true}) target: string;
    @Prop({reflectToAttr: true}) local: string;

    @State() classesArray = this.toggle.replace(/ /g, ',').split(',');
    @State() toggled;

    componentDidLoad() {

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
            (this.target ? document.querySelectorAll(this.target) : this.el.querySelectorAll('*'))
                .forEach(itemInner => {
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
                })
        });
    }

    /** Add classes. */

    addClasses() {
        this.classesArray.forEach(item => {
            (this.target ? document.querySelectorAll(this.target) : this.el.querySelectorAll('*'))
                .forEach(itemInner => {
                    if (itemInner.classList.contains(item)) {
                        itemInner.classList.remove(item);
                    } else {
                        itemInner.classList.add(item);
                    }
                })
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
