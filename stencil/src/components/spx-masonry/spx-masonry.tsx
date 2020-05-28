import {Component, h, Host, Element, Prop, State, Method, Watch, Event, EventEmitter} from '@stencil/core';
import {css} from 'emotion';
import Macy from 'macy';
import {wrap} from '../../functions/wrap.js';

@Component({
    tag: 'spx-masonry',
})

export class SpxMasonry {
    @Element() el: HTMLElement;
    container: HTMLElement;

    @Prop({reflectToAttr: true}) trueOrder: boolean;
    @Prop({reflectToAttr: true}) waitForImages: boolean;
    @Prop({reflectToAttr: true}) useOwnImageLoader: boolean;
    @Prop({reflectToAttr: true}) mobileFirst: boolean;
    @Prop({reflectToAttr: true}) useContainerForBreakpoints: boolean;

    @Prop({reflectToAttr: true}) columns: number;
    @Prop({reflectToAttr: true}) bpColumns: string;
    @Prop({reflectToAttr: true}) bpColumnsObject: object;

    @Prop({reflectToAttr: true}) gap: string = '10px';

    @Prop({reflectToAttr: true}) imagesSrc: string;
    @Prop({reflectToAttr: true}) images: string;
    @State() imagesArray: Array<string>;
    @Prop({reflectToAttr: true}) imageSize: string;

    @State() macyState;

    @Event({eventName: 'spxMasonryDidLoad'}) spxMasonryDidLoad: EventEmitter;

    /** Watch images prop and parse to iteratable array. */

    @Watch('images')
    parseImagesProp(newValue: string) {
        if (newValue) this.imagesArray = JSON.parse(newValue);
    }

    /** Wrapper for recalculation. */

    @Method()
    async recalc() {
        this.macyState.recalculate();
    }

    /** Wrapper for reinit. */

    @Method()
    async restart() {
        this.macyState.reInit();
    }

    componentWillLoad() {

        /** If image prop is set. */

        if (this.images) {

            this.parseImagesProp(this.images);

        }
    }

    componentDidLoad() {

        /** Create object for breakpoint attribute. */

        if (this.bpColumns) {
            this.bpColumnsObject = JSON.parse('{' + this.bpColumns.replace(/([0-9]+)/g, '"$1"') + '}');
        }

        /** Init Macy. */

        this.macyState = Macy({
            container: this.container,
            margin: 0,
            trueOrder: this.trueOrder || false,
            waitForImages: this.waitForImages || false,
            useOwnImageLoader: this.useOwnImageLoader || false,
            mobileFirst: this.mobileFirst || false,
            useContainerForBreakpoints: this.useContainerForBreakpoints || false,
            columns: this.columns || 4,
            breakAt:
                this.bpColumns ?
                    this.bpColumnsObject : {
                        9999: this.columns ? this.columns : 4,
                    },
        });

        /** Wrap all children in div. */

        Array.from(this.container.children).forEach(item => {
            wrap(item, document.createElement('div'));
        });

        /** Emit event to document when Masonry finished loading. */

        this.spxMasonryDidLoad.emit({target: 'document'});
    }

    /** After update lifecycle. */

    componentDidUpdate() {
        this.restart();
        this.recalc();
    }

    /** Remove Macy on disconnect. */

    disconnectedCallback() {
        this.macyState.remove();
    }

    render() {
        return <Host
            class={css({
                display: 'block',

                /** Convert gap to correct padding for elements. */

                'div > div': {
                    padding: 'var(--spx-masonry-gap, ' + this.gap + ') calc(var(--spx-masonry-gap, ' + this.gap + ') / 2) 0 calc(var(--spx-masonry-gap, ' + this.gap + ') / 2)',
                    boxSizing: 'border-box',
                },

                /** Force 100% width for elements. */

                'div > div > *': {
                    width: '100%',
                }
            })}>
            <div ref={(el) => this.container = el as HTMLElement}
                 class={css({

                     /** Adjust container margin to make up for element paddings. */

                     margin: 'calc(var(--spx-masonry-gap, ' + this.gap + ') * -1) calc(var(--spx-masonry-gap, ' + this.gap + ') / 2 * -1) 0 calc(var(--spx-masonry-gap, ' + this.gap + ') / 2 * -1)',
                 })}>

                {this.images && !this.imagesSrc ?

                    /** Iterate through ACF array if prop was set. */

                    this.imagesArray.map((el) => (

                        <img src={this.imageSize ? el['sizes'][this.imageSize] : el['url']}/>)) :

                    /** Iterate through MB array if prop was set. */

                    this.images && this.imagesSrc === 'mb' ?

                        Object.values(this.imagesArray).map((object) => (

                            <img src={this.imageSize ? object['sizes'][this.imageSize]['url'] : object['full_url']}/>))

                        : <slot/>}

            </div>
        </Host>;
    }
}
