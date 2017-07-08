// Where a bubble sort relies on a number of small swaps, insertion sort relies on
// inserting a single element in the right for a given iteration. Every iteration
// through the collection leaves a greater segment sorted.

function sort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
};
