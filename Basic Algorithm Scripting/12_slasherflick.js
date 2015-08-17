/*
Return the remaining elements of an array
after chopping off n elements from the head.
*/

var slasher = function(arr, howMany) {
  // it doesn't allways pay to be first
  // 
  for (var i = 0 ; i < howMany ; i++)  {
  	arr = arr.slice(1);
  }
  return arr;
}

debug(slasher([1, 2, 3], 2));