function mergeSortedArrays(arr: number[], arr2: number[]): number[] {
let result = arr.concat(arr2).sort((a, b) => a - b);
return result
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function missingNumber(num: number[]): number {
//   const i = num.length;
//   const expectedSum = (i * (i + 1)) / 2;
//   const actualSum = num.reduce((sum, n) => sum + n, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([3, 4, 1, 2, 6, 7, 0])); // 5
// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function calculate(str: string): number {
//   const numbers = str.match(/\d+/g)?.map(Number) || [];
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(calculate("1 + 3"));

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function hasProperty(obj:{ name: string, model: string }, str: string){
//   return console.log(Object.keys(obj).includes(str));
// }
// hasProperty({ name: "BMW", model: "M3" }, "model");

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// function objectToArray(obj: Record<string, any>) {
//   return Object.entries(obj).map(([key, value]) => [key, value]);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function calculateSumOfNumbers(array: any){
//     let result = array.reduce((sum: number, current: any) => {
//       if(typeof current === "number"){
//          sum += current;
//       }
//       return sum;
//     }, 0);
//     return result;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));

// function calculateSumOfNumbers(array: any){
//   let result = 0;
//   for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === "number"){
//        result += array[i];
//     }
//   }
//   return result;  
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.


// function palindromCheck(str: string){
// let reverse = str.split("").reverse().join("");
// return reverse === str;
// } 
// console.log(palindromCheck("dad"));

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

