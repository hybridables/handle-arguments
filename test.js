/**
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var handleArguments = require('./index')

var describe = test.describe
var assert = test.assert
var it = test.it

describe('handle-arguments', function () {
  describe('should throw error', function () {
    it('when Object is given - handleArguments({name: 123})', function (done) {
      function fixture () {
        handleArguments({name: 123})
      }
      assert.throws(fixture, /expect only Arguments object/)
      done()
    })
    it('when no params is given - handleArguments()', function (done) {
      function fixture () {
        handleArguments()
      }
      assert.throws(fixture, /expect only Arguments object/)
      done()
    })
    it('when Number is given - handleArguments(123)', function (done) {
      function fixture () {
        handleArguments(123)
      }
      assert.throws(fixture, /expect only Arguments object/)
      done()
    })
    it('when Array is given - handleArguments([1,2,3])', function (done) {
      function fixture () {
        handleArguments([1, 2, 3])
      }
      assert.throws(fixture, /expect only Arguments object/)
      done()
    })
    it("when String is given - handleArguments('123')", function (done) {
      function fixture () {
        handleArguments('123')
      }
      assert.throws(fixture, /expect only Arguments object/)
      done()
    })
  })

  describe('should work with real Arguments object', function () {
    it('when dont have `function` as last argument', function (done) {
      function fixture () {
        return handleArguments(arguments)
      }
      var actual = fixture(1, 2, 3)

      assert.deepEqual(actual.args, [1, 2, 3])
      assert.deepEqual(actual.arguments, [1, 2, 3])
      assert.deepEqual(actual.callback.name, 'defaultHandleArgumentsCallback')
      done()
    })
    it('when have `function` (cb) as last argument', function (done) {
      function fixture () {
        return handleArguments(arguments)
      }
      var actual = fixture(1, 2, 3, function __cb () {})

      assert.deepEqual(actual.args, [1, 2, 3])
      assert.deepEqual(actual.arguments, [1, 2, 3])
      assert.strictEqual(actual.callback.name, '__cb')
      assert.strictEqual(typeof actual.callback, 'function')
      done()
    })
  })
})
