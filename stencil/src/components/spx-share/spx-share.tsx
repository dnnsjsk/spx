import {Component, h, Host, Element, Prop, State} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-share',
})

export class SpxShare {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;
    @Prop({reflectToAttr: true}) theme: string;

    @Prop({reflectToAttr: true}) vertical: boolean;

    @Prop({reflectToAttr: true}) target: string = '_blank';

    @Prop({reflectToAttr: true}) fontSize: string = constants.styleFontSize;

    @Prop({reflectToAttr: true}) itemGap: string = '0.5em';
    @Prop({reflectToAttr: true}) itemSize: string = '1em';
    @Prop({reflectToAttr: true}) itemColor: string;
    @Prop({reflectToAttr: true}) itemBackgroundColor: string;
    @Prop({reflectToAttr: true}) itemPadding: string = '0.5em';
    @Prop({reflectToAttr: true}) itemBorderRadius: string = constants.styleBorderRadius;

    @State() location;

    componentDidLoad() {
        this.location = location.href;
    }

    render() {
        const styleDefault = css({
            fontSize: constants.styleFontBase('share', this.fontSize),
            display: 'grid',
            gridAutoFlow: this.vertical ? 'row' : 'column',
            gridAutoColumns: !this.vertical && 'max-content',
            gridAutoRows: this.vertical && 'max-content',
            gridGap: 'var(--spx-share-item-gap, ' + this.itemGap + ')',

            'a': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'content-box',
                cursor: 'pointer',
                width: 'var(--spx-share-item-size, ' + this.itemSize + ')',
                height: 'var(--spx-share-item-size, ' + this.itemSize + ')',
                padding: 'var(--spx-share-item-padding, ' + this.itemPadding + ')',
                borderRadius: 'var(--spx-share-item-border-radius, ' + this.itemBorderRadius + ')',
                color: 'var(--spx-share-item-color, ' + this.itemColor + ')',
                backgroundColor: 'var(--spx-share-item-background-color, ' + this.itemBackgroundColor + ')',

                'svg': {
                    height: '100%'
                },

                '&.spx-share__facebook': {
                    backgroundColor: !this.theme && !this.itemBackgroundColor && '#1877F2',
                    color:
                        this.theme ? '#1877F2' :
                            !this.itemColor ? '#ffffff' :
                                null,
                    border: this.theme === 'outline' && '1px solid #1877F2',
                },

                '&.spx-share__twitter': {
                    backgroundColor: !this.theme && !this.itemBackgroundColor && '#1DA1F2',
                    color:
                        (this.theme === 'outline' || this.theme === 'minimal') ? '#1DA1F2' :
                            !this.itemColor ? '#ffffff' :
                                null,
                    border: this.theme === 'outline' && '1px solid #1DA1F2',
                },

                '&.spx-share__whatsapp': {
                    backgroundColor: !this.theme && !this.itemBackgroundColor && '#25D366',
                    color: (this.theme === 'outline' || this.theme === 'minimal') ? '#25D366' :
                        !this.itemColor ? '#ffffff' :
                            null,
                    border: this.theme === 'outline' && '1px solid #25D366',
                },

                '&.spx-share__email': {
                    backgroundColor: !this.theme && !this.itemBackgroundColor && '#c6c6c6',
                    color: this.theme === 'outline' || this.theme === 'minimal' ? '#c6c6c6' :
                        !this.itemColor ? '#ffffff' :
                            null,
                    border: this.theme === 'outline' && '1px solid #c6c6c6',
                }
            }
        });

        return <Host class={cx(
            {[constants.styleBase]: this.styling === 'none'},
            {[styleDefault]: !this.styling}
        )}>

            <a class="spx-share__facebook" target={this.target}
               href={'https://www.facebook.com/sharer/sharer.php?u=' + this.location + ''}>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
            </a>

            <a class="spx-share__twitter" target={this.target}
               href={'http://www.twitter.com/share?url=' + this.location + ''}>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
            </a>

            <a class="spx-share__whatsapp" target={this.target}
               href={'https://web.whatsapp.com/send?text=' + this.location + ''}>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
            </a>

            <a class="spx-share__email" target={this.target}
               href={'mailto:?body=' + this.location + ''}>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                </svg>
            </a>

        </Host>
    }
}