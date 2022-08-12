const _ = require('lodash')
const fs = require('fs')
const UglifyJS = require("uglify-js")
const version = require('../package.json').version
const root = `${__dirname}/..`
const dirDist = `${root}/dist`
const dirSrc = `${root}/src`

if (!fs.existsSync(dirDist)) fs.mkdirSync(dirDist)

let files = ['core.js', 'preset.js', 'layout.js', 'paint.js']

let code = _.map(files, f => fs.readFileSync(`${dirSrc}/${f}`)).join('')
let result = `// Vimesh Style v${version}\r\n` + UglifyJS.minify(code).code
fs.writeFileSync(`${dirDist}/vs.js`, result)
