import webpack from 'webpack'
import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildEnv, BuildPaths} from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3365
    const analyzer = env.analyzer

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyzer
    })

    return config
}