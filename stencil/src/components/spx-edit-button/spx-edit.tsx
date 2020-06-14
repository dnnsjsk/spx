import {Component, Element, h, Host, Prop, State, Watch, Listen} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from "../../constants/style.js";

@Component({
    tag: 'spx-edit',
})

export class SpxEdit {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) display: string = 'inline';

    @Prop({reflectToAttr: true}) type: string = 'acf';
    @Prop({reflectToAttr: true}) name: string;
    @Prop({reflectToAttr: true}) styling: string;
    @Prop({reflectToAttr: true}) editable: boolean;

    @Prop({reflectToAttr: true}) placeholder: string = 'Enter some text here.';
    @Prop({reflectToAttr: true}) placeholderColor: string = 'inherit';
    @Prop({reflectToAttr: true}) placeholderOpacity: string = '0.7';

    @Prop({reflectToAttr: true}) outline: string = '2px solid red';
    @Prop({reflectToAttr: true}) outlineFocus: string = 'blue';

    @State() originalText: string;

    /** Watch editable state. */

    @Watch('editable')
    watchEditable() {
        if (this.editable) {
            this.el.setAttribute('contenteditable', 'true')
        } else {
            this.el.removeAttribute('contenteditable')
        }
    }

    /** Prevent enter key. */

    @Listen('keydown', {target: this.el})
    preventEnter(evt) {

        if (evt.keyCode === 13) {
            evt.preventDefault();
        }
    }

    /** Discard changes. */

    @Listen('spxEditButtonDiscard', {target: "document"})
    discardChanges() {
        this.el.parentElement.innerHTML = this.originalText;
        this.editable = false;
    }

    /** Save changes. */

    @Listen('spxEditButtonSave', {target: "document"})
    saveChanges() {
        this.editable = false;
    }

    /** Sets the new body string correctly on key press. */

    @Listen('keyup', {target: this.el})
    keyupListener() {
        this.el.setAttribute('body-string', '&' + this.name + '=' + this.el.innerText);
    }

    componentDidLoad() {

        this.watchEditable();

        /** Set inner text as state. */

        this.originalText = this.el.innerText;

        /** Set original body string. */

        this.el.setAttribute('body-string', '&' + this.name + '=' + this.originalText);
    }

    render() {

        /** Style default. */

        const styleDefault = css({
            display: constants.styleDisplay('edit', this.display),
            position: 'relative',

            '&[contenteditable]': {
                outline: this.outline,
                cursor: 'text',

                ':focus': {
                    outlineColor: this.outlineFocus,
                },

                ':empty:before': {
                    content: '"' + this.placeholder + ' "',
                    color: this.placeholderColor,
                    opacity: this.placeholderOpacity,
                },
            }
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>
            <slot/>
        </Host>
    }
}
