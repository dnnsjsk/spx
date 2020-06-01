import {Component, Element, h, Host, Prop, State, Watch} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from "../../constants/style";

@Component({
    tag: 'spx-section-single',
})

export class SpxSectionSingle {
    @Element() el: HTMLElement;
    contentContainer: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) post: string;
    @State() postArray: Array<string>;
    @State() postContent: Document;

    @Prop({reflectToAttr: true}) image: boolean = true;
    @Prop({reflectToAttr: true}) imageBorderRadius: string = '0.25em';
    @Prop({reflectToAttr: true}) imageMaxHeight: string;
    @Prop({reflectToAttr: true}) imageObjectPosition: string = '50% 50%';

    @Prop({reflectToAttr: true}) containerMaxWidth: string = '700px';

    @Prop({reflectToAttr: true}) titleMarginTop: string = '1em';
    @Prop({reflectToAttr: true}) titleFontSize: string = '2em';
    @Prop({reflectToAttr: true}) titleColor: string = '#000000';

    @Prop({reflectToAttr: true}) date: boolean = true;
    @Prop({reflectToAttr: true}) dateMarginTop: string = '1em';
    @Prop({reflectToAttr: true}) dateFontSize: string = '1em';
    @Prop({reflectToAttr: true}) dateColor: string = '#999999';

    @Prop({reflectToAttr: true}) content: boolean = true;
    @Prop({reflectToAttr: true}) contentMarginTop: string = '1em';

    /** Watch post prop and parse to iteratable array. */

    @Watch('post')
    parsePostProp(newValue: string) {
        if (newValue) {
            this.postArray = JSON.parse(newValue);
            this.postContent = new DOMParser().parseFromString(this.postArray['content'], 'text/html');
        }
    }

    componentWillLoad() {

        /** If menu prop is set. */

        this.parsePostProp(this.post);
    }

    componentDidLoad() {
        if (this.content) {
            this.contentContainer.innerHTML = this.postContent.body.innerHTML;
        }
    }

    render() {

        /** Style default. */

        const styleDefault = css({
            display: constants.styleDisplay,

            '.spx-section-single__image-wrap': {
                maxWidth: '100%',
            },

            '.spx-section-single__image': {
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'var(--spx-section-single-image-object-position, ' + this.imageObjectPosition + ')',
                maxWidth: '100%',
                borderRadius: 'var(--spx-section-single-image-border-radius, ' + this.imageBorderRadius + ')',
                maxHeight: 'var(--spx-section-single-image-max-height, ' + this.imageMaxHeight + ')',
            },

            '.spx-section-single__wrap': {
                maxWidth: 'var(--spx-section-single-container-max-width, ' + this.containerMaxWidth + ')',
                margin: '0 auto',
            },

            '.spx-section-single__title': {
                marginTop: 'var(--spx-section-single-title-margin-top, ' + this.titleMarginTop + ')',
                fontSize: 'var(--spx-section-single-title-font-size, ' + this.titleFontSize + ')',
                color: 'var(--spx-section-single-title-color, ' + this.titleColor + ')',
            },

            '.spx-section-single__date': {
                display: 'block',
                marginTop: 'var(--spx-section-single-date-margin-top, ' + this.dateMarginTop + ')',
                fontSize: 'var(--spx-section-single-date-font-size, ' + this.dateFontSize + ')',
                color: 'var(--spx-section-single-date-color, ' + this.dateColor + ')',
            },

            '.spx-section-single__content': {
                marginTop: 'var(--spx-section-single-content-margin-top, ' + this.contentMarginTop + ')',
            },
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>

            {/** Slot: start */}
            <slot name="start"/>

            {this.image && this.postArray['image'] &&
            /** Image. */
            <div class="spx-section-single__image-wrap">
                <img alt={this.postArray['title']} class="spx-section-single__image" src={this.postArray['image']}/>
            </div>}

            <div class="spx-section-single__wrap">

                {/** Slot: before post title. */}
                <slot name="before-title"/>

                {this.postArray['title'] &&
                /** Post title. */
                <h1 class="spx-section-single__title">{this.postArray['title']}</h1>}

                {/** Slot: before date. */}
                <slot name="before-date"/>

                {this.date && this.postArray['date'] &&
                /** Post title. */
                <span class="spx-section-single__date">{this.postArray['date']}</span>}

                {/** Slot: before content. */}
                <slot name="before-content"/>

                {this.content &&
                /** Post content. */
                <div ref={(el) => this.contentContainer = el as HTMLElement} class="spx-section-single__content"/>}

                {/** Slot: content. */}
                <slot name="content"/>

            </div>

        </Host>
    }
}
