'use strict';
const nLog = require('noogger');

module.exports = (res, err) => {


    var errorObj = {
        code: err.code,
        trace: null,
        message: err.message,
        err_errors :err.errors || null
    };

    nLog.info('-----------------------"Unauthorize Access" spotted---------------------------------');
    nLog.info(JSON.stringify(errorObj));
    nLog.info('-------XXXXXX----------"Unauthorize Access" spotted---------------XXXXXX------------');

    return res.status(401).send({
        success: false,
        error: {
            code: err.code,
            trace: null,
            message: err.message,
            err_errors :err.errors || null
        }
    });
    // return res.status(401).send({
    //     success: false,
    //     error: {
    //         errorObj
    //     }
    // });
};
