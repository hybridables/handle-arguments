/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Get separately non-callback arguments in `.arguments`, and
 * the last function if it [is-callback-function][] in `.callback`.
 * Signature is like [sliced][], it works almost the same way, but returns object
 * with `.arguments` and `.callback` properties.
 *
 * **Example**
 *
 * ```js
 * var handle = require('handle-arguments')
 *
 * function fixture () {
 *   return handle(arguments)
 * }
 *
 * function cb () {}
 * function noop () {}
 *
 * console.log(fixture(1, 2, 3, 4).arguments) // => [1, 2, 3, 4]
 * console.log(fixture(1, 2, 3, 4).callback) // => false
 *
 * console.log(fixture(1, 2, cb).arguments) // => [1, 2]
 * console.log(fixture(1, 2, cb).callback) // => [Function: cb]
 *
 * console.log(fixture(1, 2, noop).arguments) // => [1, 2, noop]
 * console.log(fixture(1, 2, noop).callback) // => false
 *
 * // treat functions named `noop` or `foo` as callback
 * function fn () {
 *   return handle(arguments, ['foo', 'noop'])
 * }
 *
 * console.log(fn(1, 2, 3, noop).arguments) // => [1, 2, 3]
 * console.log(fn(1, 2, 3, noop).callback) // => [Function: noop]
 * ```
 *
 * @param  {Array|Arguments} `argz` Arguments object or array to eat.
 * @param  {Array|Number} `names` If array directly passed to [is-callback-function][], otherwise to [sliced][].
 * @param  {Number} `index` Passed directly to [sliced][] if `number`.
 * @return {Object}
 * @api public
 */

module.exports = function handleArguments (argz, names, index) {
  argz = utils.arrayify(argz)

  var args = null
  var nameNum = utils.isNumber(names)
  var idxNum = utils.isNumber(index)

  if (nameNum && !idxNum) {
    args = utils.slice(argz, names)
    names = false
  } else if (nameNum && idxNum) {
    args = utils.slice(argz, names, index)
  } else {
    args = utils.slice(argz)
  }

  var last = args[args.length - 1]
  last = typeof last === 'function' ? last : function noop () {}
  last = utils.isCallback(last, names) ? last : false
  args = last ? utils.slice(args, 0, -1) : args

  return {
    callback: last,
    cb: last,
    arguments: args,
    args: args
  }
}
