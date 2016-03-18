/*!
 * handle-arguments <https://github.com/hybridables/handle-arguments>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function handleArguments (argz, names, index) {
  argz = utils.arrayify(argz)
  if (utils.isNumber(names)) {
    index = names
    names = false
  }

  var args = utils.slice(argz, index)
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
