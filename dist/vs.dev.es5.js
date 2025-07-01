// Vimesh Style (ES5) v1.1.9
"use strict";

function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); return result && (result.groups = buildGroups(result, this)), result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function setupCore(G) {
  if (G.$vs) return; // Vimesh style core is already loaded    

  G.$vs = {
    config: {
      debug: false,
      auto: true,
      prefix: 'vs',
      attributify: 'none',
      // all, none, prefix
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
        spin: "{to{transform:rotate(360deg)}}",
        ping: "{75%,100%{transform:scale(2);opacity:0}}",
        pulse: "{50%{opacity:.5}}",
        bounce: "{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"
      },
      animation: {
        none: '',
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
      },
      fontSizes: {},
      // Font sizes to override
      borderRadiusSizes: {} // Border radius sizes to override

    }
  };
  var $vs = G.$vs;
  var C = $vs.config;

  function isString(str) {
    return str != null && typeof str.valueOf() === "string";
  }

  function isArray(array) {
    return Array.isArray(array);
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function isFunction(func) {
    return typeof func === "function";
  }

  function isPlainObject(item) {
    return item !== null && _typeof(item) === 'object' && item.constructor === Object;
  }

  function each(objOrArray, callback) {
    if (!objOrArray) return;

    if (isArray(objOrArray)) {
      objOrArray.forEach(function (val, index) {
        callback(val, index, index);
      });
    } else {
      Object.entries(objOrArray).forEach(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        callback(val, key, index);
      });
    }
  }

  function extend(target) {
    var _arguments = arguments;
    var length = arguments.length <= 1 ? 0 : arguments.length - 1;
    if (length < 1 || target == null) return target;

    var _loop = function _loop(i) {
      var source = i + 1 < 1 || _arguments.length <= i + 1 ? undefined : _arguments[i + 1];
      if (!source) return "continue";
      Object.keys(source).forEach(function (key) {
        var desc = Object.getOwnPropertyDescriptor(source, key);

        if (desc.get || desc.set) {
          Object.defineProperty(target, key, desc);
        } else {
          target[key] = source[key];
        }
      });
    };

    for (var i = 0; i < length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return target;
  }

  function deepMerge(target, source) {
    if (!source || _typeof(source) !== 'object') {
      return target;
    }

    if (!target || _typeof(target) !== 'object') {
      target = Array.isArray(source) ? [] : {};
    }

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        (function () {
          var sourceValue = source[key];

          if (Array.isArray(sourceValue)) {
            target[key] = Array.isArray(target[key]) ? target[key].map(function (item, index) {
              return sourceValue[index] ? deepMerge(item, sourceValue[index]) : item;
            }).concat(sourceValue.slice(target[key].length)) : _toConsumableArray(sourceValue);
          } else if (sourceValue && _typeof(sourceValue) === 'object') {
            target[key] = deepMerge(target[key], sourceValue);
          } else {
            target[key] = sourceValue;
          }
        })();
      }
    }

    return target;
  }

  $vs._ = {
    isString: isString,
    isNumeric: isNumeric,
    isArray: isArray,
    isFunction: isFunction,
    isPlainObject: isPlainObject,
    each: each,
    extend: extend,
    deepMerge: deepMerge
  };
  var KNOWN_ATTR_NAMES = 'font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr';
  var addedClasses = {};
  var classMap = $vs.classMap = {};
  var initMap = {};
  var autoStyles = {};
  var initStyles = [];
  var macroCss = [];
  var rootVars = {};
  var styleElement = null;
  var stylesOutput = null;
  var generators = $vs.generators = [];
  var cache = {};
  var cacheDecompose = {};
  var knownAttributes = {};
  var resetListeners = [];
  each(KNOWN_ATTR_NAMES.split(','), function (a) {
    return knownAttributes[a] = true;
  });
  var BP_MIN_TPL = "@media (min-width: ${width}) {\n  ${style} \n}";
  var BP_MAX_TPL = "@media not all and (min-width: ${width}) {\n  ${style} \n}";
  var KNOWN_MEDIAS = {
    dark: '@media (prefers-color-scheme: dark)',
    portrait: '@media (orientation: portrait)',
    landscape: '@media (orientation: landscape)',
    'motion-safe': '@media (prefers-reduced-motion: no-preference)',
    'motion-reduce': '@media (prefers-reduced-motion: reduce)',
    'contrast-more': '@media (prefers-contrast: more)',
    'contrast-less': '@media (prefers-contrast: less)',
    print: '@media print'
  };
  var KNOWN_PE = {
    before: 1,
    after: 1,
    'first-letter': 1,
    'first-line': 1,
    marker: 1,
    selection: 1,
    file: 'file-selector-button',
    backdrop: 1,
    placeholder: 1
  };
  var KNOWN_PC = {
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
    "default": 1,
    required: 1,
    valid: 1,
    invalid: 1,
    'in-range': 1,
    'out-of-range': 1,
    'placeholder-shown': 1,
    autofill: 1,
    'read-only': 1
  };

  function expandModifier(name, m) {
    if (!m) return name;
    if (m == 'rtl' || m == 'ltr') return "[dir=\"".concat(m, "\"] ").concat(name);

    if (KNOWN_PC[m]) {
      return "".concat(name, ":").concat(KNOWN_PC[m] === 1 ? m : KNOWN_PC[m]);
    } else if (KNOWN_PE[m]) {
      return "".concat(name, "::").concat(KNOWN_PE[m] === 1 ? m : KNOWN_PE[m]);
    } else if (m.startsWith('aria-')) {
      if (m.startsWith('aria-[')) {
        var av = extractArbitraryValue(m);
        return "".concat(name, "[aria-").concat(av, "]");
      } else {
        return "".concat(name, "[aria-").concat(m.substring(5), "=\"true\"]");
      }
    } else if (m.startsWith('data-[')) {
      var _av = extractArbitraryValue(m);

      return "".concat(name, "[data-").concat(_av, "]");
    } else if (m == 'open') {
      return "".concat(name, "[open]");
    }

    return name;
  }

  function decomposeClassName(className, surfix) {
    if (isString(className)) {
      var bps = C.breakpoints;
      var key = className + '`' + (surfix || '');
      if (cacheDecompose[key]) return cacheDecompose[key];
      var fullname = '.' + normalizeCssName(className) + (surfix || '');
      var breakpoint = null;
      var pseudo = null;
      var dark = className.startsWith('dark:');
      if (dark) className = className.substring(5);
      var segs = className.replace(/:(?=(((?!\]).)*\[)|[^\[\]]*$)/g, '\n').split('\n');
      var template = '${style}';

      var addDark = function addDark(name) {
        return dark ? '.dark ' + name : name;
      };

      var addContent = function addContent(p) {
        return p === 'before' || p === 'after' ? "content: var(--".concat(C.prefix, "-content);") : '';
      };

      className = segs[segs.length - 1];

      if (segs.length === 3) {
        breakpoint = segs[0];
        pseudo = segs[1];
      } else if (segs.length === 2) {
        if (KNOWN_MEDIAS[segs[0]] || bps[segs[0]] || segs[0].startsWith('min-') || segs[0].startsWith('max-')) breakpoint = segs[0];else pseudo = segs[0];
      }

      if (breakpoint) {
        if (KNOWN_MEDIAS[breakpoint]) {
          template = KNOWN_MEDIAS[breakpoint] + " {\n  ${style} \n}";
        } else if (bps[breakpoint]) {
          template = BP_MIN_TPL.replace('${width}', "".concat(bps[breakpoint], "px"));
        } else if (breakpoint.startsWith('min-[')) {
          template = BP_MIN_TPL.replace('${width}', extractArbitraryValue(breakpoint));
        } else if (breakpoint.startsWith('max-[')) {
          template = "@media (max-width: " + extractArbitraryValue(breakpoint) + ") {\n  ${style} \n}";
        } else if (breakpoint.startsWith('max-')) {
          breakpoint = breakpoint.substring(4);

          if (bps[breakpoint]) {
            template = BP_MAX_TPL.replace('${width}', "".concat(bps[breakpoint], "px"));
          }
        }
      }

      if (pseudo) {
        var nameTpl = '${name}';

        if (pseudo.startsWith('group-')) {
          var pos = pseudo.indexOf('/');
          var gn = normalizeCssName('group' + (pos === -1 ? '' : pseudo.substring(pos)));

          if (pseudo.startsWith('group-[')) {
            var av = extractArbitraryValue(pseudo);

            if (av.endsWith('_&')) {
              nameTpl = av.substring(0, av.length - 2) + ' .' + gn + ' ${name}';
            } else {
              nameTpl = '.' + gn + av + ' ${name}';
            }
          } else {
            pseudo = pos === -1 ? pseudo.substring(6) : pseudo.substring(6, pos);
            nameTpl = '.' + expandModifier(gn, pseudo) + ' ${name}';
          }

          template = template.replace('${style}', addDark(nameTpl.replace('${name}', fullname)) + '{' + addContent(pseudo) + '${style}}');
        } else if (pseudo.startsWith('peer-')) {
          var _pos = pseudo.indexOf('/');

          var pn = normalizeCssName('peer' + (_pos === -1 ? '' : pseudo.substring(_pos)));

          if (pseudo.startsWith('peer-[')) {
            var _av2 = extractArbitraryValue(pseudo);

            if (_av2.endsWith('_&')) {
              nameTpl = _av2.substring(0, _av2.length - 2) + ' .' + pn + ' ~ ${name}';
            } else {
              nameTpl = '.' + pn + _av2 + ' ~ ${name}';
            }
          } else {
            pseudo = _pos === -1 ? pseudo.substring(5) : pseudo.substring(5, _pos);
            nameTpl = '.' + expandModifier(pn, pseudo) + ' ~ ${name}';
          }

          template = template.replace('${style}', addDark(nameTpl.replace('${name}', fullname)) + '{' + addContent(pseudo) + '${style}}');
        } else {
          template = template.replace('${style}', addDark(expandModifier(fullname, pseudo)) + '{' + addContent(pseudo) + '${style}}');
        }
      } else {
        template = template.replace('${style}', addDark(fullname) + '{${style}}');
      }

      cacheDecompose[key] = {
        breakpoint: breakpoint,
        pseudo: pseudo,
        name: className,
        template: template
      };
      return cacheDecompose[key];
    } else {
      console.error("Wrong parameter ".concat(className));
    }
  }

  function normalizeCssName(value) {
    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);

    if (length == 1 && firstCodeUnit == 0x002D) {
      return '\\' + string;
    }

    while (++index < length) {
      codeUnit = string.charCodeAt(index);

      if (codeUnit == 0x0000) {
        result += "\uFFFD";
        continue;
      }

      if (codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F || index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 || index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }

      if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        result += string.charAt(index);
        continue;
      }

      result += '\\' + string.charAt(index);
    }

    return result;
  }

  function register(keys, generatorOrStyle, initFunc) {
    if (!generatorOrStyle) return;
    if (!isArray(keys)) keys = [keys];
    if (isFunction(generatorOrStyle)) each(keys, function (key) {
      return generators.unshift({
        prefix: key,
        generator: generatorOrStyle,
        init: initFunc
      });
    });else each(keys, function (key) {
      classMap[key] = generatorOrStyle;
      if (initFunc) initMap[key] = initFunc;
    });
  }

  function resolveClass(className) {
    if (!className) return null;
    var classDetails = decomposeClassName(className);
    var cdn = classDetails.name;
    var style = classMap[cdn];
    if (style && initMap[cdn]) initMap[cdn](classDetails);

    for (var i = 0; !style && i < generators.length; i++) {
      var gi = generators[i];

      if (cdn.indexOf(gi.prefix) == 0) {
        style = gi.generator(classDetails);
        if (style && gi.init) gi.init(classDetails);
      }
    }

    if (!style && C.debug) console.log("Unknown class: ".concat(className));
    return style;
  }

  function addMacroCss(css) {
    if (isPlainObject(css)) macroCss.push(css);else if (isArray(css)) macroCss.push.apply(macroCss, _toConsumableArray(css));
  }

  function addRootVars(vars) {
    rootVars = _objectSpread(_objectSpread({}, rootVars), vars);
  }

  function updateAutoStyles() {
    var keys = Object.keys(autoStyles).sort(function (a, b) {
      return (C.breakpoints[a] || 0) - (C.breakpoints[b] || 0);
    });
    var all = initStyles;
    each(keys, function (k) {
      return all = all.concat(autoStyles[k]);
    });
    var macroStyles = [];
    each(macroCss, function (css) {
      each(css, function (macro, selectors) {
        var extended = macro.split(' ').map(function (cls) {
          return resolveClass(cls);
        }).join('');
        macroStyles.push("".concat(selectors, " {").concat(extended, "}"));
      });
    });
    var varDefs = [];
    each(rootVars, function (v, k) {
      if (!k.startsWith('--')) k = '--' + k;
      varDefs.push("".concat(k, ":").concat(v, ";"));
    });

    if (varDefs.length > 0) {
      macroStyles.push(":root{\n".concat(varDefs.join('\n'), "\n}"));
    }

    all = all.concat(macroStyles);

    if (all.length > 0) {
      var newStyles = (C.preset ? [C.preset] : []).concat(all).join('\n');

      if (newStyles !== stylesOutput) {
        if (G.document) {
          if (styleElement) styleElement.innerHTML = stylesOutput = newStyles;else setTimeout(updateAutoStyles);
        } else {
          stylesOutput = newStyles;
        }
      }
    }
  }

  function addInitStyle(style) {
    if (initStyles.indexOf(style) == -1) {
      initStyles.push(style);
    }
  }

  function addClasses(classes) {
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (classes) {
      if (isString(classes)) classes = classes.split(' ');else {
        var all = [];
        each(classes, function (cls) {
          return all = all.concat(cls && cls.split && cls.split(' ') || []);
        });
        classes = all;
      }
      each(classes, function (name) {
        name = name.trim();
        if (!name || addedClasses[name]) return;
        var style = resolveClass(name);

        if (style) {
          var surfix = '';

          if (style.name) {
            if (style.name.indexOf('$') == 0) {
              surfix = style.name.substring(1);
            }

            style = style.style;
          }

          var classDetails = decomposeClassName(name, surfix);
          style = classDetails.template.replace('${style}', style);
          addedClasses[name] = true;
          var bpStyles = autoStyles[classDetails.breakpoint || ''];
          if (!bpStyles) bpStyles = autoStyles[classDetails.breakpoint || ''] = [];
          bpStyles.push(style);
        }
      });
      if (update) updateAutoStyles();
    }
  }

  function recordKnownClasses(el) {
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var prefix = C.prefix + ':';
    var classes = [];
    var classesFromAttrs = [];
    var cn = el.className;

    if (cn) {
      classes.push(cn); // SVGAnimatedString

      if (cn.baseVal) classes.push(cn.baseVal);
      if (cn.animVal) classes.push(cn.animVal);
    }

    each(el.attributes, function (a) {
      var prop = a.name;
      var group = null;
      if (C.attributify !== 'none' && prop.startsWith(prefix)) group = prop.substring(prefix.length);else if (C.attributify === 'all' && knownAttributes[prop]) group = prop;

      if (group) {
        var val = a.value;
        var groupCache = cache[group];
        if (!groupCache) groupCache = cache[group] = {};
        each(val.split(/ |,/).filter(Boolean), function (cls) {
          var pos = cls.indexOf('~');
          if (pos !== -1) cls = cls.replace('~', group);

          if (groupCache[cls]) {
            if ('-' !== groupCache[cls]) classesFromAttrs.push(groupCache[cls]);
            return;
          }

          var r = resolveClass(cls);

          if (r) {
            classesFromAttrs.push(cls);
            groupCache[cls] = cls;
          } else {
            pos = cls.lastIndexOf(':');
            var ncls = group + '-' + cls;

            if (pos !== -1) {
              ncls = cls.substring(0, pos + 1) + group + '-' + cls.substring(pos + 1);
            }

            r = resolveClass(ncls);

            if (r) {
              groupCache[cls] = ncls;
              classesFromAttrs.push(ncls);
            } else {
              ncls = group + cls;

              if (pos !== -1) {
                ncls = cls.substring(0, pos + 1) + group + cls.substring(pos + 1);
              }

              r = resolveClass(ncls);

              if (r) {
                groupCache[cls] = ncls;
                classesFromAttrs.push(ncls);
              } else {
                groupCache[cls] = '-';
              }
            }
          }
        });
      }
    });
    if (el._vs_undo_add_classes_from_attrs) el._vs_undo_add_classes_from_attrs();

    if (classesFromAttrs.length > 0) {
      var _el$classList;

      var classesToAdd = classesFromAttrs.join(' ').split(' ').filter(function (i) {
        return !el.classList.contains(i);
      }).filter(Boolean);

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classesToAdd));

      el._vs_undo_add_classes_from_attrs = function () {
        var _el$classList2;

        (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classesToAdd));
      };
    }

    return [].concat(classes, classesFromAttrs);
  }

  function resolveAll(root) {
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!root || !root.querySelectorAll) return;
    var all = [root].concat(_toConsumableArray(root.querySelectorAll(C.attributify === 'none' ? '*[class]' : '*')));
    var allClasses = [];
    each(all, function (el) {
      return allClasses.push.apply(allClasses, _toConsumableArray(recordKnownClasses(el)));
    });
    addClasses(allClasses, update);
  }

  function resetStyles(extraConfig) {
    if (extraConfig) {
      deepMerge(C, extraConfig);

      if (extraConfig.aliasColors) {
        each(extraConfig.aliasColors, function (alias, name) {
          if (alias && !C.colors[alias] && alias[0] === '#') {
            C.colors[name] = hexToPalette(alias);
            delete C.aliasColors[name];
          }
        });
      }
    }

    each(resetListeners, function (callback) {
      return callback();
    });
    addedClasses = {};
    autoStyles = {};
    stylesOutput = null;
    cache = {};

    if (styleElement) {
      styleElement.innerHTML = null;
      if (C.auto && G.document) resolveAll(G.document.body);
    }
  }

  function autoGenerateOnReset(callback) {
    resetListeners.push(callback);
    callback();
  }

  var CLASS_NAMES = /*#__PURE__*/_wrapRegExp(/class\s*=\s*['\"]([^'\"]*)['\"]/g, {
    "class": 1
  });

  function extractClasses(html) {
    var match;
    var classes = [];

    while ((match = CLASS_NAMES.exec(html)) !== null) {
      each(match.groups["class"].split(' '), function (cls) {
        cls = cls && cls.trim();
        if (cls && classes.indexOf(cls) === -1) classes.push(cls);
      });
    }

    return classes;
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      return {
        r: r,
        g: g,
        b: b
      };
    }

    return null;
  }

  function rgbToHex(rgb) {
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b;
    return ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
  }

  function hexToHsv(hex) {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
      hex = hex.split("").map(function (c) {
        return c + c;
      }).join("");
    }

    var _hex$match$map = hex.match(/\w{2}/g).map(function (v) {
      return parseInt(v, 16) / 255;
    }),
        _hex$match$map2 = _slicedToArray(_hex$match$map, 3),
        r = _hex$match$map2[0],
        g = _hex$match$map2[1],
        b = _hex$match$map2[2];

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var diff = max - min;
    var h = 0;
    var s = max === 0 ? 0 : diff / max;
    var v = max;

    if (diff !== 0) {
      var cases = [[g, b, (g - b) / diff + (g < b ? 6 : 0)], // r is max
      [b, r, (b - r) / diff + 2], // g is max
      [r, g, (r - g) / diff + 4] // b is max
      ];
      h = cases[[r, g, b].indexOf(max)][2];
      h /= 6;
    }

    return {
      h: h * 360,
      s: s,
      v: v
    };
  }

  function hsvToHex(hsv) {
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var hh = h / 360;
    var i = Math.floor(hh * 6);
    var f = hh * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var cases = [[v, t, p], // case 0
    [q, v, p], // case 1
    [p, v, t], // case 2
    [p, q, v], // case 3
    [t, p, v], // case 4
    [v, p, q] // case 5
    ];

    var _cases = _slicedToArray(cases[i % 6], 3),
        r = _cases[0],
        g = _cases[1],
        b = _cases[2];

    var toHex = function toHex(x) {
      return Math.round(x * 255).toString(16).padStart(2, "0");
    };

    return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
  }

  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;

  function getHue(hsv, i, light) {
    var roundedH = Math.round(hsv.h);
    var hInRange = roundedH >= 60 && roundedH <= 240;
    var step = hueStep * i;
    var adjust = light === hInRange ? -1 : 1;
    var hue = hsv.h + adjust * step;
    hue = (hue % 360 + 360) % 360; // 规范化到0-359范围

    return Math.round(hue);
  }

  function getSaturation(hsv, i, light) {
    if (hsv.h + hsv.s === 0) return hsv.s; // 优化灰度判断

    var saturation = light ? hsv.s - saturationStep * i : i === darkColorCount ? hsv.s + saturationStep : hsv.s + saturationStep2 * i;
    if (light && i === lightColorCount) saturation = Math.min(saturation, 0.1);
    return Number(Math.max(0.06, Math.min(1, saturation)).toFixed(2));
  }

  function getValue(hsv, i, light) {
    var value = light ? hsv.v + brightnessStep1 * i : hsv.v - brightnessStep2 * i;
    return Number(Math.max(0, Math.min(1, value)).toFixed(2));
  }

  function hexToPalette(hex) {
    var patterns = [];
    var primaryColor = hexToHsv(hex);
    var hsv = primaryColor;

    for (var i = lightColorCount; i > 0; i--) {
      patterns.push({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true)
      });
    }

    patterns.push(primaryColor);

    for (var _i2 = 1; _i2 <= darkColorCount; _i2++) {
      patterns.push({
        h: getHue(hsv, _i2),
        s: getSaturation(hsv, _i2),
        v: getValue(hsv, _i2)
      });
    }

    return patterns.map(function (c) {
      return hsvToHex(c);
    });
  }

  function resolveColor(name) {
    if (!name) return null;
    name = name.trim();
    var alpha = null;
    var pos = name.lastIndexOf('/');

    if (pos !== -1) {
      var alphaDef = name.substring(pos + 1).trim();
      name = name.substring(0, pos);
      var av = extractArbitraryValue(alphaDef);

      if (av) {
        alpha = +av;
      } else {
        alpha = +alphaDef / 100;
      }
    }

    var cv = extractArbitraryValue(name);

    if (!cv) {
      if (C.aliasColors[name]) name = C.aliasColors[name];

      if (C.specialColors[name]) {
        cv = C.specialColors[name];
      } else {
        pos = name.lastIndexOf('-');
        var depth = null;

        if (pos != -1) {
          depth = name.substring(pos + 1);
          name = name.substring(0, pos);
          var parts = name.split('-');

          if (parts.length > 1) {
            name = parts[0];

            for (var i = 1; i < parts.length; i++) {
              if (parts[i].length > 0) name += parts[i][0].toUpperCase() + parts[i].substring(1);
            }
          }
        }

        if (C.aliasColors[name]) name = C.aliasColors[name];
        var color = C.colors[name];
        if (!color) return null;
        var w = depth ? +depth : 500;
        var index = 50 === w ? 1 : w / 100 + 1;
        cv = color[index - 1];
      }
    }

    if (cv && cv[0] === '#') {
      cv = hexToRgb(cv);
      if (alpha !== null) cv.a = alpha;
    }

    return cv;
  } //function generate


  function generateColors(classNamePrefix, styleName, nameAffix) {
    var vn = "--".concat(C.prefix, "-").concat(classNamePrefix, "-opacity");
    register("".concat(classNamePrefix, "-opacity-"), function (classDetails) {
      var parts = classDetails.name.split('-');
      var style = "".concat(vn, ": ").concat(+parts[2] / 100, ";");
      return nameAffix ? {
        name: "$".concat(nameAffix),
        style: style
      } : style;
    });
    register("".concat(classNamePrefix, "-"), function (classDetails) {
      var color = classDetails.name.substring(classNamePrefix.length + 1);
      var cv = resolveColor(color);
      if (!cv) return null;
      var style = isString(cv) ? "".concat(styleName, ": ").concat(cv, ";") : "".concat(undefined === cv.a ? "".concat(vn, ":1;") : '').concat(styleName, ": rgba(").concat(cv.r, ",").concat(cv.g, ",").concat(cv.b, ",").concat(undefined === cv.a ? "var(".concat(vn, ")") : cv.a, ");");
      return nameAffix ? {
        name: "$".concat(nameAffix),
        style: style
      } : style;
    });
  }

  function generateSizes(handler) {
    for (var i = 0; i <= 96; i++) {
      if (i == 13 || i == 15 || i >= 16 && (i - 16) % 4 != 0) continue;
      handler(i, "".concat(i * 0.25).concat(0 == i ? 'px' : 'rem'));
      if (1 == i) handler('px', '1px');
      if (i <= 3) handler(i + 0.5, "".concat(i * 0.25 + 0.125, "rem"));
    }

    each([2, 3, 4, 5, 6, 12], function (max) {
      for (var _i3 = 1; _i3 < max; _i3++) {
        var name = "".concat(_i3, "/").concat(max);
        var value = "".concat(+(_i3 * 100 / max).toFixed(6), "%");
        handler(name, value);
      }
    });
  }

  function extractArbitraryValue(name) {
    if (!name) return null;
    var p1 = name.indexOf('[');
    var p2 = name.indexOf(']');
    if (p1 >= 0 && p2 > p1) return name.substring(p1 + 1, p2).split($vs.config.spacePlaceholder).join(' ');
    return null;
  }

  extend($vs._, {
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    resolveColor: resolveColor,
    hexToPalette: hexToPalette,
    generateColors: generateColors,
    generateSizes: generateSizes,
    resolveClass: resolveClass,
    addInitStyle: addInitStyle,
    autoGenerateOnReset: autoGenerateOnReset,
    extractArbitraryValue: extractArbitraryValue
  });
  extend($vs, {
    get styles() {
      return stylesOutput;
    },

    reset: resetStyles,
    extract: extractClasses,
    add: addClasses,
    addMacroCss: addMacroCss,
    addRootVars: addRootVars,
    resolveAll: resolveAll,
    register: register
  });

  if (!G.document) {
    extend($vs, {
      ready: function ready(callback) {
        callback();
      }
    });
  } else {
    var D = G.document;
    extend($vs, {
      ready: function ready(callback) {
        if (D.readyState === "complete") {
          callback();
        } else {
          D.addEventListener("DOMContentLoaded", callback);
        }
      }
    });
    $vs.ready(function () {
      var VSC = 'vimesh-styles';
      styleElement = D.getElementById(VSC);

      if (!styleElement) {
        styleElement = D.createElement('style');
        styleElement.setAttribute('id', VSC);
        D.head.appendChild(styleElement);
      }

      if (C.auto) resolveAll(D.body);
      var observer = new MutationObserver(function (mutations) {
        if (C.auto) {
          observer.disconnect();
          each(mutations, function (m) {
            if (m.type === 'childList') {
              m.addedNodes.forEach(function (node) {
                return resolveAll(node, false);
              });
            } else if (m.type === 'attributes') {
              addClasses(recordKnownClasses(m.target), false);
            }
          });
          updateAutoStyles();
          observer.observe(D, {
            attributes: true,
            childList: true,
            subtree: true
          });
        }
      });
      observer.observe(D, {
        attributes: true,
        childList: true,
        subtree: true
      });
    });
  }
}"use strict";

