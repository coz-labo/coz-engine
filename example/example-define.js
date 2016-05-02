'use strict'

const cozEngine = require('coz-engine')

const MyCustomEngine = cozEngine({
  compile (src, callback) {
    /* ... */
  }
})

let engine = new MyCustomEngine({})
