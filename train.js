function reverseSentence(str) {
let words = str.split(" ");
for(let i = 0; i < words.length; i++){
  words[i] = words[i].split("").reverse().join("");
}
return words.join(" ");
}
result = reverseSentence("we like coding!");
console.log(result);
// TASK L: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";