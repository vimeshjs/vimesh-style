/**
 * @jest-environment jsdom
 */

const { setupTestEnvironment, createTestElement } = require('./utils');

describe('@apply with Media Queries', () => {
    let $vs;
    
    beforeEach(() => {
        $vs = setupTestEnvironment();
    });
    
    test('should handle @apply inside media queries correctly', () => {
        // console.log('Testing @apply inside media queries...');
        
        // Register required utility classes for the test
        $vs.register('text-start', 'text-align: start;');
        
        // Register a component with @apply inside media query
        $vs.register({
            '.responsive-footer': {
                '@apply': 'flex-col items-center',
                // Responsive behavior with @apply
                '@media (min-width: 640px)': {
                    '@apply': 'grid-flow-col justify-items-start text-start',
                    'grid-template-columns': 'auto minmax(auto,1fr)'
                }
            }
        });
        
        const element = createTestElement('responsive-footer');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        // console.log('Generated CSS:');
        // console.log(styles);
        
        // Check base styles (should contain the @apply expansion)
        expect(styles).toContain('.responsive-footer');
        expect(styles).toContain('flex-direction:column');
        expect(styles).toContain('align-items:center');
        
        // Check media query
        expect(styles).toContain('@media (min-width: 640px)');
        
        // Check that @apply inside media query is properly expanded
        const mediaQuerySection = styles.match(/@media \(min-width: 640px\)[^}]*\{[^}]*\}/g);
        // console.log('Media query section:', mediaQuerySection);
        
        if (mediaQuerySection && mediaQuerySection.length > 0) {
            const mediaContent = mediaQuerySection.join(' ');
            // console.log('Media query content:', mediaContent);
            
            // Check if the @apply directives inside media query are expanded
            expect(mediaContent).toContain('grid-auto-flow:column');
            expect(mediaContent).toContain('justify-items:start');
            expect(mediaContent).toContain('text-align:start');
            expect(mediaContent).toContain('grid-template-columns:auto minmax(auto,1fr)'); 
        } else {
            // console.error('No media query section found in styles');
            throw new Error('Media query section not found');
        }
    });
    
    test('should handle multiple @apply directives in different media queries', () => {
        // console.log('Testing multiple @apply in different media queries...');
        
        // Register required utility classes
        $vs.register('gap-4', 'gap: 1rem;');
        $vs.register('grid-cols-3', 'grid-template-columns: repeat(3, minmax(0, 1fr));');
        
        $vs.register({
            '.multi-responsive': {
                '@apply': 'block p-2',
                '@media (min-width: 768px)': {
                    '@apply': 'flex items-center justify-between'
                },
                '@media (min-width: 1024px)': {
                    '@apply': 'grid grid-cols-3 gap-4'
                }
            }
        });
        
        const element = createTestElement('multi-responsive');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        // console.log('Generated CSS for multi-responsive:');
        // console.log(styles);
        
        // Base styles
        expect(styles).toContain('display:block');
        expect(styles).toContain('padding:0.5rem');
        
        // md breakpoint (768px)
        expect(styles).toContain('@media (min-width: 768px)');
        const mdMedia = styles.match(/@media \(min-width: 768px\)[^}]*\}[^}]*\}/g);
        if (mdMedia) {
            expect(mdMedia[0]).toContain('display:flex');
            expect(mdMedia[0]).toContain('align-items:center');
            expect(mdMedia[0]).toContain('justify-content:space-between');
        }
        
        // lg breakpoint (1024px)  
        expect(styles).toContain('@media (min-width: 1024px)');
        const lgMedia = styles.match(/@media \(min-width: 1024px\)[^}]*\}[^}]*\}/g);
        if (lgMedia) {
            expect(lgMedia[0]).toContain('display:grid');
            expect(lgMedia[0]).toContain('grid-template-columns:repeat(3, minmax(0, 1fr))');
            expect(lgMedia[0]).toContain('gap:1rem');
        }
    });
    
    test('should handle mixed CSS properties and @apply in media queries', () => {
        // console.log('Testing mixed CSS and @apply in media queries...');
        
        $vs.register({
            '.mixed-responsive': {
                '@apply': 'text-sm',
                'background-color': 'white',
                '@media (min-width: 640px)': {
                    '@apply': 'text-base flex',
                    'padding': '1rem',
                    'border': '1px solid #ccc'
                }
            }
        });
        
        const element = createTestElement('mixed-responsive');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        // console.log('Generated CSS for mixed-responsive:');
        // console.log(styles);
        
        // Base styles
        expect(styles).toContain('font-size:0.875rem'); // text-sm
        expect(styles).toContain('background-color:white');
        
        // Media query with mixed content
        const mediaSection = styles.match(/@media \(min-width: 640px\)[^}]*\{[^}]*\}/g);
        if (mediaSection) {
            const content = mediaSection[0];
            expect(content).toContain('font-size:1rem'); // text-base
            expect(content).toContain('display:flex');
            expect(content).toContain('padding:1rem');
            expect(content).toContain('border:1px solid #ccc');
        }
    });
});