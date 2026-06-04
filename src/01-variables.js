// ============================================
// 01 - VARIABLES Y TIPOS DE DATOS
// ============================================

// VAR - No recomendado (antiguo)
var nombre = "Juan";
console.log("var:", nombre);

// LET - Para variables que cambian
let edad = 25;
edad = 26; // Permite reasignación
console.log("let edad:", edad);

// CONST - Para constantes (no cambiar)
const PI = 3.14159;
console.log("const PI:", PI);
// PI = 3.14; // ❌ Error: No se puede reasignar

// ============================================
// TIPOS DE DATOS
// ============================================

// 1. String (texto)
const texto = "Hola, JavaScript";
const comilla = 'También con comilla simple';
const template = `Usando backticks ${nombre}`; // Template literals
console.log(template);

// 2. Number (números)
const entero = 42;
const decimal = 3.14;
const negativo = -10;
const infinito = Infinity;
console.log("Number:", entero, decimal, negativo);

// 3. Boolean (verdadero/falso)
const verdadero = true;
const falso = false;
console.log("Boolean:", verdadero, falso);

// 4. Undefined (sin asignar)
let sinValor;
console.log("Undefined:", sinValor); // undefined

// 5. Null (nulo intencionalmente)
const nulo = null;
console.log("Null:", nulo);

// 6. Object (objetos)
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};
console.log("Object:", persona);

// 7. Array (arreglos)
const numeros = [1, 2, 3, 4, 5];
console.log("Array:", numeros);

// ============================================
// VERIFICAR TIPO DE DATO
// ============================================

console.log("typeof texto:", typeof texto);
console.log("typeof edad:", typeof edad);
console.log("typeof verdadero:", typeof verdadero);
console.log("typeof persona:", typeof persona);
console.log("typeof numeros:", typeof numeros); // typeof array = "object"
console.log("typeof sinValor:", typeof sinValor);

// ============================================
// CONVERSIÓN DE TIPOS
// ============================================

const numero = "42";
console.log("String a Number:", Number(numero));
console.log("Number a String:", String(42));
console.log("Boolean:", Boolean(1)); // true
console.log("Boolean:", Boolean(0)); // false

console.log("\n✅ Fin de 01-variables.js\n");
