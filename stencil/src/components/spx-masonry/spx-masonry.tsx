// eslint-disable-next-line no-unused-vars
import { Component, h, Host, Element, Prop, State, Method, Watch, Event, EventEmitter } from '@stencil/core'
import { css } from 'emotion'
import Macy from 'macy'
import { wrap } from '../../utils/wrap'
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad'

/**
 * Arrange images in a masonry layout.
 */

@Component({
  tag: 'spx-masonry'
})

export class SpxMasonry {
    @Element() el: HTMLSpxMasonryElement
    private container: HTMLElement

    @State() bpColumnsObject: object
    @State() imagesArray: Array<string>
    @State() macyState

    /** Columns for different screen sizes. Example value: 1000:3;600:2 - this will switch to a three column layout when the screen size is under 1000px and to a two column layout under 600px. */

    @Prop({ reflect: true }) bpColumns: string

    /** Number of columns. */

    @Prop({ reflect: true }) columns: number = 4

    /**
     * Gap between images.
     * @CSS
     */

    @Prop({ reflect: true }) gap: string = '10px'

    /**
     * WordPress media size when using the helper function..
     */

    @Prop({ reflect: true }) imageSize: string

    /**
     * Gets images from an ACF or Metabox field.
     * @helper &lt;?php spx\get::gallery($fieldName, $type) ?>
     */

    @Prop({ reflect: true }) images: string

    /**
     * Gets images from an ACF or Metabox field.
     * @choice 'acf', 'mb
     */

    @Prop({ reflect: true }) imagesSrc: string

    /** Watch images prop and parse to iteratable array. */

    @Watch('images')
    imagesChanged (newValue: string) {
      if (newValue) this.imagesArray = JSON.parse(newValue)
    }

    /** Watch columns. */

    @Watch('columns')
    columnsChanged () {
      this.macyState.remove()
      this.initMacy()
    }

    @Event({ eventName: 'spxMasonryDidLoad' }) spxMasonryDidLoad: EventEmitter

    componentWillLoad () {
      /** If image prop is set. */

      if (this.images) {
        this.imagesChanged(this.images)
      }
    }

    componentDidLoad () {
      globalComponentDidLoad(this.el)

      /** Create object for breakpoint attribute. */

      if (this.bpColumns) {
        this.bpColumnsObject = JSON.parse('{' + this.bpColumns.replace(/([0-9]+)/g, '"$1"') + '}')
      }

      /** Init Macy. */

      this.initMacy()

      /** Wrap all children in div. */

      Array.from(this.container.children).forEach(item => {
        wrap(item, document.createElement('div'))
      })

      /** Emit event to document when Masonry finished loading. */

      this.spxMasonryDidLoad.emit({ target: 'document' })
    }

    /** After update lifecycle. */

    componentDidUpdate () {
      this.reload()
      this.recalc()
    }

    /** Remove Macy on disconnect. */

    disconnectedCallback () {
      this.macyState.remove()
    }

    /** Recalculate grid. */

    @Method()
    async recalc () {
      this.macyState.recalculate()
    }

    @Method()
    async reload () {
      this.macyState.reInit()
    }

    private initMacy () {
      this.macyState = Macy({
        container: this.container,
        margin: 0,
        mobileFirst: true,
        runOnImageLoad: true,
        columns: this.columns,
        breakAt:
                this.bpColumns
                  ? this.bpColumnsObject : {
                    9999: this.columns ? this.columns : 4
                  }
      })
    }

    render () {
      /** Host styles. */

      const styleHost = css({
        display: 'block',

        /** Convert gap to correct padding for elements. */

        'div > div': {
          padding: 'var(--spx-masonry-gap, ' + this.gap + ') calc(var(--spx-masonry-gap, ' + this.gap + ') / 2) 0 calc(var(--spx-masonry-gap, ' + this.gap + ') / 2)',
          boxSizing: 'border-box'
        },

        /** Force 100% width for elements. */

        'div > div *': {
          width: '100%',
          maxWidth: '100%'
        }
      })

      /** Container styles. */

      const styleContainer = css({

        /** Adjust container margin to make up for element paddings. */

        margin: 'calc(var(--spx-masonry-gap, ' + this.gap + ') * -1) calc(var(--spx-masonry-gap, ' + this.gap + ') / 2 * -1) 0 calc(var(--spx-masonry-gap, ' + this.gap + ') / 2 * -1)'
      })

      return <Host
        class={styleHost}>
        <div ref={(el) => this.container = el as HTMLElement}
          class={styleContainer}>

          {this.images && !this.imagesSrc

          /** Iterate through ACF array if prop was set. */

            ? this.imagesArray.map((el) => (

              <img src={this.imageSize ? el['sizes'][this.imageSize] : el['url']}/>))

          /** Iterate through MB array if prop was set. */

            : this.images && this.imagesSrc === 'mb'

              ? Object.values(this.imagesArray).map((object) => (

                <img src={this.imageSize ? object['sizes'][this.imageSize].url : object['full_url']}/>))

              : <slot/>}

        </div>
      </Host>
    }
}
