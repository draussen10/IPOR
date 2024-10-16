export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    src: string
    entry: string
    output: string
    html: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    analyze: boolean
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    analyze: boolean
}
