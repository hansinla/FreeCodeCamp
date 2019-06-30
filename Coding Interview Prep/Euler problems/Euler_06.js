function sumSquareDifference(n) {
  // Good luck!
  return Math.abs(sum_squared(n) - squared_sum(n));
}

function sum_squared(n){
  let arr = [];
  for (let x = 0; x <= n; x++){
    arr[x] = x*x;
  }
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}

function squared_sum(n) {
  let arr = [];
  for (let x = 0; x <= n; x++) {
    arr[x] = x;
  }
  let sum =  arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return sum * sum;
}

console.log(sumSquareDifference(20));