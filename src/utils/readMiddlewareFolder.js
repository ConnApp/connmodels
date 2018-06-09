const fs = require('fs')
const path = require('path')
const winston = require('winston')

module.exports = function readMiddlewareFolder(hook, directory) {
    const middlewarePath = path.join(directory, hook)

    try {
        const isFolderAndExists = fs.existsSync(middlewarePath) && fs.lstatSync(middlewarePath).isDirectory()

        if (!isFolderAndExists) return []

        const middlewares = fs.readdirSync(middlewarePath).map(middleware => {
            const action = require(`${middlewarePath}/${middleware}`)

            const operation = middleware.split('.')[0]

            return {
                action,
                operation,
            }
        })

        return middlewares
    } catch (error) {
        winston.error(`There was an error reading path ${middlewarePath}`)
        winston.error(error)

        return []
    }
}
