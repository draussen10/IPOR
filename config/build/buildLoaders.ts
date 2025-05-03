import type webpack from 'webpack';
import {type BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import {buildBabelLoader} from "./loaders/buildBabelLoader";
import {buildFileLoader} from "./loaders/buildFileLoader";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
    const tsxBabelLoader = buildBabelLoader({...options, isTsx: true})

    return [
        buildCssLoader(options),
        buildSvgLoader(),
        buildFileLoader(),
        codeBabelLoader,
        tsxBabelLoader
    ];
}
