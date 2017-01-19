# obj-to-dot-notation 
[![Build Status](https://travis-ci.org/tarranjones/obj-to-dot-notation.svg?branch=master)](https://travis-ci.org/tarranjones/obj-to-dot-notation)

> Converts an object to dot-notation

## Install

```
$ npm install --save obj-to-dot-notation
```


## Usage

```js
var ObjToDotNotation = require('obj-to-dot-notation');

ObjToDotNotation({foo: { bar : [ "baz", "qux" ]})};
//=> 
{
	"foo.bar.0" : "baz",
	"foo.bar.1" : "qux"
}


```


## Related

- [plain-obj-to-dot-notation](https://github.com/tarranjones/plain-obj-to-dot-notation) - Converts an object to dot-notation

## Dependency 
### is-obj [![Build Status](https://travis-ci.org/sindresorhus/is-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/is-obj)


## License

MIT © [Tarran Jones](http://tarranjones.com)
