const { screen } = require('@testing-library/dom')
const { setupTestEnvironment,sleep } = require('./utils');

test('resolve dynamic generated classes', async () => {
    const $vs = setupTestEnvironment();
    document.body.innerHTML = `<div id="container" class="m-4 shadow-sm bg-purple-100 rounded"></div>`
    let index = 0
    let timer = setInterval(() => {
        let elDiv = document.createElement('div')
        if (index > 0) {
            let elPrev = document.querySelector(`[data-testid=ID${index}]`)
            elPrev.setAttribute('class', `text-red-${(index - 1) % 9 + 1}00`)
        }
        elDiv.setAttribute('data-testid', `ID${index + 1}`)
        elDiv.setAttribute('class', `text-green-${index % 9 + 1}00`)
        elDiv.innerHTML = `<span class="bg-yellow-${(9 - index % 9)}00"> This is ID-${index + 1}</span>`
        document.getElementById('container').append(elDiv)
        index++
        if (index >= 3) clearInterval(timer)  // Only need 3 elements for testing
    }, 50)  // Reduced from 500ms to 50ms
    await sleep(200)  // Increased to 200ms to ensure DOM updates
    const vimeshStyle = document.querySelector('#vimesh-styles')
    const el01 = document.querySelector('[data-testid="ID1"]')
    let cls01 = el01.getAttribute('class')
    expect(cls01).toBe('text-red-100')  // Updated after 3 iterations
    let generatedCss = vimeshStyle.innerHTML
    expect(generatedCss.indexOf(cls01) != -1).toBeTruthy()
    await sleep(200)  // Increased to 200ms to ensure DOM updates
    const el02 = document.querySelector('[data-testid="ID2"]')
    let cls02 = el02.getAttribute('class')
    cls01 = el01.getAttribute('class')
    expect(cls01).toBe('text-red-100')
    expect(cls02).toBe('text-red-200')
    generatedCss = vimeshStyle.innerHTML
    expect(generatedCss.indexOf(cls01) != -1 && generatedCss.indexOf(cls02) != -1).toBeTruthy()
})

