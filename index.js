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
