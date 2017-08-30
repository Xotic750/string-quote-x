/**
 * @file Wrap a string in double quotes.
 * @version 2.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module string-quote-x
 */

'use strict';

var safeToString = require('safe-to-string-x');
var JSON3 = require('json3');
var stringify = JSON3.stringify;

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
var $quote = function quote(string) {
  return stringify(safeToString(string));
};

/**
 * This method wraps a string in double quotes and replaces control characters
 * with safe escape sequences.
 *
 * @param {string} string - The string to safely wrap in double quotes.
 * @returns {string} The wrapped string.
 * @example
 * var quote = require('string-quote-x');
 *
 * var s = quote('hello'); // '"hello"'
 */
module.exports = $quote;
