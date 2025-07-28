function setupPaint(G) {
  if (!G.$vs) return console.error('Vimesh style core is not loaded!')
  const _ = G.$vs._
  const E = _.each
  const R = G.$vs.register
  const GS = _.generateSizes
  const GC = _.generateColors
  const EAV = _.extractArbitraryValue
  const C = G.$vs.config
  const P = C.prefix
  const { rgbToHex, resolveColor, addInitStyle, isString } = G.$vs._
  let i

  addInitStyle(`*, ::before, ::after {--${P}-content: '';}`)
  // Font
  R('font-', (classDetails) => {
    let parts = classDetails.name.split('-')
    let font = C.fonts[parts[1]]
    if (!font) return null
    return `font-family: ${font};`
  })

  R(`font-[`, (classDetails) => `font-family: ${EAV(classDetails.name)};`)

  function sizeWithUnit(s, defUnit = 'rem') {
    return _.isNumeric(s) ? `${s}${defUnit}` : s
  }
  _.autoGenerateOnReset(() => {
    const fontSizes = _.extend(
      {
        xs: [0.75, 1],
        sm: [0.875, 1.25],
        base: [1, 1.5],
        lg: [1.125, 1.75],
        xl: [1.25, 1.75],
        '2xl': [1.5, 2],
        '3xl': [1.875, 2.25],
        '4xl': [2.25, 2.5],
        '5xl': [3],
        '6xl': [3.75],
        '7xl': [4.5],
        '8xl': [6],
        '9xl': [8],
      },
      C.fontSizes
    )
    E(fontSizes, (v, k) => R(`text-${k}`, `font-size: ${sizeWithUnit(v[0])};line-height: ${v.length > 1 ? `${sizeWithUnit(v[1])}` : 1};`))
  })

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
  E(['none', 'disc', 'decimal'], (v) => R(`list-${v}`, `list-style-type: ${v};`))
  E(['inside', 'outside'], (v) => R(`list-${v}`, `list-style-position: ${v};`))

  // Placeholder
  GC('placeholder', 'color', '::placeholder')

  // Text
  GC('text', 'color')
  E(['left', 'center', 'right', 'justify'], (v) => R(`text-${v}`, `text-align: ${v};`))
  E(['underline', 'line-through', 'none'], (v) => R(`${'none' == v ? 'no-underline' : v}`, `text-decoration: ${v};`))
  E(['uppercase', 'lowercase', 'capitalize', 'none'], (v) => R(`${'none' == v ? 'normal-case' : v}`, `text-transform: ${v};`))
  E(['ellipsis', 'clip'], (v) => R(`overflow-${v}`, `text-overflow: ${v}`))
  R('truncate', 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;')
  E(['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'], (v) => R(`align-${v}`, `vertical-align: ${v};`))
  E(['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'], (v) => R(`whitespace-${v}`, `white-space: ${v};`))
  R(`break-normal`, `overflow-wrap: normal; word-break: normal;`)
  R(`break-words`, `overflow-wrap: break-word;`)
  R(`break-all`, `word-break: break-all;`)

  // Background
  E(['fixed', 'local', 'scroll'], (v) => R(`bg-${v}`, `background-attachment: ${v}`))
  E(['text', 'content', 'padding', 'border'], (v) => R(`bg-clip-${v}`, `background-clip: ${v}${v == 'text' ? '' : '-box'};`))
  GC('bg', 'background-color')
  E(['border', 'padding', 'content'], (v) => R(`bg-origin-${v}`, `background-origin: ${v}-box;`))
  E(['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'], (v) => R(`bg-${v}`, `background-position: ${v.replace('-', ' ')};`))
  E(['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'round', 'space'], (v) => R(`bg-${v.indexOf('repeat') != -1 ? v : `repeat-${v}`}`, `background-repeat: ${v};`))
  E(['auto', 'cover', 'contain'], (v) => R(`bg-${v}`, `background-size: ${v};`))

  // Gradient Background
  R(`bg-none`, `background-image: none;`)
  const DM = { t: 'top', r: 'right', b: 'bottom', l: 'left' }
  const dirs = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
  E(dirs, (v) => R(`bg-gradient-to-${v}`, `background-image: linear-gradient(to ${v.length == 1 ? DM[v[0]] : `${DM[v[0]]} ${DM[v[1]]}`}, var(--${P}-gradient-stops));`))

  const from = 'from-',
    to = 'to-',
    via = 'via-'
  R(from, (classDetails) => {
    let cv = resolveColor(classDetails.name.substring(from.length))
    if (!cv) return null
    return `--${P}-gradient-from: ${isString(cv) ? cv : '#' + rgbToHex(cv)}; --${P}-gradient-stops: var(--${P}-gradient-from), var(--${P}-gradient-to, rgba(${cv.r},${cv.g},${cv.b}, 0));`
  })
  R(to, (classDetails) => {
    let cv = resolveColor(classDetails.name.substring(to.length))
    if (!cv) return null
    return `--${P}-gradient-to: ${isString(cv) ? cv : '#' + rgbToHex(cv)};`
  })
  R(via, (classDetails) => {
    let cv = resolveColor(classDetails.name.substring(via.length))
    if (!cv) return null
    return `--${P}-gradient-stops: var(--${P}-gradient-from), ${isString(cv) ? cv : '#' + rgbToHex(cv)}, var(--${P}-gradient-to, rgba(${cv.r},${cv.g},${cv.b}, 0));`
  })

  // SVG
  GC('fill', 'fill')
  GC('stroke', 'stroke')
  E([0, 1, 2], (v) => R(`stroke-${v}`, `stroke-width: ${v}`))

  // Border
  _.autoGenerateOnReset(() => {
    const borderRadiusSizes = _.extend({ none: '0px', sm: 0.125, _: 0.25, md: 0.375, lg: 0.5, xl: 0.75, '2xl': 1, '3xl': 1.5, full: '9999px' }, C.borderRadiusSizes)
    E(borderRadiusSizes, (s, n) => {
      s = sizeWithUnit(s)
      R(`rounded${'_' == n ? '' : `-${n}`}`, `border-radius: ${s};`)
      E(dirs, (v) => {
        if (v.length == 1) {
          let isTB = 't' == v || 'b' == v
          let d2 = isTB ? ['l', 'r'] : ['t', 'b']
          R(`rounded-${v}${'_' == n ? '' : `-${n}`}`, `border-${isTB ? DM[v] : DM[d2[0]]}-${isTB ? DM[d2[0]] : DM[v]}-radius: ${s}; border-${isTB ? DM[v] : DM[d2[1]]}-${isTB ? DM[d2[1]] : DM[v]}-radius: ${s};`)
        } else {
          R(`rounded-${v}${'_' == n ? '' : `-${n}`}`, `border-${DM[v[0]]}-${DM[v[1]]}-radius: ${s}; `)
        }
      })
    })
  })
  R(`rounded-[`, (classDetails) => `border-radius: ${EAV(classDetails.name)};`)
  E(dirs, (v) => {
    if (v.length == 1) {
      let isTB = 't' == v || 'b' == v
      let d2 = isTB ? ['l', 'r'] : ['t', 'b']
      R(`rounded-${v}-[`, (classDetails) => `border-${isTB ? DM[v] : DM[d2[0]]}-${isTB ? DM[d2[0]] : DM[v]}-radius: ${EAV(classDetails.name)}; border-${isTB ? DM[v] : DM[d2[1]]}-${isTB ? DM[d2[1]] : DM[v]}-radius: ${EAV(classDetails.name)};`)
    } else {
      R(`rounded-${v}-[`, (classDetails) => `border-${DM[v[0]]}-${DM[v[1]]}-radius: ${EAV(classDetails.name)}; `)
    }
  })
  E([0, 1, 2, 4, 8], (w) => {
    R(`border${w == 1 ? '' : `-${w}`}`, `border-width: ${w}px;`)
    E(Object.keys(DM), (d) => R(`border-${d}${w == 1 ? '' : `-${w}`}`, `border-${DM[d]}-width: ${w}px;`))
    R(`border-x${w == 1 ? '' : `-${w}`}`, `border-left-width: ${w}px;border-right-width: ${w}px;`)
    R(`border-y${w == 1 ? '' : `-${w}`}`, `border-top-width: ${w}px;border-bottom-width: ${w}px;`)
  })
  GC('border', 'border-color')
  E(['solid', 'dashed', 'dotted', 'double', 'none'], (v) => R(`border-${v}`, `border-style: ${v};`))

  // Divide
  const sc = ' > :not([hidden]) ~ :not([hidden])'
  E(['x', 'y'], (a) => {
    let d2 = a == 'x' ? ['left', 'right'] : ['top', 'bottom']
    R(`divide-${a}-reverse`, { name: `$${sc}`, style: `--${P}-divide-${a}-reverse: 1;` })
    E([0, 1, 2, 4, 8], (w) => {
      R(`divide-${a}${w == 1 ? '' : `-${w}`}`, { name: `$${sc}`, style: `--${P}-divide-${a}-reverse: 0; border-${d2[0]}-width: calc(${w}px * calc(1 - var(--${P}-divide-${a}-reverse))); border-${d2[1]}-width: calc(${w}px * var(--${P}-divide-${a}-reverse));` })
    })
  })
  GC('divide', 'border-color', sc)
  E(['solid', 'dashed', 'dotted', 'double', 'none'], (v) => R(`divide-${v}`, { name: `$${sc}`, style: `border-style: ${v};` }))

  // Ring
  const initShadow = () => addInitStyle(`*, ::before, ::after {--${P}-shadow: 0 0 #0000;}`)
  const initRing = () => {
    initShadow()
    addInitStyle(`*, ::before, ::after {--${P}-ring-inset: var(--${P}-empty,/*!*/ /*!*/); --${P}-ring-offset-width: 0px; --${P}-ring-offset-color: #fff; --${P}-ring-color: rgba(59, 130, 246, 0.5); --${P}-ring-offset-shadow: 0 0 #0000; --${P}-ring-shadow: 0 0 #0000;}`)
  }

  R(`ring-inset`, `--${P}-ring-inset: inset;`)
  E([0, 1, 2, 4, 8, 3], (w) => R(`ring${w == 3 ? '' : `-${w}`}`, `--${P}-ring-offset-shadow: var(--${P}-ring-inset) 0 0 0 var(--${P}-ring-offset-width) var(--${P}-ring-offset-color); --${P}-ring-shadow: var(--${P}-ring-inset) 0 0 0 calc(${w}px + var(--${P}-ring-offset-width)) var(--${P}-ring-color); box-shadow: var(--${P}-ring-offset-shadow), var(--${P}-ring-shadow), var(--${P}-shadow, 0 0 #0000);`, initRing))
  GC('ring', `--${P}-ring-color`)
  E([0, 1, 2, 4, 8], (w) => R(`ring-offset-${w}`, `--${P}-ring-offset-width: ${w}px;`))
  const roc = 'ring-offset-'
  R(roc, (classDetails) => {
    let cv = resolveColor(classDetails.name.substring(roc.length))
    if (!cv) return null
    return `--${P}-ring-offset-color: ${isString(cv) ? cv : '#' + rgbToHex(cv)}; `
  })

  // Effects
  const bs = `box-shadow: var(--${P}-ring-offset-shadow, 0 0 #0000), var(--${P}-ring-shadow, 0 0 #0000), var(--${P}-shadow);`
  E(
    {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      _: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: '0 0 #0000',
    },
    (v, k) => R(`shadow${k == '_' ? '' : `-${k}`}`, `--${P}-shadow: ${v};${bs}`, initRing)
  )

  const bms = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
  E(bms, (v) => R(`mix-blend-${v}`, `mix-blend-mode: ${v};`))
  E(bms, (v) => R(`bg-blend-${v}`, `background-blend-mode: ${v};`))

  // Transition & Animation
  E(
    {
      none: 'none',
      all: 'all',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      _: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'background-color, border-color, color, fill, stroke',
    },
    (v, k) => R(`transition${k == '_' ? '' : `-${k}`}`, `transition-property: ${v}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`)
  )
  R('duration-', (classDetails) => {
    let parts = classDetails.name.split('-')
    return `transition-duration: ${parts[1]}ms;`
  })
  E({ linear: 'linear', in: 'cubic-bezier(0.4, 0, 1, 1)', out: 'cubic-bezier(0, 0, 0.2, 1)', 'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)' }, (v, k) => R(`ease-${k}`, `transition-timing-function: ${v};`))
  R('delay-', (classDetails) => {
    let parts = classDetails.name.split('-')
    return `transition-delay: ${parts[1]}ms;`
  })

  const ani = `animate-`
  R(
    ani,
    (classDetails) => {
      let k = classDetails.name.substring(ani.length)
      let v = C.animation[k]
      if (!v) return null
      return `animation: ${v};`
    },
    (classDetails) => {
      let k = classDetails.name.substring(ani.length)
      if (C.keyframes[k]) addInitStyle(`@keyframes ${k}${C.keyframes[k]}`)
    }
  )

  // Filters
  const initFilters = () => addInitStyle(`*, ::before, ::after {--${P}-opacity:; --${P}-hue-rotate:; --${P}-saturate:; --${P}-contrast:; --${P}-blur:; --${P}-brightness:;}`)
  const filterStyle = `filter: opacity(var(--${P}-opacity)) hue-rotate(var(--${P}-hue-rotate)) saturate(var(--${P}-saturate)) contrast(var(--${P}-contrast)) blur(var(--${P}-blur)) brightness(var(--${P}-brightness))`
  R(
    ['backdrop-', 'opacity-', 'hue-rotate-', 'saturate-', 'contrast-', 'blur', 'brightness-'],
    (classDetails) => {
      let cn = classDetails.name.split('-')
      const isBackdrop = cn[0] === 'backdrop'
      if (isBackdrop) cn = cn.slice(1)
      let name = cn.length > 0 ? cn.slice(0, -1).join('-') : cn[0]
      const value = cn.slice(-1)[0]
      const filter = isBackdrop ? `backdrop-${filterStyle}` : filterStyle
      if (name === 'opacity') return `${filter}; --${P}-${name}: ${+value / 100};`
      if (name.match('brightness|contrast')) return `${filter}; --${P}-${name}: ${(+value / 200) * 2};`

      if (name === 'hue-rotate') return `${filter}; --${P}-${name}: ${value}deg;`
      if (name === 'saturate') return `${filter}; --${P}-${name}:  ${+value / 100};`
      if (name === 'blur' || name === '') {
        if (value === 'blur') {
          return `${filter}; --${P}-blur: 8px;`
        } else if (value == 'none') {
          return
        } else {
          const b = { none: 0, sm: 4, md: 12, lg: 16, xl: 24, '2xl': 40, '3xl': 64 }
          return `${filter}; --${P}-blur: ${b[value]}px;`
        }
      }
    },
    initFilters
  )

  // Transform
  const initTransform = () => addInitStyle(`*, ::before, ::after {--${P}-translate-x: 0; --${P}-translate-y: 0; --${P}-rotate: 0; --${P}-skew-x: 0; --${P}-skew-y: 0; --${P}-scale-x: 1; --${P}-scale-y: 1;}`)
  const transform = `transform: translateX(var(--${P}-translate-x)) translateY(var(--${P}-translate-y)) rotate(var(--${P}-rotate)) skewX(var(--${P}-skew-x)) skewY(var(--${P}-skew-y)) scaleX(var(--${P}-scale-x)) scaleY(var(--${P}-scale-y))`
  R(`transform`, `${transform};`, initTransform)
  R(`transform-none`, `transform: none;`)
  E(['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'], (v) => R(`origin-${v}`, `transform-origin: ${v.replace('-', ' ')};`))
  R(
    ['scale-', '-scale-'],
    (classDetails) => {
      let cn = classDetails.name
      let s = ''
      if ('-' == cn[0]) {
        cn = cn.substring(1)
        s = '-'
      }
      let pos = cn.lastIndexOf('-')
      let name = cn.substring(0, pos)
      let value = cn.substring(pos + 1)
      value = EAV(value) || +value / 100
      if (name === 'scale') return `${transform}; --${P}-scale-x: ${s}${value};--${P}-scale-y: ${s}${value};`
      else return `${transform}; --${P}-${name}: ${s}${value};`
    },
    initTransform
  )
  R(
    ['rotate-', '-rotate-'],
    (classDetails) => {
      let cn = classDetails.name
      let s = ''
      if ('-' == cn[0]) {
        cn = cn.substring(1)
        s = '-'
      }
      let value = cn.substring(cn.lastIndexOf('-') + 1)
      value = EAV(value) || `${value}deg`
      return `${transform}; --${P}-rotate: ${s}${value};`
    },
    initTransform
  )
  function genTrans(name, value) {
    E(['x', 'y'], (a) =>
      E(['', '-'], (s) => {
        R(`${s}translate-${a}-${name}`, `${transform}; --${P}-translate-${a}: ${s}${value};`, initTransform)
      })
    )
  }
  GS(genTrans)
  genTrans('full', '100%')
  E(['x', 'y'], (a) =>
    E(['', '-'], (s) => {
      const prefix = `${s}translate-${a}-[`
      R(
        prefix,
        (classDetails) => {
          let value = classDetails.name.substring(prefix.length, classDetails.name.length - 1)
          return `${transform}; --${P}-translate-${a}: ${s}${value};`
        },
        initTransform
      )
    })
  )
  E(['x', 'y'], (a) =>
    E(['', '-'], (s) => {
      const prefix = `${s}skew-${a}-[`
      E([0, 1, 2, 3, 6, 12], (d) => R(`${s}skew-${a}-${d}`, `${transform}; --${P}-skew-${a}: ${s}${d}deg;`, initTransform))
      R(
        prefix,
        (classDetails) => {
          let value = classDetails.name.substring(prefix.length, classDetails.name.length - 1)
          return `${transform}; --${P}-skew-${a}: ${s}${value};`
        },
        initTransform
      )
    })
  )
  // Content
  R(`content-[`, (classDetails) => `--${P}-content: ${EAV(classDetails.name)};content: var(--${P}-content);`)

  // Outline
  R(`outline-none`, `outline: 2px solid transparent; outline-offset: 2px;`)
  R(`outline`, `outline-style: solid;`)
  E(['dashed', 'dotted', 'double', 'hidden'], (v) => R(`outline-${v}`, `outline-style: ${v};`))
  E([0, 1, 2, 4, 8], (v) => {
    R(`outline-${v}`, `outline-width: ${v}px;`)
    R(`outline-offset-${v}`, `outline-offset: ${v}px;`)
  })
  GC('outline', `outline-color`)

  // Interactivity
  R(`appearance-none`, `appearance: none;`)
  E(['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed'], (v) => R(`cursor-${v}`, `cursor: ${v};`))
  E(['none', 'auto'], (v) => R(`pointer-events-${v}`, `pointer-events: ${v};`))
  E({ none: 'none', y: 'vertical', x: 'horizontal', _: 'both' }, (v, k) => R(`resize${k == '_' ? '' : `-${k}`}`, `resize: ${v};`))
  E(['none', 'text', 'all', 'auto'], (v) => R(`select-${v}`, `user-select: ${v};`))

  // Screen Readers
  R(`sr-only`, `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;`)
  R(`not-sr-only`, `position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;`)
}
if (typeof module !== 'undefined') module.exports = setupPaint