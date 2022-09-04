const setupCore = require('./src/core')
const setupPreset = require('./src/preset')
const setupLayout = require('./src/layout')
const setupPaint = require('./src/paint')

function setupVimeshStyle() {
    let G = {}
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
    return G.$vs
}

module.exports = setupVimeshStyle