const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        name: {
            type: String,
            required: true,
        },

        user_type: {
            type: String,
            enum: [
                'member',
                'manager',
                'admin',
                'owner',
            ],
            default: 'member',
        },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'company',
            required: true,
        },

        password: String,

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
