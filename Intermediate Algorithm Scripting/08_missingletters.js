/*
Find the missing letter in the passed letter range
and return it.
If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
	var x;
	var startCharVal = str.charCodeAt(0);
	var endCharVal = str.charCodeAt(str.length-1);

	if (startCharVal < endCharVal) {
		for (var i = 0 ; i < str.length-1 ; i++ ) {
			if (str.charCodeAt(i) + 1 != str.charCodeAt(i + 1)) {
				return (String.fromCharCode(str.charCodeAt(i)+1));
			}
		}
	}
  return undefined;
}

debug(fearNotLetter('abce'));