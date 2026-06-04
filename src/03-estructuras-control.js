// ============================================
// 03 - ESTRUCTURAS DE CONTROL
// ============================================

// ============================================
// CONDICIONALES - IF / ELSE
// ============================================
console.log("=== IF / ELSE ===");

const edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// IF - ELSE IF - ELSE
const calificacion = 7;

if (calificacion >= 9) {
  console.log("Sobresaliente");
} else if (calificacion >= 7) {
  console.log("Bien");
} else if (calificacion >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// ============================================
// SWITCH
// ============================================
console.log("\n=== SWITCH ===");

const dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día inválido";
}

console.log("Día:", nombreDia); // Miércoles

// ============================================
// BUCLES - FOR
// ============================================
console.log("\n=== BUCLE FOR ===");

console.log("Contador del 1 al 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// FOR con array
const frutas = ["manzana", "banana", "naranja"];
console.log("\nFrutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// ============================================
// BUCLES - WHILE
// ============================================
console.log("\n=== BUCLE WHILE ===");

let numero = 1;
console.log("Números mientras sea < 5:");
while (numero < 5) {
  console.log(numero);
  numero++;
}

// ============================================
// BUCLES - DO WHILE
// ============================================
console.log("\n=== BUCLE DO WHILE ===");

let contador = 1;
do {
  console.log("Contador:", contador);
  contador++;
} while (contador <= 3);

// ============================================
// BUCLES - FOR OF (para iterar sobre valores)
// ============================================
console.log("\n=== BUCLE FOR OF ===");

const numeros = [10, 20, 30];
for (const num of numeros) {
  console.log(num);
}

// ============================================
// BUCLES - FOR IN (para iterar sobre índices/keys)
// ============================================
console.log("\n=== BUCLE FOR IN ===");

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (const key in persona) {
  console.log(key + ": " + persona[key]);
}

// ============================================
// BREAK Y CONTINUE
// ============================================
console.log("\n=== BREAK Y CONTINUE ===");

console.log("Números con BREAK (hasta encontrar 5):");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("¡Encontramos 5! Salimos del bucle");
    break;
  }
  console.log(i);
}

console.log("\nNúmeros del 1 al 10, saltando los pares (CONTINUE):");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta a la siguiente iteración
  }
  console.log(i); // Solo imprime números impares
}

// ============================================
// BUCLES - MÉTODOS DE ARRAY
// ============================================
console.log("\n=== MÉTODOS DE ARRAY ===");

const numArray = [1, 2, 3, 4, 5];

// forEach - ejecuta función para cada elemento
console.log("forEach:");
numArray.forEach((num) => {
  console.log(num * 2);
});

// map - crea nuevo array transformado
console.log("\nmap (multiplica por 2):");
const duplicados = numArray.map((num) => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// filter - crea nuevo array filtrado
console.log("\nfilter (números > 2):");
const mayoresQue2 = numArray.filter((num) => num > 2);
console.log(mayoresQue2); // [3, 4, 5]

// find - encuentra el primer elemento que cumple
console.log("\nfind (primer número > 3):");
const encontrado = numArray.find((num) => num > 3);
console.log(encontrado); // 4

console.log("\n✅ Fin de 03-estructuras-control.js\n");
