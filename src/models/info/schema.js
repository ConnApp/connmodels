const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    title: {
        type: String,
        required: true,
        validate(v) {
            return true
        },
    },

    message: {
        type: String,
        required: true,
    },

    number: { type: Number },

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
