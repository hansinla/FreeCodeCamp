/*
Using the JavaScript language, have the function ABCheck(str) take the str parameter
being passed and return the string true if the characters a and b are separated by
exactly 3 places anywhere in the string at least once
(ie. "lane borrowed" would result in true because there is exactly three characters
between a and b). Otherwise return the string false. 
 */

function ABCheck(str) {

	for (var i = 0; i < str.length - 4; i++) {
		if (str[i] === 'a' && str[i + 4] === 'b') return "true";
		if (str[i] === 'b' && str[i + 4] === 'a') return "true";
	};

  // code goes here  
  return "false"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());   