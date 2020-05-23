import {Component, h, Host, Prop} from '@stencil/core';
import {css} from "emotion";

@Component({
    tag: 'spx-icon',
})

export class SpxIcon {
    @Prop({reflectToAttr: true}) type: string = 'fa';
    @Prop({reflectToAttr: true}) icon: string;

    render() {
        return <Host class={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        })}>

            {this.icon ?

                <i class={this.icon}/> :

                this.type === 'caret' ?

                    <i class={css({
                        fontSize: '0.7em',
                    })}>▼</i>

                    : null}
        </Host>
    }
}
