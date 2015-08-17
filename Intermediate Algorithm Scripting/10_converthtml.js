/*
Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.
 */

function convert(str) {
	var retStr  = "";

	var entities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"\'": "&#39;"
	};

	for (var i = 0; i < str.length; i++) {
		if ( entities[str[i]] ) {
			retStr = retStr + entities[str[i]];
		} else {
			retStr = retStr + str[i];
		}
	}


  // &colon;&rpar;
  return retStr;
}

debug(convert('Dolce & Gabbana'));