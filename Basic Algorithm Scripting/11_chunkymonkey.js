/*
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a multidimensional array.
*/

function chunk(arr, size) {
	var multiDimArray = [];
	var counter = 0;
	var tempArray = [];

	for (var i = 0; i < arr.length; i++) {
		tempArray.push(arr[i]);
		counter++;
		//debug(tempArray);
		if (counter == size) {
			multiDimArray.push(tempArray);
			tempArray = [];
			counter = 0;
		}
	}
	if (counter > 0) {
		multiDimArray.push(tempArray);
	}
	return multiDimArray;
}

debug(chunk([0, 1, 2, 3, 4, 5], 4));