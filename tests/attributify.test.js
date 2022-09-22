const { normalizeCss, sleep } = require('./utils')

test('resolve attributify values into styles', async () => {
    require('../dist/vs')
    const expectedCssOutput = normalizeCss($vs.config.preset + `
    .underline {text-decoration: underline;} 
    .text-3xl {font-size: 1.875rem;line-height: 2.25rem;} 
    .text-indigo-600 {--vs-text-opacity:1;color: rgba(76,73,204,var(--vs-text-opacity));} 
    .font-bold {font-weight: 700;}
    `)
    document.body.innerHTML = /*html*/ ` 
<h1 text="3xl indigo-600" font="bold" class="underline">
    Hello world!
</h1>`
    await sleep(1)
    const vimeshStyle = document.querySelector('#vimesh-styles')
    let styles = normalizeCss(vimeshStyle.innerHTML)
    expect(styles).toBe(expectedCssOutput)
})

