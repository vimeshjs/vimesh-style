// Vimesh Style v0.13.5

function setupCore(G) {
    if (G.$vs) return // Vimesh style core is already loaded    
    G.$vs = {
        config: {
            auto: true,
            prefix: 'vs',
            attributify: 'all', // all, none, prefix
            breakpoints: {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536
            },
            fonts: {
                sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            },
            colors: {
                rose: 'f43f5e',
                pink: 'ec4899',
                fuchsia: 'd946ef',
                purple: 'a855f7',
                violet: '8b5cf6',
                indigo: '6366f1',
                blue: '3b82f6',
                sky: '0ea5e9',
                cyan: '06b6d4',
                teal: '14b8a6',
                emerald: '10b981',
                green: '22c55e',
                lime: '84cc16',
                yellow: 'eab308',
                amber: 'f59e0b',
                orange: 'f97316',
                red: 'ef4444',
                gray: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b']
            },
            aliasColors: {
                lightBlue: 'sky'
            },
            specialColors: {
                white: '#ffffff',
                black: '#000000',
                transparent: 'transparent',
                current: 'currentColor'
            },
            keyframes: {
                spin: `{to{transform:rotate(360deg)}}`,
                ping: `{75%,100%{transform:scale(2);opacity:0}}`,
                pulse: `{50%{opacity:.5}}`,
                bounce: `{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}`
            },
            animation: {
                none: '',
                spin: `spin 1s linear infinite`,
                ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
                pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                bounce: `bounce 1s infinite`
            }
        }
    }

    const $vs = G.$vs
    const C = $vs.config

    function isString(str) {
        return (str != null && typeof str.valueOf() === "string")
    }
    function isArray(array) {
        return Array.isArray(array)
    }
    function isFunction(func) {
        return typeof func === "function";
    }
    function isPlainObject(item) {
        return item !== null && typeof item === 'object' && item.constructor === Object;
    }
    function each(objOrArray, callback) {
        if (!objOrArray) return
        if (isArray(objOrArray)) {
            objOrArray.forEach((val, index) => {
                callback(val, index, index)
            })
        } else {
            Object.entries(objOrArray).forEach(([key, val], index) => {
                callback(val, key, index)
            })
        }
    }
    function extend(target, ...sources) {
        const length = sources.length
        if (length < 1 || target == null) return target
        for (let i = 0; i < length; i++) {
            const source = sources[i]
            Object.keys(source).forEach((key) => {
                var desc = Object.getOwnPropertyDescriptor(source, key)
                if (desc.get || desc.set) {
                    Object.defineProperty(target, key, desc);
                } else {
                    target[key] = source[key]
                }
            })
        }
        return target
    }
    $vs._ = { isString, isArray, isFunction, isPlainObject, each, extend }

    const KNOWN_ATTR_NAMES = 'font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr'
    let addedClasses = {}
    let classMap = $vs.classMap = {}
    let initMap = {}
    let autoStyles = []
    let initStyles = []
    let styleElement = null
    let stylesOutput = null
    let generators = $vs.generators = []
    let cache = {}
    let knownAttributes = {}
    each(KNOWN_ATTR_NAMES.split(','), a => knownAttributes[a] = true)

    function decomposeClassName(className) {
        if (isString(className)) {
            let breakpoint = null
            let pseudo = null
            let segs = className.split(':')
            className = segs[segs.length - 1]
            if (segs.length === 3) {
                breakpoint = segs[0]
                pseudo = segs[1]
            } else if (segs.length === 2) {
                if (C.breakpoints[segs[0]])
                    breakpoint = segs[0]
                else
                    pseudo = segs[0]
            }
            return { breakpoint, pseudo, name: className }
        } else {
            console.error(`Wrong parameter ${className}`)
        }
    }
    function normalizeCssName(name) {
        return name.replace(/:/g, '\\:').replace(/\//g, '\\/').replace(/\./g, '\\.')
    }
    function register(keys, generatorOrStyle, initFunc) {
        if (!generatorOrStyle) return
        if (!isArray(keys)) keys = [keys]
        if (isFunction(generatorOrStyle))
            each(keys, key => generators.push({ prefix: key, generator: generatorOrStyle, init: initFunc }))
        else
            each(keys, key => {
                classMap[key] = generatorOrStyle;
                if (initFunc) initMap[key] = initFunc
            })
    }
    function resolveClass(className) {
        if (!className) return null
        let classDetails = decomposeClassName(className)
        let cdn = classDetails.name
        let style = classMap[cdn]
        if (style && initMap[cdn]) initMap[cdn](classDetails)
        for (let i = 0; !style && i < generators.length; i++) {
            let gi = generators[i]
            if (cdn.indexOf(gi.prefix) == 0) {
                style = gi.generator(classDetails)
                if (style && gi.init) gi.init(classDetails)
            }
        }
        return style
    }
    function updateAutoStyles() {
        let all = initStyles.concat(autoStyles)
        if (all.length > 0) {
            let newStyles = (C.preset ? [C.preset] : []).concat(all).join('\n')
            if (newStyles !== stylesOutput) {
                if (G.document) {
                    if (styleElement)
                        styleElement.innerHTML = stylesOutput = newStyles
                    else
                        setTimeout(updateAutoStyles)
                } else {
                    stylesOutput = newStyles
                }
            }
        }
    }
    function addInitStyle(style) {
        if (initStyles.indexOf(style) == -1) {
            initStyles.push(style)
        }
    }
    function addClasses(classes, update = true) {
        if (classes) {
            if (isString(classes))
                classes = classes.split(' ')
            else {
                let all = []
                each(classes, cls => all = all.concat(cls && cls.split && cls.split(' ') || []))
                classes = all
            }
            each(classes, name => {
                if (!name || addedClasses[name]) return
                let style = resolveClass(name)
                if (style) {
                    let classDetails = decomposeClassName(name)
                    let fullname = normalizeCssName(classDetails.name)
                    if (classDetails.pseudo) fullname = `${classDetails.pseudo}\\:${fullname}:${classDetails.pseudo}`
                    if (classDetails.breakpoint) fullname = `${classDetails.breakpoint}\\:${fullname}`
                    if (style.name) {
                        if (style.name.indexOf('$') == 0) {
                            fullname += style.name.substring(1)
                        } else {
                            fullname = style.name
                        }
                        style = style.style
                    }
                    style = `{${style}}`
                    if (classDetails.breakpoint) {
                        style = `@media (min-width: ${C.breakpoints[classDetails.breakpoint]}px) {\n  .${fullname} ${style} \n}`
                    } else {
                        style = `.${fullname} ${style} `
                    }
                    addedClasses[name] = true
                    autoStyles.push(style)
                }
            })
            if (update) updateAutoStyles()
        }
    }
    function recordKnownClasses(el, update = true) {
        const prefix = C.prefix + ':'
        let classes = []
        let classesFromAttrs = []
        let cn = el.className
        if (cn) {
            classes.push(cn)
            // SVGAnimatedString
            if (cn.baseVal) classes.push(cn.baseVal)
            if (cn.animVal) classes.push(cn.animVal)
        }
        each(el.attributes, a => {
            let prop = a.name
            let group = null
            if (C.attributify !== 'none' && prop.startsWith(prefix))
                group = prop.substring(prefix.length)
            else if (C.attributify === 'all' && knownAttributes[prop])
                group = prop
            if (group) {
                let val = a.value
                let groupCache = cache[group]
                if (!groupCache) groupCache = cache[group] = {}
                each(val.split(/ |,/).filter(Boolean), cls => {
                    let pos = cls.indexOf('~')
                    if (pos !== -1) cls = cls.replace('~', group)
                    if (groupCache[cls]) {
                        if ('-' !== groupCache[cls]) classesFromAttrs.push(groupCache[cls])
                        return
                    }
                    let r = resolveClass(cls)
                    if (r) {
                        classesFromAttrs.push(cls)
                        groupCache[cls] = cls
                    } else {
                        pos = cls.lastIndexOf(':')
                        let ncls = group + '-' + cls
                        if (pos !== -1) {
                            ncls = cls.substring(0, pos + 1) + group + '-' + cls.substring(pos + 1)
                        }
                        r = resolveClass(ncls)
                        if (r) {
                            groupCache[cls] = ncls
                            classesFromAttrs.push(ncls)
                        } else {
                            ncls = group + cls
                            if (pos !== -1) {
                                ncls = cls.substring(0, pos + 1) + group + cls.substring(pos + 1)
                            }
                            r = resolveClass(ncls)
                            if (r) {
                                groupCache[cls] = ncls
                                classesFromAttrs.push(ncls)
                            } else {
                                groupCache[cls] = '-'
                            }
                        }
                    }
                })
            }
        })
        if (el._vs_undo_add_classes_from_attrs)
            el._vs_undo_add_classes_from_attrs()
        if (classesFromAttrs.length > 0) {
            let classesToAdd = classesFromAttrs.join(' ').split(' ').filter(i => !el.classList.contains(i)).filter(Boolean)
            el.classList.add(...classesToAdd)
            el._vs_undo_add_classes_from_attrs = () => {
                el.classList.remove(...classesToAdd)
            }
        }
        return [...classes, ...classesFromAttrs]
    }
    function resolveAll(root, update = true) {
        if (!root || !root.querySelectorAll) return
        let all = [root, ...root.querySelectorAll(C.attributify === 'none' ? '*[class]' : '*')]
        let allClasses = []
        each(all, el => allClasses.push(...recordKnownClasses(el)))
        addClasses(allClasses, update)
    }
    function resetStyles() {
        addedClasses = {}
        autoStyles = []
        stylesOutput = null
        cache = {}
        if (styleElement) {
            styleElement.innerHTML = null
            if (C.auto && G.document) resolveAll(G.document.body)
        }
    }
    const CLASS_NAMES = /class\s*=\s*['\"](?<class>[^'\"]*)['\"]/g
    function extractClasses(html) {
        let match
        let classes = []
        while ((match = CLASS_NAMES.exec(html)) !== null) {
            each(match.groups.class.split(' '), cls => {
                cls = cls && cls.trim()
                if (cls && classes.indexOf(cls) === -1) classes.push(cls)
            })
        }
        return classes
    }
    const hueStep = 2;
    const saturationStep = 0.16;
    const saturationStep2 = 0.05;
    const brightnessStep1 = 0.05;
    const brightnessStep2 = 0.15;
    const lightColorCount = 5;
    const darkColorCount = 4;

    function getHue(hsv, i, isLight) {
        let hue;
        if (hsv.h >= 60 && hsv.h <= 240) {
            hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
        } else {
            hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
        }
        if (hue < 0) {
            hue += 360;
        } else if (hue >= 360) {
            hue -= 360;
        }
        return Math.round(hue);
    }

    function getSaturation(hsv, i, isLight) {
        let saturation;
        if (isLight) {
            saturation = hsv.s - saturationStep * i;
        } else if (i === darkColorCount) {
            saturation = hsv.s + saturationStep;
        } else {
            saturation = hsv.s + saturationStep2 * i;
        }
        if (saturation > 1) {
            saturation = 1;
        }
        if (isLight && i === lightColorCount && saturation > 0.1) {
            saturation = 0.1;
        }
        if (saturation < 0.06) {
            saturation = 0.06;
        }
        return Number(saturation.toFixed(2));
    }

    function getValue(hsv, i, isLight) {
        let value;
        if (isLight) {
            value = hsv.v + brightnessStep1 * i;
        } else {
            value = hsv.v - brightnessStep2 * i
        }
        if (value > 1) {
            value = 1;
        }
        if (value < 0) {
            value = 0
        }
        return Number(value.toFixed(2))
    }
    function rgbToHsv(rgb) {
        let { r, g, b } = rgb
        r /= 255, g /= 255, b /= 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max == 0 ? 0 : d / max;

        if (max == min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return { h, s, v };
    }
    function hsvToRgb(hsv) {
        let { h, s, v } = hsv
        var r, g, b;

        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return { r, g, b }
        }
        return null;
    }
    function rgbToHex(rgb) {
        let { r, g, b } = rgb
        return ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
    }
    function colorPalette(color, index) {
        if (index === 6) return color
        let isLight = index <= 6
        let rgb = hexToRgb(color)
        let hsv = rgbToHsv(rgb)
        var i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
        hsv = { h: hsv.h * 360, s: hsv.s, v: hsv.v }
        hsv = {
            h: getHue(hsv, i, isLight) / 360,
            s: getSaturation(hsv, i, isLight),
            v: getValue(hsv, i, isLight),
        }
        rgb = hsvToRgb(hsv)
        return rgbToHex(rgb)
    }

    function resolveColor(name) {
        if (!name) return null
        let cv = null
        if (C.aliasColors[name]) name = C.aliasColors[name]
        if (C.specialColors[name]) {
            cv = C.specialColors[name]
            if (cv[0] == '#') cv = hexToRgb(cv)
        } else {
            let pos = name.lastIndexOf('-')
            let depth = null
            if (pos != -1) {
                depth = name.substring(pos + 1)
                name = name.substring(0, pos)
                let parts = name.split('-')
                if (parts.length > 1) {
                    name = parts[0]
                    for (let i = 1; i < parts.length; i++) {
                        if (parts[i].length > 0)
                            name += parts[i][0].toUpperCase() + parts[i].substring(1)
                    }
                }
            }
            if (C.aliasColors[name]) name = C.aliasColors[name]
            let color = C.colors[name]
            if (!color) return null
            let w = depth ? +depth : 500
            let index = 50 === w ? 1 : (w / 100) + 1
            if (isArray(color)) return color[index - 1]
            let hex = colorPalette(color, index)
            cv = hexToRgb(hex)
        }
        return cv
    }
    function generateColors(classNamePrefix, styleName, nameAffix) {
        const vn = `--${C.prefix}-${classNamePrefix}-opacity`
        register(`${classNamePrefix}-opacity-`, classDetails => {
            let parts = classDetails.name.split('-')
            let style = `${vn}: ${+parts[2] / 100};`
            return nameAffix ? { name: `$${nameAffix}`, style } : style
        })
        register(`${classNamePrefix}-`, classDetails => {
            let cv = resolveColor(classDetails.name.substring(classNamePrefix.length + 1))
            if (!cv) return null
            let style = isString(cv) ? `${styleName}: ${cv};` : `${vn}:1;${styleName}: rgba(${cv.r},${cv.g},${cv.b},var(${vn}));`
            return nameAffix ? { name: `$${nameAffix}`, style } : style
        })
    }
    function generateSizes(handler) {
        for (let i = 0; i <= 96; i++) {
            if (i == 13 || i == 15 || (i >= 16 && (i - 16) % 4 != 0)) continue
            handler(i, `${i * 0.25}${0 == i ? 'px' : 'rem'}`)
            if (1 == i) handler('px', '1px')
            if (i <= 3) handler(i + 0.5, `${i * 0.25 + 0.125}rem`)
        }
    }
    extend($vs._, {
        hexToRgb,
        rgbToHex,
        register,
        resolveColor,
        generateColors,
        generateSizes,
        resolveClass,
        addInitStyle
    })
    extend($vs, {
        get styles() { return stylesOutput },
        reset: resetStyles,
        extract: extractClasses,
        add: addClasses,
        resolveAll
    })

    if (!G.document) {
        extend($vs, {
            ready(callback) { callback() }
        })
    } else {
        const D = G.document
        extend($vs, {
            ready(callback) {
                if (D.readyState === "complete") {
                    callback()
                } else {
                    D.addEventListener("DOMContentLoaded", callback)
                }
            }
        })
        $vs.ready(() => {
            const VSC = 'vimesh-styles'
            styleElement = D.getElementById(VSC)
            if (!styleElement) {
                styleElement = D.createElement('style')
                styleElement.setAttribute('id', VSC)
                D.head.appendChild(styleElement)
            }
            if (C.auto) resolveAll(D.body)
            const observer = new MutationObserver((mutations) => {
                if (C.auto) {
                    observer.disconnect()
                    each(mutations, m => {
                        if (m.type === 'childList') {
                            m.addedNodes.forEach(node => resolveAll(node, false))
                        } else if (m.type === 'attributes') {
                            addClasses(recordKnownClasses(m.target), false)
                        }
                    })
                    updateAutoStyles()
                    observer.observe(D, { attributes: true, childList: true, subtree: true })
                }
            })
            observer.observe(D, { attributes: true, childList: true, subtree: true })
        })
    }
}
function setupPreset(G) {
    if (!G.$vs) return console.error('Vimesh style core is not loaded!')
    G.$vs.config.preset = `html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`    
}

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
    R(`flex-grow-0`, `flex-grow: 0;`)
    R(`flex-grow`, `flex-grow: 1;`)
    R(`flex-shrink-0`, `flex-shrink: 0;`)
    R(`flex-shrink`, `flex-shrink: 1;`)
    E({ '1': '1 1 0%', auto: "1 1 auto", initial: "0 1 auto", none: 'none' }, (v, k) => R(`flex-${k}`, `flex: ${v};`))
    E(['row', 'row-reverse', 'col', 'col-reverse'], v => R(`flex-${v}`, `flex-direction: ${v.replace('col', 'column')};`))
    E(['wrap', 'wrap-reverse', 'nowrap'], v => R(`flex-${v}`, `flex-wrap: ${v};`))

    // Clear
    E(['left', 'right', 'both', 'none'], v => R(`clear-${v}`, `clear: ${v};`))

    // Position
    E(['static', 'fixed', 'absolute', 'relative', 'sticky'], v => R(v, `position: ${v};`))

    // Width & Height
    E({ auto: 'auto', full: '100%', screen: '100vw', min: 'min-content', max: 'max-content' }, (v, k) => R(`w-${k}`, `width: ${v};`))
    E({ auto: 'auto', full: '100%', screen: '100vh' }, (v, k) => R(`h-${k}`, `height: ${v};`))
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
    const ws = { '0': '0px', full: '100%', min: 'min-content', max: 'max-content' }
    E(ws, (v, k) => R(`min-w-${k}`, `min-width: ${v};`))
    ws.none = 'none'
    ws.prose = '65ch'
    E(['xs', 'sm', 'md', 'lg', 'xl'], (v, i) => ws[v] = `${20 + i * 4}rem`)
    E(['sm', 'md', 'lg', 'xl', '2xl'], v => ws[`screen-${v}`] = `${C.breakpoints[v]}px`)
    for (i = 2; i <= 7; i++) ws[`${i}xl`] = `${30 + i * 6}rem`
    E(ws, (v, k) => R(`max-w-${k}`, `max-width: ${v};`))

    // Min & Max Height
    E({ '0': '0px', full: '100%', screen: '100vh' }, (v, k) => {
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

function setupPaint(G) {
    if (!G.$vs) return console.error('Vimesh style core is not loaded!')
    const E = G.$vs._.each
    const R = G.$vs._.register
    const GS = G.$vs._.generateSizes
    const GC = G.$vs._.generateColors
    const C = G.$vs.config
    const P = C.prefix
    const { rgbToHex, resolveColor, addInitStyle, isString } = G.$vs._
    let i

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
        R(`border${w == 1 ? '' : `-${w}`}`, `border-width: ${w}px;`)
        E(Object.keys(DM), d => R(`border-${d}${w == 1 ? '' : `-${w}`}`, `border-${DM[d]}-width: ${w}px;`))
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
    E({ none: 'none', y: 'vertical', x: 'horizontal', _: 'both' }, (v, k) => R(`resize${k == '_' ? '' : `-${k}`}`, `resize: ${v};`))
    E(['none', 'text', 'all', 'auto'], v => R(`select-${v}`, `user-select: ${v};`))

    // Screen Readers
    R(`sr-only`, `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;`)
    R(`not-sr-only`, `position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;`)
}


function setupVimeshStyle(G) {
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
}

setupVimeshStyle(window)