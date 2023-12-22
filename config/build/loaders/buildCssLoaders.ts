import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean = true) {
    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                auto: /\.module.s[ac]ss$/i,
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    return {
        test: /\.s[ac]ss$/i,
        use:
            [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                cssLoader,
                // Compiles Sass to CSS
                'sass-loader',
            ],
    }
}