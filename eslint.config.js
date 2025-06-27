module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        VERSION: 'readonly'
      }
    },
    rules: {
      'new-cap': 'off',
      'no-cond-assign': 'off'
    }
  }
];
