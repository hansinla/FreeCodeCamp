// Euler_03.js
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function largestPrimeFactor(n) {
    let factor_list = [];
    let i = 2;
    while ( n > 1){
        while (n % i === 0) {
            factor_list.push(i);
            n /= i;
        }
        i += 1;
    }
    return factor_list.pop();
}

console.log(largestPrimeFactor(13195));