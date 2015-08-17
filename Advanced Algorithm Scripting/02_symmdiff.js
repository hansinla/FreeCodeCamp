
// Create a function that takes two or more arrays
// and returns an array of the symmetric difference
// of the provided arrays.

Array.prototype.unique = function() {
    var self = this;
    var _a = this.concat().sort();
    _a.sort(function(a,b){
        if(a == b){
            var n = self.indexOf(a);
            self.splice(n,1);
        }
    });
    return self;
};

Array.prototype.diff = function(a){
  return this.filter(function(i){
    return a.indexOf(i) < 0;
  });
};


function sym(x) {
	args = Array.prototype.slice.call(arguments);
	args = args.map(function(anArray){
		return anArray.unique();
	});
	return args.reduce(function(arr1, arr2){
		return arr1.diff(arr2).concat(arr2.diff(arr1));
	});
};

//debug(sym([1, 2, 3], [5, 2, 1, 4]));
//debug(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5], [1, 4, 5]));
//should return an array to deeply equal [ 1, 4, 5 ]


//debug(sym([1, 1], [1]));
/*
assert.deepEqual(sym([1, 1]), [1], 'should return an array of unique values');AssertionError:should return an array of unique values: expected [] to deeply equal [ 1 ]
assert.deepEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], 'should return an array of unique values');AssertionError:should return an array of unique values: expected [] to deeply equal [ 1, 4, 5 ]
assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], 'should return the symmetric difference of the given arrays');AssertionError:should return the symmetric difference of the given arrays: expected [] to deeply equal [ 1, 4, 5 ]
*/