import { newSpecPage } from '@stencil/core/testing';
import { SpxTypewriter } from './spx-typewriter';

describe('Render typewriter with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxTypewriter],
      html: `<spx-typewriter></spx-typewriter>`,
    });
    expect(page.root).toEqualHtml(`
<spx-typewriter auto-start="" delay="natural" delete-speed="natural" text="I'm a typewriter">
      <mock:shadow-root>
        <div>
          <span class="wrapper"></span>
          <span class="cursor">
            |
          </span>
        </div>
      </mock:shadow-root>
    </spx-typewriter>
`);
  });
});
