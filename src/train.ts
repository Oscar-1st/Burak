function palindromCheck(str: string){
let reverse = str.split("").reverse().join("");
return reverse === str;
} 
console.log(palindromCheck("das"));


// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function getSquareNumbers(arr: number[]){
//     return arr.map(num => ({ number: num, square: num * num }));
// };
// let result = getSquareNumbers([1, 2, 3])
// console.log(result);

// TASK M: 4

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


//  function reverseSentence(str) {
// let words = str.split(" ");
// for(let i = 0; i < words.length; i++){
//   words[i] = words[i].split("").reverse().join("");
// }
// return words.join(" ");
// }
// result = reverseSentence("we like coding!");
// console.log(result);
// TASK L: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

