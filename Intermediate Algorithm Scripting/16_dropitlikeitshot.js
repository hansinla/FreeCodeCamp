/*
Drop the elements of an array (first argument),
starting from the front, until the predicate (second argument) returns true.
 */

function drop(arr, func) {
	if (arr && func && typeof(arr) === 'object' && typeof(func) === 'function'){
		while (func(arr[0])) {
			arr = arr.slice(1, arr.length);
		}
	}
  return arr;
}

debug(drop([1, 2, 3], function(n) {return n < 0; }));

/*
assert.deepEqual(drop([1, 2, 3, 4], function(n) {return n < 5; }), [], 'should return an empty array if predicate does not return true');AssertionError:should return an empty array if predicate does not return true: expected [ 1, 2, 3, 4 ] to deeply equal []
assert.deepEqual(drop([1, 2, 3], function(n) {return n < 0; }), [1, 2, 3], 'should return complete array if predicate met in first element.');AssertionError:should return complete array if predicate met in first element.: expected [ 1 ] to deeply equal [ 1, 2, 3 ]
assert.deepEqual(drop([1, 2, 3, 4], function(n) {return n < 3; }), [3, 4], 'should return remaining array');AssertionError:should return remaining array: expected [ 1, 2, 3, 4 ] to deeply equal [ 3, 4 ]
 */