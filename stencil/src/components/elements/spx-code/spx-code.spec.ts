import { newSpecPage } from '@stencil/core/testing';
import { SpxCode } from './spx-code';

describe('Render code with', function () {
  it('default props and CSS language', async () => {
    const page = await newSpecPage({
      components: [SpxCode],
      html: `<spx-code 
              type="css" 
              clipboard="false">
                html {
                  font-size: 32px;
                }
             </spx-code>`,
    });
    expect(page.root).toEqualHtml(`
<spx-code background="var(--spx-color-gray-900)" border-radius="var(--spx-border-radius)" clipboard="false" clipboard-button-background="var(--spx-color-gray-800)" clipboard-button-color="var(--spx-color-gray-400)" clipboard-button-font-size="12px" clipboard-button-font-weight="600" clipboard-button-padding="6px 12px" clipboard-button-text="Copy" clipboard-button-text-copied="Copied!" clipboard-button-text-transform="uppercase" font-size="clamp(12px, 1.6vw, 16px)" line-numbers="" line-numbers-background="var(--spx-color-gray-800)" line-numbers-color="var(--spx-color-gray-400)" line-numbers-start="1" max-width="100%" padding="clamp(20px, 2.4vw, 40px)" theme="default" type="css" whitespace-left-trim="" whitespace-remove-indent="" whitespace-remove-trailing="" whitespace-right-trim="" style="--spx-code-background: var(--spx-color-gray-900); --spx-code-border-radius: var(--spx-border-radius); --spx-code-clipboard-button-color: var(--spx-color-gray-400); --spx-code-clipboard-button-font-size: 12px; --spx-code-clipboard-button-font-weight: 600; --spx-code-clipboard-button-padding: 6px 12px; --spx-code-clipboard-button-text-transform: uppercase; --spx-code-font-size: clamp(12px, 1.6vw, 16px); --spx-code-line-numbers-background: var(--spx-color-gray-800); --spx-code-line-numbers-color: var(--spx-color-gray-400); --spx-code-line-numbers-start: 1; --spx-code-max-width: 100%; --spx-code-padding: clamp(20px, 2.4vw, 40px);">
      <mock:shadow-root>
        <div class="inner"><pre class="line-numbers" tabindex="-1"><code class="language-css" tabindex="-1"><span class="selector token">html</span> <span class="punctuation token">{</span>
  <span class="property token">font-size</span><span class="punctuation token">:</span> 32px<span class="punctuation token">;</span>
<span class="punctuation token">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code></pre>
        </div>
      </mock:shadow-root>
      html { font-size: 32px; }
    </spx-code>
`);
  });
});
