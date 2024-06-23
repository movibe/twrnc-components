module.exports = {
  extends: ['expo', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
  },
}
