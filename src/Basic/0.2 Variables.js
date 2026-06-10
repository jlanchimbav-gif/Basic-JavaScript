// Formas de crear variables //
// var, let, const //

// var: se puede reasignar y redeclarar
// Forma original de declarar variables en JavaScript
var name = "hello javaScript";
console.log(name); // Output: hello javaScript

// let: se puede reasignar pero no redeclarar
// Introducido en ES6, recomendado para la mayoría de los casos
let age = 30;
console.log(age); // Output: 30

// const: no se puede reasignar ni redeclarar
// Introducido en ES6, recomendado para variables que no deben cambiar
const PI = 3.14;
console.log(PI); // Output: 3.14