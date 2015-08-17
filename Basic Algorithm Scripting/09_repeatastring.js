var repeat = function(str, num) {
	var retStr = "";
	if (num <= 0) {
		return "";
	} else {

		for (var i = 0 ; i < num ; i++) {
			retStr = retStr + str;
		}

	}

	return retStr;

}

debug(repeat('abc', 3));