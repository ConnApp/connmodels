const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        name: String,
        description: String,

        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event',
            required: true,
        },

        map: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'map',
            required: true,
        },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'company',
            required: true,
        },

        archived: {
            type: Boolean,
            default: true,
        },

        createAt: {
            type: Date,
            default: Date.now,
        },

        lastUpdate: {
            type: Date,
            default: Date.now,
        },
    })
