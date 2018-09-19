// |reftest| error:SyntaxError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The FunctionBody must be SourceElements
es5id: 13_A7_T3
description: Checking if execution of "function __func(){\A\B\C}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

function __func(){\A\B\C};
