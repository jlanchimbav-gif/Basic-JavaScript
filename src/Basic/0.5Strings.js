// Strings en JavaScript 
// Las cadenas de texto se pueden crear utilizando comillas simples, dobles o backticks (plantillas literales).

// Concatenación de cadenas
let nombre = "Jaguar";
let saludo = "hola"+ " " + nombre;
let mensaje = nombre + " " + saludo;
console.log(mensaje);

//longitud de una cadena
let longitud = mensaje.length;
console.log("La longitud del mensaje es: " + longitud); 

//Acceso a caracteres individuales
let primerCaracter = mensaje[0];
let ultimoCaracter = mensaje[mensaje.length - 1];
console.log("Primer caracter: " + primerCaracter);
console.log("Último caracter: " + ultimoCaracter);

// Métodos de cadenas
let texto = "JavaScript es un lenguaje de programación.";
console.log(texto.toUpperCase());       
console.log(texto.toLowerCase());
console.log(texto.includes("lenguaje"));
console.log(texto.replace("JavaScript", "JS"));
console.log(texto.split(" ")); // Divide el texto en un array de palabras
