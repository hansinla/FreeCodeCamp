function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/g, "");
  
  revStr = "";
  for (i = str.length - 1; i >= 0 ; i--){
    revStr = revStr + str[i];
  }
  if (revStr == str) {
      return true;
  } else {
      return false;
  }
}



palindrome("eye");