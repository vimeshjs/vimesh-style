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

// Function to clean CommonJS exports from file content
function cleanModuleExports(content) {
    // Remove CommonJS export statements
    return content.replace(/\s*if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*\)\s*module\.exports\s*=\s*\w+\s*$/gm, '');
}

let code = _.map(files, f => cleanModuleExports(fs.readFileSync(`${dirSrc}/${f}`, 'utf8'))).join('')
const processors = {
    '.dev': js => js,
    '': js => UglifyJS.minify(js).code
}
function buildBrowserEs5() {
    let code = _.map(files, f => {
        const cleanedContent = cleanModuleExports(fs.readFileSync(`${dirSrc}/${f}`, 'utf8'));
        return babel.transformSync(cleanedContent, { presets: ['@babel/preset-env'] }).code;
    }).join('')
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