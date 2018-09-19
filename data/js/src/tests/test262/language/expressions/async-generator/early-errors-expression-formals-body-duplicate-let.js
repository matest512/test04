// |reftest| error:SyntaxError
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  It is a SyntaxError if BoundNames of FormalParameters also occurs in the
  LexicallyDeclaredNames of AsyncFunctionBody
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

throw "Test262: This statement should not be evaluated.";

(async function*(a) { let a; });
