import {Component, h, Host, Element, Prop, State, Watch, Listen} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js'
import {createPopper} from '@popperjs/core';

@Component({
    tag: 'spx-navigation',
})

export class SpxNavigation {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) menu: string;
    @State() menuArray: Array<string>;

    @Prop({reflectToAttr: true}) styling: string;

    @Prop({reflectToAttr: true}) mobile: number;
    @State() mobileBP: boolean;

    @Prop({reflectToAttr: true}) vertical: boolean;

    @Prop({reflectToAttr: true}) itemUnderline: boolean;
    @Prop({reflectToAttr: true}) itemUnderlineHover: boolean;

    @Prop({reflectToAttr: true}) parentItemGap: string = '8px';
    @Prop({reflectToAttr: true}) parentItemPadding: string = '8px';
    @Prop({reflectToAttr: true}) parentItemColor: string = '#444444';
    @Prop({reflectToAttr: true}) parentItemColorHover: string = '#202020';
    @Prop({reflectToAttr: true}) parentItemBackground: string = '#ffffff';
    @Prop({reflectToAttr: true}) parentItemBackgroundHover: string = '#f5f5f5';

    @Prop({reflectToAttr: true}) childGap: string = '8px';
    @Prop({reflectToAttr: true}) childBorder: string = '1px solid #eeeeee';
    @Prop({reflectToAttr: true}) childChildGap: string = '12px';
    @Prop({reflectToAttr: true}) childIndicatorGap: string = '4px';
    @Prop({reflectToAttr: true}) childItemPadding: string = '8px 12px';
    @Prop({reflectToAttr: true}) childItemColor: string = '#444444';
    @Prop({reflectToAttr: true}) childItemColorHover: string = '#202020';
    @Prop({reflectToAttr: true}) childItemBackground: string = '#ffffff';
    @Prop({reflectToAttr: true}) childItemBackgroundHover: string = '#f5f5f5';

    @Prop({reflectToAttr: true}) iconChild: string;

    @Prop({reflectToAttr: true}) mobilePlacement: string = 'bottom';

    /** Init popper on mouse/touch enter. */

    @Listen('ontouchstart', {target: this.el})
    @Listen('mouseenter', {target: this.el})
    clickListener() {
        if (this.styling !== 'none') {
            if (this.mobileBP) {
                this.initPopperMobile();
            } else {
                this.initPopperDesktop();
            }
        }
    }

    /** Listen to window resize. */

    @Listen('resize', {target: 'window'})
    checkIfMobile() {
        this.mobileBP = window.innerWidth < this.mobile;
    }

    /** Watch menu prop and parse to iteratable array. */

    @Watch('menu')
    parseImagesProp(newValue: string) {
        if (newValue) this.menuArray = JSON.parse(newValue);
    }

    componentWillLoad() {

        /** If menu prop is set. */

        this.parseImagesProp(this.menu);
    }

    componentDidLoad() {

        /** Check if is mobile view. */

        this.checkIfMobile();

        /** Sort menu items. */

        this.sortMenuItem();
    }

    componentDidUpdate() {
        this.sortMenuItem();
    }

    /** Render menu function. */

    renderMenu(obj, type, mobile) {

        function checkMobile() {
            if (mobile) {
                return 'spx-navigation--' + type + '' + ' ' + 'spx-navigation--mobile';
            } else {
                return 'spx-navigation--' + type + '';
            }
        }

        return <div class={checkMobile()}>
            <ul>
                {Object.values(obj).map((object) => {
                    let objectChild = object['spxChildren'];
                    let extraClasses = object['classes'].map((objectClasses) => objectClasses).toString().replace(/,/g, '  ');

                    return <li
                        class={object['spxChildren']

                            /** Check if menu has any children. */

                            ? 'spx-navigation__item--' + type + '' + ' ' + 'spx-navigation__item--has-child' + extraClasses
                            : 'spx-navigation__item--' + type + '' + ' ' + extraClasses}

                        data-order={object['menu_order']}>

                        <a href={object['url']}>
                            {object['title']}

                            {(objectChild && !this.mobileBP && !this.iconChild) ?

                                /** Render caret if has any children. */

                                <spx-icon type="caret"/>

                                : (objectChild && !this.mobileBP && this.iconChild) ?

                                    <i class={this.iconChild}/>

                                    : null}
                        </a>

                        {objectChild && !mobile &&
                        this.renderMenu(object['spxChildren'], 'child', false)}

                        {objectChild && mobile &&
                        this.renderMenu(object['spxChildren'], 'child', true)}

                        {}
                    </li>
                })}
            </ul>
        </div>
    }

    sortMenuItem() {

        /** Sort menu items depending on menu order. */

        let dataItems = this.el.querySelectorAll("li");
        let dataArray = [];
        for (let i = 0; i < dataItems.length; ++i) {
            dataArray.push(dataItems[i]);
        }
        dataArray.sort(function (a, b) {
            return +a.getAttribute("data-order") - +b.getAttribute("data-order");
        });

        dataArray.forEach(e => {
            e.closest('ul').appendChild(e);
        });
    }

    initPopperDesktop() {

        /** Init popper for parent menu. */

        let parentMenu = this.el.querySelectorAll('.spx-navigation--parent .spx-navigation__item--parent.spx-navigation__item--has-child');

        if (parentMenu) {
            parentMenu.forEach(item => {
                createPopper(item, item.querySelector('div'), {
                    // @ts-ignore
                    placement: this.mobilePlacement,
                });
            })
        }

        /** Init popper for child menu. */

        let childMenus = this.el.querySelectorAll('.spx-navigation--child .spx-navigation__item--child.spx-navigation__item--has-child');

        if (childMenus) {
            childMenus.forEach(item => {
                createPopper(item, item.querySelector('div'), {
                    placement: 'right-start',
                    modifiers: [
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements: ['left-start'],
                            },
                        },

                        /** Calculate offset depending on parent padding/margin. */

                        {
                            name: 'offset',
                            options: {
                                offset: ({placement}) => {
                                    if (placement === 'right-start') {
                                        return [-Math.abs(item.getBoundingClientRect().top - item.parentElement.getBoundingClientRect().top), Math.abs(item.getBoundingClientRect().right - item.parentElement.getBoundingClientRect().right)];
                                    } else {
                                        return [-Math.abs(item.getBoundingClientRect().top - item.parentElement.getBoundingClientRect().top), Math.abs(item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left)];
                                    }
                                },
                            },
                        },
                    ],
                });
            })
        }
    }

    initPopperMobile() {

        /** Init popper for mobile menu. */

        let mobileMenu = this.el.querySelector('.spx-navigation-mobile-button');

        if (mobileMenu) {
            createPopper(mobileMenu, mobileMenu.querySelector('.spx-navigation--mobile'), {
                placement: 'bottom',
            });
        }

    }

    render() {

        /** Style default. */

        const styleDefault = css({
            display: constants.styleDisplay,

            '*': {
                fontFamily: constants.styleFontFamily,
            },

            'ul': {
                margin: '0',
                padding: '0',
                listStyleType: 'none',

                'ul': {
                    paddingLeft: this.mobileBP && '10px',
                }
            },

            'ul ul, .spx-navigation--mobile ul': {
                display: 'grid',
                gridAutoFlow: 'row',
                gridAutoRows: 'max-content',
                gridAutoColumns: 'max-content',
                border: !this.mobileBP && 'var(--spx-navigation-child-border, ' + this.childBorder + ')',
            },

            '.spx-navigation--parent > ul': {
                display: 'grid',
                gridAutoFlow: (this.mobileBP || this.vertical) ? 'row' : 'column',
                gridAutoColumns: 'max-content',
                gridAutoRows: (this.mobileBP || this.vertical) && 'max-content',
                gridGap: 'var(--spx-navigation-parent-item-gap, ' + this.parentItemGap + ')',
            },

            '.spx-navigation__item--parent': {
                'a': {
                    padding: 'var(--spx-navigation-parent-item-padding, ' + this.parentItemPadding + ')',
                    color: 'var(--spx-navigation-parent-item-color, ' + this.parentItemColor + ')',
                    background: 'var(--spx-navigation-parent-item-background, ' + this.parentItemBackground + ')',

                    '&:hover': {
                        color: 'var(--spx-navigation-parent-item-color-hover, ' + this.parentItemColorHover + ')',
                        background: 'var(--spx-navigation-parent-item-background-hover, ' + this.parentItemBackgroundHover + ')',
                    }
                },

                '&.spx-navigation__item--has-child > .spx-navigation--child': {
                    flexDirection: 'column',

                    'a': {
                        width: '100%',
                        color: !this.mobileBP && 'var(--spx-navigation-child-item-color, ' + this.childItemColor + ')',
                        background: !this.mobileBP && 'var(--spx-navigation-child-item-background, ' + this.childItemBackground + ')',

                        '&:hover': {
                            color: !this.mobileBP && 'var(--spx-navigation-child-item-color-hover, ' + this.childItemColorHover + ')',
                            background: !this.mobileBP && 'var(--spx-navigation-child-item-background-hover, ' + this.childItemBackgroundHover + ')',
                        }
                    },

                    '::before': {
                        content: '" "',
                        position: 'relative',
                        display: this.mobileBP ? 'none' : 'block',
                        minHeight: 'var(--spx-navigation-child-gap, ' + this.childGap + ')',
                        width: '100%',
                    }
                },
            },

            '.spx-navigation--child, .spx-navigation--mobile': {
                pointerEvents: 'none',
                opacity: '0',
                position: 'absolute',
                display: 'flex',
                flexDirection: this.mobileBP ? 'column' : 'row',
            },

            '.spx-navigation--mobile .spx-navigation--child': {
                position: 'relative'
            },

            ['li:hover > .spx-navigation--child, ' +
            'li:focus-within > .spx-navigation--child, ' +
            '.spx-navigation-mobile-button:hover .spx-navigation--mobile, ' +
            '.spx-navigation-mobile-button:focus-within .spx-navigation--mobile' +
            '.spx-navigation-mobile-button:hover .spx-navigation--child, ' +
            '.spx-navigation-mobile-button:focus-within .spx-navigation--child']: {
                opacity: '1',
                pointerEvents: 'auto',
            },

            '.spx-navigation__item--child': {
                'a': {
                    padding: 'var(--spx-navigation-child-item-padding, ' + this.childItemPadding + ')',
                },

                '[data-popper-placement="left-start"]': {
                    flexDirection: 'row-reverse',
                },

                '[data-popper-placement]::before': {
                    content: '" "',
                    position: 'relative',
                    display: this.mobileBP ? 'none' : 'block',
                    minWidth: 'var(--spx-navigation-child-child-gap, ' + this.childChildGap + ')',
                    height: '100%',
                }
            },

            'li': {
                position: 'relative',
                display: !this.mobileBP && 'flex',
                flexDirection: 'row',
            },

            'a': {
                display: 'grid',
                gridAutoFlow: 'column',
                gridColumnGap: 'var(--spx-navigation-child-indicator-gap, ' + this.childIndicatorGap + ')',
                textDecoration: this.itemUnderline ? 'underline' : 'none',

                '&:hover': {
                    textDecoration: this.itemUnderlineHover && 'underline'
                }
            },

            '.spx-navigation-mobile-button': {
                cursor: 'pointer',
                maxWidth: 'fit-content',
                padding: 'var(--spx-navigation-parent-item-padding, ' + this.parentItemPadding + ')',
                color: 'var(--spx-navigation-parent-item-color, ' + this.parentItemColor + ')',
                background: 'var(--spx-navigation-parent-item-background, ' + this.parentItemBackground + ')',

                '&:hover': {
                    color: 'var(--spx-navigation-parent-item-color-hover, ' + this.parentItemColorHover + ')',
                    background: 'var(--spx-navigation-parent-item-background-hover, ' + this.parentItemBackgroundHover + ')',
                },

                '.spx-navigation--parent': {
                    '::before': {
                        content: '" "',
                        position: 'relative',
                        display: 'block',
                        minHeight: 'var(--spx-navigation-child-child-gap, ' + this.childChildGap + ')',
                        width: '100%',
                    },

                    '> ul': {
                        background: 'var(--spx-navigation-child-item-background, ' + this.childItemBackground + ')',
                        border: 'var(--spx-navigation-child-border, ' + this.childBorder + ')',
                    },
                }
            },
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>

            {this.menu && !this.mobileBP &&

            /** Render desktop menu. */

            this.renderMenu(this.menuArray, 'parent', false)}

            {this.menu && this.mobileBP &&

            /** Render mobile menu. */

            <div class='spx-navigation-mobile-button'>
                Menu
                {this.renderMenu(this.menuArray, 'parent', true)}
            </div>}

        </Host>
    }
}
