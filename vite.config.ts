import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig ({
    server: {
        port: 9000,
        open: true
    },
    plugins: [
        svgr({
            exportAsDefault: true
        }),
        react()
    ],
    resolve: {
        alias: [
            {find: '@', replacement: '/src'}
        ]
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:9050'),
        __PROJECT__: JSON.stringify('frontend')
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    }
})