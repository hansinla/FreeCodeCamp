var truncate  = function(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
  	return str;
  } else {
  	str = str.slice(0, num-3);
	return str + "...";
	}
};

debug(truncate('A-tisket a-tasket A green and yellow basket', 11));