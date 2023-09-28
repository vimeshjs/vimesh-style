
function setupLayout(G) {
    if (!G.$vs) return console.error('Vimesh style core is not loaded!')
    const E = G.$vs._.each
    const R = G.$vs.register
    const GS = G.$vs._.generateSizes
    const EAV = G.$vs._.extractArbitraryValue
    const C = G.$vs.config
    const P = C.prefix
    let i

    // Vars
    R(`[`, classDetails => `${EAV(classDetails.name)};`)

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
    R(`flex-[`, classDetails => `flex: ${EAV(classDetails.name)};`)
    E(['row', 'row-reverse', 'col', 'col-reverse'], v => R(`flex-${v}`, `flex-direction: ${v.replace('col', 'column')};`))
    E(['wrap', 'wrap-reverse', 'nowrap'], v => R(`flex-${v}`, `flex-wrap: ${v};`))


    E({ auto: 'auto', full: '100%' }, (v, k) => R(`basis-${k}`, `flex-basis: ${v};`))
    GS((name, value) => {
        R(`basis-${name}`, `flex-basis: ${value};`)
    })
    R(`basis-[`, classDetails => `flex-basis: ${EAV(classDetails.name)};`)

    // Clear
    E(['left', 'right', 'both', 'none'], v => R(`clear-${v}`, `clear: ${v};`)) 
    R(`clear-[`, classDetails => `clear: ${EAV(classDetails.name)};`)

    // Position
    E(['static', 'fixed', 'absolute', 'relative', 'sticky'], v => R(v, `position: ${v};`))
    R(`position-[`, classDetails => `position: ${EAV(classDetails.name)};`)

    // Width & Height
    E({ auto: 'auto', full: '100%', screen: '100vw', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => R(`w-${k}`, `width: ${v};`))
    E({ auto: 'auto', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => R(`h-${k}`, `height: ${v};`))
    GS((name, value) => {
        R(`w-${name}`, `width: ${value};`)
        R(`h-${name}`, `height: ${value};`)
    })
    R(`w-[`, classDetails => `width: ${EAV(classDetails.name)};`)
    R(`h-[`, classDetails => `height: ${EAV(classDetails.name)};`)

    // Min & Max Width
    const ws = { '0': '0px', full: '100%', min: 'min-content', max: 'max-content', fit: 'fit-content' }
    E(ws, (v, k) => R(`min-w-${k}`, `min-width: ${v};`))
    ws.none = 'none'
    ws.prose = '65ch'
    E(['xs', 'sm', 'md', 'lg', 'xl'], (v, i) => ws[v] = `${20 + i * 4}rem`)
    E(['sm', 'md', 'lg', 'xl', '2xl'], v => ws[`screen-${v}`] = `${C.breakpoints[v]}px`)
    for (i = 2; i <= 7; i++) ws[`${i}xl`] = `${30 + i * 6}rem`
    E(ws, (v, k) => R(`max-w-${k}`, `max-width: ${v};`))
    R(`min-w-[`, classDetails => `min-width: ${EAV(classDetails.name)};`)
    R(`max-w-[`, classDetails => `max-width: ${EAV(classDetails.name)};`)

    // Min & Max Height
    E({ '0': '0px', full: '100%', screen: '100vh', min: 'min-content', max: 'max-content', fit: 'fit-content' }, (v, k) => {
        R(`min-h-${k}`, `min-height: ${v};`)
        R(`max-h-${k}`, `max-height: ${v};`)
    })
    GS((name, value) => {
        R(`max-h-${name}`, `max-height: ${value};`)
    })
    R(`min-h-[`, classDetails => `min-height: ${EAV(classDetails.name)};`)
    R(`max-h-[`, classDetails => `max-height: ${EAV(classDetails.name)};`)

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
    R([`p-[`, `px-[`, `pl-[`, `pr-[`, `py-[`, `pt-[`, `pb-[`], classDetails => {
        const value = EAV(classDetails.name)
        const has = kw => classDetails.name.indexOf(kw) !== -1
        const pl = `padding-left: ${value};`
        const pr = `padding-right: ${value};`
        const pt = `padding-top: ${value};`
        const pb = `padding-bottom: ${value};`
        if (has('px-')) return `${pl}${pr}`
        else if (has('pl-')) return `${pl}`
        else if (has('pr-')) return `${pr}`
        else if (has('py-')) return `${pt}${pb}`
        else if (has('pt-')) return `${pt}`
        else if (has('pb-')) return `${pb}`
        return `padding: ${value};`
    })
    E(['', '-'], s => {
        R([`${s}m-[`, `${s}mx-[`, `${s}ml-[`, `${s}mr-[`, `${s}my-[`, `${s}mt-[`, `${s}mb-[`], classDetails => {
            const value = EAV(classDetails.name)
            const has = kw => classDetails.name.indexOf(kw) !== -1
            const ml = `margin-left: ${s}${value};`
            const mr = `margin-right: ${s}${value};`
            const mt = `margin-top: ${s}${value};`
            const mb = `margin-bottom: ${s}${value};`
            if (has('mx-')) return `${ml}${mr}`
            else if (has('ml-')) return `${ml}`
            else if (has('mr-')) return `${mr}`
            else if (has('my-')) return `${mt}${mb}`
            else if (has('mt-')) return `${mt}`
            else if (has('mb-')) return `${mb}`
            return `margin: ${s}${value};`
        })
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
    E(['', '-'], s => {
        R([`${s}inset-[`, `${s}inset-x-[`, `${s}left-[`, `${s}right-[`, `${s}inset-y-[`, `${s}top-[`, `${s}bottom-[`], classDetails => {
            let value = EAV(classDetails.name)
            const l = `left: ${s}${value};`
            const r = `right: ${s}${value};`
            const t = `top: ${s}${value};`
            const b = `bottom: ${s}${value};`
            const has = kw => classDetails.name.indexOf(kw) !== -1
            if (has('inset-x')) return `${l}${r}`
            else if (has('inset-y')) return `${t}${b}`
            else if (has('inset')) return `${l}${r}${t}${b}`
            else if (has('left')) return `${l}`
            else if (has('right')) return `${r}`
            else if (has('top')) return `${t}`
            else if (has('bottom')) return `${b}`
            return null
        })
    })

    // Space
    const sc = ' > :not([hidden]) ~ :not([hidden])'
    R('space-x-reverse', { name: `$${sc}`, style: `--${P}-space-x-reverse: 1;` })
    R('space-y-reverse', { name: `$${sc}`, style: `--${P}-space-y-reverse: 1;` })
    GS((name, value) => {
        E({ x: ['right', 'left'], y: ['bottom', 'top'] }, (vs, k) => E(['', '-'], (s) => {
            R(`${s}space-${k}-${name}`, { name: `$${sc}`, style: `--${P}-space-${k}-reverse: 0;margin-${vs[0]}: calc(${s}${value} * var(--${P}-space-${k}-reverse));margin-${vs[1]}: calc(${s}${value} * calc(1 - var(--${P}-space-${k}-reverse)));` })
        }))
    })
    E({ x: ['right', 'left'], y: ['bottom', 'top'] }, (vs, k) => E(['', '-'], (s) => {
        R(`${s}space-${k}-[`, classDetails => {
            const value = EAV(classDetails.name)
            return { name: `$${sc}`, style: `--${P}-space-${k}-reverse: 0;margin-${vs[0]}: calc(${s}${value} * var(--${P}-space-${k}-reverse));margin-${vs[1]}: calc(${s}${value} * calc(1 - var(--${P}-space-${k}-reverse)));` }
        }
        )
    }))

    // Order
    E({ first: -9999, last: 9999, none: 0 }, (v, k) => R(`order-${k}`, `order: ${v};`))
    for (i = 1; i <= 12; i++) R(`order-${i}`, `order: ${i};`)
    R(`order-[`, classDetails => `order: ${EAV(classDetails.name)};`)

    // Grid
    R(`grid-cols-none`, `grid-template-columns: none;`)
    for (i = 1; i <= 12; i++) R(`grid-cols-${i}`, `grid-template-columns: repeat(${i}, minmax(0, 1fr));`)

    R(`grid-cols-[`, classDetails => {
        let items = EAV(classDetails.name).replace(/,(?![^\(]*\))/g, ' ')
        return `grid-template-columns: ${items};`
    })
    const extractLastNum = n => n.substring(n.lastIndexOf('-') + 1)
    E([['col', 'column'], ['row', 'row']], ([n1, n2], row) => {
        R(`${n1}-auto`, `grid-${n2}: auto;`)
        R(`${n1}-span-full`, `grid-${n2}: 1 / -1;`)
        R(`${n1}-start-auto`, `grid-${n2}-start: auto;`)
        R(`${n1}-end-auto`, `grid-${n2}-end: auto;`)

        R(`${n1}-span-`, classDetails => {
            let i = extractLastNum(classDetails.name)
            return `grid-${n2}: span ${i} / span ${i};`
        })
        R(`${n1}-start-`, classDetails => `grid-${n2}-start: ${extractLastNum(classDetails.name)};`)
        R(`${n1}-end-`, classDetails => `grid-${n2}-end: ${extractLastNum(classDetails.name)};`)
    })

    R(`grid-rows-none`, `grid-template-rows: none;`)
    for (i = 1; i <= 6; i++) R(`grid-rows-${i}`, `grid-template-rows: repeat(${i}, minmax(0, 1fr));`)

    R(`grid-rows-[`, classDetails => {
        let items = EAV(classDetails.name).replace(/,(?![^\(]*\))/g, ' ')
        return `grid-template-rows: ${items};`
    })

    E(['row', 'col', 'dense', 'row-dense', 'col-dense'], v => R(`grid-flow-${v}`, `grid-auto-flow: ${v.replace('col', 'column')};`))
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

    R(`gap-[`, classDetails => `gap: ${EAV(classDetails.name)};`)
    R(`gap-x-[`, classDetails => `column-gap: ${EAV(classDetails.name)};`)
    R(`gap-y-[`, classDetails => `row-gap: ${EAV(classDetails.name)};`)

    // Justify & Align & Place
    E({ start: 'flex-start', end: 'flex-end', center: 'center', between: 'space-between', around: 'space-around', evenly: 'space-evenly' }, (v, k) => {
        R(`justify-${k}`, `justify-content: ${v};`)
        R(`content-${k}`, `align-content: ${v};`)
    })
    R(`justify-[`, classDetails => `justify-content: ${EAV(classDetails.name)};`)
    R(`content-[`, classDetails => `align-content: ${EAV(classDetails.name)};`)

    E({ start: 'start', end: 'end', center: 'center', stretch: 'stretch', between: 'space-between', around: 'space-around', evenly: 'space-evenly' }, (v, k) => {
        R(`place-content-${k}`, `place-content: ${v};`)
    })
    R(`place-content-[`, classDetails => `place-content: ${EAV(classDetails.name)};`)

    E(['start', 'end', 'center', 'stretch'], v => {
        R(`justify-items-${v}`, `justify-items: ${v};`)
        R(`place-items-${v}`, `place-items: ${v};`)
    })
    R(`justify-items-[`, classDetails => `justify-items: ${EAV(classDetails.name)};`)
    R(`place-items-[`, classDetails => `place-items: ${EAV(classDetails.name)};`)

    E(['auto', 'start', 'end', 'center', 'stretch'], v => {
        R(`justify-self-${v}`, `justify-self: ${v};`)
        R(`place-self-${v}`, `place-self: ${v};`)
    })
    R(`justify-self-[`, classDetails => `justify-self: ${EAV(classDetails.name)};`)
    R(`place-self-[`, classDetails => `place-self: ${EAV(classDetails.name)};`)

    E(['start', 'end', 'center', 'baseline', 'stretch'], v => R(`items-${v}`, `align-items: ${v};`))
    R(`items-[`, classDetails => `align-items: ${EAV(classDetails.name)};`)

    E(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], v => R(`self-${v}`, `align-self: ${v};`))
    R(`self-[`, classDetails => `align-self: ${EAV(classDetails.name)};`)

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
    R(`float-[`, classDetails => `float: ${EAV(classDetails.name)};`)

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
    R(`z-[`, `z-index: ${EAV(classDetails.name)};`)

    // Tables
    R(`border-collapse`, `border-collapse: collapse;`)
    R(`border-separate`, `border-collapse: separate;`)
    R(`table-auto`, `table-layout: auto;`)
    R(`table-fixed`, `table-layout: fixed;`)

}
