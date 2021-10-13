import { newSpecPage } from '@stencil/core/testing';
import { SpxNavigation } from './spx-navigation';
import { setData } from '../../../test/setData';

describe('Render navigation with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxNavigation],
      html: `<spx-navigation
              menu='${setData('menu')}'>
             </spx-navigation>`,
    });
    const el = page.doc.querySelector('spx-navigation').shadowRoot;
    expect(el.querySelectorAll('li').length).toBe(34);
  });
});
