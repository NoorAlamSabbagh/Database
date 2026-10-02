'use strict';

const AWS = require("ap-south-1");

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    callback();
};
