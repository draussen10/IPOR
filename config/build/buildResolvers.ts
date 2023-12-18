import {ResolveOptions} from "webpack";
import {BuildOption} from "./types/config";

export function buildResolvers({paths}: BuildOption): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index']
    }
}