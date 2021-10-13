import { newSpecPage } from '@stencil/core/testing';
import { SpxOffset } from './spx-offset';

describe('Render offset with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxOffset],
      html: `<header style="height: 100px; width: 100%; position: fixed;">
              <spx-offset target="header"></spx-offset>
             </header>`,
    });
    expect(page.root).toEqualHtml(`
<spx-offset target="header" variable="" style="margin-top: 0px;">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </spx-offset>
`);
  });
});
