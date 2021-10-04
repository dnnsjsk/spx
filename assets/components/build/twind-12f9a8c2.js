import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-8fe71198.js';

var i=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function r(r){return i.get(r)}function a(i){var r=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(i);return r?r[1]?1:r[2]?2:r[3]?3:5:0}function t(i,r){var a=/^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(i);return a?a[1]?/^sti/i.test(r)?1:0:a[2]?/^pat/i.test(r)?1:0:a[3]?/^image-/i.test(r)?1:0:a[4]?"-"===r[3]?2:0:/^(?:inline-)?grid$/i.test(r)?4:0:0}

// src/internal/util.ts
var includes$1 = (value, search) => !!~value.indexOf(search);
var join$1 = (parts, separator = "-") => parts.join(separator);
var joinTruthy = (parts, separator) => join$1(parts.filter(Boolean), separator);
var tail = (array, startIndex = 1) => array.slice(startIndex);
var identity = (value) => value;
var noop = () => {
};
var capitalize = (value) => value[0].toUpperCase() + tail(value);
var hyphenate$1 = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk$1 = (value, context) => {
  while (typeof value == "function") {
    value = value(context);
  }
  return value;
};
var ensureMaxSize = (map, max) => {
  if (map.size > max) {
    map.delete(map.keys().next().value);
  }
};
var isCSSProperty$1 = (key, value) => !includes$1("@:&", key[0]) && (includes$1("rg", (typeof value)[5]) || Array.isArray(value));
var merge$1 = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
  const value = evalThunk$1(source[key], context);
  if (isCSSProperty$1(key, value)) {
    target2[hyphenate$1(key)] = value;
  } else {
    target2[key] = key[0] == "@" && includes$1("figa", key[1]) ? (target2[key] || []).concat(value) : merge$1(target2[key] || {}, value, context);
  }
  return target2;
}, target) : target;
var escape$1 = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
var buildMediaQuery$1 = (screen) => {
  if (!Array.isArray(screen)) {
    screen = [screen];
  }
  return "@media " + join$1(screen.map((screen2) => {
    if (typeof screen2 == "string") {
      screen2 = {min: screen2};
    }
    return screen2.raw || join$1(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
  }), ",");
};
var cyrb32 = (value) => {
  for (var h = 9, index = value.length; index--; ) {
    h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
  }
  return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
};
var sortedInsertionIndex = (array, element) => {
  for (var low = 0, high = array.length; low < high; ) {
    const pivot = high + low >> 1;
    if (array[pivot] <= element) {
      low = pivot + 1;
    } else {
      high = pivot;
    }
  }
  return high;
};

// src/twind/parse.ts
var groupings;
var rules;
var startGrouping = (value = "") => {
  groupings.push(value);
  return "";
};
var endGrouping = (isWhitespace) => {
  groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
};
var onlyPrefixes = (s) => s && !includes$1("!:", s[0]);
var onlyVariants = (s) => s[0] == ":";
var addRule = (directive2, negate) => {
  rules.push({
    v: groupings.filter(onlyVariants),
    d: directive2,
    n: negate,
    i: includes$1(groupings, "!"),
    $: ""
  });
};
var saveRule = (buffer) => {
  const negate = buffer[0] == "-";
  if (negate) {
    buffer = tail(buffer);
  }
  const prefix = join$1(groupings.filter(onlyPrefixes));
  addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
  return "";
};
var parseString = (token, isVariant) => {
  let buffer = "";
  for (let char, dynamic = false, position2 = 0; char = token[position2++]; ) {
    if (dynamic || char == "[") {
      buffer += char;
      dynamic = char != "]";
      continue;
    }
    switch (char) {
      case ":":
        buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
        break;
      case "(":
        buffer = buffer && startGrouping(buffer);
        startGrouping();
        break;
      case "!":
        startGrouping(char);
        break;
      case ")":
      case " ":
      case "	":
      case "\n":
      case "\r":
        buffer = buffer && saveRule(buffer);
        endGrouping(char !== ")");
        break;
      default:
        buffer += char;
    }
  }
  if (buffer) {
    if (isVariant) {
      startGrouping(":" + buffer);
    } else if (buffer.slice(-1) == "-") {
      startGrouping(buffer.slice(0, -1));
    } else {
      saveRule(buffer);
    }
  }
};
var parseGroupedToken = (token) => {
  startGrouping();
  parseToken(token);
  endGrouping();
};
var parseGroup = (key, token) => {
  if (token) {
    startGrouping();
    const isVariant = includes$1("tbu", (typeof token)[1]);
    parseString(key, isVariant);
    if (isVariant) {
      parseGroupedToken(token);
    }
    endGrouping();
  }
};
var parseToken = (token) => {
  switch (typeof token) {
    case "string":
      parseString(token);
      break;
    case "function":
      addRule(token);
      break;
    case "object":
      if (Array.isArray(token)) {
        token.forEach(parseGroupedToken);
      } else if (token) {
        Object.keys(token).forEach((key) => {
          parseGroup(key, token[key]);
        });
      }
  }
};
var staticsCaches = new WeakMap();
var buildStatics = (strings) => {
  let statics = staticsCaches.get(strings);
  if (!statics) {
    let slowModeIndex = NaN;
    let buffer = "";
    statics = strings.map((token, index) => {
      if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes$1(":-(", (strings[index + 1] || "")[0]))) {
        slowModeIndex = index;
      }
      if (index >= slowModeIndex) {
        return (interpolation) => {
          if (index == slowModeIndex) {
            buffer = "";
          }
          buffer += token;
          if (includes$1("rg", (typeof interpolation)[5])) {
            buffer += interpolation;
          } else if (interpolation) {
            parseString(buffer);
            buffer = "";
            parseToken(interpolation);
          }
          if (index == strings.length - 1) {
            parseString(buffer);
          }
        };
      }
      const staticRules = rules = [];
      parseString(token);
      const activeGroupings = [...groupings];
      rules = [];
      return (interpolation) => {
        rules.push(...staticRules);
        groupings = [...activeGroupings];
        if (interpolation) {
          parseToken(interpolation);
        }
      };
    });
    staticsCaches.set(strings, statics);
  }
  return statics;
};
var parse = (tokens) => {
  groupings = [];
  rules = [];
  if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
    buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
  } else {
    parseToken(tokens);
  }
  return rules;
};

// src/twind/directive.ts
var isFunctionFree;
var detectFunction = (key, value) => {
  if (typeof value == "function") {
    isFunctionFree = false;
  }
  return value;
};
var stringify = (data) => {
  isFunctionFree = true;
  const key = JSON.stringify(data, detectFunction);
  return isFunctionFree && key;
};
var cacheByFactory = new WeakMap();
var directive = (factory, data) => {
  const key = stringify(data);
  let directive2;
  if (key) {
    var cache = cacheByFactory.get(factory);
    if (!cache) {
      cacheByFactory.set(factory, cache = new Map());
    }
    directive2 = cache.get(key);
  }
  if (!directive2) {
    directive2 = Object.defineProperty((params, context) => {
      context = Array.isArray(params) ? context : params;
      return evalThunk$1(factory(data, context), context);
    }, "toJSON", {
      value: () => key || data
    });
    if (cache) {
      cache.set(key, directive2);
      ensureMaxSize(cache, 1e4);
    }
  }
  return directive2;
};

// src/twind/apply.ts
var applyFactory = (tokens, {css}) => css(parse(tokens));
var apply = (...tokens) => directive(applyFactory, tokens);

// src/twind/helpers.ts
var positions = (resolve) => (value, position2, prefix, suffix) => {
  if (value) {
    const properties = position2 && resolve(position2);
    if (properties && properties.length > 0) {
      return properties.reduce((declarations, property2) => {
        declarations[joinTruthy([prefix, property2, suffix])] = value;
        return declarations;
      }, {});
    }
  }
};
var corners = /* @__PURE__ */ positions((key) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[key]);
var expandEdges = (key) => {
  const parts = ({x: "lr", y: "tb"}[key] || key || "").split("").sort();
  for (let index = parts.length; index--; ) {
    if (!(parts[index] = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left"
    }[parts[index]]))
      return;
  }
  if (parts.length)
    return parts;
};
var edges = /* @__PURE__ */ positions(expandEdges);

