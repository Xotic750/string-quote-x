/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/string-quote-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/string-quote-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/string-quote-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/string-quote-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/string-quote-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/string-quote-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/string-quote-x" title="npm version">
 * <img src="https://badge.fury.io/js/string-quote-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Wrap a string in double quotes.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module string-quote-x
 */

'use strict';

var safeToString = require('safe-to-string-x');
var isString = require('is-string');

var rxEsc = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

// table of character substitutions
var meta = {
  '\b': '\\b',
  '\t': '\\t',
  '\n': '\\n',
  '\f': '\\f',
  '\r': '\\r',
  '"': '\\"',
  '\\': '\\\\'
};

var replacer = function _replacer(a) {
  var c = meta[a];
  if (isString(c)) {
    return c;
  }

  return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
};

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
var quote = function _quote(string) {
  var str = safeToString(string);
  return '"' + (rxEsc.test(str) ? str.replace(rxEsc, replacer) : str) + '"';
};

/**
 * This method wraps a string in double quotes and replaces control characters
 * with safe escape sequences.
 *
 * @param {string} string The string to safely wrap in double quotes.
 * @return {string} The wrapped string.
 * @example
 * var quote = require('string-quote-x');
 *
 * var s = quote('hello'); // '"hello"'
 */
module.exports = quote;
