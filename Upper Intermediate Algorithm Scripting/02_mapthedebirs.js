function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;

	var resultArray = [];

	for (var index in arr){
		var a = earthRadius + arr[index].avgAlt;
		var T = 2 * Math.PI * Math.sqrt((a * a * a) / GM);
		var result = Math.round(T);
		resultArray.push({name: arr[index].name, orbitalPeriod : result});

	}

	return resultArray;
}


var answer = orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
debug(answer.name);