// ============================================
// 04 - FUNCIONES
// ============================================

// ============================================
// DECLARACIÓN DE FUNCIÓN
// ============================================
console.log("=== DECLARACIÓN DE FUNCIÓN ===");

function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

saludar("María");
saludar("Pedro");

// Función con retorno
function suma(a, b) {
  return a + b;
}

const resultado = suma(5, 3);
console.log("Suma 5 + 3 =", resultado); // 8

// ============================================
// FUNCIÓN EXPRESIÓN (Variable que contiene una función)
// ============================================
console.log("\n=== FUNCIÓN EXPRESIÓN ===");

const multiplicar = function (x, y) {
  return x * y;
};

console.log("Multiplicar 4 * 7 =", multiplicar(4, 7)); // 28

// ============================================
// ARROW FUNCTIONS (Funciones flecha)
// ============================================
console.log("\n=== ARROW FUNCTIONS ===");

const restar = (a, b) => {
  return a - b;
};

console.log("Restar 10 - 3 =", restar(10, 3)); // 7

// Arrow function con sintaxis corta (una línea)
const cuadrado = (x) => x * x;
console.log("Cuadrado de 5 =", cuadrado(5)); // 25

// Arrow function sin parámetros
const saludarGeneral = () => "¡Hola a todos!";
console.log(saludarGeneral());

// Arrow function con un solo parámetro (sin paréntesis)
const doble = x => x * 2;
console.log("Doble de 6 =", doble(6)); // 12

// ============================================
// PARÁMETROS POR DEFECTO
// ============================================
console.log("\n=== PARÁMETROS POR DEFECTO ===");

function presentarse(nombre = "Desconocido", edad = 0) {
  console.log(`${nombre} tiene ${edad} años`);
}

presentarse("Juan", 30);   // Juan tiene 30 años
presentarse("Ana");        // Ana tiene 0 años
presentarse();             // Desconocido tiene 0 años

// ============================================
// REST PARAMETERS (...) - Número indefinido de argumentos
// ============================================
console.log("\n=== REST PARAMETERS ===");

function sumarTodos(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

console.log("Suma de 1, 2, 3, 4, 5:", sumarTodos(1, 2, 3, 4, 5)); // 15
console.log("Suma de 10, 20:", sumarTodos(10, 20)); // 30

// ============================================
// DESESTRUCTURACIÓN DE PARÁMETROS
// ============================================
console.log("\n=== DESESTRUCTURACIÓN ===");

const persona = {
  nombre: "Luis",
  edad: 28,
  ciudad: "Barcelona"
};

// Sin desestructuración
function mostrarPersona(p) {
  console.log(p.nombre, p.edad);
}

// Con desestructuración
function mostrarPersonaDesestructurado({ nombre, edad }) {
  console.log(nombre, edad); // Luis 28
}

mostrarPersonaDesestructurado(persona);

// ============================================
// FUNCIONES ANIDADAS
// ============================================
console.log("\n=== FUNCIONES ANIDADAS ===");

function externa(x) {
  function interna(y) {
    return x + y;
  }
  return interna(5);
}

console.log("Función anidada:", externa(10)); // 15

// ============================================
// CLOSURE (Clausura)
// ============================================
console.log("\n=== CLOSURE ===");

function crearContador(inicio = 0) {
  let contador = inicio;
  
  return function () {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();
console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 1:", contador1()); // 3

const contador2 = crearContador(100);
console.log("Contador 2:", contador2()); // 101

// ============================================
// FUNCIONES DE ORDEN SUPERIOR (Callbacks)
// ============================================
console.log("\n=== FUNCIONES DE ORDEN SUPERIOR ===");

function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

const sumar = (x, y) => x + y;
const restarOp = (x, y) => x - y;

console.log("Aplicar suma:", aplicarOperacion(10, 3, sumar)); // 13
console.log("Aplicar resta:", aplicarOperacion(10, 3, restarOp)); // 7

// ============================================
// MÉTODOS DE ARRAY CON FUNCIONES
// ============================================
console.log("\n=== MÉTODOS DE ARRAY ===");

const edades = [15, 22, 18, 30, 17, 25];

// some - ¿Alguno cumple la condición?
const hayMayores = edades.some((edad) => edad >= 18);
console.log("¿Hay mayores de edad?:", hayMayores); // true

// every - ¿Todos cumplen la condición?
const todosMayores = edades.every((edad) => edad >= 18);
console.log("¿Todos mayores de edad?:", todosMayores); // false

// reduce - Acumular/Reducir a un valor
const sumaTotal = edades.reduce((acumulador, edad) => {
  return acumulador + edad;
}, 0);
console.log("Suma de todas las edades:", sumaTotal); // 127

console.log("\n✅ Fin de 04-funciones.js\n");
