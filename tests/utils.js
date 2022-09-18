const css = require('css')

function normalizeCss(cssContent) {
    return css.stringify(css.parse(cssContent || ''))
}
const sleep = t => new Promise(r => setTimeout(r, t))

module.exports = {
    normalizeCss,
    sleep
}