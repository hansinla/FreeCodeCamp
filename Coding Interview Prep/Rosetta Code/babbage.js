// Implement a function to return the lowest integer that satisfies the Babbage problem.
// That is last digits are 269696
// If Babbage was right, return Babbage's number.
// 99,736

function babbage(babbageNum, endDigits) {
    // Good luck!
    let start = parseInt(Math.sqrt(endDigits));
    // console.log(start);
    while (((start * start) % 1000000) != endDigits) {
        start += 1;
    }
    return start;
}

console.log(babbage(99736, 269696));