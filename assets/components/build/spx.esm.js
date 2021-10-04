import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-a2b24666.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.8.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-d08ba8aa.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"spx-editor\",[[1,\"spx-editor\",{\"height\":[513],\"loaded\":[32]}]]],[\"spx-edit-button\",[[1,\"spx-edit-button\",{\"test\":[4],\"background\":[513],\"backgroundDiscard\":[513,\"background-discard\"],\"bottom\":[513],\"border\":[513],\"borderDiscard\":[513,\"border-discard\"],\"borderRadius\":[513,\"border-radius\"],\"classButton\":[513,\"class-button\"],\"classButtonDiscard\":[513,\"class-button-discard\"],\"classLoader\":[513,\"class-loader\"],\"color\":[513],\"colorDiscard\":[513,\"color-discard\"],\"editId\":[513,\"edit-id\"],\"fontSize\":[513,\"font-size\"],\"fontSizeMax\":[514,\"font-size-max\"],\"fontSizeMin\":[514,\"font-size-min\"],\"gap\":[513],\"left\":[513],\"loaderColor\":[513,\"loader-color\"],\"loaderGap\":[513,\"loader-gap\"],\"padding\":[513],\"paddingXMin\":[514,\"padding-x-min\"],\"paddingXMax\":[514,\"padding-x-max\"],\"paddingYMin\":[514,\"padding-y-min\"],\"paddingYMax\":[514,\"padding-y-max\"],\"position\":[513],\"right\":[513],\"styling\":[513],\"textDiscard\":[513,\"text-discard\"],\"textEdit\":[513,\"text-edit\"],\"textSave\":[513,\"text-save\"],\"top\":[513],\"zIndex\":[514,\"z-index\"],\"loading\":[32],\"open\":[32],\"discard\":[64],\"edit\":[64],\"save\":[64]}]]],[\"spx-lightbox\",[[1,\"spx-lightbox\",{\"bodyOverflow\":[516,\"body-overflow\"],\"closeButton\":[516,\"close-button\"],\"closeButtonColor\":[513,\"close-button-color\"],\"overlayBackground\":[513,\"overlay-background\"],\"overlayBackdropFilter\":[513,\"overlay-backdrop-filter\"],\"spxSlider\":[513,\"spx-slider\"],\"target\":[513]}]]],[\"spx-accordion\",[[1,\"spx-accordion\",{\"classContent\":[513,\"class-content\"],\"classContentActive\":[513,\"class-content-active\"],\"classContentInactive\":[513,\"class-content-inactive\"],\"classContentText\":[513,\"class-content-text\"],\"classContentTextActive\":[513,\"class-content-text-active\"],\"classContentTextInactive\":[513,\"class-content-text-inactive\"],\"classHeader\":[513,\"class-header\"],\"classHeaderActive\":[513,\"class-header-active\"],\"classHeaderInactive\":[513,\"class-header-inactive\"],\"classHeaderText\":[513,\"class-header-text\"],\"classHeaderTextActive\":[513,\"class-header-text-active\"],\"classHeaderTextInactive\":[513,\"class-header-text-inactive\"],\"classHeaderIcon\":[513,\"class-header-icon\"],\"classHeaderIconActive\":[513,\"class-header-icon-active\"],\"classHeaderIconInactive\":[513,\"class-header-icon-inactive\"],\"classHeaderIconContainer\":[513,\"class-header-icon-container\"],\"classHeaderIconContainerActive\":[513,\"class-header-icon-container-active\"],\"classHeaderIconContainerInactive\":[513,\"class-header-icon-container-inactive\"],\"contentColor\":[513,\"content-color\"],\"contentText\":[513,\"content-text\"],\"contentTextTag\":[513,\"content-text-tag\"],\"contentFontSize\":[513,\"content-font-size\"],\"contentFontSizeMax\":[514,\"content-font-size-max\"],\"contentFontSizeMin\":[514,\"content-font-size-min\"],\"gap\":[513],\"gapMax\":[514,\"gap-max\"],\"gapMin\":[514,\"gap-min\"],\"headerColor\":[513,\"header-color\"],\"headerFontSize\":[513,\"header-font-size\"],\"headerFontSizeMax\":[514,\"header-font-size-max\"],\"headerFontSizeMin\":[514,\"header-font-size-min\"],\"headerGap\":[513,\"header-gap\"],\"headerGapMax\":[514,\"header-gap-max\"],\"headerGapMin\":[514,\"header-gap-min\"],\"headerText\":[513,\"header-text\"],\"headerTextOpen\":[513,\"header-text-open\"],\"headerTextTag\":[513,\"header-text-tag\"],\"icon\":[513],\"iconType\":[513,\"icon-type\"],\"iconTransform\":[513,\"icon-transform\"],\"link\":[513],\"linkType\":[513,\"link-type\"],\"openState\":[1540,\"open\"],\"reverse\":[516],\"styling\":[513],\"contentCustom\":[32],\"disableAnimation\":[32],\"headerCustom\":[32],\"height\":[32],\"close\":[64],\"open\":[64],\"toggle\":[64]}]]],[\"spx-iframe\",[[1,\"spx-iframe\",{\"fit\":[4],\"lazy\":[4],\"loaderBackground\":[513,\"loader-background\"],\"loaderColor\":[513,\"loader-color\"],\"loaderBorderRadius\":[513,\"loader-border-radius\"],\"loaderPadding\":[513,\"loader-padding\"],\"minHeight\":[513,\"min-height\"],\"size\":[1],\"src\":[1],\"height\":[32],\"loaded\":[32],\"parent\":[32],\"parentHeight\":[32],\"width\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-image-comparison\",[[1,\"spx-image-comparison\",{\"active\":[516],\"color\":[513],\"height\":[513],\"iconColor\":[513,\"icon-color\"],\"lazy\":[516],\"srcAfter\":[513,\"src-after\"],\"srcBefore\":[513,\"src-before\"],\"steps\":[514],\"start\":[514],\"width\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-navigation\",[[1,\"spx-navigation\",{\"childBorder\":[513,\"child-border\"],\"childBorderRadius\":[513,\"child-border-radius\"],\"childBoxShadow\":[513,\"child-box-shadow\"],\"childChildGap\":[513,\"child-child-gap\"],\"childGap\":[513,\"child-gap\"],\"childIcon\":[513,\"child-icon\"],\"childIconType\":[513,\"child-icon-type\"],\"childIndicatorGap\":[513,\"child-indicator-gap\"],\"childItemBackground\":[513,\"child-item-background\"],\"childItemBackgroundHover\":[513,\"child-item-background-hover\"],\"childItemColor\":[513,\"child-item-color\"],\"childItemColorHover\":[513,\"child-item-color-hover\"],\"childItemPadding\":[513,\"child-item-padding\"],\"childPlacement\":[513,\"child-placement\"],\"fontSize\":[513,\"font-size\"],\"isMobile\":[516,\"is-mobile\"],\"itemUnderline\":[516,\"item-underline\"],\"itemUnderlineHover\":[516,\"item-underline-hover\"],\"menu\":[513],\"mobile\":[514],\"mobileIcon\":[513,\"mobile-icon\"],\"mobileIconType\":[513,\"mobile-icon-type\"],\"mobileItemBackground\":[513,\"mobile-item-background\"],\"mobileItemBackgroundHover\":[513,\"mobile-item-background-hover\"],\"mobileItemColor\":[513,\"mobile-item-color\"],\"mobileItemColorHover\":[513,\"mobile-item-color-hover\"],\"mobileItemNestedMarginLeft\":[513,\"mobile-item-nested-margin-left\"],\"mobileItemPadding\":[513,\"mobile-item-padding\"],\"mobilePlacement\":[513,\"mobile-placement\"],\"parentItemBackground\":[513,\"parent-item-background\"],\"parentItemBackgroundHover\":[513,\"parent-item-background-hover\"],\"parentItemColor\":[513,\"parent-item-color\"],\"parentItemColorHover\":[513,\"parent-item-color-hover\"],\"parentItemGap\":[513,\"parent-item-gap\"],\"parentItemPadding\":[513,\"parent-item-padding\"],\"vertical\":[516],\"menuArray\":[32]},[[0,\"ontouchstart\",\"onClick\"],[1,\"mouseenter\",\"onClick\"],[0,\"focusin\",\"onClick\"],[9,\"resize\",\"onResize\"]]]]],[\"spx-share\",[[1,\"spx-share\",{\"fontSize\":[513,\"font-size\"],\"fontSizeMax\":[514,\"font-size-max\"],\"fontSizeMin\":[514,\"font-size-min\"],\"itemBackground\":[513,\"item-background\"],\"itemBorderRadius\":[513,\"item-border-radius\"],\"itemColor\":[513,\"item-color\"],\"itemFilterHover\":[513,\"item-filter-hover\"],\"itemGap\":[513,\"item-gap\"],\"itemGapMin\":[514,\"item-gap-min\"],\"itemGapMax\":[514,\"item-gap-max\"],\"itemPadding\":[513,\"item-padding\"],\"itemPaddingMin\":[514,\"item-padding-min\"],\"itemPaddingMax\":[514,\"item-padding-max\"],\"itemSize\":[513,\"item-size\"],\"itemSizeMin\":[514,\"item-size-min\"],\"itemSizeMax\":[514,\"item-size-max\"],\"styling\":[513],\"target\":[513],\"theme\":[513],\"vertical\":[516],\"location\":[32]}]]],[\"spx-animate\",[[1,\"spx-animate\",{\"autoAlpha\":[2,\"auto-alpha\"],\"clipPath\":[1,\"clip-path\"],\"delay\":[2],\"duration\":[2],\"ease\":[1],\"filter\":[1],\"once\":[4],\"opacity\":[2],\"repeat\":[2],\"repeatDelay\":[2,\"repeat-delay\"],\"reverse\":[4],\"stagger\":[2],\"target\":[1],\"viewport\":[4],\"viewportThreshold\":[514,\"viewport-threshold\"],\"viewportRootMargin\":[513,\"viewport-root-margin\"],\"x\":[8],\"y\":[8],\"yoyo\":[4],\"play\":[64],\"restart\":[64]}]]],[\"spx-class-toggle\",[[1,\"spx-class-toggle\",{\"local\":[513],\"inner\":[516],\"target\":[513],\"toggle\":[513],\"classesArray\":[32],\"toggled\":[32]}]]],[\"spx-group\",[[1,\"spx-group\",{\"content\":[513],\"target\":[513]}]]],[\"spx-masonry\",[[1,\"spx-masonry\",{\"columns\":[514],\"gap\":[513],\"images\":[513],\"imageSize\":[513,\"image-size\"],\"imageSrc\":[513,\"image-src\"],\"lazy\":[516]}]]],[\"spx-mockup\",[[1,\"spx-mockup\",{\"colorGalaxyS8\":[513,\"color-galaxy-s-8\"],\"colorGooglePixel\":[513,\"color-google-pixel\"],\"colorIpadPro\":[513,\"color-ipad-pro\"],\"colorIphone8\":[513,\"color-iphone-8\"],\"colorMacbook\":[513,\"color-macbook\"],\"colorMacbookPro\":[513,\"color-macbook-pro\"],\"imagePosition\":[513,\"image-position\"],\"size\":[514],\"sizeMax\":[514,\"size-max\"],\"sizeMin\":[514,\"size-min\"],\"src\":[513],\"type\":[513],\"height\":[32],\"innerElId\":[32],\"mockup\":[32],\"outerElId\":[32],\"parent\":[32],\"parentHeight\":[32],\"width\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-notation\",[[4,\"spx-notation\",{\"animation\":[516],\"animationDuration\":[514,\"animation-duration\"],\"autoplay\":[516],\"brackets\":[513],\"color\":[513],\"delay\":[514],\"group\":[516],\"iterations\":[514],\"multiline\":[516],\"padding\":[514],\"strokeWidth\":[514,\"stroke-width\"],\"type\":[513],\"annotation\":[32],\"clear\":[64],\"hide\":[64],\"redraw\":[64],\"show\":[64]}]]],[\"spx-offset\",[[1,\"spx-offset\",{\"target\":[513],\"variable\":[516],\"recalc\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-scrollspy\",[[1,\"spx-scrollspy\",{\"navClass\":[513,\"nav-class\"],\"target\":[513],\"threshold\":[514],\"rootMargin\":[513,\"root-margin\"],\"urlChange\":[516,\"url-change\"],\"links\":[32]}]]],[\"spx-slideshow\",[[1,\"spx-slideshow\",{\"duration\":[513],\"gap\":[513],\"images\":[513],\"height\":[513],\"imageSize\":[513,\"image-size\"],\"imageSrc\":[513,\"image-src\"],\"lazy\":[516],\"maxWidth\":[513,\"max-width\"],\"objectFit\":[513,\"object-fit\"],\"overflow\":[513],\"content\":[32],\"imagesArray\":[32],\"offsetWidth\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-tailwind\",[[1,\"spx-tailwind\",{\"content\":[32]}]]],[\"spx-text-path\",[[1,\"spx-text-path\",{\"gap\":[513],\"src\":[513],\"startOffset\":[513,\"start-offset\"],\"text\":[513],\"textColor\":[513,\"text-color\"],\"textFontWeight\":[513,\"text-font-weight\"],\"textFontSize\":[513,\"text-font-size\"],\"textTransform\":[513,\"text-transform\"]}]]],[\"spx-typewriter\",[[1,\"spx-typewriter\",{\"autoStart\":[516,\"auto-start\"],\"delay\":[520],\"deleteSpeed\":[520,\"delete-speed\"],\"delimiter\":[520],\"loop\":[516],\"text\":[513],\"typewriter\":[32],\"play\":[64],\"stop\":[64]}]]],[\"spx-control-switch\",[[1,\"spx-control-switch\",{\"checked\":[1028],\"data\":[1],\"handleInput\":[16],\"label\":[1]}]]],[\"spx-editor-controls\",[[1,\"spx-editor-controls\"]]],[\"spx-editor-components\",[[1,\"spx-editor-components\",{\"currentData\":[32]}]]],[\"spx-editor-header\",[[1,\"spx-editor-header\"]]],[\"spx-control-color\",[[1,\"spx-control-color\",{\"data\":[1],\"handleInput\":[16],\"label\":[1],\"value\":[1025]}]]],[\"spx-code\",[[1,\"spx-code\",{\"background\":[513],\"borderRadius\":[513,\"border-radius\"],\"clipboard\":[516],\"clipboardButtonBackground\":[513,\"clipboard-button-background\"],\"clipboardButtonColor\":[513,\"clipboard-button-color\"],\"clipboardButtonFontSize\":[513,\"clipboard-button-font-size\"],\"clipboardButtonFontWeight\":[520,\"clipboard-button-font-weight\"],\"clipboardButtonPadding\":[513,\"clipboard-button-padding\"],\"clipboardButtonText\":[513,\"clipboard-button-text\"],\"clipboardButtonTextCopied\":[513,\"clipboard-button-text-copied\"],\"clipboardButtonTextTransform\":[513,\"clipboard-button-text-transform\"],\"content\":[513],\"filter\":[513],\"fontSize\":[513,\"font-size\"],\"hideScrollbar\":[516,\"hide-scrollbar\"],\"lazy\":[516],\"lineNumbers\":[516,\"line-numbers\"],\"lineNumbersBackground\":[513,\"line-numbers-background\"],\"lineNumbersColor\":[513,\"line-numbers-color\"],\"lineNumbersStart\":[514,\"line-numbers-start\"],\"maxWidth\":[513,\"max-width\"],\"padding\":[513],\"theme\":[513],\"type\":[513],\"whitespaceLeftTrim\":[516,\"whitespace-left-trim\"],\"whitespaceRemoveIndent\":[516,\"whitespace-remove-indent\"],\"whitespaceRemoveTrailing\":[516,\"whitespace-remove-trailing\"],\"whitespaceRightTrim\":[516,\"whitespace-right-trim\"],\"contentInner\":[32],\"text\":[32]}]]],[\"spx-editor-content\",[[1,\"spx-editor-content\"]]],[\"spx-control-label\",[[1,\"spx-control-label\",{\"label\":[1],\"mb\":[516]}]]],[\"spx-control-number\",[[1,\"spx-control-number\",{\"data\":[1],\"handleInput\":[8,\"handle-input\"],\"label\":[1],\"max\":[2],\"min\":[2],\"slider\":[4],\"start\":[2],\"step\":[2],\"value\":[1025]}]]],[\"spx-control-select\",[[1,\"spx-control-select\",{\"data\":[1],\"delimiter\":[1],\"handleInput\":[16],\"label\":[1],\"options\":[1],\"value\":[1025]}]]],[\"spx-control-group\",[[1,\"spx-control-group\"]]],[\"ion-icon\",[[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ariaHidden\":[513,\"aria-hidden\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[\"spx-icon\",[[1,\"spx-icon\",{\"color\":[513],\"icon\":[513],\"type\":[513],\"size\":[513],\"sizeMin\":[514,\"size-min\"],\"sizeMax\":[514,\"size-max\"],\"styling\":[513],\"width\":[513]}]]],[\"spx-editor-container\",[[1,\"spx-editor-container\"]]],[\"spx-slider\",[[1,\"spx-slider\",{\"autoheight\":[516],\"autoplay\":[516],\"autoplayDelay\":[514,\"autoplay-delay\"],\"autoplayDisableOnInteraction\":[516,\"autoplay-disable-on-interaction\"],\"centeredSlides\":[516,\"centered-slides\"],\"effect\":[513],\"gap\":[514],\"imageObjectFit\":[513,\"image-object-fit\"],\"images\":[513],\"imageSize\":[513,\"image-size\"],\"imageSrc\":[513,\"image-src\"],\"lazy\":[516],\"lazyLoadPrevNext\":[514,\"lazy-load-prev-next\"],\"loop\":[516],\"maxHeight\":[513,\"max-height\"],\"navigation\":[516],\"navigationBackdropFilter\":[513,\"navigation-backdrop-filter\"],\"navigationBackground\":[513,\"navigation-background\"],\"navigationBackgroundHover\":[513,\"navigation-background-hover\"],\"navigationBorderRadius\":[513,\"navigation-border-radius\"],\"navigationColor\":[513,\"navigation-color\"],\"navigationDistanceX\":[513,\"navigation-distance-x\"],\"navigationIconNext\":[513,\"navigation-icon-next\"],\"navigationIconPrev\":[513,\"navigation-icon-prev\"],\"navigationIconType\":[513,\"navigation-icon-type\"],\"navigationPadding\":[513,\"navigation-padding\"],\"navigationSize\":[513,\"navigation-size\"],\"pagination\":[513],\"paginationBackdropFilter\":[513,\"pagination-backdrop-filter\"],\"paginationBackground\":[513,\"pagination-background\"],\"paginationBulletsBackground\":[513,\"pagination-bullets-background\"],\"paginationBulletsBackgroundActive\":[513,\"pagination-bullets-background-active\"],\"paginationBulletsClickable\":[516,\"pagination-bullets-clickable\"],\"paginationBulletsDynamic\":[516,\"pagination-bullets-dynamic\"],\"paginationBulletsDynamicAmount\":[514,\"pagination-bullets-dynamic-amount\"],\"paginationBulletsGap\":[513,\"pagination-bullets-gap\"],\"paginationBulletsSize\":[513,\"pagination-bullets-size\"],\"prevNextFilter\":[513,\"prev-next-filter\"],\"slideMessageFirst\":[513,\"slide-message-first\"],\"slideMessageLast\":[513,\"slide-message-last\"],\"slideMessageNext\":[513,\"slide-message-next\"],\"slideMessagePrevious\":[513,\"slide-message-previous\"],\"slidesPerView\":[514,\"slides-per-view\"],\"start\":[514],\"speed\":[514],\"content\":[32],\"counter\":[32],\"imagesArray\":[32],\"swiperBreakpoints\":[32],\"swiperStyle\":[32]}]]],[\"spx-edit\",[[1,\"spx-edit\",{\"editable\":[1540],\"name\":[513],\"outline\":[513],\"outlineFocus\":[513,\"outline-focus\"],\"placeholder\":[513],\"placeholderColor\":[513,\"placeholder-color\"],\"placeholderOpacity\":[513,\"placeholder-opacity\"],\"subfield\":[516],\"text\":[1],\"type\":[513],\"originalText\":[32],\"subfieldArray\":[32]},[[0,\"keydown\",\"onKeyDown\"],[4,\"spxEditButtonDiscard\",\"onClickDiscard\"],[4,\"spxEditButtonSave\",\"onClickSave\"],[0,\"keyup\",\"onClickKeyup\"]]]]],[\"spx-control-input\",[[1,\"spx-control-input\",{\"data\":[1],\"handleInput\":[16],\"label\":[1],\"min\":[2],\"max\":[2],\"placeholder\":[1],\"step\":[2],\"type\":[1],\"value\":[1025]}]]]]"), options);
});
