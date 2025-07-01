// Vimesh Style v1.1.9

function setupCore(G) {
    if (G.$vs) return // Vimesh style core is already loaded    
    G.$vs = {
        config: {
            debug: false,
            auto: true,
            prefix: 'vs',
            attributify: 'none', // all, none, prefix
            spacePlaceholder: '`',
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
                slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"],
                gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827"],
                zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b"],
                neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717"],
                stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917"],
                red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"],
                orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"],
                amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"],
                yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12"],
                lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314"],
                green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"],
                emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b"],
                teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a"],
                cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63"],
                sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e"],
                blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"],
                indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81"],
                violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95"],
                purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87"],
                fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75"],
                pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843"],
                rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337"]
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
            },
            fontSizes: {}, // Font sizes to override
            borderRadiusSizes: {} // Border radius sizes to override
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
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
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
            if (!source) continue
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
    function deepMerge(target, source) {
        if (!source || typeof source !== 'object') {
            return target
        }
        if (!target || typeof target !== 'object') {
            target = Array.isArray(source) ? [] : {}
        }
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const sourceValue = source[key]
                if (Array.isArray(sourceValue)) {
                    target[key] = Array.isArray(target[key])
                        ? target[key].map((item, index) =>
                            sourceValue[index] ? deepMerge(item, sourceValue[index]) : item
                        ).concat(sourceValue.slice(target[key].length))
                        : [...sourceValue]
                } else if (sourceValue && typeof sourceValue === 'object') {
                    target[key] = deepMerge(target[key], sourceValue);
                } else {
                    target[key] = sourceValue
                }
            }
        }
        return target
    }
    $vs._ = { isString, isNumeric, isArray, isFunction, isPlainObject, each, extend, deepMerge }

    const KNOWN_ATTR_NAMES = 'font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr'
    let addedClasses = {}
    let classMap = $vs.classMap = {}
    let initMap = {}
    let autoStyles = {}
    let initStyles = []
    let macroCss = []
    let rootVars = {}
    let styleElement = null
    let stylesOutput = null
    let generators = $vs.generators = []
    let cache = {}
    let cacheDecompose = {}
    let knownAttributes = {}
    let resetListeners = []
    each(KNOWN_ATTR_NAMES.split(','), a => knownAttributes[a] = true)
    const BP_MIN_TPL = "@media (min-width: ${width}) {\n  ${style} \n}"
    const BP_MAX_TPL = "@media not all and (min-width: ${width}) {\n  ${style} \n}"
    const KNOWN_MEDIAS = {
        dark: '@media (prefers-color-scheme: dark)',
        portrait: '@media (orientation: portrait)',
        landscape: '@media (orientation: landscape)',
        'motion-safe': '@media (prefers-reduced-motion: no-preference)',
        'motion-reduce': '@media (prefers-reduced-motion: reduce)',
        'contrast-more': '@media (prefers-contrast: more)',
        'contrast-less': '@media (prefers-contrast: less)',
        print: '@media print'
    }
    const KNOWN_PE = {
        before: 1,
        after: 1,
        'first-letter': 1,
        'first-line': 1,
        marker: 1,
        selection: 1,
        file: 'file-selector-button',
        backdrop: 1,
        placeholder: 1
    }
    const KNOWN_PC = {
        hover: 1,
        focus: 1,
        'focus-within': 1,
        'focus-visible': 1,
        active: 1,
        visited: 1,
        target: 1,
        first: 'first-child',
        last: 'last-child',
        only: 'only-child',
        odd: 'nth-child(odd)',
        even: 'nth-child(even)',
        'first-of-type': 1,
        'last-of-type': 1,
        'only-of-type': 1,
        empty: 1,
        disabled: 1,
        enabled: 1,
        checked: 1,
        indeterminate: 1,
        default: 1,
        required: 1,
        valid: 1,
        invalid: 1,
        'in-range': 1,
        'out-of-range': 1,
        'placeholder-shown': 1,
        autofill: 1,
        'read-only': 1
    }
    function expandModifier(name, m) {
        if (!m) return name
        if (m == 'rtl' || m == 'ltr') return `[dir="${m}"] ${name}`
        if (KNOWN_PC[m]) {
            return `${name}:${KNOWN_PC[m] === 1 ? m : KNOWN_PC[m]}`
        } else if (KNOWN_PE[m]) {
            return `${name}::${KNOWN_PE[m] === 1 ? m : KNOWN_PE[m]}`
        } else if (m.startsWith('aria-')) {
            if (m.startsWith('aria-[')) {
                let av = extractArbitraryValue(m)
                return `${name}[aria-${av}]`
            } else {
                return `${name}[aria-${m.substring(5)}="true"]`
            }
        } else if (m.startsWith('data-[')) {
            let av = extractArbitraryValue(m)
            return `${name}[data-${av}]`
        } else if (m == 'open') {
            return `${name}[open]`
        }
        return name
    }
    function decomposeClassName(className, surfix) {
        if (isString(className)) {
            const bps = C.breakpoints
            let key = className + '`' + (surfix || '')
            if (cacheDecompose[key]) return cacheDecompose[key]
            let fullname = '.' + normalizeCssName(className) + (surfix || '')
            let breakpoint = null
            let pseudo = null
            let dark = className.startsWith('dark:')
            if (dark) className = className.substring(5)
            let segs = className.replace(/:(?=(((?!\]).)*\[)|[^\[\]]*$)/g, '\n').split('\n')
            let template = '${style}'
            const addDark = name => dark ? '.dark ' + name : name
            const addContent = p => p === 'before' || p === 'after' ? `content: var(--${C.prefix}-content);` : ''
            className = segs[segs.length - 1]
            if (segs.length === 3) {
                breakpoint = segs[0]
                pseudo = segs[1]
            } else if (segs.length === 2) {
                if (KNOWN_MEDIAS[segs[0]] || bps[segs[0]] || segs[0].startsWith('min-') || segs[0].startsWith('max-'))
                    breakpoint = segs[0]
                else
                    pseudo = segs[0]
            }
            if (breakpoint) {
                if (KNOWN_MEDIAS[breakpoint]) {
                    template = KNOWN_MEDIAS[breakpoint] + " {\n  ${style} \n}"
                } else if (bps[breakpoint]) {
                    template = BP_MIN_TPL.replace('${width}', `${bps[breakpoint]}px`)
                } else if (breakpoint.startsWith('min-[')) {
                    template = BP_MIN_TPL.replace('${width}', extractArbitraryValue(breakpoint))
                } else if (breakpoint.startsWith('max-[')) {
                    template = "@media (max-width: " + extractArbitraryValue(breakpoint) + ") {\n  ${style} \n}"
                } else if (breakpoint.startsWith('max-')) {
                    breakpoint = breakpoint.substring(4)
                    if (bps[breakpoint]) {
                        template = BP_MAX_TPL.replace('${width}', `${bps[breakpoint]}px`)
                    }
                }
            }
            if (pseudo) {
                let nameTpl = '${name}'
                if (pseudo.startsWith('group-')) {
                    let pos = pseudo.indexOf('/')
                    let gn = normalizeCssName('group' + (pos === -1 ? '' : pseudo.substring(pos)))
                    if (pseudo.startsWith('group-[')) {
                        let av = extractArbitraryValue(pseudo)
                        if (av.endsWith('_&')) {
                            nameTpl = av.substring(0, av.length - 2) + ' .' + gn + ' ${name}'
                        } else {
                            nameTpl = '.' + gn + av + ' ${name}'
                        }
                    } else {
                        pseudo = pos === -1 ? pseudo.substring(6) : pseudo.substring(6, pos)
                        nameTpl = '.' + expandModifier(gn, pseudo) + ' ${name}'
                    }
                    template = template.replace('${style}', addDark(nameTpl.replace('${name}', fullname)) + '{' + addContent(pseudo) + '${style}}')
                } else if (pseudo.startsWith('peer-')) {
                    let pos = pseudo.indexOf('/')
                    let pn = normalizeCssName('peer' + (pos === -1 ? '' : pseudo.substring(pos)))
                    if (pseudo.startsWith('peer-[')) {
                        let av = extractArbitraryValue(pseudo)
                        if (av.endsWith('_&')) {
                            nameTpl = av.substring(0, av.length - 2) + ' .' + pn + ' ~ ${name}'
                        } else {
                            nameTpl = '.' + pn + av + ' ~ ${name}'
                        }
                    } else {
                        pseudo = pos === -1 ? pseudo.substring(5) : pseudo.substring(5, pos)
                        nameTpl = '.' + expandModifier(pn, pseudo) + ' ~ ${name}'
                    }
                    template = template.replace('${style}', addDark(nameTpl.replace('${name}', fullname)) + '{' + addContent(pseudo) + '${style}}')
                } else {
                    template = template.replace('${style}', addDark(expandModifier(fullname, pseudo)) + '{' + addContent(pseudo) + '${style}}')
                }
            } else {
                template = template.replace('${style}', addDark(fullname) + '{${style}}')
            }
            cacheDecompose[key] = { breakpoint, pseudo, name: className, template }
            return cacheDecompose[key]
        } else {
            console.error(`Wrong parameter ${className}`)
        }
    }
    function normalizeCssName(value) {
        var string = String(value)
        var length = string.length
        var index = -1
        var codeUnit
        var result = ''
        var firstCodeUnit = string.charCodeAt(0)

        if (length == 1 && firstCodeUnit == 0x002D) {
            return '\\' + string
        }

        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            if (codeUnit == 0x0000) {
                result += '\uFFFD'
                continue
            }

            if ((codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
                (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
                (index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D)) {
                result += '\\' + codeUnit.toString(16) + ' '
                continue
            }
            if (
                codeUnit >= 0x0080 ||
                codeUnit == 0x002D ||
                codeUnit == 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A
            ) {
                result += string.charAt(index)
                continue
            }
            result += '\\' + string.charAt(index)
        }
        return result
    }
    function register(keys, generatorOrStyle, initFunc) {
        if (!generatorOrStyle) return
        if (!isArray(keys)) keys = [keys]
        if (isFunction(generatorOrStyle))
            each(keys, key => generators.unshift({ prefix: key, generator: generatorOrStyle, init: initFunc }))
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
        if (!style && C.debug) console.log(`Unknown class: ${className}`)
        return style
    }
    function addMacroCss(css) {
        if (isPlainObject(css))
            macroCss.push(css)
        else if (isArray(css))
            macroCss.push(...css)
    }
    function addRootVars(vars) {
        rootVars = { ...rootVars, ...vars }
    }
    function updateAutoStyles() {
        let keys = Object.keys(autoStyles).sort((a, b) => (C.breakpoints[a] || 0) - (C.breakpoints[b] || 0))
        let all = initStyles
        each(keys, k => all = all.concat(autoStyles[k]))
        let macroStyles = []
        each(macroCss, css => {
            each(css, (macro, selectors) => {
                let extended = macro.split(' ').map(cls => resolveClass(cls)).join('')
                macroStyles.push(`${selectors} {${extended}}`)
            })
        })
        let varDefs = []
        each(rootVars, (v, k) => {
            if (!k.startsWith('--')) k = '--' + k
            varDefs.push(`${k}:${v};`)
        })
        if (varDefs.length > 0) {
            macroStyles.push(`:root{\n${varDefs.join('\n')}\n}`)
        }
        all = all.concat(macroStyles)
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
                name = name.trim()
                if (!name || addedClasses[name]) return
                let style = resolveClass(name)
                if (style) {
                    let surfix = ''
                    if (style.name) {
                        if (style.name.indexOf('$') == 0) {
                            surfix = style.name.substring(1)
                        }
                        style = style.style
                    }
                    let classDetails = decomposeClassName(name, surfix)
                    style = classDetails.template.replace('${style}', style)
                    addedClasses[name] = true
                    let bpStyles = autoStyles[classDetails.breakpoint || '']
                    if (!bpStyles) bpStyles = autoStyles[classDetails.breakpoint || ''] = []
                    bpStyles.push(style)
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
    function resetStyles(extraConfig) {
        if (extraConfig) {
            deepMerge(C, extraConfig)
            if (extraConfig.aliasColors) {
                each(extraConfig.aliasColors, (alias, name) => {
                    if (alias && !C.colors[alias] && alias[0] === '#') {
                        C.colors[name] = hexToPalette(alias)
                        delete C.aliasColors[name]
                    }
                })
            }
        }
        each(resetListeners, callback => callback())
        addedClasses = {}
        autoStyles = {}
        stylesOutput = null
        cache = {}
        if (styleElement) {
            styleElement.innerHTML = null
            if (C.auto && G.document) resolveAll(G.document.body)
        }
    }
    function autoGenerateOnReset(callback) {
        resetListeners.push(callback)
        callback()
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

    function hexToHsv(hex) {
        hex = hex.replace(/^#/, "");
        if (hex.length === 3) {
            hex = hex
                .split("")
                .map((c) => c + c)
                .join("");
        }

        const [r, g, b] = hex.match(/\w{2}/g).map((v) => parseInt(v, 16) / 255);
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;

        let h = 0;
        const s = max === 0 ? 0 : diff / max;
        const v = max;

        if (diff !== 0) {
            const cases = [
                [g, b, (g - b) / diff + (g < b ? 6 : 0)], // r is max
                [b, r, (b - r) / diff + 2], // g is max
                [r, g, (r - g) / diff + 4], // b is max
            ];
            h = cases[[r, g, b].indexOf(max)][2];
            h /= 6;
        }

        return { h: h * 360, s, v };
    }

    function hsvToHex(hsv) {
        const { h, s, v } = hsv;
        const hh = h / 360;
        const i = Math.floor(hh * 6);
        const f = hh * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        const cases = [
            [v, t, p], // case 0
            [q, v, p], // case 1
            [p, v, t], // case 2
            [p, q, v], // case 3
            [t, p, v], // case 4
            [v, p, q], // case 5
        ];
        const [r, g, b] = cases[i % 6];

        const toHex = (x) =>
            Math.round(x * 255)
                .toString(16)
                .padStart(2, "0");
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    const hueStep = 2;
    const saturationStep = 0.16;
    const saturationStep2 = 0.05;
    const brightnessStep1 = 0.05;
    const brightnessStep2 = 0.15;
    const lightColorCount = 5;
    const darkColorCount = 4;

    function getHue(hsv, i, light) {
        const roundedH = Math.round(hsv.h);
        const hInRange = roundedH >= 60 && roundedH <= 240;
        const step = hueStep * i;
        const adjust = light === hInRange ? -1 : 1;
        let hue = hsv.h + adjust * step;
        hue = ((hue % 360) + 360) % 360; // 规范化到0-359范围
        return Math.round(hue);
    }

    function getSaturation(hsv, i, light) {
        if (hsv.h + hsv.s === 0) return hsv.s; // 优化灰度判断

        let saturation = light
            ? hsv.s - saturationStep * i
            : i === darkColorCount
                ? hsv.s + saturationStep
                : hsv.s + saturationStep2 * i;

        if (light && i === lightColorCount)
            saturation = Math.min(saturation, 0.1);
        return Number(Math.max(0.06, Math.min(1, saturation)).toFixed(2));
    }

    function getValue(hsv, i, light) {
        const value = light
            ? hsv.v + brightnessStep1 * i
            : hsv.v - brightnessStep2 * i;
        return Number(Math.max(0, Math.min(1, value)).toFixed(2));
    }

    function hexToPalette(hex) {
        const patterns = [];
        const primaryColor = hexToHsv(hex);
        const hsv = primaryColor;

        for (let i = lightColorCount; i > 0; i--) {
            patterns.push({
                h: getHue(hsv, i, true),
                s: getSaturation(hsv, i, true),
                v: getValue(hsv, i, true),
            });
        }

        patterns.push(primaryColor);

        for (let i = 1; i <= darkColorCount; i++) {
            patterns.push({
                h: getHue(hsv, i),
                s: getSaturation(hsv, i),
                v: getValue(hsv, i),
            });
        }

        return patterns.map((c) => hsvToHex(c));
    }
    function resolveColor(name) {
        if (!name) return null
        name = name.trim()
        let alpha = null
        let pos = name.lastIndexOf('/')
        if (pos !== -1) {
            let alphaDef = name.substring(pos + 1).trim()
            name = name.substring(0, pos)
            let av = extractArbitraryValue(alphaDef)
            if (av) {
                alpha = +av
            } else {
                alpha = +alphaDef / 100
            }
        }
        let cv = extractArbitraryValue(name)
        if (!cv) {
            if (C.aliasColors[name]) name = C.aliasColors[name]
            if (C.specialColors[name]) {
                cv = C.specialColors[name]
            } else {
                pos = name.lastIndexOf('-')
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
                cv = color[index - 1]
            }
        }
        if (cv && cv[0] === '#') {
            cv = hexToRgb(cv)
            if (alpha !== null) cv.a = alpha
        }
        return cv
    }
    //function generate
    function generateColors(classNamePrefix, styleName, nameAffix) {
        const vn = `--${C.prefix}-${classNamePrefix}-opacity`
        register(`${classNamePrefix}-opacity-`, classDetails => {
            let parts = classDetails.name.split('-')
            let style = `${vn}: ${+parts[2] / 100};`
            return nameAffix ? { name: `$${nameAffix}`, style } : style
        })
        register(`${classNamePrefix}-`, classDetails => {
            let color = classDetails.name.substring(classNamePrefix.length + 1)
            let cv = resolveColor(color)
            if (!cv) return null
            let style = isString(cv) ? `${styleName}: ${cv};` : `${undefined === cv.a ? `${vn}:1;` : ''}${styleName}: rgba(${cv.r},${cv.g},${cv.b},${undefined === cv.a ? `var(${vn})` : cv.a});`
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
        each([2, 3, 4, 5, 6, 12], max => {
            for (let i = 1; i < max; i++) {
                let name = `${i}/${max}`
                let value = `${+(i * 100 / max).toFixed(6)}%`
                handler(name, value)
            }
        })
    }
    function extractArbitraryValue(name) {
        if (!name) return null
        let p1 = name.indexOf('[')
        let p2 = name.indexOf(']')
        if (p1 >= 0 && p2 > p1)
            return name.substring(p1 + 1, p2).split($vs.config.spacePlaceholder).join(' ')
        return null
    }
    extend($vs._, {
        hexToRgb,
        rgbToHex,
        resolveColor,
        hexToPalette,
        generateColors,
        generateSizes,
        resolveClass,
        addInitStyle,
        autoGenerateOnReset,
        extractArbitraryValue
    })
    extend($vs, {
        get styles() { return stylesOutput },
        reset: resetStyles,
        extract: extractClasses,
        add: addClasses,
        addMacroCss,
        addRootVars,
        resolveAll,
        register
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
        R(`s-${name}`, `width: ${value};height: ${value};`)
    })
    R(`w-[`, classDetails => `width: ${EAV(classDetails.name)};`)
    R(`h-[`, classDetails => `height: ${EAV(classDetails.name)};`)
    R(`s-[`, classDetails => `width: ${EAV(classDetails.name)};height: ${EAV(classDetails.name)};`)

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
    R(`z-[`, classDetails => `z-index: ${EAV(classDetails.name)};`)

    // Tables
    R(`border-collapse`, `border-collapse: collapse;`)
    R(`border-separate`, `border-collapse: separate;`)
    R(`table-auto`, `table-layout: auto;`)
    R(`table-fixed`, `table-layout: fixed;`)

}
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


function setupVimeshStyle(G) {
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
}

setupVimeshStyle(window)