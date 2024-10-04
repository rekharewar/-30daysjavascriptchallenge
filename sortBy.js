/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};


console.log(sortBy([1, 2, 3, 4, 2, 3, 1], (x) => x));