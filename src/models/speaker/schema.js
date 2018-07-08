const Schema = require('../../utils/Schema')

module.exports = Schema(__dirname)({
    name: String,

    description: String,

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
