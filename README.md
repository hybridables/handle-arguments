# [handle-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow. Used by [hybridify](https://github.com/hybridables/hybridify)

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i handle-arguments --save
```

## Features
- prevents arguments leakage ([Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) by [@petkaantonov](https://github.com/petkaantonov))
- support node lists in IE < 9 and ensure dense arrays are returned



## API
> For more use-cases see the [tests](./test.js)

### [handleArguments](./index.js#L39)

- `<argsObject>` **{Arguments}** the arguments object
- `return` **{Object}**
  + `callback` **{Function}** last argument if function or `undefined`
  + `cb` **{Function}** alias of `callback`
  + `arguments` **{Array}** all arguments without last (the callback)
  + `args` **{Array}** alias of `arguments`

**Example:**

```js
var handleArguments = require('handle-arguments')

function fixture () {
  return handleArguments(arguments)
}

console.log(fixture(1, 2, 3))
//=> {callback: undefined, cb: undefined
// arguments: [1, 2, 3], args: [1, 2, 3]}

console.log(fixture(1, 2, function _callback_ () {}))
//=> {callback: [Function: _callback_], cb: [Function: _callback_],
// arguments: [1, 2], args: [1, 2]}
```

**instead of commonly used pattern**

```js
function fixture () {
  var args = [].slice.call(arguments)
  var len = args.length
  var callback = args[len - 1]

  if (typeof callback === 'function') {
    args = args.slice(0, -1)
    callback.apply(null, [null].concat(args))
  }
  return args
}
```


## Related
- [async-exec-cmd](https://github.com/tunnckoCore/async-exec-cmd): Simple, fast, flexible and cross-platform async executing commands (with node-cross-spawn).
- [bluebird](https://github.com/petkaantonov/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [hybridify](https://github.com/hybridables/hybridify): Building hybrid APIs. You can use both callback and promise in same time.  Like… [more](https://github.com/hybridables/hybridify)
- [handle-callback](https://github.com/hybridables/handle-callback): Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give… [more](https://github.com/hybridables/handle-callback)
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov. Powers `handle-arguments`
- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) by [@petkaantonov](https://github.com/petkaantonov)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/handle-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/handle-arguments
[npmjs-img]: https://img.shields.io/npm/v/handle-arguments.svg?label=handle-arguments

[license-url]: https://github.com/hybridables/handle-arguments/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/hybridables/handle-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/handle-arguments.svg

[travis-url]: https://travis-ci.org/hybridables/handle-arguments
[travis-img]: https://img.shields.io/travis/hybridables/handle-arguments.svg

[coveralls-url]: https://coveralls.io/r/hybridables/handle-arguments
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-arguments.svg

[david-url]: https://david-dm.org/hybridables/handle-arguments
[david-img]: https://img.shields.io/david/hybridables/handle-arguments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg