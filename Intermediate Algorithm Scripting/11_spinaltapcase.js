/*
Convert a string to spinal case.
Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
	var newString = str[0];
	for (var i = 1; i < str.length; i++) {
		if( str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
			// This is an uppercase character
			// if previous character was not a spcae, insert a space.
			if (str[i-1] != " " &&  str[i-1] != "_") {
				newString = newString + " ";
			}
			newString = newString + str[i];
		} else {
			newString = newString + str[i];
		}
	}

  var retStr  = newString.toLowerCase().replace(/ /g, "-");
  return retStr.replace(/_/g, "-");
}

debug(spinalCase("The_Andy_Griffith_Show"));

/*
spinalCase('The_Andy_Griffith_Show')
spinalCase('thisIsSpinalTap')
spinalCase('This Is Spinal Tap')
 */