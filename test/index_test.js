/**
 * Test case for index.js
 * Runs with nodeunit.
 */

'use strict'

const index = require('../lib/index.js')

exports[ 'Construct a engine.' ] = function (test) {
  test.ok(index)
  test.ok(index.Engine)
  test.ok(index.define)
  test.done()
};

