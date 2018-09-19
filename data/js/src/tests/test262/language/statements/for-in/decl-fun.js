// |reftest| error:SyntaxError
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Function declaration not allowed in statement position
esid: sec-for-in-and-for-of-statements
es6id: 13.7.5
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

for (var x in {}) function f() {}
