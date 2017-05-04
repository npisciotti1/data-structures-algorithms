// implementation #1

function quickSort(arr) {
  if(arr.length < 2) return arr;

  var left = [];
  var right = [];

  var pivotIdx = parseInt(arr.length / 2);
  var pivotVal = arr[pivotIdx];

  //remove our pivot from the array
  arr.splice(pivotIdx, 1);

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < pivotVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivotVal, quickSort(right));
}
