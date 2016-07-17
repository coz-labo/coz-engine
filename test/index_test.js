/**
 * Test case for index.js
 * Runs with mocha.
 */

'use strict'

const index = require('../lib/index.js')
const assert = require('assert')
it('Construct a engine.', (done) => {
  assert.ok(index)
  assert.ok(index.Engine)
  assert.ok(index.define)
  done()
})

