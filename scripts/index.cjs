
function setupVimeshStyle(G = {}) {
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
    return G.$vs
}

module.exports = setupVimeshStyle