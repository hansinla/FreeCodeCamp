/*
Sum all the prime numbers up to and including the provided number.
 */

function sumPrimes(num) {
	// use Erasthothenes sieve
	var sieve = [];
	var primes = [];

    for (var i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (var j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }

    // sum of primes
    var sum = 0;
    for (i = 0; i < primes.length; i++) {
    	sum += primes[i];
    }
    return sum;
}

debug(sumPrimes(10));

