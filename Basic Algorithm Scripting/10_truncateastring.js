var truncate  = function(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) { return str; }
  else {return str.slice(0, num-3) + "...";}
};

debug(truncate('A-tisket a-tasket A green and yellow basket', 11));