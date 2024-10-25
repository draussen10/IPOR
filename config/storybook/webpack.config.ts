import type webpack from 'webpack';
import {type BuildOptions, type BuildPaths} from '../build/types/config';
import path from 'path';
import {buildCssLoader} from '../build/loaders/buildCssLoader';
import {buildSvgLoader} from '../build/loaders/buildSvgLoader';
import {DefinePlugin, type RuleSetRule} from 'webpack';

const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    output: '',
    entry: ''
};

const buildConfig: BuildOptions = {
    isDev: true,
    apiUrl: '',
    analyze: false,
    paths,
    port: 9000,
    mode: 'development'
};

export default ({config}: { config: webpack.Configuration }) => {
    config.resolve.modules = [
        paths.src,
        'node_modules'
    ];
    config.resolve.extensions.push('.tsx', 'ts', '.js');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i};
        }

        return rule;
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: ''
    }));

    config.module.rules.push(buildCssLoader(buildConfig));
    config.module.rules.push(buildSvgLoader());

    return config;
};
