<a href="https://travis-ci.org/Xotic750/string-quote-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/string-quote-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/string-quote-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-quote-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/string-quote-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-quote-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/string-quote-x" title="npm version">
<img src="https://badge.fury.io/js/string-quote-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_string-quote-x"></a>

## string-quote-x
Wrap a string in double quotes.

**Version**: 2.0.2  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_string-quote-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>string</code> ⏏
This method wraps a string in double quotes and replaces control characters
with safe escape sequences.

**Kind**: Exported function  
**Returns**: <code>string</code> - The wrapped string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to safely wrap in double quotes. |

**Example**  
```js
var quote = require('string-quote-x');

var s = quote('hello'); // '"hello"'
```
