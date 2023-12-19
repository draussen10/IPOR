import {BuildOption} from './types/config'
import {Configuration as DevServerConfig} from 'webpack-dev-server'

export function buildDevServer(options: BuildOption): DevServerConfig {
    return {
        port: options.port || 5000,
        open: true,
        historyApiFallback: true
    }
}