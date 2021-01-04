/**
 * Set up a mutation observer.
 */

export const mutationObserver = (element, options, functionToRun) => {
  const callback = (mutationsList) => {
    mutationsList.forEach(() => {
      functionToRun();
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(element, options);
};
