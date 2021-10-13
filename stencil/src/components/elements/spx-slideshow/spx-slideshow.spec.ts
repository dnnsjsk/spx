import { newSpecPage } from '@stencil/core/testing';
import { SpxSlideshow } from './spx-slideshow';
import { setData } from '../../../test/setData';

describe('Render slideshow with', function () {
  it('inner children', async () => {
    const page = await newSpecPage({
      components: [SpxSlideshow],
      html: `<spx-slideshow>
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
             </spx-slideshow>`,
    });
    const el = page.doc.querySelector('spx-slideshow').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(10);
  });

  it("'images' ACF prop", async () => {
    const page = await newSpecPage({
      components: [SpxSlideshow],
      html: `<spx-slideshow
              images='${setData('acf')}'
              image-src="acf">
             </spx-slideshow>`,
    });
    const el = page.doc.querySelector('spx-slideshow').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("encoded 'images' ACF prop", async () => {
    const page = await newSpecPage({
      components: [SpxSlideshow],
      html: `<spx-slideshow
              images='${setData('acf-encode')}'
              image-src="acf">
             </spx-slideshow>`,
    });
    const el = page.doc.querySelector('spx-slideshow').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("'images' MB prop", async () => {
    const page = await newSpecPage({
      components: [SpxSlideshow],
      html: `<spx-slideshow
              images='${setData('mb')}'
              image-src="mb">
             </spx-slideshow>`,
    });
    const el = page.doc.querySelector('spx-slideshow').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });

  it("encoded 'images' MB prop", async () => {
    const page = await newSpecPage({
      components: [SpxSlideshow],
      html: `<spx-slideshow
              images='${setData('mb-encode')}'
              image-src="mb">
             </spx-slideshow>`,
    });
    const el = page.doc.querySelector('spx-slideshow').shadowRoot;
    expect(el.querySelectorAll('img').length).toBe(12);
  });
});
