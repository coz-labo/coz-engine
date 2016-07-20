/**
 * Abstract engine for coz
 * @module: coz-engine
 * @version: 2.0.3
 */
'use strict'

const define = require('./define')
const Engine = require('./engine')

function cozEngine (properties){
  return define(properties)
}

cozEngine.Engine = Engine
cozEngine.define = define

module.exports = cozEngine
