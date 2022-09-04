const css = require('css')

function normalizeCss(cssContent){
    return css.stringify(css.parse(cssContent))
}

module.exports = {
    normalizeCss
}