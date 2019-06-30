function selectionSort(array) {
    // change code below this line

    for (let i = 0; i < array.length; i++) {
        var min = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp =  array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    // change code above this line
    return array;
}

let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(selectionSort(array));
// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]