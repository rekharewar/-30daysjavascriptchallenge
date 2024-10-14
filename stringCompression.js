/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0; 
    let i = 0;      

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }
        chars[write] = char;
        write++;
        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[write] = c;
                write++;
            }
        }
    }
    return write;
};
let chars = ["a","a","b","b","c","c","c"]
console.log(compress(chars))