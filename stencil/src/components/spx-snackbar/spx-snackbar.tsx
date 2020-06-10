import {Component, h, Host, Prop, Element, State} from '@stencil/core';
import {css, cx, keyframes} from "emotion";
import * as constants from '../../constants/style.js';
import {stylePosition} from "../../constants/style.js";

@Component({
    tag: 'spx-snackbar',
})

export class SpxSnackbar {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) text: string = "Hello, I'm a snackbar.";

    @Prop({reflectToAttr: true}) fixed: boolean;
    @Prop({reflectToAttr: true}) closeable: boolean;
    @Prop({reflectToAttr: true}) reverse: boolean;

    @Prop({reflectToAttr: true}) position: string = 'bottom-center';
    @State() positionArray;
    @Prop({reflectToAttr: true}) distanceX: string = '1em';
    @Prop({reflectToAttr: true}) distanceY: string = '1em';

    @Prop({reflectToAttr: true}) fontSize: string = '18px';
    @Prop({reflectToAttr: true}) size: string;
    @Prop({reflectToAttr: true}) padding: string = '1em';
    @Prop({reflectToAttr: true}) color: string = '#ffffff';
    @Prop({reflectToAttr: true}) background: string = constants.stylePrimary900;
    @Prop({reflectToAttr: true}) border: string;
    @Prop({reflectToAttr: true}) borderRadius: string = constants.styleBorderRadius;

    @Prop({reflectToAttr: true}) animationDelay: string = '200ms';
    @Prop({reflectToAttr: true}) animationDuration: string = '2000ms';

    componentWillLoad() {
        this.positionArray = this.position.split('-');
    }

    componentDidRender() {

        const removeItem = () => {
            let el = this.el;
            el.remove();
        }

        /** Remove snackbar from dom after 5 seconds. */

        if (!this.fixed) {
            setTimeout(removeItem, 5000)
        }
    }

    removeItem() {
        let el = this.el;
        el.remove();
    }

    render() {

        /** Animation in and out. */

        const kfOut = keyframes({
            '0%, 100%': {
                opacity: 0,
            },
            '30%, 80%': {
                opacity: 1,
            }
        });

        /** Animation in. */

        const kfIn = keyframes({
            '0%': {
                opacity: 0,
            },
            '30%, 100%': {
                opacity: 1,
            }
        });

        /** Style default. */

        const styleDefault = css({
            ...stylePosition('snackbar', this.positionArray, this.distanceX, this.distanceY),
            fontFamily: constants.styleFontFamily,
            fontSize:
                this.size === 'sm' ? '16px' :
                    this.size === 'md' ? '18px' :
                        this.size === 'lg' ? '20px' :
                            constants.styleFontBase('snackbar', this.fontSize),
            position: 'fixed',
            display: 'flex',
            flexDirection: !this.reverse ? 'row-reverse' : 'row',
            alignItems: 'center',
            userSelect: 'none',
            paddingTop: !this.closeable && 'var(--spx-snackbar-padding, ' + this.padding + ')',
            paddingRight: ((this.closeable && this.reverse) || !this.closeable) && 'var(--spx-snackbar-padding, ' + this.padding + ')',
            paddingBottom: !this.closeable && 'var(--spx-snackbar-padding, ' + this.padding + ')',
            paddingLeft: ((this.closeable && !this.reverse) || !this.closeable) && 'var(--spx-snackbar-padding, ' + this.padding + ')',
            zIndex: constants.styleZindex,
            opacity: 0,
            color: 'var(--spx-snackbar-color, ' + this.color + ')',
            background: 'var(--spx-snackbar-background, ' + this.background + ')',
            border: 'var(--spx-snackbar-border, ' + this.border + ')',
            borderRadius: 'var(--spx-snackbar-border-radius, ' + this.borderRadius + ')',
            animation: !this.fixed ? kfOut : kfIn,
            animationDelay: 'var(--spx-snackbar-animation-delay, ' + this.animationDelay + ')',
            animationDuration: 'var(--spx-snackbar-animation-duration, ' + this.animationDuration + ')',
            animationFillMode: 'forwards',
        });

        return <Host class={cx(
            {[constants.styleBase]: this.styling === 'none'},
            {[styleDefault]: !this.styling}
        )}>

            {/** Close button. */}

            {this.closeable &&

            <div role="button" onClick={this.removeItem.bind(this)}
                 class={css({
                     padding: 'var(--spx-snackbar-padding, ' + this.padding + ')',
                     width: '0.7em',
                     opacity: '0.3',
                     boxSizing: 'content-box',
                     cursor: 'pointer',
                     display: 'flex',
                     alignItems: 'center',
                     justifycontent: 'center',
                 })}>
                <svg class={css({
                    height: '1em',
                })}
                     aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/>
                </svg>
            </div>}

            {/** Text. */}

            <div class={css({
                whiteSpace: 'nowrap'
            })}>
                {this.text ? this.text : <slot/>}
            </div>

        </Host>;
    }
}