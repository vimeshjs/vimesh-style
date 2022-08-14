const {normalizeCss} = require('./utils')
require('../../index')


test('generate css classes from html', () => {
    const expectedCssOutput = normalizeCss(`
    .w-2 {
        width: 0.5rem;
    }
        
    .text-red-500 {
        --vs-text-opacity: 1;
        color: rgba(239,68,68,var(--vs-text-opacity));
    }
    `)
    $vs.config.preset = false
    const html = /*html*/`<div class="w-2">
        <span class="text-red-500">hello world</span>
    </div>`
    $vs.addClasses($vs.extractClasses(html))
    let cssOutput = normalizeCss($vs.getStyles())
    
    expect(cssOutput).toBe(expectedCssOutput)
})