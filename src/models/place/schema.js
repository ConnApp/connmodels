const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    name: {
        type: String,
        required: true,
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    active: {
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
