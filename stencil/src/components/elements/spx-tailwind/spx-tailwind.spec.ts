import { newSpecPage } from '@stencil/core/testing';
import { SpxTailwind } from './spx-tailwind';

describe('Render tailwind with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxTailwind],
      html: `<spx-tailwind>
              <div class="text-9xl">hi</div>
             </spx-text-path>`,
    });
    expect(page.root).toEqualHtml(`
<spx-tailwind>
      <mock:shadow-root>
        <div>
          <div class="text-9xl">
            hi
          </div>
        </div>
      </mock:shadow-root>
      <div class="text-9xl">
        hi
      </div>
    </spx-tailwind>
`);
  });
});
