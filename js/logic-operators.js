/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

const result = 0 && 20 && 'Hello'; //0
const result2 = 2 && 20 && 'Hello'; //Hello

// console.log(result);
// console.log(result2);

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до false, то повертається останній.

const result3 = 0 || '' || null; //null

// console.log(result3);

//* ! - інвертує правду до брехні, а брехню до правди
// console.log(!'Hello');

console.log(Boolean(0)); //false

console.log(Boolean(''));//false

console.log(Boolean(null));//false

console.log(Boolean(1)); //true

console.log(Boolean('Hello'));//true

console.log(Boolean());//false