const test = require('./utils/tests')

const models = require('./index')

const mongoURL = 'mongodb://localhost:27017/test-connapp'
const mongoose = require('mongoose')

test.before(async () => {
    await models(mongoURL)
})

test('should connect and intialize without errors', async t => {
    await t.notThrows(models(mongoURL))
})

test.cb('should add lastUpdate when saving', t => {
    (async () => {
        const InfoModel = mongoose.models.info

        const testNew = await new InfoModel({
            title: 'title',
            message: 'message',
        }).save()

        const oldTime = testNew.lastUpdate.getTime()

        setTimeout(async () => {
            testNew.title = 'new title'
            const newTestnew = await testNew.save()

            const newTime = newTestnew.lastUpdate.getTime()

            t.true(oldTime < newTime)

            t.end()
        }, 2000)
    })()
})
