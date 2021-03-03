import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-889edf71.js';
import { g as globalScripts } from './app-globals-ecd675fd.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
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
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
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
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-fb6a473e.js').then(() => opts);
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
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
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
  return bootstrapLazy(JSON.parse("[[\"spx-edit-button\",[[4,\"spx-edit-button\",{\"test\":[4],\"background\":[513],\"backgroundDiscard\":[513,\"background-discard\"],\"border\":[513],\"borderRadius\":[513,\"border-radius\"],\"classButton\":[513,\"class-button\"],\"classButtonDiscard\":[513,\"class-button-discard\"],\"classLoader\":[513,\"class-loader\"],\"color\":[513],\"colorDiscard\":[513,\"color-discard\"],\"distanceX\":[513,\"distance-x\"],\"distanceY\":[513,\"distance-y\"],\"editId\":[513,\"edit-id\"],\"fontFamily\":[513,\"font-family\"],\"fontSize\":[513,\"font-size\"],\"fontSizeMin\":[514,\"font-size-min\"],\"fontSizeMax\":[514,\"font-size-max\"],\"gap\":[513],\"padding\":[513],\"paddingXMin\":[514,\"padding-x-min\"],\"paddingXMax\":[514,\"padding-x-max\"],\"paddingYMin\":[514,\"padding-y-min\"],\"paddingYMax\":[514,\"padding-y-max\"],\"position\":[513],\"positionCss\":[513,\"position-css\"],\"styling\":[513],\"textDiscard\":[513,\"text-discard\"],\"textEdit\":[513,\"text-edit\"],\"textSave\":[513,\"text-save\"],\"textSuccess\":[513,\"text-success\"],\"zIndex\":[514,\"z-index\"],\"loading\":[32],\"open\":[32],\"positionArray\":[32],\"discard\":[64],\"edit\":[64],\"reload\":[64],\"save\":[64]}]]],[\"spx-accordion\",[[4,\"spx-accordion\",{\"classContent\":[513,\"class-content\"],\"classContentActive\":[513,\"class-content-active\"],\"classContentInactive\":[513,\"class-content-inactive\"],\"classContentText\":[513,\"class-content-text\"],\"classContentTextActive\":[513,\"class-content-text-active\"],\"classContentTextInactive\":[513,\"class-content-text-inactive\"],\"classHeader\":[513,\"class-header\"],\"classHeaderActive\":[513,\"class-header-active\"],\"classHeaderInactive\":[513,\"class-header-inactive\"],\"classHeaderText\":[513,\"class-header-text\"],\"classHeaderTextActive\":[513,\"class-header-text-active\"],\"classHeaderTextInactive\":[513,\"class-header-text-inactive\"],\"classHeaderIcon\":[513,\"class-header-icon\"],\"classHeaderIconActive\":[513,\"class-header-icon-active\"],\"classHeaderIconInactive\":[513,\"class-header-icon-inactive\"],\"classHeaderIconContainer\":[513,\"class-header-icon-container\"],\"classHeaderIconContainerActive\":[513,\"class-header-icon-container-active\"],\"classHeaderIconContainerInactive\":[513,\"class-header-icon-container-inactive\"],\"contentColor\":[513,\"content-color\"],\"contentText\":[513,\"content-text\"],\"contentTextTag\":[513,\"content-text-tag\"],\"contentTransitionDuration\":[513,\"content-transition-duration\"],\"contentTransitionTimingFunction\":[513,\"content-transition-timing-function\"],\"disableAnimation\":[516,\"disable-animation\"],\"fontSize\":[513,\"font-size\"],\"fontSizeMin\":[514,\"font-size-min\"],\"fontSizeMax\":[514,\"font-size-max\"],\"gap\":[513],\"gapMin\":[514,\"gap-min\"],\"gapMax\":[514,\"gap-max\"],\"headerColor\":[513,\"header-color\"],\"headerGap\":[513,\"header-gap\"],\"headerGapMin\":[514,\"header-gap-min\"],\"headerGapMax\":[514,\"header-gap-max\"],\"headerText\":[513,\"header-text\"],\"headerTextOpen\":[513,\"header-text-open\"],\"headerTextTag\":[513,\"header-text-tag\"],\"indicatorIcon\":[513,\"indicator-icon\"],\"indicatorIconType\":[513,\"indicator-icon-type\"],\"indicatorIconTransform\":[513,\"indicator-icon-transform\"],\"link\":[513],\"linkType\":[513,\"link-type\"],\"openState\":[516,\"open\"],\"reverse\":[516],\"styling\":[513],\"contentCustom\":[32],\"headerCustom\":[32],\"headerHeight\":[32],\"close\":[64],\"open\":[64],\"reload\":[64],\"toggle\":[64]},[[0,\"keydown\",\"onKeydown\"]]]]],[\"spx-image-comparison\",[[0,\"spx-image-comparison\",{\"color\":[513],\"height\":[513],\"iconColor\":[513,\"icon-color\"],\"loading\":[513],\"srcAfter\":[513,\"src-after\"],\"srcBefore\":[513,\"src-before\"],\"start\":[514],\"active\":[32],\"width\":[32],\"reload\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-navigation\",[[0,\"spx-navigation\",{\"childBorder\":[513,\"child-border\"],\"childBorderRadius\":[513,\"child-border-radius\"],\"childBoxShadow\":[513,\"child-box-shadow\"],\"childChildGap\":[513,\"child-child-gap\"],\"childGap\":[513,\"child-gap\"],\"childIcon\":[513,\"child-icon\"],\"childIconType\":[513,\"child-icon-type\"],\"childIndicatorGap\":[513,\"child-indicator-gap\"],\"childItemBackground\":[513,\"child-item-background\"],\"childItemBackgroundHover\":[513,\"child-item-background-hover\"],\"childItemColor\":[513,\"child-item-color\"],\"childItemColorHover\":[513,\"child-item-color-hover\"],\"childItemPadding\":[513,\"child-item-padding\"],\"childPlacement\":[513,\"child-placement\"],\"fontSize\":[513,\"font-size\"],\"itemTransitionDuration\":[513,\"item-transition-duration\"],\"itemTransitionTimingFunction\":[513,\"item-transition-timing-function\"],\"itemUnderline\":[516,\"item-underline\"],\"itemUnderlineHover\":[516,\"item-underline-hover\"],\"menu\":[513],\"mobile\":[514],\"mobileIcon\":[513,\"mobile-icon\"],\"mobileIconType\":[513,\"mobile-icon-type\"],\"mobileItemBackground\":[513,\"mobile-item-background\"],\"mobileItemBackgroundHover\":[513,\"mobile-item-background-hover\"],\"mobileItemColor\":[513,\"mobile-item-color\"],\"mobileItemColorHover\":[513,\"mobile-item-color-hover\"],\"mobileItemNestedMarginLeft\":[513,\"mobile-item-nested-margin-left\"],\"mobileItemPadding\":[513,\"mobile-item-padding\"],\"mobilePlacement\":[513,\"mobile-placement\"],\"parentItemBackground\":[513,\"parent-item-background\"],\"parentItemBackgroundHover\":[513,\"parent-item-background-hover\"],\"parentItemColor\":[513,\"parent-item-color\"],\"parentItemColorHover\":[513,\"parent-item-color-hover\"],\"parentItemGap\":[513,\"parent-item-gap\"],\"parentItemPadding\":[513,\"parent-item-padding\"],\"vertical\":[516],\"menuArray\":[32],\"mobileBp\":[32],\"reload\":[64]},[[0,\"ontouchstart\",\"onClick\"],[1,\"mouseenter\",\"onClick\"],[0,\"focusin\",\"onClick\"],[9,\"resize\",\"onResize\"]]]]],[\"spx-share\",[[0,\"spx-share\",{\"classItem\":[513,\"class-item\"],\"fontSize\":[513,\"font-size\"],\"fontSizeMin\":[514,\"font-size-min\"],\"fontSizeMax\":[514,\"font-size-max\"],\"itemBackground\":[513,\"item-background\"],\"itemBorderRadius\":[513,\"item-border-radius\"],\"itemColor\":[513,\"item-color\"],\"itemFilterHover\":[513,\"item-filter-hover\"],\"itemGap\":[513,\"item-gap\"],\"itemGapMin\":[514,\"item-gap-min\"],\"itemGapMax\":[514,\"item-gap-max\"],\"itemPadding\":[513,\"item-padding\"],\"itemPaddingMin\":[514,\"item-padding-min\"],\"itemPaddingMax\":[514,\"item-padding-max\"],\"itemSize\":[513,\"item-size\"],\"itemSizeMin\":[514,\"item-size-min\"],\"itemSizeMax\":[514,\"item-size-max\"],\"itemTransitionDuration\":[513,\"item-transition-duration\"],\"itemTransitionTimingFunction\":[513,\"item-transition-timing-function\"],\"styling\":[513],\"target\":[513],\"theme\":[513],\"vertical\":[516],\"location\":[32],\"reload\":[64]}]]],[\"spx-slider\",[[4,\"spx-slider\",{\"autoheight\":[516],\"autoplay\":[516],\"autoplayDelay\":[514,\"autoplay-delay\"],\"autoplayDisableOnInteraction\":[516,\"autoplay-disable-on-interaction\"],\"bpTabs\":[513,\"bp-tabs\"],\"centeredSlides\":[516,\"centered-slides\"],\"direction\":[513],\"effect\":[513],\"imageObjectFit\":[513,\"image-object-fit\"],\"imageSize\":[513,\"image-size\"],\"images\":[513],\"imagesSrc\":[513,\"images-src\"],\"loop\":[516],\"maxHeight\":[513,\"max-height\"],\"maxWidth\":[513,\"max-width\"],\"navigation\":[516],\"navigationBackground\":[513,\"navigation-background\"],\"navigationBorderRadius\":[513,\"navigation-border-radius\"],\"navigationColor\":[513,\"navigation-color\"],\"navigationDistanceX\":[513,\"navigation-distance-x\"],\"navigationIconNext\":[513,\"navigation-icon-next\"],\"navigationIconPrev\":[513,\"navigation-icon-prev\"],\"navigationIconType\":[513,\"navigation-icon-type\"],\"navigationPadding\":[513,\"navigation-padding\"],\"navigationSize\":[513,\"navigation-size\"],\"pagination\":[513],\"paginationBulletsBackground\":[513,\"pagination-bullets-background\"],\"paginationBulletsBackgroundActive\":[513,\"pagination-bullets-background-active\"],\"paginationBulletsClickable\":[516,\"pagination-bullets-clickable\"],\"paginationBulletsDynamic\":[516,\"pagination-bullets-dynamic\"],\"paginationBulletsDynamicAmount\":[514,\"pagination-bullets-dynamic-amount\"],\"paginationBulletsSize\":[513,\"pagination-bullets-size\"],\"paginationBulletsSpaceBetween\":[513,\"pagination-bullets-space-between\"],\"paginationTabsGapMin\":[514,\"pagination-tabs-gap-min\"],\"paginationTabsGapMax\":[514,\"pagination-tabs-gap-max\"],\"paginationTabsMarginBottomMin\":[514,\"pagination-tabs-margin-bottom-min\"],\"paginationTabsMarginBottomMax\":[514,\"pagination-tabs-margin-bottom-max\"],\"paginationTabsMaxWidth\":[513,\"pagination-tabs-max-width\"],\"paginationTabsInnerGapMin\":[514,\"pagination-tabs-inner-gap-min\"],\"paginationTabsInnerGapMax\":[514,\"pagination-tabs-inner-gap-max\"],\"paginationTabsPaddingMin\":[514,\"pagination-tabs-padding-min\"],\"paginationTabsPaddingMax\":[514,\"pagination-tabs-padding-max\"],\"paginationTransitionDuration\":[513,\"pagination-transition-duration\"],\"paginationTransitionTimingFunction\":[513,\"pagination-transition-timing-function\"],\"prevNextFilter\":[513,\"prev-next-filter\"],\"slideMessageFirst\":[513,\"slide-message-first\"],\"slideMessageLast\":[513,\"slide-message-last\"],\"slideMessageNext\":[513,\"slide-message-next\"],\"slideMessagePrevious\":[513,\"slide-message-previous\"],\"slidesPerView\":[514,\"slides-per-view\"],\"spaceBetween\":[514,\"space-between\"],\"speed\":[514],\"imagesArray\":[32],\"mySwiper\":[32],\"mySwiperGallery\":[32],\"swiperBreakpoints\":[32],\"reload\":[64]}]]],[\"spx-docs\",[[4,\"spx-docs\",{\"bpMobile\":[514,\"bp-mobile\"],\"gap\":[513],\"contentPadding\":[513,\"content-padding\"],\"contentPaddingYMin\":[514,\"content-padding-y-min\"],\"contentPaddingYMax\":[514,\"content-padding-y-max\"],\"navigationBackground\":[513,\"navigation-background\"],\"navigationGap\":[513,\"navigation-gap\"],\"navigationGapMin\":[514,\"navigation-gap-min\"],\"navigationGapMax\":[514,\"navigation-gap-max\"],\"navigationHeadingTag\":[513,\"navigation-heading-tag\"],\"navigationHeightAdjust\":[513,\"navigation-height-adjust\"],\"navigationLinkColor\":[513,\"navigation-link-color\"],\"navigationLinkColorActive\":[513,\"navigation-link-color-active\"],\"navigationLinkFontSize\":[520,\"navigation-link-font-size\"],\"navigationLinkFontSizeMin\":[514,\"navigation-link-font-size-min\"],\"navigationLinkFontSizeMax\":[514,\"navigation-link-font-size-max\"],\"navigationLinkFontWeight\":[513,\"navigation-link-font-weight\"],\"navigationLinkLetterSpacing\":[513,\"navigation-link-letter-spacing\"],\"navigationLinkLineHeight\":[513,\"navigation-link-line-height\"],\"navigationLinkTextTransform\":[513,\"navigation-link-text-transform\"],\"navigationPaddingY\":[513,\"navigation-padding-y\"],\"navigationPaddingYMin\":[514,\"navigation-padding-y-min\"],\"navigationPaddingYMax\":[514,\"navigation-padding-y-max\"],\"navigationTitleColor\":[513,\"navigation-title-color\"],\"navigationTitleFontSize\":[520,\"navigation-title-font-size\"],\"navigationTitleFontSizeMin\":[514,\"navigation-title-font-size-min\"],\"navigationTitleFontSizeMax\":[514,\"navigation-title-font-size-max\"],\"navigationTitleFontWeight\":[513,\"navigation-title-font-weight\"],\"navigationTitleLetterSpacing\":[513,\"navigation-title-letter-spacing\"],\"navigationTitleLineHeight\":[513,\"navigation-title-line-height\"],\"navigationTitleTextTransform\":[513,\"navigation-title-text-transform\"],\"navigationTitleMarginBottom\":[514,\"navigation-title-margin-bottom\"],\"navigationTitleMarginBottomMin\":[514,\"navigation-title-margin-bottom-min\"],\"navigationTitleMarginBottomMax\":[514,\"navigation-title-margin-bottom-max\"],\"navigationTop\":[513,\"navigation-top\"],\"offsetMarginTop\":[513,\"offset-margin-top\"],\"styling\":[513],\"uniqueId\":[516,\"unique-id\"],\"mobile\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-iframe\",[[4,\"spx-iframe\",{\"display\":[513],\"documentBorder\":[513,\"document-border\"],\"documentBorderRadius\":[513,\"document-border-radius\"],\"documentHeight\":[513,\"document-height\"],\"documentWidth\":[513,\"document-width\"],\"fit\":[4],\"lazy\":[4],\"size\":[1],\"src\":[1],\"type\":[1],\"height\":[32],\"loaded\":[32],\"parent\":[32],\"parentHeight\":[32],\"width\":[32],\"reload\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-animate\",[[4,\"spx-animate\",{\"delay\":[2],\"duration\":[2],\"ease\":[1],\"once\":[4],\"opacity\":[2],\"repeat\":[2],\"repeatDelay\":[2,\"repeat-delay\"],\"reverse\":[4],\"stagger\":[2],\"target\":[1],\"viewport\":[4],\"viewportMarginBottom\":[1,\"viewport-margin-bottom\"],\"viewportMarginLeft\":[1,\"viewport-margin-left\"],\"viewportMarginRight\":[1,\"viewport-margin-right\"],\"viewportMarginTop\":[1,\"viewport-margin-top\"],\"x\":[2],\"y\":[2],\"yoyo\":[4],\"display\":[513],\"elements\":[32],\"tl\":[32],\"play\":[64],\"reload\":[64],\"restart\":[64]}]]],[\"spx-class-toggle\",[[4,\"spx-class-toggle\",{\"display\":[513],\"local\":[513],\"target\":[513],\"toggle\":[513],\"classesArray\":[32],\"toggled\":[32],\"reload\":[64]}]]],[\"spx-code\",[[36,\"spx-code\",{\"background\":[513],\"borderRadius\":[513,\"border-radius\"],\"clipboard\":[516],\"clipboardButtonBackground\":[513,\"clipboard-button-background\"],\"clipboardButtonColor\":[513,\"clipboard-button-color\"],\"clipboardButtonFontSize\":[513,\"clipboard-button-font-size\"],\"clipboardButtonFontWeight\":[520,\"clipboard-button-font-weight\"],\"clipboardButtonPadding\":[513,\"clipboard-button-padding\"],\"clipboardButtonText\":[513,\"clipboard-button-text\"],\"clipboardButtonTextCopied\":[513,\"clipboard-button-text-copied\"],\"clipboardButtonTextTransform\":[513,\"clipboard-button-text-transform\"],\"display\":[513],\"fontSize\":[513,\"font-size\"],\"height\":[513],\"lazy\":[516],\"lineNumbers\":[516,\"line-numbers\"],\"lineNumbersBackground\":[513,\"line-numbers-background\"],\"lineNumbersColor\":[513,\"line-numbers-color\"],\"lineNumbersStart\":[514,\"line-numbers-start\"],\"maxWidth\":[513,\"max-width\"],\"overflow\":[513],\"padding\":[513],\"scrollbar\":[516],\"theme\":[513],\"type\":[513],\"reload\":[64]}]]],[\"spx-group\",[[4,\"spx-group\",{\"display\":[513],\"target\":[513],\"reload\":[64]}]]],[\"spx-lightbox\",[[0,\"spx-lightbox\",{\"display\":[513],\"height\":[513],\"overlayColor\":[513,\"overlay-color\"],\"width\":[513],\"reload\":[64]}]]],[\"spx-masonry\",[[4,\"spx-masonry\",{\"bpColumns\":[513,\"bp-columns\"],\"columns\":[514],\"gap\":[513],\"imageSize\":[513,\"image-size\"],\"images\":[513],\"imagesSrc\":[513,\"images-src\"],\"bpColumnsObject\":[32],\"imagesArray\":[32],\"macyState\":[32],\"recalc\":[64],\"reload\":[64]}]]],[\"spx-mockup\",[[4,\"spx-mockup\",{\"colorGalaxyS8\":[513,\"color-galaxy-s-8\"],\"colorGooglePixel\":[513,\"color-google-pixel\"],\"colorIpadPro\":[513,\"color-ipad-pro\"],\"colorIphone8\":[513,\"color-iphone-8\"],\"colorMacbook\":[513,\"color-macbook\"],\"colorMacbookPro\":[513,\"color-macbook-pro\"],\"display\":[513],\"imagePosition\":[513,\"image-position\"],\"src\":[513],\"type\":[513],\"height\":[32],\"innerElId\":[32],\"mockup\":[32],\"outerElId\":[32],\"parent\":[32],\"parentHeight\":[32],\"width\":[32],\"reload\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-notation\",[[4,\"spx-notation\",{\"animation\":[516],\"animationDuration\":[514,\"animation-duration\"],\"color\":[513],\"display\":[513],\"iterations\":[514],\"multiline\":[516],\"strokeWidth\":[514,\"stroke-width\"],\"type\":[513],\"annotation\":[32],\"clear\":[64],\"hide\":[64],\"reload\":[64],\"show\":[64]}]]],[\"spx-offset\",[[4,\"spx-offset\",{\"display\":[513],\"target\":[513],\"recalc\":[64],\"reload\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-slideshow\",[[4,\"spx-slideshow\",{\"display\":[513],\"duration\":[513],\"gap\":[513],\"images\":[513],\"imageSize\":[513,\"image-size\"],\"imagesSrc\":[513,\"images-src\"],\"maxWidth\":[513,\"max-width\"],\"overflow\":[513],\"imagesArray\":[32],\"offsetWidth\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"spx-typewriter\",[[0,\"spx-typewriter\",{\"autoStart\":[516,\"auto-start\"],\"delay\":[520],\"deleteSpeed\":[520,\"delete-speed\"],\"display\":[513],\"loop\":[516],\"text\":[513],\"typewriter\":[32],\"play\":[64],\"stop\":[64]}]]],[\"spx-snackbar\",[[4,\"spx-snackbar\",{\"animationDelay\":[513,\"animation-delay\"],\"animationDuration\":[513,\"animation-duration\"],\"background\":[513],\"border\":[513],\"borderRadius\":[513,\"border-radius\"],\"classButton\":[513,\"class-button\"],\"classText\":[513,\"class-text\"],\"closeable\":[516],\"color\":[513],\"distanceX\":[513,\"distance-x\"],\"distanceY\":[513,\"distance-y\"],\"fixed\":[516],\"fontSize\":[513,\"font-size\"],\"fontSizeMin\":[514,\"font-size-min\"],\"fontSizeMax\":[514,\"font-size-max\"],\"identifier\":[513],\"padding\":[513],\"paddingMin\":[514,\"padding-min\"],\"paddingMax\":[514,\"padding-max\"],\"position\":[513],\"positionCss\":[513,\"position-css\"],\"reverse\":[516],\"spaceBetween\":[513,\"space-between\"],\"styling\":[513],\"target\":[513],\"text\":[513],\"zIndex\":[514,\"z-index\"],\"containerClass\":[32],\"positionArray\":[32],\"reload\":[64]}]]],[\"spx-edit\",[[4,\"spx-edit\",{\"display\":[513],\"name\":[513],\"outline\":[513],\"outlineFocus\":[513,\"outline-focus\"],\"placeholder\":[513],\"placeholderColor\":[513,\"placeholder-color\"],\"placeholderOpacity\":[513,\"placeholder-opacity\"],\"subfield\":[516],\"type\":[513],\"editable\":[516],\"originalText\":[32],\"subfieldArray\":[32]},[[0,\"keydown\",\"onClickEnter\"],[4,\"spxEditButtonDiscard\",\"onClickDiscard\"],[4,\"spxEditButtonSave\",\"onClickSave\"],[0,\"keyup\",\"onClickKeyup\"]]]]],[\"spx-scrollspy\",[[0,\"spx-scrollspy\",{\"contentClass\":[513,\"content-class\"],\"display\":[513],\"navClass\":[513,\"nav-class\"],\"offset\":[520],\"scrolling\":[516],\"scrollingOffset\":[514,\"scrolling-offset\"],\"target\":[513],\"urlChange\":[516,\"url-change\"],\"myGumshoe\":[32],\"reload\":[64]},[[4,\"gumshoeActivate\",\"onLinkChange\"]]]]],[\"spx-loader\",[[0,\"spx-loader\",{\"color\":[513],\"speed\":[513]}]]],[\"ion-icon\",[[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ariaHidden\":[513,\"aria-hidden\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[\"spx-icon\",[[0,\"spx-icon\",{\"color\":[513],\"icon\":[513],\"type\":[513],\"size\":[513],\"sizeMin\":[514,\"size-min\"],\"sizeMax\":[514,\"size-max\"],\"styling\":[513]}]]]]"), options);
});
