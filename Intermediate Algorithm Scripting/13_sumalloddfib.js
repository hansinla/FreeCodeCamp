/*
Return the sum of all odd Fibonacci numbers
up to and including the passed number
if it is a Fibonacci number.
 */

function sumFibs(num) {
	if (num === 0) {
		return 0;
	}

	var fibArr = [0, 1];
	var sum = 0;

	for (var i = 2; i <= num + 1; i++) {
		fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
	}
	for ( i = 0; i < fibArr.length; i++) {
		if (fibArr[i] % 2 && fibArr[i] <= num) {
			sum += fibArr[i];
		}
	}
  return sum;
}

debug(sumFibs(100));