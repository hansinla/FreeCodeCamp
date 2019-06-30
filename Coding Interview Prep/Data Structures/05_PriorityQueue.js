// You will need to add an enqueue method for adding items with a priority,
// a dequeue method for removing items, 
// a size method to return the number of items in the queue,
// a front method to return the element at the front of the queue,
// and finally an isEmpty method that will return true if the queue is empty or false if it is not.

// The enqueue should accept items with the format (['human', 1]) where 1 represents the priority.
// The dequeue should return only the current item, not its priority.

function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (element) {
        let index =  this.size();
        this.collection[index] = element;
    };

    this.dequeue = function () {

    };

    this.front = function () {
        return this.collection[0][0];
    };

    this.size = function () {
        return this.collection.length;
    };

    this.isEmpty = function () {
        return (this.size() === 0);
    };
    // Only change code above this line
}

let myCue = new PriorityQueue;
myCue.printCollection();
console.log(myCue.size());
console.log(myCue.isEmpty());
let temp = ["human", 1];
myCue.enqueue(temp);
console.log(myCue.front());