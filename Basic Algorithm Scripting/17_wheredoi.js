/*
Return the lowest index at which a value (second argument)
should be inserted into a sorted array (first argument).
*/

var where = function(arr, num) {
	// Find my place in this sorted array.

	var insertion = 0;
	for (var i = 0; i < arr.length; i++) {
		if (num == arr[i]) return i;
		if (num < arr[i] && i === 0) {
			return 0;
		}
		if (arr[i] < num && arr[i+1] > num) {
			return (i + 1);
		}
	}

	return arr.length;
};

debug(where([40, 60], 50));