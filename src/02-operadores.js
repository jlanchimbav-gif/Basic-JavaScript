// ============================================
// 02 - OPERADORES
// ============================================

// ============================================
// OPERADORES ARITMÉTICOS
// ============================================
console.log("=== OPERADORES ARITMÉTICOS ===");

const a = 10;
const b = 3;

console.log("Suma:", a + b);           // 13
console.log("Resta:", a - b);          // 7
console.log("Multiplicación:", a * b); // 30
console.log("División:", a / b);       // 3.333...
console.log("Módulo (resto):", a % b); // 1
console.log("Exponencia:", a ** 2);    // 100

// Incremento y Decremento
let contador = 5;
console.log("Incremento ++:", ++contador); // 6
console.log("Decremento --:", --contador); // 5

// ============================================
// OPERADORES DE COMPARACIÓN
// ============================================
console.log("\n=== OPERADORES DE COMPARACIÓN ===");

console.log("10 > 5:", 10 > 5);        // true
console.log("10 < 5:", 10 < 5);        // false
console.log("10 >= 10:", 10 >= 10);    // true
console.log("10 <= 5:", 10 <= 5);      // false
console.log("10 == '10':", 10 == '10');  // true (igual, sin tipos)
console.log("10 === '10':", 10 === '10'); // false (igual con tipos)
console.log("10 != '10':", 10 != '10');   // false
console.log("10 !== '10':", 10 !== '10'); // true

// ============================================
// OPERADORES LÓGICOS
// ============================================
console.log("\n=== OPERADORES LÓGICOS ===");

const x = true;
const y = false;

console.log("AND (&&):", x && y);  // false
console.log("OR (||):", x || y);   // true
console.log("NOT (!):", !x);       // false

// Ejemplo práctico
const edad = 25;
const tieneLicencia = true;

const puedeManejar = edad >= 18 && tieneLicencia;
console.log("¿Puede manejar?:", puedeManejar); // true

// ============================================
// OPERADORES DE ASIGNACIÓN
// ============================================
console.log("\n=== OPERADORES DE ASIGNACIÓN ===");

let valor = 10;
console.log("Valor inicial:", valor);

valor += 5;  // valor = valor + 5
console.log("Después de +=5:", valor);

valor -= 3;  // valor = valor - 3
console.log("Después de -=3:", valor);

valor *= 2;  // valor = valor * 2
console.log("Después de *=2:", valor);

valor /= 4;  // valor = valor / 4
console.log("Después de /=4:", valor);

// ============================================
// OPERADOR TERNARIO
// ============================================
console.log("\n=== OPERADOR TERNARIO ===");

const edadPersona = 20;
const mayor = edadPersona >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mayor); // Mayor de edad

// ============================================
// OPERADOR NULLISH COALESCING (??)
// ============================================
console.log("\n=== OPERADOR NULLISH COALESCING ??===");

const nombre = null;
const nombrePorDefecto = nombre ?? "Desconocido";
console.log(nombrePorDefecto); // Desconocido

// ============================================
// OPERADOR SPREAD (...)
// ============================================
console.log("\n=== OPERADOR SPREAD ===");

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log("Array con spread:", array2); // [1, 2, 3, 4, 5]

const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 };
console.log("Objeto con spread:", objeto2); // { a: 1, b: 2, c: 3 }

console.log("\n✅ Fin de 02-operadores.js\n");
