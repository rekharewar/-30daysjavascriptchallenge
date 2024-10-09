class ArrayWrapper {
    constructor(arr) {
        this.arr = arr;
    }

   
    valueOf() {
        return this.arr.reduce((sum, num) => sum + num, 0);
    }
    toString() {
        return `[${this.arr.join(',')}]`;
    }
}


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);


console.log(obj1 + obj2); 

console.log(String(obj1));
console.log(String(obj2)); 
