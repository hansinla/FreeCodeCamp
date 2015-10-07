function add() {
  if(arguments.length === 1){
    if(typeof arguments[0] === "number"){
    	var firstVar = arguments[0];
      return function(num){
        if(typeof num === "number"){
          return firstVar + num;
        }
      };
    }
  } else {
    if(typeof arguments[0] === "number" && typeof arguments[1] === "number"){
      return arguments[0] + arguments[1];
    }
  }
}
//add(2)(3);
//var sum2And = add(2); return sum2And(3); // 5


debug(ad(2)(3));
