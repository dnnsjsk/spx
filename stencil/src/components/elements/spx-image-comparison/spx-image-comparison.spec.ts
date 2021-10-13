import { newSpecPage } from '@stencil/core/testing';
import { SpxImageComparison } from './spx-image-comparison';

describe('Render image-comparison with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxImageComparison],
      html: `<spx-image-comparison></spx-image-comparison>`,
    });
    expect(page.root).toEqualHtml(`
<spx-image-comparison color="#ffffff" height="100%" icon-color="var(--spx-color-gray-900)" src-after="https://source.unsplash.com/random/1200x300" src-before="https://source.unsplash.com/random/1201x300" start="150" steps="10" style="--spx-image-comparison-color: #ffffff; --spx-image-comparison-height: 100%; --spx-image-comparison-icon-color: var(--spx-color-gray-900);">
      <mock:shadow-root>
        <div class="inner">
          <div class="container">
            <img alt="before" src="https://source.unsplash.com/random/1201x300">
          </div>
          <div class="container container--after" style="width: NaNpx;">
            <img alt="after" src="https://source.unsplash.com/random/1200x300">
          </div>
          <button as="button" class="scroller" style="text-align: left; left: NaNpx;">
            <div class="thumb">
              <spx-icon icon="resize" size="32px"></spx-icon>
            </div>
          </button>
        </div>
      </mock:shadow-root>
    </spx-image-comparison>
`);
  });
});
