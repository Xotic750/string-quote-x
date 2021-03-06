<a
  href="https://travis-ci.org/Xotic750/string-quote-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/string-quote-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/string-quote-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-quote-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/string-quote-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-quote-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/string-quote-x"
  title="npm version">
<img src="https://badge.fury.io/js/string-quote-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/string-quote-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/string-quote-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/string-quote-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/string-quote-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/string-quote-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/string-quote-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_string-quote-x"></a>

## string-quote-x

Wrap a string in double quotes.

<a name="exp_module_string-quote-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>string</code> ⏏

This method wraps a string in double quotes and replaces control characters
with safe escape sequences.

**Kind**: Exported function  
**Returns**: <code>string</code> - The wrapped string.

| Param  | Type                | Description                                 |
| ------ | ------------------- | ------------------------------------------- |
| string | <code>string</code> | The string to safely wrap in double quotes. |

**Example**

```js
import quote from 'string-quote-x';

console.log(quote('hello')); // '"hello"'
```
