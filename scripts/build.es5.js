const _ = require('lodash')
const fs = require('fs')
const babel = require("@babel/core")
const UglifyJS = require("uglify-js")
const version = require('../package.json').version
const root = `${__dirname}/..`
const dirDist = `${root}/dist`
const dirSrc = `${root}/src`

if (!fs.existsSync(dirDist)) fs.mkdirSync(dirDist)

let files = ['vms-core.js', 'vms-preset.js', 'vms-layout.js', 'vms-paint.js']

let code = _.map(files, f => babel.transformSync(fs.readFileSync(`${dirSrc}/${f}`), { presets: ['@babel/preset-env'] }).code).join('')
let result = `// Vimesh Style (ES5) v${version}\r\n` + UglifyJS.minify(code).code
fs.writeFileSync(`${dirDist}/vms.es5.min.js`, result)

