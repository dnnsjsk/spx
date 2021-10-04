import { h, r as registerInstance, j as Host, g as getElement } from './index-a2b24666.js';
import { B as Button } from './Button-059c3d4b.js';
import { t as titleCase } from './titleCase-a1380a62.js';
import { s as state } from './editor-b5c7d395.js';
import { f as filter } from './lodash-e2947591.js';
import './index-ef033006.js';

// eslint-disable-next-line no-unused-vars
/**
 * Text input element.
 *
 * @param {object} obj HTML element props.
 * @returns {HTMLElement} Return an HTML element.
 */
function TextInput(obj) {
  return h("input", Object.assign({}, obj, { type: "text" }));
}

const name$l = "spx-accordion";
const description$l = "The classic method to show and hide elements on your website. Can be used\nwith custom markup for the header and/or content section.";
const properties$l = [
	{
		attribute: "class-content",
		description: "",
		id: "spx-accordion-0",
		index: 0,
		name: "classContent",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-content-active",
		description: "",
		id: "spx-accordion-1",
		index: 1,
		name: "classContentActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-content-inactive",
		description: "",
		id: "spx-accordion-2",
		index: 2,
		name: "classContentInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-content-text",
		description: "",
		id: "spx-accordion-3",
		index: 3,
		name: "classContentText",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-content-text-active",
		description: "",
		id: "spx-accordion-4",
		index: 4,
		name: "classContentTextActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-content-text-inactive",
		description: "",
		id: "spx-accordion-5",
		index: 5,
		name: "classContentTextInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header",
		description: "",
		id: "spx-accordion-6",
		index: 6,
		name: "classHeader",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-active",
		description: "",
		id: "spx-accordion-7",
		index: 7,
		name: "classHeaderActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon",
		description: "",
		id: "spx-accordion-8",
		index: 8,
		name: "classHeaderIcon",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon-active",
		description: "",
		id: "spx-accordion-9",
		index: 9,
		name: "classHeaderIconActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon-container",
		description: "",
		id: "spx-accordion-10",
		index: 10,
		name: "classHeaderIconContainer",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon-container-active",
		description: "",
		id: "spx-accordion-11",
		index: 11,
		name: "classHeaderIconContainerActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon-container-inactive",
		description: "",
		id: "spx-accordion-12",
		index: 12,
		name: "classHeaderIconContainerInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-icon-inactive",
		description: "",
		id: "spx-accordion-13",
		index: 13,
		name: "classHeaderIconInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-inactive",
		description: "",
		id: "spx-accordion-14",
		index: 14,
		name: "classHeaderInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-text",
		description: "",
		id: "spx-accordion-15",
		index: 15,
		name: "classHeaderText",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-text-active",
		description: "",
		id: "spx-accordion-16",
		index: 16,
		name: "classHeaderTextActive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-header-text-inactive",
		description: "",
		id: "spx-accordion-17",
		index: 17,
		name: "classHeaderTextInactive",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "content-color",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-accordion-18",
		index: 18,
		name: "contentColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-content-color"
	},
	{
		attribute: "content-font-size",
		"default": "var(--spx-font-size)",
		description: "",
		id: "spx-accordion-19",
		index: 19,
		name: "contentFontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-content-font-size"
	},
	{
		attribute: "content-font-size-max",
		"default": "1.2",
		description: "",
		id: "spx-accordion-20",
		index: 20,
		name: "contentFontSizeMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-content-font-size-max"
	},
	{
		attribute: "content-font-size-min",
		"default": "1",
		description: "",
		id: "spx-accordion-21",
		index: 21,
		name: "contentFontSizeMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-content-font-size-min"
	},
	{
		attribute: "content-text",
		"default": "Default Content Text",
		description: "Content text.",
		id: "spx-accordion-22",
		index: 22,
		name: "contentText",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "content-text-tag",
		"default": "span",
		description: "Content text tag.",
		id: "spx-accordion-23",
		index: 23,
		name: "contentTextTag",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "gap",
		"default": "0.4em",
		description: "Space between header and content.",
		id: "spx-accordion-24",
		index: 24,
		name: "gap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-gap"
	},
	{
		attribute: "gap-max",
		"default": "1.2",
		description: "",
		id: "spx-accordion-25",
		index: 25,
		name: "gapMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-gap-max"
	},
	{
		attribute: "gap-min",
		"default": "1",
		description: "",
		id: "spx-accordion-26",
		index: 26,
		name: "gapMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-gap-min"
	},
	{
		attribute: "header-color",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-accordion-27",
		index: 27,
		name: "headerColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-header-color"
	},
	{
		attribute: "header-font-size",
		"default": "var(--spx-font-size)",
		description: "",
		id: "spx-accordion-28",
		index: 28,
		name: "headerFontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-header-font-size"
	},
	{
		attribute: "header-font-size-max",
		"default": "1.2",
		description: "",
		id: "spx-accordion-29",
		index: 29,
		name: "headerFontSizeMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-header-font-size-max"
	},
	{
		attribute: "header-font-size-min",
		"default": "1",
		description: "",
		id: "spx-accordion-30",
		index: 30,
		name: "headerFontSizeMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-header-font-size-min"
	},
	{
		attribute: "header-gap",
		"default": "0.4em",
		description: "Gap between header text and icon.",
		id: "spx-accordion-31",
		index: 31,
		name: "headerGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-header-gap"
	},
	{
		attribute: "header-gap-max",
		"default": "1",
		description: "",
		id: "spx-accordion-32",
		index: 32,
		name: "headerGapMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-header-gap-max"
	},
	{
		attribute: "header-gap-min",
		"default": "0.6",
		description: "",
		id: "spx-accordion-33",
		index: 33,
		name: "headerGapMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-accordion-header-gap-min"
	},
	{
		attribute: "header-text",
		"default": "Default Header Text",
		description: "Header text.",
		id: "spx-accordion-34",
		index: 34,
		name: "headerText",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "header-text-open",
		description: "Header text when component is closed.",
		id: "spx-accordion-35",
		index: 35,
		name: "headerTextOpen",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "header-text-tag",
		"default": "span",
		description: "Header text tag.",
		id: "spx-accordion-36",
		index: 36,
		name: "headerTextTag",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "icon",
		"default": "arrow-down",
		description: "Icon.",
		id: "spx-accordion-37",
		index: 37,
		name: "icon",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "icon-transform",
		"default": "rotate(180deg)",
		description: "Icon transform.",
		id: "spx-accordion-38",
		index: 38,
		name: "iconTransform",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-accordion-icon-transform"
	},
	{
		attribute: "icon-type",
		"default": "ionicons",
		description: "Icon type.",
		id: "spx-accordion-39",
		index: 39,
		name: "iconType",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "link",
		description: "Sets the ID to link different accordions together.",
		id: "spx-accordion-40",
		index: 40,
		name: "link",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "link-type",
		"default": "open",
		description: "Sets the type of link.",
		id: "spx-accordion-41",
		index: 41,
		name: "linkType",
		tags: [
			{
				text: "open, close, toggle",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "open",
		"default": "false",
		description: "State of accordion.",
		id: "spx-accordion-42",
		index: 42,
		name: "openState",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "reverse",
		description: "Reverse icon positioning.",
		id: "spx-accordion-43",
		index: 43,
		name: "reverse",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "styling",
		"default": "default",
		description: "Styling.",
		id: "spx-accordion-44",
		index: 44,
		name: "styling",
		tags: [
			{
				text: "default, fluid, headless",
				name: "choice"
			}
		],
		type: "string"
	}
];
const events$l = [
	{
		name: "spxAccordionDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$l = [
	{
		name: "close",
		description: "Closes the accordion.",
		signature: "close() => Promise<void>"
	},
	{
		name: "open",
		description: "Opens the accordion.",
		signature: "open() => Promise<void>"
	},
	{
		name: "toggle",
		description: "Toggles the accordion.",
		signature: "toggle() => Promise<void>"
	}
];
const slots$l = [
	{
		name: "content",
		description: "Slot for the content."
	},
	{
		name: "header",
		description: "Slot for the header."
	}
];
const spxAccordion = {
	name: name$l,
	description: description$l,
	properties: properties$l,
	events: events$l,
	methods: methods$l,
	slots: slots$l
};

const accordion = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$l,
  description: description$l,
  properties: properties$l,
  events: events$l,
  methods: methods$l,
  slots: slots$l,
  'default': spxAccordion
});

const name$k = "spx-animate";
const description$k = "Wrapper around GSAP that allows for staggered and scroll-based animation.";
const properties$k = [
	{
		attribute: "auto-alpha",
		description: "Same as opacity but sets visibility to 'hidden' after hitting 0.",
		id: "spx-animate-0",
		index: 0,
		name: "autoAlpha",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "clip-path",
		description: "Clip-path value the animation starts from.",
		id: "spx-animate-1",
		index: 1,
		name: "clipPath",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "delay",
		"default": "0",
		description: "Delay before animation starts.",
		id: "spx-animate-2",
		index: 2,
		name: "delay",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "duration",
		"default": "1",
		description: "Animation duration.",
		id: "spx-animate-3",
		index: 3,
		name: "duration",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "ease",
		"default": "power1.out",
		description: "Ease being used. Accepts all common GSAP options.",
		id: "spx-animate-4",
		index: 4,
		name: "ease",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "filter",
		description: "Filter value the animation starts from.",
		id: "spx-animate-5",
		index: 5,
		name: "filter",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "once",
		description: "Determines if animation should only play once. (if viewport is true)",
		id: "spx-animate-6",
		index: 6,
		name: "once",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "opacity",
		description: "Opacity level the animation starts from.",
		id: "spx-animate-7",
		index: 7,
		name: "opacity",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "repeat",
		description: "Repeats the animation. -1 to repeat indefinitely.",
		id: "spx-animate-8",
		index: 8,
		name: "repeat",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "repeat-delay",
		description: "Time to wait between repetitions.",
		id: "spx-animate-9",
		index: 9,
		name: "repeatDelay",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "reverse",
		description: "Reverses the animation.",
		id: "spx-animate-10",
		index: 10,
		name: "reverse",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "stagger",
		"default": "0.15",
		description: "Amount of time elements should be staggered by.",
		id: "spx-animate-11",
		index: 11,
		name: "stagger",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "target",
		"default": "*",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-animate-12",
		index: 12,
		name: "target",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "viewport",
		description: "Starts animation when target is in the viewport.",
		id: "spx-animate-13",
		index: 13,
		name: "viewport",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "viewport-root-margin",
		"default": "0px",
		description: "Scroll intersection observer root margin.",
		id: "spx-animate-14",
		index: 14,
		name: "viewportRootMargin",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "viewport-threshold",
		"default": "0",
		description: "Scroll intersection observer threshold.",
		id: "spx-animate-15",
		index: 15,
		name: "viewportThreshold",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "x",
		"default": "0",
		description: "X position the animation starts from.",
		id: "spx-animate-16",
		index: 16,
		name: "x",
		tags: [
		],
		type: "any"
	},
	{
		attribute: "y",
		"default": "0",
		description: "Y position the animation starts from.",
		id: "spx-animate-17",
		index: 17,
		name: "y",
		tags: [
		],
		type: "any"
	},
	{
		attribute: "yoyo",
		description: "Causes the animation to go back and forth, alternating backward and forward on each repeat.",
		id: "spx-animate-18",
		index: 18,
		name: "yoyo",
		tags: [
		],
		type: "boolean"
	}
];
const events$k = [
	{
		name: "spxAnimateDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$k = [
	{
		name: "play",
		description: "Plays animation.",
		signature: "play(from?: number, suppressEvents?: boolean) => Promise<void>"
	},
	{
		name: "restart",
		description: "Restarts animation.",
		signature: "restart(includeDelay?: boolean, suppressEvents?: boolean) => Promise<void>"
	}
];
const slots$k = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxAnimate = {
	name: name$k,
	description: description$k,
	properties: properties$k,
	events: events$k,
	methods: methods$k,
	slots: slots$k
};

const animate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$k,
  description: description$k,
  properties: properties$k,
  events: events$k,
  methods: methods$k,
  slots: slots$k,
  'default': spxAnimate
});

