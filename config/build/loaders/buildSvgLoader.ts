import { type RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => {
    return {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack']
    };
};
