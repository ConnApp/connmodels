const mongoose = require('mongoose')
const requireMiddlewares = require('../../utils/requireMiddlewares')

module.exports = directory => {
    return function buildSchema() {
        const modelName = directory.split('/').pop()

        const Schema = new mongoose.Schema(...arguments)

        const currentModel = mongoose.models[modelName]

        if (currentModel) return currentModel

        requireMiddlewares(Schema, directory)

        return mongoose.model(modelName, Schema)
    }
}
