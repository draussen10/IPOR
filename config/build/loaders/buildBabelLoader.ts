import {type RuleSetRule} from 'webpack';
import {type BuildOptions} from '../types/config';
import babelRemovePropsPlugin from "../babelPlugins/babelRemovePropsPlugin";

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean
}

export const buildBabelLoader = ({isDev, isTsx}: BuildBabelLoaderProps): RuleSetRule => {
    const isProd = !isDev

    return {
        test: isTsx ? /\.(jsx|tsx)?$/ : /\.(js|ts)?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                plugins: [
                    [
                        "@babel/plugin-transform-runtime", {isTsx}
                    ],
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ],
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
};
