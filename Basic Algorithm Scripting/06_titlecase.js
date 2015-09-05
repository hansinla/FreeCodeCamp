// function titleCase(str) {
//   return str.replace(/(^([a-z]))|\s([a-z])/g, function(arg) {
//     return arg.toUpperCase();
//   });
// }

// debug(titleCase("I'm a little tea pot")); 

function titleCase(str) {
	return str.split(' ').map(function(word){
		return word[0].toUpperCase() + word.slice(1);
	}).join(' ');
}

debug(titleCase("I'm a little tea pot")); 