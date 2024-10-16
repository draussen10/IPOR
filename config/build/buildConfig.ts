import type webpack from 'webpack';
import {type BuildOptions} from './types/config';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildConfig (options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            // Здесь мы конфигурируем loaders
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
