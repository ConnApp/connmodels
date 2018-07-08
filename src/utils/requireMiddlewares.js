const path = require('path')
const readMiddlewareFolder = require('./readMiddlewareFolder')
const getMiddlewareLocation = require('./getMiddlewareLocation')
const globalMiddlewaresPath = path.resolve(__dirname, '../global')

module.exports = function utils_requireMiddleware(Schema, modelDirectory) {
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
                console.log(`There was an error assigning the middleware ${locate(middleware)}`)

                console.log(error)

                errors.push(error.message)
            }
        }
    }

    console.log(
        `Middlewares for model ${modelName.toUpperCase()} were initialized with ${errors.length} errors`
    )
}
