/*
Return the sum of all the indexes of elements that can be added to another element
of the first array and equal the target provided in the second argument.

For example, pairwise([1, 4, 2, 3, 0, 5], 5) should return 15 because every element
can be paired with another element to equal 5.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements
can be paired to equal 4, and the first element has an index of 0!

Once an element has been used it cannot be reused to pair with another.
 */

function pairwise(arr, arg) {
	var usedArray = [];
	var indexSum = 0;
	testArr = arr.slice(0);

	for (var i = 0; i < arr.length; i++) {
		var firstVal = arr[i];
		for (var j = i + 1; j < arr.length; j++) {
			if (firstVal + arr[j] == arg){
				//test if these values have been used before
				if (usedArray.indexOf(i) == -1 &&  usedArray.indexOf(j) == -1 ) {
					indexSum += i + j;
					usedArray.push(i);
					usedArray.push(j);
					//debug(usedArray);
					//debug(indexSum);
				}
			}
		}
	}
  return indexSum;
}

debug(pairwise([1,4,2,3,0,5], 5));