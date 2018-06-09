module.exports = function(hook, modelName) {
    return function getMiddlewareLocation(middleware) {
        return `${hook}.${middleware} - ${modelName.toUpperCase()}`
    }
}
