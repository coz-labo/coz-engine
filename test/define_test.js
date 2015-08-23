/**
 * Test case for define.js
 * Runs with nodeunit.
 */

"use strict";

var define = require('../lib/define.js');

exports['Define a constructor.'] = function (test) {
    var Defined = define({
        compile: function () {
        },
        foo: 'bar'
    });
    test.equal(new Defined().foo, 'bar');
    test.done();
};
