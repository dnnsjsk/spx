import {Component, Event, EventEmitter, h, Host, Prop, State} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js';
import {stylePosition} from "../../constants/style";

@Component({
    tag: 'spx-edit-button',
})

export class SpxEditButton {
    @Prop() test: boolean = false;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) type: string = 'option';
    @Prop({reflectToAttr: true}) editId: string;

    @Prop({reflectToAttr: true}) textEdit: string = 'Edit site';
    @Prop({reflectToAttr: true}) textSave: string = 'Save';
    @Prop({reflectToAttr: true}) textDiscard: string = 'Discard';
    @Prop({reflectToAttr: true}) textSuccess: string = 'Save was successful.';

    @Prop({reflectToAttr: true}) position: string = 'bottom-center';
    @State() positionArray;
    @Prop({reflectToAttr: true}) distanceX: string = '1em';
    @Prop({reflectToAttr: true}) distanceY: string = '1em';

    @Prop({reflectToAttr: true}) fontSize: string = constants.styleFontSize;
    @Prop({reflectToAttr: true}) padding: string = '0.8em 1.2em';
    @Prop({reflectToAttr: true}) color: string = '#ffffff';
    @Prop({reflectToAttr: true}) colorDiscard: string = '#ffffff';
    @Prop({reflectToAttr: true}) background: string = constants.stylePrimary900;
    @Prop({reflectToAttr: true}) backgroundDiscard: string = constants.stylePrimary600;
    @Prop({reflectToAttr: true}) border: string;
    @Prop({reflectToAttr: true}) borderRadius: string = constants.styleBorderRadius;

    @Prop({reflectToAttr: true}) gap: string = '0.4em';

    @Event({eventName: 'spxEditButtonSave'}) spxEditButtonSave: EventEmitter;
    @Event({eventName: 'spxEditButtonDiscard'}) spxEditButtonDiscard: EventEmitter;

    @State() open: boolean = false;
    @State() loading: boolean = false;

    componentWillLoad() {
        this.positionArray = this.position.split('-');
    }

    onClickEdit() {
        this.open = true;

        /** Generate edit components around text. */

        let elements = this.editId ? document.querySelectorAll('[data-spx-edit][data-spx-edit-id=' + this.editId + ']') : document.querySelectorAll('[data-spx-edit]');

        elements.forEach(item => {
            let field = item.getAttribute('data-spx-edit');
            let text = item.innerHTML;
            item.innerHTML = '<spx-edit name="' + field + '" editable>' + text + '</spx-edit>';
        })
    }

    onClickDiscard() {

        /** Close buttons again. */

        this.open = false;

        /** Emit closing event to document. */

        this.spxEditButtonDiscard.emit({target: 'document'});
    }

    onClickSave() {

        this.loading = true;

        /** Emit save event to document. */

        const getBodyString = () => {
            let bodyStringArray = []
            let elements = document.querySelectorAll('spx-edit');
            elements.forEach(item => {
                bodyStringArray.push(item.getAttribute('body-string'));
            })

            return bodyStringArray.toString().replace(/,/g, '');
        }

        const afterSuccess = () => {
            /** Insert snackbar. */

            let snackbar = document.createElement('spx-snackbar');
            snackbar.setAttribute('text', this.textSuccess);
            document.body.appendChild(snackbar);

            /** Remove edit components. */

            let elements = document.querySelectorAll('spx-edit');
            elements.forEach(item => {
                item.parentElement.innerHTML = item.innerHTML;
            });

            /** Save changes event. */

            this.spxEditButtonSave.emit({target: 'document'});

            /** Remove loader and close on success. */

            this.open = false;
            this.loading = false;
        }

        if (!this.test) {

            // @ts-ignore
            fetch(spx.ajax, {
                method: 'POST',
                credentials: 'same-origin',
                headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
                // @ts-ignore
                body: 'action=spxEditButtonAjaxHandler' + getBodyString() + '' + '&post_id=' + spx.postId + '' + '&type=' + this.type + ''
            })
                .then((response) => {
                    if (response.status === 200) {

                        afterSuccess();

                    } else if (response.status === 500) {

                        /** Remove loader on fail. */

                        this.loading = false;

                    }
                })
        } else {

            afterSuccess();

        }
    }

    render() {

        /** Style default. */

        const styleDefault = css({
            ...stylePosition('edit-button', this.positionArray, this.distanceX, this.distanceY),
            fontFamily: constants.styleFontFamily,
            fontSize: constants.styleFontBase('edit-button', this.fontSize),
            display: 'grid',
            gridGap: 'var(--spx-edit-button-gap, ' + this.gap + ')',
            position: 'fixed',
            zIndex: 999998,

            '.spx-edit-button': {
                fontFamily: 'inherit',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: 'var(--spx-edit-button-font-size, ' + this.fontSize + ')',
                padding: 'var(--spx-edit-button-padding, ' + this.padding + ')',
                color: 'var(--spx-edit-button-color, ' + this.color + ')',
                background: 'var(--spx-edit-button-background, ' + this.background + ')',
                border: 'var(--spx-edit-button-border, ' + this.border + ')',
                borderRadius: 'var(--spx-edit-button-border-radius, ' + this.borderRadius + ')',

                'spx-loader': {
                    paddingRight: '8px',
                }
            },

            '.spx-edit-button--discard': {
                color: 'var(--spx-edit-button-color-discard, ' + this.colorDiscard + ')',
                background: 'var(--spx-edit-button-background-discard, ' + this.backgroundDiscard + ')',
            }
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>

            {!this.open ?

                /** Edit button. */

                <button class="spx-edit-button spx-edit-button--edit"
                        onClick={this.onClickEdit.bind(this)}>
                    {this.textEdit || <slot name="edit"/>}
                </button> :

                /** Discard button. */

                [<button class="spx-edit-button spx-edit-button--discard"
                         onClick={this.onClickDiscard.bind(this)}>
                    {this.textDiscard || <slot name="discard"/>}
                </button>,

                    /** Save button. */

                    <button class="spx-edit-button spx-edit-button--save"
                            onClick={this.onClickSave.bind(this)}>
                        {this.loading && <spx-loader/>}
                        {this.textSave || <slot name="save"/>}
                    </button>]}

        </Host>
    }
}
