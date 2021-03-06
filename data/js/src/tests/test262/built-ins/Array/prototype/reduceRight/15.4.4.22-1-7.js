// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-1-7
description: Array.prototype.reduceRight applied to string primitive
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj instanceof String;
        }

assert(Array.prototype.reduceRight.call("hello\nworld\\!", callbackfn, "h"), 'Array.prototype.reduceRight.call("hello\nworld\\!", callbackfn, "h") !== true');
assert(accessed, 'accessed !== true');

reportCompare(0, 0);
