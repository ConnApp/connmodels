const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    title: String,
    text: String,

    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
        required: true,
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        required: true,
    },

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
