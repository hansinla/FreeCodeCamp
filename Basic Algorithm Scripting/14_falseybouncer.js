/*
 Remove all falsey values from an array.
 */

var bouncer = function(arr) {
	
  return (typeof(arr) == 'boolean');
}

debug(bouncer([7, 'ate', '', false, 9]));

/*
assert.strictEqual(boo('a'), false);AssertionError:expected true to equal false
assert.strictEqual(boo(NaN), false);AssertionError:expected true to equal false
assert.strictEqual(boo(1), false);AssertionError:expected true to equal false
assert.strictEqual(boo({ 'a': 1 }), false);AssertionError:expected true to equal false
assert.strictEqual(boo([].slice), false);AssertionError:expected true to equal false
assert.strictEqual(boo([1, 2, 3]), false);AssertionError:expected true to equal false
 */