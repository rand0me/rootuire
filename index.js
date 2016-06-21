'use strict';

var path = require('path');

var root,
    opts = {};
function rootuire (arg) {
    opts.namespace = opts.namespace || arg.namespace || '';
    root = path.join(__dirname, opts.namespace);

    if (typeof arg === 'string') {
        return require(path.join(root, arg));
    } else {
        return this;
    }
};

module.exports = rootuire;