// Euler_04.js
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    let i = Math.pow(10, n) - 1;
    let j = i;
    let arr = [];

    for (let x = i; x > Math.pow(10, n - 1); x--) {
        for (let y = j; y > Math.pow(10, n - 1); y--) {
            if (isPalindrome(x*y)) {
                arr.push(x*y);
            } 
        }
    }
    return Math.max(...arr);
}

function isPalindrome(num) {
    let str = num.toString();
    let i = 0 ;
    let j = str.length - 1;
    while (i < j && str[i] == str[j]) {
        i += 1;
        j -= 1;
    }
    return j <= i;
}

console.log(largestPalindromeProduct(3));

