const css = require('css')
const setupCore = require('../src/core');
const setupLayout = require('../src/layout');
const setupPaint = require('../src/paint');
const setupPreset = require('../src/preset');

function setupTestEnvironment() {
    // Clear JSDOM
    document.documentElement.innerHTML = '<html><head></head><body></body></html>';
    
    // Clear any existing vimesh style
    delete global.$vs;
    delete window.$vs;
    
    // Setup all modules
    setupCore(window);
    setupLayout(window);
    setupPaint(window);
    setupPreset(window);
    
    const $vs = window.$vs;
    
    // Disable preset for cleaner test output (can be overridden)
    $vs.config.preset = '';
    
    return $vs;
}

function createTestElement(className, tagName = 'div') {
    const element = document.createElement(tagName);
    element.className = className;
    document.body.appendChild(element);
    return element;
}

function getGeneratedStyles() {
    const styleElement = document.getElementById('vimesh-styles');
    return styleElement ? styleElement.textContent : '';
}

function normalizeCss(cssContent) {
    return css.stringify(css.parse(cssContent || ''))
}
const sleep = t => new Promise(r => setTimeout(r, t))

module.exports = {
    normalizeCss,
    sleep,
    setupTestEnvironment,
    createTestElement,
    getGeneratedStyles
}