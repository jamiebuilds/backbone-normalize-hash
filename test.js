var normalizeHash = require('./');
var _ = require('underscore');

function foo() {}
function bar() {}

var object = {
  hash1: { foo: 'foo', bar: bar },
  hash2: function() { return { foo: 'foo', bar: bar }; },
  foo: foo
};

var result1 = normalizeHash(object, 'hash1');
var result2 = normalizeHash(object, 'hash2');

var expected = { foo: foo, bar: bar };

if (!_.isEqual(result1, expected)) {
  throw 'Should normalize correctly';
}

if (!_.isEqual(result2, expected)) {
  throw 'Should normalize correctly with functions';
}
