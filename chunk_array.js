/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArray = []; 

   for (let i = 0; i < arr.length; i += size) {
      
       chunkedArray.push(arr.slice(i, i + size));
   }

   return chunkedArray;
};

console.log(chunk([1,3,4,5], 1))