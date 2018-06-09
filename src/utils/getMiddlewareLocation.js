module.exports = function getMiddlewareLocation(hook, modelName) {
    return function getMiddlewareLocation(middleware) {
        return `${hook}.${middleware} - ${modelName.toUpperCase()}`
    }
}
