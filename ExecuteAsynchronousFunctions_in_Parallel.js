/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
       const results = [];
       let resolvedCount = 0;
       let hasRejected = false;

       functions.forEach((func, index) => {
           func()
           .then(result => {
               if (hasRejected) return;
               results[index] = result; 
               resolvedCount++;

               if (resolvedCount === functions.length) {
                   resolve(results); 
               }
           })
           .catch(error => {
               if (!hasRejected) {
                   hasRejected = true;
                   reject(error); 
               }
           });
       });

       
       if (functions.length === 0) {
           resolve([]);
       }
   });
};


 const promise = promiseAll([() => new Promise(res => res(42))])
 promise.then(console.log); // [42]
