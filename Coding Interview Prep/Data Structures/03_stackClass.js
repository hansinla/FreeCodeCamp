function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.peek = function(){
        return collection[collection.length - 1];
    };

    this.isEmpty = function (){
        return (collection.length == 0);
    };

    this.clear = function() {
        collection = [];
    };

    this.push = function(element){
        collection[collection.length] = element;
    };

    this.pop = function() {
        let len = collection.length;
        var lastItem = collection[len - 1];
        let newArr = [];
        for (let i = 0; i < len - 1; i++) {
            newArr[i] = collection[i];
        }
        collection = newArr;
        return lastItem;
    };
    // Only change code above this line
}

var myStack = new Stack;
myStack.print();
myStack.push(25);
myStack.print();
myStack.push(27);
myStack.print();
console.log(myStack.peek());
myStack.push(29);
myStack.print();
console.log(myStack.pop());
myStack.print();