import type webpack from 'webpack';
import {type BuildOptions} from './types/config';

export function buildResolvers ({paths}: BuildOptions): webpack.ResolveOptions {
    return {
        // Для каких файлов при импорте мы не будем указывать расширение
        extensions: ['.tsx', '.ts', '.js'],
        // Абсолютные импорты
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': paths.src
        }
    };
}
