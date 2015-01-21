/**
 * handle-arguments <https://github.com/tunnckoCore/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var handleArguments = require('./index');

describe('handle-arguments', function() {
  describe('should throw error', function() {
    it('if Object is given - handleArguments({name: 123})', function(done) {
      assert.throws(function fixture() {
        var argz = handleArguments({name: 123})
        return argz;
      }, /expect only Arguments object/);
      done();
    });

    it('if no params is given - handleArguments()', function(done) {
      assert.throws(function fixture() {
        var argz = handleArguments()
        return argz;
      }, /expect only Arguments object/);
      done();
    });

    it('if Number is given - handleArguments(123)', function(done) {
      assert.throws(function fixture() {
        var argz = handleArguments(123)
        return argz;
      }, /expect only Arguments object/);
      done();
    });

    it('if Array is given - handleArguments([1,2,3])', function(done) {
      assert.throws(function fixture() {
        var argz = handleArguments([1,2,3])
        return argz;
      }, /expect only Arguments object/);
      done();
    });
  });

  it('should work with real Arguments object- handleArguments(arguments)', function(done) {
    function fixture() {
      var argz = handleArguments(arguments)
      return argz;
    }

    var actual = fixture(1, 2, 3, function __cb() {});

    assert.deepEqual(actual.args, [1,2,3]);
    assert.deepEqual(actual.arguments, [1,2,3]);
    assert.strictEqual(actual.callback.name, '__cb');
    assert.strictEqual(typeof actual.callback, 'function');

    actual = fixture(1, 2, 3);
    assert.deepEqual(actual.args, [1,2,3]);
    assert.deepEqual(actual.arguments, [1,2,3]);
    done();
  });
});
