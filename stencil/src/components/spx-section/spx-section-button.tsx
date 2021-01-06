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
import state from '../../stores/container';
import { setVar } from '../../utils/setVar';
import * as s from '../../constants/style';
import { globalComponentDidLoad } from '../../utils/globalComponentDidLoad';
import { setSectionVar } from '../../utils/setSectionVar';
import { palette } from '../../constants/palette';
import { setClamp } from '../../utils/setClamp';

/**
 * Button component for sections.
 */

const tag = 'spx-section-button';

@Component({
  tag: 'spx-section-button',
})
export class SpxSectionButton {
  // eslint-disable-next-line no-undef
  @Element() el: HTMLSpxSectionButtonElement;

  /** Icon. */

  @Prop({ reflect: true }) icon: string;

  @Prop({ reflect: true }) iconGapMin: number = 0.4;

  @Prop({ reflect: true }) iconGapMax: number = 1;

  /** Link href. */

  @Prop({ reflect: true }) href: string;

  /** Link href. */

  @Prop({ reflect: true }) reverse: boolean;

  /** Target. */

  @Prop({ reflect: true }) target: string;

  @Prop({ reflect: true }) transitionDuration: string = s.transitionDuration;

  @Prop({ reflect: true }) transitionTimingFunction: string =
    s.transitionTimingFunction;

  /**
   * Button type.
   * @choice 'primary', 'secondary'
   */

  @Prop({ reflect: true }) type: string = 'primary';

  /** Fires after component has loaded. */

  // eslint-disable-next-line @stencil/decorators-style
  @Event({ eventName: 'spxSectionButtonDidLoad' })
  spxSectionButtonDidLoad: EventEmitter;

  componentDidLoad() {
    globalComponentDidLoad(this.el);
    setSectionVar(this.el);

    this.spxSectionButtonDidLoad.emit({ target: 'document' });
  }

  private applyColors(type) {
    /** Background. */

    if (type === 'background') {
      if (this.type === 'primary') {
        return palette[state.colorPrimary][state.buttonBackgroundPrimary];
      } else if (this.type === 'secondary') {
        return palette[state.colorPrimary][state.buttonBackgroundSecondary];
      }
    }

    /** Color. */

    if (type === 'color') {
      if (this.type === 'primary') {
        return palette[state.colorPrimary][state.buttonColorPrimary];
      } else if (this.type === 'secondary') {
        return palette[state.colorPrimary][state.buttonColorSecondary];
      }
    }

    if (type === 'background-hover') {
      if (this.type === 'primary') {
        return palette[state.colorPrimary][state.buttonBackgroundPrimary + 100];
      } else if (this.type === 'secondary') {
        return palette[state.colorPrimary][
          state.buttonBackgroundSecondary +
            (state.buttonBackgroundSecondary === 50 ? 50 : 100)
        ];
      }
    }
  }

  render() {
    /** Host styles. */

    const styleHost = css({
      display: 'block',
    });

    /** Link styles. */

    const styleLink = css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      background: this.applyColors('background'),
      color: this.applyColors('color'),
      transitionProperty: 'background',
      transitionDuration: setVar(
        tag,
        'transition-duration',
        this.transitionDuration
      ),
      transitionTimingFunction: setVar(
        tag,
        'transition-timing-function',
        this.transitionDuration
      ),

      a: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },

      '&:hover': {
        background: this.applyColors('background-hover'),
      },
    });

    /** Icon styles. */

    const styleIcon = css({
      marginRight:
        !this.reverse && setClamp(tag, 'gap', this.iconGapMin, this.iconGapMax),
      marginLeft:
        this.reverse && setClamp(tag, 'gap', this.iconGapMin, this.iconGapMax),
    });

    return (
      <Host class={styleHost}>
        <a class={styleLink} href={this.href} target={this.target}>
          {/** Icon. */}
          {this.icon && <spx-icon class={styleIcon} icon={this.icon} />}

          {/** Text. */}
          <slot />
        </a>
      </Host>
    );
  }
}
