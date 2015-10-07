/*
Drop the elements of an array (first argument),
starting from the front, until the predicate (second argument) returns true.
 */

function drop(arr, func) {
		while (!func(arr[0]) && arr.length >= 1) {
			arr.shift();
		}
  return arr;
}

debug(drop([1, 2, 3], function(n) {return n < 0; }));


/*
drop([1, 2, 3, 4], function(n) {return n>= 3;}) should return [3, 4].
drop([1, 2, 3], function(n) {return n > 0; }) should return [1, 2, 3].
drop([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
drop([1, 2, 3, 7, 4], function(n) {return n>= 3}) should return [7, 4]
*/