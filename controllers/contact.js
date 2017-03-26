'use strict';
const response = require('./../config/responses');
const mongoose = require('mongoose');
const error = require('./../config/constants/errors');
const contactService = require('./../services/contact');
const Promise = require("bluebird");
module.exports = {

    all: (req, res) => {
        
       Promise.coroutine(function*(){
            // console.log("HOLLLLLAAAAA");
            // return req.body;
            let contacts = yield contactService.fetchAll();
            console.log('All CONTACTS',contacts);
            return contacts;
        })()
            .then((success) => {
                return response.ok(res, success);
            })
            .catch((err) => {
                return response.error(res, err);
            });
    },

    create: (req, res) => {
        
       Promise.coroutine(function*(){
        //    console.log(req.body);
            let contact = yield contactService.create(req.body);
            console.log('SAVED CONTACT',contact);
            return contact;
        })()
            .then((success) => {
                return response.created(res, success);
            })
            .catch((err) => {
                return response.error(res, err);
            });
    },
}