import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from '../../constants/style.js'

@Component({
  tag: 'spx-accordion',
})

export class SpxAccordion {
  @Element() el: HTMLElement;

  @Prop({reflectToAttr: true}) styling: string;

  @Prop({reflectToAttr: true}) gap: string = '8px';

  @Prop({reflectToAttr: true}) headerText: string = 'Default Header Text';
  @Prop({reflectToAttr: true}) headerTextTag: string = 'span';
  @Prop({reflectToAttr: true}) headerGap: string = '4px';
  @Prop({reflectToAttr: true}) headerCustom: boolean;

  @Prop({reflectToAttr: true}) iconIndicator: string;

  @Prop({reflectToAttr: true}) contentText: string = 'Default Content Text';
  @Prop({reflectToAttr: true}) contentTextTag: string = 'span';
  @Prop({reflectToAttr: true}) contentCustom: boolean;

  @State() open: boolean = false;

  componentDidLoad() {
    if (this.el.querySelector('[slot="header"]')) {
      this.headerCustom = true;
    }
    if (this.el.querySelector('[slot="content"]')) {
      this.contentCustom = true;
    }
  }

  /** Toggle content. */

  onClickHeader() {
    this.open = !this.open;
  }

  render() {

    /** Render inner element for header/content. */

    const textReturn = (condition, tag, text, slot) => {
      return condition ?
        (tag === 'h1' ? <h1>{text}</h1>
          : tag === 'h2' ? <h2>{text}</h2>
            : tag === 'h3' ? <h3>{text}</h3>
              : tag === 'h4' ? <h4>{text}</h4>
                : tag === 'h5' ? <h5>{text}</h5>
                  : tag === 'h6' ? <h6>{text}</h6>
                    : tag === 'p' ? <p>{text}</p>
                      : <span>{text}</span>) : <slot name={slot}/>
    }

    /** Style default. */

    const styleDefault = css({
      display: 'grid',
      gridAutoFlow: 'row',
      gridRowGap: 'var(--spx-accordion-gap, ' + this.gap + ')',
      fontFamily: constants.styleFontFamily,

      '.spx-accordion__header': {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'max-content',
        gridColumnGap: 'var(--spx-accordion-header-gap, ' + this.headerGap + ')',
        cursor: 'pointer',

        '*:not([slot])': {
          margin: '0'
        }
      },

      '.spx-accordion__header-icon': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'center',
        transform: this.open && 'rotate(180deg)'
      },

      '.spx-accordion__content': {
        display: this.open ? 'block' : 'none',
      }
    });

    return <Host
      class={cx(
        {[constants.styleBase]: this.styling === 'none'},
        {[styleDefault]: !this.styling}
      )}>

      <div onClick={this.onClickHeader.bind(this)} class="spx-accordion__header">
        {!this.headerCustom &&
        <div class="spx-accordion__header-icon">

          {this.iconIndicator ?
            <i class={this.iconIndicator}/> :
            <spx-icon type="caret"/>}

        </div>}
        {textReturn(!this.headerCustom, this.headerTextTag, this.headerText, 'header')}
      </div>

      <div
        class={'spx-accordion__content' + ' ' + (this.open ? 'spx-accordion__content--open' : 'spx-accordion__content--closed')}>
        {textReturn(!this.contentCustom, this.contentTextTag, this.contentText, 'content')}
      </div>
    </Host>
  }
}
