const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        name: String,
        description: String,

        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        ],

        map: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'map',
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
