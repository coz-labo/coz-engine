/**
 * Test case for define.js
 * Runs with mocha.
 */

'use strict'

const define = require('../lib/define.js')
const assert = require('assert')

it('Define a constructor.', (done) => {
  var Defined = define({
    compile () {
    },
    foo: 'bar'
  })
  assert.equal(new Defined().foo, 'bar')
  done()
})
