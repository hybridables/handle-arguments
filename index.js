/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function handleArguments (argz, ignores, index) {
  argz = utils.arrayify(argz)
  if (utils.isNumber(ignores)) {
    index = ignores
    ignores = false
  }

  var args = utils.slice(argz, index)
  var last = args[args.length - 1]

  last = typeof last === 'function' ? last : function noop () {}
  last = utils.isCallback(last) ? last : false
  args = last ? utils.slice(args, 0, -1) : args

  return {
    callback: last,
    cb: last,
    arguments: args,
    args: args
  }
}
