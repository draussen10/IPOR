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
    entry: '',
    buildLocales: '',
    locales: ''
};

const buildConfig: BuildOptions = {
    isDev: true,
    apiUrl: '',
    analyze: false,
    paths,
    port: 9000,
    mode: 'development',
    project: 'storybook'
};

export default ({config}: { config: webpack.Configuration }) => {
    config.resolve!.modules = [
        paths.src,
        'node_modules'
    ];
    config.resolve!.extensions!.push('.tsx', '.ts', '.js');

    const rules = config.module!.rules as RuleSetRule[];

    config.module!.rules = rules.map((rule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i};
        }

        return rule;
    });

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook')
    }));

    config.module!.rules.push(buildCssLoader(buildConfig));
    config.module!.rules.push(buildSvgLoader());

    return config;
};
