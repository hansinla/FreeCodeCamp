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
    return primes.reduce(function(a, b){
        return a+b ;
    });

}

debug(sumPrimes(10000));