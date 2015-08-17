/*
Remove all values (last argument(s))
from an array (first argument)
and return as a new array.
*/


var destroyer = function(arr) {
	var srcArray = arguments[0]; //special pseudo array in JS functions
	var values = [];
	var retArray = [];
	for (var i = 1; i < arr.length; i++) {
		if (arguments[i]) values.push(arguments[i]);
	}
	for (var i = 0; i < srcArray.length; i++) {
		if (values.indexOf(srcArray[i]) == -1) {
			retArray.push(srcArray[i]);
		}
	}
  return retArray;
}

debug(destroyer([1, 2, 3, 1, 2, 3], 2, 3));