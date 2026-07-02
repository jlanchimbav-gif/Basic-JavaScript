// funciones en JavaScript //
// es un bloque de codigo que cumple con una tarea especifica //
// ayudan a cear programas mas simples y limpios //

function myfuction() {
    
}
for(let i=0;i<5;i++) {
    myfuction()
}

// funcion con parametros 

myfuction_saludo=function(name){
    console.log("hola",{name})
}
myfuction_saludo("Alejandro")

//funciones anomimas

const myfuction2= function(name){
    console.log("hola",{name})
}
myfuction2("Alejandro JaguarDev")

//funciones array

const myfuction3= (name) => [
    console.log("hola",{name})
]

// parametros por defecto
function defaultsum(a = 0, b = 0) {
    return a + b
}

console.log(defaultsum(5))      // 5 + 0 => 5
console.log(defaultsum(5, 10))  // 5 + 10 => 15

// retorno de valores
function Multiply(a, b) {
    return a * b
}
const result = Multiply(5, 10)
console.log(result) // 50

// funciones anidadas
function external() {
    console.log("Hola desde la funcion externa")
    function internal() {
        console.log("Hola desde la funcion interna")
    } 
    internal()
    }
    external()

// funciones de orden superior    
//functions de orden superior son aquellas que pueden recibir otras funciones como argumentos o devolver funciones como resultado.
//  Esto permite un mayor nivel de abstracción y flexibilidad en la programación.

function aplyfunct(funct,param) {
    return funct(param)
}
apylfunct(myfuction_saludo,"Alejandro JaguarDev")

// foreach
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
        console.log(number);
    });
    