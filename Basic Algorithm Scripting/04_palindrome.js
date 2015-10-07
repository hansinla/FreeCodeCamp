// function palindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z]/g, "");
//   var revStr = str.split('').reverse().join('');
//   if (revStr == str) return true;
//   return false;
// }

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z^0-9]/g, "");
  return (str == str.split('').reverse().join(''));
}


debug(palindrome("eye"));