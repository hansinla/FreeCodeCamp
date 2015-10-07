function translate(str) {

	vowelArray = ["a", "e", "i", "o", "u"];
	if (vowelArray.indexOf(str.substr(0,1)) == -1) {
		
		for (var i = 0; i < str.length; i++) {
			if (vowelArray.indexOf(str.substr(i,1)) != -1) {
				return ( str.substr(i) + str.substr(0,i) + "ay");

			}
		}

	} else {
		return (str + "way");
	}

 return str;
}

//debug(translate("california"));
debug(translate("glove"));