// var largestOfFour = function(arr) {
// 	var largestNumbers = [];
// 	arr.forEach(function(values){
// 		largestNumbers.push(Math.max.apply(null, values));
// 	});
// 	return largestNumbers;
// };

var largestOfFour = function(arr) {
	return arr.map(function(values){
		return (Math.max.apply(null, values));
	});
};

debug(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));