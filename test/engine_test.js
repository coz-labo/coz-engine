/**
 * Test case for engine.js
 * Runs with mocha.
 */

'use strict'

const Engine = require('../lib/engine.js')
const assert = require('assert')
it('Construct a engine.', (done) => {
  var engine = new Engine({})
  engine.set('foo', 'baz')
  assert.equal(engine.foo, 'baz')
  engine.set({ 'foo': 'quz' })
  assert.equal(engine.foo, 'quz')
  assert.equal(engine.clone().foo, 'quz')
  done()
})


