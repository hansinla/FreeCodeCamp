// var titleCase = function(str) {
//   var retStr = "";
//   str = str.toLowerCase();
//   var arr = str.split(" ");
//   var word = "";
  
//   for (i = 0 ; i < arr.length ; i++) {
//     var newWord = "";

//     word = arr[i];
//     //debug(word);

//     newWord = newWord + String.fromCharCode(word.charCodeAt(0)-32);
//     for (j = 1 ; j < word.length ; j++ ) {
//       newWord = newWord + word[j];
//     }
//     //debug(newWord);

//     retStr = retStr + newWord;
//     if (i < arr.length -1 ) {
//       retStr = retStr + " ";
//     }

//   }
//   //debug(retStr);
//   return retStr;

// }

debug(titleCase("I'm a little tea pot")); 

function titleCase(str) {
  return str.replace(/(^([a-z]))|\s([a-z])/g, function(arg) {
    return arg.toUpperCase();
  });
}