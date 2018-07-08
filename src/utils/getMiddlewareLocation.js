module.exports = (hook, modelName) =>
    function utils_getMiddlewareLocation(middleware) {
        return `${hook}.${middleware} - ${modelName.toUpperCase()}`
    }
