## [![npm][npmjs-img]][npmjs-url] [![standard style][standard-img]][standard-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.


## Install
```
npm install handle-arguments --save
npm test
```


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

function fixture() {
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
function fixture() {
  var args = [].slice.call(arguments)
  var len = args.length
  var callback = args[len - 1]

  if (typeof callback === 'function') {
    args = args.slice(0, -1)
    callback.apply(undefined, [null].concat(args))
  }
  return args
}
```
> Or more real world examples [callback-and-promise][callback-and-promise], [thenify][thenify], [thenify-all][thenify-all] and a lot more...


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/handle-arguments
[npmjs-img]: https://img.shields.io/npm/v/handle-arguments.svg?style=flat&label=handle-arguments

[coveralls-url]: https://coveralls.io/r/hybridables/handle-arguments?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-arguments.svg?style=flat

[license-url]: https://github.com/hybridables/handle-arguments/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/handle-arguments
[travis-img]: https://img.shields.io/travis/hybridables/handle-arguments.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/handle-arguments
[daviddm-img]: https://img.shields.io/david/hybridables/handle-arguments.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/handle-arguments/graphs/contributors

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore/docks) on May 9, 2015._


[callback-and-promise]: https://github.com/thenables/callback-and-promise
[thenify-all]: https://github.com/thenables/thenify-all
[thenify]: https://github.com/thenables/thenify
[thenables]: https://github.com/thenables
[hybridables]: https://github.com/hybridables
[hybridify]: https://github.com/hybridables/hybridify
[hybridify-all]: https://github.com/hybridables/hybridify-all
[handle-callback]: https://github.com/hybridables/handle-callback
[handle-errors]: https://github.com/hybridables/handle-errors