import { newSpecPage } from '@stencil/core/testing';
import { SpxGroup } from './spx-group';

describe('Render group with', function () {
  it('three icons inside', async () => {
    const page = await newSpecPage({
      components: [SpxGroup],
      html: `<spx-group 
              g-icon="close">
                <spx-icon></spx-icon>
                <spx-icon></spx-icon>
                <spx-icon></spx-icon>
             </spx-group>`,
    });
    const el = page.doc.querySelector('spx-group');
    await page.waitForChanges();
    expect(el.querySelectorAll('spx-icon[icon="close"]').length).toBe(3);
  });
});
