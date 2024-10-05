/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    const map = new Map();   
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, {...map.get(obj.id), ...obj});
        } else {
            map.set(obj.id, obj);
        }
    }
    const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return joinedArray;
};
const arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
];
const arr2 = [
    { "id": 3, "x": 5 }
];

console.log(join(arr1, arr2));