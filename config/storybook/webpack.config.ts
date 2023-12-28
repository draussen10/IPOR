import webpack, {RuleSetRule} from 'webpack'
import path from 'path'
import {BuildPaths} from '../build/types/config'
import {buildCssLoader} from '../build/loaders/buildCssLoaders'

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
        output: '',
        entry: ''
    }
    config.resolve.modules.push(path.resolve(paths.src))
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules =  config.module.rules.map((rule : RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            }
        }

        return rule
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module.rules.push(buildCssLoader())

    return config
}