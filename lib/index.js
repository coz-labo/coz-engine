/**
 * Abstract engine for coz
 * @module: coz-engine
 * @version: 1.0.2
 */
"use strict";

var define = require('./define'),
    Engine = require('./engine');

function cozEngine (properties){
    return define(properties);
}

cozEngine.Engine = Engine;
cozEngine.define = define;

module.exports = cozEngine;