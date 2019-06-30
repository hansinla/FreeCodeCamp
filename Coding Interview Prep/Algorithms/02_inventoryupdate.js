// Compare and update inventory stored in a 2d array
// against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found,
// add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var newItem = '', newItemCount = 0;
      arr2.forEach(function(item){
        var notFound = true;
        newItem = item[1];
        newItemCount = item[0];
        for (var i = 0; i < arr1.length; i++)
          if (arr1[i][1] == newItem) {
                arr1[i][0] += newItemCount;
                notFound = false;
              }
        if (notFound) {
          arr1.push(item);
        }
        });

      sortArray(arr1);
  return arr1;
}


function sortArray(inventArray) {
    // sort the cahnnels in alphabetical order
    inventArray.sort(function(a, b) {
        if (a[1].toLowerCase() > b[1].toLowerCase()) {
            return 1;
        }
        if (a[1].toLowerCase() < b[1].toLowerCase()) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    return inventArray;
}



// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);