const name$j = "spx-class-toggle";
const description$j = "Toggle CSS classes on any element in the document.";
const properties$j = [
	{
		attribute: "inner",
		"default": "true",
		description: "If target element should be searched within component or in document.",
		id: "spx-class-toggle-0",
		index: 0,
		name: "inner",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "local",
		description: "Specify a local storage item, so the toggle state will be remembered when the user visits the site again.",
		id: "spx-class-toggle-1",
		index: 1,
		name: "local",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "target",
		"default": "*",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-class-toggle-2",
		index: 2,
		name: "target",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "toggle",
		"default": "spx-class-toggle--active",
		description: "List of classes that should be toggled.",
		id: "spx-class-toggle-3",
		index: 3,
		name: "toggle",
		tags: [
		],
		type: "string"
	}
];
const events$j = [
	{
		name: "spxClassToggleDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$j = [
];
const slots$j = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxClassToggle = {
	name: name$j,
	description: description$j,
	properties: properties$j,
	events: events$j,
	methods: methods$j,
	slots: slots$j
};

const classToggle = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$j,
  description: description$j,
  properties: properties$j,
  events: events$j,
  methods: methods$j,
  slots: slots$j,
  'default': spxClassToggle
});

const name$i = "spx-code";
const description$i = "Highlight a block of code similar to a code editor.";
const properties$i = [
	{
		attribute: "background",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-code-0",
		index: 0,
		name: "background",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-background"
	},
	{
		attribute: "border-radius",
		"default": "var(--spx-border-radius)",
		description: "",
		id: "spx-code-1",
		index: 1,
		name: "borderRadius",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-border-radius"
	},
	{
		attribute: "clipboard",
		"default": "true",
		description: "Enable clipboard button.",
		id: "spx-code-2",
		index: 2,
		name: "clipboard",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "clipboard-button-background",
		"default": "var(--spx-color-gray-800)",
		description: "",
		id: "spx-code-3",
		index: 3,
		name: "clipboardButtonBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-clipboard-button-background"
	},
	{
		attribute: "clipboard-button-color",
		"default": "var(--spx-color-gray-400)",
		description: "",
		id: "spx-code-4",
		index: 4,
		name: "clipboardButtonColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-clipboard-button-color"
	},
	{
		attribute: "clipboard-button-font-size",
		"default": "12px",
		description: "",
		id: "spx-code-5",
		index: 5,
		name: "clipboardButtonFontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-clipboard-button-font-size"
	},
	{
		attribute: "clipboard-button-font-weight",
		"default": "600",
		description: "",
		id: "spx-code-6",
		index: 6,
		name: "clipboardButtonFontWeight",
		tags: [
			{
				name: "css"
			}
		],
		type: "any",
		variable: "--spx-code-clipboard-button-font-weight"
	},
	{
		attribute: "clipboard-button-padding",
		"default": "6px 12px",
		description: "",
		id: "spx-code-7",
		index: 7,
		name: "clipboardButtonPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-clipboard-button-padding"
	},
	{
		attribute: "clipboard-button-text",
		"default": "Copy",
		description: "",
		id: "spx-code-8",
		index: 8,
		name: "clipboardButtonText",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "clipboard-button-text-copied",
		"default": "Copied!",
		description: "",
		id: "spx-code-9",
		index: 9,
		name: "clipboardButtonTextCopied",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "clipboard-button-text-transform",
		"default": "uppercase",
		description: "",
		id: "spx-code-10",
		index: 10,
		name: "clipboardButtonTextTransform",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-clipboard-button-text-transform"
	},
	{
		attribute: "content",
		description: "Can be used instead of the inner slot.",
		id: "spx-code-11",
		index: 11,
		name: "content",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "filter",
		description: "",
		id: "spx-code-12",
		index: 12,
		name: "filter",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-filter"
	},
	{
		attribute: "font-size",
		"default": "clamp(12px, 1.6vw, 16px)",
		description: "",
		id: "spx-code-13",
		index: 13,
		name: "fontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-font-size"
	},
	{
		attribute: "hide-scrollbar",
		"default": "false",
		description: "Show scrollbar.",
		id: "spx-code-14",
		index: 14,
		name: "hideScrollbar",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "lazy",
		description: "Load component when it enters the viewport.",
		id: "spx-code-15",
		index: 15,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "line-numbers",
		"default": "true",
		description: "Enable line numbers.",
		id: "spx-code-16",
		index: 16,
		name: "lineNumbers",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "line-numbers-background",
		"default": "var(--spx-color-gray-800)",
		description: "",
		id: "spx-code-17",
		index: 17,
		name: "lineNumbersBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-line-numbers-background"
	},
	{
		attribute: "line-numbers-color",
		"default": "var(--spx-color-gray-400)",
		description: "",
		id: "spx-code-18",
		index: 18,
		name: "lineNumbersColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-line-numbers-color"
	},
	{
		attribute: "line-numbers-start",
		"default": "1",
		description: "Start of line number.",
		id: "spx-code-19",
		index: 19,
		name: "lineNumbersStart",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "max-width",
		"default": "100%",
		description: "",
		id: "spx-code-20",
		index: 20,
		name: "maxWidth",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-max-width"
	},
	{
		attribute: "padding",
		"default": "clamp(20px, 2.4vw, 40px)",
		description: "",
		id: "spx-code-21",
		index: 21,
		name: "padding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-code-padding"
	},
	{
		attribute: "theme",
		"default": "default",
		description: "Colour theme.",
		id: "spx-code-22",
		index: 22,
		name: "theme",
		tags: [
			{
				text: "default, dracula",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "type",
		"default": "markup",
		description: "Determines the programming language.",
		id: "spx-code-23",
		index: 23,
		name: "type",
		tags: [
			{
				text: "markup, css, js, php, twig, json",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "whitespace-left-trim",
		"default": "true",
		description: "Removes all whitespace from the top of the code block.",
		id: "spx-code-24",
		index: 24,
		name: "whitespaceLeftTrim",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "whitespace-remove-indent",
		"default": "true",
		description: "If the whole code block is indented too much it removes the extra indent.",
		id: "spx-code-25",
		index: 25,
		name: "whitespaceRemoveIndent",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "whitespace-remove-trailing",
		"default": "true",
		description: "Removes trailing whitespace on all lines.",
		id: "spx-code-26",
		index: 26,
		name: "whitespaceRemoveTrailing",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "whitespace-right-trim",
		"default": "true",
		description: "Removes all whitespace from the bottom of the code block.",
		id: "spx-code-27",
		index: 27,
		name: "whitespaceRightTrim",
		tags: [
		],
		type: "boolean"
	}
];
const events$i = [
	{
		name: "spxCodeDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$i = [
];
const slots$i = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxCode = {
	name: name$i,
	description: description$i,
	properties: properties$i,
	events: events$i,
	methods: methods$i,
	slots: slots$i
};

const code = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$i,
  description: description$i,
  properties: properties$i,
  events: events$i,
  methods: methods$i,
  slots: slots$i,
  'default': spxCode
});

const name$h = "spx-edit-button";
const description$h = "Let users edit content from the frontend of the site.";
const properties$h = [
	{
		attribute: "background",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-edit-button-0",
		index: 0,
		name: "background",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "background-discard",
		"default": "var(--spx-color-gray-600)",
		description: "Discard button background.",
		id: "spx-edit-button-1",
		index: 1,
		name: "backgroundDiscard",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-edit-button-background-discard"
	},
	{
		attribute: "border",
		"default": "none",
		description: "",
		id: "spx-edit-button-2",
		index: 2,
		name: "border",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "border-discard",
		"default": "none",
		description: "",
		id: "spx-edit-button-3",
		index: 3,
		name: "borderDiscard",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "border-radius",
		"default": "var(--spx-border-radius)",
		description: "",
		id: "spx-edit-button-4",
		index: 4,
		name: "borderRadius",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "bottom",
		"default": "1em",
		description: "",
		id: "spx-edit-button-5",
		index: 5,
		name: "bottom",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-button",
		description: "",
		id: "spx-edit-button-6",
		index: 6,
		name: "classButton",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-button-discard",
		description: "",
		id: "spx-edit-button-7",
		index: 7,
		name: "classButtonDiscard",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "class-loader",
		description: "",
		id: "spx-edit-button-8",
		index: 8,
		name: "classLoader",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "color",
		"default": "#ffffff",
		description: "",
		id: "spx-edit-button-9",
		index: 9,
		name: "color",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "color-discard",
		"default": "#ffffff",
		description: "Discard button color.",
		id: "spx-edit-button-10",
		index: 10,
		name: "colorDiscard",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-edit-button-color-discard"
	},
	{
		attribute: "edit-id",
		description: "Corresponding ID for editable fields. This property is needed when multiple\nedit-button components are used on the page. Simply apply a\n\"data-spx-edit-id\" attribute with the same value to editable elements.",
		id: "spx-edit-button-11",
		index: 11,
		name: "editId",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "font-size",
		"default": "var(--spx-font-size)",
		description: "",
		id: "spx-edit-button-12",
		index: 12,
		name: "fontSize",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "font-size-max",
		"default": "1.2",
		description: "",
		id: "spx-edit-button-13",
		index: 13,
		name: "fontSizeMax",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "font-size-min",
		"default": "1",
		description: "",
		id: "spx-edit-button-14",
		index: 14,
		name: "fontSizeMin",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "gap",
		"default": "0.4em",
		description: "Gap between the buttons.",
		id: "spx-edit-button-15",
		index: 15,
		name: "gap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-edit-button-gap"
	},
	{
		attribute: "left",
		description: "",
		id: "spx-edit-button-16",
		index: 16,
		name: "left",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "loader-color",
		"default": "#ffffff",
		description: "",
		id: "spx-edit-button-17",
		index: 17,
		name: "loaderColor",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "loader-gap",
		"default": "0.5em",
		description: "",
		id: "spx-edit-button-18",
		index: 18,
		name: "loaderGap",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "padding",
		"default": "1em 1.2em",
		description: "",
		id: "spx-edit-button-19",
		index: 19,
		name: "padding",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "padding-x-max",
		"default": "1.4",
		description: "",
		id: "spx-edit-button-20",
		index: 20,
		name: "paddingXMax",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "padding-x-min",
		"default": "1",
		description: "",
		id: "spx-edit-button-21",
		index: 21,
		name: "paddingXMin",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "padding-y-max",
		"default": "1.2",
		description: "",
		id: "spx-edit-button-22",
		index: 22,
		name: "paddingYMax",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "padding-y-min",
		"default": "0.7",
		description: "",
		id: "spx-edit-button-23",
		index: 23,
		name: "paddingYMin",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "position",
		"default": "fixed",
		description: "Position property of component.",
		id: "spx-edit-button-24",
		index: 24,
		name: "position",
		tags: [
		],
		type: "\"absolute\" | \"fixed\" | \"relative\" | \"static\""
	},
	{
		attribute: "right",
		"default": "1em",
		description: "",
		id: "spx-edit-button-25",
		index: 25,
		name: "right",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "styling",
		"default": "default",
		description: "Styling.",
		id: "spx-edit-button-26",
		index: 26,
		name: "styling",
		tags: [
			{
				text: "default, fluid, headless",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "test",
		"default": "false",
		description: "",
		id: "spx-edit-button-27",
		index: 27,
		name: "test",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "text-discard",
		"default": "Discard",
		description: "Discard button text.",
		id: "spx-edit-button-28",
		index: 28,
		name: "textDiscard",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "text-edit",
		"default": "Edit site",
		description: "Edit button text.",
		id: "spx-edit-button-29",
		index: 29,
		name: "textEdit",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "text-save",
		"default": "Save",
		description: "Save button text.",
		id: "spx-edit-button-30",
		index: 30,
		name: "textSave",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "top",
		description: "",
		id: "spx-edit-button-31",
		index: 31,
		name: "top",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "z-index",
		"default": "99",
		description: "",
		id: "spx-edit-button-32",
		index: 32,
		name: "zIndex",
		tags: [
		],
		type: "number"
	}
];
const events$h = [
	{
		name: "spxEditButtonDidLoad",
		description: "Fires after component has loaded."
	},
	{
		name: "spxEditButtonDiscard",
		description: "Fires after pressing the discard button."
	},
	{
		name: "spxEditButtonSave",
		description: "Fires after pressing the save button."
	}
];
const methods$h = [
	{
		name: "discard",
		description: "Discard changes.",
		signature: "discard() => Promise<void>"
	},
	{
		name: "edit",
		description: "Enable editing.",
		signature: "edit() => Promise<void>"
	},
	{
		name: "save",
		description: "Save changes.",
		signature: "save() => Promise<void>"
	}
];
const slots$h = [
];
const spxEditButton = {
	name: name$h,
	description: description$h,
	properties: properties$h,
	events: events$h,
	methods: methods$h,
	slots: slots$h
};

const editButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$h,
  description: description$h,
  properties: properties$h,
  events: events$h,
  methods: methods$h,
  slots: slots$h,
  'default': spxEditButton
});

const name$g = "spx-group";
const description$g = "Pass attributes to all inner (spx) child elements.\nAll attributes that start with g-* will be passed on to child elements.";
const properties$g = [
	{
		attribute: "content",
		description: "",
		id: "spx-group-0",
		index: 0,
		name: "content",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "target",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-group-1",
		index: 1,
		name: "target",
		tags: [
		],
		type: "string"
	}
];
const events$g = [
	{
		name: "spxGroupDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$g = [
];
const slots$g = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxGroup = {
	name: name$g,
	description: description$g,
	properties: properties$g,
	events: events$g,
	methods: methods$g,
	slots: slots$g
};

const group = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$g,
  description: description$g,
  properties: properties$g,
  events: events$g,
  methods: methods$g,
  slots: slots$g,
  'default': spxGroup
});

const name$f = "spx-icon";
const description$f = "Wrapper component for different kinds of icon sets. Currently comes included with Ionicons.";
const properties$f = [
	{
		attribute: "color",
		"default": "inherit",
		description: "",
		id: "spx-icon-0",
		index: 0,
		name: "color",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "icon",
		description: "Icon code.",
		id: "spx-icon-1",
		index: 1,
		name: "icon",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "size",
		"default": "1em",
		description: "Icon size.",
		id: "spx-icon-2",
		index: 2,
		name: "size",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "size-max",
		"default": "1",
		description: "",
		id: "spx-icon-3",
		index: 3,
		name: "sizeMax",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "size-min",
		"default": "0.8",
		description: "",
		id: "spx-icon-4",
		index: 4,
		name: "sizeMin",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "styling",
		"default": "default",
		description: "Styling.",
		id: "spx-icon-5",
		index: 5,
		name: "styling",
		tags: [
			{
				text: "default, fluid",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "type",
		"default": "ionicons",
		description: "Icon type.",
		id: "spx-icon-6",
		index: 6,
		name: "type",
		tags: [
			{
				text: "ionicons, caret",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "width",
		description: "",
		id: "spx-icon-7",
		index: 7,
		name: "width",
		tags: [
		],
		type: "string"
	}
];
const events$f = [
	{
		name: "spxIconDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$f = [
];
const slots$f = [
];
const spxIcon = {
	name: name$f,
	description: description$f,
	properties: properties$f,
	events: events$f,
	methods: methods$f,
	slots: slots$f
};

const icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$f,
  description: description$f,
  properties: properties$f,
  events: events$f,
  methods: methods$f,
  slots: slots$f,
  'default': spxIcon
});

const name$e = "spx-iframe";
const description$e = "A wrapper around a standard iframe element, which scales proportionally to\nits parent. Great for showing desktop versions of a website on smaller\nscreens or viewports.";
const properties$e = [
	{
		attribute: "fit",
		description: "Automatically resize iframe to fit content.",
		id: "spx-iframe-0",
		index: 0,
		name: "fit",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "lazy",
		description: "Lazy load content.",
		id: "spx-iframe-1",
		index: 1,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "loader-background",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-iframe-2",
		index: 2,
		name: "loaderBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-iframe-loader-background"
	},
	{
		attribute: "loader-border-radius",
		"default": "var(--spx-border-radius)",
		description: "",
		id: "spx-iframe-3",
		index: 3,
		name: "loaderBorderRadius",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-iframe-loader-border-radius"
	},
	{
		attribute: "loader-color",
		"default": "#ffffff",
		description: "",
		id: "spx-iframe-4",
		index: 4,
		name: "loaderColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-iframe-loader-color"
	},
	{
		attribute: "loader-padding",
		"default": "0.8em",
		description: "",
		id: "spx-iframe-5",
		index: 5,
		name: "loaderPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-iframe-loader-padding"
	},
	{
		attribute: "min-height",
		"default": "400px",
		description: "",
		id: "spx-iframe-6",
		index: 6,
		name: "minHeight",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-iframe-min-height"
	},
	{
		attribute: "size",
		"default": "1440px",
		description: "Screen size of the site shown inside the iframe.",
		id: "spx-iframe-7",
		index: 7,
		name: "size",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "src",
		"default": "https://spx.dev",
		description: "Source for the iframe.",
		id: "spx-iframe-8",
		index: 8,
		name: "src",
		tags: [
		],
		type: "string"
	}
];
const events$e = [
	{
		name: "spxIframeDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$e = [
];
const slots$e = [
];
const spxIframe = {
	name: name$e,
	description: description$e,
	properties: properties$e,
	events: events$e,
	methods: methods$e,
	slots: slots$e
};

const iframe = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$e,
  description: description$e,
  properties: properties$e,
  events: events$e,
  methods: methods$e,
  slots: slots$e,
  'default': spxIframe
});

const name$d = "spx-image-comparison";
const description$d = "Compare two images visually using a slider. Handy for showing subtle (or not\nso subtle) before/after differences.";
const properties$d = [
	{
		attribute: "active",
		description: "",
		id: "spx-image-comparison-0",
		index: 0,
		name: "active",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "color",
		"default": "#ffffff",
		description: "",
		id: "spx-image-comparison-1",
		index: 1,
		name: "color",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-image-comparison-color"
	},
	{
		attribute: "height",
		"default": "100%",
		description: "",
		id: "spx-image-comparison-2",
		index: 2,
		name: "height",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-image-comparison-height"
	},
	{
		attribute: "icon-color",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-image-comparison-3",
		index: 3,
		name: "iconColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-image-comparison-icon-color"
	},
	{
		attribute: "lazy",
		description: "Lazy load images.",
		id: "spx-image-comparison-4",
		index: 4,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "src-after",
		"default": "https://source.unsplash.com/random/1200x300",
		description: "Image URL of the before image.",
		id: "spx-image-comparison-5",
		index: 5,
		name: "srcAfter",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "src-before",
		"default": "https://source.unsplash.com/random/1201x300",
		description: "Image URL of the after image.",
		id: "spx-image-comparison-6",
		index: 6,
		name: "srcBefore",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "start",
		"default": "150",
		description: "Opening state in pixels.",
		id: "spx-image-comparison-7",
		index: 7,
		name: "start",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "steps",
		"default": "10",
		description: "Step amount when using component with arrow keys.",
		id: "spx-image-comparison-8",
		index: 8,
		name: "steps",
		tags: [
		],
		type: "number"
	}
];
const events$d = [
	{
		name: "spxImageComparisonDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$d = [
];
const slots$d = [
];
const spxImageComparison = {
	name: name$d,
	description: description$d,
	properties: properties$d,
	events: events$d,
	methods: methods$d,
	slots: slots$d
};

const imageComparison = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$d,
  description: description$d,
  properties: properties$d,
  events: events$d,
  methods: methods$d,
  slots: slots$d,
  'default': spxImageComparison
});

const name$c = "spx-lightbox";
const description$c = "Creates a lightbox for images.";
const properties$c = [
	{
		attribute: "body-overflow",
		"default": "true",
		description: "If 'overflow: hidden' should be applied to the body when a lightbox is open.",
		id: "spx-lightbox-0",
		index: 0,
		name: "bodyOverflow",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "close-button",
		"default": "true",
		description: "Show close button.",
		id: "spx-lightbox-1",
		index: 1,
		name: "closeButton",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "close-button-color",
		"default": "#ffffff",
		description: "",
		id: "spx-lightbox-2",
		index: 2,
		name: "closeButtonColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-lightbox-close-button-color"
	},
	{
		attribute: "overlay-backdrop-filter",
		"default": "var(--spx-backdrop-filter)",
		description: "",
		id: "spx-lightbox-3",
		index: 3,
		name: "overlayBackdropFilter",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-lightbox-overlay-backdrop-filter"
	},
	{
		attribute: "overlay-background",
		"default": "rgba(0,0,0,0.8)",
		description: "",
		id: "spx-lightbox-4",
		index: 4,
		name: "overlayBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-lightbox-overlay-background"
	},
	{
		attribute: "spx-slider",
		description: "Pass attributes to the inner <spx-slider> component using a JSON string: { \"slides-per-view\": \"2.5\" }",
		id: "spx-lightbox-5",
		index: 5,
		name: "spxSlider",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "target",
		"default": "img",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-lightbox-6",
		index: 6,
		name: "target",
		tags: [
		],
		type: "string"
	}
];
const events$c = [
	{
		name: "spxLightboxDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$c = [
];
const slots$c = [
];
const spxLightbox = {
	name: name$c,
	description: description$c,
	properties: properties$c,
	events: events$c,
	methods: methods$c,
	slots: slots$c
};

const lightbox = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$c,
  description: description$c,
  properties: properties$c,
  events: events$c,
  methods: methods$c,
  slots: slots$c,
  'default': spxLightbox
});

const name$b = "spx-masonry";
const description$b = "Arrange images in a masonry layout.";
const properties$b = [
	{
		attribute: "columns",
		"default": "4",
		description: "Number of columns.",
		id: "spx-masonry-0",
		index: 0,
		name: "columns",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "gap",
		"default": "10px",
		description: "Gap between images.",
		id: "spx-masonry-1",
		index: 1,
		name: "gap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-masonry-gap"
	},
	{
		attribute: "image-size",
		description: "WordPress media size when using the helper function.",
		id: "spx-masonry-2",
		index: 2,
		name: "imageSize",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "image-src",
		"default": "acf",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-masonry-3",
		index: 3,
		name: "imageSrc",
		tags: [
			{
				text: "acf, mb",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "images",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-masonry-4",
		index: 4,
		name: "images",
		tags: [
			{
				text: "&lt;?php spxGetImages( $fieldName, $type, $postId ); ?>",
				name: "helper"
			},
			{
				text: "spxGetImages",
				name: "function"
			}
		],
		type: "string"
	},
	{
		attribute: "lazy",
		description: "Lazy load images.",
		id: "spx-masonry-5",
		index: 5,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	}
];
const events$b = [
	{
		name: "spxMasonryDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$b = [
];
const slots$b = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxMasonry = {
	name: name$b,
	description: description$b,
	properties: properties$b,
	events: events$b,
	methods: methods$b,
	slots: slots$b
};

const masonry = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$b,
  description: description$b,
  properties: properties$b,
  events: events$b,
  methods: methods$b,
  slots: slots$b,
  'default': spxMasonry
});

const name$a = "spx-mockup";
const description$a = "Display device mockups around your content.";
const properties$a = [
	{
		attribute: "color-galaxy-s-8",
		"default": "black",
		description: "Samsung S8 color.",
		id: "spx-mockup-0",
		index: 0,
		name: "colorGalaxyS8",
		tags: [
			{
				text: "black, blue",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "color-google-pixel",
		"default": "silver",
		description: "Google Pixel color.",
		id: "spx-mockup-1",
		index: 1,
		name: "colorGooglePixel",
		tags: [
			{
				text: "silver, black, blue",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "color-ipad-pro",
		"default": "silver",
		description: "IPad Pro color.",
		id: "spx-mockup-2",
		index: 2,
		name: "colorIpadPro",
		tags: [
			{
				text: "silver, gold, rosegold, spacegray",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "color-iphone-8",
		"default": "silver",
		description: "IPhone 8 color.",
		id: "spx-mockup-3",
		index: 3,
		name: "colorIphone8",
		tags: [
			{
				text: "silver, gold, spacegray",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "color-macbook",
		"default": "silver",
		description: "MacBook color.",
		id: "spx-mockup-4",
		index: 4,
		name: "colorMacbook",
		tags: [
			{
				text: "silver, gold, rosegold, spacegray",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "color-macbook-pro",
		"default": "silver",
		description: "MacBook Pro color.",
		id: "spx-mockup-5",
		index: 5,
		name: "colorMacbookPro",
		tags: [
			{
				text: "silver, spacegray",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "image-position",
		"default": "50% 50%",
		description: "",
		id: "spx-mockup-6",
		index: 6,
		name: "imagePosition",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-mockup-image-position"
	},
	{
		attribute: "size",
		description: "Mockup size.",
		id: "spx-mockup-7",
		index: 7,
		name: "size",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "size-max",
		"default": "0.6",
		description: "Mockup size maximum.",
		id: "spx-mockup-8",
		index: 8,
		name: "sizeMax",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "size-min",
		"default": "0.3",
		description: "Mockup size minimum.",
		id: "spx-mockup-9",
		index: 9,
		name: "sizeMin",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "src",
		description: "Image src if no inner slot is used.",
		id: "spx-mockup-10",
		index: 10,
		name: "src",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "type",
		"default": "iphone-8",
		description: "Device type.",
		id: "spx-mockup-11",
		index: 11,
		name: "type",
		tags: [
			{
				text: "iphone-8, iphone-x, google-pixel-2-xl, google-pixel, galaxy-s8, ipad-pro, surface-pro, surface-book, macbook, macbook-pro, surface-studio, imac-pro, apple-watch",
				name: "choice"
			}
		],
		type: "string"
	}
];
const events$a = [
	{
		name: "spxMockupDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$a = [
];
const slots$a = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxMockup = {
	name: name$a,
	description: description$a,
	properties: properties$a,
	events: events$a,
	methods: methods$a,
	slots: slots$a
};

const mockup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$a,
  description: description$a,
  properties: properties$a,
  events: events$a,
  methods: methods$a,
  slots: slots$a,
  'default': spxMockup
});

const name$9 = "spx-navigation";
const description$9 = "Render a complete WordPress menu with nested submenus and automatic positioning.";
const properties$9 = [
	{
		attribute: "child-border",
		"default": "1px solid var(--spx-color-gray-200)",
		description: "",
		id: "spx-navigation-0",
		index: 0,
		name: "childBorder",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-border"
	},
	{
		attribute: "child-border-radius",
		"default": "0",
		description: "Child menu border-radius.",
		id: "spx-navigation-1",
		index: 1,
		name: "childBorderRadius",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-border-radius"
	},
	{
		attribute: "child-box-shadow",
		"default": "0 3px 10px 0 rgba(0,0,0,0.05)",
		description: "Child menu box-shadow.",
		id: "spx-navigation-2",
		index: 2,
		name: "childBoxShadow",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-box-shadow"
	},
	{
		attribute: "child-child-gap",
		"default": "0.8em",
		description: "Gap between nested child menus.",
		id: "spx-navigation-3",
		index: 3,
		name: "childChildGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-child-gap"
	},
	{
		attribute: "child-gap",
		"default": "0.5em",
		description: "Gap between top level menu items and child menus.",
		id: "spx-navigation-4",
		index: 4,
		name: "childGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-gap"
	},
	{
		attribute: "child-icon",
		"default": "arrow-down",
		description: "Indicator icon.",
		id: "spx-navigation-5",
		index: 5,
		name: "childIcon",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "child-icon-type",
		"default": "ionicons",
		description: "Indicator icon type.",
		id: "spx-navigation-6",
		index: 6,
		name: "childIconType",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "child-indicator-gap",
		"default": "0.2em",
		description: "Gap between child menu indicator and text.",
		id: "spx-navigation-7",
		index: 7,
		name: "childIndicatorGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-indicator-gap"
	},
	{
		attribute: "child-item-background",
		"default": "#ffffff",
		description: "",
		id: "spx-navigation-8",
		index: 8,
		name: "childItemBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-item-background"
	},
	{
		attribute: "child-item-background-hover",
		"default": "var(--spx-color-gray-100)",
		description: "",
		id: "spx-navigation-9",
		index: 9,
		name: "childItemBackgroundHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-item-background-hover"
	},
	{
		attribute: "child-item-color",
		"default": "var(--spx-color-gray-700)",
		description: "",
		id: "spx-navigation-10",
		index: 10,
		name: "childItemColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-item-color"
	},
	{
		attribute: "child-item-color-hover",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-navigation-11",
		index: 11,
		name: "childItemColorHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-item-color-hover"
	},
	{
		attribute: "child-item-padding",
		"default": "0.6em 0.8em",
		description: "",
		id: "spx-navigation-12",
		index: 12,
		name: "childItemPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-item-padding"
	},
	{
		attribute: "child-placement",
		"default": "start",
		description: "Child menu placement.",
		id: "spx-navigation-13",
		index: 13,
		name: "childPlacement",
		tags: [
			{
				name: "css"
			},
			{
				text: "start, end",
				name: "choice"
			}
		],
		type: "string",
		variable: "--spx-navigation-child-placement"
	},
	{
		attribute: "font-size",
		"default": "clamp(18px, 1.6vw, 20px)",
		description: "",
		id: "spx-navigation-14",
		index: 14,
		name: "fontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-font-size"
	},
	{
		attribute: "is-mobile",
		description: "",
		id: "spx-navigation-15",
		index: 15,
		name: "isMobile",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "item-underline",
		description: "Underlines all links.",
		id: "spx-navigation-16",
		index: 16,
		name: "itemUnderline",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "item-underline-hover",
		description: "Underlines all links on hover.",
		id: "spx-navigation-17",
		index: 17,
		name: "itemUnderlineHover",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "menu",
		description: "Renders a WordPress menu.",
		id: "spx-navigation-18",
		index: 18,
		name: "menu",
		tags: [
			{
				text: "&lt;?php spxGetNavigation( $menuName ); ?>",
				name: "helper"
			},
			{
				text: "spxGetNavigation",
				name: "function"
			}
		],
		type: "string"
	},
	{
		attribute: "mobile",
		"default": "768",
		description: "Mobile breakpoint.",
		id: "spx-navigation-19",
		index: 19,
		name: "mobile",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "mobile-icon",
		description: "Mobile button icon.",
		id: "spx-navigation-20",
		index: 20,
		name: "mobileIcon",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "mobile-icon-type",
		"default": "ionicons",
		description: "Mobile button icon type.",
		id: "spx-navigation-21",
		index: 21,
		name: "mobileIconType",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "mobile-item-background",
		"default": "#ffffff",
		description: "",
		id: "spx-navigation-22",
		index: 22,
		name: "mobileItemBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-background"
	},
	{
		attribute: "mobile-item-background-hover",
		"default": "var(--spx-color-gray-100)",
		description: "",
		id: "spx-navigation-23",
		index: 23,
		name: "mobileItemBackgroundHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-background-hover"
	},
	{
		attribute: "mobile-item-color",
		"default": "var(--spx-color-gray-800)",
		description: "",
		id: "spx-navigation-24",
		index: 24,
		name: "mobileItemColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-color"
	},
	{
		attribute: "mobile-item-color-hover",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-navigation-25",
		index: 25,
		name: "mobileItemColorHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-color-hover"
	},
	{
		attribute: "mobile-item-nested-margin-left",
		"default": "0.8em",
		description: "",
		id: "spx-navigation-26",
		index: 26,
		name: "mobileItemNestedMarginLeft",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-nested-margin-left"
	},
	{
		attribute: "mobile-item-padding",
		"default": "0.6em",
		description: "",
		id: "spx-navigation-27",
		index: 27,
		name: "mobileItemPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-mobile-item-padding"
	},
	{
		attribute: "mobile-placement",
		"default": "start",
		description: "Mobile placement.",
		id: "spx-navigation-28",
		index: 28,
		name: "mobilePlacement",
		tags: [
			{
				text: "start, end",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "parent-item-background",
		"default": "#ffffff",
		description: "",
		id: "spx-navigation-29",
		index: 29,
		name: "parentItemBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-background"
	},
	{
		attribute: "parent-item-background-hover",
		"default": "var(--spx-color-gray-100)",
		description: "",
		id: "spx-navigation-30",
		index: 30,
		name: "parentItemBackgroundHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-background-hover"
	},
	{
		attribute: "parent-item-color",
		"default": "var(--spx-color-gray-800)",
		description: "",
		id: "spx-navigation-31",
		index: 31,
		name: "parentItemColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-color"
	},
	{
		attribute: "parent-item-color-hover",
		"default": "var(--spx-color-gray-900)",
		description: "",
		id: "spx-navigation-32",
		index: 32,
		name: "parentItemColorHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-color-hover"
	},
	{
		attribute: "parent-item-gap",
		"default": "0.4em",
		description: "Gap between parent menu items.",
		id: "spx-navigation-33",
		index: 33,
		name: "parentItemGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-gap"
	},
	{
		attribute: "parent-item-padding",
		"default": "0.6em",
		description: "",
		id: "spx-navigation-34",
		index: 34,
		name: "parentItemPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-navigation-parent-item-padding"
	},
	{
		attribute: "vertical",
		description: "Renders menu vertically.",
		id: "spx-navigation-35",
		index: 35,
		name: "vertical",
		tags: [
		],
		type: "boolean"
	}
];
const events$9 = [
	{
		name: "spxNavigationDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$9 = [
];
const slots$9 = [
];
const spxNavigation = {
	name: name$9,
	description: description$9,
	properties: properties$9,
	events: events$9,
	methods: methods$9,
	slots: slots$9
};

const navigation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$9,
  description: description$9,
  properties: properties$9,
  events: events$9,
  methods: methods$9,
  slots: slots$9,
  'default': spxNavigation
});

const name$8 = "spx-notation";
const description$8 = "Annotate letters, words or whole sentences.";
const properties$8 = [
	{
		attribute: "animation",
		"default": "true",
		description: "Turn animation on or off when animation.",
		id: "spx-notation-0",
		index: 0,
		name: "animation",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "animation-duration",
		"default": "800",
		description: "Animation duration.",
		id: "spx-notation-1",
		index: 1,
		name: "animationDuration",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "autoplay",
		"default": "true",
		description: "Autoplay.",
		id: "spx-notation-2",
		index: 2,
		name: "autoplay",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "brackets",
		"default": "left, right",
		description: "Brackets.",
		id: "spx-notation-3",
		index: 3,
		name: "brackets",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "color",
		"default": "var(--spx-color-gray-100)",
		description: "",
		id: "spx-notation-4",
		index: 4,
		name: "color",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "delay",
		description: "",
		id: "spx-notation-5",
		index: 5,
		name: "delay",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "group",
		description: "Create a group on annotations by applying a \"data-spx-annotation\" to elements within.",
		id: "spx-notation-6",
		index: 6,
		name: "group",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "iterations",
		"default": "1",
		description: "Number of iterations.",
		id: "spx-notation-7",
		index: 7,
		name: "iterations",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "multiline",
		"default": "true",
		description: "Annotate multiline text.",
		id: "spx-notation-8",
		index: 8,
		name: "multiline",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "padding",
		description: "Padding around notations.",
		id: "spx-notation-9",
		index: 9,
		name: "padding",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "stroke-width",
		"default": "1",
		description: "Stroke width.",
		id: "spx-notation-10",
		index: 10,
		name: "strokeWidth",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "type",
		"default": "underline",
		description: "Type of notation.",
		id: "spx-notation-11",
		index: 11,
		name: "type",
		tags: [
			{
				text: "underline, box, circle, highlight, strike-through, crossed-off, bracket",
				name: "choice"
			}
		],
		type: "string"
	}
];
const events$8 = [
	{
		name: "spxNotationDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$8 = [
	{
		name: "clear",
		description: "Remove the annotation.",
		signature: "clear() => Promise<void>"
	},
	{
		name: "hide",
		description: "Hides the annotation. (non animated)",
		signature: "hide() => Promise<void>"
	},
	{
		name: "redraw",
		description: "Redraw the animation.",
		signature: "redraw() => Promise<void>"
	},
	{
		name: "show",
		description: "Draws the annotation.",
		signature: "show() => Promise<void>"
	}
];
const slots$8 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxNotation = {
	name: name$8,
	description: description$8,
	properties: properties$8,
	events: events$8,
	methods: methods$8,
	slots: slots$8
};

const notation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$8,
  description: description$8,
  properties: properties$8,
  events: events$8,
  methods: methods$8,
  slots: slots$8,
  'default': spxNotation
});

const name$7 = "spx-offset";
const description$7 = "The component offsets itself to the height of a specified element. It comes\nin handy when dealing with a fixed header and is used on this site. Simply\nwrap your main content container with it and select a target element. The\ndistance will adjust on screen resize.";
const properties$7 = [
	{
		attribute: "target",
		"default": "header",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-offset-0",
		index: 0,
		name: "target",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "variable",
		"default": "true",
		description: "Add offset as CSS variable to body.",
		id: "spx-offset-1",
		index: 1,
		name: "variable",
		tags: [
		],
		type: "boolean"
	}
];
const events$7 = [
	{
		name: "spxOffsetDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$7 = [
	{
		name: "recalc",
		description: "Recalculate distance.",
		signature: "recalc() => Promise<void>"
	}
];
const slots$7 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxOffset = {
	name: name$7,
	description: description$7,
	properties: properties$7,
	events: events$7,
	methods: methods$7,
	slots: slots$7
};

const offset = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$7,
  description: description$7,
  properties: properties$7,
  events: events$7,
  methods: methods$7,
  slots: slots$7,
  'default': spxOffset
});

const name$6 = "spx-scrollspy";
const description$6 = "Automatically add CSS classes to navigation items\nand content elements depending on the scroll position.";
const properties$6 = [
	{
		attribute: "nav-class",
		"default": "spx-scrollspy__nav--active",
		description: "Applied class to active navigation element.",
		id: "spx-scrollspy-0",
		index: 0,
		name: "navClass",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "root-margin",
		"default": "0px",
		description: "Intersection observer root margin.",
		id: "spx-scrollspy-1",
		index: 1,
		name: "rootMargin",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "target",
		"default": "a",
		description: "Target element. Can take any querySelector value. (id, class, tag etc.)",
		id: "spx-scrollspy-2",
		index: 2,
		name: "target",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "threshold",
		"default": "0.5",
		description: "Intersection observer threshold.",
		id: "spx-scrollspy-3",
		index: 3,
		name: "threshold",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "url-change",
		"default": "false",
		description: "Appends the currently active link to the end of the URL.",
		id: "spx-scrollspy-4",
		index: 4,
		name: "urlChange",
		tags: [
		],
		type: "boolean"
	}
];
const events$6 = [
	{
		name: "spxScrollspyDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$6 = [
];
const slots$6 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxScrollspy = {
	name: name$6,
	description: description$6,
	properties: properties$6,
	events: events$6,
	methods: methods$6,
	slots: slots$6
};

const scrollspy = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$6,
  description: description$6,
  properties: properties$6,
  events: events$6,
  methods: methods$6,
  slots: slots$6,
  'default': spxScrollspy
});

const name$5 = "spx-share";
const description$5 = "Social share buttons. Currently includes Facebook, Twitter, Whatsapp and E-Mail.";
const properties$5 = [
	{
		attribute: "font-size",
		"default": "var(--spx-font-size)",
		description: "",
		id: "spx-share-0",
		index: 0,
		name: "fontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-font-size"
	},
	{
		attribute: "font-size-max",
		"default": "1.4",
		description: "",
		id: "spx-share-1",
		index: 1,
		name: "fontSizeMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-font-size-max"
	},
	{
		attribute: "font-size-min",
		"default": "1",
		description: "",
		id: "spx-share-2",
		index: 2,
		name: "fontSizeMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-font-size-min"
	},
	{
		attribute: "item-background",
		description: "",
		id: "spx-share-3",
		index: 3,
		name: "itemBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-background"
	},
	{
		attribute: "item-border-radius",
		"default": "var(--spx-border-radius)",
		description: "",
		id: "spx-share-4",
		index: 4,
		name: "itemBorderRadius",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-border-radius"
	},
	{
		attribute: "item-color",
		description: "Gap between buttons.",
		id: "spx-share-5",
		index: 5,
		name: "itemColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-color"
	},
	{
		attribute: "item-filter-hover",
		"default": "brightness(110%) saturate(120%)",
		description: "Filter hover.",
		id: "spx-share-6",
		index: 6,
		name: "itemFilterHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-filter-hover"
	},
	{
		attribute: "item-gap",
		"default": "0.5em",
		description: "Gap between buttons.",
		id: "spx-share-7",
		index: 7,
		name: "itemGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-gap"
	},
	{
		attribute: "item-gap-max",
		"default": "1",
		description: "",
		id: "spx-share-8",
		index: 8,
		name: "itemGapMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-gap-max"
	},
	{
		attribute: "item-gap-min",
		"default": "0.4",
		description: "",
		id: "spx-share-9",
		index: 9,
		name: "itemGapMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-gap-min"
	},
	{
		attribute: "item-padding",
		"default": "0.5em",
		description: "",
		id: "spx-share-10",
		index: 10,
		name: "itemPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-padding"
	},
	{
		attribute: "item-padding-max",
		"default": "1.2",
		description: "",
		id: "spx-share-11",
		index: 11,
		name: "itemPaddingMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-padding-max"
	},
	{
		attribute: "item-padding-min",
		"default": "0.5",
		description: "",
		id: "spx-share-12",
		index: 12,
		name: "itemPaddingMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-padding-min"
	},
	{
		attribute: "item-size",
		"default": "1em",
		description: "",
		id: "spx-share-13",
		index: 13,
		name: "itemSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-share-item-size"
	},
	{
		attribute: "item-size-max",
		"default": "1",
		description: "",
		id: "spx-share-14",
		index: 14,
		name: "itemSizeMax",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-size-max"
	},
	{
		attribute: "item-size-min",
		"default": "0.7",
		description: "",
		id: "spx-share-15",
		index: 15,
		name: "itemSizeMin",
		tags: [
			{
				name: "css"
			}
		],
		type: "number",
		variable: "--spx-share-item-size-min"
	},
	{
		attribute: "styling",
		"default": "default",
		description: "Styling.",
		id: "spx-share-16",
		index: 16,
		name: "styling",
		tags: [
			{
				text: "default, fluid",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "target",
		"default": "_blank",
		description: "Link href target.",
		id: "spx-share-17",
		index: 17,
		name: "target",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "theme",
		"default": "default",
		description: "Button theme.",
		id: "spx-share-18",
		index: 18,
		name: "theme",
		tags: [
			{
				text: "default, outline, minimal",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "vertical",
		description: "Render buttons vertically.",
		id: "spx-share-19",
		index: 19,
		name: "vertical",
		tags: [
		],
		type: "boolean"
	}
];
const events$5 = [
	{
		name: "spxShareDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$5 = [
];
const slots$5 = [
];
const spxShare = {
	name: name$5,
	description: description$5,
	properties: properties$5,
	events: events$5,
	methods: methods$5,
	slots: slots$5
};

const share = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$5,
  description: description$5,
  properties: properties$5,
  events: events$5,
  methods: methods$5,
  slots: slots$5,
  'default': spxShare
});

const name$4 = "spx-slider";
const description$4 = "A slider is a revolving carousel that displays photos or other types of content.";
const properties$4 = [
	{
		attribute: "autoheight",
		"default": "false",
		description: "Automatically adjusts height of slider.",
		id: "spx-slider-0",
		index: 0,
		name: "autoheight",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "autoplay",
		"default": "false",
		description: "Starts navigating to the next slide when page is loaded.",
		id: "spx-slider-1",
		index: 1,
		name: "autoplay",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "autoplay-delay",
		"default": "6000",
		description: "Autoplay delay.",
		id: "spx-slider-2",
		index: 2,
		name: "autoplayDelay",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "autoplay-disable-on-interaction",
		"default": "false",
		description: "Disable autoplay after interaction with slides.",
		id: "spx-slider-3",
		index: 3,
		name: "autoplayDisableOnInteraction",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "centered-slides",
		"default": "false",
		description: "Centers slides in viewport.",
		id: "spx-slider-4",
		index: 4,
		name: "centeredSlides",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "effect",
		"default": "slide",
		description: "Slider effect.",
		id: "spx-slider-5",
		index: 5,
		name: "effect",
		tags: [
			{
				text: "slide, effect",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "gap",
		"default": "0",
		description: "Space between slides.",
		id: "spx-slider-6",
		index: 6,
		name: "gap",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "image-object-fit",
		"default": "cover",
		description: "Image object-fit.",
		id: "spx-slider-7",
		index: 7,
		name: "imageObjectFit",
		tags: [
			{
				text: "fill, contain, cover, scale-down, none",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "image-size",
		description: "WordPress media size when using the helper function.",
		id: "spx-slider-8",
		index: 8,
		name: "imageSize",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "image-src",
		"default": "acf",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-slider-9",
		index: 9,
		name: "imageSrc",
		tags: [
			{
				text: "acf, mb",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "images",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-slider-10",
		index: 10,
		name: "images",
		tags: [
			{
				text: "&lt;?php spxGetImages( $fieldName, $type, $postId ); ?>",
				name: "helper"
			},
			{
				text: "spxGetImages",
				name: "function"
			}
		],
		type: "string"
	},
	{
		attribute: "lazy",
		description: "Lazy load images.",
		id: "spx-slider-11",
		index: 11,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "lazy-load-prev-next",
		description: "Amount of images to to be preloaded when lazy is enabled.",
		id: "spx-slider-12",
		index: 12,
		name: "lazyLoadPrevNext",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "loop",
		description: "Loops all slides infinitely.",
		id: "spx-slider-13",
		index: 13,
		name: "loop",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "max-height",
		description: "",
		id: "spx-slider-14",
		index: 14,
		name: "maxHeight",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-max-height"
	},
	{
		attribute: "navigation",
		"default": "true",
		description: "",
		id: "spx-slider-15",
		index: 15,
		name: "navigation",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "navigation-backdrop-filter",
		"default": "var(--spx-backdrop-filter)",
		description: "",
		id: "spx-slider-16",
		index: 16,
		name: "navigationBackdropFilter",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-backdrop-filter"
	},
	{
		attribute: "navigation-background",
		"default": "rgba(0,0,0,0.7)",
		description: "",
		id: "spx-slider-17",
		index: 17,
		name: "navigationBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-background"
	},
	{
		attribute: "navigation-background-hover",
		"default": "rgba(0,0,0,1)",
		description: "",
		id: "spx-slider-18",
		index: 18,
		name: "navigationBackgroundHover",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-background-hover"
	},
	{
		attribute: "navigation-border-radius",
		"default": "var(--spx-border-radius)",
		description: "",
		id: "spx-slider-19",
		index: 19,
		name: "navigationBorderRadius",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-border-radius"
	},
	{
		attribute: "navigation-color",
		"default": "#ffffff",
		description: "",
		id: "spx-slider-20",
		index: 20,
		name: "navigationColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-color"
	},
	{
		attribute: "navigation-distance-x",
		"default": "12px",
		description: "Navigation distance.",
		id: "spx-slider-21",
		index: 21,
		name: "navigationDistanceX",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-distance-x"
	},
	{
		attribute: "navigation-icon-next",
		"default": "arrow-forward",
		description: "Navigation icon type.",
		id: "spx-slider-22",
		index: 22,
		name: "navigationIconNext",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "navigation-icon-prev",
		"default": "arrow-back",
		description: "Navigation icon type.",
		id: "spx-slider-23",
		index: 23,
		name: "navigationIconPrev",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "navigation-icon-type",
		"default": "ionicons",
		description: "Navigation icon type.",
		id: "spx-slider-24",
		index: 24,
		name: "navigationIconType",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "navigation-padding",
		"default": "12px",
		description: "",
		id: "spx-slider-25",
		index: 25,
		name: "navigationPadding",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-padding"
	},
	{
		attribute: "navigation-size",
		"default": "20px",
		description: "Navigation size.",
		id: "spx-slider-26",
		index: 26,
		name: "navigationSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-navigation-size"
	},
	{
		attribute: "pagination",
		"default": "bullets",
		description: "Pagination type.",
		id: "spx-slider-27",
		index: 27,
		name: "pagination",
		tags: [
			{
				text: "bullets, none",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "pagination-backdrop-filter",
		"default": "var(--spx-backdrop-filter)",
		description: "",
		id: "spx-slider-28",
		index: 28,
		name: "paginationBackdropFilter",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-backdrop-filter"
	},
	{
		attribute: "pagination-background",
		"default": "rgba(0,0,0,0.7)",
		description: "",
		id: "spx-slider-29",
		index: 29,
		name: "paginationBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-background"
	},
	{
		attribute: "pagination-bullets-background",
		"default": "var(--spx-color-gray-500)",
		description: "",
		id: "spx-slider-30",
		index: 30,
		name: "paginationBulletsBackground",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-bullets-background"
	},
	{
		attribute: "pagination-bullets-background-active",
		"default": "#ffffff",
		description: "",
		id: "spx-slider-31",
		index: 31,
		name: "paginationBulletsBackgroundActive",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-bullets-background-active"
	},
	{
		attribute: "pagination-bullets-clickable",
		description: "Make bullets clickable.",
		id: "spx-slider-32",
		index: 32,
		name: "paginationBulletsClickable",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "pagination-bullets-dynamic",
		"default": "false",
		description: "Will only keep a selected amount of bullets visible.",
		id: "spx-slider-33",
		index: 33,
		name: "paginationBulletsDynamic",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "pagination-bullets-dynamic-amount",
		"default": "5",
		description: "Amount of dynamic bullets.",
		id: "spx-slider-34",
		index: 34,
		name: "paginationBulletsDynamicAmount",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "pagination-bullets-gap",
		"default": "6px",
		description: "Space between the bullets.",
		id: "spx-slider-35",
		index: 35,
		name: "paginationBulletsGap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-bullets-gap"
	},
	{
		attribute: "pagination-bullets-size",
		"default": "6px",
		description: "Size of the bullets.",
		id: "spx-slider-36",
		index: 36,
		name: "paginationBulletsSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-pagination-bullets-size"
	},
	{
		attribute: "prev-next-filter",
		description: "Filter property for the previous and next elements.",
		id: "spx-slider-37",
		index: 37,
		name: "prevNextFilter",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slider-prev-next-filter"
	},
	{
		attribute: "slide-message-first",
		"default": "This is the first slide",
		description: "Screen reader message for first slide.",
		id: "spx-slider-38",
		index: 38,
		name: "slideMessageFirst",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "slide-message-last",
		"default": "This is the last slide",
		description: "Screen reader message for last slide.",
		id: "spx-slider-39",
		index: 39,
		name: "slideMessageLast",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "slide-message-next",
		"default": "Next slide",
		description: "Screen reader message for next slide.",
		id: "spx-slider-40",
		index: 40,
		name: "slideMessageNext",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "slide-message-previous",
		"default": "Previous slide",
		description: "Screen reader message for previous slide.",
		id: "spx-slider-41",
		index: 41,
		name: "slideMessagePrevious",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "slides-per-view",
		"default": "1",
		description: "Amount of slides shown at once.",
		id: "spx-slider-42",
		index: 42,
		name: "slidesPerView",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "speed",
		"default": "1000",
		description: "Sliding speed.",
		id: "spx-slider-43",
		index: 43,
		name: "speed",
		tags: [
		],
		type: "number"
	},
	{
		attribute: "start",
		description: "At which slide component should start.",
		id: "spx-slider-44",
		index: 44,
		name: "start",
		tags: [
		],
		type: "number"
	}
];
const events$4 = [
	{
		name: "spxSliderDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$4 = [
];
const slots$4 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxSlider = {
	name: name$4,
	description: description$4,
	properties: properties$4,
	events: events$4,
	methods: methods$4,
	slots: slots$4
};

const slider = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$4,
  description: description$4,
  properties: properties$4,
  events: events$4,
  methods: methods$4,
  slots: slots$4,
  'default': spxSlider
});

const name$3 = "spx-slideshow";
const description$3 = "Continuously playing slideshow.";
const properties$3 = [
	{
		attribute: "duration",
		"default": "60s",
		description: "Duration of slideshow to complete one cycle.",
		id: "spx-slideshow-0",
		index: 0,
		name: "duration",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-duration"
	},
	{
		attribute: "gap",
		"default": "1em",
		description: "Gap between inner elements.",
		id: "spx-slideshow-1",
		index: 1,
		name: "gap",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-gap"
	},
	{
		attribute: "height",
		description: "",
		id: "spx-slideshow-2",
		index: 2,
		name: "height",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-height"
	},
	{
		attribute: "image-size",
		description: "WordPress media size when using the helper function.",
		id: "spx-slideshow-3",
		index: 3,
		name: "imageSize",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "image-src",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-slideshow-4",
		index: 4,
		name: "imageSrc",
		tags: [
			{
				text: "acf, mb",
				name: "choice"
			}
		],
		type: "string"
	},
	{
		attribute: "images",
		description: "Gets images from an ACF or Metabox field.",
		id: "spx-slideshow-5",
		index: 5,
		name: "images",
		tags: [
			{
				text: "&lt;?php spxGetImages( $fieldName, $type, $postId ); ?>",
				name: "helper"
			},
			{
				text: "spxGetImages",
				name: "function"
			}
		],
		type: "string"
	},
	{
		attribute: "lazy",
		description: "Lazy load images.",
		id: "spx-slideshow-6",
		index: 6,
		name: "lazy",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "max-width",
		"default": "300px",
		description: "Max width of inner elements.",
		id: "spx-slideshow-7",
		index: 7,
		name: "maxWidth",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-max-width"
	},
	{
		attribute: "object-fit",
		"default": "contain",
		description: "",
		id: "spx-slideshow-8",
		index: 8,
		name: "objectFit",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-object-fit"
	},
	{
		attribute: "overflow",
		description: "If not set with this attribute, overflow should be set on the parent element.",
		id: "spx-slideshow-9",
		index: 9,
		name: "overflow",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-slideshow-overflow"
	}
];
const events$3 = [
	{
		name: "spxSlideshowDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$3 = [
];
const slots$3 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxSlideshow = {
	name: name$3,
	description: description$3,
	properties: properties$3,
	events: events$3,
	methods: methods$3,
	slots: slots$3
};

const slideshow = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$3,
  description: description$3,
  properties: properties$3,
  events: events$3,
  methods: methods$3,
  slots: slots$3,
  'default': spxSlideshow
});

const name$2 = "spx-tailwind";
const description$2 = "Generate Tailwind classes for inner elements.";
const properties$2 = [
];
const events$2 = [
	{
		name: "spxTailwindDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$2 = [
];
const slots$2 = [
];
const spxTailwind = {
	name: name$2,
	description: description$2,
	properties: properties$2,
	events: events$2,
	methods: methods$2,
	slots: slots$2
};

const tailwind = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$2,
  description: description$2,
  properties: properties$2,
  events: events$2,
  methods: methods$2,
  slots: slots$2,
  'default': spxTailwind
});

const name$1 = "spx-text-path";
const description$1 = "Write text along a predefined path.";
const properties$1 = [
	{
		attribute: "gap",
		"default": "-2%",
		description: "Space between text and path.",
		id: "spx-text-path-0",
		index: 0,
		name: "gap",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "src",
		description: "Image src.",
		id: "spx-text-path-1",
		index: 1,
		name: "src",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "start-offset",
		"default": "25%",
		description: "Starting offset off the text.",
		id: "spx-text-path-2",
		index: 2,
		name: "startOffset",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "text",
		description: "Text to be shown.",
		id: "spx-text-path-3",
		index: 3,
		name: "text",
		tags: [
		],
		type: "string"
	},
	{
		attribute: "text-color",
		"default": "#000000",
		description: "",
		id: "spx-text-path-4",
		index: 4,
		name: "textColor",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-text-path-text-color"
	},
	{
		attribute: "text-font-size",
		"default": "clamp(20px, 3vw, 24px)",
		description: "Text size.",
		id: "spx-text-path-5",
		index: 5,
		name: "textFontSize",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-text-path-text-font-size"
	},
	{
		attribute: "text-font-weight",
		description: "",
		id: "spx-text-path-6",
		index: 6,
		name: "textFontWeight",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-text-path-text-font-weight"
	},
	{
		attribute: "text-transform",
		"default": "default",
		description: "Text transform.",
		id: "spx-text-path-7",
		index: 7,
		name: "textTransform",
		tags: [
			{
				name: "css"
			}
		],
		type: "string",
		variable: "--spx-text-path-text-transform"
	}
];
const events$1 = [
	{
		name: "spxTextPathDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods$1 = [
];
const slots$1 = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxTextPath = {
	name: name$1,
	description: description$1,
	properties: properties$1,
	events: events$1,
	methods: methods$1,
	slots: slots$1
};

const textPath = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name$1,
  description: description$1,
  properties: properties$1,
  events: events$1,
  methods: methods$1,
  slots: slots$1,
  'default': spxTextPath
});

const name = "spx-typewriter";
const description = "Animates text like it is being written on a typewriter.";
const properties = [
	{
		attribute: "auto-start",
		"default": "true",
		description: "Automatically starts writing.",
		id: "spx-typewriter-0",
		index: 0,
		name: "autoStart",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "delay",
		"default": "natural",
		description: "Writing delay in ms. Also accepts 'natural' value.",
		id: "spx-typewriter-1",
		index: 1,
		name: "delay",
		tags: [
		],
		type: "any"
	},
	{
		attribute: "delete-speed",
		"default": "natural",
		description: "Delete delay in ms. Also accepts 'natural' value.",
		id: "spx-typewriter-2",
		index: 2,
		name: "deleteSpeed",
		tags: [
		],
		type: "any"
	},
	{
		attribute: "delimiter",
		description: "Delimiter to use if multiple sentences are going ot be used.",
		id: "spx-typewriter-3",
		index: 3,
		name: "delimiter",
		tags: [
		],
		type: "any"
	},
	{
		attribute: "loop",
		description: "Loops the animation.",
		id: "spx-typewriter-4",
		index: 4,
		name: "loop",
		tags: [
		],
		type: "boolean"
	},
	{
		attribute: "text",
		"default": "\"I'm a typewriter\"",
		description: "Text that should be written.",
		id: "spx-typewriter-5",
		index: 5,
		name: "text",
		tags: [
		],
		type: "string"
	}
];
const events = [
	{
		name: "spxTypewriterDidLoad",
		description: "Fires after component has loaded."
	}
];
const methods = [
	{
		name: "play",
		description: "Start animation.",
		signature: "play() => Promise<void>"
	},
	{
		name: "stop",
		description: "Stop animation.",
		signature: "stop() => Promise<void>"
	}
];
const slots = [
	{
		name: "inner",
		description: "Slot (between HTML tag)."
	}
];
const spxTypewriter = {
	name: name,
	description: description,
	properties: properties,
	events: events,
	methods: methods,
	slots: slots
};

const typewriter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  name: name,
  description: description,
  properties: properties,
  events: events,
  methods: methods,
  slots: slots,
  'default': spxTypewriter
});

const components = [
  accordion,
  animate,
  classToggle,
  code,
  editButton,
  group,
  icon,
  iframe,
  imageComparison,
  lightbox,
  masonry,
  mockup,
  navigation,
  notation,
  offset,
  scrollspy,
  share,
  slider,
  slideshow,
  tailwind,
  textPath,
  typewriter,
];

const spxEditorComponentsCss = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}body{font-family:system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"}hr{height:0;color:inherit;}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}:host{--spx-editor-header-height:40px;--spx-editor-text:var(--spx-color-gray-700);--spx-editor-text-active:var(--spx-color-gray-900)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;font-family:inter, sans-serif;appearance:none;-webkit-appearance:none}button{background:none;border:none;line-height:1.5;cursor:pointer}:host{display:block}:host:focus,*:focus{outline:none}.search{border-right:1px solid var(--spx-color-gray-200);border-bottom:1px solid var(--spx-color-gray-200);display:flex;align-items:center;position:relative;height:var(--spx-editor-header-height)}.search spx-icon{position:absolute;top:50%;transform:translateY(-50%);left:0.5em}.search input{transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function);padding-left:1.75rem;border:none;height:100%;width:100%;font-size:0.875rem}.search input:focus{outline:none}.search input:focus-visible{outline:none;box-shadow:var(--spx-focus)}.list{height:calc(var(--vh) - var(--spx-offset) - var(--spx-editor-header-height));display:grid;grid-auto-rows:max-content;border-right:1px solid var(--spx-color-gray-200);overflow-y:auto}.list>*+*{border-top:1px dashed var(--spx-color-gray-200)}.button{position:relative}.button.is-active{box-shadow:inset 4px 0 0 0 var(--spx-color-gray-300);font-weight:600;pointer-events:none}.button button{position:relative;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}.button button:focus{outline:none}.button button:focus-visible{outline:none;box-shadow:var(--spx-focus)}.button>button{margin-top:0;width:100%;padding:0.75rem 0.75rem 0.75rem 1.75rem;font-size:0.875rem;font-weight:400;color:var(--spx-editor-text)}.button>button:hover{color:var(--spx-color-gray-700);background:var(--spx-color-gray-100)}.button>button.is-active{font-weight:500;color:var(--spx-editor-text-active)}.button div{display:none}.button div.is-active{display:grid}.button div button{pointer-events:auto;padding:0.5rem 0.5rem 0.5rem 1.75rem;font-size:0.875rem;color:var(--spx-editor-text);width:calc(100% - 4px);margin-left:4px;font-weight:400;transition-property:box-shadow;transition-duration:var(--spx-transition-duration);transition-timing-function:var(--spx-transition-timing-function)}.button div button:focus{outline:none}.button div button:focus-visible{outline:none;box-shadow:var(--spx-focus)}.button div button:hover{color:var(--spx-color-gray-700);background:var(--spx-color-gray-100)}.button div button .text{margin-left:-4px}.button div button.is-active{color:var(--spx-editor-text-active);font-weight:500;pointer-events:none}.button div button.is-active .side{position:absolute;left:-4px;top:0;height:100%;width:4px;background:var(--spx-editor-text-active)}";

const SpxEditorComponents = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setActive = (component, template = '') => {
      if (template) {
        state.activeTemplate = template;
      }
      else {
        state.activeComponent = component;
        state.activeTemplate =
          this.currentData[state.activeComponent].examples[0];
      }
      if (window.innerWidth <= 1024) {
        state.showComponents = false;
      }
    };
    this.onSearch = (e) => {
      if (e.target.value === '') {
        this.currentData = state.components;
      }
      else {
        this.currentData = filter(state.components, function (o) {
          return o.name.includes(e.target.value);
        });
      }
    };
  }
  connectedCallback() {
    const data = {};
    components.forEach((item) => {
      const examples = {
        examples: [],
      };
      const properties = {
        properties: {},
      };
      item.properties.forEach((item) => {
        properties.properties[item.attribute] = item;
      });
      [].slice
        .call(document.querySelector('spx-editor').children)
        .forEach((itemInner) => {
        if (itemInner.getAttribute('data-spx-element') === item.name) {
          examples['examples'].push(itemInner.getAttribute('data-spx-name'));
        }
      });
      data[item['name']] = Object.assign(Object.assign(Object.assign({}, item), properties), examples);
    });
    state.components = data;
    this.currentData = data;
  }
  render() {
    return (h(Host, null, h("div", { tabindex: "-1", style: { outline: 'none' }, class: "search" }, h("spx-icon", { icon: "search-outline" }), h(TextInput, { placeholder: "Search components", onInput: this.onSearch })), h("div", { tabindex: "-1", style: {
        height: `calc(${state.height} - var(--spx-editor-header-height) ${state.showComponents ? ' - var(--spx-editor-header-height)' : ''}`,
        outline: 'none',
      }, class: "list" }, Object.values(this.currentData).map((object) => {
      const isActive = state.activeComponent === object.name;
      return (h("div", { tabindex: "-1", style: { outline: 'none' }, class: `button ${isActive ? 'is-active' : ''}` }, h(Button, { name: object.name, tabindex: isActive ? '-1' : '0', class: `${isActive ? 'is-active' : ''}`,
        /* eslint-disable-next-line react/jsx-no-bind */
        onClick: () => this.setActive(object.name) }, titleCase(object.name.replace('spx-', '').replaceAll('-', ' '))), object.examples.length >= 2 && (h("div", { class: isActive ? 'is-active' : '' }, Object.values(object.examples).map((item) => {
        const isActiveName = state.activeTemplate === item;
        return (h(Button, { class: isActiveName ? 'is-active' : '',
          /* eslint-disable-next-line react/jsx-no-bind */
          onClick: () => this.setActive(object.name, item) }, isActiveName && h("span", { class: "side" }), h("span", { class: "text" }, item.replaceAll('-', ' '))));
      })))));
    }))));
  }
  get el() { return getElement(this); }
};
SpxEditorComponents.style = spxEditorComponentsCss;

export { SpxEditorComponents as spx_editor_components };
