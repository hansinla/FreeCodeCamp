/*
Compare two arrays and return a new array
with any items not found in both of the original arrays.
*/

function diff(arr1, arr2) {
  var newArr = [];
  var a = [];

  for (var i = 0; i < arr1.length; i++) {
  	a.push(arr1[i]);
  }

  for ( i = 0; i < arr2.length; i++) {
  	a.push(arr2[i]);
  }


  for ( i = 0; i < a.length; i++) {
  	if (arr1.indexOf(a[i]) > -1 && arr2.indexOf(a[i]) > -1 ) {
  		debug(a[i]);
  	} else {
  		newArr.push(a[i]);
  	}
  }

  return newArr;
}


//debug(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
debug(diff([], [1, 3, 5]));
