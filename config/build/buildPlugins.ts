import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev }: BuildOption): webpack.WebpackPluginInstance[] {

    let plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]

    if (isDev) {
        plugins.concat(
            [

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

    return plugins
}