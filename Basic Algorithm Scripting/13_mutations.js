/*
Return true if the string in the first element of the array
contains the string in the second element in any form.
 */

function mutation(arr) {
	var str1 = arr[0].toLowerCase();
	var str2 = arr[1].toLowerCase();
	for (var i = 0 ; i < str2.length ; i++){
		if (str1.indexOf(str2[i]) == -1 ) {
			return false;
		}
	}
  return true;
}

debug(mutation(['hello', 'hey']));