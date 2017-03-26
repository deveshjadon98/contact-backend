'use strict';
const nLog = require('noogger');

module.exports = (res, err) => {
    
    var errorObj = {
        code: err.code,
        trace: null,
        message: err.message
    };

    return res.status(403).send({
        success: false,
        error: {
            code: err.code,
            trace: null,
            message: err.message
        }
    });
};
