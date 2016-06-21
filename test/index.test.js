var path       = require('path');
var rootuire   = require('../');
var chai       = require('chai');

var expectedModule = 'a test module';

describe('Rootuire', function() {

    it('Should find root relative module', function() {
        chai.expect(
            rootuire('example/js/components/test')
        ).to.equal(
            expectedModule
        );
    });

    it('Should find root relative module within a namespace', function() {
        rootuire({namespace: 'example/js'});
        chai.expect(
            rootuire('components/test')
        ).to.equal(
            expectedModule
        );
    });

});