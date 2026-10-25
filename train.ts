function sumEvens(arr: number[]): number{
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      count+= arr[i]
    }
  }
  return count
}
console.log(sumEvens([1, 2, 3]));
console.log(sumEvens([1, 2, 3, 2]));
// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const result: number[] = [];

//   for(let value of arr1){
//     if(arr2.includes(value)){
//       result.push(value);
//     }
//   }

//   return result;
// }
// console.log( findIntersection([1,2,3], [3,2,0]));
// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.
// function countOccurrences(object: object, str: string): number {
//   let count = 0;
//   for (const [key, value] of Object.entries(object)) {
//     if (key === str) count++;

//     if (typeof value === "object" && value !== null) {
//       count += countOccurrences(value, str);
//     }
//   }
//   return count;
// }
// const result = countOccurrences(
//   { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//   "model",
// );
// console.log(result);
// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
// function chunkArray(array: number[], size: number) {
//   const chunk = [];

//   for (let i = 0; i < array.length; i += size) {
//     chunk.push(array.slice(i, i + size));
//   }
//   return chunk;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
// function countChars(str: string): Record<string, number> {
//   const obj: Record<string, number> = {};

//   for (const char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   return obj;
// }

// console.log(countChars("hello"));
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function sumOdds(num: number): number {
//   let count = 0;
//   for(let i = 0; i < num; i++ ){
//     if(i % 2 !== 0){
//       count++
//     }
//   }
//   return count
// }
// console.log(sumOdds(9)); // 4
// console.log(sumOdds(11)); // 5
// console.log(sumOdds(12));
// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// function mergeSortedArrays(arr: number[], arr2: number[]): number[] {
// let result = arr.concat(arr2).sort((a, b) => a - b);
// return result
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

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
