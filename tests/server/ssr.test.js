const { normalizeCss } = require('./utils')
require('../../index')


test('generate css classes from html', () => {
    let expectedCssOutput = normalizeCss(`
    .w-2 {
        width: 0.5rem;
    }
        
    .text-red-500 {
        --vs-text-opacity: 1;
        color: rgba(239,68,68,var(--vs-text-opacity));
    }
    `)

    $vs.config.preset = false
    const html = /*html*/`<div class="w-2">
        <span class="text-red-500">hello world</span>
    </div>`
    $vs.add($vs.extract(html))
    let cssOutput = normalizeCss($vs.styles)

    expect(cssOutput).toBe(expectedCssOutput)
    let preset = `html{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;font-family:inherit;line-height:inherit}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`
    expectedCssOutput = normalizeCss(preset + expectedCssOutput)
    $vs.config.preset = true
    $vs.reset()
    $vs.add($vs.extract(html))
    cssOutput = normalizeCss($vs.styles)
    expect(cssOutput).toBe(expectedCssOutput)
})