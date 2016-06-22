var path       = require('path');
var chai       = require('chai');

var expectedModule = 'a test module',
    expectedModulePath = '../example/js/components/test';

describe('Rootuire', function() {

    it('- test module should be available through require()', function () {
        chai.expect(
            expectedModule
        ).to.equal(
            require(expectedModulePath)
        );
    });

    it('- should find root relative module', function() {
        var rootuire = require('../');

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('example/js/components/test')
        );
    });

    it('- should find root relative module within a namespace', function() {
        var rootuire = require('../')({namespace: 'example/js'});

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('components/test')
        );
    });

    it('- should bubble to a root directory', function () {
        var rootuire = require('rootuire');

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('example/js/components/test')
        );
    });

});