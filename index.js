/**
 * handle-arguments <https://github.com/tunnckoCore/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var slice = require('array-slice');
var isArguments = require('is-arguments');

/**
 * Commonly used handling of Arguments object
 *
 * @param  {Arguments} `argsObject`
 * @return {Object} with properties `callback` and `arguments` with `args` alias
 * @api public
 */
module.exports = function handleArguments(argsObject) {
  if (!isArguments(argsObject)) {
    throw new TypeError('handle-arguments: expect only Arguments object');
  }
  var callback;
  var args = slice(argsObject);
  var len = args.length;
  var last = args[len - 1];

  if (typeof last === 'function') {
    callback = last;
    args = slice(args, 0, -1);
  }

  return {
    callback: callback,
    arguments: args,
    args: args
  };
};
