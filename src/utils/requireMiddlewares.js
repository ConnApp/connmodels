const path = require('path')
const winston = require('winston')
const readMiddlewareFolder = require('./readMiddlewareFolder')
const getMiddlewareLocation = require('./getMiddlewareLocation')
const globalMiddlewaresPath = path.resolve(__dirname, '../global')

module.exports = function requireMiddleware(Schema, modelDirectory) {
    const hooks = [
        'pre',
        'post',
    ]

    const modelName = modelDirectory.split('/').pop()
    const errors = []
    for (let hook of hooks) {
        const middlewares = readMiddlewareFolder(hook, modelDirectory)
        const globalMiddlewares = readMiddlewareFolder(hook, globalMiddlewaresPath)

        const allMiddlewares = globalMiddlewares.concat(middlewares)

        if (!allMiddlewares.length) continue

        const locate = getMiddlewareLocation(hook, modelName)

        for (let middleware of allMiddlewares) {
            try {
                const { operation, action } = middleware

                if (!operation) {
                    throw new Error('Missing operation')
                }

                if (!action) {
                    throw new Error('Missing action')
                }

                Schema[hook](operation, action)
            } catch (error) {
                winston.error(`There was an error assigning the middleware ${locate(middleware)}`)
                winston.error(error)

                errors.push(error.message)
            }
        }
    }

    winston.info(`Middlewares for model ${modelName} were initialized with ${errors.length} errors`)
}