function setupPreset(G) {
  if (!G.$vs) return console.error('Vimesh style core is not loaded!');
  G.$vs.config.preset = "html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}";
}"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function setupLayout(G) {
  if (!G.$vs) return console.error('Vimesh style core is not loaded!');
  var E = G.$vs._.each;
  var R = G.$vs.register;
  var GS = G.$vs._.generateSizes;
  var EAV = G.$vs._.extractArbitraryValue;
  var C = G.$vs.config;
  var P = C.prefix;
  var i; // Vars

  R("[", function (classDetails) {
    return "".concat(EAV(classDetails.name), ";");
  }); // Container

  R('container', function (classDetails) {
    if (classDetails.breakpoint) {
      return "max-width: ".concat(C.breakpoints[classDetails.breakpoint], "px;");
    } else {
      return "width: 100%;";
    }
  }); // Display

  E(['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-row', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'], function (v) {
    return R(v, "display: ".concat('hidden' === v ? 'none' : v, ";"));
  }); // Flex 

  E(['', 'flex-'], function (p) {
    R("".concat(p, "grow-0"), "flex-grow: 0;");
    R("".concat(p, "grow"), "flex-grow: 1;");
    R("".concat(p, "shrink-0"), "flex-shrink: 0;");
    R("".concat(p, "shrink"), "flex-shrink: 1;");
  });
  E({
    '1': '1 1 0%',
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: 'none'
  }, function (v, k) {
    return R("flex-".concat(k), "flex: ".concat(v, ";"));
  });
  R("flex-[", function (classDetails) {
    return "flex: ".concat(EAV(classDetails.name), ";");
  });
  E(['row', 'row-reverse', 'col', 'col-reverse'], function (v) {
    return R("flex-".concat(v), "flex-direction: ".concat(v.replace('col', 'column'), ";"));
  });
  E(['wrap', 'wrap-reverse', 'nowrap'], function (v) {
    return R("flex-".concat(v), "flex-wrap: ".concat(v, ";"));
  });
  E({
    auto: 'auto',
    full: '100%'
  }, function (v, k) {
    return R("basis-".concat(k), "flex-basis: ".concat(v, ";"));
  });
  GS(function (name, value) {
    R("basis-".concat(name), "flex-basis: ".concat(value, ";"));
  });
  R("basis-[", function (classDetails) {
    return "flex-basis: ".concat(EAV(classDetails.name), ";");
  }); // Clear

  E(['left', 'right', 'both', 'none'], function (v) {
    return R("clear-".concat(v), "clear: ".concat(v, ";"));
  });
  R("clear-[", function (classDetails) {
    return "clear: ".concat(EAV(classDetails.name), ";");
  }); // Position

  E(['static', 'fixed', 'absolute', 'relative', 'sticky'], function (v) {
    return R(v, "position: ".concat(v, ";"));
  });
  R("position-[", function (classDetails) {
    return "position: ".concat(EAV(classDetails.name), ";");
  }); // Width & Height

  E({
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  }, function (v, k) {
    return R("w-".concat(k), "width: ".concat(v, ";"));
  });
  E({
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  }, function (v, k) {
    return R("h-".concat(k), "height: ".concat(v, ";"));
  });
  GS(function (name, value) {
    R("w-".concat(name), "width: ".concat(value, ";"));
    R("h-".concat(name), "height: ".concat(value, ";"));
    R("s-".concat(name), "width: ".concat(value, ";height: ").concat(value, ";"));
  });
  R("w-[", function (classDetails) {
    return "width: ".concat(EAV(classDetails.name), ";");
  });
  R("h-[", function (classDetails) {
    return "height: ".concat(EAV(classDetails.name), ";");
  });
  R("s-[", function (classDetails) {
    return "width: ".concat(EAV(classDetails.name), ";height: ").concat(EAV(classDetails.name), ";");
  }); // Min & Max Width

  var ws = {
    '0': '0px',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  };
  E(ws, function (v, k) {
    return R("min-w-".concat(k), "min-width: ".concat(v, ";"));
  });
  ws.none = 'none';
  ws.prose = '65ch';
  E(['xs', 'sm', 'md', 'lg', 'xl'], function (v, i) {
    return ws[v] = "".concat(20 + i * 4, "rem");
  });
  E(['sm', 'md', 'lg', 'xl', '2xl'], function (v) {
    return ws["screen-".concat(v)] = "".concat(C.breakpoints[v], "px");
  });

  for (i = 2; i <= 7; i++) {
    ws["".concat(i, "xl")] = "".concat(30 + i * 6, "rem");
  }

  E(ws, function (v, k) {
    return R("max-w-".concat(k), "max-width: ".concat(v, ";"));
  });
  R("min-w-[", function (classDetails) {
    return "min-width: ".concat(EAV(classDetails.name), ";");
  });
  R("max-w-[", function (classDetails) {
    return "max-width: ".concat(EAV(classDetails.name), ";");
  }); // Min & Max Height

  E({
    '0': '0px',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  }, function (v, k) {
    R("min-h-".concat(k), "min-height: ".concat(v, ";"));
    R("max-h-".concat(k), "max-height: ".concat(v, ";"));
  });
  GS(function (name, value) {
    R("max-h-".concat(name), "max-height: ".concat(value, ";"));
  });
  R("min-h-[", function (classDetails) {
    return "min-height: ".concat(EAV(classDetails.name), ";");
  });
  R("max-h-[", function (classDetails) {
    return "max-height: ".concat(EAV(classDetails.name), ";");
  }); // Padding & Margin 

  function generateMargins(s, name, value) {
    R("".concat(s, "m-").concat(name), "margin: ".concat(s).concat(value, ";"));
    var ml = "margin-left: ".concat(s).concat(value, ";");
    var mr = "margin-right: ".concat(s).concat(value, ";");
    var mt = "margin-top: ".concat(s).concat(value, ";");
    var mb = "margin-bottom: ".concat(s).concat(value, ";");
    R("".concat(s, "mx-").concat(name), "".concat(ml).concat(mr));
    R("".concat(s, "ml-").concat(name), "".concat(ml));
    R("".concat(s, "mr-").concat(name), "".concat(mr));
    R("".concat(s, "my-").concat(name), "".concat(mt).concat(mb));
    R("".concat(s, "mt-").concat(name), "".concat(mt));
    R("".concat(s, "mb-").concat(name), "".concat(mb));
  }

  generateMargins('', 'auto', 'auto');
  GS(function (name, value) {
    R("p-".concat(name), "padding: ".concat(value, ";"));
    var pl = "padding-left: ".concat(value, ";");
    var pr = "padding-right: ".concat(value, ";");
    var pt = "padding-top: ".concat(value, ";");
    var pb = "padding-bottom: ".concat(value, ";");
    R("px-".concat(name), "".concat(pl).concat(pr));
    R("pl-".concat(name), "".concat(pl));
    R("pr-".concat(name), "".concat(pr));
    R("py-".concat(name), "".concat(pt).concat(pb));
    R("pt-".concat(name), "".concat(pt));
    R("pb-".concat(name), "".concat(pb));
    E(['', '-'], function (s) {
      return generateMargins(s, name, value);
    });
  });
  R(["p-[", "px-[", "pl-[", "pr-[", "py-[", "pt-[", "pb-["], function (classDetails) {
    var value = EAV(classDetails.name);

    var has = function has(kw) {
      return classDetails.name.indexOf(kw) !== -1;
    };

    var pl = "padding-left: ".concat(value, ";");
    var pr = "padding-right: ".concat(value, ";");
    var pt = "padding-top: ".concat(value, ";");
    var pb = "padding-bottom: ".concat(value, ";");
    if (has('px-')) return "".concat(pl).concat(pr);else if (has('pl-')) return "".concat(pl);else if (has('pr-')) return "".concat(pr);else if (has('py-')) return "".concat(pt).concat(pb);else if (has('pt-')) return "".concat(pt);else if (has('pb-')) return "".concat(pb);
    return "padding: ".concat(value, ";");
  });
  E(['', '-'], function (s) {
    R(["".concat(s, "m-["), "".concat(s, "mx-["), "".concat(s, "ml-["), "".concat(s, "mr-["), "".concat(s, "my-["), "".concat(s, "mt-["), "".concat(s, "mb-[")], function (classDetails) {
      var value = EAV(classDetails.name);

      var has = function has(kw) {
        return classDetails.name.indexOf(kw) !== -1;
      };

      var ml = "margin-left: ".concat(s).concat(value, ";");
      var mr = "margin-right: ".concat(s).concat(value, ";");
      var mt = "margin-top: ".concat(s).concat(value, ";");
      var mb = "margin-bottom: ".concat(s).concat(value, ";");
      if (has('mx-')) return "".concat(ml).concat(mr);else if (has('ml-')) return "".concat(ml);else if (has('mr-')) return "".concat(mr);else if (has('my-')) return "".concat(mt).concat(mb);else if (has('mt-')) return "".concat(mt);else if (has('mb-')) return "".concat(mb);
      return "margin: ".concat(s).concat(value, ";");
    });
  }); // Top / Right / Bottom / Left

  GS(function (name, value) {
    E(['', '-'], function (s) {
      var l = "left: ".concat(s).concat(value, ";");
      var r = "right: ".concat(s).concat(value, ";");
      var t = "top: ".concat(s).concat(value, ";");
      var b = "bottom: ".concat(s).concat(value, ";");
      R("".concat(s, "inset-").concat(name), "".concat(l).concat(r).concat(t).concat(b));
      R("".concat(s, "inset-x-").concat(name), "".concat(l).concat(r));
      R("".concat(s, "left-").concat(name), "".concat(l));
      R("".concat(s, "right-").concat(name), "".concat(r));
      R("".concat(s, "inset-y-").concat(name), "".concat(t).concat(b));
      R("".concat(s, "top-").concat(name), "".concat(t));
      R("".concat(s, "bottom-").concat(name), "".concat(b));
    });
  });
  E(['', '-'], function (s) {
    R(["".concat(s, "inset-["), "".concat(s, "inset-x-["), "".concat(s, "left-["), "".concat(s, "right-["), "".concat(s, "inset-y-["), "".concat(s, "top-["), "".concat(s, "bottom-[")], function (classDetails) {
      var value = EAV(classDetails.name);
      var l = "left: ".concat(s).concat(value, ";");
      var r = "right: ".concat(s).concat(value, ";");
      var t = "top: ".concat(s).concat(value, ";");
      var b = "bottom: ".concat(s).concat(value, ";");

      var has = function has(kw) {
        return classDetails.name.indexOf(kw) !== -1;
      };

      if (has('inset-x')) return "".concat(l).concat(r);else if (has('inset-y')) return "".concat(t).concat(b);else if (has('inset')) return "".concat(l).concat(r).concat(t).concat(b);else if (has('left')) return "".concat(l);else if (has('right')) return "".concat(r);else if (has('top')) return "".concat(t);else if (has('bottom')) return "".concat(b);
      return null;
    });
  }); // Space

  var sc = ' > :not([hidden]) ~ :not([hidden])';
  R('space-x-reverse', {
    name: "$".concat(sc),
    style: "--".concat(P, "-space-x-reverse: 1;")
  });
  R('space-y-reverse', {
    name: "$".concat(sc),
    style: "--".concat(P, "-space-y-reverse: 1;")
  });
  GS(function (name, value) {
    E({
      x: ['right', 'left'],
      y: ['bottom', 'top']
    }, function (vs, k) {
      return E(['', '-'], function (s) {
        R("".concat(s, "space-").concat(k, "-").concat(name), {
          name: "$".concat(sc),
          style: "--".concat(P, "-space-").concat(k, "-reverse: 0;margin-").concat(vs[0], ": calc(").concat(s).concat(value, " * var(--").concat(P, "-space-").concat(k, "-reverse));margin-").concat(vs[1], ": calc(").concat(s).concat(value, " * calc(1 - var(--").concat(P, "-space-").concat(k, "-reverse)));")
        });
      });
    });
  });
  E({
    x: ['right', 'left'],
    y: ['bottom', 'top']
  }, function (vs, k) {
    return E(['', '-'], function (s) {
      R("".concat(s, "space-").concat(k, "-["), function (classDetails) {
        var value = EAV(classDetails.name);
        return {
          name: "$".concat(sc),
          style: "--".concat(P, "-space-").concat(k, "-reverse: 0;margin-").concat(vs[0], ": calc(").concat(s).concat(value, " * var(--").concat(P, "-space-").concat(k, "-reverse));margin-").concat(vs[1], ": calc(").concat(s).concat(value, " * calc(1 - var(--").concat(P, "-space-").concat(k, "-reverse)));")
        };
      });
    });
  }); // Order

  E({
    first: -9999,
    last: 9999,
    none: 0
  }, function (v, k) {
    return R("order-".concat(k), "order: ".concat(v, ";"));
  });

  for (i = 1; i <= 12; i++) {
    R("order-".concat(i), "order: ".concat(i, ";"));
  }

  R("order-[", function (classDetails) {
    return "order: ".concat(EAV(classDetails.name), ";");
  }); // Grid

  R("grid-cols-none", "grid-template-columns: none;");

  for (i = 1; i <= 12; i++) {
    R("grid-cols-".concat(i), "grid-template-columns: repeat(".concat(i, ", minmax(0, 1fr));"));
  }

  R("grid-cols-[", function (classDetails) {
    var items = EAV(classDetails.name).replace(/,(?![^\(]*\))/g, ' ');
    return "grid-template-columns: ".concat(items, ";");
  });

  var extractLastNum = function extractLastNum(n) {
    return n.substring(n.lastIndexOf('-') + 1);
  };

  E([['col', 'column'], ['row', 'row']], function (_ref, row) {
    var _ref2 = _slicedToArray(_ref, 2),
        n1 = _ref2[0],
        n2 = _ref2[1];

    R("".concat(n1, "-auto"), "grid-".concat(n2, ": auto;"));
    R("".concat(n1, "-span-full"), "grid-".concat(n2, ": 1 / -1;"));
    R("".concat(n1, "-start-auto"), "grid-".concat(n2, "-start: auto;"));
    R("".concat(n1, "-end-auto"), "grid-".concat(n2, "-end: auto;"));
    R("".concat(n1, "-span-"), function (classDetails) {
      var i = extractLastNum(classDetails.name);
      return "grid-".concat(n2, ": span ").concat(i, " / span ").concat(i, ";");
    });
    R("".concat(n1, "-start-"), function (classDetails) {
      return "grid-".concat(n2, "-start: ").concat(extractLastNum(classDetails.name), ";");
    });
    R("".concat(n1, "-end-"), function (classDetails) {
      return "grid-".concat(n2, "-end: ").concat(extractLastNum(classDetails.name), ";");
    });
  });
  R("grid-rows-none", "grid-template-rows: none;");

  for (i = 1; i <= 6; i++) {
    R("grid-rows-".concat(i), "grid-template-rows: repeat(".concat(i, ", minmax(0, 1fr));"));
  }

  R("grid-rows-[", function (classDetails) {
    var items = EAV(classDetails.name).replace(/,(?![^\(]*\))/g, ' ');
    return "grid-template-rows: ".concat(items, ";");
  });
  E(['row', 'col', 'dense', 'row-dense', 'col-dense'], function (v) {
    return R("grid-flow-".concat(v), "grid-auto-flow: ".concat(v.replace('col', 'column'), ";"));
  });
  E({
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0, 1fr)'
  }, function (v, k) {
    R("auto-cols-".concat(k), "grid-auto-columns: ".concat(v, ";"));
    R("auto-rows-".concat(k), "grid-auto-rows: ".concat(v, ";"));
  }); // Gap

  GS(function (name, value) {
    R("gap-".concat(name), "gap: ".concat(value, ";"));
    R("gap-x-".concat(name), "column-gap: ".concat(value, ";"));
    R("gap-y-".concat(name), "row-gap: ".concat(value, ";"));
  });
  R("gap-[", function (classDetails) {
    return "gap: ".concat(EAV(classDetails.name), ";");
  });
  R("gap-x-[", function (classDetails) {
    return "column-gap: ".concat(EAV(classDetails.name), ";");
  });
  R("gap-y-[", function (classDetails) {
    return "row-gap: ".concat(EAV(classDetails.name), ";");
  }); // Justify & Align & Place

  E({
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }, function (v, k) {
    R("justify-".concat(k), "justify-content: ".concat(v, ";"));
    R("content-".concat(k), "align-content: ".concat(v, ";"));
  });
  R("justify-[", function (classDetails) {
    return "justify-content: ".concat(EAV(classDetails.name), ";");
  });
  R("content-[", function (classDetails) {
    return "align-content: ".concat(EAV(classDetails.name), ";");
  });
  E({
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }, function (v, k) {
    R("place-content-".concat(k), "place-content: ".concat(v, ";"));
  });
  R("place-content-[", function (classDetails) {
    return "place-content: ".concat(EAV(classDetails.name), ";");
  });
  E(['start', 'end', 'center', 'stretch'], function (v) {
    R("justify-items-".concat(v), "justify-items: ".concat(v, ";"));
    R("place-items-".concat(v), "place-items: ".concat(v, ";"));
  });
  R("justify-items-[", function (classDetails) {
    return "justify-items: ".concat(EAV(classDetails.name), ";");
  });
  R("place-items-[", function (classDetails) {
    return "place-items: ".concat(EAV(classDetails.name), ";");
  });
  E(['auto', 'start', 'end', 'center', 'stretch'], function (v) {
    R("justify-self-".concat(v), "justify-self: ".concat(v, ";"));
    R("place-self-".concat(v), "place-self: ".concat(v, ";"));
  });
  R("justify-self-[", function (classDetails) {
    return "justify-self: ".concat(EAV(classDetails.name), ";");
  });
  R("place-self-[", function (classDetails) {
    return "place-self: ".concat(EAV(classDetails.name), ";");
  });
  E(['start', 'end', 'center', 'baseline', 'stretch'], function (v) {
    return R("items-".concat(v), "align-items: ".concat(v, ";"));
  });
  R("items-[", function (classDetails) {
    return "align-items: ".concat(EAV(classDetails.name), ";");
  });
  E(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], function (v) {
    return R("self-".concat(v), "align-self: ".concat(v, ";"));
  });
  R("self-[", function (classDetails) {
    return "align-self: ".concat(EAV(classDetails.name), ";");
  }); // Box Sizing & Decoration Break

  R("decoration-slice", "box-decoration-break: slice;");
  R("decoration-clone", "box-decoration-break: clone;");
  R("box-border", "box-sizing: border-box;");
  R("box-content", "box-sizing: content-box;"); // Isolation

  R("isolate", "isolation: isolate;");
  R("isolation-auto", "isolation: auto;"); // Float

  E(['left', 'right', 'none'], function (v) {
    return R("float-".concat(v), "float: ".concat(v, ";"));
  });
  R("float-[", function (classDetails) {
    return "float: ".concat(EAV(classDetails.name), ";");
  }); // Object Fit & Position

  E(['contain', 'cover', 'fill', 'none', 'scale-down'], function (v) {
    return R("object-".concat(v), "object-fit: ".concat(v, ";"));
  });
  E(['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'], function (v) {
    return R("object-".concat(v), "object-position: ".concat(v.replace('-', ' '), ";"));
  }); // Overflow

  E(['auto', 'hidden', 'visible', 'scroll'], function (v) {
    R("overflow-".concat(v), "overflow: ".concat(v, ";"));
    R("overflow-x-".concat(v), "overflow-x: ".concat(v, ";"));
    R("overflow-y-".concat(v), "overflow-y: ".concat(v, ";"));
  }); // Overscroll

  E(['auto', 'none', 'contain'], function (v) {
    R("overscroll-".concat(v), "overscroll-behavior: ".concat(v, ";"));
    R("overscroll-x-".concat(v), "overscroll-behavior-x: ".concat(v, ";"));
    R("overscroll-y-".concat(v), "overscroll-behavior-y: ".concat(v, ";"));
  }); // Visibility

  R("visible", "visibility: visible;");
  R("invisible", "visibility: hidden;"); // Z-Index

  E([0, 10, 20, 30, 40, 50, 'auto'], function (v) {
    return R("z-".concat(v), "z-index: ".concat(v, ";"));
  });
  R("z-[", function (classDetails) {
    return "z-index: ".concat(EAV(classDetails.name), ";");
  }); // Tables

  R("border-collapse", "border-collapse: collapse;");
  R("border-separate", "border-collapse: separate;");
  R("table-auto", "table-layout: auto;");
  R("table-fixed", "table-layout: fixed;");
}"use strict";

