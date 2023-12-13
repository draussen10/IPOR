export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string
    output: string
    html: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOption extends BuildEnv{
    paths: BuildPaths,
    isDev: boolean,
}