// src/twind/plugins.ts
var _;
var __;
var $;
var toColumnsOrRows = (x) => x == "cols" ? "columns" : "rows";
var property = (property2) => (params, context, id) => ({
  [property2]: id + ((_ = join$1(params)) && "-" + _)
});
var propertyValue = (property2, separator) => (params, context, id) => (_ = join$1(params, separator)) && {
  [property2 || id]: _
};
var themeProperty = (section) => (params, {theme: theme2}, id) => (_ = theme2(section || id, params)) && {
  [section || id]: _
};
var themePropertyFallback = (section, separator) => (params, {theme: theme2}, id) => (_ = theme2(section || id, params, join$1(params, separator))) && {
  [section || id]: _
};
var alias = (handler, name) => (params, context) => handler(params, context, name);
var display = property("display");
var position = property("position");
var textTransform = property("textTransform");
var textDecoration = property("textDecoration");
var fontStyle = property("fontStyle");
var fontVariantNumeric = (key) => (params, context, id) => ({
  ["--tw-" + key]: id,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
});
var inset = (params, {theme: theme2}, id) => (_ = theme2("inset", params)) && {[id]: _};
var opacityProperty = (params, theme2, id, section = id) => (_ = theme2(section + "Opacity", tail(params))) && {
  [`--tw-${id}-opacity`]: _
};
var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
var asRGBA = (color, opacityProperty2, opacityDefault) => {
  if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($ = [17, 1, 0.062272][_ - 1])) {
    return `rgba(${parseColorComponent(color.substr(1, _), $)},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
  }
  return color;
};
var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
  [`--tw-${kind}-opacity`]: "1",
  [property2]: [color, _]
} : {[property2]: color} : void 0;
var transparentTo = (color) => ($ = asRGBA(color, "", "0")) == _ ? "transparent" : $;
var reversableEdge = (params, {theme: theme2}, id, section, prefix, suffix) => (_ = {x: ["right", "left"], y: ["bottom", "top"]}[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
  [$]: "1"
} : {
  [$]: "0",
  [joinTruthy([prefix, _[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
  [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
} : void 0;
var placeHelper = (property2, params) => params[0] && {
  [property2]: (includes$1("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
};
var contentPluginFor = (property2) => (params) => includes$1(["start", "end"], params[0]) ? {[property2]: "flex-" + params[0]} : placeHelper(property2, params);
var gridPlugin = (kind) => (params, {theme: theme2}) => {
  if (_ = theme2("grid" + capitalize(kind), params, "")) {
    return {["grid-" + kind]: _};
  }
  switch (params[0]) {
    case "span":
      return params[1] && {
        ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
      };
    case "start":
    case "end":
      return (_ = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join$1(tail(params)))) && {
        [`grid-${kind}-${params[0]}`]: _
      };
  }
};
var border = (params, {theme: theme2}, id) => {
  switch (params[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return propertyValue("borderStyle")(params);
    case "collapse":
    case "separate":
      return propertyValue("borderCollapse")(params);
    case "opacity":
      return opacityProperty(params, theme2, id);
  }
  return (_ = theme2(id + "Width", params, "")) ? {borderWidth: _} : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
};
var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
var transformXYFunction = (params, context, id) => params[0] && (_ = context.theme(id, params[1] || params[0])) && {
  [`--tw-${id}-x`]: params[0] !== "y" && _,
  [`--tw-${id}-y`]: params[0] !== "x" && _,
  transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
};
var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
var padding = edgesPluginFor("padding");
var margin = edgesPluginFor("margin");
var minMax = (params, {theme: theme2}, id) => (_ = {w: "width", h: "height"}[params[0]]) && {
  [_ = `${id}${capitalize(_)}`]: theme2(_, tail(params))
};
var filter = (params, {theme: theme2}, id) => {
  const parts = id.split("-");
  const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
  if (!prefix) {
    params.unshift(...parts);
  }
  if (params[0] == "filter") {
    const filters = [
      "blur",
      "brightness",
      "contrast",
      "grayscale",
      "hue-rotate",
      "invert",
      prefix && "opacity",
      "saturate",
      "sepia",
      !prefix && "drop-shadow"
    ].filter(Boolean);
    return params[1] == "none" ? {[prefix + "filter"]: "none"} : filters.reduce((css, key) => {
      css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
      return css;
    }, {
      [prefix + "filter"]: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
    });
  }
  $ = params.shift();
  if (includes$1(["hue", "drop"], $))
    $ += capitalize(params.shift());
  return (_ = theme2(prefix ? "backdrop" + capitalize($) : $, params)) && {
    ["--tw-" + prefix + $]: (Array.isArray(_) ? _ : [_]).map((_4) => `${hyphenate$1($)}(${_4})`).join(" ")
  };
};
var corePlugins = {
  group: (params, {tag}, id) => tag(join$1([id, ...params])),
  hidden: alias(display, "none"),
  inline: display,
  block: display,
  contents: display,
  flow: display,
  table: (params, context, id) => includes$1(["auto", "fixed"], params[0]) ? {tableLayout: params[0]} : display(params, context, id),
  flex(params, context, id) {
    switch (params[0]) {
      case "row":
      case "col":
        return {
          flexDirection: join$1(params[0] == "col" ? ["column", ...tail(params)] : params)
        };
      case "nowrap":
      case "wrap":
        return {flexWrap: join$1(params)};
      case "grow":
      case "shrink":
        _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
        return _ != null && {
          ["flex-" + params[0]]: "" + _
        };
    }
    return (_ = context.theme("flex", params, "")) ? {flex: _} : display(params, context, id);
  },
  grid(params, context, id) {
    switch (params[0]) {
      case "cols":
      case "rows":
        return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join$1(tail(params)))) && {
          ["gridTemplate-" + toColumnsOrRows(params[0])]: _
        };
      case "flow":
        return params.length > 1 && {
          gridAutoFlow: join$1(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
        };
    }
    return display(params, context, id);
  },
  auto: (params, {theme: theme2}) => includes$1(["cols", "rows"], params[0]) && (_ = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join$1(tail(params)))) && {
    ["gridAuto-" + toColumnsOrRows(params[0])]: _
  },
  static: position,
  fixed: position,
  absolute: position,
  relative: position,
  sticky: position,
  visible: {visibility: "visible"},
  invisible: {visibility: "hidden"},
  antialiased: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "subpixel-antialiased": {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  },
  truncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  "sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  },
  "not-sr-only": {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  },
  resize: (params) => ({
    resize: {x: "horizontal", y: "vertical"}[params[0]] || params[0] || "both"
  }),
  box: (params) => params[0] && {boxSizing: params[0] + "-box"},
  appearance: propertyValue(),
  cursor: themePropertyFallback(),
  float: propertyValue(),
  clear: propertyValue(),
  decoration: propertyValue("boxDecorationBreak"),
  isolate: {isolation: "isolate"},
  isolation: propertyValue(),
  "mix-blend": propertyValue("mixBlendMode"),
  top: inset,
  right: inset,
  bottom: inset,
  left: inset,
  inset: (params, {theme: theme2}) => (_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
    top: _,
    right: _,
    bottom: _,
    left: _
  },
  underline: textDecoration,
  "line-through": textDecoration,
  "no-underline": alias(textDecoration, "none"),
  "text-underline": alias(textDecoration, "underline"),
  "text-no-underline": alias(textDecoration, "none"),
  "text-line-through": alias(textDecoration, "line-through"),
  uppercase: textTransform,
  lowercase: textTransform,
  capitalize: textTransform,
  "normal-case": alias(textTransform, "none"),
  "text-normal-case": alias(textTransform, "none"),
  italic: fontStyle,
  "not-italic": alias(fontStyle, "normal"),
  "font-italic": alias(fontStyle, "italic"),
  "font-not-italic": alias(fontStyle, "normal"),
  font: (params, context, id) => (_ = context.theme("fontFamily", params, "")) ? {fontFamily: _} : themeProperty("fontWeight")(params, context, id),
  items: (params) => params[0] && {
    alignItems: includes$1(["start", "end"], params[0]) ? "flex-" + params[0] : join$1(params)
  },
  "justify-self": propertyValue(),
  "justify-items": propertyValue(),
  justify: contentPluginFor("justifyContent"),
  content: contentPluginFor("alignContent"),
  self: contentPluginFor("alignSelf"),
  place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
  overscroll: (params) => params[0] && {
    ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
  },
  col: gridPlugin("column"),
  row: gridPlugin("row"),
  duration: themeProperty("transitionDuration"),
  delay: themeProperty("transitionDelay"),
  tracking: themeProperty("letterSpacing"),
  leading: themeProperty("lineHeight"),
  z: themeProperty("zIndex"),
  opacity: themeProperty(),
  ease: themeProperty("transitionTimingFunction"),
  p: padding,
  py: padding,
  px: padding,
  pt: padding,
  pr: padding,
  pb: padding,
  pl: padding,
  m: margin,
  my: margin,
  mx: margin,
  mt: margin,
  mr: margin,
  mb: margin,
  ml: margin,
  w: themeProperty("width"),
  h: themeProperty("height"),
  min: minMax,
  max: minMax,
  fill: themeProperty(),
  order: themeProperty(),
  origin: themePropertyFallback("transformOrigin", " "),
  select: propertyValue("userSelect"),
  "pointer-events": propertyValue(),
  align: propertyValue("verticalAlign"),
  whitespace: propertyValue("whiteSpace"),
  "normal-nums": {fontVariantNumeric: "normal"},
  ordinal: fontVariantNumeric("ordinal"),
  "slashed-zero": fontVariantNumeric("slashed-zero"),
  "lining-nums": fontVariantNumeric("numeric-figure"),
  "oldstyle-nums": fontVariantNumeric("numeric-figure"),
  "proportional-nums": fontVariantNumeric("numeric-spacing"),
  "tabular-nums": fontVariantNumeric("numeric-spacing"),
  "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
  "stacked-fractions": fontVariantNumeric("numeric-fraction"),
  overflow: (params, context, id) => includes$1(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? {["overflow-" + params[0]]: params[1]} : propertyValue()(params, context, id),
  transform: (params) => params[0] == "none" ? {transform: "none"} : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: transform(params[0] == "gpu")
  },
  rotate: (params, {theme: theme2}) => (_ = theme2("rotate", params)) && {
    "--tw-rotate": _,
    transform: [`rotate(${_})`, transform()]
  },
  scale: transformXYFunction,
  translate: transformXYFunction,
  skew: transformXYFunction,
  gap: (params, context, id) => (_ = {x: "column", y: "row"}[params[0]]) ? {[_ + "Gap"]: context.theme("gap", tail(params))} : themeProperty("gap")(params, context, id),
  stroke: (params, context, id) => (_ = context.theme("stroke", params, "")) ? {stroke: _} : themeProperty("strokeWidth")(params, context, id),
  outline: (params, {theme: theme2}) => (_ = theme2("outline", params)) && {
    outline: _[0],
    outlineOffset: _[1]
  },
  "break-normal": {
    wordBreak: "normal",
    overflowWrap: "normal"
  },
  "break-words": {overflowWrap: "break-word"},
  "break-all": {wordBreak: "break-all"},
  text(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return {textAlign: params[0]};
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return textTransform([], _, params[0]);
      case "opacity":
        return opacityProperty(params, theme2, id);
    }
    const fontSize = theme2("fontSize", params, "");
    if (fontSize) {
      return typeof fontSize == "string" ? {fontSize} : {
        fontSize: fontSize[0],
        ...typeof fontSize[1] == "string" ? {lineHeight: fontSize[1]} : fontSize[1]
      };
    }
    return withOpacityFallback("color", "text", theme2("textColor", params));
  },
  bg(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return propertyValue("backgroundAttachment", ",")(params);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return propertyValue("backgroundPosition", " ")(params);
      case "no":
        return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
      case "repeat":
        return includes$1("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : {backgroundRepeat: params[1] || params[0]};
      case "opacity":
        return opacityProperty(params, theme2, id, "background");
      case "clip":
      case "origin":
        return params[1] && {
          ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
        };
      case "blend":
        return propertyValue("background-blend-mode")(tail(params));
      case "gradient":
        if (params[1] == "to" && (_ = expandEdges(params[2]))) {
          return {
            backgroundImage: `linear-gradient(to ${join$1(_, " ")},var(--tw-gradient-stops))`
          };
        }
    }
    return (_ = theme2("backgroundPosition", params, "")) ? {backgroundPosition: _} : (_ = theme2("backgroundSize", params, "")) ? {backgroundSize: _} : (_ = theme2("backgroundImage", params, "")) ? {backgroundImage: _} : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
  },
  from: (params, {theme: theme2}) => (_ = theme2("gradientColorStops", params)) && {
    "--tw-gradient-from": _,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
  },
  via: (params, {theme: theme2}) => (_ = theme2("gradientColorStops", params)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
  },
  to: (params, {theme: theme2}) => (_ = theme2("gradientColorStops", params)) && {
    "--tw-gradient-to": _
  },
  border: (params, context, id) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
  divide: (params, context, id) => (_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
    "&>:not([hidden])~:not([hidden])": _
  },
  space: (params, context, id) => (_ = reversableEdge(params, context, id, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": _
  },
  placeholder: (params, {theme: theme2}, id) => (_ = params[0] == "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
    "&::placeholder": _
  },
  shadow: (params, {theme: theme2}) => (_ = theme2("boxShadow", params)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
    boxShadow: [
      _,
      `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
    ]
  },
  animate: (params, {theme: theme2, tag}) => {
    if ($ = theme2("animation", params)) {
      const parts = $.split(" ");
      if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) {
        return ($ = tag(parts[0])) && {
          animation: $ + " " + join$1(tail(parts), " "),
          ["@keyframes " + $]: _
        };
      }
      return {animation: $};
    }
  },
  ring(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "inset":
        return {"--tw-ring-inset": "inset"};
      case "opacity":
        return opacityProperty(params, theme2, id);
      case "offset":
        return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
          "--tw-ring-offset-width": _
        } : {
          "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
        };
    }
    return (_ = theme2("ringWidth", params, "")) ? {
      "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
    };
  },
  object: (params, context, id) => includes$1(["contain", "cover", "fill", "none", "scale-down"], join$1(params)) ? {objectFit: join$1(params)} : themePropertyFallback("objectPosition", " ")(params, context, id),
  list: (params, context, id) => join$1(params) == "item" ? display(params, context, id) : includes$1(["inside", "outside"], join$1(params)) ? {listStylePosition: params[0]} : themePropertyFallback("listStyleType")(params, context, id),
  rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
  "transition-none": {transitionProperty: "none"},
  transition: (params, {theme: theme2}) => ({
    transitionProperty: theme2("transitionProperty", params),
    transitionTimingFunction: theme2("transitionTimingFunction", ""),
    transitionDuration: theme2("transitionDuration", "")
  }),
  container: (params, {theme: theme2}) => {
    const {screens = theme2("screens"), center, padding: padding2} = theme2("container");
    const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
      paddingRight: _,
      paddingLeft: _
    } : {};
    return Object.keys(screens).reduce((rules2, screen) => {
      if (($ = screens[screen]) && typeof $ == "string") {
        rules2[buildMediaQuery$1($)] = {
          "&": {
            "max-width": $,
            ...paddingFor(screen)
          }
        };
      }
      return rules2;
    }, {
      width: "100%",
      ...center ? {marginRight: "auto", marginLeft: "auto"} : {},
      ...paddingFor("xs")
    });
  },
  filter,
  blur: filter,
  brightness: filter,
  contrast: filter,
  grayscale: filter,
  "hue-rotate": filter,
  invert: filter,
  saturate: filter,
  sepia: filter,
  "drop-shadow": filter,
  backdrop: filter
};

