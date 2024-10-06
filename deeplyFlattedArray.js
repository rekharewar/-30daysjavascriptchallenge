/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    function flattenHelper(array, currentDepth) {
     let result = [];   
     for (let element of array) {
       if (Array.isArray(element) && currentDepth < n) {
         result.push(...flattenHelper(element, currentDepth + 1));  // 
       } else {
         result.push(element);  
       }
     }
     return result;
   }
   return flattenHelper(arr, 0);
 };
 
 let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
 let n = 0;
 console.log(flat(arr, n)); 