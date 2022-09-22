
function setupLayout(G) {
    if (!G.$vs) return console.error('Vimesh style core is not loaded!')
    const E = G.$vs._.each
    const R = G.$vs._.register
    const GS = G.$vs._.generateSizes
    const C = G.$vs.config
    const P = C.prefix
    let i

    // Container
    R('container', classDetails => {
        if (classDetails.breakpoint) {
            return `max-width: ${C.breakpoints[classDetails.breakpoint]}px;`
        } else {
            return `width: 100%;`
        }
    })

    // Display
    E(['block', 'inline-block', 'inline', 'flex', 'inline-flex',
        'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-row',
        'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group',
        'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'
    ], v => R(v, `display: ${'hidden' === v ? 'none' : v};`))

    // Flex 
    E(['', 'flex-'], p => {
        R(`${p}grow-0`, `flex-grow: 0;`)
        R(`${p}grow`, `flex-grow: 1;`)
        R(`${p}shrink-0`, `flex-shrink: 0;`)
        R(`${p}shrink`, `flex-shrink: 1;`)
    })
    E({ '1': '1 1 0%', auto: "1 1 auto", initial: "0 1 auto", none: 'none' }, (v, k) => R(`flex-${k}`, `flex: ${v};`))
    E(['row', 'row-reverse', 'col', 'col-reverse'], v => R(`flex-${v}`, `flex-direction: ${v.replace('col', 'column')};`))
    E(['wrap', 'wrap-reverse', 'nowrap'], v => R(`flex-${v}`, `flex-wrap: ${v};`))


    E({ auto: 'auto', full: '100%' }, (v, k) => R(`basis-${k}`, `flex-basis: ${v};`))
    E([2, 3, 4, 5, 6, 12], max => {
        for (i = 1; i < max; i++) {
            R(`basis-${i}/${max}`, `flex-basis: ${+(i * 100 / max).toFixed(6)}%;`)
        }
    })
    GS((name, value) => {
        R(`basis-${name}`, `flex-basis: ${value};`)
    })
    // Clear
    E(['left', 'right', 'both', 'none'], v => R(`clear-${v}`, `clear: ${v};`))

    // Position
    E(['static', 'fixed', 'absolute', 'relative', 'sticky'], v => R(v, `position: ${v};`))

    // Width & Height
    E({ auto: 'auto', full: '100%', screen: '100vw', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => R(`w-${k}`, `width: ${v};`))
    E({ auto: 'auto', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => R(`h-${k}`, `height: ${v};`))
    E([2, 3, 4, 5, 6, 12], max => {
        for (i = 1; i < max; i++) {
            R(`w-${i}/${max}`, `width: ${+(i * 100 / max).toFixed(6)}%;`)
            R(`h-${i}/${max}`, `height: ${+(i * 100 / max).toFixed(6)}%;`)
        }
    })
    GS((name, value) => {
        R(`w-${name}`, `width: ${value};`)
        R(`h-${name}`, `height: ${value};`)
    })

    // Min & Max Width
    const ws = { '0': '0px', full: '100%', min: 'min-content', max: 'max-content', fit: 'fit-content' }
    E(ws, (v, k) => R(`min-w-${k}`, `min-width: ${v};`))
    ws.none = 'none'
    ws.prose = '65ch'
    E(['xs', 'sm', 'md', 'lg', 'xl'], (v, i) => ws[v] = `${20 + i * 4}rem`)
    E(['sm', 'md', 'lg', 'xl', '2xl'], v => ws[`screen-${v}`] = `${C.breakpoints[v]}px`)
    for (i = 2; i <= 7; i++) ws[`${i}xl`] = `${30 + i * 6}rem`
    E(ws, (v, k) => R(`max-w-${k}`, `max-width: ${v};`))

    // Min & Max Height
    E({ '0': '0px', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => {
        R(`min-h-${k}`, `min-height: ${v};`)
        R(`max-h-${k}`, `max-height: ${v};`)
    })
    GS((name, value) => {
        R(`max-h-${name}`, `max-height: ${value};`)
    })

    // Padding & Margin 
    function generateMargins(s, name, value) {
        R(`${s}m-${name}`, `margin: ${s}${value};`)
        const ml = `margin-left: ${s}${value};`
        const mr = `margin-right: ${s}${value};`
        const mt = `margin-top: ${s}${value};`
        const mb = `margin-bottom: ${s}${value};`
        R(`${s}mx-${name}`, `${ml}${mr}`)
        R(`${s}ml-${name}`, `${ml}`)
        R(`${s}mr-${name}`, `${mr}`)
        R(`${s}my-${name}`, `${mt}${mb}`)
        R(`${s}mt-${name}`, `${mt}`)
        R(`${s}mb-${name}`, `${mb}`)
    }
    generateMargins('', 'auto', 'auto')
    GS((name, value) => {
        R(`p-${name}`, `padding: ${value};`)
        const pl = `padding-left: ${value};`
        const pr = `padding-right: ${value};`
        const pt = `padding-top: ${value};`
        const pb = `padding-bottom: ${value};`
        R(`px-${name}`, `${pl}${pr}`)
        R(`pl-${name}`, `${pl}`)
        R(`pr-${name}`, `${pr}`)
        R(`py-${name}`, `${pt}${pb}`)
        R(`pt-${name}`, `${pt}`)
        R(`pb-${name}`, `${pb}`)

        E(['', '-'], s => generateMargins(s, name, value))
    })

    // Top / Right / Bottom / Left
    GS((name, value) => {
        E(['', '-'], s => {
            const l = `left: ${s}${value};`
            const r = `right: ${s}${value};`
            const t = `top: ${s}${value};`
            const b = `bottom: ${s}${value};`
            R(`${s}inset-${name}`, `${l}${r}${t}${b}`)
            R(`${s}inset-x-${name}`, `${l}${r}`)
            R(`${s}left-${name}`, `${l}`)
            R(`${s}right-${name}`, `${r}`)
            R(`${s}inset-y-${name}`, `${t}${b}`)
            R(`${s}top-${name}`, `${t}`)
            R(`${s}bottom-${name}`, `${b}`)
        })
    })

    // Space
    const sc = ' > :not([hidden]) ~ :not([hidden])'
    R('space-x-reverse', { name: `$${sc}`, style: `--${P}-space-x-reverse: 1;` })
    R('space-y-reverse', { name: `$${sc}`, style: `--${P}-space-y-reverse: 1;` })
    GS((name, value) => {
        E({ x: ['right', 'left'], y: ['top', 'bottom'] }, (vs, k) => E(['', '-'], (s) => {
            R(`${s}space-${k}-${name}`, { name: `$${sc}`, style: `--${P}-space-${k}-reverse: 0;margin-${vs[0]}: calc(${s}${value} * var(--${P}-space-${k}-reverse));margin-${vs[1]}: calc(${s}${value} * calc(1 - var(--${P}-space-${k}-reverse)));` })
        }))
    })

    // Order
    E({ first: -9999, last: 9999, none: 0 }, (v, k) => R(`order-${k}`, `order: ${v};`))
    for (i = 1; i <= 12; i++) R(`order-${i}`, `order: ${i};`)

    // Grid
    R(`grid-cols-none`, `grid-template-columns: none;`)
    for (i = 1; i <= 12; i++) R(`grid-cols-${i}`, `grid-template-columns: repeat(${i}, minmax(0, 1fr));`)

    E([['col', 'column'], ['row', 'row']], ([n1, n2], row) => {
        R(`${n1}-auto`, `grid-${n2}: auto;`)
        R(`${n1}-span-full`, `grid-${n2}: 1 / -1;`)
        R(`${n1}-start-auto`, `grid-${n2}-start: auto;`)
        R(`${n1}-end-auto`, `grid-${n2}-end: auto;`)
        let len = (row ? 7 : 13)
        for (i = 1; i <= len; i++) {
            R(`${n1}-span-${i}`, `grid-${n2}: span ${i} / span ${i};`)
            R(`${n1}-start-${i}`, `grid-${n2}-start: span ${i} / span ${i};`)
            R(`${n1}-end-${i}`, `grid-${n2}-end: span ${i} / span ${i};`)
        }
    })

    R(`grid-rows-none`, `grid-template-rows: none;`)
    for (i = 1; i <= 6; i++) R(`grid-rows-${i}`, `grid-template-rows: repeat(${i}, minmax(0, 1fr));`)

    E(['row', 'col', 'row-dense', 'col-dense'], v => R(`grid-flow-${v}`, `grid-auto-flow: ${v};`))
    E({ auto: 'auto', min: 'min-content', max: 'max-content', fr: 'minmax(0, 1fr)' }, (v, k) => {
        R(`auto-cols-${k}`, `grid-auto-columns: ${v};`)
        R(`auto-rows-${k}`, `grid-auto-rows: ${v};`)
    })

    // Gap
    GS((name, value) => {
        R(`gap-${name}`, `gap: ${value};`)
        R(`gap-x-${name}`, `column-gap: ${value};`)
        R(`gap-y-${name}`, `row-gap: ${value};`)
    })

    // Justify & Align & Place
    E({ start: 'flex-start', end: 'flex-end', center: 'center', between: 'space-between', around: 'space-around', evenly: 'space-evenly' }, (v, k) => {
        R(`justify-${k}`, `justify-content: ${v};`)
        R(`content-${k}`, `align-content: ${v};`)
    })
    E({ start: 'start', end: 'end', center: 'center', stretch: 'stretch', between: 'space-between', around: 'space-around', evenly: 'space-evenly' }, (v, k) => {
        R(`place-content-${k}`, `place-content: ${v};`)
    })
    E(['start', 'end', 'center', 'stretch'], v => {
        R(`justify-items-${v}`, `justify-items: ${v};`)
        R(`place-items-${v}`, `place-items: ${v};`)
    })
    E(['auto', 'start', 'end', 'center', 'stretch'], v => {
        R(`justify-self-${v}`, `justify-self: ${v};`)
        R(`place-self-${v}`, `place-self: ${v};`)
    })
    E(['start', 'end', 'center', 'baseline', 'stretch'], v => R(`items-${v}`, `align-items: ${v};`))
    E(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], v => R(`self-${v}`, `align-self: ${v};`))

    // Box Sizing & Decoration Break
    R(`decoration-slice`, `box-decoration-break: slice;`)
    R(`decoration-clone`, `box-decoration-break: clone;`)
    R(`box-border`, `box-sizing: border-box;`)
    R(`box-content`, `box-sizing: content-box;`)

    // Isolation
    R(`isolate`, `isolation: isolate;`)
    R(`isolation-auto`, `isolation: auto;`)

    // Float
    E(['left', 'right', 'none'], v => R(`float-${v}`, `float: ${v};`))

    // Object Fit & Position
    E(['contain', 'cover', 'fill', 'none', 'scale-down'], v => R(`object-${v}`, `object-fit: ${v};`))
    E(['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'], v => R(`object-${v}`, `object-position: ${v.replace('-', ' ')};`))

    // Overflow
    E(['auto', 'hidden', 'visible', 'scroll'], v => {
        R(`overflow-${v}`, `overflow: ${v};`)
        R(`overflow-x-${v}`, `overflow-x: ${v};`)
        R(`overflow-y-${v}`, `overflow-y: ${v};`)
    })

    // Overscroll
    E(['auto', 'none', 'contain'], v => {
        R(`overscroll-${v}`, `overscroll-behavior: ${v};`)
        R(`overscroll-x-${v}`, `overscroll-behavior-x: ${v};`)
        R(`overscroll-y-${v}`, `overscroll-behavior-y: ${v};`)
    })

    // Visibility
    R(`visible`, `visibility: visible;`)
    R(`invisible`, `visibility: hidden;`)

    // Z-Index
    E([0, 10, 20, 30, 40, 50, 'auto'], v => R(`z-${v}`, `z-index: ${v};`))

    // Tables
    R(`border-collapse`, `border-collapse: collapse;`)
    R(`border-separate`, `border-collapse: separate;`)
    R(`table-auto`, `table-layout: auto;`)
    R(`table-fixed`, `table-layout: fixed;`)

}