// src/twind/preflight.ts
var createPreflight = (theme2) => ({
  ":root": {tabSize: 4},
  "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {margin: "0"},
  button: {backgroundColor: "transparent", backgroundImage: "none"},
  'button,[type="button"],[type="reset"],[type="submit"]': {WebkitAppearance: "button"},
  "button:focus": {outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]},
  "fieldset,ol,ul,legend": {padding: "0"},
  "ol,ul": {listStyle: "none"},
  html: {
    lineHeight: "1.5",
    WebkitTextSizeAdjust: "100%",
    fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
  },
  body: {fontFamily: "inherit", lineHeight: "inherit"},
  "*,::before,::after": {
    boxSizing: "border-box",
    border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
  },
  hr: {height: "0", color: "inherit", borderTopWidth: "1px"},
  img: {borderStyle: "solid"},
  textarea: {resize: "vertical"},
  "input::placeholder,textarea::placeholder": {
    opacity: "1",
    color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
  },
  'button,[role="button"]': {cursor: "pointer"},
  table: {textIndent: "0", borderColor: "inherit", borderCollapse: "collapse"},
  "h1,h2,h3,h4,h5,h6": {fontSize: "inherit", fontWeight: "inherit"},
  a: {color: "inherit", textDecoration: "inherit"},
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    margin: "0",
    padding: "0",
    lineHeight: "inherit",
    color: "inherit"
  },
  "button,select": {textTransform: "none"},
  "::-moz-focus-inner": {borderStyle: "none", padding: "0"},
  ":-moz-focusring": {outline: "1px dotted ButtonText"},
  ":-moz-ui-invalid": {boxShadow: "none"},
  progress: {verticalAlign: "baseline"},
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {height: "auto"},
  '[type="search"]': {WebkitAppearance: "textfield", outlineOffset: "-2px"},
  "::-webkit-search-decoration": {WebkitAppearance: "none"},
  "::-webkit-file-upload-button": {WebkitAppearance: "button", font: "inherit"},
  summary: {display: "list-item"},
  "abbr[title]": {textDecoration: "underline dotted"},
  "b,strong": {fontWeight: "bolder"},
  "pre,code,kbd,samp": {
    fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
    fontSize: "1em"
  },
  "sub,sup": {fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline"},
  sub: {bottom: "-0.25em"},
  sup: {top: "-0.5em"},
  "img,svg,video,canvas,audio,iframe,embed,object": {display: "block", verticalAlign: "middle"},
  "img,video": {maxWidth: "100%", height: "auto"}
});

