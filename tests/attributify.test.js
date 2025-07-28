const { normalizeCss, sleep, setupTestEnvironment } = require('./utils')

test('resolve attributify values into styles', async () => {
    const $vs = setupTestEnvironment();

    $vs.config.attributify = 'all'
    const expectedCssOutput = normalizeCss(($vs.config.preset || '') + `
    *,
     ::before,
     ::after {
       --vs-content: '';
    }
    .underline {text-decoration: underline;} 
    .text-3xl {font-size: 1.875rem;line-height: 2.25rem;} 
    .text-indigo-600 {--vs-text-opacity:1;color: rgba(79,70,229,var(--vs-text-opacity));} 
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

