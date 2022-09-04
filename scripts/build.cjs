const _ = require('lodash')
const fs = require('fs')
const babel = require("@babel/core")
const UglifyJS = require("uglify-js")
const version = require('../package.json').version
const root = `${__dirname}/..`
const dirDist = `${root}/dist`
const dirSrc = `${root}/src`

if (!fs.existsSync(dirDist)) fs.mkdirSync(dirDist)

let files = ['core.js', 'preset.js', 'layout.js', 'paint.js']

let code = _.map(files, f => fs.readFileSync(`${dirSrc}/${f}`)).join('')

function buildBrowserEs5() {
    let code = _.map(files, f => babel.transformSync(fs.readFileSync(`${dirSrc}/${f}`), { presets: ['@babel/preset-env'] }).code).join('')
    let result = `// Vimesh Style (ES5) v${version}\r\n` + UglifyJS.minify(code + fs.readFileSync(`${__dirname}/index.js`)).code
    fs.writeFileSync(`${dirDist}/vs.es5.js`, result)
}

function buildBrowser() {
    let result = `// Vimesh Style v${version}\r\n` + UglifyJS.minify(code + fs.readFileSync(`${__dirname}/index.js`)).code
    fs.writeFileSync(`${dirDist}/vs.js`, result)
}

function buildCommonJS() {
    let result = `// Vimesh Style v${version}\r\n` + UglifyJS.minify(code + fs.readFileSync(`${__dirname}/index.cjs`)).code
    fs.writeFileSync(`${dirDist}/vs.cjs`, result)
}

function buildESM() {
    let result = `// Vimesh Style v${version}\r\n` + UglifyJS.minify(code + fs.readFileSync(`${__dirname}/index.mjs`)).code
    fs.writeFileSync(`${dirDist}/vs.mjs`, result)
}

buildBrowser()
buildBrowserEs5()
buildCommonJS()
buildESM()