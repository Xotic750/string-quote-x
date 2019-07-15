import safeToString from 'to-string-symbols-supported-x';
import { stringify } from 'json3'; // If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

/**
 * This method wraps a string in double quotes and replaces control characters
 * with safe escape sequences.
 *
 * @param {string} string - The string to safely wrap in double quotes.
 * @returns {string} The wrapped string.
 */

export default function quote(string) {
  return stringify(safeToString(string));
}

//# sourceMappingURL=string-quote-x.esm.js.map