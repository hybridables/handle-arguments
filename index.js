/**
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var slice = require('array-slice')
var isArguments = require('is-arguments')

/**
 * Commonly used handling of Arguments object
 *
 * **Example:**
 *
 * ```js
 * var handleArguments = require('handle-arguments')
 *
 * function fixture() {
 *   return handleArguments(arguments)
 * }
 *
 * console.log(fixture(1, 2, 3))
 * //=> {callback: undefined, cb: undefined
 * // arguments: [1, 2, 3], args: [1, 2, 3]}
 *
 * console.log(fixture(1, 2, function _callback_ () {}))
 * //=> {callback: [Function: _callback_], cb: [Function: _callback_],
 * // arguments: [1, 2], args: [1, 2]}
 * ```
 *
 * @name handleArguments
 * @param  {Arguments} `<argsObject>` the arguments object
 * @return {Object}
 * @api public
 */
module.exports = function handleArguments (argsObject) {
  if (!isArguments(argsObject)) {
    throw new TypeError('handle-arguments: expect only Arguments object')
  }
  var callback = null
  var args = slice(argsObject)
  var len = args.length
  var last = args[len - 1]

  if (typeof last === 'function') {
    callback = last
    args = slice(args, 0, -1)
  }
  callback = callback === null ? undefined : callback

  return {
    callback: callback,
    cb: callback,
    arguments: args,
    args: args
  }
}
