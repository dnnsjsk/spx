import { newSpecPage } from '@stencil/core/testing';
import { SpxClassToggle } from './spx-class-toggle';

describe('Render class-toggle with', function () {
  it("single 'toggle' prop", async () => {
    const page = await newSpecPage({
      components: [SpxClassToggle],
      html: `<spx-class-toggle 
              toggle="test">
                <h1>Test</h1>
             </spx-class-toggle>`,
    });
    const el = page.doc.querySelector('spx-class-toggle');
    const h1 = el.querySelector('h1');
    el.click();
    await page.waitForChanges();
    expect(h1.classList.contains('test')).toBe(true);
  });
  it("multiple 'toggle' props", async () => {
    const page = await newSpecPage({
      components: [SpxClassToggle],
      html: `<spx-class-toggle 
              toggle="test test2">
                <h1>Test</h1>
             </spx-class-toggle>`,
    });
    const el = page.doc.querySelector('spx-class-toggle');
    const h1 = el.querySelector('h1');
    el.click();
    await page.waitForChanges();
    expect(h1.classList.contains('test')).toBe(true);
    expect(h1.classList.contains('test2')).toBe(true);
  });
  it("existing class and multiple 'toggle' props", async () => {
    const page = await newSpecPage({
      components: [SpxClassToggle],
      html: `<spx-class-toggle 
              toggle="test test2">
                <h1 class="test">Test</h1>
             </spx-class-toggle>`,
    });
    const el = page.doc.querySelector('spx-class-toggle');
    const h1 = el.querySelector('h1');
    el.click();
    await page.waitForChanges();
    expect(h1.classList.contains('test')).toBe(false);
    expect(h1.classList.contains('test2')).toBe(true);
  });
});
