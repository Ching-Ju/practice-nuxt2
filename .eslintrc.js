module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['default', 'index', 'login', 'error', 'media', 'crud', 'input', 'file', 'chart', 'menu', 'panel', 'messages', 'button', 'table', 'list', 'tree', 'overlay', 'misc', 'timeline', 'blocks', 'landing']
    }]
  }
}
