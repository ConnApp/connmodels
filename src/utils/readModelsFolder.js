const { listFolders } = require('connutils').fs

module.exports = function readModelsFolder(directory) {
    try {
        const folders = listFolders(directory)

        if (!folders.length) {
            throw new Error('Models directory not found')
        }

        const models = folders.map(model => require(`${directory}/${model}/schema`))

        return models
    } catch (error) {
        console.log(`There was an error reading path ${directory}`)
        console.log(error)

        return []
    }
}
