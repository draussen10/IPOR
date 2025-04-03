import {Project} from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths([
    'src/**/*.ts',
    'src/**/*.tsx'
])

function isAbsolutePath(path: string) {
    const layers = ['app', 'shared', 'widgets', 'entities', 'pages', 'features']

    return layers.some(layer => path.startsWith(layer));
}

const files = project.getSourceFiles()

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()

        if (isAbsolutePath(value)) {
            importDeclaration.setModuleSpecifier('@/' + value)
        }
    })
})

project.save()
