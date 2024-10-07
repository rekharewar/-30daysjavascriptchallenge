/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item))  
            .filter(Boolean);                 
    } 
    else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj)
            .reduce((result, key) => {
                const value = compactObject(obj[key]);
                if (Boolean(value)) {          
                    result[key] = value;
                }
                return result;
            }, {});
    }
    return obj;

};
console.log(compactObject([null, 0, false, 1])); 