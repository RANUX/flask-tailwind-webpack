// eslint.config.js (CORRECTED - Flat Config)
import js from '@eslint/js';

export default [
  {
    files: ['**/*.js'], // Apply to all JS files in the project
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Add globals here
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Add your custom rules or overrides here
    },
  },
];
