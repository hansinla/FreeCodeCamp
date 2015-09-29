// function findLongestWord(str) {
//   var longest = 0;
//   var arr = str.split(" ");
//   for (i = 0 ; i < arr.length ; i++) {
//     if (arr[i].length > longest) {
//       longest = arr[i].length;
//     }
//   }

//   return longest;
// }

function findLongestWord(str) {
    return Math.max.apply(null, str.split(" ").map(function(word){
        return word.length;
    }));
}

debug(findLongestWord('The quick brown fox jumped over the lazy dog'));