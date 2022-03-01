(function (G) {
    if (G.$vms) return // Vimesh style core is already loaded    
    G.$vms = {
        config: {
            auto: true,
            prefix: 'vms',
            breakpoints: {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536
            }
        }
    }
    const $vms = G.$vms
    const C = $vms.config
    const D = document
    function isString(str) {
        return (str != null && typeof str.valueOf() === "string")
    }
    function isArray(array) {
        return Array.isArray(array)
    }
    function isFunction(func) {
        return typeof func === "function";
    }
    function each(objOrArray, callback) {
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
            for (const key in source) {
                target[key] = source[key]
            }
        }
        return target
    }
    $vms._ = { isString, isArray, isFunction, each, extend }

    function domChange(target, callback) {
        if (undefined === callback) {
            callback = target
            target = D.body
        }
        if (!target) return domReady(() => domChange(D.body, callback))
        const observer = new MutationObserver(callback)
        observer.observe(target, { attributes: true, childList: true, subtree: true })
    }
    function domReady(callback) {
        if (D.addEventListener) {
            D.addEventListener('DOMContentLoaded', () => {
                D.removeEventListener('DOMContentLoaded', arguments.callee, false);
                callback();
            }, false)
        }
        else if (D.attachEvent) {
            D.attachEvent('onreadystatechange', () => {
                if (D.readyState == "complete") {
                    D.detachEvent('onreadystatechange', arguments.callee);
                    callback();
                }
            })
        }
        else if (D.lastChild == D.body) {
            callback();
        }
    }
    domReady(() => {
        styleElement = D.createElement('style')
        D.head.appendChild(styleElement)
        updateAutoStyles()
        if (C.auto) resolveAllKnownClasses()
    })
    domChange(() => {
        if (C.auto) resolveAllKnownClasses()
    })
    function resolveAllKnownClasses() {
        let all = D.querySelectorAll('*[class]')
        let max = all.length
        for (let i = 0; i < max; i++) {
            let cn = all[i].className
            if (cn) {
                addClassesToAutoStyles(cn)
                // SVGAnimatedString
                if (cn.baseVal) addClassesToAutoStyles(cn.baseVal)
                if (cn.animVal) addClassesToAutoStyles(cn.animVal)
            }
        }
    }
    let enabledClasses = {}
    let classMap = $vms.classMap = {}
    let initMap = {}
    let autoStyles = []
    let initStyles = []
    let customStyles = []
    let styleElement = null
    let generators = $vms.generators = []

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
        if (styleElement) {
            let styles1 = styleElement.innerHTML
            let styles2 = initStyles.concat(autoStyles, customStyles).join('\n')
            if (styles1 !== styles2)
                styleElement.innerHTML = styles2
        }
    }
    function addCustomStyle(style) {
        if (customStyles.indexOf(style) == -1) {
            customStyles.push(style)
            updateAutoStyles()
        }
    }
    function addInitStyle(style) {
        if (initStyles.indexOf(style) == -1) {
            initStyles.push(style)
            updateAutoStyles()
        }
    }
    function addClassesToAutoStyles(classes) {
        if (classes) {
            if (isString(classes)) classes = classes.split(' ')
            each(classes, name => {
                if (!name || enabledClasses[name]) return
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
                    enabledClasses[name] = true
                    autoStyles.push(style)
                }
            })
            updateAutoStyles()
        }
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

    C.colors = {
        rose: 'f43f5e',
        pink: 'ec4899',
        fuchsia: 'd946ef',
        purple: 'a855f7',
        violet: '8b5cf6',
        indigo: '6366f1',
        blue: '3b82f6',
        sky: '0ea5e9',
        lightBlue: '0ea5e9',
        cyan: '06b6d4',
        teal: '14b8a6',
        emerald: '10b981',
        green: '22c55e',
        lime: '84cc16',
        yellow: 'eab308',
        amber: 'f59e0b',
        orange: 'f97316',
        red: 'ef4444',
        gray: '71717a'
    }
    C.specialColors = {
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor'
    }
    function resolveColor(name) {
        if (!name) return null
        let cv = null
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
            let color = C.colors[name]
            if (!color) return null
            let w = depth ? +depth : 500
            let index = 50 === w ? 1 : (w / 100) + 1
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
        for (i = 0; i <= 96; i++) {
            if (i == 13 || i == 15 || (i >= 16 && (i - 16) % 4 != 0)) continue
            handler(i, `${i * 0.25}${0 == i ? 'px' : 'rem'}`)
            if (1 == i) handler('px', '1px')
            if (i <= 3) handler(i + 0.5, `${i * 0.25 + 0.125}rem`)
        }
    }
    extend($vms, {
        domReady,
        domChange,
        hexToRgb,
        rgbToHex,
        register,
        resolveColor,
        generateColors,
        generateSizes,
        resolveClass,
        addInitStyle,
        addCustomStyle,
        updateAutoStyles,
        resolveAllKnownClasses,
        addClassesToAutoStyles
    })
})(window)