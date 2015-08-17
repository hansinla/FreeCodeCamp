/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
 */

function binaryAgent(str) {
	var retStr = "";
	var wordArray =  str.split(" ");
	// turn each word into a decimal value
	for (var i = 0; i < wordArray.length; i++) {
		var binaryWord = wordArray[i];
		var wordValue = 0;
		var decimalValue = 1;
		for (var j = binaryWord.length -1 ; j >= 0; j-- ) {
			wordValue += binaryWord[j] * decimalValue;
			decimalValue *= 2;
		};
		retStr += (String.fromCharCode(wordValue));
	};
  return retStr;
}

debug(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'));