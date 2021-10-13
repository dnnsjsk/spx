import { newSpecPage } from '@stencil/core/testing';
import { SpxMasonry } from './spx-masonry';
import { setData } from '../../../test/setData';

describe('Render masonry with', function () {
  it('inner children', async () => {
    const page = await newSpecPage({
      components: [SpxMasonry],
      html: `<spx-masonry>
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
             </spx-masonry>`,
    });
    const el = page.doc.querySelector('spx-masonry').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(10);
  });

  it("'images' ACF prop", async () => {
    const page = await newSpecPage({
      components: [SpxMasonry],
      html: `<spx-masonry
              images='${setData('acf')}'
              image-src="acf">
             </spx-masonry>`,
    });
    const el = page.doc.querySelector('spx-masonry').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("encoded 'images' ACF prop", async () => {
    const page = await newSpecPage({
      components: [SpxMasonry],
      html: `<spx-masonry
              images='${setData('acf-encode')}'
              image-src="acf">
             </spx-masonry>`,
    });
    const el = page.doc.querySelector('spx-masonry').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("'images' MB prop", async () => {
    const page = await newSpecPage({
      components: [SpxMasonry],
      html: `<spx-masonry
              images='${setData('mb')}'
              image-src="mb">
             </spx-masonry>`,
    });
    const el = page.doc.querySelector('spx-masonry').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("encoded 'images' MB prop", async () => {
    const page = await newSpecPage({
      components: [SpxMasonry],
      html: `<spx-masonry
              images='${setData('mb-encode')}'
              image-src="mb">
             </spx-masonry>`,
    });
    const el = page.doc.querySelector('spx-masonry').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });
});
