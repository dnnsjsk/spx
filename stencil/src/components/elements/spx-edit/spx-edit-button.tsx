import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { twind } from '../../../utils/3rd/twind';
import { Button } from '../../../elements/Button';
import { getDoc } from '../../../utils/dom/getDoc';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-edit-button';

/** Let users edit content from the frontend of the site. */
@Component({
  tag: 'spx-edit-button',
  styleUrl: 'spx-edit-button.scss',
  shadow: true,
})
export class SpxEditButton {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditButtonElement;

  @State() discardCustom: boolean;
  @State() editCustom: boolean;
  @State() loading: boolean = false;
  @State() saveCustom: boolean;

  @Prop() test: boolean = false;

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  /**
   * Discard button background.
   *
   * @css
   */
  @Prop({ reflect: true }) backgroundDiscard: string =
    'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) bottom: string = '1em';

  @Prop({ reflect: true }) border: string = 'none';

  @Prop({ reflect: true }) borderDiscard: string = 'none';

  @Prop({ reflect: true }) borderRadius: string = 'var(--spx-border-radius)';

  @Prop({ reflect: true }) classButton: string;

  @Prop({ reflect: true }) classButtonDiscard: string;

  @Prop({ reflect: true }) classLoader: string;

  @Prop({ reflect: true }) color: string = '#ffffff';

  /**
   * Discard button color.
   *
   * @css
   */
  @Prop({ reflect: true }) colorDiscard: string = '#ffffff';

  /**
   * Corresponding ID for editable fields. This property is needed when multiple
   * edit-button components are used on the page. Simply apply a
   * "data-spx-edit-id" attribute with the same value to editable elements.
   */
  @Prop({ reflect: true }) editId: string;

  @Prop({ reflect: true }) fontSize: string = 'var(--spx-font-size)';

  @Prop({ reflect: true }) fontSizeMax: number = 1.2;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  /**
   * Gap between the buttons.
   *
   * @css
   */
  @Prop({ reflect: true }) gap: string = '0.4em';

  @Prop({ reflect: true }) left: string;

  @Prop({ reflect: true }) loaderColor: string = '#ffffff';

  @Prop({ reflect: true }) loaderGap: string = '0.5em';

  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Prop({ reflect: true }) padding: string = '1em 1.2em';

  @Prop({ reflect: true }) paddingXMin: number = 1;

  @Prop({ reflect: true }) paddingXMax: number = 1.4;

  @Prop({ reflect: true }) paddingYMin: number = 0.7;

  @Prop({ reflect: true }) paddingYMax: number = 1.2;

  /** Position property of component. */
  @Prop({ reflect: true }) position:
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'static' = 'fixed';

  @Prop({ reflect: true }) right: string = '1em';

  /**
   * Styling.
   *
   * @choice default, fluid, headless
   */
  @Prop({ reflect: true }) styling: string = 'default';

  /** Discard button text. */
  @Prop({ reflect: true }) textDiscard: string = 'Discard';

  /** Edit button text. */
  @Prop({ reflect: true }) textEdit: string = 'Edit site';

  /** Save button text. */
  @Prop({ reflect: true }) textSave: string = 'Save';

  @Prop({ reflect: true }) top: string;

  @Prop({ reflect: true }) zIndex: number = 99;

  @Watch('background')
  @Watch('backgroundDiscard')
  @Watch('border')
  @Watch('borderDiscard')
  @Watch('borderRadius')
  @Watch('bottom')
  @Watch('color')
  @Watch('colorDiscard')
  @Watch('fontSize')
  @Watch('fontSizeMin')
  @Watch('fontSizeMax')
  @Watch('gap')
  @Watch('left')
  @Watch('loaderColor')
  @Watch('loaderGap')
  @Watch('padding')
  @Watch('paddingXMax')
  @Watch('paddingXMin')
  @Watch('paddingYMax')
  @Watch('paddingYMin')
  @Watch('position')
  @Watch('right')
  @Watch('top')
  @Watch('zIndex')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxEditButtonDidLoad' })
  spxEditButtonDidLoad: EventEmitter;

  /** Fires after pressing the discard button. */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxEditButtonDiscard' })
  spxEditButtonDiscard: EventEmitter;

  /** Fires after pressing the save button. */
  @Event({ eventName: 'spxEditButtonSave' }) spxEditButtonSave: EventEmitter;

