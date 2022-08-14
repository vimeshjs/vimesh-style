
const { normalizeCss } = require('./utils')
const { test, expect } = require('@playwright/test')

test('auto generate css styles', async ({ page }) => {

    await page.goto(`file://${__dirname}/dynamic.html`);
    let vimeshStyle = page.locator('#vimesh-styles');

    let el01 = page.locator("#ID-1")
    await expect(el01).toBeVisible()
    let cls01 = await el01.getAttribute('class')
    expect(cls01, 'text-green-100')
    let generatedCss = await vimeshStyle.textContent()
    expect(generatedCss.indexOf(cls01) != -1).toBeTruthy()

    let el02 = page.locator("#ID-2")
    await expect(el02).toBeVisible()
    let cls02 = await el02.getAttribute('class')
    cls01 = await el01.getAttribute('class')
    expect(cls01, 'text-red-100')
    expect(cls02, 'text-green-200')
    generatedCss = await vimeshStyle.textContent()
    expect(generatedCss.indexOf(cls01) != -1 && generatedCss.indexOf(cls02) != -1).toBeTruthy()
});