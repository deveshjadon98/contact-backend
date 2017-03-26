'use strict';
const nLog = require('noogger');



module.exports = (res, err) => {


    var errorObj = {
        code: err.code,
        trace: null,
        message: err.message
    };


    nLog.info('-----------------------"Not Found" spotted---------------------------------');
    nLog.info(JSON.stringify(errorObj));
    nLog.info('-------XXXXXX----------"Not Found" spotted---------------XXXXXX------------');

    return res.status(404).send({
        success: false,
        error: {
            code: err.code,
            trace: null,
            message: err.message
        }
    });
    // return res.status(404).send({
    //     success: false,
    //     error: {
    //         errorObj
    //     }
    // });
};
