import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-889edf71.js';
import { c as css } from './emotion-css.esm-4fec7074.js';
import { s as setVar } from './setVar-20b48ccd.js';
import { s as setVarOrClamp } from './setVarOrClamp-21aa6296.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-19b7147f.js';

const tag = 'spx-icon';
const SpxIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxIconDidLoad = createEvent(this, "spxIconDidLoad", 7);
    this.color = 'inherit';
    /**
     * Icon type.
     * @choice 'ionicons', 'caret'
     */
    this.type = 'ionicons';
    /** Icon size. */
    this.size = '1em';
    this.sizeMin = 0.8;
    this.sizeMax = 1;
    /**
     * Styling.
     * @choice 'default', 'fluid'
     */
    this.styling = 'default';
  }
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
      fontSize: setVarOrClamp(tag, 'size', this.size, this.sizeMin, this.sizeMax, this.styling),
    });
    /** Caret styles. */
    const styleIcon = css({
      fontSize: '0.7em',
    });
    return (h(Host, { class: styleHost }, this.type === 'ionicons' ? (h("ion-icon", { name: this.icon, class: styleIonicon })) : this.type === 'caret' ? (h("i", { class: styleIcon }, "\u25BC")) : null));
  }
  get el() { return getElement(this); }
};

export { SpxIcon as spx_icon };
