'use strict';

const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        type: {
            type: String,
            enum: ['WORK', 'PERSONAL'],
            default: 'WORK'
        },
    },
    {
        timestamps: true,
        autoIndex: true
    }
);

module.exports = phoneSchema;
