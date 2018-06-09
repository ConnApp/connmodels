const path = require('path')

const mongoose = require('mongoose')
const readModelsFolder = require('./utils/readModelsFolder')

module.exports = async function InitializeModels(mongoURL = process.env.MONGODB_URL) {
    const modelsPath = path.join(__dirname, './models')

    const mongooseOptions = {
        reconnectInterval: 500,
        promiseLibrary: global.Promise,
        reconnectTries: Number.MAX_VALUE,
    }

    await mongoose.connect(
        mongoURL,
        mongooseOptions
    )

    mongoose.connection.on('error', () => {
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.')
    })

    readModelsFolder(modelsPath)

    console.log('MongoDB conntected successfully')
}