function setupPaint(G) {
  if (!G.$vs) return console.error('Vimesh style core is not loaded!');
  var _ = G.$vs._;
  var E = _.each;
  var R = G.$vs.register;
  var GS = _.generateSizes;
  var GC = _.generateColors;
  var EAV = _.extractArbitraryValue;
  var C = G.$vs.config;
  var P = C.prefix;
  var _G$$vs$_ = G.$vs._,
      rgbToHex = _G$$vs$_.rgbToHex,
      resolveColor = _G$$vs$_.resolveColor,
      addInitStyle = _G$$vs$_.addInitStyle,
      isString = _G$$vs$_.isString;
  var i;
  addInitStyle("*, ::before, ::after {--".concat(P, "-content: '';}")); // Font

  R('font-', function (classDetails) {
    var parts = classDetails.name.split('-');
    var font = C.fonts[parts[1]];
    if (!font) return null;
    return "font-family: ".concat(font, ";");
  });
  R("font-[", function (classDetails) {
    return "font-family: ".concat(EAV(classDetails.name), ";");
  });

  function sizeWithUnit(s) {
    var defUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rem';
    return _.isNumeric(s) ? "".concat(s).concat(defUnit) : s;
  }

  _.autoGenerateOnReset(function () {
    var fontSizes = _.extend({
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
      '9xl': [8]
    }, C.fontSizes);

    E(fontSizes, function (v, k) {
      return R("text-".concat(k), "font-size: ".concat(sizeWithUnit(v[0]), ";line-height: ").concat(v.length > 1 ? "".concat(sizeWithUnit(v[1])) : 1, ";"));
    });
  });

  R("antialiased", "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;");
  R("subpixel-antialiased", "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;");
  R("italic", "font-style: italic;");
  R("not-italic", "font-style: normal;");
  E(['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'], function (v, i) {
    return R("font-".concat(v), "font-weight: ".concat((i + 1) * 100, ";"));
  }); // Letter Spacing

  E({
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
    widest: 0.1
  }, function (v, k) {
    return R("tracking-".concat(k), "letter-spacing: ".concat(v, "em;"));
  }); // Line Height

  for (i = 3; i <= 10; i++) {
    R("leading-".concat(i), "line-height: ".concat(0.25 * i, "rem;"));
  }

  E({
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  }, function (v, k) {
    return R("leading-".concat(k), "line-height: ".concat(v, ";"));
  }); // List Style Type & Style

  E(['none', 'disc', 'decimal'], function (v) {
    return R("list-".concat(v), "list-style-type: ".concat(v, ";"));
  });
  E(['inside', 'outside'], function (v) {
    return R("list-".concat(v), "list-style-position: ".concat(v, ";"));
  }); // Placeholder

  GC('placeholder', 'color', '::placeholder'); // Text

  GC('text', 'color');
  E(['left', 'center', 'right', 'justify'], function (v) {
    return R("text-".concat(v), "text-align: ".concat(v, ";"));
  });
  E(['underline', 'line-through', 'none'], function (v) {
    return R("".concat('none' == v ? 'no-underline' : v), "text-decoration: ".concat(v, ";"));
  });
  E(['uppercase', 'lowercase', 'capitalize', 'none'], function (v) {
    return R("".concat('none' == v ? 'normal-case' : v), "text-transform: ".concat(v, ";"));
  });
  E(['ellipsis', 'clip'], function (v) {
    return R("overflow-".concat(v), "text-overflow: ".concat(v));
  });
  R('truncate', 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;');
  E(['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'], function (v) {
    return R("align-".concat(v), "vertical-align: ".concat(v, ";"));
  });
  E(['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'], function (v) {
    return R("whitespace-".concat(v), "white-space: ".concat(v, ";"));
  });
  R("break-normal", "overflow-wrap: normal; word-break: normal;");
  R("break-words", "overflow-wrap: break-word;");
  R("break-all", "word-break: break-all;"); // Background

  E(['fixed', 'local', 'scroll'], function (v) {
    return R("bg-".concat(v), "background-attachment: ".concat(v));
  });
  E(['text', 'content', 'padding', 'border'], function (v) {
    return R("bg-clip-".concat(v), "background-clip: ".concat(v).concat(v == 'text' ? '' : '-box', ";"));
  });
  GC('bg', 'background-color');
  E(['border', 'padding', 'content'], function (v) {
    return R("bg-origin-".concat(v), "background-origin: ".concat(v, "-box;"));
  });
  E(['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'], function (v) {
    return R("bg-".concat(v), "background-position: ".concat(v.replace('-', ' '), ";"));
  });
  E(['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'round', 'space'], function (v) {
    return R("bg-".concat(v.indexOf('repeat') != -1 ? v : "repeat-".concat(v)), "background-repeat: ".concat(v, ";"));
  });
  E(['auto', 'cover', 'contain'], function (v) {
    return R("bg-".concat(v), "background-size: ".concat(v, ";"));
  }); // Gradient Background

  R("bg-none", "background-image: none;");
  var DM = {
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left'
  };
  var dirs = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'];
  E(dirs, function (v) {
    return R("bg-gradient-to-".concat(v), "background-image: linear-gradient(to ".concat(v.length == 1 ? DM[v[0]] : "".concat(DM[v[0]], " ").concat(DM[v[1]]), ", var(--").concat(P, "-gradient-stops));"));
  });
  var from = 'from-',
      to = 'to-',
      via = 'via-';
  R(from, function (classDetails) {
    var cv = resolveColor(classDetails.name.substring(from.length));
    if (!cv) return null;
    return "--".concat(P, "-gradient-from: ").concat(isString(cv) ? cv : '#' + rgbToHex(cv), "; --").concat(P, "-gradient-stops: var(--").concat(P, "-gradient-from), var(--").concat(P, "-gradient-to, rgba(").concat(cv.r, ",").concat(cv.g, ",").concat(cv.b, ", 0));");
  });
  R(to, function (classDetails) {
    var cv = resolveColor(classDetails.name.substring(to.length));
    if (!cv) return null;
    return "--".concat(P, "-gradient-to: ").concat(isString(cv) ? cv : '#' + rgbToHex(cv), ";");
  });
  R(via, function (classDetails) {
    var cv = resolveColor(classDetails.name.substring(via.length));
    if (!cv) return null;
    return "--".concat(P, "-gradient-stops: var(--").concat(P, "-gradient-from), ").concat(isString(cv) ? cv : '#' + rgbToHex(cv), ", var(--").concat(P, "-gradient-to, rgba(").concat(cv.r, ",").concat(cv.g, ",").concat(cv.b, ", 0));");
  }); // SVG

  GC('fill', 'fill');
  GC('stroke', 'stroke');
  E([0, 1, 2], function (v) {
    return R("stroke-".concat(v), "stroke-width: ".concat(v));
  }); // Border

  _.autoGenerateOnReset(function () {
    var borderRadiusSizes = _.extend({
      none: '0px',
      sm: 0.125,
      _: 0.25,
      md: 0.375,
      lg: 0.5,
      xl: 0.75,
      '2xl': 1,
      '3xl': 1.5,
      full: '9999px'
    }, C.borderRadiusSizes);

    E(borderRadiusSizes, function (s, n) {
      s = sizeWithUnit(s);
      R("rounded".concat('_' == n ? '' : "-".concat(n)), "border-radius: ".concat(s, ";"));
      E(dirs, function (v) {
        if (v.length == 1) {
          var isTB = 't' == v || 'b' == v;
          var d2 = isTB ? ['l', 'r'] : ['t', 'b'];
          R("rounded-".concat(v).concat('_' == n ? '' : "-".concat(n)), "border-".concat(isTB ? DM[v] : DM[d2[0]], "-").concat(isTB ? DM[d2[0]] : DM[v], "-radius: ").concat(s, "; border-").concat(isTB ? DM[v] : DM[d2[1]], "-").concat(isTB ? DM[d2[1]] : DM[v], "-radius: ").concat(s, ";"));
        } else {
          R("rounded-".concat(v).concat('_' == n ? '' : "-".concat(n)), "border-".concat(DM[v[0]], "-").concat(DM[v[1]], "-radius: ").concat(s, "; "));
        }
      });
    });
  });

  R("rounded-[", function (classDetails) {
    return "border-radius: ".concat(EAV(classDetails.name), ";");
  });
  E(dirs, function (v) {
    if (v.length == 1) {
      var isTB = 't' == v || 'b' == v;
      var d2 = isTB ? ['l', 'r'] : ['t', 'b'];
      R("rounded-".concat(v, "-["), function (classDetails) {
        return "border-".concat(isTB ? DM[v] : DM[d2[0]], "-").concat(isTB ? DM[d2[0]] : DM[v], "-radius: ").concat(EAV(classDetails.name), "; border-").concat(isTB ? DM[v] : DM[d2[1]], "-").concat(isTB ? DM[d2[1]] : DM[v], "-radius: ").concat(EAV(classDetails.name), ";");
      });
    } else {
      R("rounded-".concat(v, "-["), function (classDetails) {
        return "border-".concat(DM[v[0]], "-").concat(DM[v[1]], "-radius: ").concat(EAV(classDetails.name), "; ");
      });
    }
  });
  E([0, 1, 2, 4, 8], function (w) {
    R("border".concat(w == 1 ? '' : "-".concat(w)), "border-width: ".concat(w, "px;"));
    E(Object.keys(DM), function (d) {
      return R("border-".concat(d).concat(w == 1 ? '' : "-".concat(w)), "border-".concat(DM[d], "-width: ").concat(w, "px;"));
    });
    R("border-x".concat(w == 1 ? '' : "-".concat(w)), "border-left-width: ".concat(w, "px;border-right-width: ").concat(w, "px;"));
    R("border-y".concat(w == 1 ? '' : "-".concat(w)), "border-top-width: ".concat(w, "px;border-bottom-width: ").concat(w, "px;"));
  });
  GC('border', 'border-color');
  E(['solid', 'dashed', 'dotted', 'double', 'none'], function (v) {
    return R("border-".concat(v), "border-style: ".concat(v, ";"));
  }); // Divide

  var sc = ' > :not([hidden]) ~ :not([hidden])';
  E(['x', 'y'], function (a) {
    var d2 = a == 'x' ? ['left', 'right'] : ['top', 'bottom'];
    R("divide-".concat(a, "-reverse"), {
      name: "$".concat(sc),
      style: "--".concat(P, "-divide-").concat(a, "-reverse: 1;")
    });
    E([0, 1, 2, 4, 8], function (w) {
      R("divide-".concat(a).concat(w == 1 ? '' : "-".concat(w)), {
        name: "$".concat(sc),
        style: "--".concat(P, "-divide-").concat(a, "-reverse: 0; border-").concat(d2[0], "-width: calc(").concat(w, "px * calc(1 - var(--").concat(P, "-divide-").concat(a, "-reverse))); border-").concat(d2[1], "-width: calc(").concat(w, "px * var(--").concat(P, "-divide-").concat(a, "-reverse));")
      });
    });
  });
  GC('divide', 'border-color', sc);
  E(['solid', 'dashed', 'dotted', 'double', 'none'], function (v) {
    return R("divide-".concat(v), {
      name: "$".concat(sc),
      style: "border-style: ".concat(v, ";")
    });
  }); // Ring

  var initShadow = function initShadow() {
    return addInitStyle("*, ::before, ::after {--".concat(P, "-shadow: 0 0 #0000;}"));
  };

  var initRing = function initRing() {
    initShadow();
    addInitStyle("*, ::before, ::after {--".concat(P, "-ring-inset: var(--").concat(P, "-empty,/*!*/ /*!*/); --").concat(P, "-ring-offset-width: 0px; --").concat(P, "-ring-offset-color: #fff; --").concat(P, "-ring-color: rgba(59, 130, 246, 0.5); --").concat(P, "-ring-offset-shadow: 0 0 #0000; --").concat(P, "-ring-shadow: 0 0 #0000;}"));
  };

  R("ring-inset", "--".concat(P, "-ring-inset: inset;"));
  E([0, 1, 2, 4, 8, 3], function (w) {
    return R("ring".concat(w == 3 ? '' : "-".concat(w)), "--".concat(P, "-ring-offset-shadow: var(--").concat(P, "-ring-inset) 0 0 0 var(--").concat(P, "-ring-offset-width) var(--").concat(P, "-ring-offset-color); --").concat(P, "-ring-shadow: var(--").concat(P, "-ring-inset) 0 0 0 calc(").concat(w, "px + var(--").concat(P, "-ring-offset-width)) var(--").concat(P, "-ring-color); box-shadow: var(--").concat(P, "-ring-offset-shadow), var(--").concat(P, "-ring-shadow), var(--").concat(P, "-shadow, 0 0 #0000);"), initRing);
  });
  GC('ring', "--".concat(P, "-ring-color"));
  E([0, 1, 2, 4, 8], function (w) {
    return R("ring-offset-".concat(w), "--".concat(P, "-ring-offset-width: ").concat(w, "px;"));
  });
  var roc = 'ring-offset-';
  R(roc, function (classDetails) {
    var cv = resolveColor(classDetails.name.substring(roc.length));
    if (!cv) return null;
    return "--".concat(P, "-ring-offset-color: ").concat(isString(cv) ? cv : '#' + rgbToHex(cv), "; ");
  }); // Effects

  var bs = "box-shadow: var(--".concat(P, "-ring-offset-shadow, 0 0 #0000), var(--").concat(P, "-ring-shadow, 0 0 #0000), var(--").concat(P, "-shadow);");
  E({
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    _: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000'
  }, function (v, k) {
    return R("shadow".concat(k == '_' ? '' : "-".concat(k)), "--".concat(P, "-shadow: ").concat(v, ";").concat(bs), initRing);
  });
  var bms = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  E(bms, function (v) {
    return R("mix-blend-".concat(v), "mix-blend-mode: ".concat(v, ";"));
  });
  E(bms, function (v) {
    return R("bg-blend-".concat(v), "background-blend-mode: ".concat(v, ";"));
  }); // Transition & Animation

  E({
    none: 'none',
    all: 'all',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
    _: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    colors: 'background-color, border-color, color, fill, stroke'
  }, function (v, k) {
    return R("transition".concat(k == '_' ? '' : "-".concat(k)), "transition-property: ".concat(v, "; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"));
  });
  R('duration-', function (classDetails) {
    var parts = classDetails.name.split('-');
    return "transition-duration: ".concat(parts[1], "ms;");
  });
  E({
    linear: 'linear',
    "in": 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  }, function (v, k) {
    return R("ease-".concat(k), "transition-timing-function: ".concat(v, ";"));
  });
  R('delay-', function (classDetails) {
    var parts = classDetails.name.split('-');
    return "transition-delay: ".concat(parts[1], "ms;");
  });
  var ani = "animate-";
  R(ani, function (classDetails) {
    var k = classDetails.name.substring(ani.length);
    var v = C.animation[k];
    if (!v) return null;
    return "animation: ".concat(v, ";");
  }, function (classDetails) {
    var k = classDetails.name.substring(ani.length);
    if (C.keyframes[k]) addInitStyle("@keyframes ".concat(k).concat(C.keyframes[k]));
  }); // Filters

  var initFilters = function initFilters() {
    return addInitStyle("*, ::before, ::after {--".concat(P, "-opacity:; --").concat(P, "-hue-rotate:; --").concat(P, "-saturate:; --").concat(P, "-contrast:; --").concat(P, "-blur:; --").concat(P, "-brightness:;}"));
  };

  var filterStyle = "filter: opacity(var(--".concat(P, "-opacity)) hue-rotate(var(--").concat(P, "-hue-rotate)) saturate(var(--").concat(P, "-saturate)) contrast(var(--").concat(P, "-contrast)) blur(var(--").concat(P, "-blur)) brightness(var(--").concat(P, "-brightness))");
  R(['backdrop-', 'opacity-', 'hue-rotate-', 'saturate-', 'contrast-', 'blur', 'brightness-'], function (classDetails) {
    var cn = classDetails.name.split('-');
    var isBackdrop = cn[0] === 'backdrop';
    if (isBackdrop) cn = cn.slice(1);
    var name = cn.length > 0 ? cn.slice(0, -1).join('-') : cn[0];
    var value = cn.slice(-1)[0];
    var filter = isBackdrop ? "backdrop-".concat(filterStyle) : filterStyle;
    if (name === 'opacity') return "".concat(filter, "; --").concat(P, "-").concat(name, ": ").concat(+value / 100, ";");
    if (name.match('brightness|contrast')) return "".concat(filter, "; --").concat(P, "-").concat(name, ": ").concat(+value / 200 * 2, ";");
    if (name === 'hue-rotate') return "".concat(filter, "; --").concat(P, "-").concat(name, ": ").concat(value, "deg;");
    if (name === 'saturate') return "".concat(filter, "; --").concat(P, "-").concat(name, ":  ").concat(+value / 100, ";");

    if (name === 'blur' || name === '') {
      if (value === 'blur') {
        return "".concat(filter, "; --").concat(P, "-blur: 8px;");
      } else if (value == 'none') {
        return;
      } else {
        var b = {
          none: 0,
          sm: 4,
          md: 12,
          lg: 16,
          xl: 24,
          '2xl': 40,
          '3xl': 64
        };
        return "".concat(filter, "; --").concat(P, "-blur: ").concat(b[value], "px;");
      }
    }
  }, initFilters); // Transform

  var initTransform = function initTransform() {
    return addInitStyle("*, ::before, ::after {--".concat(P, "-translate-x: 0; --").concat(P, "-translate-y: 0; --").concat(P, "-rotate: 0; --").concat(P, "-skew-x: 0; --").concat(P, "-skew-y: 0; --").concat(P, "-scale-x: 1; --").concat(P, "-scale-y: 1;}"));
  };

  var transform = "transform: translateX(var(--".concat(P, "-translate-x)) translateY(var(--").concat(P, "-translate-y)) rotate(var(--").concat(P, "-rotate)) skewX(var(--").concat(P, "-skew-x)) skewY(var(--").concat(P, "-skew-y)) scaleX(var(--").concat(P, "-scale-x)) scaleY(var(--").concat(P, "-scale-y))");
  R("transform", "".concat(transform, ";"), initTransform);
  R("transform-none", "transform: none;");
  E(['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'], function (v) {
    return R("origin-".concat(v), "transform-origin: ".concat(v.replace('-', ' '), ";"));
  });
  R(['scale-', '-scale-'], function (classDetails) {
    var cn = classDetails.name;
    var s = '';

    if ('-' == cn[0]) {
      cn = cn.substring(1);
      s = '-';
    }

    var pos = cn.lastIndexOf('-');
    var name = cn.substring(0, pos);
    var value = cn.substring(pos + 1);
    value = EAV(value) || +value / 100;
    if (name === 'scale') return "".concat(transform, "; --").concat(P, "-scale-x: ").concat(s).concat(value, ";--").concat(P, "-scale-y: ").concat(s).concat(value, ";");else return "".concat(transform, "; --").concat(P, "-").concat(name, ": ").concat(s).concat(value, ";");
  }, initTransform);
  R(['rotate-', '-rotate-'], function (classDetails) {
    var cn = classDetails.name;
    var s = '';

    if ('-' == cn[0]) {
      cn = cn.substring(1);
      s = '-';
    }

    var value = cn.substring(cn.lastIndexOf('-') + 1);
    value = EAV(value) || "".concat(value, "deg");
    return "".concat(transform, "; --").concat(P, "-rotate: ").concat(s).concat(value, ";");
  }, initTransform);

  function genTrans(name, value) {
    E(['x', 'y'], function (a) {
      return E(['', '-'], function (s) {
        R("".concat(s, "translate-").concat(a, "-").concat(name), "".concat(transform, "; --").concat(P, "-translate-").concat(a, ": ").concat(s).concat(value, ";"), initTransform);
      });
    });
  }

  GS(genTrans);
  genTrans('full', '100%');
  E(['x', 'y'], function (a) {
    return E(['', '-'], function (s) {
      var prefix = "".concat(s, "translate-").concat(a, "-[");
      R(prefix, function (classDetails) {
        var value = classDetails.name.substring(prefix.length, classDetails.name.length - 1);
        return "".concat(transform, "; --").concat(P, "-translate-").concat(a, ": ").concat(s).concat(value, ";");
      }, initTransform);
    });
  });
  E(['x', 'y'], function (a) {
    return E(['', '-'], function (s) {
      var prefix = "".concat(s, "skew-").concat(a, "-[");
      E([0, 1, 2, 3, 6, 12], function (d) {
        return R("".concat(s, "skew-").concat(a, "-").concat(d), "".concat(transform, "; --").concat(P, "-skew-").concat(a, ": ").concat(s).concat(d, "deg;"), initTransform);
      });
      R(prefix, function (classDetails) {
        var value = classDetails.name.substring(prefix.length, classDetails.name.length - 1);
        return "".concat(transform, "; --").concat(P, "-skew-").concat(a, ": ").concat(s).concat(value, ";");
      }, initTransform);
    });
  }); // Content

  R("content-[", function (classDetails) {
    return "--".concat(P, "-content: ").concat(EAV(classDetails.name), ";content: var(--").concat(P, "-content);");
  }); // Outline

  R("outline-none", "outline: 2px solid transparent; outline-offset: 2px;");
  R("outline", "outline-style: solid;");
  E(['dashed', 'dotted', 'double', 'hidden'], function (v) {
    return R("outline-".concat(v), "outline-style: ".concat(v, ";"));
  });
  E([0, 1, 2, 4, 8], function (v) {
    R("outline-".concat(v), "outline-width: ".concat(v, "px;"));
    R("outline-offset-".concat(v), "outline-offset: ".concat(v, "px;"));
  });
  GC('outline', "outline-color"); // Interactivity

  R("appearance-none", "appearance: none;");
  E(['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed'], function (v) {
    return R("cursor-".concat(v), "cursor: ".concat(v, ";"));
  });
  E(['none', 'auto'], function (v) {
    return R("pointer-events-".concat(v), "pointer-events: ".concat(v, ";"));
  });
  E({
    none: 'none',
    y: 'vertical',
    x: 'horizontal',
    _: 'both'
  }, function (v, k) {
    return R("resize".concat(k == '_' ? '' : "-".concat(k)), "resize: ".concat(v, ";"));
  });
  E(['none', 'text', 'all', 'auto'], function (v) {
    return R("select-".concat(v), "user-select: ".concat(v, ";"));
  }); // Screen Readers

  R("sr-only", "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;");
  R("not-sr-only", "position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;");
}

function setupVimeshStyle(G) {
    setupCore(G)
    setupPreset(G)
    setupLayout(G)
    setupPaint(G)
}

setupVimeshStyle(window)