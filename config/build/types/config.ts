export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
    analyzer?: boolean
}

export interface BuildOption extends BuildEnv{
    paths: BuildPaths,
    isDev: boolean,
}