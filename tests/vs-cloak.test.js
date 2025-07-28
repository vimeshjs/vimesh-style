/**
 * @jest-environment jsdom
 */

const { setupTestEnvironment, createTestElement } = require('./utils');

describe('vs-cloak functionality', () => {
    let $vs
    
    // Helper function to wait for styles
    const waitForStyles = () => {
        return new Promise(resolve => {
            if ($vs && $vs.styles) {
                resolve()
            } else {
                setTimeout(() => resolve(), 10)
            }
        })
    }
    
    beforeEach(() => {
        $vs = setupTestEnvironment();
    })
    
    test('should remove vs-cloak attribute when styles are generated', async () => {
        // Add elements with vs-cloak
        document.body.innerHTML = `
            <div vs-cloak class="text-red-500" id="elem1">Test 1</div>
            <div vs-cloak class="bg-blue-500" id="elem2">Test 2</div>
            <div class="text-green-500" id="elem3">Test 3</div>
        `
        
        // Elements should have vs-cloak attribute initially
        expect(document.getElementById('elem1').hasAttribute('vs-cloak')).toBe(true)
        expect(document.getElementById('elem2').hasAttribute('vs-cloak')).toBe(true)
        expect(document.getElementById('elem3').hasAttribute('vs-cloak')).toBe(false)
        
        // Trigger style generation
        $vs.add(['text-red-500'])
        
        // Wait for styles to be generated (updateAutoStyles might be async)
        await waitForStyles()
        
        // vs-cloak should be removed from all elements
        expect(document.getElementById('elem1').hasAttribute('vs-cloak')).toBe(false)
        expect(document.getElementById('elem2').hasAttribute('vs-cloak')).toBe(false)
        expect(document.getElementById('elem3').hasAttribute('vs-cloak')).toBe(false)
    })
    
    test('should only remove vs-cloak once on first style generation', () => {
        document.body.innerHTML = `
            <div vs-cloak class="text-red-500" id="elem1">Test 1</div>
        `
        
        // First style generation should remove vs-cloak
        $vs.add(['text-red-500'])
        expect(document.getElementById('elem1').hasAttribute('vs-cloak')).toBe(false)
        
        // Add another element with vs-cloak after first generation
        const newElem = createTestElement('text-blue-500')
        newElem.setAttribute('vs-cloak', '')
        newElem.id = 'elem2'
        
        // Subsequent style generations should not remove vs-cloak
        $vs.add(['text-blue-500'])
        expect(document.getElementById('elem2').hasAttribute('vs-cloak')).toBe(true)
    })
    
    test('should handle elements with vs-cloak in nested structures', () => {
        document.body.innerHTML = `
            <div vs-cloak id="parent">
                <div vs-cloak id="child1">Child 1</div>
                <div id="child2">
                    <span vs-cloak id="grandchild">Grandchild</span>
                </div>
            </div>
        `
        
        // All elements with vs-cloak should have the attribute
        expect(document.getElementById('parent').hasAttribute('vs-cloak')).toBe(true)
        expect(document.getElementById('child1').hasAttribute('vs-cloak')).toBe(true)
        expect(document.getElementById('grandchild').hasAttribute('vs-cloak')).toBe(true)
        
        // Generate styles
        $vs.add(['text-black'])
        
        // All vs-cloak attributes should be removed
        expect(document.getElementById('parent').hasAttribute('vs-cloak')).toBe(false)
        expect(document.getElementById('child1').hasAttribute('vs-cloak')).toBe(false)
        expect(document.getElementById('grandchild').hasAttribute('vs-cloak')).toBe(false)
    })
})