// src/twind/variants.ts
var coreVariants = {
  dark: "@media (prefers-color-scheme:dark)",
  sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
  "motion-reduce": "@media (prefers-reduced-motion:reduce)",
  "motion-safe": "@media (prefers-reduced-motion:no-preference)",
  first: "&:first-child",
  last: "&:last-child",
  even: "&:nth-child(2n)",
  odd: "&:nth-child(odd)",
  children: "&>*",
  siblings: "&~*",
  sibling: "&+*",
  override: "&&"
};

// src/internal/dom.ts
var STYLE_ELEMENT_ID$1 = "__twind";
var getStyleElement$1 = (nonce) => {
  let element = self[STYLE_ELEMENT_ID$1];
  if (!element) {
    element = document.head.appendChild(document.createElement("style"));
    element.id = STYLE_ELEMENT_ID$1;
    nonce && (element.nonce = nonce);
    element.appendChild(document.createTextNode(""));
  }
  return element;
};

// src/twind/sheets.ts
var cssomSheet = ({
  nonce,
  target = getStyleElement$1(nonce).sheet
} = {}) => {
  const offset = target.cssRules.length;
  return {
    target,
    insert: (rule, index) => target.insertRule(rule, offset + index)
  };
};
var voidSheet = () => ({
  target: null,
  insert: noop
});

// src/twind/modes.ts
var mode = (report) => ({
  unknown(section, key = [], optional, context) {
    if (!optional) {
      this.report({id: "UNKNOWN_THEME_VALUE", key: section + "." + join$1(key)}, context);
    }
  },
  report({id, ...info}) {
    return report(`[${id}] ${JSON.stringify(info)}`);
  }
});
var warn = /* @__PURE__ */ mode((message) => console.warn(message));
var strict = /* @__PURE__ */ mode((message) => {
  throw new Error(message);
});
var silent = /* @__PURE__ */ mode(noop);
var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
var autoprefix = (property2, value, important) => {
  let cssText = "";
  const propertyAlias = r(property2);
  if (propertyAlias)
    cssText += `${noprefix(propertyAlias, value, important)};`;
  let flags = a(property2);
  if (flags & 1)
    cssText += `-webkit-${noprefix(property2, value, important)};`;
  if (flags & 2)
    cssText += `-moz-${noprefix(property2, value, important)};`;
  if (flags & 4)
    cssText += `-ms-${noprefix(property2, value, important)};`;
  flags = t(property2, value);
  if (flags & 1)
    cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
  if (flags & 2)
    cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
  if (flags & 4)
    cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
  cssText += noprefix(property2, value, important);
  return cssText;
};

