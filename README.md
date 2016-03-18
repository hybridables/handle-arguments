# [handle-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Handles passed Arguments object. Gets separately arguments in `.args` and last argument (callback) in `.callback`. Useful for node-style callback flow.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i handle-arguments --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const handleArguments = require('handle-arguments')
```

### Instead of commonly used and wrong pattern
> It is part of "Optiomization Killers" and needed very much, so we need correct pattern to reuse.
 
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

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/handle-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[is-arguments]: https://github.com/ljharb/is-arguments
[is-callback-function]: https://github.com/tunnckocore/is-callback-function
[is-number]: https://github.com/jonschlinkert/is-number
[isarray]: https://github.com/juliangruber/isarray
[lazy-cache]: https://github.com/jonschlinkert/lazy-cache
[sliced]: https://github.com/aheckmann/sliced

[npmjs-url]: https://www.npmjs.com/package/handle-arguments
[npmjs-img]: https://img.shields.io/npm/v/handle-arguments.svg?label=handle-arguments

[license-url]: https://github.com/hybridables/handle-arguments/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/hybridables/handle-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/handle-arguments.svg

[travis-url]: https://travis-ci.org/hybridables/handle-arguments
[travis-img]: https://img.shields.io/travis/hybridables/handle-arguments/master.svg

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

