var repeat = function(str, num) {
	var retStr = "";
	for (var i = 0 ; i < num ; i++) {
			retStr = retStr + str;
		}
	return retStr;
};

debug(repeat('abc', 3));