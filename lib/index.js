/**
 * Abstract engine for coz
 * @module: coz-engine
 * @version: 3.0.0
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
