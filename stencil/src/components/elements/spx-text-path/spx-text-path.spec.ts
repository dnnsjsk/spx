import { newSpecPage } from '@stencil/core/testing';
import { SpxTextPath } from './spx-text-path';

describe('Render text-path with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxTextPath],
      html: `<spx-text-path></spx-text-path>`,
    });
    expect(page.root).toEqualHtml(`
<spx-text-path gap="-2%" start-offset="25%" text-color="#000000" text-font-size="clamp(20px, 3vw, 24px)" text-transform="default" style="--spx-text-path-text-color: #000000; --spx-text-path-text-font-size: clamp(20px, 3vw, 24px); --spx-text-path-text-transform: default;">
      <mock:shadow-root>
        <svg preserveAspectRatio="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" id="circlePath"></path>
            <path d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" id="circlePathInner"></path>
            <pattern height="100%" id="img" patternUnits="userSpaceOnUse" width="100%">
              <image height="100%" width="100%" x="0" y="0"></image>
            </pattern>
          </defs>
          <use fill="url(#img)" xlink:href="#circlePathInner"></use>
          <text class="text-path" dy="-2%">
            <textPath xlink:href="#circlePath" startOffset="25%"></textPath>
          </text>
        </svg>
      </mock:shadow-root>
    </spx-text-path>
`);
  });
});
