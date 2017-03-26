'use strict';

const _ = require('lodash');
const Promise = require('bluebird');
const Contact = require('./../models/Contact');

module.exports = class ContactService {

    constructor() {
    }

    static create(data) {
        return Promise.coroutine(function* () {
            let contact = new Contact();
            contact.first_name = data.first_name;
            contact.last_name = data.last_name;
            contact.emails = data.emails;
            contact.phones = data.phones;
            // console.log('SAVED CONTACT',contact);
            // contact.last_name = data.last_name;
            contact = yield contact.save();
            return contact;
        }).apply(this);
    }

    static fetchAll(){
        return Promise.coroutine(function* () {
            let contacts = Contact.find({});
            return contacts;
        }).apply(this);
    }
};
