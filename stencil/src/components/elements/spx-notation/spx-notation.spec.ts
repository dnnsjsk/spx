import { newSpecPage } from '@stencil/core/testing';
import { SpxNotation } from './spx-notation';

describe('Render notation with', function () {
  it('single element', async () => {
    const page = await newSpecPage({
      components: [SpxNotation],
      html: `<spx-notation
              color="#ff0000"
              type="box"
              multiline="false">
              Twee fam kogi swag banh mi before they sold out chillwave. 8-bit sustainable stumptown austin freegan, lyft
              godard vexillologist skateboard franzen shoreditch. Lo-fi cronut brooklyn put a bird on it gluten-free.
            </spx-notation>`,
    });
    const el = page.doc.querySelector('spx-notation');
    expect(el.querySelectorAll('svg path').length).toBe(4);
  });
});
