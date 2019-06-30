// Write an enqueue method that pushes an element to the tail of the queue,
// a dequeue method that removes and returns the front element, 
// a front method that lets us see the front element, 
// a size method that shows the length,
// and an isEmpty method to check if the queue is empty.
function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(newElement) {
        collection[collection.length] = newElement;
    };

    this.dequeue = function () {
        let newArr = collection[1, collection.size - 1];
        let firstElement =  collection[0];
        collection  =  newArr;
        return firstElement;
    };

    this.front = function () {
        return collection[0];
    };

    this.size = function () {
        return collection.length;
    };

    this.isEmpty = function () {
        return (collection.size === 0);
    };
    // Only change code above this line
}