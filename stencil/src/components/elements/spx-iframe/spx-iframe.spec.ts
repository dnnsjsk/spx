import { newSpecPage } from '@stencil/core/testing';
import { SpxIframe } from './spx-iframe';

describe('Render iframe with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxIframe],
      html: `<spx-iframe></spx-iframe>`,
    });
    expect(page.root).toEqualHtml(`
<spx-iframe loader-background="var(--spx-color-gray-900)" loader-border-radius="var(--spx-border-radius)" loader-color="#ffffff" loader-padding="0.8em" min-height="400px" style="--spx-iframe-loader-background: var(--spx-color-gray-900); --spx-iframe-loader-border-radius: var(--spx-border-radius); --spx-iframe-loader-color: #ffffff; --spx-iframe-loader-padding: 0.8em; --spx-iframe-min-height: 400px;">
      <mock:shadow-root>
        <div class="inner">
          <iframe src="https://spx.dev" tabindex="-1" style="width: 1440px; display: none;"></iframe>
          <div class="loader">
            <spx-icon type="loader"></spx-icon>
          </div>
        </div>
      </mock:shadow-root>
    </spx-iframe>
`);
  });
});
