import {Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from "../../constants/style.js";
import {wrap} from '../../functions/wrap.js';
import {passAttributes} from '../../functions/passAttributes.js';
import {offset} from '../../functions/offset.js';

@Component({
    tag: 'spx-section-single',
})

export class SpxSectionSingle {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) post: string;
    @State() postArray: Array<string>;
    @State() postContent: Document;
    postContentContainer: HTMLElement;

    @Prop({reflectToAttr: true}) mobile: number = constants.styleMobileBP;
    @State() mobileBP: boolean;

    @Prop({reflectToAttr: true}) image: boolean;
    @Prop({reflectToAttr: true}) imageBorderRadius: string = constants.styleBorderRadius;
    @Prop({reflectToAttr: true}) imageMaxHeight: string;
    @Prop({reflectToAttr: true}) imageObjectPosition: string = '50% 50%';

    @Prop({reflectToAttr: true}) containerMaxWidth: string = '700px';

    @Prop({reflectToAttr: true}) titleMarginTop: string = '2.5rem';
    @Prop({reflectToAttr: true}) titleFontSize: string = '2rem';
    @Prop({reflectToAttr: true}) titleColor: string = '#000000';

    @Prop({reflectToAttr: true}) date: boolean;
    @Prop({reflectToAttr: true}) dateMarginTop: string = '1.2rem';
    @Prop({reflectToAttr: true}) dateFontSize: string = '1rem';
    @Prop({reflectToAttr: true}) dateColor: string = '#999999';

    @Prop({reflectToAttr: true}) content: boolean;
    @Prop({reflectToAttr: true}) contentMarginTop: string = '1rem';

    @Prop({reflectToAttr: true}) tableOfContents: boolean;
    @Prop({reflectToAttr: true}) tableOfContentsOffset: any;
    @Prop({reflectToAttr: true}) tableOfContentsMarginTop: string = '3rem';
    @Prop({reflectToAttr: true}) tableOfContentsItemGap: string = '1rem';
    @Prop({reflectToAttr: true}) tableOfContentsItemColor: string = constants.stylePrimary600;
    @Prop({reflectToAttr: true}) tableOfContentsItemColorActive: string = constants.stylePrimary900;
    @Prop({reflectToAttr: true}) tableOfContentsPadding: string = '2.5rem';
    @Prop({reflectToAttr: true}) tableOfContentsBackground: string = constants.stylePrimary000;
    @Prop({reflectToAttr: true}) tableOfContentsBorder: string = '1px solid ' + constants.stylePrimary100 + '';
    @Prop({reflectToAttr: true}) tableOfContentsBorderRadius: string = constants.styleBorderRadius;

    @Prop({reflectToAttr: true}) tableOfContentsHeading: string = 'Table of contents';
    @Prop({reflectToAttr: true}) tableOfContentsHeadingColor: string = constants.stylePrimary700;
    @Prop({reflectToAttr: true}) tableOfContentsHeadingMarginBottom: string = '1rem';
    @Prop({reflectToAttr: true}) tableOfContentsHeadingFontSize: string = '1.5rem';

    tableOfContentsContainer: HTMLElement;

    @Event({eventName: 'spxSectionSingleDidLoad'}) spxSectionSingleDidLoad: EventEmitter;

    /** Watch post prop and parse to iteratable array. */

    @Watch('post')
    parsePostProp(newValue: string) {
        if (newValue) {
            this.postArray = JSON.parse(newValue);
            this.postContent = new DOMParser().parseFromString(this.postArray['content'], 'text/html');
        }
    }

    /** Listen to window resize. */

    @Listen('resize', {target: 'window'})
    checkIfMobile() {
        this.mobileBP = window.innerWidth < this.mobile;
    }

    componentWillLoad() {

        /** If menu prop is set. */

        this.parsePostProp(this.post);

        /** Emit event when component has loaded. */

        this.spxSectionSingleDidLoad.emit({target: 'document'});

        /** Use slot to render content if it's set. */

        this.content = !this.el.querySelector('[slot="content"]');
    }

    componentDidLoad() {

        /** Get content from DOMParser and put into content container. */

        if (this.content) {
            this.postContentContainer.innerHTML = this.postContent.body.innerHTML;
        }

        if (this.tableOfContents) {

            /** Get Create scrollspy. */

            let scrollspy = document.createElement('spx-scrollspy');
            let ul = document.createElement('ul');
            scrollspy.appendChild(ul);

            this.postContentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((item) => {

                /** Get all headings and give them proper ID. */

                let id = item.innerHTML.replace(/\s+/g, '-').toLowerCase();
                item.setAttribute('id', id);

                /** Create nav items from heading information. */

                let el = document.createElement('a');
                el.innerHTML = item.innerHTML;
                el.setAttribute('href', '#' + id);
                ul.appendChild(el);
                wrap(el, document.createElement('li'));

            });

            /** Append scrollspy to TOC container. */

            this.tableOfContentsContainer.appendChild(scrollspy);

            /** Pass custom attributes to scrollspy. */

            passAttributes(this.el, this.el, 'spx-scrollspy');

            /** Check if is mobile view. */

            this.checkIfMobile();

        }

        /** Emit event after render. */

        this.spxSectionSingleDidLoad.emit({target: 'document'});
    }

    render() {

        /** Style default. */

        const styleDefault = css({
            fontSize: constants.styleFontSize,
            display: constants.styleDisplay,

            '.spx-section-single__outer': {
                display: this.tableOfContents ? 'grid' : constants.styleDisplay,
                gridTemplateColumns: this.tableOfContents && '1fr auto',
                gridGap: '40px',
            },

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

                '*[id]:before': {
                    display: this.tableOfContents ? 'block' : 'none',
                    content: '" "',
                    marginTop: 'calc(' + offset(this.tableOfContentsOffset) + 'px * -1 + var(--spx-section-single-table-of-contents-margin-top, ' + this.tableOfContentsMarginTop + ') * -1)',
                    height: 'calc(' + offset(this.tableOfContentsOffset) + 'px + var(--spx-section-single-table-of-contents-margin-top, ' + this.tableOfContentsMarginTop + '))',
                    visibility: 'hidden',
                }
            },

            '.spx-section-single__table-of-contents': {
                top: 'calc(' + offset(this.tableOfContentsOffset) + 'px + var(--spx-section-single-table-of-contents-margin-top, ' + this.tableOfContentsMarginTop + '))',
                marginTop: 'var(--spx-section-single-table-of-contents-margin-top, ' + this.tableOfContentsMarginTop + ')',
                position: 'sticky',
                display: this.mobileBP ? 'none' : 'block',

                'ul': {
                    display: 'grid',
                    gridGap: 'var(--spx-section-single-content-table-of-contents-item-gap, ' + this.tableOfContentsItemGap + ')',
                    padding: 'var(--spx-section-single-content-table-of-contents-padding, ' + this.tableOfContentsPadding + ')',
                    background: 'var(--spx-section-single-content-table-of-contents-background, ' + this.tableOfContentsBackground + ')',
                    border: 'var(--spx-section-single-table-of-contents-border, ' + this.tableOfContentsBorder + ')',
                    borderRadius: 'var(--spx-section-single-content-table-of-contents-border-radius, ' + this.tableOfContentsBorderRadius + ')',

                    'li': {
                        'a': {
                            color: 'var(--spx-section-single-content-table-of-contents-item-color, ' + this.tableOfContentsItemColor + ')',
                        },

                        '&.spx-scrollspy__nav--active': {
                            'a': {
                                color: 'var(--spx-section-single-content-table-of-contents-item-color-active, ' + this.tableOfContentsItemColorActive + ')',
                            },
                        },
                    },
                },

                'spx-scrollspy': {
                    '&:before': {
                        content: '"' + this.tableOfContentsHeading + '"',
                        display: this.tableOfContents ? 'block' : 'none',
                        color: 'var(--spx-section-single-table-of-contents-heading-color, ' + this.tableOfContentsHeadingColor + ')',
                        fontSize: 'var(--spx-section-single-table-of-contents-heading-font-size, ' + this.tableOfContentsHeadingFontSize + ')',
                        marginBottom: 'var(--spx-section-single-table-of-contents-heading-margin-bottom, ' + this.tableOfContentsHeadingMarginBottom + ')',
                    }
                }
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

            <div class="spx-section-single__outer">

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
                    <div ref={(el) => this.postContentContainer = el as HTMLElement}
                         class="spx-section-single__content"/>}

                    {!this.content &&
                    /** Slot: content. */
                    <slot name="content"/>}

                </div>

                {this.tableOfContents &&
                <div>
                    <div ref={(el) => this.tableOfContentsContainer = el as HTMLElement}
                         class="spx-section-single__table-of-contents">
                    </div>
                </div>}

            </div>

        </Host>
    }
}
