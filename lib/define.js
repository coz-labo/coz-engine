/**
 * Define a engine constructor.
 * @memberof module:coz-engine/lib
 * @function define
 * @param {object} properties - Properties for constructor.
 * @returns {function} - Constructor function.
 */
"use strict";

var Engine = require('./engine'),
    assert = require('assert');

/** @lends define */
function define(properties) {
    assert(properties, "Properties is required.");

    var DefinedEngine = function () {
        var s = this;
        s.init.apply(s, arguments);
    };
    DefinedEngine.$isEngine = true;

    DefinedEngine.prototype = new Engine().set(properties);
    DefinedEngine.prototype._constructor = DefinedEngine;

    assert(properties.compile, "properties.compile is is required.");


    return DefinedEngine;
}

module.exports = define;
