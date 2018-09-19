// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Multi line comment can contain LINE FEED (U+000A)
es5id: 7.3_A5.1_T2
description: Insert real LINE FEED into multi line comment
---*/

/*CHECK#1*/
var x = 0;
/*
multi
line
comment
x = 1;
*/
if (x !== 0) {
  $ERROR('#1: var x = 0; /*\\nmulti\\nline\\ncomment\\nx = 1;\\n*/ x === 0. Actual: ' + (x));
}

reportCompare(0, 0);
