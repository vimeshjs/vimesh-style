const _ = require('lodash')
const fs = require('fs')
const UglifyJS = require("uglify-js")
const version = require('../package.json').version
const root = `${__dirname}/..`
const dirDist = `${root}/dist`
const dirSrc = `${root}/src`

if (!fs.existsSync(dirDist)) fs.mkdirSync(dirDist)

let files = ['vms-core.js', 'vms-preset.js', 'vms-layout.js', 'vms-paint.js']

let code = _.map(files, f => fs.readFileSync(`${dirSrc}/${f}`)).join('')
let result = `// Vimesh Style v${version}\r\n` + UglifyJS.minify(code).code
fs.writeFileSync(`${dirDist}/vms.min.js`, result)
