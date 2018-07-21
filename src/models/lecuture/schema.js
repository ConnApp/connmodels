const mongoose = require('mongoose')
const Schema = require('../../utils/Schema')

module.exports = () =>
    Schema(__dirname)({
        id: String,
        name: String,
        description: String,

        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        ],

        speakers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'speakers',
            },
        ],

        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event',
            required: true,
        },

        lectureType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'lectureType',
            required: true,
        },

        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'place',
            required: true,
        },

        schedule: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'schedule',
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
