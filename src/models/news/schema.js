const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    name: {
        type: String,
        required: true,
    },

    mapImage: { type: String },

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