// src/twind/theme.ts
var ratios = (start, end) => {
  const result = {};
  do {
    for (let dividend = 1; dividend < start; dividend++) {
      result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
    }
  } while (++start <= end);
  return result;
};
var exponential = (stop, unit, start = 0) => {
  const result = {};
  for (; start <= stop; start = start * 2 || 1) {
    result[start] = start + unit;
  }
  return result;
};
var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
  for (; start <= stop; start += step) {
    result[start] = start / divideBy + unit;
  }
  return result;
};
var alias2 = (section) => (theme2) => theme2(section);
var themeFactory = (args, {theme: theme2}) => theme2(...args);
var theme = (...args) => directive(themeFactory, args);
var defaultTheme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    yellow: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    green: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    }
  },
  spacing: {
    px: "1px",
    0: "0px",
    .../* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5),
    .../* @__PURE__ */ linear(12, "rem", 4, 5),
    14: "3.5rem",
    .../* @__PURE__ */ linear(64, "rem", 4, 16, 4),
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite"
  },
  backdropBlur: /* @__PURE__ */ alias2("blur"),
  backdropBrightness: /* @__PURE__ */ alias2("brightness"),
  backdropContrast: /* @__PURE__ */ alias2("contrast"),
  backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
  backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
  backdropInvert: /* @__PURE__ */ alias2("invert"),
  backdropOpacity: /* @__PURE__ */ alias2("opacity"),
  backdropSaturate: /* @__PURE__ */ alias2("saturate"),
  backdropSepia: /* @__PURE__ */ alias2("sepia"),
  backgroundColor: /* @__PURE__ */ alias2("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    0: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  brightness: {
    .../* @__PURE__ */ linear(200, "", 100, 0, 50),
    .../* @__PURE__ */ linear(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: (theme2) => ({
    ...theme2("colors"),
    DEFAULT: theme2("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ alias2("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "1/2": "50%",
    full: "9999px"
  },
  borderWidth: {
    DEFAULT: "1px",
    .../* @__PURE__ */ exponential(8, "px")
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none"
  },
  contrast: {
    .../* @__PURE__ */ linear(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  divideColor: /* @__PURE__ */ alias2("borderColor"),
  divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
  divideWidth: /* @__PURE__ */ alias2("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgba(0,0,0,0.05)",
    DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
    md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
    lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
    xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
    "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
    none: "0 0 #0000"
  },
  fill: {current: "currentColor"},
  grayscale: {
    0: "0",
    DEFAULT: "100%"
  },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  invert: {
    0: "0",
    DEFAULT: "100%"
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: ["0.75rem", "1rem"],
    sm: ["0.875rem", "1.25rem"],
    base: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "1.75rem"],
    "2xl": ["1.5rem", "2rem"],
    "3xl": ["1.875rem", "2.25rem"],
    "4xl": ["2.25rem", "2.5rem"],
    "5xl": ["3rem", "1"],
    "6xl": ["3.75rem", "1"],
    "7xl": ["4.5rem", "1"],
    "8xl": ["6rem", "1"],
    "9xl": ["8rem", "1"]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridAutoColumns: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridAutoRows: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridColumn: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gridRow: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gap: /* @__PURE__ */ alias2("spacing"),
  gradientColorStops: /* @__PURE__ */ alias2("colors"),
  height: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 4),
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    .../* @__PURE__ */ linear(10, "rem", 4, 3)
  },
  margin: (theme2) => ({
    auto: "auto",
    ...theme2("spacing")
  }),
  maxHeight: (theme2) => ({
    ...theme2("spacing"),
    full: "100%",
    screen: "100vh"
  }),
  maxWidth: (theme2, {breakpoints}) => ({
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    prose: "65ch",
    ...breakpoints(theme2("screens"))
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content"
  },
  opacity: {
    .../* @__PURE__ */ linear(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    .../* @__PURE__ */ linear(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ alias2("spacing"),
  placeholderColor: /* @__PURE__ */ alias2("colors"),
  placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
  ringColor: (theme2) => ({
    DEFAULT: theme2("colors.blue.500", "#3b82f6"),
    ...theme2("colors")
  }),
  ringOffsetColor: /* @__PURE__ */ alias2("colors"),
  ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
  ringOpacity: (theme2) => ({
    DEFAULT: "0.5",
    ...theme2("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ exponential(8, "px")
  },
  rotate: {
    .../* @__PURE__ */ exponential(2, "deg"),
    .../* @__PURE__ */ exponential(12, "deg", 3),
    .../* @__PURE__ */ exponential(180, "deg", 45)
  },
  saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
  scale: {
    .../* @__PURE__ */ linear(150, "", 100, 0, 50),
    .../* @__PURE__ */ linear(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ exponential(2, "deg"),
    .../* @__PURE__ */ exponential(12, "deg", 3)
  },
  space: /* @__PURE__ */ alias2("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ linear(2),
  textColor: /* @__PURE__ */ alias2("colors"),
  textOpacity: /* @__PURE__ */ alias2("opacity"),
  transitionDuration: (theme2) => ({
    DEFAULT: "150ms",
    ...theme2("durations")
  }),
  transitionDelay: /* @__PURE__ */ alias2("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    colors: "background-color,border-color,color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: (theme2) => ({
    ...theme2("spacing"),
    ...ratios(2, 4),
    full: "100%"
  }),
  width: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 6),
    ...ratios(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    .../* @__PURE__ */ linear(50, "", 1, 0, 10)
  }
};
var flattenColorPalette = (colors, target = {}, prefix = []) => {
  Object.keys(colors).forEach((property2) => {
    const value = colors[property2];
    if (property2 == "DEFAULT") {
      target[join$1(prefix)] = value;
      target[join$1(prefix, ".")] = value;
    }
    const key = [...prefix, property2];
    target[join$1(key)] = value;
    target[join$1(key, ".")] = value;
    if (value && typeof value == "object") {
      flattenColorPalette(value, target, key);
    }
  }, target);
  return target;
};
var resolveContext = {
  negative: () => ({}),
  breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
    target["screen-" + key] = screens[key];
    return target;
  }, {})
};
var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes$1(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes$1(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
var makeThemeResolver = (config) => {
  const cache = new Map();
  const theme2 = {...defaultTheme, ...config};
  const deref = (theme3, section) => {
    const base = theme3 && theme3[section];
    const value = typeof base == "function" ? base(resolve, resolveContext) : base;
    return value && section == "colors" ? flattenColorPalette(value) : value;
  };
  const resolve = (section, key, defaultValue) => {
    const keypath = section.split(".");
    section = keypath[0];
    if (keypath.length > 1) {
      defaultValue = key;
      key = join$1(tail(keypath), ".");
    }
    let base = cache.get(section);
    if (!base) {
      cache.set(section, base = {...deref(theme2, section)});
      Object.assign(base, deref(theme2.extend, section));
    }
    if (key != null) {
      key = (Array.isArray(key) ? join$1(key) : key) || "DEFAULT";
      const value = handleArbitraryValues(section, key) || base[key];
      return value == null ? defaultValue : Array.isArray(value) && !includes$1(["fontSize", "outline", "dropShadow"], section) ? join$1(value, ",") : value;
    }
    return base;
  };
  return resolve;
};

// src/twind/translate.ts
var translate$1 = (plugins, context) => (rule, isTranslating) => {
  if (typeof rule.d == "function") {
    return rule.d(context);
  }
  const parameters = rule.d.split(/-(?![^[]*])/g);
  if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
    return rule.$;
  }
  for (let index = parameters.length; index; index--) {
    const id = join$1(parameters.slice(0, index));
    const plugin = plugins[id];
    if (plugin) {
      return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
    }
  }
};

// src/twind/decorate.ts
var _2;
var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
var NOT_PREFIX_RE = /^(:not)-(.+)/;
var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
var decorate$1 = (darkMode, variants, {theme: theme2, tag}) => {
  const applyVariant = (translation, variant) => {
    if (_2 = theme2("screens", tail(variant), "")) {
      return {[buildMediaQuery$1(_2)]: translation};
    }
    if (variant == ":dark" && darkMode == "class") {
      return {".dark &": translation};
    }
    if (_2 = GROUP_RE.exec(variant)) {
      return {[`.${escape$1(tag(_2[1]))}:${_2[2]} &`]: translation};
    }
    return {
      [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
    };
  };
  return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
};

// src/twind/presedence.ts
var _3;
var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
var seperatorPrecedence = (string) => {
  _3 = 0;
  for (let index = string.length; index--; ) {
    _3 += includes$1("-:,", string[index]);
  }
  return _3;
};
var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
var PRECEDENCES_BY_PSEUDO_CLASS = [
  "rst",
  "st",
  "en",
  "d",
  "nk",
  "sited",
  "pty",
  "ecked",
  "cus-w",
  "ver",
  "cus",
  "cus-v",
  "tive",
  "sable",
  "ad-on",
  "tiona",
  "quire"
];
var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery$1(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;

// src/twind/serialize.ts
var stringifyBlock = (body, selector) => selector + "{" + body + "}";
var serialize = (prefix, variants, context) => {
  const {theme: theme2, tag} = context;
  const tagVar = (_4, property2) => "--" + tag(property2);
  const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
  const stringifyDeclaration = (property2, value, important) => {
    property2 = tagVars(property2);
    return Array.isArray(value) ? join$1(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
  };
  let rules2;
  const stringify3 = (atRules, selector, presedence, css, important) => {
    if (Array.isArray(css)) {
      css.forEach((css2) => css2 && stringify3(atRules, selector, presedence, css2, important));
      return;
    }
    let declarations = "";
    let maxPropertyPresedence = 0;
    let numberOfDeclarations = 0;
    if (css["@apply"]) {
      css = merge$1(evalThunk$1(apply(css["@apply"]), context), {...css, "@apply": void 0}, context);
    }
    Object.keys(css).forEach((key) => {
      const value = evalThunk$1(css[key], context);
      if (isCSSProperty$1(key, value)) {
        if (value !== "" && key.length > 1) {
          const property2 = hyphenate$1(key);
          numberOfDeclarations += 1;
          maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
          declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
        }
      } else if (value) {
        if (key == ":global") {
          key = "@global";
        }
        if (key[0] == "@") {
          if (key[1] == "g") {
            stringify3([], "", 0, value, important);
          } else if (key[1] == "f") {
            stringify3([], key, 0, value, important);
          } else if (key[1] == "k") {
            const currentSize = rules2.length;
            stringify3([], "", 0, value, important);
            const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
            rules2.push({
              r: stringifyBlock(join$1(waypoints.map((p) => p.r), ""), key),
              p: waypoints.reduce((sum, p) => sum + p.p, 0)
            });
          } else if (key[1] == "i") {
            ;
            (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({p: 0, r: `${key} ${value2};`}));
          } else {
            if (key[2] == "c") {
              key = buildMediaQuery$1(context.theme("screens", tail(key, 8).trim()));
            }
            stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
          }
        } else {
          stringify3(atRules, selector ? join$1(selector.split(/,(?![^[]*])/g).map((selectorPart) => join$1(key.split(/,(?![^[]*])/g).map((keyPart) => includes$1(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart), ",")), ",") : key, presedence, value, important);
        }
      }
    });
    if (numberOfDeclarations) {
      rules2.push({
        r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
        p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
      });
    }
  };
  const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
  return (css, className, rule, layer = 0) => {
    layer <<= 28;
    rules2 = [];
    stringify3([], className ? "." + escape$1(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
    return rules2;
  };
};

// src/twind/inject.ts
var inject = (sheet, mode2, init, context) => {
  let sortedPrecedences;
  init((value = []) => sortedPrecedences = value);
  let insertedRules;
  init((value = new Set()) => insertedRules = value);
  return ({r: css, p: presedence}) => {
    if (!insertedRules.has(css)) {
      insertedRules.add(css);
      const index = sortedInsertionIndex(sortedPrecedences, presedence);
      try {
        sheet.insert(css, index);
        sortedPrecedences.splice(index, 0, presedence);
      } catch (error) {
        if (!/:-[mwo]/.test(css)) {
          mode2.report({id: "INJECT_CSS_ERROR", css, error}, context);
        }
      }
    }
  };
};

// src/twind/configure.ts
var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
var loadMode = (mode2) => (typeof mode2 == "string" ? {t: strict, a: warn, i: silent}[mode2[1]] : mode2) || warn;
var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
var stringify2 = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
var COMPONENT_PROPS = {_: {value: "", writable: true}};
var configure = (config = {}) => {
  const theme2 = makeThemeResolver(config.theme);
  const mode2 = loadMode(config.mode);
  const hash = sanitize(config.hash, false, false, cyrb32);
  const important = config.important;
  let activeRule = {v: []};
  let translateDepth = 0;
  const lastTranslations = [];
  const context = {
    tw: (...tokens) => process(tokens),
    theme: (section, key, defaultValue) => {
      var _a;
      const value = (_a = theme2(section, key, defaultValue)) != null ? _a : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
      return activeRule.n && value && includes$1("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
    },
    tag: (value) => hash ? hash(value) : value,
    css: (rules2) => {
      translateDepth++;
      const lastTranslationsIndex = lastTranslations.length;
      try {
        ;
        (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
        const css = Object.create(null, COMPONENT_PROPS);
        for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
          const translation = lastTranslations[index];
          if (translation) {
            switch (typeof translation) {
              case "object":
                merge$1(css, translation, context);
                break;
              case "string":
                css._ += (css._ && " ") + translation;
            }
          }
        }
        return css;
      } finally {
        lastTranslations.length = lastTranslationsIndex;
        translateDepth--;
      }
    }
  };
  const translate2 = translate$1({...corePlugins, ...config.plugins}, context);
  const doTranslate = (rule) => {
    const parentRule = activeRule;
    activeRule = rule;
    try {
      return evalThunk$1(translate2(rule), context);
    } finally {
      activeRule = parentRule;
    }
  };
  const variants = {...coreVariants, ...config.variants};
  const decorate2 = decorate$1(config.darkMode || "media", variants, context);
  const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
  const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
  const {init = (callback) => callback()} = sheet;
  const inject2 = inject(sheet, mode2, init, context);
  let idToClassName;
  init((value = new Map()) => idToClassName = value);
  const inlineDirectiveName = new WeakMap();
  const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk$1(value, context), evaluateFunctions) : value;
  const convert = (rule) => {
    if (!translateDepth && activeRule.v.length) {
      rule = {...rule, v: [...activeRule.v, ...rule.v], $: ""};
    }
    if (!rule.$) {
      rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
    }
    let className = translateDepth ? null : idToClassName.get(rule.$);
    if (className == null) {
      let translation = doTranslate(rule);
      if (!rule.$) {
        rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
        inlineDirectiveName.set(rule.d, rule.$);
        rule.$ = stringify2(rule, rule.$);
      }
      if (translation && typeof translation == "object") {
        rule.v = rule.v.map(prepareVariantSelector);
        if (important)
          rule.i = important;
        translation = decorate2(translation, rule);
        if (translateDepth) {
          lastTranslations.push(translation);
        } else {
          const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
          className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
          serialize2(translation, className, rule, layer).forEach(inject2);
          if (translation._) {
            className += " " + translation._;
          }
        }
      } else {
        if (typeof translation == "string") {
          className = translation;
        } else {
          className = rule.$;
          mode2.report({id: "UNKNOWN_DIRECTIVE", rule: className}, context);
        }
        if (translateDepth && typeof rule.d !== "function") {
          lastTranslations.push(className);
        }
      }
      if (!translateDepth) {
        idToClassName.set(rule.$, className);
        ensureMaxSize(idToClassName, 3e4);
      }
    }
    return className;
  };
  const process = (tokens) => join$1(parse(tokens).map(convert).filter(Boolean), " ");
  const preflight = sanitize(config.preflight, identity, false);
  if (preflight) {
    const css = createPreflight(theme2);
    const styles = serialize2(typeof preflight == "function" ? evalThunk$1(preflight(css, context), context) || css : {...css, ...preflight});
    init((injected = (styles.forEach(inject2), true)) => injected);
  }
  return {
    init: () => mode2.report({id: "LATE_SETUP_CALL"}, context),
    process
  };
};

// src/twind/instance.ts
var create = (config) => {
  let process = (tokens) => {
    init();
    return process(tokens);
  };
  let init = (config2) => {
    ;
    ({process, init} = configure(config2));
  };
  if (config)
    init(config);
  let context;
  const fromContext = (key) => () => {
    if (!context) {
      process([
        (_4) => {
          context = _4;
          return "";
        }
      ]);
    }
    return context[key];
  };
  return {
    tw: Object.defineProperties((...tokens) => process(tokens), {
      theme: {
        get: fromContext("theme")
      }
    }),
    setup: (config2) => init(config2)
  };
};

// src/twind/default.ts
var {tw, setup} = /* @__PURE__ */ create();

// src/css/index.ts

// src/internal/util.ts
var includes = (value, search) => !!~value.indexOf(search);
var join = (parts, separator = "-") => parts.join(separator);
var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context) => {
  while (typeof value == "function") {
    value = value(context);
  }
  return value;
};
var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
  const value = evalThunk(source[key], context);
  if (isCSSProperty(key, value)) {
    target2[hyphenate(key)] = value;
  } else {
    target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
  }
  return target2;
}, target) : target;
var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
var buildMediaQuery = (screen2) => {
  if (!Array.isArray(screen2)) {
    screen2 = [screen2];
  }
  return "@media " + join(screen2.map((screen3) => {
    if (typeof screen3 == "string") {
      screen3 = {min: screen3};
    }
    return screen3.raw || join(Object.keys(screen3).map((feature) => `(${feature}-width:${screen3[feature]})`), " and ");
  }), ",");
};
var translate = (tokens, context) => {
  const collect = (target, token) => Array.isArray(token) ? token.reduce(collect, target) : merge(target, evalThunk(token, context), context);
  return tokens.reduce(collect, {});
};
var newRule = /\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi;
var ruleClean = /\/\*[\s\S]*?\*\/|\s+|\n/gm;
var decorate = (selectors, currentBlock) => selectors.reduceRight((rules, selector) => ({[selector]: rules}), currentBlock);
var saveBlock = (rules, selectors, currentBlock) => {
  if (currentBlock) {
    rules.push(decorate(selectors, currentBlock));
  }
};
var interleave = (strings, interpolations, context) => {
  let buffer = strings[0];
  const result = [];
  for (let index = 0; index < interpolations.length; ) {
    const interpolation = evalThunk(interpolations[index], context);
    if (interpolation && typeof interpolation == "object") {
      result.push(buffer, interpolation);
      buffer = strings[++index];
    } else {
      buffer += (interpolation || "") + strings[++index];
    }
  }
  result.push(buffer);
  return result;
};
var astish = (values, context) => {
  const selectors = [];
  const rules = [];
  let currentBlock;
  let match;
  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    if (typeof value == "string") {
      while (match = newRule.exec(value.replace(ruleClean, " "))) {
        if (!match[0])
          continue;
        if (match[4]) {
          currentBlock = saveBlock(rules, selectors, currentBlock);
          selectors.pop();
        }
        if (match[3]) {
          currentBlock = saveBlock(rules, selectors, currentBlock);
          selectors.push(match[3]);
        } else if (!match[4]) {
          if (!currentBlock)
            currentBlock = {};
          const value2 = match[2] && /\S/.test(match[2]) ? match[2] : values[++index];
          if (value2) {
            if (match[1] == "@apply") {
              merge(currentBlock, evalThunk(apply(value2), context), context);
            } else {
              currentBlock[match[1]] = value2;
            }
          }
        }
      }
    } else {
      currentBlock = saveBlock(rules, selectors, currentBlock);
      rules.push(decorate(selectors, value));
    }
  }
  saveBlock(rules, selectors, currentBlock);
  return rules;
};
var cssFactory = (tokens, context) => translate(Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw) ? astish(interleave(tokens[0], tokens.slice(1), context), context) : tokens, context);
var css = (...tokens) => directive(cssFactory, tokens);
var keyframesFactory = (tokens, context) => {
  const waypoints = cssFactory(tokens, context);
  const id = cyrb32(JSON.stringify(waypoints));
  context.tw(() => ({[`@keyframes ${id}`]: waypoints}));
  return id;
};
var keyframes = (...tokens) => directive(keyframesFactory, tokens);
var animation = (value, waypoints) => waypoints === void 0 ? (...args) => animation(value, keyframes(...args)) : css({
  ...value && typeof value == "object" ? value : {animation: value},
  animationName: typeof waypoints == "function" ? waypoints : keyframes(waypoints)
});
var screenFactory = ({size, rules}, context) => {
  const media = buildMediaQuery(context.theme("screens", size));
  return rules === void 0 ? media : {
    [media]: typeof rules == "function" ? evalThunk(rules, context) : cssFactory([rules], context)
  };
};
var screen = (size, rules) => directive(screenFactory, {size, rules});

// src/colors/index.ts
var black = "#000";
var white = "#fff";
var rose = {
  50: "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337"
};
var pink = {
  50: "#fdf2f8",
  100: "#fce7f3",
  200: "#fbcfe8",
  300: "#f9a8d4",
  400: "#f472b6",
  500: "#ec4899",
  600: "#db2777",
  700: "#be185d",
  800: "#9d174d",
  900: "#831843"
};
var fuchsia = {
  50: "#fdf4ff",
  100: "#fae8ff",
  200: "#f5d0fe",
  300: "#f0abfc",
  400: "#e879f9",
  500: "#d946ef",
  600: "#c026d3",
  700: "#a21caf",
  800: "#86198f",
  900: "#701a75"
};
var purple = {
  50: "#faf5ff",
  100: "#f3e8ff",
  200: "#e9d5ff",
  300: "#d8b4fe",
  400: "#c084fc",
  500: "#a855f7",
  600: "#9333ea",
  700: "#7e22ce",
  800: "#6b21a8",
  900: "#581c87"
};
var violet = {
  50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6d28d9",
  800: "#5b21b6",
  900: "#4c1d95"
};
var indigo = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81"
};
var blue = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a"
};
var lightBlue = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e"
};
var cyan = {
  50: "#ecfeff",
  100: "#cffafe",
  200: "#a5f3fc",
  300: "#67e8f9",
  400: "#22d3ee",
  500: "#06b6d4",
  600: "#0891b2",
  700: "#0e7490",
  800: "#155e75",
  900: "#164e63"
};
var teal = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a"
};
var emerald = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b7",
  400: "#34d399",
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  900: "#064e3b"
};
var green = {
  50: "#f0fdf4",
  100: "#dcfce7",
  200: "#bbf7d0",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#16a34a",
  700: "#15803d",
  800: "#166534",
  900: "#14532d"
};
var lime = {
  50: "#f7fee7",
  100: "#ecfccb",
  200: "#d9f99d",
  300: "#bef264",
  400: "#a3e635",
  500: "#84cc16",
  600: "#65a30d",
  700: "#4d7c0f",
  800: "#3f6212",
  900: "#365314"
};
var yellow = {
  50: "#fefce8",
  100: "#fef9c3",
  200: "#fef08a",
  300: "#fde047",
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  900: "#713f12"
};
var amber = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "#fbbf24",
  500: "#f59e0b",
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f"
};
var orange = {
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12"
};
var red = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d"
};
var warmGray = {
  50: "#fafaf9",
  100: "#f5f5f4",
  200: "#e7e5e4",
  300: "#d6d3d1",
  400: "#a8a29e",
  500: "#78716c",
  600: "#57534e",
  700: "#44403c",
  800: "#292524",
  900: "#1c1917"
};
var trueGray = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717"
};
var gray = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b"
};
var coolGray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827"
};
var blueGray = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a"
};

