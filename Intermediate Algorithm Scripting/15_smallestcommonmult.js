/*
Find the smallest number that evenly divides all numbers in the provided range.
The range will be an array of two numbers that will not necessarily be in numerical order.
 */

/*
The easiest way to get the least common multiple of numbers  n_{1}, n_{2}, n_{3},...,n_{i}
is to express them as a product of prime numbers (factorize them).
If we multiply together all prime numbers used in these products in their highest power,
we get the least common multiple.

Example

Find the least common multiple of 6, 8, 15.

6 = 2*3 = 2^1 * 3^1
8 = 2*2*2 = 2^3
15 = 5*3 = 5^1 * 3^1
lcm(6, 8, 15) = 2^3 * 3^1 * 5^1 = 120
 */

function smallestCommons(arr) {
	// Method using a table
	var lcmArray = [1], range = [], notDone = false, multiplier = 1;
	var denominator = 2, controlCounter;

	// undefined for zero so check for 0
	if (arr.indexOf(0) != -1) return 0;

	// sort the numbers in array
	arr.sort(function (a, b) { return a - b; });

	for (var i = arr[1] ; i >= arr[0] ; i--) {
		range.push(i);
	}	
	
	do {
		do {
			controlCounter = 0;
			for ( i = 0; i < range.length; i++) {
				if (range[i] % denominator === 0) {
					range[i] = range[i] / denominator;
					notDone = true;
				} else {
					controlCounter++;
				}
			} 
			if (notDone) lcmArray.push(denominator);
			notDone = false;
		} while (controlCounter < range.length)
		denominator++;
	} while (range.reduce(function (a, b) { return a * b }, 1) > 1); ////check for all ones

	// multiply values in lcmArray to get LCM
	var LCM = 1;
	for (i = 0 ; i <  lcmArray.length ; i++) {
		LCM *= lcmArray[i];
	}
	
	return LCM;
}


debug(smallestCommons([1,13]));