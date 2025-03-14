import type webpack from 'webpack';
import {type BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/
    // };

    const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
    const tsxBabelLoader = buildBabelLoader({...options, isTsx: true})



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
        codeBabelLoader,
        tsxBabelLoader
    ];
}
