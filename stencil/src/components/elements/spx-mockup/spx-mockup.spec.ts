import { newSpecPage } from '@stencil/core/testing';
import { SpxMockup } from './spx-mockup';

describe('Render mockup with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxMockup],
      html: `<spx-mockup></spx-mockup>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
<spx-mockup color-galaxy-s-8="black" color-google-pixel="silver" color-ipad-pro="silver" color-iphone-8="silver" color-macbook="silver" color-macbook-pro="silver" image-position="50% 50%" size-max="0.6" size-min="0.3" type="iphone-8" style="--spx-mockup-image-position: 50% 50%;">
      <mock:shadow-root>
        <div class="inner spx-mockup-wrap" style="height: NaNpx; width: NaNpx;">
          <div class="spx-mockup spx-mockup-iphone-8 spx-mockup-silver" style="transform: scale(0.5430803571428571);">
            <div class="spx-mockup-frame">
              <div class="spx-mockup-content">
                <div></div>
              </div>
            </div>
            <div class="spx-mockup-stripe"></div>
            <div class="spx-mockup-header"></div>
            <div class="spx-mockup-sensors"></div>
            <div class="spx-mockup-btns"></div>
            <div class="spx-mockup-power"></div>
          </div>
        </div>
      </mock:shadow-root>
    </spx-mockup>
`);
  });
});
