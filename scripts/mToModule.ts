import {Project} from 'ts-morph'

const projectCSS = new Project({})

projectCSS.addSourceFilesAtPaths([
    'src/**/*.m.scss'
])

const filesCSS = projectCSS.getSourceFiles()

filesCSS.forEach(sourceFile => {
    const path = sourceFile.getFilePath()
    const newPath = path.replace(".m.scss", ".module.scss");

    sourceFile.move(newPath);
})

projectCSS.save()

const projectTSX = new Project({})

projectTSX.addSourceFilesAtPaths([
    'src/**/*.tsx'
])

const filesTSX = projectTSX.getSourceFiles()

filesTSX.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()



        importDeclaration.setModuleSpecifier(value.replace(".m.scss", ".module.scss"))
    })
})

projectTSX.save()




