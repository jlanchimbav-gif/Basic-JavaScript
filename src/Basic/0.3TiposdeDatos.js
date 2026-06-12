//Datos primitivos en JavaScript //

// String: texto encerrado entre comillas //


let name = "Alejandro";
let Alias= "Jaguar Dev"
let Email="jlanchimbav@unemi.edu.ec"
console.log(typeof name, typeof Alias, typeof Email);

// Number: números enteros o decimales //
let age = 27;
let height = 1.75;
console.log(typeof age, typeof height);

// Boolean: true o false //
let isStudent = true;
let hasGraduated = false;
console.log(typeof isStudent, typeof hasGraduated);

//undefined: variable declarada pero sin valor asignado //
let undefinedVariable;
console.log(typeof  undefinedVariable); // Output: undefined

//null: ausencia intencional de valor //
let nullVariable = null;
console.log(typeof nullVariable); // Output: object (esto es un error histórico en JavaScript)          

// Symbol: valor único e inmutable //
let symbol1 = Symbol("unique");
let symbol2 = Symbol("unique");
console.log(typeof symbol1, typeof symbol2); // Output: symbol symbol
console.log(symbol1 === symbol2); // Output: false

// BigInt: números enteros grandes //
let bigInt = 1234567890123456789012345678901234567890n;
let bigInt = (1234567890123456789012345678901234567890n);
console.log(typeof bigInt); // Output: bigint