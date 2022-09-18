const { normalizeCss, waitForTimeout, sleep } = require('./utils')

test('auto generate styles from known classes', async () => {
    const expectedCssOutput = normalizeCss(`
    .text-3xl {font-size: 1.875rem;line-height: 2.25rem;}
    .font-bold {font-weight: 700;}
    .underline {text-decoration: underline;}
    .text-indigo-600 {--vs-text-opacity:1;color: rgba(76,73,204,var(--vs-text-opacity));}
    `)
    require('../dist/vs')
    $vs.config.preset = ''
    document.body.innerHTML = /*html*/ ` 
<h1 class="text-3xl font-bold underline text-indigo-600">
    Hello world!
</h1>`
    await sleep(1)
    const vimeshStyle = document.querySelector('#vimesh-styles')
    let styles = normalizeCss(vimeshStyle.innerHTML)
    expect(styles).toBe(expectedCssOutput)
})

