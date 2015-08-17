function pair(str) {

	var resultArray = new Array(str.length);

	for (var i = 0; i < str.length; i++) {
		if (str[i] == 'A') {
			resultArray[i] = ['A','T'];
		} else if (str[i] == 'T') {
			resultArray[i] = ['T','A'];
		} else if (str[i] == 'G') {
			resultArray[i] = ['G','C'];
		} else if (str[i] == 'C') {
			resultArray[i] = ['C','G'];
		}
	}
 return resultArray;
}

debug(pair("GCG"));

 