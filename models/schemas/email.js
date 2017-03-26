'use strict';

const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
    {
        email: {
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

module.exports = emailSchema;
