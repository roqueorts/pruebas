module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true 
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    root: true,
    "rules": {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        "eqeqeq": ["warn", "smart"],
        'accessor-pairs': ['error', { "setWithoutGet": true }],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
              selector: 'variable',
              format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
              leadingUnderscore: 'allow',
            },
            {
              selector: 'function',
              format: ['camelCase', 'PascalCase'],
            },
            {
              selector: 'typeLike',
              format: ['PascalCase'],
            },
          ],
          "no-unused-vars": ["warn", { "vars": "all" }],
        // we use 2 spaces to indent our code
        // 'indent': ['error', 2],
        // we want to avoid extraneous spaces
        // 'no-multi-spaces': ['error']
    }
};
