/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var handleArguments = require('./index')

test('handle-arguments', function () {
  test('should throw error', function () {
    test('when Object is given - handleArguments({name: 123})', function (done) {
      function fixture () {
        handleArguments({name: 123})
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when no params is given - handleArguments()', function (done) {
      function fixture () {
        handleArguments()
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when Number is given - handleArguments(123)', function (done) {
      function fixture () {
        handleArguments(123)
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when Array is given - handleArguments([1,2,3])', function (done) {
      function fixture () {
        handleArguments([1, 2, 3])
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when String is given - handleArguments("123")', function (done) {
      function fixture () {
        handleArguments('123')
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
  })

  test('should work with real Arguments object', function () {
    test('when dont have `function` as last argument', function (done) {
      function fixture () {
        return handleArguments(arguments)
      }
      var actual = fixture(1, 2, 3)

      test.deepEqual(actual.args, [1, 2, 3])
      test.deepEqual(actual.arguments, [1, 2, 3])
      test.strictEqual(actual.callback, undefined)
      done()
    })
    test('when have `function` (cb) as last argument', function (done) {
      function fixture () {
        return handleArguments(arguments)
      }
      var actual = fixture(1, 2, 3, function __cb () {})

      test.deepEqual(actual.args, [1, 2, 3])
      test.deepEqual(actual.arguments, [1, 2, 3])
      test.strictEqual(actual.callback.name, '__cb')
      test.strictEqual(typeof actual.callback, 'function')
      done()
    })
  })
})
