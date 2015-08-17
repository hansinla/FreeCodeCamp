function simplemode(arr){
	var mode = -1;
	var max = 1;
	var hash = {};

	for (var i = 0; i < arr.length; i++) {
		num = hash[arr[i]] ? hash[arr[i]] + 1 : 1;
		hash[arr[i]] = num;
	}

	for (item in hash){
		if (hash[item] > max){
			max = hash[item];
			mode = item;
		}
	}

	return mode;
}

debug(simplemode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 4, 8, 8, 8, 8, 8]));