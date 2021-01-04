// eslint-disable-next-line no-unused-vars
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { css } from '@emotion/css';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import 'ionicons/dist/ionicons.js';
import { setVar } from '../../utils/setVar';

const tag = 'spx-icon';

/**
 * Wrapper component for different kinds of icon sets. Currently comes included with Ionicons.
 */

@Component({
  tag: 'spx-icon',
})
export class SpxIcon {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxIconElement;

  @Prop({ reflect: true }) color: string = 'inherit';

  /** Icon code. */

  @Prop({ reflect: true }) icon: string;

  /**
   * Icon type.
   * @choice 'ionicons', 'caret'
   */

  @Prop({ reflect: true }) type: string = 'ionicons';

  /** Icon size. */

  @Prop({ reflect: true }) size: string = '1em';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxIconDidLoad' })
  spxIconDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);

    this.spxIconDidLoad.emit({ target: 'document' });
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    });

    /** Ionicon styles. */

    const styleIonicon = css({
      color: setVar(tag, 'color', this.color),
      fontSize: setVar(tag, 'size', this.size),
    });

    /** Caret styles. */

    const styleIcon = css({
      fontSize: '0.7em',
    });

    return (
      <Host class={styleHost}>
        {this.type === 'ionicons' ? (
          <ion-icon name={this.icon} class={styleIonicon} />
        ) : this.type === 'caret' ? (
          <i class={styleIcon}>▼</i>
        ) : null}
      </Host>
    );
  }
}
