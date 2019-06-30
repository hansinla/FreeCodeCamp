// Euler_05.js
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to n?

function smallestMult(n) {
    let smallest = n;
    while (! evenly_div(smallest, n)){
        smallest += n;
    }
    return smallest;
}

function evenly_div(x, a) {
    
    for (let i = 1; i < a; i++) {
        if ( x % i !=  0) {
            return false;
        }
    }
    return true;
}

console.log(smallestMult(20));
