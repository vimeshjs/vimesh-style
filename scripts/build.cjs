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
const processors = {
    '.dev': js => js,
    '': js => UglifyJS.minify(js).code
}
function buildBrowserEs5() {
    let code = _.map(files, f => babel.transformSync(fs.readFileSync(`${dirSrc}/${f}`), { presets: ['@babel/preset-env'] }).code).join('')
    _.each(processors, (func, type) => {
        let result = `// Vimesh Style (ES5) v${version}\r\n` + func(code + fs.readFileSync(`${__dirname}/index.js`))
        fs.writeFileSync(`${dirDist}/vs${type}.es5.js`, result)
    })
}

function buildBrowser() {
    _.each(processors, (func, type) => {
        let result = `// Vimesh Style v${version}\r\n` + func(code + fs.readFileSync(`${__dirname}/index.js`))
        fs.writeFileSync(`${dirDist}/vs${type}.js`, result)
    })
}

function buildCommonJS() {
    _.each(processors, (func, type) => {
        let result = `// Vimesh Style v${version}\r\n` + func(code + fs.readFileSync(`${__dirname}/index.cjs`))
        fs.writeFileSync(`${dirDist}/vs${type}.cjs`, result)
    })
}

function buildESM() {
    _.each(processors, (func, type) => {
        let result = `// Vimesh Style v${version}\r\n` + func(code + fs.readFileSync(`${__dirname}/index.mjs`))
        fs.writeFileSync(`${dirDist}/vs${type}.mjs`, result)
    })
}

buildBrowser()
buildBrowserEs5()
buildCommonJS()
buildESM()