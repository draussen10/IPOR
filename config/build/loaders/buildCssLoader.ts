import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type RuleSetRule } from 'webpack';
import {type BuildOptions} from '../types/config';

export const buildCssLoader = ({isDev}: BuildOptions): RuleSetRule => {
    return {
        test: /\.scss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[local]_[contenthash:6]' : '[contenthash:8]'
                    }

                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    };
};
