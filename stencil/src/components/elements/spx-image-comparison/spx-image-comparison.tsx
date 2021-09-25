import {
  Component,
  Element,
  // eslint-disable-next-line no-unused-vars
  h,
  Prop,
  State,
  Watch,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
import { globalComponentDidLoad } from '../../../utils/global/globalComponentDidLoad';
import { globalComponentWillUpdate } from '../../../utils/global/globalComponentWillUpdate';
import { Button } from '../../../elements/Button';
import { setProperty } from '../../../utils/dom/setProperty';

const tag = 'spx-image-comparison';

/**
 * Compare two images visually using a slider. Handy for showing subtle (or not
 * so subtle) before/after differences.
 */
@Component({
  tag: 'spx-image-comparison',
  styleUrl: 'spx-image-comparison.scss',
  shadow: true,
})
export class SpxImageComparison {
  private root: HTMLElement;
  private container: HTMLElement;
  private imageAfter: HTMLElement;
  private scroller: HTMLElement;
  private x: number;

  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxImageComparisonElement;

  @State() width: number;

  @Prop({ reflect: true }) active: boolean;

  /** @css */
  @Prop({ reflect: true }) color: string = '#ffffff';

  /** @css */
  @Prop({ reflect: true }) height: string = '100%';

  /** @css */
  @Prop({ reflect: true }) iconColor: string = 'var(--spx-color-gray-900)';

  /** Lazy load images. */
  @Prop({ reflect: true }) lazy: boolean;

  /** Image URL of the before image. */
  @Prop({ reflect: true }) srcAfter: string =
    'https://source.unsplash.com/random/1200x300';

  /** Image URL of the after image. */
  @Prop({ reflect: true }) srcBefore: string =
    'https://source.unsplash.com/random/1201x300';

  /** Step amount when using component with arrow keys. */
  @Prop({ reflect: true }) steps: number = 10;

  /** Opening state in pixels. */
  @Prop({ reflect: true }) start: number = 150;

  @Watch('start')
  move(x) {
    const transform = Math.max(0, Math.min(x, this.container.offsetWidth));
    this.imageAfter.style.width = transform + 2 + 'px';
    this.scroller.style.left = transform - 25 + 'px';

    if (x >= 2 && x <= this.width) {
      this.x = x;
    }
  }

  @Watch('color')
  @Watch('height')
  @Watch('iconColor')
  // @ts-ignore
  attributesChanged(value, old, attribute) {
    setProperty(this.el, tag, attribute, value);
  }

  /** [event:loaded] */
  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxImageComparisonDidLoad' })
  spxImageComparisonDidLoad: EventEmitter;

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this.el.offsetWidth !== this.width) {
      this.move(this.start);
      this.width = this.root.offsetWidth;
    }
  }

  componentDidLoad() {
    this.width = this.root.offsetWidth;

    if (document.body.classList.contains('oxygen-builder-body')) {
      this.scroller.style.pointerEvents = 'none';
    }

    this.active = false;
    this.scroller.addEventListener('mousedown', () => {
      this.active = true;
    });

    document.body.addEventListener('mouseup', () => {
      this.active = false;
    });
    document.body.addEventListener('mouseleave', () => {
      this.active = false;
    });
    document.body.addEventListener('mousemove', (e) => {
      this.mover(e);
    });

    this.move(this.start);

    this.scroller.addEventListener('touchstart', () => {
      this.active = true;
    });
    document.body.addEventListener('touchend', () => {
      this.active = false;
    });
    document.body.addEventListener('touchcancel', () => {
      this.active = false;
    });
    document.body.addEventListener('touchmove', (e) => {
      this.mover(e);
    });

    globalComponentDidLoad({
      el: this.el,
      tag: tag,
      props: ['color', 'height', 'iconColor'],
      lazy: this.lazy,
    });
    this.spxImageComparisonDidLoad.emit({ target: 'document' });
  }

  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }

  private mover = (e) => {
    if (!this.active) return;
    let x = e.pageX;
    x -= this.container.getBoundingClientRect().left;
    this.move(x);
  };

  private moveLeft = () => {
    if (this.x >= 2) {
      this.move(this.x - this.steps);
    }
  };

  private moveRight = () => {
    if (this.x <= this.width) {
      this.move(this.x + this.steps);
    }
  };

  render() {
    return (
      <div ref={(el) => (this.root = el as HTMLElement)} class="inner">
        {this.srcBefore &&
          this.srcAfter && [
            <div
              ref={(el) => (this.container = el as HTMLElement)}
              class="container"
            >
              <img
                src={!this.lazy && this.srcBefore}
                data-src={this.lazy && this.srcBefore}
                alt="before"
              />
            </div>,

            <div
              ref={(el) => (this.imageAfter = el as HTMLElement)}
              class="container container--after"
            >
              <img
                src={!this.lazy && this.srcAfter}
                data-src={this.lazy && this.srcAfter}
                alt="after"
              />
            </div>,

            <Button
              as="button"
              ref={(el) => (this.scroller = el as HTMLElement)}
              class="scroller"
              onArrowLeft={this.moveLeft}
              onArrowRight={this.moveRight}
            >
              <div class="thumb">
                <spx-icon icon="resize" size="32px" />
              </div>
            </Button>,
          ]}
      </div>
    );
  }
}
