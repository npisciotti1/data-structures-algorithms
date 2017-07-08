// Where a bubble sort relies on a number of small swaps, insertion sort relies on
// inserting a single element in the right for a given iteration. Every iteration
// through the collection leaves a greater segment sorted.

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
