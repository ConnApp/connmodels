const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    title: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

    cover: { type: String },

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
