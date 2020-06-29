import {Component, Element, h, Host, Prop, State, Watch, Listen} from '@stencil/core';
import {css} from 'emotion';
import * as constants from '../../constants/style.js';

@Component({
    tag: 'spx-image-comparison',
})

export class SpxImageComparison {
    @Element() el: HTMLElement;

    @Prop({reflectToAttr: true}) srcBefore: string;
    @Prop({reflectToAttr: true}) srcAfter: string;

    @Prop({reflectToAttr: true}) start: number = 150;
    @Prop({reflectToAttr: true}) color: string = '#ffffff';
    @Prop({reflectToAttr: true}) iconColor: string = constants.stylePrimary500;

    @State() active: boolean;
    @State() width: number;

    @Listen('resize', {target: 'window'})
    watchResize() {
        if (this.el.offsetWidth !== this.width) {
            this.startIt(this.start);
        }
    }

    @Watch('start')
    startIt(x) {

        /** Scroll image in start */

        let transform = Math.max(0, (Math.min(x, (this.el.querySelector('.spx-image-comparison__container') as HTMLElement).offsetWidth)));
        (this.el.querySelector('.spx-image-comparison__image--after') as HTMLElement).style.width = transform + "px";
        (this.el.querySelector('.spx-image-comparison__scroller') as HTMLElement).style.left = transform - 25 + "px";
    }

    componentDidLoad() {

        /** Set starting width */

        this.width = this.el.offsetWidth;

        /** Disable for Oxygen */

        if (document.body.classList.contains('oxygen-builder-body')) {
            (this.el.querySelector('.spx-image-comparison__scroller') as HTMLElement).style.pointerEvents = 'none';
        }

        /** Use boolean to know when it is being used */

        this.active = false;

        /** Watch for clicks on scroller */

        this.el.querySelector('.spx-image-comparison__scroller').addEventListener('mousedown', (() => {
            this.active = true;
            this.el.querySelector('.spx-image-comparison__scroller').classList.add('spx-image-comparison--scrolling');
        }));

        /** Add scrolling class to the scroller so it has full opacity while active */

        document.body.addEventListener('mouseup', (() => {
            this.active = false;
            this.el.querySelector('.spx-image-comparison__scroller').classList.remove('spx-image-comparison--scrolling');
        }));

        /** Watch body for changes to the state */

        document.body.addEventListener('mouseleave', (() => {
            this.active = false;
            this.el.querySelector('.spx-image-comparison__scroller').classList.remove('spx-image-comparison--scrolling');
        }));

        /** Figure out where the mouse is */

        document.body.addEventListener('mousemove', ((e) => {
            if (!this.active) return;
            let x = e.pageX;
            x -= this.el.querySelector('.spx-image-comparison__container').getBoundingClientRect().left;
            this.startIt(x);
        }));

        /** Set starting width */
        this.startIt(this.start);

        /** Repeat for touch events */

        this.el.querySelector('.spx-image-comparison__scroller').addEventListener('touchstart', (() => {
            this.active = true;
            this.el.querySelector('.spx-image-comparison__scroller').classList.add('spx-image-comparison--scrolling');
        }));

        document.body.addEventListener('touchend', (() => {
            this.active = false;
            this.el.querySelector('.spx-image-comparison__scroller').classList.remove('spx-image-comparison--scrolling');
        }));

        document.body.addEventListener('touchcancel', (() => {
            this.active = false;
            this.el.querySelector('.spx-image-comparison__scroller').classList.remove('spx-image-comparison--scrolling');
        }));

        document.body.addEventListener('touchmove', ((e) => {
            if (!this.active) return;
            let x = e.targetTouches[0].pageX;
            x -= this.el.querySelector('.spx-image-comparison__container').getBoundingClientRect().left;
            this.startIt(x);
        }));
    }

    render() {
        return <Host class={css({
            display: 'block',
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',

            '.spx-image-comparison__container': {
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: '0',
                left: '0',
                pointerEvents: 'none',
                overflow: 'hidden',
            },

            '.spx-image-comparison__image': {
                height: '100%',
            },

            '.spx-image-comparison__image--after': {
                width: '125px',
            },

            '.spx-image-comparison__scroller': {
                width: '50px',
                height: '50px',
                position: 'absolute',
                left: '100px',
                top: '50%',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                backgroundColor: ' transparent',
                opacity: 0.9,
                pointerEvents: 'auto',
                cursor: 'pointer',
                background: 'var(--spx-image-comparison-color, ' + this.color + ')',
                border: '4px solid var(--spx-image-comparison-color, ' + this.color + ')',

                '&:hover': {
                    opacity: 1,
                },
            },

            '.spx-image-comparison__thumb': {
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                'svg': {
                    height: '60%',
                    color: 'var(--spx-image-comparison-icon-color, ' + this.iconColor + ')',
                }
            },

            '.spx-image-comparison--scrolling': {
                pointerEvents: 'none',
                opacity: 1
            },

            '.spx-image-comparison__scroller:before, .spx-image-comparison__scroller:after': {
                content: '" "',
                display: 'block',
                width: '4px',
                height: '9999px',
                position: 'absolute',
                left: '50%',
                marginLeft: '-2px',
                zIndex: 30,
                transition: '0.1s',
                background: 'var(--spx-image-comparison-color, ' + this.color + ')',
            },

            '.spx-image-comparison__scroller:before': {
                top: '100%',
            },

            '.spx-image-comparison__scroller:after': {
                bottom: '100%',
            },
        })}>
            {this.srcBefore && this.srcAfter &&
            [<div class="spx-image-comparison__container spx-image-comparison__image--before">
                <img class="spx-image-comparison__image"
                     src={this.srcBefore}
                     alt="before"/>
            </div>,
                <div class="spx-image-comparison__container spx-image-comparison__image--after">
                    <img class="spx-image-comparison__image"
                         src={this.srcAfter}
                         alt="after"/>
                </div>,
                <div class=" spx-image-comparison__scroller">
                    <div class="spx-image-comparison__thumb">
                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M347.404 142.86c-4.753 4.753-4.675 12.484.173 17.14l73.203 70H91.22l73.203-70c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L128 388.766c4.686 4.686 12.284 4.686 16.971 0l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282h329.56l-73.203 70c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l124.485-124.281c4.686-4.686 4.686-12.284 0-16.971L384 123.234c-4.686-4.686-12.284-4.686-16.971 0l-19.625 19.626z"/>
                        </svg>
                    </div>
                </div>]}
        </Host>
    }
}