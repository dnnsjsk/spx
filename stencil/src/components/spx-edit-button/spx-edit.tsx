// eslint-disable-next-line no-unused-vars
import { Component, Element, h, Host, Prop, State, Watch, Listen } from '@stencil/core'
import { css } from 'emotion'
import { setVar } from '../../utils/setVar'

const tag = 'spx-edit'

@Component({
  tag: 'spx-edit'
})

export class SpxEdit {
    @Element() el: HTMLSpxEditElement

    @State() originalText: string

    @Prop({ reflect: true }) display: string = 'inline'

    @Prop({ reflect: true }) name: string

    @Prop({ reflect: true }) outline: string = '2px solid red'

    @Prop({ reflect: true }) outlineFocus: string = 'blue'

    @Prop({ reflect: true }) placeholder: string = 'Enter some text here.'

    @Prop({ reflect: true }) placeholderColor: string = 'inherit'

    @Prop({ reflect: true }) placeholderOpacity: string = '0.7'

    @Prop({ reflect: true }) styling: string

    @Prop({ reflect: true }) type: string = 'acf'

    /** Watch editable state. */

    @Prop({ reflect: true }) editable: boolean

    @Watch('editable')
    watchEditable () {
      if (this.editable) {
        this.el.setAttribute('contenteditable', 'true')
      } else {
        this.el.removeAttribute('contenteditable')
      }
    }

    /** Prevent enter key. */

    @Listen('keydown')
    onClickEnter (evt) {
      if (evt.keyCode === 13) {
        evt.preventDefault()
      }
    }

    /** Discard changes. */

    @Listen('spxEditButtonDiscard', { target: 'document' })
    onClickDiscard () {
      this.el.parentElement.innerHTML = this.originalText
      this.editable = false
    }

    /** Save changes. */

    @Listen('spxEditButtonSave', { target: 'document' })
    onClickSave () {
      this.editable = false
    }

    /** Sets the new body string correctly on key press. */

    @Listen('keyup')
    onClickKeyup () {
      this.el.setAttribute('body-string', '&' + this.name + '=' + this.el.innerText)
    }

    componentDidLoad () {
      this.watchEditable()

      /** Set inner text as state. */

      this.originalText = this.el.innerText

      /** Set original body string. */

      this.el.setAttribute('body-string', '&' + this.name + '=' + this.originalText)
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: setVar(tag, 'display', this.display),
        position: 'relative',

        '&[contenteditable]': {
          outline: this.outline,
          cursor: 'text',

          ':focus': {
            outlineColor: this.outlineFocus
          },

          ':empty:before': {
            content: '"' + this.placeholder + ' "',
            color: this.placeholderColor,
            opacity: this.placeholderOpacity
          }
        }
      })

      return <Host
        class={styleHost}>
        <slot/>
      </Host>
    }
}
