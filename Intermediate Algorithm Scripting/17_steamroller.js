/*
Flatten a nested array. You must account for varying levels of nesting
 */

function steamroller(arr) {

return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
}


debug(steamroller([1, [], [3, [[4]]]]));

/*
assert.deepEqual(steamroller([1, [], [3, [[4]]]]), [1, 3, 4], 'should work with empty arrays');AssertionError:should work with empty arrays: expected [ 1, [], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 3, 4 ]
assert.deepEqual(steamroller([1, [2], [3, [[4]]]]), [1, 2, 3, 4], 'should flatten nested arrays');AssertionError:should flatten nested arrays: expected [ 1, [ 2 ], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 2, 3, 4 ]
assert.deepEqual(steamroller([[['a']], [['b']]]), ['a', 'b'], 'should flatten nested arrays');AssertionError:should flatten nested arrays: expected [ [ [ 'a' ] ], [ [ 'b' ] ] ] to deeply equal [ 'a', 'b' ]
 */