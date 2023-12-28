module.exports =  {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    // 'ignorePatterns': ['src/*.test.tsx'],
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
        '@typescript-eslint',
        'react',
        'i18next'
    ],
    'settings': {
        'react': {
            'createClass': 'createReactClass', 
            'pragma': 'React',  
            'fragment': 'Fragment',  
            'version': 'detect', 
            'flowVersion': '0.53' 
        },
        'propWrapperFunctions': [
            'forbidExtraProps',
            {'property': 'freeze', 'object': 'Object'},
            {'property': 'myFavoriteWrapper'},
            {'property': 'forbidExtraProps', 'exact': true}
        ],
        'componentWrapperFunctions': [
            'observer',
            {'property': 'styled'},
            {'property': 'observer', 'object': 'Mobx'},
            {'property': 'observer', 'object': '<pragma>'} 
        ],
        'formComponents': [
            'CustomForm',
            {'name': 'Form', 'formAttribute': 'endpoint'}
        ],
        'linkComponents': [
            'Hyperlink',
            {'name': 'Link', 'linkAttribute': 'to'}
        ]
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'i18next/no-literal-string': [ 'warn', {'markupOnly': true}],
    }
}
