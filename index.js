module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],

    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    'class-methods-use-this': 'off',

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'enums': 'always-multiline',
      'generics': 'always-multiline',
      'objects': 'always-multiline',
      'tuples': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'ignoredNodes': [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ],
        "SwitchCase": 1,
      },
    ],

    'import/prefer-default-export': 'off',

    'max-len': ['error', 120, 2],

    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false,
      }
    }],

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-floating-promises': 'off',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    '@typescript-eslint/no-non-null-assertion': 'error',

    'no-param-reassign': 'off',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'object-curly-newline': ['error',
      {
        'multiline': true,
        'consistent': true,
      },
    ],

    'prefer-destructuring': ['error', {
      'array': false,
      'object': false,
    }, {
      enforceForRenamedProperties: false,
    }],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],

    '@typescript-eslint/restrict-template-expressions': ['error', {
      'allowNumber': true,
      'allowBoolean': false,
      'allowAny': true,
      'allowNullish': false,
      'allowRegExp': false,
    }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],

    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};
