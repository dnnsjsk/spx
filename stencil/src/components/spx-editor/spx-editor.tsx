import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  State,
  Prop,
  Listen,
} from '@stencil/core';
import { css } from 'emotion';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { startCase, kebabCase, some, filter } from 'lodash-es';
import tippy from 'tippy.js';
import Clipboard from 'clipboard';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import * as s from '../../constants/style';
import * as accordion from '../../../../data/components/spx-accordion.json';
import * as animate from '../../../../data/components/spx-animate.json';
import * as classToggle from '../../../../data/components/spx-class-toggle.json';
import * as code from '../../../../data/components/spx-code.json';
import * as editButton from '../../../../data/components/spx-edit-button.json';
import * as group from '../../../../data/components/spx-group.json';
import * as iframe from '../../../../data/components/spx-iframe.json';
import * as imageComparison from '../../../../data/components/spx-image-comparison.json';
import * as lightbox from '../../../../data/components/spx-lightbox.json';
import * as masonry from '../../../../data/components/spx-masonry.json';
import * as mockup from '../../../../data/components/spx-mockup.json';
// import * as navigation from '../../../../data/components/spx-navigation.json'
import * as notation from '../../../../data/components/spx-notation.json';
import * as offset from '../../../../data/components/spx-offset.json';
// import * as scrollspy from '../../../../data/components/spx-scrollspy.json'
import * as share from '../../../../data/components/spx-share.json';
import * as slider from '../../../../data/components/spx-slider.json';
import * as slideshow from '../../../../data/components/spx-slideshow.json';
import * as snackbar from '../../../../data/components/spx-snackbar.json';
import * as typewriter from '../../../../data/components/spx-typewriter.json';
import { titleCase } from '../../utils/titleCase';

@Component({
  tag: 'spx-editor',
  styleUrl: 'spx-editor.scss',
})
export class SpxEditor {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorElement;
  private component: HTMLElement;
  private sidebar: HTMLElement;
  private controls: HTMLElement;
  private export: HTMLElement;

  @State() comp;
  @State() ar;
  @State() current;
  @State() queryObj;
  @State() query;
  @State() mobile;
  @State() headerHeight;
  @State() adjustedValues;

  @Prop({ reflect: true }) fullscreen: boolean = false;

  @Prop({ reflect: true }) location: string;

  @Listen('resize', { target: 'window' })
  onResize() {
    if (window.innerWidth < 1024) {
      this.fullscreen = false;
      clearAllBodyScrollLocks();
      this.mobile = true;
    } else {
      this.mobile = false;
    }
    if (document.querySelector('spx-section-header')) {
      this.headerHeight = document.querySelector(
        'spx-section-header'
      ).offsetHeight;
    }
  }

  @Listen('keydown', { target: 'document' })
  onKeyDown(e) {
    if (e.key === 'Escape' && this.fullscreen) {
      this.fullscreen = false;
      clearAllBodyScrollLocks();
    }
  }

  componentWillLoad() {
    this.onResize();

    /** Check for search query. */

    window.addEventListener(
      'popstate',
      () => {
        const pattern = /[?id]/;
        const URL = location.search.substring(1);

        if (pattern.test(URL)) {
          this.createQueryObject();
          this.createQueryComponent();
        }
      },
      false
    );

    /** Create object with all components. */

    this.ar = {
      accordion: accordion,
      animate: animate,
      'class-toggle': classToggle,
      code: code,
      'edit-button': editButton,
      group: group,
      iframe: iframe,
      'image-comparison': imageComparison,
      lightbox: lightbox,
      masonry: masonry,
      mockup: mockup,
      // navigation: navigation,
      notation: notation,
      offset: offset,
      // scrollspy: scrollspy,
      share: share,
      slider: slider,
      slideshow: slideshow,
      snackbar: snackbar,
      typewriter: typewriter,
    };

    /** Check if query string is there and use it's data instead. */

    const pattern = /[?id]/;
    const URL = location.search.substring(1);

    if (pattern.test(URL)) {
      this.createQueryObject();
    } else {
      this.query = false;
      this.current = 'accordion';
    }
  }

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    /** Init libs. */

