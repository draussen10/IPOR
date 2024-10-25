module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        'i18next',
        "react-hooks"
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/semi': [1, 'always'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'react/no-deprecated': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'i18next/no-literal-string': ['warn', {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to']
        }],
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        'react/prop-types': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/unbound-method': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};
