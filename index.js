'use strict';

var path = require('path');

var rootuire = function (arg) {
    var opts = { namespace: '' };
    var root = __dirname;

    opts.namespace = arg.namespace || opts.namespace;
    root = root.indexOf('node_modules') < 0 ? root : path.join(root, '..', '..');

    if (typeof arg === 'string') {
        return require(path.join(root, opts.namespace, arg));
    }

    return function (arg) {
        if (typeof arg === 'object') {
            return rootuire(arg);
        }

        if (typeof arg === 'string') {
            return require(path.join(root, opts.namespace, arg));
        }

        throw Error("Rootuire need an argument to execute");
    };
};


module.exports = rootuire;