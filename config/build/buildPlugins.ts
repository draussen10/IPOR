import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildOption} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev, analyzer }: BuildOption): webpack.WebpackPluginInstance[] {

    let plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if (isDev) {
        plugins = plugins.concat(
            [
                new ReactRefreshPlugin({
                    overlay: false
                }),
            ]
        )
    }

    if (!isDev) {
        plugins = plugins.concat(
            [
                new MiniCssExtractPlugin({
                    filename: 'style/[name].[contenthash:8].css',
                    chunkFilename: 'style/[name].[contenthash:8].css'
                }),
            ]
        )
    }

    analyzer && plugins.push(new BundleAnalyzerPlugin())

    return plugins
}