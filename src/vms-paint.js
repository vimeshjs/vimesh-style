"use strict";
(function (G) {
    if (!G.$vms) return console.error('Vimesh style core is not loaded!')
    const E = G.$vms._.each
    const R = G.$vms.register
    const GS = G.$vms.generateSizes
    const GC = G.$vms.generateColors
    const C = G.$vms.config
    const P = C.prefix
    const { rgbToHex, resolveColor, addInitStyle, _: { isString } } = $vms
    let i

    C.fonts = {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    }

    // Font
    R('font-', classDetails => {
        let parts = classDetails.name.split('-')
        let font = C.fonts[parts[1]]
        if (!font) return null
        return `font-family: ${font};`
    })

    E({
        xs: [0.75, 1], sm: [0.875, 1.25], base: [1, 1.5], lg: [1.125, 1.75], xl: [1.25, 1.75],
        '2xl': [1.5, 2], '3xl': [1.875, 2.25], '4xl': [2.25, 2.5], '5xl': [3], '6xl': [3.75], '7xl': [4.5], '8xl': [6], '9xl': [8]
    }, (v, k) => R(`text-${k}`, `font-size: ${v[0]}rem;line-height: ${v.length > 1 ? `${v[1]}rem` : 1};`))

    R(`antialiased`, `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`)
    R(`subpixel-antialiased`, `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;`)
    R(`italic`, `font-style: italic;`)
    R(`not-italic`, `font-style: normal;`)
    E(['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'], (v, i) => R(`font-${v}`, `font-weight: ${(i + 1) * 100};`))

    // Letter Spacing
    E({ tighter: -0.05, tight: -0.025, normal: 0, wide: 0.025, wider: 0.05, widest: 0.1 }, (v, k) => R(`tracking-${k}`, `letter-spacing: ${v}em;`))

    // Line Height
    for (i = 3; i <= 10; i++) R(`leading-${i}`, `line-height: ${0.25 * i}rem;`)
    E({ none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 }, (v, k) => R(`leading-${k}`, `line-height: ${v};`))

    // List Style Type & Style
    E(['none', 'disc', 'decimal'], v => R(`list-${v}`, `list-style-type: ${v};`))
    E(['inside', 'outside'], v => R(`list-${v}`, `list-style-position: ${v};`))

    // Placeholder
    GC('placeholder', 'color', '::placeholder')

    // Text
    GC('text', 'color')
    E(['left', 'center', 'right', 'justify'], v => R(`text-${v}`, `text-align: ${v};`))
    E(['underline', 'line-through', 'none'], v => R(`${'none' == v ? 'no-underline' : v}`, `text-decoration: ${v};`))
    E(['uppercase', 'lowercase', 'capitalize', 'none'], v => R(`${'none' == v ? 'normal-case' : v}`, `text-transform: ${v};`))
    E(['ellipsis', 'clip'], v => R(`overflow-${v}`, `text-overflow: ${v}`))
    R('truncate', 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;')
    E(['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'], v => R(`align-${v}`, `vertical-align: ${v};`))
    E(['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'], v => R(`whitespace-${v}`, `white-space: ${v};`))
    R(`break-normal`, `overflow-wrap: normal; word-break: normal;`)
    R(`break-words`, `overflow-wrap: break-word;`)
    R(`break-all`, `word-break: break-all;`)

    // Background
    E(['fixed', 'local', 'scroll'], v => R(`bg-${v}`, `background-attachment: ${v}`))
    E(['text', 'content', 'padding', 'border'], v => R(`bg-clip-${v}`, `background-clip: ${v}${v == 'text' ? '' : '-box'};`))
    GC('bg', 'background-color')
    E(['border', 'padding', 'content'], v => R(`bg-origin-${v}`, `background-origin: ${v}-box;`))
    E(['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'], v => R(`bg-${v}`, `background-position: ${v.replace('-', ' ')};`))
    E(['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'round', 'space'], v => R(`bg-${v.indexOf('repeat') != -1 ? v : `repeat-${v}`}`, `background-repeat: ${v};`))
    E(['auto', 'cover', 'contain'], v => R(`bg-${v}`, `background-size: ${v};`))

    // Gradient Background 
    R(`bg-none`, `background-image: none;`)
    const DM = { t: 'top', r: 'right', b: 'bottom', l: 'left' }
    const dirs = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
    E(dirs, v => R(`bg-gradient-to-${v}`, `background-image: linear-gradient(to ${v.length == 1 ? DM[v[0]] : `${DM[v[0]]} ${DM[v[1]]}`}, var(--${P}-gradient-stops));`))

    const from = 'from-', to = 'to-', via = 'via-'
    R(from, classDetails => {
        let cv = resolveColor(classDetails.name.substring(from.length))
        if (!cv) return null
        return `--${P}-gradient-from: ${isString(cv) ? cv : '#' + rgbToHex(cv)}; --${P}-gradient-stops: var(--${P}-gradient-from), var(--${P}-gradient-to, rgba(${cv.r},${cv.g},${cv.b}, 0));`
    })
    R(to, classDetails => {
        let cv = resolveColor(classDetails.name.substring(to.length))
        if (!cv) return null
        return `--${P}-gradient-to: ${isString(cv) ? cv : '#' + rgbToHex(cv)};`
    })
    R(via, classDetails => {
        let cv = resolveColor(classDetails.name.substring(via.length))
        if (!cv) return null
        return `--${P}-gradient-stops: var(--${P}-gradient-from), ${isString(cv) ? cv : '#' + rgbToHex(cv)}, var(--${P}-gradient-to, rgba(${cv.r},${cv.g},${cv.b}, 0));`
    })

    // SVG
    R(`fill-current`, `fill: currentColor;`)
    R(`stroke-current`, `stroke: currentColor;`)
    E([0, 1, 2], v => R(`stroke-${v}`, `stroke-width: ${v}`))

    // Border
    R(`rounded-none`, `border-radius: 0px;`)
    E({ none: '0px', sm: 0.125, _: 0.25, md: 0.375, lg: 0.5, xl: 0.75, '2xl': 1, '3xl': 1.5, full: '9999px' }, (s, n) => {
        s = isString(s) ? s : s + 'rem'
        R(`rounded${'_' == n ? '' : `-${n}`}`, `border-radius: ${s};`)
        E(dirs, v => {
            if (v.length == 1) {
                let isTB = 't' == v || 'b' == v
                let d2 = isTB ? ['l', 'r'] : ['t', 'b']
                R(`rounded-${v}${'_' == n ? '' : `-${n}`}`, `border-${isTB ? DM[v] : DM[d2[0]]}-${isTB ? DM[d2[0]] : DM[v]}-radius: ${s}; border-${isTB ? DM[v] : DM[d2[1]]}-${isTB ? DM[d2[1]] : DM[v]}-radius: ${s};`)
            } else {
                R(`rounded-${v}${'_' == n ? '' : `-${n}`}`, `border-${DM[v[0]]}-${DM[v[1]]}-radius: ${s}; `)
            }
        })
    })
    E([0, 1, 2, 4, 8], w => {
        let s = `border-width: ${w}px;`
        R(`border${w == 1 ? '' : `-${w}`}`, s)
        E(Object.keys(DM), d => R(`border-${d}${w == 1 ? '' : `-${w}`}`, s))
    })
    GC('border', 'border-color')
    E(['solid', 'dashed', 'dotted', 'double', 'none'], v => R(`border-${v}`, `border-style: ${v};`))

    // Divide
    const sc = ' > :not([hidden]) ~ :not([hidden])'
    E(['x', 'y'], a => {
        let d2 = a == 'x' ? ['left', 'right'] : ['top', 'bottom']
        R(`divide-${a}-reverse`, { name: `$${sc}`, style: `--${P}-divide-${a}-reverse: 1;` })
        E([0, 1, 2, 4, 8], w => {
            R(`divide-${a}${w == 1 ? '' : `-${w}`}`, { name: `$${sc}`, style: `--${P}-divide-${a}-reverse: 0; border-${d2[0]}-width: calc(${w}px * calc(1 - var(--${P}-divide-${a}-reverse))); border-${d2[1]}-width: calc(${w}px * var(--${P}-divide-${a}-reverse));` })
        })
    })
    GC('divide', 'border-color', sc)
    E(['solid', 'dashed', 'dotted', 'double', 'none'], v => R(`divide-${v}`, { name: `$${sc}`, style: `border-style: ${v};` }))

    // Ring
    const initShadow = () => addInitStyle(`*, ::before, ::after {--${P}-shadow: 0 0 #0000;}`)
    const initRing = () => { initShadow(); addInitStyle(`*, ::before, ::after {--${P}-ring-inset: var(--${P}-empty,/*!*/ /*!*/); --${P}-ring-offset-width: 0px; --${P}-ring-offset-color: #fff; --${P}-ring-color: rgba(59, 130, 246, 0.5); --${P}-ring-offset-shadow: 0 0 #0000; --${P}-ring-shadow: 0 0 #0000;}`) }

    R(`ring-inset`, `--${P}-ring-inset: inset;`)
    E([0, 1, 2, 4, 8, 3], w => R(`ring${w == 3 ? '' : `-${w}`}`, `--${P}-ring-offset-shadow: var(--${P}-ring-inset) 0 0 0 var(--${P}-ring-offset-width) var(--${P}-ring-offset-color); --${P}-ring-shadow: var(--${P}-ring-inset) 0 0 0 calc(${w}px + var(--${P}-ring-offset-width)) var(--${P}-ring-color); box-shadow: var(--${P}-ring-offset-shadow), var(--${P}-ring-shadow), var(--${P}-shadow, 0 0 #0000);`, initRing))
    GC('ring', `--${P}-ring-color`)
    E([0, 1, 2, 4, 8], w => R(`ring-offset-${w}`, `--${P}-ring-offset-width: ${w}px;`))
    const roc = 'ring-offset-'
    R(roc, classDetails => {
        let cv = resolveColor(classDetails.name.substring(roc.length))
        if (!cv) return null
        return `--${P}-ring-offset-color: ${isString(cv) ? cv : '#' + rgbToHex(cv)}; `
    })

    // Effects
    const bs = `box-shadow: var(--${P}-ring-offset-shadow, 0 0 #0000), var(--${P}-ring-shadow, 0 0 #0000), var(--${P}-shadow);`
    E({
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        _: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: '0 0 #0000'
    }, (v, k) => R(`shadow${k == '_' ? '' : `-${k}`}`, `--${P}-shadow: ${v};${bs}`), initShadow)

    R(`opacity-`, classDetails => {
        let parts = classDetails.name.split('-')
        return `opacity: ${+parts[1] / 100};`
    })
    const bms = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
    E(bms, v => R(`mix-blend-${v}`, `mix-blend-mode: ${v};`))
    E(bms, v => R(`bg-blend-${v}`, `background-blend-mode: ${v};`))

    // Transition & Animation
    E({
        none: 'none', all: 'all', opacity: 'opacity', shadow: 'box-shadow', transform: 'transform',
        _: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        colors: 'background-color, border-color, color, fill, stroke'
    }, (v, k) => R(`transition${k == '_' ? '' : `-${k}`}`, `transition-property: ${v}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`))
    R('duration-', classDetails => {
        let parts = classDetails.name.split('-')
        return `transition-duration: ${parts[1]}ms;`
    })
    E({ linear: 'linear', in: 'cubic-bezier(0.4, 0, 1, 1)', out: 'cubic-bezier(0, 0, 0.2, 1)', 'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)' },
        (v, k) => R(`ease-${k}`, `transition-timing-function: ${v};`))
    R('delay-', classDetails => {
        let parts = classDetails.name.split('-')
        return `transition-delay: ${parts[1]}ms;`
    })

    C.keyframes = {
        spin: `{to{transform:rotate(360deg)}}`,
        ping: `{75%,100%{transform:scale(2);opacity:0}}`,
        pulse: `{50%{opacity:.5}}`,
        bounce: `{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}`
    }
    C.animation = {
        none: '',
        spin: `spin 1s linear infinite`,
        ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
        pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
        bounce: `bounce 1s infinite`
    }
    const ani = `animate-`
    R(ani, classDetails => {
        let k = classDetails.name.substring(ani.length)
        let v = C.animation[k]
        if (!v) return null
        return `animation: ${v};`
    }, classDetails => {
        let k = classDetails.name.substring(ani.length)
        if (C.keyframes[k])
            addInitStyle(`@keyframes ${k}${C.keyframes[k]}`)
    })

    // Transform
    const tvs = `--${P}-translate-x: 0; --${P}-translate-y: 0; --${P}-rotate: 0; --${P}-skew-x: 0; --${P}-skew-y: 0; --${P}-scale-x: 1; --${P}-scale-y: 1;`
    const ts = `rotate(var(--${P}-rotate)) skewX(var(--${P}-skew-x)) skewY(var(--${P}-skew-y)) scaleX(var(--${P}-scale-x)) scaleY(var(--${P}-scale-y));`
    R(`transform`, `${tvs}transform: translateX(var(--${P}-translate-x)) translateY(var(--${P}-translate-y)) ${ts}`)
    R(`transform-gpu`, `${tvs}translate3d(var(--${P}-translate-x), var(--${P}-translate-y), 0) ${ts}`)
    R(`transform-none`, `transform: none;`)
    E(['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'], v => R(`origin-${v}`, `transform-origin: ${v.replace('-', ' ')};`))
    R('scale-', classDetails => {
        let parts = classDetails.name.split('-')
        let v = +parts[parts.length - 1] / 100
        if (parts.length == 2)
            return `--${P}-scale-x: ${v};--${P}-scale-y: ${v};`
        else
            return `--${P}-scale-${parts[1]}: ${v};`
    })
    R(['rotate-', '-rotate-'], classDetails => {
        let cn = classDetails.name
        let s = ''
        if ('-' == cn[0]) {
            cn = cn.substring(1)
            s = '-'
        }
        let parts = cn.split('-')
        return `--${P}-rotate: ${s}${parts[1]}deg;`
    })
    function genTrans(name, value) {
        E(['x', 'y'], a => E(['', '-'], (s) => {
            R(`${s}translate-${a}-${name}`, `--${P}-translate-${a}: ${s}${value};`)
        }))
    }
    GS(genTrans)
    E([2, 3, 4], max => {
        for (i = 1; i < max; i++) {
            genTrans(`${i}/${max}`, `${+(i * 100 / max).toFixed(6)}%;`)
        }
    })
    genTrans('full', '100%')
    E([0, 1, 2, 3, 6, 12], d => E(['x', 'y'], a => E(['', '-'], (s) => {
        R(`${s}skew-${a}-${d}`, `--${P}-skew-${a}: ${s}${d}deg;`)
    })))

    // Interactivity 
    R(`appearance-none`, `appearance: none;`)
    E(['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed'], v => R(`cursor-${v}`, `cursor: ${v};`))
    E(['none', 'white', 'black'], v => R(`outline-${v}`, `outline: 2px ${v == 'none' ? 'solid transparent' : `dotted ${v}`}; outline-offset: 2px;`))
    E(['none', 'auto'], v => R(`pointer-events-${v}`, `pointer-events: ${v};`))
    E({none: 'none', y : 'vertical', x:'horizontal', _:'both'}, (v, k) => R(`resize${k == '_' ? '' : `-${k}`}`, `resize: ${v};`))
    E(['none', 'text', 'all', 'auto'], v => R(`select-${v}`, `user-select: ${v};`))
})(window);