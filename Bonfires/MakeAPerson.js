var Person = function(firstAndLast) {
  var first;
  var last;
  var fullName;
  
  this.setFullName = function(firstAndLast){
    fullName = firstAndLast;

    var name = firstAndLast.split(" ");
    first = name[0];
    last = name[1];
  };

  this.setFullName(firstAndLast);
  
  this.getFullName = function(){
    return fullName;
  };
  
  this.setFirstName = function(firstName){
    first = firstName;
  };
  
  this.getFirstName = function(){
    return first;
  };
  
  this.setLastName = function(lastName){
    last = lastName;
  };
  
  this.getLastName = function(){
    return last;
  };
  

};

var bob = new Person('Bob Ross');
debug(bob.getFullName());

debug(bob.getFirstName());
debug(bob.getLastName());