
function setupVimeshStyle() {
    let G = {}
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
    return G.$vs
}

export default setupVimeshStyle