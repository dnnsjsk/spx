import { newSpecPage } from '@stencil/core/testing';
import { SpxEditButton } from './spx-edit-button';

describe('Render edit-button with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxEditButton],
      html: `<spx-edit-button></spx-edit-button>`,
    });
    const el = page.doc.querySelector('spx-edit-button').shadowRoot;
    expect(el.querySelectorAll('button').length).toBe(1);
    expect(el.querySelector('button').innerHTML.trim()).toBe('Edit site');
  });
  it('different text', async () => {
    const page = await newSpecPage({
      components: [SpxEditButton],
      html: `<spx-edit-button 
              text-edit="Custom edit text">
             </spx-edit-button>`,
    });
    const el = page.doc.querySelector('spx-edit-button').shadowRoot;
    expect(el.querySelector('button').innerHTML.trim()).toBe(
      'Custom edit text'
    );
  });
  it('discard button showing', async () => {
    const page = await newSpecPage({
      components: [SpxEditButton],
      html: `<spx-edit-button
              open>
             </spx-edit-button>`,
    });
    const el = page.doc.querySelector('spx-edit-button').shadowRoot;
    expect(el.querySelectorAll('button').length).toBe(2);
  });
  it('discard button showing with different text', async () => {
    const page = await newSpecPage({
      components: [SpxEditButton],
      html: `<spx-edit-button
              open
              text-discard="Discard test">
             </spx-edit-button>`,
    });
    const el = page.doc.querySelector('spx-edit-button').shadowRoot;
    expect(el.querySelectorAll('button').length).toBe(2);
    expect(el.querySelector('button').innerHTML.trim()).toBe('Discard test');
  });
  it('slots', async () => {
    const page = await newSpecPage({
      components: [SpxEditButton],
      html: `<spx-edit-button open>
                <h1 slot="save">Test</h1></slot>
                <h1 slot="discard">Test</h1></slot>
             </spx-edit-button>`,
    });
    const el = page.doc.querySelector('spx-edit-button');
    expect(el.querySelectorAll('h1').length).toBe(2);
  });
});
