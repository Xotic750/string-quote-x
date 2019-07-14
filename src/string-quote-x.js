/**
 * @file Wrap a string in double quotes.
 * @version 2.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module string-quote-x
 */

const safeToString = require('to-string-symbols-supported-x');
const {stringify} = require('json3');

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

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
module.exports = function quote(string) {
  return stringify(safeToString(string));
};
