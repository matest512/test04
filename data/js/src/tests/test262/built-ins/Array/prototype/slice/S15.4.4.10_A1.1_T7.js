// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is positive, use min(start, length).
    If end is positive, use min(end, length)
esid: sec-array.prototype.slice
es5id: 15.4.4.10_A1.1_T7
description: end > length > start > 0
---*/

var x = [0,1,2,3,4];
var arr = x.slice(3,6);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(3,6); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 2) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(3,6); arr.length === 2. Actual: ' + (arr.length));
}

//CHECK#3
if (arr[0] !== 3) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(3,6); arr[0] === 3. Actual: ' + (arr[0]));
}

//CHECK#4
if (arr[1] !== 4) {
  $ERROR('#4: var x = [0,1,2,3,4]; var arr = x.slice(3,6); arr[1] === 4. Actual: ' + (arr[1]));
}

//CHECK#5
if (arr[3] !== undefined) {
  $ERROR('#5: var x = [0,1,2,3,4]; var arr = x.slice(3,6); arr[3] === undefined. Actual: ' + (arr[3]));
}

reportCompare(0, 0);
