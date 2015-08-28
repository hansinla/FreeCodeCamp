/*
Return the remaining elements of an array
after chopping off n elements from the head.
*/
var slasher = function(arr, howMany) {
 for (var i = 0 ; i < howMany ; i++)  {
  	arr.shift();
  }
  return arr;
};

debug(slasher([1, 2, 3], 2));