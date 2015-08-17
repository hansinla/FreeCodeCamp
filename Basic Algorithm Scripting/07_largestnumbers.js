var largestOfFour = function(arr) {
	var largestNumbers = [];

	for (var i = 0; i < arr.length; i++) {

		var tempArray = arr[i];
		var max = 0;
		
		for (var j = 0; j < tempArray.length; j++) {
			if (tempArray[j] > max) {
				max = tempArray[j];
			}
		}
		largestNumbers.push(max);
	}

  return largestNumbers;
}



debug(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));