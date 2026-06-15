// Ejercicios de Operadores //

// 1 crea una variable para cada tipo de operacion arietmetica 
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 10 % 3;

2. // 2 imprime 5 comparacions verdaderas con diferentes operadores de comparacion
console.log(5 > 3); 
console.log(10 < 20);
console.log(7 >= 7);
console.log(15 <= 20);
console.log(8 === 8);

// 3 crea un ejercicio con el operador logico AND
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia === true);

// 4 crea un ejercicio con el operador logico OR
let clima = "soleado";
let temperatura = 30;
console.log(clima === "soleado" || temperatura > 25);


// 5 crea un ejercicio con el operador logico NOT
let esFinDeSemana = false;
console.log(!esFinDeSemana);    

//6 crea un ejercicio con el operador ternario
let hora = 14;
let mensaje = (hora < 12) ? "Buenos días" : "Buenas tardes";
console.log(mensaje);

//7 realiza un ejercicio conbinando operadores aritmeticos y de comparacion
let a = 10;
let b = 5;
let resultado = (a + b) > 12;
console.log(resultado);

//8 crea un ejercicio conbinando  operadores  de comparacion y logicos
let temperatura2 = 25;
let clima2 = "nublado";
let esAgradable = (temperatura2 > 20 && clima2 === "soleado") || (temperatura2 > 15 && clima2 === "nublado");
console.log(esAgradable);

