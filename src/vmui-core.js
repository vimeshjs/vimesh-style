(function (G) {
    if (G.$vmui) return // Vimesh UI core is already loaded
    G.$vmui = {}
    
    const { h, Component, render } = G.preact
    G.html = G.htm.bind((...args) => {
        G.$vms.enable(args[1] && args[1].class)
        return h(...args)
    })
    G.mount = render
    G.Component = Component
})(window)