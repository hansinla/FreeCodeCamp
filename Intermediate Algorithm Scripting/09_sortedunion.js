/*
Write a function that takes two or more arrays
and returns a new array of unique values in the order
of the original provided arrays.
*/

function unite(arr1, arr2, arr3) {
	var numArgs = arguments.length;
	var retArray = [];

	for (var i = 0; i < arguments.length; i++) {
		var tempArr = arguments[i];
		for (var j = 0; j < tempArr.length; j++) {
			if (retArray.indexOf(tempArr[j]) == -1) {
				retArray.push(tempArr[j]);
			}
		}
	}
  return retArray;
}

debug(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));