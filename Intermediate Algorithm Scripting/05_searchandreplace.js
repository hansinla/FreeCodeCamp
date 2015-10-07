// function replace(str, before, after) {

// 	result = "";
// 	var res = str.split(" ");
// 	for (var i = 0; i < res.length; i++) {
// 		if (res[i] == before) {
// 			if (res[i].charCodeAt(0) < 91 ){
// 				after = after.charAt(0).toUpperCase() + after.slice(1);
// 			}

// 			res[i] = after;
// 		}
// 	}
//  	for (i = 0; i < res.length; i++) {
//  		result += res[i] + " ";
//  	}
//  	return result.slice(0, result.length - 1);
// }

// debug(replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

function replace(str, before, after) {
	return str.split(' ').map(function(word){
		debug(word);
		if (word.toLowerCase() == before.toLowerCase()){
			if (word.charCodeAt(0) < 91){
				return (after.charAt(0).toUpperCase(0) +  after.slice(1));
			} else return after;
		} else return word;
	}).join(' ');
}

// debug(replace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));
debug(replace("His name is Tom", "Tom", "john"));