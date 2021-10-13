const mutatationObserverMock = jest
  // eslint-disable-next-line no-undef
  .fn<MutationObserver, [MutationCallback]>()
  .mockImplementation(() => {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
      takeRecords: jest.fn(),
    };
  });
global.MutationObserver = mutatationObserverMock;

new MutationObserver(() => {}).observe(document, {});

const observerCb = mutatationObserverMock.mock.calls[0][0];
observerCb([], mutatationObserverMock.mock.instances[0]);
