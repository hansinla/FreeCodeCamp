var permutations = [];

function permAlone(str) {
  if (quicktest(str)) return 0;
  var total = [];
  doPerm(str, []);
  permutations.forEach(function(item){
    var unique = true;
    for (var i = 0; i < item.length - 1; i++) {
      if (item[i] == item[i + 1]) unique = false;
    }
    if (unique) total.push(item);

  });
  return total.length;
}

function doPerm(str, arr) {
    if (typeof (str) == 'string') str = str.split('');
    if (str.length === 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        doPerm(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }
}

function quicktest(str){
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] != str[i+1]) return false;
  }
  return true;
}

debug(permAlone('aab'));