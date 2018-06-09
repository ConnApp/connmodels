const test = require('ava')

const getMiddlewareLocation = require('./getMiddlewareLocation')

test('should return fucntion after first call', async t => {
    const first = getMiddlewareLocation()

    t.is(typeof first, 'function')
})

test('should build location with given string correctly', async t => {
    const location = getMiddlewareLocation('hook', 'modelName')('middleware')

    t.is(location, 'hook.middleware - MODELNAME')
})