    tippy('[data-tippy-content]');
    // eslint-disable-next-line no-new
    new Clipboard(this.export);

    /** Check if query string is there and use it's data instead. */

    if (this.query === true) {
      this.createQueryComponent();
    } else {
      /** Otherwise create accordion. */

      this.createComponent(this.current);
      this.createQueryString();
    }
  }

  componentDidRender() {
    /** Remove first and last apostrophe. */

    this.removeStringFirstLast();
  }

  private createQueryString() {
    const controls = {};

    this.controls.querySelectorAll('input, select').forEach((item) => {
      const input = item as HTMLInputElement;
      if (item.getAttribute('type') === 'checkbox') {
        controls[item.getAttribute('data-attr')] = input.checked;
      } else {
        controls[item.getAttribute('data-attr')] = input.value;
      }
    });

    const searchQuery = {
      id: this.current,
      ...controls,
    };

    history.pushState(
      {},
      null,
      this.location +
        '?' +
        encodeURIComponent(new URLSearchParams(searchQuery).toString())
    );
  }

  private createQueryObject() {
    const URL = decodeURIComponent(location.search.substring(1));

    this.query = true;
    this.queryObj = JSON.parse(
      '{"' +
        URL.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
        '"}'
    );
    this.current = this.queryObj['id'];
  }

  private createQueryComponent() {
    /** Create component and set correct value. */

    this.createComponent(this.queryObj['id']);
    const component = this.el.querySelector('#component') as HTMLInputElement;
    component.value = this.queryObj['id'];

    /** Delete ID again since it's not needed for the other values. */

    delete this.queryObj['id'];

    /** Set individual values. */

    Object.entries(this.queryObj).map((key) => {
      /** Get constants. */

      const item = this.controls.querySelector(
        '[data-attr="' + key[0] + '"]'
      ) as HTMLInputElement;
      const component = this.component.querySelector(
        'spx-' + this.current + ''
      );
      const string = key[1] as string;

      /** Set value if checkbox or text input. */

      if (item && item.getAttribute('type') === 'checkbox') {
        if (key[1] === 'true') {
          component.setAttribute(key[0], '');
          item.checked = true;
        } else {
          component.removeAttribute(key[0]);
          item.checked = false;
        }
      } else if (item) {
        item.value = decodeURIComponent(string.replace(/\+/g, '%20'));
        component.setAttribute(
          key[0],
          decodeURIComponent(string.replace(/\+/g, '%20'))
        );
      }
    });
  }

  private setDefault = (attr, value) => {
    const create = () => {
      if (this.controls.querySelector('[data-attr="' + attr + '"]')) {
        const input = this.controls.querySelector(
          '[data-attr="' + attr + '"]'
        ) as HTMLInputElement;
        input.value = value;
        this.comp.setAttribute(attr, value);
      } else {
        setTimeout(create, 0);
      }
    };
    create();
  };

  private createComponent(component) {
    this.adjustedValues = {};

    /** Images. */

    const img =
      '<img src="/wp-content/themes/spx-child/assets/images/playground/andre-benz-RRshxnCn8Lk-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/beasty--HxIhfS_dUk-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/domenico-loia-BkEF69vp3Ck-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/erol-ahmed-FTy5VSGIfiQ-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/ian-dooley-aaAllJ6bmac-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/jason-briscoe--T0La6F_WrE-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/jing-xi-lau-3ccEU_8ddog-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/leo-manjarrez--vygi0Cvz_c-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/michele-tardivo-UyiDcG_AXXs-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/mike-yukhtenko-Dv2n1Tv_WcI-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/mike-yukhtenko-NB9XC3h_jWo-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/nichlas-andersen-ZFXrgzHu1KU-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/niti-k-Ie430IZPF90-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/ryan-spencer-WJDR8_QxVR8-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/s-o-c-i-a-l-c-u-t-9b2KOWOP0OY-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/scott-webb-TYso4-CK-as-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-0_x2PkKmx1Q-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-0aFrSMJ3i-g-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-8FUD82rlJxs-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-93J0T3YU6io-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-GnHUOyPV0WI-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-Gruxs0ZQw7E-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-Km8L8QoJIq8-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/simone-hutsch-MO2tsiJ5Bek-unsplash.jpg"/>' +
      '<img src="/wp-content/themes/spx-child/assets/images/playground/zdenek-klein-mQAaKT4SuU4-unsplash.jpg"/>' +
      '';

    /** Create component. */

    this.comp = document.createElement('spx-' + component);
    this.component.innerHTML = '';

    /** Animate. */

    if (component === 'animate') {
      this.comp.innerHTML =
        '<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>' +
        '<h1>Sed vel ante nec urna iaculis faucibus.</h1>' +
        '<h1>Nam bibendum, erat vel ultricies finibus, justo risus elementum dui, at egestas diam justo nec turpis.</h1>' +
        '<h1>Sed imperdiet neque lorem, eget semper ante vehicula ac.</h1>' +
        '<h1>Quisque a maximus risus.</h1>' +
        '<h1>Morbi facilisis elit sed ex pellentesque suscipit.</h1>' +
        '<h1>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</h1>' +
        '<h1>Sed tincidunt eros non libero ultricies, volutpat mollis erat ultricies.</h1>' +
        '<h1>Integer ut nisl ut tellus tincidunt ultrices nec eget elit.</h1>' +
        '<h1>Proin malesuada augue dolor, ut laoreet libero fringilla vel.</h1>';
    }

    /** Class Toggle. */

    if (component === 'class-toggle') {
      this.comp.innerHTML =
        '<spx-section-button class="editor">' +
        'Click me!' +
        '<style>spx-section-button.editor a{color:white!important}spx-section-button.editor a.spx-class-toggle--active{background:#F50057 !important}</style>' +
        '</spx-section-button>';
    }

    /** Code. */

    if (component === 'code') {
      this.comp.setAttribute('type', 'css');
      this.comp.innerHTML =
        '' +
        'my-card {\n' +
        '&nbsp;&nbsp;background: white;\n' +
        '&nbsp;&nbsp;padding: 1em;\n' +
        '&nbsp;&nbsp;border-radius: 0.125em;\n' +
        '}';
    }

    if (component === 'edit-button') {
      this.comp.setAttribute('position-css', 'absolute');
      this.comp.setAttribute('test', '');
      const h1 = document.createElement('h1');
      h1.setAttribute('data-spx-edit', 'test');
      h1.innerHTML = 'Edit me!';
      this.component.appendChild(h1);
    }

    if (component === 'group') {
      this.comp.innerHTML =
        '<spx-accordion/>' + '<spx-accordion/>' + '<spx-accordion/>';
    }

    if (component === 'masonry' || component === 'lightbox') {
      this.comp.innerHTML = img;
    }

    if (component === 'notation') {
      this.comp.innerHTML =
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
      this.comp.classList.add(
        css({
          maxWidth: '500px',
        })
      );
    }

    if (component === 'offset') {
      const style = css({
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      });

      const header1 = document.createElement('div');
      header1.classList.add('header1');
      header1.classList.add(
        css({
          backgroundColor: 'lightgreen',
          height: '70px',
        })
      );
      header1.classList.add(style);
      header1.innerHTML = '.header1';

      const header2 = document.createElement('div');
      header2.classList.add('header2');
      header2.classList.add(
        css({
          backgroundColor: 'lightblue',
          height: '35px',
        })
      );
      header2.classList.add(style);
      header2.innerHTML = '.header2';

      this.setDefault('target', '.header1');
      this.comp.innerHTML = '<p>Adjusting my distance to an element height</p>';

      this.component.appendChild(header1);
      this.component.appendChild(header2);
    }

    if (component === 'slider') {
      this.comp.setAttribute('max-height', '500px');
      this.comp.setAttribute('max-width', '500px');
    }

    if (component === 'slider' || component === 'slideshow') {
      this.comp.classList.add(
        css({
          img: {
            margin: '0 !important',
            borderRadius: s.borderRadius,
          },
        })
      );
      this.comp.innerHTML = img;
    }

    if (component === 'snackbar') {
      this.comp.setAttribute('target', '#components');
      this.comp.setAttribute('identifier', 'components');
      this.comp.setAttribute('fixed', '');
      this.comp.setAttribute('position-css', 'absolute');
    }

    this.component.appendChild(this.comp);
  }

  private createComponentControl() {
    /** On select component. */

    const onSelect = (event) => {
      this.current = kebabCase(event.target.value);
      this.createComponent(this.current);
      setTimeout(() => this.createQueryString(), 100);
    };

    /** On reset component. */

    const onReset = () => {
      /** Reset inputs to data attribute. */

      this.sidebar.querySelectorAll('input').forEach((item) => {
        item.value = item.getAttribute('data-default');
      });

      /** Uncheck all checkboxes. */

      this.sidebar
        .querySelectorAll('input[type="checkbox"]')
        .forEach((item) => {
          const input = item as HTMLInputElement;
          input.checked = false;
        });
      this.removeStringFirstLast();
      this.createComponent(this.current);
      this.createQueryString();
    };

    /** Render select. */

    // eslint-disable-next-line react/jsx-no-bind
    return [
      <select
        onChange={(event) => onSelect(event)}
        name="components"
        id="component"
      >
        {Object.keys(this.ar).map((object) => {
          return (
            <option value={object}>
              {titleCase(object.replaceAll('-', ' '))}
            </option>
          );
        })}
      </select>,
      <div
        class={css({
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: '12px 0',
          gridGap: '12px',

          button: {
            borderRadius: s.borderRadius,
            height: '32px',
            textAlign: 'center',
            background: 'var(--spx-color-gray-100)',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            transitionProperty: 'background',
            transitionDuration: s.transitionDuration,
            transitionTimingFunction: s.transitionTimingFunction,

            '&:hover': {
              background: 'var(--spx-color-gray-200)',
            },
          },
        })}
      >
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <button onClick={() => onReset()}>Reset</button>
        {(this.current === 'animate' || this.current === 'notation') && (
          /* eslint-disable-next-line react/jsx-no-bind */
          <button
            onClick={() =>
              // @ts-ignore
              this.component.querySelector('spx-' + this.current + '').reload()
            }
          >
            Play
          </button>
        )}
      </div>,
    ];
  }

  private removeStringFirstLast() {
    this.el.querySelectorAll('input').forEach((item) => {
      if (item.value.slice(-1) === "'") {
        const value = item.value;
        item.value = value.slice(1, -1);
      }
    });
  }

  private createControls() {
    /** Update attributes on pressing enter. */

    const onSlider = () => {
      if (this.current === 'slider') {
        this.component.querySelector('spx-slider').reload();
      }
    };

    const onEnter = (event, attr) => {
      if (event.key === 'Enter') {
        if (this.current === 'typewriter') {
          this.createComponent(this.current);
          this.el.querySelector('spx-typewriter').setAttribute('text', attr);
          return;
        }

        // @ts-ignore
        this.component
          .querySelector(':scope ' + this.ar[this.current]['name'] + '')
          .setAttribute(
            this.current === 'group' ? 'g-' + attr : attr,
            event.target.value
          );
      }
      onSlider();
      this.createQueryString();
    };

    /** Immediately change all number inputs and checkboxes. */

    const onChange = (event, attr, type) => {
      if (type === 'boolean') {
        if (event.target.checked === true) {
          this.component
            .querySelector(':scope ' + this.ar[this.current]['name'] + '')
            .setAttribute(attr, '');
        } else {
          this.component
            .querySelector(':scope ' + this.ar[this.current]['name'] + '')
            .removeAttribute(attr);
        }
      } else {
        this.component
          .querySelector(':scope ' + this.ar[this.current]['name'] + '')
          .setAttribute(
            this.current === 'group' ? 'g-' + attr : attr,
            event.target.value
          );
      }
      onSlider();
      this.createQueryString();
    };

    /** Set up group properly. */

    const component = this.current === 'group' ? 'accordion' : this.current;

    /** Render props. */

    return Object.values(this.ar[component]['properties']).map((object) => {
      const attribute = kebabCase(object['name']);

      const defaultValue =
        some(object['tags'], { name: 'editor' }) === true
          ? filter(object['tags'], { name: 'editor' })[0]['text']
          : object['defaultValue'];

      const noControl = [
        '' + this.current + '-display',
        'animate-viewportMarginTop',
        'animate-viewportMarginRight',
        'animate-viewportMarginBottom',
        'animate-viewportMarginLeft',
        'accordion-indicatorIcon',
        'edit-button-test',
        'edit-button-type',
        'edit-button-editId',
        'edit-button-positionCss',
        'masonry-imageSize',
        'masonry-images',
        'masonry-imagesSrc',
        'notation-animation',
        'notation-multiline',
        'slider-pagination',
        'slider-autoheight',
        'slider-max-height',
        'slider-max-width',
        'slider-paginationTabsMaxWidth',
        'slider-bpTabs',
        'slider-images',
        'slider-imagesSrc',
        'slider-imagesSize',
        'snackbar-fixed',
        'snackbar-positionCss',
        'typewriter-autoStart',
        'typewriter-loop',
      ];

      if (
        (object['type'] === 'string' ||
          object['type'] === 'number' ||
          object['type'] === 'boolean') &&
        !noControl.includes(object['id'])
      ) {
        return [
          <div
            class={css({
              div: {
                position: 'relative',
                display: 'inline-block',
                maxWidth: object['type'] === 'boolean' ? 'max-content' : '100%',

                'input[type="checkbox"]': {
                  display: 'none',
                },

                label: {
                  display: 'block',
                  width: '48px',
                  height: '24px',
                  textIndent: '-150%',
                  clip: 'rect(0 0 0 0)',
                  color: 'transparent',
                  userSelect: 'none',
                },
                'label::before, label::after': {
                  content: '" "',
                  display: 'block',
                  position: 'absolute',
                  cursor: 'pointer',
                },
                'label::before': {
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#dedede',
                  borderRadius: '9999em',
                  transition: 'background-color 0.25s ease',
                },
                'label::after': {
                  top: '-1px',
                  left: '0',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
                  transition: 'left 0.25s ease',
                },
                'input[type="checkbox"]:checked + label::before': {
                  backgroundColor: 'var(--spx-color-primary-A700)',
                },
                'input[type="checkbox"]:checked + label::after': {
                  left: '24px',
                },
              },
            })}
          >
            <span>{startCase(object['name'])}</span>
            <div>
              {!some(object['tags'], { name: 'choice' }) ? (
                /** Render input if no choices are available. */

                [
                  <input
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onKeyDown={(event) =>
                      onEnter(event, kebabCase(object['name']))
                    }
                    /* eslint-disable-next-line react/jsx-no-bind */
                    onChange={(event) =>
                      onChange(event, kebabCase(object['name']), object['type'])
                    }
                    type={
                      object['type'] === 'boolean' ? 'checkbox' : object['type']
                    }
                    name={object['id']}
                    id={object['id']}
                    value={defaultValue}
                    data-default={defaultValue}
                    data-attr={attribute}
                  />,
                  object['type'] === 'boolean' && (
                    <label htmlFor={object['id']}>{object['name']}</label>
                  ),
                ]
              ) : (
                <select
                  /* eslint-disable-next-line react/jsx-no-bind */
                  onChange={(event) =>
                    onChange(event, attribute, object['type'])
                  }
                  name={object['id']}
                  id={object['id']}
                  data-default={defaultValue}
                  data-attr={attribute}
                >
                  {
                    /** Render select with choices. */
                    filter(object['tags'], { name: 'choice' })[0]
                      ['text'].replaceAll(',', '')
                      .replaceAll("'", '')
                      .split(' ')
                      .map((item) => {
                        return <option>{item}</option>;
                      })
                  }
                </select>
              )}
            </div>
          </div>,
        ];
      }
    });
  }

  private exportCode = () => {
    const el = this.component.querySelector('spx-' + this.current + '');
    this.export.setAttribute(
      'data-clipboard-text',
      String(
        el.outerHTML
          .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/g, '')
          .replace(/test="[a-zA-Z0-9:;.\s()\-,]*"/g, '')
          .replaceAll('  ', ' ')
          .split('>')[0]
      ) +
        '><!--Your code goes gere--></spx-' +
        this.current +
        '>'
    );
    const snackbar = document.createElement('spx-snackbar');
    snackbar.setAttribute('text', 'Code copied to clipboard');
    document.body.appendChild(snackbar);
  };

  private goFullscreen = () => {
    if (this.fullscreen === false) {
      this.fullscreen = true;
      disableBodyScroll(this.el);
    } else {
      this.fullscreen = false;
      clearAllBodyScrollLocks();
    }
  };

  render() {
    /** Host styles. */

    const styleHost = css({
      display: this.mobile ? 'flex' : 'grid',
      justifyContent: this.mobile && 'center',
      alignItems: this.mobile && 'center',
      background: '#ffffff',
      height:
        !this.mobile && !this.fullscreen
          ? 'calc(100vh - ' + this.headerHeight + 'px)'
          : !this.mobile && this.fullscreen
          ? '100vh'
          : '100px',
      width: this.fullscreen ? '100vw' : '100%',
      minHeight: !this.mobile && '500px',
      padding: this.mobile && '4vw',
      position: this.fullscreen && !this.mobile ? 'fixed' : 'relative',
      top: this.fullscreen && !this.mobile && '0',
      left: this.fullscreen && !this.mobile && '0',
      borderRadius: !this.fullscreen && s.borderRadius,
      border: !this.fullscreen && '1px solid var(--spx-color-gray-200)',
      zIndex: this.fullscreen && 102,
      overflow: 'hidden',
      gridTemplateColumns: '1fr 300px',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"header export"' + '"component sidebar"',

      '*:not(.mobile)': {
        display: this.mobile && 'none',
      },

      'p.mobile': {
        display: !this.mobile && 'none',
      },
    });

    /** Header styles. */

    const styleHeader = css({
      gridArea: 'header',
      padding: '16px 32px',
      borderBottom: '1px solid var(--spx-color-gray-200)',

      h1: {
        fontSize: 'clamp(20px, 3vw, 36px)',
        fontWeight: 500,
      },

      h2: {
        marginTop: '4px',
        color: 'var(--spx-color-gray-700)',
        fontWeight: 450,
        fontFamily: 'inter, sans-serif',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        cursor: 'help',
        maxWidth: 'max-content',
      },
    });

    /** Component styles. */

    const styleComponent = css({
      gridArea: 'component',
      overflowX: 'hidden',
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: this.current === 'iframe' ? '2vw 8vw' : '4vw',
      background: 'var(--spx-color-gray-50)',

      'spx-image-comparison': {
        maxWidth: '1000px',
        maxHeight: '400px',
        borderRadius: s.borderRadius,

        img: {
          width: 'unset !important',
        },
      },

      'spx-slider': {
        'img + img': {
          marginTop: '0 !important',
        },
      },

      'spx-masonry': {
        width: '80%',
        height: '80%',
      },

      '*': {
        fontSize: 'clamp(16px, 3vw, 20px)',
      },

      'h1 + h1': {
        marginTop: 'var(--spx-space-sm)',
      },
    });

    /** Sidebar styles. */

    const styleSidebar = css({
      padding: '32px',
      gridArea: 'sidebar',
      display: 'grid',
      gridGap: '24px',
      overflow: 'scroll',
      borderLeft: '1px solid var(--spx-color-gray-200)',

      '& > div > div:nth-child(2)': {
        display: 'grid',
        gridGap: '24px',
      },
    });

    /** Export styles. */

    const styleExport = css({
      padding: '16px 32px',
      gridArea: 'export',
      borderLeft: '1px solid var(--spx-color-gray-200)',
      borderBottom: '1px solid var(--spx-color-gray-200)',

      'spx-section-button': {
        marginTop: 0,

        a: {
          height: '100%',
        },
      },
    });

    /** Controls styles. */

    const styleControls = css({
      display: 'grid',
      gridGap: '16px',
      gridAutoRows: 'max-content',

      '&:last-child': {
        marginBottom: 'var(--spx-container-space-x-sm)',
      },

      div: {
        display: 'grid',
      },

      span: {
        fontSize: '12px',
        marginBottom: '4px',
        textTransform: 'uppercase',
        fontWeight: 500,
      },

      'input[type=""]': {
        display: 'none',
      },

      'select, input:not([type="checkbox"])': {
        padding: '10px 16px',
        border: '1px solid var(--spx-color-gray-300)',
        borderRadius: s.borderRadius,
        appearance: 'none',
        webkitBorderRadius: s.borderRadius,
        fontSize: '14px',
        color: 'var(--spx-color-gray-600)',
        fontWeight: 500,
        width: '100%',
      },

      select: {
        backgroundImage:
          'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjMwNnB4IiBoZWlnaHQ9IjMwNnB4IiB2aWV3Qm94PSIwIDAgMzA2IDMwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzA2IDMwNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9ImV4cGFuZC1tb3JlIj4NCgkJPHBvbHlnb24gcG9pbnRzPSIyNzAuMyw1OC42NSAxNTMsMTc1Ljk1IDM1LjcsNTguNjUgMCw5NC4zNSAxNTMsMjQ3LjM1IDMwNiw5NC4zNSAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K")',
        backgroundPosition: 'calc(100% - 10px) 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '10px',
      },
    });

    const styleFullscreen = css({
      position: 'absolute',
      left: '0',
      bottom: '0',
      borderTopRightRadius: s.borderRadius,
      borderBottomLeftRadius: s.borderRadius,
    });

    return (
      <Host class={styleHost}>
        {/** Header. */}

        <div class={styleHeader}>
          <h1>{titleCase(this.current.replaceAll('-', ' '))}</h1>
          <h2 title={this.ar[this.current]['description']}>
            {this.ar[this.current]['description']}
          </h2>
        </div>

        {/** Component. */}

        <div
          id="components"
          ref={(el) => (this.component = el as HTMLElement)}
          class={styleComponent}
        />

        {/** Export. */}

        <div class={styleExport}>
          <spx-section-button
            ref={(el) => (this.export = el as HTMLElement)}
            onClick={this.exportCode}
            type="secondary"
          >
            Export
          </spx-section-button>
        </div>

        {/** Sidebar. */}

        <div
          ref={(el) => (this.sidebar = el as HTMLElement)}
          class={styleSidebar}
        >
          <div class={styleControls}>
            {/** Component Select. */}

            <div>
              <span>Component</span>
              {this.createComponentControl()}
            </div>

            {/** Controls. */}

            <div ref={(el) => (this.controls = el as HTMLElement)}>
              {this.createControls()}
            </div>
          </div>
        </div>

        <button onClick={this.goFullscreen} class={styleFullscreen}>
          {this.fullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}
        </button>

        <p class="mobile">
          The playground only works on devices larger than 1024px.
        </p>
      </Host>
    );
  }
}
