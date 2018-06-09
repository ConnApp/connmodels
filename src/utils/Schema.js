const mongoose = require('mongoose')
const requireMiddlewares = require('./requireMiddlewares')

module.exports = directory => {
    return function buildSchema() {
        const modelName = directory.split('/').pop()

        const currentModel = mongoose.models[modelName]

        if (currentModel) return currentModel

        const Schema = new mongoose.Schema(...arguments)

        requireMiddlewares(Schema, directory)

        return mongoose.model(modelName, Schema)
    }
}
