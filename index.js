'use strict';

var path = require('path');

/**
 * Rootuire
 * @constructor
 */
var Rootuire = function () {
    /**
     * @param string
     */
    this.namespace = '';

    /**
     * Require a module relative to a project root
     * @param arg - Object or String
     * @returns {*}
     */
    this.rootuire = function (arg) {
        if ('object' === typeof arg && arg.namespace) {
            var newInstance = (new Rootuire()).setNamespace(arg.namespace);
            return newInstance.rootuire.bind(newInstance);
        }

        if ('string' === typeof arg) {
            return require(this.getModulePath(arg));
        }

        return this.rootuire.bind(this);
    };

    /**
     * Get Curren working directory or '../../' in browser environment
     * @returns {string}
     */
    this.getCwd = function () {
        return path.resolve('.');
    };

    /**
     * Get a project root directory
     * @returns {*}
     */
    this.getRoot = function () {
        var cwd = this.getCwd();

        return cwd.indexOf('node_modules') < 0 ? cwd : path.join(cwd, '..', '..');
    };

    /**
     * Get a module path
     * @param arg - String
     * @returns {*}
     */
    this.getModulePath = function (arg) {
        var cwd  = this.getCwd(),
            root = this.getRoot(),
            prefix = cwd === root ? './' : '';

        return prefix + path.relative(cwd, path.join(root, this.namespace, arg));
    };

    /**
     * Set a namespace of this instance
     * @param namespace
     * @returns {Rootuire}
     */
    this.setNamespace = function (namespace) {
        this.namespace = namespace;

        return this;
    }
};

module.exports = (new Rootuire()).rootuire();