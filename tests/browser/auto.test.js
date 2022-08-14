const {normalizeCss} = require('./utils')
const { test, expect } = require('@playwright/test')

test('auto generate css styles', async ({ page }) => {
    const expectedCssOutput = normalizeCss(`
    .text-3xl {font-size: 1.875rem;line-height: 2.25rem;}
    .font-bold {font-weight: 700;}
    .underline {text-decoration: underline;}
    .text-indigo-600 {--vs-text-opacity:1;color: rgba(76,73,204,var(--vs-text-opacity));}
    `)
    await page.goto(`file://${__dirname}/auto.html`);
    const vimeshStyle = page.locator('#vimesh-styles');
    let styles = normalizeCss(await vimeshStyle.textContent())
    expect(styles.endsWith(expectedCssOutput)).toBeTruthy()
});