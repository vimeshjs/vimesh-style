# Vimesh Style

> 🎨 Runtime Tailwind CSS Alternative - No Build Process Required

A lightweight JavaScript library that brings the power of Tailwind CSS to any HTML page with just one script tag. Generate CSS styles dynamically at runtime without any build process, bundlers, or CSS files.

[![npm version](https://badge.fury.io/js/%40vimesh%2Fstyle.svg)](https://www.npmjs.com/package/@vimesh/style)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚡ Quick Start

Add one line to any HTML page and start using Tailwind CSS classes immediately:

```html
<script src="https://unpkg.com/@vimesh/style"></script>
```

That's it! Now you can use Tailwind CSS classes anywhere in your HTML:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  <h1 class="text-2xl font-bold mb-2">Hello Vimesh Style!</h1>
  <p class="opacity-90">Dynamic CSS generation without build tools</p>
</div>
```

### 💡 Preventing Flash of Unstyled Content (FOUC)

To prevent unstyled content from appearing while Vimesh Style loads, add this to your `<head>`:

```html
<style>
  [vs-cloak] { display: none !important; }
</style>
```

Then use `vs-cloak` on elements that should remain hidden until styles are ready:

```html
<div vs-cloak class="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
  <!-- This content won't flash unstyled -->
</div>
```

The `vs-cloak` attribute is automatically removed once Vimesh Style generates its first styles.

## 🌟 Features

### ✨ Zero Build Process
- No webpack, Vite, or any bundler required
- No CSS compilation step
- Just include the script and start coding

### 🎯 Tailwind CSS Compatible
- Use familiar Tailwind classes: `bg-blue-500`, `text-center`, `flex`, `grid`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Pseudo-classes: `hover:`, `focus:`, `active:`, `dark:`
- State variants: `group-hover:`, `peer-focus:`

### 🎨 Complete Color System
- Full Tailwind color palette with 10 shades each
- Arbitrary color values: `bg-[#ff0000]`, `text-[rgb(255,0,0)]`
- Opacity modifiers: `bg-blue-500/50`, `text-red-600/75`
- **Auto-generate complete palettes**: Provide a single hex color, get 10 shades automatically
- **Color aliases**: Map custom names to existing colors (`danger: "red"`)
- Dynamic brand colors: `primary-50`, `primary-500`, `primary-900`
- **Advanced color manipulation**: Mix, darken, lighten colors programmatically

### 📱 Responsive Design
```html
<div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
  Responsive width
</div>
```

### 🌙 Dark Mode Support
```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Auto dark mode
</div>
```

### 🚫 Prevent FOUC (Flash of Unstyled Content)
Use `vs-cloak` to hide elements until Vimesh Style is ready:

```html
<style>
  /* Add this to your page's <head> */
  [vs-cloak] { display: none !important; }
</style>

<!-- Elements with vs-cloak will be hidden until styles load -->
<div vs-cloak class="bg-blue-500 text-white p-4">
  This content won't flash unstyled
</div>

<!-- The vs-cloak attribute is automatically removed once styles are generated -->
```

### 🔧 Attributify Mode
Enable attributify mode to use utility classes as attributes for cleaner HTML:

```javascript
// Enable attributify mode
$vs.reset({
  attributify: 'all'  // 'all', 'none', 'prefix'
});
```

```html
<!-- Clean attribute syntax -->
<div p="x-4 y-2" flex="~ items-center" bg="blue-500" text="white center">
  Clean attribute syntax
</div>

<!-- With prefix mode -->
<div vs:p="x-4 y-2" vs:flex="~ items-center" vs:bg="blue-500" vs:text="white center">
  Prefixed attributes
</div>
```

## 📖 Advanced Usage

### Handling FOUC with vs-cloak

The `vs-cloak` attribute provides a robust solution for preventing Flash of Unstyled Content (FOUC), especially important for:
- Single Page Applications (SPAs)
- Dynamically loaded content
- Server-side rendered pages with client-side enhancements

**Best Practices:**

1. **Always include the vs-cloak CSS rule in a `<style>` tag** in your document's `<head>`:
```html
<style>
  /* Critical: Must be inline in <head> to work immediately */
  [vs-cloak] { display: none !important; }
</style>
```

2. **Use vs-cloak on containers with complex styling**:
```html
<!-- Entire sections -->
<section vs-cloak class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
  <!-- Content -->
</section>

<!-- Dynamic components -->
<div vs-cloak class="carousel w-full h-64 rounded-lg shadow-xl">
  <!-- Carousel items -->
</div>
```

3. **For SSR applications**, vs-cloak ensures smooth transitions:
```html
<!-- Server renders with vs-cloak, client removes it after hydration -->
<div vs-cloak class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <!-- No flash between server and client rendering -->
</div>
```

### Dynamic Configuration
```javascript
// Customize breakpoints - must use reset() to merge with defaults
$vs.reset({
  breakpoints: {
    tablet: 768,
    desktop: 1024
  }
});

// Add custom colors - merges with existing color palette
$vs.reset({
  colors: {
    brand: ['#f0f9ff', '#e0f2fe', /* ... */]
  }
});

// Custom animations - extends default animations
$vs.reset({
  animation: {
    'spin-slow': 'spin 3s linear infinite'
  }
});
```

### Configuration Reset
Reset and reconfigure the style system:

```javascript
// Reset with new configuration
$vs.reset({
  debug: true,
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1200
  },
  colors: {
    primary: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8']
  }
});

// Auto-generate complete color palette from single hex color
$vs.reset({
  aliasColors: {
    primary: "#3b82f6",   // Generates 10-shade palette automatically
    brand: "#10b981",     // Creates brand-50, brand-100, ..., brand-900
    accent: "#f59e0b",    // Full color system from one color
    danger: "red",        // Pure alias - danger-500 = red-500, danger-100 = red-100
    success: "green"      // Maps to existing Tailwind colors
  }
});

// Reset and regenerate all styles
$vs.ready(() => {
  $vs.reset({
    fontSizes: {
      xxl: ['48px', '52px']
    }
  }); // Merges with defaults and regenerates CSS
});
```

### Server-Side Rendering
```javascript
// Extract classes from HTML
const classes = $vs.extract(htmlString);

// Generate CSS
$vs.add(classes);
const css = $vs.styles;
```

### Advanced Color Manipulation
```javascript
// Parse any CSS color format
const color = $vs._.parseColor('#3b82f6'); // or 'rgb(59,130,246)', 'hsl(217,91%,60%)', etc.

// Mix two colors (like CSS color-mix)
const mixed = $vs._.colorMix('#3b82f6', '#ffffff', 75); // 75% blue, 25% white
const cssColor = $vs._.colorToString(mixed); // Returns: "#9fc6fa"

// Darken/lighten colors
const darker = $vs._.darken('#3b82f6', 20);   // 20% darker
const lighter = $vs._.lighten('#3b82f6', 20); // 20% lighter

// Adjust HSL properties
const moreVivid = $vs._.adjustSaturation('#3b82f6', 20);  // +20% saturation
const dimmer = $vs._.adjustLightness('#3b82f6', -10);     // -10% lightness

// Works with CSS variables too
const primary = $vs._.parseColor('var(--primary)');
const primaryDark = $vs._.darken(primary, 15);
```

## 🎯 Advanced @apply Features

### @apply in Media Queries (🆕 Major Enhancement)

One of Vimesh Style's most powerful features is the ability to use `@apply` directives inside media queries, enabling you to create responsive components with utility class composition:

```javascript
// Create a responsive navigation component
$vs.register({
  '.nav': {
    '@apply': 'flex flex-col bg-white shadow-sm p-4',
    '@media (min-width: 768px)': {
      '@apply': 'flex-row items-center justify-between px-8'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'px-12 shadow-md'
    }
  },
  
  '.nav-brand': {
    '@apply': 'text-xl font-bold text-center mb-4',
    '@media (min-width: 768px)': {
      '@apply': 'mb-0 text-left'
    }
  },
  
  '.nav-links': {
    '@apply': 'flex flex-col space-y-2',
    '@media (min-width: 768px)': {
      '@apply': 'flex-row space-y-0 space-x-6'
    }
  }
});
```

### Real-World Component Examples

#### Responsive Card Layout
```javascript
$vs.register({
  '.product-card': {
    '@apply': 'bg-white rounded-lg shadow-sm overflow-hidden',
    'transition': 'all 0.3s ease',
    '@media (min-width: 640px)': {
      '@apply': 'flex shadow-md',
      'max-height': '200px'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'hover:shadow-lg hover:-translate-y-1'
    }
  },
  
  '.product-image': {
    '@apply': 'w-full h-48 object-cover',
    '@media (min-width: 640px)': {
      '@apply': 'w-48 h-full'
    }
  },
  
  '.product-content': {
    '@apply': 'p-4',
    '@media (min-width: 640px)': {
      '@apply': 'flex-1 p-6'
    }
  }
});
```

#### Dashboard Grid System
```javascript
$vs.register({
  '.dashboard': {
    '@apply': 'p-4 space-y-4',
    '@media (min-width: 768px)': {
      '@apply': 'grid grid-cols-2 gap-6 p-6 space-y-0'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'grid-cols-3 gap-8 p-8'
    },
    '@media (min-width: 1536px)': {
      '@apply': 'grid-cols-4'
    }
  },
  
  '.dashboard-widget': {
    '@apply': 'bg-white rounded-lg p-6 shadow-sm border',
    '@media (min-width: 768px)': {
      '@apply': 'hover:shadow-md',
      'transition': 'box-shadow 0.2s ease'
    }
  }
});
```

### Benefits of @apply in Media Queries

1. **Utility Composition**: Combine multiple utilities at different breakpoints
2. **Maintainable Code**: Keep responsive logic with component definitions
3. **No Build Process**: All processing happens at runtime
4. **Theme Integration**: Works seamlessly with CSS variables and color systems
5. **Performance**: Generates optimized CSS with proper media query consolidation

### Enhanced Custom Style Registration (Register API)

The `register` function is the core API for adding custom utility classes and component styles to Vimesh Style. **Recently enhanced** with powerful new features including **@apply directive support inside media queries** and advanced object-based registration patterns.

#### 1. Simple Class-to-Style Mapping
Register a single utility class with a CSS string:
```javascript
const R = $vs.register;

// Simple utility classes
R('container', 'width: 100%; max-width: 1200px; margin: 0 auto;');
R('btn', 'padding: 0.5rem 1rem; border-radius: 0.25rem;');

// With responsive variants automatically available
// Use: container, sm:container, md:container, etc.
```

#### 2. Dynamic Style Generation with Functions
Use generator functions for dynamic value extraction:
```javascript
// Match arbitrary values in square brackets
R('p-[', (classDetails) => `padding: ${classDetails.arbitraryValue};`);
// Usage: p-[20px], p-[2em], p-[10%]

// Match patterns and extract values
R('grid-cols-', (classDetails) => {
  const cols = classDetails.name.split('-')[2];
  return `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;
});
// Usage: grid-cols-3, grid-cols-12

// Access configuration values
R('text-', (classDetails) => {
  const size = $vs.config.fontSizes[classDetails.suffix];
  if (!size) return null;
  return `font-size: ${size[0]}; line-height: ${size[1] || 1};`;
});
```

#### 3. Object-Based Registration with Advanced Features
Register multiple related styles at once with support for nested selectors, media queries, and @apply directives:

##### Basic Object Registration
```javascript
// Register multiple selectors with their styles
R({
  '.card': {
    '@apply': 'rounded-lg shadow-md p-6 bg-white'
  },
  '.card-header': {
    '@apply': 'text-xl font-bold mb-4'
  },
  '.card-body': {
    '@apply': 'text-gray-700'
  },
  '.card:hover': {
    'transform': 'translateY(-2px)',
    'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
});
```

##### @apply Inside Media Queries (🆕 NEW FEATURE)
```javascript
// Create responsive components with @apply in media queries
R({
  '.responsive-hero': {
    '@apply': 'flex flex-col items-center text-center p-8 bg-gradient-to-b from-blue-50 to-white',
    '@media (min-width: 640px)': {
      '@apply': 'flex-row text-left p-12 min-h-96',
      'background': 'linear-gradient(to right, #f0f9ff, #ffffff)'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'min-h-screen justify-center gap-16 p-16'
    }
  },
  '.hero-content': {
    '@apply': 'max-w-md space-y-4',
    '@media (min-width: 640px)': {
      '@apply': 'max-w-lg mr-8'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'max-w-2xl space-y-6'
    }
  }
});
```

This generates clean, responsive CSS:
```css
.responsive-hero { display:flex; flex-direction:column; align-items:center; text-align:center; padding:2rem; background:linear-gradient(to bottom, #f0f9ff, #ffffff); }
@media (min-width: 640px) { .responsive-hero { display:flex; flex-direction:row; text-align:left; padding:3rem; min-height:24rem; background:linear-gradient(to right, #f0f9ff, #ffffff); } }
@media (min-width: 1024px) { .responsive-hero { min-height:100vh; justify-content:center; gap:4rem; padding:4rem; } }
```

##### Mixed CSS Properties and @apply in Media Queries
```javascript
R({
  '.adaptive-card': {
    '@apply': 'bg-white rounded-lg shadow-sm p-4',
    'transition': 'all 0.3s ease',
    '@media (min-width: 768px)': {
      '@apply': 'flex items-center gap-6 p-6 shadow-md',
      'min-height': '200px'
    },
    '@media (min-width: 1024px)': {
      '@apply': 'p-8 shadow-lg',
      'border': '1px solid rgba(0,0,0,0.1)'
    }
  }
});
```

#### Advanced Features

1. **@apply Directive**: Use existing utility classes within custom styles
```javascript
R({
  '.btn-primary': {
    '@apply': 'bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded'
  }
});
```

2. **Automatic Dependency Resolution**: When registering compound selectors, Vimesh Style automatically tracks dependencies:
```javascript
R({
  '.tabs': { '@apply': 'flex border-b' },
  '.tabs .tab': { '@apply': 'px-4 py-2 cursor-pointer' },
  '.tabs .tab.active': { '@apply': 'border-b-2 border-blue-500' }
});
// When .tabs is used, all related styles are automatically included
```

3. **CSS Variables and Animations**:
```javascript
// Add CSS variables
$vs.addRootVars({
  'primary': '#3b82f6',
  'radius': '0.5rem'
});

// Define animations through configuration
$vs.reset({
  keyframes: {
    'slide-in': '{from{transform:translateX(-100%);}to{transform:translateX(0);}}'
  },
  animation: {
    'slide-in': 'slide-in 0.3s ease-out'
  }
});
// Then use with: animate-slide-in
```

### Creating Complete Components - DaisyUI Button Example

Here's how to create a fully-featured button component using the Register API, based on the DaisyUI implementation:

```javascript
// 1. Define CSS variables for theming
$vs.addRootVars({
  // Animation and sizing
  'rounded-btn': '0.5rem',
  'animation-btn': '0.25s',
  'btn-focus-scale': '0.95',
  'border-btn': '1px',
  
  // DaisyUI color system
  'p': '#570df8',     // primary
  'pc': '#ffffff',    // primary-content  
  's': '#f000b8',     // secondary
  'sc': '#ffffff',    // secondary-content
  'a': '#37cdbe',     // accent
  'ac': '#000000',    // accent-content
  'n': '#3d4451',     // neutral
  'nc': '#ffffff',    // neutral-content
  'b1': '#ffffff',    // base-100
  'b2': '#f2f2f2',    // base-200
  'b3': '#e5e6e6',    // base-300
  'bc': '#1f2937'     // base-content
});

// 2. Define button animation through configuration
$vs.reset({
  keyframes: {
    'button-pop': '{0%{transform:scale(var(--btn-focus-scale, 0.98));}40%{transform:scale(1.02);}100%{transform:scale(1);}}'  
  }
});

// 3. Register base button styles and all variants
const R = $vs.register;

R({
  // Base button
  '.btn': {
    '@apply': 'inline-flex shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center gap-2 font-semibold no-underline shadow-sm h-12 px-4 text-sm transition-all duration-200 ease-out',
    'color': 'var(--bc)',
    'outline-color': 'var(--bc)',
    'border-width': 'var(--border-btn, 1px)',
    'border-radius': 'var(--rounded-btn, 0.5rem)',
    'min-height': '3rem',
    'line-height': '1em',
    'animation': 'button-pop var(--animation-btn, 0.25s) ease-out',
    'background-color': 'var(--btn-color, var(--b2))',
    'border-color': 'var(--btn-color, var(--b2))'
  },
  
  // States
  '.btn:hover': {
    'border-color': 'var(--b3)',
    'background-color': 'var(--b3)'
  },
  '.btn:active:hover, .btn:active:focus': {
    'animation': 'button-pop 0s ease-out',
    'transform': 'scale(var(--btn-focus-scale, 0.97))'
  },
  '.btn:focus-visible': {
    '@apply': 'outline outline-2 outline-offset-2'
  },
  '.btn-disabled, .btn:disabled': {
    '@apply': 'pointer-events-none opacity-20'
  },
  
  // Sizes
  '.btn-lg': { '@apply': 'h-16 px-6 text-lg', 'min-height': '4rem' },
  '.btn-md': { '@apply': 'h-12 px-4 text-sm', 'min-height': '3rem' },
  '.btn-sm': { '@apply': 'h-8 px-3 text-sm', 'min-height': '2rem' },
  '.btn-xs': { '@apply': 'h-6 px-2 text-xs', 'min-height': '1.5rem' },
  
  // Shapes
  '.btn-square': { '@apply': 'h-12 w-12 p-0' },
  '.btn-circle': { '@apply': 'h-12 w-12 rounded-full p-0' },
  '.btn-wide': { '@apply': 'w-64' },
  '.btn-block': { '@apply': 'w-full' },
  
  // Color variants
  '.btn-primary': { 
    'color': 'var(--pc)',
    '--btn-color': 'var(--p)'
  },
  '.btn-secondary': { 
    'color': 'var(--sc)',
    '--btn-color': 'var(--s)'
  },
  '.btn-accent': { 
    'color': 'var(--ac)',
    '--btn-color': 'var(--a)'
  },
  '.btn-neutral': { 
    'color': 'var(--nc)',
    '--btn-color': 'var(--n)'
  },
  
  // Interactive variants
  '.btn-ghost': { 
    '@apply': 'border-transparent bg-transparent text-current shadow-none' 
  },
  '.btn-ghost:hover': { 
    '@apply': 'bg-base-content/20' 
  },
  
  '.btn-link': { 
    '@apply': 'text-primary border-transparent bg-transparent underline shadow-none' 
  },
  
  '.btn-outline': { 
    '@apply': 'text-base-content border-current bg-transparent shadow-none' 
  },
  '.btn-outline:hover': { 
    '@apply': 'border-base-content bg-base-content text-base-100' 
  },
  
  // Glass effect
  '.btn.glass': {
    '@apply': 'shadow-none',
    'background': 'rgba(255, 255, 255, 0.2)',
    'backdrop-filter': 'blur(10px)',
    'border': '1px solid rgba(255, 255, 255, 0.1)'
  },
  
  // Loading state
  '.btn.loading:before': {
    '@apply': 'mr-2 h-4 w-4 rounded-full border-2 animate-spin',
    'content': '""',
    'border-color': 'transparent',
    'border-top-color': 'currentColor',
    'border-left-color': 'currentColor'
  }
});

// 4. Generate hover states with color mixing
function generateButtonHoverStates() {
  const variants = ['primary', 'secondary', 'accent', 'neutral'];
  const states = {};
  
  // Check browser support for color-mix
  const supportsColorMix = CSS.supports('color', 'color-mix(in srgb, red 50%, blue)');
  
  variants.forEach(variant => {
    if (supportsColorMix) {
      // Modern browsers: use color-mix
      states[`.btn-${variant}:hover`] = {
        'background-color': `color-mix(in srgb, var(--${variant.charAt(0)}) 90%, black)`
      };
    } else {
      // Fallback: use filter
      states[`.btn-${variant}:hover`] = {
        'filter': 'brightness(0.9)'
      };
    }
  });
  
  return states;
}

// Register hover states
R(generateButtonHoverStates());
```

#### Using the Button Component

Once registered, you can use all button variants in your HTML:

```html
<!-- Basic buttons -->
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>

<!-- Size variants -->
<button class="btn btn-xs">Extra Small</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>

<!-- Shape variants -->
<button class="btn btn-circle">🏠</button>
<button class="btn btn-square">✕</button>
<button class="btn btn-wide">Wide Button</button>
<button class="btn btn-block">Full Width</button>

<!-- Interactive variants -->
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link Style</button>
<button class="btn btn-outline">Outlined</button>
<button class="btn btn-primary btn-outline">Primary Outline</button>

<!-- Glass effect -->
<button class="btn glass">Glass Effect</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary loading">Loading...</button>

<!-- Combinations -->
<button class="btn btn-primary btn-sm btn-circle">A</button>
<button class="btn btn-secondary btn-lg btn-wide">Large Wide Secondary</button>
```

This example demonstrates how Vimesh Style's Register API enables you to create sophisticated component systems with:
- Theme-aware color systems
- Multiple variants and states
- Responsive design support
- Browser compatibility handling
- Smooth animations and transitions

All without any build process!

## 🚀 Examples

### Button with Hover Effects
```html
<button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
  Click me
</button>
```

### Responsive Card Layout
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 class="text-xl font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content here</p>
  </div>
</div>
```

### Form with Focus States
```html
<input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
       type="text" placeholder="Enter text">
```

## 📦 Installation

### CDN

```html
<script src="https://unpkg.com/@vimesh/style"></script>
```

### npm
```bash
npm install @vimesh/style
```

```javascript
import '@vimesh/style';
// or
require('@vimesh/style');
```

## 🎯 Use Cases

- **Rapid Prototyping**: Style components instantly with utility classes and powerful register API
- **Legacy Projects**: Add modern utility classes and responsive components to existing HTML
- **Component Libraries**: Create custom component systems with @apply and object registration
- **Email Templates**: Use utility classes in HTML emails
- **Demos & Playgrounds**: Quick styling for CodePen, JSFiddle with advanced responsive features
- **Micro-frontends**: Independent styling without build coordination
- **Learning**: Experiment with Tailwind CSS and advanced CSS patterns without setup complexity
- **Static Sites**: Add responsive, interactive components to static HTML pages
- **Design Systems**: Build consistent, theme-aware component libraries with CSS variables

## 🔧 Configuration Options

Configuration must be set through `$vs.reset()` which merges your options with the defaults:

```javascript
$vs.reset({
  debug: false,              // Enable debug logging
  auto: true,                // Auto-detect classes in DOM
  prefix: 'vs',              // Prefix for CSS variables
  attributify: 'none',       // 'all', 'none', 'prefix'
  breakpoints: { /* ... */ }, // Custom breakpoints (merges with defaults)
  colors: { /* ... */ },     // Custom color palette (merges with defaults)
  aliasColors: { /* ... */ }, // Auto-generate palettes from hex OR alias existing colors
  fontSizes: { /* ... */ },  // Custom font sizes
  animation: { /* ... */ },  // Custom animations
  // ... more options
});
```

## 📄 Browser Support

- Modern browsers (ES6+)
- IE11+ (with ES5 build)
- Server-side rendering (Node.js)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.


