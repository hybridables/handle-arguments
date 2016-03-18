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

test('should return object with `.arguments` and `.callback` properties', function (done) {
  function fixture () {
    return handle(arguments)
  }
  var actual = fixture(1, 2, 3)
  test.strictEqual(typeof actual === 'object', true)
  test.ok(!actual.callback)
  test.strictEqual(actual.callback, false)
  test.deepEqual(actual.arguments, [1, 2, 3])
  done()
})

// test('handle-arguments', function () {
//   test('should throw error', function () {
//     // test('when Object is given - handleArguments({name: 123})', function (done) {
//     //   function fixture () {
//     //     handleArguments({name: 123})
//     //   }
//     //   test.throws(fixture, /expect only Arguments object/)
//     //   done()
//     // })
//     // test('when no params is given - handleArguments()', function (done) {
//     //   function fixture () {
//     //     handleArguments()
//     //   }
//     //   test.throws(fixture, /expect only Arguments object/)
//     //   done()
//     // })
//     // test('when Number is given - handleArguments(123)', function (done) {
//     //   function fixture () {
//     //     handleArguments(123)
//     //   }
//     //   test.throws(fixture, /expect only Arguments object/)
//     //   done()
//     // })
//     // test('when Array is given - handleArguments([1,2,3])', function (done) {
//     //   function fixture () {
//     //     handleArguments([1, 2, 3])
//     //   }
//     //   test.throws(fixture, /expect only Arguments object/)
//     //   done()
//     // })
//     // test('when String is given - handleArguments("123")', function (done) {
//     //   function fixture () {
//     //     handleArguments('123')
//     //   }
//     //   test.throws(fixture, /expect only Arguments object/)
//     //   done()
//     // })
//   })

//   test('should work with real Arguments object', function () {
//     test('when do not have `function` as last argument', function (done) {
//       function fixture () {
//         return handleArguments(arguments)
//       }
//       var actual = fixture(1, 2, 3)

//       test.deepEqual(actual.arguments, [1, 2, 3])
//       test.ok(!actual.callback)
//       done()
//     })
//     test('when have `function` (cb) as last argument', function (done) {
//       function fixture () {
//         return handleArguments(arguments)
//       }
//       var actual = fixture(1, 2, 3, function callback () {})
//       test.deepEqual(actual.arguments, [1, 2, 3])
//       test.strictEqual(actual.callback.name, 'callback')
//       test.strictEqual(typeof actual.callback, 'function')
//       done()
//     })
//   })
// })
