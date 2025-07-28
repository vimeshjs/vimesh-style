/**
 * @jest-environment jsdom
 */

const { setupTestEnvironment, createTestElement } = require('./utils');

describe('Core.js functionality', () => {
  let $vs;

  beforeEach(() => {
    $vs = setupTestEnvironment();
  });

  describe('register() function', () => {
    describe('Basic string registration', () => {
      test('should register simple utility class with CSS string', () => {
        $vs.register('test-red', 'color: red;');
        
        // Create element and test
        createTestElement('test-red');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.test-red');
        expect(styles).toContain('color: red');
      });

      test('should register multiple CSS properties', () => {
        $vs.register('card', 'display: block; padding: 1rem; border: 1px solid #ccc;');
        
        createTestElement('card');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('display: block');
        expect(styles).toContain('padding: 1rem');
        expect(styles).toContain('border: 1px solid #ccc');
      });

      test('should handle pseudo-class registration', () => {
        // Register base class and pseudo variant separately
        $vs.register('text-blue', 'color: blue;');
        $vs.register('hover:text-blue', 'color: darkblue;');
        
        createTestElement('hover:text-blue');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.hover\\:text-blue:hover');
        expect(styles).toContain('color: darkblue');
      });

      test('should handle responsive breakpoint registration', () => {
        // Register with proper media query handling
        $vs.register('md:flex', 'display: flex;');
        
        createTestElement('md:flex');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('@media (min-width: 768px)');
        expect(styles).toContain('.md\\:flex');
        expect(styles).toContain('display: flex');
      });
    });

    describe('Function-based registration with wildcards', () => {
      test('should register pattern with wildcard', () => {
        // Register pattern - the function receives classDetails object
        $vs.register('mx-', (classDetails) => {
          // Extract the value after 'mx-'
          const value = classDetails.name.substring(3);
          return `margin-left: ${value}; margin-right: ${value};`;
        });
        
        createTestElement('mx-4');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.mx-4');
        expect(styles).toContain('margin-left: 1rem');
        expect(styles).toContain('margin-right: 1rem');
      });

      test('should handle complex pattern matching', () => {
        $vs.register('text-', (classDetails) => {
          // Parse text-color-shade pattern
          const parts = classDetails.name.substring(5).split('-');
          if (parts.length === 2) {
            return `color: ${parts[0]}-${parts[1]};`;
          }
          return null;
        });
        
        createTestElement('text-blue-500');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('color: blue-500');
      });

      test('should pass classDetails to resolver', () => {
        let capturedDetails;
        $vs.register('test-', (classDetails) => {
          capturedDetails = classDetails;
          return 'content: "";';
        });
        
        createTestElement('hover:test-value');
        
        $vs.resolveAll(document.body);
        
        expect(capturedDetails).toBeDefined();
        expect(capturedDetails.name).toBe('test-value');
        expect(capturedDetails.pseudo).toBe('hover');
      });

      test('should handle arbitrary value patterns', () => {
        // Use the built-in arbitrary value syntax
        $vs.register('[', (classDetails) => {
          // Extract arbitrary value using the helper function
          const value = $vs._.extractArbitraryValue(classDetails.name);
          return `${value};`;
        });
        
        createTestElement('[color:red]');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.\\[color\\:red\\]');
        expect(styles).toContain('color:red');
      });

      test('should handle pattern with responsive variants', () => {
        $vs.register('p-', (classDetails) => {
          const value = classDetails.name.substring(2);
          return `padding: ${value}rem;`;
        });
        
        createTestElement('md:p-4');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('@media (min-width: 768px)');
        expect(styles).toContain('.md\\:p-4');
        expect(styles).toContain('padding: 1rem');
      });
    });

    describe('Object-based registration', () => {
      test('should register component with object syntax', () => {
        $vs.register({
          '.btn': {
            'display': 'inline-block',
            'padding': '0.5rem 1rem',
            'cursor': 'pointer'
          }
        });
        
        // Create element to trigger CSS generation
        createTestElement('btn', 'button');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.btn');
        expect(styles).toContain('display:inline-block');
        expect(styles).toContain('padding:0.5rem 1rem');
        expect(styles).toContain('cursor:pointer');
      });

      test('should handle nested selectors', () => {
        $vs.register({
          '.card': {
            'display': 'block'
          },
          '.card figure': {
            'margin': '0'
          },
          '.card figure img': {
            'width': '100%'
          }
        });
        
        // Create nested elements to trigger CSS generation
        const card = document.createElement('div');
        card.className = 'card';
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        figure.appendChild(img);
        card.appendChild(figure);
        document.body.appendChild(card);
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.card');
        expect(styles).toContain('.card figure');
        expect(styles).toContain('.card figure img');
      });

      test('should process @apply directive', () => {
        // First register some utilities
        $vs.register('flex', 'display: flex;');
        $vs.register('items-center', 'align-items: center;');
        $vs.register('p-4', 'padding: 1rem;');
        
        // Then register component with @apply
        $vs.register({
          '.alert': {
            '@apply': 'flex items-center p-4'
          }
        });
        
        // Create element to trigger CSS generation
        createTestElement('alert');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.alert');
        // The @apply should expand to actual CSS properties
        expect(styles).toContain('display:flex');
        expect(styles).toContain('align-items:center');
        expect(styles).toContain('padding:1rem');
      });

      test('should mix @apply with regular CSS properties', () => {
        $vs.register('rounded', 'border-radius: 0.25rem;');
        
        $vs.register({
          '.badge': {
            '@apply': 'rounded',
            'background-color': 'gray',
            'color': 'white'
          }
        });
        
        // Create element to trigger CSS generation
        createTestElement('badge', 'span');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.badge');
        expect(styles).toContain('border-radius:0.25rem');
        expect(styles).toContain('background-color:gray');
        expect(styles).toContain('color:white');
      });

      test('should handle pseudo-classes in object syntax', () => {
        $vs.register({
          '.btn:hover': {
            'opacity': '0.8'
          },
          '.btn:focus': {
            'outline': '2px solid blue'
          }
        });
        
        // Create element to trigger CSS generation
        createTestElement('btn', 'button');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.btn:focus');
        expect(styles).toContain('outline:2px solid blue');
      });

      test('should handle pseudo-elements', () => {
        $vs.register({
          '.divider::before': {
            'content': '""',
            'display': 'block'
          },
          '.divider::after': {
            'content': '""',
            'display': 'block'
          }
        });
        
        // Create element to trigger CSS generation
        createTestElement('divider');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles;
        expect(styles).toContain('.divider::after');
        expect(styles).toContain('content:""');
      });
    });

    describe('Dependency registration', () => {
      test('should automatically register pseudo-class dependencies', () => {
        // When using object syntax, all selectors are registered together as macro CSS
        $vs.register({
          '.btn': 'display: inline-block;',
          '.btn:hover': 'opacity: 0.8;',
          '.btn:focus': 'outline: 2px solid;'
        });
        
        // Create element to trigger CSS generation
        createTestElement('btn', 'button');
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles || '';
        expect(styles).toContain('.btn:focus');
        expect(styles).toContain('outline: 2px solid');
      });

      test('should automatically register pseudo-element dependencies', () => {
        // When using object syntax, all selectors are registered together as macro CSS
        $vs.register({
          '.tooltip': 'position: relative;',
          '.tooltip::before': 'content: attr(data-tip);',
          '.tooltip::after': 'content: "";'
        });
        
        // Create element to trigger CSS generation
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.setAttribute('data-tip', 'Test tooltip');
        document.body.appendChild(tooltip);
        $vs.resolveAll(document.body);
        
        const styles = $vs.styles || '';
        expect(styles).toContain('.tooltip::after');
        expect(styles).toContain('content: ""');
      });

      test('should handle child selector dependencies in object syntax', () => {
        $vs.register({
          '.menu': {
            'display': 'flex'
          },
          '.menu li': {
            'list-style': 'none'
          },
          '.menu li a': {
            'text-decoration': 'none'
          }
        });
        
        // Create menu structure
        const menu = document.createElement('ul');
        menu.className = 'menu';
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.appendChild(a);
        menu.appendChild(li);
        document.body.appendChild(menu);
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.menu');
        expect(styles).toContain('.menu li');
        expect(styles).toContain('.menu li a');
      });

      test('should register dependencies automatically when registered together', () => {
        // Register card components together - dependencies are created automatically
        $vs.register({
          '.card': 'display: block;',
          '.card-header': 'padding: 1rem;',
          '.card-body': 'padding: 1.5rem;'
        });
        
        // Create card structure with all dependent elements
        const card = document.createElement('div');
        card.className = 'card';
        
        const header = document.createElement('div');
        header.className = 'card-header';
        card.appendChild(header);
        
        const body = document.createElement('div');
        body.className = 'card-body';
        card.appendChild(body);
        
        document.body.appendChild(card);
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.card');
        expect(styles).toContain('.card-header');
        expect(styles).toContain('.card-body');
      });
    });

    describe('Multiple registrations', () => {
      test('should allow multiple registrations for same pattern', () => {
        $vs.register('text-', (classDetails) => {
          const value = classDetails.name.substring(5);
          if (value === 'primary') return 'color: blue;';
          return null;
        });
        
        $vs.register('text-', (classDetails) => {
          const value = classDetails.name.substring(5);
          if (value === 'lg') return 'font-size: 1.125rem;';
          return null;
        });
        
        createTestElement('text-primary');
        createTestElement('text-lg');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('color: blue');
        expect(styles).toContain('font-size: 1.125rem');
      });

      test('should handle overlapping patterns with more specific pattern first', () => {
        // Register more specific pattern first (they are unshifted, so processed in reverse order)
        $vs.register('bg-red-', (classDetails) => {
          const shade = classDetails.name.substring(7);
          return `background-color: rgb(255, ${shade}, ${shade});`;
        });
        
        $vs.register('bg-', (classDetails) => {
          const color = classDetails.name.substring(3);
          if (!color.startsWith('red-')) {
            return `background-color: ${color};`;
          }
          return null;
        });
        
        createTestElement('bg-blue');
        createTestElement('bg-red-100');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('background-color: blue');
        expect(styles).toContain('background-color: rgb(255, 100, 100)');
      });
    });

    describe('Edge cases', () => {
      test('should handle empty CSS string', () => {
        $vs.register('empty', '');
        
        // Also register a non-empty class to ensure style element exists
        $vs.register('test', 'color: red;');
        
        createTestElement('empty');
        createTestElement('test');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        // Empty CSS should still generate the selector
        expect(styles).toContain('.empty{');
        expect(styles).toContain('.test{');
      });

      test('should handle special characters in class names', () => {
        $vs.register('w-1/2', 'width: 50%;');
        
        createTestElement('w-1/2');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.w-1\\/2');
        expect(styles).toContain('width: 50%');
      });

      test('should handle negative values', () => {
        $vs.register('-m-', (classDetails) => {
          const value = classDetails.name.substring(3);
          return `margin: -${value}rem;`;
        });
        
        createTestElement('-m-4');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.-m-4');
        expect(styles).toContain('margin: -1rem');
      });

      test('should not generate styles for unregistered classes', () => {
        createTestElement('unregistered-class');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).not.toContain('.unregistered-class');
      });

      test('should handle whitespace in CSS', () => {
        $vs.register('spaced', '  display:  flex  ;  ');
        
        createTestElement('spaced');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('display:  flex');
      });
    });

    describe('CSS generation format', () => {
      test('should generate valid CSS format', () => {
        $vs.register('flex', 'display: flex;');
        
        createTestElement('flex');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toMatch(/\.flex\s*\{[^}]+\}/);
      });

      test('should escape special characters in selectors', () => {
        $vs.register('hover:bg-blue', 'background-color: blue;');
        
        createTestElement('hover:bg-blue');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toContain('.hover\\:bg-blue:hover');
      });

      test('should handle media queries correctly', () => {
        $vs.register('sm:hidden', 'display: none;');
        
        createTestElement('sm:hidden');
        
        $vs.resolveAll(document.body);
        
        const styles = document.querySelector('style')?.textContent || '';
        expect(styles).toMatch(/@media.*\{[^}]*\.sm\\:hidden[^}]*\}/);
      });
    });
  });

  describe('Configuration', () => {
    test('should allow config extension', () => {
      $vs.config.customValue = 'test';
      expect($vs.config.customValue).toBe('test');
    });

    test('should support theme configuration', () => {
      if (!$vs.config.theme) $vs.config.theme = {};
      $vs.config.theme.spacing = {
        '1': '0.25rem',
        '2': '0.5rem'
      };
      
      expect($vs.config.theme.spacing['1']).toBe('0.25rem');
    });

    test('should respect breakpoint configuration', () => {
      // Test default breakpoints
      expect($vs.config.breakpoints.sm).toBe(640);
      expect($vs.config.breakpoints.md).toBe(768);
      expect($vs.config.breakpoints.lg).toBe(1024);
      
      // Test custom breakpoint
      $vs.config.breakpoints.custom = 1400;
      
      $vs.register('custom:flex', 'display: flex;');
      
      createTestElement('custom:flex');
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('@media (min-width: 1400px)');
    });
  });

  describe('SSR support', () => {
    test('should generate styles string for SSR', () => {
      // Register components
      $vs.register({
        '.card': {
          'display': 'block',
          'padding': '1rem'
        },
        '.card-header': {
          'font-weight': 'bold'
        }
      });
      
      // Create elements to trigger CSS generation
      const card = document.createElement('div');
      card.className = 'card';
      const header = document.createElement('div');
      header.className = 'card-header';
      card.appendChild(header);
      document.body.appendChild(card);
      $vs.resolveAll(document.body);
      
      // Check macro CSS was generated
      const styles = $vs.styles || '';
      expect(styles).toContain('.card');
      expect(styles).toContain('display:block');
      expect(styles).toContain('.card-header');
      expect(styles).toContain('font-weight:bold');
    });
  });

  describe('Advanced features', () => {
    test('should support dark mode variants', () => {
      $vs.register('dark:bg-gray-900', 'background-color: #111827;');
      
      createTestElement('dark:bg-gray-900');
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('.dark .dark\\:bg-gray-900');
      expect(styles).toContain('background-color: #111827');
    });

    test('should support group modifiers', () => {
      $vs.register('group', '');
      $vs.register('group-hover:visible', 'visibility: visible;');
      
      const group = document.createElement('div');
      group.className = 'group';
      const child = document.createElement('div');
      child.className = 'group-hover:visible';
      group.appendChild(child);
      document.body.appendChild(group);
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('.group:hover .group-hover\\:visible');
    });

    test('should support peer modifiers', () => {
      $vs.register('peer', '');
      $vs.register('peer-checked:bg-blue-500', 'background-color: #3b82f6;');
      
      const container = document.createElement('div');
      const peer = document.createElement('input');
      peer.type = 'checkbox';
      peer.className = 'peer';
      const sibling = document.createElement('div');
      sibling.className = 'peer-checked:bg-blue-500';
      
      container.appendChild(peer);
      container.appendChild(sibling);
      document.body.appendChild(container);
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('.peer:checked ~ .peer-checked\\:bg-blue-500');
    });
  });

  describe('Integration tests', () => {
    test('should handle complex component with multiple features', () => {
      // Register utilities
      $vs.register('flex', 'display: flex;');
      $vs.register('items-center', 'align-items: center;');
      $vs.register('p-', (classDetails) => `padding: ${classDetails.name.substring(2)}rem;`);
      $vs.register('bg-', (classDetails) => `background-color: ${classDetails.name.substring(3)};`);
      $vs.register('rounded', 'border-radius: 0.25rem;');
      $vs.register('shadow', 'box-shadow: 0 1px 3px rgba(0,0,0,0.1);');
      
      // Register component
      $vs.register({
        '.btn': {
          '@apply': 'flex items-center rounded shadow',
          'cursor': 'pointer'
        },
        '.btn:hover': {
          'opacity': '0.8'
        }
      });
      
      // Create button
      createTestElement('btn p-4 bg-blue', 'button');
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('.btn:hover');
      expect(styles).toContain('opacity:0.8');
      expect(styles).toContain('.p-4');
      expect(styles).toContain('padding: 1rem');
      expect(styles).toContain('.bg-blue');
      expect(styles).toContain('background-color: blue');
    });

    test('should handle responsive design with breakpoints', () => {
      $vs.register('flex', 'display: flex;');
      $vs.register('block', 'display: block;');
      $vs.register('md:flex', 'display: flex;');
      $vs.register('lg:grid', 'display: grid;');
      
      createTestElement('block md:flex lg:grid');
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('.block');
      expect(styles).toContain('@media (min-width: 768px)');
      expect(styles).toContain('.md\\:flex');
      expect(styles).toContain('@media (min-width: 1024px)');
      expect(styles).toContain('.lg\\:grid');
    });

    test('should handle theme values', () => {
      // Setup theme
      $vs.config.theme = {
        colors: {
          primary: '#3b82f6',
          secondary: '#10b981'
        }
      };
      
      // Register color utilities that use theme
      $vs.register('text-', (classDetails) => {
        const colorName = classDetails.name.substring(5);
        const themeColor = $vs.config.theme?.colors?.[colorName];
        if (themeColor) {
          return `color: ${themeColor};`;
        }
        return null;
      });
      
      createTestElement('text-primary');
      
      $vs.resolveAll(document.body);
      
      const styles = document.querySelector('style')?.textContent || '';
      expect(styles).toContain('color: #3b82f6');
    });
  });
});