import { newSpecPage } from '@stencil/core/testing';
import { SpxAccordion } from './spx-accordion';

describe('Render accordion with', function () {
  it('default props', async () => {
    const page = await newSpecPage({
      components: [SpxAccordion],
      html: `<spx-accordion></spx-accordion>`,
    });
    const header = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.header span');
    const content = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.content span');
    expect(header.innerHTML.trim()).toBe('Default Header Text');
    expect(content.innerHTML.trim()).toBe('Default Content Text');
  });
  it('custom content props', async () => {
    const page = await newSpecPage({
      components: [SpxAccordion],
      html: `<spx-accordion 
              header-text="Custom Header Text" 
              content-text="Custom Content Text">
             </spx-accordion>`,
    });
    const header = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.header span');
    const content = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.content span');
    expect(header.innerHTML.trim()).toBe('Custom Header Text');
    expect(content.innerHTML.trim()).toBe('Custom Content Text');
  });
  it('custom content and tag props', async () => {
    const page = await newSpecPage({
      components: [SpxAccordion],
      html: `<spx-accordion 
                header-text="Custom Header Text" 
                header-text-tag="h1" 
                content-text="Custom Content Text"
                content-text-tag="p">    
             </spx-accordion>`,
    });
    const header = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.header h1');
    const content = page.doc
      .querySelector('spx-accordion')
      .shadowRoot.querySelector('.content p');
    expect(header.innerHTML.trim()).toBe('Custom Header Text');
    expect(header.tagName).toBe('H1');
    expect(content.innerHTML.trim()).toBe('Custom Content Text');
    expect(content.tagName).toBe('P');
  });
  it('headless styling', async () => {
    const page = await newSpecPage({
      components: [SpxAccordion],
      html: `<spx-accordion 
                styling="headless"
                class-header="flex items-center font-medium text-lg focus-out"
                class-header-inactive="is-active"
                class-header-text="ml-4"
                class-header-text-active="mr-2"
                class-header-icon="mt-9"
                class-header-icon-inactive="pl-4"
                class-content="mt-4"
                class-content-inactive="mt-6"
                class-content-text="mt-12"
                class-content-text-inactive="mb-6">    
             </spx-accordion>`,
    });
    expect(page.root).toEqualHtml(`
<spx-accordion class-content="mt-4" class-content-inactive="mt-6" class-content-text="mt-12" class-content-text-inactive="mb-6" class-header="flex items-center font-medium text-lg focus-out" class-header-icon="mt-9" class-header-icon-inactive="pl-4" class-header-inactive="is-active" class-header-text="ml-4" class-header-text-active="mr-2" content-color="var(--spx-color-gray-900)" content-font-size="var(--spx-font-size)" content-font-size-max="1.2" content-font-size-min="1" content-text="Default Content Text" content-text-tag="span" gap="0.4em" gap-max="1.2" gap-min="1" header-color="var(--spx-color-gray-900)" header-font-size="var(--spx-font-size)" header-font-size-max="1.2" header-font-size-min="1" header-gap="0.4em" header-gap-max="1" header-gap-min="0.6" header-text="Default Header Text" header-text-tag="span" icon="arrow-down" icon-transform="rotate(180deg)" icon-type="ionicons" link-type="open" styling="headless" style="--spx-accordion-content-color: var(--spx-color-gray-900); --spx-accordion-content-font-size: var(--spx-font-size); --spx-accordion-content-font-size-max: 1.2; --spx-accordion-content-font-size-min: 1; --spx-accordion-gap: 0.4em; --spx-accordion-gap-max: 1.2; --spx-accordion-gap-min: 1; --spx-accordion-header-color: var(--spx-color-gray-900); --spx-accordion-header-font-size: var(--spx-font-size); --spx-accordion-header-font-size-max: 1.2; --spx-accordion-header-font-size-min: 1; --spx-accordion-header-gap: 0.4em; --spx-accordion-header-gap-max: 1; --spx-accordion-header-gap-min: 0.6; --spx-accordion-icon-transform: rotate(180deg);">
      <mock:shadow-root>
        <div class="inner">
          <div aria-expanded="false" as="div" class="flex focus-out font-medium is-active items-center text-lg" role="button" tabindex="0" style="text-align: left;">
            <div class="mt-9 pl-4">
              <spx-icon icon="arrow-down" type="ionicons"></spx-icon>
            </div>
            <span class="ml-4">
              Default Header Text
            </span>
          </div>
          <div class="mt-6">
            <span class="mb-6 mt-12">
              Default Content Text
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </spx-accordion>
`);
  });
  it("headless styling and 'open' prop", async () => {
    const page = await newSpecPage({
      components: [SpxAccordion],
      html: `<spx-accordion 
                styling="headless"
                class-header="flex items-center font-medium text-lg focus-out"
                class-header-active="is-active"
                class-header-text="ml-4"
                class-header-text-active="mr-2"
                class-header-icon="mt-9"
                class-header-icon-active="pl-4"
                class-content="mt-4"
                class-content-active="mt-6"
                class-content-text="mt-12"
                class-content-text-active="mb-6"
                open>    
             </spx-accordion>`,
    });
    expect(page.root).toEqualHtml(`
<spx-accordion class-content="mt-4" class-content-active="mt-6" class-content-text="mt-12" class-content-text-active="mb-6" class-header="flex items-center font-medium text-lg focus-out" class-header-active="is-active" class-header-icon="mt-9" class-header-icon-active="pl-4" class-header-text="ml-4" class-header-text-active="mr-2" content-color="var(--spx-color-gray-900)" content-font-size="var(--spx-font-size)" content-font-size-max="1.2" content-font-size-min="1" content-text="Default Content Text" content-text-tag="span" gap="0.4em" gap-max="1.2" gap-min="1" header-color="var(--spx-color-gray-900)" header-font-size="var(--spx-font-size)" header-font-size-max="1.2" header-font-size-min="1" header-gap="0.4em" header-gap-max="1" header-gap-min="0.6" header-text="Default Header Text" header-text-tag="span" icon="arrow-down" icon-transform="rotate(180deg)" icon-type="ionicons" link-type="open" open="" styling="headless" style="--spx-accordion-content-color: var(--spx-color-gray-900); --spx-accordion-content-font-size: var(--spx-font-size); --spx-accordion-content-font-size-max: 1.2; --spx-accordion-content-font-size-min: 1; --spx-accordion-gap: 0.4em; --spx-accordion-gap-max: 1.2; --spx-accordion-gap-min: 1; --spx-accordion-header-color: var(--spx-color-gray-900); --spx-accordion-header-font-size: var(--spx-font-size); --spx-accordion-header-font-size-max: 1.2; --spx-accordion-header-font-size-min: 1; --spx-accordion-header-gap: 0.4em; --spx-accordion-header-gap-max: 1; --spx-accordion-header-gap-min: 0.6; --spx-accordion-icon-transform: rotate(180deg);">
      <mock:shadow-root>
        <div class="inner">
          <div aria-expanded="true" as="div" class="flex focus-out font-medium is-active items-center text-lg" role="button" tabindex="0" style="text-align: left;">
            <div class="mt-9 pl-4">
              <spx-icon icon="arrow-down" type="ionicons"></spx-icon>
            </div>
            <span class="ml-4 mr-2">
              Default Header Text
            </span>
          </div>
          <div class="mt-4 mt-6">
            <span class="mb-6 mt-12">
              Default Content Text
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </spx-accordion>
`);
  });
});
