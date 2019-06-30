// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits n!

function sumFactorialDigits(n) {
    let fact = factorial(n);
    console.log(fact);
    return n;
}

function factorial(n) {
    let fact = 1;
    while (n > 1){
        fact = fact * n;
        n--;
    }
    return fact;
}

sumFactorialDigits(10);