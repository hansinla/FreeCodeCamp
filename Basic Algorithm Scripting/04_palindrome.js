function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  var revStr = str.split('').reverse().join('');
  if (revStr == str) return true;
  return false;
}

debug(palindrome("eye"));