import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import * as accordion from '../../../../../data/components/spx-accordion.json';
import * as animate from '../../../../../data/components/spx-animate.json';
import * as classToggle from '../../../../../data/components/spx-class-toggle.json';
import * as code from '../../../../../data/components/spx-code.json';
import * as editButton from '../../../../../data/components/spx-edit-button.json';
import * as group from '../../../../../data/components/spx-group.json';
import * as icon from '../../../../../data/components/spx-icon.json';
import * as iframe from '../../../../../data/components/spx-iframe.json';
import * as imageComparison from '../../../../../data/components/spx-image-comparison.json';
import * as lightbox from '../../../../../data/components/spx-lightbox.json';
import * as masonry from '../../../../../data/components/spx-masonry.json';
import * as mockup from '../../../../../data/components/spx-mockup.json';
import * as navigation from '../../../../../data/components/spx-navigation.json';
import * as notation from '../../../../../data/components/spx-notation.json';
import * as offset from '../../../../../data/components/spx-offset.json';
import * as scrollspy from '../../../../../data/components/spx-scrollspy.json';
import * as share from '../../../../../data/components/spx-share.json';
import * as slider from '../../../../../data/components/spx-slider.json';
import * as slideshow from '../../../../../data/components/spx-slideshow.json';
import * as snackbar from '../../../../../data/components/spx-snackbar.json';
import * as textPath from '../../../../../data/components/spx-text-path.json';
import * as typewriter from '../../../../../data/components/spx-typewriter.json';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { css as cssHost } from '@emotion/css';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssEmotion } from '../../../utils/css/cssEmotion';
import { titleCase } from '../../../utils/strings/titleCase';
import { Button } from '../../../elements/Button';
import { filter, find } from 'lodash-es';
import { cssTw } from '../../../utils/css/cssTw';
import { TextInput } from '../../../elements/TextInput';
// @ts-ignore
import prettier from 'prettier/esm/standalone.mjs';
// @ts-ignore
import parserHtml from 'prettier/esm/parser-html.mjs';

/**
 * An editor to test and export component code using spx JSON data.
 */
@Component({
  tag: 'spx-editor',
  shadow: true,
})
export class SpxEditor {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditorElement;

