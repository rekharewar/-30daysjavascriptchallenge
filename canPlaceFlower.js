function canPlaceFlowers(flowerbed, n) {
    let size = flowerbed.length;
    
    for (let i = 0; i < size; i++) {
        if (flowerbed[i] === 0) {
      
            let emptyPrev = (i === 0 || flowerbed[i - 1] === 0);
            let emptyNext = (i === size - 1 || flowerbed[i + 1] === 0);
            
            if (emptyPrev && emptyNext) {
               
                flowerbed[i] = 1;
                n--;  
                if (n === 0) {
                    return true;
                }
            }
        }
    }
    
   
    return n <= 0;
}


let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

console.log(canPlaceFlowers(flowerbed, n));  
