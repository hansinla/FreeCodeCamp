function sumFactorialDigits(n) {
    let sum = 0;
    let factorial = fact(BigInt(n));
    let factStr = factorial.toString();
    let strNumbers = factStr.split('');
    console.log(strNumbers);
    for (let i = 0; i < strNumbers.length; i++){
        sum += parseInt(strNumbers[i]);
    }
    return sum;
    
}

function fact(n) {
    if (n == BigInt(1)) return BigInt(1);
    return n * fact(BigInt(n) - BigInt(1));
};


console.log(sumFactorialDigits(100));

