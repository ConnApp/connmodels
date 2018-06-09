const fs = require('fs')
const winston = require('winston')

module.exports = function readModelsFolder(directory) {
    try {
        const isFolderAndExists = fs.existsSync(directory) && fs.lstatSync(directory).isDirectory()

        if (!isFolderAndExists) {
            throw new Error('Models directory not found')
        }

        const models = fs.readdirSync(directory).map(model => {
            const schema = require(`${directory}/${model}/schema`)

            return schema
        })

        return models
    } catch (error) {
        winston.error(`There was an error reading path ${directory}`)
        winston.error(error)

        return []
    }
}
