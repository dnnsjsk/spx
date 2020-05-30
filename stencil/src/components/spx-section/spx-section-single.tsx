import {Component, Element, h, Host, Prop} from '@stencil/core';
import {css, cx} from "emotion";
import * as constants from "../../constants/style";

@Component({
    tag: 'spx-section-single',
})

export class SpxSectionSingle {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) styling: string;

    render() {
        const styleDefault = css({
            display: constants.styleDisplay
        });

        return <Host
            class={cx(
                {[constants.styleBase]: this.styling === 'none'},
                {[styleDefault]: !this.styling}
            )}>
        </Host>
    }
}
