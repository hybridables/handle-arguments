/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var handle = require('./index')
var isArray = require('isarray')

function fixture () {
  return handle(arguments)
}

test('should return object with `.arguments` and `.callback` properties', function (done) {
  var actual = fixture(1, 2, 3)

  test.strictEqual(typeof actual === 'object', true)
  test.ok(!actual.callback)
  test.strictEqual(actual.callback, false)
  test.deepEqual(actual.arguments, [1, 2, 3])
  done()
})

test('should `.callback` property be falsey value if last argument is not a function', function (done) {
  var actual = fixture(1, 2, 3)

  test.strictEqual(typeof actual.callback === 'boolean', true)
  test.strictEqual(actual.callback, false)
  done()
})

test('should `.callback` property be falsey value if last argument is function but not a callback', function (done) {
  /* istanbul ignore next */
  function noop () {}
  var actual = fixture(1, 2, noop)

  test.strictEqual(typeof actual.callback === 'boolean', true)
  test.strictEqual(actual.callback, false)
  test.strictEqual(isArray(actual.arguments), true)
  test.deepEqual(actual.arguments, [1, 2, noop])
  done()
})

test('should `.callback` property be the callback function if is callback', function (done) {
  /* istanbul ignore next */
  function callback () {}
  var actual = fixture(1, 2, callback)
  test.strictEqual(typeof actual.callback === 'function', true)
  test.strictEqual(actual.callback, callback)
  done()
})

test('should `.arguments` property be array with all arguments without last if callback', function (done) {
  /* istanbul ignore next */
  function callback () {}

  var actual = fixture(1, 2, 3, callback)
  test.strictEqual(isArray(actual.arguments), true)
  test.deepEqual(actual.arguments, [1, 2, 3])
  done()
})

test('should be able to pass array instead of Arguments object', function (done) {
  function boom (a, b, foo) {
    return handle([a, b, foo])
  }
  var actual = boom('a', 2, fixture)

  test.strictEqual(typeof actual.callback === 'boolean', true)
  test.strictEqual(actual.callback, false)
  test.strictEqual(isArray(actual.arguments), true)
  test.deepEqual(actual.arguments, ['a', 2, fixture])
  done()
})

test('should be able to pass as second argument custom `names` to be treated as `callback`', function (done) {
  function fixture () {
    return handle(arguments, ['qux', 'named', 'foo'])
  }
  /* istanbul ignore next */
  function qux () {}
  var actual = fixture(1, 2, qux)
  test.strictEqual(typeof actual.callback === 'function', true)
  test.strictEqual(actual.callback, qux)
  done()
})

test('should allow pass `index` to `sliced` lib to get only arguments after `index`', function (done) {
  function fixture () {
    return handle(arguments, 2)
  }
  /* istanbul ignore next */
  function callback () {}
  var actual = fixture(1, 2, 3, 4, 5, callback)
  test.strictEqual(typeof actual.callback === 'function', true)
  test.strictEqual(actual.callback, callback)
  test.deepEqual(actual.arguments, [3, 4, 5])
  done()
})

test('should be able to pass two indicies to `sliced`', function (done) {
  function fixture () {
    return handle(arguments, 2, -1)
  }
  var actual = fixture(1, 2, 3, 4, 5)
  test.strictEqual(actual.callback, false)
  test.strictEqual(typeof actual.callback === 'boolean', true)
  test.deepEqual(actual.arguments, [3, 4])
  done()
})

test('should push thruthy value argument to `.arguments` when not arguments or array is passed', function (done) {
  test.strictEqual(handle('foo').callback, false)
  test.deepEqual(handle('foo').arguments, ['foo'])
  test.deepEqual(handle(123).arguments, [123])
  test.deepEqual(handle(true).arguments, [true])
  done()
})

test('should return object with empty `.arguments` when falsey value and not arguments/array', function (done) {
  test.deepEqual(handle(false).arguments, [])
  test.deepEqual(handle(false).callback, false)
  test.deepEqual(handle(null).arguments, [])
  test.deepEqual(handle(null).callback, false)
  test.deepEqual(handle(undefined).arguments, [])
  test.deepEqual(handle(undefined).callback, false)
  done()
})
