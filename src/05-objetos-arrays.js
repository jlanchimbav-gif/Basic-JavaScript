// ============================================
// 05 - OBJETOS Y ARRAYS
// ============================================

// ============================================
// OBJETOS - Creación y acceso
// ============================================
console.log("=== OBJETOS ===");

// Crear un objeto
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2023,
  color: "blanco",
  arrancar: function () {
    console.log("El coche está arranando...");
  }
};

// Acceso a propiedades
console.log("Marca:", coche.marca);           // Notación de punto
console.log("Modelo:", coche["modelo"]);      // Notación de corchetes

// Modificar propiedades
coche.color = "negro";
console.log("Color actualizado:", coche.color);

// Agregar nuevas propiedades
coche.velocidadMaxima = 180;
console.log("Velocidad máxima:", coche.velocidadMaxima);

// Eliminar propiedades
delete coche.velocidadMaxima;
console.log("¿Existe velocidadMaxima?:", coche.velocidadMaxima); // undefined

// Llamar métodos
coche.arrancar();

// ============================================
// OBJETOS - Constructor y new
// ============================================
console.log("\n=== CONSTRUCTOR DE OBJETOS ===");

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.presentarse = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 30);

persona1.presentarse(); // Hola, soy Ana
console.log(persona2.nombre); // Carlos

// ============================================
// OBJETOS - Object.keys, values, entries
// ============================================
console.log("\n=== MÉTODOS DE OBJETO ===");

const estudiante = {
  nombre: "María",
  carrera: "Ingeniería",
  semestre: 4
};

console.log("Claves:", Object.keys(estudiante));
console.log("Valores:", Object.values(estudiante));
console.log("Pares clave-valor:", Object.entries(estudiante));

// ============================================
// DESESTRUCTURACIÓN DE OBJETOS
// ============================================
console.log("\n=== DESESTRUCTURACIÓN DE OBJETOS ===");

const libro = {
  titulo: "Don Quijote",
  autor: "Cervantes",
  paginas: 1072,
  año: 1605
};

// Sin desestructuración
console.log(libro.titulo, libro.autor);

// Con desestructuración
const { titulo, autor, paginas } = libro;
console.log(titulo, autor, paginas);

// Con renombre
const { titulo: tit, autor: aut } = libro;
console.log(tit, aut);

// ============================================
// ARRAYS - Creación y métodos básicos
// ============================================
console.log("\n=== ARRAYS ===");

const numeros = [10, 20, 30, 40, 50];

console.log("Array:", numeros);
console.log("Primer elemento:", numeros[0]);
console.log("Último elemento:", numeros[numeros.length - 1]);
console.log("Longitud:", numeros.length);

// Modificar array
numeros[0] = 15;
console.log("Array modificado:", numeros);

// ============================================
// ARRAYS - Métodos push, pop, shift, unshift
// ============================================
console.log("\n=== MÉTODOS ARRAY - AGREGAR/QUITAR ===");

const frutas = ["manzana", "banana"];
console.log("Inicial:", frutas);

frutas.push("naranja");
console.log("Después de push:", frutas); // ["manzana", "banana", "naranja"]

const ultimaFruta = frutas.pop();
console.log("pop devuelve:", ultimaFruta); // "naranja"
console.log("Después de pop:", frutas);

frutas.unshift("uva");
console.log("Después de unshift:", frutas); // ["uva", "manzana", "banana"]

const primeraFruta = frutas.shift();
console.log("shift devuelve:", primeraFruta); // "uva"
console.log("Después de shift:", frutas);

// ============================================
// ARRAYS - Métodos concat, slice, splice
// ============================================
console.log("\n=== MÉTODOS ARRAY - MANIPULAR ===");

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("concat:", combined); // [1, 2, 3, 4]

const numArray = [10, 20, 30, 40, 50];
const parte = numArray.slice(1, 3);
console.log("slice(1,3):", parte); // [20, 30]

// splice - modifica el array original
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1); // Elimina 1 elemento desde índice 2
console.log("Después de splice:", nums); // [1, 2, 4, 5]

// ============================================
// ARRAYS - Métodos indexOf, includes
// ============================================
console.log("\n=== MÉTODOS ARRAY - BÚSQUEDA ===");

const colores = ["rojo", "azul", "verde"];

console.log("indexOf('azul'):", colores.indexOf("azul")); // 1
console.log("indexOf('amarillo'):", colores.indexOf("amarillo")); // -1

console.log("includes('rojo'):", colores.includes("rojo")); // true
console.log("includes('negro'):", colores.includes("negro")); // false

// ============================================
// ARRAYS - Métodos map, filter, reduce
// ============================================
console.log("\n=== MÉTODOS ARRAY - FUNCIONALES ===");

const numList = [1, 2, 3, 4, 5];

// map - transforma cada elemento
const cuadrados = numList.map((n) => n * n);
console.log("map (cuadrados):", cuadrados); // [1, 4, 9, 16, 25]

// filter - filtra elementos
const pares = numList.filter((n) => n % 2 === 0);
console.log("filter (pares):", pares); // [2, 4]

// reduce - acumula en un valor
const suma = numList.reduce((acum, n) => acum + n, 0);
console.log("reduce (suma):", suma); // 15

// ============================================
// ARRAYS - sort y reverse
// ============================================
console.log("\n=== MÉTODOS ARRAY - ORDEN ===");

const numeros2 = [5, 2, 8, 1, 9];
console.log("Original:", numeros2);
console.log("reverse:", [...numeros2].reverse()); // [9, 1, 8, 2, 5]

// sort (lexicográfico por defecto)
const sorted = [...numeros2].sort((a, b) => a - b);
console.log("sort (números):", sorted); // [1, 2, 5, 8, 9]

// ============================================
// ARRAYS - Desestructuración
// ============================================
console.log("\n=== DESESTRUCTURACIÓN DE ARRAYS ===");

const coloresArray = ["rojo", "verde", "azul"];
const [c1, c2, c3] = coloresArray;
console.log("Desestructurados:", c1, c2, c3);

const [primero, , tercero] = coloresArray; // Saltar el segundo
console.log("Saltando el segundo:", primero, tercero);

// ============================================
// SPREAD CON ARRAYS
// ============================================
console.log("\n=== SPREAD OPERATOR CON ARRAYS ===");

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const combinado = [...arr3, ...arr4];
console.log("Combinado con spread:", combinado); // [1, 2, 3, 4, 5, 6]

console.log("\n✅ Fin de 05-objetos-arrays.js\n");
