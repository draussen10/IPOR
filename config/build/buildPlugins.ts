import webpack from 'webpack';

// Плагин. Я отвечаю за работу с html. src с js в html появится автоматически.
import HTMLWebpackPlugin from 'html-webpack-plugin';
import {type BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin'

export function buildPlugins ({paths, isDev, analyze, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new CopyPlugin({
            patterns: [
                {from: paths.locales, to: paths.buildLocales}
            ]
        })
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshPlugin());
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
        plugins.push(new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }))
    }

    return plugins;
}
