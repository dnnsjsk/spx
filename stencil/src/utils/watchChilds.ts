/**
 *  Watch nodes being added.
 */

export const watchChilds = (el) => {
  const targetNode = el;

  const config = { childList: true };

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        el.restart();
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
};
