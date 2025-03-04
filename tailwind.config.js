const Path = require('path');
const pwd = process.env.PWD;

// We can add current project paths here
const projectPaths = [
  Path.join(pwd, './templates/**/*.html'),
  // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log(`tailwindcss will scan ${contentPaths}`);

module.exports = {
  content: contentPaths,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {}, // Add custom theme configurations here (colors, fonts, spacing, etc.)
  },
  plugins: [], // Add Tailwind plugins here if you're using any (e.g., forms, typography)
};
