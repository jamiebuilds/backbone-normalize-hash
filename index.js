var _ = require('underscore');

module.exports = function normalizeHash(source, hash) {
  var obj = _.result(source, hash);
  var clone = {};

  _.each(obj, function(val, key) {
    clone[key] = _.isFunction(val) ? val : source[key];
  });

  return clone;
};