var md5 = createCommonjsModule(function (module) {
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = commonjsGlobal;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && 'object' === 'object' && module.exports;
  var AMD = typeof undefined === 'function' && undefined.amd;
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [], buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */
  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */
  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */
  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | (code >> 6);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | (code >> 12);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              buffer8[i++] = 0xf0 | (code >> 18);
              buffer8[i++] = 0x80 | ((code >> 12) & 0x3f);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a, b, c, d, bc, da, blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ (d & (a ^ -271733879))) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ (c & (d ^ a))) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ (b & (c ^ d))) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ (a & (b ^ c))) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ (d & (a ^ b))) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ (c & (d ^ a))) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ (b & (c ^ d))) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;

    return HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F];
  };

  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
    return [
      h0 & 0xFF, (h0 >> 8) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 24) & 0xFF,
      h1 & 0xFF, (h1 >> 8) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 24) & 0xFF,
      h2 & 0xFF, (h2 >> 8) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 24) & 0xFF,
      h3 & 0xFF, (h3 >> 8) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 24) & 0xFF
    ];
  };

  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */
  Md5.prototype.array = Md5.prototype.digest;

  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */
  Md5.prototype.base64 = function () {
    var v1, v2, v3, base64Str = '', bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
        BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
        BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
        BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
      BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
      '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;
    if (AMD) {
      undefined(function () {
        return exports;
      });
    }
  }
})();
});

