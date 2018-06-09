const winston = require('winston')
const readMiddlewareFolder = require('./readMiddlewareFolder')
const getMiddlewareLocation = require('./getMiddlewareLocation')

module.exports = function requireMiddleware(Schema, modelDirectory) {
    const hooks = [
        'pre',
        'post',
    ]

    const modelName = modelDirectory.split('/').pop()

    for (let hook of hooks) {
        const middlewares = readMiddlewareFolder(hook, modelDirectory)

        if (!middlewares.length) continue

        const locate = getMiddlewareLocation(hook, modelName)

        for (let middleware of middlewares) {
            try {
                const { operation, action } = middleware

                if (!operation) {
                    throw new Error(`Missing operation ${operation} for ${locate(middleware)}`)
                }

                if (!action) {
                    throw new Error(`Missing action ${action.name} for ${locate(middleware)}`)
                }

                Schema[hook](operation, action)
            } catch (error) {
                winston.error(`There was an error assigning the middleware ${locate(middleware)}`)
                winston.error(error)
            }
        }
    }
}
