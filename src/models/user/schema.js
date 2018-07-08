const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        name: {
            type: String,
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
