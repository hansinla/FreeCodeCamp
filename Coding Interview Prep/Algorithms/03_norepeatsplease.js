// Return the number of total permutations of the provided string
// that don't have repeated consecutive letters.
//
// For example, 'aab' should return 2 because it has 6 total permutations,
// but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
  var perms = permutations(str);
  perms = perms.filter(function(perm){
      for (var i = 0; i < perm.length - 1; i++) {
        if (perm[i] == perm[i+1]) {return false;}
      }
      return true;
  });
  return perms.length;
}

function permutations(str){
  var arr = str.split(''),
      len = arr.length, 
      perms = [],
      rest,
      picked,
      restPerms,
      next;

      if (len === 0)
          return [str];

      for (var i=0; i<len; i++)
      {
          rest = Object.create(arr);
          picked = rest.splice(i, 1);

          restPerms = permutations(rest.join(''));

         for (var j=0, jLen = restPerms.length; j< jLen; j++)
         {
             next = picked.concat(restPerms[j]);
             perms.push(next.join(''));
         }
      }
   return perms;
}


debug(permAlone('zzzzzzzz'));