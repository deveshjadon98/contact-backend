'use strict';

const errors = require('./../constants/errors');
const nLog = require('noogger');

module.exports = (res, err, data) => {

    let err_code = err.code || 'E_UNEXPECTED';

    // console.log(err,'responses error-----------------------------');

    // Mongoose Error Handling Fix: Parse unique validation for all columns here

    var errorObj = {
        code: err_code,
            err_trace: err.stack || '',
            err_errors: err.errors || '',
            err_message: err.message || '',
            message: "Something went wrong!",
            data: data
    };
    nLog.error('-----------------------"Error" spotted---------------------------------');
    nLog.error(JSON.stringify(errorObj));
    nLog.error('-------XXXXXX----------"Error" spotted---------------XXXXXX------------');

    return res.status(500).send({
        success: false,
        error: {
            code: err_code,
            err_trace: err.stack || '',
            err_errors: err.errors || '',
            err_message: err.message || '',
            message: "Something went wrong!",
            data: data
        }
    });
    // return res.status(500).send({
    //     success: false,
    //     error: errorObj
    // });
};
