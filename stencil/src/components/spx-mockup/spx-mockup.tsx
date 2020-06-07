import {Component, Element, h, Host, Listen, Prop, State} from '@stencil/core';
import {css} from 'emotion';
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-mockup',
    styleUrl: 'spx-mockup.css',
})

export class SpxMockup {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) type: string = 'iphone-8';
    @Prop({reflectToAttr: true}) src: string;
    @Prop({reflectToAttr: true}) imagePosition: string = "50% 50%"

    @Prop({reflectToAttr: true}) color: string;
    @Prop({reflectToAttr: true}) colorIphone8: string;
    @Prop({reflectToAttr: true}) colorGooglePixel: string;
    @Prop({reflectToAttr: true}) colorGalaxyS8: string;
    @Prop({reflectToAttr: true}) colorIpadPro: string;
    @Prop({reflectToAttr: true}) colorMacbook: string;
    @Prop({reflectToAttr: true}) colorMacbookPro: string;

    @Prop({reflectToAttr: true}) browserBackground: string = 'whitesmoke';
    @State() browserUrl: boolean = false;
    @Prop({reflectToAttr: true}) browserUrlBarBackground: string = '#ffffff';
    @Prop({reflectToAttr: true}) browserUrlBarBorder: string = '1px solid rgba(0, 0, 0, 0.075)';

    @State() height: string;
    @State() width: string;
    @State() mockup;
    @State() parent;
    @State() parentHeight;
    @State() innerElId;
    @State() outerElId;

    @Listen('resize', {target: 'window'})
    handleResizer() {
        if (this.type !== 'browser') {
            this.handleResize()
        }
    }

    componentDidUpdate() {
        this.handleResize();
        this.updateColors()
    }

    /** Resize function to keep src element in proportion. */

    handleResize() {
        let ratio = this.parent.offsetWidth / this.mockup.offsetWidth;
        this.mockup.style.transform = 'scale(calc((' + ratio + '))';
        this.parentHeight = this.mockup.offsetHeight;
        this.parent.style.height = this.parentHeight / 1 * ratio + 'px';
    }

    updateColors() {
        this.color = this.colorIphone8 || this.colorGooglePixel || this.colorGalaxyS8 || this.colorIpadPro || this.colorMacbookPro || this.colorMacbook || this.color;
    }

    componentWillLoad() {

        /** Check if URL slot is inside component. */

        if (this.el.querySelector('[slot="url"]')) {
            this.browserUrl = true;
        }

    }

    componentDidLoad() {

        if (this.type !== 'browser') {

            /** Assign states. */

            this.mockup = this.el.querySelector('.spx-mockup');
            this.parent = this.el.querySelector('.spx-mockup-wrap');

            /** Resize and wait for iFrame to load before showing content. */

            this.handleResize();

        }

        this.updateColors();
    }

    render() {

        /** Style browser. */

        const styleBrowser = css({
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            gridAutoFlow: 'row',
            padding: '0 20px 20px 20px',
            background: 'var(--spx-mockup-browser-background, ' + this.browserBackground + ')',

            '& > div:first-child': {
                display: 'grid',
                gridAutoFlow: 'column',
                gridTemplateColumns: this.browserUrl && '1fr 100px',
                alignItems: 'center',
                padding: this.browserUrl && '20px 0',
            },
        });

        const styleImg = css({
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: this.imagePosition,
        });

        const styleDevice = css({
            display: constants.styleBlock,
            maxWidth: '100%',
        });

        return <Host
            class={this.type === 'browser' ? styleBrowser : styleDevice}>

            {this.type === 'browser' ?

                /** Browser. */

                [<div>
                    {this.browserUrl &&
                    <div class={css({
                        width: '100%',
                        background: 'var(--spx-mockup-browser-url-bar-background, ' + this.browserUrlBarBackground + ')',
                        padding: '0 20px',
                        height: '40px',
                        borderRadius: '50px',
                        border: 'var(--spx-mockup-browser-url-bar-border, ' + this.browserUrlBarBorder + ')',
                        display: 'flex',
                        alignItems: 'center',

                        'a, span': {
                            color: 'black',
                        },

                        'svg': {
                            width: '16px',
                            color: 'rgba(0, 0, 0, 0.2)',
                            marginRight: '10px',
                        }
                    })}>
                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">
                            <path fill="currentColor"
                                  d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/>
                        </svg>
                        <slot name="url"/>
                    </div>}
                    <div class={css({
                        padding: !this.browserUrl && '15px 0',
                        justifySelf: 'end',
                        alignSelf: 'start',

                        'span': {
                            marginTop: '4px',
                            height: '12px',
                            width: '12px',
                            borderRadius: '50%',
                            display: 'inline-block',

                            '&:nth-child(2)': {
                                margin: '0 5px',
                            },
                        }
                    })}>
                        <span class={css({background: '#ED594A'})}/>
                        <span class={css({background: '#FDD800'})}/>
                        <span class={css({background: '#5AC05A'})}/>
                    </div>
                </div>,
                    <div class="spx-mockup-content">
                        {this.src ? <img class={styleImg} src={this.src}/> : <slot/>}
                    </div>] :

                <div class="spx-mockup-wrap">
                    <div
                        class={'spx-mockup spx-mockup-' + this.type + ' ' + (this.color ? 'spx-mockup-' + this.color + '' : '')}>
                        <div class="spx-mockup-frame">
                            <div class="spx-mockup-content">
                                {this.src ? <img class={styleImg} src={this.src}/> : <slot/>}
                            </div>
                        </div>
                        <div class="spx-mockup-stripe"/>
                        <div class="spx-mockup-header"/>
                        <div class="spx-mockup-sensors"/>
                        <div class="spx-mockup-btns"/>
                        <div class="spx-mockup-power"/>
                        {this.type === 'iphone-x' &&
                        <div class="spx-mockup-home"/>
                        }
                    </div>
                </div>

            }

        </Host>;
    }
}