var sha1 = createCommonjsModule(function (module) {
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function() {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = commonjsGlobal;
  }
  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && 'object' === 'object' && module.exports;
  var AMD = typeof undefined === 'function' && undefined.amd;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Sha1(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Sha1();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');
      } else if (message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (message.length === undefined) {
        return method(message);
      }
      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');
    };
    return nodeMethod;
  };

  function Sha1(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Sha1.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) !== 'string';
    if (notString && message.constructor === root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha1.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;

    for(j = 16; j < 80; ++j) {
      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
      blocks[j] =  (t << 1) | (t >>> 31);
    }

    for(j = 0; j < 20; j += 5) {
      f = (b & c) | ((~b) & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1518500249 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | ((~a) & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1518500249 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | ((~e) & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1518500249 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | ((~d) & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1518500249 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | ((~c) & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1518500249 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 40; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1859775393 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1859775393 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1859775393 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1859775393 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1859775393 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 60; j += 5) {
      f = (b & c) | (b & d) | (c & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 1894007588 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | (a & c) | (b & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 1894007588 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | (e & b) | (a & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 1894007588 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | (d & a) | (e & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 1894007588 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | (c & e) | (d & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 1894007588 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 80; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 899497514 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 899497514 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 899497514 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 899497514 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 899497514 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
  };

  Sha1.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];
  };

  Sha1.prototype.toString = Sha1.prototype.hex;

  Sha1.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF
    ];
  };

  Sha1.prototype.array = Sha1.prototype.digest;

  Sha1.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha1 = exports;
    if (AMD) {
      undefined(function () {
        return exports;
      });
    }
  }
})();
});

/** List of hex digit for fast accessing by index */
var HEX_DIGITS = '0123456789abcdef'.split('');

/**
 * Converts unsigned byte to hex representation
 * @param {number} ubyte The unsigned byte to convert
 * @returns {string} The hex representation
 */
var uint8ToHex = function(ubyte) {
  var first = ubyte >> 4;
  var second = ubyte - (first << 4);

  return HEX_DIGITS[first] + HEX_DIGITS[second];
};

/**
 * Converts unsigned byte buffer to hex string
 * @param {Uint8Array} buf The unsigned bytes buffer
 * @returns {string} The hex string representation
 */
var uint8ArrayToHex = function(buf) {
  var out = [];

  for (var i = 0; i < buf.length; i++) {
    out.push(uint8ToHex(buf[i]));
  }

  return out.join('');
};

/**
 * Converts string to buffer of char codes
 * @param {string} str The string to parse
 * @returns {Uint8Array} Buffer of char codes
 */
var stringToCharBuffer = function(str) {
  var buffer = new Uint8Array(str.length);

  for (var i = 0; i < str.length; i++) {
    buffer[i] = str[i].charCodeAt(0);
  }

  return buffer;
};

/**
 * Generates MD5 hash from buffer
 * @param {Uint8Array} buf Buffer of char codes
 * @returns {Uint8Array} MD5 hash buffer
 */
var md5Hash = function(buf) {
  return new Uint8Array(md5.arrayBuffer(buf));
};

/**
 * Generates SHA-1 hash from buffer
 * @param {Uint8Array} buf Buffer of char codes
 * @returns {Uint8Array} SHA-1 hash buffer
 */
var sha1Hash = function(buf) {
  return new Uint8Array(sha1.arrayBuffer(buf));
};

/**
 * Concatenates two uint8 buffers
 * @param {Uint8Array} buf1 The first buffer to concatenate
 * @param {Uint8Array} buf2 The second buffer to concatenate
 * @returns {Uint8Array} Concatenation result
 */
var concatBuffers = function(buf1, buf2) {
  var out = new Uint8Array(buf1.length + buf2.length);

  out.set(new Uint8Array(buf1), 0);
  out.set(new Uint8Array(buf2), buf1.byteLength);

  return out;
};

/**
 * Creates uuid from hash buffer
 * @param {Uint8Array} hashBuffer Hash buffer
 * @param {3|5} version Version of uuid
 * @returns {string} The uuid
 */
var hashToUuid = function(hashBuffer, version) {
  return [
    // The low field of the timestamp
    uint8ArrayToHex(hashBuffer.slice(0, 4)),
    '-',

    // The middle field of the timestamp
    uint8ArrayToHex(hashBuffer.slice(4, 6)),
    '-',

    // The high field of the timestamp multiplexed with the version number
    uint8ToHex((hashBuffer[6] & 0x0f) | parseInt(version * 10, 16)),
    uint8ToHex(hashBuffer[7]),
    '-',

    // The high field of the clock sequence multiplexed with the variant
    uint8ToHex((hashBuffer[8] & 0x3f) | 0x80),
    // The low field of the clock sequence
    uint8ToHex(hashBuffer[9]),
    '-',
    //  The spatially unique node identifier

    uint8ArrayToHex(hashBuffer.slice(10, 16))
  ].join('');
};

var lib = {
  uint8ToHex,
  uint8ArrayToHex,
  stringToCharBuffer,
  md5Hash,
  sha1Hash,
  concatBuffers,
  hashToUuid
};

/** Uin8Array with zero items */
var EMPTY_UINT8_ARRAY = new Uint8Array(0);

/**
 * Generates the Name-Based UUID hashes v3 and v5 according to RFC-4122
 * https://tools.ietf.org/html/rfc4122#section-4.3
 * @param {string} target Hashing target
 * @param {string} [namespace] Some name space within which generation occurs
 * @param {3|5} [version=5] Version of UUID. Available versions is 3 and 5
 * according to RFC-4122. The version is responsible for the hashing algorithm:
 * version 3 uses MD5, and version 5 uses SHA-1. Default is 5.
 * @returns {string} UUID
 */
function generateUuid(target, namespace, version) {
  if (typeof target !== 'string') {
    throw TypeError('Value must be string');
  }

  if (typeof namespace === 'number') {
    return generateUuid(target, undefined, namespace);
  }

  if (version == null) {
    return generateUuid(target, namespace, 5);
  }

  if (version !== 3 && version !== 5) {
    throw TypeError('Version of UUID can be only 3 or 5');
  }

  // Parsing target chars
  var charBuffer = lib.stringToCharBuffer(target);

  // TODO: Test namespace for uuid and parse to buffer
  var namespaceCharBuffer = typeof namespace === 'string' ? lib.stringToCharBuffer(namespace) : EMPTY_UINT8_ARRAY;

  // Concatenation two buffers of strings to one
  var buffer = lib.concatBuffers(namespaceCharBuffer, charBuffer);

  // Getting hash
  var hash = version === 3 ? lib.md5Hash(buffer) : lib.sha1Hash(buffer);

  return lib.hashToUuid(hash, version);
}

/**
 * Export module
 */
var src = generateUuid;

// src/internal/dom.ts
var STYLE_ELEMENT_ID = "__twind";
var getStyleElement = (nonce) => {
  let element = self[STYLE_ELEMENT_ID];
  if (!element) {
    element = document.head.appendChild(document.createElement("style"));
    element.id = STYLE_ELEMENT_ID;
    nonce && (element.nonce = nonce);
    element.appendChild(document.createTextNode(""));
  }
  return element;
};

// src/sheets/index.ts
var domSheet = ({
  nonce,
  target = getStyleElement(nonce)
} = {}) => {
  const offset = target.childNodes.length;
  return {
    target,
    insert: (rule, index) => target.insertBefore(document.createTextNode(rule), target.childNodes[offset + index])
  };
};
var createStorage = () => {
  const callbacks = [];
  let state = [];
  const invoke = (callback, index) => state[index] = callback(state[index]);
  return {
    init: (callback) => invoke(callback, callbacks.push(callback) - 1),
    reset: (snapshot = []) => {
      ;
      [snapshot, state] = [state, snapshot];
      callbacks.forEach(invoke);
      return snapshot;
    }
  };
};
var virtualSheet = () => {
  const storage = createStorage();
  let target;
  storage.init((value = []) => target = value);
  return Object.defineProperties({
    get target() {
      return [...target];
    },
    insert: (rule, index) => target.splice(index, 0, rule)
  }, Object.getOwnPropertyDescriptors(storage));
};
var getStyleTagProperties = (sheet) => ({
  id: STYLE_ELEMENT_ID,
  textContent: (Array.isArray(sheet) ? sheet : sheet.target).join("")
});
var getStyleTag = (sheet, attributes) => {
  const {id, textContent} = getStyleTagProperties(sheet);
  attributes = {...attributes, id};
  return `<style${Object.keys(attributes).reduce((attrs, key) => `${attrs} ${key}=${JSON.stringify(attributes[key])}`, "")}>${textContent}</style>`;
};

/**
 * Check if Chrome.
 *
 * @returns {boolean} True if user is using Chrome.
 */
function isChrome() {
  return /chrome/.test(navigator.userAgent.toLowerCase());
}

/**
 * Create Twind instance.
 *
 * @param {HTMLElement} el HTML element.
 * @param {boolean} condition If Twind should be executed.
 * @returns {object} Twind object.
 */
function twind(el, condition = true) {
  // @ts-ignore
  const tailwindConfig = window.spxTailwindConfig;
  const focus = 'transition ease-in duration-100 focus:outline-none focus-visible:outline-none';
  const isAdopted = isChrome();
  const sheet = isAdopted
    ? cssomSheet({ target: new CSSStyleSheet() })
    : virtualSheet();
  const { tw } = create({
    sheet,
    theme: Object.assign({ colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: black,
        white: white,
        'blue-gray': blueGray,
        'cool-gray': coolGray,
        gray: gray,
        'true-gray': trueGray,
        'warm-gray': warmGray,
        red: red,
        orange: orange,
        amber: amber,
        yellow: yellow,
        lime: lime,
        green: green,
        emerald: emerald,
        teal: teal,
        cyan: cyan,
        sky: lightBlue,
        blue: blue,
        indigo: indigo,
        violet: violet,
        purple: purple,
        fuchsia: fuchsia,
        pink: pink,
        rose: rose,
      } }, tailwindConfig === null || tailwindConfig === void 0 ? void 0 : tailwindConfig.theme),
    plugins: Object.assign({ focus: apply `${focus} focus-visible:shadow-[var(--spx-focus)]`, 'focus-border': apply `${focus} focus-visible:border-blue-500 focus-visible:shadow-[var(--spx-focus-px)]`, 'focus-out': apply `${focus} focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:shadow-none` }, tailwindConfig === null || tailwindConfig === void 0 ? void 0 : tailwindConfig.plugins),
    variants: Object.assign({}, tailwindConfig === null || tailwindConfig === void 0 ? void 0 : tailwindConfig.variatns),
    mode: 'silent',
  });
  if (condition) {
    if (isAdopted) {
      el.adoptedStyleSheets = [...el.adoptedStyleSheets, sheet.target];
    }
    else {
      const createStyle = () => {
        const string = getStyleTagProperties(sheet).textContent;
        const stringId = src(string);
        if (!el.querySelector(`style[data-spx="${stringId}"]`)) {
          const style = document.createElement('style');
          style.setAttribute('data-spx', stringId);
          style.innerHTML = string;
          if (!el.querySelector('style')) {
            el.prepend(style);
          }
          else {
            el.append(style);
          }
        }
      };
      setTimeout(() => {
        createStyle();
      }, 1);
    }
  }
  return { tw, css, apply };
}

export { tw as a, keyframes as k, twind as t };
