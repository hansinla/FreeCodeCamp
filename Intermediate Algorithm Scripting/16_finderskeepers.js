/*
Create a function that looks through an array (first argument)
and returns the first element in the array that passes a truth test (second argument).
*/

function find(arr, func) {
	if (arr && func && typeof(arr) === 'object' && typeof(func) === 'function'){
		for (var i = 0; i < arr.length; i++) {
			if (func(arr[i])) return arr[i];
		}
	}
  return undefined;
}

debug(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));