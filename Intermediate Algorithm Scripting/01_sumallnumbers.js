/*
We'll pass you an array of two numbers.
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  var lowest = arr[0];
  var highest = arr[1];
	if (arr[0] > arr[1]){
		lowest = arr[1];
		highest = arr[0];
	}
	var sum = 0;
	for (var i = lowest; i <= highest; i++) {
		sum += i;
	}
	return(sum);
}

debug(sumAll([10, 5]));