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
	for (var j = 0; j < srcArray.length; j++) {
		if (values.indexOf(srcArray[j]) == -1) {
			retArray.push(srcArray[j]);
		}
	}
  return retArray;
};

debug(destroyer([1, 2, 3, 1, 2, 3], 2, 3));