// Ejercicios de cadenas en JavaScript //

// 1. Escribe un programa que tome una cadena de texto y cuente el número de palabras que contiene.
let cadena = "Hola, ¿cómo estás?";
let palabras = cadena.split(" ");
console.log("Número de palabras: " + palabras.length);  

// 2. Escribe un programa que tome una cadena y convierta a mayusculas y minusculas.
let cadena2 = "Hola, ¿cómo estás?";
console.log("Mayusculas: " + cadena2.toUpperCase());
console.log("Minusculas: " + cadena2.toLowerCase());

// 3. Escribe un programa que tome una cadena y reemplace todas las vocales por el símbolo "*".
let cadena3 = "Hola, ¿cómo estás?";
let resultado = cadena3.replace(/[aeiouAEIOU]/g, "*");
console.log("Cadena con vocales reemplazadas: " + resultado);

// 4. Escribe un programa que tome una cadena y cuente el número de veces que aparece una letra específica.
let cadena4 = "Hola, ¿cómo estás?";
let letra = "o";
let contador = 0;   
for (let i = 0; i < cadena4.length; i++) {
    if (cadena4[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
    }
}
console.log("Número de veces que aparece la letra '" + letra + "': " + contador);

// 5 Comprueba si 2 strings son iguales 
let string1 = "Hola";
let string2 = "hola";   
if (string1.toLowerCase() === string2.toLowerCase()) {
    console.log("Los strings son iguales.");
} else {
    console.log("Los strings son diferentes.");
}   
