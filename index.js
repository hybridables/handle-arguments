/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var slice = require('sliced')
var isArgs = require('is-arguments')

/**
 * Commonly used handling of Arguments object
 *
 * **Example:**
 *
 * ```js
 * var handleArguments = require('handle-arguments')
 *
 * function fixture () {
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
  if (!isArgs(argsObject)) {
    throw new TypeError('handle-arguments expect only Arguments object')
  }

  var args = slice(argsObject)
  var last = args[args.length - 1]

  last = typeof last === 'function' ? last : undefined
  args = last ? slice(args, 0, -1) : args

  return {
    callback: last,
    cb: last,
    arguments: args,
    args: args
  }
}
