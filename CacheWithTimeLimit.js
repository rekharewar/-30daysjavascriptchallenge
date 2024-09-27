var TimeLimitedCache = function() {
    this.cache = new Map(); 
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now(); 
    const existingEntry = this.cache.get(key); 
    if (existingEntry && existingEntry.expiry > currentTime) {
        this.cache.set(key, { value, expiry: currentTime + duration }); 
        return true; 
    }

    
    this.cache.set(key, { value, expiry: currentTime + duration });
    return false; 
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now(); 
    const entry = this.cache.get(key); 

    
    if (!entry || entry.expiry <= currentTime) {
        return -1; 
    }

    return entry.value; 
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now(); 
    let validKeysCount = 0;

   
    for (const entry of this.cache.values()) {
        if (entry.expiry > currentTime) {
            validKeysCount++;
        }
    }

    return validKeysCount;
};
