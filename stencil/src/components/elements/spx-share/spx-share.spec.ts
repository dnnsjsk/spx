import { newSpecPage } from '@stencil/core/testing';
import { SpxShare } from './spx-share';

describe('Render share with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxShare],
      html: `<spx-share></spx-share>`,
    });
    const el = page.doc.querySelector('spx-share').shadowRoot;
    expect(el.querySelectorAll('a').length).toBe(4);
  });
});
