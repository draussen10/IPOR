import type webpack from 'webpack';
import {type BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    return [
        buildCssLoader(options),
        buildSvgLoader(),
        fileLoader,
        babelLoader,
        tsLoader
    ];
}
