const { normalizeCss } = require('./utils')
const setupCore = require('../src/core');
const setupLayout = require('../src/layout');
const setupPaint = require('../src/paint');
const setupPreset = require('../src/preset');

// Create global object for SSR mode (no window/document)
const G = {}

// Setup all modules
setupCore(G);
setupLayout(G);
setupPaint(G);
setupPreset(G);

const $vs = G.$vs

test('generate css classes from html', () => {
    let expectedCssOutput = normalizeCss(`
    *,
     ::before,
     ::after {
       --vs-content: '';
    }
    .w-2 {
        width: 0.5rem;
    }
    .text-red-500 {
        --vs-text-opacity: 1;
        color: rgba(239,68,68,var(--vs-text-opacity));
    }
    `)
    let preset = $vs.config.preset
    $vs.config.preset = ''
    const html = /*html*/`<div class="w-2">
        <span class="text-red-500">hello world</span>
    </div>`
    $vs.add($vs.extract(html))
    let cssOutput = normalizeCss($vs.styles)

    expect(cssOutput).toBe(expectedCssOutput)

    expectedCssOutput = normalizeCss((preset || '') + expectedCssOutput)
    $vs.config.preset = preset
    $vs.reset()
    $vs.add($vs.extract(html))
    cssOutput = normalizeCss($vs.styles)
    expect(cssOutput).toBe(expectedCssOutput)
})