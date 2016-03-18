# [handle-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Get separately non-callback arguments in `.arguments` and the last argument if it [is-callback-function][] in `.callback`. It also works like [sliced][], but returns object with `.arguments` and `.callback` properties.

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

### [handleArguments](index.js#L25)

> Get separately non-callback arguments in `.arguments`, and
the last function if it [is-callback-function][] in `.callback`.
Signature is like [sliced][], it works almost the same way, but returns object
with `.arguments` and `.callback` properties.

**Params**

* `argz` **{Array|Arguments}**: Arguments object or array to eat.    
* `names` **{Array|Number}**: If array directly passed to [is-callback-function][], otherwise to [sliced][].    
* `index` **{Number}**: Passed directly to [sliced][] if `number`.    
* `returns` **{Object}**  

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

## Related
* [arr-includes](https://www.npmjs.com/package/arr-includes): Return true if any of passed values exists in array. Using [in-array][]. | [homepage](https://github.com/tunnckocore/arr-includes)
* [common-callback-names](https://www.npmjs.com/package/common-callback-names): List of common callback names - callback, cb, callback_, next, done. | [homepage](https://github.com/tunnckocore/common-callback-names)
* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors.… [more](https://www.npmjs.com/package/function-arguments) | [homepage](https://github.com/tunnckocore/function-arguments)
* [get-fn-name](https://www.npmjs.com/package/get-fn-name): Get function name with strictness and correctness in mind. Also works for… [more](https://www.npmjs.com/package/get-fn-name) | [homepage](https://github.com/tunnckocore/get-fn-name)
* [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous function? Trying to guess that based on check… [more](https://www.npmjs.com/package/is-async-function) | [homepage](https://github.com/tunnckocore/is-async-function)
* [is-callback-function](https://www.npmjs.com/package/is-callback-function): Returns true if function is a callback. Checks its name is one… [more](https://www.npmjs.com/package/is-callback-function) | [homepage](https://github.com/tunnckocore/is-callback-function)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/handle-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[is-callback-function]: https://github.com/tunnckocore/is-callback-function
[sliced]: https://github.com/aheckmann/sliced
[in-array]: https://github.com/jonschlinkert/in-array

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

