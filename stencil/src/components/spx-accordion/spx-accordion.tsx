import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-accordion',
})

export class SpxAccordion {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) gap: string = '0.4em';

    @Prop({reflectToAttr: true}) fontSize: string = constants.styleFontSize;

    @Prop({reflectToAttr: true}) headerColor: string = constants.stylePrimary900;
    @Prop({reflectToAttr: true}) headerText: string = 'Default Header Text';
    @Prop({reflectToAttr: true}) headerTextTag: string = 'span';
    @Prop({reflectToAttr: true}) headerGap: string = '0.4em';
    @Prop({reflectToAttr: true}) headerCustom: boolean;

    @Prop({reflectToAttr: true}) indicatorIcon: string;

    @Prop({reflectToAttr: true}) contentColor: string = constants.stylePrimary900;
    @Prop({reflectToAttr: true}) contentText: string = 'Default Content Text';
    @Prop({reflectToAttr: true}) contentTextTag: string = 'span';
    @Prop({reflectToAttr: true}) contentCustom: boolean;

    @State() open: boolean = false;

    componentDidLoad() {
        if (this.el.querySelector('[slot="header"]')) {
            this.headerCustom = true;
        }
        if (this.el.querySelector('[slot="content"]')) {
            this.contentCustom = true;
        }
    }

    /** Toggle content. */

    onClickHeader() {
        this.open = !this.open;
    }

    render() {

        /** Create custom variables for Header/Content. */

        const styleText = (tag, part) => css({
            color: 'var(--spx-accordion-' + tag + '-color, ' + part + ')'
        });

        /** Render inner element for header/content. */

        const textReturn = (condition, tag, text, slot, part) => {
            return condition ?
                (tag === 'h1' ? <h1 class={styleText(tag, part)}>{text}</h1>
                    : tag === 'h2' ? <h2 class={styleText(tag, part)}>{text}</h2>
                        : tag === 'h3' ? <h3 class={styleText(tag, part)}>{text}</h3>
                            : tag === 'h4' ? <h4 class={styleText(tag, part)}>{text}</h4>
                                : tag === 'h5' ? <h5 class={styleText(tag, part)}>{text}</h5>
                                    : tag === 'h6' ? <h6 class={styleText(tag, part)}>{text}</h6>
                                        : tag === 'p' ? <p class={styleText(tag, part)}>{text}</p>
                                            : <span class={styleText(tag, part)}>{text}</span>) : <slot name={slot}/>
        }

        /** Style default. */

        const styleDefault = css({
            fontFamily: constants.styleFontFamily,
            fontSize: constants.styleFontBase('accordion', this.fontSize),
            display: 'grid',
            gridAutoFlow: 'row',
            gridRowGap: 'var(--spx-accordion-gap, ' + this.gap + ')',

            '.spx-accordion__header': {
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: 'max-content',
                gridColumnGap: 'var(--spx-accordion-header-gap, ' + this.headerGap + ')',
                cursor: 'pointer',

                '*:not([slot])': {
                    margin: '0'
                }
            },

            '.spx-accordion__header-icon': {
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transformOrigin: 'center',
                transform: this.open && 'rotate(180deg)',
                color: 'var(--spx-accordion-header-color, ' + this.headerColor + ')'
            },

            '.spx-accordion__content': {
                display: this.open ? 'block' : 'none',
            }
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>

            <div onClick={this.onClickHeader.bind(this)} class="spx-accordion__header">
                {!this.headerCustom &&
                <div class="spx-accordion__header-icon">

                    {this.indicatorIcon ?
                        <i class={this.indicatorIcon}/> :
                        <spx-icon type="caret"/>}

                </div>}
                {textReturn(!this.headerCustom, this.headerTextTag, this.headerText, 'header', this.headerColor)}
            </div>

            <div
                class={'spx-accordion__content' + ' ' + (this.open ? 'spx-accordion__content--open' : 'spx-accordion__content--closed')}>
                {textReturn(!this.contentCustom, this.contentTextTag, this.contentText, 'content', this.contentColor)}
            </div>
        </Host>
    }
}
