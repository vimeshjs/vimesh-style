
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