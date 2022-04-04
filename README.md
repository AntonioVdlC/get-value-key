# get-value-key

[![version](https://img.shields.io/npm/v/get-value-key.svg)](http://npm.im/get-value-key)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/sort.svg)](https://github.com/AntonioVdlC/sort/issues)
[![downloads](https://img.shields.io/npm/dt/get-value-key.svg)](http://npm.im/get-value-key)
[![license](https://img.shields.io/npm/l/get-value-key.svg)](http://opensource.org/licenses/MIT)

Yet another library to get values from objects using a path.

## Installation

This package is distributed via npm:

```
npm install get-value-key
```

## Motivation
I wrote this code in one of my libraries, and needed it in another library so I'm publishing it as a standalone package.

The reason I wrote this in the first place was that existing libraries didn't seem to be maintained for at least a couple of years.

This library covers most use cases, but please be aware that it is not as complete as other ones (see Know limitations).

## Usage
```js
import getValueByKey from "get-value-key";

const obj = {
  nested: {
    num: 4,
  },
};

console.log(getValueByKey(obj, "nested.num")); // 4
```

## Known limitations
This library is not as complete as others such as [object-path](https://www.npmjs.com/package/object-path) or [get-value](https://www.npmjs.com/package/get-value). 

As such, it handles the basic case where the fields of an object are alphanumeric values that don't contain a `"."`.

## Licence
MIT
