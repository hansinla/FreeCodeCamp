var end = function(str, target) {
	var compStr = str.slice( -target.length);
	// debug(compStr);

  if (compStr === target) {
  	return true;
  } else {
  	return false;
  }
}

debug(end('Bastian', 'n'));