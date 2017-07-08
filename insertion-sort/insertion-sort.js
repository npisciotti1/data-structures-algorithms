// Where a bubble sort relies on a number of small swaps, insertion sort relies on
// inserting a single element in the right for a given iteration. Every iteration
// through the collection leaves a greater segment sorted.

function insertionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
