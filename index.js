const setupCore = require('./src/core')
const setupPreset = require('./src/preset')
const setupLayout = require('./src/layout')
const setupPaint = require('./src/paint')

module.exports = function () {
    let G = {}
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
    return G.$vs
}