//This implementation isn't mine, I cloned it from: https://github.com/escherba/algorithms-in-javascript

//I'll be working to understand some of what's going on here, specifically JS's bitwise operators and the efficiency reasons for doing so.

aij.quickmiddleSort = (function(){
    /*jshint bitwise: false*/
    "use strict";

    /**
    * Quicksort algorithm. It's with complexity O(n log(n)).
    * In this version of quicksort I use the middle element of the
    * array for pivot.
    */


    /**
    * Quicksort algorithm
    *
    * @public
    * @param {array} array Array which should be sorted.
    * @return {array} Sorted array.
    */

    /**
    * Partitions the array in two parts by the middle elements.
    * All elemnts which are less than the chosen one goes left from it
    * all which are greater goes right from it.
    *
    * @param {array} array Array which should be partitioned
    * @param {number} left Left part of the array
    * @param {number} right Right part of the array
    * @return {number}
    */
    function partition(array, left, right) {
        var pivot = array[(left + right) >>> 1];
        while (left <= right) {
            while (array[left] < pivot) { left++; }
            while (array[right] > pivot) { right--; }
            if (left <= right) {
                var temp = array[left];
                array[left++] = array[right];
                array[right--] = temp;
            }
        }
        return left;
    }

    /**
    * Recursively calls itself with different values for
    * left/right part of the array which should be processed
    *
    * @private
    * @param {array} array Array which should be processed
    * @param {number} left Left part of the array which should be processed
    * @param {number} right Right part of the array which should be processed
    */
    function quicksort(array, left, right) {
        var mid = partition(array, left, right);
        if (left < mid - 1) {
            quicksort(array, left, mid - 1);
        }
        if (right > mid) {
            quicksort(array, mid, right);
        }
    }

    /**
    * Quicksort's initial point
    * @public
    */
    return function (items) {
        quicksort(items, 0, items.length - 1);
        return items;
    };

}());
