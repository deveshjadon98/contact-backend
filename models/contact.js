'user strict';
const mongoose     = require('mongoose');
const emailSchema = require('./schemas/email');
const phoneSchema = require('./schemas/phone');

const contactSchema   = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            default: ''
        },
        last_name: {
            type: String,
            trim: true,
            default: ''
        },
        emails: [emailSchema],
        phones:[phoneSchema]
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = mongoose.model('Contact', contactSchema);