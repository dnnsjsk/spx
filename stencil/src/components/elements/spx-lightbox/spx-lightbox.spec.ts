import { newSpecPage } from '@stencil/core/testing';
import { SpxLightbox } from './spx-lightbox';

describe('Render lightbox with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxLightbox],
      html: `<spx-lightbox>
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
              <img src="https://source.unsplash.com/random" />
             </spx-lightbox>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
<spx-lightbox body-overflow="" close-button="" close-button-color="#ffffff" overlay-backdrop-filter="var(--spx-backdrop-filter)" overlay-background="rgba(0,0,0,0.8)" target="img">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <img data-index="0" src="https://source.unsplash.com/random">
      <img data-index="1" src="https://source.unsplash.com/random">
      <img data-index="2" src="https://source.unsplash.com/random">
    </spx-lightbox>
`);
  });
});
