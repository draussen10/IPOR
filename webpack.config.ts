import path from 'path';
import {buildConfig} from './config/build/buildConfig';
import {type BuildEnv, type BuildPaths} from './config/build/types/config';

// ---------------------------------------------------------
// Я вебпак.
// Я беру весь js-код и делаю из него один файл. Это я понимаю все импорты и экспорты.
// Я умею только с js и json, для всех остальных у меня есть plugins и loaders.
// ---------------------------------------------------------

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 9000;
    const analyze = env.analyze || false;
    const apiUrl = env.apiUrl || 'http://localhost:9050';

    const paths: BuildPaths = {
        src: path.resolve(__dirname, 'src'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };

    const isDev = mode === 'development';

    return buildConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyze,
        apiUrl
    });
};
