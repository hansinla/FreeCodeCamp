/*
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a multidimensional array.
*/

// function chunk(arr, size) {
// 	var multiDimArray = [];
// 	var counter = 0;
// 	var tempArray = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		tempArray.push(arr[i]);
// 		counter++;
// 		//debug(tempArray);
// 		if (counter == size) {
// 			multiDimArray.push(tempArray);
// 			tempArray = [];
// 			counter = 0;
// 		}
// 	}
// 	if (counter > 0) {
// 		multiDimArray.push(tempArray);
// 	}
// 	return multiDimArray;
// }

// debug(chunk([0, 1, 2, 3, 4, 5], 4));


// function chunk(arr, size) {
// 	var retArray = [];
// 	while (arr.length){
// 		var tempArr = [];
// 		for (var i = 0; i < size &&  arr.length; i++) {
// 			tempArr.push(arr.shift());
// 		}
// 		retArray.push(tempArr);
// 	}
// 	return retArray;
// }

// debug(chunk([0, 1, 2, 3, 4, 5], 4));

function chunk(arr, size) {
	var retArray = [];
	while (arr.length){
		retArray.push(arr.splice(0,(size < arr.length ? size : arr.length)));
	}
	return retArray;
}

debug(chunk([0, 1, 2, 3, 4, 5], 4));