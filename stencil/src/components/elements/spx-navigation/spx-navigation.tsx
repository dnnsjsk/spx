import {
  Component,
  // eslint-disable-next-line no-unused-vars
  h,
  Element,
  Prop,
  State,
  Watch,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { createPopper } from '@popperjs/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { Button } from '../../../elements/Button';
import { setProperty } from '../../../utils/dom/setProperty';
import { parse } from '../../../utils/strings/parse';

const tag = 'spx-navigation';

/** Render a complete WordPress menu with nested submenus and automatic positioning. */
@Component({
  tag: 'spx-navigation',
  styleUrl: 'spx-navigation.scss',
  shadow: true,
})
export class SpxNavigation {
  // eslint-disable-next-line no-undef
  @Element() el?: HTMLSpxNavigationElement;

  @State() menuArray: Array<string>;

  /** @css */
  @Prop({ reflect: true }) childBorder: string =
    '1px solid var(--spx-color-gray-200)';

  /**
   * Child menu border-radius.
   *
   * @css
   */
  @Prop({ reflect: true }) childBorderRadius: string = '0';

  /**
   * Child menu box-shadow.
   *
   * @css
   */
  @Prop({ reflect: true }) childBoxShadow: string =
    '0 3px 10px 0 rgba(0,0,0,0.05)';

  /**
   * Gap between nested child menus.
   *
   * @css
   */
  @Prop({ reflect: true }) childChildGap: string = '0.8em';

  /**
   * Gap between top level menu items and child menus.
   *
   * @css
   */
  @Prop({ reflect: true }) childGap: string = '0.5em';

  /** Indicator icon. */
  @Prop({ reflect: true }) childIcon: string = 'arrow-down';

  /** Indicator icon type. */
  @Prop({ reflect: true }) childIconType: string = 'ionicons';

  /**
   * Gap between child menu indicator and text.
   *
   * @css
   */
  @Prop({ reflect: true }) childIndicatorGap: string = '0.2em';

  /** @css */
  @Prop({ reflect: true }) childItemBackground: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) childItemBackgroundHover: string =
    'var(--spx-color-gray-100)';

  /** @css */
  @Prop({ reflect: true }) childItemColor: string = 'var(--spx-color-gray-700)';

  /** @css */
  @Prop({ reflect: true }) childItemColorHover: string =
    'var(--spx-color-gray-900)';

  /** @css */
  @Prop({ reflect: true }) childItemPadding: string = '0.6em 0.8em';

  /**
   * Child menu placement.
   *
   * @css
   * @choice start, end
   */
  @Prop({ reflect: true }) childPlacement: string = 'start';

  /** @css */
  @Prop({ reflect: true }) fontSize: string = 'clamp(18px, 1.6vw, 20px)';

  @Prop({ reflect: true, mutable: true }) isMobile: boolean;

  /** Underlines all links. */
  @Prop({ reflect: true }) itemUnderline: boolean;

  /** Underlines all links on hover. */
  @Prop({ reflect: true }) itemUnderlineHover: boolean;

  /**
   * Renders a WordPress menu.
   *
   * @helper &lt;?php spxGetNavigation( $menuName ); ?>
   * @function spxGetNavigation
   */
  @Prop({ reflect: true }) menu: string;

  /** Mobile breakpoint. */
  @Prop({ reflect: true }) mobile: number = 768;

  /** Mobile button icon. */
  @Prop({ reflect: true }) mobileIcon: string;

  /** Mobile button icon type. */
  @Prop({ reflect: true }) mobileIconType: string = 'ionicons';

  /** @css */
  @Prop({ reflect: true }) mobileItemBackground: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) mobileItemBackgroundHover: string =
    'var(--spx-color-gray-100)';

  /** @css */
  @Prop({ reflect: true }) mobileItemColor: string =
    'var(--spx-color-gray-800)';

  /** @css */
  @Prop({ reflect: true }) mobileItemColorHover: string =
    'var(--spx-color-gray-900)';

  /** @css */
  @Prop({ reflect: true }) mobileItemNestedMarginLeft: string = '0.8em';

  /** @css */
  @Prop({ reflect: true }) mobileItemPadding: string = '0.6em';

  /**
   * Mobile placement.
   *
   * @choice start, end
   */
  @Prop({ reflect: true }) mobilePlacement: string = 'start';

  /** @css */
  @Prop({ reflect: true }) parentItemBackground: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) parentItemBackgroundHover: string =
    'var(--spx-color-gray-100)';

  /** @css */
  @Prop({ reflect: true }) parentItemColor: string =
    'var(--spx-color-gray-800)';

  /** @css */
  @Prop({ reflect: true }) parentItemColorHover: string =
    'var(--spx-color-gray-900)';

  /**
   * Gap between parent menu items.
   *
   * @css
   */
  @Prop({ reflect: true }) parentItemGap: string = '0.4em';

  /** @css */
  @Prop({ reflect: true }) parentItemPadding: string = '0.6em';

  /** Renders menu vertically. */
  @Prop({ reflect: true }) vertical: boolean;

  @Watch('menu')
  navigationChanged(newValue: string) {
    if (newValue) this.menuArray = parse(newValue);
  }

  @Watch('childBorder')
  @Watch('childBorderRadius')
  @Watch('childBoxShadow')
  @Watch('childChildGap')
  @Watch('childGap')
  @Watch('childIndicatorGap')
  @Watch('childItemBackground')
  @Watch('childItemBackground')
  @Watch('childItemBackgroundHover')
  @Watch('childItemColor')
  @Watch('childItemColorHover')
  @Watch('childItemPadding')
  @Watch('fontSize')
  @Watch('mobileItemBackground')
  @Watch('mobileItemBackgroundHover')
  @Watch('mobileItemColor')
  @Watch('mobileItemColorHover')
  @Watch('mobileItemNestedMarginLeft')
  @Watch('mobileItemPadding')
  @Watch('parentItemBackground')
  @Watch('parentItemBackgroundHover')
  @Watch('parentItemColor')
  @Watch('parentItemColorHover')
  @Watch('parentItemGap')
  @Watch('parentItemPadding')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxNavigationDidLoad' })
  spxNavigationDidLoad: EventEmitter;

  @Listen('ontouchstart')
  @Listen('mouseenter')
  @Listen('focusin')
  onClick() {
    if (this.isMobile) {
      this.initPopperMobile();
    } else {
      this.initPopperDesktop();
      this.initPopperDesktop();
    }
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    this.isMobile = window.innerWidth < this.mobile;
  }

  componentWillLoad() {
    this.onResize();
    this.navigationChanged(this.menu);
  }

  componentDidLoad() {
    this.sortMenuItem();
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'childBorder',
        'childBorderRadius',
        'childBoxShadow',
        'childChildGap',
        'childGap',
        'childIndicatorGap',
        'childItemBackground',
        'childItemBackground',
        'childItemBackgroundHover',
        'childItemColor',
        'childItemColorHover',
        'childItemPadding',
        'fontSize',
        'mobileItemBackground',
        'mobileItemBackgroundHover',
        'mobileItemColor',
        'mobileItemColorHover',
        'mobileItemNestedMarginLeft',
        'mobileItemPadding',
        'parentItemBackground',
        'parentItemBackgroundHover',
        'parentItemColor',
        'parentItemColorHover',
        'parentItemGap',
        'parentItemPadding',
      ],
    });
    this.spxNavigationDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  componentDidUpdate() {
    this.sortMenuItem();
  }

  private renderMenu = (obj, type, mobile) => {
    const checkMobile = () => {
      if (mobile) {
        return type + '' + ' ' + 'mobile';
      } else {
        return type;
      }
    };

    return (
      <div class={checkMobile()}>
        <ul>
          {Object.values(obj).map((object) => {
            const objectChild = object['spxChildren'];
            const extraClasses = object['classes']
              .map((objectClasses) => objectClasses)
              .toString()
              .replace(/,/g, '  ');

            return (
              <li
                class={
                  object['spxChildren']
                    ? 'item--' +
                      type +
                      '' +
                      ' ' +
                      'item--has-child' +
                      extraClasses
                    : 'item--' + type + '' + ' ' + extraClasses
                }
                data-order={object['menu_order']}
              >
                <Button href={object['url'] === '#' ? '#0' : object['url']}>
                  {object['title']}
                  {objectChild &&
                    !this.isMobile &&
                    !this.vertical &&
                    this.childIcon && (
                      <spx-icon
                        type={this.childIconType}
                        icon={this.childIcon}
                      />
                    )}
                </Button>

                {objectChild &&
                  !mobile &&
                  this.renderMenu(object['spxChildren'], 'child', false)}

                {objectChild &&
                  mobile &&
                  this.renderMenu(object['spxChildren'], 'child', true)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  private sortMenuItem = () => {
    const dataItems = this.el.shadowRoot.querySelectorAll('li');
    const dataArray = [];
    for (let i = 0; i < dataItems.length; ++i) {
      dataArray.push(dataItems[i]);
    }
    dataArray.sort(function (a, b) {
      return +a.getAttribute('data-order') - +b.getAttribute('data-order');
    });

    dataArray.forEach((e) => {
      e.closest('ul').appendChild(e);
    });
  };

  private initPopperDesktop = () => {
    if (!this.vertical) {
      const parentMenu = this.el.shadowRoot.querySelectorAll(
        'nav > .parent .item--parent.item--has-child'
      );

      if (parentMenu) {
        parentMenu.forEach((item) => {
          createPopper(item, item.querySelector('div'), {
            // @ts-ignore
            placement: 'bottom-' + this.childPlacement + '',
          });
        });
      }

      const childMenus = this.el.shadowRoot.querySelectorAll(
        'nav > .parent .child .item--child.item--has-child'
      );

      if (childMenus) {
        childMenus.forEach((item) => {
          createPopper(item, item.querySelector('div'), {
            placement: 'right-start',
            strategy: 'fixed',
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: ['left-start'],
                },
              },
              {
                name: 'offset',
                options: {
                  offset: ({ placement }) => {
                    if (placement === 'right-start') {
                      return [
                        -Math.abs(
                          item.getBoundingClientRect().top -
                            item.parentElement.getBoundingClientRect().top
                        ),
                        Math.abs(
                          item.getBoundingClientRect().right -
                            item.parentElement.getBoundingClientRect().right
                        ),
                      ];
                    } else {
                      return [
                        -Math.abs(
                          item.getBoundingClientRect().top -
                            item.parentElement.getBoundingClientRect().top
                        ),
                        Math.abs(
                          item.getBoundingClientRect().left -
                            item.parentElement.getBoundingClientRect().left
                        ),
                      ];
                    }
                  },
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  rootBoundary: item,
                  padding: -1,
                },
              },
            ],
          });
        });
      }
    }
  };

  private initPopperMobile = () => {
    const mobileMenu = this.el.shadowRoot.querySelector('.mobile__button');

    if (mobileMenu) {
      createPopper(mobileMenu, mobileMenu.querySelector('.mobile'), {
        // @ts-ignore
        placement: 'bottom-' + this.mobilePlacement + '',
      });
    }
  };

  private renderNav = () => {
    return (
      this.menu && [
        this.renderMenu(this.menuArray, 'parent', false),

        <div tabindex="0" role="button" class="mobile__button">
          {this.mobileIcon && (
            <spx-icon type={this.mobileIconType} icon={this.mobileIcon} />
          )}
          <span>Menu</span>
          {this.renderMenu(this.menuArray, 'parent', true)}
        </div>,
      ]
    );
  };

  render() {
    return <nav>{this.renderNav()}</nav>;
  }
}
