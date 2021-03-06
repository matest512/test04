// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The decodeURI property has not prototype property
es5id: 15.1.3.1_A5.6
es6id: 18.2.6.2
esid: sec-decodeuri-encodeduri
description: Checking decodeURI.prototype
---*/

//CHECK#1
if (decodeURI.prototype !== undefined) {
  $ERROR('#1: decodeURI.prototype === undefined. Actual: ' + (decodeURI.prototype));
}

reportCompare(0, 0);
