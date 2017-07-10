'use strict';

var quote;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  quote = require('../../index.js');
} else {
  quote = returnExports;
}

describe('testSubject', function () {

  it('wraps an empty string in "', function () {
    var s = '';
    var expected = '""';
    expect(quote(s)).toBe(expected);
  });

  it('wraps and converts an empty string object in "', function () {
    var s = Object('');
    var expected = '""';
    expect(quote(s)).toBe(expected);
  });

  it('wraps a string in "', function () {
    var s = 'hello';
    var expected = '"hello"';
    expect(quote(s)).toBe(expected);
  });

  it('wraps and converts a string object in "', function () {
    var s = Object('hello');
    var expected = '"hello"';
    expect(quote(s)).toBe(expected);
  });

  it('escape meta characters', function () {
    var s = '\b\t\n\f\r"\\';
    var expected = '"\\b\\t\\n\\f\\r\\"\\\\"';
    expect(quote(s)).toBe(expected);
  });

  it('escape meta characters in string object', function () {
    var s = Object('\b\t\n\f\r"\\');
    var expected = '"\\b\\t\\n\\f\\r\\"\\\\"';
    expect(quote(s)).toBe(expected);
  });

  it('arrays are converted to strings', function () {
    var s = [
      1,
      2,
      3
    ];
    var expected = '"1,2,3"';
    expect(quote(s)).toBe(expected);
  });

  it('objects are converted to strings', function () {
    var s = {};
    var expected = '"[object Object]"';
    expect(quote(s)).toBe(expected);
  });

});
