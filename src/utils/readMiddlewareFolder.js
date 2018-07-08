const path = require('path')

const { listFiles } = require('connutils').fs

module.exports = function utils_readMiddlewareFolder(hook, directory) {
    const middlewarePath = path.join(directory, hook)

    try {
        const middlewares = listFiles(middlewarePath).map(middleware => {
            const action = require(`${middlewarePath}/${middleware}`)

            const operation = middleware.split('.')[0]

            return {
                action,
                operation,
            }
        })

        return middlewares
    } catch (error) {
        console.log(`There was an error reading path ${middlewarePath}`)
        console.log(error)

        return []
    }
}
