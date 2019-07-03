function nthPrime(max) {
    let n = max * 11; //we want the maxth element, so array must be way bigger
    let sieve = new Array(n).fill(true); //fill array of half size with true
    for (let i = 2; i < Math.sqrt(n); i++ ) {
        if (sieve[i]) { // If the number is labelled a prime then we can start at i^2
                        // and mark every multiple of i
                        // from there as NOT a prime
            for (let j = Math.pow(i, 2); j < n; j += i) {
                sieve[j] = false;
            }
        }
    }
    // Now we can reduce our sieve to only the Prime indexes that are true
    // let result = sieve.reduce(){
    let result = sieve.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
            primes.push(i)
        }
        return primes
    }, []);

    return result[max - 1];
}

console.log(nthPrime(10001));