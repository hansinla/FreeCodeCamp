/*
 Remove all falsey values from an array.
 */

var bouncer = function(arr) {
  return arr.filter(function(val){
  	if (val) return true;
  });
};

debug(bouncer([7, 'ate', '', false, 9]));

/*
assert.strictEqual(boo('a'), false);AssertionError:expected true to equal false
assert.strictEqual(boo(NaN), false);AssertionError:expected true to equal false
assert.strictEqual(boo(1), false);AssertionError:expected true to equal false
assert.strictEqual(boo({ 'a': 1 }), false);AssertionError:expected true to equal false
assert.strictEqual(boo([].slice), false);AssertionError:expected true to equal false
assert.strictEqual(boo([1, 2, 3]), false);AssertionError:expected true to equal false
 */