  @State() code: boolean;
  @State() controlsSelected: boolean = true;
  @State() currentCode: string;
  @State() currentData: object;
  @State() currentElement: HTMLElement;
  @State() data: object;
  @State() fullscreen: boolean;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) active: string;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) activeName: string;

  @Watch('active')
  @Watch('activeName')
  onChangeComponent() {
    const template = (
      this.data[this.active].examples.length >= 2
        ? this.el.querySelector(
            `template[data-spx-element="${this.active}"][data-spx-name="${this.activeName}"]`
          )
        : this.el.querySelector(`template[data-spx-element="${this.active}"]`)
    ) as HTMLTemplateElement;
    if (template) {
      const node = template.content.cloneNode(true);
      const wrapper = document.createElement('div');
      wrapper.appendChild(node);
      this.currentElement = wrapper.firstChild.nextSibling as HTMLElement;
      this.currentCode = prettier.format(wrapper.innerHTML, {
        parser: 'html',
        plugins: [parserHtml],
      });
    }
  }

  componentWillLoad() {
    const data = {};

    [
      accordion,
      animate,
      classToggle,
      code,
      editButton,
      group,
      icon,
      iframe,
      imageComparison,
      lightbox,
      masonry,
      mockup,
      navigation,
      notation,
      offset,
      scrollspy,
      share,
      slider,
      slideshow,
      snackbar,
      textPath,
      typewriter,
    ].forEach((item) => {
      const examples = {
        examples: [],
      };

      this.el
        .querySelectorAll(`template[data-spx-element="${item.name}"]`)
        .forEach((item) => {
          examples['examples'].push(item.getAttribute('data-spx-name'));
        });

      data[item['name']] = { ...item, ...examples };
    });

    this.data = data;
    this.currentData = data;

    this.onChangeComponent();
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });
  }

  componentWillUpdate() {
    globalComponentWillUpdate({ el: this.el });
  }

  private setActive = (e) => {
    if (e.target.getAttribute('name-inner')) {
      this.activeName = e.target.getAttribute('name-inner');
    } else {
      this.active = e.target.name;
      if (this.currentData[this.active].examples) {
        this.activeName = this.currentData[this.active].examples[0];
      }
    }
  };

  private onSearch = (e) => {
    if (e.target.value === '') {
      this.currentData = this.data;
    } else {
      this.currentData = filter(this.data, function (o) {
        return o.name.includes(e.target.value);
      });
    }
  };

  private switchControls = () => {
    this.controlsSelected = !this.controlsSelected;
  };

  private onChangeControl = () => {
    //
  };

  /**
   * Load an array of JSON objects in the spx format.
   *
   * @param {Array} data Array of JSON objects.
   */
  @Method()
  async load(data) {
    console.log(data);
  }

  render() {
    const { css } = cssEmotion(this.el.shadowRoot);
    const { tw } = cssTw(this.el.shadowRoot);

    const stw = {
      text: 'text-blue-gray-700',
      textActive: 'text-blue-gray-900',
      hover: 'hover:text-blue-gray-700 hover:bg-blue-gray-100',
    };

    /** Host styles. */
    const styleHost = cssHost({
      display: 'block',
      height: '100%',
    });

    /** Shadow Host styles. */
    const styleShadowHost = css({
      gridTemplateColumns: '250px minmax(0, 1fr) 250px',
      gridTemplateRows: '40px 1fr',
      fontFamily: 'inter, sans-serif',

      '*': {
        boxSizing: 'border-box',
        fontFamily: 'inter, sans-serif !important',
      },
    });

    return (
      <Host class={styleHost}>
        <div
          class={`${styleShadowHost} ${tw(
            `bg-white grid antialiased
            ${
              this.fullscreen
                ? 'fixed top-0 left-0 w-screen h-screen z-[9999999999]'
                : 'h-full'
            }`
          )}`}
        >
          <div
            class={tw(
              `border-b border-r flex items-center relative border-blue-gray-200`
            )}
          >
            <spx-icon
              class={tw(`absolute top-1/2 -translate-y-1/2 left-2`)}
              icon="search-outline"
            />
            <TextInput
              class={tw(`pl-7 border-none w-full h-full text-md focus`)}
              placeholder="Search here"
              onInput={this.onSearch}
            />
          </div>
          <div
            class={tw(
              `flex items-center border-b border-blue-gray-200 pl-4 justify-between`
            )}
          >
            <h1 class={tw(`font-semibold text-md`)}>
              {titleCase(
                this.active.replace('spx-', '').replaceAll('-', ' ')
              ) ?? 'No component active'}
            </h1>
            <div class={tw(`flex h-full`)}>
              {[
                {
                  icon: 'code-slash-outline',
                  function: () => (this.code = !this.code),
                  active: this.code,
                },
                {
                  icon: 'expand-outline',
                  function: () => (this.fullscreen = !this.fullscreen),
                  active: this.fullscreen,
                },
              ].map((item) => {
                return (
                  <Button
                    class={tw(
                      `focus flex items-center relative justify-center w-12 h-full rounded-none text-blue-gray-500 ${
                        stw.hover
                      }
                      ${item.active && stw.textActive}`
                    )}
                    onClick={item.function}
                  >
                    {item.active && (
                      <span
                        class={tw(
                          `absolute h-0.5 w-full bg-blue-gray-700 w-full -bottom-px`
                        )}
                      />
                    )}
                    <spx-icon icon={item.icon} />
                  </Button>
                );
              })}
            </div>
          </div>
          <div class={tw(`border-l border-b border-blue-gray-200`)}>
            <Button
              class={tw(
                `focus flex px-2 text-center font-medium items-center relative justify-center w-full h-full rounded-none text-blue-gray-500 text-sm ${stw.hover}`
              )}
              onClick={this.switchControls}
            >
              {!this.controlsSelected
                ? 'Show Selected Settings'
                : 'Show All Settings'}
            </Button>
          </div>
          <div
            tabindex="-1"
            class={tw(
              `grid auto-rows-max border-r border-blue-gray-200 divide-dashed divide-y divide-blue-gray-200 overflow-y-auto`
            )}
          >
            {Object.values(this.currentData).map((object) => {
              const isActive = this.active === object.name;

              return (
                <div
                  class={tw(
                    `relative only-child:border-b only-child:border-blue-gray-100`
                  )}
                >
                  <Button
                    name={object.name}
                    tabindex={isActive ? '-1' : '0'}
                    class={tw(
                      `focus w-full p-3 pl-7 text-sm ${stw.hover}
                    ${
                      isActive
                        ? `font-semibold pointer-events-none ${stw.textActive}`
                        : stw.text
                    }`
                    )}
                    onClick={this.setActive}
                  >
                    {titleCase(
                      object.name.replace('spx-', '').replaceAll('-', ' ')
                    )}
                  </Button>
                  {isActive && object.examples.length >= 2 && (
                    <div class={tw(`grid`)}>
                      {Object.values(object.examples).map((item) => {
                        const isActiveName = this.activeName === item;

                        return (
                          <Button
                            name-inner={item}
                            class={tw(
                              `relative ml-1 p-2 pl-6 text-sm focus ${stw.hover}
                              ${
                                isActiveName
                                  ? `font-medium pointer-events-none ${stw.textActive}`
                                  : stw.text
                              }
                              `
                            )}
                            onClick={this.setActive}
                          >
                            {isActiveName && (
                              <span
                                class={tw(
                                  `absolute -left-1 w-1 top-0 h-full bg-blue-gray-700 z-10`
                                )}
                              />
                            )}
                            {item}
                          </Button>
                        );
                      })}
                    </div>
                  )}
                  {this.active === object.name && (
                    <span
                      class={tw(
                        `absolute left-0 w-1 top-0 h-full bg-blue-gray-300`
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div class={tw(`bg-blue-gray-50 flex items-center justify-center`)}>
            {this.code ? (
              <spx-code
                style={{
                  filter: 'saturate(1.25)',
                }}
                class={tw(`w-full h-full`)}
                border-radius="0"
                height="100%"
                theme="dracula"
              >
                {this.currentCode}
              </spx-code>
            ) : (
              <div
                class={tw(
                  `w-[80%] h-[80%] flex flex-col items-center justify-center`
                )}
                innerHTML={this.currentCode}
              />
            )}
          </div>
          <div
            class={tw(
              `border-l border-blue-gray-200 px-4 py-6 h-full overflow-y-auto`
            )}
          >
            <spx-control-group>
              {Object.values(this.data[this.active].properties as unknown).map(
                (item) => {
                  const value = (func) => {
                    return (
                      this.currentElement.getAttribute(item.attribute) ?? func
                    );
                  };

                  const select = find(item.tags, function (o) {
                    return o.name === 'choice';
                  });

                  const label = item.attribute
                    .replaceAll('-', ' ')
                    .toUpperCase();

                  return (
                    <div>
                      {item.type === 'string' && select ? (
                        <spx-control-select
                          data-attr={item.attribute}
                          handleChange={this.onChangeControl}
                          label={label}
                          options={select?.text
                            .replaceAll("', '", ',')
                            .slice(1, -1)}
                          selected={value(item.defaultValue)}
                        />
                      ) : item.type === 'string' &&
                        !item.attribute.includes('color') ? (
                        <spx-control-text
                          data-attr={item.attribute}
                          handleChange={this.onChangeControl}
                          label={label}
                          value={value(item.defaultValue?.slice(1, -1))}
                        />
                      ) : item.type === 'number' ? (
                        <spx-control-slider
                          data-attr={item.attribute}
                          handleChange={this.onChangeControl}
                          label={label}
                          start={value(item.defaultValue)}
                          max={item.defaultValue * 1.5}
                          min={item.defaultValue * 0.5}
                        />
                      ) : item.type === 'boolean' ? (
                        <spx-control-switch
                          data-attr={item.attribute}
                          handleChange={this.onChangeControl}
                          label={label}
                          checked={
                            this.currentElement.getAttribute(item.attribute) ===
                            'true'
                              ? true
                              : this.currentElement.getAttribute(
                                  item.attribute
                                ) === 'false'
                              ? false
                              : this.currentElement.hasAttribute(item.attribute)
                              ? true
                              : item.defaultValue === 'true'
                          }
                        />
                      ) : (
                        item.attribute.includes('color') && (
                          <spx-control-color color="#f7f7f7" label={label} />
                        )
                      )}
                    </div>
                  );
                }
              )}
            </spx-control-group>
          </div>
        </div>
      </Host>
    );
  }
}
