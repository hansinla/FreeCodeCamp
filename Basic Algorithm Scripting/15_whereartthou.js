/*
Make a function that looks through a list (first argument)
and returns an array of all objects that have equivalent property 
values (second argument).
*/

var where = function(collection, source) {
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
  	var thisObject = collection[i];
  	for (key in thisObject) {
  		if (thisObject[key] == source[key]){
  			arr.push(thisObject);
  		}
  	}
  }
  return arr;
}

debug(where([{ first: 'Romeo', last: 'Montague' }, 
	{ first: 'Mercutio', last: null }, 
	{ first: 'Tybalt', last: 'Capulet' }], 
	{ last: 'Capulet' }));