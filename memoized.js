
function memoize(fn) {    
    const cache = {}; 
let callCount = 0;
const memoizedFn = (...args) => {       
    const key = args.join(',');    
    if (!cache.hasOwnProperty(key)) {
        cache[key] = fn(...args);  
        callCount++;  
    }
    return cache[key];
};
memoizedFn.getCallCount = () => callCount;
return memoizedFn;
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
return a + b;
})
memoizedFn(2, 3) 
memoizedFn(2, 3) 
console.log(callCount) 