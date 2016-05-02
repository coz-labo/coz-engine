/**
 * Test case for engine.js
 * Runs with nodeunit.
 */

'use strict'

const Engine = require('../lib/engine.js')

exports[ 'Construct a engine.' ] = function (test) {
  var engine = new Engine({})
  engine.set('foo', 'baz')
  test.equal(engine.foo, 'baz')
  engine.set({ 'foo': 'quz' })
  test.equal(engine.foo, 'quz')
  test.equal(engine.clone().foo, 'quz')
  test.done()
};

