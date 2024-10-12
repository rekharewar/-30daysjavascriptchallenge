function reverseWords(s) {
   
    let words = s.trim().split(/\s+/);
  
    words.reverse();
    return words.join(' ');
}
let s = "  the sky is   blue  ";
console.log(reverseWords(s)); 
