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

### Macro CSS
Define reusable component styles:

```javascript
$vs.addMacroCss({
  '.btn-primary': 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
  '.card': 'bg-white shadow-lg rounded-lg p-6'
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

- **Rapid Prototyping**: Style components instantly without CSS files
- **Legacy Projects**: Add modern utility classes to existing HTML
- **Email Templates**: Use utility classes in HTML emails
- **Demos & Playgrounds**: Quick styling for CodePen, JSFiddle
- **Micro-frontends**: Independent styling without build coordination
- **Learning**: Experiment with Tailwind without setup complexity

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


