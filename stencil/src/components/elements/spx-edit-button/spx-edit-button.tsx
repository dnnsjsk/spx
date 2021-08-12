import {
  Component,
  Element,
  Event,
  EventEmitter,
  // eslint-disable-next-line no-unused-vars
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { css as cssHost } from '@emotion/css';
import * as s from '../../../constants/style';
import { position } from '../../../constants/style';
import { setVar } from '../../../utils/cssVariables/setVar';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { setStyle } from '../../../utils/cssVariables/setStyle';
import { setClamp } from '../../../utils/cssVariables/setClamp';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { cssTw } from '../../../utils/css/cssTw';
import { Button } from '../../../elements/Button';

const tag = 'spx-edit-button';

/** Let your clients edit text on their site using this handy component. */
@Component({
  tag: 'spx-edit-button',
  shadow: true,
})
export class SpxEditButton {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxEditButtonElement;

  @State() loading: boolean = false;
  @State() open: boolean = false;
  @State() positionArray;

  @Prop() test: boolean = false;

  @Prop({ reflect: true }) background: string = 'var(--spx-color-gray-900)';

  /**
   * Discard button background.
   *
   * @CSS
   */
  @Prop({ reflect: true }) backgroundDiscard: string =
    'var(--spx-color-gray-600)';

  @Prop({ reflect: true }) border: string = 'none';

  @Prop({ reflect: true }) borderRadius: string = s.borderRadius;

  @Prop({ reflect: true }) classButton: string;

  @Prop({ reflect: true }) classButtonDiscard: string;

  @Prop({ reflect: true }) classLoader: string;

  @Prop({ reflect: true }) color: string = '#ffffff';

  /**
   * Discard button color.
   *
   * @CSS
   */
  @Prop({ reflect: true }) colorDiscard: string = '#ffffff';

  @Prop({ reflect: true }) display: string = s.display;

  /**
   * Distance to the edge of the viewport on the x-axis.
   *
   * @CSS
   */
  @Prop({ reflect: true }) distanceX: string = '1em';

  /**
   * Distance to the edge of the viewport on the y-axis.
   *
   * @CSS
   */
  @Prop({ reflect: true }) distanceY: string = '1em';

  /**
   * Corresponding ID for editable fields. This property is needed when multiple
   * edit-button components are used on the page. Simply apply a
   * "data-spx-edit-id" attribute with the same value to editable elements.
   */
  @Prop({ reflect: true }) editId: string;

  @Prop({ reflect: true }) fontFamily: string = s.fontFamily;

  @Prop({ reflect: true }) fontSize: string = s.fontSize;

  @Prop({ reflect: true }) fontSizeMax: number = 1.2;

  @Prop({ reflect: true }) fontSizeMin: number = 1;

  /**
   * Gap between the buttons.
   *
   * @CSS
   */
  @Prop({ reflect: true }) gap: string = '0.4em';

  @Prop({ reflect: true }) loaderColor: string = '#ffffff';

  @Prop({ reflect: true }) loaderGap: string = '0.5em';

  @Prop({ reflect: true }) padding: string = '0.7em 1.2em';

  @Prop({ reflect: true }) paddingXMin: number = 1;

  @Prop({ reflect: true }) paddingXMax: number = 1.4;

  @Prop({ reflect: true }) paddingYMin: number = 0.7;

  @Prop({ reflect: true }) paddingYMax: number = 1.2;

  /**
   * Component position in page.
   *
   * @choice 'bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-right'
   */
  @Prop({ reflect: true }) position: string = 'bottom-right';

  /** CSS property position of button. */
  @Prop({ reflect: true }) positionCss:
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'static' = 'fixed';

  /**
   * Styling.
   *
   * @choice 'default', 'fluid', 'headless'
   */
  @Prop({ reflect: true }) styling: string = 'default';

  /** Discard button text. */
  @Prop({ reflect: true }) textDiscard: string = 'Discard';

  /** Edit button text. */
  @Prop({ reflect: true }) textEdit: string = 'Edit site';

  /** Save button text. */
  @Prop({ reflect: true }) textSave: string = 'Save';

  /** Success message. */
  @Prop({ reflect: true }) textSuccess: string = 'Save was successful';

  @Prop({ reflect: true }) zIndex: number = 99;

  @Watch('position')
  positionChanged() {
    this.createPositionArray();
  }

  /** Fires after component has loaded. */
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
    this.createPositionArray();
  }

  componentDidLoad() {
    globalComponentDidLoad({ el: this.el });

    this.spxEditButtonDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private createPositionArray = () => {
    this.positionArray = this.position.split('-');
  };

  private clickEdit = () => {
    this.open = true;

    /** Generate edit components around text. */
    const elements = this.editId
      ? document.querySelectorAll(
          '[data-spx-edit][data-spx-edit-id=' + this.editId + ']'
        )
      : document.querySelectorAll('[data-spx-edit]');

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
      edit.innerHTML = text;
      edit.setAttribute('editable', '');
      item.innerHTML = '';
      item.appendChild(edit);
    });
  };

  private clickDiscard = () => {
    /** Close buttons again. */
    this.open = false;

    /** Emit closing event to document. */
    this.spxEditButtonDiscard.emit({ target: 'document' });
  };

  private clickSave = () => {
    this.loading = true;

    /**
     * Emit save event to document.
     *
     * @returns {string} Send to WP Admin with AJAX.
     */
    const getBodyString = () => {
      /** Create the body string to be sent off to the AJAX call. */
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
      /** Insert snackbar. */
      const snackbar = document.createElement('spx-snackbar');
      snackbar.setAttribute('text', this.textSuccess);
      document.body.appendChild(snackbar);

      /** Remove edit components. */
      const elements = document.querySelectorAll('spx-edit');
      elements.forEach((item) => {
        item.parentElement.innerHTML = item.innerHTML;
      });

      /** Save changes event. */
      this.spxEditButtonSave.emit({ target: 'document' });

      /** Remove loader and close on success. */
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
          '',
      }).then((response) => {
        if (response.status === 200) {
          afterSuccess();
        } else if (response.status === 500) {
          /** Remove loader on fail. */
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
    const { tw, css } = cssTw(this.el.shadowRoot);

    /** Host styles. */
    const styleHost = cssHost({
      display: setVar(tag, 'display', this.display),
    });

    /** Shadow Host styles. */
    const styleShadowHost =
      (this.styling === 'default' || this.styling === 'fluid') &&
      tw(
        css({
          ...position(
            'edit-button',
            this.positionArray,
            this.distanceX,
            this.distanceY
          ),
          fontFamily: s.fontFamily,
          fontSize: setStyle(
            tag,
            'font-size',
            this.fontSize,
            this.fontSizeMin,
            this.fontSizeMax,
            this.styling
          ),
          display: 'grid',
          gridGap: setVar(tag, 'gap', this.gap),
          position: this.positionCss,
          zIndex: this.zIndex,
        })
      );

    /** Button styles. */
    const styleButton =
      this.styling === 'default' || this.styling === 'fluid'
        ? tw(
            css({
              fontFamily: setVar(tag, 'font-family', this.fontFamily),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '1em',
              padding:
                this.styling === 'default' &&
                setVar(tag, 'padding', this.padding),
              paddingLeft:
                this.styling === 'fluid' &&
                setClamp(tag, 'padding-x', this.paddingXMin, this.paddingXMax),
              paddingRight:
                this.styling === 'fluid' &&
                setClamp(tag, 'padding-x', this.paddingXMin, this.paddingXMax),
              paddingTop:
                this.styling === 'fluid' &&
                setClamp(tag, 'padding-x', this.paddingYMin, this.paddingYMax),
              paddingBottom:
                this.styling === 'fluid' &&
                setClamp(tag, 'padding-x', this.paddingYMin, this.paddingYMax),
              color: setVar(tag, 'color', this.color),
              background: setVar(tag, 'background', this.background),
              border: setVar(tag, 'border', this.border),
              borderRadius: setVar(tag, 'border-radius', this.borderRadius),
              transitionProperty: 'background, box-shadow',
              transitionDuration: s.transitionDuration,
              transitionTimingFunction: s.transitionTimingFunction,

              ...s.focus,
            })
          )
        : tw(this.classButton ?? '');

    /** Discard button styles. */
    const styleButtonDiscard =
      this.styling === 'default' || this.styling === 'fluid'
        ? tw(
            css({
              color: setVar(tag, 'color-discard', this.colorDiscard),
              background: setVar(
                tag,
                'background-discard',
                this.backgroundDiscard
              ),
            })
          )
        : tw((this.classButton ?? '') + ' ' + (this.classButtonDiscard ?? ''));

    /** Loader styles. */
    const styleLoader =
      this.styling === 'default' || this.styling === 'fluid'
        ? tw(
            css({
              marginRight: setVar(tag, 'loader-gap', this.loaderGap),
            })
          )
        : tw(this.classLoader ?? '');

    return (
      <Host class={styleHost}>
        <div class={styleShadowHost}>
          {!this.open ? (
            /** Edit button. */
            <button onClick={this.clickEdit} class={styleButton}>
              {this.textEdit || <slot name="edit" />}
            </button>
          ) : (
            /** Discard button. */
            [
              <Button
                as="button"
                onClick={this.clickDiscard}
                class={
                  this.styling === 'headless'
                    ? styleButtonDiscard
                    : styleButton + ' ' + styleButtonDiscard
                }
              >
                {this.textDiscard || <slot name="discard" />}
              </Button>,

              /** Save button. */
              <Button as="button" onClick={this.clickSave} class={styleButton}>
                {this.loading && (
                  <spx-icon
                    class={styleLoader}
                    type="loader"
                    color={setVar(tag, 'loader-color', this.loaderColor)}
                  />
                )}

                {this.textSave || <slot name="save" />}
              </Button>,
            ]
          )}
        </div>
      </Host>
    );
  }
}
