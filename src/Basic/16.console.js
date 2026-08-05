// console.log() example
console.log("Hello, World!");

// console.error() example
console.error("Este es un mensaje de error.");
console.error("error al conectarse a la base de datos", new Error("Error de conexión"));

//warn// 
console.warn("este es un mensaje de advertencia")

// info//
console.info("este es un mensaje de informacion")

//table//
const data = [
  { name: "Alejandro", age: 27 },
  { name: "jonathan", age: 31 },
  { name: "kathi", age: 29 }
];

console.table(data);

//time//
console.time("Tiempo de ejecución");
// ... código a medir ...
console.timeEnd("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
  // Simulación de trabajo
}

//assert//
const x = 5;
console.assert(x > 10, "x no es mayor que 10");

//clear//
// console.clear() example
//console.clear();