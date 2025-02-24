// Vimesh Style v1.1.6
function setupCore(g){if(!g.$vs){g.$vs={config:{debug:!1,auto:!0,prefix:"vs",attributify:"none",spacePlaceholder:"`",breakpoints:{sm:640,md:768,lg:1024,xl:1280,"2xl":1536},fonts:{sans:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',serif:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},colors:{slate:["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"],gray:["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],zinc:["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"],neutral:["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717"],stone:["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917"],red:["#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],orange:["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],amber:["#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f"],yellow:["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],lime:["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314"],green:["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],emerald:["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],teal:["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],cyan:["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490","#155e75","#164e63"],sky:["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e"],blue:["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],indigo:["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],violet:["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],purple:["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],fuchsia:["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75"],pink:["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],rose:["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"]},aliasColors:{lightBlue:"sky"},specialColors:{white:"#ffffff",black:"#000000",transparent:"transparent",current:"currentColor"},keyframes:{spin:"{to{transform:rotate(360deg)}}",ping:"{75%,100%{transform:scale(2);opacity:0}}",pulse:"{50%{opacity:.5}}",bounce:"{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}"},animation:{none:"",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},fontSizes:{},borderRadiusSizes:{}}};const E=g.$vs,R=E.config;E._={isString:h,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isArray:x,isFunction:n,isPlainObject:r,each:v,extend:e,deepMerge:y};let a={},i=E.classMap={},s={},l={},o=[],d=[],c={},f=null,u=null,p=E.generators=[],b={},m={},$={},t=[];v("font,text,underline,list,bg,gradient,border,divide,ring,icon,container,p,m,space,w,min-w,max-w,h,min-h,max-h,flex,grid,table,order,align,justify,place,display,pos,box,caret,isolation,object,overflow,overscroll,z,shadow,opacity,blend,filter,backdrop,transition,animate,transform,appearance,cursor,outline,pointer,resize,select,sr".split(","),e=>$[e]=!0);const T="@media (min-width: ${width}) {\n  ${style} \n}",F="@media not all and (min-width: ${width}) {\n  ${style} \n}",B={dark:"@media (prefers-color-scheme: dark)",portrait:"@media (orientation: portrait)",landscape:"@media (orientation: landscape)","motion-safe":"@media (prefers-reduced-motion: no-preference)","motion-reduce":"@media (prefers-reduced-motion: reduce)","contrast-more":"@media (prefers-contrast: more)","contrast-less":"@media (prefers-contrast: less)",print:"@media print"},H={before:1,after:1,"first-letter":1,"first-line":1,marker:1,selection:1,file:"file-selector-button",backdrop:1,placeholder:1},U={hover:1,focus:1,"focus-within":1,"focus-visible":1,active:1,visited:1,target:1,first:"first-child",last:"last-child",only:"only-child",odd:"nth-child(odd)",even:"nth-child(even)","first-of-type":1,"last-of-type":1,"only-of-type":1,empty:1,disabled:1,enabled:1,checked:1,indeterminate:1,default:1,required:1,valid:1,invalid:1,"in-range":1,"out-of-range":1,"placeholder-shown":1,autofill:1,"read-only":1},q=/class\s*=\s*['\"](?<class>[^'\"]*)['\"]/g,J=2,G=.16,K=.05,Q=.05,Z=.15,Y=5,X=4;if(e(E._,{hexToRgb:A,rgbToHex:function(e){var{r:e,g:t,b:r}=e;return((1<<24)+(Math.round(e)<<16)+(Math.round(t)<<8)+Math.round(r)).toString(16).slice(1)},resolveColor:V,hexToPalette:N,generateColors:function(t,r,n){const o=`--${R.prefix}-${t}-opacity`;z(t+"-opacity-",e=>{e=e.name.split("-"),e=o+`: ${+e[2]/100};`;return n?{name:"$"+n,style:e}:e}),z(t+"-",e=>{e=V(e.name.substring(t.length+1));if(!e)return null;e=h(e)?r+`: ${e};`:(void 0===e.a?o+":1;":"")+r+`: rgba(${e.r},${e.g},${e.b},${void 0===e.a?`var(${o})`:e.a});`;return n?{name:"$"+n,style:e}:e})},generateSizes:function(o){for(let e=0;e<=96;e++)13==e||15==e||16<=e&&(e-16)%4!=0||(o(e,""+.25*e+(0==e?"px":"rem")),1==e&&o("px","1px"),e<=3&&o(e+.5,.25*e+.125+"rem"));v([2,3,4,5,6,12],t=>{for(let e=1;e<t;e++){var r=e+"/"+t,n=+(100*e/t).toFixed(6)+"%";o(r,n)}})},resolveClass:O,addInitStyle:function(e){-1==o.indexOf(e)&&o.push(e)},autoGenerateOnReset:function(e){t.push(e),e()},extractArbitraryValue:P}),e(E,{get styles(){return u},reset:function(e){e&&(y(R,e),e.aliasColors&&v(e.aliasColors,(e,t)=>{e&&!R.colors[e]&&"#"===e[0]&&(R.colors[t]=N(e),delete R.aliasColors[t])})),v(t,e=>e()),a={},l={},u=null,b={},f&&(f.innerHTML=null,R.auto&&g.document&&M(g.document.body))},extract:function(e){let t,r=[];for(;null!==(t=q.exec(e));)v(t.groups.class.split(" "),e=>{(e=e&&e.trim())&&-1===r.indexOf(e)&&r.push(e)});return r},add:C,addMacroCss:function(e){r(e)?d.push(e):x(e)&&d.push(...e)},addRootVars:function(e){c={...c,...e}},resolveAll:M,register:z}),g.document){const D=g.document;e(E,{ready(e){"complete"===D.readyState?e():D.addEventListener("DOMContentLoaded",e)}}),E.ready(()=>{var e="vimesh-styles";(f=D.getElementById(e))||((f=D.createElement("style")).setAttribute("id",e),D.head.appendChild(f)),R.auto&&M(D.body);const t=new MutationObserver(e=>{R.auto&&(t.disconnect(),v(e,e=>{"childList"===e.type?e.addedNodes.forEach(e=>M(e,!1)):"attributes"===e.type&&C(S(e.target),!1)}),_(),t.observe(D,{attributes:!0,childList:!0,subtree:!0}))});t.observe(D,{attributes:!0,childList:!0,subtree:!0})})}else e(E,{ready(e){e()}});function h(e){return null!=e&&"string"==typeof e.valueOf()}function x(e){return Array.isArray(e)}function n(e){return"function"==typeof e}function r(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function v(e,n){e&&(x(e)?e.forEach((e,t)=>{n(e,t,t)}):Object.entries(e).forEach(([e,t],r)=>{n(t,e,r)}))}function e(r,...t){var n=t.length;if(n<1||null==r)return r;for(let e=0;e<n;e++){const o=t[e];o&&Object.keys(o).forEach(e=>{var t=Object.getOwnPropertyDescriptor(o,e);t.get||t.set?Object.defineProperty(r,e,t):r[e]=o[e]})}return r}function y(e,t){if(!t||"object"!=typeof t)return e;e&&"object"==typeof e||(e=Array.isArray(t)?[]:{});for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const n=t[r];Array.isArray(n)?e[r]=Array.isArray(e[r])?e[r].map((e,t)=>n[t]?y(e,n[t]):e).concat(n.slice(e[r].length)):[...n]:n&&"object"==typeof n?e[r]=y(e[r],n):e[r]=n}return e}function w(e,t){return t?"rtl"==t||"ltr"==t?`[dir="${t}"] `+e:U[t]?e+":"+(1===U[t]?t:U[t]):H[t]?e+"::"+(1===H[t]?t:H[t]):t.startsWith("aria-")?t.startsWith("aria-[")?e+`[aria-${P(t)}]`:`${e}[aria-${t.substring(5)}="true"]`:t.startsWith("data-[")?e+`[data-${P(t)}]`:"open"==t?e+"[open]":e:e}function k(a,i){if(h(a)){var s=R.breakpoints,l=a+"`"+(i||"");if(m[l])return m[l];i="."+j(a)+(i||"");let e=null,r=null,t=a.startsWith("dark:"),n=(a=t?a.substring(5):a).replace(/:(?=(((?!\]).)*\[)|[^\[\]]*$)/g,"\n").split("\n"),o="${style}";var d=e=>t?".dark "+e:e,c=e=>"before"===e||"after"===e?`content: var(--${R.prefix}-content);`:"";if(a=n[n.length-1],3===n.length?(e=n[0],r=n[1]):2===n.length&&(B[n[0]]||s[n[0]]||n[0].startsWith("min-")||n[0].startsWith("max-")?e=n[0]:r=n[0]),e&&(B[e]?o=B[e]+" {\n  ${style} \n}":s[e]?o=T.replace("${width}",s[e]+"px"):e.startsWith("min-[")?o=T.replace("${width}",P(e)):e.startsWith("max-[")?o="@media (max-width: "+P(e)+") {\n  ${style} \n}":e.startsWith("max-")&&s[e=e.substring(4)]&&(o=F.replace("${width}",s[e]+"px"))),r){let t="${name}";if(r.startsWith("group-")){var s=r.indexOf("/"),f=j("group"+(-1===s?"":r.substring(s)));if(r.startsWith("group-[")){let e=P(r);t=e.endsWith("_&")?e.substring(0,e.length-2)+" ."+f+" ${name}":"."+f+e+" ${name}"}else r=-1===s?r.substring(6):r.substring(6,s),t="."+w(f,r)+" ${name}";o=o.replace("${style}",d(t.replace("${name}",i))+"{"+c(r)+"${style}}")}else if(r.startsWith("peer-")){s=r.indexOf("/"),f=j("peer"+(-1===s?"":r.substring(s)));if(r.startsWith("peer-[")){let e=P(r);t=e.endsWith("_&")?e.substring(0,e.length-2)+" ."+f+" ~ ${name}":"."+f+e+" ~ ${name}"}else r=-1===s?r.substring(5):r.substring(5,s),t="."+w(f,r)+" ~ ${name}";o=o.replace("${style}",d(t.replace("${name}",i))+"{"+c(r)+"${style}}")}else o=o.replace("${style}",d(w(i,r))+"{"+c(r)+"${style}}")}else o=o.replace("${style}",d(i)+"{${style}}");return m[l]={breakpoint:e,pseudo:r,name:a,template:o},m[l]}console.error("Wrong parameter "+a)}function j(e){var t,r=String(e),n=r.length,o=-1,a="",i=r.charCodeAt(0);if(1==n&&45==i)return"\\"+r;for(;++o<n;)0==(t=r.charCodeAt(o))?a+="�":a+=1<=t&&t<=31||127==t||0==o&&48<=t&&t<=57||1==o&&48<=t&&t<=57&&45==i?"\\"+t.toString(16)+" ":128<=t||45==t||95==t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?r.charAt(o):"\\"+r.charAt(o);return a}function z(e,t,r){t&&(x(e)||(e=[e]),n(t)?v(e,e=>p.unshift({prefix:e,generator:t,init:r})):v(e,e=>{i[e]=t,r&&(s[e]=r)}))}function O(e){if(!e)return null;var r=k(e);let n=r.name,o=i[n];o&&s[n]&&s[n](r);for(let t=0;!o&&t<p.length;t++){let e=p[t];0==n.indexOf(e.prefix)&&(o=e.generator(r))&&e.init&&e.init(r)}return!o&&R.debug&&console.log("Unknown class: "+e),o}function _(){var e=Object.keys(l).sort((e,t)=>(R.breakpoints[e]||0)-(R.breakpoints[t]||0));let t=o,r=(v(e,e=>t=t.concat(l[e])),[]),n=(v(d,e=>{v(e,(e,t)=>{e=e.split(" ").map(e=>O(e)).join("");r.push(t+` {${e}}`)})}),[]);v(c,(e,t)=>{t.startsWith("--")||(t="--"+t),n.push(t+`:${e};`)}),0<n.length&&r.push(`:root{
${n.join("\n")}
}`),0<(t=t.concat(r)).length&&((e=(R.preset?[R.preset]:[]).concat(t).join("\n"))!==u&&(g.document?f?f.innerHTML=u=e:setTimeout(_):u=e))}function C(e,t=!0){if(e){if(h(e))e=e.split(" ");else{let t=[];v(e,e=>t=t.concat(e&&e.split&&e.split(" ")||[])),e=t}v(e,o=>{if((o=o.trim())&&!a[o]){let n=O(o);if(n){let e="",t=(n.name&&(0==n.name.indexOf("$")&&(e=n.name.substring(1)),n=n.style),k(o,e)),r=(n=t.template.replace("${style}",n),a[o]=!0,l[t.breakpoint||""]);(r=r||(l[t.breakpoint||""]=[])).push(n)}}}),t&&_()}}function S(t){const r=R.prefix+":";let e=[],a=[];var n=t.className;if(n&&(e.push(n),n.baseVal&&e.push(n.baseVal),n.animVal&&e.push(n.animVal)),v(t.attributes,t=>{let e=t.name,o=null;if("none"!==R.attributify&&e.startsWith(r)?o=e.substring(r.length):"all"===R.attributify&&$[e]&&(o=e),o){let e=t.value,n=b[o];n=n||(b[o]={}),v(e.split(/ |,/).filter(Boolean),t=>{var r=t.indexOf("~");if(-1!==r&&(t=t.replace("~",o)),n[t])"-"!==n[t]&&a.push(n[t]);else if(O(t))a.push(t),n[t]=t;else{r=t.lastIndexOf(":");let e=o+"-"+t;O(e=-1!==r?t.substring(0,r+1)+o+"-"+t.substring(r+1):e)?(n[t]=e,a.push(e)):(e=o+t,O(e=-1!==r?t.substring(0,r+1)+o+t.substring(r+1):e)?(n[t]=e,a.push(e)):n[t]="-")}})}}),t._vs_undo_add_classes_from_attrs&&t._vs_undo_add_classes_from_attrs(),0<a.length){let e=a.join(" ").split(" ").filter(e=>!t.classList.contains(e)).filter(Boolean);t.classList.add(...e),t._vs_undo_add_classes_from_attrs=()=>{t.classList.remove(...e)}}return[...e,...a]}function M(e,r=!0){if(e&&e.querySelectorAll){e=[e,...e.querySelectorAll("none"===R.attributify?"*[class]":"*")];let t=[];v(e,e=>t.push(...S(e))),C(t,r)}}function A(e){e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function W(e,t,r){var n=Math.round(e.h),n=60<=n&&n<=240,t=J*t,e=((e.h+(r===n?-1:1)*t)%360+360)%360;return Math.round(e)}function I(e,t,r){if(e.h+e.s===0)return e.s;let n=r?e.s-G*t:t===X?e.s+G:e.s+K*t;return r&&t===Y&&(n=Math.min(n,.1)),Number(Math.max(.06,Math.min(1,n)).toFixed(2))}function L(e,t,r){r=r?e.v+Q*t:e.v-Z*t;return Number(Math.max(0,Math.min(1,r)).toFixed(2))}function N(e){const t=[];var e=function(e){const[t,r,n]=(e=3===(e=e.replace(/^#/,"")).length?e.split("").map(e=>e+e).join(""):e).match(/\w{2}/g).map(e=>parseInt(e,16)/255);var o=(e=Math.max(t,r,n))-Math.min(t,r,n);let a=0;var i=0===e?0:o/e,s=e;return 0!=o&&(o=[[r,n,(r-n)/o+(r<n?6:0)],[n,t,(n-t)/o+2],[t,r,(t-r)/o+4]],a=o[[t,r,n].indexOf(e)][2],a/=6),{h:360*a,s:i,v:s}}(e),r=e;for(let e=Y;0<e;e--)t.push({h:W(r,e,!0),s:I(r,e,!0),v:L(r,e,!0)});t.push(e);for(let e=1;e<=X;e++)t.push({h:W(r,e),s:I(r,e),v:L(r,e)});return t.map(e=>{var{h:e,s:t,v:r}=e,e=e/360,n=Math.floor(6*e),o=r*(1-t),a=r*(1-(e=6*e-n)*t),[t,e,r]=[[r,e=r*(1-(1-e)*t),o],[a,r,o],[o,r,e],[o,a,r],[e,o,r],[r,o,a]][n%6];return"#"+(o=e=>Math.round(255*e).toString(16).padStart(2,"0"))(t)+o(e)+o(r)})}function V(r){if(!r)return null;let e=null,n=(r=r.trim()).lastIndexOf("/");-1!==n&&(a=r.substring(n+1).trim(),r=r.substring(0,n),o=P(a),e=o?+o:+a/100);let t=P(r);if(!t)if(R.aliasColors[r]&&(r=R.aliasColors[r]),R.specialColors[r])t=R.specialColors[r];else{let e=null;if(-1!=(n=r.lastIndexOf("-"))){e=r.substring(n+1);let t=(r=r.substring(0,n)).split("-");if(1<t.length){r=t[0];for(let e=1;e<t.length;e++)0<t[e].length&&(r+=t[e][0].toUpperCase()+t[e].substring(1))}}R.aliasColors[r]&&(r=R.aliasColors[r]);var o=R.colors[r];if(!o)return null;var a=e?+e:500;t=o[(50==a?1:a/100+1)-1]}return t&&"#"===t[0]&&(t=A(t),null!==e&&(t.a=e)),t}function P(e){if(!e)return null;var t=e.indexOf("["),r=e.indexOf("]");return 0<=t&&t<r?e.substring(t+1,r).split(E.config.spacePlaceholder).join(" "):null}}}function setupPreset(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");e.$vs.config.preset="html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}"}function setupLayout(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const s=e.$vs._.each,l=e.$vs.register,t=e.$vs._.generateSizes,d=e.$vs._.extractArbitraryValue,r=e.$vs.config,a=r.prefix;let n;l("[",e=>d(e.name)+";"),l("container",e=>e.breakpoint?`max-width: ${r.breakpoints[e.breakpoint]}px;`:"width: 100%;"),s(["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-row","table-column-group","table-footer-group","table-header-group","table-row-group","flow-root","grid","inline-grid","contents","list-item","hidden"],e=>l(e,`display: ${"hidden"===e?"none":e};`)),s(["","flex-"],e=>{l(e+"grow-0","flex-grow: 0;"),l(e+"grow","flex-grow: 1;"),l(e+"shrink-0","flex-shrink: 0;"),l(e+"shrink","flex-shrink: 1;")}),s({1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},(e,t)=>l("flex-"+t,`flex: ${e};`)),l("flex-[",e=>`flex: ${d(e.name)};`),s(["row","row-reverse","col","col-reverse"],e=>l("flex-"+e,`flex-direction: ${e.replace("col","column")};`)),s(["wrap","wrap-reverse","nowrap"],e=>l("flex-"+e,`flex-wrap: ${e};`)),s({auto:"auto",full:"100%"},(e,t)=>l("basis-"+t,`flex-basis: ${e};`)),t((e,t)=>{l("basis-"+e,`flex-basis: ${t};`)}),l("basis-[",e=>`flex-basis: ${d(e.name)};`),s(["left","right","both","none"],e=>l("clear-"+e,`clear: ${e};`)),l("clear-[",e=>`clear: ${d(e.name)};`),s(["static","fixed","absolute","relative","sticky"],e=>l(e,`position: ${e};`)),l("position-[",e=>`position: ${d(e.name)};`),s({auto:"auto",full:"100%",screen:"100vw",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>l("w-"+t,`width: ${e};`)),s({auto:"auto",full:"100%",screen:"100vh",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>l("h-"+t,`height: ${e};`)),t((e,t)=>{l("w-"+e,`width: ${t};`),l("h-"+e,`height: ${t};`)}),l("w-[",e=>`width: ${d(e.name)};`),l("h-[",e=>`height: ${d(e.name)};`);const o={0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"};for(s(o,(e,t)=>l("min-w-"+t,`min-width: ${e};`)),o.none="none",o.prose="65ch",s(["xs","sm","md","lg","xl"],(e,t)=>o[e]=20+4*t+"rem"),s(["sm","md","lg","xl","2xl"],e=>o["screen-"+e]=r.breakpoints[e]+"px"),n=2;n<=7;n++)o[n+"xl"]=30+6*n+"rem";function i(e,t,r){l(e+"m-"+t,`margin: ${e}${r};`);var n=`margin-left: ${e}${r};`,o=`margin-right: ${e}${r};`,a=`margin-top: ${e}${r};`,r=`margin-bottom: ${e}${r};`;l(e+"mx-"+t,n+o),l(e+"ml-"+t,n),l(e+"mr-"+t,o),l(e+"my-"+t,a+r),l(e+"mt-"+t,a),l(e+"mb-"+t,r)}s(o,(e,t)=>l("max-w-"+t,`max-width: ${e};`)),l("min-w-[",e=>`min-width: ${d(e.name)};`),l("max-w-[",e=>`max-width: ${d(e.name)};`),s({0:"0px",full:"100%",screen:"100vh",min:"min-content",max:"max-content",fit:"fit-content"},(e,t)=>{l("min-h-"+t,`min-height: ${e};`),l("max-h-"+t,`max-height: ${e};`)}),t((e,t)=>{l("max-h-"+e,`max-height: ${t};`)}),l("min-h-[",e=>`min-height: ${d(e.name)};`),l("max-h-[",e=>`max-height: ${d(e.name)};`),i("","auto","auto"),t((t,r)=>{l("p-"+t,`padding: ${r};`);var e=`padding-left: ${r};`,n=`padding-right: ${r};`,o=`padding-top: ${r};`,a=`padding-bottom: ${r};`;l("px-"+t,e+n),l("pl-"+t,e),l("pr-"+t,n),l("py-"+t,o+a),l("pt-"+t,o),l("pb-"+t,a),s(["","-"],e=>i(e,t,r))}),l(["p-[","px-[","pl-[","pr-[","py-[","pt-[","pb-["],t=>{var e=d(t.name),r=e=>-1!==t.name.indexOf(e),n=`padding-left: ${e};`,o=`padding-right: ${e};`,a=`padding-top: ${e};`,i=`padding-bottom: ${e};`;return r("px-")?n+o:r("pl-")?n:r("pr-")?o:r("py-")?a+i:r("pt-")?a:r("pb-")?i:`padding: ${e};`}),s(["","-"],s=>{l([s+"m-[",s+"mx-[",s+"ml-[",s+"mr-[",s+"my-[",s+"mt-[",s+"mb-["],t=>{var e=d(t.name),r=e=>-1!==t.name.indexOf(e),n=`margin-left: ${s}${e};`,o=`margin-right: ${s}${e};`,a=`margin-top: ${s}${e};`,i=`margin-bottom: ${s}${e};`;return r("mx-")?n+o:r("ml-")?n:r("mr-")?o:r("my-")?a+i:r("mt-")?a:r("mb-")?i:`margin: ${s}${e};`})}),t((a,i)=>{s(["","-"],e=>{var t=`left: ${e}${i};`,r=`right: ${e}${i};`,n=`top: ${e}${i};`,o=`bottom: ${e}${i};`;l(e+"inset-"+a,t+r+n+o),l(e+"inset-x-"+a,t+r),l(e+"left-"+a,t),l(e+"right-"+a,r),l(e+"inset-y-"+a,n+o),l(e+"top-"+a,n),l(e+"bottom-"+a,o)})}),s(["","-"],i=>{l([i+"inset-[",i+"inset-x-[",i+"left-[",i+"right-[",i+"inset-y-[",i+"top-[",i+"bottom-["],t=>{var e=d(t.name),r=`left: ${i}${e};`,n=`right: ${i}${e};`,o=`top: ${i}${e};`,e=`bottom: ${i}${e};`,a=e=>-1!==t.name.indexOf(e);return a("inset-x")?r+n:a("inset-y")?o+e:a("inset")?r+n+o+e:a("left")?r:a("right")?n:a("top")?o:a("bottom")?e:null})});const c=" > :not([hidden]) ~ :not([hidden])";for(l("space-x-reverse",{name:"$"+c,style:`--${a}-space-x-reverse: 1;`}),l("space-y-reverse",{name:"$"+c,style:`--${a}-space-y-reverse: 1;`}),t((n,o)=>{s({x:["right","left"],y:["bottom","top"]},(t,r)=>s(["","-"],e=>{l(e+`space-${r}-`+n,{name:"$"+c,style:`--${a}-space-${r}-reverse: 0;margin-${t[0]}: calc(${e}${o} * var(--${a}-space-${r}-reverse));margin-${t[1]}: calc(${e}${o} * calc(1 - var(--${a}-space-${r}-reverse)));`})}))}),s({x:["right","left"],y:["bottom","top"]},(r,n)=>s(["","-"],t=>{l(t+`space-${n}-[`,e=>{e=d(e.name);return{name:"$"+c,style:`--${a}-space-${n}-reverse: 0;margin-${r[0]}: calc(${t}${e} * var(--${a}-space-${n}-reverse));margin-${r[1]}: calc(${t}${e} * calc(1 - var(--${a}-space-${n}-reverse)));`}})})),s({first:-9999,last:9999,none:0},(e,t)=>l("order-"+t,`order: ${e};`)),n=1;n<=12;n++)l("order-"+n,`order: ${n};`);for(l("order-[",e=>`order: ${d(e.name)};`),l("grid-cols-none","grid-template-columns: none;"),n=1;n<=12;n++)l("grid-cols-"+n,`grid-template-columns: repeat(${n}, minmax(0, 1fr));`);l("grid-cols-[",e=>{return`grid-template-columns: ${d(e.name).replace(/,(?![^\(]*\))/g," ")};`});const f=e=>e.substring(e.lastIndexOf("-")+1);for(s([["col","column"],["row","row"]],([e,t],r)=>{l(e+"-auto",`grid-${t}: auto;`),l(e+"-span-full",`grid-${t}: 1 / -1;`),l(e+"-start-auto",`grid-${t}-start: auto;`),l(e+"-end-auto",`grid-${t}-end: auto;`),l(e+"-span-",e=>{e=f(e.name);return`grid-${t}: span ${e} / span ${e};`}),l(e+"-start-",e=>`grid-${t}-start: ${f(e.name)};`),l(e+"-end-",e=>`grid-${t}-end: ${f(e.name)};`)}),l("grid-rows-none","grid-template-rows: none;"),n=1;n<=6;n++)l("grid-rows-"+n,`grid-template-rows: repeat(${n}, minmax(0, 1fr));`);l("grid-rows-[",e=>{return`grid-template-rows: ${d(e.name).replace(/,(?![^\(]*\))/g," ")};`}),s(["row","col","dense","row-dense","col-dense"],e=>l("grid-flow-"+e,`grid-auto-flow: ${e.replace("col","column")};`)),s({auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},(e,t)=>{l("auto-cols-"+t,`grid-auto-columns: ${e};`),l("auto-rows-"+t,`grid-auto-rows: ${e};`)}),t((e,t)=>{l("gap-"+e,`gap: ${t};`),l("gap-x-"+e,`column-gap: ${t};`),l("gap-y-"+e,`row-gap: ${t};`)}),l("gap-[",e=>`gap: ${d(e.name)};`),l("gap-x-[",e=>`column-gap: ${d(e.name)};`),l("gap-y-[",e=>`row-gap: ${d(e.name)};`),s({start:"flex-start",end:"flex-end",center:"center",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{l("justify-"+t,`justify-content: ${e};`),l("content-"+t,`align-content: ${e};`)}),l("justify-[",e=>`justify-content: ${d(e.name)};`),l("content-[",e=>`align-content: ${d(e.name)};`),s({start:"start",end:"end",center:"center",stretch:"stretch",between:"space-between",around:"space-around",evenly:"space-evenly"},(e,t)=>{l("place-content-"+t,`place-content: ${e};`)}),l("place-content-[",e=>`place-content: ${d(e.name)};`),s(["start","end","center","stretch"],e=>{l("justify-items-"+e,`justify-items: ${e};`),l("place-items-"+e,`place-items: ${e};`)}),l("justify-items-[",e=>`justify-items: ${d(e.name)};`),l("place-items-[",e=>`place-items: ${d(e.name)};`),s(["auto","start","end","center","stretch"],e=>{l("justify-self-"+e,`justify-self: ${e};`),l("place-self-"+e,`place-self: ${e};`)}),l("justify-self-[",e=>`justify-self: ${d(e.name)};`),l("place-self-[",e=>`place-self: ${d(e.name)};`),s(["start","end","center","baseline","stretch"],e=>l("items-"+e,`align-items: ${e};`)),l("items-[",e=>`align-items: ${d(e.name)};`),s(["auto","start","end","center","baseline","stretch"],e=>l("self-"+e,`align-self: ${e};`)),l("self-[",e=>`align-self: ${d(e.name)};`),l("decoration-slice","box-decoration-break: slice;"),l("decoration-clone","box-decoration-break: clone;"),l("box-border","box-sizing: border-box;"),l("box-content","box-sizing: content-box;"),l("isolate","isolation: isolate;"),l("isolation-auto","isolation: auto;"),s(["left","right","none"],e=>l("float-"+e,`float: ${e};`)),l("float-[",e=>`float: ${d(e.name)};`),s(["contain","cover","fill","none","scale-down"],e=>l("object-"+e,`object-fit: ${e};`)),s(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>l("object-"+e,`object-position: ${e.replace("-"," ")};`)),s(["auto","hidden","visible","scroll"],e=>{l("overflow-"+e,`overflow: ${e};`),l("overflow-x-"+e,`overflow-x: ${e};`),l("overflow-y-"+e,`overflow-y: ${e};`)}),s(["auto","none","contain"],e=>{l("overscroll-"+e,`overscroll-behavior: ${e};`),l("overscroll-x-"+e,`overscroll-behavior-x: ${e};`),l("overscroll-y-"+e,`overscroll-behavior-y: ${e};`)}),l("visible","visibility: visible;"),l("invisible","visibility: hidden;"),s([0,10,20,30,40,50,"auto"],e=>l("z-"+e,`z-index: ${e};`)),l("z-[",e=>`z-index: ${d(e.name)};`),l("border-collapse","border-collapse: collapse;"),l("border-separate","border-collapse: separate;"),l("table-auto","table-layout: auto;"),l("table-fixed","table-layout: fixed;")}function setupPaint(e){if(!e.$vs)return console.error("Vimesh style core is not loaded!");const r=e.$vs._,a=r.each,i=e.$vs.register,t=r.generateSizes,n=r.generateColors,s=r.extractArbitraryValue,o=e.$vs.config,l=o.prefix,{rgbToHex:d,resolveColor:c,addInitStyle:f,isString:u}=e.$vs._;let p;function b(e,t="rem"){return r.isNumeric(e)?""+e+t:e}for(f(`*, ::before, ::after {--${l}-content: '';}`),i("font-",e=>{e=e.name.split("-"),e=o.fonts[e[1]];return e?`font-family: ${e};`:null}),r.autoGenerateOnReset(()=>{var e=r.extend({xs:[.75,1],sm:[.875,1.25],base:[1,1.5],lg:[1.125,1.75],xl:[1.25,1.75],"2xl":[1.5,2],"3xl":[1.875,2.25],"4xl":[2.25,2.5],"5xl":[3],"6xl":[3.75],"7xl":[4.5],"8xl":[6],"9xl":[8]},o.fontSizes);a(e,(e,t)=>i("text-"+t,`font-size: ${b(e[0])};line-height: ${1<e.length?""+b(e[1]):1};`))}),i("antialiased","-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"),i("subpixel-antialiased","-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"),i("italic","font-style: italic;"),i("not-italic","font-style: normal;"),a(["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],(e,t)=>i("font-"+e,`font-weight: ${100*(t+1)};`)),a({tighter:-.05,tight:-.025,normal:0,wide:.025,wider:.05,widest:.1},(e,t)=>i("tracking-"+t,`letter-spacing: ${e}em;`)),p=3;p<=10;p++)i("leading-"+p,`line-height: ${.25*p}rem;`);a({none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},(e,t)=>i("leading-"+t,`line-height: ${e};`)),a(["none","disc","decimal"],e=>i("list-"+e,`list-style-type: ${e};`)),a(["inside","outside"],e=>i("list-"+e,`list-style-position: ${e};`)),n("placeholder","color","::placeholder"),n("text","color"),a(["left","center","right","justify"],e=>i("text-"+e,`text-align: ${e};`)),a(["underline","line-through","none"],e=>i(""+("none"==e?"no-underline":e),`text-decoration: ${e};`)),a(["uppercase","lowercase","capitalize","none"],e=>i(""+("none"==e?"normal-case":e),`text-transform: ${e};`)),a(["ellipsis","clip"],e=>i("overflow-"+e,"text-overflow: "+e)),i("truncate","overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"),a(["baseline","top","middle","bottom","text-top","text-bottom"],e=>i("align-"+e,`vertical-align: ${e};`)),a(["normal","nowrap","pre","pre-line","pre-wrap"],e=>i("whitespace-"+e,`white-space: ${e};`)),i("break-normal","overflow-wrap: normal; word-break: normal;"),i("break-words","overflow-wrap: break-word;"),i("break-all","word-break: break-all;"),a(["fixed","local","scroll"],e=>i("bg-"+e,"background-attachment: "+e)),a(["text","content","padding","border"],e=>i("bg-clip-"+e,`background-clip: ${e}${"text"==e?"":"-box"};`)),n("bg","background-color"),a(["border","padding","content"],e=>i("bg-origin-"+e,`background-origin: ${e}-box;`)),a(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],e=>i("bg-"+e,`background-position: ${e.replace("-"," ")};`)),a(["repeat","no-repeat","repeat-x","repeat-y","round","space"],e=>i("bg-"+(-1!=e.indexOf("repeat")?e:"repeat-"+e),`background-repeat: ${e};`)),a(["auto","cover","contain"],e=>i("bg-"+e,`background-size: ${e};`)),i("bg-none","background-image: none;");const m={t:"top",r:"right",b:"bottom",l:"left"},$=["t","tr","r","br","b","bl","l","tl"],g=(a($,e=>i("bg-gradient-to-"+e,`background-image: linear-gradient(to ${1==e.length?m[e[0]]:m[e[0]]+" "+m[e[1]]}, var(--${l}-gradient-stops));`)),i("from-",e=>{e=c(e.name.substring("from-".length));return e?`--${l}-gradient-from: ${u(e)?e:"#"+d(e)}; --${l}-gradient-stops: var(--${l}-gradient-from), var(--${l}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),i("to-",e=>{e=c(e.name.substring("to-".length));return e?`--${l}-gradient-to: ${u(e)?e:"#"+d(e)};`:null}),i("via-",e=>{e=c(e.name.substring("via-".length));return e?`--${l}-gradient-stops: var(--${l}-gradient-from), ${u(e)?e:"#"+d(e)}, var(--${l}-gradient-to, rgba(${e.r},${e.g},${e.b}, 0));`:null}),n("fill","fill"),n("stroke","stroke"),a([0,1,2],e=>i("stroke-"+e,"stroke-width: "+e)),r.autoGenerateOnReset(()=>{var e=r.extend({none:"0px",sm:.125,_:.25,md:.375,lg:.5,xl:.75,"2xl":1,"3xl":1.5,full:"9999px"},o.borderRadiusSizes);a(e,(n,o)=>{n=b(n),i("rounded"+("_"==o?"":"-"+o),`border-radius: ${n};`),a($,e=>{var t,r;1==e.length?(r=(t="t"==e||"b"==e)?["l","r"]:["t","b"],i("rounded-"+e+("_"==o?"":"-"+o),`border-${t?m[e]:m[r[0]]}-${t?m[r[0]]:m[e]}-radius: ${n}; border-${t?m[e]:m[r[1]]}-${t?m[r[1]]:m[e]}-radius: ${n};`)):i("rounded-"+e+("_"==o?"":"-"+o),`border-${m[e[0]]}-${m[e[1]]}-radius: ${n}; `)})})}),i("rounded-[",e=>`border-radius: ${s(e.name)};`),a($,n=>{if(1==n.length){let t="t"==n||"b"==n,r=t?["l","r"]:["t","b"];i(`rounded-${n}-[`,e=>`border-${t?m[n]:m[r[0]]}-${t?m[r[0]]:m[n]}-radius: ${s(e.name)}; border-${t?m[n]:m[r[1]]}-${t?m[r[1]]:m[n]}-radius: ${s(e.name)};`)}else i(`rounded-${n}-[`,e=>`border-${m[n[0]]}-${m[n[1]]}-radius: ${s(e.name)}; `)}),a([0,1,2,4,8],t=>{i("border"+(1==t?"":"-"+t),`border-width: ${t}px;`),a(Object.keys(m),e=>i("border-"+e+(1==t?"":"-"+t),`border-${m[e]}-width: ${t}px;`)),i("border-x"+(1==t?"":"-"+t),`border-left-width: ${t}px;border-right-width: ${t}px;`),i("border-y"+(1==t?"":"-"+t),`border-top-width: ${t}px;border-bottom-width: ${t}px;`)}),n("border","border-color"),a(["solid","dashed","dotted","double","none"],e=>i("border-"+e,`border-style: ${e};`))," > :not([hidden]) ~ :not([hidden])"),h=(a(["x","y"],t=>{let r="x"==t?["left","right"]:["top","bottom"];i(`divide-${t}-reverse`,{name:"$"+g,style:`--${l}-divide-${t}-reverse: 1;`}),a([0,1,2,4,8],e=>{i("divide-"+t+(1==e?"":"-"+e),{name:"$"+g,style:`--${l}-divide-${t}-reverse: 0; border-${r[0]}-width: calc(${e}px * calc(1 - var(--${l}-divide-${t}-reverse))); border-${r[1]}-width: calc(${e}px * var(--${l}-divide-${t}-reverse));`})})}),n("divide","border-color",g),a(["solid","dashed","dotted","double","none"],e=>i("divide-"+e,{name:"$"+g,style:`border-style: ${e};`})),()=>{f(`*, ::before, ::after {--${l}-shadow: 0 0 #0000;}`),f(`*, ::before, ::after {--${l}-ring-inset: var(--${l}-empty,/*!*/ /*!*/); --${l}-ring-offset-width: 0px; --${l}-ring-offset-color: #fff; --${l}-ring-color: rgba(59, 130, 246, 0.5); --${l}-ring-offset-shadow: 0 0 #0000; --${l}-ring-shadow: 0 0 #0000;}`)}),x=(i("ring-inset",`--${l}-ring-inset: inset;`),a([0,1,2,4,8,3],e=>i("ring"+(3==e?"":"-"+e),`--${l}-ring-offset-shadow: var(--${l}-ring-inset) 0 0 0 var(--${l}-ring-offset-width) var(--${l}-ring-offset-color); --${l}-ring-shadow: var(--${l}-ring-inset) 0 0 0 calc(${e}px + var(--${l}-ring-offset-width)) var(--${l}-ring-color); box-shadow: var(--${l}-ring-offset-shadow), var(--${l}-ring-shadow), var(--${l}-shadow, 0 0 #0000);`,h)),n("ring",`--${l}-ring-color`),a([0,1,2,4,8],e=>i("ring-offset-"+e,`--${l}-ring-offset-width: ${e}px;`)),"ring-offset-"),v=(i(x,e=>{e=c(e.name.substring(x.length));return e?`--${l}-ring-offset-color: ${u(e)?e:"#"+d(e)}; `:null}),`box-shadow: var(--${l}-ring-offset-shadow, 0 0 #0000), var(--${l}-ring-shadow, 0 0 #0000), var(--${l}-shadow);`);a({sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",_:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"0 0 #0000"},(e,t)=>i("shadow"+("_"==t?"":"-"+t),`--${l}-shadow: ${e};`+v,h));e=["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];a(e,e=>i("mix-blend-"+e,`mix-blend-mode: ${e};`)),a(e,e=>i("bg-blend-"+e,`background-blend-mode: ${e};`)),a({none:"none",all:"all",opacity:"opacity",shadow:"box-shadow",transform:"transform",_:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"background-color, border-color, color, fill, stroke"},(e,t)=>i("transition"+("_"==t?"":"-"+t),`transition-property: ${e}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`)),i("duration-",e=>{return`transition-duration: ${e.name.split("-")[1]}ms;`}),a({linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},(e,t)=>i("ease-"+t,`transition-timing-function: ${e};`)),i("delay-",e=>{return`transition-delay: ${e.name.split("-")[1]}ms;`});const y="animate-";i(y,e=>{e=e.name.substring(y.length),e=o.animation[e];return e?`animation: ${e};`:null},e=>{e=e.name.substring(y.length);o.keyframes[e]&&f("@keyframes "+e+o.keyframes[e])});const w=`filter: opacity(var(--${l}-opacity)) hue-rotate(var(--${l}-hue-rotate)) saturate(var(--${l}-saturate)) contrast(var(--${l}-contrast)) blur(var(--${l}-blur)) brightness(var(--${l}-brightness))`,k=(i(["opacity-","hue-rotate-","saturate-","contrast-","blur","brightness-"],e=>{const t=e.name.split("-");let r=0<t.length?t.slice(0,-1).join("-"):t[0];var n,e=t.slice(-1)[0];return"opacity"===r?w+`; --${l}-${r}: ${+e/100};`:r.match("brightness|contrast")?w+`; --${l}-${r}: ${+e/200*2};`:"hue-rotate"===r?w+`; --${l}-${r}: ${e}deg;`:"saturate"===r?w+`; --${l}-${r}:  ${+e/100};`:"blur"===r||""===r?"blur"===e?w+`; --${l}-blur: 8px;`:"none"!=e?(n={none:0,sm:4,md:12,lg:16,xl:24,"2xl":40,"3xl":64},w+`; --${l}-blur: ${n[e]}px;`):void 0:void 0},()=>f(`*, ::before, ::after {--${l}-opacity:; --${l}-hue-rotate:; --${l}-saturate:; --${l}-contrast:; --${l}-blur:; --${l}-brightness:;}`)),()=>f(`*, ::before, ::after {--${l}-translate-x: 0; --${l}-translate-y: 0; --${l}-rotate: 0; --${l}-skew-x: 0; --${l}-skew-y: 0; --${l}-scale-x: 1; --${l}-scale-y: 1;}`)),j=`transform: translateX(var(--${l}-translate-x)) translateY(var(--${l}-translate-y)) rotate(var(--${l}-rotate)) skewX(var(--${l}-skew-x)) skewY(var(--${l}-skew-y)) scaleX(var(--${l}-scale-x)) scaleY(var(--${l}-scale-y))`;function z(r,n){a(["x","y"],t=>a(["","-"],e=>{i(e+`translate-${t}-`+r,j+`; --${l}-translate-${t}: ${e}${n};`,k)}))}i("transform",j+";",k),i("transform-none","transform: none;"),a(["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],e=>i("origin-"+e,`transform-origin: ${e.replace("-"," ")};`)),i(["scale-","-scale-"],e=>{let t=e.name,r="";"-"==t[0]&&(t=t.substring(1),r="-");var e=t.lastIndexOf("-"),n=t.substring(0,e);let o=t.substring(e+1);return o=s(o)||+o/100,"scale"===n?j+`; --${l}-scale-x: ${r}${o};--${l}-scale-y: ${r}${o};`:j+`; --${l}-${n}: ${r}${o};`},k),i(["rotate-","-rotate-"],e=>{let t=e.name,r="",n=("-"==t[0]&&(t=t.substring(1),r="-"),t.substring(t.lastIndexOf("-")+1));return n=s(n)||n+"deg",j+`; --${l}-rotate: ${r}${n};`},k),t(z),z("full","100%"),a(["x","y"],n=>a(["","-"],t=>{const r=t+`translate-${n}-[`;i(r,e=>{e=e.name.substring(r.length,e.name.length-1);return j+`; --${l}-translate-${n}: ${t}${e};`},k)})),a(["x","y"],n=>a(["","-"],t=>{const r=t+`skew-${n}-[`;a([0,1,2,3,6,12],e=>i(t+`skew-${n}-`+e,j+`; --${l}-skew-${n}: ${t}${e}deg;`,k)),i(r,e=>{e=e.name.substring(r.length,e.name.length-1);return j+`; --${l}-skew-${n}: ${t}${e};`},k)})),i("content-[",e=>`--${l}-content: ${s(e.name)};content: var(--${l}-content);`),i("outline-none","outline: 2px solid transparent; outline-offset: 2px;"),i("outline","outline-style: solid;"),a(["dashed","dotted","double","hidden"],e=>i("outline-"+e,`outline-style: ${e};`)),a([0,1,2,4,8],e=>{i("outline-"+e,`outline-width: ${e}px;`),i("outline-offset-"+e,`outline-offset: ${e}px;`)}),n("outline","outline-color"),i("appearance-none","appearance: none;"),a(["auto","default","pointer","wait","text","move","help","not-allowed"],e=>i("cursor-"+e,`cursor: ${e};`)),a(["none","auto"],e=>i("pointer-events-"+e,`pointer-events: ${e};`)),a({none:"none",y:"vertical",x:"horizontal",_:"both"},(e,t)=>i("resize"+("_"==t?"":"-"+t),`resize: ${e};`)),a(["none","text","all","auto"],e=>i("select-"+e,`user-select: ${e};`)),i("sr-only","position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"),i("not-sr-only","position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")}function setupVimeshStyle(e){setupCore(e),setupPreset(e),setupLayout(e),setupPaint(e)}setupVimeshStyle(window);