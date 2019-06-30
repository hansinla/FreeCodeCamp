function bubbleSort(array) {
  // change code below this line
  for (let i = 0; i < array.length; i++)
  {
    for (let j = i; j < array.length; j++){
      if (array[i] > array[j]){
        let a = array[j];
        array[j] = array[i];
        array[i] = a;
      }
    }
  }
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]