const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: false,
        },

        start: {
            type: Date,
            required: true,
        },

        end: {
            type: Date,
            required: true,
        },

        like: {
            type: Number,
            default: 0,
        },

        speakers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'speakers',
            },
        ],

        eventType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'eventtypes',
            required: true,
        },

        order: {
            type: Number,
            default: 0,
        },

        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'places',
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