  componentWillLoad() {
    this.checkForSlots();
  }

  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: [
        'background',
        'backgroundDiscard',
        'border',
        'borderDiscard',
        'borderRadius',
        'bottom',
        'color',
        'colorDiscard',
        'fontSize',
        'fontSizeMin',
        'fontSizeMax',
        'gap',
        'left',
        'loaderColor',
        'loaderGap',
        'padding',
        'paddingXMax',
        'paddingXMin',
        'paddingYMax',
        'paddingYMin',
        'position',
        'right',
        'top',
        'zIndex',
      ],
      cb: this.checkForSlots,
    });
    this.spxEditButtonDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private checkForSlots = () => {
    if (this.el.querySelector('[slot="edit"]')) {
      this.editCustom = true;
    }

    if (this.el.querySelector('[slot="discard"]')) {
      this.discardCustom = true;
    }

    if (this.el.querySelector('[slot="save"]')) {
      this.saveCustom = true;
    }
  };

  private clickEdit = () => {
    this.open = true;

    const elements = this.editId
      ? getDoc(this.el).querySelectorAll(
          '[data-spx-edit][data-spx-edit-id=' + this.editId + ']'
        )
      : getDoc(this.el).querySelectorAll('[data-spx-edit]');

    elements.forEach((item) => {
      const edit = document.createElement('spx-edit');
      const field = item.getAttribute('data-spx-edit');
      const type = item.getAttribute('data-spx-edit-type');
      const subfield = item.hasAttribute('data-spx-edit-subfield');
      const text = item.innerHTML;
      if (field) {
        edit.setAttribute('name', field);
      }
      if (type) {
        edit.setAttribute('type', type);
      }
      if (subfield) {
        edit.setAttribute('subfield', '');
      }
      edit.setAttribute('text', text);
      edit.setAttribute('editable', '');
      item.innerHTML = '';
      item.appendChild(edit);
    });
  };

  private clickDiscard = () => {
    this.open = false;

    this.spxEditButtonDiscard.emit({ target: 'document' });
  };

  private clickSave = () => {
    this.loading = true;

    const getBodyString = () => {
      const string = Math.random().toString(36).substr(2, 9);
      const bodyStringArray = [];
      const elements = document.querySelectorAll('spx-edit');
      elements.forEach((item) => {
        const withoutAmpersand = item
          .getAttribute('body-string')
          .replace('&', '')
          .replace('=', string);
        const encoded = encodeURIComponent(withoutAmpersand);
        const final = '&' + encoded;
        bodyStringArray.push(final.replace(string, '='));
      });

      return bodyStringArray.toString().replace(/,&/g, '&');
    };

    const afterSuccess = () => {
      this.spxEditButtonSave.emit({ target: 'document' });

      this.open = false;
      this.loading = false;
    };

    if (!this.test) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      fetch(spx.ajax, {
        method: 'POST',
        credentials: 'same-origin',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body:
          'action=spxEditButtonAjaxHandler' +
          getBodyString() +
          '' +
          '&post_id=' +
          // @ts-ignore
          // eslint-disable-next-line no-undef
          spx.postId +
          '' +
          '&nonce=' +
          // @ts-ignore
          // eslint-disable-next-line no-undef
          spx.nonce +
          '',
      }).then((response) => {
        if (response.status === 200) {
          afterSuccess();
        } else if (response.status === 500) {
          this.loading = false;
        }
      });
    } else {
      afterSuccess();
    }
  };

  /** Discard changes. */
  @Method()
  async discard() {
    this.clickDiscard();
  }

  /** Enable editing. */
  @Method()
  async edit() {
    this.clickEdit();
  }

  /** Save changes. */
  @Method()
  async save() {
    this.clickSave();
  }

  render() {
    const { tw } = twind(this.el.shadowRoot, this.styling === 'headless');

    const styleButton =
      this.styling === 'headless' && tw(this.classButton ?? '');

    const styleButtonDiscard =
      this.styling === 'headless' &&
      tw((this.classButton ?? '') + ' ' + (this.classButtonDiscard ?? ''));

    const styleLoader =
      this.styling === 'headless' && tw(this.classLoader ?? '');

    return (
      <div class="inner">
        {!this.open ? (
          <Button
            as="button"
            onClick={this.clickEdit}
            class={this.styling === 'headless' ? styleButton : 'button'}
          >
            {this.editCustom ? <slot name="edit" /> : this.textEdit}
          </Button>
        ) : (
          [
            <Button
              as="button"
              onClick={this.clickDiscard}
              class={
                this.styling === 'headless'
                  ? styleButtonDiscard
                  : 'button button--discard'
              }
            >
              {this.discardCustom ? <slot name="discard" /> : this.textDiscard}
            </Button>,

            <Button
              as="button"
              onClick={this.clickSave}
              class={this.styling === 'headless' ? styleButton : 'button'}
            >
              {this.loading && !this.saveCustom && (
                <spx-icon
                  class={this.styling === 'headless' ? styleLoader : 'loader'}
                  type="loader"
                />
              )}

              {this.saveCustom ? <slot name="save" /> : this.textSave}
            </Button>,
          ]
        )}
      </div>
    );
  }
}
