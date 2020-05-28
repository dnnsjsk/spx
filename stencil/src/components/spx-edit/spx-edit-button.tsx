import {Component, Event, EventEmitter, h, Host, Prop, State} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-edit-button',
})

export class SpxEditButton {
    @Prop() test: boolean = false;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) textEdit: string = 'Edit site';
    @Prop({reflectToAttr: true}) textSave: string = 'Save';
    @Prop({reflectToAttr: true}) textDiscard: string = 'Discard';
    @Prop({reflectToAttr: true}) textSuccess: string = 'Save was successful.';

    @Prop({reflectToAttr: true}) gap: string = '8px';

    @Prop({reflectToAttr: true}) position: string = 'fixed';
    @Prop({reflectToAttr: true}) top: string;
    @Prop({reflectToAttr: true}) right: string = '12px';
    @Prop({reflectToAttr: true}) bottom: string = '12px';
    @Prop({reflectToAttr: true}) left: string;
    @Prop({reflectToAttr: true}) padding: string = '12px 24px';

    @Prop({reflectToAttr: true}) fontSize: string = '16px';
    @Prop({reflectToAttr: true}) color: string = constants.styleColor;
    @Prop({reflectToAttr: true}) colorDiscard: string = constants.styleColor;
    @Prop({reflectToAttr: true}) background: string = constants.styleBackground;
    @Prop({reflectToAttr: true}) backgroundDiscard: string = constants.styleBackgroundSecondary;
    @Prop({reflectToAttr: true}) borderRadius: string = constants.styleBorderRadius;

    @Prop({reflectToAttr: true}) zIndex: number = 999999;

    @Event({eventName: 'spxEditDiscardChanges'}) spxEditDiscardChanges: EventEmitter;
    @Event({eventName: 'spxEditSaveChanges'}) spxEditSaveChanges: EventEmitter;

    @State() open: boolean = false;
    @State() loading: boolean = false;

    onClickEdit() {
        this.open = true;

        /** Generate edit components around text. */

        let elements = document.querySelectorAll('[data-spx-edit]');

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

        this.spxEditDiscardChanges.emit({target: 'document'});
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

            this.spxEditSaveChanges.emit({target: 'document'});

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
                body: 'action=spxEditAjaxHandler' + getBodyString() + '' + '&post_id=' + spx.postId + ''
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
            fontFamily: constants.styleFontFamily,
            display: 'grid',
            gridGap: 'var(--spx-edit-button-gap, ' + this.gap + ')',
            position: this.position === 'static' ? 'static' :
                this.position === 'relative' ? 'relative' :
                    this.position === 'absolute' ? 'absolute' :
                        this.position === 'sticky' ? 'sticky' :
                            'fixed',
            top: this.top ? 'var(--spx-edit-button-top, ' + this.top + ')' : 'var(--spx-edit-button-top)',
            right: this.right ? 'var(--spx-edit-button-right, ' + this.right + ')' : 'var(--spx-edit-button-right)',
            bottom: this.bottom ? 'var(--spx-edit-button-bottom, ' + this.bottom + ')' : 'var(--spx-edit-button-bottom)',
            left: this.left ? 'var(--spx-edit-button-left, ' + this.left + ')' : 'var(--spx-edit-button-left)',
            zIndex: this.zIndex,

            '.spx-edit-button': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: 'var(--spx-edit-button-font-size, ' + this.fontSize + ')',
                padding: 'var(--spx-edit-button-padding, ' + this.padding + ')',
                color: 'var(--spx-edit-button-color, ' + this.color + ')',
                background: 'var(--spx-edit-button-background, ' + this.background + ')',
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
