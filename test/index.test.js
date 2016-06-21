var path       = require('path');
var chai       = require('chai');

var expectedModule = 'a test module';

describe('Rootuire', function() {

    it('Should find root relative module', function() {
        var rootuire = require('../');

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('example/js/components/test')
        );
    });

    it('Should find root relative module within a namespace', function() {
        var rootuire = require('../')({namespace: 'example/js'});

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('components/test')
        );
    });

    it('Should bubble to a root directory', function () {
        var rootuire = require('rootuire');

        chai.expect(
            expectedModule
        ).to.equal(
            rootuire('example/js/components/test')
        );
    });

});