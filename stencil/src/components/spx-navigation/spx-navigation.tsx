import {Component, h, Host, Element, Prop, State, Watch, Listen} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js'
import {createPopper} from '@popperjs/core';

@Component({
  tag: 'spx-navigation',
})

export class SpxNavigation {
  @Element() el: HTMLElement;

  @Prop({reflectToAttr: true}) styling: string;
  @Prop({reflectToAttr: true}) mobile: number;
  @State() mobileBP: boolean;

  @Prop({reflectToAttr: true}) parentItemGap: string = '24px';
  @Prop({reflectToAttr: true}) childGap: string = '12px';
  @Prop({reflectToAttr: true}) childPadding: string = '12px';
  @Prop({reflectToAttr: true}) childBorderRadius: string = constants.styleBorderRadius;
  @Prop({reflectToAttr: true}) childItemGap: string = '12px';
  @Prop({reflectToAttr: true}) childIndicatorGap: string = '4px';

  @Prop({reflectToAttr: true}) linkColor: string = '#202020';

  @Prop({reflectToAttr: true}) iconChild: string;

  @Prop({reflectToAttr: true}) menu: string;
  @State() menuArray: Array<string>;

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

          return <li
            class={object['spxChildren']

              /** Check if menu has any children. */

              ? 'spx-navigation__item--' + type + '' + ' ' + 'spx-navigation__item--has-child'
              : 'spx-navigation__item--' + type + ''}>

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
          </li>
        })}
      </ul>
    </div>
  }

  initPopperDesktop() {

    /** Init popper for parent menu. */

    let parentMenu = this.el.querySelectorAll('.spx-navigation--parent .spx-navigation__item--parent.spx-navigation__item--has-child');

    if (parentMenu) {
      parentMenu.forEach(item => {
        createPopper(item, item.querySelector('div'), {
          placement: 'bottom-start',
        });
      })
    }

    /** Init popper for child menu. */

    let childMenus = this.el.querySelectorAll('.spx-navigation--child .spx-navigation__item--child.spx-navigation__item--has-child');

    if (childMenus) {
      childMenus.forEach(item => {
        createPopper(item, item.querySelector('div'), {
          placement: 'right',
          modifiers: [
            {
              name: 'flip',
              options: {
                fallbackPlacements: ['left'],
              },
            },

            /** Calculate offset depending on parent padding/margin. */

            {
              name: 'offset',
              options: {
                offset: ({placement}) => {
                  if (placement === 'right') {
                    return [0, Math.abs(item.getBoundingClientRect().right - item.parentElement.getBoundingClientRect().right)];
                  } else {
                    return [0, Math.abs(item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left)];
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
        placement: 'bottom-start',
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
      },

      'ul ul, .spx-navigation--mobile ul': {
        display: 'grid',
        gridAutoFlow: 'row',
        gridAutoRows: 'max-content',
        gridAutoColumns: 'max-content',
        gridRowGap: 'var(--spx-navigation-child-item-gap, ' + this.childItemGap + ')',
        padding: this.mobileBP
          ? 'var(--spx-navigation-child-padding, ' + this.childPadding + ') 0 0 0'
          : 'var(--spx-navigation-child-padding, ' + this.childPadding + ') 0 var(--spx-navigation-child-padding, ' + this.childPadding + ') 0',
        background: 'var(--spx-navigation-background--child, #ffffff)',
        border: !this.mobileBP && 'var(--spx-navigation-border--child, 1px solid #eeeeee)',
        borderRadius: 'var(--spx-navigation-child-border-radius, ' + this.childBorderRadius + ')',

        'a': {
          width: '100%',
        }
      },

      '.spx-navigation--parent > ul': {
        display: 'grid',
        gridAutoFlow: this.mobileBP ? 'row' : 'column',
        gridAutoColumns: 'max-content',
        gridAutoRows: this.mobileBP && 'max-content',
        gridColumnGap: 'var(--spx-navigation-parent-item-gap, ' + this.parentItemGap + ')',
        gridRowGap: this.mobileBP && 'var(--spx-navigation-child-item-gap, ' + this.childItemGap + ')',
      },

      '.spx-navigation__item--parent': {
        padding: this.mobileBP && '0 var(--spx-navigation-child-padding, ' + this.childPadding + ') 0 var(--spx-navigation-child-padding, ' + this.childPadding + ')',

        '&.spx-navigation__item--has-child > .spx-navigation--child': {
          flexDirection: 'column',

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
        padding: '0 var(--spx-navigation-child-padding, ' + this.childPadding + ') 0 var(--spx-navigation-child-padding, ' + this.childPadding + ')',

        '[data-popper-placement="left"]': {
          flexDirection: 'row-reverse',
        },

        '[data-popper-placement]::before': {
          content: '" "',
          position: 'relative',
          display: this.mobileBP ? 'none' : 'block',
          minWidth: 'var(--spx-navigation-child-gap, ' + this.childGap + ')',
          height: '100%',
        }
      },

      'li': {
        position: 'relative',
        display: !this.mobileBP && 'flex',
        flexDirection: 'row',
      },

      'a': {
        width: 'max-content',
        display: 'grid',
        gridAutoFlow: 'column',
        gridColumnGap: this.childIndicatorGap,
        color: 'var(--spx-navigation-link-color, ' + this.linkColor + ')',
        textDecoration: 'none',
      },

      '.spx-navigation-mobile-button': {
        cursor: 'pointer',
        maxWidth: 'fit-content',

        'ul': {
          cursor: 'unset',
        },

        '.spx-navigation--parent': {
          '::before': {
            content: '" "',
            position: 'relative',
            display: 'block',
            minHeight: 'var(--spx-navigation-child-gap, ' + this.childGap + ')',
            width: '100%',
          },

          '> ul': {
            border: 'var(--spx-navigation-border--child, 1px solid #eeeeee)',
            paddingBottom: 'var(--spx-navigation-child-padding, ' + this.childPadding + ')',
          }
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
