import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

export function buildLoaders({isDev}: BuildOption): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                auto: /\.module.s[ac]ss$/i,
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        styleLoader,
    ]
}