const test = require('ava')
const path = require('path')
const readMiddlewareFolder = require('./readMiddlewareFolder')

test('should require global pre middleware', async t => {
    const globalPath = path.resolve(__dirname, '../global')

    const globalMiddleware = readMiddlewareFolder('pre', globalPath)

    for (let middleware of globalMiddleware) {
        const { action, operation } = middleware

        t.is(typeof operation, 'string')

        t.is(typeof action, 'function')
        t.is(typeof action.name, 'string')
    }
})
