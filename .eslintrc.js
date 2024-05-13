module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],

  parserOptions: {
    ecmaFeatures: { globalReturn: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['vue'],

  rules: {
    'array-bracket-newline': ['error', { 'multiline': true }],
    'array-bracket-spacing': ['error', 'never'],
    'block-scoped-var': 'error',
    'brace-style': ['error', '1tbs'],
    'capitalized-comments': ['error', 'always'],
    'comma-dangle': [
      'error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
      },
    ],
    'curly': ['error', 'all'],
    'dot-location': ['error', 'property'],
    'func-call-spacing': ['error', 'never'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'keyword-spacing': ['error', { 'before': true }],
    'init-declarations': ['error', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-console': 0,
    'no-else-return': ['error', { 'allowElseIf': false }],
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return',
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'block-like',
      },
      {
        'blankLine': 'always',
        'prev': 'block-like',
        'next': '*',
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'export',
      },
    ],
    'prefer-object-spread': ['error'],
    'quotes': [
      'error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'semi': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'vue/attributes-order': 0,
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      'error', {
        'singleline': 'never',
        'multiline': 'always',
      },
    ],
    'vue/html-indent': [
      'error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
      },
    ],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': {
          'max': 1,
        },
        'multiline': {
          'max': 1,
        },
      },
    ],
    'vue/new-line-between-multi-line-property': [
      'error', {
        'minLineOfMultilineProperty': 2,
      },
    ],
    'vue/no-unused-components': 0,
    'vue/no-unused-vars': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-v-html': 0,
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-default-prop': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/require-prop-types': 0,
    'vue/script-indent': [
      'error', 2, {
        'baseIndent': 0,
      },
    ],
  },

  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      },
    },
  ],
}
