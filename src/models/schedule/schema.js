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

        likes: {
            type: Number,
            default: 0,
        },

        order: {
            type: Number,
            default: 0,
        },

        speakers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'speaker',
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
