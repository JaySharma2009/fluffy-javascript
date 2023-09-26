// in this file we willl learn about convertion operation in javascript
//we can convert one data type to another data type in javascript
// for example we can convert a number to string or string to number
// we can convert boolean to string or string to boolean
// we can convert number to boolean or boolean to number
// we can convert number to bigint or bigint to number
// we can convert number to symbol or symbol to number
// we can convert number to object or object to number
// we can convert number to undefined or undefined to number
 
let num = "10";
console.log(typeof num); // string
let num1 = Number(num);
console.log(typeof num1); // number

// if we convert a string to number and if the string is not a valid number then it will return NaN
let num2 = Number("hello");
console.log(num2); // NaN
console.log(typeof num2); // number

// if we convert a bollean to number then true will be converted to 1 and false will be converted to 0
let num3 = Number(true);
console.log(num3); // 1
let num4 = Number(false);
console.log(num4); // 0

// we can also convert all the data types to diff.data types using the below methods
// String() will convert everything into string
// Number() will convert everything into number
// Boolean() "" => false, "hello" => true, 0 => false, 1 => true, NaN => false, null => false, undefined => false
// BigInt()  
// Symbol() 
// Object()
// undefined()
// null()


// ***************************** operations *********************************//

/*

+ 
-
*
/
%

*/